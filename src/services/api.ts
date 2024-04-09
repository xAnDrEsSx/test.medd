// Axios
import axios from "axios";

// Config
import { NEXT_URL_API } from "@configs/env";

// Hooks
import useLocalStorage from "@hooks/useLocalStorage";

export const api = axios.create({
    baseURL: NEXT_URL_API,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const [token] = useLocalStorage("accessToken");

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
