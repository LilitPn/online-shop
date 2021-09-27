import { createReducer, on } from '@ngrx/store';
import { setData } from './store.actions';



export const initialState = { data: [] };

const _dataReducer = createReducer(
    initialState,
    on(setData, (state, action) => ({ data: [action] }))
);

export function dataReducer(state, action) {
    return _dataReducer(state, action);
}
