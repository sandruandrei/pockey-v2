/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Modules/ConnectionModule/pockey-connection-channels-and-messages.ts":
/*!****************************************************************************************!*\
  !*** ./src/client/Modules/ConnectionModule/pockey-connection-channels-and-messages.ts ***!
  \****************************************************************************************/
/*! exports provided: PockeySocketMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeySocketMessages", function() { return PockeySocketMessages; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PockeySocketMessages = function PockeySocketMessages() {
  _classCallCheck(this, PockeySocketMessages);
};

_defineProperty(PockeySocketMessages, "WATCH", "PockeySocketMessages." + "WATCH");

_defineProperty(PockeySocketMessages, "OPPONENT", "PockeySocketMessages." + "OPPONENT");

_defineProperty(PockeySocketMessages, "YOUR_TURN", "PockeySocketMessages." + "YOUR_TURN");

_defineProperty(PockeySocketMessages, "OPPONENT_SETTINGS", "PockeySocketMessages." + "OPPONENT_SETTINGS");

_defineProperty(PockeySocketMessages, "OPPONENT_REMATCH", "PockeySocketMessages." + "OPPONENT_REMATCH");

_defineProperty(PockeySocketMessages, "DISCONNECT_MY_SOCKET", "ConnectionSignalsType." + 'DISCONNECT_MY_SOCKET');

_defineProperty(PockeySocketMessages, "BALL_IN_THE_HALL", "PockeySocketMessages." + "BALL_IN_THE_HALL");

_defineProperty(PockeySocketMessages, "SCORE_UPDATED", "PockeySocketMessages." + "SCORE_UPDATED");

_defineProperty(PockeySocketMessages, "CHECK_NEXT_TURN", "PockeySocketMessages." + "CHECK_NEXT_TURN");

_defineProperty(PockeySocketMessages, "CHANGE_STATE", "PockeySocketMessages." + "CHANGE_STATE");

_defineProperty(PockeySocketMessages, "OWN_BALL_TOUCHED_FIRST", "PockeySocketMessages." + "OWN_BALL_TOUCHED_FIRST");

/***/ }),

/***/ "./src/client/Modules/StateMachine/pockey-state-machine.ts":
/*!*****************************************************************!*\
  !*** ./src/client/Modules/StateMachine/pockey-state-machine.ts ***!
  \*****************************************************************/
/*! exports provided: PockeyStates, PockeyStateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyStates", function() { return PockeyStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyStateMachine", function() { return PockeyStateMachine; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typestate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typestate */ "./src/client/Modules/StateMachine/typestate.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var PockeyStates; // export enum PockeyStates {
//     StartGame,
//     PlayerTurn,
//     PlayerTurnFirstBall,
//     OpponentTurn,
//     OpponentTurnFirstBall,
//
// }

(function (PockeyStates) {
  PockeyStates[PockeyStates["onLoad"] = 0] = "onLoad";
  PockeyStates[PockeyStates["onMainMenu"] = 1] = "onMainMenu";
  PockeyStates[PockeyStates["onStart"] = 2] = "onStart";
  PockeyStates[PockeyStates["onRoundEnd"] = 3] = "onRoundEnd";
  PockeyStates[PockeyStates["onDefineClient"] = 4] = "onDefineClient";
  PockeyStates[PockeyStates["onSearchForPartner"] = 5] = "onSearchForPartner";
  PockeyStates[PockeyStates["onWatch"] = 6] = "onWatch";
  PockeyStates[PockeyStates["onRearrangeStick"] = 7] = "onRearrangeStick";
  PockeyStates[PockeyStates["onRepositionWhiteBall"] = 8] = "onRepositionWhiteBall";
  PockeyStates[PockeyStates["onShoot"] = 9] = "onShoot";
  PockeyStates[PockeyStates["onEndTurn"] = 10] = "onEndTurn";
  PockeyStates[PockeyStates["onEndMatch"] = 11] = "onEndMatch";
  PockeyStates[PockeyStates["onPrepareRoundOne"] = 12] = "onPrepareRoundOne";
  PockeyStates[PockeyStates["onPrepareRoundTwo"] = 13] = "onPrepareRoundTwo";
  PockeyStates[PockeyStates["onPrepareRoundThree"] = 14] = "onPrepareRoundThree";
})(PockeyStates || (PockeyStates = {}));

var PockeyStateMachine =
/*#__PURE__*/
function () {
  function PockeyStateMachine() {
    _classCallCheck(this, PockeyStateMachine);

    _defineProperty(this, "fsm", void 0);

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "nextState", void 0);
  }

  _createClass(PockeyStateMachine, [{
    key: "InitializeStates",
    value: function InitializeStates() {
      this.fsm.from(PockeyStates.onLoad).to(PockeyStates.onMainMenu);
      this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onMainMenu).to(PockeyStates.onSearchForPartner); // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onRearrangeStick);

      this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onPrepareRoundOne);
      this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onWatch);
      this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundTwo);
      this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onWatch);
      this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onPrepareRoundThree);
      this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRepositionWhiteBall);
      this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onWatch); // this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onRearrangeStick);
      // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onWatch);
      // this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onWatch);

      this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onWatch);
      this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndTurn);
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onRepositionWhiteBall).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onPrepareRoundOne).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onPrepareRoundTwo).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onPrepareRoundThree).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onSearchForPartner).to(PockeyStates.onEndMatch);
      this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onMainMenu);
      this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onPrepareRoundOne);
      this.fsm.from(PockeyStates.onEndMatch).to(PockeyStates.onSearchForPartner);
      this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onShoot);
      this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onWatch);
      this.fsm.from(PockeyStates.onRearrangeStick).to(PockeyStates.onEndTurn);
      this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onEndTurn);
      this.fsm.from(PockeyStates.onShoot).to(PockeyStates.onRoundEnd);
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRepositionWhiteBall);
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onWatch);
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onRoundEnd);
      this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRoundEnd);
      this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onRepositionWhiteBall);
      this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onRearrangeStick);
      this.fsm.from(PockeyStates.onRoundEnd).to(PockeyStates.onWatch);
    }
  }, {
    key: "delayStateChanging",
    value: function delayStateChanging(delayedState) {
      // this.currentState = PockeyStateMachine.Instance().fsm.currentState;
      this.nextState = delayedState;
    }
  }, {
    key: "updateDelayedState",
    value: function updateDelayedState() {
      PockeyStateMachine.Instance().changeState(this.nextState);
      this.nextState = null;
    }
  }, {
    key: "hasStateInQueue",
    value: function hasStateInQueue() {
      if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isUndefined"](this.nextState) && lodash__WEBPACK_IMPORTED_MODULE_0__["isNull"](this.nextState)) return true;
      return false;
    }
  }, {
    key: "changeState",
    value: function changeState(state) {
      if (!PockeyStates[state]) {
        console.log("%c StateMachine -> state does not exist: " + state, "color: #000000; background:#ff9900");
      }

      if (state == PockeyStates.onShoot) {
        console.log("current state=======");
        this.printFsmCurrentState();
        console.log("current state=======");
        console.log("stop");
      }

      PockeyStateMachine.Instance().fsm.go(state);
      this.printFsmCurrentState();
    }
  }, {
    key: "getCurrentStateName",
    value: function getCurrentStateName() {
      var _this = this;

      var s = "";

      if (this.fsm) {
        lodash__WEBPACK_IMPORTED_MODULE_0__["forEach"](this.fsm, function (state) {
          if (state == _this.fsm.currentState) {
            // s = state.toString();
            s = PockeyStates[state];
            return;
          }
        });
      }

      return s;
    }
  }, {
    key: "printFsmCurrentState",
    value: function printFsmCurrentState() {
      // if (PockeyStateMachine.Instance().fsm.currentState == PockeyStates.onShoot) {
      //     console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: black; color: yellow; font-weight:bold; ");
      //
      // }
      // else {
      console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; "); // }
      // console.log("%c GameManager -> FSM currentState: " + PockeyStateMachine.Instance().getCurrentStateName(), "background: yellow; color: #f6546a; font-weight:bold; ");
    }
  }], [{
    key: "Instance",
    // private currentState:any;
    value: function Instance() {
      if (!PockeyStateMachine.instance) {
        PockeyStateMachine.instance = new PockeyStateMachine();

        if (!PockeyStateMachine.Instance().initialized) {
          PockeyStateMachine.Instance().fsm = new _typestate__WEBPACK_IMPORTED_MODULE_1__["FiniteStateMachine"](PockeyStates.onLoad);
          PockeyStateMachine.Instance().InitializeStates();
          PockeyStateMachine.Instance().initialized = true;
          var s = PockeyStates[PockeyStates.onLoad];
          console.log("%c StateMachine -> FSM currentState: " + s, "background: yellow; color: #f6546a; font-weight:bold; "); // setTimeout(() => {
          //     PockeyStateMachine.Instance().printFsmCurrentState();
          // }, 100);
        }
      }

      return PockeyStateMachine.instance;
    }
  }]);

  return PockeyStateMachine;
}();

_defineProperty(PockeyStateMachine, "instance", void 0);

/***/ }),

/***/ "./src/client/Modules/StateMachine/typestate.ts":
/*!******************************************************!*\
  !*** ./src/client/Modules/StateMachine/typestate.ts ***!
  \******************************************************/
/*! exports provided: Transitions, TransitionFunction, FiniteStateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transitions", function() { return Transitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransitionFunction", function() { return TransitionFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiniteStateMachine", function() { return FiniteStateMachine; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Transition grouping to faciliate fluent api
 */
var Transitions =
/*#__PURE__*/
function () {
  function Transitions(fsm) {
    _classCallCheck(this, Transitions);

    this.fsm = fsm;

    _defineProperty(this, "fromStates", void 0);

    _defineProperty(this, "toStates", void 0);
  }

  _createClass(Transitions, [{
    key: "to",

    /**
     * Specify the end state(s) of a transition function
     */
    value: function to() {
      for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
        states[_key] = arguments[_key];
      }

      this.toStates = states;
      this.fsm.addTransitions(this);
    }
    /**
     * Specify that any state in the state enum is value
     * Takes the state enum as an argument
     */

  }, {
    key: "toAny",
    value: function toAny(states) {
      var toStates = [];

      for (var s in states) {
        if (states.hasOwnProperty(s)) {
          toStates.push(states[s]);
        }
      }

      this.toStates = toStates;
      this.fsm.addTransitions(this);
    }
  }]);

  return Transitions;
}();
/**
 * Internal representation of a transition function
 */

var TransitionFunction = function TransitionFunction(fsm, from, to) {
  _classCallCheck(this, TransitionFunction);

  this.fsm = fsm;
  this.from = from;
  this.to = to;
};
/**
 * A simple finite state machine implemented in TypeScript, the templated argument is meant to be used
 * with an enumeration.
 */

