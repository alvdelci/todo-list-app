import api from "../services/api";

export function create(params) {
    api.post("/create", params);
}

export function update(params) {
    api.post("/update", params);
}

export function remove(params) {
    api.post("/delete", params);
}

export async function view() {
    let res = await api.get("/view");
    return res;
}