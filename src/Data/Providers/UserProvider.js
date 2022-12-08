import client from "../../HHTP/client";

export default class UserProvider {
  static async createDirector(body) {
    return await client.post("/admin/addDirector", body);
  }
  static async updateDirector(body) {
    return await client.post("/admin/addDirector", body);
  }
  static async getAllDirectors(page = 0, size = 10, sort = "asc") {
    return await client.get(`/admin/directors?page=${page}&size=${size}&sort=${sort}`);
  }
  static async createCashier(body) {
    return await client.post("/admin/addCashier", body);
  }
  static async updateCashier(body) {
    return await client.post("/admin/editAdmin", body);
  }
  static async updateDirector(body) {
    return await client.post("/admin/editAdmin", body);
  }
  static async getAllCashiers(page = 0, size = 10, sort = "asc") {
    return await client.get(`/admin/cashiers?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getMe(body) {
    return await client.get("/admin/getme", body);
  }

}