var FiniteStateMachine =
/*#__PURE__*/
function () {
  function FiniteStateMachine(startState) {
    var allowImplicitSelfTransition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, FiniteStateMachine);

    _defineProperty(this, "currentState", void 0);

    _defineProperty(this, "_startState", void 0);

    _defineProperty(this, "_allowImplicitSelfTransition", void 0);

    _defineProperty(this, "_transitionFunctions", []);

    _defineProperty(this, "_onCallbacks", {});

    _defineProperty(this, "_exitCallbacks", {});

    _defineProperty(this, "_enterCallbacks", {});

    _defineProperty(this, "_invalidTransitionCallback", null);

    this.currentState = startState;
    this._startState = startState;
    this._allowImplicitSelfTransition = allowImplicitSelfTransition;
  }

  _createClass(FiniteStateMachine, [{
    key: "addTransitions",
    value: function addTransitions(fcn) {
      var _this = this;

      fcn.fromStates.forEach(function (from) {
        fcn.toStates.forEach(function (to) {
          // Only add the transition if the state machine is not currently able to transition.
          if (!_this._canGo(from, to)) {
            _this._transitionFunctions.push(new TransitionFunction(_this, from, to));
          }
        });
      });
    }
    /**
     * Listen for the transition to this state and fire the associated callback
     */

  }, {
    key: "on",
    value: function on(state, callback) {
      var key = state.toString();

      if (!this._onCallbacks[key]) {
        this._onCallbacks[key] = [];
      }

      this._onCallbacks[key].push(callback);

      return this;
    }
    /**
     * Listen for the transition to this state and fire the associated callback, returning
     * false in the callback will block the transition to this state.
     */

  }, {
    key: "onEnter",
    value: function onEnter(state, callback) {
      var key = state.toString();

      if (!this._enterCallbacks[key]) {
        this._enterCallbacks[key] = [];
      }

      this._enterCallbacks[key].push(callback);

      return this;
    }
    /**
     * Listen for the transition to this state and fire the associated callback, returning
     * false in the callback will block the transition from this state.
     */

  }, {
    key: "onExit",
    value: function onExit(state, callback) {
      var key = state.toString();

      if (!this._exitCallbacks[key]) {
        this._exitCallbacks[key] = [];
      }

      this._exitCallbacks[key].push(callback);

      return this;
    }
    /**
     * List for an invalid transition and handle the error, returning a falsy value will throw an
     * exception, a truthy one will swallow the exception
     */

  }, {
    key: "onInvalidTransition",
    value: function onInvalidTransition(callback) {
      if (!this._invalidTransitionCallback) {
        this._invalidTransitionCallback = callback;
      }

      return this;
    }
    /**
     * Declares the start state(s) of a transition function, must be followed with a '.to(...endStates)'
     */

  }, {
    key: "from",
    value: function from() {
      var _transition = new Transitions(this);

      for (var _len2 = arguments.length, states = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        states[_key2] = arguments[_key2];
      }

      _transition.fromStates = states;
      return _transition;
    }
  }, {
    key: "fromAny",
    value: function fromAny(states) {
      var fromStates = [];

      for (var s in states) {
        if (states.hasOwnProperty(s)) {
          fromStates.push(states[s]);
        }
      }

      var _transition = new Transitions(this);

      _transition.fromStates = fromStates;
      return _transition;
    }
  }, {
    key: "_validTransition",
    value: function _validTransition(from, to) {
      return this._transitionFunctions.some(function (tf) {
        return tf.from === from && tf.to === to;
      });
    }
    /**
     * Check whether a transition between any two states is valid.
     *    If allowImplicitSelfTransition is true, always allow transitions from a state back to itself.
     *     Otherwise, check if it's a valid transition.
     */

  }, {
    key: "_canGo",
    value: function _canGo(fromState, toState) {
      return this._allowImplicitSelfTransition && fromState === toState || this._validTransition(fromState, toState);
    }
    /**
     * Check whether a transition to a new state is valid
     */

  }, {
    key: "canGo",
    value: function canGo(state) {
      return this._canGo(this.currentState, state);
    }
    /**
     * Transition to another valid state
     */

  }, {
    key: "go",
    value: function go(state, event) {
      if (!this.canGo(state)) {
        if (!this._invalidTransitionCallback || !this._invalidTransitionCallback(this.currentState, state)) {
          throw new Error('Error no transition function exists from state ' + this.currentState.toString() + ' to ' + state.toString());
        }
      } else {
        this._transitionTo(state, event);
      }
    }
    /**
    * This method is availble for overridding for the sake of extensibility. 
    * It is called in the event of a successful transition.
    */
    // @ts-ignore

  }, {
    key: "onTransition",
    value: function onTransition(from, to) {} // pass, does nothing until overidden

    /**
    * Reset the finite state machine back to the start state, DO NOT USE THIS AS A SHORTCUT for a transition. 
    * This is for starting the fsm from the beginning.
    */

  }, {
    key: "reset",
    value: function reset() {
      this.currentState = this._startState;
    }
    /**
     * Whether or not the current state equals the given state
     */

  }, {
    key: "is",
    value: function is(state) {
      return this.currentState === state;
    }
  }, {
    key: "_transitionTo",
    value: function _transitionTo(state, event) {
      var _this2 = this;

      if (!this._exitCallbacks[this.currentState.toString()]) {
        this._exitCallbacks[this.currentState.toString()] = [];
      }

      if (!this._enterCallbacks[state.toString()]) {
        this._enterCallbacks[state.toString()] = [];
      }

      if (!this._onCallbacks[state.toString()]) {
        this._onCallbacks[state.toString()] = [];
      }

      var canExit = this._exitCallbacks[this.currentState.toString()].reduce(function (accum, next) {
        return accum && next.call(_this2, state);
      }, true);

      var canEnter = this._enterCallbacks[state.toString()].reduce(function (accum, next) {
        // @ts-ignore
        return accum && next.call(_this2, _this2.currentState, event);
      }, true);

      if (canExit && canEnter) {
        var old = this.currentState;
        this.currentState = state;

        this._onCallbacks[this.currentState.toString()].forEach(function (fcn) {
          fcn.call(_this2, old, event);
        });

        this.onTransition(old, state);
      }
    }
  }]);

  return FiniteStateMachine;
}(); // maintain backwards compatibility for people using the pascal cased version
// var TypeState = typestate;

/***/ }),

/***/ "./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts":
/*!**********************************************************************************************!*\
  !*** ./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts ***!
  \**********************************************************************************************/
/*! exports provided: FrameworkSocketNamespaces, FrameworkSocketEvents, FrameworkSocketMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkSocketNamespaces", function() { return FrameworkSocketNamespaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkSocketEvents", function() { return FrameworkSocketEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkSocketMessages", function() { return FrameworkSocketMessages; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FrameworkSocketNamespaces = function FrameworkSocketNamespaces() {
  _classCallCheck(this, FrameworkSocketNamespaces);
};

_defineProperty(FrameworkSocketNamespaces, "SEARCH", "/searching");

_defineProperty(FrameworkSocketNamespaces, "PLAY", "/play");

var FrameworkSocketEvents = function FrameworkSocketEvents() {
  _classCallCheck(this, FrameworkSocketEvents);
};

_defineProperty(FrameworkSocketEvents, "newConnection", "FrameworkSocketEvents." + "newConnection");

_defineProperty(FrameworkSocketEvents, "letsConnect", "FrameworkSocketEvents." + "letsConnect");

_defineProperty(FrameworkSocketEvents, "joinRoom", "FrameworkSocketEvents." + "joinRoom");

_defineProperty(FrameworkSocketEvents, "joinedRoom", "FrameworkSocketEvents." + "joinedRoom");

_defineProperty(FrameworkSocketEvents, "leftRoom", "FrameworkSocketEvents." + "leftRoom");

_defineProperty(FrameworkSocketEvents, "privateMessage", "FrameworkSocketEvents." + "privateMessage");

_defineProperty(FrameworkSocketEvents, "getSignedInUserData", "FrameworkSocketEvents." + "getSignedInUserData");

_defineProperty(FrameworkSocketEvents, "updatePlayerDatabase", "FrameworkSocketEvents." + "updatePlayerDatabase");

_defineProperty(FrameworkSocketEvents, "disconnectMySocket", "FrameworkSocketEvents." + "disconnectMySocket");

_defineProperty(FrameworkSocketEvents, "gameSetup", "FrameworkSocketEvents." + "gameSetup");

_defineProperty(FrameworkSocketEvents, "roomCreated", "FrameworkSocketEvents." + "roomCreated");

_defineProperty(FrameworkSocketEvents, "updatePlayerDataFromServer", "FrameworkSocketEvents." + "updatePlayerDataFromServer");

_defineProperty(FrameworkSocketEvents, "updatePlayerDataFromClient", "FrameworkSocketEvents." + "updatePlayerDataFromClient");

_defineProperty(FrameworkSocketEvents, "updatePlayerData", "FrameworkSocketEvents." + "updatePlayerData");

_defineProperty(FrameworkSocketEvents, "startSendingSnapshots", "FrameworkSocketEvents." + "startSendingSnapshots");

_defineProperty(FrameworkSocketEvents, "snapshotUpdate", "FrameworkSocketEvents." + "snapshotUpdate");

var FrameworkSocketMessages = function FrameworkSocketMessages() {
  _classCallCheck(this, FrameworkSocketMessages);
};

_defineProperty(FrameworkSocketMessages, "WHO_WANTS_TO_PLAY", "FrameworkSocketMessages." + "WHO_WANTS_TO_PLAY");

_defineProperty(FrameworkSocketMessages, "I_WANT_TO_PLAY", "FrameworkSocketMessages." + "I_WANTS_TO_PLAY");

_defineProperty(FrameworkSocketMessages, "HELLO", "FrameworkSocketMessages." + "HELLO");

/***/ }),

/***/ "./src/common/player.ts":
/*!******************************!*\
  !*** ./src/common/player.ts ***!
  \******************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var _client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/qFramework/AbstractModules/Connection/connection-channels-and-messages */ "./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/8/2019
 */

/*
import {FrameworkSocketEvents} from "../client/qFramework/AbstractModules/Connection/connection-channels-and-messages";
import * as _ from "lodash";
import {PockeySettings} from "../client/pockey-settings";
import {SignalsManager} from "../client/qFramework/Signals/signals-manager";
import {PockeySignalTypes} from "../client/Modules/SignalsModule/pockey-signal-types";
import {Settings} from "../client/qFramework/Settings";
*/

var Player =
/*#__PURE__*/
function () {
  // public isClient: boolean = false;
  function Player() {
    _classCallCheck(this, Player);

    _defineProperty(this, "data", {});

    _defineProperty(this, "socket", void 0);

    _defineProperty(this, "isLookingForPartner", false);

    _defineProperty(this, "isFirstToStart", false);
  }

  _createClass(Player, [{
    key: "setSocket",
    value: function setSocket(socket) {
      var newSocketID = socket.id.toString().replace(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketNamespaces"].SEARCH, '').replace("#", "");
      newSocketID = newSocketID.replace(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketNamespaces"].PLAY, '').replace("#", "");
      this.data.socketID = newSocketID;
      this.socket = socket;
      if (this.data.socketID) console.log("player socket initialized: " + this.data.socketID);
    }
  }, {
    key: "updatePlayerData",
    value: function updatePlayerData(usernameData) {
      if (usernameData.avatar) {
        this.data.avatar = usernameData.avatar;
      }

      if (usernameData.color) {
        this.data.color = usernameData.color;
      }

      if (usernameData.decal) {
        this.data.decal = usernameData.decal;
      }

      if (usernameData.felt) {
        this.data.felt = usernameData.felt;
      }

      if (usernameData.player_level) {
        this.data.player_level = usernameData.player_level;
      }

      if (usernameData.stick) {
        this.data.stick = usernameData.stick;
      }

      if (usernameData.total_points) {
        this.data.total_points = usernameData.total_points;
      }

      if (usernameData.total_points) {
        this.data.total_points = usernameData.total_points;
      }

      if (usernameData.nickname) {
        this.data.nickname = usernameData.nickname;
      }

      if (usernameData.user_id) {
        this.data.user_id = usernameData.user_id;
      }

      if (usernameData.first_login_date) {
        this.data.first_login_date = usernameData.first_login_date;
      }

      if (usernameData.type) {
        this.data.type = usernameData.type;
      }
    }
  }, {
    key: "onReceiveSnapshotUpdate",
    value: function onReceiveSnapshotUpdate(data) {
      console.log("Snapshot received/////////");
      console.log(data);
      console.log("Snapshot received//////////");
    }
  }, {
    key: "sendGameSnapshot",
    value: function sendGameSnapshot(data) {
      //         console.log("send snapshot to other player");
      this.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, data);
    }
  }, {
    key: "selfDestroy",
    value: function selfDestroy() {
      console.log("player removed");
    }
  }]);

  return Player;
}();

/***/ }),

/***/ "./src/common/pockey-game-settings.ts":
/*!********************************************!*\
  !*** ./src/common/pockey-game-settings.ts ***!
  \********************************************/
/*! exports provided: BallType, WinStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallType", function() { return BallType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinStatus", function() { return WinStatus; });
var BallType;

(function (BallType) {
  BallType["Left"] = "LeftBall";
  BallType["Right"] = "RightBall";
  BallType["White"] = "WhiteBall";
  BallType["Puck"] = "Puck";
})(BallType || (BallType = {}));

var WinStatus;

(function (WinStatus) {
  WinStatus[WinStatus["WIN"] = 0] = "WIN";
  WinStatus[WinStatus["LOST"] = 1] = "LOST";
})(WinStatus || (WinStatus = {}));

/***/ }),

