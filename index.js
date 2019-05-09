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

_defineProperty(PockeySocketMessages, "ROUND_TIMER_UPDATE", "PockeySocketMessages." + "ROUND_TIMER_UPDATE");

_defineProperty(PockeySocketMessages, "ROUND_TIMER_COMPLETE", "PockeySocketMessages." + "ROUND_TIMER_COMPLETE");

_defineProperty(PockeySocketMessages, "BALL_WAS_SHOT", "PockeySocketMessages." + "BALL_WAS_SHOT");

_defineProperty(PockeySocketMessages, "ALLOCATED_TIME_ELAPSED", "PockeySocketMessages." + "ALLOCATED_TIME_ELAPSED");

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

/***/ "./src/client/qFramework/Utils/timer.ts":
/*!**********************************************!*\
  !*** ./src/client/qFramework/Utils/timer.ts ***!
  \**********************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
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
 *  Created by Sandru Andrei on 5/8/2019
 */
var Timer =
/*#__PURE__*/
function () {
  function Timer(onUpdateCallback, onCompleteCallback) {
    _classCallCheck(this, Timer);

    this.onUpdateCallback = onUpdateCallback;
    this.onCompleteCallback = onCompleteCallback;

    _defineProperty(this, "timer", void 0);

    _defineProperty(this, "currentTime", void 0);
  }

  _createClass(Timer, [{
    key: "start",
    value: function start(i) {
      var _this = this;

      this.currentTime = i; //callback = callback || function(){};

      this.timer = setInterval(function () {
        _this.currentTime--;

        if (_this.currentTime < 0) {
          clearInterval(_this.timer);

          _this.onCompleteCallback();
        } else {
          _this.onUpdateCallback();
        }
      }, 1000);
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.timer);
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.currentTime;
    }
  }]);

  return Timer;
}();

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
/* harmony import */ var _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client/qFramework/Utils/timer */ "./src/client/qFramework/Utils/timer.ts");
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

    _defineProperty(this, "roundTimer", void 0);

    _defineProperty(this, "roundDuration", 20);

    this.id = id;
    this.io = io; // this.players.push(this.player1);
    // this.players.push(this.player2);

    console.log("room created");
    this.roundTimer = new _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_4__["Timer"](this.onRoundTimerUpdate.bind(this), this.onRoundTimerComplete.bind(this));
  }

  _createClass(PockeyRoom, [{
    key: "onRoundTimerUpdate",
    value: function onRoundTimerUpdate() {
      this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].ROUND_TIMER_UPDATE, this.roundTimer.getCurrentTime());
    }
  }, {
    key: "onRoundTimerComplete",
    value: function onRoundTimerComplete() {
      this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].ROUND_TIMER_COMPLETE);
      this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].ALLOCATED_TIME_ELAPSED); // this.roundTimeElapsed = true;
      // this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.checkNextTurn();
      // this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.io.to(this.id).emit(PockeySocketMessages.ROUND_TIMER_COMPLETE, this.roundTimer.getCurrentTime());
    }
  }, {
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
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].BALL_WAS_SHOT, function () {
        // this.roundTimeElapsed = false;
        _this.roundTimer.stop();

        _this.io.to(_this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].ROUND_TIMER_COMPLETE);
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
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else if (this.ownBallFault) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else if (!this.opponentBallScored) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
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
      setTimeout(this.sendStartRound.bind(this), 3000);
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

      this.roundTimer.start(this.roundDuration); // this.roundTimeElapsed = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL1N0YXRlTWFjaGluZS90eXBlc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcUZyYW1ld29yay9VdGlscy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BvY2tleS1nYW1lLXNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXBsYXllci1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1zZXJ2ZXItaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6WyJQb2NrZXlTb2NrZXRNZXNzYWdlcyIsIlBvY2tleVN0YXRlcyIsIlBvY2tleVN0YXRlTWFjaGluZSIsImZzbSIsImZyb20iLCJvbkxvYWQiLCJ0byIsIm9uTWFpbk1lbnUiLCJvblJlYXJyYW5nZVN0aWNrIiwib25TZWFyY2hGb3JQYXJ0bmVyIiwib25QcmVwYXJlUm91bmRPbmUiLCJvbldhdGNoIiwib25Sb3VuZEVuZCIsIm9uUHJlcGFyZVJvdW5kVHdvIiwib25QcmVwYXJlUm91bmRUaHJlZSIsIm9uUmVwb3NpdGlvbldoaXRlQmFsbCIsIm9uRW5kVHVybiIsIm9uRW5kTWF0Y2giLCJvblNob290IiwiZGVsYXllZFN0YXRlIiwibmV4dFN0YXRlIiwiSW5zdGFuY2UiLCJjaGFuZ2VTdGF0ZSIsIl8iLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmludEZzbUN1cnJlbnRTdGF0ZSIsImdvIiwicyIsImN1cnJlbnRTdGF0ZSIsImdldEN1cnJlbnRTdGF0ZU5hbWUiLCJpbnN0YW5jZSIsImluaXRpYWxpemVkIiwiRmluaXRlU3RhdGVNYWNoaW5lIiwiSW5pdGlhbGl6ZVN0YXRlcyIsIlRyYW5zaXRpb25zIiwic3RhdGVzIiwidG9TdGF0ZXMiLCJhZGRUcmFuc2l0aW9ucyIsImhhc093blByb3BlcnR5IiwicHVzaCIsIlRyYW5zaXRpb25GdW5jdGlvbiIsInN0YXJ0U3RhdGUiLCJhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24iLCJfc3RhcnRTdGF0ZSIsIl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24iLCJmY24iLCJmcm9tU3RhdGVzIiwiZm9yRWFjaCIsIl9jYW5HbyIsIl90cmFuc2l0aW9uRnVuY3Rpb25zIiwiY2FsbGJhY2siLCJrZXkiLCJ0b1N0cmluZyIsIl9vbkNhbGxiYWNrcyIsIl9lbnRlckNhbGxiYWNrcyIsIl9leGl0Q2FsbGJhY2tzIiwiX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2siLCJfdHJhbnNpdGlvbiIsInNvbWUiLCJ0ZiIsImZyb21TdGF0ZSIsInRvU3RhdGUiLCJfdmFsaWRUcmFuc2l0aW9uIiwiZXZlbnQiLCJjYW5HbyIsIkVycm9yIiwiX3RyYW5zaXRpb25UbyIsImNhbkV4aXQiLCJyZWR1Y2UiLCJhY2N1bSIsIm5leHQiLCJjYWxsIiwiY2FuRW50ZXIiLCJvbGQiLCJvblRyYW5zaXRpb24iLCJGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzIiwiRnJhbWV3b3JrU29ja2V0RXZlbnRzIiwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMiLCJUaW1lciIsIm9uVXBkYXRlQ2FsbGJhY2siLCJvbkNvbXBsZXRlQ2FsbGJhY2siLCJpIiwiY3VycmVudFRpbWUiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIlBsYXllciIsInNvY2tldCIsIm5ld1NvY2tldElEIiwiaWQiLCJyZXBsYWNlIiwiU0VBUkNIIiwiUExBWSIsImRhdGEiLCJzb2NrZXRJRCIsInVzZXJuYW1lRGF0YSIsImF2YXRhciIsImNvbG9yIiwiZGVjYWwiLCJmZWx0IiwicGxheWVyX2xldmVsIiwic3RpY2siLCJ0b3RhbF9wb2ludHMiLCJuaWNrbmFtZSIsInVzZXJfaWQiLCJmaXJzdF9sb2dpbl9kYXRlIiwidHlwZSIsImVtaXQiLCJzbmFwc2hvdFVwZGF0ZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInJvdW5kTnVtYmVyIiwiYmFsbHNOdW1iZXIiLCJyb3VuZFRpbWVyIiwib25Sb3VuZFRpbWVyVXBkYXRlIiwiYmluZCIsIm9uUm91bmRUaW1lckNvbXBsZXRlIiwiUk9VTkRfVElNRVJfVVBEQVRFIiwiZ2V0Q3VycmVudFRpbWUiLCJST1VORF9USU1FUl9DT01QTEVURSIsImN1cnJlbnRQbGF5ZXIiLCJBTExPQ0FURURfVElNRV9FTEFQU0VEIiwicGxheWVyIiwib24iLCJzZW5kR2FtZVNuYXBzaG90IiwiQkFMTF9JTl9USEVfSEFMTCIsImJhbGxUeXBlIiwidXBkYXRlU2NvcmUiLCJPV05fQkFMTF9UT1VDSEVEX0ZJUlNUIiwib25Pd25CYWxsVG91Y2hlZEZpcnN0IiwiQ0hFQ0tfTkVYVF9UVVJOIiwiY2hlY2tOZXh0VHVybiIsIkJBTExfV0FTX1NIT1QiLCJzdG9wIiwicGxheWVycyIsImxlbmd0aCIsInNlbmRHYW1lU2V0dXAiLCJvd25CYWxsRmF1bHQiLCJvcHBvbmVudCIsIm9wcG9uZW50QmFsbFNjb3JlZCIsImN1cnJlbnRTY29yZSIsInNjb3JlVXBkYXRlZCIsIldoaXRlIiwid2hpdGVCYWxsSW5UaGVIYWxsIiwiQ0hBTkdFX1NUQVRFIiwiY2hhbmdlQ3VycmVudFBsYXllciIsInN0YXJ0U2VuZGluZ1NuYXBzaG90cyIsInN0YXJ0Iiwicm91bmREdXJhdGlvbiIsIlNDT1JFX1VQREFURUQiLCJpc0ZpcnN0VG9TdGFydCIsIkxlZnQiLCJSaWdodCIsImdhbWVTZXR1cCIsImdhbWVEYXRhIiwic2V0VGltZW91dCIsInNlbmRTdGFydFJvdW5kIiwiUG9ja2V5U2VydmVySW5kZXgiLCJpbml0aWFsaXplU2VydmVyIiwiaW5pdGlhbGl6ZURiIiwiY3JlYXRlU29ja2V0IiwiZmlsZSIsIlNlcnZlciIsImNhY2hlIiwiZ3ppcCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImh0dHBTZXJ2ZXIiLCJodHRwIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYWRkTGlzdGVuZXIiLCJzZXJ2ZSIsInJlc3VtZSIsImxpc3RlbiIsImRhdGFiYXNlUG9vbCIsIlBvb2wiLCJ1c2VyIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJzc2wiLCJlcnIiLCJlcnJvciIsImV4aXQiLCJjb25uZWN0IiwiZGF0YWJhc2VDb25uZWN0ZWQiLCJzb2NrZXRJbyIsInNvY2tldElPIiwic2VydmVDbGllbnQiLCJhdHRhY2giLCJoYW5kbGVTb2NrZXRFdmVudHMiLCJzZXRTb2NrZXQiLCJuZXdDb25uZWN0aW9uIiwiZ2V0U2lnbmVkSW5Vc2VyRGF0YSIsInVzZXJuYW1lIiwiY2hlY2tGb3JVc2VySUQiLCJ1cGRhdGVQbGF5ZXJEYXRhYmFzZSIsInVwZGF0ZVVzZXJEYiIsImluZGV4Iiwic3BsaWNlIiwic2VsZkRlc3Ryb3kiLCJsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSIsIm9mIiwiZ2V0UGxheWVyQnlJRCIsImlzTG9va2luZ0ZvclBhcnRuZXIiLCJtYXRjaE1ha2VyIiwicGxheWluZ05hbWVzcGFjZSIsImpvaW5Sb29tIiwicm9vbUlEIiwiam9pbiIsInBvY2tleVJvb20iLCJnZXRSb29tQnlJRCIsImFzc2lnblBsYXllciIsImpvaW5lZFJvb20iLCJsZWZ0Um9vbSIsImRpc2Nvbm5lY3QiLCJwcml2YXRlTWVzc2FnZSIsInJvb20iLCJtZXNzYWdlVHlwZSIsIm1lc3NhZ2VEYXRhIiwiSEVMTE8iLCJicm9hZGNhc3QiLCJkaXNjb25uZWN0TXlTb2NrZXQiLCJvdGhlclBsYXllciIsInJvb21DcmVhdGVkIiwicGxheWVyQnlJRCIsInJvb21CeUlEIiwicm9vbXMiLCJzcWxUZXh0IiwiV0lOIiwiTE9TVCIsImNsaWVudCIsInF1ZXJ5IiwicmVzIiwicmVsZWFzZSIsImNhdGNoIiwiZSIsInN0YWNrIiwibmFtZSIsInRleHQiLCJ2YWx1ZXMiLCJ0aGVuIiwicm93cyIsInVuZGVmaW5lZCIsImNyZWF0ZU5ld1VzZXIiLCJjcmVhdGVOZXdVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sSUFBTUEsb0JBQWI7QUFBQTtBQUFBOztnQkFBYUEsb0IsV0FDcUIsMEJBQTBCLE87O2dCQUQvQ0Esb0IsY0FHd0IsMEJBQTBCLFU7O2dCQUhsREEsb0IsZUFJeUIsMEJBQTBCLFc7O2dCQUpuREEsb0IsdUJBS2lDLDBCQUEwQixtQjs7Z0JBTDNEQSxvQixzQkFNZ0MsMEJBQTBCLGtCOztnQkFOMURBLG9CLDBCQU9vQywyQkFBMkIsc0I7O2dCQVAvREEsb0Isc0JBV2dDLDBCQUEwQixrQjs7Z0JBWDFEQSxvQixtQkFZNkIsMEJBQTBCLGU7O2dCQVp2REEsb0IscUJBYStCLDBCQUEwQixpQjs7Z0JBYnpEQSxvQixrQkFjNEIsMEJBQTBCLGM7O2dCQWR0REEsb0IsNEJBZXNDLDBCQUEwQix3Qjs7Z0JBZmhFQSxvQix3QkFnQmtDLDBCQUEwQixvQjs7Z0JBaEI1REEsb0IsMEJBaUJvQywwQkFBMEIsc0I7O2dCQWpCOURBLG9CLG1CQWtCNkIsMEJBQTBCLGU7O2dCQWxCdkRBLG9CLDRCQW1Cc0MsMEJBQTBCLHdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CN0U7QUFDQTtBQUVPLElBQUtDLFlBQVosQyxDQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztXQXpCWUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtHQUFBQSxZLEtBQUFBLFk7O0FBNEJMLElBQU1DLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEseUNBTW1DLEtBTm5DOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQWlDK0I7QUFDdkIsV0FBS0MsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ0ksTUFBM0IsRUFBbUNDLEVBQW5DLENBQXNDTCxZQUFZLENBQUNNLFVBQW5EO0FBRUEsV0FBS0osR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ00sVUFBM0IsRUFBdUNELEVBQXZDLENBQTBDTCxZQUFZLENBQUNPLGdCQUF2RDtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNNLFVBQTNCLEVBQXVDRCxFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDUSxrQkFBdkQsRUFKdUIsQ0FNdkI7O0FBQ0EsV0FBS04sR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1Esa0JBQTNCLEVBQStDSCxFQUEvQyxDQUFrREwsWUFBWSxDQUFDUyxpQkFBL0Q7QUFDQSxXQUFLUCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDUyxpQkFBM0IsRUFBOENKLEVBQTlDLENBQWlETCxZQUFZLENBQUNVLE9BQTlEO0FBQ0EsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1MsaUJBQTNCLEVBQThDSixFQUE5QyxDQUFpREwsWUFBWSxDQUFDTyxnQkFBOUQ7QUFFQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVyxVQUEzQixFQUF1Q04sRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1ksaUJBQXZEO0FBQ0EsV0FBS1YsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1ksaUJBQTNCLEVBQThDUCxFQUE5QyxDQUFpREwsWUFBWSxDQUFDTyxnQkFBOUQ7QUFDQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDWSxpQkFBM0IsRUFBOENQLEVBQTlDLENBQWlETCxZQUFZLENBQUNVLE9BQTlEO0FBRUEsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csVUFBM0IsRUFBdUNOLEVBQXZDLENBQTBDTCxZQUFZLENBQUNhLG1CQUF2RDtBQUNBLFdBQUtYLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNhLG1CQUEzQixFQUFnRFIsRUFBaEQsQ0FBbURMLFlBQVksQ0FBQ08sZ0JBQWhFO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2EsbUJBQTNCLEVBQWdEUixFQUFoRCxDQUFtREwsWUFBWSxDQUFDYyxxQkFBaEU7QUFDQSxXQUFLWixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYSxtQkFBM0IsRUFBZ0RSLEVBQWhELENBQW1ETCxZQUFZLENBQUNVLE9BQWhFLEVBbEJ1QixDQW1CdkI7QUFFQTtBQUNBOztBQUVBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLHFCQUEzQixFQUFrRFQsRUFBbEQsQ0FBcURMLFlBQVksQ0FBQ08sZ0JBQWxFO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2MscUJBQTNCLEVBQWtEVCxFQUFsRCxDQUFxREwsWUFBWSxDQUFDVSxPQUFsRTtBQUNBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLHFCQUEzQixFQUFrRFQsRUFBbEQsQ0FBcURMLFlBQVksQ0FBQ2UsU0FBbEU7QUFFQSxXQUFLYixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxTQUEzQixFQUFzQ1YsRUFBdEMsQ0FBeUNMLFlBQVksQ0FBQ08sZ0JBQXREO0FBRUEsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1UsT0FBM0IsRUFBb0NMLEVBQXBDLENBQXVDTCxZQUFZLENBQUNPLGdCQUFwRDtBQUVBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDZ0IsVUFBcEQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTyxnQkFBM0IsRUFBNkNGLEVBQTdDLENBQWdETCxZQUFZLENBQUNnQixVQUE3RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLHFCQUEzQixFQUFrRFQsRUFBbEQsQ0FBcURMLFlBQVksQ0FBQ2dCLFVBQWxFO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2lCLE9BQTNCLEVBQW9DWixFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDZ0IsVUFBcEQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDUyxpQkFBM0IsRUFBOENKLEVBQTlDLENBQWlETCxZQUFZLENBQUNnQixVQUE5RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNZLGlCQUEzQixFQUE4Q1AsRUFBOUMsQ0FBaURMLFlBQVksQ0FBQ2dCLFVBQTlEO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2EsbUJBQTNCLEVBQWdEUixFQUFoRCxDQUFtREwsWUFBWSxDQUFDZ0IsVUFBaEU7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxTQUEzQixFQUFzQ1YsRUFBdEMsQ0FBeUNMLFlBQVksQ0FBQ2dCLFVBQXREO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csVUFBM0IsRUFBdUNOLEVBQXZDLENBQTBDTCxZQUFZLENBQUNnQixVQUF2RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNRLGtCQUEzQixFQUErQ0gsRUFBL0MsQ0FBa0RMLFlBQVksQ0FBQ2dCLFVBQS9EO0FBRUEsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2dCLFVBQTNCLEVBQXVDWCxFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDTSxVQUF2RDtBQUNBLFdBQUtKLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNnQixVQUEzQixFQUF1Q1gsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1MsaUJBQXZEO0FBQ0EsV0FBS1AsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2dCLFVBQTNCLEVBQXVDWCxFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDUSxrQkFBdkQ7QUFFQSxXQUFLTixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTyxnQkFBM0IsRUFBNkNGLEVBQTdDLENBQWdETCxZQUFZLENBQUNpQixPQUE3RDtBQUNBLFdBQUtmLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNPLGdCQUEzQixFQUE2Q0YsRUFBN0MsQ0FBZ0RMLFlBQVksQ0FBQ1UsT0FBN0Q7QUFDQSxXQUFLUixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTyxnQkFBM0IsRUFBNkNGLEVBQTdDLENBQWdETCxZQUFZLENBQUNlLFNBQTdEO0FBRUEsV0FBS2IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2lCLE9BQTNCLEVBQW9DWixFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDZSxTQUFwRDtBQUNBLFdBQUtiLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNpQixPQUEzQixFQUFvQ1osRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ1csVUFBcEQ7QUFFQSxXQUFLVCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxTQUEzQixFQUFzQ1YsRUFBdEMsQ0FBeUNMLFlBQVksQ0FBQ2MscUJBQXREO0FBQ0EsV0FBS1osR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2UsU0FBM0IsRUFBc0NWLEVBQXRDLENBQXlDTCxZQUFZLENBQUNVLE9BQXREO0FBQ0EsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2UsU0FBM0IsRUFBc0NWLEVBQXRDLENBQXlDTCxZQUFZLENBQUNXLFVBQXREO0FBRUEsV0FBS1QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1UsT0FBM0IsRUFBb0NMLEVBQXBDLENBQXVDTCxZQUFZLENBQUNXLFVBQXBEO0FBQ0EsV0FBS1QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1UsT0FBM0IsRUFBb0NMLEVBQXBDLENBQXVDTCxZQUFZLENBQUNjLHFCQUFwRDtBQUVBLFdBQUtaLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNXLFVBQTNCLEVBQXVDTixFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDTyxnQkFBdkQ7QUFDQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVyxVQUEzQixFQUF1Q04sRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1UsT0FBdkQ7QUFFSDtBQWpHTDtBQUFBO0FBQUEsdUNBbUc4QlEsWUFuRzlCLEVBbUd1RDtBQUMvQztBQUNBLFdBQUtDLFNBQUwsR0FBaUJELFlBQWpCO0FBQ0g7QUF0R0w7QUFBQTtBQUFBLHlDQXdHc0M7QUFDOUJqQix3QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCQyxXQUE5QixDQUEwQyxLQUFLRixTQUEvQztBQUNBLFdBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDSDtBQTNHTDtBQUFBO0FBQUEsc0NBNkdzQztBQUM5QixVQUFJLENBQUNHLGtEQUFBLENBQWMsS0FBS0gsU0FBbkIsQ0FBRCxJQUFrQ0csNkNBQUEsQ0FBUyxLQUFLSCxTQUFkLENBQXRDLEVBQ0ksT0FBTyxJQUFQO0FBRUosYUFBTyxLQUFQO0FBQ0g7QUFsSEw7QUFBQTtBQUFBLGdDQW9IdUJJLEtBcEh2QixFQW9IeUM7QUFDakMsVUFBSSxDQUFDdkIsWUFBWSxDQUFDdUIsS0FBRCxDQUFqQixFQUEwQjtBQUN0QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksOENBQThDRixLQUExRCxFQUFpRSxvQ0FBakU7QUFFSDs7QUFDRCxVQUFJQSxLQUFLLElBQUl2QixZQUFZLENBQUNpQixPQUExQixFQUFtQztBQUMvQk8sZUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQSxhQUFLQyxvQkFBTDtBQUNBRixlQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0g7O0FBQ0R4Qix3QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCbEIsR0FBOUIsQ0FBa0N5QixFQUFsQyxDQUFxQ0osS0FBckM7QUFDQSxXQUFLRyxvQkFBTDtBQUNIO0FBaklMO0FBQUE7QUFBQSwwQ0FtSXlDO0FBQUE7O0FBQ2pDLFVBQUlFLENBQVMsR0FBRyxFQUFoQjs7QUFFQSxVQUFJLEtBQUsxQixHQUFULEVBQWM7QUFDVm9CLHNEQUFBLENBQVUsS0FBS3BCLEdBQWYsRUFBb0IsVUFBQ3FCLEtBQUQsRUFBZ0I7QUFDaEMsY0FBSUEsS0FBSyxJQUFJLEtBQUksQ0FBQ3JCLEdBQUwsQ0FBUzJCLFlBQXRCLEVBQW9DO0FBQ2hDO0FBQ0FELGFBQUMsR0FBRzVCLFlBQVksQ0FBQ3VCLEtBQUQsQ0FBaEI7QUFDQTtBQUNIO0FBQ0osU0FORDtBQU9IOztBQUVELGFBQU9LLENBQVA7QUFDSDtBQWpKTDtBQUFBO0FBQUEsMkNBbUp5QztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FKLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHlDQUF5Q3hCLGtCQUFrQixDQUFDbUIsUUFBbkIsR0FBOEJVLG1CQUE5QixFQUFyRCxFQUEwRyx3REFBMUcsRUFOaUMsQ0FRakM7QUFDQTtBQUNIO0FBN0pMO0FBQUE7QUFVSTtBQVZKLCtCQVkwQztBQUNsQyxVQUFJLENBQUM3QixrQkFBa0IsQ0FBQzhCLFFBQXhCLEVBQWtDO0FBQzlCOUIsMEJBQWtCLENBQUM4QixRQUFuQixHQUE4QixJQUFJOUIsa0JBQUosRUFBOUI7O0FBRUEsWUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCWSxXQUFuQyxFQUFnRDtBQUM1Qy9CLDRCQUFrQixDQUFDbUIsUUFBbkIsR0FBOEJsQixHQUE5QixHQUFvQyxJQUFJK0IsNkRBQUosQ0FBcUNqQyxZQUFZLENBQUNJLE1BQWxELENBQXBDO0FBQ0FILDRCQUFrQixDQUFDbUIsUUFBbkIsR0FBOEJjLGdCQUE5QjtBQUNBakMsNEJBQWtCLENBQUNtQixRQUFuQixHQUE4QlksV0FBOUIsR0FBNEMsSUFBNUM7QUFFQSxjQUFJSixDQUFTLEdBQUc1QixZQUFZLENBQUNBLFlBQVksQ0FBQ0ksTUFBZCxDQUE1QjtBQUNBb0IsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUEwQ0csQ0FBdEQsRUFBeUQsd0RBQXpELEVBTjRDLENBTzVDO0FBQ0E7QUFFQTtBQUVIO0FBQ0o7O0FBQ0QsYUFBTzNCLGtCQUFrQixDQUFDOEIsUUFBMUI7QUFDSDtBQS9CTDs7QUFBQTtBQUFBOztnQkFBYTlCLGtCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlY7OztBQUdPLElBQU1rQyxXQUFiO0FBQUE7QUFBQTtBQUNHLHVCQUFtQmpDLEdBQW5CLEVBQStDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7QUFBRzs7QUFEckQ7QUFBQTs7QUFPRzs7O0FBUEgseUJBVTZCO0FBQUEsd0NBQWJrQyxNQUFhO0FBQWJBLGNBQWE7QUFBQTs7QUFDdkIsV0FBS0MsUUFBTCxHQUFnQkQsTUFBaEI7QUFDQSxXQUFLbEMsR0FBTCxDQUFTb0MsY0FBVCxDQUF3QixJQUF4QjtBQUNGO0FBQ0Q7Ozs7O0FBZEg7QUFBQTtBQUFBLDBCQWtCZ0JGLE1BbEJoQixFQWtCNkI7QUFDdkIsVUFBSUMsUUFBYSxHQUFHLEVBQXBCOztBQUNBLFdBQUssSUFBSVQsQ0FBVCxJQUFjUSxNQUFkLEVBQXNCO0FBQ25CLFlBQUlBLE1BQU0sQ0FBQ0csY0FBUCxDQUFzQlgsQ0FBdEIsQ0FBSixFQUE4QjtBQUMzQlMsa0JBQVEsQ0FBQ0csSUFBVCxDQUFrQkosTUFBTSxDQUFDUixDQUFELENBQXhCO0FBQ0Y7QUFDSDs7QUFFRCxXQUFLUyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFdBQUtuQyxHQUFMLENBQVNvQyxjQUFULENBQXdCLElBQXhCO0FBQ0Y7QUE1Qko7O0FBQUE7QUFBQTtBQStCQTs7OztBQUdPLElBQU1HLGtCQUFiLEdBQ0csNEJBQW1CdkMsR0FBbkIsRUFBc0RDLElBQXRELEVBQXNFRSxFQUF0RSxFQUE2RTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFHLENBRG5GO0FBSUE7Ozs7O0FBSU8sSUFBTTRCLGtCQUFiO0FBQUE7QUFBQTtBQVVHLDhCQUFZUyxVQUFaLEVBQXlFO0FBQUEsUUFBOUNDLDJCQUE4Qyx1RUFBUCxLQUFPOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLGtEQU5qQixFQU1pQjs7QUFBQSwwQ0FMTSxFQUtOOztBQUFBLDRDQUpKLEVBSUk7O0FBQUEsNkNBSFksRUFHWjs7QUFBQSx3REFGTCxJQUVLOztBQUN0RSxTQUFLZCxZQUFMLEdBQW9CYSxVQUFwQjtBQUNBLFNBQUtFLFdBQUwsR0FBbUJGLFVBQW5CO0FBQ0EsU0FBS0csNEJBQUwsR0FBb0NGLDJCQUFwQztBQUNGOztBQWRKO0FBQUE7QUFBQSxtQ0FnQnlCRyxHQWhCekIsRUFnQjhDO0FBQUE7O0FBQ3hDQSxTQUFHLENBQUNDLFVBQUosQ0FBZUMsT0FBZixDQUF1QixVQUFBN0MsSUFBSSxFQUFJO0FBQzVCMkMsV0FBRyxDQUFDVCxRQUFKLENBQWFXLE9BQWIsQ0FBcUIsVUFBQTNDLEVBQUUsRUFBSTtBQUN2QjtBQUNBLGNBQUksQ0FBQyxLQUFJLENBQUM0QyxNQUFMLENBQVk5QyxJQUFaLEVBQWtCRSxFQUFsQixDQUFMLEVBQTRCO0FBQzFCLGlCQUFJLENBQUM2QyxvQkFBTCxDQUEwQlYsSUFBMUIsQ0FBK0IsSUFBSUMsa0JBQUosQ0FBMEIsS0FBMUIsRUFBZ0N0QyxJQUFoQyxFQUFzQ0UsRUFBdEMsQ0FBL0I7QUFDRjtBQUNILFNBTEQ7QUFNRixPQVBEO0FBUUY7QUFFRDs7OztBQTNCSDtBQUFBO0FBQUEsdUJBOEJha0IsS0E5QmIsRUE4QnVCNEIsUUE5QnZCLEVBOEJ3RjtBQUNsRixVQUFJQyxHQUFHLEdBQUc3QixLQUFLLENBQUM4QixRQUFOLEVBQVY7O0FBQ0EsVUFBSSxDQUFDLEtBQUtDLFlBQUwsQ0FBa0JGLEdBQWxCLENBQUwsRUFBNkI7QUFDMUIsYUFBS0UsWUFBTCxDQUFrQkYsR0FBbEIsSUFBeUIsRUFBekI7QUFDRjs7QUFDRCxXQUFLRSxZQUFMLENBQWtCRixHQUFsQixFQUF1QlosSUFBdkIsQ0FBNEJXLFFBQTVCOztBQUNBLGFBQU8sSUFBUDtBQUNGO0FBRUQ7Ozs7O0FBdkNIO0FBQUE7QUFBQSw0QkEyQ2tCNUIsS0EzQ2xCLEVBMkM0QjRCLFFBM0M1QixFQTJDaUc7QUFDM0YsVUFBSUMsR0FBRyxHQUFHN0IsS0FBSyxDQUFDOEIsUUFBTixFQUFWOztBQUNBLFVBQUksQ0FBQyxLQUFLRSxlQUFMLENBQXFCSCxHQUFyQixDQUFMLEVBQWdDO0FBQzdCLGFBQUtHLGVBQUwsQ0FBcUJILEdBQXJCLElBQTRCLEVBQTVCO0FBQ0Y7O0FBQ0QsV0FBS0csZUFBTCxDQUFxQkgsR0FBckIsRUFBMEJaLElBQTFCLENBQStCVyxRQUEvQjs7QUFDQSxhQUFPLElBQVA7QUFDRjtBQUVEOzs7OztBQXBESDtBQUFBO0FBQUEsMkJBd0RpQjVCLEtBeERqQixFQXdEMkI0QixRQXhEM0IsRUF3RGlGO0FBQzNFLFVBQUlDLEdBQUcsR0FBRzdCLEtBQUssQ0FBQzhCLFFBQU4sRUFBVjs7QUFDQSxVQUFJLENBQUMsS0FBS0csY0FBTCxDQUFvQkosR0FBcEIsQ0FBTCxFQUErQjtBQUM1QixhQUFLSSxjQUFMLENBQW9CSixHQUFwQixJQUEyQixFQUEzQjtBQUNGOztBQUNELFdBQUtJLGNBQUwsQ0FBb0JKLEdBQXBCLEVBQXlCWixJQUF6QixDQUE4QlcsUUFBOUI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Y7QUFFRDs7Ozs7QUFqRUg7QUFBQTtBQUFBLHdDQXFFOEJBLFFBckU5QixFQXFFOEY7QUFDeEYsVUFBRyxDQUFDLEtBQUtNLDBCQUFULEVBQW9DO0FBQ2pDLGFBQUtBLDBCQUFMLEdBQWtDTixRQUFsQztBQUNGOztBQUNELGFBQU8sSUFBUDtBQUNGO0FBRUQ7Ozs7QUE1RUg7QUFBQTtBQUFBLDJCQStFK0M7QUFDekMsVUFBSU8sV0FBVyxHQUFHLElBQUl2QixXQUFKLENBQW1CLElBQW5CLENBQWxCOztBQUR5Qyx5Q0FBN0JDLE1BQTZCO0FBQTdCQSxjQUE2QjtBQUFBOztBQUV6Q3NCLGlCQUFXLENBQUNYLFVBQVosR0FBeUJYLE1BQXpCO0FBQ0EsYUFBT3NCLFdBQVA7QUFDRjtBQW5GSjtBQUFBO0FBQUEsNEJBcUZrQnRCLE1BckZsQixFQXFGK0M7QUFDekMsVUFBSVcsVUFBZSxHQUFHLEVBQXRCOztBQUNBLFdBQUssSUFBSW5CLENBQVQsSUFBY1EsTUFBZCxFQUFzQjtBQUNuQixZQUFJQSxNQUFNLENBQUNHLGNBQVAsQ0FBc0JYLENBQXRCLENBQUosRUFBOEI7QUFDM0JtQixvQkFBVSxDQUFDUCxJQUFYLENBQW9CSixNQUFNLENBQUNSLENBQUQsQ0FBMUI7QUFDRjtBQUNIOztBQUVELFVBQUk4QixXQUFXLEdBQUcsSUFBSXZCLFdBQUosQ0FBbUIsSUFBbkIsQ0FBbEI7O0FBQ0F1QixpQkFBVyxDQUFDWCxVQUFaLEdBQXlCQSxVQUF6QjtBQUNBLGFBQU9XLFdBQVA7QUFDRjtBQWhHSjtBQUFBO0FBQUEscUNBa0c0QnZELElBbEc1QixFQWtHcUNFLEVBbEdyQyxFQWtHcUQ7QUFDL0MsYUFBTyxLQUFLNkMsb0JBQUwsQ0FBMEJTLElBQTFCLENBQStCLFVBQUFDLEVBQUUsRUFBSTtBQUN6QyxlQUFRQSxFQUFFLENBQUN6RCxJQUFILEtBQVlBLElBQVosSUFBb0J5RCxFQUFFLENBQUN2RCxFQUFILEtBQVVBLEVBQXRDO0FBQ0YsT0FGTSxDQUFQO0FBR0Y7QUFFRDs7Ozs7O0FBeEdIO0FBQUE7QUFBQSwyQkE2R2tCd0QsU0E3R2xCLEVBNkdnQ0MsT0E3R2hDLEVBNkdxRDtBQUM5QyxhQUFRLEtBQUtqQiw0QkFBTCxJQUFxQ2dCLFNBQVMsS0FBS0MsT0FBcEQsSUFBZ0UsS0FBS0MsZ0JBQUwsQ0FBc0JGLFNBQXRCLEVBQWlDQyxPQUFqQyxDQUF2RTtBQUNIO0FBRUQ7Ozs7QUFqSEg7QUFBQTtBQUFBLDBCQW9IZ0J2QyxLQXBIaEIsRUFvSG1DO0FBQzVCLGFBQU8sS0FBSzBCLE1BQUwsQ0FBWSxLQUFLcEIsWUFBakIsRUFBK0JOLEtBQS9CLENBQVA7QUFDSDtBQUVEOzs7O0FBeEhIO0FBQUE7QUFBQSx1QkEySGFBLEtBM0hiLEVBMkh1QnlDLEtBM0h2QixFQTJIMEM7QUFDcEMsVUFBSSxDQUFDLEtBQUtDLEtBQUwsQ0FBVzFDLEtBQVgsQ0FBTCxFQUF3QjtBQUNyQixZQUFHLENBQUMsS0FBS2tDLDBCQUFOLElBQW9DLENBQUMsS0FBS0EsMEJBQUwsQ0FBZ0MsS0FBSzVCLFlBQXJDLEVBQW1ETixLQUFuRCxDQUF4QyxFQUFrRztBQUMvRixnQkFBTSxJQUFJMkMsS0FBSixDQUFVLG9EQUFvRCxLQUFLckMsWUFBTCxDQUFrQndCLFFBQWxCLEVBQXBELEdBQW1GLE1BQW5GLEdBQTRGOUIsS0FBSyxDQUFDOEIsUUFBTixFQUF0RyxDQUFOO0FBQ0Y7QUFDSCxPQUpELE1BSU87QUFDSixhQUFLYyxhQUFMLENBQW1CNUMsS0FBbkIsRUFBMEJ5QyxLQUExQjtBQUNGO0FBQ0g7QUFFQTs7OztBQUlBOztBQXpJSjtBQUFBO0FBQUEsaUNBMEl3QjdELElBMUl4QixFQTBJaUNFLEVBMUlqQyxFQTBJd0MsQ0FFcEMsQ0E1SUosQ0EySU07O0FBR0g7Ozs7O0FBOUlIO0FBQUE7QUFBQSw0QkFrSndCO0FBQ2xCLFdBQUt3QixZQUFMLEdBQW9CLEtBQUtlLFdBQXpCO0FBQ0Y7QUFFRDs7OztBQXRKSDtBQUFBO0FBQUEsdUJBeUphckIsS0F6SmIsRUF5SmdDO0FBQ3pCLGFBQU8sS0FBS00sWUFBTCxLQUFzQk4sS0FBN0I7QUFDSDtBQTNKSjtBQUFBO0FBQUEsa0NBNkp5QkEsS0E3SnpCLEVBNkptQ3lDLEtBN0puQyxFQTZKZ0Q7QUFBQTs7QUFDMUMsVUFBSSxDQUFDLEtBQUtSLGNBQUwsQ0FBb0IsS0FBSzNCLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwQixDQUFMLEVBQXdEO0FBQ3JELGFBQUtHLGNBQUwsQ0FBb0IsS0FBSzNCLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwQixJQUFvRCxFQUFwRDtBQUNGOztBQUVELFVBQUksQ0FBQyxLQUFLRSxlQUFMLENBQXFCaEMsS0FBSyxDQUFDOEIsUUFBTixFQUFyQixDQUFMLEVBQTZDO0FBQzFDLGFBQUtFLGVBQUwsQ0FBcUJoQyxLQUFLLENBQUM4QixRQUFOLEVBQXJCLElBQXlDLEVBQXpDO0FBQ0Y7O0FBRUQsVUFBSSxDQUFDLEtBQUtDLFlBQUwsQ0FBa0IvQixLQUFLLENBQUM4QixRQUFOLEVBQWxCLENBQUwsRUFBMEM7QUFDdkMsYUFBS0MsWUFBTCxDQUFrQi9CLEtBQUssQ0FBQzhCLFFBQU4sRUFBbEIsSUFBc0MsRUFBdEM7QUFDRjs7QUFHRCxVQUFJZSxPQUFPLEdBQUcsS0FBS1osY0FBTCxDQUFvQixLQUFLM0IsWUFBTCxDQUFrQndCLFFBQWxCLEVBQXBCLEVBQWtEZ0IsTUFBbEQsQ0FBa0UsVUFBQ0MsS0FBRCxFQUFpQkMsSUFBakIsRUFBOEM7QUFDM0gsZUFBT0QsS0FBSyxJQUFjQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFWLEVBQWdCakQsS0FBaEIsQ0FBMUI7QUFDRixPQUZhLEVBRVgsSUFGVyxDQUFkOztBQUlBLFVBQUlrRCxRQUFRLEdBQUcsS0FBS2xCLGVBQUwsQ0FBcUJoQyxLQUFLLENBQUM4QixRQUFOLEVBQXJCLEVBQXVDZ0IsTUFBdkMsQ0FBdUQsVUFBQ0MsS0FBRCxFQUFpQkMsSUFBakIsRUFBZ0Q7QUFDbkg7QUFDQyxlQUFPRCxLQUFLLElBQWNDLElBQUksQ0FBQ0MsSUFBTCxDQUFVLE1BQVYsRUFBZ0IsTUFBSSxDQUFDM0MsWUFBckIsRUFBbUNtQyxLQUFuQyxDQUExQjtBQUNILE9BSGMsRUFHWixJQUhZLENBQWY7O0FBS0EsVUFBSUksT0FBTyxJQUFJSyxRQUFmLEVBQXlCO0FBQ3RCLFlBQUlDLEdBQUcsR0FBRyxLQUFLN0MsWUFBZjtBQUNBLGFBQUtBLFlBQUwsR0FBb0JOLEtBQXBCOztBQUNBLGFBQUsrQixZQUFMLENBQWtCLEtBQUt6QixZQUFMLENBQWtCd0IsUUFBbEIsRUFBbEIsRUFBZ0RMLE9BQWhELENBQXdELFVBQUFGLEdBQUcsRUFBSTtBQUM1REEsYUFBRyxDQUFDMEIsSUFBSixDQUFTLE1BQVQsRUFBZUUsR0FBZixFQUFvQlYsS0FBcEI7QUFDRixTQUZEOztBQUdBLGFBQUtXLFlBQUwsQ0FBa0JELEdBQWxCLEVBQXVCbkQsS0FBdkI7QUFDRjtBQUNIO0FBNUxKOztBQUFBO0FBQUEsSSxDQWdNSDtBQUNBLDZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9PTyxJQUFNcUQseUJBQWI7QUFBQTtBQUFBOztnQkFBYUEseUIsWUFDc0IsWTs7Z0JBRHRCQSx5QixVQUVvQixPOztBQUcxQixJQUFNQyxxQkFBYjtBQUFBO0FBQUE7O2dCQUFhQSxxQixtQkFFNkIsMkJBQTJCLGU7O2dCQUZ4REEscUIsaUJBRzJCLDJCQUEyQixhOztnQkFIdERBLHFCLGNBSXdCLDJCQUEyQixVOztnQkFKbkRBLHFCLGdCQUswQiwyQkFBMkIsWTs7Z0JBTHJEQSxxQixjQU13QiwyQkFBMkIsVTs7Z0JBTm5EQSxxQixvQkFPOEIsMkJBQTJCLGdCOztnQkFQekRBLHFCLHlCQVFtQywyQkFBMkIscUI7O2dCQVI5REEscUIsMEJBU29DLDJCQUEyQixzQjs7Z0JBVC9EQSxxQix3QkFVa0MsMkJBQTJCLG9COztnQkFWN0RBLHFCLGVBV3lCLDJCQUEyQixXOztnQkFYcERBLHFCLGlCQVkyQiwyQkFBMkIsYTs7Z0JBWnREQSxxQixnQ0FhMEMsMkJBQTJCLDRCOztnQkFickVBLHFCLGdDQWMwQywyQkFBMkIsNEI7O2dCQWRyRUEscUIsc0JBZWdDLDJCQUEyQixrQjs7Z0JBZjNEQSxxQiwyQkFnQnFDLDJCQUEyQix1Qjs7Z0JBaEJoRUEscUIsb0JBaUI4QiwyQkFBMkIsZ0I7O0FBSS9ELElBQU1DLHVCQUFiO0FBQUE7QUFBQTs7Z0JBQWFBLHVCLHVCQUNpQyw2QkFBNkIsbUI7O2dCQUQ5REEsdUIsb0JBRThCLDZCQUE2QixpQjs7Z0JBRjNEQSx1QixXQUdxQiw2QkFBNkIsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCL0Q7Ozs7Ozs7Ozs7QUFXTyxJQUFNQyxLQUFiO0FBQUE7QUFBQTtBQUlJLGlCQUFvQkMsZ0JBQXBCLEVBQXdEQyxrQkFBeEQsRUFBc0Y7QUFBQTs7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBRXJGOztBQU5MO0FBQUE7QUFBQSwwQkFRaUJDLENBUmpCLEVBUTRCO0FBQUE7O0FBQ3BCLFdBQUtDLFdBQUwsR0FBbUJELENBQW5CLENBRG9CLENBRXBCOztBQUNBLFdBQUtFLEtBQUwsR0FBYUMsV0FBVyxDQUFDLFlBQU07QUFDM0IsYUFBSSxDQUFDRixXQUFMOztBQUNBLFlBQUksS0FBSSxDQUFDQSxXQUFMLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCRyx1QkFBYSxDQUFDLEtBQUksQ0FBQ0YsS0FBTixDQUFiOztBQUNBLGVBQUksQ0FBQ0gsa0JBQUw7QUFDSCxTQUhELE1BR087QUFDSCxlQUFJLENBQUNELGdCQUFMO0FBQ0g7QUFDSixPQVJ1QixFQVFyQixJQVJxQixDQUF4QjtBQVNIO0FBcEJMO0FBQUE7QUFBQSwyQkFzQmtCO0FBQ1ZNLG1CQUFhLENBQUMsS0FBS0YsS0FBTixDQUFiO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLHFDQTBCb0M7QUFDNUIsYUFBTyxLQUFLRCxXQUFaO0FBQ0g7QUE1Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7Ozs7Ozs7O0FBV0E7QUFLQTs7Ozs7Ozs7O0FBUU8sSUFBTUksTUFBYjtBQUFBO0FBQUE7QUFJSTtBQUdBLG9CQUFjO0FBQUE7O0FBQUEsa0NBTmtCLEVBTWxCOztBQUFBOztBQUFBLGlEQUp3QixLQUl4Qjs7QUFBQSw0Q0FGbUIsS0FFbkI7QUFDYjs7QUFSTDtBQUFBO0FBQUEsOEJBVXFCQyxNQVZyQixFQVV3QztBQUVoQyxVQUFJQyxXQUFtQixHQUFHRCxNQUFNLENBQUNFLEVBQVAsQ0FBVXJDLFFBQVYsR0FBcUJzQyxPQUFyQixDQUE2QmYsd0lBQXlCLENBQUNnQixNQUF2RCxFQUErRCxFQUEvRCxFQUFtRUQsT0FBbkUsQ0FBMkUsR0FBM0UsRUFBZ0YsRUFBaEYsQ0FBMUI7QUFDQUYsaUJBQVcsR0FBR0EsV0FBVyxDQUFDRSxPQUFaLENBQW9CZix3SUFBeUIsQ0FBQ2lCLElBQTlDLEVBQW9ELEVBQXBELEVBQXdERixPQUF4RCxDQUFnRSxHQUFoRSxFQUFxRSxFQUFyRSxDQUFkO0FBRUEsV0FBS0csSUFBTCxDQUFVQyxRQUFWLEdBQXFCTixXQUFyQjtBQUNBLFdBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUVBLFVBQUksS0FBS00sSUFBTCxDQUFVQyxRQUFkLEVBQ0l2RSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBZ0MsS0FBS3FFLElBQUwsQ0FBVUMsUUFBdEQ7QUFDUDtBQXBCTDtBQUFBO0FBQUEscUNBc0I0QkMsWUF0QjVCLEVBc0JrRTtBQUUxRCxVQUFJQSxZQUFZLENBQUNDLE1BQWpCLEVBQXlCO0FBQ3JCLGFBQUtILElBQUwsQ0FBVUcsTUFBVixHQUFtQkQsWUFBWSxDQUFDQyxNQUFoQztBQUNIOztBQUVELFVBQUlELFlBQVksQ0FBQ0UsS0FBakIsRUFBd0I7QUFDcEIsYUFBS0osSUFBTCxDQUFVSSxLQUFWLEdBQWtCRixZQUFZLENBQUNFLEtBQS9CO0FBQ0g7O0FBRUQsVUFBSUYsWUFBWSxDQUFDRyxLQUFqQixFQUF3QjtBQUNwQixhQUFLTCxJQUFMLENBQVVLLEtBQVYsR0FBa0JILFlBQVksQ0FBQ0csS0FBL0I7QUFDSDs7QUFFRCxVQUFJSCxZQUFZLENBQUNJLElBQWpCLEVBQXVCO0FBQ25CLGFBQUtOLElBQUwsQ0FBVU0sSUFBVixHQUFpQkosWUFBWSxDQUFDSSxJQUE5QjtBQUNIOztBQUVELFVBQUlKLFlBQVksQ0FBQ0ssWUFBakIsRUFBK0I7QUFDM0IsYUFBS1AsSUFBTCxDQUFVTyxZQUFWLEdBQXlCTCxZQUFZLENBQUNLLFlBQXRDO0FBQ0g7O0FBRUQsVUFBSUwsWUFBWSxDQUFDTSxLQUFqQixFQUF3QjtBQUNwQixhQUFLUixJQUFMLENBQVVRLEtBQVYsR0FBa0JOLFlBQVksQ0FBQ00sS0FBL0I7QUFDSDs7QUFFRCxVQUFJTixZQUFZLENBQUNPLFlBQWpCLEVBQStCO0FBQzNCLGFBQUtULElBQUwsQ0FBVVMsWUFBVixHQUF5QlAsWUFBWSxDQUFDTyxZQUF0QztBQUNIOztBQUVELFVBQUlQLFlBQVksQ0FBQ08sWUFBakIsRUFBK0I7QUFDM0IsYUFBS1QsSUFBTCxDQUFVUyxZQUFWLEdBQXlCUCxZQUFZLENBQUNPLFlBQXRDO0FBQ0g7O0FBRUQsVUFBSVAsWUFBWSxDQUFDUSxRQUFqQixFQUEyQjtBQUN2QixhQUFLVixJQUFMLENBQVVVLFFBQVYsR0FBcUJSLFlBQVksQ0FBQ1EsUUFBbEM7QUFDSDs7QUFFRCxVQUFJUixZQUFZLENBQUNTLE9BQWpCLEVBQTBCO0FBQ3RCLGFBQUtYLElBQUwsQ0FBVVcsT0FBVixHQUFvQlQsWUFBWSxDQUFDUyxPQUFqQztBQUNIOztBQUVELFVBQUlULFlBQVksQ0FBQ1UsZ0JBQWpCLEVBQW1DO0FBQy9CLGFBQUtaLElBQUwsQ0FBVVksZ0JBQVYsR0FBNkJWLFlBQVksQ0FBQ1UsZ0JBQTFDO0FBQ0g7O0FBRUQsVUFBSVYsWUFBWSxDQUFDVyxJQUFqQixFQUF1QjtBQUNuQixhQUFLYixJQUFMLENBQVVhLElBQVYsR0FBaUJYLFlBQVksQ0FBQ1csSUFBOUI7QUFDSDtBQUNKO0FBdkVMO0FBQUE7QUFBQSw0Q0F5RXNDYixJQXpFdEMsRUF5RXVEO0FBQy9DdEUsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlxRSxJQUFaO0FBQ0F0RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNIO0FBN0VMO0FBQUE7QUFBQSxxQ0ErRStCcUUsSUEvRS9CLEVBK0VnRDtBQUNoRDtBQUNRLFdBQUtOLE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIvQixvSUFBcUIsQ0FBQ2dDLGNBQXZDLEVBQXVEZixJQUF2RDtBQUNIO0FBbEZMO0FBQUE7QUFBQSxrQ0FvRitCO0FBQ3ZCdEUsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSDtBQXRGTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBTyxJQUFLcUYsUUFBWjs7V0FBWUEsUTtBQUFBQSxVO0FBQUFBLFU7QUFBQUEsVTtBQUFBQSxVO0dBQUFBLFEsS0FBQUEsUTs7QUFPTCxJQUFLQyxTQUFaOztXQUFZQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7R0FBQUEsUyxLQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BaOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVPLElBQU1DLGtCQUFiO0FBQUE7QUFBQTtBQUFBOztBQUNJLGdDQUFjO0FBQUE7O0FBQUEsNkZBRVY7QUFDQTtBQUNIOztBQUxMO0FBQUE7QUFBQSxxQ0FPcUJoQixZQVByQixFQU82QztBQUNyQywrRkFBdUJBLFlBQXZCOztBQUVBeEUsYUFBTyxDQUFDQyxHQUFSLENBQVksNkRBQVo7QUFDQSxXQUFLK0QsTUFBTCxDQUFZb0IsSUFBWixDQUFpQi9CLG9JQUFxQixDQUFDb0MsZ0JBQXZDLEVBQXlELEtBQUtuQixJQUE5RDtBQUNIO0FBWkw7O0FBQUE7QUFBQSxFQUF3Q1AscURBQXhDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBOzs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLElBQU0yQixVQUFiO0FBQUE7QUFBQTtBQWFJLHNCQUFZeEIsRUFBWixFQUF3QnlCLEVBQXhCLEVBQWlDO0FBQUE7O0FBQUEsZ0NBWmIsRUFZYTs7QUFBQSxxQ0FYTCxFQVdLOztBQUFBOztBQUFBLHNDQVRKO0FBQUNDLGlCQUFXLEVBQUUsQ0FBZDtBQUFpQkMsaUJBQVcsRUFBRTtBQUE5QixLQVNJOztBQUFBLDBDQVJELEtBUUM7O0FBQUEsZ0RBUEssS0FPTDs7QUFBQSwwQ0FORCxLQU1DOztBQUFBLGdEQUxLLEtBS0w7O0FBQUE7O0FBQUE7O0FBQUEsMkNBRkYsRUFFRTs7QUFDN0IsU0FBSzNCLEVBQUwsR0FBVUEsRUFBVjtBQUNBLFNBQUt5QixFQUFMLEdBQVVBLEVBQVYsQ0FGNkIsQ0FHN0I7QUFDQTs7QUFDQTNGLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFDQSxTQUFLNkYsVUFBTCxHQUFrQixJQUFJdkMsb0VBQUosQ0FBVSxLQUFLd0Msa0JBQUwsQ0FBd0JDLElBQXhCLENBQTZCLElBQTdCLENBQVYsRUFBOEMsS0FBS0Msb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTlDLENBQWxCO0FBQ0g7O0FBcEJMO0FBQUE7QUFBQSx5Q0FzQnVDO0FBQy9CLFdBQUtMLEVBQUwsQ0FBUTlHLEVBQVIsQ0FBVyxLQUFLcUYsRUFBaEIsRUFBb0JrQixJQUFwQixDQUF5QjdHLDZIQUFvQixDQUFDMkgsa0JBQTlDLEVBQWtFLEtBQUtKLFVBQUwsQ0FBZ0JLLGNBQWhCLEVBQWxFO0FBQ0g7QUF4Qkw7QUFBQTtBQUFBLDJDQTBCeUM7QUFDakMsV0FBS1IsRUFBTCxDQUFROUcsRUFBUixDQUFXLEtBQUtxRixFQUFoQixFQUFvQmtCLElBQXBCLENBQXlCN0csNkhBQW9CLENBQUM2SCxvQkFBOUM7QUFDQSxXQUFLQyxhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDK0gsc0JBQXBELEVBRmlDLENBR2pDO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNIO0FBdENMO0FBQUE7QUFBQSxpQ0F3Q3dCQyxNQXhDeEIsRUF3QzhDO0FBQUE7O0FBQ3RDQSxZQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCbkQsb0lBQXFCLENBQUNnQyxjQUF2QyxFQUF1RCxVQUFDZixJQUFELEVBQWU7QUFDbEU7QUFDQSxhQUFJLENBQUNtQyxnQkFBTCxDQUFzQkYsTUFBTSxDQUFDakMsSUFBUCxDQUFZQyxRQUFsQyxFQUE0Q0QsSUFBNUM7QUFDSCxPQUhEO0FBS0FpQyxZQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCakksNkhBQW9CLENBQUNtSSxnQkFBdEMsRUFBd0QsVUFBQ0MsUUFBRCxFQUF3QjtBQUM1RSxhQUFJLENBQUNDLFdBQUwsQ0FBaUJMLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBN0IsRUFBdUNvQyxRQUF2QztBQUNILE9BRkQ7QUFJQUosWUFBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQmpJLDZIQUFvQixDQUFDc0ksc0JBQXRDLEVBQThELFlBQU07QUFDaEUsYUFBSSxDQUFDQyxxQkFBTDtBQUNILE9BRkQ7QUFJQVAsWUFBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQmpJLDZIQUFvQixDQUFDd0ksZUFBdEMsRUFBdUQsWUFBTTtBQUN6RCxhQUFJLENBQUNDLGFBQUw7QUFDSCxPQUZEO0FBSUFULFlBQU0sQ0FBQ3ZDLE1BQVAsQ0FBY3dDLEVBQWQsQ0FBaUJqSSw2SEFBb0IsQ0FBQzBJLGFBQXRDLEVBQXFELFlBQU07QUFDdkQ7QUFDQSxhQUFJLENBQUNuQixVQUFMLENBQWdCb0IsSUFBaEI7O0FBQ0EsYUFBSSxDQUFDdkIsRUFBTCxDQUFROUcsRUFBUixDQUFXLEtBQUksQ0FBQ3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUI3Ryw2SEFBb0IsQ0FBQzZILG9CQUE5QztBQUNILE9BSkQ7QUFNQSxXQUFLZSxPQUFMLENBQWFuRyxJQUFiLENBQWtCdUYsTUFBbEI7QUFDQXZHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVcsS0FBS2lFLEVBQWhCLEdBQXFCLHVCQUFyQixHQUErQ3FDLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBM0QsR0FBc0UscUJBQXRFLEdBQThGLEtBQUs0QyxPQUFMLENBQWFDLE1BQXZILEVBekJzQyxDQTBCdEM7O0FBRUEsVUFBSSxLQUFLRCxPQUFMLENBQWFDLE1BQWIsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS0MsYUFBTDtBQUNIO0FBQ0o7QUF2RUw7QUFBQTtBQUFBLDRDQXlFMEM7QUFDbEMsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBM0VMO0FBQUE7QUFBQSxnQ0E2RXdCL0MsUUE3RXhCLEVBNkUwQ29DLFFBN0UxQyxFQTZFb0U7QUFDNUQsVUFBSUosTUFBSjtBQUNBLFVBQUlnQixRQUFKLENBRjRELENBRzVEOztBQUNBLFVBQUloRCxRQUFRLElBQUksS0FBSzRDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCN0MsSUFBaEIsQ0FBcUJDLFFBQXJDLEVBQStDO0FBQzNDZ0MsY0FBTSxHQUFHLEtBQUtZLE9BQUwsQ0FBYSxDQUFiLENBQVQ7QUFDQUksZ0JBQVEsR0FBRyxLQUFLSixPQUFMLENBQWEsQ0FBYixDQUFYO0FBQ0gsT0FIRCxNQUdPO0FBQ0haLGNBQU0sR0FBRyxLQUFLWSxPQUFMLENBQWEsQ0FBYixDQUFUO0FBQ0FJLGdCQUFRLEdBQUcsS0FBS0osT0FBTCxDQUFhLENBQWIsQ0FBWDtBQUNILE9BVjJELENBVzVEOzs7QUFFQSxVQUFJUixRQUFRLElBQUlKLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWWEsSUFBNUIsRUFBa0M7QUFDOUIsWUFBSSxLQUFLa0IsYUFBTCxJQUFzQkUsTUFBMUIsRUFBa0M7QUFDOUIsZUFBS2UsWUFBTCxHQUFvQixJQUFwQjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtFLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7O0FBQ0RqQixjQUFNLENBQUNqQyxJQUFQLENBQVltRCxZQUFaO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNILE9BUkQsTUFRTyxJQUFJZixRQUFRLElBQUlZLFFBQVEsQ0FBQ2pELElBQVQsQ0FBY2EsSUFBOUIsRUFBb0M7QUFDdkMsWUFBSSxLQUFLa0IsYUFBTCxJQUFzQmtCLFFBQTFCLEVBQW9DO0FBQ2hDLGVBQUtELFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLRSxrQkFBTCxHQUEwQixJQUExQjtBQUNIOztBQUNERCxnQkFBUSxDQUFDakQsSUFBVCxDQUFjbUQsWUFBZDtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxPQVJNLE1BUUEsSUFBSWYsUUFBUSxJQUFJckIscUVBQVEsQ0FBQ3FDLEtBQXpCLEVBQWdDO0FBQ25DLGFBQUtDLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7O0FBRUQsVUFBSXJCLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWW1ELFlBQVosSUFBNEIsQ0FBaEMsRUFBbUMsQ0FFbEMsQ0FGRCxNQUVPLElBQUlGLFFBQVEsQ0FBQ2pELElBQVQsQ0FBY21ELFlBQWQsSUFBOEIsQ0FBbEMsRUFBcUMsQ0FFM0M7QUFDSjtBQW5ITDtBQUFBO0FBQUEsb0NBcUhrQztBQUUxQixVQUFJLEtBQUtHLGtCQUFULEVBQTZCO0FBQ3pCLGFBQUt2QixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDVSxPQUEvRTtBQUNBLGFBQUs0SSxtQkFBTDtBQUNBLGFBQUt6QixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDYyxxQkFBL0U7QUFDQSxhQUFLK0csYUFBTCxDQUFtQnJDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0IvQixvSUFBcUIsQ0FBQzBFLHFCQUFyRDtBQUNBLGFBQUtqQyxVQUFMLENBQWdCa0MsS0FBaEIsQ0FBc0IsS0FBS0MsYUFBM0I7QUFDSCxPQU5ELE1BT0ssSUFBSSxLQUFLWCxZQUFULEVBQXVCO0FBQ3hCLGFBQUtqQixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDVSxPQUEvRTtBQUNBLGFBQUs0SSxtQkFBTDtBQUNBLGFBQUt6QixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDYyxxQkFBL0U7QUFDQSxhQUFLK0csYUFBTCxDQUFtQnJDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0IvQixvSUFBcUIsQ0FBQzBFLHFCQUFyRDtBQUNBLGFBQUtqQyxVQUFMLENBQWdCa0MsS0FBaEIsQ0FBc0IsS0FBS0MsYUFBM0I7QUFFSCxPQVBJLE1BUUEsSUFBSSxDQUFDLEtBQUtULGtCQUFWLEVBQThCO0FBQy9CLGFBQUtuQixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDVSxPQUEvRTtBQUNBLGFBQUs0SSxtQkFBTDtBQUNBLGFBQUt6QixhQUFMLENBQW1CckMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDc0osWUFBcEQsRUFBa0VySiw4RkFBWSxDQUFDTyxnQkFBL0U7QUFDQSxhQUFLc0gsYUFBTCxDQUFtQnJDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0IvQixvSUFBcUIsQ0FBQzBFLHFCQUFyRDtBQUNBLGFBQUtqQyxVQUFMLENBQWdCa0MsS0FBaEIsQ0FBc0IsS0FBS0MsYUFBM0I7QUFDSCxPQU5JLE1BT0E7QUFDRCxhQUFLNUIsYUFBTCxDQUFtQnJDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQ3NKLFlBQXBELEVBQWtFckosOEZBQVksQ0FBQ08sZ0JBQS9FO0FBQ0EsYUFBS3NILGFBQUwsQ0FBbUJyQyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUMwRSxxQkFBckQ7QUFDQSxhQUFLakMsVUFBTCxDQUFnQmtDLEtBQWhCLENBQXNCLEtBQUtDLGFBQTNCO0FBQ0g7QUFFSjtBQW5KTDtBQUFBO0FBQUEsMENBcUp3QztBQUNoQyxXQUFLNUIsYUFBTCxHQUFzQixLQUFLQSxhQUFMLElBQXNCLEtBQUtjLE9BQUwsQ0FBYSxDQUFiLENBQXZCLEdBQTBDLEtBQUtBLE9BQUwsQ0FBYSxDQUFiLENBQTFDLEdBQTRELEtBQUtBLE9BQUwsQ0FBYSxDQUFiLENBQWpGO0FBQ0EsV0FBS0ssa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxXQUFLSSxrQkFBTCxHQUEwQixLQUExQjtBQUNBLFdBQUtOLFlBQUwsR0FBb0IsS0FBcEI7QUFDSCxLQTFKTCxDQTRKSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF4S0o7QUFBQTtBQUFBLHFDQTBLNkIvQyxRQTFLN0IsRUEwSytDRCxJQTFLL0MsRUEwS2dFO0FBQ3hEO0FBQ0EsVUFBSSxLQUFLNkMsT0FBTCxDQUFhLENBQWIsRUFBZ0I3QyxJQUFoQixDQUFxQkMsUUFBckIsSUFBaUNBLFFBQXJDLEVBQStDO0FBQzNDLGFBQUs0QyxPQUFMLENBQWEsQ0FBYixFQUFnQm5ELE1BQWhCLENBQXVCbkYsRUFBdkIsQ0FBMEIsS0FBS3FGLEVBQS9CLEVBQW1Da0IsSUFBbkMsQ0FBd0MvQixvSUFBcUIsQ0FBQ2dDLGNBQTlELEVBQThFZixJQUE5RTtBQUNILE9BRkQsTUFFTztBQUNILGFBQUs2QyxPQUFMLENBQWEsQ0FBYixFQUFnQm5ELE1BQWhCLENBQXVCbkYsRUFBdkIsQ0FBMEIsS0FBS3FGLEVBQS9CLEVBQW1Da0IsSUFBbkMsQ0FBd0MvQixvSUFBcUIsQ0FBQ2dDLGNBQTlELEVBQThFZixJQUE5RTtBQUNIOztBQUVELFVBQUksS0FBS29ELFlBQVQsRUFBdUI7QUFDbkIsYUFBS0EsWUFBTCxHQUFvQixLQUFwQjtBQUNBLGFBQUsvQixFQUFMLENBQVE5RyxFQUFSLENBQVcsS0FBS3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUI3Ryw2SEFBb0IsQ0FBQzJKLGFBQTlDLEVBQTZELENBQUMsS0FBS2YsT0FBTCxDQUFhLENBQWIsRUFBZ0I3QyxJQUFqQixFQUF1QixLQUFLNkMsT0FBTCxDQUFhLENBQWIsRUFBZ0I3QyxJQUF2QyxDQUE3RDtBQUNIO0FBQ0o7QUF0TEw7QUFBQTtBQUFBLG9DQXdMa0M7QUFDMUIsV0FBSzZDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCZ0IsY0FBaEIsR0FBaUMsSUFBakM7QUFDQSxXQUFLOUIsYUFBTCxHQUFxQixLQUFLYyxPQUFMLENBQWEsQ0FBYixDQUFyQjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxDQUFiLEVBQWdCN0MsSUFBaEIsQ0FBcUJhLElBQXJCLEdBQTRCRyxxRUFBUSxDQUFDOEMsSUFBckM7QUFDQSxXQUFLakIsT0FBTCxDQUFhLENBQWIsRUFBZ0I3QyxJQUFoQixDQUFxQm1ELFlBQXJCLEdBQW9DLENBQXBDO0FBRUEsV0FBS04sT0FBTCxDQUFhLENBQWIsRUFBZ0I3QyxJQUFoQixDQUFxQmEsSUFBckIsR0FBNEJHLHFFQUFRLENBQUMrQyxLQUFyQztBQUNBLFdBQUtsQixPQUFMLENBQWEsQ0FBYixFQUFnQjdDLElBQWhCLENBQXFCbUQsWUFBckIsR0FBb0MsQ0FBcEM7QUFFQSxXQUFLOUIsRUFBTCxDQUFROUcsRUFBUixDQUFXLEtBQUtxRixFQUFoQixFQUFvQmtCLElBQXBCLENBQXlCL0Isb0lBQXFCLENBQUNpRixTQUEvQyxFQUEwRCxDQUFDLEtBQUtuQixPQUFMLENBQWEsQ0FBYixFQUFnQjdDLElBQWpCLEVBQXVCLEtBQUs2QyxPQUFMLENBQWEsQ0FBYixFQUFnQjdDLElBQXZDLEVBQTZDLEtBQUtpRSxRQUFsRCxDQUExRDtBQUNBQyxnQkFBVSxDQUFDLEtBQUtDLGNBQUwsQ0FBb0J6QyxJQUFwQixDQUF5QixJQUF6QixDQUFELEVBQWlDLElBQWpDLENBQVY7QUFDSDtBQW5NTDtBQUFBO0FBQUEscUNBcU1tQztBQUMzQixVQUFJLEtBQUttQixPQUFMLENBQWEsQ0FBYixFQUFnQmdCLGNBQXBCLEVBQW9DO0FBQ2hDLGFBQUtoQixPQUFMLENBQWEsQ0FBYixFQUFnQm5ELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQ3NKLFlBQWpELEVBQStEckosOEZBQVksQ0FBQ1UsT0FBNUU7QUFDQSxhQUFLaUksT0FBTCxDQUFhLENBQWIsRUFBZ0JuRCxNQUFoQixDQUF1Qm9CLElBQXZCLENBQTRCL0Isb0lBQXFCLENBQUMwRSxxQkFBbEQ7QUFDQSxhQUFLWixPQUFMLENBQWEsQ0FBYixFQUFnQm5ELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQ3NKLFlBQWpELEVBQStEckosOEZBQVksQ0FBQ08sZ0JBQTVFO0FBQ0gsT0FKRCxNQUlPO0FBQ0gsYUFBS29JLE9BQUwsQ0FBYSxDQUFiLEVBQWdCbkQsTUFBaEIsQ0FBdUJvQixJQUF2QixDQUE0QjdHLDZIQUFvQixDQUFDc0osWUFBakQsRUFBK0RySiw4RkFBWSxDQUFDVSxPQUE1RTtBQUNBLGFBQUtpSSxPQUFMLENBQWEsQ0FBYixFQUFnQm5ELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEIvQixvSUFBcUIsQ0FBQzBFLHFCQUFsRDtBQUNBLGFBQUtaLE9BQUwsQ0FBYSxDQUFiLEVBQWdCbkQsTUFBaEIsQ0FBdUJvQixJQUF2QixDQUE0QjdHLDZIQUFvQixDQUFDc0osWUFBakQsRUFBK0RySiw4RkFBWSxDQUFDTyxnQkFBNUU7QUFDSDs7QUFFRCxXQUFLK0csVUFBTCxDQUFnQmtDLEtBQWhCLENBQXNCLEtBQUtDLGFBQTNCLEVBWDJCLENBWTNCO0FBQ0g7QUFsTkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBR08sSUFBTVMsaUJBQWI7QUFBQTtBQUFBO0FBVUk7QUFFQSwrQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLDBDQVJvQixJQVFwQjs7QUFBQSwrQ0FQeUIsS0FPekI7O0FBQUE7O0FBQUEsbUNBTGtCLEVBS2xCOztBQUFBLHFDQUo0QixFQUk1Qjs7QUFDVixTQUFLQyxnQkFBTDtBQUNBLFNBQUtDLFlBQUw7QUFDQSxTQUFLQyxZQUFMLEdBSFUsQ0FJVjtBQUNIOztBQWpCTDtBQUFBO0FBQUEsdUNBbUIrQjtBQUFBOztBQUN2QixXQUFLQyxJQUFMLEdBQVksSUFBSUMsa0RBQUosQ0FBVyxNQUFYLEVBQW1CO0FBQUU7QUFDN0JDLGFBQUssRUFBRSxDQURvQjtBQUNqQjtBQUNWO0FBQ0FDLFlBQUksRUFBRSxJQUhxQixDQUdoQjs7QUFIZ0IsT0FBbkIsQ0FBWjtBQU1BLFVBQUlDLElBQUksR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBL0IsQ0FQdUIsQ0FRdkI7O0FBQ0EsV0FBS0MsVUFBTCxHQUFrQkMsaURBQUEsQ0FBa0IsVUFBQ0MsT0FBRCxFQUFVQyxRQUFWLEVBQXVCO0FBQ3ZERCxlQUFPLENBQUNFLFdBQVIsQ0FBb0IsS0FBcEIsRUFBMkIsWUFBTTtBQUM3QixlQUFJLENBQUNaLElBQUwsQ0FBVWEsS0FBVixDQUFnQkgsT0FBaEIsRUFBeUJDLFFBQXpCO0FBQ0gsU0FGRDtBQUdBRCxlQUFPLENBQUNJLE1BQVI7QUFDSCxPQUxpQixDQUFsQjtBQU9BLFdBQUtOLFVBQUwsQ0FBZ0I5QyxFQUFoQixDQUFtQixXQUFuQixFQUFnQyxZQUFZO0FBQ3hDeEcsZUFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDSCxPQUZEO0FBSUEsV0FBS3FKLFVBQUwsQ0FBZ0JPLE1BQWhCLENBQXVCWCxJQUF2QixFQUE2QixTQUE3QjtBQUNIO0FBeENMO0FBQUE7QUFBQSxtQ0EwQ2lDO0FBQUE7O0FBQ3pCLFdBQUtZLFlBQUwsR0FBb0IsSUFBSUMsdUNBQUosQ0FBUztBQUN6QkMsWUFBSSxFQUFFLGdCQURtQjtBQUV6QkMsWUFBSSxFQUFFLDJDQUZtQjtBQUd6QkMsZ0JBQVEsRUFBRSxnQkFIZTtBQUl6QkMsZ0JBQVEsRUFBRSxrRUFKZTtBQUt6QmpCLFlBQUksRUFBRSxJQUxtQjtBQU16QmtCLFdBQUcsRUFBRTtBQU5vQixPQUFULENBQXBCO0FBU0EsV0FBS04sWUFBTCxDQUFrQnRELEVBQWxCLENBQXFCLE9BQXJCLEVBQThCLFVBQUM2RCxHQUFELEVBQVM7QUFDbkNySyxlQUFPLENBQUNzSyxLQUFSLENBQWMsaUNBQWQsRUFBaURELEdBQWpEO0FBQ0FsQixlQUFPLENBQUNvQixJQUFSLENBQWEsQ0FBQyxDQUFkO0FBQ0gsT0FIRDtBQUtBLFdBQUtULFlBQUwsQ0FBa0JVLE9BQWxCLENBQTBCLFVBQUNILEdBQUQsRUFBUztBQUMvQixZQUFJQSxHQUFKLEVBQVM7QUFDTCxnQkFBTUEsR0FBTjtBQUNILFNBRkQsTUFFTztBQUNIckssaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsZ0JBQUksQ0FBQ3dLLGlCQUFMLEdBQXlCLElBQXpCO0FBQ0g7QUFDSixPQVBEO0FBUUg7QUFqRUw7QUFBQTtBQUFBLG1DQW1FMkI7QUFDbkIsV0FBS0MsUUFBTCxHQUFnQkMsZ0RBQVEsRUFBeEI7QUFDQSxXQUFLRCxRQUFMLENBQWNFLFdBQWQsQ0FBMEIsSUFBMUIsRUFGbUIsQ0FFYzs7QUFDakMsV0FBS0YsUUFBTCxDQUFjRyxNQUFkLENBQXFCLEtBQUt2QixVQUExQjtBQUVBLFdBQUt3QixrQkFBTDtBQUNIO0FBekVMO0FBQUE7QUFBQSx5Q0EyRXVDO0FBQUE7O0FBRS9CLFdBQUtKLFFBQUwsQ0FBY2xFLEVBQWQsQ0FBaUIsWUFBakIsRUFBK0IsVUFBQ3hDLE1BQUQsRUFBaUI7QUFDNUMsWUFBSXVDLE1BQTBCLEdBQUcsSUFBSWYsd0VBQUosRUFBakM7QUFDQWUsY0FBTSxDQUFDd0UsU0FBUCxDQUFpQi9HLE1BQWpCOztBQUNBLGNBQUksQ0FBQ21ELE9BQUwsQ0FBYW5HLElBQWIsQ0FBa0J1RixNQUFsQjs7QUFFQXZDLGNBQU0sQ0FBQ29CLElBQVAsQ0FBWS9CLG9JQUFxQixDQUFDMkgsYUFBbEMsRUFBaUR6RSxNQUFNLENBQUNqQyxJQUFQLENBQVlDLFFBQTdEO0FBRUF2RSxlQUFPLENBQUNDLEdBQVIsQ0FBWSx3Q0FBd0MsTUFBSSxDQUFDa0gsT0FBTCxDQUFhQyxNQUFqRSxFQVA0QyxDQVE1Qzs7QUFFQWIsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDNEgsbUJBQXZDLEVBQTRELFVBQUNDLFFBQUQsRUFBc0I7QUFDOUVsTCxpQkFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7O0FBQ0EsY0FBSSxNQUFJLENBQUN3SyxpQkFBVCxFQUE0QjtBQUN4QixrQkFBSSxDQUFDVSxjQUFMLENBQW9CNUUsTUFBcEIsRUFBNEIyRSxRQUE1QjtBQUNIO0FBQ0osU0FMRDtBQU9BM0UsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDK0gsb0JBQXZDLEVBQTZELFVBQUM5RyxJQUFELEVBQWU7QUFDeEV0RSxpQkFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVo7O0FBRUEsY0FBSSxNQUFJLENBQUN3SyxpQkFBVCxFQUE0QjtBQUN4QixrQkFBSSxDQUFDWSxZQUFMLENBQWtCOUUsTUFBbEIsRUFBMEJqQyxJQUExQjtBQUNIO0FBQ0osU0FORDtBQVFBaUMsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDb0MsZ0JBQXZDLEVBQXlELFVBQUNuQixJQUFELEVBQWU7QUFDcEV0RSxpQkFBTyxDQUFDQyxHQUFSLENBQVksdUJBQVo7QUFDQXNHLGdCQUFNLENBQUNkLGdCQUFQLENBQXdCbkIsSUFBeEIsRUFGb0UsQ0FHcEU7QUFDQTtBQUNBO0FBQ0gsU0FORDtBQVFBaUMsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQixZQUFqQixFQUErQixZQUFNO0FBRWpDO0FBQ0EsZ0JBQUksQ0FBQ1csT0FBTCxDQUFhM0YsT0FBYixDQUFxQixVQUFDK0UsTUFBRCxFQUE2QitFLEtBQTdCLEVBQStDO0FBQ2hFLGdCQUFJL0UsTUFBTSxDQUFDakMsSUFBUCxDQUFZQyxRQUFaLEtBQXlCUCxNQUFNLENBQUNFLEVBQXBDLEVBQXdDO0FBQ3BDLG9CQUFJLENBQUNpRCxPQUFMLENBQWFvRSxNQUFiLENBQW9CRCxLQUFwQixFQUEyQixDQUEzQjs7QUFFQS9FLG9CQUFNLENBQUNpRixXQUFQO0FBQ0g7QUFDSixXQU5EOztBQVFBeEwsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLG1DQUFtQyxNQUFJLENBQUNrSCxPQUFMLENBQWFDLE1BQTVELEVBWGlDLENBYWpDO0FBQ0E7QUFDSCxTQWZEO0FBZ0JILE9BakREO0FBbURBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBOztBQUNBLFVBQUlxRSwwQkFBMEIsR0FBRyxLQUFLZixRQUFMLENBQWNnQixFQUFkLENBQWlCdEksd0lBQXlCLENBQUNnQixNQUEzQyxDQUFqQztBQUNBcUgsZ0NBQTBCLENBQUNqRixFQUEzQixDQUE4QixZQUE5QixFQUE0QyxVQUFDeEMsTUFBRCxFQUFpQjtBQUN6RCxZQUFJRSxFQUFVLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVckMsUUFBVixHQUFxQnNDLE9BQXJCLENBQTZCZix3SUFBeUIsQ0FBQ2dCLE1BQXZELEVBQStELEVBQS9ELEVBQW1FRCxPQUFuRSxDQUEyRSxHQUEzRSxFQUFnRixFQUFoRixDQUFqQjs7QUFDQSxZQUFJb0MsTUFBMEIsR0FBRyxNQUFJLENBQUNvRixhQUFMLENBQW1CekgsRUFBbkIsRUFBdUJGLE1BQXZCLENBQWpDOztBQUNBdUMsY0FBTSxDQUFDcUYsbUJBQVAsR0FBNkIsSUFBN0I7QUFFQTVMLGVBQU8sQ0FBQ0MsR0FBUixDQUFZbUQsd0lBQXlCLENBQUNnQixNQUExQixHQUFtQyx5QkFBbkMsR0FBK0RtQyxNQUFNLENBQUNqQyxJQUFQLENBQVlDLFFBQXZGOztBQUVBLGNBQUksQ0FBQ3NILFVBQUwsQ0FBZ0J0RixNQUFoQjtBQUNBOzs7O0FBR0gsT0FYRDtBQWFBLFVBQUl1RixnQkFBZ0IsR0FBRyxLQUFLcEIsUUFBTCxDQUFjZ0IsRUFBZCxDQUFpQnRJLHdJQUF5QixDQUFDaUIsSUFBM0MsQ0FBdkI7QUFFQXlILHNCQUFnQixDQUFDdEYsRUFBakIsQ0FBb0IsWUFBcEIsRUFBa0MsVUFBQ3hDLE1BQUQsRUFBaUI7QUFFL0MsWUFBSUUsRUFBVSxHQUFHRixNQUFNLENBQUNFLEVBQVAsQ0FBVXJDLFFBQVYsR0FBcUJzQyxPQUFyQixDQUE2QmYsd0lBQXlCLENBQUNpQixJQUF2RCxFQUE2RCxFQUE3RCxFQUFpRUYsT0FBakUsQ0FBeUUsR0FBekUsRUFBOEUsRUFBOUUsQ0FBakI7O0FBQ0EsWUFBSW9DLE1BQTBCLEdBQUcsTUFBSSxDQUFDb0YsYUFBTCxDQUFtQnpILEVBQW5CLEVBQXVCRixNQUF2QixDQUFqQzs7QUFFQXVDLGNBQU0sQ0FBQ3ZDLE1BQVAsQ0FBY3dDLEVBQWQsQ0FBaUJuRCxvSUFBcUIsQ0FBQzBJLFFBQXZDLEVBQWlELFVBQUNDLE1BQUQsRUFBb0I7QUFDakV6RixnQkFBTSxDQUFDdkMsTUFBUCxDQUFjaUksSUFBZCxDQUFtQkQsTUFBbkI7O0FBRUEsY0FBSUUsVUFBc0IsR0FBRyxNQUFJLENBQUNDLFdBQUwsQ0FBaUJILE1BQWpCLEVBQXlCRixnQkFBekIsQ0FBN0I7O0FBQ0FJLG9CQUFVLENBQUNFLFlBQVgsQ0FBd0I3RixNQUF4QixFQUppRSxDQUtqRTs7QUFDQUEsZ0JBQU0sQ0FBQ3ZDLE1BQVAsQ0FBY29CLElBQWQsQ0FBbUIvQixvSUFBcUIsQ0FBQ2dKLFVBQXpDLEVBQXFETCxNQUFyRCxFQU5pRSxDQVFqRTs7QUFFQWhJLGdCQUFNLENBQUN3QyxFQUFQLENBQVUsWUFBVixFQUF3QixZQUFZO0FBRWhDeEcsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFrQytELE1BQU0sQ0FBQ0UsRUFBckQ7QUFFQUYsa0JBQU0sQ0FBQ25GLEVBQVAsQ0FBVW1OLE1BQVYsRUFBa0I1RyxJQUFsQixDQUF1Qi9CLG9JQUFxQixDQUFDaUosUUFBN0MsRUFBdUR0SSxNQUFNLENBQUNFLEVBQTlEO0FBQ0FGLGtCQUFNLENBQUN1SSxVQUFQO0FBQ0gsV0FORDtBQU9ILFNBakJEO0FBbUJBaEcsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDbUosY0FBdkMsRUFBdUQsVUFBQ0MsSUFBRCxFQUFZQyxXQUFaLEVBQWtEQyxXQUFsRCxFQUF1RTtBQUMxSCxjQUFJRCxXQUFXLElBQUlwSixzSUFBdUIsQ0FBQ3NKLEtBQTNDLEVBQ0k1TSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUVKK0QsZ0JBQU0sQ0FBQzZJLFNBQVAsQ0FBaUJoTyxFQUFqQixDQUFvQjROLElBQXBCLEVBQTBCckgsSUFBMUIsQ0FBK0IvQixvSUFBcUIsQ0FBQ21KLGNBQXJELEVBQXFFRSxXQUFyRSxFQUFrRkMsV0FBbEY7QUFFSCxTQU5EO0FBUUEzSSxjQUFNLENBQUN3QyxFQUFQLENBQVVuRCxvSUFBcUIsQ0FBQ3lKLGtCQUFoQyxFQUFvRCxZQUFNLENBRXpELENBRkQ7QUFHSCxPQW5DRDtBQW9DSDtBQWpNTDtBQUFBO0FBQUEsK0JBbU11QnZHLE1Bbk12QixFQW1NeUQ7QUFDakQsV0FBS1ksT0FBTCxDQUFhM0YsT0FBYixDQUFxQixVQUFDdUwsV0FBRCxFQUFxQztBQUN0RCxZQUFJeEcsTUFBTSxJQUFJd0csV0FBVixJQUF5QkEsV0FBVyxDQUFDbkIsbUJBQXpDLEVBQThEO0FBQzFENUwsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FzRyxnQkFBTSxDQUFDcUYsbUJBQVAsR0FBNkIsS0FBN0I7QUFDQW1CLHFCQUFXLENBQUNuQixtQkFBWixHQUFrQyxLQUFsQztBQUVBLGNBQUlJLE1BQWMsR0FBR3pGLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBWixHQUF1QixHQUF2QixHQUE2QndJLFdBQVcsQ0FBQ3pJLElBQVosQ0FBaUJDLFFBQW5FO0FBRUFnQyxnQkFBTSxDQUFDdkMsTUFBUCxDQUFjb0IsSUFBZCxDQUFtQi9CLG9JQUFxQixDQUFDMkosV0FBekMsRUFBc0RoQixNQUF0RDtBQUNBZSxxQkFBVyxDQUFDL0ksTUFBWixDQUFtQm9CLElBQW5CLENBQXdCL0Isb0lBQXFCLENBQUMySixXQUE5QyxFQUEyRGhCLE1BQTNEO0FBRUEsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FiRDtBQWNIO0FBbE5MO0FBQUE7QUFBQSxrQ0FvTjBCOUgsRUFwTjFCLEVBb05zQ0YsTUFwTnRDLEVBb051RTtBQUMvRCxVQUFJaUosVUFBOEIsR0FBRyxJQUFJekgsd0VBQUosRUFBckMsQ0FEK0QsQ0FFL0Q7O0FBQ0EsV0FBSzJCLE9BQUwsQ0FBYTNGLE9BQWIsQ0FBcUIsVUFBQytFLE1BQUQsRUFBZ0M7QUFDakQsWUFBSUEsTUFBTSxDQUFDakMsSUFBUCxDQUFZQyxRQUFaLEtBQXlCTCxFQUE3QixFQUFpQztBQUM3QjtBQUNBK0ksb0JBQVUsR0FBRzFHLE1BQWI7QUFDQTBHLG9CQUFVLENBQUNsQyxTQUFYLENBQXFCL0csTUFBckI7QUFDQSxpQkFBTyxJQUFQO0FBQ0g7QUFDSixPQVBEO0FBU0FpSixnQkFBVSxDQUFDakosTUFBWCxHQUFvQkEsTUFBcEI7QUFFQSxhQUFPaUosVUFBUDtBQUNIO0FBbk9MO0FBQUE7QUFBQSxnQ0FxT3dCakIsTUFyT3hCLEVBcU93Q3JHLEVBck94QyxFQXFPNkQ7QUFDckQ7QUFDQTNGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtDQUFrQytMLE1BQTlDO0FBQ0EsVUFBSWtCLFFBQUo7QUFFQSxXQUFLQyxLQUFMLENBQVczTCxPQUFYLENBQW1CLFVBQUNpTCxJQUFELEVBQXNCO0FBQ3JDLFlBQUlBLElBQUksQ0FBQ3ZJLEVBQUwsSUFBVzhILE1BQWYsRUFBdUI7QUFDbkJrQixrQkFBUSxHQUFHVCxJQUFYO0FBQ0EsaUJBQU8sSUFBUDtBQUNILFNBSm9DLENBS3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0gsT0FWRDs7QUFZQSxVQUFJLENBQUNTLFFBQUwsRUFBZTtBQUNYQSxnQkFBUSxHQUFHLElBQUl4SCx1REFBSixDQUFlc0csTUFBZixFQUF1QnJHLEVBQXZCLENBQVg7QUFDQSxhQUFLd0gsS0FBTCxDQUFXbk0sSUFBWCxDQUFnQmtNLFFBQWhCO0FBQ0g7O0FBRUQsYUFBT0EsUUFBUDtBQUNIO0FBNVBMO0FBQUE7QUFBQSxpQ0E4UHlCM0csTUE5UHpCLEVBOFBxRGpDLElBOVByRCxFQThQc0U7QUFBQTs7QUFDOUQsVUFBSThJLE9BQWUsR0FBRyw2QkFBNkI5SSxJQUFJLENBQUMsUUFBRCxDQUFqQyxHQUE4QyxJQUE5QyxHQUFxREEsSUFBSSxDQUFDLE9BQUQsQ0FBekQsR0FBcUUsbUJBQXJFLEdBQTJGQSxJQUFJLENBQUMsUUFBRCxDQUEvRixHQUE0RyxHQUFsSTs7QUFFQSxVQUFJQSxJQUFJLENBQUMsTUFBRCxDQUFKLElBQWdCLFdBQXBCLEVBQWlDO0FBQzdCLFlBQUlBLElBQUksQ0FBQyxPQUFELENBQUosSUFBaUJpQixzRUFBUyxDQUFDOEgsR0FBL0IsRUFBb0M7QUFDaEM7QUFDQUQsaUJBQU8sR0FBRyx3RkFBd0YsV0FBbEcsQ0FGZ0MsQ0FHaEM7QUFDSCxTQUpELE1BSU8sSUFBSTlJLElBQUksQ0FBQyxPQUFELENBQUosSUFBaUJpQixzRUFBUyxDQUFDK0gsSUFBL0IsRUFBcUM7QUFDeENGLGlCQUFPLEdBQUcsd0ZBQXdGLFdBQWxHO0FBQ0g7QUFDSjs7QUFFRHBOLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQWNtTixPQUExQixFQUFtQyxXQUFXOUksSUFBSSxDQUFDLE1BQUQsQ0FBbEQsRUFBNEQsWUFBWUEsSUFBSSxDQUFDLE9BQUQsQ0FBNUU7O0FBR0E7QUFBQTtBQUFBLDhCQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ3dCLE1BQUksQ0FBQ3dGLFlBQUwsQ0FBa0JVLE9BQWxCLEVBRHhCOztBQUFBO0FBQ1MrQyxzQkFEVDtBQUFBO0FBQUE7QUFBQSx1QkFJeUJBLE1BQU0sQ0FBQ0MsS0FBUCxDQUFhSixPQUFiLENBSnpCOztBQUFBO0FBSWFLLG1CQUpiOztBQUtPO0FBQ0Esc0JBQUksQ0FBQ3RDLGNBQUwsQ0FBb0I1RSxNQUFwQixFQUE0QmpDLElBQUksQ0FBQyxRQUFELENBQWhDOztBQU5QO0FBQUE7QUFTT2lKLHNCQUFNLENBQUNHLE9BQVA7QUFUUDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFELEtBV0tDLEtBWEwsQ0FXVyxVQUFBQyxDQUFDO0FBQUEsZUFBSTVOLE9BQU8sQ0FBQ0MsR0FBUixDQUFZMk4sQ0FBQyxDQUFDQyxLQUFkLENBQUo7QUFBQSxPQVhaO0FBYUg7QUEzUkw7QUFBQTtBQUFBLG1DQTZSMkJ0SCxNQTdSM0IsRUE2UnVEMkUsUUE3UnZELEVBNlI0RTtBQUFBOztBQUNwRWxMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUE4QmlMLFFBQTFDO0FBQ0EsVUFBTXNDLEtBQUssR0FBRztBQUNWO0FBQ0FNLFlBQUksRUFBRSxZQUZJO0FBR1ZDLFlBQUksRUFBRSwrQ0FISTtBQUlWQyxjQUFNLEVBQUUsQ0FBQzlDLFFBQUQ7QUFKRSxPQUFkO0FBT0EsV0FBS3BCLFlBQUwsQ0FBa0IwRCxLQUFsQixDQUF3QkEsS0FBeEIsRUFDS1MsSUFETCxDQUNVLFVBQUFSLEdBQUcsRUFBSTtBQUVULFlBQUlBLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLENBQVQsS0FBZUMsU0FBZixJQUE0QlYsR0FBRyxDQUFDUyxJQUFKLENBQVMsQ0FBVCxLQUFlLFdBQTNDLElBQTBEVCxHQUFHLENBQUNTLElBQUosQ0FBUyxDQUFULEtBQWUsSUFBN0UsRUFBbUY7QUFDL0UsZ0JBQUksQ0FBQ0UsYUFBTCxDQUFtQjdILE1BQU0sQ0FBQ3ZDLE1BQTFCLEVBQWtDa0gsUUFBbEM7QUFDSCxTQUZELE1BRU87QUFDSDNFLGdCQUFNLENBQUNkLGdCQUFQLENBQXdCZ0ksR0FBRyxDQUFDUyxJQUFKLENBQVMsQ0FBVCxDQUF4QjtBQUNILFNBTlEsQ0FPVDs7QUFDSCxPQVRMLEVBVUtQLEtBVkwsQ0FVVyxVQUFBQyxDQUFDLEVBQUk7QUFFUjVOLGVBQU8sQ0FBQ3NLLEtBQVIsQ0FBY3NELENBQUMsQ0FBQ0MsS0FBaEI7QUFDSCxPQWJMO0FBY0g7QUFwVEw7QUFBQTtBQUFBLGtDQXNUMEJ0SCxNQXRUMUIsRUFzVDBDMkUsUUF0VDFDLEVBc1QrRDtBQUFBOztBQUN2RGxMLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUF3QmlMLFFBQXBDO0FBQ0EsVUFBTW1ELGtCQUFrQixHQUNwQjtBQUNJUCxZQUFJLEVBQUUsaUJBRFY7QUFFSUMsWUFBSSxFQUFFLDhDQUZWO0FBR0lDLGNBQU0sRUFBRSxDQUFDOUMsUUFBRDtBQUhaLE9BREo7QUFPQSxXQUFLcEIsWUFBTCxDQUFrQjBELEtBQWxCLENBQXdCYSxrQkFBeEIsRUFDQTtBQURBLE9BRUtKLElBRkwsQ0FFVSxVQUFBUixHQUFHLEVBQUk7QUFDVDs7QUFFQSxjQUFJLENBQUN0QyxjQUFMLENBQW9CNUUsTUFBTSxDQUFDdkMsTUFBM0IsRUFBbUNrSCxRQUFuQztBQUNILE9BTkwsRUFPS3lDLEtBUEwsQ0FPVyxVQUFBQyxDQUFDLEVBQUk7QUFDUjVOLGVBQU8sQ0FBQ3NLLEtBQVIsQ0FBY3NELENBQUMsQ0FBQ0MsS0FBaEI7QUFDSCxPQVRMO0FBVUg7QUFHRDs7Ozs7OztBQTVVSjs7QUFBQTtBQUFBO0FBb1ZBLElBQUluRixpQkFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5V0EsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY2xhc3MgUG9ja2V5U29ja2V0TWVzc2FnZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBXQVRDSDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiV0FUQ0hcIjtcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgU0NPUkVfVVBEQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJTQ09SRV9VUERBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9QUE9ORU5UXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFlPVVJfVFVSTjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiWU9VUl9UVVJOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UX1NFVFRJTkdTOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9TRVRUSU5HU1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRU1BVENIOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9SRU1BVENIXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIERJU0NPTk5FQ1RfTVlfU09DS0VUOiBzdHJpbmcgPSBcIkNvbm5lY3Rpb25TaWduYWxzVHlwZS5cIiArICdESVNDT05ORUNUX01ZX1NPQ0tFVCc7XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRVNUQVJUOiBhbnk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBCQUxMX0lOX1RIRV9IQUxMOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJCQUxMX0lOX1RIRV9IQUxMXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNDT1JFX1VQREFURUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlNDT1JFX1VQREFURURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ0hFQ0tfTkVYVF9UVVJOOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJDSEVDS19ORVhUX1RVUk5cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ0hBTkdFX1NUQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJDSEFOR0VfU1RBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1dOX0JBTExfVE9VQ0hFRF9GSVJTVDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1dOX0JBTExfVE9VQ0hFRF9GSVJTVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1VORF9USU1FUl9VUERBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlJPVU5EX1RJTUVSX1VQREFURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1VORF9USU1FUl9DT01QTEVURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiUk9VTkRfVElNRVJfQ09NUExFVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQkFMTF9XQVNfU0hPVDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQkFMTF9XQVNfU0hPVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBBTExPQ0FURURfVElNRV9FTEFQU0VEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJBTExPQ0FURURfVElNRV9FTEFQU0VEXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Zpbml0ZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vdHlwZXN0YXRlXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb2NrZXlTdGF0ZXMge1xyXG4gICAgLyowKi9vbkxvYWQsXHJcbiAgICAvKjEqL29uTWFpbk1lbnUsXHJcbiAgICAvKjIqL29uU3RhcnQsXHJcbiAgICAvKjMqL29uUm91bmRFbmQsXHJcbiAgICAvKjQqL29uRGVmaW5lQ2xpZW50LFxyXG4gICAgLyo1Ki9vblNlYXJjaEZvclBhcnRuZXIsXHJcbiAgICAvKjYqL29uV2F0Y2gsXHJcbiAgICAvKjcqL29uUmVhcnJhbmdlU3RpY2ssXHJcbiAgICAvKjgqL29uUmVwb3NpdGlvbldoaXRlQmFsbCxcclxuICAgIC8qOSovb25TaG9vdCxcclxuICAgIC8qMTAqL29uRW5kVHVybixcclxuICAgIC8qMTEqL29uRW5kTWF0Y2gsXHJcbiAgICAvKjEyKi9vblByZXBhcmVSb3VuZE9uZSxcclxuICAgIC8qMTMqL29uUHJlcGFyZVJvdW5kVHdvLFxyXG4gICAgLyoxNCovb25QcmVwYXJlUm91bmRUaHJlZSxcclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gUG9ja2V5U3RhdGVzIHtcclxuLy8gICAgIFN0YXJ0R2FtZSxcclxuLy8gICAgIFBsYXllclR1cm4sXHJcbi8vICAgICBQbGF5ZXJUdXJuRmlyc3RCYWxsLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuRmlyc3RCYWxsLFxyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0IHRoZSBGU00gd2l0aCB0aGUgaW5pdGFsIHN0YXRlLCBpbiB0aGlzIGNhc2UgdGhlIGVsZXZhdG9yIHN0YXJ0cyB3aXRoIGl0cyBkb29ycyBvcGVuZWRcclxuICAgIHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2NrZXlTdGF0ZU1hY2hpbmU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U3RhdGU6IGFueTtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRTdGF0ZTphbnk7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlKCk6IFBvY2tleVN0YXRlTWFjaGluZSB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlID0gbmV3IFBvY2tleVN0YXRlTWFjaGluZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtID0gbmV3IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+KFBvY2tleVN0YXRlcy5vbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuSW5pdGlhbGl6ZVN0YXRlcygpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzOiBzdHJpbmcgPSBQb2NrZXlTdGF0ZXNbUG9ja2V5U3RhdGVzLm9uTG9hZF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIHMsIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkxvYWQpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25NYWluTWVudSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25TaG9vdCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGF5U3RhdGVDaGFuZ2luZyhkZWxheWVkU3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN0YXRlID0gUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmN1cnJlbnRTdGF0ZTtcclxuICAgICAgICB0aGlzLm5leHRTdGF0ZSA9IGRlbGF5ZWRTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlRGVsYXllZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmNoYW5nZVN0YXRlKHRoaXMubmV4dFN0YXRlKTtcclxuICAgICAgICB0aGlzLm5leHRTdGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1N0YXRlSW5RdWV1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV8uaXNVbmRlZmluZWQodGhpcy5uZXh0U3RhdGUpICYmIF8uaXNOdWxsKHRoaXMubmV4dFN0YXRlKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU3RhdGUoc3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghUG9ja2V5U3RhdGVzW3N0YXRlXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBzdGF0ZSBkb2VzIG5vdCBleGlzdDogXCIgKyBzdGF0ZSwgXCJjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZDojZmY5OTAwXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRlID09IFBvY2tleVN0YXRlcy5vblNob290KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzdGF0ZT09PT09PT1cIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHN0YXRlPT09PT09PVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uZ28oc3RhdGUpO1xyXG4gICAgICAgIHRoaXMucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mc20pIHtcclxuICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXMuZnNtLCAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09IHRoaXMuZnNtLmN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHMgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBQb2NrZXlTdGF0ZXNbc3RhdGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50RnNtQ3VycmVudFN0YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uY3VycmVudFN0YXRlID09IFBvY2tleVN0YXRlcy5vblNob290KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogYmxhY2s7IGNvbG9yOiB5ZWxsb3c7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IHllbGxvdzsgY29sb3I6ICNmNjU0NmE7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgfVxyXG59IiwiXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc2l0aW9uIGdyb3VwaW5nIHRvIGZhY2lsaWF0ZSBmbHVlbnQgYXBpXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZnNtOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4pIHsgfVxyXG5cclxuICAgICAgcHVibGljIGZyb21TdGF0ZXM6IFRbXTtcclxuICAgICAgcHVibGljIHRvU3RhdGVzOiBUW107XHJcblxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNwZWNpZnkgdGhlIGVuZCBzdGF0ZShzKSBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyB0byguLi5zdGF0ZXM6IFRbXSkge1xyXG4gICAgICAgICB0aGlzLnRvU3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgICB0aGlzLmZzbS5hZGRUcmFuc2l0aW9ucyh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICAvKipcclxuICAgICAgICogU3BlY2lmeSB0aGF0IGFueSBzdGF0ZSBpbiB0aGUgc3RhdGUgZW51bSBpcyB2YWx1ZVxyXG4gICAgICAgKiBUYWtlcyB0aGUgc3RhdGUgZW51bSBhcyBhbiBhcmd1bWVudFxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIHRvQW55KHN0YXRlczogYW55KSB7XHJcbiAgICAgICAgIHZhciB0b1N0YXRlczogVFtdID0gW107XHJcbiAgICAgICAgIGZvciAodmFyIHMgaW4gc3RhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkocykpIHtcclxuICAgICAgICAgICAgICAgdG9TdGF0ZXMucHVzaCgoPFQ+c3RhdGVzW3NdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy50b1N0YXRlcyA9IHRvU3RhdGVzO1xyXG4gICAgICAgICB0aGlzLmZzbS5hZGRUcmFuc2l0aW9ucyh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+IHtcclxuICAgICAgY29uc3RydWN0b3IocHVibGljIGZzbTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+LCBwdWJsaWMgZnJvbTogVCwgcHVibGljIHRvOiBUKSB7IH1cclxuICAgfVxyXG4gICBcclxuICAgLyoqXHJcbiAgICAqIEEgc2ltcGxlIGZpbml0ZSBzdGF0ZSBtYWNoaW5lIGltcGxlbWVudGVkIGluIFR5cGVTY3JpcHQsIHRoZSB0ZW1wbGF0ZWQgYXJndW1lbnQgaXMgbWVhbnQgdG8gYmUgdXNlZFxyXG4gICAgKiB3aXRoIGFuIGVudW1lcmF0aW9uLlxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgIHB1YmxpYyBjdXJyZW50U3RhdGU6IFQ7XHJcbiAgICAgIHByaXZhdGUgX3N0YXJ0U3RhdGU6IFQ7XHJcbiAgICAgIHByaXZhdGUgX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjogYm9vbGVhbjtcclxuICAgICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+W10gPSBbXTtcclxuICAgICAgcHJpdmF0ZSBfb25DYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAoZnJvbTogVCwgZXZlbnQ/OiBhbnkpOiB2b2lkOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9leGl0Q2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKHRvOiBUKTogYm9vbGVhbjsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfZW50ZXJDYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAoZnJvbTogVCwgZXZlbnQ/OiBhbnkpOiBib29sZWFuOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrOiAodG8/OiBULCBmcm9tPzogVCkgPT4gYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdHJ1Y3RvcihzdGFydFN0YXRlOiBULCBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXJ0U3RhdGU7XHJcbiAgICAgICAgIHRoaXMuX3N0YXJ0U3RhdGUgPSBzdGFydFN0YXRlO1xyXG4gICAgICAgICB0aGlzLl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gPSBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBhZGRUcmFuc2l0aW9ucyhmY246IFRyYW5zaXRpb25zPFQ+KSB7XHJcbiAgICAgICAgIGZjbi5mcm9tU3RhdGVzLmZvckVhY2goZnJvbSA9PiB7XHJcbiAgICAgICAgICAgIGZjbi50b1N0YXRlcy5mb3JFYWNoKHRvID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSB0cmFuc2l0aW9uIGlmIHRoZSBzdGF0ZSBtYWNoaW5lIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byB0cmFuc2l0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW5Hbyhmcm9tLCB0bykpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKG5ldyBUcmFuc2l0aW9uRnVuY3Rpb248VD4odGhpcywgZnJvbSwgdG8pKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2tcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbihzdGF0ZTogVCwgY2FsbGJhY2s6IChmcm9tPzogVCwgZXZlbnQ/OiBhbnkpID0+IGFueSk6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX29uQ2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrLCByZXR1cm5pbmdcclxuICAgICAgICogZmFsc2UgaW4gdGhlIGNhbGxiYWNrIHdpbGwgYmxvY2sgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZS5cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkVudGVyKHN0YXRlOiBULCBjYWxsYmFjazogKGZyb20/OiBULCBldmVudD86IGFueSkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrLCByZXR1cm5pbmdcclxuICAgICAgICogZmFsc2UgaW4gdGhlIGNhbGxiYWNrIHdpbGwgYmxvY2sgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGlzIHN0YXRlLlxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uRXhpdChzdGF0ZTogVCwgY2FsbGJhY2s6ICh0bz86IFQpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3QgZm9yIGFuIGludmFsaWQgdHJhbnNpdGlvbiBhbmQgaGFuZGxlIHRoZSBlcnJvciwgcmV0dXJuaW5nIGEgZmFsc3kgdmFsdWUgd2lsbCB0aHJvdyBhblxyXG4gICAgICAgKiBleGNlcHRpb24sIGEgdHJ1dGh5IG9uZSB3aWxsIHN3YWxsb3cgdGhlIGV4Y2VwdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uSW52YWxpZFRyYW5zaXRpb24oY2FsbGJhY2s6IChmcm9tPzogVCwgdG8/OiBUKSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgaWYoIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIERlY2xhcmVzIHRoZSBzdGFydCBzdGF0ZShzKSBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb24sIG11c3QgYmUgZm9sbG93ZWQgd2l0aCBhICcudG8oLi4uZW5kU3RhdGVzKSdcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBmcm9tKC4uLnN0YXRlczogVFtdKTogVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICAgICB2YXIgX3RyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbnM8VD4odGhpcyk7XHJcbiAgICAgICAgIF90cmFuc2l0aW9uLmZyb21TdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgIHJldHVybiBfdHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGZyb21Bbnkoc3RhdGVzOiBhbnkpOiBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgICAgIHZhciBmcm9tU3RhdGVzOiBUW10gPSBbXTtcclxuICAgICAgICAgZm9yICh2YXIgcyBpbiBzdGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcy5oYXNPd25Qcm9wZXJ0eShzKSkge1xyXG4gICAgICAgICAgICAgICBmcm9tU3RhdGVzLnB1c2goKDxUPnN0YXRlc1tzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHZhciBfdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uczxUPih0aGlzKTtcclxuICAgICAgICAgX3RyYW5zaXRpb24uZnJvbVN0YXRlcyA9IGZyb21TdGF0ZXM7XHJcbiAgICAgICAgIHJldHVybiBfdHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBfdmFsaWRUcmFuc2l0aW9uKGZyb206IFQsIHRvOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25zLnNvbWUodGYgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRmLmZyb20gPT09IGZyb20gJiYgdGYudG8gPT09IHRvKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVjayB3aGV0aGVyIGEgdHJhbnNpdGlvbiBiZXR3ZWVuIGFueSB0d28gc3RhdGVzIGlzIHZhbGlkLlxyXG4gICAgICAgKiAgICBJZiBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gaXMgdHJ1ZSwgYWx3YXlzIGFsbG93IHRyYW5zaXRpb25zIGZyb20gYSBzdGF0ZSBiYWNrIHRvIGl0c2VsZi5cclxuICAgICAgICogICAgIE90aGVyd2lzZSwgY2hlY2sgaWYgaXQncyBhIHZhbGlkIHRyYW5zaXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICBwcml2YXRlIF9jYW5Hbyhmcm9tU3RhdGU6IFQsIHRvU3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiAodGhpcy5fYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uICYmIGZyb21TdGF0ZSA9PT0gdG9TdGF0ZSkgfHwgdGhpcy5fdmFsaWRUcmFuc2l0aW9uKGZyb21TdGF0ZSwgdG9TdGF0ZSk7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgd2hldGhlciBhIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUgaXMgdmFsaWRcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBjYW5HbyhzdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkdvKHRoaXMuY3VycmVudFN0YXRlLCBzdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUcmFuc2l0aW9uIHRvIGFub3RoZXIgdmFsaWQgc3RhdGVcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBnbyhzdGF0ZTogVCwgZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgaWYgKCF0aGlzLmNhbkdvKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayB8fCAhdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayh0aGlzLmN1cnJlbnRTdGF0ZSwgc3RhdGUpKXtcclxuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBubyB0cmFuc2l0aW9uIGZ1bmN0aW9uIGV4aXN0cyBmcm9tIHN0YXRlICcgKyB0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpICsgJyB0byAnICsgc3RhdGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKHN0YXRlLCBldmVudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgIC8qKlxyXG4gICAgICAgKiBUaGlzIG1ldGhvZCBpcyBhdmFpbGJsZSBmb3Igb3ZlcnJpZGRpbmcgZm9yIHRoZSBzYWtlIG9mIGV4dGVuc2liaWxpdHkuIFxyXG4gICAgICAgKiBJdCBpcyBjYWxsZWQgaW4gdGhlIGV2ZW50IG9mIGEgc3VjY2Vzc2Z1bCB0cmFuc2l0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgIHB1YmxpYyBvblRyYW5zaXRpb24oZnJvbTogVCwgdG86IFQpIHtcclxuICAgICAgICAgLy8gcGFzcywgZG9lcyBub3RoaW5nIHVudGlsIG92ZXJpZGRlblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiBSZXNldCB0aGUgZmluaXRlIHN0YXRlIG1hY2hpbmUgYmFjayB0byB0aGUgc3RhcnQgc3RhdGUsIERPIE5PVCBVU0UgVEhJUyBBUyBBIFNIT1JUQ1VUIGZvciBhIHRyYW5zaXRpb24uIFxyXG4gICAgICAqIFRoaXMgaXMgZm9yIHN0YXJ0aW5nIHRoZSBmc20gZnJvbSB0aGUgYmVnaW5uaW5nLlxyXG4gICAgICAqL1xyXG4gICAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5fc3RhcnRTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IHN0YXRlIGVxdWFscyB0aGUgZ2l2ZW4gc3RhdGVcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBpcyhzdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID09PSBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBfdHJhbnNpdGlvblRvKHN0YXRlOiBULCBldmVudD86IGFueSkge1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAoIXRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmICghdGhpcy5fb25DYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIHZhciBjYW5FeGl0ID0gdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXS5yZWR1Y2U8Ym9vbGVhbj4oKGFjY3VtOiBib29sZWFuLCBuZXh0OiAodG86IFQpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtICYmICg8Ym9vbGVhbj5uZXh0LmNhbGwodGhpcywgc3RhdGUpKTtcclxuICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICB2YXIgY2FuRW50ZXIgPSB0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXS5yZWR1Y2U8Ym9vbGVhbj4oKGFjY3VtOiBib29sZWFuLCBuZXh0OiAoZnJvbTogVCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICByZXR1cm4gYWNjdW0gJiYgKDxib29sZWFuPm5leHQuY2FsbCh0aGlzLCB0aGlzLmN1cnJlbnRTdGF0ZSwgZXZlbnQpKTtcclxuICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICBpZiAoY2FuRXhpdCAmJiBjYW5FbnRlcikge1xyXG4gICAgICAgICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldLmZvckVhY2goZmNuID0+IHtcclxuICAgICAgICAgICAgICAgZmNuLmNhbGwodGhpcywgb2xkLCBldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbihvbGQsIHN0YXRlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcblxyXG4vLyBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3IgcGVvcGxlIHVzaW5nIHRoZSBwYXNjYWwgY2FzZWQgdmVyc2lvblxyXG4vLyB2YXIgVHlwZVN0YXRlID0gdHlwZXN0YXRlO1xyXG4iLCJleHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNFQVJDSDogc3RyaW5nID0gXCIvc2VhcmNoaW5nXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBMQVk6IHN0cmluZyA9IFwiL3BsYXlcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldEV2ZW50cyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdDb25uZWN0aW9uOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibmV3Q29ubmVjdGlvblwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBsZXRzQ29ubmVjdDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImxldHNDb25uZWN0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5Sb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiam9pblJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pbmVkUm9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImpvaW5lZFJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGVmdFJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJsZWZ0Um9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBwcml2YXRlTWVzc2FnZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInByaXZhdGVNZXNzYWdlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNpZ25lZEluVXNlckRhdGE6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJnZXRTaWduZWRJblVzZXJEYXRhXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFiYXNlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YWJhc2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzY29ubmVjdE15U29ja2V0OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZGlzY29ubmVjdE15U29ja2V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdhbWVTZXR1cDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImdhbWVTZXR1cFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByb29tQ3JlYXRlZDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInJvb21DcmVhdGVkXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFGcm9tU2VydmVyOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YUZyb21TZXJ2ZXJcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydFNlbmRpbmdTbmFwc2hvdHM6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJzdGFydFNlbmRpbmdTbmFwc2hvdHNcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgc25hcHNob3RVcGRhdGU6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJzbmFwc2hvdFVwZGF0ZVwiO1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBwYXJ0bmVyRm91bmRDaGFubmVsOiBzdHJpbmcgPSBcInBhcnRuZXJGb3VuZENoYW5uZWxcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgV0hPX1dBTlRTX1RPX1BMQVk6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIldIT19XQU5UU19UT19QTEFZXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIElfV0FOVF9UT19QTEFZOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJJX1dBTlRTX1RPX1BMQVlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSEVMTE86IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIkhFTExPXCI7XHJcblxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA1LzgvMjAxOVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvblVwZGF0ZUNhbGxiYWNrOiBGdW5jdGlvbiwgcHJpdmF0ZSBvbkNvbXBsZXRlQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IGk7XHJcbiAgICAgICAgLy9jYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzgvMjAxOVxyXG4gKi9cclxuaW1wb3J0IHtQb2NrZXlQbGF5ZXJEYXRhfSBmcm9tIFwiLi9wb2NrZXktcGxheWVyLWRhdGFcIjtcclxuaW1wb3J0IHtcclxuICAgIEZyYW1ld29ya1NvY2tldEV2ZW50cyxcclxuICAgIEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXNcclxufSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuXHJcbi8qXHJcbmltcG9ydCB7RnJhbWV3b3JrU29ja2V0RXZlbnRzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7UG9ja2V5U2V0dGluZ3N9IGZyb20gXCIuLi9jbGllbnQvcG9ja2V5LXNldHRpbmdzXCI7XHJcbmltcG9ydCB7U2lnbmFsc01hbmFnZXJ9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9TaWduYWxzL3NpZ25hbHMtbWFuYWdlclwiO1xyXG5pbXBvcnQge1BvY2tleVNpZ25hbFR5cGVzfSBmcm9tIFwiLi4vY2xpZW50L01vZHVsZXMvU2lnbmFsc01vZHVsZS9wb2NrZXktc2lnbmFsLXR5cGVzXCI7XHJcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9TZXR0aW5nc1wiO1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIHB1YmxpYyBkYXRhOiBQb2NrZXlQbGF5ZXJEYXRhID0ge307XHJcbiAgICBwdWJsaWMgc29ja2V0OiBhbnk7XHJcbiAgICBwdWJsaWMgaXNMb29raW5nRm9yUGFydG5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gcHVibGljIGlzQ2xpZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNGaXJzdFRvU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U29ja2V0KHNvY2tldDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBuZXdTb2NrZXRJRDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgIG5ld1NvY2tldElEID0gbmV3U29ja2V0SUQucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVksICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNvY2tldElEID0gbmV3U29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc29ja2V0SUQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHNvY2tldCBpbml0aWFsaXplZDogXCIgKyB0aGlzLmRhdGEuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YTogUG9ja2V5UGxheWVyRGF0YSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXZhdGFyID0gdXNlcm5hbWVEYXRhLmF2YXRhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9yID0gdXNlcm5hbWVEYXRhLmNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5kZWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZGVjYWwgPSB1c2VybmFtZURhdGEuZGVjYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmZlbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZlbHQgPSB1c2VybmFtZURhdGEuZmVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEucGxheWVyX2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wbGF5ZXJfbGV2ZWwgPSB1c2VybmFtZURhdGEucGxheWVyX2xldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5zdGljaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RpY2sgPSB1c2VybmFtZURhdGEuc3RpY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudG90YWxfcG9pbnRzID0gdXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudG90YWxfcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3RhbF9wb2ludHMgPSB1c2VybmFtZURhdGEudG90YWxfcG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5uaWNrbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubmlja25hbWUgPSB1c2VybmFtZURhdGEubmlja25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnVzZXJfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnVzZXJfaWQgPSB1c2VybmFtZURhdGEudXNlcl9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZmlyc3RfbG9naW5fZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlyc3RfbG9naW5fZGF0ZSA9IHVzZXJuYW1lRGF0YS5maXJzdF9sb2dpbl9kYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50eXBlID0gdXNlcm5hbWVEYXRhLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY2VpdmVTbmFwc2hvdFVwZGF0ZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNuYXBzaG90IHJlY2VpdmVkLy8vLy8vLy8vXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU25hcHNob3QgcmVjZWl2ZWQvLy8vLy8vLy8vXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZW5kR2FtZVNuYXBzaG90KGRhdGE6IGFueSk6IHZvaWQge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBzbmFwc2hvdCB0byBvdGhlciBwbGF5ZXJcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxmRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciByZW1vdmVkXCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQmFsbFR5cGUge1xyXG4gICAgTGVmdCA9ICdMZWZ0QmFsbCcsXHJcbiAgICBSaWdodCA9ICdSaWdodEJhbGwnLFxyXG4gICAgV2hpdGUgPSBcIldoaXRlQmFsbFwiLFxyXG4gICAgUHVjayA9IFwiUHVja1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdpblN0YXR1cyB7XHJcbiAgICBXSU4sXHJcbiAgICBMT1NUXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVEYXRhIHtcclxuICAgIHJvdW5kTnVtYmVyOiBudW1iZXIsXHJcbiAgICBiYWxsc051bWJlcjogbnVtYmVyXHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOS8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NvbW1vbi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVBsYXllclNlcnZlciBleHRlbmRzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIHNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YToge30pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmVyIHBsYXllciB1cGRhdGVkLiBzZW5kaW5nIHBsYXllciBkYXRhIHVwZGF0ZSB0byBjbGllbnRcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgdGhpcy5kYXRhKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7QmFsbFR5cGUsIEdhbWVEYXRhfSBmcm9tIFwiLi4vY29tbW9uL3BvY2tleS1nYW1lLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7UG9ja2V5U29ja2V0TWVzc2FnZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9Db25uZWN0aW9uTW9kdWxlL3BvY2tleS1jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtQb2NrZXlTdGF0ZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmVcIjtcclxuaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1V0aWxzL3RpbWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5Um9vbSB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBsYXllcnM6IFBsYXllcltdID0gW107XHJcbiAgICBwdWJsaWMgaW86IGFueTtcclxuICAgIHByaXZhdGUgZ2FtZURhdGE6IEdhbWVEYXRhID0ge3JvdW5kTnVtYmVyOiAxLCBiYWxsc051bWJlcjogN307XHJcbiAgICBwcml2YXRlIHNjb3JlVXBkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB3aGl0ZUJhbGxJblRoZUhhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb3duQmFsbEZhdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9wcG9uZW50QmFsbFNjb3JlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJvdW5kVGltZXI6IFRpbWVyO1xyXG4gICAgcHJpdmF0ZSByb3VuZER1cmF0aW9uOm51bWJlciA9IDIwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGlvOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5pbyA9IGlvO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVycy5wdXNoKHRoaXMucGxheWVyMSk7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5wbGF5ZXIyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb20gY3JlYXRlZFwiKTtcclxuICAgICAgICB0aGlzLnJvdW5kVGltZXIgPSBuZXcgVGltZXIodGhpcy5vblJvdW5kVGltZXJVcGRhdGUuYmluZCh0aGlzKSwgdGhpcy5vblJvdW5kVGltZXJDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRUaW1lclVwZGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuUk9VTkRfVElNRVJfVVBEQVRFLCB0aGlzLnJvdW5kVGltZXIuZ2V0Q3VycmVudFRpbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdW5kVGltZXJDb21wbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuUk9VTkRfVElNRVJfQ09NUExFVEUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5BTExPQ0FURURfVElNRV9FTEFQU0VEKTtcclxuICAgICAgICAvLyB0aGlzLnJvdW5kVGltZUVsYXBzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tOZXh0VHVybigpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9DT01QTEVURSwgdGhpcy5yb3VuZFRpbWVyLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ25QbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXlhOiBcIiArIHBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEdhbWVTbmFwc2hvdChwbGF5ZXIuZGF0YS5zb2NrZXRJRCwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuQkFMTF9JTl9USEVfSEFMTCwgKGJhbGxUeXBlOiBCYWxsVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKHBsYXllci5kYXRhLnNvY2tldElELCBiYWxsVHlwZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuT1dOX0JBTExfVE9VQ0hFRF9GSVJTVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uT3duQmFsbFRvdWNoZWRGaXJzdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIRUNLX05FWFRfVFVSTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTmV4dFR1cm4oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5CQUxMX1dBU19TSE9ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucm91bmRUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuUk9VTkRfVElNRVJfQ09NUExFVEUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9vbTogXCIgKyB0aGlzLmlkICsgXCIgLT4gcGxheWVyIGFzc2lnbmVkOiBcIiArIHBsYXllci5kYXRhLnNvY2tldElEICsgXCIgLT4gdG90YWwgcGxheWVyczogXCIgKyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJvb206IFwiICsgdGhpcy5pZCArIFwiIC0+ICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kR2FtZVNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Pd25CYWxsVG91Y2hlZEZpcnN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNjb3JlKHNvY2tldElEOiBzdHJpbmcsIGJhbGxUeXBlOiBCYWxsVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IFBsYXllcjtcclxuICAgICAgICBsZXQgb3Bwb25lbnQ6IFBsYXllcjtcclxuICAgICAgICAvLyBfLmZvckVhY2godGhpcy5wbGF5ZXJzLCAocGxheWE6IFBsYXllcikgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXRJRCA9PSB0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgICAgIG9wcG9uZW50ID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1sxXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsbFR5cGUgPT0gcGxheWVyLmRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXllci5kYXRhLmN1cnJlbnRTY29yZS0tO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiYWxsVHlwZSA9PSBvcHBvbmVudC5kYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PSBvcHBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wcG9uZW50LmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IEJhbGxUeXBlLldoaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG5cclxuICAgICAgICB9IGVsc2UgaWYgKG9wcG9uZW50LmRhdGEuY3VycmVudFNjb3JlIDw9IDApIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tOZXh0VHVybigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm93bkJhbGxGYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllcnNbMF0pID8gdGhpcy5wbGF5ZXJzWzFdIDogdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMub3Bwb25lbnRCYWxsU2NvcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy53aGl0ZUJhbGxJblRoZUhhbGwgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5ZXI6IFBsYXllcikgPT4ge1xyXG4gICAgLy8gICAgIGlmIChiYWxsU29ja2V0SUQgPT0gcGxheWVyLmRhdGEuc29ja2V0SUQpIHtcclxuICAgIC8vICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT0gcGxheWVyU29ja2V0SUQpIHtcclxuICAgIC8vICAgICAvL1xyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYgKHBsYXllci5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIHByaXZhdGUgc2VuZEdhbWVTbmFwc2hvdChzb2NrZXRJRDogc3RyaW5nLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNuYXBzaG90IHJlY2VpdmVkIG9uIHJvb206IFwiICsgdGhpcy5pZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVyc1swXS5kYXRhLnNvY2tldElEID09IHNvY2tldElEKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQudG8odGhpcy5pZCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQudG8odGhpcy5pZCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVVcGRhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5TQ09SRV9VUERBVEVELCBbdGhpcy5wbGF5ZXJzWzBdLmRhdGEsIHRoaXMucGxheWVyc1sxXS5kYXRhXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZEdhbWVTZXR1cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0uZGF0YS50eXBlID0gQmFsbFR5cGUuTGVmdDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS50eXBlID0gQmFsbFR5cGUuUmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLmRhdGEuY3VycmVudFNjb3JlID0gNztcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIFt0aGlzLnBsYXllcnNbMF0uZGF0YSwgdGhpcy5wbGF5ZXJzWzFdLmRhdGEsIHRoaXMuZ2FtZURhdGFdKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VuZFN0YXJ0Um91bmQuYmluZCh0aGlzKSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kU3RhcnRSb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzWzBdLmlzRmlyc3RUb1N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIC8vIHRoaXMucm91bmRUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gMi8yNy8yMDE5XHJcbiAqL1xyXG5pbXBvcnQgXCJAYmFiZWwvcG9seWZpbGxcIjtcclxuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gXCJub2RlLXN0YXRpY1wiO1xyXG5pbXBvcnQgKiBhcyBodHRwIGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCBzb2NrZXRJTyBmcm9tICdzb2NrZXQuaW8nO1xyXG5pbXBvcnQge1Bvb2x9IGZyb20gXCJwZ1wiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIEZyYW1ld29ya1NvY2tldEV2ZW50cywgRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMsXHJcbiAgICBGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzXHJcbn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcblxyXG5pbXBvcnQge1dpblN0YXR1c30gZnJvbSBcIi4uL2NvbW1vbi9wb2NrZXktZ2FtZS1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1BvY2tleVJvb219IGZyb20gXCIuL3BvY2tleS1yb29tXCI7XHJcbmltcG9ydCB7UG9ja2V5UGxheWVyU2VydmVyfSBmcm9tIFwiLi9wb2NrZXktcGxheWVyLXNlcnZlclwiO1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NvbW1vbi9wbGF5ZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2NrZXlTZXJ2ZXJJbmRleCB7XHJcbiAgICBwcm90ZWN0ZWQgZmlsZTogYW55O1xyXG4gICAgcHJvdGVjdGVkIGh0dHBTZXJ2ZXI6IGFueTtcclxuICAgIHByb3RlY3RlZCBzb2NrZXRJbzogYW55O1xyXG4gICAgcHJvdGVjdGVkIHNvY2tldElzRnJlZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2VDb25uZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb3RlY3RlZCBkYXRhYmFzZVBvb2w6IFBvb2wgfCB1bmRlZmluZWQ7XHJcbiAgICBwcm90ZWN0ZWQgcm9vbXM6IFBvY2tleVJvb21bXSA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIHBsYXllcnM6IFBvY2tleVBsYXllclNlcnZlcltdID0gW107XHJcblxyXG4gICAgLy8gcHJvdGVjdGVkIHBsYXlpbmdOYW1lc3BhY2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTZXJ2ZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVEYigpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU29ja2V0KCk7XHJcbiAgICAgICAgLy8gdGhpcy5jcmVhdGVHYW1lKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZVNlcnZlcigpIHtcclxuICAgICAgICB0aGlzLmZpbGUgPSBuZXcgU2VydmVyKCdkaXN0JywgeyAvLyBiaW4gaXMgdGhlIGZvbGRlciBjb250YWluaW5nIG91ciBodG1sLCBldGNcclxuICAgICAgICAgICAgY2FjaGU6IDAsXHQvLyBkb24ndCBjYWNoZVxyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIGd6aXA6IHRydWVcdC8vIGd6aXAgb3VyIGFzc2V0c1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcG9ydCA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MDtcclxuICAgICAgICAvLyBjcmVhdGUgb3VyIHNlcnZlclxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXF1ZXN0LmFkZExpc3RlbmVyKCdlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGUuc2VydmUocmVxdWVzdCwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVxdWVzdC5yZXN1bWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwU2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvaywgc2VydmVyIGlzIHJ1bm5pbmcnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwU2VydmVyLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdGlhbGl6ZURiKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sID0gbmV3IFBvb2woe1xyXG4gICAgICAgICAgICB1c2VyOiAnbnB2c3doZ2d4Z3NneGsnLFxyXG4gICAgICAgICAgICBob3N0OiAnZWMyLTU0LTIyNS05OC0xMzEuY29tcHV0ZS0xLmFtYXpvbmF3cy5jb20nLFxyXG4gICAgICAgICAgICBkYXRhYmFzZTogJ2QxdWsydm5wZGpsMjhxJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICc1NTZlNTAxM2VhMWRlYzU5ZDJkYWE1ZDdiZmYyMjNlYzAyOGMxNmRhNGFjNTc3ZGI5NGU3OGRiYzc1NDcxOTY1JyxcclxuICAgICAgICAgICAgcG9ydDogNTQzMixcclxuICAgICAgICAgICAgc3NsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLm9uKCdlcnJvcicsIChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignVW5leHBlY3RlZCBlcnJvciBvbiBpZGxlIGNsaWVudCcsIGVycik7XHJcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgtMSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLmNvbm5lY3QoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInMtYSBsb2dhdCwgbWVyZ2UuXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhYmFzZUNvbm5lY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZVNvY2tldCgpIHtcclxuICAgICAgICB0aGlzLnNvY2tldElvID0gc29ja2V0SU8oKTtcclxuICAgICAgICB0aGlzLnNvY2tldElvLnNlcnZlQ2xpZW50KHRydWUpOyAvLyB0aGUgc2VydmVyIHdpbGwgc2VydmUgdGhlIGNsaWVudCBqcyBmaWxlXHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5hdHRhY2godGhpcy5odHRwU2VydmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTb2NrZXRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZVNvY2tldEV2ZW50cygpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5vbignY29ubmVjdGlvbicsIChzb2NrZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSBuZXcgUG9ja2V5UGxheWVyU2VydmVyKCk7XHJcbiAgICAgICAgICAgIHBsYXllci5zZXRTb2NrZXQoc29ja2V0KTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5uZXdDb25uZWN0aW9uLCBwbGF5ZXIuZGF0YS5zb2NrZXRJRCk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGNvbm5lY3RlZC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIC8vdG9kbyBhaWNpIHRyZWJ1aWUgc2EgdGUgb2N1cGkgZGUgZGlzY29ubmVjdCBkYXIgc2kgcGUgY2VsYWxhbHRlIHNvY2tldHVyaVxyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMuZ2V0U2lnbmVkSW5Vc2VyRGF0YSwgKHVzZXJuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctPiBnZXQgc2lnbmVkIGluIHBsYXllcicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllciwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnVwZGF0ZVBsYXllckRhdGFiYXNlLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gdXBkYXRlIHBsYXllciBkYXRhYmFzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyRGIocGxheWVyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gdXBkYXRlIHBsYXllciBkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIudXBkYXRlUGxheWVyRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVVc2VyRGIocGxheWVyLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYSBpZXNpdCBkZSBwZSBjYW5hbHVsIHBhY2lpOiBcIiArIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IHNvY2tldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5zZWxmRGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgbGVmdC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gc29ja2V0LnRvKHJvb20pLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmxlZnRSb29tLCBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qdGhpcy5zb2NrZXRJby5vbignZGlzY29ubmVjdCcsIChzb2NrZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyOiBQbGF5ZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PT0gc29ja2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndXNlciBkaXNjb25uZWN0ZWQnKTtcclxuICAgICAgICAgICAgLy8gY29ubmVjdENvdW50ZXItLTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBsZWZ0LiB1c2VycyBjb25uZWN0ZWQ6ICcgKyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcclxuICAgICAgICB9KTsqL1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0SW8ub24oJ2Rpc2Nvbm5lY3QnLCAoc29ja2V0KSA9PiB7XHJcbiAgICAgICAgLy9zXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgbGV0IGxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlID0gdGhpcy5zb2NrZXRJby5vZihGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCk7XHJcbiAgICAgICAgbG9va2luZ0ZvclBhcnRuZXJOYW1lc3BhY2Uub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSBzb2NrZXQuaWQudG9TdHJpbmcoKS5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNILCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IHRoaXMuZ2V0UGxheWVyQnlJRChpZCwgc29ja2V0KTtcclxuICAgICAgICAgICAgcGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0ggKyAnIC0+IHNvbWVvbmUgY29ubmVjdGVkOiAnICsgcGxheWVyLmRhdGEuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRjaE1ha2VyKHBsYXllcik7XHJcbiAgICAgICAgICAgIC8qc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZXRzQ29ubmVjdCwgKG1zZzogYW55LCBpZDogc3RyaW5nLCBwYXJ0bmVySUQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgc29ja2V0LmJyb2FkY2FzdC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZXRzQ29ubmVjdCwgbXNnLCBpZCwgcGFydG5lcklEKTtcclxuICAgICAgICAgICAgfSk7Ki9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBsYXlpbmdOYW1lc3BhY2UgPSB0aGlzLnNvY2tldElvLm9mKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuUExBWSk7XHJcblxyXG4gICAgICAgIHBsYXlpbmdOYW1lc3BhY2Uub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVksICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gdGhpcy5nZXRQbGF5ZXJCeUlEKGlkLCBzb2NrZXQpO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pblJvb20sIChyb29tSUQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNvY2tldC5qb2luKHJvb21JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvY2tleVJvb206IFBvY2tleVJvb20gPSB0aGlzLmdldFJvb21CeUlEKHJvb21JRCwgcGxheWluZ05hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgICAgICBwb2NrZXlSb29tLmFzc2lnblBsYXllcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgLy8gc29ja2V0LmJyb2FkY2FzdC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5qb2luUm9vbSwgcm9vbSwgaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5qb2luZWRSb29tLCByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwib24gam9pbiByb29tLiByb29tIG5pY2tuYW1lOiBcIiArIHJvb21JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc29ja2V0Lm9uKCdkaXNjb25uZWN0JywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImEgaWVzaXQgZGUgcGUgY2FuYWx1bCBwYWNpaTogXCIgKyBzb2NrZXQuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQudG8ocm9vbUlEKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZWZ0Um9vbSwgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMucHJpdmF0ZU1lc3NhZ2UsIChyb29tOiBhbnksIG1lc3NhZ2VUeXBlOiBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcywgbWVzc2FnZURhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VUeXBlID09IEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLkhFTExPKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2UgZmFjZSBoZWxsb3VsXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QudG8ocm9vbSkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMucHJpdmF0ZU1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCBtZXNzYWdlRGF0YSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMuZGlzY29ubmVjdE15U29ja2V0LCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1hdGNoTWFrZXIocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgob3RoZXJQbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyICE9IG90aGVyUGxheWVyICYmIG90aGVyUGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwid2UgaGF2ZSBhIHJvb21cIik7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuaXNMb29raW5nRm9yUGFydG5lciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQbGF5ZXIuaXNMb29raW5nRm9yUGFydG5lciA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByb29tSUQ6IHN0cmluZyA9IHBsYXllci5kYXRhLnNvY2tldElEICsgXCIjXCIgKyBvdGhlclBsYXllci5kYXRhLnNvY2tldElEO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMucm9vbUNyZWF0ZWQsIHJvb21JRCk7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMucm9vbUNyZWF0ZWQsIHJvb21JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBsYXllckJ5SUQoaWQ6IHN0cmluZywgc29ja2V0OiBhbnkpOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIge1xyXG4gICAgICAgIGxldCBwbGF5ZXJCeUlEOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSBuZXcgUG9ja2V5UGxheWVyU2VydmVyKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXQgcGxheWVyIGJ5IGlkIC0+IHNlYXJjaGluZzogXCIgKyBpZCk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBmb3VuZDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJCeUlEID0gcGxheWVyO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQnlJRC5zZXRTb2NrZXQoc29ja2V0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllckJ5SUQuc29ja2V0ID0gc29ja2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gcGxheWVyQnlJRDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFJvb21CeUlEKHJvb21JRDogc3RyaW5nLCBpbzogYW55KTogUG9ja2V5Um9vbSB7XHJcbiAgICAgICAgLy8gbGV0IHBsYXllckJ5SUQ6IFBsYXllciA9IG5ldyBQbGF5ZXIoXCJcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJnZXQgcm9vbSBieSBpZCAtPiBzZWFyY2hpbmc6IFwiICsgcm9vbUlEKTtcclxuICAgICAgICBsZXQgcm9vbUJ5SUQ6IFBvY2tleVJvb207XHJcblxyXG4gICAgICAgIHRoaXMucm9vbXMuZm9yRWFjaCgocm9vbTogUG9ja2V5Um9vbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocm9vbS5pZCA9PSByb29tSUQpIHtcclxuICAgICAgICAgICAgICAgIHJvb21CeUlEID0gcm9vbTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBmb3VuZDogXCIgKyBpZCk7XHJcbiAgICAgICAgICAgIC8vICAgICBwbGF5ZXJCeUlEID0gcGxheWVyO1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyb29tQnlJRCkge1xyXG4gICAgICAgICAgICByb29tQnlJRCA9IG5ldyBQb2NrZXlSb29tKHJvb21JRCwgaW8pO1xyXG4gICAgICAgICAgICB0aGlzLnJvb21zLnB1c2gocm9vbUJ5SUQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvb21CeUlEO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlVXNlckRiKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCBkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3FsVGV4dDogc3RyaW5nID0gXCJVUERBVEUgcG9ja2V5X3RhYmxlIFNFVCBcIiArIGRhdGFbXCJjb2x1bW5cIl0gKyBcIj0nXCIgKyBkYXRhW1widmFsdWVcIl0gKyBcIicgV0hFUkUgdXNlcl9pZD0nXCIgKyBkYXRhW1widXNlcklEXCJdICsgXCInXCI7XHJcblxyXG4gICAgICAgIGlmIChkYXRhW1widHlwZVwiXSA9PSBcIndpblN0YXR1c1wiKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW1widmFsdWVcIl0gPT0gV2luU3RhdHVzLldJTikge1xyXG4gICAgICAgICAgICAgICAgLy8gc3FsVGV4dCA9IFwiVVBEQVRFIFVTRVJfVEFCTEUgU0VUIFwiICsgZGF0YVtcImNvbHVtblwiXSArIFwiPSdwb2ludHMnICsgMTAgV0hFUkUgR0lEPSdZb2ppbWJvJ1wiO1xyXG4gICAgICAgICAgICAgICAgc3FsVGV4dCA9ICdVUERBVEUgcHVibGljLlwiVVNFUl9UQUJMRVwiIFNFVCBcInBvaW50c1wiID0gXCJwb2ludHNcIiArIDEwIFdIRVJFIFwiVVNFUl9UQUJMRVwiLlwiR0lEXCIgPSAnICsgXCInWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3FsVGV4dCBsYSB3aW46IFwiICsgc3FsVGV4dCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVtcInZhbHVlXCJdID09IFdpblN0YXR1cy5MT1NUKSB7XHJcbiAgICAgICAgICAgICAgICBzcWxUZXh0ID0gJ1VQREFURSBwdWJsaWMuXCJVU0VSX1RBQkxFXCIgU0VUIFwicG9pbnRzXCIgPSBcInBvaW50c1wiICsgMTAgV0hFUkUgXCJVU0VSX1RBQkxFXCIuXCJHSURcIiA9ICcgKyBcIidZb2ppbWJvJ1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNxbFRleHQ6IFwiICsgc3FsVGV4dCwgXCJ0eXBlOiBcIiArIGRhdGFbXCJ0eXBlXCJdLCBcInZhbHVlOiBcIiArIGRhdGFbXCJ2YWx1ZVwiXSk7XHJcblxyXG5cclxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCB0aGlzLmRhdGFiYXNlUG9vbC5jb25uZWN0KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjbGllbnQucXVlcnkoc3FsVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFjdW0gc2UgZmFjZVwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JVc2VySUQocGxheWVyLCBkYXRhW1widXNlcklEXCJdKTtcclxuXHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnQucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkoKS5jYXRjaChlID0+IGNvbnNvbGUubG9nKGUuc3RhY2spKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0ZvclVzZXJJRChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgdXNlcm5hbWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgZGIgZm9yIHVzZXJfaWQ6IFwiICsgdXNlcm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgICAgICAgICAvLyBnaXZlIHRoZSBxdWVyeSBhIHVuaXF1ZSBuaWNrbmFtZVxyXG4gICAgICAgICAgICBuYW1lOiAnZmV0Y2gtdXNlcicsXHJcbiAgICAgICAgICAgIHRleHQ6ICdTRUxFQ1QgKiBGUk9NIHBvY2tleV90YWJsZSBXSEVSRSBVU0VSX0lEID0gJDEnLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IFt1c2VybmFtZV1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5xdWVyeShxdWVyeSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnJvd3NbMF0gPT0gdW5kZWZpbmVkIHx8IHJlcy5yb3dzWzBdID09IFwidW5kZWZpbmVkXCIgfHwgcmVzLnJvd3NbMF0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3VXNlcihwbGF5ZXIuc29ja2V0LCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVQbGF5ZXJEYXRhKHJlcy5yb3dzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5yb3dzWzBdKTsgLy8gWydCcmlhbicsICdDYXJsc29uJ11cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZU5ld1VzZXIocGxheWVyOiBQbGF5ZXIsIHVzZXJuYW1lOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0aW5nIG5ldyB1c2VyOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICBjb25zdCBjcmVhdGVOZXdVc2VyUXVlcnkgPVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnY3JlYXRlLW5ldy11c2VyJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdJTlNFUlQgSU5UTyBwb2NrZXlfdGFibGUodXNlcl9pZCkgVkFMVUVTKCQxKScsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFt1c2VybmFtZV1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wucXVlcnkoY3JlYXRlTmV3VXNlclF1ZXJ5KVxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKFwibmV3IHVzZXIgY3JlYXRlZC4gdXNlciBzYXZlZCBpbnRvIGRiXCIpO1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuc29ja2V0SW8uZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuZ2V0U2lnbmVkSW5Vc2VyRGF0YSwgcmVzLnJvd3NbMF0pOyovXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllci5zb2NrZXQsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YWNrKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogcHJpdmF0ZSBjcmVhdGVHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgICB0aGlzLmdhbWVFbmdpbmUgPSBuZXcgUG9ja2V5R2FtZUVuZ2luZUZvclNlcnZlcih7dHJhY2VMZXZlbDogVHJhY2UuVFJBQ0VfTk9ORX0pO1xyXG4gICAgICAgICB0aGlzLnNlcnZlckVuZ2luZSA9IG5ldyBQb2NrZXlTZXJ2ZXJFbmdpbmUodGhpcy5zb2NrZXRJbywgdGhpcy5nYW1lRW5naW5lLCB7ZGVidWc6IHt9LCB1cGRhdGVSYXRlOiA2fSk7XHJcbiAgICAgICAgIC8vIHN0YXJ0IHRoZSBnYW1lXHJcbiAgICAgICAgIC8vIHRoaXMuc2VydmVyRW5naW5lLnN0YXJ0KCk7XHJcbiAgICAgfSovXHJcbn1cclxuXHJcbm5ldyBQb2NrZXlTZXJ2ZXJJbmRleCgpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9wb2x5ZmlsbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJodHRwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub2RlLXN0YXRpY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7Il0sInNvdXJjZVJvb3QiOiIifQ==