import axios from "axios";

export const axiosWithAuth = () => {
    return axios.create({

        baseURL: "https://bw-weight-lifting-journal-01.herokuapp.com/",
        headers: {
            Authorization: localStorage.getItem("token")
        }
    });
};