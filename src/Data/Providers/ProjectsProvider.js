import client from "../../HHTP/client";

export default class ProjectsProvider{
    static async addProject(body) {
        return await client.post("/project/add", body);
    }
    static async getAllProjects() {
        return await client.get("/project");
    }

}
