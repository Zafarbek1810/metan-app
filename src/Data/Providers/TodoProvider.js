import client from "../../HHTP/client";

export default class TodoProvider {
    static async addToDo(body) {
        return await client.post("/todo/add", body);
    }

    static async deleteToDo(id) {
        return await client.delete(`/todo/delete/${id}`);
    }

    static async getTodo(page = 1,  {projectId,  startDate, endDate, counterpartyId} = {})
{
    const params = {
        take: "20",
        skip: 20 * (page - 1),
        projectId,
        counterpartyId,
        startDate,
        endDate,
    }
    return await client.get(`/todo`, {params});
}

    static async getTodoForDashboard(page = 0, size = 20) {
        return await client.get(`/todo?skip=${page}&take=${size}&status=UNCHECK&sort=ASC&forDashboard=true`);
    }

    static async changeTodoStatus(id , status) {
        return await client.get(`/todo/finish/${id}/${status}`);
    }


}