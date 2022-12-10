import client from "../../HHTP/client";

export default class PaymentProvider{
  static async getAllCheques(page = 0, size = 10, sort = "asc") {
    return await client.get(`/payment/getCheques?page=${page}&size=${size}&sort=${sort}`);
  }
  static async getQrInfo(id=0, plateNum="") {
    let query = id ? `qrCode=${id}`: `plateNumber=${plateNum}`;
    return await client.get(`payment/getQrInfo?${query}`);
  }
  static async pay(body) {
    return await client.post(`payment/pay`, body);
  }
  static async addDebt(body) {
    return await client.post(`payment/addDebt`, body);
  }
}
