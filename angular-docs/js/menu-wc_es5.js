'use strict';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">Application documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-AppModule-4dcba78a1e4d179464bcee1ba4a0f7aba77bd0c262543e9f88d36411d62a407f45141db8a85f6bb9809fb513d4281ebfb6e3daafaeafbceca417811a3daa5a34"' : 'data-bs-target="#xs-components-links-module-AppModule-4dcba78a1e4d179464bcee1ba4a0f7aba77bd0c262543e9f88d36411d62a407f45141db8a85f6bb9809fb513d4281ebfb6e3daafaeafbceca417811a3daa5a34"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-4dcba78a1e4d179464bcee1ba4a0f7aba77bd0c262543e9f88d36411d62a407f45141db8a85f6bb9809fb513d4281ebfb6e3daafaeafbceca417811a3daa5a34"' : 'id="xs-components-links-module-AppModule-4dcba78a1e4d179464bcee1ba4a0f7aba77bd0c262543e9f88d36411d62a407f45141db8a85f6bb9809fb513d4281ebfb6e3daafaeafbceca417811a3daa5a34"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/MainComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/EntityRoutingModule.html\" data-type=\"entity-link\" >EntityRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MainModule.html\" data-type=\"entity-link\" >MainModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links-module-MainModule-80c29688d52ca5cbc8669ba2ce27f7095491f375db68ff65519184e88dfc355c8e28c464be8240ee92272b32941dc63d4ed94c4c54b74957e67a510f8540aebb"' : 'data-bs-target="#xs-components-links-module-MainModule-80c29688d52ca5cbc8669ba2ce27f7095491f375db68ff65519184e88dfc355c8e28c464be8240ee92272b32941dc63d4ed94c4c54b74957e67a510f8540aebb"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-MainModule-80c29688d52ca5cbc8669ba2ce27f7095491f375db68ff65519184e88dfc355c8e28c464be8240ee92272b32941dc63d4ed94c4c54b74957e67a510f8540aebb"' : 'id="xs-components-links-module-MainModule-80c29688d52ca5cbc8669ba2ce27f7095491f375db68ff65519184e88dfc355c8e28c464be8240ee92272b32941dc63d4ed94c4c54b74957e67a510f8540aebb"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/MainComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#components-links"' : 'data-bs-target="#xs-components-links"', ">\n                            <span class=\"icon ion-md-cog\"></span>\n                            <span>Components</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="components-links"' : 'id="xs-components-links"', ">\n                            <li class=\"link\">\n                                <a href=\"components/AlertComponent.html\" data-type=\"entity-link\" >AlertComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/AlertErrorComponent.html\" data-type=\"entity-link\" >AlertErrorComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/ErrorComponent.html\" data-type=\"entity-link\" >ErrorComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/FilterComponent.html\" data-type=\"entity-link\" >FilterComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" >FooterComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" >HomeComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/ItemCountComponent.html\" data-type=\"entity-link\" >ItemCountComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/MessageComponent.html\" data-type=\"entity-link\" >MessageComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/NavbarComponent.html\" data-type=\"entity-link\" >NavbarComponent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"components/SendFormComponent.html\" data-type=\"entity-link\" >SendFormComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#directives-links"' : 'data-bs-target="#xs-directives-links"', ">\n                                <span class=\"icon ion-md-code-working\"></span>\n                                <span>Directives</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"directives/SortByDirective.html\" data-type=\"entity-link\" >SortByDirective</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"directives/SortDirective.html\" data-type=\"entity-link\" >SortDirective</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#classes-links"' : 'data-bs-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AlertError.html\" data-type=\"entity-link\" >AlertError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/EventWithContent.html\" data-type=\"entity-link\" >EventWithContent</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FilterOption.html\" data-type=\"entity-link\" >FilterOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/FilterOptions.html\" data-type=\"entity-link\" >FilterOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/User.html\" data-type=\"entity-link\" >User</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#injectables-links"' : 'data-bs-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AlertService.html\" data-type=\"entity-link\" >AlertService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ApplicationConfigService.html\" data-type=\"entity-link\" >ApplicationConfigService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/AppPageTitleStrategy.html\" data-type=\"entity-link\" >AppPageTitleStrategy</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/DataUtils.html\" data-type=\"entity-link\" >DataUtils</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/EventManager.html\" data-type=\"entity-link\" >EventManager</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/MessagesService.html\" data-type=\"entity-link\" >MessagesService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/NgbDateDayjsAdapter.html\" data-type=\"entity-link\" >NgbDateDayjsAdapter</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/PaginationConfig.html\" data-type=\"entity-link\" >PaginationConfig</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/ParseLinks.html\" data-type=\"entity-link\" >ParseLinks</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SortService.html\" data-type=\"entity-link\" >SortService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/UserService.html\" data-type=\"entity-link\" >UserService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interceptors-links"' : 'data-bs-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/ErrorHandlerInterceptor.html\" data-type=\"entity-link\" >ErrorHandlerInterceptor</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interceptors/NotificationInterceptor.html\" data-type=\"entity-link\" >NotificationInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#interfaces-links"' : 'data-bs-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Alert.html\" data-type=\"entity-link\" >Alert</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/FileLoadError.html\" data-type=\"entity-link\" >FileLoadError</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IFilterOption.html\" data-type=\"entity-link\" >IFilterOption</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IFilterOptions.html\" data-type=\"entity-link\" >IFilterOptions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IUser.html\" data-type=\"entity-link\" >IUser</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Message.html\" data-type=\"entity-link\" >Message</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Pagination.html\" data-type=\"entity-link\" >Pagination</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Search.html\" data-type=\"entity-link\" >Search</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/SearchWithPagination.html\" data-type=\"entity-link\" >SearchWithPagination</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#pipes-links"' : 'data-bs-target="#xs-pipes-links"', ">\n                                <span class=\"icon ion-md-add\"></span>\n                                <span>Pipes</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"pipes/DurationPipe.html\" data-type=\"entity-link\" >DurationPipe</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"pipes/FormatMediumDatePipe.html\" data-type=\"entity-link\" >FormatMediumDatePipe</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"pipes/FormatMediumDatetimePipe.html\" data-type=\"entity-link\" >FormatMediumDatetimePipe</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-bs-toggle=\"collapse\" ").concat(isNormalMode ? 'data-bs-target="#miscellaneous-links"' : 'data-bs-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\" rel=\"noopener noreferrer\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));