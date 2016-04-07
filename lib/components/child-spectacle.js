"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _store = require("../store");

var _store2 = _interopRequireDefault(_store);

var _childController = require("../utils/child-controller");

var _childController2 = _interopRequireDefault(_childController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();

var ChildSpectacle = (_temp = _class = function (_Component) {
  _inherits(ChildSpectacle, _Component);

  function ChildSpectacle() {
    _classCallCheck(this, ChildSpectacle);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChildSpectacle).call(this));

    _this.getChildContext = _this.getChildContext.bind(_this);
    return _this;
  }

  _createClass(ChildSpectacle, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: this.context.router,
        basePath: this.props.basePath
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _childController2.default,
          {
            theme: this.props.theme,
            store: store
          },
          this.props.children
        )
      );
    }
  }]);

  return ChildSpectacle;
}(_react.Component), _class.propTypes = {
  children: _react.PropTypes.node,
  theme: _react.PropTypes.object,
  basePath: _react.PropTypes.string
}, _class.contextTypes = {
  router: _react.PropTypes.object
}, _class.childContextTypes = {
  router: _react.PropTypes.object,
  basePath: _react.PropTypes.string
}, _temp);
exports.default = ChildSpectacle;