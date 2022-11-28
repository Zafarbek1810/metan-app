import client from "../../HHTP/client";

class AuthProvider{
  static async login (body){
    console.log(body);
    return await client.post("/admin/signIn", body);
    client.post("/admin/signIn", body, {method: "POST"})
  }
}

export default AuthProvider;