import client from "../../HHTP/client";

export default class DocumentProvider {
    static async createDocument(body) {
        return await client.post("/document", body);
    }
    static async getAllDocument() {
        return await client.get(`/document`);
    }

    static async getDocumentTypes() {
        return await client.get(`/document/documentTypes`);
    }

    static async deleteDocument(id) {
        return await client.delete(`/document/delete/${id}`);
    }

}
