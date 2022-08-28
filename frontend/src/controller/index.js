import api from "../services/api";

export function create(params) {
    api.post("/create", params);
}

export function update(params) {
    api.post("/update", params);
}

export async function remove(params) {
    let res = await api.post("/delete", params);
    return res;
}

export async function view() {
    let res = await api.get("/view");
    return res;
}

export async function find(params) {
    let res = await api.post("/find", params);
    return res;
}