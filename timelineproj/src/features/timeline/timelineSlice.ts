import { createSlice } from "@reduxjs/toolkit";

export interface TimelineStateInterface {
    timeline: {
        step: number,
        formId: string,
        data: []
    }
}

const initialState: TimelineStateInterface["timeline"] = {
    step: 1,
    formId: '',
    data: []
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        increaseStep: (state) => {
            state.step += 1;
        },

        decreaseStep: (state) => {
            state.step -= 1;
        },

        selectStep: (state, action) => {
            state.step = action.payload;
        },

        resetTimeline: (state) => {
            return initialState;
        }
    }
});

export default timelineSlice.reducer;
export const { increaseStep, decreaseStep, selectStep, resetTimeline } = timelineSlice.actions;