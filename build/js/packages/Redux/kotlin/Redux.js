(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'Redux'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Redux'.");
    }if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'Redux'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'Redux'.");
    }root.Redux = factory(typeof Redux === 'undefined' ? {} : Redux, kotlin, this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_m7z4lg$;
  var asSequence = Kotlin.kotlin.collections.asSequence_abgq59$;
  var plus = Kotlin.kotlin.sequences.plus_v0iwhp$;
  var distinct = Kotlin.kotlin.sequences.distinct_veqyi0$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var MutableStateFlow = $module$kotlinx_coroutines_core.kotlinx.coroutines.flow.MutableStateFlow_mh5how$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  function applyMiddleware$lambda$lambda$lambda(it) {
    throw Kotlin.newThrowable('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
  }
  function applyMiddleware$lambda$lambda$ObjectLiteral(closure$store, closure$dispatch) {
    this.closure$store = closure$store;
    this.dispatch_2ot3uv$_0 = new Dispatch(applyMiddleware$lambda$lambda$ObjectLiteral$dispatch$lambda(closure$dispatch));
  }
  Object.defineProperty(applyMiddleware$lambda$lambda$ObjectLiteral.prototype, 'dispatch', {
    configurable: true,
    get: function () {
      return this.dispatch_2ot3uv$_0;
    }
  });
  applyMiddleware$lambda$lambda$ObjectLiteral.prototype.getState = function () {
    return this.closure$store.state.value;
  };
  function applyMiddleware$lambda$lambda$ObjectLiteral$dispatch$lambda(closure$dispatch) {
    return function (it) {
      return closure$dispatch.v.invoke_vpsavr$(it);
    };
  }
  applyMiddleware$lambda$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MiddlewareAPI]
  };
  function applyMiddleware$lambda$lambda$lambda$lambda(closure$middleware, closure$middlewareAPI, closure$dispatcher) {
    return function (it) {
      return closure$middleware.invoke_4l3l40$(closure$middlewareAPI, closure$dispatcher, it);
    };
  }
  function applyMiddleware$lambda$lambda$ObjectLiteral_0(closure$dispatch, closure$store) {
    this.dispatch_2ot3uv$_0 = closure$dispatch.v;
    this.state_109b1s$_0 = closure$store.state;
  }
  Object.defineProperty(applyMiddleware$lambda$lambda$ObjectLiteral_0.prototype, 'dispatch', {
    configurable: true,
    get: function () {
      return this.dispatch_2ot3uv$_0;
    }
  });
  Object.defineProperty(applyMiddleware$lambda$lambda$ObjectLiteral_0.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.state_109b1s$_0;
    }
  });
  applyMiddleware$lambda$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Store]
  };
  function applyMiddleware$lambda$lambda(closure$createStore, closure$middlewares) {
    return function (reducer, initialState) {
      var store = closure$createStore.invoke_tu43z4$(reducer, initialState);
      var dispatch = {v: new Dispatch(applyMiddleware$lambda$lambda$lambda)};
      var middlewareAPI = new applyMiddleware$lambda$lambda$ObjectLiteral(store, dispatch);
      var $receiver = closure$middlewares;
      var initial = store.dispatch;
      var tmp$;
      var index = get_lastIndex($receiver);
      var accumulator = initial;
      while (index >= 0) {
        accumulator = new Dispatch(applyMiddleware$lambda$lambda$lambda$lambda($receiver[tmp$ = index, index = tmp$ - 1 | 0, tmp$], middlewareAPI, accumulator));
      }
      dispatch.v = accumulator;
      return new applyMiddleware$lambda$lambda$ObjectLiteral_0(dispatch, store);
    };
  }
  function applyMiddleware$lambda(closure$middlewares) {
    return function (createStore) {
      return new StoreEnhancerStoreCreator(applyMiddleware$lambda$lambda(createStore, closure$middlewares));
    };
  }
  function applyMiddleware(middlewares) {
    return new StoreEnhancer(applyMiddleware$lambda(middlewares));
  }
  function combineReducers$lambda(closure$reducers) {
    return function (state, action) {
      var $receiver = closure$reducers;
      var tmp$;
      var accumulator = state;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        accumulator = element.invoke_fgaepl$(accumulator, action);
      }
      return accumulator;
    };
  }
  function combineReducers(reducers) {
    return new Reducer(combineReducers$lambda(reducers));
  }
  function combineReducers$lambda_0(closure$reducers) {
    return function (state, action) {
      var tmp$;
      var accumulator = state;
      tmp$ = closure$reducers.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        accumulator = element.invoke_fgaepl$(accumulator, action);
      }
      return accumulator;
    };
  }
  function combineReducers_0(reducers) {
    return new Reducer(combineReducers$lambda_0(reducers));
  }
  function configureStore$ObjectLiteral(closure$slice) {
    var capacity = coerceAtLeast(mapCapacity(closure$slice.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== closure$slice.length; ++tmp$) {
      var element = closure$slice[tmp$];
      var pair = element.initialState;
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    this.states_h26ta0$_0 = toMutableMap(destination);
  }
  Object.defineProperty(configureStore$ObjectLiteral.prototype, 'states', {
    configurable: true,
    get: function () {
      return this.states_h26ta0$_0;
    }
  });
  configureStore$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombineState]
  };
  function configureStore(slice, middleware) {
    if (middleware === void 0) {
      middleware = [];
    }var capacity = coerceAtLeast(mapCapacity(slice.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== slice.length; ++tmp$) {
      var element = slice[tmp$];
      var pair = element.reducer;
      destination.put_xwzc9p$(pair.first, pair.second);
    }
    var tmp$_0 = asSequence(destination);
    var capacity_0 = coerceAtLeast(mapCapacity(slice.length), 16);
    var destination_0 = LinkedHashMap_init(capacity_0);
    var tmp$_1;
    for (tmp$_1 = 0; tmp$_1 !== slice.length; ++tmp$_1) {
      var element_0 = slice[tmp$_1];
      var pair_0 = element_0.extraReducer;
      destination_0.put_xwzc9p$(pair_0.first, pair_0.second);
    }
    var $receiver = distinct(plus(tmp$_0, asSequence(destination_0)));
    var destination_1 = LinkedHashMap_init_0();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      var key = element_1.key;
      var tmp$_0_0;
      var value = destination_1.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_1.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      } else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_1.value);
    }
    var destination_2 = LinkedHashMap_init(mapCapacity(destination_1.size));
    var tmp$_3;
    tmp$_3 = destination_1.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element_2 = tmp$_3.next();
      destination_2.put_xwzc9p$(element_2.key, combineReducers_0(element_2.value));
    }
    return createStore_0(combineReducers_1(destination_2), new configureStore$ObjectLiteral(slice), applyMiddleware([createThunkMiddleware()].concat(middleware)));
  }
  var createStore = defineInlineFunction('Redux.me.acarbajo.library.redux.createStore_d8fpjh$', wrapFunction(function () {
    var ReducerType = _.me.acarbajo.library.redux.types.ReducerType;
    var combineReducers = _.me.acarbajo.library.redux.combineReducers_4fquko$;
    var createThunkMiddleware = _.me.acarbajo.library.redux.types.createThunkMiddleware_gor7qe$;
    var applyMiddleware = _.me.acarbajo.library.redux.applyMiddleware_pejee0$;
    var createStore = _.me.acarbajo.library.redux.createStore_3lzcw$;
    var Reducer = _.me.acarbajo.library.redux.types.Reducer;
    function ReducerT$lambda(closure$reducer, typeClosure$A, isA) {
      return function (state, action) {
        if (isA(action))
          return closure$reducer.invoke_tu0tqt$(state, action);
        else
          return state;
      };
    }
    function createStore$lambda(s, f) {
      return s;
    }
    function createStore$lambda_0(s, f) {
      return s;
    }
    function createStore$lambda_1(closure$reducer) {
      return function (state, action) {
        return closure$reducer(state, action);
      };
    }
    function createStore$lambda_2(closure$extra) {
      return function (state, action) {
        return closure$extra(state, action);
      };
    }
    return function (S_0, isS, A_0, isA, initialState, middleware, extra, reducer) {
      if (middleware === void 0) {
        middleware = [];
      }if (extra === void 0)
        extra = createStore$lambda;
      if (reducer === void 0)
        reducer = createStore$lambda_0;
      return createStore(combineReducers([new Reducer(ReducerT$lambda(new ReducerType(createStore$lambda_1(reducer)), A_0, isA)), new Reducer(ReducerT$lambda(new ReducerType(createStore$lambda_2(extra)), A_0, isA))]), initialState, applyMiddleware([createThunkMiddleware()].concat(middleware)));
    };
  }));
  function Slice() {
  }
  Slice.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Slice',
    interfaces: []
  };
  var createSlice = defineInlineFunction('Redux.me.acarbajo.library.redux.createSlice_fwgy2e$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ensureNotNull = Kotlin.ensureNotNull;
    var ReducerType = _.me.acarbajo.library.redux.types.ReducerType;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var Action = _.me.acarbajo.library.redux.types.Action;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Slice = _.me.acarbajo.library.redux.Slice;
    var Reducer = _.me.acarbajo.library.redux.types.Reducer;
    function Reducer$lambda(closure$reducer, typeClosure$S, isS, typeClosure$A, isA) {
      return function (state, action) {
        if (isA(action)) {
          if (isS(state))
            return closure$reducer.invoke_tu0tqt$(state, action);
          else
            return state;
        } else
          return state;
      };
    }
    function createSlice$lambda(s, f) {
      return s;
    }
    function createSlice$lambda_0(s, f) {
      return s;
    }
    function createSlice$ObjectLiteral(isS, typeClosure$S, closure$reducer, isA, typeClosure$A, closure$initialState, closure$extra) {
      this.name_g1z3ow$_0 = ensureNotNull(getKClass(typeClosure$S).simpleName);
      this.reducer_3r4f83$_0 = to(this.name, new Reducer(Reducer$lambda(new ReducerType(createSlice$ObjectLiteral$reducer$lambda(closure$reducer)), typeClosure$S, isS, typeClosure$A, isA)));
      this.initialState_1sk7ta$_0 = to(this.name, closure$initialState);
      this.extraReducer_2idjzz$_0 = to(this.name, new Reducer(Reducer$lambda(new ReducerType(createSlice$ObjectLiteral$extraReducer$lambda(closure$extra)), typeClosure$S, isS, Action, Kotlin.isInstanceOf(Action))));
    }
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'name', {
      configurable: true,
      get: function () {
        return this.name_g1z3ow$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'reducer', {
      configurable: true,
      get: function () {
        return this.reducer_3r4f83$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'initialState', {
      configurable: true,
      get: function () {
        return this.initialState_1sk7ta$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'extraReducer', {
      configurable: true,
      get: function () {
        return this.extraReducer_2idjzz$_0;
      }
    });
    function createSlice$ObjectLiteral$reducer$lambda(closure$reducer) {
      return function (state, action) {
        return closure$reducer(state, action);
      };
    }
    function createSlice$ObjectLiteral$extraReducer$lambda(closure$extra) {
      return function (state, action) {
        return closure$extra(state, action);
      };
    }
    createSlice$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Slice]
    };
    return function (S_0, isS, A_0, isA, initialState, extra, reducer) {
      if (extra === void 0)
        extra = createSlice$lambda;
      if (reducer === void 0)
        reducer = createSlice$lambda_0;
      return new createSlice$ObjectLiteral(isS, S_0, reducer, isA, A_0, initialState, extra);
    };
  }));
  function select($receiver, slice) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.states.get_11rb$(slice.name), State) ? tmp$ : throwCCE();
  }
  function createAction$lambda(closure$f, closure$slice) {
    return function (states, dispatcher) {
      closure$f(select(states, closure$slice), dispatcher);
      return Unit;
    };
  }
  function createAction(slice, f) {
    return new AsyncAction(createAction$lambda(f, slice));
  }
  function createAction$lambda_0(closure$f) {
    return function (state, dispatcher) {
      closure$f(state, dispatcher);
      return Unit;
    };
  }
  function createAction_0(f) {
    return new AsyncAction(createAction$lambda_0(f));
  }
  function createStore$lambda(r, initialState) {
    return createStore_0(r, initialState, null);
  }
  function createStore$lambda_0(closure$reducer, closure$currentState) {
    return function (action) {
      closure$currentState.value = closure$reducer.invoke_fgaepl$(closure$currentState.value, action);
      return action;
    };
  }
  function createStore$ObjectLiteral(closure$dispatch, closure$currentState) {
    this.dispatch_kr8hde$_0 = closure$dispatch;
    this.state_a7s5cn$_0 = closure$currentState;
  }
  Object.defineProperty(createStore$ObjectLiteral.prototype, 'dispatch', {
    configurable: true,
    get: function () {
      return this.dispatch_kr8hde$_0;
    }
  });
  Object.defineProperty(createStore$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.state_a7s5cn$_0;
    }
  });
  createStore$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Store]
  };
  function createStore_0(reducer, preloadedState, enhancer) {
    if (enhancer === void 0)
      enhancer = null;
    if (enhancer != null) {
      return enhancer.invoke_n6h21t$(new StoreEnhancerStoreCreator(createStore$lambda)).invoke_tu43z4$(reducer, preloadedState);
    }var currentState = MutableStateFlow(preloadedState);
    var dispatch = new Dispatch(createStore$lambda_0(reducer, currentState));
    return new createStore$ObjectLiteral(dispatch, currentState);
  }
  function createTestMiddleware$lambda(closure$actions) {
    return function (f, next, action) {
      if (!Kotlin.isType(action, AsyncAction))
        closure$actions.add_11rb$(action);
      return next.invoke_vpsavr$(action);
    };
  }
  function createTestMiddleware(actions) {
    return new Middleware(createTestMiddleware$lambda(actions));
  }
  function MockStore() {
  }
  MockStore.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MockStore',
    interfaces: [Store]
  };
  function mockStore$ObjectLiteral(closure$slice) {
    this.temp_0 = ArrayList_init();
    this.store_0 = configureStore([closure$slice], [createTestMiddleware(this.temp_0)]);
  }
  Object.defineProperty(mockStore$ObjectLiteral.prototype, 'dispatch', {
    configurable: true,
    get: function () {
      return this.store_0.dispatch;
    }
  });
  Object.defineProperty(mockStore$ObjectLiteral.prototype, 'state', {
    configurable: true,
    get: function () {
      return this.store_0.state;
    }
  });
  Object.defineProperty(mockStore$ObjectLiteral.prototype, 'actions', {
    configurable: true,
    get: function () {
      return this.temp_0;
    }
  });
  mockStore$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MockStore]
  };
  function mockStore(slice) {
    return new mockStore$ObjectLiteral(slice);
  }
  function Action() {
  }
  Action.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  function AsyncAction(f) {
    this.function$ = f;
  }
  AsyncAction.prototype.invoke_5pmuau$ = function (state, dispatcher) {
    return this.function$(state, dispatcher);
  };
  AsyncAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AsyncAction',
    interfaces: [Action]
  };
  function MiddlewareAPI() {
  }
  MiddlewareAPI.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MiddlewareAPI',
    interfaces: []
  };
  function Middleware(f) {
    this.function$ = f;
  }
  Middleware.prototype.invoke_4l3l40$ = function (api, next, action) {
    return this.function$(api, next, action);
  };
  Middleware.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Middleware',
    interfaces: []
  };
  function Reducer(f) {
    this.function$ = f;
  }
  Reducer.prototype.invoke_fgaepl$ = function (state, action) {
    return this.function$(state, action);
  };
  Reducer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Reducer',
    interfaces: []
  };
  function ReducerType(f) {
    this.function$ = f;
  }
  ReducerType.prototype.invoke_tu0tqt$ = function (state, action) {
    return this.function$(state, action);
  };
  ReducerType.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ReducerType',
    interfaces: []
  };
  var Reducer_0 = defineInlineFunction('Redux.me.acarbajo.library.redux.types.Reducer_h3ioua$', wrapFunction(function () {
    var Reducer = _.me.acarbajo.library.redux.types.Reducer;
    function Reducer$lambda(closure$reducer, typeClosure$S, isS, typeClosure$A, isA) {
      return function (state, action) {
        if (isA(action)) {
          if (isS(state))
            return closure$reducer.invoke_tu0tqt$(state, action);
          else
            return state;
        } else
          return state;
      };
    }
    return function (S_0, isS, A_0, isA, reducer) {
      return new Reducer(Reducer$lambda(reducer, S_0, isS, A_0, isA));
    };
  }));
  var ReducerT = defineInlineFunction('Redux.me.acarbajo.library.redux.types.ReducerT_h3ioua$', wrapFunction(function () {
    var Reducer = _.me.acarbajo.library.redux.types.Reducer;
    function ReducerT$lambda(closure$reducer, typeClosure$A, isA) {
      return function (state, action) {
        if (isA(action))
          return closure$reducer.invoke_tu0tqt$(state, action);
        else
          return state;
      };
    }
    return function (S_0, isS, A_0, isA, reducer) {
      return new Reducer(ReducerT$lambda(reducer, A_0, isA));
    };
  }));
  function combineReducers$lambda$ObjectLiteral() {
    this.states_5j36v5$_0 = HashMap_init();
  }
  Object.defineProperty(combineReducers$lambda$ObjectLiteral.prototype, 'states', {
    configurable: true,
    get: function () {
      return this.states_5j36v5$_0;
    }
  });
  combineReducers$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [CombineState]
  };
  function combineReducers$lambda_1(closure$finalReducerKeys, closure$reducers) {
    return function (state, action) {
      var hasChanged = {v: false};
      var nextState = new combineReducers$lambda$ObjectLiteral();
      var $receiver = closure$finalReducerKeys;
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var reducer = ensureNotNull(closure$reducers.get_11rb$(element));
        var previousStateForKey = state.states.get_11rb$(element);
        var nextStateForKey = previousStateForKey != null ? reducer.invoke_fgaepl$(previousStateForKey, action) : null;
        if (nextStateForKey != null) {
          nextState.states.put_xwzc9p$(element, nextStateForKey);
        }hasChanged.v = hasChanged.v || !equals(nextStateForKey, previousStateForKey);
      }
      hasChanged.v = hasChanged.v || closure$finalReducerKeys.size !== state.states.keys.size;
      return hasChanged.v ? nextState : state;
    };
  }
  function combineReducers_1(reducers) {
    var finalReducerKeys = reducers.keys;
    return new Reducer(combineReducers$lambda_1(finalReducerKeys, reducers));
  }
  function Dispatch(f) {
    this.function$ = f;
  }
  Dispatch.prototype.invoke_vpsavr$ = function (action) {
    return this.function$(action);
  };
  Dispatch.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Dispatch',
    interfaces: []
  };
  function State() {
  }
  State.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'State',
    interfaces: []
  };
  function CombineState() {
  }
  CombineState.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CombineState',
    interfaces: [State]
  };
  function Store() {
  }
  Store.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Store',
    interfaces: []
  };
  function StoreEnhancer(f) {
    this.function$ = f;
  }
  StoreEnhancer.prototype.invoke_n6h21t$ = function (next) {
    return this.function$(next);
  };
  StoreEnhancer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StoreEnhancer',
    interfaces: []
  };
  function StoreEnhancerStoreCreator(f) {
    this.function$ = f;
  }
  StoreEnhancerStoreCreator.prototype.invoke_tu43z4$ = function (reducer, preloadedState) {
    return this.function$(reducer, preloadedState);
  };
  StoreEnhancerStoreCreator.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'StoreEnhancerStoreCreator',
    interfaces: []
  };
  function createThunkMiddleware$lambda(store, next, action) {
    var tmp$;
    if (Kotlin.isType(action, AsyncAction)) {
      (Kotlin.isType(tmp$ = action, AsyncAction) ? tmp$ : throwCCE()).invoke_5pmuau$(store.getState(), next);
    }return next.invoke_vpsavr$(action);
  }
  function createThunkMiddleware() {
    return new Middleware(createThunkMiddleware$lambda);
  }
  function Platform() {
  }
  Object.defineProperty(Platform.prototype, 'platform', {
    configurable: true,
    get: function () {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
    }
  });
  Platform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Platform',
    interfaces: []
  };
  var createSlice_0 = defineInlineFunction('Redux.me.acarbajo.library.createSlice_fwgy2e$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var ensureNotNull = Kotlin.ensureNotNull;
    var ReducerType = _.me.acarbajo.library.redux.types.ReducerType;
    var to = Kotlin.kotlin.to_ujzrz7$;
    var Action = _.me.acarbajo.library.redux.types.Action;
    var Kind_CLASS = Kotlin.Kind.CLASS;
    var Slice = _.me.acarbajo.library.redux.Slice;
    var Reducer = _.me.acarbajo.library.redux.types.Reducer;
    function Reducer$lambda(closure$reducer, typeClosure$S, isS, typeClosure$A, isA) {
      return function (state, action) {
        if (isA(action)) {
          if (isS(state))
            return closure$reducer.invoke_tu0tqt$(state, action);
          else
            return state;
        } else
          return state;
      };
    }
    function createSlice$lambda(s, f) {
      return s;
    }
    function createSlice$lambda_0(s, f) {
      return s;
    }
    function createSlice$ObjectLiteral(isS, typeClosure$S, closure$r, isA, typeClosure$A, closure$initialState, closure$extra) {
      this.name_wy8lva$_0 = ensureNotNull(getKClass(typeClosure$S).simpleName);
      this.reducer_qmc4pz$_0 = to(this.name, new Reducer(Reducer$lambda(new ReducerType(createSlice$ObjectLiteral$reducer$lambda(closure$r)), typeClosure$S, isS, typeClosure$A, isA)));
      this.initialState_jse5v0$_0 = to(this.name, closure$initialState);
      this.extraReducer_j2ktob$_0 = to(this.name, new Reducer(Reducer$lambda(new ReducerType(createSlice$ObjectLiteral$extraReducer$lambda(closure$extra)), typeClosure$S, isS, Action, Kotlin.isInstanceOf(Action))));
    }
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'name', {
      configurable: true,
      get: function () {
        return this.name_wy8lva$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'reducer', {
      configurable: true,
      get: function () {
        return this.reducer_qmc4pz$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'initialState', {
      configurable: true,
      get: function () {
        return this.initialState_jse5v0$_0;
      }
    });
    Object.defineProperty(createSlice$ObjectLiteral.prototype, 'extraReducer', {
      configurable: true,
      get: function () {
        return this.extraReducer_j2ktob$_0;
      }
    });
    function createSlice$ObjectLiteral$reducer$lambda(closure$r) {
      return function (state, action) {
        return closure$r(state, action);
      };
    }
    function createSlice$ObjectLiteral$extraReducer$lambda(closure$extra) {
      return function (state, action) {
        return closure$extra(state, action);
      };
    }
    createSlice$ObjectLiteral.$metadata$ = {
      kind: Kind_CLASS,
      interfaces: [Slice]
    };
    return function (S_0, isS, A_0, isA, initialState, extra, r) {
      if (extra === void 0)
        extra = createSlice$lambda;
      if (r === void 0)
        r = createSlice$lambda_0;
      return new createSlice$ObjectLiteral(isS, S_0, r, isA, A_0, initialState, extra);
    };
  }));
  function select_0($receiver, slice) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.states.get_11rb$(slice.name), State) ? tmp$ : throwCCE();
  }
  var package$me = _.me || (_.me = {});
  var package$acarbajo = package$me.acarbajo || (package$me.acarbajo = {});
  var package$library = package$acarbajo.library || (package$acarbajo.library = {});
  var package$redux = package$library.redux || (package$library.redux = {});
  package$redux.applyMiddleware_pejee0$ = applyMiddleware;
  package$redux.combineReducers_4fquko$ = combineReducers;
  package$redux.combineReducers_qogcsm$ = combineReducers_0;
  package$redux.configureStore_9g7dz$ = configureStore;
  var package$types = package$redux.types || (package$redux.types = {});
  package$types.ReducerType = ReducerType;
  $$importsForInline$$.Redux = _;
  package$types.createThunkMiddleware_gor7qe$ = createThunkMiddleware;
  package$redux.createStore_3lzcw$ = createStore_0;
  package$redux.Slice = Slice;
  package$types.Action = Action;
  package$redux.select_3czwak$ = select;
  package$redux.createAction_myoogp$ = createAction;
  package$redux.createAction_3uhiob$ = createAction_0;
  package$redux.createTestMiddleware_b8vzsx$ = createTestMiddleware;
  package$redux.MockStore = MockStore;
  package$redux.mockStore_a8rg5o$ = mockStore;
  package$types.AsyncAction = AsyncAction;
  package$types.MiddlewareAPI = MiddlewareAPI;
  package$types.Middleware = Middleware;
  package$types.Reducer = Reducer;
  package$types.combineReducers_9k77pg$ = combineReducers_1;
  package$types.Dispatch = Dispatch;
  package$types.State = State;
  package$types.CombineState = CombineState;
  package$types.Store = Store;
  package$types.StoreEnhancer = StoreEnhancer;
  package$types.StoreEnhancerStoreCreator = StoreEnhancerStoreCreator;
  package$library.Platform = Platform;
  package$library.select_3czwak$ = select_0;
  Kotlin.defineModule('Redux', _);
  return _;
}));

//# sourceMappingURL=Redux.js.map
