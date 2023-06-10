import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    modal: null,
}
const appSlice = createSlice({
    name: 'food',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.modal = action?.payload;
        },
    },
})
export const {setModal} = appSlice.actions
export default appSlice.reducer
