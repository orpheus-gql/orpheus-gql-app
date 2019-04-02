import * as types from '../constants/actionTypes';

const initialState = {
  codeInput: '',
  dataResults: {
    'Database Requests': '04',
    'Data Points': '33',
    'Nesting Depth': '03',
    'Effective Runtime': '2.1', 
  },
  networkLatency: '.02',
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.UPDATE_CODE_INPUT:
      return {
        ...state,
        codeInput: action.payload
      }

    case types.SET_DATABASE_REQUESTS:
      return {
        ...state,
        databaseRequestsValue: action.payload
      }

    case types.SET_DATA_POINTS:
      return {
        ...state,
        dataPointsValue: action.payload
      }

    case types.SET_NESTING_DEPTH:
      return {
        ...state,
        nestingDepthValue: action.payload
      }

    case types.SET_NETWORK_LATENCY:
      return {
        ...state,
        networkLatency: action.payload
      }

    case types.SET_EFFECTIVE_RUNTIME:
      return {
        ...state,
        effectiveRuntime: action.payload
      }

    default:
      return state;
  }
}

export default appReducer;