/***/ "./src/server/pockey-player-server.ts":
/*!********************************************!*\
  !*** ./src/server/pockey-player-server.ts ***!
  \********************************************/
/*! exports provided: PockeyPlayerServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyPlayerServer", function() { return PockeyPlayerServer; });
/* harmony import */ var _common_player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/player */ "./src/common/player.ts");
/* harmony import */ var _client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/qFramework/AbstractModules/Connection/connection-channels-and-messages */ "./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/9/2019
 */


var PockeyPlayerServer =
/*#__PURE__*/
function (_Player) {
  _inherits(PockeyPlayerServer, _Player);

  function PockeyPlayerServer() {
    _classCallCheck(this, PockeyPlayerServer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PockeyPlayerServer).call(this)); // socket.on(FrameworkSocketEvents.updatePlayerDataFromClient, this.updatePlayerData.bind(this));
    // this.socket.on(FrameworkSocketEvents.updatePlayerDataFromClient, this.updatePlayerData.bind(this));
  }

  _createClass(PockeyPlayerServer, [{
    key: "updatePlayerData",
    value: function updatePlayerData(usernameData) {
      _get(_getPrototypeOf(PockeyPlayerServer.prototype), "updatePlayerData", this).call(this, usernameData);

      console.log("server player updated. sending player data update to client");
      this.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["FrameworkSocketEvents"].updatePlayerData, this.data);
    }
  }]);

  return PockeyPlayerServer;
}(_common_player__WEBPACK_IMPORTED_MODULE_0__["Player"]);

/***/ }),

/***/ "./src/server/pockey-room.ts":
/*!***********************************!*\
  !*** ./src/server/pockey-room.ts ***!
  \***********************************/
/*! exports provided: PockeyRoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyRoom", function() { return PockeyRoom; });
/* harmony import */ var _client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/qFramework/AbstractModules/Connection/connection-channels-and-messages */ "./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts");
/* harmony import */ var _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/pockey-game-settings */ "./src/common/pockey-game-settings.ts");
/* harmony import */ var _client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/Modules/ConnectionModule/pockey-connection-channels-and-messages */ "./src/client/Modules/ConnectionModule/pockey-connection-channels-and-messages.ts");
/* harmony import */ var _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/Modules/StateMachine/pockey-state-machine */ "./src/client/Modules/StateMachine/pockey-state-machine.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 4/8/2019
 */




var PockeyRoom =
/*#__PURE__*/
function () {
  function PockeyRoom(id, io) {
    _classCallCheck(this, PockeyRoom);

    _defineProperty(this, "id", "");

    _defineProperty(this, "players", []);

    _defineProperty(this, "io", void 0);

    _defineProperty(this, "gameData", {
      roundNumber: 1,
      ballsNumber: 7
    });

    _defineProperty(this, "scoreUpdated", false);

    _defineProperty(this, "whiteBallInTheHall", false);

    _defineProperty(this, "ownBallFault", false);

    _defineProperty(this, "opponentBallScored", false);

    _defineProperty(this, "currentPlayer", void 0);

    this.id = id;
    this.io = io; // this.players.push(this.player1);
    // this.players.push(this.player2);

    console.log("room created");
  }

  _createClass(PockeyRoom, [{
    key: "assignPlayer",
    value: function assignPlayer(player) {
      var _this = this;

      player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, function (data) {
        // console.log("playa: " + player);
        _this.sendGameSnapshot(player.data.socketID, data);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].BALL_IN_THE_HALL, function (ballType) {
        _this.updateScore(player.data.socketID, ballType);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].OWN_BALL_TOUCHED_FIRST, function () {
        _this.onOwnBallTouchedFirst();
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHECK_NEXT_TURN, function () {
        _this.checkNextTurn();
      });
      this.players.push(player);
      console.log("room: " + this.id + " -> player assigned: " + player.data.socketID + " -> total players: " + this.players.length); // console.log("room: " + this.id + " -> );

      if (this.players.length == 2) {
        this.sendGameSetup();
      }
    }
  }, {
    key: "onOwnBallTouchedFirst",
    value: function onOwnBallTouchedFirst() {
      this.ownBallFault = true;
    }
  }, {
    key: "updateScore",
    value: function updateScore(socketID, ballType) {
      var player;
      var opponent; // _.forEach(this.players, (playa: Player) => {

      if (socketID == this.players[0].data.socketID) {
        player = this.players[0];
        opponent = this.players[1];
      } else {
        player = this.players[1];
        opponent = this.players[0];
      } // });


      if (ballType == player.data.type) {
        if (this.currentPlayer == player) {
          this.ownBallFault = true;
        } else {
          this.opponentBallScored = true;
        }

        player.data.currentScore--;
        this.scoreUpdated = true;
      } else if (ballType == opponent.data.type) {
        if (this.currentPlayer == opponent) {
          this.ownBallFault = true;
        } else {
          this.opponentBallScored = true;
        }

        opponent.data.currentScore--;
        this.scoreUpdated = true;
      } else if (ballType == _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_1__["BallType"].White) {
        this.whiteBallInTheHall = true;
      }

      if (player.data.currentScore <= 0) {} else if (opponent.data.currentScore <= 0) {}
    }
  }, {
    key: "checkNextTurn",
    value: function checkNextTurn() {
      if (this.whiteBallInTheHall) {
        console.log("intra");
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots); // this.players[0].socket.emit(FrameworkSocketEvents.startSendingSnapshots);
      } else if (this.ownBallFault) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
      } else if (!this.opponentBallScored) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
      } else {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
      }
    }
  }, {
    key: "changeCurrentPlayer",
    value: function changeCurrentPlayer() {
      this.currentPlayer = this.currentPlayer == this.players[0] ? this.players[1] : this.players[0];
      this.opponentBallScored = false;
      this.whiteBallInTheHall = false;
      this.ownBallFault = false;
    } // _.forEach(this.players, (player: Player) => {
    //     if (ballSocketID == player.data.socketID) {
    //         player.data.currentScore--;
    //     }
    //
    //     // if (player.data.socketID == playerSocketID) {
    //     //
    //     // }
    //
    //     if (player.data.currentScore <= 0) {
    //
    //     }
    // });

  }, {
    key: "sendGameSnapshot",
    value: function sendGameSnapshot(socketID, data) {
      // console.log("snapshot received on room: " + this.id);
      if (this.players[0].data.socketID == socketID) {
        this.players[0].socket.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, data);
      } else {
        this.players[1].socket.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, data);
      }

      if (this.scoreUpdated) {
        this.scoreUpdated = false;
        this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].SCORE_UPDATED, [this.players[0].data, this.players[1].data]);
      }
    }
  }, {
    key: "sendGameSetup",
    value: function sendGameSetup() {
      this.players[0].isFirstToStart = true;
      this.currentPlayer = this.players[0];
      this.players[0].data.type = _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_1__["BallType"].Left;
      this.players[0].data.currentScore = 7;
      this.players[1].data.type = _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_1__["BallType"].Right;
      this.players[1].data.currentScore = 7;
      this.io.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].gameSetup, [this.players[0].data, this.players[1].data, this.gameData]);
      setTimeout(this.sendStartRound.bind(this), 1000);
    }
  }, {
    key: "sendStartRound",
    value: function sendStartRound() {
      if (this.players[0].isFirstToStart) {
        this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.players[0].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
      } else {
        this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.players[1].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
      }
    }
  }]);

  return PockeyRoom;
}();

/***/ }),

/***/ "./src/server/pockey-server-index.ts":
/*!*******************************************!*\
  !*** ./src/server/pockey-server-index.ts ***!
  \*******************************************/
/*! exports provided: PockeyServerIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyServerIndex", function() { return PockeyServerIndex; });
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-static */ "node-static");
/* harmony import */ var node_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pg */ "pg");
/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client/qFramework/AbstractModules/Connection/connection-channels-and-messages */ "./src/client/qFramework/AbstractModules/Connection/connection-channels-and-messages.ts");
/* harmony import */ var _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/pockey-game-settings */ "./src/common/pockey-game-settings.ts");
/* harmony import */ var _pockey_room__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pockey-room */ "./src/server/pockey-room.ts");
/* harmony import */ var _pockey_player_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pockey-player-server */ "./src/server/pockey-player-server.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *  Edgeflow
 *  Copyright 2018 EdgeFlow
 *  All Rights Reserved.
 *
 *  NOTICE: You may not use, distribute or modify this document without the
 *  written permission of its copyright owner
 *
 *  Created by Sandru Andrei on 2/27/2019
 */









