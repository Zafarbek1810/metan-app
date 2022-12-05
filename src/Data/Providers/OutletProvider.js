import client from "../../HHTP/client";

export default class OutletProvider{
  static async addOutlet(body) {
    return await client.post("/outlet/addOutlet", body);
  }
  static async getAllOutlets(page = 0, size = 10, sort = "asc") {
    return await client.get(`/outlet/getOutlets?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getOneOutlet(outletId) {
    return await client.get(`/outlet/getOutlets/${outletId}`);
  }
  static async getOneFullOutlet(id) {
    return await client.get(`/outlet/getOutlet/${id}`);
  }
  static async deleteOutlet(id) {
    return await client.delete(`/outlet/deleteOutlet/${id}`);
  }
}