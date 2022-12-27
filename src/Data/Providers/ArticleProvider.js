import client from "../../HHTP/client";

export default class ArticleProvider{
  static async getAll() {
    return await client.get("/project/articles");
  }
  static async add(body) {
    return await client.post("/project/addArticle", body);
  }
  static async delete(title) {
    return await client.delete(`/project/delete/article/${title}`);
  }
}
