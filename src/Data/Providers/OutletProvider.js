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
  static async addCashierOutlet(body) {
    return await client.post("/outlet/addCashier", body);
  }
  static async deleteCashierOutlet(body) {
    return await client.delete("/outlet/removeCashier", {
      data: body
    });
  }
  static async addDirektorOutlet(body) {
    return await client.post("/outlet/addDirector", body);
  }
  static async deleteDirektorOutlet(body) {
    return await client.delete(`/outlet/removeDirector`, {
      data: body
    });
  }
  static async updateOutlet(body) {
    return await client.post("/outlet/editOutlet", body);
  }


  static async addExpence(body) {
    return await client.post("/outlet/addExpense", body);
  }
  static async getExpenses(page = 0, size = 10) {
    return await client.get(`/outlet/getExpenses?skip=${page}&take=${size}`);
  }
}