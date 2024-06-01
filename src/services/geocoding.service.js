const opencage = require("opencage-api-client");

class GeocodingService {
  static async findByAddress(address) {
    try {
      const response = await opencage.geocode({
        q: address + ", Huế",
        language: "vn",
      });
      const { results } = response;
      const place = results[0];
      console.log("CHECK PLACE:: ", place);
      const placeObj = {
        name: `${place?.formatted}`,
        geometry: place.geometry,
        road: place.components.road,
        suburb: place.components.suburb,
        city: place.components.city,
        country: place.components.country,
      };

      return placeObj;
    } catch (error) {
      throw new Error("Sai địa chỉ, mời nhập lại");
    }
  }
}

module.exports = GeocodingService;
