import * as ax from "axios";
export const BASE_URL = "https://abc-limo-server.watemtrade.com/";
const axios = ax.default.create({
  baseURL: BASE_URL,
});
export async function getVehicles(page = 1, limit = 10) {
  const { data } = await axios.get(`/vehicle?page=${page}&limit=${limit}`);
  return data;
}

export async function getVehicle(id: any) {
  const { data } = await axios.get(`/vehicle/${id}`);
  return data;
}
export async function getBlogs(page = 1, limit = 3) {
  const { data } = await axios.get(`/blog?page=${page}&limit=${limit} `);
  return data;
}
export async function getServices(page = 1, limit = 3) {
  const { data } = await axios.get(`/services?page=${page}&limit=${limit} `);
  return data;
}

export async function getBlog(id: any) {
  const { data } = await axios.get(`/blogs/${id}`);
  return data;
}
export async function getService(id: any) {
  const { data } = await axios.get(`/services/${id}`);
  return data;
}

export async function contactFormMail(body: any) {
  const { data } = await axios.post(`/mail`, body);
  return data;
}

export async function postReservation(body: any) {
  const { data } = await axios.post(`/book`, body);
  return data;
}
export async function postComment(body: any) {
  const { data } = await axios.post(`/comment`, body);
  return data;
}
export async function getComments(blogId: any, page = 1, limit = 5) {
  const { data } = await axios.get(
    `/comment/${blogId}?page=${page}&limit=${limit} `
  );
  return data;
}
