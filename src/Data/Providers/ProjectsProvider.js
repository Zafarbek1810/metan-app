import client from "../../HHTP/client";

export default class ProjectsProvider{
    static async addProject(body) {
        return await client.post("/project/add", body);
    }
    static async getAllProjects() {
        return await client.get("/project");
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

}
