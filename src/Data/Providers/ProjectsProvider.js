import client from "../../HHTP/client";

export default class ProjectsProvider{
    static async addProject(body) {
        return await client.post("/project/add", body);
    }
    static async getAllProjects() {
        return await client.get("/project");
    }

    static async getRecentOperations() {
        return await client.get("/project/getRecentOperations");
    }

    static async getShifts(date, projectId, take, skip) {
        return await client.get(`/project/getShifts?date=${date ?? ""}&projectId=${projectId ?? ""}&take=${take ?? ""}&skip=${skip ?? ""}`);
    }

    static async getProjectsWithPnl() {
        return await client.get("/project/getProjectsWithPnl");
    }

    static async getAllIncomeOutcomes(params) {
        const {
            startDate,
            endDate
        } = params
        return await client.get(`/project/getAllIncomeOutcomes?${startDate ? `&startDate=${startDate}` : ""}${endDate ? `&endDate=${endDate}` : ""}`);
    }

    static async deleteProject(id) {
        return await client.delete(`/project/delete/${id}`);
    }

    static async getOutcomesStructure() {
        return await client.get("/project/getOutcomesStructure?operationType=OUTCOME");
    }
    static async getIncomesStructure() {
        return await client.get("/project/getOutcomesStructure?operationType=INCOME");
    }
    static async getShiftsForGraph() {
        return await client.get("/project/getShiftsForGraph");
    }
    static async getProjectsStatistics(params) {
        const {
            startDate,
            endDate
        } = params
        return await client.get(`/project/getProjectsStatistics?${startDate ? `&startDate=${startDate}` : ""}${endDate ? `&endDate=${endDate}` : ""}`);
    }

}
