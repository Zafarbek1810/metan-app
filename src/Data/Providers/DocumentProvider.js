import client from "../../HHTP/client";

export default class DocumentProvider {
    static async createDocument(body) {

        // axios({
        //     method: "post",
        //     url: "myurl",
        //     data: bodyFormData,
        //     headers: { "Content-Type": "multipart/form-data" },
        //   })
        //     .then(function (response) {
        //       //handle success
        //       console.log(response);
        //     })
        //     .catch(function (response) {
        //       //handle error
        //       console.log(response);
        //     });
        console.log(client.headers);
        console.log(body);
        return await client.post("/document", body, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
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
