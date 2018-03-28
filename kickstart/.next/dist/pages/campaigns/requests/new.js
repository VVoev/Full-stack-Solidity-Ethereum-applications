'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Vladimir.Voev\\Desktop\\Full-stack-Solidity-Ethereum-applications\\kickstart\\pages\\campaigns\\requests\\new.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            description: '',
            recipient: '',
            loading: false,
            errorMsg: ''
        }, _this.handleFormSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMsg: '' });
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 10:
                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errorMsg: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, 'Back')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.handleFormSubmit, error: !!this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.description, onChange: function onChange(e) {
                    return _this3.setState({ description: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.value, onChange: function onChange(e) {
                    return _this3.setState({ value: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, { value: this.state.recipient, onChange: function onChange(e) {
                    return _this3.setState({ recipient: e.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Ooops', content: this.state.errorMsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'Create')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHJlcXVlc3RzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNc2ciLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFRLEFBQU0sQUFBTyxBQUFROztBQUM3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVEsQUFBSyxBQUFhOztBQUMxQixBQUFPLEFBQVk7Ozs7Ozs7OztJQUVFLEE7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVqQjttQkFBUSxBQUNFLEFBQ047eUJBRkksQUFFUSxBQUNaO3VCQUhJLEFBR00sQUFDVjtxQkFKSSxBQUlJLEFBQ1I7c0JBTEksQSxBQUtLO0FBTEwsQUFDSixpQixBQVVKO2lHQUFtQixpQkFBQSxBQUFPLEdBQVA7MEVBQUE7OzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNmO2tDQUFBLEFBQUUsQUFDSTtBQUZTLDJDQUVFLHdCQUFTLE1BQUEsQUFBSyxNQUZoQixBQUVFLEFBQW9COzhDQUNDLE1BSHZCLEFBRzRCLE9BSDVCLEFBR1IsMEJBSFEsQUFHUixhQUhRLEFBR0ksb0JBSEosQUFHSSxPQUhKLEFBR1Usd0JBSFYsQUFHVSxBQUV6Qjs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssVUFMYixBQUtmLEFBQWMsQUFBdUI7Z0RBTHRCO2dEQUFBO3VDQU9ZLGNBQUEsQUFBSyxJQVBqQixBQU9ZLEFBQVM7O2lDQUExQjtBQVBLLG9EQUFBO2dEQUFBO2dEQVFMLEFBQVMsUUFBVCxBQUFpQixjQUFqQixBQUErQixhQUFZLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixPQUE1RCxBQUEyQyxBQUF1QixVQUFsRSxBQUEyRSxXQUEzRSxBQUFzRjswQ0FDbkYsU0FURSxBQVFMLEFBQTJGLEFBQ3hGLEFBQVM7QUFEK0UsQUFDN0YsaUNBREU7O2lDQUdOOytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQVgvQjtnREFBQTtBQUFBOztpQ0FBQTtnREFBQTtnRUFhWDs7c0NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxZQWJiLEFBYVgsQUFBYyxBQUFnQjs7aUNBRWxDO3NDQUFBLEFBQUssU0FBUyxFQUFDLFNBZkEsQUFlZixBQUFjLEFBQVM7O2lDQWZSO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBaUJWO3lCQUNMOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkosQUFDSSxBQUNBLEFBSUEsMEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFNSSxBQUNMLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixrQkFBa0IsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQXJELEFBQTJEOzhCQUEzRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsZ0NBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixhQUFhLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsYUFBWSxFQUFBLEFBQUUsT0FBbEMsQUFBSyxBQUFjLEFBQXNCO0FBQXpGOzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQUdBO0FBSEE7aUNBR0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsbUNBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixPQUFPLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxFQUFBLEFBQUUsT0FBNUIsQUFBSyxBQUFjLEFBQWdCO0FBQTdFOzhCQUFBO2dDQVJSLEFBTVEsQUFFQSxBQUdBO0FBSEE7aUNBR0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNBO0FBREE7QUFBQSwrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsOEJBQUEsQUFBQyx3Q0FBTSxPQUFPLEtBQUEsQUFBSyxNQUFuQixBQUF5QixXQUFXLFVBQVUsa0JBQUEsQUFBQyxHQUFEOzJCQUFLLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVSxFQUFBLEFBQUUsT0FBaEMsQUFBSyxBQUFjLEFBQW9CO0FBQXJGOzhCQUFBO2dDQWJSLEFBV1EsQUFFQSxBQUVKO0FBRkk7aUNBRUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEOzhCQUFsRDtnQ0FmSixBQWVJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUF4QlAsQUFDSSxBQU9ELEFBZ0JJLEFBSVY7Ozs7O21IQWxENEIsQTs7Ozs7aUNBQ2xCO0EsMENBQVcsTUFBTSxBLE1BQWpCLEE7a0VBQ0EsRUFBQyxTQUFELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFYeUIsQTs7a0JBQW5CLEEiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1ZsYWRpbWlyLlZvZXYvRGVza3RvcC9GdWxsLXN0YWNrLVNvbGlkaXR5LUV0aGVyZXVtLWFwcGxpY2F0aW9ucy9raWNrc3RhcnQifQ==