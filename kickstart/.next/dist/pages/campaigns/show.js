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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

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