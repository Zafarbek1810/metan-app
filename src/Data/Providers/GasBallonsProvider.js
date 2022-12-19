import client from "../../HHTP/client";

export default class GasBallonsProvider {
  static async addGasColumn(body) {
    return await client.post("/gascolumn/addGasColumn", body);
  }

  static async addGasColumnReport(body) {
    return await client.post("/gascolumn/addGasColumnReports", body);
  }

  static async editGasColumn(body) {
    return await client.post("/gascolumn/editGasColumn", body);
  }

  static async getGasColums(page = 0, size = 10, params) {
    const {outletId} = params;
    return await client.get(`/gascolumn/getGasColumns?skip=${page*size}&take=${size}${outletId ? `&outletId=${outletId}` : ""}`);
  }

  static async getGasColumsByOutlet(outletId) {
    return await client.get(`/gascolumn/getGasColumnsByOutlet/${outletId}`);
  }

  static async getGasColumsReports(page = 0, size = 10, params) {
    const {outletId, gasColumnId, startDate, endDate} = params;
    return await client.get(`gascolumn/getGasColumnReports?take=${size}&skip=${page*size}${outletId ? `&outletId=${outletId}` : ""}${gasColumnId ? `&colId=${gasColumnId}` : ""}${startDate ? `&startDate=${startDate}` : ""}${endDate ? `&endDate=${endDate}` : ""}`);
  }
}
