(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/spark/spark"],{

    /***/ 215:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    (function(wx, createPage) {
    
    var _interopRequireDefault = __webpack_require__(4);
    __webpack_require__(26);
    var _vue = _interopRequireDefault(__webpack_require__(25));
    var _spark = _interopRequireDefault(__webpack_require__(216));
    wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
    createPage(_spark.default);
    }.call(this, __webpack_require__(1)["default"], __webpack_require__(2)["createPage"]))
    
    /***/ }),
    
    /***/ 216:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
    var _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(219);
    for(var __WEBPACK_IMPORT_KEY__ in _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
    var _componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);
    
    var component = _componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"](
      _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
      _spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["render"],
      _spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
      false,
      null,
      null,
      null,
      false,
      _spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["components"]
    )
    
    component.options.__file = "pages/spark/spark.vue"
    __webpack_exports__["default"] = component.exports;
    
    /***/ }),
    
    /***/ 217:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _templateLoader_js_vue_loader_options_webpack_preprocess_loader_index_js_ref_17_0_template_js_vue_loader_options_webpack_uni_app_loader_page_meta_js_vue_loader_options_webpack_uni_mp_loader_lib_style_js_spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
    __webpack_require__.d(__webpack_exports__, "render", function() { return _templateLoader_js_vue_loader_options_webpack_preprocess_loader_index_js_ref_17_0_template_js_vue_loader_options_webpack_uni_app_loader_page_meta_js_vue_loader_options_webpack_uni_mp_loader_lib_style_js_spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });
    __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _templateLoader_js_vue_loader_options_webpack_preprocess_loader_index_js_ref_17_0_template_js_vue_loader_options_webpack_uni_app_loader_page_meta_js_vue_loader_options_webpack_uni_mp_loader_lib_style_js_spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });
    __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _templateLoader_js_vue_loader_options_webpack_preprocess_loader_index_js_ref_17_0_template_js_vue_loader_options_webpack_uni_app_loader_page_meta_js_vue_loader_options_webpack_uni_mp_loader_lib_style_js_spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });
    __webpack_require__.d(__webpack_exports__, "components", function() { return _templateLoader_js_vue_loader_options_webpack_preprocess_loader_index_js_ref_17_0_template_js_vue_loader_options_webpack_uni_app_loader_page_meta_js_vue_loader_options_webpack_uni_mp_loader_lib_style_js_spark_vue_vue_type_template_id_34ccc3c2___WEBPACK_IMPORTED_MODULE_0__["components"]; });
    
    /***/ }),
    
    /***/ 218:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var components
    var render = function () {
      var _vm = this
      var _h = _vm.$createElement
      var _c = _vm._self._c || _h
    }
    var recyclableRender = false
    var staticRenderFns = []
    render._withStripped = true
    
    /***/ }),
    
    /***/ 219:
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    var _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
    __webpack_require__.d(__webpack_exports__, "default", function() { return _spark_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]; });
    
    /***/ }),
    
    /***/ 220:
    /***/ (function(module, exports, __webpack_require__) {
    
    "use strict";
    (function(uni) {
    
    var _interopRequireDefault = __webpack_require__(4);
    var _typeof = __webpack_require__(13);
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _regenerator = _interopRequireDefault(__webpack_require__(40));
    var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(42));
    var base64 = _interopRequireWildcard(__webpack_require__(43));
    var _cryptoJs = _interopRequireDefault(__webpack_require__(46));
    var _parser = _interopRequireDefault(__webpack_require__(203));
    var utf8 = _interopRequireWildcard(__webpack_require__(212));
    var _url = _interopRequireDefault(__webpack_require__(244));
    function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
    function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

    var _default = {
      data: function data() {
        return {
          TEXT: ' ',
          httpUrl: "https://spark-api.xf-yun.com/v3.5/chat",
          modelDomain: '',
          APPID: 'acec8a44',
          APISecret: 'YTFiM2E4ZTMwZWVmMjM1NThkNTAyMzA5',
          APIKey: '671e37fce938f257160bba12792460cf',
          sparkResult: '',
          historyTextList: [],
          tempRes: '',
          messages: [], // 存储消息
          inputValue: '', // 用户输入的消息内容
          bottomViewId: ''
        };
      },
      methods: {
        sendToSpark: function sendToSpark() {
          var _this = this;
          return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
            var myUrl, realThis;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _this.getWebSocketUrl();
                  case 2:
                    myUrl = _context.sent;
                    _this.tempRes = "";
                    realThis = _this;
                    _this.socketTask = uni.connectSocket({
                      url: myUrl,
                      method: 'GET',
                      success: function success(res) {
                        console.log(res, "ws成功连接...", myUrl);
                        realThis.wsLiveFlag = true;
                      }
                    });
                    realThis.socketTask.onError(function (res) {
                      console.log("连接发生错误，请检查appid是否填写", res);
                    });
                    realThis.socketTask.onOpen(function (res) {
                      _this.historyTextList.push({
                        "role": "user",
                        "content": _this.TEXT
                      });
                      console.info("wss的onOpen成功执行...", res);
                      var params = {
                        "header": {
                          "app_id": _this.APPID,
                          "uid": "aef9f963-7"
                        },
                        "parameter": {
                          "chat": {
                            "domain": _this.modelDomain,
                            "temperature": 0.5,
                            "max_tokens": 1024
                          }
                        },
                        "payload": {
                          "message": {
                            "text": _this.historyTextList
                          }
                        }
                      };
                      console.log("请求的params：" + JSON.stringify(params));
                      console.log("发送第一帧...", params);
                      realThis.socketTask.send({
                        data: JSON.stringify(params),
                        success: function success() {
                          console.log('第一帧发送成功');
                        }
                      });
                      _this.inputValue =  _this.TEXT ; 
                      let newMessage = {
                        type: 'sent',
                        content: _this.inputValue
                      };
                      _this.messages= [..._this.messages, newMessage];
                    });
                    realThis.socketTask.onMessage(function (res) {
                      console.log('收到API返回的内容：', res.data);
                      var obj = JSON.parse(res.data);
                      var dataArray = obj.payload.choices.text;
                      for (var i = 0; i < dataArray.length; i++) {
                        realThis.sparkResult = realThis.sparkResult + dataArray[i].content;
                        realThis.tempRes = realThis.tempRes + dataArray[i].content;
                      };
                      var temp = JSON.parse(res.data);
                      if (temp.header.code !== 0) {
                        console.log("".concat(temp.header.code, ":").concat(temp.message));
                        realThis.socketTask.close({
                          success: function success(res) {
                            console.log('关闭成功', res);
                            realThis.wsLiveFlag = false;
                          },
                          fail: function fail(err) {
                            console.log('关闭失败', err);
                          }
                        });
                      }
                      if (temp.header.code === 0) {
                        if (res.data && temp.header.status === 2) {
                          realThis.sparkResult = realThis.sparkResult + "\r\n";
                          _this.historyTextList.push({
                            "role": "assistant",
                            "content": _this.tempRes
                          });
                          let replyMessage = {
                            type: 'received', // 将接收到的消息设置为 received 类型
                            content: realThis.sparkResult
                          };
                          let sentMessage = {
                            type: 'sent', // 将发送的消息设置为 sent 类型
                            content: _this.inputValue
                          };
                          
                          if (_this.messages.length > 0 && _this.messages[_this.messages.length - 1].type !== 'sent') {
                            _this.messages=[..._this.messages, sentMessage, replyMessage],
                            _this.inputValue= '',
                            _this.sparkResult='',
                            _this.TEXT= '',
                            _this.bottomViewId= 'msg-' + (_this.messages.length - 1) // 更新为最新消息的id
                            _this.scrollToBottom();
                          } else {
                            _this.messages= [..._this.messages, replyMessage],
                            _this.inputValue= '',
                            _this.sparkResult='',
                            _this.bottomViewId= 'msg-' + (_this.messages.length - 1) // 更新为最新消息的id
                            _this.TEXT= '',
                            _this.scrollToBottom(_this.messages.length - 1);
                        };
                          setTimeout(function () {
                            realThis.socketTask.close({
                              success: function success(res) {
                                console.log('关闭成功', res);
                              },
                              fail: function fail(err) {
                                console.log('关闭失败', err);
                              }
                            });
                          }, 1000);
                        }
                      }
                    });
                    
                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
            
          }))();
          
        },





        scrollToBottom: function(e) {
            console.log("数组长度："+(e))
            console.log("bottomViewId"+this.bottomViewId)
              this.bottomViewId= 'msg-' + (e)
          },


        

        getWebSocketUrl: function getWebSocketUrl() {
          var _this2 = this;
          console.log(this.httpUrl);
          var httpUrlHost = this.httpUrl.substring(8, 28);
          var httpUrlPath = this.httpUrl.substring(28);
          console.log(httpUrlHost);
          console.log(httpUrlPath); 
          switch (httpUrlPath) {
            case "/v1.1/chat":
              this.modelDomain = "general";
              break;
            case "/v2.1/chat":
              this.modelDomain = "generalv2";
              break;
            case "/v3.1/chat":
              this.modelDomain = "generalv3";
              break;
            case "/v3.5/chat":
              this.modelDomain = "generalv3.5";
              break;
          }
          console.log(this.modelDomain);
          return new Promise(function (resolve, reject) {
            var url = "wss://" + httpUrlHost + httpUrlPath;
            var host = "spark-api.xf-yun.com";
            var apiKeyName = "api_key";
            var date = new Date().toGMTString();
            var algorithm = "hmac-sha256";
            var headers = "host date request-line";
            var signatureOrigin = "host: ".concat(host, "\ndate: ").concat(date, "\nGET ").concat(httpUrlPath, " HTTP/1.1");
            var signatureSha = _cryptoJs.default.HmacSHA256(signatureOrigin, _this2.APISecret);
            var signature = _cryptoJs.default.enc.Base64.stringify(signatureSha);
            var authorizationOrigin = "".concat(apiKeyName, "=\"").concat(_this2.APIKey, "\", algorithm=\"").concat(algorithm, "\", headers=\"").concat(headers, "\", signature=\"").concat(signature, "\"");
            var authorization = base64.encode(authorizationOrigin);
            url = "".concat(url, "?authorization=").concat(authorization, "&date=").concat(encodeURI(date), "&host=").concat(host);
            resolve(url);
          });
        }
      }
    };
    exports.default = _default;
    }.call(this, __webpack_require__(2)["default"]))
    })
    
    },[[215,"common/runtime","common/vendor"]]]);
    
    