var PockeyServerIndex =
/*#__PURE__*/
function () {
  // protected playingNamespace
  function PockeyServerIndex() {
    _classCallCheck(this, PockeyServerIndex);

    _defineProperty(this, "file", void 0);

    _defineProperty(this, "httpServer", void 0);

    _defineProperty(this, "socketIo", void 0);

    _defineProperty(this, "socketIsFree", true);

    _defineProperty(this, "databaseConnected", false);

    _defineProperty(this, "databasePool", void 0);

    _defineProperty(this, "rooms", []);

    _defineProperty(this, "players", []);

    this.initializeServer();
    this.initializeDb();
    this.createSocket(); // this.createGame();
  }

  _createClass(PockeyServerIndex, [{
    key: "initializeServer",
    value: function initializeServer() {
      var _this = this;

      this.file = new node_static__WEBPACK_IMPORTED_MODULE_1__["Server"]('dist', {
        // bin is the folder containing our html, etc
        cache: 0,
        // don't cache
        // @ts-ignore
        gzip: true // gzip our assets

      });
      var port = process.env.PORT || 8080; // create our server

      this.httpServer = http__WEBPACK_IMPORTED_MODULE_2__["createServer"](function (request, response) {
        request.addListener('end', function () {
          _this.file.serve(request, response);
        });
        request.resume();
      });
      this.httpServer.on('listening', function () {
        console.log('ok, server is running');
      });
      this.httpServer.listen(port, '0.0.0.0');
    }
  }, {
    key: "initializeDb",
    value: function initializeDb() {
      var _this2 = this;

      this.databasePool = new pg__WEBPACK_IMPORTED_MODULE_4__["Pool"]({
        user: 'npvswhggxgsgxk',
        host: 'ec2-54-225-98-131.compute-1.amazonaws.com',
        database: 'd1uk2vnpdjl28q',
        password: '556e5013ea1dec59d2daa5d7bff223ec028c16da4ac577db94e78dbc75471965',
        port: 5432,
        ssl: true
      });
      this.databasePool.on('error', function (err) {
        console.error('Unexpected error on idle client', err);
        process.exit(-1);
      });
      this.databasePool.connect(function (err) {
        if (err) {
          throw err;
        } else {
          console.log("s-a logat, merge.");
          _this2.databaseConnected = true;
        }
      });
    }
  }, {
    key: "createSocket",
    value: function createSocket() {
      this.socketIo = socket_io__WEBPACK_IMPORTED_MODULE_3___default()();
      this.socketIo.serveClient(true); // the server will serve the client js file

      this.socketIo.attach(this.httpServer);
      this.handleSocketEvents();
    }
  }, {
    key: "handleSocketEvents",
    value: function handleSocketEvents() {
      var _this3 = this;

      this.socketIo.on('connection', function (socket) {
        var player = new _pockey_player_server__WEBPACK_IMPORTED_MODULE_8__["PockeyPlayerServer"]();
        player.setSocket(socket);

        _this3.players.push(player);

        socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].newConnection, player.data.socketID);
        console.log('a user connected. users connected: ' + _this3.players.length); //todo aici trebuie sa te ocupi de disconnect dar si pe celalalte socketuri

        player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].getSignedInUserData, function (username) {
          console.log('-> get signed in player');

          if (_this3.databaseConnected) {
            _this3.checkForUserID(player, username);
          }
        });
        player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].updatePlayerDatabase, function (data) {
          console.log('-> update player database');

          if (_this3.databaseConnected) {
            _this3.updateUserDb(player, data);
          }
        });
        player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].updatePlayerData, function (data) {
          console.log('-> update player data');
          player.updatePlayerData(data); // if (this.databaseConnected) {
          //     this.updateUserDb(player, data);
          // }
        });
        player.socket.on('disconnect', function () {
          // console.log("a iesit de pe canalul pacii: " + socket.id);
          _this3.players.forEach(function (player, index) {
            if (player.data.socketID === socket.id) {
              _this3.players.splice(index, 1);

              player.selfDestroy();
            }
          });

          console.log('a user left. users connected: ' + _this3.players.length); // socket.to(room).emit(FrameworkSocketEvents.leftRoom, socket.id);
          // socket.disconnect();
        });
      });
      /*this.socketIo.on('disconnect', (socket: any) => {
          this.players.forEach((player: Player, index: number) => {
              if (player.data.socketID === socket.id) {
                  this.players.splice(index, 1);
              }
          });
          // console.log('user disconnected');
          // connectCounter--;
          console.log('a user left. users connected: ' + this.players.length);
      });*/
      // this.socketIo.on('disconnect', (socket) => {
      //s
      // });

      var lookingForPartnerNamespace = this.socketIo.of(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketNamespaces"].SEARCH);
      lookingForPartnerNamespace.on('connection', function (socket) {
        var id = socket.id.toString().replace(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketNamespaces"].SEARCH, '').replace("#", "");

        var player = _this3.getPlayerByID(id, socket);

        player.isLookingForPartner = true;
        console.log(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketNamespaces"].SEARCH + ' -> someone connected: ' + player.data.socketID);

        _this3.matchMaker(player);
        /*socket.on(FrameworkSocketEvents.letsConnect, (msg: any, id: string, partnerID: string) => {
            socket.broadcast.emit(FrameworkSocketEvents.letsConnect, msg, id, partnerID);
        });*/

      });
      var playingNamespace = this.socketIo.of(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketNamespaces"].PLAY);
      playingNamespace.on('connection', function (socket) {
        var id = socket.id.toString().replace(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketNamespaces"].PLAY, '').replace("#", "");

        var player = _this3.getPlayerByID(id, socket);

        player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].joinRoom, function (roomID) {
          player.socket.join(roomID);

          var pockeyRoom = _this3.getRoomByID(roomID, playingNamespace);

          pockeyRoom.assignPlayer(player); // socket.broadcast.emit(FrameworkSocketEvents.joinRoom, room, id);

          player.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].joinedRoom, roomID); // console.log("on join room. room nickname: " + roomID);

          socket.on('disconnect', function () {
            console.log("a iesit de pe canalul pacii: " + socket.id);
            socket.to(roomID).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].leftRoom, socket.id);
            socket.disconnect();
          });
        });
        player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].privateMessage, function (room, messageType, messageData) {
          if (messageType == _client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketMessages"].HELLO) console.log("se face helloul");
          socket.broadcast.to(room).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].privateMessage, messageType, messageData);
        });
        socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].disconnectMySocket, function () {});
      });
    }
  }, {
    key: "matchMaker",
    value: function matchMaker(player) {
      this.players.forEach(function (otherPlayer) {
        if (player != otherPlayer && otherPlayer.isLookingForPartner) {
          console.log("we have a room");
          player.isLookingForPartner = false;
          otherPlayer.isLookingForPartner = false;
          var roomID = player.data.socketID + "#" + otherPlayer.data.socketID;
          player.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].roomCreated, roomID);
          otherPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_5__["FrameworkSocketEvents"].roomCreated, roomID);
          return true;
        }
      });
    }
  }, {
    key: "getPlayerByID",
    value: function getPlayerByID(id, socket) {
      var playerByID = new _pockey_player_server__WEBPACK_IMPORTED_MODULE_8__["PockeyPlayerServer"](); // console.log("get player by id -> searching: " + id);

      this.players.forEach(function (player) {
        if (player.data.socketID === id) {
          // console.log("get player by id -> found: " + id);
          playerByID = player;
          playerByID.setSocket(socket);
          return true;
        }
      });
      playerByID.socket = socket;
      return playerByID;
    }
  }, {
    key: "getRoomByID",
    value: function getRoomByID(roomID, io) {
      // let playerByID: Player = new Player("");
      console.log("get room by id -> searching: " + roomID);
      var roomByID;
      this.rooms.forEach(function (room) {
        if (room.id == roomID) {
          roomByID = room;
          return true;
        } // if (player.data.socketID === id) {
        //     console.log("get player by id -> found: " + id);
        //     playerByID = player;
        //     return true;
        // }

      });

      if (!roomByID) {
        roomByID = new _pockey_room__WEBPACK_IMPORTED_MODULE_7__["PockeyRoom"](roomID, io);
        this.rooms.push(roomByID);
      }

      return roomByID;
    }
  }, {
    key: "updateUserDb",
    value: function updateUserDb(player, data) {
      var _this4 = this;

      var sqlText = "UPDATE pockey_table SET " + data["column"] + "='" + data["value"] + "' WHERE user_id='" + data["userID"] + "'";

      if (data["type"] == "winStatus") {
        if (data["value"] == _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_6__["WinStatus"].WIN) {
          // sqlText = "UPDATE USER_TABLE SET " + data["column"] + "='points' + 10 WHERE GID='Yojimbo'";
          sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'"; // console.log("sqlText la win: " + sqlText);
        } else if (data["value"] == _common_pockey_game_settings__WEBPACK_IMPORTED_MODULE_6__["WinStatus"].LOST) {
          sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'";
        }
      }

      console.log("sqlText: " + sqlText, "type: " + data["type"], "value: " + data["value"]);

      _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var client, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this4.databasePool.connect();

              case 2:
                client = _context.sent;
                _context.prev = 3;
                _context.next = 6;
                return client.query(sqlText);

              case 6:
                res = _context.sent;

                // console.log("acum se face");
                _this4.checkForUserID(player, data["userID"]);

              case 8:
                _context.prev = 8;
                client.release();
                return _context.finish(8);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3,, 8, 11]]);
      }))().catch(function (e) {
        return console.log(e.stack);
      });
    }
  }, {
    key: "checkForUserID",
    value: function checkForUserID(player, username) {
      var _this5 = this;

      console.log("checking db for user_id: " + username);
      var query = {
        // give the query a unique nickname
        name: 'fetch-user',
        text: 'SELECT * FROM pockey_table WHERE USER_ID = $1',
        values: [username]
      };
      this.databasePool.query(query).then(function (res) {
        if (res.rows[0] == undefined || res.rows[0] == "undefined" || res.rows[0] == null) {
          _this5.createNewUser(player.socket, username);
        } else {
          player.updatePlayerData(res.rows[0]);
        } // console.log(res.rows[0]); // ['Brian', 'Carlson']

      }).catch(function (e) {
        console.error(e.stack);
      });
    }
  }, {
    key: "createNewUser",
    value: function createNewUser(player, username) {
      var _this6 = this;

      console.log("creating new user: " + username);
      var createNewUserQuery = {
        name: 'create-new-user',
        text: 'INSERT INTO pockey_table(user_id) VALUES($1)',
        values: [username]
      };
      this.databasePool.query(createNewUserQuery) // @ts-ignore
      .then(function (res) {
        /* console.log("new user created. user saved into db");
         this.socketIo.emit(FrameworkSocketEvents.getSignedInUserData, res.rows[0]);*/
        _this6.checkForUserID(player.socket, username);
      }).catch(function (e) {
        console.error(e.stack);
      });
    }
    /* private createGame(): void {
         this.gameEngine = new PockeyGameEngineForServer({traceLevel: Trace.TRACE_NONE});
         this.serverEngine = new PockeyServerEngine(this.socketIo, this.gameEngine, {debug: {}, updateRate: 6});
         // start the game
         // this.serverEngine.start();
     }*/

  }]);

  return PockeyServerIndex;
}();
new PockeyServerIndex();

/***/ }),

/***/ 0:
/*!**************************************************************!*\
  !*** multi @babel/polyfill ./src/server/pockey-server-index ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"@babel/polyfill");
module.exports = __webpack_require__(/*! D:\edge flow\pockey-v2\src\server\pockey-server-index */"./src/server/pockey-server-index.ts");


