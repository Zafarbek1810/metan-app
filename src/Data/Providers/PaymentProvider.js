import client from "../../HHTP/client";

export default class PaymentProvider {
  static async getAllCheques(page = 0, size = 20, {cashierId, outletId} = {}) {
    const params = {
      outletId,
      cashierId,
      skip: page * size,
      take: size,
    }

    return await client.get(`/payment/getCheques`, {
      params
    });
  }

  static async getQrInfo(id = 0, plateNum = "") {
    let query = id ? `qrCode=${id}` : `plateNumber=${plateNum}`;
    return await client.get(`payment/getQrInfo?${query}`);
  }

  static async pay(body) {
    return await client.post(`payment/pay`, body);
  }

  static async payByPoints(body) {
    return await client.post(`payment/payByPoints`, body);
  }

  static async addDebt(body) {
    return await client.post(`payment/addDebt`, body);
  }

  static async getDeptors(page = 0, size = 10) {
    return await client.get(`/payment/getDebtors?skip=${page * size}&take=${size}`);
  }
}
