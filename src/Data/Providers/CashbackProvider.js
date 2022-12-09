import client from "../../HHTP/client";

export default class CashbackProvider{
  static async addCashback(body) {
    return await client.post("/cashback/addCashback", body);
  }
  static async getAllCashback() {
    return await client.get("/cashback/getCashbacks");
  }
  static async getCashbackRules() {
    return await client.get("/cashback/getCashbackRules");
  }
  static async addCashbackRule(body) {
    return await client.post("/cashback/addCashbackRule", body);
  }
  static async deleteCashbackRule(id) {
    return await client.delete(`/cashback/deleteCashbackRule/${id}`);
  }
  static async getCarTypes() {
    return await client.get("/cashback/carTypes");
  }
  // static async getOneCashback() {
  //   return await client.get("/cashback/getCashbacks");
  // }
}
