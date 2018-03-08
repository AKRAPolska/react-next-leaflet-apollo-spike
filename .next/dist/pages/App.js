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

			return this.state.showMap ? _react2.default.createElement(Map, { center: center, zoom: 7, style: { height: '100vh' }, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement(LayersControl, { position: 'topright', __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(BaseLayer, { checked: true, name: 'tileLayer', __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, _react2.default.createElement(TileLayer, {
				attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
				url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			})), _react2.default.createElement(Overlay, { name: 'administracyjna', __source: {
					fileName: _jsxFileName,
					lineNumber: 42
				}
			}, _react2.default.createElement(WMSTileLayer, {
				layers: 'Administracyjna',
				opacity: OPACITY,
				url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/Administracyjna/MapServer/WMSServer',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			})), _react2.default.createElement(Overlay, { name: 'ortofotomapa', __source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement(WMSTileLayer, {
				layers: 'Raster',
				version: '1.3.0',
				transparent: 'true',
				format: 'image/png',
				url: 'http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			})), _react2.default.createElement(Overlay, { name: 'dzialki', __source: {
					fileName: _jsxFileName,
					lineNumber: 58
				}
			}, _react2.default.createElement(WMSTileLayer, {
				layers: 'Dzialki',
				format: 'image/png',
				transparent: 'true',
				url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 59
				}
			})), _react2.default.createElement(Overlay, { name: 'numery dzia\u0142ek', __source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, _react2.default.createElement(WMSTileLayer, {
				layers: 'NumeryDzialek',
				format: 'image/png',
				transparent: 'true',
				url: 'http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_GO_WMS/MapServer/WMSServer',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 67
				}
			}))), _react2.default.createElement(FeatureGroup, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 76
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
					lineNumber: 77
				}
			}), _react2.default.createElement(Circle, { center: [51.51, -0.06], radius: 200, __source: {
					fileName: _jsxFileName,
					lineNumber: 86
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL0FwcC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFwcCIsInN0YXRlIiwic2hvd01hcCIsIlJMIiwiTGF5ZXJzQ29udHJvbCIsIlJMRCIsInJlcXVpcmUiLCJzZXRTdGF0ZSIsImNlbnRlciIsIlRSVUUiLCJPUEFDSVRZIiwiTWFwIiwiVGlsZUxheWVyIiwiV01TVGlsZUxheWVyIiwiRmVhdHVyZUdyb3VwIiwiQ2lyY2xlIiwiQmFzZUxheWVyIiwiT3ZlcmxheSIsIkVkaXRDb250cm9sIiwiaGVpZ2h0IiwiX29uRWRpdFBhdGgiLCJfb25DcmVhdGUiLCJfb25EZWxldGVkIiwicmVjdGFuZ2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCOztJQUNNLEE7OEJBQ0w7O2dCQUFjO3NDQUFBOzt3SEFFYjs7UUFBQSxBQUFLO1lBQUwsQUFBYSxBQUNILEFBR1Y7QUFKYSxBQUNaOztRQUdELEFBQUssS0FBSyxFQUFFLGVBQVosQUFBVSxBQUFpQixBQUMzQjtRQUFBLEFBQUssTUFQUSxBQU9iLEFBQVc7U0FDWDs7Ozs7c0NBRW1CLEFBQ25CO1FBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtRQUFBLEFBQUssTUFBTCxBQUFXLEFBRVg7O1FBQUEsQUFBSzthQUFMLEFBQWMsQUFDSixBQUVWO0FBSGMsQUFDYjs7OzsyQkFJTyxBQUNSO09BQU0sU0FBUyxDQUFBLEFBQUUsSUFBakIsQUFBZSxBQUFNLEFBQ3JCO09BQU0sT0FBTixBQUFhLEFBQ2I7T0FBTSxVQUhFLEFBR1IsQUFBZ0I7O2FBRThELEtBTHRFLEFBSzJFO09BTDNFLEFBS0EsVUFMQSxBQUtBO09BTEEsQUFLSyxnQkFMTCxBQUtLO09BTEwsQUFLZ0IsbUJBTGhCLEFBS2dCO09BTGhCLEFBSzhCLG9CQUw5QixBQUs4QjtPQUw5QixBQUs2QyxtQkFMN0MsQUFLNkM7T0FMN0MsQUFLMkQsYUFMM0QsQUFLMkQ7T0FMM0QsQUFNQSxZQU5BLEFBTXVCLGNBTnZCLEFBTUE7T0FOQSxBQU1XLFVBTlgsQUFNdUIsY0FOdkIsQUFNVztPQU5YLEFBT0EsY0FBZ0IsS0FQaEIsQUFPcUIsSUFQckIsQUFPQSxBQUVSOztlQUFPLEFBQUssTUFBTCxBQUFXLDBCQUNoQixjQUFELE9BQUssUUFBTCxBQUFhLFFBQVEsTUFBckIsQUFBMkIsR0FBRyxPQUFPLEVBQUUsUUFBdkMsQUFBcUMsQUFBVTtlQUEvQztpQkFBQSxBQUNDO0FBREQ7SUFBQSxrQkFDRSxjQUFELGlCQUFlLFVBQWYsQUFBd0I7ZUFBeEI7aUJBQUEsQUFDQztBQUREO3NCQUNFLGNBQUQsYUFBVyxTQUFYLE1BQW1CLE1BQW5CLEFBQXdCO2VBQXhCO2lCQUFBLEFBQ0M7QUFERDtvQ0FDQyxBQUFDO2lCQUFELEFBQ2EsQUFDWjtTQUZELEFBRUs7O2VBRkw7aUJBRkYsQUFDQyxBQUNDLEFBS0Q7QUFMQztBQUNDLHdCQUlELGNBQUQsV0FBUyxNQUFULEFBQWM7ZUFBZDtpQkFBQSxBQUNDO0FBREQ7b0NBQ0MsQUFBQztZQUFELEFBQ1EsQUFDUDthQUZELEFBRVUsQUFDVDtTQUhELEFBR0s7O2VBSEw7aUJBUkYsQUFPQyxBQUNDLEFBTUQ7QUFOQztBQUNDLHdCQUtELGNBQUQsV0FBUyxNQUFULEFBQWM7ZUFBZDtpQkFBQSxBQUNDO0FBREQ7b0NBQ0MsQUFBQztZQUFELEFBQ1EsQUFDUDthQUZELEFBRVMsQUFDUjtpQkFIRCxBQUdhLEFBQ1o7WUFKRCxBQUlRLEFBQ1A7U0FMRCxBQUtLOztlQUxMO2lCQWZGLEFBY0MsQUFDQyxBQVFEO0FBUkM7QUFDQyx3QkFPRCxjQUFELFdBQVMsTUFBVCxBQUFjO2VBQWQ7aUJBQUEsQUFDQztBQUREO29DQUNDLEFBQUM7WUFBRCxBQUNRLEFBQ1A7WUFGRCxBQUVRLEFBQ1A7aUJBSEQsQUFHYSxBQUNaO1NBSkQsQUFJSzs7ZUFKTDtpQkF4QkYsQUF1QkMsQUFDQyxBQU9EO0FBUEM7QUFDQyx3QkFNRCxjQUFELFdBQVMsTUFBVCxBQUFjO2VBQWQ7aUJBQUEsQUFDQztBQUREO29DQUNDLEFBQUM7WUFBRCxBQUNRLEFBQ1A7WUFGRCxBQUVRLEFBQ1A7aUJBSEQsQUFHYSxBQUNaO1NBSkQsQUFJSzs7ZUFKTDtpQkFqQ0gsQUFDQyxBQStCQyxBQUNDLEFBU0Y7QUFURTtBQUNDLHlCQVFGLGNBQUQ7O2VBQUE7aUJBQUEsQUFDQztBQUREO0FBQUEsb0NBQ0MsQUFBQztjQUFELEFBQ1UsQUFDVDtjQUFVLEtBRlgsQUFFZ0IsQUFDZjtlQUFXLEtBSFosQUFHaUIsQUFDaEI7ZUFBVyxLQUpaLEFBSWlCLEFBQ2hCOztnQkFMRCxBQUtPLEFBQ007QUFETixBQUNMOztlQU5GO2lCQURELEFBQ0MsQUFTQTtBQVRBO0FBQ0MscUNBUUQsQUFBQyxVQUFPLFFBQVEsQ0FBQSxBQUFFLE9BQU8sQ0FBekIsQUFBZ0IsQUFBVSxPQUFRLFFBQWxDLEFBQTBDO2VBQTFDO2lCQXJESSxBQUNOLEFBMENDLEFBVUM7QUFBQTtPQXJESSxtQkF5RE4sY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsSUFBQSxFQXpERCxBQXlEQyxBQUVEOzs7OztBQXhGZ0IsQSxBQTJGbEI7O2tCQUFBLEFBQWU7O0FBRWY7QUFDQTs7QUFFQTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9ha3JhL0Rva3VtZW50eS9yZWFjdC1uZXh0LWxlYWZsZXQtYXBvbGxvLXNwaWtlIn0=