import client from "../../HHTP/client";

export default class GasBallonsProvider {
  static async addGasColumn(body) {
    return await client.post("/gascolumn/addGasColumn", body);
  }

  static async addGasColumnReport(body) {
    return await client.post("/gascolumn/addGasColumnReports", body);
  }

  static async editGasColumn(body) {
    return await client.post("/gas-column/editGasColumn", body);
  }

  static async getGasColums(page = 0, size = 10) {
    return await client.get(`/gascolumn/getGasColumns?skip=${page}&take=${size}`);
  }

  static async getGasColumsByOutlet(outletId) {
    return await client.get(`/gascolumn/getGasColumnsByOutlet/${outletId}`);
  }

  static async getGasColumsReports(params, page = 0, size = 10) {
    const {outletId, gasColumnId, startDate, endDate} = params;
    return await client.get(`gascolumn/getGasColumnReports?take=${size}&skip=${page}${outletId ? `&outletId=${outletId}` : ""}${gasColumnId ? `&colId=${gasColumnId}` : ""}${startDate ? `&startDate=${startDate}` : ""}${endDate ? `&endDate=${endDate}` : ""}`);
  }
}
