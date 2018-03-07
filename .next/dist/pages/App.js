'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/akra/Dokumenty/react-next-leaflet-apollo-spike/pages/App.js';


var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

        _this.state = { showMap: false };
        _this.RL = require('react-leaflet');
        _this.RLD = require('react-leaflet-draw');
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState = {
                showMap: true
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var center = [52, 19];
            var TRUE = true;
            var OPACITY = 0.5;

            var _RL = this.RL,
                Map = _RL.Map,
                TileLayer = _RL.TileLayer,
                WMSTileLayer = _RL.WMSTileLayer,
                LayersControl = _RL.LayersControl,
                FeatureGroup = _RL.FeatureGroup,
                Circle = _RL.Circle;
            var BaseLayer = LayersControl.BaseLayer,
                Overlay = LayersControl.Overlay;
            var EditControl = this.RLD.EditControl;

            return _react2.default.createElement(Map, { center: center, zoom: 7, style: { height: "100vh" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement(LayersControl, { position: 'topright', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(BaseLayer, { checked: true, name: 'tileLayer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement(TileLayer, {
                attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            })), _react2.default.createElement(Overlay, { name: 'administracyjna', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Administracyjna',
                opacity: OPACITY,
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(Overlay, { name: 'ortofotomapa', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Raster',
                version: '1.3.0',
                transparent: 'true',
                format: 'image/png',
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            })), _react2.default.createElement(Overlay, { name: 'dzialki', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Dzialki',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            })), _react2.default.createElement(Overlay, { name: 'numery dzia\u0142ek', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'NumeryDzialek',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }))), _react2.default.createElement(FeatureGroup, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(EditControl, {
                position: 'topright',
                onEdited: this._onEditPath,
                onCreated: this._onCreate,
                onDeleted: this._onDeleted,
                draw: {
                    rectangle: false
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }), _react2.default.createElement(Circle, { center: [51.51, -0.06], radius: 200, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            })));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

// url parametry
// ?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities

// podrecznik geoportal
// http://www.geoportal.gov.pl/documents/10179/26435/Geoportal-podrecznik.pdf
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsInN0YXRlIiwic2hvd01hcCIsIlJMIiwicmVxdWlyZSIsIlJMRCIsInNldFN0YXRlIiwiY2VudGVyIiwiVFJVRSIsIk9QQUNJVFkiLCJNYXAiLCJUaWxlTGF5ZXIiLCJXTVNUaWxlTGF5ZXIiLCJMYXllcnNDb250cm9sIiwiRmVhdHVyZUdyb3VwIiwiQ2lyY2xlIiwiQmFzZUxheWVyIiwiT3ZlcmxheSIsIkVkaXRDb250cm9sIiwiaGVpZ2h0IiwiX29uRWRpdFBhdGgiLCJfb25DcmVhdGUiLCJfb25EZWxldGVkIiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0lBR1YsQTtpQ0FDRjs7bUJBQWM7NENBQUE7OzhIQUVWOztjQUFBLEFBQUssUUFBUSxFQUFFLFNBQWYsQUFBYSxBQUFXLEFBQ3hCO2NBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtjQUFBLEFBQUssTUFKSyxBQUlWLEFBQVc7ZUFDZDs7Ozs7NENBRW1CLEFBQ2hCO2lCQUFBLEFBQUs7eUJBQUwsQUFBZ0IsQUFDSCxBQUVoQjtBQUhtQixBQUNaOzs7O2lDQUlDLEFBQ0w7Z0JBQU0sU0FBUyxDQUFBLEFBQUMsSUFBaEIsQUFBZSxBQUFLLEFBQ3BCO2dCQUFNLE9BQU4sQUFBYSxBQUNiO2dCQUFNLFVBSEQsQUFHTCxBQUFnQjs7c0JBRThELEtBTHpFLEFBSzhFO2dCQUw5RSxBQUtHLFVBTEgsQUFLRztnQkFMSCxBQUtRLGdCQUxSLEFBS1E7Z0JBTFIsQUFLbUIsbUJBTG5CLEFBS21CO2dCQUxuQixBQUtpQyxvQkFMakMsQUFLaUM7Z0JBTGpDLEFBS2dELG1CQUxoRCxBQUtnRDtnQkFMaEQsQUFLOEQsYUFMOUQsQUFLOEQ7Z0JBTDlELEFBTUcsWUFOSCxBQU0wQixjQU4xQixBQU1HO2dCQU5ILEFBTWMsVUFOZCxBQU0wQixjQU4xQixBQU1jO2dCQU5kLEFBT0csY0FBZ0IsS0FQbkIsQUFPd0IsSUFQeEIsQUFPRyxBQUVSOzttQ0FDSyxjQUFELE9BQUssUUFBTCxBQUFhLFFBQVEsTUFBckIsQUFBMkIsR0FBRyxPQUFPLEVBQUUsUUFBdkMsQUFBcUMsQUFBVTs4QkFBL0M7Z0NBQUEsQUFFSTtBQUZKO2FBQUEsa0JBRUssY0FBRCxpQkFBZSxVQUFmLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxhQUFXLFNBQVgsTUFBbUIsTUFBbkIsQUFBd0I7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDOzZCQUFELEFBQ2dCLEFBQ1o7cUJBRkosQUFFUTs7OEJBRlI7Z0NBRlIsQUFDSSxBQUNJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsV0FBUyxNQUFULEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7d0JBQUQsQUFDVyxBQUNQO3lCQUZKLEFBRWEsQUFDVDtxQkFISixBQUdROzs4QkFIUjtnQ0FSUixBQU9JLEFBQ0ksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRCxXQUFTLE1BQVQsQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ksQUFBQzt3QkFBRCxBQUNXLEFBQ1A7eUJBRkosQUFFWSxBQUNSOzZCQUhKLEFBR2dCLEFBQ1o7d0JBSkosQUFJVyxBQUNQO3FCQUxKLEFBS1E7OzhCQUxSO2dDQWZSLEFBY0ksQUFDSSxBQVFKO0FBUkk7QUFDSSxpQ0FPUCxjQUFELFdBQVMsTUFBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDO3dCQUFELEFBQ1csQUFDUDt3QkFGSixBQUVXLEFBQ1A7NkJBSEosQUFHZ0IsQUFDWjtxQkFKSixBQUlROzs4QkFKUjtnQ0F4QlIsQUF1QkksQUFDSSxBQU9KO0FBUEk7QUFDSSxpQ0FNUCxjQUFELFdBQVMsTUFBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDO3dCQUFELEFBQ1csQUFDUDt3QkFGSixBQUVXLEFBQ1A7NkJBSEosQUFHZ0IsQUFDWjtxQkFKSixBQUlROzs4QkFKUjtnQ0FsQ1osQUFFSSxBQStCSSxBQUNJLEFBU1I7QUFUUTtBQUNJLGtDQVFYLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLDZDQUNJLEFBQUM7MEJBQUQsQUFDYSxBQUNUOzBCQUFVLEtBRmQsQUFFbUIsQUFDZjsyQkFBVyxLQUhmLEFBR29CLEFBQ2hCOzJCQUFXLEtBSmYsQUFJb0IsQUFDaEI7OytCQUxKLEFBS1UsQUFDUztBQURULEFBQ0Y7OzhCQU5SO2dDQURKLEFBQ0ksQUFTQTtBQVRBO0FBQ0ksOENBUUosQUFBQyxVQUFPLFFBQVEsQ0FBQSxBQUFDLE9BQU8sQ0FBeEIsQUFBZ0IsQUFBUyxPQUFPLFFBQWhDLEFBQXdDOzhCQUF4QztnQ0F0RFosQUFDSSxBQTJDSSxBQVVJLEFBSWY7QUFKZTs7Ozs7O0FBN0VGLEFBb0ZsQixBOztrQkFBQSxBQUFlOztBQUdmO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWtyYS9Eb2t1bWVudHkvcmVhY3QtbmV4dC1sZWFmbGV0LWFwb2xsby1zcGlrZSJ9