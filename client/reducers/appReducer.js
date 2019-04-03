import * as types from '../constants/actionTypes';

const initialState = {
  codeInput: '',
  dataResults: {
    'Database Requests': null,
    'Data Points': null,
    'Nesting Depth': null,
    'Effective Runtime': null, 
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
        dataResults: {
          ...state.dataResults,
          'Database Requests': action.payload
        }
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
        dataResults: {
          ...state.dataResults,
          'Effective Runtime': action.payload
        }
      }

    default:
      return state;
  }
}

export default appReducer;