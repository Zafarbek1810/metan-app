import client from "../../HHTP/client";

export default class GasBallonsProvider{
  static async addGasColumn(body) {
    return await client.post("/gascolumn/addGasColumn", body);
  }
  static async getGasColums(page = 0, size = 10) {
    return await client.get(`/gascolumn/getGasColumns?skip=${page}&take=${size}`);
  }
}