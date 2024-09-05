import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const backendUrl = 'https://66d9a53a4ad2f6b8ed557fa1.mockapi.io/contacts'

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get(backendUrl)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
  try {
    const response = await axios.post(backendUrl, newContact)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
  try {
    await axios.delete(`${backendUrl}/${contactId}`)
    return contactId
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})