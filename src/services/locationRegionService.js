import axios from 'axios';

class LocationRegionService {
  static getAllProvinces() {
    return axios.get('https://vapi.vnappmob.com/api/province/');
  }

  static getById(id) {
    return axios.get(`https://vapi.vnappmob.com/api/province/${id}`);
  }
  static getDistrictsByProvinceId(provinceId) {
    return axios.get(`https://vapi.vnappmob.com/api/province/district/${provinceId}`);
  }

  static getWarsByDistrictId(districtId) {
    return axios.get(`https://vapi.vnappmob.com/api/province/ward/${districtId}`);
  }
}


export default LocationRegionService;
