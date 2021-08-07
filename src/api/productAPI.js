import instance from "./instance";

export const getAll = () => {
  const url = "/products?_expand=category";
  return instance.get(url);
};
export const get = (id) => {
  const url = `/664/products/${id}`;
  return instance.get(url);
};
export const remove = (id) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
export const edit = (item) => {
  const url = `/products/${item.id}`;
  return instance.put(url, item);
};
export const add = (item) => {
  const url = "/products";
  return instance.post(url, item);
};
export const search = (keyword) => {
  const url = `/products?_expand=category&name_like=${keyword}`;
  return instance.get(url);
};