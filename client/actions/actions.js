import Axios from "axios";
import * as types from '../constants/actionTypes';


export const updateCodeInput = (value) => ({
  type: types.UPDATE_CODE_INPUT,
  payload: value,
});

export const updateCodeEditorInput = (value) => ({
  type: types.UPDATE_CODE_EDITOR_INPUT,
  payload: value,
});

export const setDatabaseRequests = (value) => ({
  type: types.SET_DATABASE_REQUESTS,
  payload: value,
});

export const setDataPoints = (value) => ({
  type: types.SET_DATA_POINTS,
  payload: value,
});

export const setNestingDepth = (value) => ({
  type: types.SET_NESTING_DEPTH,
  payload: value,
});

export const setNetworkLatency = (value) => ({
  type: types.SET_NETWORK_LATENCY,
  payload: value,
});

export const setEffectiveRuntime = (value) => ({
  type: types.SET_EFFECTIVE_RUNTIME,
  payload: value,
});