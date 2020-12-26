/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { action } from 'typesafe-actions';
import { TimeTypes } from './types';

export const setTime = (payload: number) =>
  action(TimeTypes.setTime, payload);


