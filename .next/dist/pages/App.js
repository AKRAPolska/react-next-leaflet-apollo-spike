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


//let TileLayer, WMSTileLayer, LayersControl, FeatureGroup, Circle, BaseLayer, Overlay, EditControl

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

        _this.state = {
            showMap: false
        };

        _this.RL = { LayersControl: {} };
        _this.RLD = {};
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.RL = require('react-leaflet');
            this.RLD = require('react-leaflet-draw');

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

            return this.state.showMap ? _react2.default.createElement(Map, { center: center, zoom: 7, style: { height: "100vh" }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(LayersControl, { position: 'topright', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(BaseLayer, { checked: true, name: 'tileLayer', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(TileLayer, {
                attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            })), _react2.default.createElement(Overlay, { name: 'administracyjna', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Administracyjna',
                opacity: OPACITY,
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            })), _react2.default.createElement(Overlay, { name: 'ortofotomapa', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Raster',
                version: '1.3.0',
                transparent: 'true',
                format: 'image/png',
                url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            })), _react2.default.createElement(Overlay, { name: 'dzialki', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'Dzialki',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            })), _react2.default.createElement(Overlay, { name: 'numery dzia\u0142ek', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(WMSTileLayer, {
                layers: 'NumeryDzialek',
                format: 'image/png',
                transparent: 'true',
                url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }))), _react2.default.createElement(FeatureGroup, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
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
                    lineNumber: 78
                }
            }), _react2.default.createElement(Circle, { center: [51.51, -0.06], radius: 200, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }))) : _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Loading...');
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

// url parametry
// ?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetCapabilities

