import { configureStore } from "@reduxjs/toolkit";

import timelineReducer from './features/timeline/timelineSlice';

export const store = configureStore({
    reducer: {
        timeline: timelineReducer
    }
}); 