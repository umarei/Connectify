import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5055/api';

export const getAllContacts = async () => {
  const response = await axios.get(`${API_URL}/contacts`);
  return response.data.data;
};

export const addContact = async (contact) => {
  await axios.post(`${API_URL}/contacts`, contact);
};

export const updateContact = async (id, contact) => {
  await axios.put(`${API_URL}/contacts/${id}`, contact);
};

export const deleteContact = async (id) => {
  await axios.delete(`${API_URL}/contacts/${id}`);
};
