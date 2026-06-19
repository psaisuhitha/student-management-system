import axios from "axios";

const API = axios.create({
  baseURL: "https://student-management-system-j69v.onrender.com/api"
});

export const getAllStudents = () => API.get("/students");
export const getStudent = (id) => API.get(`/students/${id}`);
export const createStudent = (data) => API.post("/students", data);
export const updateStudent = (id, data) => API.put(`/students/${id}`, data);
export const deleteStudent = (id) => API.delete(`/students/${id}`);