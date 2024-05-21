import axios, { AxiosResponse } from "axios";
import { ID, Response } from "../../../../../../../_metronic/helpers";
import { Product, ProductsQueryResponse } from "./_models";

// const API_URL = import.meta.env.VITE_APP_THEME_API_URL;
// const USER_URL = `${API_URL}/user`;
// const GET_USERS_URL = `${API_URL}/users/query`;
const API_URL = 'http://127.0.0.1:8000/api/v2'
const PRODUCT_URL = `${API_URL}/products`;
const GET_PRODUCT_URL = `${API_URL}/products`;

const getProducts = (query: string): Promise<ProductsQueryResponse> => {
  return axios
    .get(`${GET_PRODUCT_URL}?${query}`)
    .then((d: AxiosResponse<ProductsQueryResponse>) => d.data);
};

const getProductById = (id: ID): Promise<Product | undefined> => {
  return axios
    .get(`${PRODUCT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Product>>) => response.data)
    .then((response: Response<Product>) => response.data);
};

// const createUser = (user: User): Promise<User | undefined> => {
//   return axios
//     .put(USER_URL, user)
//     .then((response: AxiosResponse<Response<User>>) => response.data)
//     .then((response: Response<User>) => response.data);
// };

// const updateUser = (user: User): Promise<User | undefined> => {
//   return axios
//     .post(`${USER_URL}/${user.id}`, user)
//     .then((response: AxiosResponse<Response<User>>) => response.data)
//     .then((response: Response<User>) => response.data);
// };

// const deleteUser = (userId: ID): Promise<void> => {
//   return axios.delete(`${USER_URL}/${userId}`).then(() => {});
// };

// const deleteSelectedUsers = (userIds: Array<ID>): Promise<void> => {
//   const requests = userIds.map((id) => axios.delete(`${USER_URL}/${id}`));
//   return axios.all(requests).then(() => {});
// };

export {
  getProducts,
  // deleteUser,
  // deleteSelectedUsers,
  getProductById,
  //  createUser,
  // updateUser,
};
