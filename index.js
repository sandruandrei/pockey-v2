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

_defineProperty(PockeySocketMessages, "PUCK_IN_THE_HALL", "PockeySocketMessages." + "PUCK_IN_THE_HALL");

_defineProperty(PockeySocketMessages, "SCORE_UPDATED", "PockeySocketMessages." + "SCORE_UPDATED");

_defineProperty(PockeySocketMessages, "CHECK_NEXT_TURN", "PockeySocketMessages." + "CHECK_NEXT_TURN");

_defineProperty(PockeySocketMessages, "CHANGE_STATE", "PockeySocketMessages." + "CHANGE_STATE");

_defineProperty(PockeySocketMessages, "OWN_BALL_TOUCHED_FIRST", "PockeySocketMessages." + "OWN_BALL_TOUCHED_FIRST");

_defineProperty(PockeySocketMessages, "ROUND_TIMER_UPDATE", "PockeySocketMessages." + "ROUND_TIMER_UPDATE");

_defineProperty(PockeySocketMessages, "HIDE_TIMER", "PockeySocketMessages." + "HIDE_TIMER");

_defineProperty(PockeySocketMessages, "BALL_WAS_SHOT", "PockeySocketMessages." + "BALL_WAS_SHOT");

_defineProperty(PockeySocketMessages, "ALLOCATED_TIME_ELAPSED", "PockeySocketMessages." + "ALLOCATED_TIME_ELAPSED");

_defineProperty(PockeySocketMessages, "ROUND_SCREEN_TIMER_UPDATE", "PockeySocketMessages." + "ROUND_SCREEN_TIMER_UPDATE");

_defineProperty(PockeySocketMessages, "MATCH_FINISHED", "PockeySocketMessages." + "MATCH_FINISHED");

_defineProperty(PockeySocketMessages, "EXIT_SERVER_ROOM", "PockeySocketMessages." + "EXIT_SERVER_ROOM");

_defineProperty(PockeySocketMessages, "ROOM_CLOSED", "PockeySocketMessages." + "ROOM_CLOSED");

/***/ }),

/***/ "./src/client/Modules/GameModule/StateMachine/pockey-state-machine.ts":
/*!****************************************************************************!*\
  !*** ./src/client/Modules/GameModule/StateMachine/pockey-state-machine.ts ***!
  \****************************************************************************/
/*! exports provided: PockeyStates, PockeyStateMachine */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyStates", function() { return PockeyStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PockeyStateMachine", function() { return PockeyStateMachine; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typestate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typestate */ "./src/client/Modules/GameModule/StateMachine/typestate.ts");
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
      this.fsm.from(PockeyStates.onEndTurn).to(PockeyStates.onPrepareRoundTwo);
      this.fsm.from(PockeyStates.onWatch).to(PockeyStates.onPrepareRoundTwo);
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

/***/ "./src/client/Modules/GameModule/StateMachine/typestate.ts":
/*!*****************************************************************!*\
  !*** ./src/client/Modules/GameModule/StateMachine/typestate.ts ***!
  \*****************************************************************/
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

      this.currentTime = i;
      this.onUpdateCallback(); //callback = callback || function(){};

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

/***/ "./src/common/pockey-value-objects.ts":
/*!********************************************!*\
  !*** ./src/common/pockey-value-objects.ts ***!
  \********************************************/
