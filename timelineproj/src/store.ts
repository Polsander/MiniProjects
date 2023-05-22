import { configureStore } from "@reduxjs/toolkit";

import timelineReducer from './features/timeline/timelineSlice';
import entityReducer from './features/entity/entitySlice';

export const store = configureStore({
    reducer: {
        timeline: timelineReducer,
        entity: entityReducer
    }
}); 