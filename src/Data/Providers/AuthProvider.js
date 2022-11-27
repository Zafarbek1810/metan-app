import client from "../../HHTP/client";

class AuthProvider{
  static async login (body){
    return await client.post("/admin/signIn", body);
  }
}

export default AuthProvider;