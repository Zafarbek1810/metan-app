import client from "../../HHTP/client";

export default class OperationProvider{
  static async getAll(page = 1, {articleId, projectId, operationType, startDate, endDate, currency} = {}) {
    const params = {
      take: "20",
      skip: 20 * (page - 1),
      articleId,
      projectId,
      operationType,
      startDate,
      endDate,
      currency
    }
    return await client.get("/project/getOperations", {params});
  }

  static async deleteOperation(id) {
    return await client.delete(`/project/operation/delete/${id}`);
  }

  static async addIncome(body) {
    return await client.post("/project/addIncome", body);
  }

  static async addOutcome(body) {
    return await client.post("/project/addOutcome", body);
  }
}
