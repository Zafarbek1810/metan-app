import client from "../../HHTP/client";

export default class PaymentProvider{
  static async getAllCheques(page = 0, size = 10, sort = "asc") {
    return await client.get(`/payment/getCheques?page=${page}&size=${size}&sort=${sort}`);
  }

}