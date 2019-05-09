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

    _defineProperty(this, "roundTimeElapsed", false);

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
      this.roundTimeElapsed = true; // this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);

      this.checkNextTurn(); // this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
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
        _this.roundTimeElapsed = false;

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
      } else if (this.roundTimeElapsed) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_2__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_3__["PockeyStates"].onRearrangeStick);
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

      this.roundTimer.start(20);
      this.roundTimeElapsed = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL1N0YXRlTWFjaGluZS90eXBlc3RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcUZyYW1ld29yay9VdGlscy90aW1lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BsYXllci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3BvY2tleS1nYW1lLXNldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXBsYXllci1zZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktcm9vbS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1zZXJ2ZXItaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJhYmVsL3BvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaHR0cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5vZGUtc3RhdGljXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NrZXQuaW9cIiJdLCJuYW1lcyI6WyJQb2NrZXlTb2NrZXRNZXNzYWdlcyIsIlBvY2tleVN0YXRlcyIsIlBvY2tleVN0YXRlTWFjaGluZSIsImZzbSIsImZyb20iLCJvbkxvYWQiLCJ0byIsIm9uTWFpbk1lbnUiLCJvblJlYXJyYW5nZVN0aWNrIiwib25TZWFyY2hGb3JQYXJ0bmVyIiwib25QcmVwYXJlUm91bmRPbmUiLCJvbldhdGNoIiwib25Sb3VuZEVuZCIsIm9uUHJlcGFyZVJvdW5kVHdvIiwib25QcmVwYXJlUm91bmRUaHJlZSIsIm9uUmVwb3NpdGlvbldoaXRlQmFsbCIsIm9uRW5kVHVybiIsIm9uRW5kTWF0Y2giLCJvblNob290IiwiZGVsYXllZFN0YXRlIiwibmV4dFN0YXRlIiwiSW5zdGFuY2UiLCJjaGFuZ2VTdGF0ZSIsIl8iLCJzdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJwcmludEZzbUN1cnJlbnRTdGF0ZSIsImdvIiwicyIsImN1cnJlbnRTdGF0ZSIsImdldEN1cnJlbnRTdGF0ZU5hbWUiLCJpbnN0YW5jZSIsImluaXRpYWxpemVkIiwiRmluaXRlU3RhdGVNYWNoaW5lIiwiSW5pdGlhbGl6ZVN0YXRlcyIsIlRyYW5zaXRpb25zIiwic3RhdGVzIiwidG9TdGF0ZXMiLCJhZGRUcmFuc2l0aW9ucyIsImhhc093blByb3BlcnR5IiwicHVzaCIsIlRyYW5zaXRpb25GdW5jdGlvbiIsInN0YXJ0U3RhdGUiLCJhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24iLCJfc3RhcnRTdGF0ZSIsIl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24iLCJmY24iLCJmcm9tU3RhdGVzIiwiZm9yRWFjaCIsIl9jYW5HbyIsIl90cmFuc2l0aW9uRnVuY3Rpb25zIiwiY2FsbGJhY2siLCJrZXkiLCJ0b1N0cmluZyIsIl9vbkNhbGxiYWNrcyIsIl9lbnRlckNhbGxiYWNrcyIsIl9leGl0Q2FsbGJhY2tzIiwiX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2siLCJfdHJhbnNpdGlvbiIsInNvbWUiLCJ0ZiIsImZyb21TdGF0ZSIsInRvU3RhdGUiLCJfdmFsaWRUcmFuc2l0aW9uIiwiZXZlbnQiLCJjYW5HbyIsIkVycm9yIiwiX3RyYW5zaXRpb25UbyIsImNhbkV4aXQiLCJyZWR1Y2UiLCJhY2N1bSIsIm5leHQiLCJjYWxsIiwiY2FuRW50ZXIiLCJvbGQiLCJvblRyYW5zaXRpb24iLCJGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzIiwiRnJhbWV3b3JrU29ja2V0RXZlbnRzIiwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMiLCJUaW1lciIsIm9uVXBkYXRlQ2FsbGJhY2siLCJvbkNvbXBsZXRlQ2FsbGJhY2siLCJpIiwiY3VycmVudFRpbWUiLCJ0aW1lciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIlBsYXllciIsInNvY2tldCIsIm5ld1NvY2tldElEIiwiaWQiLCJyZXBsYWNlIiwiU0VBUkNIIiwiUExBWSIsImRhdGEiLCJzb2NrZXRJRCIsInVzZXJuYW1lRGF0YSIsImF2YXRhciIsImNvbG9yIiwiZGVjYWwiLCJmZWx0IiwicGxheWVyX2xldmVsIiwic3RpY2siLCJ0b3RhbF9wb2ludHMiLCJuaWNrbmFtZSIsInVzZXJfaWQiLCJmaXJzdF9sb2dpbl9kYXRlIiwidHlwZSIsImVtaXQiLCJzbmFwc2hvdFVwZGF0ZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInJvdW5kTnVtYmVyIiwiYmFsbHNOdW1iZXIiLCJyb3VuZFRpbWVyIiwib25Sb3VuZFRpbWVyVXBkYXRlIiwiYmluZCIsIm9uUm91bmRUaW1lckNvbXBsZXRlIiwiUk9VTkRfVElNRVJfVVBEQVRFIiwiZ2V0Q3VycmVudFRpbWUiLCJST1VORF9USU1FUl9DT01QTEVURSIsInJvdW5kVGltZUVsYXBzZWQiLCJjaGVja05leHRUdXJuIiwicGxheWVyIiwib24iLCJzZW5kR2FtZVNuYXBzaG90IiwiQkFMTF9JTl9USEVfSEFMTCIsImJhbGxUeXBlIiwidXBkYXRlU2NvcmUiLCJPV05fQkFMTF9UT1VDSEVEX0ZJUlNUIiwib25Pd25CYWxsVG91Y2hlZEZpcnN0IiwiQ0hFQ0tfTkVYVF9UVVJOIiwiQkFMTF9XQVNfU0hPVCIsInN0b3AiLCJwbGF5ZXJzIiwibGVuZ3RoIiwic2VuZEdhbWVTZXR1cCIsIm93bkJhbGxGYXVsdCIsIm9wcG9uZW50IiwiY3VycmVudFBsYXllciIsIm9wcG9uZW50QmFsbFNjb3JlZCIsImN1cnJlbnRTY29yZSIsInNjb3JlVXBkYXRlZCIsIldoaXRlIiwid2hpdGVCYWxsSW5UaGVIYWxsIiwiQ0hBTkdFX1NUQVRFIiwiY2hhbmdlQ3VycmVudFBsYXllciIsInN0YXJ0U2VuZGluZ1NuYXBzaG90cyIsIlNDT1JFX1VQREFURUQiLCJpc0ZpcnN0VG9TdGFydCIsIkxlZnQiLCJSaWdodCIsImdhbWVTZXR1cCIsImdhbWVEYXRhIiwic2V0VGltZW91dCIsInNlbmRTdGFydFJvdW5kIiwic3RhcnQiLCJQb2NrZXlTZXJ2ZXJJbmRleCIsImluaXRpYWxpemVTZXJ2ZXIiLCJpbml0aWFsaXplRGIiLCJjcmVhdGVTb2NrZXQiLCJmaWxlIiwiU2VydmVyIiwiY2FjaGUiLCJnemlwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiaHR0cFNlcnZlciIsImh0dHAiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJhZGRMaXN0ZW5lciIsInNlcnZlIiwicmVzdW1lIiwibGlzdGVuIiwiZGF0YWJhc2VQb29sIiwiUG9vbCIsInVzZXIiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsInNzbCIsImVyciIsImVycm9yIiwiZXhpdCIsImNvbm5lY3QiLCJkYXRhYmFzZUNvbm5lY3RlZCIsInNvY2tldElvIiwic29ja2V0SU8iLCJzZXJ2ZUNsaWVudCIsImF0dGFjaCIsImhhbmRsZVNvY2tldEV2ZW50cyIsInNldFNvY2tldCIsIm5ld0Nvbm5lY3Rpb24iLCJnZXRTaWduZWRJblVzZXJEYXRhIiwidXNlcm5hbWUiLCJjaGVja0ZvclVzZXJJRCIsInVwZGF0ZVBsYXllckRhdGFiYXNlIiwidXBkYXRlVXNlckRiIiwiaW5kZXgiLCJzcGxpY2UiLCJzZWxmRGVzdHJveSIsImxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlIiwib2YiLCJnZXRQbGF5ZXJCeUlEIiwiaXNMb29raW5nRm9yUGFydG5lciIsIm1hdGNoTWFrZXIiLCJwbGF5aW5nTmFtZXNwYWNlIiwiam9pblJvb20iLCJyb29tSUQiLCJqb2luIiwicG9ja2V5Um9vbSIsImdldFJvb21CeUlEIiwiYXNzaWduUGxheWVyIiwiam9pbmVkUm9vbSIsImxlZnRSb29tIiwiZGlzY29ubmVjdCIsInByaXZhdGVNZXNzYWdlIiwicm9vbSIsIm1lc3NhZ2VUeXBlIiwibWVzc2FnZURhdGEiLCJIRUxMTyIsImJyb2FkY2FzdCIsImRpc2Nvbm5lY3RNeVNvY2tldCIsIm90aGVyUGxheWVyIiwicm9vbUNyZWF0ZWQiLCJwbGF5ZXJCeUlEIiwicm9vbUJ5SUQiLCJyb29tcyIsInNxbFRleHQiLCJXSU4iLCJMT1NUIiwiY2xpZW50IiwicXVlcnkiLCJyZXMiLCJyZWxlYXNlIiwiY2F0Y2giLCJlIiwic3RhY2siLCJuYW1lIiwidGV4dCIsInZhbHVlcyIsInRoZW4iLCJyb3dzIiwidW5kZWZpbmVkIiwiY3JlYXRlTmV3VXNlciIsImNyZWF0ZU5ld1VzZXJRdWVyeSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGTyxJQUFNQSxvQkFBYjtBQUFBO0FBQUE7O2dCQUFhQSxvQixXQUNxQiwwQkFBMEIsTzs7Z0JBRC9DQSxvQixjQUd3QiwwQkFBMEIsVTs7Z0JBSGxEQSxvQixlQUl5QiwwQkFBMEIsVzs7Z0JBSm5EQSxvQix1QkFLaUMsMEJBQTBCLG1COztnQkFMM0RBLG9CLHNCQU1nQywwQkFBMEIsa0I7O2dCQU4xREEsb0IsMEJBT29DLDJCQUEyQixzQjs7Z0JBUC9EQSxvQixzQkFXZ0MsMEJBQTBCLGtCOztnQkFYMURBLG9CLG1CQVk2QiwwQkFBMEIsZTs7Z0JBWnZEQSxvQixxQkFhK0IsMEJBQTBCLGlCOztnQkFiekRBLG9CLGtCQWM0QiwwQkFBMEIsYzs7Z0JBZHREQSxvQiw0QkFlc0MsMEJBQTBCLHdCOztnQkFmaEVBLG9CLHdCQWdCa0MsMEJBQTBCLG9COztnQkFoQjVEQSxvQiwwQkFpQm9DLDBCQUEwQixzQjs7Z0JBakI5REEsb0IsbUJBa0I2QiwwQkFBMEIsZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnBFO0FBQ0E7QUFFTyxJQUFLQyxZQUFaLEMsQ0FrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7V0F6QllBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7R0FBQUEsWSxLQUFBQSxZOztBQTRCTCxJQUFNQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBLHlDQU1tQyxLQU5uQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSx1Q0FpQytCO0FBQ3ZCLFdBQUtDLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNJLE1BQTNCLEVBQW1DQyxFQUFuQyxDQUFzQ0wsWUFBWSxDQUFDTSxVQUFuRDtBQUVBLFdBQUtKLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNNLFVBQTNCLEVBQXVDRCxFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDTyxnQkFBdkQ7QUFDQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTSxVQUEzQixFQUF1Q0QsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1Esa0JBQXZELEVBSnVCLENBTXZCOztBQUNBLFdBQUtOLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNRLGtCQUEzQixFQUErQ0gsRUFBL0MsQ0FBa0RMLFlBQVksQ0FBQ1MsaUJBQS9EO0FBQ0EsV0FBS1AsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1MsaUJBQTNCLEVBQThDSixFQUE5QyxDQUFpREwsWUFBWSxDQUFDVSxPQUE5RDtBQUNBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNTLGlCQUEzQixFQUE4Q0osRUFBOUMsQ0FBaURMLFlBQVksQ0FBQ08sZ0JBQTlEO0FBRUEsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csVUFBM0IsRUFBdUNOLEVBQXZDLENBQTBDTCxZQUFZLENBQUNZLGlCQUF2RDtBQUNBLFdBQUtWLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNZLGlCQUEzQixFQUE4Q1AsRUFBOUMsQ0FBaURMLFlBQVksQ0FBQ08sZ0JBQTlEO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1ksaUJBQTNCLEVBQThDUCxFQUE5QyxDQUFpREwsWUFBWSxDQUFDVSxPQUE5RDtBQUVBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNXLFVBQTNCLEVBQXVDTixFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDYSxtQkFBdkQ7QUFDQSxXQUFLWCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYSxtQkFBM0IsRUFBZ0RSLEVBQWhELENBQW1ETCxZQUFZLENBQUNPLGdCQUFoRTtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNhLG1CQUEzQixFQUFnRFIsRUFBaEQsQ0FBbURMLFlBQVksQ0FBQ2MscUJBQWhFO0FBQ0EsV0FBS1osR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2EsbUJBQTNCLEVBQWdEUixFQUFoRCxDQUFtREwsWUFBWSxDQUFDVSxPQUFoRSxFQWxCdUIsQ0FtQnZCO0FBRUE7QUFDQTs7QUFFQSxXQUFLUixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYyxxQkFBM0IsRUFBa0RULEVBQWxELENBQXFETCxZQUFZLENBQUNPLGdCQUFsRTtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLHFCQUEzQixFQUFrRFQsRUFBbEQsQ0FBcURMLFlBQVksQ0FBQ1UsT0FBbEU7QUFDQSxXQUFLUixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYyxxQkFBM0IsRUFBa0RULEVBQWxELENBQXFETCxZQUFZLENBQUNlLFNBQWxFO0FBRUEsV0FBS2IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2UsU0FBM0IsRUFBc0NWLEVBQXRDLENBQXlDTCxZQUFZLENBQUNPLGdCQUF0RDtBQUVBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDTyxnQkFBcEQ7QUFFQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVSxPQUEzQixFQUFvQ0wsRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ2dCLFVBQXBEO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDZ0IsVUFBN0Q7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYyxxQkFBM0IsRUFBa0RULEVBQWxELENBQXFETCxZQUFZLENBQUNnQixVQUFsRTtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNpQixPQUEzQixFQUFvQ1osRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ2dCLFVBQXBEO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1MsaUJBQTNCLEVBQThDSixFQUE5QyxDQUFpREwsWUFBWSxDQUFDZ0IsVUFBOUQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDWSxpQkFBM0IsRUFBOENQLEVBQTlDLENBQWlETCxZQUFZLENBQUNnQixVQUE5RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNhLG1CQUEzQixFQUFnRFIsRUFBaEQsQ0FBbURMLFlBQVksQ0FBQ2dCLFVBQWhFO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2UsU0FBM0IsRUFBc0NWLEVBQXRDLENBQXlDTCxZQUFZLENBQUNnQixVQUF0RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNXLFVBQTNCLEVBQXVDTixFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDZ0IsVUFBdkQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDUSxrQkFBM0IsRUFBK0NILEVBQS9DLENBQWtETCxZQUFZLENBQUNnQixVQUEvRDtBQUVBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNnQixVQUEzQixFQUF1Q1gsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ00sVUFBdkQ7QUFDQSxXQUFLSixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZ0IsVUFBM0IsRUFBdUNYLEVBQXZDLENBQTBDTCxZQUFZLENBQUNTLGlCQUF2RDtBQUNBLFdBQUtQLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNnQixVQUEzQixFQUF1Q1gsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1Esa0JBQXZEO0FBRUEsV0FBS04sR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDaUIsT0FBN0Q7QUFDQSxXQUFLZixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTyxnQkFBM0IsRUFBNkNGLEVBQTdDLENBQWdETCxZQUFZLENBQUNVLE9BQTdEO0FBQ0EsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDZSxTQUE3RDtBQUVBLFdBQUtiLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNpQixPQUEzQixFQUFvQ1osRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ2UsU0FBcEQ7QUFDQSxXQUFLYixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDaUIsT0FBM0IsRUFBb0NaLEVBQXBDLENBQXVDTCxZQUFZLENBQUNXLFVBQXBEO0FBRUEsV0FBS1QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2UsU0FBM0IsRUFBc0NWLEVBQXRDLENBQXlDTCxZQUFZLENBQUNjLHFCQUF0RDtBQUNBLFdBQUtaLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNlLFNBQTNCLEVBQXNDVixFQUF0QyxDQUF5Q0wsWUFBWSxDQUFDVSxPQUF0RDtBQUNBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNlLFNBQTNCLEVBQXNDVixFQUF0QyxDQUF5Q0wsWUFBWSxDQUFDVyxVQUF0RDtBQUVBLFdBQUtULEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDVyxVQUFwRDtBQUNBLFdBQUtULEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDYyxxQkFBcEQ7QUFFQSxXQUFLWixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVyxVQUEzQixFQUF1Q04sRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ08sZ0JBQXZEO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csVUFBM0IsRUFBdUNOLEVBQXZDLENBQTBDTCxZQUFZLENBQUNVLE9BQXZEO0FBRUg7QUFqR0w7QUFBQTtBQUFBLHVDQW1HOEJRLFlBbkc5QixFQW1HdUQ7QUFDL0M7QUFDQSxXQUFLQyxTQUFMLEdBQWlCRCxZQUFqQjtBQUNIO0FBdEdMO0FBQUE7QUFBQSx5Q0F3R3NDO0FBQzlCakIsd0JBQWtCLENBQUNtQixRQUFuQixHQUE4QkMsV0FBOUIsQ0FBMEMsS0FBS0YsU0FBL0M7QUFDQSxXQUFLQSxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7QUEzR0w7QUFBQTtBQUFBLHNDQTZHc0M7QUFDOUIsVUFBSSxDQUFDRyxrREFBQSxDQUFjLEtBQUtILFNBQW5CLENBQUQsSUFBa0NHLDZDQUFBLENBQVMsS0FBS0gsU0FBZCxDQUF0QyxFQUNJLE9BQU8sSUFBUDtBQUVKLGFBQU8sS0FBUDtBQUNIO0FBbEhMO0FBQUE7QUFBQSxnQ0FvSHVCSSxLQXBIdkIsRUFvSHlDO0FBQ2pDLFVBQUksQ0FBQ3ZCLFlBQVksQ0FBQ3VCLEtBQUQsQ0FBakIsRUFBMEI7QUFDdEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhDQUE4Q0YsS0FBMUQsRUFBaUUsb0NBQWpFO0FBRUg7O0FBQ0QsVUFBSUEsS0FBSyxJQUFJdkIsWUFBWSxDQUFDaUIsT0FBMUIsRUFBbUM7QUFDL0JPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0EsYUFBS0Msb0JBQUw7QUFDQUYsZUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNEeEIsd0JBQWtCLENBQUNtQixRQUFuQixHQUE4QmxCLEdBQTlCLENBQWtDeUIsRUFBbEMsQ0FBcUNKLEtBQXJDO0FBQ0EsV0FBS0csb0JBQUw7QUFDSDtBQWpJTDtBQUFBO0FBQUEsMENBbUl5QztBQUFBOztBQUNqQyxVQUFJRSxDQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBSSxLQUFLMUIsR0FBVCxFQUFjO0FBQ1ZvQixzREFBQSxDQUFVLEtBQUtwQixHQUFmLEVBQW9CLFVBQUNxQixLQUFELEVBQWdCO0FBQ2hDLGNBQUlBLEtBQUssSUFBSSxLQUFJLENBQUNyQixHQUFMLENBQVMyQixZQUF0QixFQUFvQztBQUNoQztBQUNBRCxhQUFDLEdBQUc1QixZQUFZLENBQUN1QixLQUFELENBQWhCO0FBQ0E7QUFDSDtBQUNKLFNBTkQ7QUFPSDs7QUFFRCxhQUFPSyxDQUFQO0FBQ0g7QUFqSkw7QUFBQTtBQUFBLDJDQW1KeUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBeUN4QixrQkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCVSxtQkFBOUIsRUFBckQsRUFBMEcsd0RBQTFHLEVBTmlDLENBUWpDO0FBQ0E7QUFDSDtBQTdKTDtBQUFBO0FBVUk7QUFWSiwrQkFZMEM7QUFDbEMsVUFBSSxDQUFDN0Isa0JBQWtCLENBQUM4QixRQUF4QixFQUFrQztBQUM5QjlCLDBCQUFrQixDQUFDOEIsUUFBbkIsR0FBOEIsSUFBSTlCLGtCQUFKLEVBQTlCOztBQUVBLFlBQUksQ0FBQ0Esa0JBQWtCLENBQUNtQixRQUFuQixHQUE4QlksV0FBbkMsRUFBZ0Q7QUFDNUMvQiw0QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCbEIsR0FBOUIsR0FBb0MsSUFBSStCLDZEQUFKLENBQXFDakMsWUFBWSxDQUFDSSxNQUFsRCxDQUFwQztBQUNBSCw0QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCYyxnQkFBOUI7QUFDQWpDLDRCQUFrQixDQUFDbUIsUUFBbkIsR0FBOEJZLFdBQTlCLEdBQTRDLElBQTVDO0FBRUEsY0FBSUosQ0FBUyxHQUFHNUIsWUFBWSxDQUFDQSxZQUFZLENBQUNJLE1BQWQsQ0FBNUI7QUFDQW9CLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBMENHLENBQXRELEVBQXlELHdEQUF6RCxFQU40QyxDQU81QztBQUNBO0FBRUE7QUFFSDtBQUNKOztBQUNELGFBQU8zQixrQkFBa0IsQ0FBQzhCLFFBQTFCO0FBQ0g7QUEvQkw7O0FBQUE7QUFBQTs7Z0JBQWE5QixrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJWOzs7QUFHTyxJQUFNa0MsV0FBYjtBQUFBO0FBQUE7QUFDRyx1QkFBbUJqQyxHQUFuQixFQUErQztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUc7O0FBRHJEO0FBQUE7O0FBT0c7OztBQVBILHlCQVU2QjtBQUFBLHdDQUFia0MsTUFBYTtBQUFiQSxjQUFhO0FBQUE7O0FBQ3ZCLFdBQUtDLFFBQUwsR0FBZ0JELE1BQWhCO0FBQ0EsV0FBS2xDLEdBQUwsQ0FBU29DLGNBQVQsQ0FBd0IsSUFBeEI7QUFDRjtBQUNEOzs7OztBQWRIO0FBQUE7QUFBQSwwQkFrQmdCRixNQWxCaEIsRUFrQjZCO0FBQ3ZCLFVBQUlDLFFBQWEsR0FBRyxFQUFwQjs7QUFDQSxXQUFLLElBQUlULENBQVQsSUFBY1EsTUFBZCxFQUFzQjtBQUNuQixZQUFJQSxNQUFNLENBQUNHLGNBQVAsQ0FBc0JYLENBQXRCLENBQUosRUFBOEI7QUFDM0JTLGtCQUFRLENBQUNHLElBQVQsQ0FBa0JKLE1BQU0sQ0FBQ1IsQ0FBRCxDQUF4QjtBQUNGO0FBQ0g7O0FBRUQsV0FBS1MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxXQUFLbkMsR0FBTCxDQUFTb0MsY0FBVCxDQUF3QixJQUF4QjtBQUNGO0FBNUJKOztBQUFBO0FBQUE7QUErQkE7Ozs7QUFHTyxJQUFNRyxrQkFBYixHQUNHLDRCQUFtQnZDLEdBQW5CLEVBQXNEQyxJQUF0RCxFQUFzRUUsRUFBdEUsRUFBNkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBRyxDQURuRjtBQUlBOzs7OztBQUlPLElBQU00QixrQkFBYjtBQUFBO0FBQUE7QUFVRyw4QkFBWVMsVUFBWixFQUF5RTtBQUFBLFFBQTlDQywyQkFBOEMsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrREFOakIsRUFNaUI7O0FBQUEsMENBTE0sRUFLTjs7QUFBQSw0Q0FKSixFQUlJOztBQUFBLDZDQUhZLEVBR1o7O0FBQUEsd0RBRkwsSUFFSzs7QUFDdEUsU0FBS2QsWUFBTCxHQUFvQmEsVUFBcEI7QUFDQSxTQUFLRSxXQUFMLEdBQW1CRixVQUFuQjtBQUNBLFNBQUtHLDRCQUFMLEdBQW9DRiwyQkFBcEM7QUFDRjs7QUFkSjtBQUFBO0FBQUEsbUNBZ0J5QkcsR0FoQnpCLEVBZ0I4QztBQUFBOztBQUN4Q0EsU0FBRyxDQUFDQyxVQUFKLENBQWVDLE9BQWYsQ0FBdUIsVUFBQTdDLElBQUksRUFBSTtBQUM1QjJDLFdBQUcsQ0FBQ1QsUUFBSixDQUFhVyxPQUFiLENBQXFCLFVBQUEzQyxFQUFFLEVBQUk7QUFDdkI7QUFDQSxjQUFJLENBQUMsS0FBSSxDQUFDNEMsTUFBTCxDQUFZOUMsSUFBWixFQUFrQkUsRUFBbEIsQ0FBTCxFQUE0QjtBQUMxQixpQkFBSSxDQUFDNkMsb0JBQUwsQ0FBMEJWLElBQTFCLENBQStCLElBQUlDLGtCQUFKLENBQTBCLEtBQTFCLEVBQWdDdEMsSUFBaEMsRUFBc0NFLEVBQXRDLENBQS9CO0FBQ0Y7QUFDSCxTQUxEO0FBTUYsT0FQRDtBQVFGO0FBRUQ7Ozs7QUEzQkg7QUFBQTtBQUFBLHVCQThCYWtCLEtBOUJiLEVBOEJ1QjRCLFFBOUJ2QixFQThCd0Y7QUFDbEYsVUFBSUMsR0FBRyxHQUFHN0IsS0FBSyxDQUFDOEIsUUFBTixFQUFWOztBQUNBLFVBQUksQ0FBQyxLQUFLQyxZQUFMLENBQWtCRixHQUFsQixDQUFMLEVBQTZCO0FBQzFCLGFBQUtFLFlBQUwsQ0FBa0JGLEdBQWxCLElBQXlCLEVBQXpCO0FBQ0Y7O0FBQ0QsV0FBS0UsWUFBTCxDQUFrQkYsR0FBbEIsRUFBdUJaLElBQXZCLENBQTRCVyxRQUE1Qjs7QUFDQSxhQUFPLElBQVA7QUFDRjtBQUVEOzs7OztBQXZDSDtBQUFBO0FBQUEsNEJBMkNrQjVCLEtBM0NsQixFQTJDNEI0QixRQTNDNUIsRUEyQ2lHO0FBQzNGLFVBQUlDLEdBQUcsR0FBRzdCLEtBQUssQ0FBQzhCLFFBQU4sRUFBVjs7QUFDQSxVQUFJLENBQUMsS0FBS0UsZUFBTCxDQUFxQkgsR0FBckIsQ0FBTCxFQUFnQztBQUM3QixhQUFLRyxlQUFMLENBQXFCSCxHQUFyQixJQUE0QixFQUE1QjtBQUNGOztBQUNELFdBQUtHLGVBQUwsQ0FBcUJILEdBQXJCLEVBQTBCWixJQUExQixDQUErQlcsUUFBL0I7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Y7QUFFRDs7Ozs7QUFwREg7QUFBQTtBQUFBLDJCQXdEaUI1QixLQXhEakIsRUF3RDJCNEIsUUF4RDNCLEVBd0RpRjtBQUMzRSxVQUFJQyxHQUFHLEdBQUc3QixLQUFLLENBQUM4QixRQUFOLEVBQVY7O0FBQ0EsVUFBSSxDQUFDLEtBQUtHLGNBQUwsQ0FBb0JKLEdBQXBCLENBQUwsRUFBK0I7QUFDNUIsYUFBS0ksY0FBTCxDQUFvQkosR0FBcEIsSUFBMkIsRUFBM0I7QUFDRjs7QUFDRCxXQUFLSSxjQUFMLENBQW9CSixHQUFwQixFQUF5QlosSUFBekIsQ0FBOEJXLFFBQTlCOztBQUNBLGFBQU8sSUFBUDtBQUNGO0FBRUQ7Ozs7O0FBakVIO0FBQUE7QUFBQSx3Q0FxRThCQSxRQXJFOUIsRUFxRThGO0FBQ3hGLFVBQUcsQ0FBQyxLQUFLTSwwQkFBVCxFQUFvQztBQUNqQyxhQUFLQSwwQkFBTCxHQUFrQ04sUUFBbEM7QUFDRjs7QUFDRCxhQUFPLElBQVA7QUFDRjtBQUVEOzs7O0FBNUVIO0FBQUE7QUFBQSwyQkErRStDO0FBQ3pDLFVBQUlPLFdBQVcsR0FBRyxJQUFJdkIsV0FBSixDQUFtQixJQUFuQixDQUFsQjs7QUFEeUMseUNBQTdCQyxNQUE2QjtBQUE3QkEsY0FBNkI7QUFBQTs7QUFFekNzQixpQkFBVyxDQUFDWCxVQUFaLEdBQXlCWCxNQUF6QjtBQUNBLGFBQU9zQixXQUFQO0FBQ0Y7QUFuRko7QUFBQTtBQUFBLDRCQXFGa0J0QixNQXJGbEIsRUFxRitDO0FBQ3pDLFVBQUlXLFVBQWUsR0FBRyxFQUF0Qjs7QUFDQSxXQUFLLElBQUluQixDQUFULElBQWNRLE1BQWQsRUFBc0I7QUFDbkIsWUFBSUEsTUFBTSxDQUFDRyxjQUFQLENBQXNCWCxDQUF0QixDQUFKLEVBQThCO0FBQzNCbUIsb0JBQVUsQ0FBQ1AsSUFBWCxDQUFvQkosTUFBTSxDQUFDUixDQUFELENBQTFCO0FBQ0Y7QUFDSDs7QUFFRCxVQUFJOEIsV0FBVyxHQUFHLElBQUl2QixXQUFKLENBQW1CLElBQW5CLENBQWxCOztBQUNBdUIsaUJBQVcsQ0FBQ1gsVUFBWixHQUF5QkEsVUFBekI7QUFDQSxhQUFPVyxXQUFQO0FBQ0Y7QUFoR0o7QUFBQTtBQUFBLHFDQWtHNEJ2RCxJQWxHNUIsRUFrR3FDRSxFQWxHckMsRUFrR3FEO0FBQy9DLGFBQU8sS0FBSzZDLG9CQUFMLENBQTBCUyxJQUExQixDQUErQixVQUFBQyxFQUFFLEVBQUk7QUFDekMsZUFBUUEsRUFBRSxDQUFDekQsSUFBSCxLQUFZQSxJQUFaLElBQW9CeUQsRUFBRSxDQUFDdkQsRUFBSCxLQUFVQSxFQUF0QztBQUNGLE9BRk0sQ0FBUDtBQUdGO0FBRUQ7Ozs7OztBQXhHSDtBQUFBO0FBQUEsMkJBNkdrQndELFNBN0dsQixFQTZHZ0NDLE9BN0doQyxFQTZHcUQ7QUFDOUMsYUFBUSxLQUFLakIsNEJBQUwsSUFBcUNnQixTQUFTLEtBQUtDLE9BQXBELElBQWdFLEtBQUtDLGdCQUFMLENBQXNCRixTQUF0QixFQUFpQ0MsT0FBakMsQ0FBdkU7QUFDSDtBQUVEOzs7O0FBakhIO0FBQUE7QUFBQSwwQkFvSGdCdkMsS0FwSGhCLEVBb0htQztBQUM1QixhQUFPLEtBQUswQixNQUFMLENBQVksS0FBS3BCLFlBQWpCLEVBQStCTixLQUEvQixDQUFQO0FBQ0g7QUFFRDs7OztBQXhISDtBQUFBO0FBQUEsdUJBMkhhQSxLQTNIYixFQTJIdUJ5QyxLQTNIdkIsRUEySDBDO0FBQ3BDLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVcxQyxLQUFYLENBQUwsRUFBd0I7QUFDckIsWUFBRyxDQUFDLEtBQUtrQywwQkFBTixJQUFvQyxDQUFDLEtBQUtBLDBCQUFMLENBQWdDLEtBQUs1QixZQUFyQyxFQUFtRE4sS0FBbkQsQ0FBeEMsRUFBa0c7QUFDL0YsZ0JBQU0sSUFBSTJDLEtBQUosQ0FBVSxvREFBb0QsS0FBS3JDLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwRCxHQUFtRixNQUFuRixHQUE0RjlCLEtBQUssQ0FBQzhCLFFBQU4sRUFBdEcsQ0FBTjtBQUNGO0FBQ0gsT0FKRCxNQUlPO0FBQ0osYUFBS2MsYUFBTCxDQUFtQjVDLEtBQW5CLEVBQTBCeUMsS0FBMUI7QUFDRjtBQUNIO0FBRUE7Ozs7QUFJQTs7QUF6SUo7QUFBQTtBQUFBLGlDQTBJd0I3RCxJQTFJeEIsRUEwSWlDRSxFQTFJakMsRUEwSXdDLENBRXBDLENBNUlKLENBMklNOztBQUdIOzs7OztBQTlJSDtBQUFBO0FBQUEsNEJBa0p3QjtBQUNsQixXQUFLd0IsWUFBTCxHQUFvQixLQUFLZSxXQUF6QjtBQUNGO0FBRUQ7Ozs7QUF0Skg7QUFBQTtBQUFBLHVCQXlKYXJCLEtBekpiLEVBeUpnQztBQUN6QixhQUFPLEtBQUtNLFlBQUwsS0FBc0JOLEtBQTdCO0FBQ0g7QUEzSko7QUFBQTtBQUFBLGtDQTZKeUJBLEtBN0p6QixFQTZKbUN5QyxLQTdKbkMsRUE2SmdEO0FBQUE7O0FBQzFDLFVBQUksQ0FBQyxLQUFLUixjQUFMLENBQW9CLEtBQUszQixZQUFMLENBQWtCd0IsUUFBbEIsRUFBcEIsQ0FBTCxFQUF3RDtBQUNyRCxhQUFLRyxjQUFMLENBQW9CLEtBQUszQixZQUFMLENBQWtCd0IsUUFBbEIsRUFBcEIsSUFBb0QsRUFBcEQ7QUFDRjs7QUFFRCxVQUFJLENBQUMsS0FBS0UsZUFBTCxDQUFxQmhDLEtBQUssQ0FBQzhCLFFBQU4sRUFBckIsQ0FBTCxFQUE2QztBQUMxQyxhQUFLRSxlQUFMLENBQXFCaEMsS0FBSyxDQUFDOEIsUUFBTixFQUFyQixJQUF5QyxFQUF6QztBQUNGOztBQUVELFVBQUksQ0FBQyxLQUFLQyxZQUFMLENBQWtCL0IsS0FBSyxDQUFDOEIsUUFBTixFQUFsQixDQUFMLEVBQTBDO0FBQ3ZDLGFBQUtDLFlBQUwsQ0FBa0IvQixLQUFLLENBQUM4QixRQUFOLEVBQWxCLElBQXNDLEVBQXRDO0FBQ0Y7O0FBR0QsVUFBSWUsT0FBTyxHQUFHLEtBQUtaLGNBQUwsQ0FBb0IsS0FBSzNCLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwQixFQUFrRGdCLE1BQWxELENBQWtFLFVBQUNDLEtBQUQsRUFBaUJDLElBQWpCLEVBQThDO0FBQzNILGVBQU9ELEtBQUssSUFBY0MsSUFBSSxDQUFDQyxJQUFMLENBQVUsTUFBVixFQUFnQmpELEtBQWhCLENBQTFCO0FBQ0YsT0FGYSxFQUVYLElBRlcsQ0FBZDs7QUFJQSxVQUFJa0QsUUFBUSxHQUFHLEtBQUtsQixlQUFMLENBQXFCaEMsS0FBSyxDQUFDOEIsUUFBTixFQUFyQixFQUF1Q2dCLE1BQXZDLENBQXVELFVBQUNDLEtBQUQsRUFBaUJDLElBQWpCLEVBQWdEO0FBQ25IO0FBQ0MsZUFBT0QsS0FBSyxJQUFjQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFWLEVBQWdCLE1BQUksQ0FBQzNDLFlBQXJCLEVBQW1DbUMsS0FBbkMsQ0FBMUI7QUFDSCxPQUhjLEVBR1osSUFIWSxDQUFmOztBQUtBLFVBQUlJLE9BQU8sSUFBSUssUUFBZixFQUF5QjtBQUN0QixZQUFJQyxHQUFHLEdBQUcsS0FBSzdDLFlBQWY7QUFDQSxhQUFLQSxZQUFMLEdBQW9CTixLQUFwQjs7QUFDQSxhQUFLK0IsWUFBTCxDQUFrQixLQUFLekIsWUFBTCxDQUFrQndCLFFBQWxCLEVBQWxCLEVBQWdETCxPQUFoRCxDQUF3RCxVQUFBRixHQUFHLEVBQUk7QUFDNURBLGFBQUcsQ0FBQzBCLElBQUosQ0FBUyxNQUFULEVBQWVFLEdBQWYsRUFBb0JWLEtBQXBCO0FBQ0YsU0FGRDs7QUFHQSxhQUFLVyxZQUFMLENBQWtCRCxHQUFsQixFQUF1Qm5ELEtBQXZCO0FBQ0Y7QUFDSDtBQTVMSjs7QUFBQTtBQUFBLEksQ0FnTUg7QUFDQSw2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT08sSUFBTXFELHlCQUFiO0FBQUE7QUFBQTs7Z0JBQWFBLHlCLFlBQ3NCLFk7O2dCQUR0QkEseUIsVUFFb0IsTzs7QUFHMUIsSUFBTUMscUJBQWI7QUFBQTtBQUFBOztnQkFBYUEscUIsbUJBRTZCLDJCQUEyQixlOztnQkFGeERBLHFCLGlCQUcyQiwyQkFBMkIsYTs7Z0JBSHREQSxxQixjQUl3QiwyQkFBMkIsVTs7Z0JBSm5EQSxxQixnQkFLMEIsMkJBQTJCLFk7O2dCQUxyREEscUIsY0FNd0IsMkJBQTJCLFU7O2dCQU5uREEscUIsb0JBTzhCLDJCQUEyQixnQjs7Z0JBUHpEQSxxQix5QkFRbUMsMkJBQTJCLHFCOztnQkFSOURBLHFCLDBCQVNvQywyQkFBMkIsc0I7O2dCQVQvREEscUIsd0JBVWtDLDJCQUEyQixvQjs7Z0JBVjdEQSxxQixlQVd5QiwyQkFBMkIsVzs7Z0JBWHBEQSxxQixpQkFZMkIsMkJBQTJCLGE7O2dCQVp0REEscUIsZ0NBYTBDLDJCQUEyQiw0Qjs7Z0JBYnJFQSxxQixnQ0FjMEMsMkJBQTJCLDRCOztnQkFkckVBLHFCLHNCQWVnQywyQkFBMkIsa0I7O2dCQWYzREEscUIsMkJBZ0JxQywyQkFBMkIsdUI7O2dCQWhCaEVBLHFCLG9CQWlCOEIsMkJBQTJCLGdCOztBQUkvRCxJQUFNQyx1QkFBYjtBQUFBO0FBQUE7O2dCQUFhQSx1Qix1QkFDaUMsNkJBQTZCLG1COztnQkFEOURBLHVCLG9CQUU4Qiw2QkFBNkIsaUI7O2dCQUYzREEsdUIsV0FHcUIsNkJBQTZCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qi9EOzs7Ozs7Ozs7O0FBV08sSUFBTUMsS0FBYjtBQUFBO0FBQUE7QUFJSSxpQkFBb0JDLGdCQUFwQixFQUF3REMsa0JBQXhELEVBQXNGO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUVyRjs7QUFOTDtBQUFBO0FBQUEsMEJBUWlCQyxDQVJqQixFQVE0QjtBQUFBOztBQUNwQixXQUFLQyxXQUFMLEdBQW1CRCxDQUFuQixDQURvQixDQUVwQjs7QUFDQSxXQUFLRSxLQUFMLEdBQWFDLFdBQVcsQ0FBQyxZQUFNO0FBQzNCLGFBQUksQ0FBQ0YsV0FBTDs7QUFDQSxZQUFJLEtBQUksQ0FBQ0EsV0FBTCxHQUFtQixDQUF2QixFQUEwQjtBQUN0QkcsdUJBQWEsQ0FBQyxLQUFJLENBQUNGLEtBQU4sQ0FBYjs7QUFDQSxlQUFJLENBQUNILGtCQUFMO0FBQ0gsU0FIRCxNQUdPO0FBQ0gsZUFBSSxDQUFDRCxnQkFBTDtBQUNIO0FBQ0osT0FSdUIsRUFRckIsSUFScUIsQ0FBeEI7QUFTSDtBQXBCTDtBQUFBO0FBQUEsMkJBc0JrQjtBQUNWTSxtQkFBYSxDQUFDLEtBQUtGLEtBQU4sQ0FBYjtBQUNIO0FBeEJMO0FBQUE7QUFBQSxxQ0EwQm9DO0FBQzVCLGFBQU8sS0FBS0QsV0FBWjtBQUNIO0FBNUJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTs7Ozs7Ozs7OztBQVdBO0FBS0E7Ozs7Ozs7OztBQVFPLElBQU1JLE1BQWI7QUFBQTtBQUFBO0FBSUk7QUFHQSxvQkFBYztBQUFBOztBQUFBLGtDQU5rQixFQU1sQjs7QUFBQTs7QUFBQSxpREFKd0IsS0FJeEI7O0FBQUEsNENBRm1CLEtBRW5CO0FBQ2I7O0FBUkw7QUFBQTtBQUFBLDhCQVVxQkMsTUFWckIsRUFVd0M7QUFFaEMsVUFBSUMsV0FBbUIsR0FBR0QsTUFBTSxDQUFDRSxFQUFQLENBQVVyQyxRQUFWLEdBQXFCc0MsT0FBckIsQ0FBNkJmLHdJQUF5QixDQUFDZ0IsTUFBdkQsRUFBK0QsRUFBL0QsRUFBbUVELE9BQW5FLENBQTJFLEdBQTNFLEVBQWdGLEVBQWhGLENBQTFCO0FBQ0FGLGlCQUFXLEdBQUdBLFdBQVcsQ0FBQ0UsT0FBWixDQUFvQmYsd0lBQXlCLENBQUNpQixJQUE5QyxFQUFvRCxFQUFwRCxFQUF3REYsT0FBeEQsQ0FBZ0UsR0FBaEUsRUFBcUUsRUFBckUsQ0FBZDtBQUVBLFdBQUtHLElBQUwsQ0FBVUMsUUFBVixHQUFxQk4sV0FBckI7QUFDQSxXQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFFQSxVQUFJLEtBQUtNLElBQUwsQ0FBVUMsUUFBZCxFQUNJdkUsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0NBQWdDLEtBQUtxRSxJQUFMLENBQVVDLFFBQXREO0FBQ1A7QUFwQkw7QUFBQTtBQUFBLHFDQXNCNEJDLFlBdEI1QixFQXNCa0U7QUFFMUQsVUFBSUEsWUFBWSxDQUFDQyxNQUFqQixFQUF5QjtBQUNyQixhQUFLSCxJQUFMLENBQVVHLE1BQVYsR0FBbUJELFlBQVksQ0FBQ0MsTUFBaEM7QUFDSDs7QUFFRCxVQUFJRCxZQUFZLENBQUNFLEtBQWpCLEVBQXdCO0FBQ3BCLGFBQUtKLElBQUwsQ0FBVUksS0FBVixHQUFrQkYsWUFBWSxDQUFDRSxLQUEvQjtBQUNIOztBQUVELFVBQUlGLFlBQVksQ0FBQ0csS0FBakIsRUFBd0I7QUFDcEIsYUFBS0wsSUFBTCxDQUFVSyxLQUFWLEdBQWtCSCxZQUFZLENBQUNHLEtBQS9CO0FBQ0g7O0FBRUQsVUFBSUgsWUFBWSxDQUFDSSxJQUFqQixFQUF1QjtBQUNuQixhQUFLTixJQUFMLENBQVVNLElBQVYsR0FBaUJKLFlBQVksQ0FBQ0ksSUFBOUI7QUFDSDs7QUFFRCxVQUFJSixZQUFZLENBQUNLLFlBQWpCLEVBQStCO0FBQzNCLGFBQUtQLElBQUwsQ0FBVU8sWUFBVixHQUF5QkwsWUFBWSxDQUFDSyxZQUF0QztBQUNIOztBQUVELFVBQUlMLFlBQVksQ0FBQ00sS0FBakIsRUFBd0I7QUFDcEIsYUFBS1IsSUFBTCxDQUFVUSxLQUFWLEdBQWtCTixZQUFZLENBQUNNLEtBQS9CO0FBQ0g7O0FBRUQsVUFBSU4sWUFBWSxDQUFDTyxZQUFqQixFQUErQjtBQUMzQixhQUFLVCxJQUFMLENBQVVTLFlBQVYsR0FBeUJQLFlBQVksQ0FBQ08sWUFBdEM7QUFDSDs7QUFFRCxVQUFJUCxZQUFZLENBQUNPLFlBQWpCLEVBQStCO0FBQzNCLGFBQUtULElBQUwsQ0FBVVMsWUFBVixHQUF5QlAsWUFBWSxDQUFDTyxZQUF0QztBQUNIOztBQUVELFVBQUlQLFlBQVksQ0FBQ1EsUUFBakIsRUFBMkI7QUFDdkIsYUFBS1YsSUFBTCxDQUFVVSxRQUFWLEdBQXFCUixZQUFZLENBQUNRLFFBQWxDO0FBQ0g7O0FBRUQsVUFBSVIsWUFBWSxDQUFDUyxPQUFqQixFQUEwQjtBQUN0QixhQUFLWCxJQUFMLENBQVVXLE9BQVYsR0FBb0JULFlBQVksQ0FBQ1MsT0FBakM7QUFDSDs7QUFFRCxVQUFJVCxZQUFZLENBQUNVLGdCQUFqQixFQUFtQztBQUMvQixhQUFLWixJQUFMLENBQVVZLGdCQUFWLEdBQTZCVixZQUFZLENBQUNVLGdCQUExQztBQUNIOztBQUVELFVBQUlWLFlBQVksQ0FBQ1csSUFBakIsRUFBdUI7QUFDbkIsYUFBS2IsSUFBTCxDQUFVYSxJQUFWLEdBQWlCWCxZQUFZLENBQUNXLElBQTlCO0FBQ0g7QUFDSjtBQXZFTDtBQUFBO0FBQUEsNENBeUVzQ2IsSUF6RXRDLEVBeUV1RDtBQUMvQ3RFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDRCQUFaO0FBQ0FELGFBQU8sQ0FBQ0MsR0FBUixDQUFZcUUsSUFBWjtBQUNBdEUsYUFBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDSDtBQTdFTDtBQUFBO0FBQUEscUNBK0UrQnFFLElBL0UvQixFQStFZ0Q7QUFDaEQ7QUFDUSxXQUFLTixNQUFMLENBQVlvQixJQUFaLENBQWlCL0Isb0lBQXFCLENBQUNnQyxjQUF2QyxFQUF1RGYsSUFBdkQ7QUFDSDtBQWxGTDtBQUFBO0FBQUEsa0NBb0YrQjtBQUN2QnRFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0g7QUF0Rkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQU8sSUFBS3FGLFFBQVo7O1dBQVlBLFE7QUFBQUEsVTtBQUFBQSxVO0FBQUFBLFU7QUFBQUEsVTtHQUFBQSxRLEtBQUFBLFE7O0FBT0wsSUFBS0MsU0FBWjs7V0FBWUEsUztBQUFBQSxXLENBQUFBLFM7QUFBQUEsVyxDQUFBQSxTO0dBQUFBLFMsS0FBQUEsUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQWjs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFTyxJQUFNQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxnQ0FBYztBQUFBOztBQUFBLDZGQUVWO0FBQ0E7QUFDSDs7QUFMTDtBQUFBO0FBQUEscUNBT3FCaEIsWUFQckIsRUFPNkM7QUFDckMsK0ZBQXVCQSxZQUF2Qjs7QUFFQXhFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDZEQUFaO0FBQ0EsV0FBSytELE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIvQixvSUFBcUIsQ0FBQ29DLGdCQUF2QyxFQUF5RCxLQUFLbkIsSUFBOUQ7QUFDSDtBQVpMOztBQUFBO0FBQUEsRUFBd0NQLHFEQUF4QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxJQUFNMkIsVUFBYjtBQUFBO0FBQUE7QUFhSSxzQkFBWXhCLEVBQVosRUFBd0J5QixFQUF4QixFQUFpQztBQUFBOztBQUFBLGdDQVpiLEVBWWE7O0FBQUEscUNBWEwsRUFXSzs7QUFBQTs7QUFBQSxzQ0FUSjtBQUFDQyxpQkFBVyxFQUFFLENBQWQ7QUFBaUJDLGlCQUFXLEVBQUU7QUFBOUIsS0FTSTs7QUFBQSwwQ0FSRCxLQVFDOztBQUFBLGdEQVBLLEtBT0w7O0FBQUEsMENBTkQsS0FNQzs7QUFBQSxnREFMSyxLQUtMOztBQUFBOztBQUFBOztBQUFBLDhDQUZHLEtBRUg7O0FBQzdCLFNBQUszQixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLeUIsRUFBTCxHQUFVQSxFQUFWLENBRjZCLENBRzdCO0FBQ0E7O0FBQ0EzRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsU0FBSzZGLFVBQUwsR0FBa0IsSUFBSXZDLG9FQUFKLENBQVUsS0FBS3dDLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUFWLEVBQThDLEtBQUtDLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE5QyxDQUFsQjtBQUNIOztBQXBCTDtBQUFBO0FBQUEseUNBc0J1QztBQUMvQixXQUFLTCxFQUFMLENBQVE5RyxFQUFSLENBQVcsS0FBS3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUI3Ryw2SEFBb0IsQ0FBQzJILGtCQUE5QyxFQUFrRSxLQUFLSixVQUFMLENBQWdCSyxjQUFoQixFQUFsRTtBQUNIO0FBeEJMO0FBQUE7QUFBQSwyQ0EwQnlDO0FBQ2pDLFdBQUtSLEVBQUwsQ0FBUTlHLEVBQVIsQ0FBVyxLQUFLcUYsRUFBaEIsRUFBb0JrQixJQUFwQixDQUF5QjdHLDZIQUFvQixDQUFDNkgsb0JBQTlDO0FBRUEsV0FBS0MsZ0JBQUwsR0FBd0IsSUFBeEIsQ0FIaUMsQ0FLakM7QUFDQTs7QUFDQSxXQUFLQyxhQUFMLEdBUGlDLENBU2pDO0FBRUE7QUFDSDtBQXRDTDtBQUFBO0FBQUEsaUNBd0N3QkMsTUF4Q3hCLEVBd0M4QztBQUFBOztBQUN0Q0EsWUFBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDZ0MsY0FBdkMsRUFBdUQsVUFBQ2YsSUFBRCxFQUFlO0FBQ2xFO0FBQ0EsYUFBSSxDQUFDbUMsZ0JBQUwsQ0FBc0JGLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBbEMsRUFBNENELElBQTVDO0FBQ0gsT0FIRDtBQUtBaUMsWUFBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQmpJLDZIQUFvQixDQUFDbUksZ0JBQXRDLEVBQXdELFVBQUNDLFFBQUQsRUFBd0I7QUFDNUUsYUFBSSxDQUFDQyxXQUFMLENBQWlCTCxNQUFNLENBQUNqQyxJQUFQLENBQVlDLFFBQTdCLEVBQXVDb0MsUUFBdkM7QUFDSCxPQUZEO0FBSUFKLFlBQU0sQ0FBQ3ZDLE1BQVAsQ0FBY3dDLEVBQWQsQ0FBaUJqSSw2SEFBb0IsQ0FBQ3NJLHNCQUF0QyxFQUE4RCxZQUFNO0FBQ2hFLGFBQUksQ0FBQ0MscUJBQUw7QUFDSCxPQUZEO0FBSUFQLFlBQU0sQ0FBQ3ZDLE1BQVAsQ0FBY3dDLEVBQWQsQ0FBaUJqSSw2SEFBb0IsQ0FBQ3dJLGVBQXRDLEVBQXVELFlBQU07QUFDekQsYUFBSSxDQUFDVCxhQUFMO0FBQ0gsT0FGRDtBQUlBQyxZQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCakksNkhBQW9CLENBQUN5SSxhQUF0QyxFQUFxRCxZQUFNO0FBQ3ZELGFBQUksQ0FBQ1gsZ0JBQUwsR0FBd0IsS0FBeEI7O0FBQ0EsYUFBSSxDQUFDUCxVQUFMLENBQWdCbUIsSUFBaEI7O0FBQ0EsYUFBSSxDQUFDdEIsRUFBTCxDQUFROUcsRUFBUixDQUFXLEtBQUksQ0FBQ3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUI3Ryw2SEFBb0IsQ0FBQzZILG9CQUE5QztBQUNILE9BSkQ7QUFNQSxXQUFLYyxPQUFMLENBQWFsRyxJQUFiLENBQWtCdUYsTUFBbEI7QUFDQXZHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVcsS0FBS2lFLEVBQWhCLEdBQXFCLHVCQUFyQixHQUErQ3FDLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBM0QsR0FBc0UscUJBQXRFLEdBQThGLEtBQUsyQyxPQUFMLENBQWFDLE1BQXZILEVBekJzQyxDQTBCdEM7O0FBRUEsVUFBSSxLQUFLRCxPQUFMLENBQWFDLE1BQWIsSUFBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsYUFBS0MsYUFBTDtBQUNIO0FBQ0o7QUF2RUw7QUFBQTtBQUFBLDRDQXlFMEM7QUFDbEMsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBM0VMO0FBQUE7QUFBQSxnQ0E2RXdCOUMsUUE3RXhCLEVBNkUwQ29DLFFBN0UxQyxFQTZFb0U7QUFDNUQsVUFBSUosTUFBSjtBQUNBLFVBQUllLFFBQUosQ0FGNEQsQ0FHNUQ7O0FBQ0EsVUFBSS9DLFFBQVEsSUFBSSxLQUFLMkMsT0FBTCxDQUFhLENBQWIsRUFBZ0I1QyxJQUFoQixDQUFxQkMsUUFBckMsRUFBK0M7QUFDM0NnQyxjQUFNLEdBQUcsS0FBS1csT0FBTCxDQUFhLENBQWIsQ0FBVDtBQUNBSSxnQkFBUSxHQUFHLEtBQUtKLE9BQUwsQ0FBYSxDQUFiLENBQVg7QUFDSCxPQUhELE1BR087QUFDSFgsY0FBTSxHQUFHLEtBQUtXLE9BQUwsQ0FBYSxDQUFiLENBQVQ7QUFDQUksZ0JBQVEsR0FBRyxLQUFLSixPQUFMLENBQWEsQ0FBYixDQUFYO0FBQ0gsT0FWMkQsQ0FXNUQ7OztBQUVBLFVBQUlQLFFBQVEsSUFBSUosTUFBTSxDQUFDakMsSUFBUCxDQUFZYSxJQUE1QixFQUFrQztBQUM5QixZQUFJLEtBQUtvQyxhQUFMLElBQXNCaEIsTUFBMUIsRUFBa0M7QUFDOUIsZUFBS2MsWUFBTCxHQUFvQixJQUFwQjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtHLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7O0FBQ0RqQixjQUFNLENBQUNqQyxJQUFQLENBQVltRCxZQUFaO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNILE9BUkQsTUFRTyxJQUFJZixRQUFRLElBQUlXLFFBQVEsQ0FBQ2hELElBQVQsQ0FBY2EsSUFBOUIsRUFBb0M7QUFDdkMsWUFBSSxLQUFLb0MsYUFBTCxJQUFzQkQsUUFBMUIsRUFBb0M7QUFDaEMsZUFBS0QsWUFBTCxHQUFvQixJQUFwQjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtHLGtCQUFMLEdBQTBCLElBQTFCO0FBQ0g7O0FBQ0RGLGdCQUFRLENBQUNoRCxJQUFULENBQWNtRCxZQUFkO0FBQ0EsYUFBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNILE9BUk0sTUFRQSxJQUFJZixRQUFRLElBQUlyQixxRUFBUSxDQUFDcUMsS0FBekIsRUFBZ0M7QUFDbkMsYUFBS0Msa0JBQUwsR0FBMEIsSUFBMUI7QUFDSDs7QUFFRCxVQUFJckIsTUFBTSxDQUFDakMsSUFBUCxDQUFZbUQsWUFBWixJQUE0QixDQUFoQyxFQUFtQyxDQUVsQyxDQUZELE1BRU8sSUFBSUgsUUFBUSxDQUFDaEQsSUFBVCxDQUFjbUQsWUFBZCxJQUE4QixDQUFsQyxFQUFxQyxDQUUzQztBQUNKO0FBbkhMO0FBQUE7QUFBQSxvQ0FxSGtDO0FBRTFCLFVBQUksS0FBS0csa0JBQVQsRUFBNkI7QUFDekI1SCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsYUFBS3NILGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUNzSixZQUFwRCxFQUFrRXJKLDhGQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBSzRJLG1CQUFMO0FBQ0EsYUFBS1AsYUFBTCxDQUFtQnZELE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQ3NKLFlBQXBELEVBQWtFckosOEZBQVksQ0FBQ2MscUJBQS9FO0FBQ0EsYUFBS2lJLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUMwRSxxQkFBckQsRUFMeUIsQ0FNekI7QUFDSCxPQVBELE1BT08sSUFBSSxLQUFLVixZQUFULEVBQXVCO0FBQzFCLGFBQUtFLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUNzSixZQUFwRCxFQUFrRXJKLDhGQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBSzRJLG1CQUFMO0FBQ0EsYUFBS1AsYUFBTCxDQUFtQnZELE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQ3NKLFlBQXBELEVBQWtFckosOEZBQVksQ0FBQ2MscUJBQS9FO0FBQ0EsYUFBS2lJLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUMwRSxxQkFBckQ7QUFDSCxPQUxNLE1BS0EsSUFBSSxDQUFDLEtBQUtQLGtCQUFWLEVBQThCO0FBQ2pDLGFBQUtELGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUNzSixZQUFwRCxFQUFrRXJKLDhGQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBSzRJLG1CQUFMO0FBQ0EsYUFBS1AsYUFBTCxDQUFtQnZELE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQ3NKLFlBQXBELEVBQWtFckosOEZBQVksQ0FBQ08sZ0JBQS9FO0FBQ0EsYUFBS3dJLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUMwRSxxQkFBckQ7QUFDSCxPQUxNLE1BS0EsSUFBSSxLQUFLMUIsZ0JBQVQsRUFBMkI7QUFDOUIsYUFBS2tCLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUNzSixZQUFwRCxFQUFrRXJKLDhGQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBSzRJLG1CQUFMO0FBQ0EsYUFBS1AsYUFBTCxDQUFtQnZELE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQ3NKLFlBQXBELEVBQWtFckosOEZBQVksQ0FBQ08sZ0JBQS9FO0FBQ0gsT0FKTSxNQUlBO0FBQ0gsYUFBS3dJLGFBQUwsQ0FBbUJ2RCxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUNzSixZQUFwRCxFQUFrRXJKLDhGQUFZLENBQUNPLGdCQUEvRTtBQUNBLGFBQUt3SSxhQUFMLENBQW1CdkQsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQi9CLG9JQUFxQixDQUFDMEUscUJBQXJEO0FBQ0g7QUFDSjtBQWhKTDtBQUFBO0FBQUEsMENBa0p3QztBQUNoQyxXQUFLUixhQUFMLEdBQXNCLEtBQUtBLGFBQUwsSUFBc0IsS0FBS0wsT0FBTCxDQUFhLENBQWIsQ0FBdkIsR0FBMEMsS0FBS0EsT0FBTCxDQUFhLENBQWIsQ0FBMUMsR0FBNEQsS0FBS0EsT0FBTCxDQUFhLENBQWIsQ0FBakY7QUFDQSxXQUFLTSxrQkFBTCxHQUEwQixLQUExQjtBQUNBLFdBQUtJLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0EsV0FBS1AsWUFBTCxHQUFvQixLQUFwQjtBQUNILEtBdkpMLENBeUpJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJLSjtBQUFBO0FBQUEscUNBdUs2QjlDLFFBdks3QixFQXVLK0NELElBdksvQyxFQXVLZ0U7QUFDeEQ7QUFDQSxVQUFJLEtBQUs0QyxPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQWhCLENBQXFCQyxRQUFyQixJQUFpQ0EsUUFBckMsRUFBK0M7QUFDM0MsYUFBSzJDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCbEQsTUFBaEIsQ0FBdUJuRixFQUF2QixDQUEwQixLQUFLcUYsRUFBL0IsRUFBbUNrQixJQUFuQyxDQUF3Qy9CLG9JQUFxQixDQUFDZ0MsY0FBOUQsRUFBOEVmLElBQTlFO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBSzRDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCbEQsTUFBaEIsQ0FBdUJuRixFQUF2QixDQUEwQixLQUFLcUYsRUFBL0IsRUFBbUNrQixJQUFuQyxDQUF3Qy9CLG9JQUFxQixDQUFDZ0MsY0FBOUQsRUFBOEVmLElBQTlFO0FBQ0g7O0FBRUQsVUFBSSxLQUFLb0QsWUFBVCxFQUF1QjtBQUNuQixhQUFLQSxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsYUFBSy9CLEVBQUwsQ0FBUTlHLEVBQVIsQ0FBVyxLQUFLcUYsRUFBaEIsRUFBb0JrQixJQUFwQixDQUF5QjdHLDZIQUFvQixDQUFDeUosYUFBOUMsRUFBNkQsQ0FBQyxLQUFLZCxPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQWpCLEVBQXVCLEtBQUs0QyxPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQXZDLENBQTdEO0FBQ0g7QUFDSjtBQW5MTDtBQUFBO0FBQUEsb0NBcUxrQztBQUMxQixXQUFLNEMsT0FBTCxDQUFhLENBQWIsRUFBZ0JlLGNBQWhCLEdBQWlDLElBQWpDO0FBQ0EsV0FBS1YsYUFBTCxHQUFxQixLQUFLTCxPQUFMLENBQWEsQ0FBYixDQUFyQjtBQUNBLFdBQUtBLE9BQUwsQ0FBYSxDQUFiLEVBQWdCNUMsSUFBaEIsQ0FBcUJhLElBQXJCLEdBQTRCRyxxRUFBUSxDQUFDNEMsSUFBckM7QUFDQSxXQUFLaEIsT0FBTCxDQUFhLENBQWIsRUFBZ0I1QyxJQUFoQixDQUFxQm1ELFlBQXJCLEdBQW9DLENBQXBDO0FBRUEsV0FBS1AsT0FBTCxDQUFhLENBQWIsRUFBZ0I1QyxJQUFoQixDQUFxQmEsSUFBckIsR0FBNEJHLHFFQUFRLENBQUM2QyxLQUFyQztBQUNBLFdBQUtqQixPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQWhCLENBQXFCbUQsWUFBckIsR0FBb0MsQ0FBcEM7QUFFQSxXQUFLOUIsRUFBTCxDQUFROUcsRUFBUixDQUFXLEtBQUtxRixFQUFoQixFQUFvQmtCLElBQXBCLENBQXlCL0Isb0lBQXFCLENBQUMrRSxTQUEvQyxFQUEwRCxDQUFDLEtBQUtsQixPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQWpCLEVBQXVCLEtBQUs0QyxPQUFMLENBQWEsQ0FBYixFQUFnQjVDLElBQXZDLEVBQTZDLEtBQUsrRCxRQUFsRCxDQUExRDtBQUNBQyxnQkFBVSxDQUFDLEtBQUtDLGNBQUwsQ0FBb0J2QyxJQUFwQixDQUF5QixJQUF6QixDQUFELEVBQWlDLElBQWpDLENBQVY7QUFDSDtBQWhNTDtBQUFBO0FBQUEscUNBa01tQztBQUMzQixVQUFJLEtBQUtrQixPQUFMLENBQWEsQ0FBYixFQUFnQmUsY0FBcEIsRUFBb0M7QUFDaEMsYUFBS2YsT0FBTCxDQUFhLENBQWIsRUFBZ0JsRCxNQUFoQixDQUF1Qm9CLElBQXZCLENBQTRCN0csNkhBQW9CLENBQUNzSixZQUFqRCxFQUErRHJKLDhGQUFZLENBQUNVLE9BQTVFO0FBQ0EsYUFBS2dJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCbEQsTUFBaEIsQ0FBdUJvQixJQUF2QixDQUE0Qi9CLG9JQUFxQixDQUFDMEUscUJBQWxEO0FBQ0EsYUFBS2IsT0FBTCxDQUFhLENBQWIsRUFBZ0JsRCxNQUFoQixDQUF1Qm9CLElBQXZCLENBQTRCN0csNkhBQW9CLENBQUNzSixZQUFqRCxFQUErRHJKLDhGQUFZLENBQUNPLGdCQUE1RTtBQUNILE9BSkQsTUFJTztBQUNILGFBQUttSSxPQUFMLENBQWEsQ0FBYixFQUFnQmxELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQ3NKLFlBQWpELEVBQStEckosOEZBQVksQ0FBQ1UsT0FBNUU7QUFDQSxhQUFLZ0ksT0FBTCxDQUFhLENBQWIsRUFBZ0JsRCxNQUFoQixDQUF1Qm9CLElBQXZCLENBQTRCL0Isb0lBQXFCLENBQUMwRSxxQkFBbEQ7QUFDQSxhQUFLYixPQUFMLENBQWEsQ0FBYixFQUFnQmxELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQ3NKLFlBQWpELEVBQStEckosOEZBQVksQ0FBQ08sZ0JBQTVFO0FBQ0g7O0FBRUQsV0FBSytHLFVBQUwsQ0FBZ0IwQyxLQUFoQixDQUFzQixFQUF0QjtBQUNBLFdBQUtuQyxnQkFBTCxHQUF3QixLQUF4QjtBQUNIO0FBL01MOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUdPLElBQU1vQyxpQkFBYjtBQUFBO0FBQUE7QUFVSTtBQUVBLCtCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsMENBUm9CLElBUXBCOztBQUFBLCtDQVB5QixLQU96Qjs7QUFBQTs7QUFBQSxtQ0FMa0IsRUFLbEI7O0FBQUEscUNBSjRCLEVBSTVCOztBQUNWLFNBQUtDLGdCQUFMO0FBQ0EsU0FBS0MsWUFBTDtBQUNBLFNBQUtDLFlBQUwsR0FIVSxDQUlWO0FBQ0g7O0FBakJMO0FBQUE7QUFBQSx1Q0FtQitCO0FBQUE7O0FBQ3ZCLFdBQUtDLElBQUwsR0FBWSxJQUFJQyxrREFBSixDQUFXLE1BQVgsRUFBbUI7QUFBRTtBQUM3QkMsYUFBSyxFQUFFLENBRG9CO0FBQ2pCO0FBQ1Y7QUFDQUMsWUFBSSxFQUFFLElBSHFCLENBR2hCOztBQUhnQixPQUFuQixDQUFaO0FBTUEsVUFBSUMsSUFBSSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWixJQUFvQixJQUEvQixDQVB1QixDQVF2Qjs7QUFDQSxXQUFLQyxVQUFMLEdBQWtCQyxpREFBQSxDQUFrQixVQUFDQyxPQUFELEVBQVVDLFFBQVYsRUFBdUI7QUFDdkRELGVBQU8sQ0FBQ0UsV0FBUixDQUFvQixLQUFwQixFQUEyQixZQUFNO0FBQzdCLGVBQUksQ0FBQ1osSUFBTCxDQUFVYSxLQUFWLENBQWdCSCxPQUFoQixFQUF5QkMsUUFBekI7QUFDSCxTQUZEO0FBR0FELGVBQU8sQ0FBQ0ksTUFBUjtBQUNILE9BTGlCLENBQWxCO0FBT0EsV0FBS04sVUFBTCxDQUFnQjdDLEVBQWhCLENBQW1CLFdBQW5CLEVBQWdDLFlBQVk7QUFDeEN4RyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNILE9BRkQ7QUFJQSxXQUFLb0osVUFBTCxDQUFnQk8sTUFBaEIsQ0FBdUJYLElBQXZCLEVBQTZCLFNBQTdCO0FBQ0g7QUF4Q0w7QUFBQTtBQUFBLG1DQTBDaUM7QUFBQTs7QUFDekIsV0FBS1ksWUFBTCxHQUFvQixJQUFJQyx1Q0FBSixDQUFTO0FBQ3pCQyxZQUFJLEVBQUUsZ0JBRG1CO0FBRXpCQyxZQUFJLEVBQUUsMkNBRm1CO0FBR3pCQyxnQkFBUSxFQUFFLGdCQUhlO0FBSXpCQyxnQkFBUSxFQUFFLGtFQUplO0FBS3pCakIsWUFBSSxFQUFFLElBTG1CO0FBTXpCa0IsV0FBRyxFQUFFO0FBTm9CLE9BQVQsQ0FBcEI7QUFTQSxXQUFLTixZQUFMLENBQWtCckQsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsVUFBQzRELEdBQUQsRUFBUztBQUNuQ3BLLGVBQU8sQ0FBQ3FLLEtBQVIsQ0FBYyxpQ0FBZCxFQUFpREQsR0FBakQ7QUFDQWxCLGVBQU8sQ0FBQ29CLElBQVIsQ0FBYSxDQUFDLENBQWQ7QUFDSCxPQUhEO0FBS0EsV0FBS1QsWUFBTCxDQUFrQlUsT0FBbEIsQ0FBMEIsVUFBQ0gsR0FBRCxFQUFTO0FBQy9CLFlBQUlBLEdBQUosRUFBUztBQUNMLGdCQUFNQSxHQUFOO0FBQ0gsU0FGRCxNQUVPO0FBQ0hwSyxpQkFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxnQkFBSSxDQUFDdUssaUJBQUwsR0FBeUIsSUFBekI7QUFDSDtBQUNKLE9BUEQ7QUFRSDtBQWpFTDtBQUFBO0FBQUEsbUNBbUUyQjtBQUNuQixXQUFLQyxRQUFMLEdBQWdCQyxnREFBUSxFQUF4QjtBQUNBLFdBQUtELFFBQUwsQ0FBY0UsV0FBZCxDQUEwQixJQUExQixFQUZtQixDQUVjOztBQUNqQyxXQUFLRixRQUFMLENBQWNHLE1BQWQsQ0FBcUIsS0FBS3ZCLFVBQTFCO0FBRUEsV0FBS3dCLGtCQUFMO0FBQ0g7QUF6RUw7QUFBQTtBQUFBLHlDQTJFdUM7QUFBQTs7QUFFL0IsV0FBS0osUUFBTCxDQUFjakUsRUFBZCxDQUFpQixZQUFqQixFQUErQixVQUFDeEMsTUFBRCxFQUFpQjtBQUM1QyxZQUFJdUMsTUFBMEIsR0FBRyxJQUFJZix3RUFBSixFQUFqQztBQUNBZSxjQUFNLENBQUN1RSxTQUFQLENBQWlCOUcsTUFBakI7O0FBQ0EsY0FBSSxDQUFDa0QsT0FBTCxDQUFhbEcsSUFBYixDQUFrQnVGLE1BQWxCOztBQUVBdkMsY0FBTSxDQUFDb0IsSUFBUCxDQUFZL0Isb0lBQXFCLENBQUMwSCxhQUFsQyxFQUFpRHhFLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBN0Q7QUFFQXZFLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHdDQUF3QyxNQUFJLENBQUNpSCxPQUFMLENBQWFDLE1BQWpFLEVBUDRDLENBUTVDOztBQUVBWixjQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCbkQsb0lBQXFCLENBQUMySCxtQkFBdkMsRUFBNEQsVUFBQ0MsUUFBRCxFQUFzQjtBQUM5RWpMLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjs7QUFDQSxjQUFJLE1BQUksQ0FBQ3VLLGlCQUFULEVBQTRCO0FBQ3hCLGtCQUFJLENBQUNVLGNBQUwsQ0FBb0IzRSxNQUFwQixFQUE0QjBFLFFBQTVCO0FBQ0g7QUFDSixTQUxEO0FBT0ExRSxjQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCbkQsb0lBQXFCLENBQUM4SCxvQkFBdkMsRUFBNkQsVUFBQzdHLElBQUQsRUFBZTtBQUN4RXRFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSwyQkFBWjs7QUFFQSxjQUFJLE1BQUksQ0FBQ3VLLGlCQUFULEVBQTRCO0FBQ3hCLGtCQUFJLENBQUNZLFlBQUwsQ0FBa0I3RSxNQUFsQixFQUEwQmpDLElBQTFCO0FBQ0g7QUFDSixTQU5EO0FBUUFpQyxjQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCbkQsb0lBQXFCLENBQUNvQyxnQkFBdkMsRUFBeUQsVUFBQ25CLElBQUQsRUFBZTtBQUNwRXRFLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWjtBQUNBc0csZ0JBQU0sQ0FBQ2QsZ0JBQVAsQ0FBd0JuQixJQUF4QixFQUZvRSxDQUdwRTtBQUNBO0FBQ0E7QUFDSCxTQU5EO0FBUUFpQyxjQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCLFlBQWpCLEVBQStCLFlBQU07QUFFakM7QUFDQSxnQkFBSSxDQUFDVSxPQUFMLENBQWExRixPQUFiLENBQXFCLFVBQUMrRSxNQUFELEVBQTZCOEUsS0FBN0IsRUFBK0M7QUFDaEUsZ0JBQUk5RSxNQUFNLENBQUNqQyxJQUFQLENBQVlDLFFBQVosS0FBeUJQLE1BQU0sQ0FBQ0UsRUFBcEMsRUFBd0M7QUFDcEMsb0JBQUksQ0FBQ2dELE9BQUwsQ0FBYW9FLE1BQWIsQ0FBb0JELEtBQXBCLEVBQTJCLENBQTNCOztBQUVBOUUsb0JBQU0sQ0FBQ2dGLFdBQVA7QUFDSDtBQUNKLFdBTkQ7O0FBUUF2TCxpQkFBTyxDQUFDQyxHQUFSLENBQVksbUNBQW1DLE1BQUksQ0FBQ2lILE9BQUwsQ0FBYUMsTUFBNUQsRUFYaUMsQ0FhakM7QUFDQTtBQUNILFNBZkQ7QUFnQkgsT0FqREQ7QUFtREE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7O0FBQ0EsVUFBSXFFLDBCQUEwQixHQUFHLEtBQUtmLFFBQUwsQ0FBY2dCLEVBQWQsQ0FBaUJySSx3SUFBeUIsQ0FBQ2dCLE1BQTNDLENBQWpDO0FBQ0FvSCxnQ0FBMEIsQ0FBQ2hGLEVBQTNCLENBQThCLFlBQTlCLEVBQTRDLFVBQUN4QyxNQUFELEVBQWlCO0FBQ3pELFlBQUlFLEVBQVUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLENBQVVyQyxRQUFWLEdBQXFCc0MsT0FBckIsQ0FBNkJmLHdJQUF5QixDQUFDZ0IsTUFBdkQsRUFBK0QsRUFBL0QsRUFBbUVELE9BQW5FLENBQTJFLEdBQTNFLEVBQWdGLEVBQWhGLENBQWpCOztBQUNBLFlBQUlvQyxNQUEwQixHQUFHLE1BQUksQ0FBQ21GLGFBQUwsQ0FBbUJ4SCxFQUFuQixFQUF1QkYsTUFBdkIsQ0FBakM7O0FBQ0F1QyxjQUFNLENBQUNvRixtQkFBUCxHQUE2QixJQUE3QjtBQUVBM0wsZUFBTyxDQUFDQyxHQUFSLENBQVltRCx3SUFBeUIsQ0FBQ2dCLE1BQTFCLEdBQW1DLHlCQUFuQyxHQUErRG1DLE1BQU0sQ0FBQ2pDLElBQVAsQ0FBWUMsUUFBdkY7O0FBRUEsY0FBSSxDQUFDcUgsVUFBTCxDQUFnQnJGLE1BQWhCO0FBQ0E7Ozs7QUFHSCxPQVhEO0FBYUEsVUFBSXNGLGdCQUFnQixHQUFHLEtBQUtwQixRQUFMLENBQWNnQixFQUFkLENBQWlCckksd0lBQXlCLENBQUNpQixJQUEzQyxDQUF2QjtBQUVBd0gsc0JBQWdCLENBQUNyRixFQUFqQixDQUFvQixZQUFwQixFQUFrQyxVQUFDeEMsTUFBRCxFQUFpQjtBQUUvQyxZQUFJRSxFQUFVLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBUCxDQUFVckMsUUFBVixHQUFxQnNDLE9BQXJCLENBQTZCZix3SUFBeUIsQ0FBQ2lCLElBQXZELEVBQTZELEVBQTdELEVBQWlFRixPQUFqRSxDQUF5RSxHQUF6RSxFQUE4RSxFQUE5RSxDQUFqQjs7QUFDQSxZQUFJb0MsTUFBMEIsR0FBRyxNQUFJLENBQUNtRixhQUFMLENBQW1CeEgsRUFBbkIsRUFBdUJGLE1BQXZCLENBQWpDOztBQUVBdUMsY0FBTSxDQUFDdkMsTUFBUCxDQUFjd0MsRUFBZCxDQUFpQm5ELG9JQUFxQixDQUFDeUksUUFBdkMsRUFBaUQsVUFBQ0MsTUFBRCxFQUFvQjtBQUNqRXhGLGdCQUFNLENBQUN2QyxNQUFQLENBQWNnSSxJQUFkLENBQW1CRCxNQUFuQjs7QUFFQSxjQUFJRSxVQUFzQixHQUFHLE1BQUksQ0FBQ0MsV0FBTCxDQUFpQkgsTUFBakIsRUFBeUJGLGdCQUF6QixDQUE3Qjs7QUFDQUksb0JBQVUsQ0FBQ0UsWUFBWCxDQUF3QjVGLE1BQXhCLEVBSmlFLENBS2pFOztBQUNBQSxnQkFBTSxDQUFDdkMsTUFBUCxDQUFjb0IsSUFBZCxDQUFtQi9CLG9JQUFxQixDQUFDK0ksVUFBekMsRUFBcURMLE1BQXJELEVBTmlFLENBUWpFOztBQUVBL0gsZ0JBQU0sQ0FBQ3dDLEVBQVAsQ0FBVSxZQUFWLEVBQXdCLFlBQVk7QUFFaEN4RyxtQkFBTyxDQUFDQyxHQUFSLENBQVksa0NBQWtDK0QsTUFBTSxDQUFDRSxFQUFyRDtBQUVBRixrQkFBTSxDQUFDbkYsRUFBUCxDQUFVa04sTUFBVixFQUFrQjNHLElBQWxCLENBQXVCL0Isb0lBQXFCLENBQUNnSixRQUE3QyxFQUF1RHJJLE1BQU0sQ0FBQ0UsRUFBOUQ7QUFDQUYsa0JBQU0sQ0FBQ3NJLFVBQVA7QUFDSCxXQU5EO0FBT0gsU0FqQkQ7QUFtQkEvRixjQUFNLENBQUN2QyxNQUFQLENBQWN3QyxFQUFkLENBQWlCbkQsb0lBQXFCLENBQUNrSixjQUF2QyxFQUF1RCxVQUFDQyxJQUFELEVBQVlDLFdBQVosRUFBa0RDLFdBQWxELEVBQXVFO0FBQzFILGNBQUlELFdBQVcsSUFBSW5KLHNJQUF1QixDQUFDcUosS0FBM0MsRUFDSTNNLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBRUorRCxnQkFBTSxDQUFDNEksU0FBUCxDQUFpQi9OLEVBQWpCLENBQW9CMk4sSUFBcEIsRUFBMEJwSCxJQUExQixDQUErQi9CLG9JQUFxQixDQUFDa0osY0FBckQsRUFBcUVFLFdBQXJFLEVBQWtGQyxXQUFsRjtBQUVILFNBTkQ7QUFRQTFJLGNBQU0sQ0FBQ3dDLEVBQVAsQ0FBVW5ELG9JQUFxQixDQUFDd0osa0JBQWhDLEVBQW9ELFlBQU0sQ0FFekQsQ0FGRDtBQUdILE9BbkNEO0FBb0NIO0FBak1MO0FBQUE7QUFBQSwrQkFtTXVCdEcsTUFuTXZCLEVBbU15RDtBQUNqRCxXQUFLVyxPQUFMLENBQWExRixPQUFiLENBQXFCLFVBQUNzTCxXQUFELEVBQXFDO0FBQ3RELFlBQUl2RyxNQUFNLElBQUl1RyxXQUFWLElBQXlCQSxXQUFXLENBQUNuQixtQkFBekMsRUFBOEQ7QUFDMUQzTCxpQkFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQXNHLGdCQUFNLENBQUNvRixtQkFBUCxHQUE2QixLQUE3QjtBQUNBbUIscUJBQVcsQ0FBQ25CLG1CQUFaLEdBQWtDLEtBQWxDO0FBRUEsY0FBSUksTUFBYyxHQUFHeEYsTUFBTSxDQUFDakMsSUFBUCxDQUFZQyxRQUFaLEdBQXVCLEdBQXZCLEdBQTZCdUksV0FBVyxDQUFDeEksSUFBWixDQUFpQkMsUUFBbkU7QUFFQWdDLGdCQUFNLENBQUN2QyxNQUFQLENBQWNvQixJQUFkLENBQW1CL0Isb0lBQXFCLENBQUMwSixXQUF6QyxFQUFzRGhCLE1BQXREO0FBQ0FlLHFCQUFXLENBQUM5SSxNQUFaLENBQW1Cb0IsSUFBbkIsQ0FBd0IvQixvSUFBcUIsQ0FBQzBKLFdBQTlDLEVBQTJEaEIsTUFBM0Q7QUFFQSxpQkFBTyxJQUFQO0FBQ0g7QUFDSixPQWJEO0FBY0g7QUFsTkw7QUFBQTtBQUFBLGtDQW9OMEI3SCxFQXBOMUIsRUFvTnNDRixNQXBOdEMsRUFvTnVFO0FBQy9ELFVBQUlnSixVQUE4QixHQUFHLElBQUl4SCx3RUFBSixFQUFyQyxDQUQrRCxDQUUvRDs7QUFDQSxXQUFLMEIsT0FBTCxDQUFhMUYsT0FBYixDQUFxQixVQUFDK0UsTUFBRCxFQUFnQztBQUNqRCxZQUFJQSxNQUFNLENBQUNqQyxJQUFQLENBQVlDLFFBQVosS0FBeUJMLEVBQTdCLEVBQWlDO0FBQzdCO0FBQ0E4SSxvQkFBVSxHQUFHekcsTUFBYjtBQUNBeUcsb0JBQVUsQ0FBQ2xDLFNBQVgsQ0FBcUI5RyxNQUFyQjtBQUNBLGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BUEQ7QUFTQWdKLGdCQUFVLENBQUNoSixNQUFYLEdBQW9CQSxNQUFwQjtBQUVBLGFBQU9nSixVQUFQO0FBQ0g7QUFuT0w7QUFBQTtBQUFBLGdDQXFPd0JqQixNQXJPeEIsRUFxT3dDcEcsRUFyT3hDLEVBcU82RDtBQUNyRDtBQUNBM0YsYUFBTyxDQUFDQyxHQUFSLENBQVksa0NBQWtDOEwsTUFBOUM7QUFDQSxVQUFJa0IsUUFBSjtBQUVBLFdBQUtDLEtBQUwsQ0FBVzFMLE9BQVgsQ0FBbUIsVUFBQ2dMLElBQUQsRUFBc0I7QUFDckMsWUFBSUEsSUFBSSxDQUFDdEksRUFBTCxJQUFXNkgsTUFBZixFQUF1QjtBQUNuQmtCLGtCQUFRLEdBQUdULElBQVg7QUFDQSxpQkFBTyxJQUFQO0FBQ0gsU0FKb0MsQ0FLckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDSCxPQVZEOztBQVlBLFVBQUksQ0FBQ1MsUUFBTCxFQUFlO0FBQ1hBLGdCQUFRLEdBQUcsSUFBSXZILHVEQUFKLENBQWVxRyxNQUFmLEVBQXVCcEcsRUFBdkIsQ0FBWDtBQUNBLGFBQUt1SCxLQUFMLENBQVdsTSxJQUFYLENBQWdCaU0sUUFBaEI7QUFDSDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0g7QUE1UEw7QUFBQTtBQUFBLGlDQThQeUIxRyxNQTlQekIsRUE4UHFEakMsSUE5UHJELEVBOFBzRTtBQUFBOztBQUM5RCxVQUFJNkksT0FBZSxHQUFHLDZCQUE2QjdJLElBQUksQ0FBQyxRQUFELENBQWpDLEdBQThDLElBQTlDLEdBQXFEQSxJQUFJLENBQUMsT0FBRCxDQUF6RCxHQUFxRSxtQkFBckUsR0FBMkZBLElBQUksQ0FBQyxRQUFELENBQS9GLEdBQTRHLEdBQWxJOztBQUVBLFVBQUlBLElBQUksQ0FBQyxNQUFELENBQUosSUFBZ0IsV0FBcEIsRUFBaUM7QUFDN0IsWUFBSUEsSUFBSSxDQUFDLE9BQUQsQ0FBSixJQUFpQmlCLHNFQUFTLENBQUM2SCxHQUEvQixFQUFvQztBQUNoQztBQUNBRCxpQkFBTyxHQUFHLHdGQUF3RixXQUFsRyxDQUZnQyxDQUdoQztBQUNILFNBSkQsTUFJTyxJQUFJN0ksSUFBSSxDQUFDLE9BQUQsQ0FBSixJQUFpQmlCLHNFQUFTLENBQUM4SCxJQUEvQixFQUFxQztBQUN4Q0YsaUJBQU8sR0FBRyx3RkFBd0YsV0FBbEc7QUFDSDtBQUNKOztBQUVEbk4sYUFBTyxDQUFDQyxHQUFSLENBQVksY0FBY2tOLE9BQTFCLEVBQW1DLFdBQVc3SSxJQUFJLENBQUMsTUFBRCxDQUFsRCxFQUE0RCxZQUFZQSxJQUFJLENBQUMsT0FBRCxDQUE1RTs7QUFHQTtBQUFBO0FBQUEsOEJBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDd0IsTUFBSSxDQUFDdUYsWUFBTCxDQUFrQlUsT0FBbEIsRUFEeEI7O0FBQUE7QUFDUytDLHNCQURUO0FBQUE7QUFBQTtBQUFBLHVCQUl5QkEsTUFBTSxDQUFDQyxLQUFQLENBQWFKLE9BQWIsQ0FKekI7O0FBQUE7QUFJYUssbUJBSmI7O0FBS087QUFDQSxzQkFBSSxDQUFDdEMsY0FBTCxDQUFvQjNFLE1BQXBCLEVBQTRCakMsSUFBSSxDQUFDLFFBQUQsQ0FBaEM7O0FBTlA7QUFBQTtBQVNPZ0osc0JBQU0sQ0FBQ0csT0FBUDtBQVRQOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUQsS0FXS0MsS0FYTCxDQVdXLFVBQUFDLENBQUM7QUFBQSxlQUFJM04sT0FBTyxDQUFDQyxHQUFSLENBQVkwTixDQUFDLENBQUNDLEtBQWQsQ0FBSjtBQUFBLE9BWFo7QUFhSDtBQTNSTDtBQUFBO0FBQUEsbUNBNlIyQnJILE1BN1IzQixFQTZSdUQwRSxRQTdSdkQsRUE2UjRFO0FBQUE7O0FBQ3BFakwsYUFBTyxDQUFDQyxHQUFSLENBQVksOEJBQThCZ0wsUUFBMUM7QUFDQSxVQUFNc0MsS0FBSyxHQUFHO0FBQ1Y7QUFDQU0sWUFBSSxFQUFFLFlBRkk7QUFHVkMsWUFBSSxFQUFFLCtDQUhJO0FBSVZDLGNBQU0sRUFBRSxDQUFDOUMsUUFBRDtBQUpFLE9BQWQ7QUFPQSxXQUFLcEIsWUFBTCxDQUFrQjBELEtBQWxCLENBQXdCQSxLQUF4QixFQUNLUyxJQURMLENBQ1UsVUFBQVIsR0FBRyxFQUFJO0FBRVQsWUFBSUEsR0FBRyxDQUFDUyxJQUFKLENBQVMsQ0FBVCxLQUFlQyxTQUFmLElBQTRCVixHQUFHLENBQUNTLElBQUosQ0FBUyxDQUFULEtBQWUsV0FBM0MsSUFBMERULEdBQUcsQ0FBQ1MsSUFBSixDQUFTLENBQVQsS0FBZSxJQUE3RSxFQUFtRjtBQUMvRSxnQkFBSSxDQUFDRSxhQUFMLENBQW1CNUgsTUFBTSxDQUFDdkMsTUFBMUIsRUFBa0NpSCxRQUFsQztBQUNILFNBRkQsTUFFTztBQUNIMUUsZ0JBQU0sQ0FBQ2QsZ0JBQVAsQ0FBd0IrSCxHQUFHLENBQUNTLElBQUosQ0FBUyxDQUFULENBQXhCO0FBQ0gsU0FOUSxDQU9UOztBQUNILE9BVEwsRUFVS1AsS0FWTCxDQVVXLFVBQUFDLENBQUMsRUFBSTtBQUVSM04sZUFBTyxDQUFDcUssS0FBUixDQUFjc0QsQ0FBQyxDQUFDQyxLQUFoQjtBQUNILE9BYkw7QUFjSDtBQXBUTDtBQUFBO0FBQUEsa0NBc1QwQnJILE1BdFQxQixFQXNUMEMwRSxRQXRUMUMsRUFzVCtEO0FBQUE7O0FBQ3ZEakwsYUFBTyxDQUFDQyxHQUFSLENBQVksd0JBQXdCZ0wsUUFBcEM7QUFDQSxVQUFNbUQsa0JBQWtCLEdBQ3BCO0FBQ0lQLFlBQUksRUFBRSxpQkFEVjtBQUVJQyxZQUFJLEVBQUUsOENBRlY7QUFHSUMsY0FBTSxFQUFFLENBQUM5QyxRQUFEO0FBSFosT0FESjtBQU9BLFdBQUtwQixZQUFMLENBQWtCMEQsS0FBbEIsQ0FBd0JhLGtCQUF4QixFQUNBO0FBREEsT0FFS0osSUFGTCxDQUVVLFVBQUFSLEdBQUcsRUFBSTtBQUNUOztBQUVBLGNBQUksQ0FBQ3RDLGNBQUwsQ0FBb0IzRSxNQUFNLENBQUN2QyxNQUEzQixFQUFtQ2lILFFBQW5DO0FBQ0gsT0FOTCxFQU9LeUMsS0FQTCxDQU9XLFVBQUFDLENBQUMsRUFBSTtBQUNSM04sZUFBTyxDQUFDcUssS0FBUixDQUFjc0QsQ0FBQyxDQUFDQyxLQUFoQjtBQUNILE9BVEw7QUFVSDtBQUdEOzs7Ozs7O0FBNVVKOztBQUFBO0FBQUE7QUFvVkEsSUFBSW5GLGlCQUFKLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlXQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7Ozs7QUNBQSxzQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImV4cG9ydCBjbGFzcyBQb2NrZXlTb2NrZXRNZXNzYWdlcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdBVENIOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJXQVRDSFwiO1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBTQ09SRV9VUERBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlNDT1JFX1VQREFURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1BQT05FTlRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgWU9VUl9UVVJOOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJZT1VSX1RVUk5cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlRfU0VUVElOR1M6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9QUE9ORU5UX1NFVFRJTkdTXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UX1JFTUFUQ0g6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9QUE9ORU5UX1JFTUFUQ0hcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRElTQ09OTkVDVF9NWV9TT0NLRVQ6IHN0cmluZyA9IFwiQ29ubmVjdGlvblNpZ25hbHNUeXBlLlwiICsgJ0RJU0NPTk5FQ1RfTVlfU09DS0VUJztcclxuXHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIE9QUE9ORU5UX1JFU1RBUlQ6IGFueTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTExfSU5fVEhFX0hBTEw6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkJBTExfSU5fVEhFX0hBTExcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU0NPUkVfVVBEQVRFRDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiU0NPUkVfVVBEQVRFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBDSEVDS19ORVhUX1RVUk46IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkNIRUNLX05FWFRfVFVSTlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBDSEFOR0VfU1RBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkNIQU5HRV9TVEFURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPV05fQkFMTF9UT1VDSEVEX0ZJUlNUOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPV05fQkFMTF9UT1VDSEVEX0ZJUlNUXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EX1RJTUVSX1VQREFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiUk9VTkRfVElNRVJfVVBEQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EX1RJTUVSX0NPTVBMRVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJST1VORF9USU1FUl9DT01QTEVURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBCQUxMX1dBU19TSE9UOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJCQUxMX1dBU19TSE9UXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Zpbml0ZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vdHlwZXN0YXRlXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb2NrZXlTdGF0ZXMge1xyXG4gICAgLyowKi9vbkxvYWQsXHJcbiAgICAvKjEqL29uTWFpbk1lbnUsXHJcbiAgICAvKjIqL29uU3RhcnQsXHJcbiAgICAvKjMqL29uUm91bmRFbmQsXHJcbiAgICAvKjQqL29uRGVmaW5lQ2xpZW50LFxyXG4gICAgLyo1Ki9vblNlYXJjaEZvclBhcnRuZXIsXHJcbiAgICAvKjYqL29uV2F0Y2gsXHJcbiAgICAvKjcqL29uUmVhcnJhbmdlU3RpY2ssXHJcbiAgICAvKjgqL29uUmVwb3NpdGlvbldoaXRlQmFsbCxcclxuICAgIC8qOSovb25TaG9vdCxcclxuICAgIC8qMTAqL29uRW5kVHVybixcclxuICAgIC8qMTEqL29uRW5kTWF0Y2gsXHJcbiAgICAvKjEyKi9vblByZXBhcmVSb3VuZE9uZSxcclxuICAgIC8qMTMqL29uUHJlcGFyZVJvdW5kVHdvLFxyXG4gICAgLyoxNCovb25QcmVwYXJlUm91bmRUaHJlZSxcclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gUG9ja2V5U3RhdGVzIHtcclxuLy8gICAgIFN0YXJ0R2FtZSxcclxuLy8gICAgIFBsYXllclR1cm4sXHJcbi8vICAgICBQbGF5ZXJUdXJuRmlyc3RCYWxsLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuRmlyc3RCYWxsLFxyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0IHRoZSBGU00gd2l0aCB0aGUgaW5pdGFsIHN0YXRlLCBpbiB0aGlzIGNhc2UgdGhlIGVsZXZhdG9yIHN0YXJ0cyB3aXRoIGl0cyBkb29ycyBvcGVuZWRcclxuICAgIHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2NrZXlTdGF0ZU1hY2hpbmU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U3RhdGU6IGFueTtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRTdGF0ZTphbnk7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlKCk6IFBvY2tleVN0YXRlTWFjaGluZSB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlID0gbmV3IFBvY2tleVN0YXRlTWFjaGluZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtID0gbmV3IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+KFBvY2tleVN0YXRlcy5vbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuSW5pdGlhbGl6ZVN0YXRlcygpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzOiBzdHJpbmcgPSBQb2NrZXlTdGF0ZXNbUG9ja2V5U3RhdGVzLm9uTG9hZF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIHMsIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkxvYWQpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25NYWluTWVudSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25TaG9vdCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNob290KS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGF5U3RhdGVDaGFuZ2luZyhkZWxheWVkU3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFN0YXRlID0gUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmN1cnJlbnRTdGF0ZTtcclxuICAgICAgICB0aGlzLm5leHRTdGF0ZSA9IGRlbGF5ZWRTdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlRGVsYXllZFN0YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmNoYW5nZVN0YXRlKHRoaXMubmV4dFN0YXRlKTtcclxuICAgICAgICB0aGlzLm5leHRTdGF0ZSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhhc1N0YXRlSW5RdWV1ZSgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIV8uaXNVbmRlZmluZWQodGhpcy5uZXh0U3RhdGUpICYmIF8uaXNOdWxsKHRoaXMubmV4dFN0YXRlKSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2hhbmdlU3RhdGUoc3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghUG9ja2V5U3RhdGVzW3N0YXRlXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBzdGF0ZSBkb2VzIG5vdCBleGlzdDogXCIgKyBzdGF0ZSwgXCJjb2xvcjogIzAwMDAwMDsgYmFja2dyb3VuZDojZmY5OTAwXCIpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHN0YXRlID09IFBvY2tleVN0YXRlcy5vblNob290KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzdGF0ZT09PT09PT1cIik7XHJcbiAgICAgICAgICAgIHRoaXMucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHN0YXRlPT09PT09PVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdG9wXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uZ28oc3RhdGUpO1xyXG4gICAgICAgIHRoaXMucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5mc20pIHtcclxuICAgICAgICAgICAgXy5mb3JFYWNoKHRoaXMuZnNtLCAoc3RhdGU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09IHRoaXMuZnNtLmN1cnJlbnRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHMgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBQb2NrZXlTdGF0ZXNbc3RhdGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHByaW50RnNtQ3VycmVudFN0YXRlKCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uY3VycmVudFN0YXRlID09IFBvY2tleVN0YXRlcy5vblNob290KSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogYmxhY2s7IGNvbG9yOiB5ZWxsb3c7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IHllbGxvdzsgY29sb3I6ICNmNjU0NmE7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgfVxyXG59IiwiXHJcbiAgIC8qKlxyXG4gICAgKiBUcmFuc2l0aW9uIGdyb3VwaW5nIHRvIGZhY2lsaWF0ZSBmbHVlbnQgYXBpXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZnNtOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4pIHsgfVxyXG5cclxuICAgICAgcHVibGljIGZyb21TdGF0ZXM6IFRbXTtcclxuICAgICAgcHVibGljIHRvU3RhdGVzOiBUW107XHJcblxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNwZWNpZnkgdGhlIGVuZCBzdGF0ZShzKSBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyB0byguLi5zdGF0ZXM6IFRbXSkge1xyXG4gICAgICAgICB0aGlzLnRvU3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgICB0aGlzLmZzbS5hZGRUcmFuc2l0aW9ucyh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICAvKipcclxuICAgICAgICogU3BlY2lmeSB0aGF0IGFueSBzdGF0ZSBpbiB0aGUgc3RhdGUgZW51bSBpcyB2YWx1ZVxyXG4gICAgICAgKiBUYWtlcyB0aGUgc3RhdGUgZW51bSBhcyBhbiBhcmd1bWVudFxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIHRvQW55KHN0YXRlczogYW55KSB7XHJcbiAgICAgICAgIHZhciB0b1N0YXRlczogVFtdID0gW107XHJcbiAgICAgICAgIGZvciAodmFyIHMgaW4gc3RhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkocykpIHtcclxuICAgICAgICAgICAgICAgdG9TdGF0ZXMucHVzaCgoPFQ+c3RhdGVzW3NdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy50b1N0YXRlcyA9IHRvU3RhdGVzO1xyXG4gICAgICAgICB0aGlzLmZzbS5hZGRUcmFuc2l0aW9ucyh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICAvKipcclxuICAgICogSW50ZXJuYWwgcmVwcmVzZW50YXRpb24gb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+IHtcclxuICAgICAgY29uc3RydWN0b3IocHVibGljIGZzbTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+LCBwdWJsaWMgZnJvbTogVCwgcHVibGljIHRvOiBUKSB7IH1cclxuICAgfVxyXG4gICBcclxuICAgLyoqXHJcbiAgICAqIEEgc2ltcGxlIGZpbml0ZSBzdGF0ZSBtYWNoaW5lIGltcGxlbWVudGVkIGluIFR5cGVTY3JpcHQsIHRoZSB0ZW1wbGF0ZWQgYXJndW1lbnQgaXMgbWVhbnQgdG8gYmUgdXNlZFxyXG4gICAgKiB3aXRoIGFuIGVudW1lcmF0aW9uLlxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgIHB1YmxpYyBjdXJyZW50U3RhdGU6IFQ7XHJcbiAgICAgIHByaXZhdGUgX3N0YXJ0U3RhdGU6IFQ7XHJcbiAgICAgIHByaXZhdGUgX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjogYm9vbGVhbjtcclxuICAgICAgcHJpdmF0ZSBfdHJhbnNpdGlvbkZ1bmN0aW9uczogVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+W10gPSBbXTtcclxuICAgICAgcHJpdmF0ZSBfb25DYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAoZnJvbTogVCwgZXZlbnQ/OiBhbnkpOiB2b2lkOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9leGl0Q2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKHRvOiBUKTogYm9vbGVhbjsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfZW50ZXJDYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAoZnJvbTogVCwgZXZlbnQ/OiBhbnkpOiBib29sZWFuOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrOiAodG8/OiBULCBmcm9tPzogVCkgPT4gYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgICBjb25zdHJ1Y3RvcihzdGFydFN0YXRlOiBULCBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb246IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXJ0U3RhdGU7XHJcbiAgICAgICAgIHRoaXMuX3N0YXJ0U3RhdGUgPSBzdGFydFN0YXRlO1xyXG4gICAgICAgICB0aGlzLl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gPSBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBhZGRUcmFuc2l0aW9ucyhmY246IFRyYW5zaXRpb25zPFQ+KSB7XHJcbiAgICAgICAgIGZjbi5mcm9tU3RhdGVzLmZvckVhY2goZnJvbSA9PiB7XHJcbiAgICAgICAgICAgIGZjbi50b1N0YXRlcy5mb3JFYWNoKHRvID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHRoZSB0cmFuc2l0aW9uIGlmIHRoZSBzdGF0ZSBtYWNoaW5lIGlzIG5vdCBjdXJyZW50bHkgYWJsZSB0byB0cmFuc2l0aW9uLlxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW5Hbyhmcm9tLCB0bykpIHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9ucy5wdXNoKG5ldyBUcmFuc2l0aW9uRnVuY3Rpb248VD4odGhpcywgZnJvbSwgdG8pKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2tcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbihzdGF0ZTogVCwgY2FsbGJhY2s6IChmcm9tPzogVCwgZXZlbnQ/OiBhbnkpID0+IGFueSk6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX29uQ2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrLCByZXR1cm5pbmdcclxuICAgICAgICogZmFsc2UgaW4gdGhlIGNhbGxiYWNrIHdpbGwgYmxvY2sgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZS5cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkVudGVyKHN0YXRlOiBULCBjYWxsYmFjazogKGZyb20/OiBULCBldmVudD86IGFueSkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrLCByZXR1cm5pbmdcclxuICAgICAgICogZmFsc2UgaW4gdGhlIGNhbGxiYWNrIHdpbGwgYmxvY2sgdGhlIHRyYW5zaXRpb24gZnJvbSB0aGlzIHN0YXRlLlxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uRXhpdChzdGF0ZTogVCwgY2FsbGJhY2s6ICh0bz86IFQpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3QgZm9yIGFuIGludmFsaWQgdHJhbnNpdGlvbiBhbmQgaGFuZGxlIHRoZSBlcnJvciwgcmV0dXJuaW5nIGEgZmFsc3kgdmFsdWUgd2lsbCB0aHJvdyBhblxyXG4gICAgICAgKiBleGNlcHRpb24sIGEgdHJ1dGh5IG9uZSB3aWxsIHN3YWxsb3cgdGhlIGV4Y2VwdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uSW52YWxpZFRyYW5zaXRpb24oY2FsbGJhY2s6IChmcm9tPzogVCwgdG8/OiBUKSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgaWYoIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrID0gY2FsbGJhY2tcclxuICAgICAgICAgfVxyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIERlY2xhcmVzIHRoZSBzdGFydCBzdGF0ZShzKSBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb24sIG11c3QgYmUgZm9sbG93ZWQgd2l0aCBhICcudG8oLi4uZW5kU3RhdGVzKSdcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBmcm9tKC4uLnN0YXRlczogVFtdKTogVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICAgICB2YXIgX3RyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbnM8VD4odGhpcyk7XHJcbiAgICAgICAgIF90cmFuc2l0aW9uLmZyb21TdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgIHJldHVybiBfdHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGZyb21Bbnkoc3RhdGVzOiBhbnkpOiBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgICAgIHZhciBmcm9tU3RhdGVzOiBUW10gPSBbXTtcclxuICAgICAgICAgZm9yICh2YXIgcyBpbiBzdGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcy5oYXNPd25Qcm9wZXJ0eShzKSkge1xyXG4gICAgICAgICAgICAgICBmcm9tU3RhdGVzLnB1c2goKDxUPnN0YXRlc1tzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHZhciBfdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uczxUPih0aGlzKTtcclxuICAgICAgICAgX3RyYW5zaXRpb24uZnJvbVN0YXRlcyA9IGZyb21TdGF0ZXM7XHJcbiAgICAgICAgIHJldHVybiBfdHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBfdmFsaWRUcmFuc2l0aW9uKGZyb206IFQsIHRvOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25zLnNvbWUodGYgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRmLmZyb20gPT09IGZyb20gJiYgdGYudG8gPT09IHRvKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVjayB3aGV0aGVyIGEgdHJhbnNpdGlvbiBiZXR3ZWVuIGFueSB0d28gc3RhdGVzIGlzIHZhbGlkLlxyXG4gICAgICAgKiAgICBJZiBhbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gaXMgdHJ1ZSwgYWx3YXlzIGFsbG93IHRyYW5zaXRpb25zIGZyb20gYSBzdGF0ZSBiYWNrIHRvIGl0c2VsZi5cclxuICAgICAgICogICAgIE90aGVyd2lzZSwgY2hlY2sgaWYgaXQncyBhIHZhbGlkIHRyYW5zaXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICBwcml2YXRlIF9jYW5Hbyhmcm9tU3RhdGU6IFQsIHRvU3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiAodGhpcy5fYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uICYmIGZyb21TdGF0ZSA9PT0gdG9TdGF0ZSkgfHwgdGhpcy5fdmFsaWRUcmFuc2l0aW9uKGZyb21TdGF0ZSwgdG9TdGF0ZSk7XHJcbiAgICAgIH0gXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgd2hldGhlciBhIHRyYW5zaXRpb24gdG8gYSBuZXcgc3RhdGUgaXMgdmFsaWRcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBjYW5HbyhzdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2NhbkdvKHRoaXMuY3VycmVudFN0YXRlLCBzdGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBUcmFuc2l0aW9uIHRvIGFub3RoZXIgdmFsaWQgc3RhdGVcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBnbyhzdGF0ZTogVCwgZXZlbnQ/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAgaWYgKCF0aGlzLmNhbkdvKHN0YXRlKSkge1xyXG4gICAgICAgICAgICBpZighdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayB8fCAhdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayh0aGlzLmN1cnJlbnRTdGF0ZSwgc3RhdGUpKXtcclxuICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBubyB0cmFuc2l0aW9uIGZ1bmN0aW9uIGV4aXN0cyBmcm9tIHN0YXRlICcgKyB0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpICsgJyB0byAnICsgc3RhdGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRvKHN0YXRlLCBldmVudCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgIC8qKlxyXG4gICAgICAgKiBUaGlzIG1ldGhvZCBpcyBhdmFpbGJsZSBmb3Igb3ZlcnJpZGRpbmcgZm9yIHRoZSBzYWtlIG9mIGV4dGVuc2liaWxpdHkuIFxyXG4gICAgICAgKiBJdCBpcyBjYWxsZWQgaW4gdGhlIGV2ZW50IG9mIGEgc3VjY2Vzc2Z1bCB0cmFuc2l0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgIHB1YmxpYyBvblRyYW5zaXRpb24oZnJvbTogVCwgdG86IFQpIHtcclxuICAgICAgICAgLy8gcGFzcywgZG9lcyBub3RoaW5nIHVudGlsIG92ZXJpZGRlblxyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgKiBSZXNldCB0aGUgZmluaXRlIHN0YXRlIG1hY2hpbmUgYmFjayB0byB0aGUgc3RhcnQgc3RhdGUsIERPIE5PVCBVU0UgVEhJUyBBUyBBIFNIT1JUQ1VUIGZvciBhIHRyYW5zaXRpb24uIFxyXG4gICAgICAqIFRoaXMgaXMgZm9yIHN0YXJ0aW5nIHRoZSBmc20gZnJvbSB0aGUgYmVnaW5uaW5nLlxyXG4gICAgICAqL1xyXG4gICAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gdGhpcy5fc3RhcnRTdGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLyoqXHJcbiAgICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBjdXJyZW50IHN0YXRlIGVxdWFscyB0aGUgZ2l2ZW4gc3RhdGVcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBpcyhzdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFN0YXRlID09PSBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHJpdmF0ZSBfdHJhbnNpdGlvblRvKHN0YXRlOiBULCBldmVudD86IGFueSkge1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAoIXRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmICghdGhpcy5fb25DYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIHZhciBjYW5FeGl0ID0gdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXS5yZWR1Y2U8Ym9vbGVhbj4oKGFjY3VtOiBib29sZWFuLCBuZXh0OiAodG86IFQpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjY3VtICYmICg8Ym9vbGVhbj5uZXh0LmNhbGwodGhpcywgc3RhdGUpKTtcclxuICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICB2YXIgY2FuRW50ZXIgPSB0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXS5yZWR1Y2U8Ym9vbGVhbj4oKGFjY3VtOiBib29sZWFuLCBuZXh0OiAoZnJvbTogVCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgICByZXR1cm4gYWNjdW0gJiYgKDxib29sZWFuPm5leHQuY2FsbCh0aGlzLCB0aGlzLmN1cnJlbnRTdGF0ZSwgZXZlbnQpKTtcclxuICAgICAgICAgfSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICBpZiAoY2FuRXhpdCAmJiBjYW5FbnRlcikge1xyXG4gICAgICAgICAgICB2YXIgb2xkID0gdGhpcy5jdXJyZW50U3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhdGU7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldLmZvckVhY2goZmNuID0+IHtcclxuICAgICAgICAgICAgICAgZmNuLmNhbGwodGhpcywgb2xkLCBldmVudCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uVHJhbnNpdGlvbihvbGQsIHN0YXRlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcblxyXG4vLyBtYWludGFpbiBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBmb3IgcGVvcGxlIHVzaW5nIHRoZSBwYXNjYWwgY2FzZWQgdmVyc2lvblxyXG4vLyB2YXIgVHlwZVN0YXRlID0gdHlwZXN0YXRlO1xyXG4iLCJleHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNFQVJDSDogc3RyaW5nID0gXCIvc2VhcmNoaW5nXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBMQVk6IHN0cmluZyA9IFwiL3BsYXlcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldEV2ZW50cyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBuZXdDb25uZWN0aW9uOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibmV3Q29ubmVjdGlvblwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBsZXRzQ29ubmVjdDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImxldHNDb25uZWN0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5Sb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiam9pblJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pbmVkUm9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImpvaW5lZFJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGVmdFJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJsZWZ0Um9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBwcml2YXRlTWVzc2FnZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInByaXZhdGVNZXNzYWdlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldFNpZ25lZEluVXNlckRhdGE6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJnZXRTaWduZWRJblVzZXJEYXRhXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFiYXNlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YWJhc2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZGlzY29ubmVjdE15U29ja2V0OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZGlzY29ubmVjdE15U29ja2V0XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdhbWVTZXR1cDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImdhbWVTZXR1cFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyByb29tQ3JlYXRlZDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInJvb21DcmVhdGVkXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFGcm9tU2VydmVyOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YUZyb21TZXJ2ZXJcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBzdGFydFNlbmRpbmdTbmFwc2hvdHM6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJzdGFydFNlbmRpbmdTbmFwc2hvdHNcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgc25hcHNob3RVcGRhdGU6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJzbmFwc2hvdFVwZGF0ZVwiO1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBwYXJ0bmVyRm91bmRDaGFubmVsOiBzdHJpbmcgPSBcInBhcnRuZXJGb3VuZENoYW5uZWxcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgV0hPX1dBTlRTX1RPX1BMQVk6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIldIT19XQU5UU19UT19QTEFZXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIElfV0FOVF9UT19QTEFZOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJJX1dBTlRTX1RPX1BMQVlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSEVMTE86IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIkhFTExPXCI7XHJcblxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA1LzgvMjAxOVxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lciB7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRUaW1lOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvblVwZGF0ZUNhbGxiYWNrOiBGdW5jdGlvbiwgcHJpdmF0ZSBvbkNvbXBsZXRlQ2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgc3RhcnQoaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VGltZSA9IGk7XHJcbiAgICAgICAgLy9jYWxsYmFjayA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uKCl7fTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRUaW1lLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRUaW1lIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50VGltZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzgvMjAxOVxyXG4gKi9cclxuaW1wb3J0IHtQb2NrZXlQbGF5ZXJEYXRhfSBmcm9tIFwiLi9wb2NrZXktcGxheWVyLWRhdGFcIjtcclxuaW1wb3J0IHtcclxuICAgIEZyYW1ld29ya1NvY2tldEV2ZW50cyxcclxuICAgIEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXNcclxufSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuXHJcbi8qXHJcbmltcG9ydCB7RnJhbWV3b3JrU29ja2V0RXZlbnRzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuaW1wb3J0ICogYXMgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCB7UG9ja2V5U2V0dGluZ3N9IGZyb20gXCIuLi9jbGllbnQvcG9ja2V5LXNldHRpbmdzXCI7XHJcbmltcG9ydCB7U2lnbmFsc01hbmFnZXJ9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9TaWduYWxzL3NpZ25hbHMtbWFuYWdlclwiO1xyXG5pbXBvcnQge1BvY2tleVNpZ25hbFR5cGVzfSBmcm9tIFwiLi4vY2xpZW50L01vZHVsZXMvU2lnbmFsc01vZHVsZS9wb2NrZXktc2lnbmFsLXR5cGVzXCI7XHJcbmltcG9ydCB7U2V0dGluZ3N9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9TZXR0aW5nc1wiO1xyXG4qL1xyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIHB1YmxpYyBkYXRhOiBQb2NrZXlQbGF5ZXJEYXRhID0ge307XHJcbiAgICBwdWJsaWMgc29ja2V0OiBhbnk7XHJcbiAgICBwdWJsaWMgaXNMb29raW5nRm9yUGFydG5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gcHVibGljIGlzQ2xpZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNGaXJzdFRvU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U29ja2V0KHNvY2tldDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBuZXdTb2NrZXRJRDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgIG5ld1NvY2tldElEID0gbmV3U29ja2V0SUQucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVksICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNvY2tldElEID0gbmV3U29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc29ja2V0SUQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHNvY2tldCBpbml0aWFsaXplZDogXCIgKyB0aGlzLmRhdGEuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YTogUG9ja2V5UGxheWVyRGF0YSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXZhdGFyID0gdXNlcm5hbWVEYXRhLmF2YXRhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9yID0gdXNlcm5hbWVEYXRhLmNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5kZWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZGVjYWwgPSB1c2VybmFtZURhdGEuZGVjYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmZlbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZlbHQgPSB1c2VybmFtZURhdGEuZmVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEucGxheWVyX2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wbGF5ZXJfbGV2ZWwgPSB1c2VybmFtZURhdGEucGxheWVyX2xldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5zdGljaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RpY2sgPSB1c2VybmFtZURhdGEuc3RpY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudG90YWxfcG9pbnRzID0gdXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudG90YWxfcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3RhbF9wb2ludHMgPSB1c2VybmFtZURhdGEudG90YWxfcG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5uaWNrbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubmlja25hbWUgPSB1c2VybmFtZURhdGEubmlja25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnVzZXJfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnVzZXJfaWQgPSB1c2VybmFtZURhdGEudXNlcl9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZmlyc3RfbG9naW5fZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlyc3RfbG9naW5fZGF0ZSA9IHVzZXJuYW1lRGF0YS5maXJzdF9sb2dpbl9kYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50eXBlID0gdXNlcm5hbWVEYXRhLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY2VpdmVTbmFwc2hvdFVwZGF0ZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNuYXBzaG90IHJlY2VpdmVkLy8vLy8vLy8vXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU25hcHNob3QgcmVjZWl2ZWQvLy8vLy8vLy8vXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZW5kR2FtZVNuYXBzaG90KGRhdGE6IGFueSk6IHZvaWQge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBzbmFwc2hvdCB0byBvdGhlciBwbGF5ZXJcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxmRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciByZW1vdmVkXCIpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGVudW0gQmFsbFR5cGUge1xyXG4gICAgTGVmdCA9ICdMZWZ0QmFsbCcsXHJcbiAgICBSaWdodCA9ICdSaWdodEJhbGwnLFxyXG4gICAgV2hpdGUgPSBcIldoaXRlQmFsbFwiLFxyXG4gICAgUHVjayA9IFwiUHVja1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdpblN0YXR1cyB7XHJcbiAgICBXSU4sXHJcbiAgICBMT1NUXHJcbn1cclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVEYXRhIHtcclxuICAgIHJvdW5kTnVtYmVyOiBudW1iZXIsXHJcbiAgICBiYWxsc051bWJlcjogbnVtYmVyXHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOS8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NvbW1vbi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVBsYXllclNlcnZlciBleHRlbmRzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIHNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YToge30pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmVyIHBsYXllciB1cGRhdGVkLiBzZW5kaW5nIHBsYXllciBkYXRhIHVwZGF0ZSB0byBjbGllbnRcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgdGhpcy5kYXRhKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7QmFsbFR5cGUsIEdhbWVEYXRhfSBmcm9tIFwiLi4vY29tbW9uL3BvY2tleS1nYW1lLXNldHRpbmdzXCI7XHJcbmltcG9ydCB7UG9ja2V5U29ja2V0TWVzc2FnZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9Db25uZWN0aW9uTW9kdWxlL3BvY2tleS1jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtQb2NrZXlTdGF0ZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmVcIjtcclxuaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1V0aWxzL3RpbWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5Um9vbSB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBsYXllcnM6IFBsYXllcltdID0gW107XHJcbiAgICBwdWJsaWMgaW86IGFueTtcclxuICAgIHByaXZhdGUgZ2FtZURhdGE6IEdhbWVEYXRhID0ge3JvdW5kTnVtYmVyOiAxLCBiYWxsc051bWJlcjogN307XHJcbiAgICBwcml2YXRlIHNjb3JlVXBkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB3aGl0ZUJhbGxJblRoZUhhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb3duQmFsbEZhdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9wcG9uZW50QmFsbFNjb3JlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJvdW5kVGltZXI6IFRpbWVyO1xyXG4gICAgcHJpdmF0ZSByb3VuZFRpbWVFbGFwc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgaW86IGFueSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5wbGF5ZXIxKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnMucHVzaCh0aGlzLnBsYXllcjIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9vbSBjcmVhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91bmRUaW1lciA9IG5ldyBUaW1lcih0aGlzLm9uUm91bmRUaW1lclVwZGF0ZS5iaW5kKHRoaXMpLCB0aGlzLm9uUm91bmRUaW1lckNvbXBsZXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3VuZFRpbWVyVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9VUERBVEUsIHRoaXMucm91bmRUaW1lci5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRUaW1lckNvbXBsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9DT01QTEVURSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91bmRUaW1lRWxhcHNlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5jaGVja05leHRUdXJuKCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX1RJTUVSX0NPTVBMRVRFLCB0aGlzLnJvdW5kVGltZXIuZ2V0Q3VycmVudFRpbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnblBsYXllcihwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWE6IFwiICsgcGxheWVyKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kR2FtZVNuYXBzaG90KHBsYXllci5kYXRhLnNvY2tldElELCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5CQUxMX0lOX1RIRV9IQUxMLCAoYmFsbFR5cGU6IEJhbGxUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUocGxheWVyLmRhdGEuc29ja2V0SUQsIGJhbGxUeXBlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5PV05fQkFMTF9UT1VDSEVEX0ZJUlNULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Pd25CYWxsVG91Y2hlZEZpcnN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hFQ0tfTkVYVF9UVVJOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0VHVybigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkJBTExfV0FTX1NIT1QsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVFbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9DT01QTEVURSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29tOiBcIiArIHRoaXMuaWQgKyBcIiAtPiBwbGF5ZXIgYXNzaWduZWQ6IFwiICsgcGxheWVyLmRhdGEuc29ja2V0SUQgKyBcIiAtPiB0b3RhbCBwbGF5ZXJzOiBcIiArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicm9vbTogXCIgKyB0aGlzLmlkICsgXCIgLT4gKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRHYW1lU2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk93bkJhbGxUb3VjaGVkRmlyc3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoc29ja2V0SUQ6IHN0cmluZywgYmFsbFR5cGU6IEJhbGxUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBsYXllcjogUGxheWVyO1xyXG4gICAgICAgIGxldCBvcHBvbmVudDogUGxheWVyO1xyXG4gICAgICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5YTogUGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldElEID09IHRoaXMucGxheWVyc1swXS5kYXRhLnNvY2tldElEKSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgICBvcHBvbmVudCA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxsVHlwZSA9PSBwbGF5ZXIuZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IG9wcG9uZW50LmRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IG9wcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3Bwb25lbnQuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFsbFR5cGUgPT0gQmFsbFR5cGUuV2hpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy53aGl0ZUJhbGxJblRoZUhhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXllci5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAob3Bwb25lbnQuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja05leHRUdXJuKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodGhpcy53aGl0ZUJhbGxJblRoZUhhbGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbnRyYVwiKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vd25CYWxsRmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucm91bmRUaW1lRWxhcHNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hhbmdlQ3VycmVudFBsYXllcigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSAodGhpcy5jdXJyZW50UGxheWVyID09IHRoaXMucGxheWVyc1swXSkgPyB0aGlzLnBsYXllcnNbMV0gOiB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndoaXRlQmFsbEluVGhlSGFsbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXy5mb3JFYWNoKHRoaXMucGxheWVycywgKHBsYXllcjogUGxheWVyKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGJhbGxTb2NrZXRJRCA9PSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgLy8gICAgICAgICBwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PSBwbGF5ZXJTb2NrZXRJRCkge1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAocGxheWVyLmRhdGEuY3VycmVudFNjb3JlIDw9IDApIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kR2FtZVNuYXBzaG90KHNvY2tldElEOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic25hcHNob3QgcmVjZWl2ZWQgb24gcm9vbTogXCIgKyB0aGlzLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzWzBdLmRhdGEuc29ja2V0SUQgPT0gc29ja2V0SUQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY29yZVVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlNDT1JFX1VQREFURUQsIFt0aGlzLnBsYXllcnNbMF0uZGF0YSwgdGhpcy5wbGF5ZXJzWzFdLmRhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kR2FtZVNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5pc0ZpcnN0VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5SaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG5cclxuICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdhbWVTZXR1cCwgW3RoaXMucGxheWVyc1swXS5kYXRhLCB0aGlzLnBsYXllcnNbMV0uZGF0YSwgdGhpcy5nYW1lRGF0YV0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZW5kU3RhcnRSb3VuZC5iaW5kKHRoaXMpLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRTdGFydFJvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KDIwKTtcclxuICAgICAgICB0aGlzLnJvdW5kVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDIvMjcvMjAxOVxyXG4gKi9cclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCB7U2VydmVyfSBmcm9tIFwibm9kZS1zdGF0aWNcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0IHtQb29sfSBmcm9tIFwicGdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuaW1wb3J0IHtXaW5TdGF0dXN9IGZyb20gXCIuLi9jb21tb24vcG9ja2V5LWdhbWUtc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtQb2NrZXlSb29tfSBmcm9tIFwiLi9wb2NrZXktcm9vbVwiO1xyXG5pbXBvcnQge1BvY2tleVBsYXllclNlcnZlcn0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1zZXJ2ZXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5U2VydmVySW5kZXgge1xyXG4gICAgcHJvdGVjdGVkIGZpbGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBodHRwU2VydmVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc29ja2V0SW86IGFueTtcclxuICAgIHByb3RlY3RlZCBzb2NrZXRJc0ZyZWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFiYXNlQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2VQb29sOiBQb29sIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIHJvb21zOiBQb2NrZXlSb29tW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBwbGF5ZXJzOiBQb2NrZXlQbGF5ZXJTZXJ2ZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBwbGF5aW5nTmFtZXNwYWNlXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2VydmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlR2FtZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbmV3IFNlcnZlcignZGlzdCcsIHsgLy8gYmluIGlzIHRoZSBmb2xkZXIgY29udGFpbmluZyBvdXIgaHRtbCwgZXRjXHJcbiAgICAgICAgICAgIGNhY2hlOiAwLFx0Ly8gZG9uJ3QgY2FjaGVcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnemlwOiB0cnVlXHQvLyBnemlwIG91ciBhc3NldHNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbiAgICAgICAgLy8gY3JlYXRlIG91ciBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnNlcnZlKHJlcXVlc3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5vbignbGlzdGVuaW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2ssIHNlcnZlciBpcyBydW5uaW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVEYigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbCA9IG5ldyBQb29sKHtcclxuICAgICAgICAgICAgdXNlcjogJ25wdnN3aGdneGdzZ3hrJyxcclxuICAgICAgICAgICAgaG9zdDogJ2VjMi01NC0yMjUtOTgtMTMxLmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJyxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdkMXVrMnZucGRqbDI4cScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnNTU2ZTUwMTNlYTFkZWM1OWQyZGFhNWQ3YmZmMjIzZWMwMjhjMTZkYTRhYzU3N2RiOTRlNzhkYmM3NTQ3MTk2NScsXHJcbiAgICAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbiAgICAgICAgICAgIHNzbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igb24gaWRsZSBjbGllbnQnLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoLTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5jb25uZWN0KChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzLWEgbG9nYXQsIG1lcmdlLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJbyA9IHNvY2tldElPKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5zZXJ2ZUNsaWVudCh0cnVlKTsgLy8gdGhlIHNlcnZlciB3aWxsIHNlcnZlIHRoZSBjbGllbnQganMgZmlsZVxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8uYXR0YWNoKHRoaXMuaHR0cFNlcnZlcik7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTb2NrZXRFdmVudHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubmV3Q29ubmVjdGlvbiwgcGxheWVyLmRhdGEuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBjb25uZWN0ZWQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvL3RvZG8gYWljaSB0cmVidWllIHNhIHRlIG9jdXBpIGRlIGRpc2Nvbm5lY3QgZGFyIHNpIHBlIGNlbGFsYWx0ZSBzb2NrZXR1cmlcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gZ2V0IHNpZ25lZCBpbiBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhYmFzZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YWJhc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVBsYXllckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImEgaWVzaXQgZGUgcGUgY2FuYWx1bCBwYWNpaTogXCIgKyBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBzb2NrZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGxlZnQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC50byhyb29tKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZWZ0Um9vbSwgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc29ja2V0SW8ub24oJ2Rpc2Nvbm5lY3QnLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUGxheWVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IHNvY2tldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbm5lY3RDb3VudGVyLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgbGVmdC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB0aGlzLnNvY2tldElvLm9uKCdkaXNjb25uZWN0JywgKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIC8vc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSA9IHRoaXMuc29ja2V0SW8ub2YoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gpO1xyXG4gICAgICAgIGxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSB0aGlzLmdldFBsYXllckJ5SUQoaWQsIHNvY2tldCk7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNIICsgJyAtPiBzb21lb25lIGNvbm5lY3RlZDogJyArIHBsYXllci5kYXRhLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hNYWtlcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICAvKnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIChtc2c6IGFueSwgaWQ6IHN0cmluZywgcGFydG5lcklEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIG1zZywgaWQsIHBhcnRuZXJJRCk7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5aW5nTmFtZXNwYWNlID0gdGhpcy5zb2NrZXRJby5vZihGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVkpO1xyXG5cclxuICAgICAgICBwbGF5aW5nTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZLCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IHRoaXMuZ2V0UGxheWVyQnlJRChpZCwgc29ja2V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5Sb29tLCAocm9vbUlEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuam9pbihyb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb2NrZXlSb29tOiBQb2NrZXlSb29tID0gdGhpcy5nZXRSb29tQnlJRChyb29tSUQsIHBsYXlpbmdOYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICAgICAgcG9ja2V5Um9vbS5hc3NpZ25QbGF5ZXIocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pblJvb20sIHJvb20sIGlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pbmVkUm9vbSwgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIGpvaW4gcm9vbS4gcm9vbSBuaWNrbmFtZTogXCIgKyByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhIGllc2l0IGRlIHBlIGNhbmFsdWwgcGFjaWk6IFwiICsgc29ja2V0LmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnRvKHJvb21JRCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGVmdFJvb20sIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCAocm9vbTogYW55LCBtZXNzYWdlVHlwZTogRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMsIG1lc3NhZ2VEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PSBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5IRUxMTylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlIGZhY2UgaGVsbG91bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LnRvKHJvb20pLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCBtZXNzYWdlVHlwZSwgbWVzc2FnZURhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmRpc2Nvbm5lY3RNeVNvY2tldCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaE1ha2VyKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKG90aGVyUGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllciAhPSBvdGhlclBsYXllciAmJiBvdGhlclBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGhhdmUgYSByb29tXCIpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUlEOiBzdHJpbmcgPSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCArIFwiI1wiICsgb3RoZXJQbGF5ZXIuZGF0YS5zb2NrZXRJRDtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeUlEKGlkOiBzdHJpbmcsIHNvY2tldDogYW55KTogUG9ja2V5UGxheWVyU2VydmVyIHtcclxuICAgICAgICBsZXQgcGxheWVyQnlJRDogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBzZWFyY2hpbmc6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIHBsYXllckJ5SUQuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXJCeUlELnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllckJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb29tQnlJRChyb29tSUQ6IHN0cmluZywgaW86IGFueSk6IFBvY2tleVJvb20ge1xyXG4gICAgICAgIC8vIGxldCBwbGF5ZXJCeUlEOiBQbGF5ZXIgPSBuZXcgUGxheWVyKFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHJvb20gYnkgaWQgLT4gc2VhcmNoaW5nOiBcIiArIHJvb21JRCk7XHJcbiAgICAgICAgbGV0IHJvb21CeUlEOiBQb2NrZXlSb29tO1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zLmZvckVhY2goKHJvb206IFBvY2tleVJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT0gcm9vbUlEKSB7XHJcbiAgICAgICAgICAgICAgICByb29tQnlJRCA9IHJvb207XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcm9vbUJ5SUQpIHtcclxuICAgICAgICAgICAgcm9vbUJ5SUQgPSBuZXcgUG9ja2V5Um9vbShyb29tSUQsIGlvKTtcclxuICAgICAgICAgICAgdGhpcy5yb29tcy5wdXNoKHJvb21CeUlEKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb29tQnlJRDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJEYihwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNxbFRleHQ6IHN0cmluZyA9IFwiVVBEQVRFIHBvY2tleV90YWJsZSBTRVQgXCIgKyBkYXRhW1wiY29sdW1uXCJdICsgXCI9J1wiICsgZGF0YVtcInZhbHVlXCJdICsgXCInIFdIRVJFIHVzZXJfaWQ9J1wiICsgZGF0YVtcInVzZXJJRFwiXSArIFwiJ1wiO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVtcInR5cGVcIl0gPT0gXCJ3aW5TdGF0dXNcIikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtcInZhbHVlXCJdID09IFdpblN0YXR1cy5XSU4pIHtcclxuICAgICAgICAgICAgICAgIC8vIHNxbFRleHQgPSBcIlVQREFURSBVU0VSX1RBQkxFIFNFVCBcIiArIGRhdGFbXCJjb2x1bW5cIl0gKyBcIj0ncG9pbnRzJyArIDEwIFdIRVJFIEdJRD0nWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgICAgIHNxbFRleHQgPSAnVVBEQVRFIHB1YmxpYy5cIlVTRVJfVEFCTEVcIiBTRVQgXCJwb2ludHNcIiA9IFwicG9pbnRzXCIgKyAxMCBXSEVSRSBcIlVTRVJfVEFCTEVcIi5cIkdJRFwiID0gJyArIFwiJ1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNxbFRleHQgbGEgd2luOiBcIiArIHNxbFRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbXCJ2YWx1ZVwiXSA9PSBXaW5TdGF0dXMuTE9TVCkge1xyXG4gICAgICAgICAgICAgICAgc3FsVGV4dCA9ICdVUERBVEUgcHVibGljLlwiVVNFUl9UQUJMRVwiIFNFVCBcInBvaW50c1wiID0gXCJwb2ludHNcIiArIDEwIFdIRVJFIFwiVVNFUl9UQUJMRVwiLlwiR0lEXCIgPSAnICsgXCInWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzcWxUZXh0OiBcIiArIHNxbFRleHQsIFwidHlwZTogXCIgKyBkYXRhW1widHlwZVwiXSwgXCJ2YWx1ZTogXCIgKyBkYXRhW1widmFsdWVcIl0pO1xyXG5cclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5kYXRhYmFzZVBvb2wuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHNxbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3VtIHNlIGZhY2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllciwgZGF0YVtcInVzZXJJRFwiXSk7XHJcblxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLnN0YWNrKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JVc2VySUQocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIHVzZXJuYW1lOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIGRiIGZvciB1c2VyX2lkOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgLy8gZ2l2ZSB0aGUgcXVlcnkgYSB1bmlxdWUgbmlja25hbWVcclxuICAgICAgICAgICAgbmFtZTogJ2ZldGNoLXVzZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU0VMRUNUICogRlJPTSBwb2NrZXlfdGFibGUgV0hFUkUgVVNFUl9JRCA9ICQxJyxcclxuICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wucXVlcnkocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yb3dzWzBdID09IHVuZGVmaW5lZCB8fCByZXMucm93c1swXSA9PSBcInVuZGVmaW5lZFwiIHx8IHJlcy5yb3dzWzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIocGxheWVyLnNvY2tldCwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudXBkYXRlUGxheWVyRGF0YShyZXMucm93c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucm93c1swXSk7IC8vIFsnQnJpYW4nLCAnQ2FybHNvbiddXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdVc2VyKHBsYXllcjogUGxheWVyLCB1c2VybmFtZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBuZXcgdXNlcjogXCIgKyB1c2VybmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3VXNlclF1ZXJ5ID1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NyZWF0ZS1uZXctdXNlcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSU5TRVJUIElOVE8gcG9ja2V5X3RhYmxlKHVzZXJfaWQpIFZBTFVFUygkMSknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLnF1ZXJ5KGNyZWF0ZU5ld1VzZXJRdWVyeSlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyhcIm5ldyB1c2VyIGNyZWF0ZWQuIHVzZXIgc2F2ZWQgaW50byBkYlwiKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldElvLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsIHJlcy5yb3dzWzBdKTsqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIuc29ja2V0LCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5nYW1lRW5naW5lID0gbmV3IFBvY2tleUdhbWVFbmdpbmVGb3JTZXJ2ZXIoe3RyYWNlTGV2ZWw6IFRyYWNlLlRSQUNFX05PTkV9KTtcclxuICAgICAgICAgdGhpcy5zZXJ2ZXJFbmdpbmUgPSBuZXcgUG9ja2V5U2VydmVyRW5naW5lKHRoaXMuc29ja2V0SW8sIHRoaXMuZ2FtZUVuZ2luZSwge2RlYnVnOiB7fSwgdXBkYXRlUmF0ZTogNn0pO1xyXG4gICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgICAvLyB0aGlzLnNlcnZlckVuZ2luZS5zdGFydCgpO1xyXG4gICAgIH0qL1xyXG59XHJcblxyXG5uZXcgUG9ja2V5U2VydmVySW5kZXgoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=