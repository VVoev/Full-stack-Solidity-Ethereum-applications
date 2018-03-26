webpackHotUpdate(5,{

/***/ 713:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(714);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(966);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(522);

var _web = __webpack_require__(967);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Vladimir.Voev\\Desktop\\Full-stack-Solidity-Ethereum-applications\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimumContribution = _props.minimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'Adress of the manager',
                description: 'The Manager has been the creator of this campaign',
                style: { overflowWrap: 'break-word' }
            }, {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become a approver'
            }, {
                header: requestsCount,
                meta: 'Number of requests',
                description: 'Total number of requests'
            }, {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Total number of people who already donated'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance(ether)',
                description: 'The balance of the campaign'
            }];

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'CampaignShow'), this.renderCards());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    minimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIkNhcmQiLCJ3ZWIzIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJiYWxhbmNlIiwibWFuYWdlciIsIm1pbmltdW1Db250cmlidXRpb24iLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFROztBQUNSLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFSTs7Ozs7Ozs7Ozs7c0NBY0o7eUJBQ21FLEtBRG5FLEFBQ3dFO2dCQUR4RSxBQUNGLGlCQURFLEFBQ0Y7Z0JBREUsQUFDTyxpQkFEUCxBQUNPO2dCQURQLEFBQ2UsNkJBRGYsQUFDZTtnQkFEZixBQUNtQyx1QkFEbkMsQUFDbUM7Z0JBRG5DLEFBQ2lELHdCQURqRCxBQUNpRCxBQUMxRDs7Z0JBQU07d0JBQ0YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFISixBQUdnQixBQUNaO3VCQUFNLEVBQUMsY0FMRCxBQUNWLEFBSVUsQUFBYztBQUp4QixBQUNJLGFBRk07d0JBT1YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFWTSxBQU9WLEFBR2dCO0FBSGhCLEFBQ0k7d0JBSUosQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFmTSxBQVlWLEFBR2dCO0FBSGhCLEFBQ0k7d0JBSUosQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDs2QkFwQk0sQUFpQlYsQUFHZ0I7QUFIaEIsQUFDSTt3QkFLTyxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEOUIsQUFDVyxBQUEyQixBQUNsQztzQkFGSixBQUVTLEFBQ0w7NkJBekJSLEFBQWMsQUFzQlYsQUFHZ0IsQUFJcEI7QUFQSSxBQUNJOztpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVGLEFBQ0w7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0Msc0JBTFQsQUFDSSxBQUlLLEFBQUssQUFHakI7Ozs7O2lILEFBdEQ0Qjs7Ozs7aUNBQ25CO0EsMkNBQVcsd0JBQVMsTUFBQSxBQUFNLE1BQWYsQSxBQUFxQjs7dUNBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCLEE7O2lDQUE5QztBOzt5REFFa0IsUUFEakIsQUFDaUIsQUFBUSxBQUM1Qjs2Q0FBUSxRQUZMLEFBRUssQUFBUSxBQUNoQjttREFBYyxRQUhYLEFBR1csQUFBUSxBQUN0QjtvREFBZSxRQUpaLEFBSVksQUFBUSxBQUN2Qjs2Q0FBUSxRQUFRLEEsQUFMYixBQUtLO0FBTEwsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU44QixBOztrQkFBckIsQSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL1ZsYWRpbWlyLlZvZXYvRGVza3RvcC9GdWxsLXN0YWNrLVNvbGlkaXR5LUV0aGVyZXVtLWFwcGxpY2F0aW9ucy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Vladimir.Voev\\Desktop\\Full-stack-Solidity-Ethereum-applications\\kickstart\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Vladimir.Voev\\Desktop\\Full-stack-Solidity-Ethereum-applications\\kickstart\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44YWM5NTllOTgxOGNjODU1NWZkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MGNlOTQ5YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQge0NhcmR9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHdlYjMgZnJvbSAnLi4vLi4vZXRoZXJldW0vd2ViMydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb246c3VtbWFyeVswXSxcclxuICAgICAgICAgICAgYmFsYW5jZTpzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50OnN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OnN1bW1hcnlbM10sXHJcbiAgICAgICAgICAgIG1hbmFnZXI6c3VtbWFyeVs0XVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMoKXtcclxuICAgICAgICBjb25zdCB7YmFsYW5jZSwgbWFuYWdlcixtaW5pbXVtQ29udHJpYnV0aW9uLHJlcXVlc3RzQ291bnQsYXBwcm92ZXJzQ291bnR9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOm1hbmFnZXIsXHJcbiAgICAgICAgICAgICAgICBtZXRhOidBZHJlc3Mgb2YgdGhlIG1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1RoZSBNYW5hZ2VyIGhhcyBiZWVuIHRoZSBjcmVhdG9yIG9mIHRoaXMgY2FtcGFpZ24nLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6e292ZXJmbG93V3JhcDonYnJlYWstd29yZCd9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjptaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICAgICAgbWV0YTonTWluaW11bSBDb250cmlidXRpb24gKHdlaSknLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246J1lvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYSBhcHByb3ZlcicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjpyZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTonTnVtYmVyIG9mIHJlcXVlc3RzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUb3RhbCBudW1iZXIgb2YgcmVxdWVzdHMnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6YXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgICAgICAgICBtZXRhOidOdW1iZXIgb2YgYXBwcm92ZXJzJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOidUb3RhbCBudW1iZXIgb2YgcGVvcGxlIHdobyBhbHJlYWR5IGRvbmF0ZWQnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6d2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsJ2V0aGVyJyksXHJcbiAgICAgICAgICAgICAgICBtZXRhOidDYW1wYWlnbiBiYWxhbmNlKGV0aGVyKScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonVGhlIGJhbGFuY2Ugb2YgdGhlIGNhbXBhaWduJyxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30vPlxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2FtcGFpZ25TaG93XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUFBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUlBO0FBTkE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFHQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBL0NBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=