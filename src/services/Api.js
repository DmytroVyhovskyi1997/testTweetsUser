import axios from 'axios';

axios.defaults.baseURL = 'https://64569df22e41ccf1692184cc.mockapi.io/users';
export const fetchUsers = async page => {
  const { data } = await axios.get(`/users?page=${page}&limit=3`);
  return data;
};