/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "node-static":
/*!******************************!*\
  !*** external "node-static" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-static");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pg");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL1N0YXRlTWFjaGluZS90eXBlc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcGxheWVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vcG9ja2V5LWdhbWUtc2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktcGxheWVyLXNlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1yb29tLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXNlcnZlci1pbmRleC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYmFiZWwvcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJodHRwXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibm9kZS1zdGF0aWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tldC5pb1wiIl0sIm5hbWVzIjpbIlBvY2tleVNvY2tldE1lc3NhZ2VzIiwiUG9ja2V5U3RhdGVzIiwiUG9ja2V5U3RhdGVNYWNoaW5lIiwiZnNtIiwiZnJvbSIsIm9uTG9hZCIsInRvIiwib25NYWluTWVudSIsIm9uUmVhcnJhbmdlU3RpY2siLCJvblNlYXJjaEZvclBhcnRuZXIiLCJvblByZXBhcmVSb3VuZE9uZSIsIm9uV2F0Y2giLCJvblJvdW5kRW5kIiwib25QcmVwYXJlUm91bmRUd28iLCJvblByZXBhcmVSb3VuZFRocmVlIiwib25SZXBvc2l0aW9uV2hpdGVCYWxsIiwib25FbmRUdXJuIiwib25FbmRNYXRjaCIsIm9uU2hvb3QiLCJkZWxheWVkU3RhdGUiLCJuZXh0U3RhdGUiLCJJbnN0YW5jZSIsImNoYW5nZVN0YXRlIiwiXyIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInByaW50RnNtQ3VycmVudFN0YXRlIiwiZ28iLCJzIiwiY3VycmVudFN0YXRlIiwiZ2V0Q3VycmVudFN0YXRlTmFtZSIsImluc3RhbmNlIiwiaW5pdGlhbGl6ZWQiLCJGaW5pdGVTdGF0ZU1hY2hpbmUiLCJJbml0aWFsaXplU3RhdGVzIiwiVHJhbnNpdGlvbnMiLCJzdGF0ZXMiLCJ0b1N0YXRlcyIsImFkZFRyYW5zaXRpb25zIiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwiVHJhbnNpdGlvbkZ1bmN0aW9uIiwic3RhcnRTdGF0ZSIsImFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiIsIl9zdGFydFN0YXRlIiwiX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiIsImZjbiIsImZyb21TdGF0ZXMiLCJmb3JFYWNoIiwiX2NhbkdvIiwiX3RyYW5zaXRpb25GdW5jdGlvbnMiLCJjYWxsYmFjayIsImtleSIsInRvU3RyaW5nIiwiX29uQ2FsbGJhY2tzIiwiX2VudGVyQ2FsbGJhY2tzIiwiX2V4aXRDYWxsYmFja3MiLCJfaW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayIsIl90cmFuc2l0aW9uIiwic29tZSIsInRmIiwiZnJvbVN0YXRlIiwidG9TdGF0ZSIsIl92YWxpZFRyYW5zaXRpb24iLCJldmVudCIsImNhbkdvIiwiRXJyb3IiLCJfdHJhbnNpdGlvblRvIiwiY2FuRXhpdCIsInJlZHVjZSIsImFjY3VtIiwibmV4dCIsImNhbGwiLCJjYW5FbnRlciIsIm9sZCIsIm9uVHJhbnNpdGlvbiIsIkZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMiLCJGcmFtZXdvcmtTb2NrZXRFdmVudHMiLCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcyIsIlBsYXllciIsInNvY2tldCIsIm5ld1NvY2tldElEIiwiaWQiLCJyZXBsYWNlIiwiU0VBUkNIIiwiUExBWSIsImRhdGEiLCJzb2NrZXRJRCIsInVzZXJuYW1lRGF0YSIsImF2YXRhciIsImNvbG9yIiwiZGVjYWwiLCJmZWx0IiwicGxheWVyX2xldmVsIiwic3RpY2siLCJ0b3RhbF9wb2ludHMiLCJuaWNrbmFtZSIsInVzZXJfaWQiLCJmaXJzdF9sb2dpbl9kYXRlIiwidHlwZSIsImVtaXQiLCJzbmFwc2hvdFVwZGF0ZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInJvdW5kTnVtYmVyIiwiYmFsbHNOdW1iZXIiLCJwbGF5ZXIiLCJvbiIsInNlbmRHYW1lU25hcHNob3QiLCJCQUxMX0lOX1RIRV9IQUxMIiwiYmFsbFR5cGUiLCJ1cGRhdGVTY29yZSIsIk9XTl9CQUxMX1RPVUNIRURfRklSU1QiLCJvbk93bkJhbGxUb3VjaGVkRmlyc3QiLCJDSEVDS19ORVhUX1RVUk4iLCJjaGVja05leHRUdXJuIiwicGxheWVycyIsImxlbmd0aCIsInNlbmRHYW1lU2V0dXAiLCJvd25CYWxsRmF1bHQiLCJvcHBvbmVudCIsImN1cnJlbnRQbGF5ZXIiLCJvcHBvbmVudEJhbGxTY29yZWQiLCJjdXJyZW50U2NvcmUiLCJzY29yZVVwZGF0ZWQiLCJXaGl0ZSIsIndoaXRlQmFsbEluVGhlSGFsbCIsIkNIQU5HRV9TVEFURSIsImNoYW5nZUN1cnJlbnRQbGF5ZXIiLCJzdGFydFNlbmRpbmdTbmFwc2hvdHMiLCJTQ09SRV9VUERBVEVEIiwiaXNGaXJzdFRvU3RhcnQiLCJMZWZ0IiwiUmlnaHQiLCJnYW1lU2V0dXAiLCJnYW1lRGF0YSIsInNldFRpbWVvdXQiLCJzZW5kU3RhcnRSb3VuZCIsImJpbmQiLCJQb2NrZXlTZXJ2ZXJJbmRleCIsImluaXRpYWxpemVTZXJ2ZXIiLCJpbml0aWFsaXplRGIiLCJjcmVhdGVTb2NrZXQiLCJmaWxlIiwiU2VydmVyIiwiY2FjaGUiLCJnemlwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiaHR0cFNlcnZlciIsImh0dHAiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJhZGRMaXN0ZW5lciIsInNlcnZlIiwicmVzdW1lIiwibGlzdGVuIiwiZGF0YWJhc2VQb29sIiwiUG9vbCIsInVzZXIiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsInNzbCIsImVyciIsImVycm9yIiwiZXhpdCIsImNvbm5lY3QiLCJkYXRhYmFzZUNvbm5lY3RlZCIsInNvY2tldElvIiwic29ja2V0SU8iLCJzZXJ2ZUNsaWVudCIsImF0dGFjaCIsImhhbmRsZVNvY2tldEV2ZW50cyIsInNldFNvY2tldCIsIm5ld0Nvbm5lY3Rpb24iLCJnZXRTaWduZWRJblVzZXJEYXRhIiwidXNlcm5hbWUiLCJjaGVja0ZvclVzZXJJRCIsInVwZGF0ZVBsYXllckRhdGFiYXNlIiwidXBkYXRlVXNlckRiIiwiaW5kZXgiLCJzcGxpY2UiLCJzZWxmRGVzdHJveSIsImxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlIiwib2YiLCJnZXRQbGF5ZXJCeUlEIiwiaXNMb29raW5nRm9yUGFydG5lciIsIm1hdGNoTWFrZXIiLCJwbGF5aW5nTmFtZXNwYWNlIiwiam9pblJvb20iLCJyb29tSUQiLCJqb2luIiwicG9ja2V5Um9vbSIsImdldFJvb21CeUlEIiwiYXNzaWduUGxheWVyIiwiam9pbmVkUm9vbSIsImxlZnRSb29tIiwiZGlzY29ubmVjdCIsInByaXZhdGVNZXNzYWdlIiwicm9vbSIsIm1lc3NhZ2VUeXBlIiwibWVzc2FnZURhdGEiLCJIRUxMTyIsImJyb2FkY2FzdCIsImRpc2Nvbm5lY3RNeVNvY2tldCIsIm90aGVyUGxheWVyIiwicm9vbUNyZWF0ZWQiLCJwbGF5ZXJCeUlEIiwicm9vbUJ5SUQiLCJyb29tcyIsInNxbFRleHQiLCJXSU4iLCJMT1NUIiwiY2xpZW50IiwicXVlcnkiLCJyZXMiLCJyZWxlYXNlIiwiY2F0Y2giLCJlIiwic3RhY2siLCJuYW1lIiwidGV4dCIsInZhbHVlcyIsInRoZW4iLCJyb3dzIiwidW5kZWZpbmVkIiwiY3JlYXRlTmV3VXNlciIsImNyZWF0ZU5ld1VzZXJRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxvQkFBYjtBQUFBO0FBQUE7O2dCQUFhQSxvQixXQUNxQiwwQkFBMEIsTzs7Z0JBRC9DQSxvQixjQUd3QiwwQkFBMEIsVTs7Z0JBSGxEQSxvQixlQUl5QiwwQkFBMEIsVzs7Z0JBSm5EQSxvQix1QkFLaUMsMEJBQTBCLG1COztnQkFMM0RBLG9CLHNCQU1nQywwQkFBMEIs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TDtBQVVIO0FBR0Q7Ozs7Ozs7QUE1VUo7O0FBQUE7QUFBQTtBQW9WQSxJQUFJbkYsaUJBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVdBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFBvY2tleVNvY2tldE1lc3NhZ2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgV0FUQ0g6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIldBVENIXCI7XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIFNDT1JFX1VQREFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiU0NPUkVfVVBEQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBZT1VSX1RVUk46IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIllPVVJfVFVSTlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVF9TRVRUSU5HUzogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1BQT05FTlRfU0VUVElOR1NcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlRfUkVNQVRDSDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1BQT05FTlRfUkVNQVRDSFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBESVNDT05ORUNUX01ZX1NPQ0tFVDogc3RyaW5nID0gXCJDb25uZWN0aW9uU2lnbmFsc1R5cGUuXCIgKyAnRElTQ09OTkVDVF9NWV9TT0NLRVQnO1xyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgT1BQT05FTlRfUkVTVEFSVDogYW55O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQkFMTF9JTl9USEVfSEFMTDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQkFMTF9JTl9USEVfSEFMTFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTQ09SRV9VUERBVEVEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJTQ09SRV9VUERBVEVEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIENIRUNLX05FWFRfVFVSTjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQ0hFQ0tfTkVYVF9UVVJOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIENIQU5HRV9TVEFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQ0hBTkdFX1NUQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9XTl9CQUxMX1RPVUNIRURfRklSU1Q6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9XTl9CQUxMX1RPVUNIRURfRklSU1RcIjtcclxufVxyXG5cclxuIiwiaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7RmluaXRlU3RhdGVNYWNoaW5lfSBmcm9tIFwiLi90eXBlc3RhdGVcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFBvY2tleVN0YXRlcyB7XHJcbiAgICAvKjAqL29uTG9hZCxcclxuICAgIC8qMSovb25NYWluTWVudSxcclxuICAgIC8qMiovb25TdGFydCxcclxuICAgIC8qMyovb25Sb3VuZEVuZCxcclxuICAgIC8qNCovb25EZWZpbmVDbGllbnQsXHJcbiAgICAvKjUqL29uU2VhcmNoRm9yUGFydG5lcixcclxuICAgIC8qNiovb25XYXRjaCxcclxuICAgIC8qNyovb25SZWFycmFuZ2VTdGljayxcclxuICAgIC8qOCovb25SZXBvc2l0aW9uV2hpdGVCYWxsLFxyXG4gICAgLyo5Ki9vblNob290LFxyXG4gICAgLyoxMCovb25FbmRUdXJuLFxyXG4gICAgLyoxMSovb25FbmRNYXRjaCxcclxuICAgIC8qMTIqL29uUHJlcGFyZVJvdW5kT25lLFxyXG4gICAgLyoxMyovb25QcmVwYXJlUm91bmRUd28sXHJcbiAgICAvKjE0Ki9vblByZXBhcmVSb3VuZFRocmVlLFxyXG59XHJcblxyXG4vLyBleHBvcnQgZW51bSBQb2NrZXlTdGF0ZXMge1xyXG4vLyAgICAgU3RhcnRHYW1lLFxyXG4vLyAgICAgUGxheWVyVHVybixcclxuLy8gICAgIFBsYXllclR1cm5GaXJzdEJhbGwsXHJcbi8vICAgICBPcHBvbmVudFR1cm4sXHJcbi8vICAgICBPcHBvbmVudFR1cm5GaXJzdEJhbGwsXHJcbi8vXHJcbi8vIH1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5U3RhdGVNYWNoaW5lIHtcclxuXHJcbiAgICAvLyBDb25zdHJ1Y3QgdGhlIEZTTSB3aXRoIHRoZSBpbml0YWwgc3RhdGUsIGluIHRoaXMgY2FzZSB0aGUgZWxldmF0b3Igc3RhcnRzIHdpdGggaXRzIGRvb3JzIG9wZW5lZFxyXG4gICAgcHVibGljIGZzbTogRmluaXRlU3RhdGVNYWNoaW5lPFBvY2tleVN0YXRlcz47XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IFBvY2tleVN0YXRlTWFjaGluZTtcclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIG5leHRTdGF0ZTogYW55O1xyXG5cclxuICAgIC8vIHByaXZhdGUgY3VycmVudFN0YXRlOmFueTtcclxuXHJcbiAgICBzdGF0aWMgSW5zdGFuY2UoKTogUG9ja2V5U3RhdGVNYWNoaW5lIHtcclxuICAgICAgICBpZiAoIVBvY2tleVN0YXRlTWFjaGluZS5pbnN0YW5jZSkge1xyXG4gICAgICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2UgPSBuZXcgUG9ja2V5U3RhdGVNYWNoaW5lKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmluaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20gPSBuZXcgRmluaXRlU3RhdGVNYWNoaW5lPFBvY2tleVN0YXRlcz4oUG9ja2V5U3RhdGVzLm9uTG9hZCk7XHJcbiAgICAgICAgICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5Jbml0aWFsaXplU3RhdGVzKCk7XHJcbiAgICAgICAgICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHM6IHN0cmluZyA9IFBvY2tleVN0YXRlc1tQb2NrZXlTdGF0ZXMub25Mb2FkXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgU3RhdGVNYWNoaW5lIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgcywgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGNvbG9yOiAjZjY1NDZhOyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5wcmludEZzbUN1cnJlbnRTdGF0ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIH0sIDEwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBJbml0aWFsaXplU3RhdGVzKCkge1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTG9hZCkudG8oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25NYWluTWVudSkudG8oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcik7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3byk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vblNob290KTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXlTdGF0ZUNoYW5naW5nKGRlbGF5ZWRTdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3RhdGUgPSBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uY3VycmVudFN0YXRlO1xyXG4gICAgICAgIHRoaXMubmV4dFN0YXRlID0gZGVsYXllZFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVEZWxheWVkU3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuY2hhbmdlU3RhdGUodGhpcy5uZXh0U3RhdGUpO1xyXG4gICAgICAgIHRoaXMubmV4dFN0YXRlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzU3RhdGVJblF1ZXVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0aGlzLm5leHRTdGF0ZSkgJiYgXy5pc051bGwodGhpcy5uZXh0U3RhdGUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZShzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZXNbc3RhdGVdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgU3RhdGVNYWNoaW5lIC0+IHN0YXRlIGRvZXMgbm90IGV4aXN0OiBcIiArIHN0YXRlLCBcImNvbG9yOiAjMDAwMDAwOyBiYWNrZ3JvdW5kOiNmZjk5MDBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUgPT0gUG9ja2V5U3RhdGVzLm9uU2hvb3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHN0YXRlPT09PT09PVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcmludEZzbUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc3RhdGU9PT09PT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5nbyhzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5wcmludEZzbUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZzbSkge1xyXG4gICAgICAgICAgICBfLmZvckVhY2godGhpcy5mc20sIChzdGF0ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gdGhpcy5mc20uY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcyA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IFBvY2tleVN0YXRlc1tzdGF0ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRGc21DdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5jdXJyZW50U3RhdGUgPT0gUG9ja2V5U3RhdGVzLm9uU2hvb3QpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiBibGFjazsgY29sb3I6IHllbGxvdzsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGNvbG9yOiAjZjY1NDZhOyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcbiAgICB9XHJcbn0iLCJcclxuICAgLyoqXHJcbiAgICAqIFRyYW5zaXRpb24gZ3JvdXBpbmcgdG8gZmFjaWxpYXRlIGZsdWVudCBhcGlcclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxUPikgeyB9XHJcblxyXG4gICAgICBwdWJsaWMgZnJvbVN0YXRlczogVFtdO1xyXG4gICAgICBwdWJsaWMgdG9TdGF0ZXM6IFRbXTtcclxuXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogU3BlY2lmeSB0aGUgZW5kIHN0YXRlKHMpIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIHRvKC4uLnN0YXRlczogVFtdKSB7XHJcbiAgICAgICAgIHRoaXMudG9TdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgIHRoaXMuZnNtLmFkZFRyYW5zaXRpb25zKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgYW55IHN0YXRlIGluIHRoZSBzdGF0ZSBlbnVtIGlzIHZhbHVlXHJcbiAgICAgICAqIFRha2VzIHRoZSBzdGF0ZSBlbnVtIGFzIGFuIGFyZ3VtZW50XHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgdG9Bbnkoc3RhdGVzOiBhbnkpIHtcclxuICAgICAgICAgdmFyIHRvU3RhdGVzOiBUW10gPSBbXTtcclxuICAgICAgICAgZm9yICh2YXIgcyBpbiBzdGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcy5oYXNPd25Qcm9wZXJ0eShzKSkge1xyXG4gICAgICAgICAgICAgICB0b1N0YXRlcy5wdXNoKCg8VD5zdGF0ZXNbc10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLnRvU3RhdGVzID0gdG9TdGF0ZXM7XHJcbiAgICAgICAgIHRoaXMuZnNtLmFkZFRyYW5zaXRpb25zKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uRnVuY3Rpb248VD4ge1xyXG4gICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZnNtOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4sIHB1YmxpYyBmcm9tOiBULCBwdWJsaWMgdG86IFQpIHsgfVxyXG4gICB9XHJcbiAgIFxyXG4gICAvKipcclxuICAgICogQSBzaW1wbGUgZmluaXRlIHN0YXRlIG1hY2hpbmUgaW1wbGVtZW50ZWQgaW4gVHlwZVNjcmlwdCwgdGhlIHRlbXBsYXRlZCBhcmd1bWVudCBpcyBtZWFudCB0byBiZSB1c2VkXHJcbiAgICAqIHdpdGggYW4gZW51bWVyYXRpb24uXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgcHVibGljIGN1cnJlbnRTdGF0ZTogVDtcclxuICAgICAgcHJpdmF0ZSBfc3RhcnRTdGF0ZTogVDtcclxuICAgICAgcHJpdmF0ZSBfYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uOiBib29sZWFuO1xyXG4gICAgICBwcml2YXRlIF90cmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb248VD5bXSA9IFtdO1xyXG4gICAgICBwcml2YXRlIF9vbkNhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7IChmcm9tOiBULCBldmVudD86IGFueSk6IHZvaWQ7IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2V4aXRDYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAodG86IFQpOiBib29sZWFuOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9lbnRlckNhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7IChmcm9tOiBULCBldmVudD86IGFueSk6IGJvb2xlYW47IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2s6ICh0bz86IFQsIGZyb20/OiBUKSA9PiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0U3RhdGU6IFQsIGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhcnRTdGF0ZTtcclxuICAgICAgICAgdGhpcy5fc3RhcnRTdGF0ZSA9IHN0YXJ0U3RhdGU7XHJcbiAgICAgICAgIHRoaXMuX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiA9IGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFkZFRyYW5zaXRpb25zKGZjbjogVHJhbnNpdGlvbnM8VD4pIHtcclxuICAgICAgICAgZmNuLmZyb21TdGF0ZXMuZm9yRWFjaChmcm9tID0+IHtcclxuICAgICAgICAgICAgZmNuLnRvU3RhdGVzLmZvckVhY2godG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIHRyYW5zaXRpb24gaWYgdGhlIHN0YXRlIG1hY2hpbmUgaXMgbm90IGN1cnJlbnRseSBhYmxlIHRvIHRyYW5zaXRpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NhbkdvKGZyb20sIHRvKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25zLnB1c2gobmV3IFRyYW5zaXRpb25GdW5jdGlvbjxUPih0aGlzLCBmcm9tLCB0bykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFja1xyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uKHN0YXRlOiBULCBjYWxsYmFjazogKGZyb20/OiBULCBldmVudD86IGFueSkgPT4gYW55KTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fb25DYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2ssIHJldHVybmluZ1xyXG4gICAgICAgKiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgd2lsbCBibG9jayB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlLlxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uRW50ZXIoc3RhdGU6IFQsIGNhbGxiYWNrOiAoZnJvbT86IFQsIGV2ZW50PzogYW55KSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2ssIHJldHVybmluZ1xyXG4gICAgICAgKiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgd2lsbCBibG9jayB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoaXMgc3RhdGUuXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25FeGl0KHN0YXRlOiBULCBjYWxsYmFjazogKHRvPzogVCkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdCBmb3IgYW4gaW52YWxpZCB0cmFuc2l0aW9uIGFuZCBoYW5kbGUgdGhlIGVycm9yLCByZXR1cm5pbmcgYSBmYWxzeSB2YWx1ZSB3aWxsIHRocm93IGFuXHJcbiAgICAgICAqIGV4Y2VwdGlvbiwgYSB0cnV0aHkgb25lIHdpbGwgc3dhbGxvdyB0aGUgZXhjZXB0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25JbnZhbGlkVHJhbnNpdGlvbihjYWxsYmFjazogKGZyb20/OiBULCB0bz86IFQpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICBpZighdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogRGVjbGFyZXMgdGhlIHN0YXJ0IHN0YXRlKHMpIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvbiwgbXVzdCBiZSBmb2xsb3dlZCB3aXRoIGEgJy50byguLi5lbmRTdGF0ZXMpJ1xyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGZyb20oLi4uc3RhdGVzOiBUW10pOiBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgICAgIHZhciBfdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uczxUPih0aGlzKTtcclxuICAgICAgICAgX3RyYW5zaXRpb24uZnJvbVN0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICAgcmV0dXJuIF90cmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgZnJvbUFueShzdGF0ZXM6IGFueSk6IFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgICAgdmFyIGZyb21TdGF0ZXM6IFRbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKHZhciBzIGluIHN0YXRlcykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVzLmhhc093blByb3BlcnR5KHMpKSB7XHJcbiAgICAgICAgICAgICAgIGZyb21TdGF0ZXMucHVzaCgoPFQ+c3RhdGVzW3NdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdmFyIF90cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25zPFQ+KHRoaXMpO1xyXG4gICAgICAgICBfdHJhbnNpdGlvbi5mcm9tU3RhdGVzID0gZnJvbVN0YXRlcztcclxuICAgICAgICAgcmV0dXJuIF90cmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIF92YWxpZFRyYW5zaXRpb24oZnJvbTogVCwgdG86IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbnMuc29tZSh0ZiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGYuZnJvbSA9PT0gZnJvbSAmJiB0Zi50byA9PT0gdG8pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIHdoZXRoZXIgYSB0cmFuc2l0aW9uIGJldHdlZW4gYW55IHR3byBzdGF0ZXMgaXMgdmFsaWQuXHJcbiAgICAgICAqICAgIElmIGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiBpcyB0cnVlLCBhbHdheXMgYWxsb3cgdHJhbnNpdGlvbnMgZnJvbSBhIHN0YXRlIGJhY2sgdG8gaXRzZWxmLlxyXG4gICAgICAgKiAgICAgT3RoZXJ3aXNlLCBjaGVjayBpZiBpdCdzIGEgdmFsaWQgdHJhbnNpdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgIHByaXZhdGUgX2NhbkdvKGZyb21TdGF0ZTogVCwgdG9TdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuICh0aGlzLl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gJiYgZnJvbVN0YXRlID09PSB0b1N0YXRlKSB8fCB0aGlzLl92YWxpZFRyYW5zaXRpb24oZnJvbVN0YXRlLCB0b1N0YXRlKTtcclxuICAgICAgfSBcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVjayB3aGV0aGVyIGEgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZSBpcyB2YWxpZFxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGNhbkdvKHN0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2FuR28odGhpcy5jdXJyZW50U3RhdGUsIHN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFRyYW5zaXRpb24gdG8gYW5vdGhlciB2YWxpZCBzdGF0ZVxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGdvKHN0YXRlOiBULCBldmVudD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgICBpZiAoIXRoaXMuY2FuR28oc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrIHx8ICF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrKHRoaXMuY3VycmVudFN0YXRlLCBzdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIG5vIHRyYW5zaXRpb24gZnVuY3Rpb24gZXhpc3RzIGZyb20gc3RhdGUgJyArIHRoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCkgKyAnIHRvICcgKyBzdGF0ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVG8oc3RhdGUsIGV2ZW50KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgLyoqXHJcbiAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGF2YWlsYmxlIGZvciBvdmVycmlkZGluZyBmb3IgdGhlIHNha2Ugb2YgZXh0ZW5zaWJpbGl0eS4gXHJcbiAgICAgICAqIEl0IGlzIGNhbGxlZCBpbiB0aGUgZXZlbnQgb2YgYSBzdWNjZXNzZnVsIHRyYW5zaXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgcHVibGljIG9uVHJhbnNpdGlvbihmcm9tOiBULCB0bzogVCkge1xyXG4gICAgICAgICAvLyBwYXNzLCBkb2VzIG5vdGhpbmcgdW50aWwgb3ZlcmlkZGVuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIFJlc2V0IHRoZSBmaW5pdGUgc3RhdGUgbWFjaGluZSBiYWNrIHRvIHRoZSBzdGFydCBzdGF0ZSwgRE8gTk9UIFVTRSBUSElTIEFTIEEgU0hPUlRDVVQgZm9yIGEgdHJhbnNpdGlvbi4gXHJcbiAgICAgICogVGhpcyBpcyBmb3Igc3RhcnRpbmcgdGhlIGZzbSBmcm9tIHRoZSBiZWdpbm5pbmcuXHJcbiAgICAgICovXHJcbiAgICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLl9zdGFydFN0YXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgc3RhdGUgZXF1YWxzIHRoZSBnaXZlbiBzdGF0ZVxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGlzKHN0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPT09IHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIF90cmFuc2l0aW9uVG8oc3RhdGU6IFQsIGV2ZW50PzogYW55KSB7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmICghdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKCF0aGlzLl9vbkNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgdmFyIGNhbkV4aXQgPSB0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldLnJlZHVjZTxib29sZWFuPigoYWNjdW06IGJvb2xlYW4sIG5leHQ6ICh0bzogVCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjdW0gJiYgKDxib29sZWFuPm5leHQuY2FsbCh0aGlzLCBzdGF0ZSkpO1xyXG4gICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgIHZhciBjYW5FbnRlciA9IHRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldLnJlZHVjZTxib29sZWFuPigoYWNjdW06IGJvb2xlYW4sIG5leHQ6IChmcm9tOiBUKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgIHJldHVybiBhY2N1bSAmJiAoPGJvb2xlYW4+bmV4dC5jYWxsKHRoaXMsIHRoaXMuY3VycmVudFN0YXRlLCBldmVudCkpO1xyXG4gICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgIGlmIChjYW5FeGl0ICYmIGNhbkVudGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBvbGQgPSB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0uZm9yRWFjaChmY24gPT4ge1xyXG4gICAgICAgICAgICAgICBmY24uY2FsbCh0aGlzLCBvbGQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2l0aW9uKG9sZCwgc3RhdGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuXHJcbi8vIG1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwZW9wbGUgdXNpbmcgdGhlIHBhc2NhbCBjYXNlZCB2ZXJzaW9uXHJcbi8vIHZhciBUeXBlU3RhdGUgPSB0eXBlc3RhdGU7XHJcbiIsImV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU0VBUkNIOiBzdHJpbmcgPSBcIi9zZWFyY2hpbmdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUExBWTogc3RyaW5nID0gXCIvcGxheVwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0RXZlbnRzIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld0Nvbm5lY3Rpb246IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJuZXdDb25uZWN0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxldHNDb25uZWN0OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibGV0c0Nvbm5lY3RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pblJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJqb2luUm9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBqb2luZWRSb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiam9pbmVkUm9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBsZWZ0Um9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImxlZnRSb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHByaXZhdGVNZXNzYWdlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwicHJpdmF0ZU1lc3NhZ2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2lnbmVkSW5Vc2VyRGF0YTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImdldFNpZ25lZEluVXNlckRhdGFcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YWJhc2U6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhYmFzZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBkaXNjb25uZWN0TXlTb2NrZXQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJkaXNjb25uZWN0TXlTb2NrZXRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZVNldHVwOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZ2FtZVNldHVwXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvb21DcmVhdGVkOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwicm9vbUNyZWF0ZWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YUZyb21TZXJ2ZXI6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhRnJvbVNlcnZlclwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGE6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0U2VuZGluZ1NuYXBzaG90czogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInN0YXJ0U2VuZGluZ1NuYXBzaG90c1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBzbmFwc2hvdFVwZGF0ZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInNuYXBzaG90VXBkYXRlXCI7XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIHBhcnRuZXJGb3VuZENoYW5uZWw6IHN0cmluZyA9IFwicGFydG5lckZvdW5kQ2hhbm5lbFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBXSE9fV0FOVFNfVE9fUExBWTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiV0hPX1dBTlRTX1RPX1BMQVlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSV9XQU5UX1RPX1BMQVk6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIklfV0FOVFNfVE9fUExBWVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBIRUxMTzogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiSEVMTE9cIjtcclxuXHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOC8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BvY2tleVBsYXllckRhdGF9IGZyb20gXCIuL3BvY2tleS1wbGF5ZXItZGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRnJhbWV3b3JrU29ja2V0RXZlbnRzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuLypcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtQb2NrZXlTZXR0aW5nc30gZnJvbSBcIi4uL2NsaWVudC9wb2NrZXktc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtTaWduYWxzTWFuYWdlcn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1NpZ25hbHMvc2lnbmFscy1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7UG9ja2V5U2lnbmFsVHlwZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9TaWduYWxzTW9kdWxlL3BvY2tleS1zaWduYWwtdHlwZXNcIjtcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1NldHRpbmdzXCI7XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgcHVibGljIGRhdGE6IFBvY2tleVBsYXllckRhdGEgPSB7fTtcclxuICAgIHB1YmxpYyBzb2NrZXQ6IGFueTtcclxuICAgIHB1YmxpYyBpc0xvb2tpbmdGb3JQYXJ0bmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBwdWJsaWMgaXNDbGllbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0ZpcnN0VG9TdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTb2NrZXQoc29ja2V0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5ld1NvY2tldElEOiBzdHJpbmcgPSBzb2NrZXQuaWQudG9TdHJpbmcoKS5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNILCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgbmV3U29ja2V0SUQgPSBuZXdTb2NrZXRJRC5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuUExBWSwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuc29ja2V0SUQgPSBuZXdTb2NrZXRJRDtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zb2NrZXRJRClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgc29ja2V0IGluaXRpYWxpemVkOiBcIiArIHRoaXMuZGF0YS5zb2NrZXRJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhOiBQb2NrZXlQbGF5ZXJEYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuYXZhdGFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hdmF0YXIgPSB1c2VybmFtZURhdGEuYXZhdGFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3IgPSB1c2VybmFtZURhdGEuY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmRlY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kZWNhbCA9IHVzZXJuYW1lRGF0YS5kZWNhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZmVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmVsdCA9IHVzZXJuYW1lRGF0YS5mZWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5wbGF5ZXJfbGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnBsYXllcl9sZXZlbCA9IHVzZXJuYW1lRGF0YS5wbGF5ZXJfbGV2ZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnN0aWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGljayA9IHVzZXJuYW1lRGF0YS5zdGljaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudG90YWxfcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3RhbF9wb2ludHMgPSB1c2VybmFtZURhdGEudG90YWxfcG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnRvdGFsX3BvaW50cyA9IHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLm5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5uaWNrbmFtZSA9IHVzZXJuYW1lRGF0YS5uaWNrbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudXNlcl9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudXNlcl9pZCA9IHVzZXJuYW1lRGF0YS51c2VyX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5maXJzdF9sb2dpbl9kYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maXJzdF9sb2dpbl9kYXRlID0gdXNlcm5hbWVEYXRhLmZpcnN0X2xvZ2luX2RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnR5cGUgPSB1c2VybmFtZURhdGEudHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uUmVjZWl2ZVNuYXBzaG90VXBkYXRlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU25hcHNob3QgcmVjZWl2ZWQvLy8vLy8vLy9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTbmFwc2hvdCByZWNlaXZlZC8vLy8vLy8vLy9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRHYW1lU25hcHNob3QoZGF0YTogYW55KTogdm9pZCB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIHNuYXBzaG90IHRvIG90aGVyIHBsYXllclwiKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGZEZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHJlbW92ZWRcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZW51bSBCYWxsVHlwZSB7XHJcbiAgICBMZWZ0ID0gJ0xlZnRCYWxsJyxcclxuICAgIFJpZ2h0ID0gJ1JpZ2h0QmFsbCcsXHJcbiAgICBXaGl0ZSA9IFwiV2hpdGVCYWxsXCIsXHJcbiAgICBQdWNrID0gXCJQdWNrXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gV2luU3RhdHVzIHtcclxuICAgIFdJTixcclxuICAgIExPU1RcclxufVxyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZURhdGEge1xyXG4gICAgcm91bmROdW1iZXI6IG51bWJlcixcclxuICAgIGJhbGxzTnVtYmVyOiBudW1iZXJcclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC85LzIwMTlcclxuICovXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5UGxheWVyU2VydmVyIGV4dGVuZHMgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudCwgdGhpcy51cGRhdGVQbGF5ZXJEYXRhLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudCwgdGhpcy51cGRhdGVQbGF5ZXJEYXRhLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2ZXIgcGxheWVyIHVwZGF0ZWQuIHNlbmRpbmcgcGxheWVyIGRhdGEgdXBkYXRlIHRvIGNsaWVudFwiKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhLCB0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzgvMjAxOVxyXG4gKi9cclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcbmltcG9ydCB7RnJhbWV3b3JrU29ja2V0RXZlbnRzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuaW1wb3J0IHtCYWxsVHlwZSwgR2FtZURhdGF9IGZyb20gXCIuLi9jb21tb24vcG9ja2V5LWdhbWUtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtQb2NrZXlTb2NrZXRNZXNzYWdlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1BvY2tleVN0YXRlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVJvb20ge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIGlvOiBhbnk7XHJcbiAgICBwcml2YXRlIGdhbWVEYXRhOiBHYW1lRGF0YSA9IHtyb3VuZE51bWJlcjogMSwgYmFsbHNOdW1iZXI6IDd9O1xyXG4gICAgcHJpdmF0ZSBzY29yZVVwZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgd2hpdGVCYWxsSW5UaGVIYWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG93bkJhbGxGYXVsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBvcHBvbmVudEJhbGxTY29yZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudFBsYXllcjogUGxheWVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGlvOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVycy5wdXNoKHRoaXMucGxheWVyMSk7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5wbGF5ZXIyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb20gY3JlYXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXNzaWduUGxheWVyKHBsYXllcjogUGxheWVyKTogdm9pZCB7XHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwbGF5YTogXCIgKyBwbGF5ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRHYW1lU25hcHNob3QocGxheWVyLmRhdGEuc29ja2V0SUQsIGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkJBTExfSU5fVEhFX0hBTEwsIChiYWxsVHlwZTogQmFsbFR5cGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZShwbGF5ZXIuZGF0YS5zb2NrZXRJRCwgYmFsbFR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLk9XTl9CQUxMX1RPVUNIRURfRklSU1QsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbk93bkJhbGxUb3VjaGVkRmlyc3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEVDS19ORVhUX1RVUk4sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja05leHRUdXJuKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29tOiBcIiArIHRoaXMuaWQgKyBcIiAtPiBwbGF5ZXIgYXNzaWduZWQ6IFwiICsgcGxheWVyLmRhdGEuc29ja2V0SUQgKyBcIiAtPiB0b3RhbCBwbGF5ZXJzOiBcIiArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicm9vbTogXCIgKyB0aGlzLmlkICsgXCIgLT4gKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRHYW1lU2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk93bkJhbGxUb3VjaGVkRmlyc3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoc29ja2V0SUQ6IHN0cmluZywgYmFsbFR5cGU6IEJhbGxUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBsYXllcjogUGxheWVyO1xyXG4gICAgICAgIGxldCBvcHBvbmVudDogUGxheWVyO1xyXG4gICAgICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5YTogUGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldElEID09IHRoaXMucGxheWVyc1swXS5kYXRhLnNvY2tldElEKSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgICBvcHBvbmVudCA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxsVHlwZSA9PSBwbGF5ZXIuZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IG9wcG9uZW50LmRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IG9wcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3Bwb25lbnQuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFsbFR5cGUgPT0gQmFsbFR5cGUuV2hpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy53aGl0ZUJhbGxJblRoZUhhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXllci5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja05leHRUdXJuKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLndoaXRlQmFsbEluVGhlSGFsbCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImludHJhXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm93bkJhbGxGYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3Bwb25lbnRCYWxsU2NvcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllcnNbMF0pID8gdGhpcy5wbGF5ZXJzWzFdIDogdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnRCYWxsU2NvcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aGl0ZUJhbGxJblRoZUhhbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5ZXI6IFBsYXllcikgPT4ge1xyXG4gICAgLy8gICAgIGlmIChiYWxsU29ja2V0SUQgPT0gcGxheWVyLmRhdGEuc29ja2V0SUQpIHtcclxuICAgIC8vICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT0gcGxheWVyU29ja2V0SUQpIHtcclxuICAgIC8vICAgICAvL1xyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYgKHBsYXllci5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHNlbmRHYW1lU25hcHNob3Qoc29ja2V0SUQ6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbmFwc2hvdCByZWNlaXZlZCBvbiByb29tOiBcIiArIHRoaXMuaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCA9PSBzb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCBkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlVXBkYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuU0NPUkVfVVBEQVRFRCwgW3RoaXMucGxheWVyc1swXS5kYXRhLCB0aGlzLnBsYXllcnNbMV0uZGF0YV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kR2FtZVNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5pc0ZpcnN0VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5SaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG5cclxuICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdhbWVTZXR1cCwgW3RoaXMucGxheWVyc1swXS5kYXRhLCB0aGlzLnBsYXllcnNbMV0uZGF0YSwgdGhpcy5nYW1lRGF0YV0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZW5kU3RhcnRSb3VuZC5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRTdGFydFJvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDIvMjcvMjAxOVxyXG4gKi9cclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCB7U2VydmVyfSBmcm9tIFwibm9kZS1zdGF0aWNcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0IHtQb29sfSBmcm9tIFwicGdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuaW1wb3J0IHtXaW5TdGF0dXN9IGZyb20gXCIuLi9jb21tb24vcG9ja2V5LWdhbWUtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtQb2NrZXlSb29tfSBmcm9tIFwiLi9wb2NrZXktcm9vbVwiO1xyXG5pbXBvcnQge1BvY2tleVBsYXllclNlcnZlcn0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1zZXJ2ZXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5U2VydmVySW5kZXgge1xyXG4gICAgcHJvdGVjdGVkIGZpbGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBodHRwU2VydmVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc29ja2V0SW86IGFueTtcclxuICAgIHByb3RlY3RlZCBzb2NrZXRJc0ZyZWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFiYXNlQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2VQb29sOiBQb29sIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIHJvb21zOiBQb2NrZXlSb29tW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBwbGF5ZXJzOiBQb2NrZXlQbGF5ZXJTZXJ2ZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBwbGF5aW5nTmFtZXNwYWNlXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2VydmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlR2FtZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbmV3IFNlcnZlcignZGlzdCcsIHsgLy8gYmluIGlzIHRoZSBmb2xkZXIgY29udGFpbmluZyBvdXIgaHRtbCwgZXRjXHJcbiAgICAgICAgICAgIGNhY2hlOiAwLFx0Ly8gZG9uJ3QgY2FjaGVcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnemlwOiB0cnVlXHQvLyBnemlwIG91ciBhc3NldHNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbiAgICAgICAgLy8gY3JlYXRlIG91ciBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnNlcnZlKHJlcXVlc3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5vbignbGlzdGVuaW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2ssIHNlcnZlciBpcyBydW5uaW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVEYigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbCA9IG5ldyBQb29sKHtcclxuICAgICAgICAgICAgdXNlcjogJ25wdnN3aGdneGdzZ3hrJyxcclxuICAgICAgICAgICAgaG9zdDogJ2VjMi01NC0yMjUtOTgtMTMxLmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJyxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdkMXVrMnZucGRqbDI4cScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnNTU2ZTUwMTNlYTFkZWM1OWQyZGFhNWQ3YmZmMjIzZWMwMjhjMTZkYTRhYzU3N2RiOTRlNzhkYmM3NTQ3MTk2NScsXHJcbiAgICAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbiAgICAgICAgICAgIHNzbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igb24gaWRsZSBjbGllbnQnLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoLTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5jb25uZWN0KChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzLWEgbG9nYXQsIG1lcmdlLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJbyA9IHNvY2tldElPKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5zZXJ2ZUNsaWVudCh0cnVlKTsgLy8gdGhlIHNlcnZlciB3aWxsIHNlcnZlIHRoZSBjbGllbnQganMgZmlsZVxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8uYXR0YWNoKHRoaXMuaHR0cFNlcnZlcik7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTb2NrZXRFdmVudHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubmV3Q29ubmVjdGlvbiwgcGxheWVyLmRhdGEuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBjb25uZWN0ZWQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvL3RvZG8gYWljaSB0cmVidWllIHNhIHRlIG9jdXBpIGRlIGRpc2Nvbm5lY3QgZGFyIHNpIHBlIGNlbGFsYWx0ZSBzb2NrZXR1cmlcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gZ2V0IHNpZ25lZCBpbiBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhYmFzZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YWJhc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVBsYXllckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImEgaWVzaXQgZGUgcGUgY2FuYWx1bCBwYWNpaTogXCIgKyBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBzb2NrZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGxlZnQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC50byhyb29tKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZWZ0Um9vbSwgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc29ja2V0SW8ub24oJ2Rpc2Nvbm5lY3QnLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUGxheWVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IHNvY2tldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbm5lY3RDb3VudGVyLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgbGVmdC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB0aGlzLnNvY2tldElvLm9uKCdkaXNjb25uZWN0JywgKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIC8vc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSA9IHRoaXMuc29ja2V0SW8ub2YoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gpO1xyXG4gICAgICAgIGxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSB0aGlzLmdldFBsYXllckJ5SUQoaWQsIHNvY2tldCk7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNIICsgJyAtPiBzb21lb25lIGNvbm5lY3RlZDogJyArIHBsYXllci5kYXRhLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hNYWtlcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICAvKnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIChtc2c6IGFueSwgaWQ6IHN0cmluZywgcGFydG5lcklEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIG1zZywgaWQsIHBhcnRuZXJJRCk7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5aW5nTmFtZXNwYWNlID0gdGhpcy5zb2NrZXRJby5vZihGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVkpO1xyXG5cclxuICAgICAgICBwbGF5aW5nTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZLCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IHRoaXMuZ2V0UGxheWVyQnlJRChpZCwgc29ja2V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5Sb29tLCAocm9vbUlEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuam9pbihyb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb2NrZXlSb29tOiBQb2NrZXlSb29tID0gdGhpcy5nZXRSb29tQnlJRChyb29tSUQsIHBsYXlpbmdOYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICAgICAgcG9ja2V5Um9vbS5hc3NpZ25QbGF5ZXIocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pblJvb20sIHJvb20sIGlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pbmVkUm9vbSwgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIGpvaW4gcm9vbS4gcm9vbSBuaWNrbmFtZTogXCIgKyByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhIGllc2l0IGRlIHBlIGNhbmFsdWwgcGFjaWk6IFwiICsgc29ja2V0LmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnRvKHJvb21JRCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGVmdFJvb20sIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCAocm9vbTogYW55LCBtZXNzYWdlVHlwZTogRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMsIG1lc3NhZ2VEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PSBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5IRUxMTylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlIGZhY2UgaGVsbG91bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LnRvKHJvb20pLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCBtZXNzYWdlVHlwZSwgbWVzc2FnZURhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmRpc2Nvbm5lY3RNeVNvY2tldCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaE1ha2VyKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKG90aGVyUGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllciAhPSBvdGhlclBsYXllciAmJiBvdGhlclBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGhhdmUgYSByb29tXCIpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUlEOiBzdHJpbmcgPSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCArIFwiI1wiICsgb3RoZXJQbGF5ZXIuZGF0YS5zb2NrZXRJRDtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeUlEKGlkOiBzdHJpbmcsIHNvY2tldDogYW55KTogUG9ja2V5UGxheWVyU2VydmVyIHtcclxuICAgICAgICBsZXQgcGxheWVyQnlJRDogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBzZWFyY2hpbmc6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIHBsYXllckJ5SUQuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXJCeUlELnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllckJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb29tQnlJRChyb29tSUQ6IHN0cmluZywgaW86IGFueSk6IFBvY2tleVJvb20ge1xyXG4gICAgICAgIC8vIGxldCBwbGF5ZXJCeUlEOiBQbGF5ZXIgPSBuZXcgUGxheWVyKFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHJvb20gYnkgaWQgLT4gc2VhcmNoaW5nOiBcIiArIHJvb21JRCk7XHJcbiAgICAgICAgbGV0IHJvb21CeUlEOiBQb2NrZXlSb29tO1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zLmZvckVhY2goKHJvb206IFBvY2tleVJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT0gcm9vbUlEKSB7XHJcbiAgICAgICAgICAgICAgICByb29tQnlJRCA9IHJvb207XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcm9vbUJ5SUQpIHtcclxuICAgICAgICAgICAgcm9vbUJ5SUQgPSBuZXcgUG9ja2V5Um9vbShyb29tSUQsIGlvKTtcclxuICAgICAgICAgICAgdGhpcy5yb29tcy5wdXNoKHJvb21CeUlEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb29tQnlJRDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJEYihwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNxbFRleHQ6IHN0cmluZyA9IFwiVVBEQVRFIHBvY2tleV90YWJsZSBTRVQgXCIgKyBkYXRhW1wiY29sdW1uXCJdICsgXCI9J1wiICsgZGF0YVtcInZhbHVlXCJdICsgXCInIFdIRVJFIHVzZXJfaWQ9J1wiICsgZGF0YVtcInVzZXJJRFwiXSArIFwiJ1wiO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVtcInR5cGVcIl0gPT0gXCJ3aW5TdGF0dXNcIikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtcInZhbHVlXCJdID09IFdpblN0YXR1cy5XSU4pIHtcclxuICAgICAgICAgICAgICAgIC8vIHNxbFRleHQgPSBcIlVQREFURSBVU0VSX1RBQkxFIFNFVCBcIiArIGRhdGFbXCJjb2x1bW5cIl0gKyBcIj0ncG9pbnRzJyArIDEwIFdIRVJFIEdJRD0nWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgICAgIHNxbFRleHQgPSAnVVBEQVRFIHB1YmxpYy5cIlVTRVJfVEFCTEVcIiBTRVQgXCJwb2ludHNcIiA9IFwicG9pbnRzXCIgKyAxMCBXSEVSRSBcIlVTRVJfVEFCTEVcIi5cIkdJRFwiID0gJyArIFwiJ1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNxbFRleHQgbGEgd2luOiBcIiArIHNxbFRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbXCJ2YWx1ZVwiXSA9PSBXaW5TdGF0dXMuTE9TVCkge1xyXG4gICAgICAgICAgICAgICAgc3FsVGV4dCA9ICdVUERBVEUgcHVibGljLlwiVVNFUl9UQUJMRVwiIFNFVCBcInBvaW50c1wiID0gXCJwb2ludHNcIiArIDEwIFdIRVJFIFwiVVNFUl9UQUJMRVwiLlwiR0lEXCIgPSAnICsgXCInWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzcWxUZXh0OiBcIiArIHNxbFRleHQsIFwidHlwZTogXCIgKyBkYXRhW1widHlwZVwiXSwgXCJ2YWx1ZTogXCIgKyBkYXRhW1widmFsdWVcIl0pO1xyXG5cclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5kYXRhYmFzZVBvb2wuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHNxbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3VtIHNlIGZhY2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllciwgZGF0YVtcInVzZXJJRFwiXSk7XHJcblxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLnN0YWNrKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JVc2VySUQocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIHVzZXJuYW1lOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIGRiIGZvciB1c2VyX2lkOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgLy8gZ2l2ZSB0aGUgcXVlcnkgYSB1bmlxdWUgbmlja25hbWVcclxuICAgICAgICAgICAgbmFtZTogJ2ZldGNoLXVzZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU0VMRUNUICogRlJPTSBwb2NrZXlfdGFibGUgV0hFUkUgVVNFUl9JRCA9ICQxJyxcclxuICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wucXVlcnkocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yb3dzWzBdID09IHVuZGVmaW5lZCB8fCByZXMucm93c1swXSA9PSBcInVuZGVmaW5lZFwiIHx8IHJlcy5yb3dzWzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIocGxheWVyLnNvY2tldCwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudXBkYXRlUGxheWVyRGF0YShyZXMucm93c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucm93c1swXSk7IC8vIFsnQnJpYW4nLCAnQ2FybHNvbiddXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdVc2VyKHBsYXllcjogUGxheWVyLCB1c2VybmFtZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBuZXcgdXNlcjogXCIgKyB1c2VybmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3VXNlclF1ZXJ5ID1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NyZWF0ZS1uZXctdXNlcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSU5TRVJUIElOVE8gcG9ja2V5X3RhYmxlKHVzZXJfaWQpIFZBTFVFUygkMSknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLnF1ZXJ5KGNyZWF0ZU5ld1VzZXJRdWVyeSlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyhcIm5ldyB1c2VyIGNyZWF0ZWQuIHVzZXIgc2F2ZWQgaW50byBkYlwiKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldElvLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsIHJlcy5yb3dzWzBdKTsqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIuc29ja2V0LCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5nYW1lRW5naW5lID0gbmV3IFBvY2tleUdhbWVFbmdpbmVGb3JTZXJ2ZXIoe3RyYWNlTGV2ZWw6IFRyYWNlLlRSQUNFX05PTkV9KTtcclxuICAgICAgICAgdGhpcy5zZXJ2ZXJFbmdpbmUgPSBuZXcgUG9ja2V5U2VydmVyRW5naW5lKHRoaXMuc29ja2V0SW8sIHRoaXMuZ2FtZUVuZ2luZSwge2RlYnVnOiB7fSwgdXBkYXRlUmF0ZTogNn0pO1xyXG4gICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgICAvLyB0aGlzLnNlcnZlckVuZ2luZS5zdGFydCgpO1xyXG4gICAgIH0qL1xyXG59XHJcblxyXG5uZXcgUG9ja2V5U2VydmVySW5kZXgoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=