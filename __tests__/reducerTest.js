// const appReducer = require('../client/reducers/appReducer.js')
import appReducer from '../client/reducers/appReducer';
import {app} from 'electron';
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
      expect(appReducer(undefined, {type: undefined})).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = {type: 'aajsbicawlbejckr'};
      expect(appReducer(state, action)).toBe(state);
    });
  });

  describe('UPDATE CODE INPUT', () => {
    const action = {
      type: 'UPDATE_CODE_INPUT',
      payload: 'helloworld',
    };

    it('should update code input', () => {
      expect(appReducer(state, action).codeInput).toEqual('helloworld');
    });
  });

  describe('BUILD TREE VIS', () => {
    const action = {
      type: 'BUILD_TREE_VIS',
      payload: 'helloworld',
    };

    it('should update tree vis', () => {
      expect(appReducer(state, action).dataVis.visObj).toEqual('helloworld');
    });
  });

  describe('STORE RESPONSE DATA', () => {
    const action = {
      type: 'STORE_RESPONSE_DATA',
      payload: 'helloworld',
    };

    it('should store response data', () => {
      expect(appReducer(state, action).dataVis.results).toEqual('helloworld');
    });
  });

  describe('SET DATABASE REQUESTS', () => {
    const action = {
      type: 'SET_DATABASE_REQUESTS',
      payload: 'helloworld',
    };

    it('should set database requests', () => {
      expect(
        appReducer(state, action).dataResults['Database Requests'],
      ).toEqual('helloworld');
    });
  });

  describe('SET DATA POINTS', () => {
    const action = {
      type: 'SET_DATA_POINTS',
      payload: 'helloworld',
    };

    it('should set database requests', () => {
      expect(appReducer(state, action).dataResults['Data Points']).toEqual(
        'helloworld',
      );
    });
  });

  describe('SET NESTING DEPTH', () => {
    const action = {
      type: 'SET_NESTING_DEPTH',
      payload: 'helloworld',
    };

    it('should set nesting depth', () => {
      expect(appReducer(state, action).dataResults['Nesting Depth']).toEqual(
        'helloworld',
      );
    });
  });

  describe('SET NETWORK LATENCY', () => {
    const action = {
      type: 'SET_NETWORK_LATENCY',
      payload: 'helloworld',
    };

    it('should set network latency', () => {
      expect(appReducer(state, action).networkLatency).toEqual('helloworld');
    });
  });

  describe('SET EFFECTIVE RUNTIME', () => {
    const action = {
      type: 'SET_EFFECTIVE_RUNTIME',
      payload: 'helloworld',
    };

    it('should set effective runtime', () => {
      expect(
        appReducer(state, action).dataResults['Effective Runtime'],
      ).toEqual('helloworld');
    });
  });

  describe('SET RESOLVER NUM', () => {
    const action = {
      type: 'SET_RESOLVER_NUM',
      payload: 'helloworld',
    };

    it('should set resolver num', () => {
      expect(appReducer(state, action).dataVis.resolverNum).toEqual(
        'helloworld',
      );
    });
  });

  describe('SET RESOLVER NAMES', () => {
    const action = {
      type: 'SET_RESOLVER_NAMES',
      payload: 'helloworld',
    };

    it('should set resolver names', () => {
      expect(appReducer(state, action).dataVis.resolverNames).toEqual(
        'helloworld',
      );
    });
  });
});
