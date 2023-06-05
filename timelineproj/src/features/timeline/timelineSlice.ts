import { createSlice } from "@reduxjs/toolkit";

export interface TimelineStateInterface {
    timeline: {
        attributes: {
            step: number,
            title: string,
            validated: boolean,
        }[],
        currentIndex: number,
        formId: string,
        data: []
    }
}

const initialState: TimelineStateInterface["timeline"] = {
    attributes: [{step: 1, title:'', validated: false}],
    currentIndex: 1,
    formId: '',
    data: []
}

const timelineSlice = createSlice({
    name: 'timeline',
    initialState,
    reducers: {
        increaseStep: (state) => {
            state.currentIndex += 1;
        },

        decreaseStep: (state) => {
            state.currentIndex -= 1;
        },

        selectStep: (state, action) => {
            state.currentIndex = action.payload;
        },

        resetTimeline: (state) => {
            return initialState;
        }
    }
});

export default timelineSlice.reducer;
export const { increaseStep, decreaseStep, selectStep, resetTimeline } = timelineSlice.actions;