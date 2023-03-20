import {
    createSelector,
    createEntityAdapter
} from '@reduxjs/toolkit'
import { apiSlice } from '../../app/api/apiSlice'

const spaceProvidersAdapter = createEntityAdapter({})
const initialState = spaceProvidersAdapter.getInitialState()

const spaceProvidersApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getSpaceProviders: build.query({
            query: () => '/space-providers',
            validateStatus: (response, result) => {
                return response.status === 200 && !result.isError
            },
            // only in dev
            keepUnusedDataFor: 5,
            transformResponse: responseData => {
                const loadedSpaceProviders = responseData.map(spaceProvider => {
                    spaceProvider.id = spaceProvider._id
                    return spaceProvider
                });
                return spaceProvidersAdapter.setAll(initalState, loadedSpaceProviders)
            },
            providesTags: (result, error, arg) => {
                if (results?.ids) {
                    return [
                        { type: 'SpaceProvider', id: 'LIST' },
                        ...result.ids.map( id => ({ type: 'User', id }))
                    ]
                } else return { type: 'SpaceProvider', id: 'LIST' }
            }
        })
    })
})

export const {
    useGetSpaceProvidersQuery
} = spaceProvidersApiSlice 

// return the query result object
export const selectSpaceProvidersResult = spaceProvidersApiSlice.endpoints.getSpaceProviders.select()

 