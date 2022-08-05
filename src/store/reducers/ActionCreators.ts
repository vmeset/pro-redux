import { userSlice } from './UserSlice';
import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         setTimeout(() => {
//             dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//         }, 900)
//     } catch (e) {
//         dispatch(userSlice.actions.usersFetchingError('fetch users error'))
//         // dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
    async(_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data
        } catch(e) {
            return thunkAPI.rejectWithValue('fetch users error')
        }
    }
)