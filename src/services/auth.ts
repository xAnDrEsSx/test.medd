// Axios
import axios from "axios";

export async function login(data: DtoLogin) {
    return await axios.post("/login", data);
}
