/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _player = __webpack_require__(1);

	var _player2 = _interopRequireDefault(_player);

	var _game = __webpack_require__(3);

	var _game2 = _interopRequireDefault(_game);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./scss/style.scss\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var game = {
	  rootElement: document.getElementById('holder'),
	  boxInterval: 0,
	  fail: false,
	  pause: false,
	  _score: 0,
	  get: function get() {
	    return this._score;
	  },

	  set: function set(value) {
	    this._score = value;
	    if (value % 10 == 0) this.boxInterval += 1;
	  }
	};

	window.onblur = function () {
	  game.pause = true;
	};
	window.onfocus = function () {
	  game.pause = false;
	};

	var player = new _player2.default(game.rootElement);

	(0, _game.factory)(game.rootElement);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _controlled = __webpack_require__(2);

	var _controlled2 = _interopRequireDefault(_controlled);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Player = function (_Controlled) {
	  _inherits(Player, _Controlled);

	  function Player(holder) {
	    _classCallCheck(this, Player);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Player).apply(this, arguments));

	    _this.class = 'player';
	    _this.initalX = _this.holder.width() / 2;

	    _this.createElement();

	    _this.actions = {
	      37: _this.moveLeft.bind(_this),
	      38: _this.jump.bind(_this),
	      32: _this.jump.bind(_this),
	      39: _this.moveRight.bind(_this)
	    };

	    $(window).on('keydown', function (e) {
	      var action = _this.actions[e.keyCode];
	      if (action && !game.pause) action();
	    });
	    return _this;
	  }

	  _createClass(Player, [{
	    key: 'moveLeft',
	    value: function moveLeft() {
	      if (this.cords.x < this.radius + 150) return;

	      this.position = {
	        x: this.cords.x - 250
	      };
	    }
	  }, {
	    key: 'moveRight',
	    value: function moveRight() {
	      if (this.cords.x > $(this.holder).width() - this.radius - 150) return;

	      this.position = {
	        x: this.cords.x + 250
	      };
	    }
	  }, {
	    key: 'jump',
	    value: function jump() {
	      var _this2 = this;

	      if (this.isJumping) return;

	      this.isJumping = true;
	      $('.player').css('bottom', '70%');
	      window.setTimeout(function () {
	        $('.player').css('bottom', '0');
	      }, 500);
	      window.setTimeout(function () {
	        _this2.isJumping = false;
	      }, 1000);
	    }
	  }]);

	  return Player;
	}(_controlled2.default);

	exports.default = Player;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Controlled = function () {
	  function Controlled(holder) {
	    _classCallCheck(this, Controlled);

	    this.holder = holder;
	    this.holderHeight = this.holder.height();
	  }

	  _createClass(Controlled, [{
	    key: 'createElement',
	    value: function createElement() {
	      this.element = $('<div/>', {
	        class: this.class,
	        id: this.id
	      });

	      this.position = {
	        x: this.initalX,
	        y: 0
	      };

	      $(this.holder).append(this.element);

	      this.radius = this.element.width() / 2;
	    }
	  }, {
	    key: 'die',
	    value: function die() {
	      this.element.remove();
	    }
	  }, {
	    key: 'position',
	    set: function set(val) {
	      if (!this.cords) this.cords = {};

	      if (val.y !== null) {
	        this.cords.y = val.y;
	        this.element.css('bottom', this.cords.y);
	      }
	      if (val.x !== null) {
	        this.cords.x = val.x;
	        this.element.css('left', this.cords.x);
	      }
	    }
	  }, {
	    key: 'x',
	    get: function get() {
	      return this.element.offset().left + this.radius;
	    }
	  }, {
	    key: 'y',
	    get: function get() {
	      return this.holderHeight - this.radius - this.element.offset().top;
	    }
	  }]);

	  return Controlled;
	}();

	exports.default = Controlled;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.factory = factory;
	exports.check = check;
	exports.stop = stop;
	function factory(holder) {
	  var count = 0;

	  var iterator = function iterator() {
	    if (!game.pause) {
	      var obj = new Box(holder, count++);
	      obj.move();
	    }

	    if (!game.fail) setTimeout(iterator, Math.random() * 5000);
	  };

	  iterator();
	}

	function check(el) {
	  if (!el.cords) return;
	  var dx = Math.abs(el.x - player.x);
	  var dy = Math.abs(el.y - player.y);

	  if (dx < player.radius && dy < player.radius) stop();
	}

	function stop() {
	  var gameOver = document.getElementsByClassName('game-over'),
	      holder = document.getElementsByClassName('holder'),
	      totalScore = document.getElementById('total-score');

	  gameOver.removeClass('hidden');
	  holder.addClass('hidden');
	  gameOver.on('click', function () {
	    window.location.reload();
	  });
	  setTimeout(function () {
	    window.onkeydown = function () {
	      window.location.reload();
	    };
	  }, 1000);

	  totalScore.innerText = game.score;
	  player.die();
	  game.fail = true;
	}

/***/ }
/******/ ]);