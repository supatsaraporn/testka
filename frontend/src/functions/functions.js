import axios from "axios";

const apiHost = "https://commath-server.herokuapp.com";

export const getB2s = (b2s) => {
    return axios
        .get(apiHost + `/b2s/${b2s}`)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            return 'คํานวณผิดพลาด โปรดตรวจสอบข้อมูลให้ถูกต้อง'
        });
};

export const getElimination = (data) => {
    console.log("this is a data" ,data)
    return axios
        .post(apiHost + `/elimination`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getInterpolation = (data) => {
    console.log(data)
    return axios
        .post(apiHost + `/interpolation`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getDifferentiation = (data) => {
    return axios
        .post(apiHost + `/differentiation`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getIntegration = (data) => {
    return axios
        .post(apiHost + `/integration`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};

export const getRootFinding = (data) => {
    return axios
        .post(apiHost + `/root-finding`, data)
        .then(response => {
            console.log(response.data);
            return response.data;
        })
        .catch(err => {
            console.log(err);
        });
};
