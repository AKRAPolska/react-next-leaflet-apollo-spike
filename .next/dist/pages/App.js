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


var Map = void 0,
    LayersControl = void 0,
    TileLayer = void 0,
    WMSTileLayer = void 0,
    BaseLayer = void 0,
    Overlay = void 0;

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

        _this.state = { showMap: false };
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var RL = require('react-leaflet');
            Map = RL.Map;
            TileLayer = RL.TileLayer;
            WMSTileLayer = RL.WMSTileLayer;
            LayersControl = RL.LayersControl;
            BaseLayer = LayersControl.BaseLayer;
            Overlay = LayersControl.Overlay;

            this.setState({
                showMap: true
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var center = [52, 19];
            var TRUE = true;
            var OPACITY = 0.5;

            return this.state.showMap ? _react2.default.createElement(Map, { center: center, zoom: 5, style: { height: "100vh" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement(LayersControl, { position: 'topright', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(BaseLayer, { checked: true, name: 'tileLayer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(TileLayer, {
                attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            })), _react2.default.createElement(Overlay, { name: 'administracyjna', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Administracyjna',
                opacity: OPACITY,
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })), _react2.default.createElement(Overlay, { name: 'ortofotomapa', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Raster',
                version: '1.3.0',
                transparent: 'true',
                format: 'image/png',
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            })), _react2.default.createElement(Overlay, { name: 'dzialki', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Dzialki',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(Overlay, { name: 'numery dzia\u0142ek', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'NumeryDzialek',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            })))) : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Loading map');
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

// url parametry
// ?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities

// podrecznik geoportal
// http://www.geoportal.gov.pl/documents/10179/26435/Geoportal-podrecznik.pdf
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIk1hcCIsIkxheWVyc0NvbnRyb2wiLCJUaWxlTGF5ZXIiLCJXTVNUaWxlTGF5ZXIiLCJCYXNlTGF5ZXIiLCJPdmVybGF5IiwiQXBwIiwic3RhdGUiLCJzaG93TWFwIiwiUkwiLCJyZXF1aXJlIiwic2V0U3RhdGUiLCJjZW50ZXIiLCJUUlVFIiwiT1BBQ0lUWSIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFJLFdBQUo7SUFBUyxxQkFBVDtJQUF3QixpQkFBeEI7SUFBbUMsb0JBQW5DO0lBQWlELGlCQUFqRDtJQUE0RCxlQUE1RDs7SUFHTSxBO2lDQUNGOzttQkFBYzs0Q0FBQTs7OEhBRVY7O2NBQUEsQUFBSyxRQUFRLEVBQUUsU0FGTCxBQUVWLEFBQWEsQUFBVztlQUMzQjs7Ozs7NENBRW1CLEFBQ2hCO2dCQUFJLEtBQUosQUFBSSxBQUFLLEFBQ1Q7a0JBQU0sR0FBTixBQUFTLEFBQ1Q7d0JBQVksR0FBWixBQUFlLEFBQ2Y7MkJBQWUsR0FBZixBQUFrQixBQUNsQjs0QkFBZ0IsR0FBaEIsQUFBbUIsQUFDbkI7d0JBQVksY0FBWixBQUEwQixBQUMxQjtzQkFBVSxjQUFWLEFBQXdCLEFBRXhCOztpQkFBQSxBQUFLO3lCQUFMLEFBQWMsQUFDRCxBQUVoQjtBQUhpQixBQUNWOzs7O2lDQUlDLEFBQ0w7Z0JBQU0sU0FBUyxDQUFBLEFBQUMsSUFBaEIsQUFBZSxBQUFLLEFBQ3BCO2dCQUFNLE9BQU4sQUFBYSxBQUNiO2dCQUFNLFVBQU4sQUFBZ0IsQUFFaEI7O3dCQUFPLEFBQUssTUFBTCxBQUFXLDBCQUNiLGNBQUQsT0FBSyxRQUFMLEFBQWEsUUFBUSxNQUFyQixBQUEyQixHQUFHLE9BQU8sRUFBRSxRQUF2QyxBQUFxQyxBQUFVOzhCQUEvQztnQ0FBQSxBQUVJO0FBRko7YUFBQSxrQkFFSyxjQUFELGlCQUFlLFVBQWYsQUFBd0I7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELGFBQVcsU0FBWCxNQUFtQixNQUFuQixBQUF3Qjs4QkFBeEI7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7NkJBQUQsQUFDZ0IsQUFDWjtxQkFGSixBQUVROzs4QkFGUjtnQ0FGUixBQUNJLEFBQ0ksQUFLSjtBQUxJO0FBQ0ksaUNBSVAsY0FBRCxXQUFTLE1BQVQsQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ksQUFBQzt3QkFBRCxBQUNXLEFBQ1A7eUJBRkosQUFFYSxBQUNUO3FCQUhKLEFBR1E7OzhCQUhSO2dDQVJSLEFBT0ksQUFDSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELFdBQVMsTUFBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDO3dCQUFELEFBQ1csQUFDUDt5QkFGSixBQUVZLEFBQ1I7NkJBSEosQUFHZ0IsQUFDWjt3QkFKSixBQUlXLEFBQ1A7cUJBTEosQUFLUTs7OEJBTFI7Z0NBZlIsQUFjSSxBQUNJLEFBUUo7QUFSSTtBQUNJLGlDQU9QLGNBQUQsV0FBUyxNQUFULEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7d0JBQUQsQUFDVyxBQUNQO3dCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdnQixBQUNaO3FCQUpKLEFBSVE7OzhCQUpSO2dDQXhCUixBQXVCSSxBQUNJLEFBT0o7QUFQSTtBQUNJLGlDQU1QLGNBQUQsV0FBUyxNQUFULEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7d0JBQUQsQUFDVyxBQUNQO3dCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdnQixBQUNaO3FCQUpKLEFBSVE7OzhCQUpSO2dDQW5DVCxBQUNILEFBRUksQUErQkksQUFDSTtBQUFBO0FBQ0ksaUJBcENiLG1CQTRDSCxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQTVDSixBQTRDSSxBQUNQOzs7OztBQXRFYSxBLEFBeUVsQjs7a0JBQUEsQUFBZTs7QUFHZjtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FrcmEvRG9rdW1lbnR5L3JlYWN0LW5leHQtbGVhZmxldC1hcG9sbG8tc3Bpa2UifQ==