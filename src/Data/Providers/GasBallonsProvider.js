import client from "../../HHTP/client";

export default class GasBallonsProvider{
  static async addGasColumn(body) {
    return await client.post("/gas-column/addGasColumn", body);
  }
  static async getGasColums(page = 0, size = 10) {
    return await client.get(`/gas-column/getGasColumns?skip=${page}&take=${size}`);
  }
}