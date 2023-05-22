
import { createSlice } from "@reduxjs/toolkit";
import produce from 'immer';
import _ from "lodash";

// this file is responsible for sending fake form data into the backend.
// It is organized in a way where data will be nested in objects in this particular way.

export interface EntityInterface {
    entity: object 
    /*
    we accept and expect any object with key-value pairs when the user sends us data
    it is ultimately the backend's choice on how they want the data formatted and the front-end's
    responsibility to format the data in the entity object as desired.
    */
}

const initialState : EntityInterface = {
    entity: {}
};

const entitySlice = createSlice({
    name: 'entity',
    initialState,
    reducers: {
        updateEntityState: (state, action) => {
            const {path, data} = action.payload;
            _.set(state, path, data);
            // produce(state, (draft) => {
            //     Object.assign(draft, newAttributes);
            // });
        },

        resetEntityState: (state) => {
            return initialState;
        }
    }
}
)

export default entitySlice.reducer;
export const {updateEntityState, resetEntityState} = entitySlice.actions;

