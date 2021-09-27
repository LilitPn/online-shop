import { createAction, props } from '@ngrx/store';

export const setData = createAction('SetData', props<any>());