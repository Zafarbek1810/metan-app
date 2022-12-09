import client from "../../HHTP/client";

export default class CashbackProvider{
  static async addCashback(body) {
    return await client.post("/cashback/addCashback\n", body);
  }
  static async getAllCashback() {
    return await client.get("/cashback/getCashbacks");
  }

}