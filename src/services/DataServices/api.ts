import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://ec2-3-93-58-72.compute-1.amazonaws.com/api/'}),
    endpoints: builder => ({
        createUser: builder.mutation({
            query: authCredentials => ({
                url: 'users/create',
                method: 'POST',
                body: authCredentials
            })
        }),
        loginUser: builder.mutation({
            query: authCredentials => ({
                url: 'users/token',
                method: 'POST',
                body: authCredentials
            })
        })
    })
})