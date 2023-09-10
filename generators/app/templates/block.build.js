/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    InspectorControls = _wp$blockEditor.InspectorControls;
var Fragment = wp.element.Fragment;
var useSelect = wp.data.useSelect;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    FormTokenField = _wp$components.FormTokenField;


registerBlockType("gb/agencyteam", {
  title: __("Agency Team", "GB"),
  icon: "shield",
  category: "content",
  attributes: {
    posts: {
      type: 'array',
      default: []
    },
    order: {
      type: 'string',
      default: 'desc'
    },
    orderby: {
      type: 'string',
      default: 'date'
    }
  },
  edit: function edit(props) {
    var attributes = props.attributes,
        setAttributes = props.setAttributes;
    var order = attributes.order,
        posts = attributes.posts,
        orderby = attributes.orderby;


    var fetchPosts = function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var posts;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                posts = useSelect(function (select) {
                  return select('core').getEntityRecords('postType', 'team', {
                    order: order,
                    orderby: orderby,
                    per_page: -1,
                    '_embed': true
                  });
                });


                setAttributes({ posts: posts });

                return _context.abrupt("return", posts);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function fetchPosts() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchPosts();

    return wp.element.createElement(
      "section",
      { className: "bg-[#202020] py-[180rem] max-md:py-[120rem]" },
      wp.element.createElement(
        Fragment,
        null,
        wp.element.createElement(
          InspectorControls,
          null,
          wp.element.createElement(
            PanelBody,
            { title: __('Content Settings', 'author-plugin') },
            wp.element.createElement(
              PanelRow,
              null,
              wp.element.createElement(SelectControl, {
                label: __('Order by'),
                value: attributes.orderby + "/" + attributes.order,
                options: [{
                  label: __('Newest to oldest'),
                  value: 'date/desc'
                }, {
                  label: __('Oldest to newest'),
                  value: 'date/asc'
                }, {
                  label: __('A → Z'),
                  value: 'title/asc'
                }, {
                  label: __('Z → A'),
                  value: 'title/desc'
                }],
                onChange: function onChange(value) {
                  var _value$split = value.split('/'),
                      _value$split2 = _slicedToArray(_value$split, 2),
                      orderby = _value$split2[0],
                      order = _value$split2[1];

                  setAttributes({
                    order: order
                  });
                  setAttributes({
                    orderby: orderby
                  });
                }
              })
            )
          )
        )
      ),
      wp.element.createElement(
        "div",
        { className: "m-auto px-[20rem] max-w-[90%]" },
        wp.element.createElement(
          "h1",
          { className: "text-[58rem] leading-[62rem] mb-[80rem] text-white" },
          "Our team"
        ),
        wp.element.createElement(
          "div",
          { className: "flex gap-[70rem] mb-[60rem] items-center max-md:flex-col max-md:gap-[150rem] max-md:mb-[100rem]" },
          posts ? posts.map(function (post) {
            return wp.element.createElement(
              "div",
              { className: "max-w-full h-[370rem] w-[340rem] bg-[#f1f1f1] mix-blend-difference", style: { "filter": "contrast(1.05)" } },
              post._embedded && post._embedded['wp:featuredmedia'] ? wp.element.createElement("img", { src: post._embedded['wp:featuredmedia'][0].source_url, alt: "Image", style: { "filter": "brightness(1.15)" }, className: "object-cover w-full h-full mb-[30rem] border-[#454545] border-[1rem]" }) : '',
              wp.element.createElement(
                "h4",
                { className: "text-[#e32026] mb-[5rem] opacity-[0.6] text-[16rem]" },
                wp.element.RawHTML({ children: post.content.rendered })
              ),
              wp.element.createElement(
                "h3",
                { className: "text-white text-[20rem]" },
                post.title.rendered
              )
            );
          }) : ''
        )
      )
    );
  },
  save: function save(props) {
    var attributes = props.attributes;
    var posts = attributes.posts;


    return wp.element.createElement(
      "section",
      { "class": "bg-[#202020] py-[180rem] max-md:py-[120rem]" },
      wp.element.createElement(
        "div",
        { "class": "m-auto px-[20rem] max-w-[90%]" },
        wp.element.createElement(
          "h1",
          { "class": "text-[58rem] leading-[62rem] mb-[80rem] text-white" },
          "Our team"
        ),
        wp.element.createElement(
          "div",
          { "class": "flex gap-[70rem] mb-[60rem] items-center max-md:flex-col max-md:gap-[150rem] max-md:mb-[100rem]" },
          posts ? posts.map(function (post) {

            return wp.element.createElement(
              "div",
              { "class": "max-w-full h-[370rem] w-[340rem] bg-[#f1f1f1] mix-blend-difference", style: { "filter": "contrast(1.05)" } },
              post._embedded && post._embedded['wp:featuredmedia'] ? wp.element.createElement("img", { src: post._embedded['wp:featuredmedia'][0].source_url, alt: "Image", style: { "filter": "brightness(1.15)" }, "class": "object-cover w-full h-full mb-[30rem] border-[#454545] border-[1rem]" }) : '',
              wp.element.createElement(
                "h4",
                { "class": "text-[#e32026] mb-[5rem] opacity-[0.6] text-[16rem]" },
                wp.element.RawHTML({ children: post.content.rendered })
              ),
              wp.element.createElement(
                "h3",
                { "class": "text-white text-[20rem]" },
                post.title.rendered
              )
            );
          }) : ''
        )
      )
    );
  }
});

/***/ })
/******/ ]);