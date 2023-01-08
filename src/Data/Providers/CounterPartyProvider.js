import client from "../../HHTP/client";

export default class CounterPartyProvider {
    static async createCounterParty(body) {
        return await client.post("/admin/addCounterparty", body);
    }
    // static async updateDirector(body) {
    //     return await client.post("/admin/addDirector", body);
    // }

    // static async getAllCounterParty(page = 0, size = 10, sort = "asc") {
    //     return await client.get(`/admin/counterparties?page=${page}&size=${size}&sort=${sort}`);
    // }
    static async getAllCounterParty() {
        return await client.get(`/admin/counterparties`);
    }



}
