webpackHotUpdate(0,{

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Nav = __webpack_require__(280);
	
	var _Nav2 = _interopRequireDefault(_Nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var UserCredentialsMenu = function (_React$Component) {
	  _inherits(UserCredentialsMenu, _React$Component);
	
	  function UserCredentialsMenu() {
	    _classCallCheck(this, UserCredentialsMenu);
	
	    return _possibleConstructorReturn(this, (UserCredentialsMenu.__proto__ || Object.getPrototypeOf(UserCredentialsMenu)).apply(this, arguments));
	  }
	
	  _createClass(UserCredentialsMenu, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(
	          'h1',
	          null,
	          'Awari App'
	        )
	      );
	    }
	  }]);
	
	  return UserCredentialsMenu;
	}(_react2.default.Component);
	
	exports.default = UserCredentialsMenu;

/***/ },

/***/ 280:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	exports.__esModule = true;
	
	var _extends3 = __webpack_require__(217);
	
	var _extends4 = _interopRequireDefault(_extends3);
	
	var _objectWithoutProperties2 = __webpack_require__(216);
	
	var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);
	
	var _classCallCheck2 = __webpack_require__(224);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _possibleConstructorReturn2 = __webpack_require__(225);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(261);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _classnames = __webpack_require__(269);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _keycode = __webpack_require__(281);
	
	var _keycode2 = _interopRequireDefault(_keycode);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _all = __webpack_require__(282);
	
	var _all2 = _interopRequireDefault(_all);
	
	var _warning = __webpack_require__(283);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	var _bootstrapUtils = __webpack_require__(272);
	
	var _createChainedFunction = __webpack_require__(284);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _ValidComponentChildren = __webpack_require__(285);
	
	var _ValidComponentChildren2 = _interopRequireDefault(_ValidComponentChildren);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	// TODO: Should we expose `<NavItem>` as `<Nav.Item>`?
	
	// TODO: This `bsStyle` is very unlike the others. Should we rename it?
	
	// TODO: `pullRight` and `pullLeft` don't render right outside of `navbar`.
	// Consider renaming or replacing them.
	
	var propTypes = {
	  /**
	   * Marks the NavItem with a matching `eventKey` as active. Has a
	   * higher precedence over `activeHref`.
	   */
	  activeKey: _react2['default'].PropTypes.any,
	
	  /**
	   * Marks the child NavItem with a matching `href` prop as active.
	   */
	  activeHref: _react2['default'].PropTypes.string,
	
	  /**
	   * NavItems are be positioned vertically.
	   */
	  stacked: _react2['default'].PropTypes.bool,
	
	  justified: (0, _all2['default'])(_react2['default'].PropTypes.bool, function (_ref) {
	    var justified = _ref.justified,
	        navbar = _ref.navbar;
	    return justified && navbar ? Error('justified navbar `Nav`s are not supported') : null;
	  }),
	
	  /**
	   * A callback fired when a NavItem is selected.
	   *
	   * ```js
	   * function (
	   * 	Any eventKey,
	   * 	SyntheticEvent event?
	   * )
	   * ```
	   */
	  onSelect: _react2['default'].PropTypes.func,
	
	  /**
	   * ARIA role for the Nav, in the context of a TabContainer, the default will
	   * be set to "tablist", but can be overridden by the Nav when set explicitly.
	   *
	   * When the role is set to "tablist" NavItem focus is managed according to
	   * the ARIA authoring practices for tabs:
	   * https://www.w3.org/TR/2013/WD-wai-aria-practices-20130307/#tabpanel
	   */
	  role: _react2['default'].PropTypes.string,
	
	  /**
	   * Apply styling an alignment for use in a Navbar. This prop will be set
	   * automatically when the Nav is used inside a Navbar.
	   */
	  navbar: _react2['default'].PropTypes.bool,
	
	  /**
	   * Float the Nav to the right. When `navbar` is `true` the appropriate
	   * contextual classes are added as well.
	   */
	  pullRight: _react2['default'].PropTypes.bool,
	
	  /**
	   * Float the Nav to the left. When `navbar` is `true` the appropriate
	   * contextual classes are added as well.
	   */
	  pullLeft: _react2['default'].PropTypes.bool
	};
	
	var defaultProps = {
	  justified: false,
	  pullRight: false,
	  pullLeft: false,
	  stacked: false
	};
	
	var contextTypes = {
	  $bs_navbar: _react2['default'].PropTypes.shape({
	    bsClass: _react2['default'].PropTypes.string,
	    onSelect: _react2['default'].PropTypes.func
	  }),
	
	  $bs_tabContainer: _react2['default'].PropTypes.shape({
	    activeKey: _react2['default'].PropTypes.any,
	    onSelect: _react2['default'].PropTypes.func.isRequired,
	    getTabId: _react2['default'].PropTypes.func.isRequired,
	    getPaneId: _react2['default'].PropTypes.func.isRequired
	  })
	};
	
	var Nav = function (_React$Component) {
	  (0, _inherits3['default'])(Nav, _React$Component);
	
	  function Nav() {
	    (0, _classCallCheck3['default'])(this, Nav);
	    return (0, _possibleConstructorReturn3['default'])(this, _React$Component.apply(this, arguments));
	  }
	
	  Nav.prototype.componentDidUpdate = function componentDidUpdate() {
	    var _this2 = this;
	
	    if (!this._needsRefocus) {
	      return;
	    }
	
	    this._needsRefocus = false;
	
	    var children = this.props.children;
	
	    var _getActiveProps = this.getActiveProps(),
	        activeKey = _getActiveProps.activeKey,
	        activeHref = _getActiveProps.activeHref;
	
	    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
	      return _this2.isActive(child, activeKey, activeHref);
	    });
	
	    var childrenArray = _ValidComponentChildren2['default'].toArray(children);
	    var activeChildIndex = childrenArray.indexOf(activeChild);
	
	    var childNodes = _reactDom2['default'].findDOMNode(this).children;
	    var activeNode = childNodes && childNodes[activeChildIndex];
	
	    if (!activeNode || !activeNode.firstChild) {
	      return;
	    }
	
	    activeNode.firstChild.focus();
	  };
	
	  Nav.prototype.handleTabKeyDown = function handleTabKeyDown(onSelect, event) {
	    var nextActiveChild = void 0;
	
	    switch (event.keyCode) {
	      case _keycode2['default'].codes.left:
	      case _keycode2['default'].codes.up:
	        nextActiveChild = this.getNextActiveChild(-1);
	        break;
	      case _keycode2['default'].codes.right:
	      case _keycode2['default'].codes.down:
	        nextActiveChild = this.getNextActiveChild(1);
	        break;
	      default:
	        // It was a different key; don't handle this keypress.
	        return;
	    }
	
	    event.preventDefault();
	
	    if (onSelect && nextActiveChild && nextActiveChild.props.eventKey) {
	      onSelect(nextActiveChild.props.eventKey);
	    }
	
	    this._needsRefocus = true;
	  };
	
	  Nav.prototype.getNextActiveChild = function getNextActiveChild(offset) {
	    var _this3 = this;
	
	    var children = this.props.children;
	
	    var validChildren = children.filter(function (child) {
	      return child.props.eventKey && !child.props.disabled;
	    });
	
	    var _getActiveProps2 = this.getActiveProps(),
	        activeKey = _getActiveProps2.activeKey,
	        activeHref = _getActiveProps2.activeHref;
	
	    var activeChild = _ValidComponentChildren2['default'].find(children, function (child) {
	      return _this3.isActive(child, activeKey, activeHref);
	    });
	
	    // This assumes the active child is not disabled.
	    var activeChildIndex = validChildren.indexOf(activeChild);
	    if (activeChildIndex === -1) {
	      // Something has gone wrong. Select the first valid child we can find.
	      return validChildren[0];
	    }
	
	    var nextIndex = activeChildIndex + offset;
	    var numValidChildren = validChildren.length;
	
	    if (nextIndex >= numValidChildren) {
	      nextIndex = 0;
	    } else if (nextIndex < 0) {
	      nextIndex = numValidChildren - 1;
	    }
	
	    return validChildren[nextIndex];
	  };
	
	  Nav.prototype.getActiveProps = function getActiveProps() {
	    var tabContainer = this.context.$bs_tabContainer;
	
	    if (tabContainer) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(this.props.activeKey == null && !this.props.activeHref, 'Specifying a `<Nav>` `activeKey` or `activeHref` in the context of ' + 'a `<TabContainer>` is not supported. Instead use `<TabContainer ' + ('activeKey={' + this.props.activeKey + '} />`.')) : void 0;
	
	      return tabContainer;
	    }
	
	    return this.props;
	  };
	
	  Nav.prototype.isActive = function isActive(_ref2, activeKey, activeHref) {
	    var props = _ref2.props;
	
	    if (props.active || activeKey != null && props.eventKey === activeKey || activeHref && props.href === activeHref) {
	      return true;
	    }
	
	    return props.active;
	  };
	
	  Nav.prototype.getTabProps = function getTabProps(child, tabContainer, navRole, active, onSelect) {
	    var _this4 = this;
	
	    if (!tabContainer && navRole !== 'tablist') {
	      // No tab props here.
	      return null;
	    }
	
	    var _child$props = child.props,
	        id = _child$props.id,
	        controls = _child$props['aria-controls'],
	        eventKey = _child$props.eventKey,
	        role = _child$props.role,
	        onKeyDown = _child$props.onKeyDown,
	        tabIndex = _child$props.tabIndex;
	
	
	    if (tabContainer) {
	      process.env.NODE_ENV !== 'production' ? (0, _warning2['default'])(!id && !controls, 'In the context of a `<TabContainer>`, `<NavItem>`s are given ' + 'generated `id` and `aria-controls` attributes for the sake of ' + 'proper component accessibility. Any provided ones will be ignored. ' + 'To control these attributes directly, provide a `generateChildId` ' + 'prop to the parent `<TabContainer>`.') : void 0;
	
	      id = tabContainer.getTabId(eventKey);
	      controls = tabContainer.getPaneId(eventKey);
	    }
	
	    if (navRole === 'tablist') {
	      role = role || 'tab';
	      onKeyDown = (0, _createChainedFunction2['default'])(function (event) {
	        return _this4.handleTabKeyDown(onSelect, event);
	      }, onKeyDown);
	      tabIndex = active ? tabIndex : -1;
	    }
	
	    return {
	      id: id,
	      role: role,
	      onKeyDown: onKeyDown,
	      'aria-controls': controls,
	      tabIndex: tabIndex
	    };
	  };
	
	  Nav.prototype.render = function render() {
	    var _extends2,
	        _this5 = this;
	
	    var _props = this.props,
	        stacked = _props.stacked,
	        justified = _props.justified,
	        onSelect = _props.onSelect,
	        propsRole = _props.role,
	        propsNavbar = _props.navbar,
	        pullRight = _props.pullRight,
	        pullLeft = _props.pullLeft,
	        className = _props.className,
	        children = _props.children,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['stacked', 'justified', 'onSelect', 'role', 'navbar', 'pullRight', 'pullLeft', 'className', 'children']);
	
	
	    var tabContainer = this.context.$bs_tabContainer;
	    var role = propsRole || (tabContainer ? 'tablist' : null);
	
	    var _getActiveProps3 = this.getActiveProps(),
	        activeKey = _getActiveProps3.activeKey,
	        activeHref = _getActiveProps3.activeHref;
	
	    delete props.activeKey; // Accessed via this.getActiveProps().
	    delete props.activeHref; // Accessed via this.getActiveProps().
	
	    var _splitBsProps = (0, _bootstrapUtils.splitBsProps)(props),
	        bsProps = _splitBsProps[0],
	        elementProps = _splitBsProps[1];
	
	    var classes = (0, _extends4['default'])({}, (0, _bootstrapUtils.getClassSet)(bsProps), (_extends2 = {}, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'stacked')] = stacked, _extends2[(0, _bootstrapUtils.prefix)(bsProps, 'justified')] = justified, _extends2));
	
	    var navbar = propsNavbar != null ? propsNavbar : this.context.$bs_navbar;
	    var pullLeftClassName = void 0;
	    var pullRightClassName = void 0;
	
	    if (navbar) {
	      var navbarProps = this.context.$bs_navbar || { bsClass: 'navbar' };
	
	      classes[(0, _bootstrapUtils.prefix)(navbarProps, 'nav')] = true;
	
	      pullRightClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'right');
	      pullLeftClassName = (0, _bootstrapUtils.prefix)(navbarProps, 'left');
	    } else {
	      pullRightClassName = 'pull-right';
	      pullLeftClassName = 'pull-left';
	    }
	
	    classes[pullRightClassName] = pullRight;
	    classes[pullLeftClassName] = pullLeft;
	
	    return _react2['default'].createElement(
	      'ul',
	      (0, _extends4['default'])({}, elementProps, {
	        role: role,
	        className: (0, _classnames2['default'])(className, classes)
	      }),
	      _ValidComponentChildren2['default'].map(children, function (child) {
	        var active = _this5.isActive(child, activeKey, activeHref);
	        var childOnSelect = (0, _createChainedFunction2['default'])(child.props.onSelect, onSelect, navbar && navbar.onSelect, tabContainer && tabContainer.onSelect);
	
	        return (0, _react.cloneElement)(child, (0, _extends4['default'])({}, _this5.getTabProps(child, tabContainer, role, active, childOnSelect), {
	          active: active,
	          activeKey: activeKey,
	          activeHref: activeHref,
	          onSelect: childOnSelect
	        }));
	      })
	    );
	  };
	
	  return Nav;
	}(_react2['default'].Component);
	
	Nav.propTypes = propTypes;
	Nav.defaultProps = defaultProps;
	Nav.contextTypes = contextTypes;
	
	exports['default'] = (0, _bootstrapUtils.bsClass)('nav', (0, _bootstrapUtils.bsStyles)(['tabs', 'pills'], Nav));
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 281:
/***/ function(module, exports) {

	// Source: http://jsfiddle.net/vWx8V/
	// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes
	
	/**
	 * Conenience method returns corresponding value for given keyName or keyCode.
	 *
	 * @param {Mixed} keyCode {Number} or keyName {String}
	 * @return {Mixed}
	 * @api public
	 */
	
	exports = module.exports = function(searchInput) {
	  // Keyboard Events
	  if (searchInput && 'object' === typeof searchInput) {
	    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
	    if (hasKeyCode) searchInput = hasKeyCode
	  }
	
	  // Numbers
	  if ('number' === typeof searchInput) return names[searchInput]
	
	  // Everything else (cast to string)
	  var search = String(searchInput)
	
	  // check codes
	  var foundNamedKey = codes[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // check aliases
	  var foundNamedKey = aliases[search.toLowerCase()]
	  if (foundNamedKey) return foundNamedKey
	
	  // weird character?
	  if (search.length === 1) return search.charCodeAt(0)
	
	  return undefined
	}
	
	/**
	 * Get by name
	 *
	 *   exports.code['enter'] // => 13
	 */
	
	var codes = exports.code = exports.codes = {
	  'backspace': 8,
	  'tab': 9,
	  'enter': 13,
	  'shift': 16,
	  'ctrl': 17,
	  'alt': 18,
	  'pause/break': 19,
	  'caps lock': 20,
	  'esc': 27,
	  'space': 32,
	  'page up': 33,
	  'page down': 34,
	  'end': 35,
	  'home': 36,
	  'left': 37,
	  'up': 38,
	  'right': 39,
	  'down': 40,
	  'insert': 45,
	  'delete': 46,
	  'command': 91,
	  'left command': 91,
	  'right command': 93,
	  'numpad *': 106,
	  'numpad +': 107,
	  'numpad -': 109,
	  'numpad .': 110,
	  'numpad /': 111,
	  'num lock': 144,
	  'scroll lock': 145,
	  'my computer': 182,
	  'my calculator': 183,
	  ';': 186,
	  '=': 187,
	  ',': 188,
	  '-': 189,
	  '.': 190,
	  '/': 191,
	  '`': 192,
	  '[': 219,
	  '\\': 220,
	  ']': 221,
	  "'": 222
	}
	
	// Helper aliases
	
	var aliases = exports.aliases = {
	  'windows': 91,
	  '⇧': 16,
	  '⌥': 18,
	  '⌃': 17,
	  '⌘': 91,
	  'ctl': 17,
	  'control': 17,
	  'option': 18,
	  'pause': 19,
	  'break': 19,
	  'caps': 20,
	  'return': 13,
	  'escape': 27,
	  'spc': 32,
	  'pgup': 33,
	  'pgdn': 34,
	  'ins': 45,
	  'del': 46,
	  'cmd': 91
	}
	
	
	/*!
	 * Programatically add the following
	 */
	
	// lower case chars
	for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32
	
	// numbers
	for (var i = 48; i < 58; i++) codes[i - 48] = i
	
	// function keys
	for (i = 1; i < 13; i++) codes['f'+i] = i + 111
	
	// numpad keys
	for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96
	
	/**
	 * Get by code
	 *
	 *   exports.name[13] // => 'Enter'
	 */
	
	var names = exports.names = exports.title = {} // title for backward compat
	
	// Create reverse mapping
	for (i in codes) names[codes[i]] = i
	
	// Add aliases
	for (var alias in aliases) {
	  codes[alias] = aliases[alias]
	}


/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(271);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	}

/***/ },