/*! exports provided: RoundCompleteType, BallType, WinStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundCompleteType", function() { return RoundCompleteType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BallType", function() { return BallType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinStatus", function() { return WinStatus; });
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
var RoundCompleteType;

(function (RoundCompleteType) {
  RoundCompleteType[RoundCompleteType["matchComplete"] = 0] = "matchComplete";
  RoundCompleteType[RoundCompleteType["roundComplete"] = 1] = "roundComplete";
  RoundCompleteType[RoundCompleteType["playerDisconnected"] = 2] = "playerDisconnected";
  RoundCompleteType[RoundCompleteType["rematch"] = 3] = "rematch";
  RoundCompleteType[RoundCompleteType["opponentFound"] = 4] = "opponentFound";
})(RoundCompleteType || (RoundCompleteType = {}));

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
/* harmony import */ var _client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client/Modules/ConnectionModule/pockey-connection-channels-and-messages */ "./src/client/Modules/ConnectionModule/pockey-connection-channels-and-messages.ts");
/* harmony import */ var _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client/Modules/GameModule/StateMachine/pockey-state-machine */ "./src/client/Modules/GameModule/StateMachine/pockey-state-machine.ts");
/* harmony import */ var _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/qFramework/Utils/timer */ "./src/client/qFramework/Utils/timer.ts");
/* harmony import */ var _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/pockey-value-objects */ "./src/common/pockey-value-objects.ts");
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
  function PockeyRoom(id, io, selfDelete) {
    _classCallCheck(this, PockeyRoom);

    this.selfDelete = selfDelete;

    _defineProperty(this, "id", "");

    _defineProperty(this, "players", []);

    _defineProperty(this, "io", void 0);

    _defineProperty(this, "gameData", {
      roundNumber: 1,
      type: _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["RoundCompleteType"].opponentFound
    });

    _defineProperty(this, "scoreUpdated", false);

    _defineProperty(this, "whiteBallInTheHall", false);

    _defineProperty(this, "ownBallFault", false);

    _defineProperty(this, "opponentBallScored", false);

    _defineProperty(this, "currentPlayer", void 0);

    _defineProperty(this, "roundTimer", void 0);

    _defineProperty(this, "roundScreenTimer", void 0);

    _defineProperty(this, "roundDuration", 20);

    _defineProperty(this, "roundFinished", false);

    _defineProperty(this, "matchFinished", false);

    this.id = id;
    this.io = io; // this.players.push(this.player1);
    // this.players.push(this.player2);

    console.log("room created");
    this.roundTimer = new _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.onRoundTimerUpdate.bind(this), this.onRoundTimerComplete.bind(this));
    this.roundScreenTimer = new _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.onRoundScreenUpdate.bind(this), this.onRoundScreenComplete.bind(this));
  }

  _createClass(PockeyRoom, [{
    key: "onRoundScreenUpdate",
    value: function onRoundScreenUpdate() {
      this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].ROUND_SCREEN_TIMER_UPDATE, this.roundScreenTimer.getCurrentTime());
    }
  }, {
    key: "onRoundScreenComplete",
    value: function onRoundScreenComplete() {
      this.sendStartRound();
    }
  }, {
    key: "onRoundTimerUpdate",
    value: function onRoundTimerUpdate() {
      this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].ROUND_TIMER_UPDATE, this.roundTimer.getCurrentTime());
    }
  }, {
    key: "onRoundTimerComplete",
    value: function onRoundTimerComplete() {
      this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].HIDE_TIMER);
      this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].ALLOCATED_TIME_ELAPSED); // this.roundTimeElapsed = true;
      // this.players[0].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.players[1].socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.checkNextTurn();
      // this.currentPlayer.socket.emit(PockeySocketMessages.CHANGE_STATE, PockeyStates.onWatch);
      // this.io.to(this.id).emit(PockeySocketMessages.HIDE_TIMER, this.roundTimer.getCurrentTime());
    }
  }, {
    key: "assignPlayer",
    value: function assignPlayer(player) {
      var _this = this;

      player.data.roundsWon = 0;
      player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, function (data) {
        // console.log("playa: " + player);
        _this.sendGameSnapshot(player.data.socketID, data);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].EXIT_SERVER_ROOM, function () {
        if (player == _this.players[0]) {
          _this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].EXIT_SERVER_ROOM);
        } else {
          _this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].EXIT_SERVER_ROOM);
        }

        _this.selfDelete(_this);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].BALL_IN_THE_HALL, function (ballType) {
        _this.updateScore(player.data.socketID, ballType);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].PUCK_IN_THE_HALL, function (ballType) {
        _this.updateScore(player.data.socketID, ballType, true);
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].OWN_BALL_TOUCHED_FIRST, function () {
        _this.onOwnBallTouchedFirst();
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHECK_NEXT_TURN, function () {
        _this.checkNextTurn();
      });
      player.socket.on(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].BALL_WAS_SHOT, function () {
        // this.roundTimeElapsed = false;
        _this.roundTimer.stop();

        _this.io.to(_this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].HIDE_TIMER);
      });
      this.players.push(player);
      console.log("room: " + this.id + " -> player assigned: " + player.data.socketID + " -> total players: " + this.players.length); // console.log("room: " + this.id + " -> );

      if (this.players.length == 2) {
        this.sendFirstRoundSetup();
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
      var isPuckGoal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var player;
      var opponent;
      var pointsScored = 1;

      if (isPuckGoal) {
        pointsScored = 2;
      } // _.forEach(this.players, (playa: Player) => {


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

        player.data.currentScore -= pointsScored;
        this.scoreUpdated = true;
      } else if (ballType == opponent.data.type) {
        if (this.currentPlayer == opponent) {
          this.ownBallFault = true;
        } else {
          this.opponentBallScored = true;
        }

        opponent.data.currentScore -= pointsScored;
        this.scoreUpdated = true;
      } else if (ballType == _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].White) {
        this.whiteBallInTheHall = true;
      }

      if (player.data.currentScore <= 0) {
        this.roundFinished = true;
        player.data.roundsWon++;

        if (player.data.roundsWon == 2) {
          this.matchFinished = true;
        }
      } else if (opponent.data.currentScore <= 0) {
        this.roundFinished = true;
        opponent.data.roundsWon++;

        if (opponent.data.roundsWon == 2) {
          this.matchFinished = true;
        }
      }
    }
  }, {
    key: "checkNextTurn",
    value: function checkNextTurn() {
      // this.roundTimer.stop();
      if (this.matchFinished) {
        this.gameData.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["RoundCompleteType"].matchComplete;

        if (this.gameData.leftPlayerData == this.players[0].data.socketID) {
          this.gameData.leftPlayerData = this.players[0].data;
          this.gameData.rightPlayerData = this.players[1].data;
        } else {
          this.gameData.leftPlayerData = this.players[1].data;
          this.gameData.rightPlayerData = this.players[0].data;
        }

        this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].MATCH_FINISHED, this.gameData);
      } else if (this.roundFinished) {
        this.gameData.roundNumber++;

        if (this.gameData.roundNumber == 2) {
          this.resetTurnData();
          this.roundFinished = false;
          this.sendSecondRoundSetup();
        } // this.io.to(this.id).emit(PockeySocketMessages.ROUND_FINISHED, this.gameData);
        // this.io.to(this.id).emit(PockeySocketMessages.ROUND_FINISHED);

      } else if (this.whiteBallInTheHall) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else if (this.ownBallFault) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRepositionWhiteBall);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else if (!this.opponentBallScored) {
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
        this.changeCurrentPlayer();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      } else {
        this.resetTurnData();
        this.currentPlayer.socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        this.currentPlayer.socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.roundTimer.start(this.roundDuration);
      }
    }
  }, {
    key: "changeCurrentPlayer",
    value: function changeCurrentPlayer() {
      this.currentPlayer = this.currentPlayer == this.players[0] ? this.players[1] : this.players[0];
      this.resetTurnData();
    }
  }, {
    key: "resetTurnData",
    value: function resetTurnData() {
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
        this.io.to(this.id).emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].SCORE_UPDATED, [this.players[0].data, this.players[1].data]);
      }
    }
  }, {
    key: "sendFirstRoundSetup",
    value: function sendFirstRoundSetup() {
      this.players[0].isFirstToStart = true;
      this.currentPlayer = this.players[0];
      this.players[0].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Left;
      this.players[0].data.currentScore = 7;
      this.players[0].data.roundsWon = 0;
      this.gameData.leftPlayerData = this.players[0].data;
      this.players[1].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Right;
      this.players[1].data.currentScore = 7;
      this.players[1].data.roundsWon = 0;
      this.gameData.rightPlayerData = this.players[1].data;
      this.io.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].gameSetup, this.gameData);
      setTimeout(this.sendStartRound.bind(this), 3000);
    }
  }, {
    key: "sendSecondRoundSetup",
    value: function sendSecondRoundSetup() {
      this.gameData.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["RoundCompleteType"].roundComplete;
      this.currentPlayer = this.players[1];
      this.players[1].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Left;
      this.players[1].data.currentScore = 7;
      this.gameData.leftPlayerData = this.players[1].data;
      this.players[0].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Right;
      this.players[0].data.currentScore = 7;
      this.gameData.rightPlayerData = this.players[0].data;
      this.io.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].gameSetup, this.gameData);
      this.roundScreenTimer.start(5);
    }
  }, {
    key: "sendStartRound",
    value: function sendStartRound() {
      if (this.gameData.roundNumber == 1) {
        if (this.players[0].isFirstToStart) {
          this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
          this.players[0].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
          this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        } else {
          this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
          this.players[1].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
          this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        }
      } else if (this.gameData.roundNumber == 2) {
        if (this.players[1] == this.currentPlayer) {
          this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
          this.players[1].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
          this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        } else {
          this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
          this.players[0].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
          this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
        }
      }

      this.roundTimer.start(this.roundDuration);
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
/* harmony import */ var _pockey_room__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pockey-room */ "./src/server/pockey-room.ts");
/* harmony import */ var _pockey_player_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pockey-player-server */ "./src/server/pockey-player-server.ts");
/* harmony import */ var _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/pockey-value-objects */ "./src/common/pockey-value-objects.ts");
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
        var player = new _pockey_player_server__WEBPACK_IMPORTED_MODULE_7__["PockeyPlayerServer"]();
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
      var playerByID = new _pockey_player_server__WEBPACK_IMPORTED_MODULE_7__["PockeyPlayerServer"](); // console.log("get player by id -> searching: " + id);

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
        roomByID = new _pockey_room__WEBPACK_IMPORTED_MODULE_6__["PockeyRoom"](roomID, io, this.deleteRoom.bind(this));
        this.rooms.push(roomByID);
      }

      return roomByID;
    }
  }, {
    key: "deleteRoom",
    value: function deleteRoom(roomToDelete) {
      var index = this.rooms.indexOf(roomToDelete, 0);

      if (index > -1) {
        this.rooms.splice(index, 1);
      }

      console.log("room deleted");
    }
  }, {
    key: "updateUserDb",
    value: function updateUserDb(player, data) {
      var _this4 = this;

      var sqlText = "UPDATE pockey_table SET " + data["column"] + "='" + data["value"] + "' WHERE user_id='" + data["userID"] + "'";

      if (data["type"] == "winStatus") {
        if (data["value"] == _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_8__["WinStatus"].WIN) {
          // sqlText = "UPDATE USER_TABLE SET " + data["column"] + "='points' + 10 WHERE GID='Yojimbo'";
          sqlText = 'UPDATE public."USER_TABLE" SET "points" = "points" + 10 WHERE "USER_TABLE"."GID" = ' + "'Yojimbo'"; // console.log("sqlText la win: " + sqlText);
        } else if (data["value"] == _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_8__["WinStatus"].LOST) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9HYW1lTW9kdWxlL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L01vZHVsZXMvR2FtZU1vZHVsZS9TdGF0ZU1hY2hpbmUvdHlwZXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3FGcmFtZXdvcmsvVXRpbHMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wb2NrZXktdmFsdWUtb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1wbGF5ZXItc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktc2VydmVyLWluZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXN0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOlsiUG9ja2V5U29ja2V0TWVzc2FnZXMiLCJQb2NrZXlTdGF0ZXMiLCJQb2NrZXlTdGF0ZU1hY2hpbmUiLCJmc20iLCJmcm9tIiwib25Mb2FkIiwidG8iLCJvbk1haW5NZW51Iiwib25SZWFycmFuZ2VTdGljayIsIm9uU2VhcmNoRm9yUGFydG5lciIsIm9uUHJlcGFyZVJvdW5kT25lIiwib25XYXRjaCIsIm9uRW5kVHVybiIsIm9uUHJlcGFyZVJvdW5kVHdvIiwib25Sb3VuZEVuZCIsIm9uUHJlcGFyZVJvdW5kVGhyZWUiLCJvblJlcG9zaXRpb25XaGl0ZUJhbGwiLCJvbkVuZE1hdGNoIiwib25TaG9vdCIsImRlbGF5ZWRTdGF0ZSIsIm5leHRTdGF0ZSIsIkluc3RhbmNlIiwiY2hhbmdlU3RhdGUiLCJfIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJpbnRGc21DdXJyZW50U3RhdGUiLCJnbyIsInMiLCJjdXJyZW50U3RhdGUiLCJnZXRDdXJyZW50U3RhdGVOYW1lIiwiaW5zdGFuY2UiLCJpbml0aWFsaXplZCIsIkZpbml0ZVN0YXRlTWFjaGluZSIsIkluaXRpYWxpemVTdGF0ZXMiLCJUcmFuc2l0aW9ucyIsInN0YXRlcyIsInRvU3RhdGVzIiwiYWRkVHJhbnNpdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJUcmFuc2l0aW9uRnVuY3Rpb24iLCJzdGFydFN0YXRlIiwiYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiX3N0YXJ0U3RhdGUiLCJfYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiZmNuIiwiZnJvbVN0YXRlcyIsImZvckVhY2giLCJfY2FuR28iLCJfdHJhbnNpdGlvbkZ1bmN0aW9ucyIsImNhbGxiYWNrIiwia2V5IiwidG9TdHJpbmciLCJfb25DYWxsYmFja3MiLCJfZW50ZXJDYWxsYmFja3MiLCJfZXhpdENhbGxiYWNrcyIsIl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrIiwiX3RyYW5zaXRpb24iLCJzb21lIiwidGYiLCJmcm9tU3RhdGUiLCJ0b1N0YXRlIiwiX3ZhbGlkVHJhbnNpdGlvbiIsImV2ZW50IiwiY2FuR28iLCJFcnJvciIsIl90cmFuc2l0aW9uVG8iLCJjYW5FeGl0IiwicmVkdWNlIiwiYWNjdW0iLCJuZXh0IiwiY2FsbCIsImNhbkVudGVyIiwib2xkIiwib25UcmFuc2l0aW9uIiwiRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcyIsIkZyYW1ld29ya1NvY2tldEV2ZW50cyIsIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzIiwiVGltZXIiLCJvblVwZGF0ZUNhbGxiYWNrIiwib25Db21wbGV0ZUNhbGxiYWNrIiwiaSIsImN1cnJlbnRUaW1lIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJQbGF5ZXIiLCJzb2NrZXQiLCJuZXdTb2NrZXRJRCIsImlkIiwicmVwbGFjZSIsIlNFQVJDSCIsIlBMQVkiLCJkYXRhIiwic29ja2V0SUQiLCJ1c2VybmFtZURhdGEiLCJhdmF0YXIiLCJjb2xvciIsImRlY2FsIiwiZmVsdCIsInBsYXllcl9sZXZlbCIsInN0aWNrIiwidG90YWxfcG9pbnRzIiwibmlja25hbWUiLCJ1c2VyX2lkIiwiZmlyc3RfbG9naW5fZGF0ZSIsInR5cGUiLCJlbWl0Iiwic25hcHNob3RVcGRhdGUiLCJSb3VuZENvbXBsZXRlVHlwZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInNlbGZEZWxldGUiLCJyb3VuZE51bWJlciIsIm9wcG9uZW50Rm91bmQiLCJyb3VuZFRpbWVyIiwib25Sb3VuZFRpbWVyVXBkYXRlIiwiYmluZCIsIm9uUm91bmRUaW1lckNvbXBsZXRlIiwicm91bmRTY3JlZW5UaW1lciIsIm9uUm91bmRTY3JlZW5VcGRhdGUiLCJvblJvdW5kU2NyZWVuQ29tcGxldGUiLCJST1VORF9TQ1JFRU5fVElNRVJfVVBEQVRFIiwiZ2V0Q3VycmVudFRpbWUiLCJzZW5kU3RhcnRSb3VuZCIsIlJPVU5EX1RJTUVSX1VQREFURSIsIkhJREVfVElNRVIiLCJjdXJyZW50UGxheWVyIiwiQUxMT0NBVEVEX1RJTUVfRUxBUFNFRCIsInBsYXllciIsInJvdW5kc1dvbiIsIm9uIiwic2VuZEdhbWVTbmFwc2hvdCIsIkVYSVRfU0VSVkVSX1JPT00iLCJwbGF5ZXJzIiwiQkFMTF9JTl9USEVfSEFMTCIsImJhbGxUeXBlIiwidXBkYXRlU2NvcmUiLCJQVUNLX0lOX1RIRV9IQUxMIiwiT1dOX0JBTExfVE9VQ0hFRF9GSVJTVCIsIm9uT3duQmFsbFRvdWNoZWRGaXJzdCIsIkNIRUNLX05FWFRfVFVSTiIsImNoZWNrTmV4dFR1cm4iLCJCQUxMX1dBU19TSE9UIiwic3RvcCIsImxlbmd0aCIsInNlbmRGaXJzdFJvdW5kU2V0dXAiLCJvd25CYWxsRmF1bHQiLCJpc1B1Y2tHb2FsIiwib3Bwb25lbnQiLCJwb2ludHNTY29yZWQiLCJvcHBvbmVudEJhbGxTY29yZWQiLCJjdXJyZW50U2NvcmUiLCJzY29yZVVwZGF0ZWQiLCJXaGl0ZSIsIndoaXRlQmFsbEluVGhlSGFsbCIsInJvdW5kRmluaXNoZWQiLCJtYXRjaEZpbmlzaGVkIiwiZ2FtZURhdGEiLCJtYXRjaENvbXBsZXRlIiwibGVmdFBsYXllckRhdGEiLCJyaWdodFBsYXllckRhdGEiLCJNQVRDSF9GSU5JU0hFRCIsInJlc2V0VHVybkRhdGEiLCJzZW5kU2Vjb25kUm91bmRTZXR1cCIsIkNIQU5HRV9TVEFURSIsImNoYW5nZUN1cnJlbnRQbGF5ZXIiLCJzdGFydFNlbmRpbmdTbmFwc2hvdHMiLCJzdGFydCIsInJvdW5kRHVyYXRpb24iLCJTQ09SRV9VUERBVEVEIiwiaXNGaXJzdFRvU3RhcnQiLCJMZWZ0IiwiUmlnaHQiLCJnYW1lU2V0dXAiLCJzZXRUaW1lb3V0Iiwicm91bmRDb21wbGV0ZSIsIlBvY2tleVNlcnZlckluZGV4IiwiaW5pdGlhbGl6ZVNlcnZlciIsImluaXRpYWxpemVEYiIsImNyZWF0ZVNvY2tldCIsImZpbGUiLCJTZXJ2ZXIiLCJjYWNoZSIsImd6aXAiLCJwb3J0IiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJodHRwU2VydmVyIiwiaHR0cCIsInJlcXVlc3QiLCJyZXNwb25zZSIsImFkZExpc3RlbmVyIiwic2VydmUiLCJyZXN1bWUiLCJsaXN0ZW4iLCJkYXRhYmFzZVBvb2wiLCJQb29sIiwidXNlciIsImhvc3QiLCJkYXRhYmFzZSIsInBhc3N3b3JkIiwic3NsIiwiZXJyIiwiZXJyb3IiLCJleGl0IiwiY29ubmVjdCIsImRhdGFiYXNlQ29ubmVjdGVkIiwic29ja2V0SW8iLCJzb2NrZXRJTyIsInNlcnZlQ2xpZW50IiwiYXR0YWNoIiwiaGFuZGxlU29ja2V0RXZlbnRzIiwic2V0U29ja2V0IiwibmV3Q29ubmVjdGlvbiIsImdldFNpZ25lZEluVXNlckRhdGEiLCJ1c2VybmFtZSIsImNoZWNrRm9yVXNlcklEIiwidXBkYXRlUGxheWVyRGF0YWJhc2UiLCJ1cGRhdGVVc2VyRGIiLCJpbmRleCIsInNwbGljZSIsInNlbGZEZXN0cm95IiwibG9va2luZ0ZvclBhcnRuZXJOYW1lc3BhY2UiLCJvZiIsImdldFBsYXllckJ5SUQiLCJpc0xvb2tpbmdGb3JQYXJ0bmVyIiwibWF0Y2hNYWtlciIsInBsYXlpbmdOYW1lc3BhY2UiLCJqb2luUm9vbSIsInJvb21JRCIsImpvaW4iLCJwb2NrZXlSb29tIiwiZ2V0Um9vbUJ5SUQiLCJhc3NpZ25QbGF5ZXIiLCJqb2luZWRSb29tIiwibGVmdFJvb20iLCJkaXNjb25uZWN0IiwicHJpdmF0ZU1lc3NhZ2UiLCJyb29tIiwibWVzc2FnZVR5cGUiLCJtZXNzYWdlRGF0YSIsIkhFTExPIiwiYnJvYWRjYXN0IiwiZGlzY29ubmVjdE15U29ja2V0Iiwib3RoZXJQbGF5ZXIiLCJyb29tQ3JlYXRlZCIsInBsYXllckJ5SUQiLCJyb29tQnlJRCIsInJvb21zIiwiZGVsZXRlUm9vbSIsInJvb21Ub0RlbGV0ZSIsImluZGV4T2YiLCJzcWxUZXh0IiwiV0lOIiwiTE9TVCIsImNsaWVudCIsInF1ZXJ5IiwicmVzIiwicmVsZWFzZSIsImNhdGNoIiwiZSIsInN0YWNrIiwibmFtZSIsInRleHQiLCJ2YWx1ZXMiLCJ0aGVuIiwicm93cyIsInVuZGVmaW5lZCIsImNyZWF0ZU5ld1VzZXIiLCJjcmVhdGVOZXdVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sSUFBTUEsb0JBQWI7QUFBQTtBQUFBOztnQkFBYUEsb0IsV0FDcUIsMEJBQTBCLE87O2dCQUQvQ0Esb0IsY0FHd0IsMEJBQTBCLFU7O2dCQUhsREEsb0IsZUFJeUIsMEJBQTBCLFc7O2dCQUpuREEsb0IsdUJBS2lDLDBCQUEwQixtQjs7Z0JBTDNEQSxvQixzQkFNZ0MsMEJBQTBCLGtCOztnQkFOMURBLG9CLDBCQU9vQywyQkFBMkIsc0I7O2dCQVAvREEsb0Isc0JBV2dDLDBCQUEwQixrQjs7Z0JBWDFEQSxvQixzQkFZZ0MsMEJBQTBCLGtCOztnQkFaMURBLG9CLG1CQWE2QiwwQkFBMEIsZTs7Z0JBYnZEQSxvQixxQkFjK0Is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STtBQUNSblAsZUFBTyxDQUFDMEwsS0FBUixDQUFjeUQsQ0FBQyxDQUFDQyxLQUFoQjtBQUNILE9BVEw7QUFVSDtBQW5WTDs7QUFBQTtBQUFBO0FBdVZBLElBQUl0RixpQkFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqWEEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY2xhc3MgUG9ja2V5U29ja2V0TWVzc2FnZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBXQVRDSDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiV0FUQ0hcIjtcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgU0NPUkVfVVBEQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJTQ09SRV9VUERBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9QUE9ORU5UXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFlPVVJfVFVSTjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiWU9VUl9UVVJOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UX1NFVFRJTkdTOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9TRVRUSU5HU1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRU1BVENIOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9SRU1BVENIXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIERJU0NPTk5FQ1RfTVlfU09DS0VUOiBzdHJpbmcgPSBcIkNvbm5lY3Rpb25TaWduYWxzVHlwZS5cIiArICdESVNDT05ORUNUX01ZX1NPQ0tFVCc7XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRVNUQVJUOiBhbnk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBCQUxMX0lOX1RIRV9IQUxMOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJCQUxMX0lOX1RIRV9IQUxMXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFBVQ0tfSU5fVEhFX0hBTEw6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlBVQ0tfSU5fVEhFX0hBTExcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU0NPUkVfVVBEQVRFRDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiU0NPUkVfVVBEQVRFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBDSEVDS19ORVhUX1RVUk46IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkNIRUNLX05FWFRfVFVSTlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBDSEFOR0VfU1RBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkNIQU5HRV9TVEFURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPV05fQkFMTF9UT1VDSEVEX0ZJUlNUOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPV05fQkFMTF9UT1VDSEVEX0ZJUlNUXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EX1RJTUVSX1VQREFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiUk9VTkRfVElNRVJfVVBEQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhJREVfVElNRVI6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkhJREVfVElNRVJcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQkFMTF9XQVNfU0hPVDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQkFMTF9XQVNfU0hPVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBBTExPQ0FURURfVElNRV9FTEFQU0VEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJBTExPQ0FURURfVElNRV9FTEFQU0VEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPVU5EX1NDUkVFTl9USU1FUl9VUERBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlJPVU5EX1NDUkVFTl9USU1FUl9VUERBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgTUFUQ0hfRklOSVNIRUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk1BVENIX0ZJTklTSEVEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEVYSVRfU0VSVkVSX1JPT006IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkVYSVRfU0VSVkVSX1JPT01cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9PTV9DTE9TRUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlJPT01fQ0xPU0VEXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Zpbml0ZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vdHlwZXN0YXRlXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb2NrZXlTdGF0ZXMge1xyXG4gICAgLyowKi9vbkxvYWQsXHJcbiAgICAvKjEqL29uTWFpbk1lbnUsXHJcbiAgICAvKjIqL29uU3RhcnQsXHJcbiAgICAvKjMqL29uUm91bmRFbmQsXHJcbiAgICAvKjQqL29uRGVmaW5lQ2xpZW50LFxyXG4gICAgLyo1Ki9vblNlYXJjaEZvclBhcnRuZXIsXHJcbiAgICAvKjYqL29uV2F0Y2gsXHJcbiAgICAvKjcqL29uUmVhcnJhbmdlU3RpY2ssXHJcbiAgICAvKjgqL29uUmVwb3NpdGlvbldoaXRlQmFsbCxcclxuICAgIC8qOSovb25TaG9vdCxcclxuICAgIC8qMTAqL29uRW5kVHVybixcclxuICAgIC8qMTEqL29uRW5kTWF0Y2gsXHJcbiAgICAvKjEyKi9vblByZXBhcmVSb3VuZE9uZSxcclxuICAgIC8qMTMqL29uUHJlcGFyZVJvdW5kVHdvLFxyXG4gICAgLyoxNCovb25QcmVwYXJlUm91bmRUaHJlZSxcclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gUG9ja2V5U3RhdGVzIHtcclxuLy8gICAgIFN0YXJ0R2FtZSxcclxuLy8gICAgIFBsYXllclR1cm4sXHJcbi8vICAgICBQbGF5ZXJUdXJuRmlyc3RCYWxsLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuRmlyc3RCYWxsLFxyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0IHRoZSBGU00gd2l0aCB0aGUgaW5pdGFsIHN0YXRlLCBpbiB0aGlzIGNhc2UgdGhlIGVsZXZhdG9yIHN0YXJ0cyB3aXRoIGl0cyBkb29ycyBvcGVuZWRcclxuICAgIHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2NrZXlTdGF0ZU1hY2hpbmU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U3RhdGU6IGFueTtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRTdGF0ZTphbnk7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlKCk6IFBvY2tleVN0YXRlTWFjaGluZSB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlID0gbmV3IFBvY2tleVN0YXRlTWFjaGluZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtID0gbmV3IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+KFBvY2tleVN0YXRlcy5vbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuSW5pdGlhbGl6ZVN0YXRlcygpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzOiBzdHJpbmcgPSBQb2NrZXlTdGF0ZXNbUG9ja2V5U3RhdGVzLm9uTG9hZF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIHMsIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkxvYWQpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25NYWluTWVudSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3byk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25NYWluTWVudSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uU2hvb3QpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheVN0YXRlQ2hhbmdpbmcoZGVsYXllZFN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTdGF0ZSA9IFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5jdXJyZW50U3RhdGU7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUgPSBkZWxheWVkU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZURlbGF5ZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5jaGFuZ2VTdGF0ZSh0aGlzLm5leHRTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNTdGF0ZUluUXVldWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHRoaXMubmV4dFN0YXRlKSAmJiBfLmlzTnVsbCh0aGlzLm5leHRTdGF0ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIVBvY2tleVN0YXRlc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBTdGF0ZU1hY2hpbmUgLT4gc3RhdGUgZG9lcyBub3QgZXhpc3Q6IFwiICsgc3RhdGUsIFwiY29sb3I6ICMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmOTkwMFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0ZSA9PSBQb2NrZXlTdGF0ZXMub25TaG9vdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc3RhdGU9PT09PT09XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50RnNtQ3VycmVudFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzdGF0ZT09PT09PT1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmdvKHN0YXRlKTtcclxuICAgICAgICB0aGlzLnByaW50RnNtQ3VycmVudFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRTdGF0ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnNtKSB7XHJcbiAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzLmZzbSwgKHN0YXRlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PSB0aGlzLmZzbS5jdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBzID0gUG9ja2V5U3RhdGVzW3N0YXRlXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludEZzbUN1cnJlbnRTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmN1cnJlbnRTdGF0ZSA9PSBQb2NrZXlTdGF0ZXMub25TaG9vdCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IGJsYWNrOyBjb2xvcjogeWVsbG93OyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGNvbG9yOiAjZjY1NDZhOyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IHllbGxvdzsgY29sb3I6ICNmNjU0NmE7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuICAgIH1cclxufSIsIlxyXG4gICAvKipcclxuICAgICogVHJhbnNpdGlvbiBncm91cGluZyB0byBmYWNpbGlhdGUgZmx1ZW50IGFwaVxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgY29uc3RydWN0b3IocHVibGljIGZzbTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+KSB7IH1cclxuXHJcbiAgICAgIHB1YmxpYyBmcm9tU3RhdGVzOiBUW107XHJcbiAgICAgIHB1YmxpYyB0b1N0YXRlczogVFtdO1xyXG5cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTcGVjaWZ5IHRoZSBlbmQgc3RhdGUocykgb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgdG8oLi4uc3RhdGVzOiBUW10pIHtcclxuICAgICAgICAgdGhpcy50b1N0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICAgdGhpcy5mc20uYWRkVHJhbnNpdGlvbnModGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNwZWNpZnkgdGhhdCBhbnkgc3RhdGUgaW4gdGhlIHN0YXRlIGVudW0gaXMgdmFsdWVcclxuICAgICAgICogVGFrZXMgdGhlIHN0YXRlIGVudW0gYXMgYW4gYXJndW1lbnRcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyB0b0FueShzdGF0ZXM6IGFueSkge1xyXG4gICAgICAgICB2YXIgdG9TdGF0ZXM6IFRbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKHZhciBzIGluIHN0YXRlcykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVzLmhhc093blByb3BlcnR5KHMpKSB7XHJcbiAgICAgICAgICAgICAgIHRvU3RhdGVzLnB1c2goKDxUPnN0YXRlc1tzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMudG9TdGF0ZXMgPSB0b1N0YXRlcztcclxuICAgICAgICAgdGhpcy5mc20uYWRkVHJhbnNpdGlvbnModGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25GdW5jdGlvbjxUPiB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxUPiwgcHVibGljIGZyb206IFQsIHB1YmxpYyB0bzogVCkgeyB9XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qKlxyXG4gICAgKiBBIHNpbXBsZSBmaW5pdGUgc3RhdGUgbWFjaGluZSBpbXBsZW1lbnRlZCBpbiBUeXBlU2NyaXB0LCB0aGUgdGVtcGxhdGVkIGFyZ3VtZW50IGlzIG1lYW50IHRvIGJlIHVzZWRcclxuICAgICogd2l0aCBhbiBlbnVtZXJhdGlvbi5cclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICBwdWJsaWMgY3VycmVudFN0YXRlOiBUO1xyXG4gICAgICBwcml2YXRlIF9zdGFydFN0YXRlOiBUO1xyXG4gICAgICBwcml2YXRlIF9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb246IGJvb2xlYW47XHJcbiAgICAgIHByaXZhdGUgX3RyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbjxUPltdID0gW107XHJcbiAgICAgIHByaXZhdGUgX29uQ2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKGZyb206IFQsIGV2ZW50PzogYW55KTogdm9pZDsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfZXhpdENhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7ICh0bzogVCk6IGJvb2xlYW47IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2VudGVyQ2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKGZyb206IFQsIGV2ZW50PzogYW55KTogYm9vbGVhbjsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfaW52YWxpZFRyYW5zaXRpb25DYWxsYmFjazogKHRvPzogVCwgZnJvbT86IFQpID0+IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3RydWN0b3Ioc3RhcnRTdGF0ZTogVCwgYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGFydFN0YXRlO1xyXG4gICAgICAgICB0aGlzLl9zdGFydFN0YXRlID0gc3RhcnRTdGF0ZTtcclxuICAgICAgICAgdGhpcy5fYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uID0gYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgYWRkVHJhbnNpdGlvbnMoZmNuOiBUcmFuc2l0aW9uczxUPikge1xyXG4gICAgICAgICBmY24uZnJvbVN0YXRlcy5mb3JFYWNoKGZyb20gPT4ge1xyXG4gICAgICAgICAgICBmY24udG9TdGF0ZXMuZm9yRWFjaCh0byA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgdHJhbnNpdGlvbiBpZiB0aGUgc3RhdGUgbWFjaGluZSBpcyBub3QgY3VycmVudGx5IGFibGUgdG8gdHJhbnNpdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FuR28oZnJvbSwgdG8pKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbnMucHVzaChuZXcgVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+KHRoaXMsIGZyb20sIHRvKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb24oc3RhdGU6IFQsIGNhbGxiYWNrOiAoZnJvbT86IFQsIGV2ZW50PzogYW55KSA9PiBhbnkpOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9vbkNhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFjaywgcmV0dXJuaW5nXHJcbiAgICAgICAqIGZhbHNlIGluIHRoZSBjYWxsYmFjayB3aWxsIGJsb2NrIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUuXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25FbnRlcihzdGF0ZTogVCwgY2FsbGJhY2s6IChmcm9tPzogVCwgZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFjaywgcmV0dXJuaW5nXHJcbiAgICAgICAqIGZhbHNlIGluIHRoZSBjYWxsYmFjayB3aWxsIGJsb2NrIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhpcyBzdGF0ZS5cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkV4aXQoc3RhdGU6IFQsIGNhbGxiYWNrOiAodG8/OiBUKSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZXhpdENhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0IGZvciBhbiBpbnZhbGlkIHRyYW5zaXRpb24gYW5kIGhhbmRsZSB0aGUgZXJyb3IsIHJldHVybmluZyBhIGZhbHN5IHZhbHVlIHdpbGwgdGhyb3cgYW5cclxuICAgICAgICogZXhjZXB0aW9uLCBhIHRydXRoeSBvbmUgd2lsbCBzd2FsbG93IHRoZSBleGNlcHRpb25cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkludmFsaWRUcmFuc2l0aW9uKGNhbGxiYWNrOiAoZnJvbT86IFQsIHRvPzogVCkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIGlmKCF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEZWNsYXJlcyB0aGUgc3RhcnQgc3RhdGUocykgb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uLCBtdXN0IGJlIGZvbGxvd2VkIHdpdGggYSAnLnRvKC4uLmVuZFN0YXRlcyknXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgZnJvbSguLi5zdGF0ZXM6IFRbXSk6IFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgICAgdmFyIF90cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25zPFQ+KHRoaXMpO1xyXG4gICAgICAgICBfdHJhbnNpdGlvbi5mcm9tU3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgICByZXR1cm4gX3RyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBmcm9tQW55KHN0YXRlczogYW55KTogVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICAgICB2YXIgZnJvbVN0YXRlczogVFtdID0gW107XHJcbiAgICAgICAgIGZvciAodmFyIHMgaW4gc3RhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkocykpIHtcclxuICAgICAgICAgICAgICAgZnJvbVN0YXRlcy5wdXNoKCg8VD5zdGF0ZXNbc10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB2YXIgX3RyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbnM8VD4odGhpcyk7XHJcbiAgICAgICAgIF90cmFuc2l0aW9uLmZyb21TdGF0ZXMgPSBmcm9tU3RhdGVzO1xyXG4gICAgICAgICByZXR1cm4gX3RyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgX3ZhbGlkVHJhbnNpdGlvbihmcm9tOiBULCB0bzogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9ucy5zb21lKHRmID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICh0Zi5mcm9tID09PSBmcm9tICYmIHRmLnRvID09PSB0byk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgd2hldGhlciBhIHRyYW5zaXRpb24gYmV0d2VlbiBhbnkgdHdvIHN0YXRlcyBpcyB2YWxpZC5cclxuICAgICAgICogICAgSWYgYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIGlzIHRydWUsIGFsd2F5cyBhbGxvdyB0cmFuc2l0aW9ucyBmcm9tIGEgc3RhdGUgYmFjayB0byBpdHNlbGYuXHJcbiAgICAgICAqICAgICBPdGhlcndpc2UsIGNoZWNrIGlmIGl0J3MgYSB2YWxpZCB0cmFuc2l0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgcHJpdmF0ZSBfY2FuR28oZnJvbVN0YXRlOiBULCB0b1N0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gKHRoaXMuX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiAmJiBmcm9tU3RhdGUgPT09IHRvU3RhdGUpIHx8IHRoaXMuX3ZhbGlkVHJhbnNpdGlvbihmcm9tU3RhdGUsIHRvU3RhdGUpO1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlIGlzIHZhbGlkXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgY2FuR28oc3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9jYW5Hbyh0aGlzLmN1cnJlbnRTdGF0ZSwgc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogVHJhbnNpdGlvbiB0byBhbm90aGVyIHZhbGlkIHN0YXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgZ28oc3RhdGU6IFQsIGV2ZW50PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgIGlmICghdGhpcy5jYW5HbyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sgfHwgIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sodGhpcy5jdXJyZW50U3RhdGUsIHN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igbm8gdHJhbnNpdGlvbiBmdW5jdGlvbiBleGlzdHMgZnJvbSBzdGF0ZSAnICsgdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKSArICcgdG8gJyArIHN0YXRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25UbyhzdGF0ZSwgZXZlbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAvKipcclxuICAgICAgICogVGhpcyBtZXRob2QgaXMgYXZhaWxibGUgZm9yIG92ZXJyaWRkaW5nIGZvciB0aGUgc2FrZSBvZiBleHRlbnNpYmlsaXR5LiBcclxuICAgICAgICogSXQgaXMgY2FsbGVkIGluIHRoZSBldmVudCBvZiBhIHN1Y2Nlc3NmdWwgdHJhbnNpdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICBwdWJsaWMgb25UcmFuc2l0aW9uKGZyb206IFQsIHRvOiBUKSB7XHJcbiAgICAgICAgIC8vIHBhc3MsIGRvZXMgbm90aGluZyB1bnRpbCBvdmVyaWRkZW5cclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogUmVzZXQgdGhlIGZpbml0ZSBzdGF0ZSBtYWNoaW5lIGJhY2sgdG8gdGhlIHN0YXJ0IHN0YXRlLCBETyBOT1QgVVNFIFRISVMgQVMgQSBTSE9SVENVVCBmb3IgYSB0cmFuc2l0aW9uLiBcclxuICAgICAgKiBUaGlzIGlzIGZvciBzdGFydGluZyB0aGUgZnNtIGZyb20gdGhlIGJlZ2lubmluZy5cclxuICAgICAgKi9cclxuICAgICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuX3N0YXJ0U3RhdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBzdGF0ZSBlcXVhbHMgdGhlIGdpdmVuIHN0YXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgaXMoc3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgX3RyYW5zaXRpb25UbyhzdGF0ZTogVCwgZXZlbnQ/OiBhbnkpIHtcclxuICAgICAgICAgaWYgKCF0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKCF0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAoIXRoaXMuX29uQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICB2YXIgY2FuRXhpdCA9IHRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0ucmVkdWNlPGJvb2xlYW4+KChhY2N1bTogYm9vbGVhbiwgbmV4dDogKHRvOiBUKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2N1bSAmJiAoPGJvb2xlYW4+bmV4dC5jYWxsKHRoaXMsIHN0YXRlKSk7XHJcbiAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICAgdmFyIGNhbkVudGVyID0gdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0ucmVkdWNlPGJvb2xlYW4+KChhY2N1bTogYm9vbGVhbiwgbmV4dDogKGZyb206IFQpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgcmV0dXJuIGFjY3VtICYmICg8Ym9vbGVhbj5uZXh0LmNhbGwodGhpcywgdGhpcy5jdXJyZW50U3RhdGUsIGV2ZW50KSk7XHJcbiAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICAgaWYgKGNhbkV4aXQgJiYgY2FuRW50ZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXS5mb3JFYWNoKGZjbiA9PiB7XHJcbiAgICAgICAgICAgICAgIGZjbi5jYWxsKHRoaXMsIG9sZCwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb24ob2xkLCBzdGF0ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG5cclxuLy8gbWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHBlb3BsZSB1c2luZyB0aGUgcGFzY2FsIGNhc2VkIHZlcnNpb25cclxuLy8gdmFyIFR5cGVTdGF0ZSA9IHR5cGVzdGF0ZTtcclxuIiwiZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBTRUFSQ0g6IHN0cmluZyA9IFwiL3NlYXJjaGluZ1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBQTEFZOiBzdHJpbmcgPSBcIi9wbGF5XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXRFdmVudHMge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3Q29ubmVjdGlvbjogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcIm5ld0Nvbm5lY3Rpb25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGV0c0Nvbm5lY3Q6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJsZXRzQ29ubmVjdFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBqb2luUm9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImpvaW5Sb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5lZFJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJqb2luZWRSb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxlZnRSb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibGVmdFJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpdmF0ZU1lc3NhZ2U6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJwcml2YXRlTWVzc2FnZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTaWduZWRJblVzZXJEYXRhOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZ2V0U2lnbmVkSW5Vc2VyRGF0YVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhYmFzZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFiYXNlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc2Nvbm5lY3RNeVNvY2tldDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImRpc2Nvbm5lY3RNeVNvY2tldFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU2V0dXA6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJnYW1lU2V0dXBcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcm9vbUNyZWF0ZWQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJyb29tQ3JlYXRlZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhRnJvbVNlcnZlcjogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFGcm9tU2VydmVyXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRTZW5kaW5nU25hcHNob3RzOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwic3RhcnRTZW5kaW5nU25hcHNob3RzXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNuYXBzaG90VXBkYXRlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwic25hcHNob3RVcGRhdGVcIjtcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgcGFydG5lckZvdW5kQ2hhbm5lbDogc3RyaW5nID0gXCJwYXJ0bmVyRm91bmRDaGFubmVsXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdIT19XQU5UU19UT19QTEFZOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJXSE9fV0FOVFNfVE9fUExBWVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJX1dBTlRfVE9fUExBWTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiSV9XQU5UU19UT19QTEFZXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhFTExPOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJIRUxMT1wiO1xyXG5cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNS84LzIwMTlcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXIge1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb25VcGRhdGVDYWxsYmFjazogRnVuY3Rpb24sIHByaXZhdGUgb25Db21wbGV0ZUNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KGk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG4gICAgICAgIC8vY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcbmltcG9ydCB7UG9ja2V5UGxheWVyRGF0YX0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1kYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsXHJcbiAgICBGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzXHJcbn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuICAgIHB1YmxpYyBkYXRhOiBQb2NrZXlQbGF5ZXJEYXRhID0ge307XHJcbiAgICBwdWJsaWMgc29ja2V0OiBhbnk7XHJcbiAgICBwdWJsaWMgaXNMb29raW5nRm9yUGFydG5lcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gcHVibGljIGlzQ2xpZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNGaXJzdFRvU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U29ja2V0KHNvY2tldDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGxldCBuZXdTb2NrZXRJRDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgIG5ld1NvY2tldElEID0gbmV3U29ja2V0SUQucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVksICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhLnNvY2tldElEID0gbmV3U29ja2V0SUQ7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQgPSBzb2NrZXQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc29ja2V0SUQpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHNvY2tldCBpbml0aWFsaXplZDogXCIgKyB0aGlzLmRhdGEuc29ja2V0SUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YTogUG9ja2V5UGxheWVyRGF0YSk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmF2YXRhcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuYXZhdGFyID0gdXNlcm5hbWVEYXRhLmF2YXRhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuY29sb3IpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9yID0gdXNlcm5hbWVEYXRhLmNvbG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5kZWNhbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZGVjYWwgPSB1c2VybmFtZURhdGEuZGVjYWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmZlbHQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZlbHQgPSB1c2VybmFtZURhdGEuZmVsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEucGxheWVyX2xldmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5wbGF5ZXJfbGV2ZWwgPSB1c2VybmFtZURhdGEucGxheWVyX2xldmVsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5zdGljaykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuc3RpY2sgPSB1c2VybmFtZURhdGEuc3RpY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudG90YWxfcG9pbnRzID0gdXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudG90YWxfcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3RhbF9wb2ludHMgPSB1c2VybmFtZURhdGEudG90YWxfcG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5uaWNrbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEubmlja25hbWUgPSB1c2VybmFtZURhdGEubmlja25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnVzZXJfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnVzZXJfaWQgPSB1c2VybmFtZURhdGEudXNlcl9pZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZmlyc3RfbG9naW5fZGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmlyc3RfbG9naW5fZGF0ZSA9IHVzZXJuYW1lRGF0YS5maXJzdF9sb2dpbl9kYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50eXBlID0gdXNlcm5hbWVEYXRhLnR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvblJlY2VpdmVTbmFwc2hvdFVwZGF0ZShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNuYXBzaG90IHJlY2VpdmVkLy8vLy8vLy8vXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU25hcHNob3QgcmVjZWl2ZWQvLy8vLy8vLy8vXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBzZW5kR2FtZVNuYXBzaG90KGRhdGE6IGFueSk6IHZvaWQge1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwic2VuZCBzbmFwc2hvdCB0byBvdGhlciBwbGF5ZXJcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc25hcHNob3RVcGRhdGUsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZWxmRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciByZW1vdmVkXCIpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzgvMjAxOVxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQge1BvY2tleVN0YXRlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL0dhbWVNb2R1bGUvU3RhdGVNYWNoaW5lL3BvY2tleS1zdGF0ZS1tYWNoaW5lXCI7XHJcbmltcG9ydCB7UG9ja2V5UGxheWVyRGF0YX0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1kYXRhXCI7XHJcblxyXG5leHBvcnQgZW51bSBSb3VuZENvbXBsZXRlVHlwZSB7XHJcbiAgICBtYXRjaENvbXBsZXRlLFxyXG4gICAgcm91bmRDb21wbGV0ZSxcclxuICAgIHBsYXllckRpc2Nvbm5lY3RlZCxcclxuICAgIHJlbWF0Y2gsXHJcbiAgICBvcHBvbmVudEZvdW5kXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91bmRWTyB7XHJcbiAgICB0eXBlPzogUm91bmRDb21wbGV0ZVR5cGUsXHJcbiAgICByb3VuZE51bWJlcj86IG51bWJlcixcclxuICAgIGxlZnRQbGF5ZXJEYXRhPzogUG9ja2V5UGxheWVyRGF0YSxcclxuICAgIHJpZ2h0UGxheWVyRGF0YT86IFBvY2tleVBsYXllckRhdGEsXHJcbiAgICAvLyBwbGF5ZXJEaXNjb25uZWN0ZWQsXHJcbiAgICAvLyByZW1hdGNoXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9ja2V5U291bmRWTyB7XHJcbiAgICBzb3VuZEF0OiBudW1iZXIsXHJcbiAgICBzb3VuZE5hbWU6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvY2tleVNjcmVlblNob3Rcclxue1xyXG4gICAgaWQ6bnVtYmVyLFxyXG4gICAgZ2FtZUVsZW1lbnRzOlBvY2tleUdhbWVFbGVtZW50Vk9bXVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvY2tleUdhbWVFbGVtZW50Vk8ge1xyXG4gICAgc29ja2V0SUQ/OiBzdHJpbmcsXHJcbiAgICB0eXBlPzogQmFsbFR5cGUsXHJcbiAgICBuYW1lPzogc3RyaW5nLFxyXG4gICAgcm90YXRpb24/OiBudW1iZXIsXHJcbiAgICB4UG9zPzogbnVtYmVyLFxyXG4gICAgeVBvcz86IG51bWJlcixcclxuICAgIHZpc2libGU/OiBib29sZWFuLFxyXG4gICAgYWxwaGE/OiBudW1iZXIsXHJcbiAgICB0aW1lRWxhcHNlZD86IG51bWJlcixcclxuICAgIGlzT25SZXBvc2l0aW9uPzogYm9vbGVhblxyXG4gICAgcGl2b3Q/OiBudW1iZXIsXHJcbiAgICBzdGF0ZT86UG9ja2V5U3RhdGVzLFxyXG4gICAgZGlyZWN0aW9uPzpudW1iZXIsXHJcbiAgICBjYW5CZVJlbW92ZWQ/OmJvb2xlYW4sXHJcbiAgICBzY2FsZT86bnVtYmVyXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBpbnRlcmZhY2UgUG9ja2V5R3JhcGhpY0VsZW1lbnRWTyB7XHJcbi8vICAgICB0eXBlOiBQb2NrZXlPYmplY3RUeXBlLFxyXG4vLyAgICAgbmFtZTogc3RyaW5nLFxyXG4vLyAgICAgcG9zaXRpb25zOiBudW1iZXJbXVtdLFxyXG4vLyAgICAgY29sb3I6IG51bWJlcltdLFxyXG4vLyAgICAgcm90YXRpb246IG51bWJlclxyXG4vLyB9XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvY2tleVNuYXBzaG90IHtcclxuICAgIGVsZW1lbnRzOiBQb2NrZXlHYW1lRWxlbWVudFZPW10sXHJcbiAgICAvLyBncmFwaGljczogUG9ja2V5R3JhcGhpY0VsZW1lbnRWT1tdLFxyXG4gICAgc291bmRzOiBQb2NrZXlTb3VuZFZPW10sXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm91bmRTZXR1cCB7XHJcbiAgICByb3VuZE51bWJlcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYWxsVHlwZSB7XHJcbiAgICBMZWZ0ID0gJ0xlZnRCYWxsJyxcclxuICAgIFJpZ2h0ID0gJ1JpZ2h0QmFsbCcsXHJcbiAgICBXaGl0ZSA9IFwiV2hpdGVCYWxsXCIsXHJcbiAgICBQdWNrID0gXCJQdWNrXCJcclxufVxyXG5cclxuZXhwb3J0IGVudW0gV2luU3RhdHVzIHtcclxuICAgIFdJTixcclxuICAgIExPU1RcclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC85LzIwMTlcclxuICovXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5UGxheWVyU2VydmVyIGV4dGVuZHMgUGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgLy8gc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudCwgdGhpcy51cGRhdGVQbGF5ZXJEYXRhLmJpbmQodGhpcykpO1xyXG4gICAgICAgIC8vIHRoaXMuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudCwgdGhpcy51cGRhdGVQbGF5ZXJEYXRhLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhOiB7fSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLnVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZXJ2ZXIgcGxheWVyIHVwZGF0ZWQuIHNlbmRpbmcgcGxheWVyIGRhdGEgdXBkYXRlIHRvIGNsaWVudFwiKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhLCB0aGlzLmRhdGEpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzgvMjAxOVxyXG4gKi9cclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcbmltcG9ydCB7RnJhbWV3b3JrU29ja2V0RXZlbnRzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuaW1wb3J0IHtQb2NrZXlTb2NrZXRNZXNzYWdlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7UG9ja2V5U3RhdGVzfSBmcm9tIFwiLi4vY2xpZW50L01vZHVsZXMvR2FtZU1vZHVsZS9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmVcIjtcclxuaW1wb3J0IHtUaW1lcn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1V0aWxzL3RpbWVyXCI7XHJcbmltcG9ydCB7QmFsbFR5cGUsIFJvdW5kQ29tcGxldGVUeXBlLCBSb3VuZFZPfSBmcm9tIFwiLi4vY29tbW9uL3BvY2tleS12YWx1ZS1vYmplY3RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5Um9vbSB7XHJcbiAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBsYXllcnM6IFBsYXllcltdID0gW107XHJcbiAgICBwdWJsaWMgaW86IGFueTtcclxuICAgIHByaXZhdGUgZ2FtZURhdGE6IFJvdW5kVk8gPSB7cm91bmROdW1iZXI6IDEsIHR5cGU6IFJvdW5kQ29tcGxldGVUeXBlLm9wcG9uZW50Rm91bmR9O1xyXG4gICAgcHJpdmF0ZSBzY29yZVVwZGF0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgd2hpdGVCYWxsSW5UaGVIYWxsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG93bkJhbGxGYXVsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBvcHBvbmVudEJhbGxTY29yZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgY3VycmVudFBsYXllcjogUGxheWVyO1xyXG4gICAgcHJpdmF0ZSByb3VuZFRpbWVyOiBUaW1lcjtcclxuICAgIHByaXZhdGUgcm91bmRTY3JlZW5UaW1lcjogVGltZXI7XHJcbiAgICBwcml2YXRlIHJvdW5kRHVyYXRpb246IG51bWJlciA9IDIwO1xyXG5cclxuICAgIHByaXZhdGUgcm91bmRGaW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtYXRjaEZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgaW86IGFueSwgcHJpdmF0ZSBzZWxmRGVsZXRlOiBGdW5jdGlvbikge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5wbGF5ZXIxKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnMucHVzaCh0aGlzLnBsYXllcjIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9vbSBjcmVhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91bmRUaW1lciA9IG5ldyBUaW1lcih0aGlzLm9uUm91bmRUaW1lclVwZGF0ZS5iaW5kKHRoaXMpLCB0aGlzLm9uUm91bmRUaW1lckNvbXBsZXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucm91bmRTY3JlZW5UaW1lciA9IG5ldyBUaW1lcih0aGlzLm9uUm91bmRTY3JlZW5VcGRhdGUuYmluZCh0aGlzKSwgdGhpcy5vblJvdW5kU2NyZWVuQ29tcGxldGUuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdW5kU2NyZWVuVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9TQ1JFRU5fVElNRVJfVVBEQVRFLCB0aGlzLnJvdW5kU2NyZWVuVGltZXIuZ2V0Q3VycmVudFRpbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdW5kU2NyZWVuQ29tcGxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZW5kU3RhcnRSb3VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3VuZFRpbWVyVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9VUERBVEUsIHRoaXMucm91bmRUaW1lci5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRUaW1lckNvbXBsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ISURFX1RJTUVSKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQUxMT0NBVEVEX1RJTUVfRUxBUFNFRCk7XHJcbiAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmNoZWNrTmV4dFR1cm4oKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuSElERV9USU1FUiwgdGhpcy5yb3VuZFRpbWVyLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ25QbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuZGF0YS5yb3VuZHNXb24gPSAwO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXlhOiBcIiArIHBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEdhbWVTbmFwc2hvdChwbGF5ZXIuZGF0YS5zb2NrZXRJRCwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuRVhJVF9TRVJWRVJfUk9PTSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyID09IHRoaXMucGxheWVyc1swXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkVYSVRfU0VSVkVSX1JPT00pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkVYSVRfU0VSVkVSX1JPT00pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZkRlbGV0ZSh0aGlzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5CQUxMX0lOX1RIRV9IQUxMLCAoYmFsbFR5cGU6IEJhbGxUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUocGxheWVyLmRhdGEuc29ja2V0SUQsIGJhbGxUeXBlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5QVUNLX0lOX1RIRV9IQUxMLCAoYmFsbFR5cGU6IEJhbGxUeXBlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2NvcmUocGxheWVyLmRhdGEuc29ja2V0SUQsIGJhbGxUeXBlLCB0cnVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5PV05fQkFMTF9UT1VDSEVEX0ZJUlNULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Pd25CYWxsVG91Y2hlZEZpcnN0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hFQ0tfTkVYVF9UVVJOLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tOZXh0VHVybigpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkJBTExfV0FTX1NIT1QsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVFbGFwc2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ISURFX1RJTUVSKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLnB1c2gocGxheWVyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb206IFwiICsgdGhpcy5pZCArIFwiIC0+IHBsYXllciBhc3NpZ25lZDogXCIgKyBwbGF5ZXIuZGF0YS5zb2NrZXRJRCArIFwiIC0+IHRvdGFsIHBsYXllcnM6IFwiICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJyb29tOiBcIiArIHRoaXMuaWQgKyBcIiAtPiApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEZpcnN0Um91bmRTZXR1cCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uT3duQmFsbFRvdWNoZWRGaXJzdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVTY29yZShzb2NrZXRJRDogc3RyaW5nLCBiYWxsVHlwZTogQmFsbFR5cGUsIGlzUHVja0dvYWw6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IFBsYXllcjtcclxuICAgICAgICBsZXQgb3Bwb25lbnQ6IFBsYXllcjtcclxuICAgICAgICBsZXQgcG9pbnRzU2NvcmVkOiBudW1iZXIgPSAxO1xyXG4gICAgICAgIGlmIChpc1B1Y2tHb2FsKSB7XHJcbiAgICAgICAgICAgIHBvaW50c1Njb3JlZCA9IDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5YTogUGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldElEID09IHRoaXMucGxheWVyc1swXS5kYXRhLnNvY2tldElEKSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgICBvcHBvbmVudCA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxsVHlwZSA9PSBwbGF5ZXIuZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlIC09IHBvaW50c1Njb3JlZDtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFsbFR5cGUgPT0gb3Bwb25lbnQuZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gb3Bwb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnRCYWxsU2NvcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcHBvbmVudC5kYXRhLmN1cnJlbnRTY29yZSAtPSBwb2ludHNTY29yZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IEJhbGxUeXBlLldoaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIuZGF0YS5yb3VuZHNXb24rKztcclxuICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnJvdW5kc1dvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcHBvbmVudC5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9wcG9uZW50LmRhdGEucm91bmRzV29uKys7XHJcbiAgICAgICAgICAgIGlmIChvcHBvbmVudC5kYXRhLnJvdW5kc1dvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tOZXh0VHVybigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVyLnN0b3AoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVEYXRhLnR5cGUgPSBSb3VuZENvbXBsZXRlVHlwZS5tYXRjaENvbXBsZXRlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9PSB0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZURhdGEubGVmdFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZURhdGEucmlnaHRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLk1BVENIX0ZJTklTSEVELCB0aGlzLmdhbWVEYXRhKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdW5kRmluaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlcisrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZURhdGEucm91bmROdW1iZXIgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFR1cm5EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNlY29uZFJvdW5kU2V0dXAoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX0ZJTklTSEVELCB0aGlzLmdhbWVEYXRhKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX0ZJTklTSEVEKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vd25CYWxsRmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3Bwb25lbnRCYWxsU2NvcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VHVybkRhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50UGxheWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9ICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gdGhpcy5wbGF5ZXJzWzBdKSA/IHRoaXMucGxheWVyc1sxXSA6IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB0aGlzLnJlc2V0VHVybkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VHVybkRhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndoaXRlQmFsbEluVGhlSGFsbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXy5mb3JFYWNoKHRoaXMucGxheWVycywgKHBsYXllcjogUGxheWVyKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGJhbGxTb2NrZXRJRCA9PSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgLy8gICAgICAgICBwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PSBwbGF5ZXJTb2NrZXRJRCkge1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAocGxheWVyLmRhdGEuY3VycmVudFNjb3JlIDw9IDApIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kR2FtZVNuYXBzaG90KHNvY2tldElEOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic25hcHNob3QgcmVjZWl2ZWQgb24gcm9vbTogXCIgKyB0aGlzLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzWzBdLmRhdGEuc29ja2V0SUQgPT0gc29ja2V0SUQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY29yZVVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlNDT1JFX1VQREFURUQsIFt0aGlzLnBsYXllcnNbMF0uZGF0YSwgdGhpcy5wbGF5ZXJzWzFdLmRhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRmlyc3RSb3VuZFNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5pc0ZpcnN0VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEucm91bmRzV29uID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhLmxlZnRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5SaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnJvdW5kc1dvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIHRoaXMuZ2FtZURhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZW5kU3RhcnRSb3VuZC5iaW5kKHRoaXMpLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRTZWNvbmRSb3VuZFNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEudHlwZSA9IFJvdW5kQ29tcGxldGVUeXBlLnJvdW5kQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS50eXBlID0gQmFsbFR5cGUuTGVmdDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEubGVmdFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEudHlwZSA9IEJhbGxUeXBlLlJpZ2h0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMF0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIHRoaXMuZ2FtZURhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdW5kU2NyZWVuVGltZXIuc3RhcnQoNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kU3RhcnRSb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlciA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbMV0gPT0gdGhpcy5jdXJyZW50UGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDIvMjcvMjAxOVxyXG4gKi9cclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCB7U2VydmVyfSBmcm9tIFwibm9kZS1zdGF0aWNcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0IHtQb29sfSBmcm9tIFwicGdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuaW1wb3J0IHtQb2NrZXlSb29tfSBmcm9tIFwiLi9wb2NrZXktcm9vbVwiO1xyXG5pbXBvcnQge1BvY2tleVBsYXllclNlcnZlcn0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1zZXJ2ZXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcbmltcG9ydCB7V2luU3RhdHVzfSBmcm9tIFwiLi4vY29tbW9uL3BvY2tleS12YWx1ZS1vYmplY3RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5U2VydmVySW5kZXgge1xyXG4gICAgcHJvdGVjdGVkIGZpbGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBodHRwU2VydmVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc29ja2V0SW86IGFueTtcclxuICAgIHByb3RlY3RlZCBzb2NrZXRJc0ZyZWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFiYXNlQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2VQb29sOiBQb29sIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIHJvb21zOiBQb2NrZXlSb29tW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBwbGF5ZXJzOiBQb2NrZXlQbGF5ZXJTZXJ2ZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBwbGF5aW5nTmFtZXNwYWNlXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2VydmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlR2FtZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbmV3IFNlcnZlcignZGlzdCcsIHsgLy8gYmluIGlzIHRoZSBmb2xkZXIgY29udGFpbmluZyBvdXIgaHRtbCwgZXRjXHJcbiAgICAgICAgICAgIGNhY2hlOiAwLFx0Ly8gZG9uJ3QgY2FjaGVcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnemlwOiB0cnVlXHQvLyBnemlwIG91ciBhc3NldHNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbiAgICAgICAgLy8gY3JlYXRlIG91ciBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnNlcnZlKHJlcXVlc3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5vbignbGlzdGVuaW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2ssIHNlcnZlciBpcyBydW5uaW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVEYigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbCA9IG5ldyBQb29sKHtcclxuICAgICAgICAgICAgdXNlcjogJ25wdnN3aGdneGdzZ3hrJyxcclxuICAgICAgICAgICAgaG9zdDogJ2VjMi01NC0yMjUtOTgtMTMxLmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJyxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdkMXVrMnZucGRqbDI4cScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnNTU2ZTUwMTNlYTFkZWM1OWQyZGFhNWQ3YmZmMjIzZWMwMjhjMTZkYTRhYzU3N2RiOTRlNzhkYmM3NTQ3MTk2NScsXHJcbiAgICAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbiAgICAgICAgICAgIHNzbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igb24gaWRsZSBjbGllbnQnLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoLTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5jb25uZWN0KChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzLWEgbG9nYXQsIG1lcmdlLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJbyA9IHNvY2tldElPKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5zZXJ2ZUNsaWVudCh0cnVlKTsgLy8gdGhlIHNlcnZlciB3aWxsIHNlcnZlIHRoZSBjbGllbnQganMgZmlsZVxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8uYXR0YWNoKHRoaXMuaHR0cFNlcnZlcik7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTb2NrZXRFdmVudHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubmV3Q29ubmVjdGlvbiwgcGxheWVyLmRhdGEuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBjb25uZWN0ZWQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvL3RvZG8gYWljaSB0cmVidWllIHNhIHRlIG9jdXBpIGRlIGRpc2Nvbm5lY3QgZGFyIHNpIHBlIGNlbGFsYWx0ZSBzb2NrZXR1cmlcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gZ2V0IHNpZ25lZCBpbiBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhYmFzZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YWJhc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVBsYXllckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImEgaWVzaXQgZGUgcGUgY2FuYWx1bCBwYWNpaTogXCIgKyBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBzb2NrZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGxlZnQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC50byhyb29tKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZWZ0Um9vbSwgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc29ja2V0SW8ub24oJ2Rpc2Nvbm5lY3QnLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUGxheWVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IHNvY2tldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbm5lY3RDb3VudGVyLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgbGVmdC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB0aGlzLnNvY2tldElvLm9uKCdkaXNjb25uZWN0JywgKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIC8vc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSA9IHRoaXMuc29ja2V0SW8ub2YoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gpO1xyXG4gICAgICAgIGxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSB0aGlzLmdldFBsYXllckJ5SUQoaWQsIHNvY2tldCk7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNIICsgJyAtPiBzb21lb25lIGNvbm5lY3RlZDogJyArIHBsYXllci5kYXRhLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hNYWtlcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICAvKnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIChtc2c6IGFueSwgaWQ6IHN0cmluZywgcGFydG5lcklEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIG1zZywgaWQsIHBhcnRuZXJJRCk7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5aW5nTmFtZXNwYWNlID0gdGhpcy5zb2NrZXRJby5vZihGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVkpO1xyXG5cclxuICAgICAgICBwbGF5aW5nTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZLCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IHRoaXMuZ2V0UGxheWVyQnlJRChpZCwgc29ja2V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5Sb29tLCAocm9vbUlEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuam9pbihyb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb2NrZXlSb29tOiBQb2NrZXlSb29tID0gdGhpcy5nZXRSb29tQnlJRChyb29tSUQsIHBsYXlpbmdOYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICAgICAgcG9ja2V5Um9vbS5hc3NpZ25QbGF5ZXIocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pblJvb20sIHJvb20sIGlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pbmVkUm9vbSwgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIGpvaW4gcm9vbS4gcm9vbSBuaWNrbmFtZTogXCIgKyByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhIGllc2l0IGRlIHBlIGNhbmFsdWwgcGFjaWk6IFwiICsgc29ja2V0LmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnRvKHJvb21JRCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGVmdFJvb20sIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCAocm9vbTogYW55LCBtZXNzYWdlVHlwZTogRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMsIG1lc3NhZ2VEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PSBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5IRUxMTylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlIGZhY2UgaGVsbG91bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LnRvKHJvb20pLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCBtZXNzYWdlVHlwZSwgbWVzc2FnZURhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmRpc2Nvbm5lY3RNeVNvY2tldCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaE1ha2VyKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKG90aGVyUGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllciAhPSBvdGhlclBsYXllciAmJiBvdGhlclBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGhhdmUgYSByb29tXCIpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUlEOiBzdHJpbmcgPSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCArIFwiI1wiICsgb3RoZXJQbGF5ZXIuZGF0YS5zb2NrZXRJRDtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeUlEKGlkOiBzdHJpbmcsIHNvY2tldDogYW55KTogUG9ja2V5UGxheWVyU2VydmVyIHtcclxuICAgICAgICBsZXQgcGxheWVyQnlJRDogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBzZWFyY2hpbmc6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIHBsYXllckJ5SUQuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXJCeUlELnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllckJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb29tQnlJRChyb29tSUQ6IHN0cmluZywgaW86IGFueSk6IFBvY2tleVJvb20ge1xyXG4gICAgICAgIC8vIGxldCBwbGF5ZXJCeUlEOiBQbGF5ZXIgPSBuZXcgUGxheWVyKFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHJvb20gYnkgaWQgLT4gc2VhcmNoaW5nOiBcIiArIHJvb21JRCk7XHJcbiAgICAgICAgbGV0IHJvb21CeUlEOiBQb2NrZXlSb29tO1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zLmZvckVhY2goKHJvb206IFBvY2tleVJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT0gcm9vbUlEKSB7XHJcbiAgICAgICAgICAgICAgICByb29tQnlJRCA9IHJvb207XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcm9vbUJ5SUQpIHtcclxuICAgICAgICAgICAgcm9vbUJ5SUQgPSBuZXcgUG9ja2V5Um9vbShyb29tSUQsIGlvLCB0aGlzLmRlbGV0ZVJvb20uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXMucHVzaChyb29tQnlJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9vbUJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVSb29tKHJvb21Ub0RlbGV0ZTpQb2NrZXlSb29tKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJvb21zLmluZGV4T2Yocm9vbVRvRGVsZXRlLCAwKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb21zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb20gZGVsZXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJEYihwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNxbFRleHQ6IHN0cmluZyA9IFwiVVBEQVRFIHBvY2tleV90YWJsZSBTRVQgXCIgKyBkYXRhW1wiY29sdW1uXCJdICsgXCI9J1wiICsgZGF0YVtcInZhbHVlXCJdICsgXCInIFdIRVJFIHVzZXJfaWQ9J1wiICsgZGF0YVtcInVzZXJJRFwiXSArIFwiJ1wiO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVtcInR5cGVcIl0gPT0gXCJ3aW5TdGF0dXNcIikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtcInZhbHVlXCJdID09IFdpblN0YXR1cy5XSU4pIHtcclxuICAgICAgICAgICAgICAgIC8vIHNxbFRleHQgPSBcIlVQREFURSBVU0VSX1RBQkxFIFNFVCBcIiArIGRhdGFbXCJjb2x1bW5cIl0gKyBcIj0ncG9pbnRzJyArIDEwIFdIRVJFIEdJRD0nWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgICAgIHNxbFRleHQgPSAnVVBEQVRFIHB1YmxpYy5cIlVTRVJfVEFCTEVcIiBTRVQgXCJwb2ludHNcIiA9IFwicG9pbnRzXCIgKyAxMCBXSEVSRSBcIlVTRVJfVEFCTEVcIi5cIkdJRFwiID0gJyArIFwiJ1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNxbFRleHQgbGEgd2luOiBcIiArIHNxbFRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbXCJ2YWx1ZVwiXSA9PSBXaW5TdGF0dXMuTE9TVCkge1xyXG4gICAgICAgICAgICAgICAgc3FsVGV4dCA9ICdVUERBVEUgcHVibGljLlwiVVNFUl9UQUJMRVwiIFNFVCBcInBvaW50c1wiID0gXCJwb2ludHNcIiArIDEwIFdIRVJFIFwiVVNFUl9UQUJMRVwiLlwiR0lEXCIgPSAnICsgXCInWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzcWxUZXh0OiBcIiArIHNxbFRleHQsIFwidHlwZTogXCIgKyBkYXRhW1widHlwZVwiXSwgXCJ2YWx1ZTogXCIgKyBkYXRhW1widmFsdWVcIl0pO1xyXG5cclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5kYXRhYmFzZVBvb2wuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHNxbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3VtIHNlIGZhY2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllciwgZGF0YVtcInVzZXJJRFwiXSk7XHJcblxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLnN0YWNrKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JVc2VySUQocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIHVzZXJuYW1lOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIGRiIGZvciB1c2VyX2lkOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgLy8gZ2l2ZSB0aGUgcXVlcnkgYSB1bmlxdWUgbmlja25hbWVcclxuICAgICAgICAgICAgbmFtZTogJ2ZldGNoLXVzZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU0VMRUNUICogRlJPTSBwb2NrZXlfdGFibGUgV0hFUkUgVVNFUl9JRCA9ICQxJyxcclxuICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wucXVlcnkocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yb3dzWzBdID09IHVuZGVmaW5lZCB8fCByZXMucm93c1swXSA9PSBcInVuZGVmaW5lZFwiIHx8IHJlcy5yb3dzWzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIocGxheWVyLnNvY2tldCwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudXBkYXRlUGxheWVyRGF0YShyZXMucm93c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucm93c1swXSk7IC8vIFsnQnJpYW4nLCAnQ2FybHNvbiddXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdVc2VyKHBsYXllcjogUGxheWVyLCB1c2VybmFtZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBuZXcgdXNlcjogXCIgKyB1c2VybmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3VXNlclF1ZXJ5ID1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NyZWF0ZS1uZXctdXNlcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSU5TRVJUIElOVE8gcG9ja2V5X3RhYmxlKHVzZXJfaWQpIFZBTFVFUygkMSknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLnF1ZXJ5KGNyZWF0ZU5ld1VzZXJRdWVyeSlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyhcIm5ldyB1c2VyIGNyZWF0ZWQuIHVzZXIgc2F2ZWQgaW50byBkYlwiKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldElvLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsIHJlcy5yb3dzWzBdKTsqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIuc29ja2V0LCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5uZXcgUG9ja2V5U2VydmVySW5kZXgoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=