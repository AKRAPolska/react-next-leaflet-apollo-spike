webpackHotUpdate(5,{

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

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
            this.RL = __webpack_require__(446);
            this.RLD = __webpack_require__(615);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/akra/Dokumenty/react-next-leaflet-apollo-spike/pages/App.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/akra/Dokumenty/react-next-leaflet-apollo-spike/pages/App.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/App")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kZWRmN2YwZjkwNTA4Y2U1OTI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvQXBwLmpzPzRmMWYwNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuLy9sZXQgVGlsZUxheWVyLCBXTVNUaWxlTGF5ZXIsIExheWVyc0NvbnRyb2wsIEZlYXR1cmVHcm91cCwgQ2lyY2xlLCBCYXNlTGF5ZXIsIE92ZXJsYXksIEVkaXRDb250cm9sXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzaG93TWFwOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5STCA9IHsgTGF5ZXJzQ29udHJvbDoge319O1xuICAgICAgICB0aGlzLlJMRCA9IHt9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLlJMID0gcmVxdWlyZSgncmVhY3QtbGVhZmxldCcpO1xuICAgICAgICB0aGlzLlJMRCA9IHJlcXVpcmUoJ3JlYWN0LWxlYWZsZXQtZHJhdycpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2hvd01hcDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlciA9IFs1MiwgMTldXG4gICAgICAgIGNvbnN0IFRSVUUgPSB0cnVlO1xuICAgICAgICBjb25zdCBPUEFDSVRZID0gMC41O1xuXG4gICAgICAgIGNvbnN0IHsgTWFwLCBUaWxlTGF5ZXIsIFdNU1RpbGVMYXllciwgTGF5ZXJzQ29udHJvbCwgRmVhdHVyZUdyb3VwLCBDaXJjbGUgfSA9IHRoaXMuUkw7XG4gICAgICAgIGNvbnN0IHsgQmFzZUxheWVyLCBPdmVybGF5IH0gPSBMYXllcnNDb250cm9sO1xuICAgICAgICBjb25zdCB7IEVkaXRDb250cm9sIH0gPSB0aGlzLlJMRDtcblxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZS5zaG93TWFwID8gKFxuICAgICAgICAgICAgPE1hcCBjZW50ZXI9e2NlbnRlcn0gem9vbT17N30gc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XG5cbiAgICAgICAgICAgICAgICA8TGF5ZXJzQ29udHJvbCBwb3NpdGlvbj1cInRvcHJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxCYXNlTGF5ZXIgY2hlY2tlZCBuYW1lPVwidGlsZUxheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGlsZUxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRpb249XCImY29weSA8YSBocmVmPSZxdW90O2h0dHA6Ly9vc20ub3JnL2NvcHlyaWdodCZxdW90Oz5PcGVuU3RyZWV0TWFwPC9hPiBjb250cmlidXRvcnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cImh0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQmFzZUxheWVyPlxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheSBuYW1lPVwiYWRtaW5pc3RyYWN5am5hXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V01TVGlsZUxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPVwiQWRtaW5pc3RyYWN5am5hXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5PXtPUEFDSVRZfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD1cImh0dHA6Ly9tYXB5Lmdlb3BvcnRhbC5nb3YucGwvd3NzL3NlcnZpY2UvaW1nL2d1ZXN0L0FkbWluaXN0cmFjeWpuYS9NYXBTZXJ2ZXIvV01TU2VydmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvT3ZlcmxheT5cbiAgICAgICAgICAgICAgICAgICAgPE92ZXJsYXkgbmFtZT1cIm9ydG9mb3RvbWFwYVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdNU1RpbGVMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVycz1cIlJhc3RlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbj0nMS4zLjAnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCJodHRwOi8vbWFweS5nZW9wb3J0YWwuZ292LnBsL3dzcy9zZXJ2aWNlL2ltZy9ndWVzdC9PUlRPL01hcFNlcnZlci9XTVNTZXJ2ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheSBuYW1lPVwiZHppYWxraVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFdNU1RpbGVMYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheWVycz1cIkR6aWFsa2lcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdD1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPVwiaHR0cDovL21hcHkuZ2VvcG9ydGFsLmdvdi5wbC93c3Mvc2VydmljZS9wdWIvZ3Vlc3QvRzJfR09fV01TL01hcFNlcnZlci9XTVNTZXJ2ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9PdmVybGF5PlxuICAgICAgICAgICAgICAgICAgICA8T3ZlcmxheSBuYW1lPVwibnVtZXJ5IGR6aWHFgmVrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8V01TVGlsZUxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5ZXJzPVwiTnVtZXJ5RHppYWxla1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BhcmVudD0ndHJ1ZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9XCJodHRwOi8vbWFweS5nZW9wb3J0YWwuZ292LnBsL3dzcy9zZXJ2aWNlL3B1Yi9ndWVzdC9HMl9HT19XTVMvTWFwU2VydmVyL1dNU1NlcnZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L092ZXJsYXk+XG4gICAgICAgICAgICAgICAgPC9MYXllcnNDb250cm9sPlxuXG4gICAgICAgICAgICAgICAgPEZlYXR1cmVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPEVkaXRDb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj0ndG9wcmlnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXRlZD17dGhpcy5fb25FZGl0UGF0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ3JlYXRlZD17dGhpcy5fb25DcmVhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRlbGV0ZWQ9e3RoaXMuX29uRGVsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXc9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN0YW5nbGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlIGNlbnRlcj17WzUxLjUxLCAtMC4wNl19IHJhZGl1cz17MjAwfSAvPlxuICAgICAgICAgICAgICAgIDwvRmVhdHVyZUdyb3VwPlxuICAgICAgICAgICAgPC9NYXA+XG4gICAgICAgICkgOiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cbi8vIHVybCBwYXJhbWV0cnlcbi8vID9TRVJWSUNFPVdNUyZWRVJTSU9OPTEuMS4xJlJFUVVFU1Q9R2V0Q2FwYWJpbGl0aWVzXG5cbi8vIHBvZHJlY3puaWsgZ2VvcG9ydGFsXG4vLyBodHRwOi8vd3d3Lmdlb3BvcnRhbC5nb3YucGwvZG9jdW1lbnRzLzEwMTc5LzI2NDM1L0dlb3BvcnRhbC1wb2RyZWN6bmlrLnBkZlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUZBOzs7O0FBS0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQUE7O0FBRkE7QUFLQTtBQUxBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7QUFIQTtBQU1BO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7QUFMQTtBQVFBO0FBUkE7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7O0FBSkE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBU0E7QUFUQTtBQUNBOztBQVFBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFBQTs7QUFOQTtBQVNBO0FBVEE7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQXREQTs7QUF5REE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9