/***/ 283:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var warning = function() {};
	
	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }
	
	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }
	
	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 284:
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * Safe chained function
	 *
	 * Will only create a new function if needed,
	 * otherwise will pass back existing functions or null.
	 *
	 * @param {function} functions to chain
	 * @returns {function|null}
	 */
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	
	exports['default'] = createChainedFunction;
	module.exports = exports['default'];

/***/ },

/***/ 285:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * Iterates through children that are typically specified as `props.children`,
	 * but only maps over children that are "valid components".
	 *
	 * The mapFunction provided index will be normalised to the components mapped,
	 * so an invalid component would not increase the index.
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @return {object} Object containing the ordered map of results.
	 */
	function map(children, func, context) {
	  var index = 0;
	
	  return _react2['default'].Children.map(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return child;
	    }
	
	    return func.call(context, child, index++);
	  });
	}
	
	/**
	 * Iterates through children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for context.
	 */
	// TODO: This module should be ElementChildren, and should use named exports.
	
	function forEach(children, func, context) {
	  var index = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    func.call(context, child, index++);
	  });
	}
	
	/**
	 * Count the number of "valid components" in the Children container.
	 *
	 * @param {?*} children Children tree container.
	 * @returns {number}
	 */
	function count(children) {
	  var result = 0;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    ++result;
	  });
	
	  return result;
	}
	
	/**
	 * Finds children that are typically specified as `props.children`,
	 * but only iterates over children that are "valid components".
	 *
	 * The provided forEachFunc(child, index) will be called for each
	 * leaf child with the index reflecting the position relative to "valid components".
	 *
	 * @param {?*} children Children tree container.
	 * @param {function(*, int)} func.
	 * @param {*} context Context for func.
	 * @returns {array} of children that meet the func return statement
	 */
	function filter(children, func, context) {
	  var index = 0;
	  var result = [];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result.push(child);
	    }
	  });
	
	  return result;
	}
	
	function find(children, func, context) {
	  var index = 0;
	  var result = undefined;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result = child;
	    }
	  });
	
	  return result;
	}
	
	function every(children, func, context) {
	  var index = 0;
	  var result = true;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (!func.call(context, child, index++)) {
	      result = false;
	    }
	  });
	
	  return result;
	}
	
	function some(children, func, context) {
	  var index = 0;
	  var result = false;
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (result) {
	      return;
	    }
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    if (func.call(context, child, index++)) {
	      result = true;
	    }
	  });
	
	  return result;
	}
	
	function toArray(children) {
	  var result = [];
	
	  _react2['default'].Children.forEach(children, function (child) {
	    if (!_react2['default'].isValidElement(child)) {
	      return;
	    }
	
	    result.push(child);
	  });
	
	  return result;
	}
	
	exports['default'] = {
	  map: map,
	  forEach: forEach,
	  count: count,
	  find: find,
	  filter: filter,
	  every: every,
	  some: some,
	  toArray: toArray
	};
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyQ3JlZGVudGlhbHNNZW51LmpzP2RiMDEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL05hdi5qcz80MTllIiwid2VicGFjazovLy8uL34va2V5Y29kZS9pbmRleC5qcz9jNGUzIiwid2VicGFjazovLy8uL34vcmVhY3QtcHJvcC10eXBlcy9saWIvYWxsLmpzPzliYWUiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvfi93YXJuaW5nL2Jyb3dzZXIuanM/NGY1YyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWJvb3RzdHJhcC9saWIvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzPzljMWUiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4uanM/MTRlYiJdLCJuYW1lcyI6WyJVc2VyQ3JlZGVudGlhbHNNZW51IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCQSxtQjs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDUixjQUNFO0FBQUE7QUFBQSxXQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixRQURGO0FBTUQ7Ozs7R0FSOEMsZ0JBQU1DLFM7O21CQUFsQ0QsbUI7Ozs7Ozs7QUNIckI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQztBQUNsQztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyUkFBMFIsNkJBQTZCOztBQUV2VDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUMiLCJmaWxlIjoiMC41OTcyNWYyMzczMzc3ZjA1ZDg3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL05hdic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ3JlZGVudGlhbHNNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgIDxoMT5Bd2FyaSBBcHA8L2gxPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy91c2VyQ3JlZGVudGlhbHNNZW51LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMzID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzNCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMzKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vYmplY3RXaXRob3V0UHJvcGVydGllczIpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybicpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIpO1xuXG52YXIgX2luaGVyaXRzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cycpO1xuXG52YXIgX2luaGVyaXRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2luaGVyaXRzMik7XG5cbnZhciBfY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcblxudmFyIF9jbGFzc25hbWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzbmFtZXMpO1xuXG52YXIgX2tleWNvZGUgPSByZXF1aXJlKCdrZXljb2RlJyk7XG5cbnZhciBfa2V5Y29kZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9rZXljb2RlKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG52YXIgX2FsbCA9IHJlcXVpcmUoJ3JlYWN0LXByb3AtdHlwZXMvbGliL2FsbCcpO1xuXG52YXIgX2FsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hbGwpO1xuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9ib290c3RyYXBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMvYm9vdHN0cmFwVXRpbHMnKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG52YXIgX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4gPSByZXF1aXJlKCcuL3V0aWxzL1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4nKTtcblxudmFyIF9WYWxpZENvbXBvbmVudENoaWxkcmVuMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8vIFRPRE86IFNob3VsZCB3ZSBleHBvc2UgYDxOYXZJdGVtPmAgYXMgYDxOYXYuSXRlbT5gP1xuXG4vLyBUT0RPOiBUaGlzIGBic1N0eWxlYCBpcyB2ZXJ5IHVubGlrZSB0aGUgb3RoZXJzLiBTaG91bGQgd2UgcmVuYW1lIGl0P1xuXG4vLyBUT0RPOiBgcHVsbFJpZ2h0YCBhbmQgYHB1bGxMZWZ0YCBkb24ndCByZW5kZXIgcmlnaHQgb3V0c2lkZSBvZiBgbmF2YmFyYC5cbi8vIENvbnNpZGVyIHJlbmFtaW5nIG9yIHJlcGxhY2luZyB0aGVtLlxuXG52YXIgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogTWFya3MgdGhlIE5hdkl0ZW0gd2l0aCBhIG1hdGNoaW5nIGBldmVudEtleWAgYXMgYWN0aXZlLiBIYXMgYVxuICAgKiBoaWdoZXIgcHJlY2VkZW5jZSBvdmVyIGBhY3RpdmVIcmVmYC5cbiAgICovXG4gIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoZSBjaGlsZCBOYXZJdGVtIHdpdGggYSBtYXRjaGluZyBgaHJlZmAgcHJvcCBhcyBhY3RpdmUuXG4gICAqL1xuICBhY3RpdmVIcmVmOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogTmF2SXRlbXMgYXJlIGJlIHBvc2l0aW9uZWQgdmVydGljYWxseS5cbiAgICovXG4gIHN0YWNrZWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYm9vbCxcblxuICBqdXN0aWZpZWQ6ICgwLCBfYWxsMlsnZGVmYXVsdCddKShfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGp1c3RpZmllZCA9IF9yZWYuanVzdGlmaWVkLFxuICAgICAgICBuYXZiYXIgPSBfcmVmLm5hdmJhcjtcbiAgICByZXR1cm4ganVzdGlmaWVkICYmIG5hdmJhciA/IEVycm9yKCdqdXN0aWZpZWQgbmF2YmFyIGBOYXZgcyBhcmUgbm90IHN1cHBvcnRlZCcpIDogbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIEEgY2FsbGJhY2sgZmlyZWQgd2hlbiBhIE5hdkl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGZ1bmN0aW9uIChcbiAgICogXHRBbnkgZXZlbnRLZXksXG4gICAqIFx0U3ludGhldGljRXZlbnQgZXZlbnQ/XG4gICAqIClcbiAgICogYGBgXG4gICAqL1xuICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBBUklBIHJvbGUgZm9yIHRoZSBOYXYsIGluIHRoZSBjb250ZXh0IG9mIGEgVGFiQ29udGFpbmVyLCB0aGUgZGVmYXVsdCB3aWxsXG4gICAqIGJlIHNldCB0byBcInRhYmxpc3RcIiwgYnV0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSBOYXYgd2hlbiBzZXQgZXhwbGljaXRseS5cbiAgICpcbiAgICogV2hlbiB0aGUgcm9sZSBpcyBzZXQgdG8gXCJ0YWJsaXN0XCIgTmF2SXRlbSBmb2N1cyBpcyBtYW5hZ2VkIGFjY29yZGluZyB0b1xuICAgKiB0aGUgQVJJQSBhdXRob3JpbmcgcHJhY3RpY2VzIGZvciB0YWJzOlxuICAgKiBodHRwczovL3d3dy53My5vcmcvVFIvMjAxMy9XRC13YWktYXJpYS1wcmFjdGljZXMtMjAxMzAzMDcvI3RhYnBhbmVsXG4gICAqL1xuICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQXBwbHkgc3R5bGluZyBhbiBhbGlnbm1lbnQgZm9yIHVzZSBpbiBhIE5hdmJhci4gVGhpcyBwcm9wIHdpbGwgYmUgc2V0XG4gICAqIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgTmF2IGlzIHVzZWQgaW5zaWRlIGEgTmF2YmFyLlxuICAgKi9cbiAgbmF2YmFyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZsb2F0IHRoZSBOYXYgdG8gdGhlIHJpZ2h0LiBXaGVuIGBuYXZiYXJgIGlzIGB0cnVlYCB0aGUgYXBwcm9wcmlhdGVcbiAgICogY29udGV4dHVhbCBjbGFzc2VzIGFyZSBhZGRlZCBhcyB3ZWxsLlxuICAgKi9cbiAgcHVsbFJpZ2h0OiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEZsb2F0IHRoZSBOYXYgdG8gdGhlIGxlZnQuIFdoZW4gYG5hdmJhcmAgaXMgYHRydWVgIHRoZSBhcHByb3ByaWF0ZVxuICAgKiBjb250ZXh0dWFsIGNsYXNzZXMgYXJlIGFkZGVkIGFzIHdlbGwuXG4gICAqL1xuICBwdWxsTGVmdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBqdXN0aWZpZWQ6IGZhbHNlLFxuICBwdWxsUmlnaHQ6IGZhbHNlLFxuICBwdWxsTGVmdDogZmFsc2UsXG4gIHN0YWNrZWQ6IGZhbHNlXG59O1xuXG52YXIgY29udGV4dFR5cGVzID0ge1xuICAkYnNfbmF2YmFyOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBic0NsYXNzOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvblNlbGVjdDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5mdW5jXG4gIH0pLFxuXG4gICRic190YWJDb250YWluZXI6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuc2hhcGUoe1xuICAgIGFjdGl2ZUtleTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5hbnksXG4gICAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdldFRhYklkOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBnZXRQYW5lSWQ6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH0pXG59O1xuXG52YXIgTmF2ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoTmF2LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOYXYoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazNbJ2RlZmF1bHQnXSkodGhpcywgTmF2KTtcbiAgICByZXR1cm4gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9XG5cbiAgTmF2LnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuX25lZWRzUmVmb2N1cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25lZWRzUmVmb2N1cyA9IGZhbHNlO1xuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciBfZ2V0QWN0aXZlUHJvcHMgPSB0aGlzLmdldEFjdGl2ZVByb3BzKCksXG4gICAgICAgIGFjdGl2ZUtleSA9IF9nZXRBY3RpdmVQcm9wcy5hY3RpdmVLZXksXG4gICAgICAgIGFjdGl2ZUhyZWYgPSBfZ2V0QWN0aXZlUHJvcHMuYWN0aXZlSHJlZjtcblxuICAgIHZhciBhY3RpdmVDaGlsZCA9IF9WYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLmZpbmQoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIF90aGlzMi5pc0FjdGl2ZShjaGlsZCwgYWN0aXZlS2V5LCBhY3RpdmVIcmVmKTtcbiAgICB9KTtcblxuICAgIHZhciBjaGlsZHJlbkFycmF5ID0gX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10udG9BcnJheShjaGlsZHJlbik7XG4gICAgdmFyIGFjdGl2ZUNoaWxkSW5kZXggPSBjaGlsZHJlbkFycmF5LmluZGV4T2YoYWN0aXZlQ2hpbGQpO1xuXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBfcmVhY3REb20yWydkZWZhdWx0J10uZmluZERPTU5vZGUodGhpcykuY2hpbGRyZW47XG4gICAgdmFyIGFjdGl2ZU5vZGUgPSBjaGlsZE5vZGVzICYmIGNoaWxkTm9kZXNbYWN0aXZlQ2hpbGRJbmRleF07XG5cbiAgICBpZiAoIWFjdGl2ZU5vZGUgfHwgIWFjdGl2ZU5vZGUuZmlyc3RDaGlsZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGFjdGl2ZU5vZGUuZmlyc3RDaGlsZC5mb2N1cygpO1xuICB9O1xuXG4gIE5hdi5wcm90b3R5cGUuaGFuZGxlVGFiS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZVRhYktleURvd24ob25TZWxlY3QsIGV2ZW50KSB7XG4gICAgdmFyIG5leHRBY3RpdmVDaGlsZCA9IHZvaWQgMDtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBfa2V5Y29kZTJbJ2RlZmF1bHQnXS5jb2Rlcy5sZWZ0OlxuICAgICAgY2FzZSBfa2V5Y29kZTJbJ2RlZmF1bHQnXS5jb2Rlcy51cDpcbiAgICAgICAgbmV4dEFjdGl2ZUNoaWxkID0gdGhpcy5nZXROZXh0QWN0aXZlQ2hpbGQoLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX2tleWNvZGUyWydkZWZhdWx0J10uY29kZXMucmlnaHQ6XG4gICAgICBjYXNlIF9rZXljb2RlMlsnZGVmYXVsdCddLmNvZGVzLmRvd246XG4gICAgICAgIG5leHRBY3RpdmVDaGlsZCA9IHRoaXMuZ2V0TmV4dEFjdGl2ZUNoaWxkKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIEl0IHdhcyBhIGRpZmZlcmVudCBrZXk7IGRvbid0IGhhbmRsZSB0aGlzIGtleXByZXNzLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmIChvblNlbGVjdCAmJiBuZXh0QWN0aXZlQ2hpbGQgJiYgbmV4dEFjdGl2ZUNoaWxkLnByb3BzLmV2ZW50S2V5KSB7XG4gICAgICBvblNlbGVjdChuZXh0QWN0aXZlQ2hpbGQucHJvcHMuZXZlbnRLZXkpO1xuICAgIH1cblxuICAgIHRoaXMuX25lZWRzUmVmb2N1cyA9IHRydWU7XG4gIH07XG5cbiAgTmF2LnByb3RvdHlwZS5nZXROZXh0QWN0aXZlQ2hpbGQgPSBmdW5jdGlvbiBnZXROZXh0QWN0aXZlQ2hpbGQob2Zmc2V0KSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB2YXIgY2hpbGRyZW4gPSB0aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgdmFyIHZhbGlkQ2hpbGRyZW4gPSBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2hpbGQucHJvcHMuZXZlbnRLZXkgJiYgIWNoaWxkLnByb3BzLmRpc2FibGVkO1xuICAgIH0pO1xuXG4gICAgdmFyIF9nZXRBY3RpdmVQcm9wczIgPSB0aGlzLmdldEFjdGl2ZVByb3BzKCksXG4gICAgICAgIGFjdGl2ZUtleSA9IF9nZXRBY3RpdmVQcm9wczIuYWN0aXZlS2V5LFxuICAgICAgICBhY3RpdmVIcmVmID0gX2dldEFjdGl2ZVByb3BzMi5hY3RpdmVIcmVmO1xuXG4gICAgdmFyIGFjdGl2ZUNoaWxkID0gX1ZhbGlkQ29tcG9uZW50Q2hpbGRyZW4yWydkZWZhdWx0J10uZmluZChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLmlzQWN0aXZlKGNoaWxkLCBhY3RpdmVLZXksIGFjdGl2ZUhyZWYpO1xuICAgIH0pO1xuXG4gICAgLy8gVGhpcyBhc3N1bWVzIHRoZSBhY3RpdmUgY2hpbGQgaXMgbm90IGRpc2FibGVkLlxuICAgIHZhciBhY3RpdmVDaGlsZEluZGV4ID0gdmFsaWRDaGlsZHJlbi5pbmRleE9mKGFjdGl2ZUNoaWxkKTtcbiAgICBpZiAoYWN0aXZlQ2hpbGRJbmRleCA9PT0gLTEpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBoYXMgZ29uZSB3cm9uZy4gU2VsZWN0IHRoZSBmaXJzdCB2YWxpZCBjaGlsZCB3ZSBjYW4gZmluZC5cbiAgICAgIHJldHVybiB2YWxpZENoaWxkcmVuWzBdO1xuICAgIH1cblxuICAgIHZhciBuZXh0SW5kZXggPSBhY3RpdmVDaGlsZEluZGV4ICsgb2Zmc2V0O1xuICAgIHZhciBudW1WYWxpZENoaWxkcmVuID0gdmFsaWRDaGlsZHJlbi5sZW5ndGg7XG5cbiAgICBpZiAobmV4dEluZGV4ID49IG51bVZhbGlkQ2hpbGRyZW4pIHtcbiAgICAgIG5leHRJbmRleCA9IDA7XG4gICAgfSBlbHNlIGlmIChuZXh0SW5kZXggPCAwKSB7XG4gICAgICBuZXh0SW5kZXggPSBudW1WYWxpZENoaWxkcmVuIC0gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRDaGlsZHJlbltuZXh0SW5kZXhdO1xuICB9O1xuXG4gIE5hdi5wcm90b3R5cGUuZ2V0QWN0aXZlUHJvcHMgPSBmdW5jdGlvbiBnZXRBY3RpdmVQcm9wcygpIHtcbiAgICB2YXIgdGFiQ29udGFpbmVyID0gdGhpcy5jb250ZXh0LiRic190YWJDb250YWluZXI7XG5cbiAgICBpZiAodGFiQ29udGFpbmVyKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF93YXJuaW5nMlsnZGVmYXVsdCddKSh0aGlzLnByb3BzLmFjdGl2ZUtleSA9PSBudWxsICYmICF0aGlzLnByb3BzLmFjdGl2ZUhyZWYsICdTcGVjaWZ5aW5nIGEgYDxOYXY+YCBgYWN0aXZlS2V5YCBvciBgYWN0aXZlSHJlZmAgaW4gdGhlIGNvbnRleHQgb2YgJyArICdhIGA8VGFiQ29udGFpbmVyPmAgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCB1c2UgYDxUYWJDb250YWluZXIgJyArICgnYWN0aXZlS2V5PXsnICsgdGhpcy5wcm9wcy5hY3RpdmVLZXkgKyAnfSAvPmAuJykpIDogdm9pZCAwO1xuXG4gICAgICByZXR1cm4gdGFiQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnByb3BzO1xuICB9O1xuXG4gIE5hdi5wcm90b3R5cGUuaXNBY3RpdmUgPSBmdW5jdGlvbiBpc0FjdGl2ZShfcmVmMiwgYWN0aXZlS2V5LCBhY3RpdmVIcmVmKSB7XG4gICAgdmFyIHByb3BzID0gX3JlZjIucHJvcHM7XG5cbiAgICBpZiAocHJvcHMuYWN0aXZlIHx8IGFjdGl2ZUtleSAhPSBudWxsICYmIHByb3BzLmV2ZW50S2V5ID09PSBhY3RpdmVLZXkgfHwgYWN0aXZlSHJlZiAmJiBwcm9wcy5ocmVmID09PSBhY3RpdmVIcmVmKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcHMuYWN0aXZlO1xuICB9O1xuXG4gIE5hdi5wcm90b3R5cGUuZ2V0VGFiUHJvcHMgPSBmdW5jdGlvbiBnZXRUYWJQcm9wcyhjaGlsZCwgdGFiQ29udGFpbmVyLCBuYXZSb2xlLCBhY3RpdmUsIG9uU2VsZWN0KSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAoIXRhYkNvbnRhaW5lciAmJiBuYXZSb2xlICE9PSAndGFibGlzdCcpIHtcbiAgICAgIC8vIE5vIHRhYiBwcm9wcyBoZXJlLlxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIF9jaGlsZCRwcm9wcyA9IGNoaWxkLnByb3BzLFxuICAgICAgICBpZCA9IF9jaGlsZCRwcm9wcy5pZCxcbiAgICAgICAgY29udHJvbHMgPSBfY2hpbGQkcHJvcHNbJ2FyaWEtY29udHJvbHMnXSxcbiAgICAgICAgZXZlbnRLZXkgPSBfY2hpbGQkcHJvcHMuZXZlbnRLZXksXG4gICAgICAgIHJvbGUgPSBfY2hpbGQkcHJvcHMucm9sZSxcbiAgICAgICAgb25LZXlEb3duID0gX2NoaWxkJHByb3BzLm9uS2V5RG93bixcbiAgICAgICAgdGFiSW5kZXggPSBfY2hpbGQkcHJvcHMudGFiSW5kZXg7XG5cblxuICAgIGlmICh0YWJDb250YWluZXIpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3dhcm5pbmcyWydkZWZhdWx0J10pKCFpZCAmJiAhY29udHJvbHMsICdJbiB0aGUgY29udGV4dCBvZiBhIGA8VGFiQ29udGFpbmVyPmAsIGA8TmF2SXRlbT5gcyBhcmUgZ2l2ZW4gJyArICdnZW5lcmF0ZWQgYGlkYCBhbmQgYGFyaWEtY29udHJvbHNgIGF0dHJpYnV0ZXMgZm9yIHRoZSBzYWtlIG9mICcgKyAncHJvcGVyIGNvbXBvbmVudCBhY2Nlc3NpYmlsaXR5LiBBbnkgcHJvdmlkZWQgb25lcyB3aWxsIGJlIGlnbm9yZWQuICcgKyAnVG8gY29udHJvbCB0aGVzZSBhdHRyaWJ1dGVzIGRpcmVjdGx5LCBwcm92aWRlIGEgYGdlbmVyYXRlQ2hpbGRJZGAgJyArICdwcm9wIHRvIHRoZSBwYXJlbnQgYDxUYWJDb250YWluZXI+YC4nKSA6IHZvaWQgMDtcblxuICAgICAgaWQgPSB0YWJDb250YWluZXIuZ2V0VGFiSWQoZXZlbnRLZXkpO1xuICAgICAgY29udHJvbHMgPSB0YWJDb250YWluZXIuZ2V0UGFuZUlkKGV2ZW50S2V5KTtcbiAgICB9XG5cbiAgICBpZiAobmF2Um9sZSA9PT0gJ3RhYmxpc3QnKSB7XG4gICAgICByb2xlID0gcm9sZSB8fCAndGFiJztcbiAgICAgIG9uS2V5RG93biA9ICgwLCBfY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uMlsnZGVmYXVsdCddKShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzNC5oYW5kbGVUYWJLZXlEb3duKG9uU2VsZWN0LCBldmVudCk7XG4gICAgICB9LCBvbktleURvd24pO1xuICAgICAgdGFiSW5kZXggPSBhY3RpdmUgPyB0YWJJbmRleCA6IC0xO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpZDogaWQsXG4gICAgICByb2xlOiByb2xlLFxuICAgICAgb25LZXlEb3duOiBvbktleURvd24sXG4gICAgICAnYXJpYS1jb250cm9scyc6IGNvbnRyb2xzLFxuICAgICAgdGFiSW5kZXg6IHRhYkluZGV4XG4gICAgfTtcbiAgfTtcblxuICBOYXYucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2V4dGVuZHMyLFxuICAgICAgICBfdGhpczUgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHN0YWNrZWQgPSBfcHJvcHMuc3RhY2tlZCxcbiAgICAgICAganVzdGlmaWVkID0gX3Byb3BzLmp1c3RpZmllZCxcbiAgICAgICAgb25TZWxlY3QgPSBfcHJvcHMub25TZWxlY3QsXG4gICAgICAgIHByb3BzUm9sZSA9IF9wcm9wcy5yb2xlLFxuICAgICAgICBwcm9wc05hdmJhciA9IF9wcm9wcy5uYXZiYXIsXG4gICAgICAgIHB1bGxSaWdodCA9IF9wcm9wcy5wdWxsUmlnaHQsXG4gICAgICAgIHB1bGxMZWZ0ID0gX3Byb3BzLnB1bGxMZWZ0LFxuICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgcHJvcHMgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzM1snZGVmYXVsdCddKShfcHJvcHMsIFsnc3RhY2tlZCcsICdqdXN0aWZpZWQnLCAnb25TZWxlY3QnLCAncm9sZScsICduYXZiYXInLCAncHVsbFJpZ2h0JywgJ3B1bGxMZWZ0JywgJ2NsYXNzTmFtZScsICdjaGlsZHJlbiddKTtcblxuXG4gICAgdmFyIHRhYkNvbnRhaW5lciA9IHRoaXMuY29udGV4dC4kYnNfdGFiQ29udGFpbmVyO1xuICAgIHZhciByb2xlID0gcHJvcHNSb2xlIHx8ICh0YWJDb250YWluZXIgPyAndGFibGlzdCcgOiBudWxsKTtcblxuICAgIHZhciBfZ2V0QWN0aXZlUHJvcHMzID0gdGhpcy5nZXRBY3RpdmVQcm9wcygpLFxuICAgICAgICBhY3RpdmVLZXkgPSBfZ2V0QWN0aXZlUHJvcHMzLmFjdGl2ZUtleSxcbiAgICAgICAgYWN0aXZlSHJlZiA9IF9nZXRBY3RpdmVQcm9wczMuYWN0aXZlSHJlZjtcblxuICAgIGRlbGV0ZSBwcm9wcy5hY3RpdmVLZXk7IC8vIEFjY2Vzc2VkIHZpYSB0aGlzLmdldEFjdGl2ZVByb3BzKCkuXG4gICAgZGVsZXRlIHByb3BzLmFjdGl2ZUhyZWY7IC8vIEFjY2Vzc2VkIHZpYSB0aGlzLmdldEFjdGl2ZVByb3BzKCkuXG5cbiAgICB2YXIgX3NwbGl0QnNQcm9wcyA9ICgwLCBfYm9vdHN0cmFwVXRpbHMuc3BsaXRCc1Byb3BzKShwcm9wcyksXG4gICAgICAgIGJzUHJvcHMgPSBfc3BsaXRCc1Byb3BzWzBdLFxuICAgICAgICBlbGVtZW50UHJvcHMgPSBfc3BsaXRCc1Byb3BzWzFdO1xuXG4gICAgdmFyIGNsYXNzZXMgPSAoMCwgX2V4dGVuZHM0WydkZWZhdWx0J10pKHt9LCAoMCwgX2Jvb3RzdHJhcFV0aWxzLmdldENsYXNzU2V0KShic1Byb3BzKSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbKDAsIF9ib290c3RyYXBVdGlscy5wcmVmaXgpKGJzUHJvcHMsICdzdGFja2VkJyldID0gc3RhY2tlZCwgX2V4dGVuZHMyWygwLCBfYm9vdHN0cmFwVXRpbHMucHJlZml4KShic1Byb3BzLCAnanVzdGlmaWVkJyldID0ganVzdGlmaWVkLCBfZXh0ZW5kczIpKTtcblxuICAgIHZhciBuYXZiYXIgPSBwcm9wc05hdmJhciAhPSBudWxsID8gcHJvcHNOYXZiYXIgOiB0aGlzLmNvbnRleHQuJGJzX25hdmJhcjtcbiAgICB2YXIgcHVsbExlZnRDbGFzc05hbWUgPSB2b2lkIDA7XG4gICAgdmFyIHB1bGxSaWdodENsYXNzTmFtZSA9IHZvaWQgMDtcblxuICAgIGlmIChuYXZiYXIpIHtcbiAgICAgIHZhciBuYXZiYXJQcm9wcyA9IHRoaXMuY29udGV4dC4kYnNfbmF2YmFyIHx8IHsgYnNDbGFzczogJ25hdmJhcicgfTtcblxuICAgICAgY2xhc3Nlc1soMCwgX2Jvb3RzdHJhcFV0aWxzLnByZWZpeCkobmF2YmFyUHJvcHMsICduYXYnKV0gPSB0cnVlO1xuXG4gICAgICBwdWxsUmlnaHRDbGFzc05hbWUgPSAoMCwgX2Jvb3RzdHJhcFV0aWxzLnByZWZpeCkobmF2YmFyUHJvcHMsICdyaWdodCcpO1xuICAgICAgcHVsbExlZnRDbGFzc05hbWUgPSAoMCwgX2Jvb3RzdHJhcFV0aWxzLnByZWZpeCkobmF2YmFyUHJvcHMsICdsZWZ0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHB1bGxSaWdodENsYXNzTmFtZSA9ICdwdWxsLXJpZ2h0JztcbiAgICAgIHB1bGxMZWZ0Q2xhc3NOYW1lID0gJ3B1bGwtbGVmdCc7XG4gICAgfVxuXG4gICAgY2xhc3Nlc1twdWxsUmlnaHRDbGFzc05hbWVdID0gcHVsbFJpZ2h0O1xuICAgIGNsYXNzZXNbcHVsbExlZnRDbGFzc05hbWVdID0gcHVsbExlZnQ7XG5cbiAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoXG4gICAgICAndWwnLFxuICAgICAgKDAsIF9leHRlbmRzNFsnZGVmYXVsdCddKSh7fSwgZWxlbWVudFByb3BzLCB7XG4gICAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsIGNsYXNzZXMpXG4gICAgICB9KSxcbiAgICAgIF9WYWxpZENvbXBvbmVudENoaWxkcmVuMlsnZGVmYXVsdCddLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIHZhciBhY3RpdmUgPSBfdGhpczUuaXNBY3RpdmUoY2hpbGQsIGFjdGl2ZUtleSwgYWN0aXZlSHJlZik7XG4gICAgICAgIHZhciBjaGlsZE9uU2VsZWN0ID0gKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKGNoaWxkLnByb3BzLm9uU2VsZWN0LCBvblNlbGVjdCwgbmF2YmFyICYmIG5hdmJhci5vblNlbGVjdCwgdGFiQ29udGFpbmVyICYmIHRhYkNvbnRhaW5lci5vblNlbGVjdCk7XG5cbiAgICAgICAgcmV0dXJuICgwLCBfcmVhY3QuY2xvbmVFbGVtZW50KShjaGlsZCwgKDAsIF9leHRlbmRzNFsnZGVmYXVsdCddKSh7fSwgX3RoaXM1LmdldFRhYlByb3BzKGNoaWxkLCB0YWJDb250YWluZXIsIHJvbGUsIGFjdGl2ZSwgY2hpbGRPblNlbGVjdCksIHtcbiAgICAgICAgICBhY3RpdmU6IGFjdGl2ZSxcbiAgICAgICAgICBhY3RpdmVLZXk6IGFjdGl2ZUtleSxcbiAgICAgICAgICBhY3RpdmVIcmVmOiBhY3RpdmVIcmVmLFxuICAgICAgICAgIG9uU2VsZWN0OiBjaGlsZE9uU2VsZWN0XG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTmF2O1xufShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuTmF2LnByb3BUeXBlcyA9IHByb3BUeXBlcztcbk5hdi5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5OYXYuY29udGV4dFR5cGVzID0gY29udGV4dFR5cGVzO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSAoMCwgX2Jvb3RzdHJhcFV0aWxzLmJzQ2xhc3MpKCduYXYnLCAoMCwgX2Jvb3RzdHJhcFV0aWxzLmJzU3R5bGVzKShbJ3RhYnMnLCAncGlsbHMnXSwgTmF2KSk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi9OYXYuanNcbi8vIG1vZHVsZSBpZCA9IDI4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBTb3VyY2U6IGh0dHA6Ly9qc2ZpZGRsZS5uZXQvdld4OFYvXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MDMxOTUvZnVsbC1saXN0LW9mLWphdmFzY3JpcHQta2V5Y29kZXNcblxuLyoqXG4gKiBDb25lbmllbmNlIG1ldGhvZCByZXR1cm5zIGNvcnJlc3BvbmRpbmcgdmFsdWUgZm9yIGdpdmVuIGtleU5hbWUgb3Iga2V5Q29kZS5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSBrZXlDb2RlIHtOdW1iZXJ9IG9yIGtleU5hbWUge1N0cmluZ31cbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZWFyY2hJbnB1dCkge1xuICAvLyBLZXlib2FyZCBFdmVudHNcbiAgaWYgKHNlYXJjaElucHV0ICYmICdvYmplY3QnID09PSB0eXBlb2Ygc2VhcmNoSW5wdXQpIHtcbiAgICB2YXIgaGFzS2V5Q29kZSA9IHNlYXJjaElucHV0LndoaWNoIHx8IHNlYXJjaElucHV0LmtleUNvZGUgfHwgc2VhcmNoSW5wdXQuY2hhckNvZGVcbiAgICBpZiAoaGFzS2V5Q29kZSkgc2VhcmNoSW5wdXQgPSBoYXNLZXlDb2RlXG4gIH1cblxuICAvLyBOdW1iZXJzXG4gIGlmICgnbnVtYmVyJyA9PT0gdHlwZW9mIHNlYXJjaElucHV0KSByZXR1cm4gbmFtZXNbc2VhcmNoSW5wdXRdXG5cbiAgLy8gRXZlcnl0aGluZyBlbHNlIChjYXN0IHRvIHN0cmluZylcbiAgdmFyIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hJbnB1dClcblxuICAvLyBjaGVjayBjb2Rlc1xuICB2YXIgZm91bmROYW1lZEtleSA9IGNvZGVzW3NlYXJjaC50b0xvd2VyQ2FzZSgpXVxuICBpZiAoZm91bmROYW1lZEtleSkgcmV0dXJuIGZvdW5kTmFtZWRLZXlcblxuICAvLyBjaGVjayBhbGlhc2VzXG4gIHZhciBmb3VuZE5hbWVkS2V5ID0gYWxpYXNlc1tzZWFyY2gudG9Mb3dlckNhc2UoKV1cbiAgaWYgKGZvdW5kTmFtZWRLZXkpIHJldHVybiBmb3VuZE5hbWVkS2V5XG5cbiAgLy8gd2VpcmQgY2hhcmFjdGVyP1xuICBpZiAoc2VhcmNoLmxlbmd0aCA9PT0gMSkgcmV0dXJuIHNlYXJjaC5jaGFyQ29kZUF0KDApXG5cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG4vKipcbiAqIEdldCBieSBuYW1lXG4gKlxuICogICBleHBvcnRzLmNvZGVbJ2VudGVyJ10gLy8gPT4gMTNcbiAqL1xuXG52YXIgY29kZXMgPSBleHBvcnRzLmNvZGUgPSBleHBvcnRzLmNvZGVzID0ge1xuICAnYmFja3NwYWNlJzogOCxcbiAgJ3RhYic6IDksXG4gICdlbnRlcic6IDEzLFxuICAnc2hpZnQnOiAxNixcbiAgJ2N0cmwnOiAxNyxcbiAgJ2FsdCc6IDE4LFxuICAncGF1c2UvYnJlYWsnOiAxOSxcbiAgJ2NhcHMgbG9jayc6IDIwLFxuICAnZXNjJzogMjcsXG4gICdzcGFjZSc6IDMyLFxuICAncGFnZSB1cCc6IDMzLFxuICAncGFnZSBkb3duJzogMzQsXG4gICdlbmQnOiAzNSxcbiAgJ2hvbWUnOiAzNixcbiAgJ2xlZnQnOiAzNyxcbiAgJ3VwJzogMzgsXG4gICdyaWdodCc6IDM5LFxuICAnZG93bic6IDQwLFxuICAnaW5zZXJ0JzogNDUsXG4gICdkZWxldGUnOiA0NixcbiAgJ2NvbW1hbmQnOiA5MSxcbiAgJ2xlZnQgY29tbWFuZCc6IDkxLFxuICAncmlnaHQgY29tbWFuZCc6IDkzLFxuICAnbnVtcGFkIConOiAxMDYsXG4gICdudW1wYWQgKyc6IDEwNyxcbiAgJ251bXBhZCAtJzogMTA5LFxuICAnbnVtcGFkIC4nOiAxMTAsXG4gICdudW1wYWQgLyc6IDExMSxcbiAgJ251bSBsb2NrJzogMTQ0LFxuICAnc2Nyb2xsIGxvY2snOiAxNDUsXG4gICdteSBjb21wdXRlcic6IDE4MixcbiAgJ215IGNhbGN1bGF0b3InOiAxODMsXG4gICc7JzogMTg2LFxuICAnPSc6IDE4NyxcbiAgJywnOiAxODgsXG4gICctJzogMTg5LFxuICAnLic6IDE5MCxcbiAgJy8nOiAxOTEsXG4gICdgJzogMTkyLFxuICAnWyc6IDIxOSxcbiAgJ1xcXFwnOiAyMjAsXG4gICddJzogMjIxLFxuICBcIidcIjogMjIyXG59XG5cbi8vIEhlbHBlciBhbGlhc2VzXG5cbnZhciBhbGlhc2VzID0gZXhwb3J0cy5hbGlhc2VzID0ge1xuICAnd2luZG93cyc6IDkxLFxuICAn4oenJzogMTYsXG4gICfijKUnOiAxOCxcbiAgJ+KMgyc6IDE3LFxuICAn4oyYJzogOTEsXG4gICdjdGwnOiAxNyxcbiAgJ2NvbnRyb2wnOiAxNyxcbiAgJ29wdGlvbic6IDE4LFxuICAncGF1c2UnOiAxOSxcbiAgJ2JyZWFrJzogMTksXG4gICdjYXBzJzogMjAsXG4gICdyZXR1cm4nOiAxMyxcbiAgJ2VzY2FwZSc6IDI3LFxuICAnc3BjJzogMzIsXG4gICdwZ3VwJzogMzMsXG4gICdwZ2RuJzogMzQsXG4gICdpbnMnOiA0NSxcbiAgJ2RlbCc6IDQ2LFxuICAnY21kJzogOTFcbn1cblxuXG4vKiFcbiAqIFByb2dyYW1hdGljYWxseSBhZGQgdGhlIGZvbGxvd2luZ1xuICovXG5cbi8vIGxvd2VyIGNhc2UgY2hhcnNcbmZvciAoaSA9IDk3OyBpIDwgMTIzOyBpKyspIGNvZGVzW1N0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaSAtIDMyXG5cbi8vIG51bWJlcnNcbmZvciAodmFyIGkgPSA0ODsgaSA8IDU4OyBpKyspIGNvZGVzW2kgLSA0OF0gPSBpXG5cbi8vIGZ1bmN0aW9uIGtleXNcbmZvciAoaSA9IDE7IGkgPCAxMzsgaSsrKSBjb2Rlc1snZicraV0gPSBpICsgMTExXG5cbi8vIG51bXBhZCBrZXlzXG5mb3IgKGkgPSAwOyBpIDwgMTA7IGkrKykgY29kZXNbJ251bXBhZCAnK2ldID0gaSArIDk2XG5cbi8qKlxuICogR2V0IGJ5IGNvZGVcbiAqXG4gKiAgIGV4cG9ydHMubmFtZVsxM10gLy8gPT4gJ0VudGVyJ1xuICovXG5cbnZhciBuYW1lcyA9IGV4cG9ydHMubmFtZXMgPSBleHBvcnRzLnRpdGxlID0ge30gLy8gdGl0bGUgZm9yIGJhY2t3YXJkIGNvbXBhdFxuXG4vLyBDcmVhdGUgcmV2ZXJzZSBtYXBwaW5nXG5mb3IgKGkgaW4gY29kZXMpIG5hbWVzW2NvZGVzW2ldXSA9IGlcblxuLy8gQWRkIGFsaWFzZXNcbmZvciAodmFyIGFsaWFzIGluIGFsaWFzZXMpIHtcbiAgY29kZXNbYWxpYXNdID0gYWxpYXNlc1thbGlhc11cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9rZXljb2RlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyODFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWxsO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxQcm9wVHlwZXMoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGFsbFByb3BUeXBlcyk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXByb3AtdHlwZXMvbGliL2FsbC5qc1xuLy8gbW9kdWxlIGlkID0gMjgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWJvb3RzdHJhcC9+L3dhcm5pbmcvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMjgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogU2FmZSBjaGFpbmVkIGZ1bmN0aW9uXG4gKlxuICogV2lsbCBvbmx5IGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBpZiBuZWVkZWQsXG4gKiBvdGhlcndpc2Ugd2lsbCBwYXNzIGJhY2sgZXhpc3RpbmcgZnVuY3Rpb25zIG9yIG51bGwuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY3Rpb25zIHRvIGNoYWluXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb258bnVsbH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBmdW5jc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jcy5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZiAhPSBudWxsO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgZikge1xuICAgIGlmICh0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFyZ3VtZW50IFR5cGUsIG11c3Qgb25seSBwcm92aWRlIGZ1bmN0aW9ucywgdW5kZWZpbmVkLCBvciBudWxsLicpO1xuICAgIH1cblxuICAgIGlmIChhY2MgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBmO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiBjaGFpbmVkRnVuY3Rpb24oKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIGFjYy5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUNoYWluZWRGdW5jdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAsXG4gKiBidXQgb25seSBtYXBzIG92ZXIgY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIG1hcEZ1bmN0aW9uIHByb3ZpZGVkIGluZGV4IHdpbGwgYmUgbm9ybWFsaXNlZCB0byB0aGUgY29tcG9uZW50cyBtYXBwZWQsXG4gKiBzbyBhbiBpbnZhbGlkIGNvbXBvbmVudCB3b3VsZCBub3QgaW5jcmVhc2UgdGhlIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmdW5jLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIGZ1bmMuXG4gKiBAcmV0dXJuIHtvYmplY3R9IE9iamVjdCBjb250YWluaW5nIHRoZSBvcmRlcmVkIG1hcCBvZiByZXN1bHRzLlxuICovXG5mdW5jdGlvbiBtYXAoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcblxuICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKyk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEl0ZXJhdGVzIHRocm91Z2ggY2hpbGRyZW4gdGhhdCBhcmUgXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogVGhlIHByb3ZpZGVkIGZvckVhY2hGdW5jKGNoaWxkLCBpbmRleCkgd2lsbCBiZSBjYWxsZWQgZm9yIGVhY2hcbiAqIGxlYWYgY2hpbGQgd2l0aCB0aGUgaW5kZXggcmVmbGVjdGluZyB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gXCJ2YWxpZCBjb21wb25lbnRzXCIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCosIGludCl9IGZ1bmMuXG4gKiBAcGFyYW0geyp9IGNvbnRleHQgQ29udGV4dCBmb3IgY29udGV4dC5cbiAqL1xuLy8gVE9ETzogVGhpcyBtb2R1bGUgc2hvdWxkIGJlIEVsZW1lbnRDaGlsZHJlbiwgYW5kIHNob3VsZCB1c2UgbmFtZWQgZXhwb3J0cy5cblxuZnVuY3Rpb24gZm9yRWFjaChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspO1xuICB9KTtcbn1cblxuLyoqXG4gKiBDb3VudCB0aGUgbnVtYmVyIG9mIFwidmFsaWQgY29tcG9uZW50c1wiIGluIHRoZSBDaGlsZHJlbiBjb250YWluZXIuXG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjb3VudChjaGlsZHJlbikge1xuICB2YXIgcmVzdWx0ID0gMDtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKytyZXN1bHQ7XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRmluZHMgY2hpbGRyZW4gdGhhdCBhcmUgdHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gLFxuICogYnV0IG9ubHkgaXRlcmF0ZXMgb3ZlciBjaGlsZHJlbiB0aGF0IGFyZSBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBUaGUgcHJvdmlkZWQgZm9yRWFjaEZ1bmMoY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZCB3aXRoIHRoZSBpbmRleCByZWZsZWN0aW5nIHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBcInZhbGlkIGNvbXBvbmVudHNcIi5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYy5cbiAqIEBwYXJhbSB7Kn0gY29udGV4dCBDb250ZXh0IGZvciBmdW5jLlxuICogQHJldHVybnMge2FycmF5fSBvZiBjaGlsZHJlbiB0aGF0IG1lZXQgdGhlIGZ1bmMgcmV0dXJuIHN0YXRlbWVudFxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZnVuYy5jYWxsKGNvbnRleHQsIGNoaWxkLCBpbmRleCsrKSkge1xuICAgICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmluZChjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghX3JlYWN0MlsnZGVmYXVsdCddLmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGluZGV4KyspKSB7XG4gICAgICByZXN1bHQgPSBjaGlsZDtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5KGNoaWxkcmVuLCBmdW5jLCBjb250ZXh0KSB7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciByZXN1bHQgPSB0cnVlO1xuXG4gIF9yZWFjdDJbJ2RlZmF1bHQnXS5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIV9yZWFjdDJbJ2RlZmF1bHQnXS5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc29tZShjaGlsZHJlbiwgZnVuYywgY29udGV4dCkge1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgcmVzdWx0ID0gZmFsc2U7XG5cbiAgX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGZ1bmMuY2FsbChjb250ZXh0LCBjaGlsZCwgaW5kZXgrKykpIHtcbiAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBfcmVhY3QyWydkZWZhdWx0J10uQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKCFfcmVhY3QyWydkZWZhdWx0J10uaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmVzdWx0LnB1c2goY2hpbGQpO1xuICB9KTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIG1hcDogbWFwLFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBjb3VudDogY291bnQsXG4gIGZpbmQ6IGZpbmQsXG4gIGZpbHRlcjogZmlsdGVyLFxuICBldmVyeTogZXZlcnksXG4gIHNvbWU6IHNvbWUsXG4gIHRvQXJyYXk6IHRvQXJyYXlcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtYm9vdHN0cmFwL2xpYi91dGlscy9WYWxpZENvbXBvbmVudENoaWxkcmVuLmpzXG4vLyBtb2R1bGUgaWQgPSAyODVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==