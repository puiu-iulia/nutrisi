import { createSlice, createAction } from '@reduxjs/toolkit'
import { AuthState } from '../../types/types'
import { RootState } from '../store'

const initialState: AuthState = {
    token: null,
}

export const setAuthData = createAction<AuthState>('setAuthData')
export const logout = createAction('logout')

const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setAuthData, (state, action) => {
          state.token = action.payload.token
        });
        builder.addCase(logout, () => {
          return initialState;
        })
    },
})

export const authActions = authSlice.actions
export default authSlice