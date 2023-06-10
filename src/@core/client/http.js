import axios from "axios";
import {BASE_URL} from "@core/configs/config";

export default axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     Accept: "text/plain",
    //     "Content-Type": "application/json",
    // },
});
