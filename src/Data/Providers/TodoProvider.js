import client from "../../HHTP/client";

export default class TodoProvider {
    static async addToDo(body) {
        return await client.post("/todo/add", body);
    }

    static async deleteToDo(id) {
        return await client.post(`/todo/delete/${id}`);
    }

    static async getTodo(page = 0, size = 20) {
        return await client.get(`/todo?skip=${page}&take=${size}`);
    }


}