// podrecznik geoportal
// http://www.geoportal.gov.pl/documents/10179/26435/Geoportal-podrecznik.pdf
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsInN0YXRlIiwic2hvd01hcCIsIlJMIiwiTGF5ZXJzQ29udHJvbCIsIlJMRCIsInJlcXVpcmUiLCJzZXRTdGF0ZSIsImNlbnRlciIsIlRSVUUiLCJPUEFDSVRZIiwiTWFwIiwiVGlsZUxheWVyIiwiV01TVGlsZUxheWVyIiwiRmVhdHVyZUdyb3VwIiwiQ2lyY2xlIiwiQmFzZUxheWVyIiwiT3ZlcmxheSIsIkVkaXRDb250cm9sIiwiaGVpZ2h0IiwiX29uRWRpdFBhdGgiLCJfb25DcmVhdGUiLCJfb25EZWxldGVkIiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCOztJQUNNLEE7aUNBQ0Y7O21CQUFjOzRDQUFBOzs4SEFFVjs7Y0FBQSxBQUFLO3FCQUFMLEFBQWEsQUFDQSxBQUdiO0FBSmEsQUFDVDs7Y0FHSixBQUFLLEtBQUssRUFBRSxlQUFaLEFBQVUsQUFBaUIsQUFDM0I7Y0FBQSxBQUFLLE1BUEssQUFPVixBQUFXO2VBQ2Q7Ozs7OzRDQUVtQixBQUNoQjtpQkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNWO2lCQUFBLEFBQUssTUFBTCxBQUFXLEFBRVg7O2lCQUFBLEFBQUs7eUJBQUwsQUFBYyxBQUNELEFBRWhCO0FBSGlCLEFBQ1Y7Ozs7aUNBSUMsQUFDTDtnQkFBTSxTQUFTLENBQUEsQUFBQyxJQUFoQixBQUFlLEFBQUssQUFDcEI7Z0JBQU0sT0FBTixBQUFhLEFBQ2I7Z0JBQU0sVUFIRCxBQUdMLEFBQWdCOztzQkFFOEQsS0FMekUsQUFLOEU7Z0JBTDlFLEFBS0csVUFMSCxBQUtHO2dCQUxILEFBS1EsZ0JBTFIsQUFLUTtnQkFMUixBQUttQixtQkFMbkIsQUFLbUI7Z0JBTG5CLEFBS2lDLG9CQUxqQyxBQUtpQztnQkFMakMsQUFLZ0QsbUJBTGhELEFBS2dEO2dCQUxoRCxBQUs4RCxhQUw5RCxBQUs4RDtnQkFMOUQsQUFNRyxZQU5ILEFBTTBCLGNBTjFCLEFBTUc7Z0JBTkgsQUFNYyxVQU5kLEFBTTBCLGNBTjFCLEFBTWM7Z0JBTmQsQUFPRyxjQUFnQixLQVBuQixBQU93QixJQVB4QixBQU9HLEFBRVI7O3dCQUFPLEFBQUssTUFBTCxBQUFXLDBCQUNiLGNBQUQsT0FBSyxRQUFMLEFBQWEsUUFBUSxNQUFyQixBQUEyQixHQUFHLE9BQU8sRUFBRSxRQUF2QyxBQUFxQyxBQUFVOzhCQUEvQztnQ0FBQSxBQUVJO0FBRko7YUFBQSxrQkFFSyxjQUFELGlCQUFlLFVBQWYsQUFBd0I7OEJBQXhCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELGFBQVcsU0FBWCxNQUFtQixNQUFuQixBQUF3Qjs4QkFBeEI7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7NkJBQUQsQUFDZ0IsQUFDWjtxQkFGSixBQUVROzs4QkFGUjtnQ0FGUixBQUNJLEFBQ0ksQUFLSjtBQUxJO0FBQ0ksaUNBSVAsY0FBRCxXQUFTLE1BQVQsQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7NkNBQ0ksQUFBQzt3QkFBRCxBQUNXLEFBQ1A7eUJBRkosQUFFYSxBQUNUO3FCQUhKLEFBR1E7OzhCQUhSO2dDQVJSLEFBT0ksQUFDSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELFdBQVMsTUFBVCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjs2Q0FDSSxBQUFDO3dCQUFELEFBQ1csQUFDUDt5QkFGSixBQUVZLEFBQ1I7NkJBSEosQUFHZ0IsQUFDWjt3QkFKSixBQUlXLEFBQ1A7cUJBTEosQUFLUTs7OEJBTFI7Z0NBZlIsQUFjSSxBQUNJLEFBUUo7QUFSSTtBQUNJLGlDQU9QLGNBQUQsV0FBUyxNQUFULEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7d0JBQUQsQUFDVyxBQUNQO3dCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdnQixBQUNaO3FCQUpKLEFBSVE7OzhCQUpSO2dDQXhCUixBQXVCSSxBQUNJLEFBT0o7QUFQSTtBQUNJLGlDQU1QLGNBQUQsV0FBUyxNQUFULEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOzZDQUNJLEFBQUM7d0JBQUQsQUFDVyxBQUNQO3dCQUZKLEFBRVcsQUFDUDs2QkFISixBQUdnQixBQUNaO3FCQUpKLEFBSVE7OzhCQUpSO2dDQWxDWixBQUVJLEFBK0JJLEFBQ0ksQUFTUjtBQVRRO0FBQ0ksa0NBUVgsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsNkNBQ0ksQUFBQzswQkFBRCxBQUNhLEFBQ1Q7MEJBQVUsS0FGZCxBQUVtQixBQUNmOzJCQUFXLEtBSGYsQUFHb0IsQUFDaEI7MkJBQVcsS0FKZixBQUlvQixBQUNoQjs7K0JBTEosQUFLVSxBQUNTO0FBRFQsQUFDRjs7OEJBTlI7Z0NBREosQUFDSSxBQVNBO0FBVEE7QUFDSSw4Q0FRSixBQUFDLFVBQU8sUUFBUSxDQUFBLEFBQUMsT0FBTyxDQUF4QixBQUFnQixBQUFTLE9BQU8sUUFBaEMsQUFBd0M7OEJBQXhDO2dDQXRETCxBQUNILEFBMkNJLEFBVUk7QUFBQTtnQkF0REwsbUJBeURILGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxhQUFBLEVBekRKLEFBeURJLEFBQ1A7Ozs7O0FBdkZhLEEsQUEwRmxCOztrQkFBQSxBQUFlOztBQUdmO0FBQ0E7O0FBRUE7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWtyYS9Eb2t1bWVudHkvcmVhY3QtbmV4dC1sZWFmbGV0LWFwb2xsby1zcGlrZSJ9