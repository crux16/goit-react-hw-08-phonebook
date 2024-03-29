import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

/*
 * GET @ /contacts
 */
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /contacts
 * body: { name, number }
 */
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(`${name} is successfully added`)
      return response.data;
    } catch (error) {
      toast.error(`Incorrect input name or number`);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /contacts/id
 * body: { name, number }
 */
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number, current }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${id}`, { name, number });
      if(name)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * DELETE @ /contacts/:id
 */
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
