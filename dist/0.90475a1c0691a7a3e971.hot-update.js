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
	
	var _NavItem = __webpack_require__(286);
	
	var _NavItem2 = _interopRequireDefault(_NavItem);
	
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
	        ),
	        _react2.default.createElement(
	          _Nav2.default,
	          { className: 'user-credentials-nav', bsStyle: 'pills' },
	          _react2.default.createElement(
	            _NavItem2.default,
	            null,
	            ' User Credentials '
	          )
	        )
	      );
	    }
	  }]);
	
	  return UserCredentialsMenu;
	}(_react2.default.Component);
	
	exports.default = UserCredentialsMenu;

/***/ },

/***/ 286:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends2 = __webpack_require__(217);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
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
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _SafeAnchor = __webpack_require__(278);
	
	var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);
	
	var _createChainedFunction = __webpack_require__(284);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var propTypes = {
	  active: _react2['default'].PropTypes.bool,
	  disabled: _react2['default'].PropTypes.bool,
	  role: _react2['default'].PropTypes.string,
	  href: _react2['default'].PropTypes.string,
	  onClick: _react2['default'].PropTypes.func,
	  onSelect: _react2['default'].PropTypes.func,
	  eventKey: _react2['default'].PropTypes.any
	};
	
	var defaultProps = {
	  active: false,
	  disabled: false
	};
	
	var NavItem = function (_React$Component) {
	  (0, _inherits3['default'])(NavItem, _React$Component);
	
	  function NavItem(props, context) {
	    (0, _classCallCheck3['default'])(this, NavItem);
	
	    var _this = (0, _possibleConstructorReturn3['default'])(this, _React$Component.call(this, props, context));
	
	    _this.handleClick = _this.handleClick.bind(_this);
	    return _this;
	  }
	
	  NavItem.prototype.handleClick = function handleClick(e) {
	    if (this.props.onSelect) {
	      e.preventDefault();
	
	      if (!this.props.disabled) {
	        this.props.onSelect(this.props.eventKey, e);
	      }
	    }
	  };
	
	  NavItem.prototype.render = function render() {
	    var _props = this.props,
	        active = _props.active,
	        disabled = _props.disabled,
	        onClick = _props.onClick,
	        className = _props.className,
	        style = _props.style,
	        props = (0, _objectWithoutProperties3['default'])(_props, ['active', 'disabled', 'onClick', 'className', 'style']);
	
	
	    delete props.onSelect;
	    delete props.eventKey;
	
	    // These are injected down by `<Nav>` for building `<SubNav>`s.
	    delete props.activeKey;
	    delete props.activeHref;
	
	    if (!props.role) {
	      if (props.href === '#') {
	        props.role = 'button';
	      }
	    } else if (props.role === 'tab') {
	      props['aria-selected'] = active;
	    }
	
	    return _react2['default'].createElement(
	      'li',
	      {
	        role: 'presentation',
	        className: (0, _classnames2['default'])(className, { active: active, disabled: disabled }),
	        style: style
	      },
	      _react2['default'].createElement(_SafeAnchor2['default'], (0, _extends3['default'])({}, props, {
	        disabled: disabled,
	        onClick: (0, _createChainedFunction2['default'])(onClick, this.handleClick)
	      }))
	    );
	  };
	
	  return NavItem;
	}(_react2['default'].Component);
	
	NavItem.propTypes = propTypes;
	NavItem.defaultProps = defaultProps;
	
	exports['default'] = NavItem;
	module.exports = exports['default'];

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy91c2VyQ3JlZGVudGlhbHNNZW51LmpzP2RiMDEiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW0uanM/ZWZiZiJdLCJuYW1lcyI6WyJVc2VyQ3JlZGVudGlhbHNNZW51IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7S0FFcUJBLG1COzs7Ozs7Ozs7Ozs4QkFDVDtBQUNSLGNBQ0U7QUFBQTtBQUFBLFdBQUssV0FBVSxNQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBRUU7QUFBQTtBQUFBLGFBQUssV0FBVSxzQkFBZixFQUFzQyxTQUFRLE9BQTlDO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBRkYsUUFERjtBQVFEOzs7O0dBVjhDLGdCQUFNQyxTOzttQkFBbENELG1COzs7Ozs7O0FDSnJCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLHVDQUFzQyx1Q0FBdUMsa0JBQWtCOztBQUUvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTRELHFDQUFxQztBQUNqRztBQUNBLFFBQU87QUFDUCw2RkFBNEY7QUFDNUY7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0EscUMiLCJmaWxlIjoiMC45MDQ3NWExYzA2OTFhN2EzZTk3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL05hdic7XHJcbmltcG9ydCBOYXZJdGVtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2SXRlbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyQ3JlZGVudGlhbHNNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4nPlxyXG4gICAgICAgIDxoMT5Bd2FyaSBBcHA8L2gxPlxyXG4gICAgICAgIDxOYXYgY2xhc3NOYW1lPSd1c2VyLWNyZWRlbnRpYWxzLW5hdicgYnNTdHlsZT0ncGlsbHMnPlxyXG4gICAgICAgICAgPE5hdkl0ZW0+IFVzZXIgQ3JlZGVudGlhbHMgPC9OYXZJdGVtPlxyXG4gICAgICAgIDwvTmF2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL3VzZXJDcmVkZW50aWFsc01lbnUuanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kczIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xuXG52YXIgX2V4dGVuZHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZXh0ZW5kczIpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMik7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJyk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2szID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NDYWxsQ2hlY2syKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF9jbGFzc25hbWVzID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpO1xuXG52YXIgX2NsYXNzbmFtZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhc3NuYW1lcyk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9TYWZlQW5jaG9yID0gcmVxdWlyZSgnLi9TYWZlQW5jaG9yJyk7XG5cbnZhciBfU2FmZUFuY2hvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9TYWZlQW5jaG9yKTtcblxudmFyIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24gPSByZXF1aXJlKCcuL3V0aWxzL2NyZWF0ZUNoYWluZWRGdW5jdGlvbicpO1xuXG52YXIgX2NyZWF0ZUNoYWluZWRGdW5jdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBwcm9wVHlwZXMgPSB7XG4gIGFjdGl2ZTogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICBkaXNhYmxlZDogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5ib29sLFxuICByb2xlOiBfcmVhY3QyWydkZWZhdWx0J10uUHJvcFR5cGVzLnN0cmluZyxcbiAgaHJlZjogX3JlYWN0MlsnZGVmYXVsdCddLlByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuZnVuYyxcbiAgZXZlbnRLZXk6IF9yZWFjdDJbJ2RlZmF1bHQnXS5Qcm9wVHlwZXMuYW55XG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBhY3RpdmU6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2Vcbn07XG5cbnZhciBOYXZJdGVtID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czNbJ2RlZmF1bHQnXSkoTmF2SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTmF2SXRlbShwcm9wcywgY29udGV4dCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szWydkZWZhdWx0J10pKHRoaXMsIE5hdkl0ZW0pO1xuXG4gICAgdmFyIF90aGlzID0gKDAsIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuM1snZGVmYXVsdCddKSh0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpKTtcblxuICAgIF90aGlzLmhhbmRsZUNsaWNrID0gX3RoaXMuaGFuZGxlQ2xpY2suYmluZChfdGhpcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgTmF2SXRlbS5wcm90b3R5cGUuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TZWxlY3QodGhpcy5wcm9wcy5ldmVudEtleSwgZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIE5hdkl0ZW0ucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgYWN0aXZlID0gX3Byb3BzLmFjdGl2ZSxcbiAgICAgICAgZGlzYWJsZWQgPSBfcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgIG9uQ2xpY2sgPSBfcHJvcHMub25DbGljayxcbiAgICAgICAgY2xhc3NOYW1lID0gX3Byb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgc3R5bGUgPSBfcHJvcHMuc3R5bGUsXG4gICAgICAgIHByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczNbJ2RlZmF1bHQnXSkoX3Byb3BzLCBbJ2FjdGl2ZScsICdkaXNhYmxlZCcsICdvbkNsaWNrJywgJ2NsYXNzTmFtZScsICdzdHlsZSddKTtcblxuXG4gICAgZGVsZXRlIHByb3BzLm9uU2VsZWN0O1xuICAgIGRlbGV0ZSBwcm9wcy5ldmVudEtleTtcblxuICAgIC8vIFRoZXNlIGFyZSBpbmplY3RlZCBkb3duIGJ5IGA8TmF2PmAgZm9yIGJ1aWxkaW5nIGA8U3ViTmF2PmBzLlxuICAgIGRlbGV0ZSBwcm9wcy5hY3RpdmVLZXk7XG4gICAgZGVsZXRlIHByb3BzLmFjdGl2ZUhyZWY7XG5cbiAgICBpZiAoIXByb3BzLnJvbGUpIHtcbiAgICAgIGlmIChwcm9wcy5ocmVmID09PSAnIycpIHtcbiAgICAgICAgcHJvcHMucm9sZSA9ICdidXR0b24nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvcHMucm9sZSA9PT0gJ3RhYicpIHtcbiAgICAgIHByb3BzWydhcmlhLXNlbGVjdGVkJ10gPSBhY3RpdmU7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2xpJyxcbiAgICAgIHtcbiAgICAgICAgcm9sZTogJ3ByZXNlbnRhdGlvbicsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKShjbGFzc05hbWUsIHsgYWN0aXZlOiBhY3RpdmUsIGRpc2FibGVkOiBkaXNhYmxlZCB9KSxcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9LFxuICAgICAgX3JlYWN0MlsnZGVmYXVsdCddLmNyZWF0ZUVsZW1lbnQoX1NhZmVBbmNob3IyWydkZWZhdWx0J10sICgwLCBfZXh0ZW5kczNbJ2RlZmF1bHQnXSkoe30sIHByb3BzLCB7XG4gICAgICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICAgICAgb25DbGljazogKDAsIF9jcmVhdGVDaGFpbmVkRnVuY3Rpb24yWydkZWZhdWx0J10pKG9uQ2xpY2ssIHRoaXMuaGFuZGxlQ2xpY2spXG4gICAgICB9KSlcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBOYXZJdGVtO1xufShfcmVhY3QyWydkZWZhdWx0J10uQ29tcG9uZW50KTtcblxuTmF2SXRlbS5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5OYXZJdGVtLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0c1snZGVmYXVsdCddID0gTmF2SXRlbTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW0uanNcbi8vIG1vZHVsZSBpZCA9IDI4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9