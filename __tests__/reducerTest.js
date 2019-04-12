// const appReducer = require('../client/reducers/appReducer.js')
import appReducer from '../client/reducers/appReducer'
import { app } from 'electron';
describe('App reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      codeInput: '',
      dataResults: {
        'Database Requests': null,
        'Data Points': null,
        'Nesting Depth': null,
        'Effective Runtime': null,
      },
      dataVis: {
        resolverNum: null,
        resolverNames: [],
        results: {},
        visObj: {},
      },
      networkLatency: null,
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(appReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(appReducer(state, action)).toBe(state);
    });
  });

  describe('UPDATE_CODE_INPUT', () => {
    const action = {
      type: 'UPDATE_CODE_INPUT',
      payload: '{hello}'
    };
    it('updates code input with action payload', () => {
      const { codeInput } = appReducer(state, action);
      expect(codeInput).toEqual(action.payload);
    });
    it('returns a state object not strictly equal to the original', () => {
      const newState = appReducer(state, action);
      expect(newState).not.toBe(state);
    });
  });

  describe('BUILD_TREE_VIS', () => {
    const action = {
      type: 'BUILD_TREE_VIS',
      payload: {
        title: 'author',
        color: 'blue',
        value: '50',
        children: [],
      }
    }
      it('updates dataVis.visObj with action payload', () => {
        const visObj = appReducer(state, action);
        expect(visObj.dataVis.visObj).toEqual(action.payload);
      });
      it('returns a state object not strictly equal to the original', () => {
        const newState = appReducer(state, action);
        expect(newState).not.toBe(state);
      });
  });

  describe('STORE_RESPONSE_DATA', () => {
    const action = {
      type: 'STORE_RESPONSE_DATA',
      payload: '50'
    }
      it('updates dataVis.results with action payload', () => {
        const dataVisResults = appReducer(state, action);
        expect(dataVisResults.dataVis.results).toEqual(action.payload);
      });
      it('returns a state object not strictly equal to the original', () => {
        const newState = appReducer(state, action);
        expect(newState).not.toBe(state);
      });
  });

})