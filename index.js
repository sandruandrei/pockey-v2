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

_defineProperty(PockeySocketMessages, "ROUND_FINISHED", "PockeySocketMessages." + "ROUND_FINISHED");

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
  function PockeyRoom(id, io) {
    _classCallCheck(this, PockeyRoom);

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

    _defineProperty(this, "roundDuration", 20);

    _defineProperty(this, "roundFinished", false);

    _defineProperty(this, "matchFinished", false);

    this.id = id;
    this.io = io; // this.players.push(this.player1);
    // this.players.push(this.player2);

    console.log("room created");
    this.roundTimer = new _client_qFramework_Utils_timer__WEBPACK_IMPORTED_MODULE_3__["Timer"](this.onRoundTimerUpdate.bind(this), this.onRoundTimerComplete.bind(this));
  }

  _createClass(PockeyRoom, [{
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

      player.data.roundWins = 0;
      player.socket.on(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].snapshotUpdate, function (data) {
        // console.log("playa: " + player);
        _this.sendGameSnapshot(player.data.socketID, data);
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
        player.data.roundWins++;

        if (player.data.roundWins == 2) {
          this.matchFinished = true;
        }
      } else if (opponent.data.currentScore <= 0) {
        this.roundFinished = true;
        opponent.data.roundWins++;

        if (opponent.data.roundWins == 2) {
          this.matchFinished = true;
        }
      }
    }
  }, {
    key: "checkNextTurn",
    value: function checkNextTurn() {
      // this.roundTimer.stop();
      if (this.matchFinished) {} else if (this.roundFinished) {
        this.gameData.roundNumber++;

        if (this.gameData.roundNumber == 2) {
          this.resetTurnData();
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
      this.players[0].data.currentScore = 2;
      this.gameData.leftPlayerData = this.players[0].data;
      this.players[1].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Right;
      this.players[1].data.currentScore = 2;
      this.gameData.rightPlayerData = this.players[1].data;
      this.io.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].gameSetup, this.gameData);
      setTimeout(this.sendStartRound.bind(this), 3000);
    }
  }, {
    key: "sendSecondRoundSetup",
    value: function sendSecondRoundSetup() {
      // this.players[0].isFirstToStart = true;
      // if (this.players[0].isFirstToStart) {
      this.gameData.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["RoundCompleteType"].roundComplete;
      this.currentPlayer = this.players[1];
      this.players[1].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Left;
      this.players[1].data.currentScore = 2;
      this.gameData.leftPlayerData = this.players[1].data;
      this.players[0].data.type = _common_pockey_value_objects__WEBPACK_IMPORTED_MODULE_4__["BallType"].Right;
      this.players[0].data.currentScore = 2;
      this.gameData.rightPlayerData = this.players[0].data; //
      // } else {
      //     this.gameData.leftPlayerData = this.players[0].data;
      //     this.gameData.rightPlayerData = this.players[1].data;
      // }
      // this.currentPlayer = this.players[0];
      // this.players[0].data.type = BallType.Left;
      // this.players[0].data.currentScore = 7;
      // this.gameData.leftPlayerData = this.players[0].data;
      //
      // this.players[1].data.type = BallType.Right;
      // this.players[1].data.currentScore = 7;
      // this.gameData.rightPlayerData = this.players[1].data;

      this.io.to(this.id).emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].gameSetup, this.gameData); // this.gameData.type = RoundCompleteType.roundComplete
      //
      // if (this.players[0].isFirstToStart) {
      //     this.gameData.leftPlayerData = this.players[1].data;
      //     this.gameData.rightPlayerData = this.players[0].data;
      // } else {
      //     this.gameData.leftPlayerData = this.players[0].data;
      //     this.gameData.rightPlayerData = this.players[1].data;
      // }
      // setTimeout(this.sendStartRound.bind(this), 3000);
    }
  }, {
    key: "sendStartRound",
    value: function sendStartRound() {
      if (this.players[0].isFirstToStart) {
        this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
        this.players[0].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
      } else {
        this.players[0].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onWatch);
        this.players[1].socket.emit(_client_qFramework_AbstractModules_Connection_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_0__["FrameworkSocketEvents"].startSendingSnapshots);
        this.players[1].socket.emit(_client_Modules_ConnectionModule_pockey_connection_channels_and_messages__WEBPACK_IMPORTED_MODULE_1__["PockeySocketMessages"].CHANGE_STATE, _client_Modules_GameModule_StateMachine_pockey_state_machine__WEBPACK_IMPORTED_MODULE_2__["PockeyStates"].onRearrangeStick);
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
        roomByID = new _pockey_room__WEBPACK_IMPORTED_MODULE_6__["PockeyRoom"](roomID, io);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9Nb2R1bGVzL0Nvbm5lY3Rpb25Nb2R1bGUvcG9ja2V5LWNvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvTW9kdWxlcy9HYW1lTW9kdWxlL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L01vZHVsZXMvR2FtZU1vZHVsZS9TdGF0ZU1hY2hpbmUvdHlwZXN0YXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xpZW50L3FGcmFtZXdvcmsvVXRpbHMvdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9wb2NrZXktdmFsdWUtb2JqZWN0cy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3BvY2tleS1wbGF5ZXItc2VydmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvcG9ja2V5LXJvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9wb2NrZXktc2VydmVyLWluZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLXN0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic29ja2V0LmlvXCIiXSwibmFtZXMiOlsiUG9ja2V5U29ja2V0TWVzc2FnZXMiLCJQb2NrZXlTdGF0ZXMiLCJQb2NrZXlTdGF0ZU1hY2hpbmUiLCJmc20iLCJmcm9tIiwib25Mb2FkIiwidG8iLCJvbk1haW5NZW51Iiwib25SZWFycmFuZ2VTdGljayIsIm9uU2VhcmNoRm9yUGFydG5lciIsIm9uUHJlcGFyZVJvdW5kT25lIiwib25XYXRjaCIsIm9uRW5kVHVybiIsIm9uUHJlcGFyZVJvdW5kVHdvIiwib25Sb3VuZEVuZCIsIm9uUHJlcGFyZVJvdW5kVGhyZWUiLCJvblJlcG9zaXRpb25XaGl0ZUJhbGwiLCJvbkVuZE1hdGNoIiwib25TaG9vdCIsImRlbGF5ZWRTdGF0ZSIsIm5leHRTdGF0ZSIsIkluc3RhbmNlIiwiY2hhbmdlU3RhdGUiLCJfIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwicHJpbnRGc21DdXJyZW50U3RhdGUiLCJnbyIsInMiLCJjdXJyZW50U3RhdGUiLCJnZXRDdXJyZW50U3RhdGVOYW1lIiwiaW5zdGFuY2UiLCJpbml0aWFsaXplZCIsIkZpbml0ZVN0YXRlTWFjaGluZSIsIkluaXRpYWxpemVTdGF0ZXMiLCJUcmFuc2l0aW9ucyIsInN0YXRlcyIsInRvU3RhdGVzIiwiYWRkVHJhbnNpdGlvbnMiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJUcmFuc2l0aW9uRnVuY3Rpb24iLCJzdGFydFN0YXRlIiwiYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiX3N0YXJ0U3RhdGUiLCJfYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIiwiZmNuIiwiZnJvbVN0YXRlcyIsImZvckVhY2giLCJfY2FuR28iLCJfdHJhbnNpdGlvbkZ1bmN0aW9ucyIsImNhbGxiYWNrIiwia2V5IiwidG9TdHJpbmciLCJfb25DYWxsYmFja3MiLCJfZW50ZXJDYWxsYmFja3MiLCJfZXhpdENhbGxiYWNrcyIsIl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrIiwiX3RyYW5zaXRpb24iLCJzb21lIiwidGYiLCJmcm9tU3RhdGUiLCJ0b1N0YXRlIiwiX3ZhbGlkVHJhbnNpdGlvbiIsImV2ZW50IiwiY2FuR28iLCJFcnJvciIsIl90cmFuc2l0aW9uVG8iLCJjYW5FeGl0IiwicmVkdWNlIiwiYWNjdW0iLCJuZXh0IiwiY2FsbCIsImNhbkVudGVyIiwib2xkIiwib25UcmFuc2l0aW9uIiwiRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcyIsIkZyYW1ld29ya1NvY2tldEV2ZW50cyIsIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzIiwiVGltZXIiLCJvblVwZGF0ZUNhbGxiYWNrIiwib25Db21wbGV0ZUNhbGxiYWNrIiwiaSIsImN1cnJlbnRUaW1lIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJQbGF5ZXIiLCJzb2NrZXQiLCJuZXdTb2NrZXRJRCIsImlkIiwicmVwbGFjZSIsIlNFQVJDSCIsIlBMQVkiLCJkYXRhIiwic29ja2V0SUQiLCJ1c2VybmFtZURhdGEiLCJhdmF0YXIiLCJjb2xvciIsImRlY2FsIiwiZmVsdCIsInBsYXllcl9sZXZlbCIsInN0aWNrIiwidG90YWxfcG9pbnRzIiwibmlja25hbWUiLCJ1c2VyX2lkIiwiZmlyc3RfbG9naW5fZGF0ZSIsInR5cGUiLCJlbWl0Iiwic25hcHNob3RVcGRhdGUiLCJSb3VuZENvbXBsZXRlVHlwZSIsIkJhbGxUeXBlIiwiV2luU3RhdHVzIiwiUG9ja2V5UGxheWVyU2VydmVyIiwidXBkYXRlUGxheWVyRGF0YSIsIlBvY2tleVJvb20iLCJpbyIsInJvdW5kTnVtYmVyIiwib3Bwb25lbnRGb3VuZCIsInJvdW5kVGltZXIiLCJvblJvdW5kVGltZXJVcGRhdGUiLCJiaW5kIiwib25Sb3VuZFRpbWVyQ29tcGxldGUiLCJST1VORF9USU1FUl9VUERBVEUiLCJnZXRDdXJyZW50VGltZSIsIkhJREVfVElNRVIiLCJjdXJyZW50UGxheWVyIiwiQUxMT0NBVEVEX1RJTUVfRUxBUFNFRCIsInBsYXllciIsInJvdW5kV2lucyIsIm9uIiwic2VuZEdhbWVTbmFwc2hvdCIsIkJBTExfSU5fVEhFX0hBTEwiLCJiYWxsVHlwZSIsInVwZGF0ZVNjb3JlIiwiT1dOX0JBTExfVE9VQ0hFRF9GSVJTVCIsIm9uT3duQmFsbFRvdWNoZWRGaXJzdCIsIkNIRUNLX05FWFRfVFVSTiIsImNoZWNrTmV4dFR1cm4iLCJCQUxMX1dBU19TSE9UIiwic3RvcCIsInBsYXllcnMiLCJsZW5ndGgiLCJzZW5kRmlyc3RSb3VuZFNldHVwIiwib3duQmFsbEZhdWx0Iiwib3Bwb25lbnQiLCJvcHBvbmVudEJhbGxTY29yZWQiLCJjdXJyZW50U2NvcmUiLCJzY29yZVVwZGF0ZWQiLCJXaGl0ZSIsIndoaXRlQmFsbEluVGhlSGFsbCIsInJvdW5kRmluaXNoZWQiLCJtYXRjaEZpbmlzaGVkIiwiZ2FtZURhdGEiLCJyZXNldFR1cm5EYXRhIiwic2VuZFNlY29uZFJvdW5kU2V0dXAiLCJDSEFOR0VfU1RBVEUiLCJjaGFuZ2VDdXJyZW50UGxheWVyIiwic3RhcnRTZW5kaW5nU25hcHNob3RzIiwic3RhcnQiLCJyb3VuZER1cmF0aW9uIiwiU0NPUkVfVVBEQVRFRCIsImlzRmlyc3RUb1N0YXJ0IiwiTGVmdCIsImxlZnRQbGF5ZXJEYXRhIiwiUmlnaHQiLCJyaWdodFBsYXllckRhdGEiLCJnYW1lU2V0dXAiLCJzZXRUaW1lb3V0Iiwic2VuZFN0YXJ0Um91bmQiLCJyb3VuZENvbXBsZXRlIiwiUG9ja2V5U2VydmVySW5kZXgiLCJpbml0aWFsaXplU2VydmVyIiwiaW5pdGlhbGl6ZURiIiwiY3JlYXRlU29ja2V0IiwiZmlsZSIsIlNlcnZlciIsImNhY2hlIiwiZ3ppcCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImh0dHBTZXJ2ZXIiLCJodHRwIiwicmVxdWVzdCIsInJlc3BvbnNlIiwiYWRkTGlzdGVuZXIiLCJzZXJ2ZSIsInJlc3VtZSIsImxpc3RlbiIsImRhdGFiYXNlUG9vbCIsIlBvb2wiLCJ1c2VyIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJzc2wiLCJlcnIiLCJlcnJvciIsImV4aXQiLCJjb25uZWN0IiwiZGF0YWJhc2VDb25uZWN0ZWQiLCJzb2NrZXRJbyIsInNvY2tldElPIiwic2VydmVDbGllbnQiLCJhdHRhY2giLCJoYW5kbGVTb2NrZXRFdmVudHMiLCJzZXRTb2NrZXQiLCJuZXdDb25uZWN0aW9uIiwiZ2V0U2lnbmVkSW5Vc2VyRGF0YSIsInVzZXJuYW1lIiwiY2hlY2tGb3JVc2VySUQiLCJ1cGRhdGVQbGF5ZXJEYXRhYmFzZSIsInVwZGF0ZVVzZXJEYiIsImluZGV4Iiwic3BsaWNlIiwic2VsZkRlc3Ryb3kiLCJsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZSIsIm9mIiwiZ2V0UGxheWVyQnlJRCIsImlzTG9va2luZ0ZvclBhcnRuZXIiLCJtYXRjaE1ha2VyIiwicGxheWluZ05hbWVzcGFjZSIsImpvaW5Sb29tIiwicm9vbUlEIiwiam9pbiIsInBvY2tleVJvb20iLCJnZXRSb29tQnlJRCIsImFzc2lnblBsYXllciIsImpvaW5lZFJvb20iLCJsZWZ0Um9vbSIsImRpc2Nvbm5lY3QiLCJwcml2YXRlTWVzc2FnZSIsInJvb20iLCJtZXNzYWdlVHlwZSIsIm1lc3NhZ2VEYXRhIiwiSEVMTE8iLCJicm9hZGNhc3QiLCJkaXNjb25uZWN0TXlTb2NrZXQiLCJvdGhlclBsYXllciIsInJvb21DcmVhdGVkIiwicGxheWVyQnlJRCIsInJvb21CeUlEIiwicm9vbXMiLCJzcWxUZXh0IiwiV0lOIiwiTE9TVCIsImNsaWVudCIsInF1ZXJ5IiwicmVzIiwicmVsZWFzZSIsImNhdGNoIiwiZSIsInN0YWNrIiwibmFtZSIsInRleHQiLCJ2YWx1ZXMiLCJ0aGVuIiwicm93cyIsInVuZGVmaW5lZCIsImNyZWF0ZU5ld1VzZXIiLCJjcmVhdGVOZXdVc2VyUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sSUFBTUEsb0JBQWI7QUFBQTtBQUFBOztnQkFBYUEsb0IsV0FDcUIsMEJBQTBCLE87O2dCQUQvQ0Esb0IsY0FHd0IsMEJBQTBCLFU7O2dCQUhsREEsb0IsZUFJeUIsMEJBQTBCLFc7O2dCQUpuREEsb0IsdUJBS2lDLDBCQUEwQixtQjs7Z0JBTDNEQSxvQixzQkFNZ0MsMEJBQTBCLGtCOztnQkFOMURBLG9CLDBCQU9vQywyQkFBMkIsc0I7O2dCQVAvREEsb0Isc0JBV2dDLDBCQUEwQixrQjs7Z0JBWDFEQSxvQixtQkFZNkIsMEJBQTBCLGU7O2dCQVp2REEsb0IscUJBYStCLDBCQUEwQixpQjs7Z0JBYnpEQSxvQixrQkFjNEIsMEJBQTBCLGM7O2dCQWR0REEsb0IsNEJBZXNDLDBCQUEwQix3Qjs7Z0JBZmhFQSxvQix3QkFnQmtDLDBCQUEwQixvQjs7Z0JBaEI1REEsb0IsZ0JBaUIwQiwwQkFBMEIsWTs7Z0JBakJwREEsb0IsbUJBa0I2QiwwQkFBMEIsZTs7Z0JBbEJ2REEsb0IsNEJBbUJzQywwQkFBMEIsd0I7O2dCQW5CaEVBLG9CLG9CQW9COEIsMEJBQTBCLGdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCckU7QUFDQTtBQUVPLElBQUtDLFlBQVosQyxDQWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztXQXpCWUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtBQUFBQSxjLENBQUFBLFk7QUFBQUEsYyxDQUFBQSxZO0FBQUFBLGMsQ0FBQUEsWTtHQUFBQSxZLEtBQUFBLFk7O0FBNEJMLElBQU1DLGtCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUEseUNBTW1DLEtBTm5DOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHVDQWlDK0I7QUFDdkIsV0FBS0MsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ0ksTUFBM0IsRUFBbUNDLEVBQW5DLENBQXNDTCxZQUFZLENBQUNNLFVBQW5EO0FBRUEsV0FBS0osR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ00sVUFBM0IsRUFBdUNELEVBQXZDLENBQTBDTCxZQUFZLENBQUNPLGdCQUF2RDtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNNLFVBQTNCLEVBQXVDRCxFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDUSxrQkFBdkQsRUFKdUIsQ0FNdkI7O0FBQ0EsV0FBS04sR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1Esa0JBQTNCLEVBQStDSCxFQUEvQyxDQUFrREwsWUFBWSxDQUFDUyxpQkFBL0Q7QUFDQSxXQUFLUCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDUyxpQkFBM0IsRUFBOENKLEVBQTlDLENBQWlETCxZQUFZLENBQUNVLE9BQTlEO0FBQ0EsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1MsaUJBQTNCLEVBQThDSixFQUE5QyxDQUFpREwsWUFBWSxDQUFDTyxnQkFBOUQ7QUFFQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVyxTQUEzQixFQUFzQ04sRUFBdEMsQ0FBeUNMLFlBQVksQ0FBQ1ksaUJBQXREO0FBQ0EsV0FBS1YsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1UsT0FBM0IsRUFBb0NMLEVBQXBDLENBQXVDTCxZQUFZLENBQUNZLGlCQUFwRDtBQUNBLFdBQUtWLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNZLGlCQUEzQixFQUE4Q1AsRUFBOUMsQ0FBaURMLFlBQVksQ0FBQ08sZ0JBQTlEO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1ksaUJBQTNCLEVBQThDUCxFQUE5QyxDQUFpREwsWUFBWSxDQUFDVSxPQUE5RDtBQUVBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNhLFVBQTNCLEVBQXVDUixFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDYyxtQkFBdkQ7QUFDQSxXQUFLWixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYyxtQkFBM0IsRUFBZ0RULEVBQWhELENBQW1ETCxZQUFZLENBQUNPLGdCQUFoRTtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLG1CQUEzQixFQUFnRFQsRUFBaEQsQ0FBbURMLFlBQVksQ0FBQ2UscUJBQWhFO0FBQ0EsV0FBS2IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2MsbUJBQTNCLEVBQWdEVCxFQUFoRCxDQUFtREwsWUFBWSxDQUFDVSxPQUFoRSxFQW5CdUIsQ0FvQnZCO0FBRUE7QUFDQTs7QUFFQSxXQUFLUixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxxQkFBM0IsRUFBa0RWLEVBQWxELENBQXFETCxZQUFZLENBQUNPLGdCQUFsRTtBQUNBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNlLHFCQUEzQixFQUFrRFYsRUFBbEQsQ0FBcURMLFlBQVksQ0FBQ1UsT0FBbEU7QUFDQSxXQUFLUixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxxQkFBM0IsRUFBa0RWLEVBQWxELENBQXFETCxZQUFZLENBQUNXLFNBQWxFO0FBRUEsV0FBS1QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csU0FBM0IsRUFBc0NOLEVBQXRDLENBQXlDTCxZQUFZLENBQUNPLGdCQUF0RDtBQUVBLFdBQUtMLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDTyxnQkFBcEQ7QUFFQSxXQUFLTCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDVSxPQUEzQixFQUFvQ0wsRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ2dCLFVBQXBEO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDZ0IsVUFBN0Q7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZSxxQkFBM0IsRUFBa0RWLEVBQWxELENBQXFETCxZQUFZLENBQUNnQixVQUFsRTtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNpQixPQUEzQixFQUFvQ1osRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ2dCLFVBQXBEO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1MsaUJBQTNCLEVBQThDSixFQUE5QyxDQUFpREwsWUFBWSxDQUFDZ0IsVUFBOUQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDWSxpQkFBM0IsRUFBOENQLEVBQTlDLENBQWlETCxZQUFZLENBQUNnQixVQUE5RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNjLG1CQUEzQixFQUFnRFQsRUFBaEQsQ0FBbURMLFlBQVksQ0FBQ2dCLFVBQWhFO0FBQ0EsV0FBS2QsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csU0FBM0IsRUFBc0NOLEVBQXRDLENBQXlDTCxZQUFZLENBQUNnQixVQUF0RDtBQUNBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNhLFVBQTNCLEVBQXVDUixFQUF2QyxDQUEwQ0wsWUFBWSxDQUFDZ0IsVUFBdkQ7QUFDQSxXQUFLZCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDUSxrQkFBM0IsRUFBK0NILEVBQS9DLENBQWtETCxZQUFZLENBQUNnQixVQUEvRDtBQUVBLFdBQUtkLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNnQixVQUEzQixFQUF1Q1gsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ00sVUFBdkQ7QUFDQSxXQUFLSixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDZ0IsVUFBM0IsRUFBdUNYLEVBQXZDLENBQTBDTCxZQUFZLENBQUNTLGlCQUF2RDtBQUNBLFdBQUtQLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNnQixVQUEzQixFQUF1Q1gsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ1Esa0JBQXZEO0FBRUEsV0FBS04sR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDaUIsT0FBN0Q7QUFDQSxXQUFLZixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDTyxnQkFBM0IsRUFBNkNGLEVBQTdDLENBQWdETCxZQUFZLENBQUNVLE9BQTdEO0FBQ0EsV0FBS1IsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ08sZ0JBQTNCLEVBQTZDRixFQUE3QyxDQUFnREwsWUFBWSxDQUFDVyxTQUE3RDtBQUVBLFdBQUtULEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNpQixPQUEzQixFQUFvQ1osRUFBcEMsQ0FBdUNMLFlBQVksQ0FBQ1csU0FBcEQ7QUFDQSxXQUFLVCxHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDaUIsT0FBM0IsRUFBb0NaLEVBQXBDLENBQXVDTCxZQUFZLENBQUNhLFVBQXBEO0FBRUEsV0FBS1gsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ1csU0FBM0IsRUFBc0NOLEVBQXRDLENBQXlDTCxZQUFZLENBQUNlLHFCQUF0RDtBQUNBLFdBQUtiLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNXLFNBQTNCLEVBQXNDTixFQUF0QyxDQUF5Q0wsWUFBWSxDQUFDVSxPQUF0RDtBQUNBLFdBQUtSLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNXLFNBQTNCLEVBQXNDTixFQUF0QyxDQUF5Q0wsWUFBWSxDQUFDYSxVQUF0RDtBQUVBLFdBQUtYLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDYSxVQUFwRDtBQUNBLFdBQUtYLEdBQUwsQ0FBU0MsSUFBVCxDQUFjSCxZQUFZLENBQUNVLE9BQTNCLEVBQW9DTCxFQUFwQyxDQUF1Q0wsWUFBWSxDQUFDZSxxQkFBcEQ7QUFFQSxXQUFLYixHQUFMLENBQVNDLElBQVQsQ0FBY0gsWUFBWSxDQUFDYSxVQUEzQixFQUF1Q1IsRUFBdkMsQ0FBMENMLFlBQVksQ0FBQ08sZ0JBQXZEO0FBQ0EsV0FBS0wsR0FBTCxDQUFTQyxJQUFULENBQWNILFlBQVksQ0FBQ2EsVUFBM0IsRUFBdUNSLEVBQXZDLENBQTBDTCxZQUFZLENBQUNVLE9BQXZEO0FBRUg7QUFsR0w7QUFBQTtBQUFBLHVDQW9HOEJRLFlBcEc5QixFQW9HdUQ7QUFDL0M7QUFDQSxXQUFLQyxTQUFMLEdBQWlCRCxZQUFqQjtBQUNIO0FBdkdMO0FBQUE7QUFBQSx5Q0F5R3NDO0FBQzlCakIsd0JBQWtCLENBQUNtQixRQUFuQixHQUE4QkMsV0FBOUIsQ0FBMEMsS0FBS0YsU0FBL0M7QUFDQSxXQUFLQSxTQUFMLEdBQWlCLElBQWpCO0FBQ0g7QUE1R0w7QUFBQTtBQUFBLHNDQThHc0M7QUFDOUIsVUFBSSxDQUFDRyxrREFBQSxDQUFjLEtBQUtILFNBQW5CLENBQUQsSUFBa0NHLDZDQUFBLENBQVMsS0FBS0gsU0FBZCxDQUF0QyxFQUNJLE9BQU8sSUFBUDtBQUVKLGFBQU8sS0FBUDtBQUNIO0FBbkhMO0FBQUE7QUFBQSxnQ0FxSHVCSSxLQXJIdkIsRUFxSHlDO0FBQ2pDLFVBQUksQ0FBQ3ZCLFlBQVksQ0FBQ3VCLEtBQUQsQ0FBakIsRUFBMEI7QUFDdEJDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLDhDQUE4Q0YsS0FBMUQsRUFBaUUsb0NBQWpFO0FBRUg7O0FBQ0QsVUFBSUEsS0FBSyxJQUFJdkIsWUFBWSxDQUFDaUIsT0FBMUIsRUFBbUM7QUFDL0JPLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHNCQUFaO0FBQ0EsYUFBS0Msb0JBQUw7QUFDQUYsZUFBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQUQsZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNIOztBQUNEeEIsd0JBQWtCLENBQUNtQixRQUFuQixHQUE4QmxCLEdBQTlCLENBQWtDeUIsRUFBbEMsQ0FBcUNKLEtBQXJDO0FBQ0EsV0FBS0csb0JBQUw7QUFDSDtBQWxJTDtBQUFBO0FBQUEsMENBb0l5QztBQUFBOztBQUNqQyxVQUFJRSxDQUFTLEdBQUcsRUFBaEI7O0FBRUEsVUFBSSxLQUFLMUIsR0FBVCxFQUFjO0FBQ1ZvQixzREFBQSxDQUFVLEtBQUtwQixHQUFmLEVBQW9CLFVBQUNxQixLQUFELEVBQWdCO0FBQ2hDLGNBQUlBLEtBQUssSUFBSSxLQUFJLENBQUNyQixHQUFMLENBQVMyQixZQUF0QixFQUFvQztBQUNoQztBQUNBRCxhQUFDLEdBQUc1QixZQUFZLENBQUN1QixLQUFELENBQWhCO0FBQ0E7QUFDSDtBQUNKLFNBTkQ7QUFPSDs7QUFFRCxhQUFPSyxDQUFQO0FBQ0g7QUFsSkw7QUFBQTtBQUFBLDJDQW9KeUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBSixhQUFPLENBQUNDLEdBQVIsQ0FBWSx5Q0FBeUN4QixrQkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCVSxtQkFBOUIsRUFBckQsRUFBMEcsd0RBQTFHLEVBTmlDLENBUWpDO0FBQ0E7QUFDSDtBQTlKTDtBQUFBO0FBVUk7QUFWSiwrQkFZMEM7QUFDbEMsVUFBSSxDQUFDN0Isa0JBQWtCLENBQUM4QixRQUF4QixFQUFrQztBQUM5QjlCLDBCQUFrQixDQUFDOEIsUUFBbkIsR0FBOEIsSUFBSTlCLGtCQUFKLEVBQTlCOztBQUVBLFlBQUksQ0FBQ0Esa0JBQWtCLENBQUNtQixRQUFuQixHQUE4QlksV0FBbkMsRUFBZ0Q7QUFDNUMvQiw0QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCbEIsR0FBOUIsR0FBb0MsSUFBSStCLDZEQUFKLENBQXFDakMsWUFBWSxDQUFDSSxNQUFsRCxDQUFwQztBQUNBSCw0QkFBa0IsQ0FBQ21CLFFBQW5CLEdBQThCYyxnQkFBOUI7QUFDQWpDLDRCQUFrQixDQUFDbUIsUUFBbkIsR0FBOEJZLFdBQTlCLEdBQTRDLElBQTVDO0FBRUEsY0FBSUosQ0FBUyxHQUFHNUIsWUFBWSxDQUFDQSxZQUFZLENBQUNJLE1BQWQsQ0FBNUI7QUFDQW9CLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSwwQ0FBMENHLENBQXRELEVBQXlELHdEQUF6RCxFQU40QyxDQU81QztBQUNBO0FBRUE7QUFFSDtBQUNKOztBQUNELGFBQU8zQixrQkFBa0IsQ0FBQzhCLFFBQTFCO0FBQ0g7QUEvQkw7O0FBQUE7QUFBQTs7Z0JBQWE5QixrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJWOzs7QUFHTyxJQUFNa0MsV0FBYjtBQUFBO0FBQUE7QUFDRyx1QkFBbUJqQyxHQUFuQixFQUErQztBQUFBOztBQUFBOztBQUFBOztBQUFBO0FBQUc7O0FBRHJEO0FBQUE7O0FBT0c7OztBQVBILHlCQVU2QjtBQUFBLHdDQUFia0MsTUFBYTtBQUFiQSxjQUFhO0FBQUE7O0FBQ3ZCLFdBQUtDLFFBQUwsR0FBZ0JELE1BQWhCO0FBQ0EsV0FBS2xDLEdBQUwsQ0FBU29DLGNBQVQsQ0FBd0IsSUFBeEI7QUFDRjtBQUNEOzs7OztBQWRIO0FBQUE7QUFBQSwwQkFrQmdCRixNQWxCaEIsRUFrQjZCO0FBQ3ZCLFVBQUlDLFFBQWEsR0FBRyxFQUFwQjs7QUFDQSxXQUFLLElBQUlULENBQVQsSUFBY1EsTUFBZCxFQUFzQjtBQUNuQixZQUFJQSxNQUFNLENBQUNHLGNBQVAsQ0FBc0JYLENBQXRCLENBQUosRUFBOEI7QUFDM0JTLGtCQUFRLENBQUNHLElBQVQsQ0FBa0JKLE1BQU0sQ0FBQ1IsQ0FBRCxDQUF4QjtBQUNGO0FBQ0g7O0FBRUQsV0FBS1MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxXQUFLbkMsR0FBTCxDQUFTb0MsY0FBVCxDQUF3QixJQUF4QjtBQUNGO0FBNUJKOztBQUFBO0FBQUE7QUErQkE7Ozs7QUFHTyxJQUFNRyxrQkFBYixHQUNHLDRCQUFtQnZDLEdBQW5CLEVBQXNEQyxJQUF0RCxFQUFzRUUsRUFBdEUsRUFBNkU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBRyxDQURuRjtBQUlBOzs7OztBQUlPLElBQU00QixrQkFBYjtBQUFBO0FBQUE7QUFVRyw4QkFBWVMsVUFBWixFQUF5RTtBQUFBLFFBQTlDQywyQkFBOEMsdUVBQVAsS0FBTzs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxrREFOakIsRUFNaUI7O0FBQUEsMENBTE0sRUFLTjs7QUFBQSw0Q0FKSixFQUlJOztBQUFBLDZDQUhZLEVBR1o7O0FBQUEsd0RBRkwsSUFFSzs7QUFDdEUsU0FBS2QsWUFBTCxHQUFvQmEsVUFBcEI7QUFDQSxTQUFLRSxXQUFMLEdBQW1CRixVQUFuQjtBQUNBLFNBQUtHLDRCQUFMLEdBQW9DRiwyQkFBcEM7QUFDRjs7QUFkSjtBQUFBO0FBQUEsbUNBZ0J5QkcsR0FoQnpCLEVBZ0I4QztBQUFBOztBQUN4Q0EsU0FBRyxDQUFDQyxVQUFKLENBQWVDLE9BQWYsQ0FBdUIsVUFBQTdDLElBQUksRUFBSTtBQUM1QjJDLFdBQUcsQ0FBQ1QsUUFBSixDQUFhVyxPQUFiLENBQXFCLFVBQUEzQyxFQUFFLEVBQUk7QUFDdkI7QUFDQSxjQUFJLENBQUMsS0FBSSxDQUFDNEMsTUFBTCxDQUFZOUMsSUFBWixFQUFrQkUsRUFBbEIsQ0FBTCxFQUE0QjtBQUMxQixpQkFBSSxDQUFDNkMsb0JBQUwsQ0FBMEJWLElBQTFCLENBQStCLElBQUlDLGtCQUFKLENBQTBCLEtBQTFCLEVBQWdDdEMsSUFBaEMsRUFBc0NFLEVBQXRDLENBQS9CO0FBQ0Y7QUFDSCxTQUxEO0FBTUYsT0FQRDtBQVFGO0FBRUQ7Ozs7QUEzQkg7QUFBQTtBQUFBLHVCQThCYWtCLEtBOUJiLEVBOEJ1QjRCLFFBOUJ2QixFQThCd0Y7QUFDbEYsVUFBSUMsR0FBRyxHQUFHN0IsS0FBSyxDQUFDOEIsUUFBTixFQUFWOztBQUNBLFVBQUksQ0FBQyxLQUFLQyxZQUFMLENBQWtCRixHQUFsQixDQUFMLEVBQTZCO0FBQzFCLGFBQUtFLFlBQUwsQ0FBa0JGLEdBQWxCLElBQXlCLEVBQXpCO0FBQ0Y7O0FBQ0QsV0FBS0UsWUFBTCxDQUFrQkYsR0FBbEIsRUFBdUJaLElBQXZCLENBQTRCVyxRQUE1Qjs7QUFDQSxhQUFPLElBQVA7QUFDRjtBQUVEOzs7OztBQXZDSDtBQUFBO0FBQUEsNEJBMkNrQjVCLEtBM0NsQixFQTJDNEI0QixRQTNDNUIsRUEyQ2lHO0FBQzNGLFVBQUlDLEdBQUcsR0FBRzdCLEtBQUssQ0FBQzhCLFFBQU4sRUFBVjs7QUFDQSxVQUFJLENBQUMsS0FBS0UsZUFBTCxDQUFxQkgsR0FBckIsQ0FBTCxFQUFnQztBQUM3QixhQUFLRyxlQUFMLENBQXFCSCxHQUFyQixJQUE0QixFQUE1QjtBQUNGOztBQUNELFdBQUtHLGVBQUwsQ0FBcUJILEdBQXJCLEVBQTBCWixJQUExQixDQUErQlcsUUFBL0I7O0FBQ0EsYUFBTyxJQUFQO0FBQ0Y7QUFFRDs7Ozs7QUFwREg7QUFBQTtBQUFBLDJCQXdEaUI1QixLQXhEakIsRUF3RDJCNEIsUUF4RDNCLEVBd0RpRjtBQUMzRSxVQUFJQyxHQUFHLEdBQUc3QixLQUFLLENBQUM4QixRQUFOLEVBQVY7O0FBQ0EsVUFBSSxDQUFDLEtBQUtHLGNBQUwsQ0FBb0JKLEdBQXBCLENBQUwsRUFBK0I7QUFDNUIsYUFBS0ksY0FBTCxDQUFvQkosR0FBcEIsSUFBMkIsRUFBM0I7QUFDRjs7QUFDRCxXQUFLSSxjQUFMLENBQW9CSixHQUFwQixFQUF5QlosSUFBekIsQ0FBOEJXLFFBQTlCOztBQUNBLGFBQU8sSUFBUDtBQUNGO0FBRUQ7Ozs7O0FBakVIO0FBQUE7QUFBQSx3Q0FxRThCQSxRQXJFOUIsRUFxRThGO0FBQ3hGLFVBQUcsQ0FBQyxLQUFLTSwwQkFBVCxFQUFvQztBQUNqQyxhQUFLQSwwQkFBTCxHQUFrQ04sUUFBbEM7QUFDRjs7QUFDRCxhQUFPLElBQVA7QUFDRjtBQUVEOzs7O0FBNUVIO0FBQUE7QUFBQSwyQkErRStDO0FBQ3pDLFVBQUlPLFdBQVcsR0FBRyxJQUFJdkIsV0FBSixDQUFtQixJQUFuQixDQUFsQjs7QUFEeUMseUNBQTdCQyxNQUE2QjtBQUE3QkEsY0FBNkI7QUFBQTs7QUFFekNzQixpQkFBVyxDQUFDWCxVQUFaLEdBQXlCWCxNQUF6QjtBQUNBLGFBQU9zQixXQUFQO0FBQ0Y7QUFuRko7QUFBQTtBQUFBLDRCQXFGa0J0QixNQXJGbEIsRUFxRitDO0FBQ3pDLFVBQUlXLFVBQWUsR0FBRyxFQUF0Qjs7QUFDQSxXQUFLLElBQUluQixDQUFULElBQWNRLE1BQWQsRUFBc0I7QUFDbkIsWUFBSUEsTUFBTSxDQUFDRyxjQUFQLENBQXNCWCxDQUF0QixDQUFKLEVBQThCO0FBQzNCbUIsb0JBQVUsQ0FBQ1AsSUFBWCxDQUFvQkosTUFBTSxDQUFDUixDQUFELENBQTFCO0FBQ0Y7QUFDSDs7QUFFRCxVQUFJOEIsV0FBVyxHQUFHLElBQUl2QixXQUFKLENBQW1CLElBQW5CLENBQWxCOztBQUNBdUIsaUJBQVcsQ0FBQ1gsVUFBWixHQUF5QkEsVUFBekI7QUFDQSxhQUFPVyxXQUFQO0FBQ0Y7QUFoR0o7QUFBQTtBQUFBLHFDQWtHNEJ2RCxJQWxHNUIsRUFrR3FDRSxFQWxHckMsRUFrR3FEO0FBQy9DLGFBQU8sS0FBSzZDLG9CQUFMLENBQTBCUyxJQUExQixDQUErQixVQUFBQyxFQUFFLEVBQUk7QUFDekMsZUFBUUEsRUFBRSxDQUFDekQsSUFBSCxLQUFZQSxJQUFaLElBQW9CeUQsRUFBRSxDQUFDdkQsRUFBSCxLQUFVQSxFQUF0QztBQUNGLE9BRk0sQ0FBUDtBQUdGO0FBRUQ7Ozs7OztBQXhHSDtBQUFBO0FBQUEsMkJBNkdrQndELFNBN0dsQixFQTZHZ0NDLE9BN0doQyxFQTZHcUQ7QUFDOUMsYUFBUSxLQUFLakIsNEJBQUwsSUFBcUNnQixTQUFTLEtBQUtDLE9BQXBELElBQWdFLEtBQUtDLGdCQUFMLENBQXNCRixTQUF0QixFQUFpQ0MsT0FBakMsQ0FBdkU7QUFDSDtBQUVEOzs7O0FBakhIO0FBQUE7QUFBQSwwQkFvSGdCdkMsS0FwSGhCLEVBb0htQztBQUM1QixhQUFPLEtBQUswQixNQUFMLENBQVksS0FBS3BCLFlBQWpCLEVBQStCTixLQUEvQixDQUFQO0FBQ0g7QUFFRDs7OztBQXhISDtBQUFBO0FBQUEsdUJBMkhhQSxLQTNIYixFQTJIdUJ5QyxLQTNIdkIsRUEySDBDO0FBQ3BDLFVBQUksQ0FBQyxLQUFLQyxLQUFMLENBQVcxQyxLQUFYLENBQUwsRUFBd0I7QUFDckIsWUFBRyxDQUFDLEtBQUtrQywwQkFBTixJQUFvQyxDQUFDLEtBQUtBLDBCQUFMLENBQWdDLEtBQUs1QixZQUFyQyxFQUFtRE4sS0FBbkQsQ0FBeEMsRUFBa0c7QUFDL0YsZ0JBQU0sSUFBSTJDLEtBQUosQ0FBVSxvREFBb0QsS0FBS3JDLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwRCxHQUFtRixNQUFuRixHQUE0RjlCLEtBQUssQ0FBQzhCLFFBQU4sRUFBdEcsQ0FBTjtBQUNGO0FBQ0gsT0FKRCxNQUlPO0FBQ0osYUFBS2MsYUFBTCxDQUFtQjVDLEtBQW5CLEVBQTBCeUMsS0FBMUI7QUFDRjtBQUNIO0FBRUE7Ozs7QUFJQTs7QUF6SUo7QUFBQTtBQUFBLGlDQTBJd0I3RCxJQTFJeEIsRUEwSWlDRSxFQTFJakMsRUEwSXdDLENBRXBDLENBNUlKLENBMklNOztBQUdIOzs7OztBQTlJSDtBQUFBO0FBQUEsNEJBa0p3QjtBQUNsQixXQUFLd0IsWUFBTCxHQUFvQixLQUFLZSxXQUF6QjtBQUNGO0FBRUQ7Ozs7QUF0Skg7QUFBQTtBQUFBLHVCQXlKYXJCLEtBekpiLEVBeUpnQztBQUN6QixhQUFPLEtBQUtNLFlBQUwsS0FBc0JOLEtBQTdCO0FBQ0g7QUEzSko7QUFBQTtBQUFBLGtDQTZKeUJBLEtBN0p6QixFQTZKbUN5QyxLQTdKbkMsRUE2SmdEO0FBQUE7O0FBQzFDLFVBQUksQ0FBQyxLQUFLUixjQUFMLENBQW9CLEtBQUszQixZQUFMLENBQWtCd0IsUUFBbEIsRUFBcEIsQ0FBTCxFQUF3RDtBQUNyRCxhQUFLRyxjQUFMLENBQW9CLEtBQUszQixZQUFMLENBQWtCd0IsUUFBbEIsRUFBcEIsSUFBb0QsRUFBcEQ7QUFDRjs7QUFFRCxVQUFJLENBQUMsS0FBS0UsZUFBTCxDQUFxQmhDLEtBQUssQ0FBQzhCLFFBQU4sRUFBckIsQ0FBTCxFQUE2QztBQUMxQyxhQUFLRSxlQUFMLENBQXFCaEMsS0FBSyxDQUFDOEIsUUFBTixFQUFyQixJQUF5QyxFQUF6QztBQUNGOztBQUVELFVBQUksQ0FBQyxLQUFLQyxZQUFMLENBQWtCL0IsS0FBSyxDQUFDOEIsUUFBTixFQUFsQixDQUFMLEVBQTBDO0FBQ3ZDLGFBQUtDLFlBQUwsQ0FBa0IvQixLQUFLLENBQUM4QixRQUFOLEVBQWxCLElBQXNDLEVBQXRDO0FBQ0Y7O0FBR0QsVUFBSWUsT0FBTyxHQUFHLEtBQUtaLGNBQUwsQ0FBb0IsS0FBSzNCLFlBQUwsQ0FBa0J3QixRQUFsQixFQUFwQixFQUFrRGdCLE1BQWxELENBQWtFLFVBQUNDLEtBQUQsRUFBaUJDLElBQWpCLEVBQThDO0FBQzNILGVBQU9ELEtBQUssSUFBY0MsSUFBSSxDQUFDQyxJQUFMLENBQVUsTUFBVixFQUFnQmpELEtBQWhCLENBQTFCO0FBQ0YsT0FGYSxFQUVYLElBRlcsQ0FBZDs7QUFJQSxVQUFJa0QsUUFBUSxHQUFHLEtBQUtsQixlQUFMLENBQXFCaEMsS0FBSyxDQUFDOEIsUUFBTixFQUFyQixFQUF1Q2dCLE1BQXZDLENBQXVELFVBQUNDLEtBQUQsRUFBaUJDLElBQWpCLEVBQWdEO0FBQ25IO0FBQ0MsZUFBT0QsS0FBSyxJQUFjQyxJQUFJLENBQUNDLElBQUwsQ0FBVSxNQUFWLEVBQWdCLE1BQUksQ0FBQzNDLFlBQXJCLEVBQW1DbUMsS0FBbkMsQ0FBMUI7QUFDSCxPQUhjLEVBR1osSUFIWSxDQUFmOztBQUtBLFVBQUlJLE9BQU8sSUFBSUssUUFBZixFQUF5QjtBQUN0QixZQUFJQyxHQUFHLEdBQUcsS0FBSzdDLFlBQWY7QUFDQSxhQUFLQSxZQUFMLEdBQW9CTixLQUFwQjs7QUFDQSxhQUFLK0IsWUFBTCxDQUFrQixLQUFLekIsWUFBTCxDQUFrQndCLFFBQWxCLEVBQWxCLEVBQWdETCxPQUFoRCxDQUF3RCxVQUFBRixHQUFHLEVBQUk7QUFDNURBLGFBQUcsQ0FBQzBCLElBQUosQ0FBUyxNQUFULEVBQWVFLEdBQWYsRUFBb0JWLEtBQXBCO0FBQ0YsU0FGRDs7QUFHQSxhQUFLVyxZQUFMLENBQWtCRCxHQUFsQixFQUF1Qm5ELEtBQXZCO0FBQ0Y7QUFDSDtBQTVMSjs7QUFBQTtBQUFBLEksQ0FnTUg7QUFDQSw2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvT08sSUFBTXFELHlCQUFiO0FBQUE7QUFBQTs7Z0JBQWFBLHlCLFlBQ3NCLFk7O2dCQUR0QkEseUIsVUFFb0IsTzs7QUFHMUIsSUFBTUMscUJBQWI7QUFBQTtBQUFBOztnQkFBYUEscUIsbUJBRTZCLDJCQUEyQixlOztnQkFGeERBLHFCLGlCQUcyQiwyQkFBMkIsYTs7Z0JBSHREQSxxQixjQUl3QiwyQkFBMkIsVTs7Z0JBSm5EQSxxQixnQkFLMEIsMkJBQTJCLFk7O2dCQUxyREEscUIsY0FNd0IsMkJBQTJCLFU7O2dCQU5uREEscUIsb0JBTzhCLDJCQUEyQixnQjs7Z0JBUHpEQSxxQix5QkFRbUMsMkJBQTJCLHFCOztnQkFSOURBLHFCLDBCQVNvQywyQkFBMkIsc0I7O2dCQVQvREEscUIsd0JBVWtDLDJCQUEyQixvQjs7Z0JBVjdEQSxxQixlQVd5QiwyQkFBMkIsVzs7Z0JBWHBEQSxxQixpQkFZMkIsMkJBQTJCLGE7O2dCQVp0REEscUIsZ0NBYTBDLDJCQUEyQiw0Qjs7Z0JBYnJFQSxxQixnQ0FjMEMsMkJBQTJCLDRCOztnQkFkckVBLHFCLHNCQWVnQywyQkFBMkIsa0I7O2dCQWYzREEscUIsMkJBZ0JxQywyQkFBMkIsdUI7O2dCQWhCaEVBLHFCLG9CQWlCOEIsMkJBQTJCLGdCOztBQUkvRCxJQUFNQyx1QkFBYjtBQUFBO0FBQUE7O2dCQUFhQSx1Qix1QkFDaUMsNkJBQTZCLG1COztnQkFEOURBLHVCLG9CQUU4Qiw2QkFBNkIsaUI7O2dCQUYzREEsdUIsV0FHcUIsNkJBQTZCLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qi9EOzs7Ozs7Ozs7O0FBV08sSUFBTUMsS0FBYjtBQUFBO0FBQUE7QUFJSSxpQkFBb0JDLGdCQUFwQixFQUF3REMsa0JBQXhELEVBQXNGO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUVyRjs7QUFOTDtBQUFBO0FBQUEsMEJBUWlCQyxDQVJqQixFQVE0QjtBQUFBOztBQUNwQixXQUFLQyxXQUFMLEdBQW1CRCxDQUFuQjtBQUNBLFdBQUtGLGdCQUFMLEdBRm9CLENBR3BCOztBQUNBLFdBQUtJLEtBQUwsR0FBYUMsV0FBVyxDQUFDLFlBQU07QUFDM0IsYUFBSSxDQUFDRixXQUFMOztBQUNBLFlBQUksS0FBSSxDQUFDQSxXQUFMLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3RCRyx1QkFBYSxDQUFDLEtBQUksQ0FBQ0YsS0FBTixDQUFiOztBQUNBLGVBQUksQ0FBQ0gsa0JBQUw7QUFDSCxTQUhELE1BR087QUFDSCxlQUFJLENBQUNELGdCQUFMO0FBQ0g7QUFDSixPQVJ1QixFQVFyQixJQVJxQixDQUF4QjtBQVNIO0FBckJMO0FBQUE7QUFBQSwyQkF1QmtCO0FBQ1ZNLG1CQUFhLENBQUMsS0FBS0YsS0FBTixDQUFiO0FBQ0g7QUF6Qkw7QUFBQTtBQUFBLHFDQTJCb0M7QUFDNUIsYUFBTyxLQUFLRCxXQUFaO0FBQ0g7QUE3Qkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7Ozs7Ozs7O0FBV0E7QUFLQTs7Ozs7Ozs7O0FBUU8sSUFBTUksTUFBYjtBQUFBO0FBQUE7QUFJSTtBQUdBLG9CQUFjO0FBQUE7O0FBQUEsa0NBTmtCLEVBTWxCOztBQUFBOztBQUFBLGlEQUp3QixLQUl4Qjs7QUFBQSw0Q0FGbUIsS0FFbkI7QUFDYjs7QUFSTDtBQUFBO0FBQUEsOEJBVXFCQyxNQVZyQixFQVV3QztBQUVoQyxVQUFJQyxXQUFtQixHQUFHRCxNQUFNLENBQUNFLEVBQVAsQ0FBVXJDLFFBQVYsR0FBcUJzQyxPQUFyQixDQUE2QmYsd0lBQXlCLENBQUNnQixNQUF2RCxFQUErRCxFQUEvRCxFQUFtRUQsT0FBbkUsQ0FBMkUsR0FBM0UsRUFBZ0YsRUFBaEYsQ0FBMUI7QUFDQUYsaUJBQVcsR0FBR0EsV0FBVyxDQUFDRSxPQUFaLENBQW9CZix3SUFBeUIsQ0FBQ2lCLElBQTlDLEVBQW9ELEVBQXBELEVBQXdERixPQUF4RCxDQUFnRSxHQUFoRSxFQUFxRSxFQUFyRSxDQUFkO0FBRUEsV0FBS0csSUFBTCxDQUFVQyxRQUFWLEdBQXFCTixXQUFyQjtBQUNBLFdBQUtELE1BQUwsR0FBY0EsTUFBZDtBQUVBLFVBQUksS0FBS00sSUFBTCxDQUFVQyxRQUFkLEVBQ0l2RSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQ0FBZ0MsS0FBS3FFLElBQUwsQ0FBVUMsUUFBdEQ7QUFDUDtBQXBCTDtBQUFBO0FBQUEscUNBc0I0QkMsWUF0QjVCLEVBc0JrRTtBQUUxRCxVQUFJQSxZQUFZLENBQUNDLE1BQWpCLEVBQXlCO0FBQ3JCLGFBQUtILElBQUwsQ0FBVUcsTUFBVixHQUFtQkQsWUFBWSxDQUFDQyxNQUFoQztBQUNIOztBQUVELFVBQUlELFlBQVksQ0FBQ0UsS0FBakIsRUFBd0I7QUFDcEIsYUFBS0osSUFBTCxDQUFVSSxLQUFWLEdBQWtCRixZQUFZLENBQUNFLEtBQS9CO0FBQ0g7O0FBRUQsVUFBSUYsWUFBWSxDQUFDRyxLQUFqQixFQUF3QjtBQUNwQixhQUFLTCxJQUFMLENBQVVLLEtBQVYsR0FBa0JILFlBQVksQ0FBQ0csS0FBL0I7QUFDSDs7QUFFRCxVQUFJSCxZQUFZLENBQUNJLElBQWpCLEVBQXVCO0FBQ25CLGFBQUtOLElBQUwsQ0FBVU0sSUFBVixHQUFpQkosWUFBWSxDQUFDSSxJQUE5QjtBQUNIOztBQUVELFVBQUlKLFlBQVksQ0FBQ0ssWUFBakIsRUFBK0I7QUFDM0IsYUFBS1AsSUFBTCxDQUFVTyxZQUFWLEdBQXlCTCxZQUFZLENBQUNLLFlBQXRDO0FBQ0g7O0FBRUQsVUFBSUwsWUFBWSxDQUFDTSxLQUFqQixFQUF3QjtBQUNwQixhQUFLUixJQUFMLENBQVVRLEtBQVYsR0FBa0JOLFlBQVksQ0FBQ00sS0FBL0I7QUFDSDs7QUFFRCxVQUFJTixZQUFZLENBQUNPLFlBQWpCLEVBQStCO0FBQzNCLGFBQUtULElBQUwsQ0FBVVMsWUFBVixHQUF5QlAsWUFBWSxDQUFDTyxZQUF0QztBQUNIOztBQUVELFVBQUlQLFlBQVksQ0FBQ08sWUFBakIsRUFBK0I7QUFDM0IsYUFBS1QsSUFBTCxDQUFVUyxZQUFWLEdBQXlCUCxZQUFZLENBQUNPLFlBQXRDO0FBQ0g7O0FBRUQsVUFBSVAsWUFBWSxDQUFDUSxRQUFqQixFQUEyQjtBQUN2QixhQUFLVixJQUFMLENBQVVVLFFBQVYsR0FBcUJSLFlBQVksQ0FBQ1EsUUFBbEM7QUFDSDs7QUFFRCxVQUFJUixZQUFZLENBQUNTLE9BQWpCLEVBQTBCO0FBQ3RCLGFBQUtYLElBQUwsQ0FBVVcsT0FBVixHQUFvQlQsWUFBWSxDQUFDUyxPQUFqQztBQUNIOztBQUVELFVBQUlULFlBQVksQ0FBQ1UsZ0JBQWpCLEVBQW1DO0FBQy9CLGFBQUtaLElBQUwsQ0FBVVksZ0JBQVYsR0FBNkJWLFlBQVksQ0FBQ1UsZ0JBQTFDO0FBQ0g7O0FBRUQsVUFBSVYsWUFBWSxDQUFDVyxJQUFqQixFQUF1QjtBQUNuQixhQUFLYixJQUFMLENBQVVhLElBQVYsR0FBaUJYLFlBQVksQ0FBQ1csSUFBOUI7QUFDSDtBQUNKO0FBdkVMO0FBQUE7QUFBQSw0Q0F5RXNDYixJQXpFdEMsRUF5RXVEO0FBQy9DdEUsYUFBTyxDQUFDQyxHQUFSLENBQVksNEJBQVo7QUFDQUQsYUFBTyxDQUFDQyxHQUFSLENBQVlxRSxJQUFaO0FBQ0F0RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWjtBQUNIO0FBN0VMO0FBQUE7QUFBQSxxQ0ErRStCcUUsSUEvRS9CLEVBK0VnRDtBQUNoRDtBQUNRLFdBQUtOLE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIvQixvSUFBcUIsQ0FBQ2dDLGNBQXZDLEVBQXVEZixJQUF2RDtBQUNIO0FBbEZMO0FBQUE7QUFBQSxrQ0FvRitCO0FBQ3ZCdEUsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDSDtBQXRGTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBZU8sSUFBS3FGLGlCQUFaOztXQUFZQSxpQjtBQUFBQSxtQixDQUFBQSxpQjtBQUFBQSxtQixDQUFBQSxpQjtBQUFBQSxtQixDQUFBQSxpQjtBQUFBQSxtQixDQUFBQSxpQjtBQUFBQSxtQixDQUFBQSxpQjtHQUFBQSxpQixLQUFBQSxpQjs7QUFnRUwsSUFBS0MsUUFBWjs7V0FBWUEsUTtBQUFBQSxVO0FBQUFBLFU7QUFBQUEsVTtBQUFBQSxVO0dBQUFBLFEsS0FBQUEsUTs7QUFPTCxJQUFLQyxTQUFaOztXQUFZQSxTO0FBQUFBLFcsQ0FBQUEsUztBQUFBQSxXLENBQUFBLFM7R0FBQUEsUyxLQUFBQSxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RGWjs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFTyxJQUFNQyxrQkFBYjtBQUFBO0FBQUE7QUFBQTs7QUFDSSxnQ0FBYztBQUFBOztBQUFBLDZGQUVWO0FBQ0E7QUFDSDs7QUFMTDtBQUFBO0FBQUEscUNBT3FCakIsWUFQckIsRUFPNkM7QUFDckMsK0ZBQXVCQSxZQUF2Qjs7QUFFQXhFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDZEQUFaO0FBQ0EsV0FBSytELE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIvQixvSUFBcUIsQ0FBQ3FDLGdCQUF2QyxFQUF5RCxLQUFLcEIsSUFBOUQ7QUFDSDtBQVpMOztBQUFBO0FBQUEsRUFBd0NQLHFEQUF4QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNNEIsVUFBYjtBQUFBO0FBQUE7QUFnQkksc0JBQVl6QixFQUFaLEVBQXdCMEIsRUFBeEIsRUFBaUM7QUFBQTs7QUFBQSxnQ0FmYixFQWVhOztBQUFBLHFDQWRMLEVBY0s7O0FBQUE7O0FBQUEsc0NBWkw7QUFBQ0MsaUJBQVcsRUFBRSxDQUFkO0FBQWlCVixVQUFJLEVBQUVHLDhFQUFpQixDQUFDUTtBQUF6QyxLQVlLOztBQUFBLDBDQVhELEtBV0M7O0FBQUEsZ0RBVkssS0FVTDs7QUFBQSwwQ0FURCxLQVNDOztBQUFBLGdEQVJLLEtBUUw7O0FBQUE7O0FBQUE7O0FBQUEsMkNBTEQsRUFLQzs7QUFBQSwyQ0FIQSxLQUdBOztBQUFBLDJDQUZBLEtBRUE7O0FBQzdCLFNBQUs1QixFQUFMLEdBQVVBLEVBQVY7QUFDQSxTQUFLMEIsRUFBTCxHQUFVQSxFQUFWLENBRjZCLENBRzdCO0FBQ0E7O0FBQ0E1RixXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsU0FBSzhGLFVBQUwsR0FBa0IsSUFBSXhDLG9FQUFKLENBQVUsS0FBS3lDLGtCQUFMLENBQXdCQyxJQUF4QixDQUE2QixJQUE3QixDQUFWLEVBQThDLEtBQUtDLG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE5QyxDQUFsQjtBQUNIOztBQXZCTDtBQUFBO0FBQUEseUNBeUJ1QztBQUMvQixXQUFLTCxFQUFMLENBQVEvRyxFQUFSLENBQVcsS0FBS3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUI3Ryw2SEFBb0IsQ0FBQzRILGtCQUE5QyxFQUFrRSxLQUFLSixVQUFMLENBQWdCSyxjQUFoQixFQUFsRTtBQUNIO0FBM0JMO0FBQUE7QUFBQSwyQ0E2QnlDO0FBQ2pDLFdBQUtSLEVBQUwsQ0FBUS9HLEVBQVIsQ0FBVyxLQUFLcUYsRUFBaEIsRUFBb0JrQixJQUFwQixDQUF5QjdHLDZIQUFvQixDQUFDOEgsVUFBOUM7QUFDQSxXQUFLQyxhQUFMLENBQW1CdEMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQjdHLDZIQUFvQixDQUFDZ0ksc0JBQXBELEVBRmlDLENBR2pDO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNIO0FBekNMO0FBQUE7QUFBQSxpQ0EyQ3dCQyxNQTNDeEIsRUEyQzhDO0FBQUE7O0FBQ3RDQSxZQUFNLENBQUNsQyxJQUFQLENBQVltQyxTQUFaLEdBQXdCLENBQXhCO0FBRUFELFlBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJyRCxvSUFBcUIsQ0FBQ2dDLGNBQXZDLEVBQXVELFVBQUNmLElBQUQsRUFBZTtBQUNsRTtBQUNBLGFBQUksQ0FBQ3FDLGdCQUFMLENBQXNCSCxNQUFNLENBQUNsQyxJQUFQLENBQVlDLFFBQWxDLEVBQTRDRCxJQUE1QztBQUNILE9BSEQ7QUFLQWtDLFlBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJuSSw2SEFBb0IsQ0FBQ3FJLGdCQUF0QyxFQUF3RCxVQUFDQyxRQUFELEVBQXdCO0FBQzVFLGFBQUksQ0FBQ0MsV0FBTCxDQUFpQk4sTUFBTSxDQUFDbEMsSUFBUCxDQUFZQyxRQUE3QixFQUF1Q3NDLFFBQXZDO0FBQ0gsT0FGRDtBQUlBTCxZQUFNLENBQUN4QyxNQUFQLENBQWMwQyxFQUFkLENBQWlCbkksNkhBQW9CLENBQUN3SSxzQkFBdEMsRUFBOEQsWUFBTTtBQUNoRSxhQUFJLENBQUNDLHFCQUFMO0FBQ0gsT0FGRDtBQUlBUixZQUFNLENBQUN4QyxNQUFQLENBQWMwQyxFQUFkLENBQWlCbkksNkhBQW9CLENBQUMwSSxlQUF0QyxFQUF1RCxZQUFNO0FBQ3pELGFBQUksQ0FBQ0MsYUFBTDtBQUNILE9BRkQ7QUFJQVYsWUFBTSxDQUFDeEMsTUFBUCxDQUFjMEMsRUFBZCxDQUFpQm5JLDZIQUFvQixDQUFDNEksYUFBdEMsRUFBcUQsWUFBTTtBQUN2RDtBQUNBLGFBQUksQ0FBQ3BCLFVBQUwsQ0FBZ0JxQixJQUFoQjs7QUFDQSxhQUFJLENBQUN4QixFQUFMLENBQVEvRyxFQUFSLENBQVcsS0FBSSxDQUFDcUYsRUFBaEIsRUFBb0JrQixJQUFwQixDQUF5QjdHLDZIQUFvQixDQUFDOEgsVUFBOUM7QUFDSCxPQUpEO0FBTUEsV0FBS2dCLE9BQUwsQ0FBYXJHLElBQWIsQ0FBa0J3RixNQUFsQjtBQUNBeEcsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBVyxLQUFLaUUsRUFBaEIsR0FBcUIsdUJBQXJCLEdBQStDc0MsTUFBTSxDQUFDbEMsSUFBUCxDQUFZQyxRQUEzRCxHQUFzRSxxQkFBdEUsR0FBOEYsS0FBSzhDLE9BQUwsQ0FBYUMsTUFBdkgsRUEzQnNDLENBNEJ0Qzs7QUFFQSxVQUFJLEtBQUtELE9BQUwsQ0FBYUMsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUMxQixhQUFLQyxtQkFBTDtBQUNIO0FBQ0o7QUE1RUw7QUFBQTtBQUFBLDRDQThFMEM7QUFDbEMsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBaEZMO0FBQUE7QUFBQSxnQ0FrRndCakQsUUFsRnhCLEVBa0YwQ3NDLFFBbEYxQyxFQWtGb0U7QUFDNUQsVUFBSUwsTUFBSjtBQUNBLFVBQUlpQixRQUFKLENBRjRELENBRzVEOztBQUNBLFVBQUlsRCxRQUFRLElBQUksS0FBSzhDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBaEIsQ0FBcUJDLFFBQXJDLEVBQStDO0FBQzNDaUMsY0FBTSxHQUFHLEtBQUthLE9BQUwsQ0FBYSxDQUFiLENBQVQ7QUFDQUksZ0JBQVEsR0FBRyxLQUFLSixPQUFMLENBQWEsQ0FBYixDQUFYO0FBQ0gsT0FIRCxNQUdPO0FBQ0hiLGNBQU0sR0FBRyxLQUFLYSxPQUFMLENBQWEsQ0FBYixDQUFUO0FBQ0FJLGdCQUFRLEdBQUcsS0FBS0osT0FBTCxDQUFhLENBQWIsQ0FBWDtBQUNILE9BVjJELENBVzVEOzs7QUFFQSxVQUFJUixRQUFRLElBQUlMLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWWEsSUFBNUIsRUFBa0M7QUFDOUIsWUFBSSxLQUFLbUIsYUFBTCxJQUFzQkUsTUFBMUIsRUFBa0M7QUFDOUIsZUFBS2dCLFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxTQUZELE1BRU87QUFDSCxlQUFLRSxrQkFBTCxHQUEwQixJQUExQjtBQUNIOztBQUNEbEIsY0FBTSxDQUFDbEMsSUFBUCxDQUFZcUQsWUFBWjtBQUNBLGFBQUtDLFlBQUwsR0FBb0IsSUFBcEI7QUFDSCxPQVJELE1BUU8sSUFBSWYsUUFBUSxJQUFJWSxRQUFRLENBQUNuRCxJQUFULENBQWNhLElBQTlCLEVBQW9DO0FBQ3ZDLFlBQUksS0FBS21CLGFBQUwsSUFBc0JtQixRQUExQixFQUFvQztBQUNoQyxlQUFLRCxZQUFMLEdBQW9CLElBQXBCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZUFBS0Usa0JBQUwsR0FBMEIsSUFBMUI7QUFDSDs7QUFDREQsZ0JBQVEsQ0FBQ25ELElBQVQsQ0FBY3FELFlBQWQ7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBQ0gsT0FSTSxNQVFBLElBQUlmLFFBQVEsSUFBSXRCLHFFQUFRLENBQUNzQyxLQUF6QixFQUFnQztBQUNuQyxhQUFLQyxrQkFBTCxHQUEwQixJQUExQjtBQUNIOztBQUVELFVBQUl0QixNQUFNLENBQUNsQyxJQUFQLENBQVlxRCxZQUFaLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CLGFBQUtJLGFBQUwsR0FBcUIsSUFBckI7QUFDQXZCLGNBQU0sQ0FBQ2xDLElBQVAsQ0FBWW1DLFNBQVo7O0FBQ0EsWUFBSUQsTUFBTSxDQUFDbEMsSUFBUCxDQUFZbUMsU0FBWixJQUF5QixDQUE3QixFQUFnQztBQUM1QixlQUFLdUIsYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0osT0FORCxNQU1PLElBQUlQLFFBQVEsQ0FBQ25ELElBQVQsQ0FBY3FELFlBQWQsSUFBOEIsQ0FBbEMsRUFBcUM7QUFDeEMsYUFBS0ksYUFBTCxHQUFxQixJQUFyQjtBQUNBTixnQkFBUSxDQUFDbkQsSUFBVCxDQUFjbUMsU0FBZDs7QUFDQSxZQUFJZ0IsUUFBUSxDQUFDbkQsSUFBVCxDQUFjbUMsU0FBZCxJQUEyQixDQUEvQixFQUFrQztBQUM5QixlQUFLdUIsYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0o7QUFDSjtBQWhJTDtBQUFBO0FBQUEsb0NBa0lrQztBQUUxQjtBQUVBLFVBQUksS0FBS0EsYUFBVCxFQUF3QixDQUV2QixDQUZELE1BRU8sSUFBSSxLQUFLRCxhQUFULEVBQXdCO0FBQzNCLGFBQUtFLFFBQUwsQ0FBY3BDLFdBQWQ7O0FBRUEsWUFBSSxLQUFLb0MsUUFBTCxDQUFjcEMsV0FBZCxJQUE2QixDQUFqQyxFQUFvQztBQUNoQyxlQUFLcUMsYUFBTDtBQUNBLGVBQUtDLG9CQUFMO0FBQ0gsU0FOMEIsQ0FRM0I7QUFDQTs7QUFDSCxPQVZNLE1BVUEsSUFBSSxLQUFLTCxrQkFBVCxFQUE2QjtBQUNoQyxhQUFLeEIsYUFBTCxDQUFtQnRDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQzZKLFlBQXBELEVBQWtFNUoseUdBQVksQ0FBQ1UsT0FBL0U7QUFDQSxhQUFLbUosbUJBQUw7QUFDQSxhQUFLL0IsYUFBTCxDQUFtQnRDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQzZKLFlBQXBELEVBQWtFNUoseUdBQVksQ0FBQ2UscUJBQS9FO0FBQ0EsYUFBSytHLGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUNpRixxQkFBckQ7QUFDQSxhQUFLdkMsVUFBTCxDQUFnQndDLEtBQWhCLENBQXNCLEtBQUtDLGFBQTNCO0FBQ0gsT0FOTSxNQU1BLElBQUksS0FBS2hCLFlBQVQsRUFBdUI7QUFDMUIsYUFBS2xCLGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUM2SixZQUFwRCxFQUFrRTVKLHlHQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBS21KLG1CQUFMO0FBQ0EsYUFBSy9CLGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUM2SixZQUFwRCxFQUFrRTVKLHlHQUFZLENBQUNlLHFCQUEvRTtBQUNBLGFBQUsrRyxhQUFMLENBQW1CdEMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQi9CLG9JQUFxQixDQUFDaUYscUJBQXJEO0FBQ0EsYUFBS3ZDLFVBQUwsQ0FBZ0J3QyxLQUFoQixDQUFzQixLQUFLQyxhQUEzQjtBQUVILE9BUE0sTUFPQSxJQUFJLENBQUMsS0FBS2Qsa0JBQVYsRUFBOEI7QUFDakMsYUFBS3BCLGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUM2SixZQUFwRCxFQUFrRTVKLHlHQUFZLENBQUNVLE9BQS9FO0FBQ0EsYUFBS21KLG1CQUFMO0FBQ0EsYUFBSy9CLGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCN0csNkhBQW9CLENBQUM2SixZQUFwRCxFQUFrRTVKLHlHQUFZLENBQUNPLGdCQUEvRTtBQUNBLGFBQUt1SCxhQUFMLENBQW1CdEMsTUFBbkIsQ0FBMEJvQixJQUExQixDQUErQi9CLG9JQUFxQixDQUFDaUYscUJBQXJEO0FBQ0EsYUFBS3ZDLFVBQUwsQ0FBZ0J3QyxLQUFoQixDQUFzQixLQUFLQyxhQUEzQjtBQUNILE9BTk0sTUFNQTtBQUNILGFBQUtOLGFBQUw7QUFDQSxhQUFLNUIsYUFBTCxDQUFtQnRDLE1BQW5CLENBQTBCb0IsSUFBMUIsQ0FBK0I3Ryw2SEFBb0IsQ0FBQzZKLFlBQXBELEVBQWtFNUoseUdBQVksQ0FBQ08sZ0JBQS9FO0FBQ0EsYUFBS3VILGFBQUwsQ0FBbUJ0QyxNQUFuQixDQUEwQm9CLElBQTFCLENBQStCL0Isb0lBQXFCLENBQUNpRixxQkFBckQ7QUFDQSxhQUFLdkMsVUFBTCxDQUFnQndDLEtBQWhCLENBQXNCLEtBQUtDLGFBQTNCO0FBQ0g7QUFFSjtBQTVLTDtBQUFBO0FBQUEsMENBOEt3QztBQUNoQyxXQUFLbEMsYUFBTCxHQUFzQixLQUFLQSxhQUFMLElBQXNCLEtBQUtlLE9BQUwsQ0FBYSxDQUFiLENBQXZCLEdBQTBDLEtBQUtBLE9BQUwsQ0FBYSxDQUFiLENBQTFDLEdBQTRELEtBQUtBLE9BQUwsQ0FBYSxDQUFiLENBQWpGO0FBQ0EsV0FBS2EsYUFBTDtBQUNIO0FBakxMO0FBQUE7QUFBQSxvQ0FtTGtDO0FBQzFCLFdBQUtSLGtCQUFMLEdBQTBCLEtBQTFCO0FBQ0EsV0FBS0ksa0JBQUwsR0FBMEIsS0FBMUI7QUFDQSxXQUFLTixZQUFMLEdBQW9CLEtBQXBCO0FBQ0gsS0F2TEwsQ0F5TEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBck1KO0FBQUE7QUFBQSxxQ0F1TTZCakQsUUF2TTdCLEVBdU0rQ0QsSUF2TS9DLEVBdU1nRTtBQUN4RDtBQUNBLFVBQUksS0FBSytDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBaEIsQ0FBcUJDLFFBQXJCLElBQWlDQSxRQUFyQyxFQUErQztBQUMzQyxhQUFLOEMsT0FBTCxDQUFhLENBQWIsRUFBZ0JyRCxNQUFoQixDQUF1Qm5GLEVBQXZCLENBQTBCLEtBQUtxRixFQUEvQixFQUFtQ2tCLElBQW5DLENBQXdDL0Isb0lBQXFCLENBQUNnQyxjQUE5RCxFQUE4RWYsSUFBOUU7QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLK0MsT0FBTCxDQUFhLENBQWIsRUFBZ0JyRCxNQUFoQixDQUF1Qm5GLEVBQXZCLENBQTBCLEtBQUtxRixFQUEvQixFQUFtQ2tCLElBQW5DLENBQXdDL0Isb0lBQXFCLENBQUNnQyxjQUE5RCxFQUE4RWYsSUFBOUU7QUFDSDs7QUFFRCxVQUFJLEtBQUtzRCxZQUFULEVBQXVCO0FBQ25CLGFBQUtBLFlBQUwsR0FBb0IsS0FBcEI7QUFDQSxhQUFLaEMsRUFBTCxDQUFRL0csRUFBUixDQUFXLEtBQUtxRixFQUFoQixFQUFvQmtCLElBQXBCLENBQXlCN0csNkhBQW9CLENBQUNrSyxhQUE5QyxFQUE2RCxDQUFDLEtBQUtwQixPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQWpCLEVBQXVCLEtBQUsrQyxPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQXZDLENBQTdEO0FBQ0g7QUFDSjtBQW5OTDtBQUFBO0FBQUEsMENBcU53QztBQUNoQyxXQUFLK0MsT0FBTCxDQUFhLENBQWIsRUFBZ0JxQixjQUFoQixHQUFpQyxJQUFqQztBQUNBLFdBQUtwQyxhQUFMLEdBQXFCLEtBQUtlLE9BQUwsQ0FBYSxDQUFiLENBQXJCO0FBQ0EsV0FBS0EsT0FBTCxDQUFhLENBQWIsRUFBZ0IvQyxJQUFoQixDQUFxQmEsSUFBckIsR0FBNEJJLHFFQUFRLENBQUNvRCxJQUFyQztBQUNBLFdBQUt0QixPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQWhCLENBQXFCcUQsWUFBckIsR0FBb0MsQ0FBcEM7QUFDQSxXQUFLTSxRQUFMLENBQWNXLGNBQWQsR0FBK0IsS0FBS3ZCLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBL0M7QUFFQSxXQUFLK0MsT0FBTCxDQUFhLENBQWIsRUFBZ0IvQyxJQUFoQixDQUFxQmEsSUFBckIsR0FBNEJJLHFFQUFRLENBQUNzRCxLQUFyQztBQUNBLFdBQUt4QixPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQWhCLENBQXFCcUQsWUFBckIsR0FBb0MsQ0FBcEM7QUFDQSxXQUFLTSxRQUFMLENBQWNhLGVBQWQsR0FBZ0MsS0FBS3pCLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBaEQ7QUFFQSxXQUFLc0IsRUFBTCxDQUFRL0csRUFBUixDQUFXLEtBQUtxRixFQUFoQixFQUFvQmtCLElBQXBCLENBQXlCL0Isb0lBQXFCLENBQUMwRixTQUEvQyxFQUEwRCxLQUFLZCxRQUEvRDtBQUNBZSxnQkFBVSxDQUFDLEtBQUtDLGNBQUwsQ0FBb0JoRCxJQUFwQixDQUF5QixJQUF6QixDQUFELEVBQWlDLElBQWpDLENBQVY7QUFDSDtBQWxPTDtBQUFBO0FBQUEsMkNBb095QztBQUNqQztBQUVBO0FBQ0EsV0FBS2dDLFFBQUwsQ0FBYzlDLElBQWQsR0FBcUJHLDhFQUFpQixDQUFDNEQsYUFBdkM7QUFDQSxXQUFLNUMsYUFBTCxHQUFxQixLQUFLZSxPQUFMLENBQWEsQ0FBYixDQUFyQjtBQUVBLFdBQUtBLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBaEIsQ0FBcUJhLElBQXJCLEdBQTRCSSxxRUFBUSxDQUFDb0QsSUFBckM7QUFDQSxXQUFLdEIsT0FBTCxDQUFhLENBQWIsRUFBZ0IvQyxJQUFoQixDQUFxQnFELFlBQXJCLEdBQW9DLENBQXBDO0FBQ0EsV0FBS00sUUFBTCxDQUFjVyxjQUFkLEdBQStCLEtBQUt2QixPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQS9DO0FBRUEsV0FBSytDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCL0MsSUFBaEIsQ0FBcUJhLElBQXJCLEdBQTRCSSxxRUFBUSxDQUFDc0QsS0FBckM7QUFDQSxXQUFLeEIsT0FBTCxDQUFhLENBQWIsRUFBZ0IvQyxJQUFoQixDQUFxQnFELFlBQXJCLEdBQW9DLENBQXBDO0FBQ0EsV0FBS00sUUFBTCxDQUFjYSxlQUFkLEdBQWdDLEtBQUt6QixPQUFMLENBQWEsQ0FBYixFQUFnQi9DLElBQWhELENBYmlDLENBY2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUtzQixFQUFMLENBQVEvRyxFQUFSLENBQVcsS0FBS3FGLEVBQWhCLEVBQW9Ca0IsSUFBcEIsQ0FBeUIvQixvSUFBcUIsQ0FBQzBGLFNBQS9DLEVBQTBELEtBQUtkLFFBQS9ELEVBN0JpQyxDQWdDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFSDtBQWhSTDtBQUFBO0FBQUEscUNBa1JtQztBQUMzQixVQUFJLEtBQUtaLE9BQUwsQ0FBYSxDQUFiLEVBQWdCcUIsY0FBcEIsRUFBb0M7QUFDaEMsYUFBS3JCLE9BQUwsQ0FBYSxDQUFiLEVBQWdCckQsTUFBaEIsQ0FBdUJvQixJQUF2QixDQUE0QjdHLDZIQUFvQixDQUFDNkosWUFBakQsRUFBK0Q1Six5R0FBWSxDQUFDVSxPQUE1RTtBQUNBLGFBQUttSSxPQUFMLENBQWEsQ0FBYixFQUFnQnJELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEIvQixvSUFBcUIsQ0FBQ2lGLHFCQUFsRDtBQUNBLGFBQUtqQixPQUFMLENBQWEsQ0FBYixFQUFnQnJELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQzZKLFlBQWpELEVBQStENUoseUdBQVksQ0FBQ08sZ0JBQTVFO0FBQ0gsT0FKRCxNQUlPO0FBQ0gsYUFBS3NJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCckQsTUFBaEIsQ0FBdUJvQixJQUF2QixDQUE0QjdHLDZIQUFvQixDQUFDNkosWUFBakQsRUFBK0Q1Six5R0FBWSxDQUFDVSxPQUE1RTtBQUNBLGFBQUttSSxPQUFMLENBQWEsQ0FBYixFQUFnQnJELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEIvQixvSUFBcUIsQ0FBQ2lGLHFCQUFsRDtBQUNBLGFBQUtqQixPQUFMLENBQWEsQ0FBYixFQUFnQnJELE1BQWhCLENBQXVCb0IsSUFBdkIsQ0FBNEI3Ryw2SEFBb0IsQ0FBQzZKLFlBQWpELEVBQStENUoseUdBQVksQ0FBQ08sZ0JBQTVFO0FBQ0g7O0FBRUQsV0FBS2dILFVBQUwsQ0FBZ0J3QyxLQUFoQixDQUFzQixLQUFLQyxhQUEzQixFQVgyQixDQVkzQjtBQUNIO0FBL1JMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFFQTtBQUVPLElBQU1XLGlCQUFiO0FBQUE7QUFBQTtBQVVJO0FBRUEsK0JBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwwQ0FSb0IsSUFRcEI7O0FBQUEsK0NBUHlCLEtBT3pCOztBQUFBOztBQUFBLG1DQUxrQixFQUtsQjs7QUFBQSxxQ0FKNEIsRUFJNUI7O0FBQ1YsU0FBS0MsZ0JBQUw7QUFDQSxTQUFLQyxZQUFMO0FBQ0EsU0FBS0MsWUFBTCxHQUhVLENBSVY7QUFDSDs7QUFqQkw7QUFBQTtBQUFBLHVDQW1CK0I7QUFBQTs7QUFDdkIsV0FBS0MsSUFBTCxHQUFZLElBQUlDLGtEQUFKLENBQVcsTUFBWCxFQUFtQjtBQUFFO0FBQzdCQyxhQUFLLEVBQUUsQ0FEb0I7QUFDakI7QUFDVjtBQUNBQyxZQUFJLEVBQUUsSUFIcUIsQ0FHaEI7O0FBSGdCLE9BQW5CLENBQVo7QUFNQSxVQUFJQyxJQUFJLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaLElBQW9CLElBQS9CLENBUHVCLENBUXZCOztBQUNBLFdBQUtDLFVBQUwsR0FBa0JDLGlEQUFBLENBQWtCLFVBQUNDLE9BQUQsRUFBVUMsUUFBVixFQUF1QjtBQUN2REQsZUFBTyxDQUFDRSxXQUFSLENBQW9CLEtBQXBCLEVBQTJCLFlBQU07QUFDN0IsZUFBSSxDQUFDWixJQUFMLENBQVVhLEtBQVYsQ0FBZ0JILE9BQWhCLEVBQXlCQyxRQUF6QjtBQUNILFNBRkQ7QUFHQUQsZUFBTyxDQUFDSSxNQUFSO0FBQ0gsT0FMaUIsQ0FBbEI7QUFPQSxXQUFLTixVQUFMLENBQWdCckQsRUFBaEIsQ0FBbUIsV0FBbkIsRUFBZ0MsWUFBWTtBQUN4QzFHLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0gsT0FGRDtBQUlBLFdBQUs4SixVQUFMLENBQWdCTyxNQUFoQixDQUF1QlgsSUFBdkIsRUFBNkIsU0FBN0I7QUFDSDtBQXhDTDtBQUFBO0FBQUEsbUNBMENpQztBQUFBOztBQUN6QixXQUFLWSxZQUFMLEdBQW9CLElBQUlDLHVDQUFKLENBQVM7QUFDekJDLFlBQUksRUFBRSxnQkFEbUI7QUFFekJDLFlBQUksRUFBRSwyQ0FGbUI7QUFHekJDLGdCQUFRLEVBQUUsZ0JBSGU7QUFJekJDLGdCQUFRLEVBQUUsa0VBSmU7QUFLekJqQixZQUFJLEVBQUUsSUFMbUI7QUFNekJrQixXQUFHLEVBQUU7QUFOb0IsT0FBVCxDQUFwQjtBQVNBLFdBQUtOLFlBQUwsQ0FBa0I3RCxFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFDb0UsR0FBRCxFQUFTO0FBQ25DOUssZUFBTyxDQUFDK0ssS0FBUixDQUFjLGlDQUFkLEVBQWlERCxHQUFqRDtBQUNBbEIsZUFBTyxDQUFDb0IsSUFBUixDQUFhLENBQUMsQ0FBZDtBQUNILE9BSEQ7QUFLQSxXQUFLVCxZQUFMLENBQWtCVSxPQUFsQixDQUEwQixVQUFDSCxHQUFELEVBQVM7QUFDL0IsWUFBSUEsR0FBSixFQUFTO0FBQ0wsZ0JBQU1BLEdBQU47QUFDSCxTQUZELE1BRU87QUFDSDlLLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGdCQUFJLENBQUNpTCxpQkFBTCxHQUF5QixJQUF6QjtBQUNIO0FBQ0osT0FQRDtBQVFIO0FBakVMO0FBQUE7QUFBQSxtQ0FtRTJCO0FBQ25CLFdBQUtDLFFBQUwsR0FBZ0JDLGdEQUFRLEVBQXhCO0FBQ0EsV0FBS0QsUUFBTCxDQUFjRSxXQUFkLENBQTBCLElBQTFCLEVBRm1CLENBRWM7O0FBQ2pDLFdBQUtGLFFBQUwsQ0FBY0csTUFBZCxDQUFxQixLQUFLdkIsVUFBMUI7QUFFQSxXQUFLd0Isa0JBQUw7QUFDSDtBQXpFTDtBQUFBO0FBQUEseUNBMkV1QztBQUFBOztBQUUvQixXQUFLSixRQUFMLENBQWN6RSxFQUFkLENBQWlCLFlBQWpCLEVBQStCLFVBQUMxQyxNQUFELEVBQWlCO0FBQzVDLFlBQUl3QyxNQUEwQixHQUFHLElBQUlmLHdFQUFKLEVBQWpDO0FBQ0FlLGNBQU0sQ0FBQ2dGLFNBQVAsQ0FBaUJ4SCxNQUFqQjs7QUFDQSxjQUFJLENBQUNxRCxPQUFMLENBQWFyRyxJQUFiLENBQWtCd0YsTUFBbEI7O0FBRUF4QyxjQUFNLENBQUNvQixJQUFQLENBQVkvQixvSUFBcUIsQ0FBQ29JLGFBQWxDLEVBQWlEakYsTUFBTSxDQUFDbEMsSUFBUCxDQUFZQyxRQUE3RDtBQUVBdkUsZUFBTyxDQUFDQyxHQUFSLENBQVksd0NBQXdDLE1BQUksQ0FBQ29ILE9BQUwsQ0FBYUMsTUFBakUsRUFQNEMsQ0FRNUM7O0FBRUFkLGNBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJyRCxvSUFBcUIsQ0FBQ3FJLG1CQUF2QyxFQUE0RCxVQUFDQyxRQUFELEVBQXNCO0FBQzlFM0wsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaOztBQUNBLGNBQUksTUFBSSxDQUFDaUwsaUJBQVQsRUFBNEI7QUFDeEIsa0JBQUksQ0FBQ1UsY0FBTCxDQUFvQnBGLE1BQXBCLEVBQTRCbUYsUUFBNUI7QUFDSDtBQUNKLFNBTEQ7QUFPQW5GLGNBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJyRCxvSUFBcUIsQ0FBQ3dJLG9CQUF2QyxFQUE2RCxVQUFDdkgsSUFBRCxFQUFlO0FBQ3hFdEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaOztBQUVBLGNBQUksTUFBSSxDQUFDaUwsaUJBQVQsRUFBNEI7QUFDeEIsa0JBQUksQ0FBQ1ksWUFBTCxDQUFrQnRGLE1BQWxCLEVBQTBCbEMsSUFBMUI7QUFDSDtBQUNKLFNBTkQ7QUFRQWtDLGNBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJyRCxvSUFBcUIsQ0FBQ3FDLGdCQUF2QyxFQUF5RCxVQUFDcEIsSUFBRCxFQUFlO0FBQ3BFdEUsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0F1RyxnQkFBTSxDQUFDZCxnQkFBUCxDQUF3QnBCLElBQXhCLEVBRm9FLENBR3BFO0FBQ0E7QUFDQTtBQUNILFNBTkQ7QUFRQWtDLGNBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUIsWUFBakIsRUFBK0IsWUFBTTtBQUVqQztBQUNBLGdCQUFJLENBQUNXLE9BQUwsQ0FBYTdGLE9BQWIsQ0FBcUIsVUFBQ2dGLE1BQUQsRUFBNkJ1RixLQUE3QixFQUErQztBQUNoRSxnQkFBSXZGLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWUMsUUFBWixLQUF5QlAsTUFBTSxDQUFDRSxFQUFwQyxFQUF3QztBQUNwQyxvQkFBSSxDQUFDbUQsT0FBTCxDQUFhMkUsTUFBYixDQUFvQkQsS0FBcEIsRUFBMkIsQ0FBM0I7O0FBRUF2RixvQkFBTSxDQUFDeUYsV0FBUDtBQUNIO0FBQ0osV0FORDs7QUFRQWpNLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxtQ0FBbUMsTUFBSSxDQUFDb0gsT0FBTCxDQUFhQyxNQUE1RCxFQVhpQyxDQWFqQztBQUNBO0FBQ0gsU0FmRDtBQWdCSCxPQWpERDtBQW1EQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTs7QUFDQSxVQUFJNEUsMEJBQTBCLEdBQUcsS0FBS2YsUUFBTCxDQUFjZ0IsRUFBZCxDQUFpQi9JLHdJQUF5QixDQUFDZ0IsTUFBM0MsQ0FBakM7QUFDQThILGdDQUEwQixDQUFDeEYsRUFBM0IsQ0FBOEIsWUFBOUIsRUFBNEMsVUFBQzFDLE1BQUQsRUFBaUI7QUFDekQsWUFBSUUsRUFBVSxHQUFHRixNQUFNLENBQUNFLEVBQVAsQ0FBVXJDLFFBQVYsR0FBcUJzQyxPQUFyQixDQUE2QmYsd0lBQXlCLENBQUNnQixNQUF2RCxFQUErRCxFQUEvRCxFQUFtRUQsT0FBbkUsQ0FBMkUsR0FBM0UsRUFBZ0YsRUFBaEYsQ0FBakI7O0FBQ0EsWUFBSXFDLE1BQTBCLEdBQUcsTUFBSSxDQUFDNEYsYUFBTCxDQUFtQmxJLEVBQW5CLEVBQXVCRixNQUF2QixDQUFqQzs7QUFDQXdDLGNBQU0sQ0FBQzZGLG1CQUFQLEdBQTZCLElBQTdCO0FBRUFyTSxlQUFPLENBQUNDLEdBQVIsQ0FBWW1ELHdJQUF5QixDQUFDZ0IsTUFBMUIsR0FBbUMseUJBQW5DLEdBQStEb0MsTUFBTSxDQUFDbEMsSUFBUCxDQUFZQyxRQUF2Rjs7QUFFQSxjQUFJLENBQUMrSCxVQUFMLENBQWdCOUYsTUFBaEI7QUFDQTs7OztBQUdILE9BWEQ7QUFhQSxVQUFJK0YsZ0JBQWdCLEdBQUcsS0FBS3BCLFFBQUwsQ0FBY2dCLEVBQWQsQ0FBaUIvSSx3SUFBeUIsQ0FBQ2lCLElBQTNDLENBQXZCO0FBRUFrSSxzQkFBZ0IsQ0FBQzdGLEVBQWpCLENBQW9CLFlBQXBCLEVBQWtDLFVBQUMxQyxNQUFELEVBQWlCO0FBRS9DLFlBQUlFLEVBQVUsR0FBR0YsTUFBTSxDQUFDRSxFQUFQLENBQVVyQyxRQUFWLEdBQXFCc0MsT0FBckIsQ0FBNkJmLHdJQUF5QixDQUFDaUIsSUFBdkQsRUFBNkQsRUFBN0QsRUFBaUVGLE9BQWpFLENBQXlFLEdBQXpFLEVBQThFLEVBQTlFLENBQWpCOztBQUNBLFlBQUlxQyxNQUEwQixHQUFHLE1BQUksQ0FBQzRGLGFBQUwsQ0FBbUJsSSxFQUFuQixFQUF1QkYsTUFBdkIsQ0FBakM7O0FBRUF3QyxjQUFNLENBQUN4QyxNQUFQLENBQWMwQyxFQUFkLENBQWlCckQsb0lBQXFCLENBQUNtSixRQUF2QyxFQUFpRCxVQUFDQyxNQUFELEVBQW9CO0FBQ2pFakcsZ0JBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBJLElBQWQsQ0FBbUJELE1BQW5COztBQUVBLGNBQUlFLFVBQXNCLEdBQUcsTUFBSSxDQUFDQyxXQUFMLENBQWlCSCxNQUFqQixFQUF5QkYsZ0JBQXpCLENBQTdCOztBQUNBSSxvQkFBVSxDQUFDRSxZQUFYLENBQXdCckcsTUFBeEIsRUFKaUUsQ0FLakU7O0FBQ0FBLGdCQUFNLENBQUN4QyxNQUFQLENBQWNvQixJQUFkLENBQW1CL0Isb0lBQXFCLENBQUN5SixVQUF6QyxFQUFxREwsTUFBckQsRUFOaUUsQ0FRakU7O0FBRUF6SSxnQkFBTSxDQUFDMEMsRUFBUCxDQUFVLFlBQVYsRUFBd0IsWUFBWTtBQUVoQzFHLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBa0MrRCxNQUFNLENBQUNFLEVBQXJEO0FBRUFGLGtCQUFNLENBQUNuRixFQUFQLENBQVU0TixNQUFWLEVBQWtCckgsSUFBbEIsQ0FBdUIvQixvSUFBcUIsQ0FBQzBKLFFBQTdDLEVBQXVEL0ksTUFBTSxDQUFDRSxFQUE5RDtBQUNBRixrQkFBTSxDQUFDZ0osVUFBUDtBQUNILFdBTkQ7QUFPSCxTQWpCRDtBQW1CQXhHLGNBQU0sQ0FBQ3hDLE1BQVAsQ0FBYzBDLEVBQWQsQ0FBaUJyRCxvSUFBcUIsQ0FBQzRKLGNBQXZDLEVBQXVELFVBQUNDLElBQUQsRUFBWUMsV0FBWixFQUFrREMsV0FBbEQsRUFBdUU7QUFDMUgsY0FBSUQsV0FBVyxJQUFJN0osc0lBQXVCLENBQUMrSixLQUEzQyxFQUNJck4sT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFFSitELGdCQUFNLENBQUNzSixTQUFQLENBQWlCek8sRUFBakIsQ0FBb0JxTyxJQUFwQixFQUEwQjlILElBQTFCLENBQStCL0Isb0lBQXFCLENBQUM0SixjQUFyRCxFQUFxRUUsV0FBckUsRUFBa0ZDLFdBQWxGO0FBRUgsU0FORDtBQVFBcEosY0FBTSxDQUFDMEMsRUFBUCxDQUFVckQsb0lBQXFCLENBQUNrSyxrQkFBaEMsRUFBb0QsWUFBTSxDQUV6RCxDQUZEO0FBR0gsT0FuQ0Q7QUFvQ0g7QUFqTUw7QUFBQTtBQUFBLCtCQW1NdUIvRyxNQW5NdkIsRUFtTXlEO0FBQ2pELFdBQUthLE9BQUwsQ0FBYTdGLE9BQWIsQ0FBcUIsVUFBQ2dNLFdBQUQsRUFBcUM7QUFDdEQsWUFBSWhILE1BQU0sSUFBSWdILFdBQVYsSUFBeUJBLFdBQVcsQ0FBQ25CLG1CQUF6QyxFQUE4RDtBQUMxRHJNLGlCQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBdUcsZ0JBQU0sQ0FBQzZGLG1CQUFQLEdBQTZCLEtBQTdCO0FBQ0FtQixxQkFBVyxDQUFDbkIsbUJBQVosR0FBa0MsS0FBbEM7QUFFQSxjQUFJSSxNQUFjLEdBQUdqRyxNQUFNLENBQUNsQyxJQUFQLENBQVlDLFFBQVosR0FBdUIsR0FBdkIsR0FBNkJpSixXQUFXLENBQUNsSixJQUFaLENBQWlCQyxRQUFuRTtBQUVBaUMsZ0JBQU0sQ0FBQ3hDLE1BQVAsQ0FBY29CLElBQWQsQ0FBbUIvQixvSUFBcUIsQ0FBQ29LLFdBQXpDLEVBQXNEaEIsTUFBdEQ7QUFDQWUscUJBQVcsQ0FBQ3hKLE1BQVosQ0FBbUJvQixJQUFuQixDQUF3Qi9CLG9JQUFxQixDQUFDb0ssV0FBOUMsRUFBMkRoQixNQUEzRDtBQUVBLGlCQUFPLElBQVA7QUFDSDtBQUNKLE9BYkQ7QUFjSDtBQWxOTDtBQUFBO0FBQUEsa0NBb04wQnZJLEVBcE4xQixFQW9Oc0NGLE1BcE50QyxFQW9OdUU7QUFDL0QsVUFBSTBKLFVBQThCLEdBQUcsSUFBSWpJLHdFQUFKLEVBQXJDLENBRCtELENBRS9EOztBQUNBLFdBQUs0QixPQUFMLENBQWE3RixPQUFiLENBQXFCLFVBQUNnRixNQUFELEVBQWdDO0FBQ2pELFlBQUlBLE1BQU0sQ0FBQ2xDLElBQVAsQ0FBWUMsUUFBWixLQUF5QkwsRUFBN0IsRUFBaUM7QUFDN0I7QUFDQXdKLG9CQUFVLEdBQUdsSCxNQUFiO0FBQ0FrSCxvQkFBVSxDQUFDbEMsU0FBWCxDQUFxQnhILE1BQXJCO0FBQ0EsaUJBQU8sSUFBUDtBQUNIO0FBQ0osT0FQRDtBQVNBMEosZ0JBQVUsQ0FBQzFKLE1BQVgsR0FBb0JBLE1BQXBCO0FBRUEsYUFBTzBKLFVBQVA7QUFDSDtBQW5PTDtBQUFBO0FBQUEsZ0NBcU93QmpCLE1Bck94QixFQXFPd0M3RyxFQXJPeEMsRUFxTzZEO0FBQ3JEO0FBQ0E1RixhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBa0N3TSxNQUE5QztBQUNBLFVBQUlrQixRQUFKO0FBRUEsV0FBS0MsS0FBTCxDQUFXcE0sT0FBWCxDQUFtQixVQUFDMEwsSUFBRCxFQUFzQjtBQUNyQyxZQUFJQSxJQUFJLENBQUNoSixFQUFMLElBQVd1SSxNQUFmLEVBQXVCO0FBQ25Ca0Isa0JBQVEsR0FBR1QsSUFBWDtBQUNBLGlCQUFPLElBQVA7QUFDSCxTQUpvQyxDQUtyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNILE9BVkQ7O0FBWUEsVUFBSSxDQUFDUyxRQUFMLEVBQWU7QUFDWEEsZ0JBQVEsR0FBRyxJQUFJaEksdURBQUosQ0FBZThHLE1BQWYsRUFBdUI3RyxFQUF2QixDQUFYO0FBQ0EsYUFBS2dJLEtBQUwsQ0FBVzVNLElBQVgsQ0FBZ0IyTSxRQUFoQjtBQUNIOztBQUVELGFBQU9BLFFBQVA7QUFDSDtBQTVQTDtBQUFBO0FBQUEsaUNBOFB5Qm5ILE1BOVB6QixFQThQcURsQyxJQTlQckQsRUE4UHNFO0FBQUE7O0FBQzlELFVBQUl1SixPQUFlLEdBQUcsNkJBQTZCdkosSUFBSSxDQUFDLFFBQUQsQ0FBakMsR0FBOEMsSUFBOUMsR0FBcURBLElBQUksQ0FBQyxPQUFELENBQXpELEdBQXFFLG1CQUFyRSxHQUEyRkEsSUFBSSxDQUFDLFFBQUQsQ0FBL0YsR0FBNEcsR0FBbEk7O0FBRUEsVUFBSUEsSUFBSSxDQUFDLE1BQUQsQ0FBSixJQUFnQixXQUFwQixFQUFpQztBQUM3QixZQUFJQSxJQUFJLENBQUMsT0FBRCxDQUFKLElBQWlCa0Isc0VBQVMsQ0FBQ3NJLEdBQS9CLEVBQW9DO0FBQ2hDO0FBQ0FELGlCQUFPLEdBQUcsd0ZBQXdGLFdBQWxHLENBRmdDLENBR2hDO0FBQ0gsU0FKRCxNQUlPLElBQUl2SixJQUFJLENBQUMsT0FBRCxDQUFKLElBQWlCa0Isc0VBQVMsQ0FBQ3VJLElBQS9CLEVBQXFDO0FBQ3hDRixpQkFBTyxHQUFHLHdGQUF3RixXQUFsRztBQUNIO0FBQ0o7O0FBRUQ3TixhQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFjNE4sT0FBMUIsRUFBbUMsV0FBV3ZKLElBQUksQ0FBQyxNQUFELENBQWxELEVBQTRELFlBQVlBLElBQUksQ0FBQyxPQUFELENBQTVFOztBQUdBO0FBQUE7QUFBQSw4QkFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUN3QixNQUFJLENBQUNpRyxZQUFMLENBQWtCVSxPQUFsQixFQUR4Qjs7QUFBQTtBQUNTK0Msc0JBRFQ7QUFBQTtBQUFBO0FBQUEsdUJBSXlCQSxNQUFNLENBQUNDLEtBQVAsQ0FBYUosT0FBYixDQUp6Qjs7QUFBQTtBQUlhSyxtQkFKYjs7QUFLTztBQUNBLHNCQUFJLENBQUN0QyxjQUFMLENBQW9CcEYsTUFBcEIsRUFBNEJsQyxJQUFJLENBQUMsUUFBRCxDQUFoQzs7QUFOUDtBQUFBO0FBU08wSixzQkFBTSxDQUFDRyxPQUFQO0FBVFA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRCxLQVdLQyxLQVhMLENBV1csVUFBQUMsQ0FBQztBQUFBLGVBQUlyTyxPQUFPLENBQUNDLEdBQVIsQ0FBWW9PLENBQUMsQ0FBQ0MsS0FBZCxDQUFKO0FBQUEsT0FYWjtBQWFIO0FBM1JMO0FBQUE7QUFBQSxtQ0E2UjJCOUgsTUE3UjNCLEVBNlJ1RG1GLFFBN1J2RCxFQTZSNEU7QUFBQTs7QUFDcEUzTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBOEIwTCxRQUExQztBQUNBLFVBQU1zQyxLQUFLLEdBQUc7QUFDVjtBQUNBTSxZQUFJLEVBQUUsWUFGSTtBQUdWQyxZQUFJLEVBQUUsK0NBSEk7QUFJVkMsY0FBTSxFQUFFLENBQUM5QyxRQUFEO0FBSkUsT0FBZDtBQU9BLFdBQUtwQixZQUFMLENBQWtCMEQsS0FBbEIsQ0FBd0JBLEtBQXhCLEVBQ0tTLElBREwsQ0FDVSxVQUFBUixHQUFHLEVBQUk7QUFFVCxZQUFJQSxHQUFHLENBQUNTLElBQUosQ0FBUyxDQUFULEtBQWVDLFNBQWYsSUFBNEJWLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLENBQVQsS0FBZSxXQUEzQyxJQUEwRFQsR0FBRyxDQUFDUyxJQUFKLENBQVMsQ0FBVCxLQUFlLElBQTdFLEVBQW1GO0FBQy9FLGdCQUFJLENBQUNFLGFBQUwsQ0FBbUJySSxNQUFNLENBQUN4QyxNQUExQixFQUFrQzJILFFBQWxDO0FBQ0gsU0FGRCxNQUVPO0FBQ0huRixnQkFBTSxDQUFDZCxnQkFBUCxDQUF3QndJLEdBQUcsQ0FBQ1MsSUFBSixDQUFTLENBQVQsQ0FBeEI7QUFDSCxTQU5RLENBT1Q7O0FBQ0gsT0FUTCxFQVVLUCxLQVZMLENBVVcsVUFBQUMsQ0FBQyxFQUFJO0FBRVJyTyxlQUFPLENBQUMrSyxLQUFSLENBQWNzRCxDQUFDLENBQUNDLEtBQWhCO0FBQ0gsT0FiTDtBQWNIO0FBcFRMO0FBQUE7QUFBQSxrQ0FzVDBCOUgsTUF0VDFCLEVBc1QwQ21GLFFBdFQxQyxFQXNUK0Q7QUFBQTs7QUFDdkQzTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBd0IwTCxRQUFwQztBQUNBLFVBQU1tRCxrQkFBa0IsR0FDcEI7QUFDSVAsWUFBSSxFQUFFLGlCQURWO0FBRUlDLFlBQUksRUFBRSw4Q0FGVjtBQUdJQyxjQUFNLEVBQUUsQ0FBQzlDLFFBQUQ7QUFIWixPQURKO0FBT0EsV0FBS3BCLFlBQUwsQ0FBa0IwRCxLQUFsQixDQUF3QmEsa0JBQXhCLEVBQ0E7QUFEQSxPQUVLSixJQUZMLENBRVUsVUFBQVIsR0FBRyxFQUFJO0FBQ1Q7O0FBRUEsY0FBSSxDQUFDdEMsY0FBTCxDQUFvQnBGLE1BQU0sQ0FBQ3hDLE1BQTNCLEVBQW1DMkgsUUFBbkM7QUFDSCxPQU5MLEVBT0t5QyxLQVBMLENBT1csVUFBQUMsQ0FBQyxFQUFJO0FBQ1JyTyxlQUFPLENBQUMrSyxLQUFSLENBQWNzRCxDQUFDLENBQUNDLEtBQWhCO0FBQ0gsT0FUTDtBQVVIO0FBR0Q7Ozs7Ozs7QUE1VUo7O0FBQUE7QUFBQTtBQW9WQSxJQUFJbkYsaUJBQUosRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVdBLDRDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIFBvY2tleVNvY2tldE1lc3NhZ2VzIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgV0FUQ0g6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIldBVENIXCI7XHJcbiAgICAvLyBwdWJsaWMgc3RhdGljIFNDT1JFX1VQREFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiU0NPUkVfVVBEQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9QUE9ORU5UOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJPUFBPTkVOVFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBZT1VSX1RVUk46IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIllPVVJfVFVSTlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBPUFBPTkVOVF9TRVRUSU5HUzogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1BQT05FTlRfU0VUVElOR1NcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgT1BQT05FTlRfUkVNQVRDSDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiT1BQT05FTlRfUkVNQVRDSFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBESVNDT05ORUNUX01ZX1NPQ0tFVDogc3RyaW5nID0gXCJDb25uZWN0aW9uU2lnbmFsc1R5cGUuXCIgKyAnRElTQ09OTkVDVF9NWV9TT0NLRVQnO1xyXG5cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgT1BQT05FTlRfUkVTVEFSVDogYW55O1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgQkFMTF9JTl9USEVfSEFMTDogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQkFMTF9JTl9USEVfSEFMTFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTQ09SRV9VUERBVEVEOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJTQ09SRV9VUERBVEVEXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIENIRUNLX05FWFRfVFVSTjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQ0hFQ0tfTkVYVF9UVVJOXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIENIQU5HRV9TVEFURTogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiQ0hBTkdFX1NUQVRFXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIE9XTl9CQUxMX1RPVUNIRURfRklSU1Q6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIk9XTl9CQUxMX1RPVUNIRURfRklSU1RcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9VTkRfVElNRVJfVVBEQVRFOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJST1VORF9USU1FUl9VUERBVEVcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgSElERV9USU1FUjogc3RyaW5nID0gXCJQb2NrZXlTb2NrZXRNZXNzYWdlcy5cIiArIFwiSElERV9USU1FUlwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBCQUxMX1dBU19TSE9UOiBzdHJpbmcgPSBcIlBvY2tleVNvY2tldE1lc3NhZ2VzLlwiICsgXCJCQUxMX1dBU19TSE9UXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEFMTE9DQVRFRF9USU1FX0VMQVBTRUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIkFMTE9DQVRFRF9USU1FX0VMQVBTRURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgUk9VTkRfRklOSVNIRUQ6IHN0cmluZyA9IFwiUG9ja2V5U29ja2V0TWVzc2FnZXMuXCIgKyBcIlJPVU5EX0ZJTklTSEVEXCI7XHJcbn1cclxuXHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge0Zpbml0ZVN0YXRlTWFjaGluZX0gZnJvbSBcIi4vdHlwZXN0YXRlXCI7XHJcblxyXG5leHBvcnQgZW51bSBQb2NrZXlTdGF0ZXMge1xyXG4gICAgLyowKi9vbkxvYWQsXHJcbiAgICAvKjEqL29uTWFpbk1lbnUsXHJcbiAgICAvKjIqL29uU3RhcnQsXHJcbiAgICAvKjMqL29uUm91bmRFbmQsXHJcbiAgICAvKjQqL29uRGVmaW5lQ2xpZW50LFxyXG4gICAgLyo1Ki9vblNlYXJjaEZvclBhcnRuZXIsXHJcbiAgICAvKjYqL29uV2F0Y2gsXHJcbiAgICAvKjcqL29uUmVhcnJhbmdlU3RpY2ssXHJcbiAgICAvKjgqL29uUmVwb3NpdGlvbldoaXRlQmFsbCxcclxuICAgIC8qOSovb25TaG9vdCxcclxuICAgIC8qMTAqL29uRW5kVHVybixcclxuICAgIC8qMTEqL29uRW5kTWF0Y2gsXHJcbiAgICAvKjEyKi9vblByZXBhcmVSb3VuZE9uZSxcclxuICAgIC8qMTMqL29uUHJlcGFyZVJvdW5kVHdvLFxyXG4gICAgLyoxNCovb25QcmVwYXJlUm91bmRUaHJlZSxcclxufVxyXG5cclxuLy8gZXhwb3J0IGVudW0gUG9ja2V5U3RhdGVzIHtcclxuLy8gICAgIFN0YXJ0R2FtZSxcclxuLy8gICAgIFBsYXllclR1cm4sXHJcbi8vICAgICBQbGF5ZXJUdXJuRmlyc3RCYWxsLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuLFxyXG4vLyAgICAgT3Bwb25lbnRUdXJuRmlyc3RCYWxsLFxyXG4vL1xyXG4vLyB9XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVN0YXRlTWFjaGluZSB7XHJcblxyXG4gICAgLy8gQ29uc3RydWN0IHRoZSBGU00gd2l0aCB0aGUgaW5pdGFsIHN0YXRlLCBpbiB0aGlzIGNhc2UgdGhlIGVsZXZhdG9yIHN0YXJ0cyB3aXRoIGl0cyBkb29ycyBvcGVuZWRcclxuICAgIHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBQb2NrZXlTdGF0ZU1hY2hpbmU7XHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBuZXh0U3RhdGU6IGFueTtcclxuXHJcbiAgICAvLyBwcml2YXRlIGN1cnJlbnRTdGF0ZTphbnk7XHJcblxyXG4gICAgc3RhdGljIEluc3RhbmNlKCk6IFBvY2tleVN0YXRlTWFjaGluZSB7XHJcbiAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlID0gbmV3IFBvY2tleVN0YXRlTWFjaGluZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5pbml0aWFsaXplZCkge1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtID0gbmV3IEZpbml0ZVN0YXRlTWFjaGluZTxQb2NrZXlTdGF0ZXM+KFBvY2tleVN0YXRlcy5vbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuSW5pdGlhbGl6ZVN0YXRlcygpO1xyXG4gICAgICAgICAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzOiBzdHJpbmcgPSBQb2NrZXlTdGF0ZXNbUG9ja2V5U3RhdGVzLm9uTG9hZF07XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIiVjIFN0YXRlTWFjaGluZSAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIHMsIFwiYmFja2dyb3VuZDogeWVsbG93OyBjb2xvcjogI2Y2NTQ2YTsgZm9udC13ZWlnaHQ6Ym9sZDsgXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkucHJpbnRGc21DdXJyZW50U3RhdGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9LCAxMDApO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUG9ja2V5U3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgSW5pdGlhbGl6ZVN0YXRlcygpIHtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkxvYWQpLnRvKFBvY2tleVN0YXRlcy5vbk1haW5NZW51KTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25NYWluTWVudSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uTWFpbk1lbnUpLnRvKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblNlYXJjaEZvclBhcnRuZXIpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRPbmUpLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZE9uZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3byk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFR3bykudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVHdvKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUaHJlZSkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kVGhyZWUpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgLy8gdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25QcmVwYXJlUm91bmRUd28pLnRvKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblByZXBhcmVSb3VuZFRocmVlKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRUdXJuKS50byhQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uU2VhcmNoRm9yUGFydG5lcikudG8oUG9ja2V5U3RhdGVzLm9uRW5kTWF0Y2gpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25NYWluTWVudSk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25FbmRNYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUHJlcGFyZVJvdW5kT25lKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZE1hdGNoKS50byhQb2NrZXlTdGF0ZXMub25TZWFyY2hGb3JQYXJ0bmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljaykudG8oUG9ja2V5U3RhdGVzLm9uU2hvb3QpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spLnRvKFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKS50byhQb2NrZXlTdGF0ZXMub25FbmRUdXJuKTtcclxuXHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uRW5kVHVybik7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25TaG9vdCkudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbkVuZFR1cm4pLnRvKFBvY2tleVN0YXRlcy5vblJlcG9zaXRpb25XaGl0ZUJhbGwpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uRW5kVHVybikudG8oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpO1xyXG5cclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vbldhdGNoKS50byhQb2NrZXlTdGF0ZXMub25Sb3VuZEVuZCk7XHJcbiAgICAgICAgdGhpcy5mc20uZnJvbShQb2NrZXlTdGF0ZXMub25XYXRjaCkudG8oUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZnNtLmZyb20oUG9ja2V5U3RhdGVzLm9uUm91bmRFbmQpLnRvKFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB0aGlzLmZzbS5mcm9tKFBvY2tleVN0YXRlcy5vblJvdW5kRW5kKS50byhQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxheVN0YXRlQ2hhbmdpbmcoZGVsYXllZFN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRTdGF0ZSA9IFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmZzbS5jdXJyZW50U3RhdGU7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUgPSBkZWxheWVkU3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZURlbGF5ZWRTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICBQb2NrZXlTdGF0ZU1hY2hpbmUuSW5zdGFuY2UoKS5jaGFuZ2VTdGF0ZSh0aGlzLm5leHRTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5uZXh0U3RhdGUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYXNTdGF0ZUluUXVldWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFfLmlzVW5kZWZpbmVkKHRoaXMubmV4dFN0YXRlKSAmJiBfLmlzTnVsbCh0aGlzLm5leHRTdGF0ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoYW5nZVN0YXRlKHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIVBvY2tleVN0YXRlc1tzdGF0ZV0pIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCIlYyBTdGF0ZU1hY2hpbmUgLT4gc3RhdGUgZG9lcyBub3QgZXhpc3Q6IFwiICsgc3RhdGUsIFwiY29sb3I6ICMwMDAwMDA7IGJhY2tncm91bmQ6I2ZmOTkwMFwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdGF0ZSA9PSBQb2NrZXlTdGF0ZXMub25TaG9vdCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImN1cnJlbnQgc3RhdGU9PT09PT09XCIpO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50RnNtQ3VycmVudFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3VycmVudCBzdGF0ZT09PT09PT1cIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RvcFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmdvKHN0YXRlKTtcclxuICAgICAgICB0aGlzLnByaW50RnNtQ3VycmVudFN0YXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRTdGF0ZU5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICBsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnNtKSB7XHJcbiAgICAgICAgICAgIF8uZm9yRWFjaCh0aGlzLmZzbSwgKHN0YXRlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PSB0aGlzLmZzbS5jdXJyZW50U3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBzID0gUG9ja2V5U3RhdGVzW3N0YXRlXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcmludEZzbUN1cnJlbnRTdGF0ZSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZnNtLmN1cnJlbnRTdGF0ZSA9PSBQb2NrZXlTdGF0ZXMub25TaG9vdCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IGJsYWNrOyBjb2xvcjogeWVsbG93OyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCIlYyBHYW1lTWFuYWdlciAtPiBGU00gY3VycmVudFN0YXRlOiBcIiArIFBvY2tleVN0YXRlTWFjaGluZS5JbnN0YW5jZSgpLmdldEN1cnJlbnRTdGF0ZU5hbWUoKSwgXCJiYWNrZ3JvdW5kOiB5ZWxsb3c7IGNvbG9yOiAjZjY1NDZhOyBmb250LXdlaWdodDpib2xkOyBcIik7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiVjIEdhbWVNYW5hZ2VyIC0+IEZTTSBjdXJyZW50U3RhdGU6IFwiICsgUG9ja2V5U3RhdGVNYWNoaW5lLkluc3RhbmNlKCkuZ2V0Q3VycmVudFN0YXRlTmFtZSgpLCBcImJhY2tncm91bmQ6IHllbGxvdzsgY29sb3I6ICNmNjU0NmE7IGZvbnQtd2VpZ2h0OmJvbGQ7IFwiKTtcclxuICAgIH1cclxufSIsIlxyXG4gICAvKipcclxuICAgICogVHJhbnNpdGlvbiBncm91cGluZyB0byBmYWNpbGlhdGUgZmx1ZW50IGFwaVxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgY29uc3RydWN0b3IocHVibGljIGZzbTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+KSB7IH1cclxuXHJcbiAgICAgIHB1YmxpYyBmcm9tU3RhdGVzOiBUW107XHJcbiAgICAgIHB1YmxpYyB0b1N0YXRlczogVFtdO1xyXG5cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBTcGVjaWZ5IHRoZSBlbmQgc3RhdGUocykgb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgdG8oLi4uc3RhdGVzOiBUW10pIHtcclxuICAgICAgICAgdGhpcy50b1N0YXRlcyA9IHN0YXRlcztcclxuICAgICAgICAgdGhpcy5mc20uYWRkVHJhbnNpdGlvbnModGhpcyk7XHJcbiAgICAgIH1cclxuICAgICAgLyoqXHJcbiAgICAgICAqIFNwZWNpZnkgdGhhdCBhbnkgc3RhdGUgaW4gdGhlIHN0YXRlIGVudW0gaXMgdmFsdWVcclxuICAgICAgICogVGFrZXMgdGhlIHN0YXRlIGVudW0gYXMgYW4gYXJndW1lbnRcclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyB0b0FueShzdGF0ZXM6IGFueSkge1xyXG4gICAgICAgICB2YXIgdG9TdGF0ZXM6IFRbXSA9IFtdO1xyXG4gICAgICAgICBmb3IgKHZhciBzIGluIHN0YXRlcykge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVzLmhhc093blByb3BlcnR5KHMpKSB7XHJcbiAgICAgICAgICAgICAgIHRvU3RhdGVzLnB1c2goKDxUPnN0YXRlc1tzXSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMudG9TdGF0ZXMgPSB0b1N0YXRlcztcclxuICAgICAgICAgdGhpcy5mc20uYWRkVHJhbnNpdGlvbnModGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgLyoqXHJcbiAgICAqIEludGVybmFsIHJlcHJlc2VudGF0aW9uIG9mIGEgdHJhbnNpdGlvbiBmdW5jdGlvblxyXG4gICAgKi9cclxuICAgZXhwb3J0IGNsYXNzIFRyYW5zaXRpb25GdW5jdGlvbjxUPiB7XHJcbiAgICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBmc206IEZpbml0ZVN0YXRlTWFjaGluZTxUPiwgcHVibGljIGZyb206IFQsIHB1YmxpYyB0bzogVCkgeyB9XHJcbiAgIH1cclxuICAgXHJcbiAgIC8qKlxyXG4gICAgKiBBIHNpbXBsZSBmaW5pdGUgc3RhdGUgbWFjaGluZSBpbXBsZW1lbnRlZCBpbiBUeXBlU2NyaXB0LCB0aGUgdGVtcGxhdGVkIGFyZ3VtZW50IGlzIG1lYW50IHRvIGJlIHVzZWRcclxuICAgICogd2l0aCBhbiBlbnVtZXJhdGlvbi5cclxuICAgICovXHJcbiAgIGV4cG9ydCBjbGFzcyBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICBwdWJsaWMgY3VycmVudFN0YXRlOiBUO1xyXG4gICAgICBwcml2YXRlIF9zdGFydFN0YXRlOiBUO1xyXG4gICAgICBwcml2YXRlIF9hbGxvd0ltcGxpY2l0U2VsZlRyYW5zaXRpb246IGJvb2xlYW47XHJcbiAgICAgIHByaXZhdGUgX3RyYW5zaXRpb25GdW5jdGlvbnM6IFRyYW5zaXRpb25GdW5jdGlvbjxUPltdID0gW107XHJcbiAgICAgIHByaXZhdGUgX29uQ2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKGZyb206IFQsIGV2ZW50PzogYW55KTogdm9pZDsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfZXhpdENhbGxiYWNrczogeyBba2V5OiBzdHJpbmddOiB7ICh0bzogVCk6IGJvb2xlYW47IH1bXSB9ID0ge307XHJcbiAgICAgIHByaXZhdGUgX2VudGVyQ2FsbGJhY2tzOiB7IFtrZXk6IHN0cmluZ106IHsgKGZyb206IFQsIGV2ZW50PzogYW55KTogYm9vbGVhbjsgfVtdIH0gPSB7fTtcclxuICAgICAgcHJpdmF0ZSBfaW52YWxpZFRyYW5zaXRpb25DYWxsYmFjazogKHRvPzogVCwgZnJvbT86IFQpID0+IGJvb2xlYW4gPSBudWxsO1xyXG5cclxuICAgICAgY29uc3RydWN0b3Ioc3RhcnRTdGF0ZTogVCwgYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBzdGFydFN0YXRlO1xyXG4gICAgICAgICB0aGlzLl9zdGFydFN0YXRlID0gc3RhcnRTdGF0ZTtcclxuICAgICAgICAgdGhpcy5fYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uID0gYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgYWRkVHJhbnNpdGlvbnMoZmNuOiBUcmFuc2l0aW9uczxUPikge1xyXG4gICAgICAgICBmY24uZnJvbVN0YXRlcy5mb3JFYWNoKGZyb20gPT4ge1xyXG4gICAgICAgICAgICBmY24udG9TdGF0ZXMuZm9yRWFjaCh0byA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IGFkZCB0aGUgdHJhbnNpdGlvbiBpZiB0aGUgc3RhdGUgbWFjaGluZSBpcyBub3QgY3VycmVudGx5IGFibGUgdG8gdHJhbnNpdGlvbi5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fY2FuR28oZnJvbSwgdG8pKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25GdW5jdGlvbnMucHVzaChuZXcgVHJhbnNpdGlvbkZ1bmN0aW9uPFQ+KHRoaXMsIGZyb20sIHRvKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogTGlzdGVuIGZvciB0aGUgdHJhbnNpdGlvbiB0byB0aGlzIHN0YXRlIGFuZCBmaXJlIHRoZSBhc3NvY2lhdGVkIGNhbGxiYWNrXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb24oc3RhdGU6IFQsIGNhbGxiYWNrOiAoZnJvbT86IFQsIGV2ZW50PzogYW55KSA9PiBhbnkpOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9vbkNhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFjaywgcmV0dXJuaW5nXHJcbiAgICAgICAqIGZhbHNlIGluIHRoZSBjYWxsYmFjayB3aWxsIGJsb2NrIHRoZSB0cmFuc2l0aW9uIHRvIHRoaXMgc3RhdGUuXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgb25FbnRlcihzdGF0ZTogVCwgY2FsbGJhY2s6IChmcm9tPzogVCwgZXZlbnQ/OiBhbnkpID0+IGJvb2xlYW4pOiBGaW5pdGVTdGF0ZU1hY2hpbmU8VD4ge1xyXG4gICAgICAgICB2YXIga2V5ID0gc3RhdGUudG9TdHJpbmcoKTtcclxuICAgICAgICAgaWYgKCF0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VudGVyQ2FsbGJhY2tzW2tleV0gPSBbXTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1trZXldLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIExpc3RlbiBmb3IgdGhlIHRyYW5zaXRpb24gdG8gdGhpcyBzdGF0ZSBhbmQgZmlyZSB0aGUgYXNzb2NpYXRlZCBjYWxsYmFjaywgcmV0dXJuaW5nXHJcbiAgICAgICAqIGZhbHNlIGluIHRoZSBjYWxsYmFjayB3aWxsIGJsb2NrIHRoZSB0cmFuc2l0aW9uIGZyb20gdGhpcyBzdGF0ZS5cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkV4aXQoc3RhdGU6IFQsIGNhbGxiYWNrOiAodG8/OiBUKSA9PiBib29sZWFuKTogRmluaXRlU3RhdGVNYWNoaW5lPFQ+IHtcclxuICAgICAgICAgdmFyIGtleSA9IHN0YXRlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgIGlmICghdGhpcy5fZXhpdENhbGxiYWNrc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XSA9IFtdO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3Nba2V5XS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBMaXN0IGZvciBhbiBpbnZhbGlkIHRyYW5zaXRpb24gYW5kIGhhbmRsZSB0aGUgZXJyb3IsIHJldHVybmluZyBhIGZhbHN5IHZhbHVlIHdpbGwgdGhyb3cgYW5cclxuICAgICAgICogZXhjZXB0aW9uLCBhIHRydXRoeSBvbmUgd2lsbCBzd2FsbG93IHRoZSBleGNlcHRpb25cclxuICAgICAgICovXHJcbiAgICAgIHB1YmxpYyBvbkludmFsaWRUcmFuc2l0aW9uKGNhbGxiYWNrOiAoZnJvbT86IFQsIHRvPzogVCkgPT4gYm9vbGVhbik6IEZpbml0ZVN0YXRlTWFjaGluZTxUPiB7XHJcbiAgICAgICAgIGlmKCF0aGlzLl9pbnZhbGlkVHJhbnNpdGlvbkNhbGxiYWNrKXtcclxuICAgICAgICAgICAgdGhpcy5faW52YWxpZFRyYW5zaXRpb25DYWxsYmFjayA9IGNhbGxiYWNrXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBEZWNsYXJlcyB0aGUgc3RhcnQgc3RhdGUocykgb2YgYSB0cmFuc2l0aW9uIGZ1bmN0aW9uLCBtdXN0IGJlIGZvbGxvd2VkIHdpdGggYSAnLnRvKC4uLmVuZFN0YXRlcyknXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgZnJvbSguLi5zdGF0ZXM6IFRbXSk6IFRyYW5zaXRpb25zPFQ+IHtcclxuICAgICAgICAgdmFyIF90cmFuc2l0aW9uID0gbmV3IFRyYW5zaXRpb25zPFQ+KHRoaXMpO1xyXG4gICAgICAgICBfdHJhbnNpdGlvbi5mcm9tU3RhdGVzID0gc3RhdGVzO1xyXG4gICAgICAgICByZXR1cm4gX3RyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBmcm9tQW55KHN0YXRlczogYW55KTogVHJhbnNpdGlvbnM8VD4ge1xyXG4gICAgICAgICB2YXIgZnJvbVN0YXRlczogVFtdID0gW107XHJcbiAgICAgICAgIGZvciAodmFyIHMgaW4gc3RhdGVzKSB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZXMuaGFzT3duUHJvcGVydHkocykpIHtcclxuICAgICAgICAgICAgICAgZnJvbVN0YXRlcy5wdXNoKCg8VD5zdGF0ZXNbc10pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB2YXIgX3RyYW5zaXRpb24gPSBuZXcgVHJhbnNpdGlvbnM8VD4odGhpcyk7XHJcbiAgICAgICAgIF90cmFuc2l0aW9uLmZyb21TdGF0ZXMgPSBmcm9tU3RhdGVzO1xyXG4gICAgICAgICByZXR1cm4gX3RyYW5zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgX3ZhbGlkVHJhbnNpdGlvbihmcm9tOiBULCB0bzogVCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvbkZ1bmN0aW9ucy5zb21lKHRmID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuICh0Zi5mcm9tID09PSBmcm9tICYmIHRmLnRvID09PSB0byk7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogQ2hlY2sgd2hldGhlciBhIHRyYW5zaXRpb24gYmV0d2VlbiBhbnkgdHdvIHN0YXRlcyBpcyB2YWxpZC5cclxuICAgICAgICogICAgSWYgYWxsb3dJbXBsaWNpdFNlbGZUcmFuc2l0aW9uIGlzIHRydWUsIGFsd2F5cyBhbGxvdyB0cmFuc2l0aW9ucyBmcm9tIGEgc3RhdGUgYmFjayB0byBpdHNlbGYuXHJcbiAgICAgICAqICAgICBPdGhlcndpc2UsIGNoZWNrIGlmIGl0J3MgYSB2YWxpZCB0cmFuc2l0aW9uLlxyXG4gICAgICAgKi9cclxuICAgICAgcHJpdmF0ZSBfY2FuR28oZnJvbVN0YXRlOiBULCB0b1N0YXRlOiBUKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICByZXR1cm4gKHRoaXMuX2FsbG93SW1wbGljaXRTZWxmVHJhbnNpdGlvbiAmJiBmcm9tU3RhdGUgPT09IHRvU3RhdGUpIHx8IHRoaXMuX3ZhbGlkVHJhbnNpdGlvbihmcm9tU3RhdGUsIHRvU3RhdGUpO1xyXG4gICAgICB9IFxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICAqIENoZWNrIHdoZXRoZXIgYSB0cmFuc2l0aW9uIHRvIGEgbmV3IHN0YXRlIGlzIHZhbGlkXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgY2FuR28oc3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLl9jYW5Hbyh0aGlzLmN1cnJlbnRTdGF0ZSwgc3RhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvKipcclxuICAgICAgICogVHJhbnNpdGlvbiB0byBhbm90aGVyIHZhbGlkIHN0YXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgZ28oc3RhdGU6IFQsIGV2ZW50PzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgIGlmICghdGhpcy5jYW5HbyhzdGF0ZSkpIHtcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sgfHwgIXRoaXMuX2ludmFsaWRUcmFuc2l0aW9uQ2FsbGJhY2sodGhpcy5jdXJyZW50U3RhdGUsIHN0YXRlKSl7XHJcbiAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3Igbm8gdHJhbnNpdGlvbiBmdW5jdGlvbiBleGlzdHMgZnJvbSBzdGF0ZSAnICsgdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKSArICcgdG8gJyArIHN0YXRlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RyYW5zaXRpb25UbyhzdGF0ZSwgZXZlbnQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICAvKipcclxuICAgICAgICogVGhpcyBtZXRob2QgaXMgYXZhaWxibGUgZm9yIG92ZXJyaWRkaW5nIGZvciB0aGUgc2FrZSBvZiBleHRlbnNpYmlsaXR5LiBcclxuICAgICAgICogSXQgaXMgY2FsbGVkIGluIHRoZSBldmVudCBvZiBhIHN1Y2Nlc3NmdWwgdHJhbnNpdGlvbi5cclxuICAgICAgICovXHJcbiAgICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgICBwdWJsaWMgb25UcmFuc2l0aW9uKGZyb206IFQsIHRvOiBUKSB7XHJcbiAgICAgICAgIC8vIHBhc3MsIGRvZXMgbm90aGluZyB1bnRpbCBvdmVyaWRkZW5cclxuICAgICAgfVxyXG5cclxuICAgICAgLyoqXHJcbiAgICAgICogUmVzZXQgdGhlIGZpbml0ZSBzdGF0ZSBtYWNoaW5lIGJhY2sgdG8gdGhlIHN0YXJ0IHN0YXRlLCBETyBOT1QgVVNFIFRISVMgQVMgQSBTSE9SVENVVCBmb3IgYSB0cmFuc2l0aW9uLiBcclxuICAgICAgKiBUaGlzIGlzIGZvciBzdGFydGluZyB0aGUgZnNtIGZyb20gdGhlIGJlZ2lubmluZy5cclxuICAgICAgKi9cclxuICAgICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuX3N0YXJ0U3RhdGU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8qKlxyXG4gICAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgY3VycmVudCBzdGF0ZSBlcXVhbHMgdGhlIGdpdmVuIHN0YXRlXHJcbiAgICAgICAqL1xyXG4gICAgICBwdWJsaWMgaXMoc3RhdGU6IFQpOiBib29sZWFuIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRTdGF0ZSA9PT0gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHByaXZhdGUgX3RyYW5zaXRpb25UbyhzdGF0ZTogVCwgZXZlbnQ/OiBhbnkpIHtcclxuICAgICAgICAgaWYgKCF0aGlzLl9leGl0Q2FsbGJhY2tzW3RoaXMuY3VycmVudFN0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0gPSBbXTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgaWYgKCF0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbnRlckNhbGxiYWNrc1tzdGF0ZS50b1N0cmluZygpXSA9IFtdO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICBpZiAoIXRoaXMuX29uQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29uQ2FsbGJhY2tzW3N0YXRlLnRvU3RyaW5nKCldID0gW107XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICB2YXIgY2FuRXhpdCA9IHRoaXMuX2V4aXRDYWxsYmFja3NbdGhpcy5jdXJyZW50U3RhdGUudG9TdHJpbmcoKV0ucmVkdWNlPGJvb2xlYW4+KChhY2N1bTogYm9vbGVhbiwgbmV4dDogKHRvOiBUKSA9PiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2N1bSAmJiAoPGJvb2xlYW4+bmV4dC5jYWxsKHRoaXMsIHN0YXRlKSk7XHJcbiAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICAgdmFyIGNhbkVudGVyID0gdGhpcy5fZW50ZXJDYWxsYmFja3Nbc3RhdGUudG9TdHJpbmcoKV0ucmVkdWNlPGJvb2xlYW4+KChhY2N1bTogYm9vbGVhbiwgbmV4dDogKGZyb206IFQpID0+IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgcmV0dXJuIGFjY3VtICYmICg8Ym9vbGVhbj5uZXh0LmNhbGwodGhpcywgdGhpcy5jdXJyZW50U3RhdGUsIGV2ZW50KSk7XHJcbiAgICAgICAgIH0sIHRydWUpO1xyXG5cclxuICAgICAgICAgaWYgKGNhbkV4aXQgJiYgY2FuRW50ZXIpIHtcclxuICAgICAgICAgICAgdmFyIG9sZCA9IHRoaXMuY3VycmVudFN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHN0YXRlO1xyXG4gICAgICAgICAgICB0aGlzLl9vbkNhbGxiYWNrc1t0aGlzLmN1cnJlbnRTdGF0ZS50b1N0cmluZygpXS5mb3JFYWNoKGZjbiA9PiB7XHJcbiAgICAgICAgICAgICAgIGZjbi5jYWxsKHRoaXMsIG9sZCwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5vblRyYW5zaXRpb24ob2xkLCBzdGF0ZSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG5cclxuLy8gbWFpbnRhaW4gYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZm9yIHBlb3BsZSB1c2luZyB0aGUgcGFzY2FsIGNhc2VkIHZlcnNpb25cclxuLy8gdmFyIFR5cGVTdGF0ZSA9IHR5cGVzdGF0ZTtcclxuIiwiZXhwb3J0IGNsYXNzIEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMge1xyXG4gICAgcHVibGljIHN0YXRpYyBTRUFSQ0g6IHN0cmluZyA9IFwiL3NlYXJjaGluZ1wiO1xyXG4gICAgcHVibGljIHN0YXRpYyBQTEFZOiBzdHJpbmcgPSBcIi9wbGF5XCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXRFdmVudHMge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgbmV3Q29ubmVjdGlvbjogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcIm5ld0Nvbm5lY3Rpb25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgbGV0c0Nvbm5lY3Q6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJsZXRzQ29ubmVjdFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBqb2luUm9vbTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImpvaW5Sb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGpvaW5lZFJvb206IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJqb2luZWRSb29tXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGxlZnRSb29tOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwibGVmdFJvb21cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcHJpdmF0ZU1lc3NhZ2U6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJwcml2YXRlTWVzc2FnZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRTaWduZWRJblVzZXJEYXRhOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwiZ2V0U2lnbmVkSW5Vc2VyRGF0YVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhYmFzZTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFiYXNlXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIGRpc2Nvbm5lY3RNeVNvY2tldDogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcImRpc2Nvbm5lY3RNeVNvY2tldFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU2V0dXA6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJnYW1lU2V0dXBcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgcm9vbUNyZWF0ZWQ6IHN0cmluZyA9IFwiRnJhbWV3b3JrU29ja2V0RXZlbnRzLlwiICsgXCJyb29tQ3JlYXRlZFwiO1xyXG4gICAgcHVibGljIHN0YXRpYyB1cGRhdGVQbGF5ZXJEYXRhRnJvbVNlcnZlcjogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFGcm9tU2VydmVyXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHVwZGF0ZVBsYXllckRhdGFGcm9tQ2xpZW50OiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwidXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgdXBkYXRlUGxheWVyRGF0YTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRFdmVudHMuXCIgKyBcInVwZGF0ZVBsYXllckRhdGFcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgc3RhcnRTZW5kaW5nU25hcHNob3RzOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwic3RhcnRTZW5kaW5nU25hcHNob3RzXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIHNuYXBzaG90VXBkYXRlOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldEV2ZW50cy5cIiArIFwic25hcHNob3RVcGRhdGVcIjtcclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgcGFydG5lckZvdW5kQ2hhbm5lbDogc3RyaW5nID0gXCJwYXJ0bmVyRm91bmRDaGFubmVsXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFdIT19XQU5UU19UT19QTEFZOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJXSE9fV0FOVFNfVE9fUExBWVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBJX1dBTlRfVE9fUExBWTogc3RyaW5nID0gXCJGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcy5cIiArIFwiSV9XQU5UU19UT19QTEFZXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIEhFTExPOiBzdHJpbmcgPSBcIkZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLlwiICsgXCJIRUxMT1wiO1xyXG5cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNS84LzIwMTlcclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXIge1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50VGltZTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb25VcGRhdGVDYWxsYmFjazogRnVuY3Rpb24sIHByaXZhdGUgb25Db21wbGV0ZUNhbGxiYWNrOiBGdW5jdGlvbikge1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcHVibGljIHN0YXJ0KGk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBpO1xyXG4gICAgICAgIHRoaXMub25VcGRhdGVDYWxsYmFjaygpO1xyXG4gICAgICAgIC8vY2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpe307XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGltZS0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50VGltZSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblVwZGF0ZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RvcCgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudFRpbWUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VGltZTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcbmltcG9ydCB7UG9ja2V5UGxheWVyRGF0YX0gZnJvbSBcIi4vcG9ja2V5LXBsYXllci1kYXRhXCI7XHJcbmltcG9ydCB7XHJcbiAgICBGcmFtZXdvcmtTb2NrZXRFdmVudHMsXHJcbiAgICBGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzXHJcbn0gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcblxyXG4vKlxyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQge1BvY2tleVNldHRpbmdzfSBmcm9tIFwiLi4vY2xpZW50L3BvY2tleS1zZXR0aW5nc1wiO1xyXG5pbXBvcnQge1NpZ25hbHNNYW5hZ2VyfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvU2lnbmFscy9zaWduYWxzLW1hbmFnZXJcIjtcclxuaW1wb3J0IHtQb2NrZXlTaWduYWxUeXBlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL1NpZ25hbHNNb2R1bGUvcG9ja2V5LXNpZ25hbC10eXBlc1wiO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvU2V0dGluZ3NcIjtcclxuKi9cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgICBwdWJsaWMgZGF0YTogUG9ja2V5UGxheWVyRGF0YSA9IHt9O1xyXG4gICAgcHVibGljIHNvY2tldDogYW55O1xyXG4gICAgcHVibGljIGlzTG9va2luZ0ZvclBhcnRuZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIHB1YmxpYyBpc0NsaWVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRmlyc3RUb1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNvY2tldChzb2NrZXQ6IGFueSk6IHZvaWQge1xyXG5cclxuICAgICAgICBsZXQgbmV3U29ja2V0SUQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gsICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICAgICAgICBuZXdTb2NrZXRJRCA9IG5ld1NvY2tldElELnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZLCAnJykucmVwbGFjZShcIiNcIiwgXCJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5zb2NrZXRJRCA9IG5ld1NvY2tldElEO1xyXG4gICAgICAgIHRoaXMuc29ja2V0ID0gc29ja2V0O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kYXRhLnNvY2tldElEKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInBsYXllciBzb2NrZXQgaW5pdGlhbGl6ZWQ6IFwiICsgdGhpcy5kYXRhLnNvY2tldElEKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlUGxheWVyRGF0YSh1c2VybmFtZURhdGE6IFBvY2tleVBsYXllckRhdGEpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5hdmF0YXIpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmF2YXRhciA9IHVzZXJuYW1lRGF0YS5hdmF0YXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmNvbG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvciA9IHVzZXJuYW1lRGF0YS5jb2xvcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuZGVjYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmRlY2FsID0gdXNlcm5hbWVEYXRhLmRlY2FsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS5mZWx0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5mZWx0ID0gdXNlcm5hbWVEYXRhLmZlbHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnBsYXllcl9sZXZlbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucGxheWVyX2xldmVsID0gdXNlcm5hbWVEYXRhLnBsYXllcl9sZXZlbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEuc3RpY2spIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnN0aWNrID0gdXNlcm5hbWVEYXRhLnN0aWNrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHMpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnRvdGFsX3BvaW50cyA9IHVzZXJuYW1lRGF0YS50b3RhbF9wb2ludHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudG90YWxfcG9pbnRzID0gdXNlcm5hbWVEYXRhLnRvdGFsX3BvaW50cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEubmlja25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLm5pY2tuYW1lID0gdXNlcm5hbWVEYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHVzZXJuYW1lRGF0YS51c2VyX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS51c2VyX2lkID0gdXNlcm5hbWVEYXRhLnVzZXJfaWQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXNlcm5hbWVEYXRhLmZpcnN0X2xvZ2luX2RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLmZpcnN0X2xvZ2luX2RhdGUgPSB1c2VybmFtZURhdGEuZmlyc3RfbG9naW5fZGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1c2VybmFtZURhdGEudHlwZSkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEudHlwZSA9IHVzZXJuYW1lRGF0YS50eXBlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25SZWNlaXZlU25hcHNob3RVcGRhdGUoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTbmFwc2hvdCByZWNlaXZlZC8vLy8vLy8vL1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNuYXBzaG90IHJlY2VpdmVkLy8vLy8vLy8vL1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgc2VuZEdhbWVTbmFwc2hvdChkYXRhOiBhbnkpOiB2b2lkIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhcInNlbmQgc25hcHNob3QgdG8gb3RoZXIgcGxheWVyXCIpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VsZkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGF5ZXIgcmVtb3ZlZFwiKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcblxyXG5cclxuaW1wb3J0IHtQb2NrZXlTdGF0ZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9HYW1lTW9kdWxlL1N0YXRlTWFjaGluZS9wb2NrZXktc3RhdGUtbWFjaGluZVwiO1xyXG5pbXBvcnQge1BvY2tleVBsYXllckRhdGF9IGZyb20gXCIuL3BvY2tleS1wbGF5ZXItZGF0YVwiO1xyXG5cclxuZXhwb3J0IGVudW0gUm91bmRDb21wbGV0ZVR5cGUge1xyXG4gICAgbWF0Y2hDb21wbGV0ZSxcclxuICAgIHJvdW5kQ29tcGxldGUsXHJcbiAgICBwbGF5ZXJEaXNjb25uZWN0ZWQsXHJcbiAgICByZW1hdGNoLFxyXG4gICAgb3Bwb25lbnRGb3VuZFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdW5kVk8ge1xyXG4gICAgdHlwZT86IFJvdW5kQ29tcGxldGVUeXBlLFxyXG4gICAgcm91bmROdW1iZXI/OiBudW1iZXIsXHJcbiAgICBsZWZ0UGxheWVyRGF0YT86IFBvY2tleVBsYXllckRhdGEsXHJcbiAgICByaWdodFBsYXllckRhdGE/OiBQb2NrZXlQbGF5ZXJEYXRhLFxyXG4gICAgLy8gcGxheWVyRGlzY29ubmVjdGVkLFxyXG4gICAgLy8gcmVtYXRjaFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvY2tleVNvdW5kVk8ge1xyXG4gICAgc291bmRBdDogbnVtYmVyLFxyXG4gICAgc291bmROYW1lOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2NrZXlTY3JlZW5TaG90XHJcbntcclxuICAgIGlkOm51bWJlcixcclxuICAgIGdhbWVFbGVtZW50czpQb2NrZXlHYW1lRWxlbWVudFZPW11cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2NrZXlHYW1lRWxlbWVudFZPIHtcclxuICAgIHNvY2tldElEPzogc3RyaW5nLFxyXG4gICAgdHlwZT86IEJhbGxUeXBlLFxyXG4gICAgbmFtZT86IHN0cmluZyxcclxuICAgIHJvdGF0aW9uPzogbnVtYmVyLFxyXG4gICAgeFBvcz86IG51bWJlcixcclxuICAgIHlQb3M/OiBudW1iZXIsXHJcbiAgICB2aXNpYmxlPzogYm9vbGVhbixcclxuICAgIGFscGhhPzogbnVtYmVyLFxyXG4gICAgdGltZUVsYXBzZWQ/OiBudW1iZXIsXHJcbiAgICBpc09uUmVwb3NpdGlvbj86IGJvb2xlYW5cclxuICAgIHBpdm90PzogbnVtYmVyLFxyXG4gICAgc3RhdGU/OlBvY2tleVN0YXRlcyxcclxuICAgIGRpcmVjdGlvbj86bnVtYmVyLFxyXG4gICAgY2FuQmVSZW1vdmVkPzpib29sZWFuLFxyXG4gICAgc2NhbGU/Om51bWJlclxyXG59XHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIFBvY2tleUdyYXBoaWNFbGVtZW50Vk8ge1xyXG4vLyAgICAgdHlwZTogUG9ja2V5T2JqZWN0VHlwZSxcclxuLy8gICAgIG5hbWU6IHN0cmluZyxcclxuLy8gICAgIHBvc2l0aW9uczogbnVtYmVyW11bXSxcclxuLy8gICAgIGNvbG9yOiBudW1iZXJbXSxcclxuLy8gICAgIHJvdGF0aW9uOiBudW1iZXJcclxuLy8gfVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2NrZXlTbmFwc2hvdCB7XHJcbiAgICBlbGVtZW50czogUG9ja2V5R2FtZUVsZW1lbnRWT1tdLFxyXG4gICAgLy8gZ3JhcGhpY3M6IFBvY2tleUdyYXBoaWNFbGVtZW50Vk9bXSxcclxuICAgIHNvdW5kczogUG9ja2V5U291bmRWT1tdLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvdW5kU2V0dXAge1xyXG4gICAgcm91bmROdW1iZXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFsbFR5cGUge1xyXG4gICAgTGVmdCA9ICdMZWZ0QmFsbCcsXHJcbiAgICBSaWdodCA9ICdSaWdodEJhbGwnLFxyXG4gICAgV2hpdGUgPSBcIldoaXRlQmFsbFwiLFxyXG4gICAgUHVjayA9IFwiUHVja1wiXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFdpblN0YXR1cyB7XHJcbiAgICBXSU4sXHJcbiAgICBMT1NUXHJcbn0iLCIvKipcclxuICogIEVkZ2VmbG93XHJcbiAqICBDb3B5cmlnaHQgMjAxOCBFZGdlRmxvd1xyXG4gKiAgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogIE5PVElDRTogWW91IG1heSBub3QgdXNlLCBkaXN0cmlidXRlIG9yIG1vZGlmeSB0aGlzIGRvY3VtZW50IHdpdGhvdXQgdGhlXHJcbiAqICB3cml0dGVuIHBlcm1pc3Npb24gb2YgaXRzIGNvcHlyaWdodCBvd25lclxyXG4gKlxyXG4gKiAgQ3JlYXRlZCBieSBTYW5kcnUgQW5kcmVpIG9uIDQvOS8yMDE5XHJcbiAqL1xyXG5pbXBvcnQge1BsYXllcn0gZnJvbSBcIi4uL2NvbW1vbi9wbGF5ZXJcIjtcclxuaW1wb3J0IHtGcmFtZXdvcmtTb2NrZXRFdmVudHN9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9BYnN0cmFjdE1vZHVsZXMvQ29ubmVjdGlvbi9jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVBsYXllclNlcnZlciBleHRlbmRzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIC8vIHNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAvLyB0aGlzLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YUZyb21DbGllbnQsIHRoaXMudXBkYXRlUGxheWVyRGF0YS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YToge30pOiB2b2lkIHtcclxuICAgICAgICBzdXBlci51cGRhdGVQbGF5ZXJEYXRhKHVzZXJuYW1lRGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VydmVyIHBsYXllciB1cGRhdGVkLiBzZW5kaW5nIHBsYXllciBkYXRhIHVwZGF0ZSB0byBjbGllbnRcIik7XHJcbiAgICAgICAgdGhpcy5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YSwgdGhpcy5kYXRhKTtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiAgRWRnZWZsb3dcclxuICogIENvcHlyaWdodCAyMDE4IEVkZ2VGbG93XHJcbiAqICBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiAgTk9USUNFOiBZb3UgbWF5IG5vdCB1c2UsIGRpc3RyaWJ1dGUgb3IgbW9kaWZ5IHRoaXMgZG9jdW1lbnQgd2l0aG91dCB0aGVcclxuICogIHdyaXR0ZW4gcGVybWlzc2lvbiBvZiBpdHMgY29weXJpZ2h0IG93bmVyXHJcbiAqXHJcbiAqICBDcmVhdGVkIGJ5IFNhbmRydSBBbmRyZWkgb24gNC84LzIwMTlcclxuICovXHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge0ZyYW1ld29ya1NvY2tldEV2ZW50c30gZnJvbSBcIi4uL2NsaWVudC9xRnJhbWV3b3JrL0Fic3RyYWN0TW9kdWxlcy9Db25uZWN0aW9uL2Nvbm5lY3Rpb24tY2hhbm5lbHMtYW5kLW1lc3NhZ2VzXCI7XHJcbmltcG9ydCB7UG9ja2V5U29ja2V0TWVzc2FnZXN9IGZyb20gXCIuLi9jbGllbnQvTW9kdWxlcy9Db25uZWN0aW9uTW9kdWxlL3BvY2tleS1jb25uZWN0aW9uLWNoYW5uZWxzLWFuZC1tZXNzYWdlc1wiO1xyXG5pbXBvcnQge1BvY2tleVN0YXRlc30gZnJvbSBcIi4uL2NsaWVudC9Nb2R1bGVzL0dhbWVNb2R1bGUvU3RhdGVNYWNoaW5lL3BvY2tleS1zdGF0ZS1tYWNoaW5lXCI7XHJcbmltcG9ydCB7VGltZXJ9IGZyb20gXCIuLi9jbGllbnQvcUZyYW1ld29yay9VdGlscy90aW1lclwiO1xyXG5pbXBvcnQge0JhbGxUeXBlLCBSb3VuZENvbXBsZXRlVHlwZSwgUm91bmRWT30gZnJvbSBcIi4uL2NvbW1vbi9wb2NrZXktdmFsdWUtb2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVJvb20ge1xyXG4gICAgcHVibGljIGlkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBwbGF5ZXJzOiBQbGF5ZXJbXSA9IFtdO1xyXG4gICAgcHVibGljIGlvOiBhbnk7XHJcbiAgICBwcml2YXRlIGdhbWVEYXRhOiBSb3VuZFZPID0ge3JvdW5kTnVtYmVyOiAxLCB0eXBlOiBSb3VuZENvbXBsZXRlVHlwZS5vcHBvbmVudEZvdW5kfTtcclxuICAgIHByaXZhdGUgc2NvcmVVcGRhdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHdoaXRlQmFsbEluVGhlSGFsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBvd25CYWxsRmF1bHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgb3Bwb25lbnRCYWxsU2NvcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRQbGF5ZXI6IFBsYXllcjtcclxuICAgIHByaXZhdGUgcm91bmRUaW1lcjogVGltZXI7XHJcbiAgICBwcml2YXRlIHJvdW5kRHVyYXRpb246IG51bWJlciA9IDIwO1xyXG5cclxuICAgIHByaXZhdGUgcm91bmRGaW5pc2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBtYXRjaEZpbmlzaGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgaW86IGFueSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLmlvID0gaW87XHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzLnB1c2godGhpcy5wbGF5ZXIxKTtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnMucHVzaCh0aGlzLnBsYXllcjIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicm9vbSBjcmVhdGVkXCIpO1xyXG4gICAgICAgIHRoaXMucm91bmRUaW1lciA9IG5ldyBUaW1lcih0aGlzLm9uUm91bmRUaW1lclVwZGF0ZS5iaW5kKHRoaXMpLCB0aGlzLm9uUm91bmRUaW1lckNvbXBsZXRlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Sb3VuZFRpbWVyVXBkYXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ST1VORF9USU1FUl9VUERBVEUsIHRoaXMucm91bmRUaW1lci5nZXRDdXJyZW50VGltZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUm91bmRUaW1lckNvbXBsZXRlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5ISURFX1RJTUVSKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQUxMT0NBVEVEX1RJTUVfRUxBUFNFRCk7XHJcbiAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVFbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzBdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vbldhdGNoKTtcclxuICAgICAgICAvLyB0aGlzLmNoZWNrTmV4dFR1cm4oKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuSElERV9USU1FUiwgdGhpcy5yb3VuZFRpbWVyLmdldEN1cnJlbnRUaW1lKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3NpZ25QbGF5ZXIocGxheWVyOiBQbGF5ZXIpOiB2b2lkIHtcclxuICAgICAgICBwbGF5ZXIuZGF0YS5yb3VuZFdpbnMgPSAwO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5zbmFwc2hvdFVwZGF0ZSwgKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXlhOiBcIiArIHBsYXllcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEdhbWVTbmFwc2hvdChwbGF5ZXIuZGF0YS5zb2NrZXRJRCwgZGF0YSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuQkFMTF9JTl9USEVfSEFMTCwgKGJhbGxUeXBlOiBCYWxsVHlwZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVNjb3JlKHBsYXllci5kYXRhLnNvY2tldElELCBiYWxsVHlwZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXllci5zb2NrZXQub24oUG9ja2V5U29ja2V0TWVzc2FnZXMuT1dOX0JBTExfVE9VQ0hFRF9GSVJTVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uT3duQmFsbFRvdWNoZWRGaXJzdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIRUNLX05FWFRfVFVSTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrTmV4dFR1cm4oKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyLnNvY2tldC5vbihQb2NrZXlTb2NrZXRNZXNzYWdlcy5CQUxMX1dBU19TSE9ULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucm91bmRUaW1lRWxhcHNlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuSElERV9USU1FUik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVycy5wdXNoKHBsYXllcik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyb29tOiBcIiArIHRoaXMuaWQgKyBcIiAtPiBwbGF5ZXIgYXNzaWduZWQ6IFwiICsgcGxheWVyLmRhdGEuc29ja2V0SUQgKyBcIiAtPiB0b3RhbCBwbGF5ZXJzOiBcIiArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicm9vbTogXCIgKyB0aGlzLmlkICsgXCIgLT4gKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGxheWVycy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbmRGaXJzdFJvdW5kU2V0dXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbk93bkJhbGxUb3VjaGVkRmlyc3QoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlU2NvcmUoc29ja2V0SUQ6IHN0cmluZywgYmFsbFR5cGU6IEJhbGxUeXBlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBsYXllcjogUGxheWVyO1xyXG4gICAgICAgIGxldCBvcHBvbmVudDogUGxheWVyO1xyXG4gICAgICAgIC8vIF8uZm9yRWFjaCh0aGlzLnBsYXllcnMsIChwbGF5YTogUGxheWVyKSA9PiB7XHJcbiAgICAgICAgaWYgKHNvY2tldElEID09IHRoaXMucGxheWVyc1swXS5kYXRhLnNvY2tldElEKSB7XHJcbiAgICAgICAgICAgIHBsYXllciA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICAgICAgb3Bwb25lbnQgPSB0aGlzLnBsYXllcnNbMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyID0gdGhpcy5wbGF5ZXJzWzFdO1xyXG4gICAgICAgICAgICBvcHBvbmVudCA9IHRoaXMucGxheWVyc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGlmIChiYWxsVHlwZSA9PSBwbGF5ZXIuZGF0YS50eXBlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQbGF5ZXIgPT0gcGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGxheWVyLmRhdGEuY3VycmVudFNjb3JlLS07XHJcbiAgICAgICAgICAgIHRoaXMuc2NvcmVVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGJhbGxUeXBlID09IG9wcG9uZW50LmRhdGEudHlwZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGxheWVyID09IG9wcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bkJhbGxGYXVsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3Bwb25lbnQuZGF0YS5jdXJyZW50U2NvcmUtLTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVVwZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYmFsbFR5cGUgPT0gQmFsbFR5cGUuV2hpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy53aGl0ZUJhbGxJblRoZUhhbGwgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBsYXllci5kYXRhLmN1cnJlbnRTY29yZSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHBsYXllci5kYXRhLnJvdW5kV2lucysrO1xyXG4gICAgICAgICAgICBpZiAocGxheWVyLmRhdGEucm91bmRXaW5zID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKG9wcG9uZW50LmRhdGEuY3VycmVudFNjb3JlIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZEZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3Bwb25lbnQuZGF0YS5yb3VuZFdpbnMrKztcclxuICAgICAgICAgICAgaWYgKG9wcG9uZW50LmRhdGEucm91bmRXaW5zID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF0Y2hGaW5pc2hlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja05leHRUdXJuKCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvdW5kVGltZXIuc3RvcCgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5tYXRjaEZpbmlzaGVkKSB7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5yb3VuZEZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZURhdGEucm91bmROdW1iZXIrKztcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVEYXRhLnJvdW5kTnVtYmVyID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRUdXJuRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kU2Vjb25kUm91bmRTZXR1cCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuUk9VTkRfRklOSVNIRUQsIHRoaXMuZ2FtZURhdGEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuUk9VTkRfRklOSVNIRUQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy53aGl0ZUJhbGxJblRoZUhhbGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVwb3NpdGlvbldoaXRlQmFsbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm93bkJhbGxGYXVsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ3VycmVudFBsYXllcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZXBvc2l0aW9uV2hpdGVCYWxsKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5zdGFydFNlbmRpbmdTbmFwc2hvdHMpO1xyXG4gICAgICAgICAgICB0aGlzLnJvdW5kVGltZXIuc3RhcnQodGhpcy5yb3VuZER1cmF0aW9uKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5vcHBvbmVudEJhbGxTY29yZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUN1cnJlbnRQbGF5ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucm91bmRUaW1lci5zdGFydCh0aGlzLnJvdW5kRHVyYXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRUdXJuRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIuc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25SZWFycmFuZ2VTdGljayk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBsYXllci5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoYW5nZUN1cnJlbnRQbGF5ZXIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGxheWVyID0gKHRoaXMuY3VycmVudFBsYXllciA9PSB0aGlzLnBsYXllcnNbMF0pID8gdGhpcy5wbGF5ZXJzWzFdIDogdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIHRoaXMucmVzZXRUdXJuRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVzZXRUdXJuRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9wcG9uZW50QmFsbFNjb3JlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2hpdGVCYWxsSW5UaGVIYWxsID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vd25CYWxsRmF1bHQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBfLmZvckVhY2godGhpcy5wbGF5ZXJzLCAocGxheWVyOiBQbGF5ZXIpID0+IHtcclxuICAgIC8vICAgICBpZiAoYmFsbFNvY2tldElEID09IHBsYXllci5kYXRhLnNvY2tldElEKSB7XHJcbiAgICAvLyAgICAgICAgIHBsYXllci5kYXRhLmN1cnJlbnRTY29yZS0tO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09IHBsYXllclNvY2tldElEKSB7XHJcbiAgICAvLyAgICAgLy9cclxuICAgIC8vICAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmIChwbGF5ZXIuZGF0YS5jdXJyZW50U2NvcmUgPD0gMCkge1xyXG4gICAgLy9cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBwcml2YXRlIHNlbmRHYW1lU25hcHNob3Qoc29ja2V0SUQ6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbmFwc2hvdCByZWNlaXZlZCBvbiByb29tOiBcIiArIHRoaXMuaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uZGF0YS5zb2NrZXRJRCA9PSBzb2NrZXRJRCkge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCBkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMV0uc29ja2V0LnRvKHRoaXMuaWQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnNuYXBzaG90VXBkYXRlLCBkYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNjb3JlVXBkYXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjb3JlVXBkYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlvLnRvKHRoaXMuaWQpLmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuU0NPUkVfVVBEQVRFRCwgW3RoaXMucGxheWVyc1swXS5kYXRhLCB0aGlzLnBsYXllcnNbMV0uZGF0YV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRGaXJzdFJvdW5kU2V0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmlzRmlyc3RUb1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMF07XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEudHlwZSA9IEJhbGxUeXBlLkxlZnQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEuY3VycmVudFNjb3JlID0gMjtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhLmxlZnRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5SaWdodDtcclxuICAgICAgICB0aGlzLnBsYXllcnNbMV0uZGF0YS5jdXJyZW50U2NvcmUgPSAyO1xyXG4gICAgICAgIHRoaXMuZ2FtZURhdGEucmlnaHRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzFdLmRhdGE7XHJcblxyXG4gICAgICAgIHRoaXMuaW8udG8odGhpcy5pZCkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuZ2FtZVNldHVwLCB0aGlzLmdhbWVEYXRhKTtcclxuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuc2VuZFN0YXJ0Um91bmQuYmluZCh0aGlzKSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZW5kU2Vjb25kUm91bmRTZXR1cCgpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5wbGF5ZXJzWzBdLmlzRmlyc3RUb1N0YXJ0KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS50eXBlID0gUm91bmRDb21wbGV0ZVR5cGUucm91bmRDb21wbGV0ZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQbGF5ZXIgPSB0aGlzLnBsYXllcnNbMV07XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIHRoaXMucGxheWVyc1sxXS5kYXRhLmN1cnJlbnRTY29yZSA9IDI7XHJcbiAgICAgICAgdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1sxXS5kYXRhO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllcnNbMF0uZGF0YS50eXBlID0gQmFsbFR5cGUuUmlnaHQ7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJzWzBdLmRhdGEuY3VycmVudFNjb3JlID0gMjtcclxuICAgICAgICB0aGlzLmdhbWVEYXRhLnJpZ2h0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVEYXRhLnJpZ2h0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1sxXS5kYXRhO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jdXJyZW50UGxheWVyID0gdGhpcy5wbGF5ZXJzWzBdO1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1swXS5kYXRhLnR5cGUgPSBCYWxsVHlwZS5MZWZ0O1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1swXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdGhpcy5wbGF5ZXJzWzFdLmRhdGEudHlwZSA9IEJhbGxUeXBlLlJpZ2h0O1xyXG4gICAgICAgIC8vIHRoaXMucGxheWVyc1sxXS5kYXRhLmN1cnJlbnRTY29yZSA9IDc7XHJcbiAgICAgICAgLy8gdGhpcy5nYW1lRGF0YS5yaWdodFBsYXllckRhdGEgPSB0aGlzLnBsYXllcnNbMV0uZGF0YTtcclxuXHJcbiAgICAgICAgdGhpcy5pby50byh0aGlzLmlkKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nYW1lU2V0dXAsIHRoaXMuZ2FtZURhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5nYW1lRGF0YS50eXBlID0gUm91bmRDb21wbGV0ZVR5cGUucm91bmRDb21wbGV0ZVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucGxheWVyc1swXS5pc0ZpcnN0VG9TdGFydCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVEYXRhLmxlZnRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzFdLmRhdGE7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZURhdGEucmlnaHRQbGF5ZXJEYXRhID0gdGhpcy5wbGF5ZXJzWzBdLmRhdGE7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nYW1lRGF0YS5sZWZ0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1swXS5kYXRhO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmdhbWVEYXRhLnJpZ2h0UGxheWVyRGF0YSA9IHRoaXMucGxheWVyc1sxXS5kYXRhO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCh0aGlzLnNlbmRTdGFydFJvdW5kLmJpbmQodGhpcyksIDMwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNlbmRTdGFydFJvdW5kKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnBsYXllcnNbMF0uaXNGaXJzdFRvU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uV2F0Y2gpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLnN0YXJ0U2VuZGluZ1NuYXBzaG90cyk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1swXS5zb2NrZXQuZW1pdChQb2NrZXlTb2NrZXRNZXNzYWdlcy5DSEFOR0VfU1RBVEUsIFBvY2tleVN0YXRlcy5vblJlYXJyYW5nZVN0aWNrKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnNbMF0uc29ja2V0LmVtaXQoUG9ja2V5U29ja2V0TWVzc2FnZXMuQ0hBTkdFX1NUQVRFLCBQb2NrZXlTdGF0ZXMub25XYXRjaCk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVyc1sxXS5zb2NrZXQuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMuc3RhcnRTZW5kaW5nU25hcHNob3RzKTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXJzWzFdLnNvY2tldC5lbWl0KFBvY2tleVNvY2tldE1lc3NhZ2VzLkNIQU5HRV9TVEFURSwgUG9ja2V5U3RhdGVzLm9uUmVhcnJhbmdlU3RpY2spO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb3VuZFRpbWVyLnN0YXJ0KHRoaXMucm91bmREdXJhdGlvbik7XHJcbiAgICAgICAgLy8gdGhpcy5yb3VuZFRpbWVFbGFwc2VkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqICBFZGdlZmxvd1xyXG4gKiAgQ29weXJpZ2h0IDIwMTggRWRnZUZsb3dcclxuICogIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqICBOT1RJQ0U6IFlvdSBtYXkgbm90IHVzZSwgZGlzdHJpYnV0ZSBvciBtb2RpZnkgdGhpcyBkb2N1bWVudCB3aXRob3V0IHRoZVxyXG4gKiAgd3JpdHRlbiBwZXJtaXNzaW9uIG9mIGl0cyBjb3B5cmlnaHQgb3duZXJcclxuICpcclxuICogIENyZWF0ZWQgYnkgU2FuZHJ1IEFuZHJlaSBvbiAyLzI3LzIwMTlcclxuICovXHJcbmltcG9ydCBcIkBiYWJlbC9wb2x5ZmlsbFwiO1xyXG5pbXBvcnQge1NlcnZlcn0gZnJvbSBcIm5vZGUtc3RhdGljXCI7XHJcbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcclxuaW1wb3J0IHNvY2tldElPIGZyb20gJ3NvY2tldC5pbyc7XHJcbmltcG9ydCB7UG9vbH0gZnJvbSBcInBnXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gICAgRnJhbWV3b3JrU29ja2V0RXZlbnRzLCBGcmFtZXdvcmtTb2NrZXRNZXNzYWdlcyxcclxuICAgIEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXNcclxufSBmcm9tIFwiLi4vY2xpZW50L3FGcmFtZXdvcmsvQWJzdHJhY3RNb2R1bGVzL0Nvbm5lY3Rpb24vY29ubmVjdGlvbi1jaGFubmVscy1hbmQtbWVzc2FnZXNcIjtcclxuXHJcbmltcG9ydCB7UG9ja2V5Um9vbX0gZnJvbSBcIi4vcG9ja2V5LXJvb21cIjtcclxuaW1wb3J0IHtQb2NrZXlQbGF5ZXJTZXJ2ZXJ9IGZyb20gXCIuL3BvY2tleS1wbGF5ZXItc2VydmVyXCI7XHJcbmltcG9ydCB7UGxheWVyfSBmcm9tIFwiLi4vY29tbW9uL3BsYXllclwiO1xyXG5pbXBvcnQge1dpblN0YXR1c30gZnJvbSBcIi4uL2NvbW1vbi9wb2NrZXktdmFsdWUtb2JqZWN0c1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvY2tleVNlcnZlckluZGV4IHtcclxuICAgIHByb3RlY3RlZCBmaWxlOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgaHR0cFNlcnZlcjogYW55O1xyXG4gICAgcHJvdGVjdGVkIHNvY2tldElvOiBhbnk7XHJcbiAgICBwcm90ZWN0ZWQgc29ja2V0SXNGcmVlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByb3RlY3RlZCBkYXRhYmFzZUNvbm5lY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJvdGVjdGVkIGRhdGFiYXNlUG9vbDogUG9vbCB8IHVuZGVmaW5lZDtcclxuICAgIHByb3RlY3RlZCByb29tczogUG9ja2V5Um9vbVtdID0gW107XHJcbiAgICBwcm90ZWN0ZWQgcGxheWVyczogUG9ja2V5UGxheWVyU2VydmVyW10gPSBbXTtcclxuXHJcbiAgICAvLyBwcm90ZWN0ZWQgcGxheWluZ05hbWVzcGFjZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNlcnZlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURiKCk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVTb2NrZXQoKTtcclxuICAgICAgICAvLyB0aGlzLmNyZWF0ZUdhbWUoKTtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplU2VydmVyKCkge1xyXG4gICAgICAgIHRoaXMuZmlsZSA9IG5ldyBTZXJ2ZXIoJ2Rpc3QnLCB7IC8vIGJpbiBpcyB0aGUgZm9sZGVyIGNvbnRhaW5pbmcgb3VyIGh0bWwsIGV0Y1xyXG4gICAgICAgICAgICBjYWNoZTogMCxcdC8vIGRvbid0IGNhY2hlXHJcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgZ3ppcDogdHJ1ZVx0Ly8gZ3ppcCBvdXIgYXNzZXRzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xyXG4gICAgICAgIC8vIGNyZWF0ZSBvdXIgc2VydmVyXHJcbiAgICAgICAgdGhpcy5odHRwU2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuYWRkTGlzdGVuZXIoJ2VuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5zZXJ2ZShyZXF1ZXN0LCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXF1ZXN0LnJlc3VtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIub24oJ2xpc3RlbmluZycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ29rLCBzZXJ2ZXIgaXMgcnVubmluZycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmh0dHBTZXJ2ZXIubGlzdGVuKHBvcnQsICcwLjAuMC4wJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRGIoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wgPSBuZXcgUG9vbCh7XHJcbiAgICAgICAgICAgIHVzZXI6ICducHZzd2hnZ3hnc2d4aycsXHJcbiAgICAgICAgICAgIGhvc3Q6ICdlYzItNTQtMjI1LTk4LTEzMS5jb21wdXRlLTEuYW1hem9uYXdzLmNvbScsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiAnZDF1azJ2bnBkamwyOHEnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJzU1NmU1MDEzZWExZGVjNTlkMmRhYTVkN2JmZjIyM2VjMDI4YzE2ZGE0YWM1NzdkYjk0ZTc4ZGJjNzU0NzE5NjUnLFxyXG4gICAgICAgICAgICBwb3J0OiA1NDMyLFxyXG4gICAgICAgICAgICBzc2w6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wub24oJ2Vycm9yJywgKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmV4cGVjdGVkIGVycm9yIG9uIGlkbGUgY2xpZW50JywgZXJyKTtcclxuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KC0xKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kYXRhYmFzZVBvb2wuY29ubmVjdCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicy1hIGxvZ2F0LCBtZXJnZS5cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFiYXNlQ29ubmVjdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlU29ja2V0KCkge1xyXG4gICAgICAgIHRoaXMuc29ja2V0SW8gPSBzb2NrZXRJTygpO1xyXG4gICAgICAgIHRoaXMuc29ja2V0SW8uc2VydmVDbGllbnQodHJ1ZSk7IC8vIHRoZSBzZXJ2ZXIgd2lsbCBzZXJ2ZSB0aGUgY2xpZW50IGpzIGZpbGVcclxuICAgICAgICB0aGlzLnNvY2tldElvLmF0dGFjaCh0aGlzLmh0dHBTZXJ2ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVNvY2tldEV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlU29ja2V0RXZlbnRzKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLnNvY2tldElvLm9uKCdjb25uZWN0aW9uJywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciA9IG5ldyBQb2NrZXlQbGF5ZXJTZXJ2ZXIoKTtcclxuICAgICAgICAgICAgcGxheWVyLnNldFNvY2tldChzb2NrZXQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllcnMucHVzaChwbGF5ZXIpO1xyXG5cclxuICAgICAgICAgICAgc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLm5ld0Nvbm5lY3Rpb24sIHBsYXllci5kYXRhLnNvY2tldElEKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhIHVzZXIgY29ubmVjdGVkLiB1c2VycyBjb25uZWN0ZWQ6ICcgKyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgLy90b2RvIGFpY2kgdHJlYnVpZSBzYSB0ZSBvY3VwaSBkZSBkaXNjb25uZWN0IGRhciBzaSBwZSBjZWxhbGFsdGUgc29ja2V0dXJpXHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5nZXRTaWduZWRJblVzZXJEYXRhLCAodXNlcm5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0+IGdldCBzaWduZWQgaW4gcGxheWVyJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhYmFzZUNvbm5lY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JVc2VySUQocGxheWVyLCB1c2VybmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcGxheWVyLnNvY2tldC5vbihGcmFtZXdvcmtTb2NrZXRFdmVudHMudXBkYXRlUGxheWVyRGF0YWJhc2UsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctPiB1cGRhdGUgcGxheWVyIGRhdGFiYXNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXJEYihwbGF5ZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLnVwZGF0ZVBsYXllckRhdGEsIChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctPiB1cGRhdGUgcGxheWVyIGRhdGEnKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci51cGRhdGVQbGF5ZXJEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuZGF0YWJhc2VDb25uZWN0ZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZVVzZXJEYihwbGF5ZXIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHBsYXllci5zb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhIGllc2l0IGRlIHBlIGNhbmFsdWwgcGFjaWk6IFwiICsgc29ja2V0LmlkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuZGF0YS5zb2NrZXRJRCA9PT0gc29ja2V0LmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNlbGZEZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2EgdXNlciBsZWZ0LiB1c2VycyBjb25uZWN0ZWQ6ICcgKyB0aGlzLnBsYXllcnMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBzb2NrZXQudG8ocm9vbSkuZW1pdChGcmFtZXdvcmtTb2NrZXRFdmVudHMubGVmdFJvb20sIHNvY2tldC5pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBzb2NrZXQuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyp0aGlzLnNvY2tldElvLm9uKCdkaXNjb25uZWN0JywgKHNvY2tldDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChwbGF5ZXI6IFBsYXllciwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBzb2NrZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd1c2VyIGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgICAgICAgICAvLyBjb25uZWN0Q291bnRlci0tO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYSB1c2VyIGxlZnQuIHVzZXJzIGNvbm5lY3RlZDogJyArIHRoaXMucGxheWVycy5sZW5ndGgpO1xyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgLy8gdGhpcy5zb2NrZXRJby5vbignZGlzY29ubmVjdCcsIChzb2NrZXQpID0+IHtcclxuICAgICAgICAvL3NcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBsZXQgbG9va2luZ0ZvclBhcnRuZXJOYW1lc3BhY2UgPSB0aGlzLnNvY2tldElvLm9mKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuU0VBUkNIKTtcclxuICAgICAgICBsb29raW5nRm9yUGFydG5lck5hbWVzcGFjZS5vbignY29ubmVjdGlvbicsIChzb2NrZXQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaWQ6IHN0cmluZyA9IHNvY2tldC5pZC50b1N0cmluZygpLnJlcGxhY2UoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5TRUFSQ0gsICcnKS5yZXBsYWNlKFwiI1wiLCBcIlwiKTtcclxuICAgICAgICAgICAgbGV0IHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyID0gdGhpcy5nZXRQbGF5ZXJCeUlEKGlkLCBzb2NrZXQpO1xyXG4gICAgICAgICAgICBwbGF5ZXIuaXNMb29raW5nRm9yUGFydG5lciA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhGcmFtZXdvcmtTb2NrZXROYW1lc3BhY2VzLlNFQVJDSCArICcgLT4gc29tZW9uZSBjb25uZWN0ZWQ6ICcgKyBwbGF5ZXIuZGF0YS5zb2NrZXRJRCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGNoTWFrZXIocGxheWVyKTtcclxuICAgICAgICAgICAgLypzb2NrZXQub24oRnJhbWV3b3JrU29ja2V0RXZlbnRzLmxldHNDb25uZWN0LCAobXNnOiBhbnksIGlkOiBzdHJpbmcsIHBhcnRuZXJJRDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmxldHNDb25uZWN0LCBtc2csIGlkLCBwYXJ0bmVySUQpO1xyXG4gICAgICAgICAgICB9KTsqL1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgcGxheWluZ05hbWVzcGFjZSA9IHRoaXMuc29ja2V0SW8ub2YoRnJhbWV3b3JrU29ja2V0TmFtZXNwYWNlcy5QTEFZKTtcclxuXHJcbiAgICAgICAgcGxheWluZ05hbWVzcGFjZS5vbignY29ubmVjdGlvbicsIChzb2NrZXQ6IGFueSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlkOiBzdHJpbmcgPSBzb2NrZXQuaWQudG9TdHJpbmcoKS5yZXBsYWNlKEZyYW1ld29ya1NvY2tldE5hbWVzcGFjZXMuUExBWSwgJycpLnJlcGxhY2UoXCIjXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICBsZXQgcGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIgPSB0aGlzLmdldFBsYXllckJ5SUQoaWQsIHNvY2tldCk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5qb2luUm9vbSwgKHJvb21JRDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmpvaW4ocm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9ja2V5Um9vbTogUG9ja2V5Um9vbSA9IHRoaXMuZ2V0Um9vbUJ5SUQocm9vbUlELCBwbGF5aW5nTmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgICAgIHBvY2tleVJvb20uYXNzaWduUGxheWVyKHBsYXllcik7XHJcbiAgICAgICAgICAgICAgICAvLyBzb2NrZXQuYnJvYWRjYXN0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5Sb29tLCByb29tLCBpZCk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXIuc29ja2V0LmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmpvaW5lZFJvb20sIHJvb21JRCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbiBqb2luIHJvb20uIHJvb20gbmlja25hbWU6IFwiICsgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQub24oJ2Rpc2Nvbm5lY3QnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYSBpZXNpdCBkZSBwZSBjYW5hbHVsIHBhY2lpOiBcIiArIHNvY2tldC5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC50byhyb29tSUQpLmVtaXQoRnJhbWV3b3JrU29ja2V0RXZlbnRzLmxlZnRSb29tLCBzb2NrZXQuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNvY2tldC5kaXNjb25uZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBwbGF5ZXIuc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5wcml2YXRlTWVzc2FnZSwgKHJvb206IGFueSwgbWVzc2FnZVR5cGU6IEZyYW1ld29ya1NvY2tldE1lc3NhZ2VzLCBtZXNzYWdlRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVR5cGUgPT0gRnJhbWV3b3JrU29ja2V0TWVzc2FnZXMuSEVMTE8pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzZSBmYWNlIGhlbGxvdWxcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc29ja2V0LmJyb2FkY2FzdC50byhyb29tKS5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5wcml2YXRlTWVzc2FnZSwgbWVzc2FnZVR5cGUsIG1lc3NhZ2VEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc29ja2V0Lm9uKEZyYW1ld29ya1NvY2tldEV2ZW50cy5kaXNjb25uZWN0TXlTb2NrZXQsICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF0Y2hNYWtlcihwbGF5ZXI6IFBvY2tleVBsYXllclNlcnZlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGxheWVycy5mb3JFYWNoKChvdGhlclBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5ZXIgIT0gb3RoZXJQbGF5ZXIgJiYgb3RoZXJQbGF5ZXIuaXNMb29raW5nRm9yUGFydG5lcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBoYXZlIGEgcm9vbVwiKTtcclxuICAgICAgICAgICAgICAgIHBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvdGhlclBsYXllci5pc0xvb2tpbmdGb3JQYXJ0bmVyID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJvb21JRDogc3RyaW5nID0gcGxheWVyLmRhdGEuc29ja2V0SUQgKyBcIiNcIiArIG90aGVyUGxheWVyLmRhdGEuc29ja2V0SUQ7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5yb29tQ3JlYXRlZCwgcm9vbUlEKTtcclxuICAgICAgICAgICAgICAgIG90aGVyUGxheWVyLnNvY2tldC5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5yb29tQ3JlYXRlZCwgcm9vbUlEKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGxheWVyQnlJRChpZDogc3RyaW5nLCBzb2NrZXQ6IGFueSk6IFBvY2tleVBsYXllclNlcnZlciB7XHJcbiAgICAgICAgbGV0IHBsYXllckJ5SUQ6IFBvY2tleVBsYXllclNlcnZlciA9IG5ldyBQb2NrZXlQbGF5ZXJTZXJ2ZXIoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImdldCBwbGF5ZXIgYnkgaWQgLT4gc2VhcmNoaW5nOiBcIiArIGlkKTtcclxuICAgICAgICB0aGlzLnBsYXllcnMuZm9yRWFjaCgocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXQgcGxheWVyIGJ5IGlkIC0+IGZvdW5kOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgICAgIHBsYXllckJ5SUQgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJCeUlELnNldFNvY2tldChzb2NrZXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcGxheWVyQnlJRC5zb2NrZXQgPSBzb2NrZXQ7XHJcblxyXG4gICAgICAgIHJldHVybiBwbGF5ZXJCeUlEO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Um9vbUJ5SUQocm9vbUlEOiBzdHJpbmcsIGlvOiBhbnkpOiBQb2NrZXlSb29tIHtcclxuICAgICAgICAvLyBsZXQgcGxheWVyQnlJRDogUGxheWVyID0gbmV3IFBsYXllcihcIlwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImdldCByb29tIGJ5IGlkIC0+IHNlYXJjaGluZzogXCIgKyByb29tSUQpO1xyXG4gICAgICAgIGxldCByb29tQnlJRDogUG9ja2V5Um9vbTtcclxuXHJcbiAgICAgICAgdGhpcy5yb29tcy5mb3JFYWNoKChyb29tOiBQb2NrZXlSb29tKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb29tLmlkID09IHJvb21JRCkge1xyXG4gICAgICAgICAgICAgICAgcm9vbUJ5SUQgPSByb29tO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgKHBsYXllci5kYXRhLnNvY2tldElEID09PSBpZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJnZXQgcGxheWVyIGJ5IGlkIC0+IGZvdW5kOiBcIiArIGlkKTtcclxuICAgICAgICAgICAgLy8gICAgIHBsYXllckJ5SUQgPSBwbGF5ZXI7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIXJvb21CeUlEKSB7XHJcbiAgICAgICAgICAgIHJvb21CeUlEID0gbmV3IFBvY2tleVJvb20ocm9vbUlELCBpbyk7XHJcbiAgICAgICAgICAgIHRoaXMucm9vbXMucHVzaChyb29tQnlJRCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9vbUJ5SUQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVVc2VyRGIocGxheWVyOiBQb2NrZXlQbGF5ZXJTZXJ2ZXIsIGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzcWxUZXh0OiBzdHJpbmcgPSBcIlVQREFURSBwb2NrZXlfdGFibGUgU0VUIFwiICsgZGF0YVtcImNvbHVtblwiXSArIFwiPSdcIiArIGRhdGFbXCJ2YWx1ZVwiXSArIFwiJyBXSEVSRSB1c2VyX2lkPSdcIiArIGRhdGFbXCJ1c2VySURcIl0gKyBcIidcIjtcclxuXHJcbiAgICAgICAgaWYgKGRhdGFbXCJ0eXBlXCJdID09IFwid2luU3RhdHVzXCIpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbXCJ2YWx1ZVwiXSA9PSBXaW5TdGF0dXMuV0lOKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzcWxUZXh0ID0gXCJVUERBVEUgVVNFUl9UQUJMRSBTRVQgXCIgKyBkYXRhW1wiY29sdW1uXCJdICsgXCI9J3BvaW50cycgKyAxMCBXSEVSRSBHSUQ9J1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgICAgICBzcWxUZXh0ID0gJ1VQREFURSBwdWJsaWMuXCJVU0VSX1RBQkxFXCIgU0VUIFwicG9pbnRzXCIgPSBcInBvaW50c1wiICsgMTAgV0hFUkUgXCJVU0VSX1RBQkxFXCIuXCJHSURcIiA9ICcgKyBcIidZb2ppbWJvJ1wiO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzcWxUZXh0IGxhIHdpbjogXCIgKyBzcWxUZXh0KTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhW1widmFsdWVcIl0gPT0gV2luU3RhdHVzLkxPU1QpIHtcclxuICAgICAgICAgICAgICAgIHNxbFRleHQgPSAnVVBEQVRFIHB1YmxpYy5cIlVTRVJfVEFCTEVcIiBTRVQgXCJwb2ludHNcIiA9IFwicG9pbnRzXCIgKyAxMCBXSEVSRSBcIlVTRVJfVEFCTEVcIi5cIkdJRFwiID0gJyArIFwiJ1lvamltYm8nXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3FsVGV4dDogXCIgKyBzcWxUZXh0LCBcInR5cGU6IFwiICsgZGF0YVtcInR5cGVcIl0sIFwidmFsdWU6IFwiICsgZGF0YVtcInZhbHVlXCJdKTtcclxuXHJcblxyXG4gICAgICAgIChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IHRoaXMuZGF0YWJhc2VQb29sLmNvbm5lY3QoKTtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNsaWVudC5xdWVyeShzcWxUZXh0KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWN1bSBzZSBmYWNlXCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0ZvclVzZXJJRChwbGF5ZXIsIGRhdGFbXCJ1c2VySURcIl0pO1xyXG5cclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIGNsaWVudC5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSgpLmNhdGNoKGUgPT4gY29uc29sZS5sb2coZS5zdGFjaykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrRm9yVXNlcklEKHBsYXllcjogUG9ja2V5UGxheWVyU2VydmVyLCB1c2VybmFtZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyBkYiBmb3IgdXNlcl9pZDogXCIgKyB1c2VybmFtZSk7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XHJcbiAgICAgICAgICAgIC8vIGdpdmUgdGhlIHF1ZXJ5IGEgdW5pcXVlIG5pY2tuYW1lXHJcbiAgICAgICAgICAgIG5hbWU6ICdmZXRjaC11c2VyJyxcclxuICAgICAgICAgICAgdGV4dDogJ1NFTEVDVCAqIEZST00gcG9ja2V5X3RhYmxlIFdIRVJFIFVTRVJfSUQgPSAkMScsXHJcbiAgICAgICAgICAgIHZhbHVlczogW3VzZXJuYW1lXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YWJhc2VQb29sLnF1ZXJ5KHF1ZXJ5KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXMucm93c1swXSA9PSB1bmRlZmluZWQgfHwgcmVzLnJvd3NbMF0gPT0gXCJ1bmRlZmluZWRcIiB8fCByZXMucm93c1swXSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdVc2VyKHBsYXllci5zb2NrZXQsIHVzZXJuYW1lKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnVwZGF0ZVBsYXllckRhdGEocmVzLnJvd3NbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLnJvd3NbMF0pOyAvLyBbJ0JyaWFuJywgJ0Nhcmxzb24nXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YWNrKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTmV3VXNlcihwbGF5ZXI6IFBsYXllciwgdXNlcm5hbWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRpbmcgbmV3IHVzZXI6IFwiICsgdXNlcm5hbWUpO1xyXG4gICAgICAgIGNvbnN0IGNyZWF0ZU5ld1VzZXJRdWVyeSA9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdjcmVhdGUtbmV3LXVzZXInLFxyXG4gICAgICAgICAgICAgICAgdGV4dDogJ0lOU0VSVCBJTlRPIHBvY2tleV90YWJsZSh1c2VyX2lkKSBWQUxVRVMoJDEpJyxcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW3VzZXJuYW1lXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmRhdGFiYXNlUG9vbC5xdWVyeShjcmVhdGVOZXdVc2VyUXVlcnkpXHJcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgLyogY29uc29sZS5sb2coXCJuZXcgdXNlciBjcmVhdGVkLiB1c2VyIHNhdmVkIGludG8gZGJcIik7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5zb2NrZXRJby5lbWl0KEZyYW1ld29ya1NvY2tldEV2ZW50cy5nZXRTaWduZWRJblVzZXJEYXRhLCByZXMucm93c1swXSk7Ki9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tGb3JVc2VySUQocGxheWVyLnNvY2tldCwgdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUuc3RhY2spXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBwcml2YXRlIGNyZWF0ZUdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgIHRoaXMuZ2FtZUVuZ2luZSA9IG5ldyBQb2NrZXlHYW1lRW5naW5lRm9yU2VydmVyKHt0cmFjZUxldmVsOiBUcmFjZS5UUkFDRV9OT05FfSk7XHJcbiAgICAgICAgIHRoaXMuc2VydmVyRW5naW5lID0gbmV3IFBvY2tleVNlcnZlckVuZ2luZSh0aGlzLnNvY2tldElvLCB0aGlzLmdhbWVFbmdpbmUsIHtkZWJ1Zzoge30sIHVwZGF0ZVJhdGU6IDZ9KTtcclxuICAgICAgICAgLy8gc3RhcnQgdGhlIGdhbWVcclxuICAgICAgICAgLy8gdGhpcy5zZXJ2ZXJFbmdpbmUuc3RhcnQoKTtcclxuICAgICB9Ki9cclxufVxyXG5cclxubmV3IFBvY2tleVNlcnZlckluZGV4KCk7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vZGUtc3RhdGljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNvY2tldC5pb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9