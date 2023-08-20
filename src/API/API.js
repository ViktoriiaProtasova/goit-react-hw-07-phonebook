import axios from 'axios';

axios.defaults.baseURL = 'https://64d7333b2a017531bc13083b.mockapi.io';

export const getAllContacts = async () => {
  const { data } = await axios('/contacts');
  console.log(data);
  return data;
};

export const setContact = async () => {
  const { data } = await axios.post(`/contacts`);
  return data;
};

export const removeContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};
