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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9HYW1lTW9kdWxlL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L01vZHVsZXMvR2FtZU1vZHVsZS9TdGF0ZU1hY2hpbmUvdHlwZXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3FGcmFtZXdvcmsvVXRpbHMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wb2NrZXktdmFsdWUtb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1wbGF5ZXItc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktc2VydmVyLWluZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXN0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOlsiUG9ja2V5U29ja2V0TWVzc2FnZXMiLCJQb2NrZXlTdGF0ZXMiLCJQb2NrZXlTdGF0ZU1hY2hpbmUiLCJmc20iLCJmcm9tIiwib25Mb2FkIiwidG8iLCJvbk1haW5NZW51Iiwib25SZWFycmFuZ2VTdGljayIsIm9uU2VhcmNoRm9yUGFydG5lciIsIm9uUHJlcGFyZVJvdW5kT25lIiwib25XYXRjaCIsIm9uRW5kVHVybiIsIm9uUHJlcGFyZVJvdW5kVHdvIiwib25Sb3VuZEVuZCIsIm9uUHJlcGFyZVJvdW5kVGhyZWUiLCJvblJlcG9zaXRpb25XaGl0ZUJhbGwiLCJvbkVuZE1hdGNoIiwib25TaG9vdCIsImRlbGF5ZWRTdGF0ZSIsIm5leHRTdGF0ZSIsIkluc3RhbmNlIiwiY2hhbmdlU3RhdGUiLCJfIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJpbnRGc21DdXJyZW50U3RhdGUiLCJnbyIsInMiLCJjdXJyZW50U3RhdGUiLCJnZXRDdXJyZW50U3RhdGVOYW1lIiwiaW5zdGFuY2UiLCJpbml0aWFsaXplZCIsIkZpbml0ZVN0YXRlTWFjaGluZSIsIkluaXRpYWxpemVTdGF0ZXMiLCJUcmFuc2l0aW9ucyIsInN0YXRlcyIsInRvU3RhdGVzIiwiYWRkVHJhbnNpdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJUcmFuc2l0aW9uRnVuY3Rpb24iLCJzdGFydFN0YXRlIiwiYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiX3N0YXJ0U3RhdGUiLCJfYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiZmNuIiwiZnJvbVN0YXRlcyIsImZvckVhY2giLCJfY2FuR28iLCJfdHJhbnNpdGlvbkZ1bmN0aW9ucyIsImNhbGxiYWNrIiwia2V5IiwidG9TdHJpbmciLCJfb25DYWxsYmFja3MiLCJfZW50ZXJDYWxsYmFja3MiLCJfZXhpdENhbGxiYWNrcyIsIl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrIiwiX3RyYW5zaXRpb24iLCJzb21lIiwidGYiLCJmcm9tU3RhdGUiLCJ0b1N0YXRlIiwiX3ZhbGlkVHJhbnNpdGlvbiIsImV2ZW50IiwiY2FuR28iLCJFcnJvciIsIl90cmFuc2l0aW9uVG8iLCJjYW5FeGl0IiwicmVkdWNlIiwiYWNjdW0iLCJuZXh0IiwiY2FsbCIsImNhbkVudGVyIiwib2xkIiwib25UcmFuc2l0aW9uIiwiRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcyIsIkZyYW1ld29ya1NvY2tldEV2ZW50cyIsIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzIiwiVGltZXIiLCJvblVwZGF0ZUNhbGxiYWNrIiwib25Db21wbGV0ZUNhbGxiYWNrIiwiaSIsImN1cnJlbnRUaW1lIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJQbGF5ZXIiLCJzb2NrZXQiLCJuZXdTb2NrZXRJRCIsImlkIiwicmVwbGFjZSIsIlNFQVJDSCIsIlBMQVkiLCJkYXRhIiwic29ja2V0SUQiLCJ1c2VybmFtZURhdGEiLCJhdmF0YXIiLCJjb2xvciIsImRlY2FsIiwiZmVsdCIsInBsYXllcl9sZXZlbCIsInN0aWNrIiwidG90YWxfcG9pbnRzIiwibmlja25hbWUiLCJ1c2VyX2lkIiwiZmlyc3RfbG9naW5fZGF0ZSIsInR5cGUiLCJlbWl0Iiwic25hcHNob3RVcGRhdGUiLCJSb3VuZENvbXBsZXRlVHlwZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInNlbGZEZWxldGUiLCJyb3VuZE51bWJlciIsIm9wcG9uZW50Rm91bmQiLCJyb3VuZFRpbWVyIiwib25Sb3VuZFRpbWVyVXBkYXRlIiwiYmluZCIsIm9uUm91bmRUaW1lckNvbXBsZXRlIiwicm91bmRTY3JlZW5UaW1lciIsIm9uUm91bmRTY3JlZW5VcGRhdGUiLCJvblJvdW5kU2NyZWVuQ29tcGxldGUiLCJST1VORF9TQ1JFRU5fVElNRVJfVVBEQVRFIiwiZ2V0Q3VycmVudFRpbWUiLCJzZW5kU3RhcnRSb3VuZCIsIlJPVU5EX1RJTUVSX1VQREFURSIsIkhJREVfVElNRVIiLCJjdXJyZW50UGxheWVyIiwiQUxMT0NBVEVEX1RJTUVfRUxBUFNFRCIsInBsYXllciIsInJvdW5kc1dvbiIsIm9uIiwic2VuZEdhbWVTbmFwc2hvdCIsIkVYSVRfU0VSVkVSX1JPT00iLCJwbGF5ZXJzIiwiQkFMTF9JTl9USEVfSEFMTCIsImJhbGxUeXBlIiwidXBkYXRlU2NvcmUiLCJPV05fQkFMTF9UT1VDSEVEX0ZJUlNUIiwib25Pd25CYWxsVG91Y2hlZEZpcnN0IiwiQ0hFQ0tfTkVYVF9UVVJOIiwiY2hlY2tOZXh0VHVybiIsIkJBTExfV0FTX1NIT1QiLCJzdG9wIiwibGVuZ3RoIiwic2VuZEZpcnN0Um91bmRTZXR1cCIsIm93bkJhbGxGYXVsdCIsIm9wcG9uZW50Iiwib3Bwb25lbnRCYWxsU2NvcmVkIiwiY3VycmVudFNjb3JlIiwic2NvcmVVcGRhdGVkIiwiV2hpdGUiLCJ3aGl0ZUJhbGxJblRoZUhhbGwiLCJyb3VuZEZpbmlzaGVkIiwibWF0Y2hGaW5pc2hlZCIsImdhbWVEYXRhIiwibWF0Y2hDb21wbGV0ZSIsImxlZnRQbGF5ZXJEYXRhIiwicmlnaHRQbGF5ZXJEYXRhIiwiTUFUQ0hfRklOSVNIRUQiLCJyZXNldFR1cm5EYXRhIiwic2VuZFNlY29uZFJvdW5kU2V0dXAiLCJDSEFOR0VfU1RBVEUiLCJjaGFuZ2VDdXJyZW50UGxheWVyIiwic3RhcnRTZW5kaW5nU25hcHNob3RzIiwic3RhcnQiLCJyb3VuZER1cmF0aW9uIiwiU0NPUkVfVVBEQVRFRCIsImlzRmlyc3RUb1N0YXJ0IiwiTGVmdCIsIlJpZ2h0IiwiZ2FtZVNldHVwIiwic2V0VGltZW91dCIsInJvdW5kQ29tcGxldGUiLCJQb2NrZXlTZXJ2ZXJJbmRleCIsImluaXRpYWxpemVTZXJ2ZXIiLCJpbml0aWFsaXplRGIiLCJjcmVhdGVTb2NrZXQiLCJmaWxlIiwiU2VydmVyIiwiY2FjaGUiLCJnemlwIiwicG9ydCIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwiaHR0cFNlcnZlciIsImh0dHAiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJhZGRMaXN0ZW5lciIsInNlcnZlIiwicmVzdW1lIiwibGlzdGVuIiwiZGF0YWJhc2VQb29sIiwiUG9vbCIsInVzZXIiLCJob3N0IiwiZGF0YWJhc2UiLCJwYXNzd29yZCIsInNzbCIsImVyciIsImVycm9yIiwiZXhpdCIsImNvbm5lY3QiLCJkYXRhYmFzZUNvbm5lY3RlZCIsInNvY2tldElvIiwic29ja2V0SU8iLCJzZXJ2ZUNsaWVudCIsImF0dGFjaCIsImhhbmRsZVNvY2tldEV2ZW50cyIsInNldFNvY2tldCIsIm5ld0Nvbm5lY3Rpb24iLCJnZXRTaWduZWRJblVzZXJEYXRhIiwidXNlcm5hbWUiLCJjaGVja0ZvclVzZXJJRCIsInVwZGF0ZVBsYXllckRhdGFiYXNlIiwidXBkYXRlVXNlckRiIiwiaW5kZXgiLCJzcGxpY2UiLCJzZWxmRGVzdHJveSIsImxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlIiwib2YiLCJnZXRQbGF5ZXJCeUlEIiwiaXNMb29raW5nRm9yUGFydG5lciIsIm1hdGNoTWFrZXIiLCJwbGF5aW5nTmFtZXNwYWNlIiwiam9pblJvb20iLCJyb29tSUQiLCJqb2luIiwicG9ja2V5Um9vbSIsImdldFJvb21CeUlEIiwiYXNzaWduUGxheWVyIiwiam9pbmVkUm9vbSIsImxlZnRSb29tIiwiZGlzY29ubmVjdCIsInByaXZhdGVNZXNzYWdlIiwicm9vbSIsIm1lc3NhZ2VUeXBlIiwibWVzc2FnZURhdGEiLCJIRUxMTyIsImJyb2FkY2FzdCIsImRpc2Nvbm5lY3RNeVNvY2tldCIsIm90aGVyUGxheWVyIiwicm9vbUNyZWF0ZWQiLCJwbGF5ZXJCeUlEIiwicm9vbUJ5SUQiLCJyb29tcyIsImRlbGV0ZVJvb20iLCJyb29tVG9EZWxldGUiLCJpbmRleE9mIiwic3FsVGV4dCIsIldJTiIsIkxPU1QiLCJjbGllbnQiLCJxdWVyeSIsInJlcyIsInJlbGVhc2UiLCJjYXRjaCIsImUiLCJzdGFjayIsIm5hbWUiLCJ0ZXh0IiwidmFsdWVzIiwidGhlbiIsInJvd3MiLCJ1bmRl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QUFDSCxPQVRMLEVBVUtQLEtBVkwsQ0FVVyxVQUFBQyxDQUFDLEVBQUk7QUFFUmhQLGVBQU8sQ0FBQ3VMLEtBQVIsQ0FBY3lELENBQUMsQ0FBQ0MsS0FBaEI7QUFDSCxPQWJMO0FBY0g7QUE5VEw7QUFBQTtBQUFBLGtDQWdVMEJuSSxNQWhVMUIsRUFnVTBDcUYsUUFoVTFDLEVBZ1UrRDtBQUFBOztBQUN2RG5NLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHdCQUF3QmtNLFFBQXBDO0FBQ0EsVUFBTXNELGtCQUFrQixHQUNwQjtBQUNJUCxZQUFJLEVBQUUsaUJBRFY7QUFFSUMsWUFBSSxFQUFFLDhDQUZWO0FBR0lDLGNBQU0sRUFBRSxDQUFDakQsUUFBRDtBQUhaLE9BREo7QUFPQSxXQUFLcEIsWUFBTCxDQUFrQjZELEtBQWxCLENBQXdCYSxrQkFBeEIsRUFDQTtBQURBLE9BRUtKLElBRkwsQ0FFVSxVQUFBUixHQUFHLEVBQUk7QUFDVDs7QUFFQSxjQUFJLENBQUN6QyxjQUFMLENBQW9CdEYsTUFBTSxDQUFDOUMsTUFBM0IsRUFBbUNtSSxRQUFuQztBQUNILE9BTkwsRUFPSzRDLEtBUEwsQ0FPVyxVQUFBQyxDQUFDLEVBQUk7QUFDUmhQLGVBQU8sQ0FBQ3VMLEtBQVIsQ0FBY3lELENBQUMsQ0FBQ0MsS0FBaEI7QUFDSCxPQVRMO0FBVUg7QUFHRDs7Ozs7OztBQXRWSjs7QUFBQTtBQUFBO0FBOFZBLElBQUl0RixpQkFBSixHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WEEsNEM7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJleHBvcnQgY2xhc3MgUG9ja2V5U29ja2V0TWVzc2FnZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBXQVRDSDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiV0FUQ0hcIjtcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgU0NPUkVfVVBEQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJTQ09SRV9VUERBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9QUE9ORU5UXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFlPVVJfVFVSTjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiWU9VUl9UVVJOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UX1NFVFRJTkdTOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9TRVRUSU5HU1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRU1BVENIOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVF9SRU1BVENIXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIERJU0NPTk5FQ1RfTVlfU09DS0VUOiBzdHJpbmcgPSBcIkNvbm5lY3Rpb25TaWduYWxzVHlwZS5cIiArICdESVNDT05ORUNUX01ZX1NPQ0tFVCc7XHJcblxyXG4gICAgLy8gcHVibGljIHN0YXRpYyBPUFBPTkVOVF9SRVNUQVJUOiBhbnk7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBCQUxMX0lOX1RIRV9IQUxMOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJCQUxMX0lOX1RIRV9IQUxMXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNDT1JFX1VQREFURUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlNDT1JFX1VQREFURURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ0hFQ0tfTkVYVF9UVVJOOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJDSEVDS19ORVhUX1RVUk5cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ0hBTkdFX1NUQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJDSEFOR0VfU1RBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1dOX0JBTExfVE9VQ0hFRF9GSVJTVDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1dOX0JBTExfVE9VQ0hFRF9GSVJTVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1VORF9USU1FUl9VUERBVEU6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlJPVU5EX1RJTUVSX1VQREFURVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBISURFX1RJTUVSOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJISURFX1RJTUVSXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEJBTExfV0FTX1NIT1Q6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkJBTExfV0FTX1NIT1RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgQUxMT0NBVEVEX1RJTUVfRUxBUFNFRDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQUxMT0NBVEVEX1RJTUVfRUxBUFNFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBST1VORF9TQ1JFRU5fVElNRVJfVVBEQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJST1VORF9TQ1JFRU5fVElNRVJfVVBEQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE1BVENIX0ZJTklTSEVEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJNQVRDSF9GSU5JU0hFRFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBFWElUX1NFUlZFUl9ST09NOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJFWElUX1NFUlZFUl9ST09NXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPT01fQ0xPU0VEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJST09NX0NMT1NFRFwiO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtGaW5pdGVTdGF0ZU1hY2hpbmV9IGZyb20gXCIuL3R5cGVzdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUG9ja2V5U3RhdGVzIHtcclxuICAgIC8qMCovb25Mb2FkLFxyXG4gICAgLyoxKi9vbk1haW5NZW51LFxyXG4gICAgLyoyKi9vblN0YXJ0LFxyXG4gICAgLyozKi9vblJvdW5kRW5kLFxyXG4gICAgLyo0Ki9vbkRlZmluZUNsaWVudCxcclxuICAgIC8qNSovb25TZWFyY2hGb3JQYXJ0bmVyLFxyXG4gICAgLyo2Ki9vbldhdGNoLFxyXG4gICAgLyo3Ki9vblJlYXJyYW5nZVN0aWNrLFxyXG4gICAgLyo4Ki9vblJlcG9zaXRpb25XaGl0ZUJhbGwsXHJcbiAgICAvKjkqL29uU2hvb3QsXHJcbiAgICAvKjEwKi9vbkVuZFR1cm4sXHJcbiAgICAvKjExKi9vbkVuZE1hdGNoLFxyXG4gICAgLyoxMiovb25QcmVwYXJlUm91bmRPbmUsXHJcbiAgICAvKjEzKi9vblByZXBhcmVSb3VuZFR3byxcclxuICAgIC8qMTQqL29uUHJlcGFyZVJvdW5kVGhyZWUsXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBlbnVtIFBvY2tleVN0YXRlcyB7XHJcbi8vICAgICBTdGFydEdhbWUsXHJcbi8vICAgICBQbGF5ZXJUdXJuLFxyXG4vLyAgICAgUGxheWVyVHVybkZpcnN0QmFsbCxcclxuLy8gICAgIE9wcG9uZW50VHVybixcclxuLy8gICAgIE9wcG9uZW50VHVybkZpcnN0QmFsbCxcclxuLy9cclxuLy8gfVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2NrZXlTdGF0ZU1hY2hpbmUge1xyXG5cclxuICAgIC8vIENvbnN0cnVjdCB0aGUgRlNNIHdpdGggdGhlIGluaXRhbCBzdGF0ZSwgaW4gdGhpcyBjYXNlIHRoZSBlbGV2YXRvciBzdGFydHMgd2l0aCBpdHMgZG9vcnMgb3BlbmVkXHJcbiAgICBwdWJsaWMgZnNtOiBGaW5pdGVTdGF0ZU1hY2hpbmU8UG9ja2V5U3RhdGVzPjtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogUG9ja2V5U3RhdGVNYWNoaW5lO1xyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgbmV4dFN0YXRlOiBhbnk7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBjdXJyZW50U3RhdGU6YW55O1xyXG5cclxuICAgIHN0YXRpYyBJbnN0YW5jZSgpOiBQb2NrZXlTdGF0ZU1hY2hpbmUge1xyXG4gICAgICAgIGlmICghUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5pbnN0YW5jZSA9IG5ldyBQb2NrZXlTdGF0ZU1hY2hpbmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuaW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbSA9IG5ldyBGaW5pdGVTdGF0ZU1hY2hpbmU8UG9ja2V5U3RhdGVzPihQb2NrZXlTdGF0ZXMub25Mb2FkKTtcclxuICAgICAgICAgICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLkluaXRpYWxpemVTdGF0ZXMoKTtcclxuICAgICAgICAgICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgczogc3RyaW5nID0gUG9ja2V5U3RhdGVzW1BvY2tleVN0YXRlcy5vbkxvYWRdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBTdGF0ZU1hY2hpbmUgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBzLCBcImJhY2tncm91bmQ6IHllbGxvdzsgY29sb3I6ICNmNjU0NmE7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLnByaW50RnNtQ3VycmVudFN0YXRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFBvY2tleVN0YXRlTWFjaGluZS5pbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIEluaXRpYWxpemVTdGF0ZXMoKSB7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Mb2FkKS50byhQb2NrZXlTdGF0ZXMub25NYWluTWVudSk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KS50byhQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3byk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vblNob290KTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2hvb3QpLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsYXlTdGF0ZUNoYW5naW5nKGRlbGF5ZWRTdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50U3RhdGUgPSBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5mc20uY3VycmVudFN0YXRlO1xyXG4gICAgICAgIHRoaXMubmV4dFN0YXRlID0gZGVsYXllZFN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVEZWxheWVkU3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuY2hhbmdlU3RhdGUodGhpcy5uZXh0U3RhdGUpO1xyXG4gICAgICAgIHRoaXMubmV4dFN0YXRlID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGFzU3RhdGVJblF1ZXVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICghXy5pc1VuZGVmaW5lZCh0aGlzLm5leHRTdGF0ZSkgJiYgXy5pc051bGwodGhpcy5uZXh0U3RhdGUpKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZShzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZXNbc3RhdGVdKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWMgU3RhdGVNYWNoaW5lIC0+IHN0YXRlIGRvZXMgbm90IGV4aXN0OiBcIiArIHN0YXRlLCBcImNvbG9yOiAjMDAwMDAwOyBiYWNrZ3JvdW5kOiNmZjk5MDBcIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RhdGUgPT0gUG9ja2V5U3RhdGVzLm9uU2hvb3QpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50IHN0YXRlPT09PT09PVwiKTtcclxuICAgICAgICAgICAgdGhpcy5wcmludEZzbUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc3RhdGU9PT09PT09XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN0b3BcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5nbyhzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5wcmludEZzbUN1cnJlbnRTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdGVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZzbSkge1xyXG4gICAgICAgICAgICBfLmZvckVhY2godGhpcy5mc20sIChzdGF0ZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT0gdGhpcy5mc20uY3VycmVudFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcyA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcyA9IFBvY2tleVN0YXRlc1tzdGF0ZV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJpbnRGc21DdXJyZW50U3RhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5jdXJyZW50U3RhdGUgPT0gUG9ja2V5U3RhdGVzLm9uU2hvb3QpIHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiBibGFjazsgY29sb3I6IHllbGxvdzsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiJWMgR2FtZU1hbmFnZXIgLT4gRlNNIGN1cnJlbnRTdGF0ZTogXCIgKyBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5nZXRDdXJyZW50U3RhdGVOYW1lKCksIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGNvbG9yOiAjZjY1NDZhOyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcbiAgICB9XHJcbn0iLCJcclxuICAgLyoqXHJcbiAgICAqIFRyYW5zaXRpb24gZ3JvdXBpbmcgdG8gZmFjaWxpYXRlIGZsdWVudCBhcGlcclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxUPikgeyB9XHJcblxyXG4gICAgICBwdWJsaWMgZnJvbVN0YXRlczogVFtdO1xyXG4gICAgICBwdWJsaWMgdG9TdGF0ZXM6IFRbXTtcclxuXHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogU3BlY2lmeSB0aGUgZW5kIHN0YXRlKHMpIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIHRvKC4uLnN0YXRlczogVFtdKSB7XHJcbiAgICAgICAgIHRoaXMudG9TdGF0ZXMgPSBzdGF0ZXM7XHJcbiAgICAgICAgIHRoaXMuZnNtLmFkZFRyYW5zaXRpb25zKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgYW55IHN0YXRlIGluIHRoZSBzdGF0ZSBlbnVtIGlzIHZhbHVlXHJcbiAgICAgICAqIFRha2VzIHRoZSBzdGF0ZSBlbnVtIGFzIGFuIGFyZ3VtZW50XHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgdG9Bbnkoc3RhdGVzOiBhbnkpIHtcclxuICAgICAgICAgdmFyIHRvU3RhdGVzOiBUW10gPSBbXTtcclxuICAgICAgICAgZm9yICh2YXIgcyBpbiBzdGF0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlcy5oYXNPd25Qcm9wZXJ0eShzKSkge1xyXG4gICAgICAgICAgICAgICB0b1N0YXRlcy5wdXNoKCg8VD5zdGF0ZXNbc10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLnRvU3RhdGVzID0gdG9TdGF0ZXM7XHJcbiAgICAgICAgIHRoaXMuZnNtLmFkZFRyYW5zaXRpb25zKHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIC8qKlxyXG4gICAgKiBJbnRlcm5hbCByZXByZXNlbnRhdGlvbiBvZiBhIHRyYW5zaXRpb24gZnVuY3Rpb25cclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBUcmFuc2l0aW9uRnVuY3Rpb248VD4ge1xyXG4gICAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZnNtOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4sIHB1YmxpYyBmcm9tOiBULCBwdWJsaWMgdG86IFQpIHsgfVxyXG4gICB9XHJcbiAgIFxyXG4gICAvKipcclxuICAgICogQSBzaW1wbGUgZmluaXRlIHN0YXRlIG1hY2hpbmUgaW1wbGVtZW50ZWQgaW4gVHlwZVNjcmlwdCwgdGhlIHRlbXBsYXRlZCBhcmd1bWVudCBpcyBtZWFudCB0byBiZSB1c2VkXHJcbiAgICAqIHdpdGggYW4gZW51bWVyYXRpb24uXHJcbiAgICAqL1xyXG4gICBleHBvcnQgY2xhc3MgRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgcHVibGljIGN1cnJlbnRTdGF0ZTogVDtcclxuICAgICAgcHJpdmF0ZSBfc3RhcnRTdGF0ZTogVDtcclxuICAgICAgcHJpdmF0ZSBfYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uOiBib29sZWFuO1xyXG4gICAgICBwcml2YXRlIF90cmFuc2l0aW9uRnVuY3Rpb25zOiBUcmFuc2l0aW9uRnVuY3Rpb248VD5bXSA9IFtdO1xyXG4gICAgICBwcml2YXRlIF9vbkNhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7IChmcm9tOiBULCBldmVudD86IGFueSk6IHZvaWQ7IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2V4aXRDYWxsYmFja3M6IHsgW2tleTogc3RyaW5nXTogeyAodG86IFQpOiBib29sZWFuOyB9W10gfSA9IHt9O1xyXG4gICAgICBwcml2YXRlIF9lbnRlckNhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7IChmcm9tOiBULCBldmVudD86IGFueSk6IGJvb2xlYW47IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2s6ICh0bz86IFQsIGZyb20/OiBUKSA9PiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgICAgIGNvbnN0cnVjdG9yKHN0YXJ0U3RhdGU6IFQsIGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gc3RhcnRTdGF0ZTtcclxuICAgICAgICAgdGhpcy5fc3RhcnRTdGF0ZSA9IHN0YXJ0U3RhdGU7XHJcbiAgICAgICAgIHRoaXMuX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiA9IGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIGFkZFRyYW5zaXRpb25zKGZjbjogVHJhbnNpdGlvbnM8VD4pIHtcclxuICAgICAgICAgZmNuLmZyb21TdGF0ZXMuZm9yRWFjaChmcm9tID0+IHtcclxuICAgICAgICAgICAgZmNuLnRvU3RhdGVzLmZvckVhY2godG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gT25seSBhZGQgdGhlIHRyYW5zaXRpb24gaWYgdGhlIHN0YXRlIG1hY2hpbmUgaXMgbm90IGN1cnJlbnRseSBhYmxlIHRvIHRyYW5zaXRpb24uXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2NhbkdvKGZyb20sIHRvKSkge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uRnVuY3Rpb25zLnB1c2gobmV3IFRyYW5zaXRpb25GdW5jdGlvbjxUPih0aGlzLCBmcm9tLCB0bykpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFja1xyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uKHN0YXRlOiBULCBjYWxsYmFjazogKGZyb20/OiBULCBldmVudD86IGFueSkgPT4gYW55KTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fb25DYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fb25DYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2ssIHJldHVybmluZ1xyXG4gICAgICAgKiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgd2lsbCBibG9jayB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlLlxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIG9uRW50ZXIoc3RhdGU6IFQsIGNhbGxiYWNrOiAoZnJvbT86IFQsIGV2ZW50PzogYW55KSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldID0gW107XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUgYW5kIGZpcmUgdGhlIGFzc29jaWF0ZWQgY2FsbGJhY2ssIHJldHVybmluZ1xyXG4gICAgICAgKiBmYWxzZSBpbiB0aGUgY2FsbGJhY2sgd2lsbCBibG9jayB0aGUgdHJhbnNpdGlvbiBmcm9tIHRoaXMgc3RhdGUuXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25FeGl0KHN0YXRlOiBULCBjYWxsYmFjazogKHRvPzogVCkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIHZhciBrZXkgPSBzdGF0ZS50b1N0cmluZygpO1xyXG4gICAgICAgICBpZiAoIXRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW2tleV0ucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdCBmb3IgYW4gaW52YWxpZCB0cmFuc2l0aW9uIGFuZCBoYW5kbGUgdGhlIGVycm9yLCByZXR1cm5pbmcgYSBmYWxzeSB2YWx1ZSB3aWxsIHRocm93IGFuXHJcbiAgICAgICAqIGV4Y2VwdGlvbiwgYSB0cnV0aHkgb25lIHdpbGwgc3dhbGxvdyB0aGUgZXhjZXB0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25JbnZhbGlkVHJhbnNpdGlvbihjYWxsYmFjazogKGZyb20/OiBULCB0bz86IFQpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICBpZighdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sgPSBjYWxsYmFja1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogRGVjbGFyZXMgdGhlIHN0YXJ0IHN0YXRlKHMpIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvbiwgbXVzdCBiZSBmb2xsb3dlZCB3aXRoIGEgJy50byguLi5lbmRTdGF0ZXMpJ1xyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGZyb20oLi4uc3RhdGVzOiBUW10pOiBUcmFuc2l0aW9uczxUPiB7XHJcbiAgICAgICAgIHZhciBfdHJhbnNpdGlvbiA9IG5ldyBUcmFuc2l0aW9uczxUPih0aGlzKTtcclxuICAgICAgICAgX3RyYW5zaXRpb24uZnJvbVN0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICAgcmV0dXJuIF90cmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgZnJvbUFueShzdGF0ZXM6IGFueSk6IFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgICAgdmFyIGZyb21TdGF0ZXM6IFRbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKHZhciBzIGluIHN0YXRlcykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVzLmhhc093blByb3BlcnR5KHMpKSB7XHJcbiAgICAgICAgICAgICAgIGZyb21TdGF0ZXMucHVzaCgoPFQ+c3RhdGVzW3NdKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdmFyIF90cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25zPFQ+KHRoaXMpO1xyXG4gICAgICAgICBfdHJhbnNpdGlvbi5mcm9tU3RhdGVzID0gZnJvbVN0YXRlcztcclxuICAgICAgICAgcmV0dXJuIF90cmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIF92YWxpZFRyYW5zaXRpb24oZnJvbTogVCwgdG86IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbnMuc29tZSh0ZiA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAodGYuZnJvbSA9PT0gZnJvbSAmJiB0Zi50byA9PT0gdG8pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIHdoZXRoZXIgYSB0cmFuc2l0aW9uIGJldHdlZW4gYW55IHR3byBzdGF0ZXMgaXMgdmFsaWQuXHJcbiAgICAgICAqICAgIElmIGFsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiBpcyB0cnVlLCBhbHdheXMgYWxsb3cgdHJhbnNpdGlvbnMgZnJvbSBhIHN0YXRlIGJhY2sgdG8gaXRzZWxmLlxyXG4gICAgICAgKiAgICAgT3RoZXJ3aXNlLCBjaGVjayBpZiBpdCdzIGEgdmFsaWQgdHJhbnNpdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgIHByaXZhdGUgX2NhbkdvKGZyb21TdGF0ZTogVCwgdG9TdGF0ZTogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgcmV0dXJuICh0aGlzLl9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb24gJiYgZnJvbVN0YXRlID09PSB0b1N0YXRlKSB8fCB0aGlzLl92YWxpZFRyYW5zaXRpb24oZnJvbVN0YXRlLCB0b1N0YXRlKTtcclxuICAgICAgfSBcclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBDaGVjayB3aGV0aGVyIGEgdHJhbnNpdGlvbiB0byBhIG5ldyBzdGF0ZSBpcyB2YWxpZFxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGNhbkdvKHN0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5fY2FuR28odGhpcy5jdXJyZW50U3RhdGUsIHN0YXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFRyYW5zaXRpb24gdG8gYW5vdGhlciB2YWxpZCBzdGF0ZVxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGdvKHN0YXRlOiBULCBldmVudD86IGFueSk6IHZvaWQge1xyXG4gICAgICAgICBpZiAoIXRoaXMuY2FuR28oc3RhdGUpKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrIHx8ICF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrKHRoaXMuY3VycmVudFN0YXRlLCBzdGF0ZSkpe1xyXG4gICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Vycm9yIG5vIHRyYW5zaXRpb24gZnVuY3Rpb24gZXhpc3RzIGZyb20gc3RhdGUgJyArIHRoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCkgKyAnIHRvICcgKyBzdGF0ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl90cmFuc2l0aW9uVG8oc3RhdGUsIGV2ZW50KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAgLyoqXHJcbiAgICAgICAqIFRoaXMgbWV0aG9kIGlzIGF2YWlsYmxlIGZvciBvdmVycmlkZGluZyBmb3IgdGhlIHNha2Ugb2YgZXh0ZW5zaWJpbGl0eS4gXHJcbiAgICAgICAqIEl0IGlzIGNhbGxlZCBpbiB0aGUgZXZlbnQgb2YgYSBzdWNjZXNzZnVsIHRyYW5zaXRpb24uXHJcbiAgICAgICAqL1xyXG4gICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgcHVibGljIG9uVHJhbnNpdGlvbihmcm9tOiBULCB0bzogVCkge1xyXG4gICAgICAgICAvLyBwYXNzLCBkb2VzIG5vdGhpbmcgdW50aWwgb3ZlcmlkZGVuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAqIFJlc2V0IHRoZSBmaW5pdGUgc3RhdGUgbWFjaGluZSBiYWNrIHRvIHRoZSBzdGFydCBzdGF0ZSwgRE8gTk9UIFVTRSBUSElTIEFTIEEgU0hPUlRDVVQgZm9yIGEgdHJhbnNpdGlvbi4gXHJcbiAgICAgICogVGhpcyBpcyBmb3Igc3RhcnRpbmcgdGhlIGZzbSBmcm9tIHRoZSBiZWdpbm5pbmcuXHJcbiAgICAgICovXHJcbiAgICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLl9zdGFydFN0YXRlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvKipcclxuICAgICAgICogV2hldGhlciBvciBub3QgdGhlIGN1cnJlbnQgc3RhdGUgZXF1YWxzIHRoZSBnaXZlbiBzdGF0ZVxyXG4gICAgICAgKi9cclxuICAgICAgcHVibGljIGlzKHN0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50U3RhdGUgPT09IHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwcml2YXRlIF90cmFuc2l0aW9uVG8oc3RhdGU6IFQsIGV2ZW50PzogYW55KSB7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZXhpdENhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGlmICghdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKCF0aGlzLl9vbkNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgdmFyIGNhbkV4aXQgPSB0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldLnJlZHVjZTxib29sZWFuPigoYWNjdW06IGJvb2xlYW4sIG5leHQ6ICh0bzogVCkgPT4gYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjdW0gJiYgKDxib29sZWFuPm5leHQuY2FsbCh0aGlzLCBzdGF0ZSkpO1xyXG4gICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgIHZhciBjYW5FbnRlciA9IHRoaXMuX2VudGVyQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldLnJlZHVjZTxib29sZWFuPigoYWNjdW06IGJvb2xlYW4sIG5leHQ6IChmcm9tOiBUKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgIHJldHVybiBhY2N1bSAmJiAoPGJvb2xlYW4+bmV4dC5jYWxsKHRoaXMsIHRoaXMuY3VycmVudFN0YXRlLCBldmVudCkpO1xyXG4gICAgICAgICB9LCB0cnVlKTtcclxuXHJcbiAgICAgICAgIGlmIChjYW5FeGl0ICYmIGNhbkVudGVyKSB7XHJcbiAgICAgICAgICAgIHZhciBvbGQgPSB0aGlzLmN1cnJlbnRTdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5fb25DYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0uZm9yRWFjaChmY24gPT4ge1xyXG4gICAgICAgICAgICAgICBmY24uY2FsbCh0aGlzLCBvbGQsIGV2ZW50KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMub25UcmFuc2l0aW9uKG9sZCwgc3RhdGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuXHJcbi8vIG1haW50YWluIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGZvciBwZW9wbGUgdXNpbmcgdGhlIHBhc2NhbCBjYXNlZCB2ZXJzaW9uXHJcbi8vIHZhciBUeXBlU3RhdGUgPSB0eXBlc3RhdGU7XHJcbiIsImV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgU0VBUkNIOiBzdHJpbmcgPSBcIi9zZWFyY2hpbmdcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUExBWTogc3RyaW5nID0gXCIvcGxheVwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0RXZlbnRzIHtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld0Nvbm5lY3Rpb246IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJuZXdDb25uZWN0aW9uXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxldHNDb25uZWN0OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibGV0c0Nvbm5lY3RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgam9pblJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJqb2luUm9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBqb2luZWRSb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiam9pbmVkUm9vbVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBsZWZ0Um9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImxlZnRSb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHByaXZhdGVNZXNzYWdlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwicHJpdmF0ZU1lc3NhZ2VcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2lnbmVkSW5Vc2VyRGF0YTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImdldFNpZ25lZEluVXNlckRhdGFcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YWJhc2U6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhYmFzZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBkaXNjb25uZWN0TXlTb2NrZXQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJkaXNjb25uZWN0TXlTb2NrZXRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2FtZVNldHVwOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZ2FtZVNldHVwXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHJvb21DcmVhdGVkOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwicm9vbUNyZWF0ZWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YUZyb21TZXJ2ZXI6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhRnJvbVNlcnZlclwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhRnJvbUNsaWVudDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50XCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGE6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJ1cGRhdGVQbGF5ZXJEYXRhXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0U2VuZGluZ1NuYXBzaG90czogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInN0YXJ0U2VuZGluZ1NuYXBzaG90c1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBzbmFwc2hvdFVwZGF0ZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInNuYXBzaG90VXBkYXRlXCI7XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIHBhcnRuZXJGb3VuZENoYW5uZWw6IHN0cmluZyA9IFwicGFydG5lckZvdW5kQ2hhbm5lbFwiO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBXSE9fV0FOVFNfVE9fUExBWTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiV0hPX1dBTlRTX1RPX1BMQVlcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSV9XQU5UX1RPX1BMQVk6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuXCIgKyBcIklfV0FOVFNfVE9fUExBWVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBIRUxMTzogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiSEVMTE9cIjtcclxuXHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDUvOC8yMDE5XHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbWVyIHtcclxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcclxuICAgIHByaXZhdGUgY3VycmVudFRpbWU6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9uVXBkYXRlQ2FsbGJhY2s6IEZ1bmN0aW9uLCBwcml2YXRlIG9uQ29tcGxldGVDYWxsYmFjazogRnVuY3Rpb24pIHtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHB1YmxpYyBzdGFydChpOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUaW1lID0gaTtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAvL2NhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKXt9O1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFRpbWUtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRpbWUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3AoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRUaW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOC8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BvY2tleVBsYXllckRhdGF9IGZyb20gXCIuL3BvY2tleS1wbGF5ZXItZGF0YVwiO1xyXG5pbXBvcnQge1xyXG4gICAgRnJhbWV3b3JrU29ja2V0RXZlbnRzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuLypcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IHtQb2NrZXlTZXR0aW5nc30gZnJvbSBcIi4uL2NsaWVudC9wb2NrZXktc2V0dGluZ3NcIjtcclxuaW1wb3J0IHtTaWduYWxzTWFuYWdlcn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1NpZ25hbHMvc2lnbmFscy1tYW5hZ2VyXCI7XHJcbmltcG9ydCB7UG9ja2V5U2lnbmFsVHlwZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9TaWduYWxzTW9kdWxlL3BvY2tleS1zaWduYWwtdHlwZXNcIjtcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL1NldHRpbmdzXCI7XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgcHVibGljIGRhdGE6IFBvY2tleVBsYXllckRhdGEgPSB7fTtcclxuICAgIHB1YmxpYyBzb2NrZXQ6IGFueTtcclxuICAgIHB1YmxpYyBpc0xvb2tpbmdGb3JQYXJ0bmVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBwdWJsaWMgaXNDbGllbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0ZpcnN0VG9TdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTb2NrZXQoc29ja2V0OiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgbGV0IG5ld1NvY2tldElEOiBzdHJpbmcgPSBzb2NrZXQuaWQudG9TdHJpbmcoKS5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNILCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgbmV3U29ja2V0SUQgPSBuZXdTb2NrZXRJRC5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuUExBWSwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGEuc29ja2V0SUQgPSBuZXdTb2NrZXRJRDtcclxuICAgICAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zb2NrZXRJRClcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgc29ja2V0IGluaXRpYWxpemVkOiBcIiArIHRoaXMuZGF0YS5zb2NrZXRJRCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZVBsYXllckRhdGEodXNlcm5hbWVEYXRhOiBQb2NrZXlQbGF5ZXJEYXRhKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuYXZhdGFyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5hdmF0YXIgPSB1c2VybmFtZURhdGEuYXZhdGFyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5jb2xvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuY29sb3IgPSB1c2VybmFtZURhdGEuY29sb3I7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmRlY2FsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5kZWNhbCA9IHVzZXJuYW1lRGF0YS5kZWNhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZmVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEuZmVsdCA9IHVzZXJuYW1lRGF0YS5mZWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5wbGF5ZXJfbGV2ZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnBsYXllcl9sZXZlbCA9IHVzZXJuYW1lRGF0YS5wbGF5ZXJfbGV2ZWw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnN0aWNrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5zdGljayA9IHVzZXJuYW1lRGF0YS5zdGljaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudG90YWxfcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS50b3RhbF9wb2ludHMgPSB1c2VybmFtZURhdGEudG90YWxfcG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnRvdGFsX3BvaW50cyA9IHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLm5pY2tuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5uaWNrbmFtZSA9IHVzZXJuYW1lRGF0YS5uaWNrbmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudXNlcl9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudXNlcl9pZCA9IHVzZXJuYW1lRGF0YS51c2VyX2lkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5maXJzdF9sb2dpbl9kYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5maXJzdF9sb2dpbl9kYXRlID0gdXNlcm5hbWVEYXRhLmZpcnN0X2xvZ2luX2RhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnR5cGUgPSB1c2VybmFtZURhdGEudHlwZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uUmVjZWl2ZVNuYXBzaG90VXBkYXRlKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU25hcHNob3QgcmVjZWl2ZWQvLy8vLy8vLy9cIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTbmFwc2hvdCByZWNlaXZlZC8vLy8vLy8vLy9cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHNlbmRHYW1lU25hcHNob3QoZGF0YTogYW55KTogdm9pZCB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJzZW5kIHNuYXBzaG90IHRvIG90aGVyIHBsYXllclwiKTtcclxuICAgICAgICB0aGlzLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGZEZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWVyIHJlbW92ZWRcIik7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOC8yMDE5XHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7UG9ja2V5U3RhdGVzfSBmcm9tIFwiLi4vY2xpZW50L01vZHVsZXMvR2FtZU1vZHVsZS9TdGF0ZU1hY2hpbmUvcG9ja2V5LXN0YXRlLW1hY2hpbmVcIjtcclxuaW1wb3J0IHtQb2NrZXlQbGF5ZXJEYXRhfSBmcm9tIFwiLi9wb2NrZXktcGxheWVyLWRhdGFcIjtcclxuXHJcbmV4cG9ydCBlbnVtIFJvdW5kQ29tcGxldGVUeXBlIHtcclxuICAgIG1hdGNoQ29tcGxldGUsXHJcbiAgICByb3VuZENvbXBsZXRlLFxyXG4gICAgcGxheWVyRGlzY29ubmVjdGVkLFxyXG4gICAgcmVtYXRjaCxcclxuICAgIG9wcG9uZW50Rm91bmRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3VuZFZPIHtcclxuICAgIHR5cGU/OiBSb3VuZENvbXBsZXRlVHlwZSxcclxuICAgIHJvdW5kTnVtYmVyPzogbnVtYmVyLFxyXG4gICAgbGVmdFBsYXllckRhdGE/OiBQb2NrZXlQbGF5ZXJEYXRhLFxyXG4gICAgcmlnaHRQbGF5ZXJEYXRhPzogUG9ja2V5UGxheWVyRGF0YSxcclxuICAgIC8vIHBsYXllckRpc2Nvbm5lY3RlZCxcclxuICAgIC8vIHJlbWF0Y2hcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2NrZXlTb3VuZFZPIHtcclxuICAgIHNvdW5kQXQ6IG51bWJlcixcclxuICAgIHNvdW5kTmFtZTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9ja2V5U2NyZWVuU2hvdFxyXG57XHJcbiAgICBpZDpudW1iZXIsXHJcbiAgICBnYW1lRWxlbWVudHM6UG9ja2V5R2FtZUVsZW1lbnRWT1tdXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9ja2V5R2FtZUVsZW1lbnRWTyB7XHJcbiAgICBzb2NrZXRJRD86IHN0cmluZyxcclxuICAgIHR5cGU/OiBCYWxsVHlwZSxcclxuICAgIG5hbWU/OiBzdHJpbmcsXHJcbiAgICByb3RhdGlvbj86IG51bWJlcixcclxuICAgIHhQb3M/OiBudW1iZXIsXHJcbiAgICB5UG9zPzogbnVtYmVyLFxyXG4gICAgdmlzaWJsZT86IGJvb2xlYW4sXHJcbiAgICBhbHBoYT86IG51bWJlcixcclxuICAgIHRpbWVFbGFwc2VkPzogbnVtYmVyLFxyXG4gICAgaXNPblJlcG9zaXRpb24/OiBib29sZWFuXHJcbiAgICBwaXZvdD86IG51bWJlcixcclxuICAgIHN0YXRlPzpQb2NrZXlTdGF0ZXMsXHJcbiAgICBkaXJlY3Rpb24/Om51bWJlcixcclxuICAgIGNhbkJlUmVtb3ZlZD86Ym9vbGVhbixcclxuICAgIHNjYWxlPzpudW1iZXJcclxufVxyXG5cclxuLy8gZXhwb3J0IGludGVyZmFjZSBQb2NrZXlHcmFwaGljRWxlbWVudFZPIHtcclxuLy8gICAgIHR5cGU6IFBvY2tleU9iamVjdFR5cGUsXHJcbi8vICAgICBuYW1lOiBzdHJpbmcsXHJcbi8vICAgICBwb3NpdGlvbnM6IG51bWJlcltdW10sXHJcbi8vICAgICBjb2xvcjogbnVtYmVyW10sXHJcbi8vICAgICByb3RhdGlvbjogbnVtYmVyXHJcbi8vIH1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9ja2V5U25hcHNob3Qge1xyXG4gICAgZWxlbWVudHM6IFBvY2tleUdhbWVFbGVtZW50Vk9bXSxcclxuICAgIC8vIGdyYXBoaWNzOiBQb2NrZXlHcmFwaGljRWxlbWVudFZPW10sXHJcbiAgICBzb3VuZHM6IFBvY2tleVNvdW5kVk9bXSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb3VuZFNldHVwIHtcclxuICAgIHJvdW5kTnVtYmVyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhbGxUeXBlIHtcclxuICAgIExlZnQgPSAnTGVmdEJhbGwnLFxyXG4gICAgUmlnaHQgPSAnUmlnaHRCYWxsJyxcclxuICAgIFdoaXRlID0gXCJXaGl0ZUJhbGxcIixcclxuICAgIFB1Y2sgPSBcIlB1Y2tcIlxyXG59XHJcblxyXG5leHBvcnQgZW51bSBXaW5TdGF0dXMge1xyXG4gICAgV0lOLFxyXG4gICAgTE9TVFxyXG59IiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiA0LzkvMjAxOVxyXG4gKi9cclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcbmltcG9ydCB7RnJhbWV3b3JrU29ja2V0RXZlbnRzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2NrZXlQbGF5ZXJTZXJ2ZXIgZXh0ZW5kcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAvLyBzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50LCB0aGlzLnVwZGF0ZVBsYXllckRhdGEuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gdGhpcy5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50LCB0aGlzLnVwZGF0ZVBsYXllckRhdGEuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUGxheWVyRGF0YSh1c2VybmFtZURhdGE6IHt9KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIudXBkYXRlUGxheWVyRGF0YSh1c2VybmFtZURhdGEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInNlcnZlciBwbGF5ZXIgdXBkYXRlZC4gc2VuZGluZyBwbGF5ZXIgZGF0YSB1cGRhdGUgdG8gY2xpZW50XCIpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnVwZGF0ZVBsYXllckRhdGEsIHRoaXMuZGF0YSk7XHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOC8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NvbW1vbi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQge1BvY2tleVNvY2tldE1lc3NhZ2VzfSBmcm9tIFwiLi4vY2xpZW50L01vZHVsZXMvQ29ubmVjdGlvbk1vZHVsZS9wb2NrZXktY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuaW1wb3J0IHtQb2NrZXlTdGF0ZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9HYW1lTW9kdWxlL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZVwiO1xyXG5pbXBvcnQge1RpbWVyfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvVXRpbHMvdGltZXJcIjtcclxuaW1wb3J0IHtCYWxsVHlwZSwgUm91bmRDb21wbGV0ZVR5cGUsIFJvdW5kVk99IGZyb20gXCIuLi9jb21tb24vcG9ja2V5LXZhbHVlLW9iamVjdHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb2NrZXlSb29tIHtcclxuICAgIHB1YmxpYyBpZDogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcGxheWVyczogUGxheWVyW10gPSBbXTtcclxuICAgIHB1YmxpYyBpbzogYW55O1xyXG4gICAgcHJpdmF0ZSBnYW1lRGF0YTogUm91bmRWTyA9IHtyb3VuZE51bWJlcjogMSwgdHlwZTogUm91bmRDb21wbGV0ZVR5cGUub3Bwb25lbnRGb3VuZH07XHJcbiAgICBwcml2YXRlIHNjb3JlVXBkYXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB3aGl0ZUJhbGxJblRoZUhhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb3duQmFsbEZhdWx0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9wcG9uZW50QmFsbFNjb3JlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50UGxheWVyOiBQbGF5ZXI7XHJcbiAgICBwcml2YXRlIHJvdW5kVGltZXI6IFRpbWVyO1xyXG4gICAgcHJpdmF0ZSByb3VuZFNjcmVlblRpbWVyOiBUaW1lcjtcclxuICAgIHByaXZhdGUgcm91bmREdXJhdGlvbjogbnVtYmVyID0gMjA7XHJcblxyXG4gICAgcHJpdmF0ZSByb3VuZEZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG1hdGNoRmluaXNoZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBpbzogYW55LCBwcml2YXRlIHNlbGZEZWxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuaW8gPSBpbztcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnMucHVzaCh0aGlzLnBsYXllcjEpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVycy5wdXNoKHRoaXMucGxheWVyMik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29tIGNyZWF0ZWRcIik7XHJcbiAgICAgICAgdGhpcy5yb3VuZFRpbWVyID0gbmV3IFRpbWVyKHRoaXMub25Sb3VuZFRpbWVyVXBkYXRlLmJpbmQodGhpcyksIHRoaXMub25Sb3VuZFRpbWVyQ29tcGxldGUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5yb3VuZFNjcmVlblRpbWVyID0gbmV3IFRpbWVyKHRoaXMub25Sb3VuZFNjcmVlblVwZGF0ZS5iaW5kKHRoaXMpLCB0aGlzLm9uUm91bmRTY3JlZW5Db21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRTY3JlZW5VcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX1NDUkVFTl9USU1FUl9VUERBVEUsIHRoaXMucm91bmRTY3JlZW5UaW1lci5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRTY3JlZW5Db21wbGV0ZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbmRTdGFydFJvdW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblJvdW5kVGltZXJVcGRhdGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX1RJTUVSX1VQREFURSwgdGhpcy5yb3VuZFRpbWVyLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3VuZFRpbWVyQ29tcGxldGUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkhJREVfVElNRVIpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5BTExPQ0FURURfVElNRV9FTEFQU0VEKTtcclxuICAgICAgICAvLyB0aGlzLnJvdW5kVGltZUVsYXBzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuY2hlY2tOZXh0VHVybigpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ISURFX1RJTUVSLCB0aGlzLnJvdW5kVGltZXIuZ2V0Q3VycmVudFRpbWUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzc2lnblBsYXllcihwbGF5ZXI6IFBsYXllcik6IHZvaWQge1xyXG4gICAgICAgIHBsYXllci5kYXRhLnJvdW5kc1dvbiA9IDA7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCAoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGxheWE6IFwiICsgcGxheWVyKTtcclxuICAgICAgICAgICAgdGhpcy5zZW5kR2FtZVNuYXBzaG90KHBsYXllci5kYXRhLnNvY2tldElELCBkYXRhKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5FWElUX1NFUlZFUl9ST09NLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIgPT0gdGhpcy5wbGF5ZXJzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuRVhJVF9TRVJWRVJfUk9PTSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuRVhJVF9TRVJWRVJfUk9PTSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxmRGVsZXRlKHRoaXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkJBTExfSU5fVEhFX0hBTEwsIChiYWxsVHlwZTogQmFsbFR5cGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTY29yZShwbGF5ZXIuZGF0YS5zb2NrZXRJRCwgYmFsbFR5cGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLk9XTl9CQUxMX1RPVUNIRURfRklSU1QsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbk93bkJhbGxUb3VjaGVkRmlyc3QoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEVDS19ORVhUX1RVUk4sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja05leHRUdXJuKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuQkFMTF9XQVNfU0hPVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnJvdW5kVGltZUVsYXBzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkhJREVfVElNRVIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9vbTogXCIgKyB0aGlzLmlkICsgXCIgLT4gcGxheWVyIGFzc2lnbmVkOiBcIiArIHBsYXllci5kYXRhLnNvY2tldElEICsgXCIgLT4gdG90YWwgcGxheWVyczogXCIgKyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJvb206IFwiICsgdGhpcy5pZCArIFwiIC0+ICk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnMubGVuZ3RoID09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kRmlyc3RSb3VuZFNldHVwKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Pd25CYWxsVG91Y2hlZEZpcnN0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVNjb3JlKHNvY2tldElEOiBzdHJpbmcsIGJhbGxUeXBlOiBCYWxsVHlwZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwbGF5ZXI6IFBsYXllcjtcclxuICAgICAgICBsZXQgb3Bwb25lbnQ6IFBsYXllcjtcclxuICAgICAgICAvLyBfLmZvckVhY2godGhpcy5wbGF5ZXJzLCAocGxheWE6IFBsYXllcikgPT4ge1xyXG4gICAgICAgIGlmIChzb2NrZXRJRCA9PSB0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICBwbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgICAgIG9wcG9uZW50ID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1sxXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICBpZiAoYmFsbFR5cGUgPT0gcGxheWVyLmRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IHBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBsYXllci5kYXRhLmN1cnJlbnRTY29yZS0tO1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVXBkYXRlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmIChiYWxsVHlwZSA9PSBvcHBvbmVudC5kYXRhLnR5cGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBsYXllciA9PSBvcHBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wcG9uZW50LmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IEJhbGxUeXBlLldoaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwbGF5ZXIuZGF0YS5yb3VuZHNXb24rKztcclxuICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnJvdW5kc1dvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChvcHBvbmVudC5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG9wcG9uZW50LmRhdGEucm91bmRzV29uKys7XHJcbiAgICAgICAgICAgIGlmIChvcHBvbmVudC5kYXRhLnJvdW5kc1dvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hdGNoRmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tOZXh0VHVybigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVyLnN0b3AoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWF0Y2hGaW5pc2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbWVEYXRhLnR5cGUgPSBSb3VuZENvbXBsZXRlVHlwZS5tYXRjaENvbXBsZXRlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9PSB0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZURhdGEubGVmdFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZURhdGEucmlnaHRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLk1BVENIX0ZJTklTSEVELCB0aGlzLmdhbWVEYXRhKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJvdW5kRmluaXNoZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlcisrO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZURhdGEucm91bmROdW1iZXIgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFR1cm5EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdW5kRmluaXNoZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFNlY29uZFJvdW5kU2V0dXAoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX0ZJTklTSEVELCB0aGlzLmdhbWVEYXRhKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlJPVU5EX0ZJTklTSEVEKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vd25CYWxsRmF1bHQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMub3Bwb25lbnRCYWxsU2NvcmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VDdXJyZW50UGxheWVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlc2V0VHVybkRhdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGFuZ2VDdXJyZW50UGxheWVyKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBsYXllciA9ICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gdGhpcy5wbGF5ZXJzWzBdKSA/IHRoaXMucGxheWVyc1sxXSA6IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB0aGlzLnJlc2V0VHVybkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc2V0VHVybkRhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vcHBvbmVudEJhbGxTY29yZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLndoaXRlQmFsbEluVGhlSGFsbCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub3duQmFsbEZhdWx0ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gXy5mb3JFYWNoKHRoaXMucGxheWVycywgKHBsYXllcjogUGxheWVyKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGJhbGxTb2NrZXRJRCA9PSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCkge1xyXG4gICAgLy8gICAgICAgICBwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PSBwbGF5ZXJTb2NrZXRJRCkge1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vICAgICBpZiAocGxheWVyLmRhdGEuY3VycmVudFNjb3JlIDw9IDApIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kR2FtZVNuYXBzaG90KHNvY2tldElEOiBzdHJpbmcsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic25hcHNob3QgcmVjZWl2ZWQgb24gcm9vbTogXCIgKyB0aGlzLmlkKTtcclxuICAgICAgICBpZiAodGhpcy5wbGF5ZXJzWzBdLmRhdGEuc29ja2V0SUQgPT0gc29ja2V0SUQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zY29yZVVwZGF0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLlNDT1JFX1VQREFURUQsIFt0aGlzLnBsYXllcnNbMF0uZGF0YSwgdGhpcy5wbGF5ZXJzWzFdLmRhdGFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kRmlyc3RSb3VuZFNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5pc0ZpcnN0VG9TdGFydCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEucm91bmRzV29uID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhLmxlZnRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5SaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnJvdW5kc1dvbiA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIHRoaXMuZ2FtZURhdGEpO1xyXG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5zZW5kU3RhcnRSb3VuZC5iaW5kKHRoaXMpLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRTZWNvbmRSb3VuZFNldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEudHlwZSA9IFJvdW5kQ29tcGxldGVUeXBlLnJvdW5kQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS50eXBlID0gQmFsbFR5cGUuTGVmdDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSA3O1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEubGVmdFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEudHlwZSA9IEJhbGxUeXBlLlJpZ2h0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMF0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIHRoaXMuZ2FtZURhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnJvdW5kU2NyZWVuVGltZXIuc3RhcnQoNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kU3RhcnRSb3VuZCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlciA9PSAxKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5nYW1lRGF0YS5yb3VuZE51bWJlciA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBsYXllcnNbMV0gPT0gdGhpcy5jdXJyZW50UGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDIvMjcvMjAxOVxyXG4gKi9cclxuaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCB7U2VydmVyfSBmcm9tIFwibm9kZS1zdGF0aWNcIjtcclxuaW1wb3J0ICogYXMgaHR0cCBmcm9tIFwiaHR0cFwiO1xyXG5pbXBvcnQgc29ja2V0SU8gZnJvbSAnc29ja2V0LmlvJztcclxuaW1wb3J0IHtQb29sfSBmcm9tIFwicGdcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsIEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLFxyXG4gICAgRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlc1xyXG59IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuaW1wb3J0IHtQb2NrZXlSb29tfSBmcm9tIFwiLi9wb2NrZXktcm9vbVwiO1xyXG5pbXBvcnQge1BvY2tleVBsYXllclNlcnZlcn0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1zZXJ2ZXJcIjtcclxuaW1wb3J0IHtQbGF5ZXJ9IGZyb20gXCIuLi9jb21tb24vcGxheWVyXCI7XHJcbmltcG9ydCB7V2luU3RhdHVzfSBmcm9tIFwiLi4vY29tbW9uL3BvY2tleS12YWx1ZS1vYmplY3RzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9ja2V5U2VydmVySW5kZXgge1xyXG4gICAgcHJvdGVjdGVkIGZpbGU6IGFueTtcclxuICAgIHByb3RlY3RlZCBodHRwU2VydmVyOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc29ja2V0SW86IGFueTtcclxuICAgIHByb3RlY3RlZCBzb2NrZXRJc0ZyZWU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFiYXNlQ29ubmVjdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcm90ZWN0ZWQgZGF0YWJhc2VQb29sOiBQb29sIHwgdW5kZWZpbmVkO1xyXG4gICAgcHJvdGVjdGVkIHJvb21zOiBQb2NrZXlSb29tW10gPSBbXTtcclxuICAgIHByb3RlY3RlZCBwbGF5ZXJzOiBQb2NrZXlQbGF5ZXJTZXJ2ZXJbXSA9IFtdO1xyXG5cclxuICAgIC8vIHByb3RlY3RlZCBwbGF5aW5nTmFtZXNwYWNlXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplU2VydmVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGIoKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZVNvY2tldCgpO1xyXG4gICAgICAgIC8vIHRoaXMuY3JlYXRlR2FtZSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVTZXJ2ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5maWxlID0gbmV3IFNlcnZlcignZGlzdCcsIHsgLy8gYmluIGlzIHRoZSBmb2xkZXIgY29udGFpbmluZyBvdXIgaHRtbCwgZXRjXHJcbiAgICAgICAgICAgIGNhY2hlOiAwLFx0Ly8gZG9uJ3QgY2FjaGVcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICBnemlwOiB0cnVlXHQvLyBnemlwIG91ciBhc3NldHNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODA7XHJcbiAgICAgICAgLy8gY3JlYXRlIG91ciBzZXJ2ZXJcclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcigocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgcmVxdWVzdC5hZGRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlLnNlcnZlKHJlcXVlc3QsIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3QucmVzdW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5vbignbGlzdGVuaW5nJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb2ssIHNlcnZlciBpcyBydW5uaW5nJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHR0cFNlcnZlci5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVEYigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbCA9IG5ldyBQb29sKHtcclxuICAgICAgICAgICAgdXNlcjogJ25wdnN3aGdneGdzZ3hrJyxcclxuICAgICAgICAgICAgaG9zdDogJ2VjMi01NC0yMjUtOTgtMTMxLmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJyxcclxuICAgICAgICAgICAgZGF0YWJhc2U6ICdkMXVrMnZucGRqbDI4cScsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnNTU2ZTUwMTNlYTFkZWM1OWQyZGFhNWQ3YmZmMjIzZWMwMjhjMTZkYTRhYzU3N2RiOTRlNzhkYmM3NTQ3MTk2NScsXHJcbiAgICAgICAgICAgIHBvcnQ6IDU0MzIsXHJcbiAgICAgICAgICAgIHNzbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5vbignZXJyb3InLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuZXhwZWN0ZWQgZXJyb3Igb24gaWRsZSBjbGllbnQnLCBlcnIpO1xyXG4gICAgICAgICAgICBwcm9jZXNzLmV4aXQoLTEpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5jb25uZWN0KChlcnIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzLWEgbG9nYXQsIG1lcmdlLlwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVTb2NrZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJbyA9IHNvY2tldElPKCk7XHJcbiAgICAgICAgdGhpcy5zb2NrZXRJby5zZXJ2ZUNsaWVudCh0cnVlKTsgLy8gdGhlIHNlcnZlciB3aWxsIHNlcnZlIHRoZSBjbGllbnQganMgZmlsZVxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8uYXR0YWNoKHRoaXMuaHR0cFNlcnZlcik7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU29ja2V0RXZlbnRzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVTb2NrZXRFdmVudHMoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuc29ja2V0SW8ub24oJ2Nvbm5lY3Rpb24nLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubmV3Q29ubmVjdGlvbiwgcGxheWVyLmRhdGEuc29ja2V0SUQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBjb25uZWN0ZWQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvL3RvZG8gYWljaSB0cmVidWllIHNhIHRlIG9jdXBpIGRlIGRpc2Nvbm5lY3QgZGFyIHNpIHBlIGNlbGFsYWx0ZSBzb2NrZXR1cmlcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsICh1c2VybmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLT4gZ2V0IHNpZ25lZCBpbiBwbGF5ZXInKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGFiYXNlQ29ubmVjdGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy51cGRhdGVQbGF5ZXJEYXRhYmFzZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YWJhc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IHVwZGF0ZSBwbGF5ZXIgZGF0YScpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVBsYXllckRhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlVXNlckRiKHBsYXllciwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbignZGlzY29ubmVjdCcsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImEgaWVzaXQgZGUgcGUgY2FuYWx1bCBwYWNpaTogXCIgKyBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBzb2NrZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuc2VsZkRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGxlZnQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC50byhyb29tKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5sZWZ0Um9vbSwgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKnRoaXMuc29ja2V0SW8ub24oJ2Rpc2Nvbm5lY3QnLCAoc29ja2V0OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKHBsYXllcjogUGxheWVyLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IHNvY2tldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VzZXIgZGlzY29ubmVjdGVkJyk7XHJcbiAgICAgICAgICAgIC8vIGNvbm5lY3RDb3VudGVyLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgbGVmdC4gdXNlcnMgY29ubmVjdGVkOiAnICsgdGhpcy5wbGF5ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgfSk7Ki9cclxuICAgICAgICAvLyB0aGlzLnNvY2tldElvLm9uKCdkaXNjb25uZWN0JywgKHNvY2tldCkgPT4ge1xyXG4gICAgICAgIC8vc1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGxldCBsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSA9IHRoaXMuc29ja2V0SW8ub2YoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gpO1xyXG4gICAgICAgIGxvb2tpbmdGb3JQYXJ0bmVyTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpZDogc3RyaW5nID0gc29ja2V0LmlkLnRvU3RyaW5nKCkucmVwbGFjZShGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSB0aGlzLmdldFBsYXllckJ5SUQoaWQsIHNvY2tldCk7XHJcbiAgICAgICAgICAgIHBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNIICsgJyAtPiBzb21lb25lIGNvbm5lY3RlZDogJyArIHBsYXllci5kYXRhLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0Y2hNYWtlcihwbGF5ZXIpO1xyXG4gICAgICAgICAgICAvKnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIChtc2c6IGFueSwgaWQ6IHN0cmluZywgcGFydG5lcklEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGV0c0Nvbm5lY3QsIG1zZywgaWQsIHBhcnRuZXJJRCk7XHJcbiAgICAgICAgICAgIH0pOyovXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwbGF5aW5nTmFtZXNwYWNlID0gdGhpcy5zb2NrZXRJby5vZihGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlBMQVkpO1xyXG5cclxuICAgICAgICBwbGF5aW5nTmFtZXNwYWNlLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZLCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IHRoaXMuZ2V0UGxheWVyQnlJRChpZCwgc29ja2V0KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5Sb29tLCAocm9vbUlEOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuam9pbihyb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb2NrZXlSb29tOiBQb2NrZXlSb29tID0gdGhpcy5nZXRSb29tQnlJRChyb29tSUQsIHBsYXlpbmdOYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICAgICAgcG9ja2V5Um9vbS5hc3NpZ25QbGF5ZXIocGxheWVyKTtcclxuICAgICAgICAgICAgICAgIC8vIHNvY2tldC5icm9hZGNhc3QuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pblJvb20sIHJvb20sIGlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuam9pbmVkUm9vbSwgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIGpvaW4gcm9vbS4gcm9vbSBuaWNrbmFtZTogXCIgKyByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNvY2tldC5vbignZGlzY29ubmVjdCcsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhIGllc2l0IGRlIHBlIGNhbmFsdWwgcGFjaWk6IFwiICsgc29ja2V0LmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LnRvKHJvb21JRCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGVmdFJvb20sIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc29ja2V0LmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCAocm9vbTogYW55LCBtZXNzYWdlVHlwZTogRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMsIG1lc3NhZ2VEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlVHlwZSA9PSBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5IRUxMTylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlIGZhY2UgaGVsbG91bFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LnRvKHJvb20pLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnByaXZhdGVNZXNzYWdlLCBtZXNzYWdlVHlwZSwgbWVzc2FnZURhdGEpO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmRpc2Nvbm5lY3RNeVNvY2tldCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtYXRjaE1ha2VyKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzLmZvckVhY2goKG90aGVyUGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllciAhPSBvdGhlclBsYXllciAmJiBvdGhlclBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIndlIGhhdmUgYSByb29tXCIpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGxheWVyLmlzTG9va2luZ0ZvclBhcnRuZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcm9vbUlEOiBzdHJpbmcgPSBwbGF5ZXIuZGF0YS5zb2NrZXRJRCArIFwiI1wiICsgb3RoZXJQbGF5ZXIuZGF0YS5zb2NrZXRJRDtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG4gICAgICAgICAgICAgICAgb3RoZXJQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnJvb21DcmVhdGVkLCByb29tSUQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQbGF5ZXJCeUlEKGlkOiBzdHJpbmcsIHNvY2tldDogYW55KTogUG9ja2V5UGxheWVyU2VydmVyIHtcclxuICAgICAgICBsZXQgcGxheWVyQnlJRDogUG9ja2V5UGxheWVyU2VydmVyID0gbmV3IFBvY2tleVBsYXllclNlcnZlcigpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0IHBsYXllciBieSBpZCAtPiBzZWFyY2hpbmc6IFwiICsgaWQpO1xyXG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgICAgIHBsYXllckJ5SUQuc2V0U29ja2V0KHNvY2tldCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXJCeUlELnNvY2tldCA9IHNvY2tldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBsYXllckJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSb29tQnlJRChyb29tSUQ6IHN0cmluZywgaW86IGFueSk6IFBvY2tleVJvb20ge1xyXG4gICAgICAgIC8vIGxldCBwbGF5ZXJCeUlEOiBQbGF5ZXIgPSBuZXcgUGxheWVyKFwiXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZ2V0IHJvb20gYnkgaWQgLT4gc2VhcmNoaW5nOiBcIiArIHJvb21JRCk7XHJcbiAgICAgICAgbGV0IHJvb21CeUlEOiBQb2NrZXlSb29tO1xyXG5cclxuICAgICAgICB0aGlzLnJvb21zLmZvckVhY2goKHJvb206IFBvY2tleVJvb20pID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT0gcm9vbUlEKSB7XHJcbiAgICAgICAgICAgICAgICByb29tQnlJRCA9IHJvb207XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAocGxheWVyLmRhdGEuc29ja2V0SUQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gZm91bmQ6IFwiICsgaWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgcGxheWVyQnlJRCA9IHBsYXllcjtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcm9vbUJ5SUQpIHtcclxuICAgICAgICAgICAgcm9vbUJ5SUQgPSBuZXcgUG9ja2V5Um9vbShyb29tSUQsIGlvLCB0aGlzLmRlbGV0ZVJvb20uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXMucHVzaChyb29tQnlJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9vbUJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVSb29tKHJvb21Ub0RlbGV0ZTpQb2NrZXlSb29tKTp2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnJvb21zLmluZGV4T2Yocm9vbVRvRGVsZXRlLCAwKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb21zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInJvb20gZGVsZXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZVVzZXJEYihwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHNxbFRleHQ6IHN0cmluZyA9IFwiVVBEQVRFIHBvY2tleV90YWJsZSBTRVQgXCIgKyBkYXRhW1wiY29sdW1uXCJdICsgXCI9J1wiICsgZGF0YVtcInZhbHVlXCJdICsgXCInIFdIRVJFIHVzZXJfaWQ9J1wiICsgZGF0YVtcInVzZXJJRFwiXSArIFwiJ1wiO1xyXG5cclxuICAgICAgICBpZiAoZGF0YVtcInR5cGVcIl0gPT0gXCJ3aW5TdGF0dXNcIikge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtcInZhbHVlXCJdID09IFdpblN0YXR1cy5XSU4pIHtcclxuICAgICAgICAgICAgICAgIC8vIHNxbFRleHQgPSBcIlVQREFURSBVU0VSX1RBQkxFIFNFVCBcIiArIGRhdGFbXCJjb2x1bW5cIl0gKyBcIj0ncG9pbnRzJyArIDEwIFdIRVJFIEdJRD0nWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgICAgIHNxbFRleHQgPSAnVVBEQVRFIHB1YmxpYy5cIlVTRVJfVEFCTEVcIiBTRVQgXCJwb2ludHNcIiA9IFwicG9pbnRzXCIgKyAxMCBXSEVSRSBcIlVTRVJfVEFCTEVcIi5cIkdJRFwiID0gJyArIFwiJ1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNxbFRleHQgbGEgd2luOiBcIiArIHNxbFRleHQpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGFbXCJ2YWx1ZVwiXSA9PSBXaW5TdGF0dXMuTE9TVCkge1xyXG4gICAgICAgICAgICAgICAgc3FsVGV4dCA9ICdVUERBVEUgcHVibGljLlwiVVNFUl9UQUJMRVwiIFNFVCBcInBvaW50c1wiID0gXCJwb2ludHNcIiArIDEwIFdIRVJFIFwiVVNFUl9UQUJMRVwiLlwiR0lEXCIgPSAnICsgXCInWW9qaW1ibydcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzcWxUZXh0OiBcIiArIHNxbFRleHQsIFwidHlwZTogXCIgKyBkYXRhW1widHlwZVwiXSwgXCJ2YWx1ZTogXCIgKyBkYXRhW1widmFsdWVcIl0pO1xyXG5cclxuXHJcbiAgICAgICAgKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY2xpZW50ID0gYXdhaXQgdGhpcy5kYXRhYmFzZVBvb2wuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHNxbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3VtIHNlIGZhY2VcIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yVXNlcklEKHBsYXllciwgZGF0YVtcInVzZXJJRFwiXSk7XHJcblxyXG4gICAgICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgICAgICAgY2xpZW50LnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKCkuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlLnN0YWNrKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tGb3JVc2VySUQocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIHVzZXJuYW1lOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNoZWNraW5nIGRiIGZvciB1c2VyX2lkOiBcIiArIHVzZXJuYW1lKTtcclxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcclxuICAgICAgICAgICAgLy8gZ2l2ZSB0aGUgcXVlcnkgYSB1bmlxdWUgbmlja25hbWVcclxuICAgICAgICAgICAgbmFtZTogJ2ZldGNoLXVzZXInLFxyXG4gICAgICAgICAgICB0ZXh0OiAnU0VMRUNUICogRlJPTSBwb2NrZXlfdGFibGUgV0hFUkUgVVNFUl9JRCA9ICQxJyxcclxuICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wucXVlcnkocXVlcnkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yb3dzWzBdID09IHVuZGVmaW5lZCB8fCByZXMucm93c1swXSA9PSBcInVuZGVmaW5lZFwiIHx8IHJlcy5yb3dzWzBdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZU5ld1VzZXIocGxheWVyLnNvY2tldCwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIudXBkYXRlUGxheWVyRGF0YShyZXMucm93c1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMucm93c1swXSk7IC8vIFsnQnJpYW4nLCAnQ2FybHNvbiddXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVOZXdVc2VyKHBsYXllcjogUGxheWVyLCB1c2VybmFtZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGluZyBuZXcgdXNlcjogXCIgKyB1c2VybmFtZSk7XHJcbiAgICAgICAgY29uc3QgY3JlYXRlTmV3VXNlclF1ZXJ5ID1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2NyZWF0ZS1uZXctdXNlcicsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnSU5TRVJUIElOVE8gcG9ja2V5X3RhYmxlKHVzZXJfaWQpIFZBTFVFUygkMSknLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbdXNlcm5hbWVdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLnF1ZXJ5KGNyZWF0ZU5ld1VzZXJRdWVyeSlcclxuICAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvKiBjb25zb2xlLmxvZyhcIm5ldyB1c2VyIGNyZWF0ZWQuIHVzZXIgc2F2ZWQgaW50byBkYlwiKTtcclxuICAgICAgICAgICAgICAgICB0aGlzLnNvY2tldElvLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmdldFNpZ25lZEluVXNlckRhdGEsIHJlcy5yb3dzWzBdKTsqL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIuc29ja2V0LCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjaylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIHByaXZhdGUgY3JlYXRlR2FtZSgpOiB2b2lkIHtcclxuICAgICAgICAgdGhpcy5nYW1lRW5naW5lID0gbmV3IFBvY2tleUdhbWVFbmdpbmVGb3JTZXJ2ZXIoe3RyYWNlTGV2ZWw6IFRyYWNlLlRSQUNFX05PTkV9KTtcclxuICAgICAgICAgdGhpcy5zZXJ2ZXJFbmdpbmUgPSBuZXcgUG9ja2V5U2VydmVyRW5naW5lKHRoaXMuc29ja2V0SW8sIHRoaXMuZ2FtZUVuZ2luZSwge2RlYnVnOiB7fSwgdXBkYXRlUmF0ZTogNn0pO1xyXG4gICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZVxyXG4gICAgICAgICAvLyB0aGlzLnNlcnZlckVuZ2luZS5zdGFydCgpO1xyXG4gICAgIH0qL1xyXG59XHJcblxyXG5uZXcgUG9ja2V5U2VydmVySW5kZXgoKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcG9seWZpbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaHR0cFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1zdGF0aWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2V0LmlvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=