module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/Head/index.jsx":
/*!******************************************!*\
  !*** ./components/common/Head/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/common/Head/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* This is the html <header> element which you'll need
your site to have to comply with web standards.
This is NOT a visual header */

const Head = ({
  title,
  description
}) => __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("meta", {
  charSet: "UTF-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, title || ''), __jsx("meta", {
  name: "description",
  content: description || '',
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, inititial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css?family=Poppins&display=swap",
  rel: "stylesheet",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("link", {
  rel: "shortcut icon",
  type: "image/x-icon",
  href: "/favicon.ico",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.js":
/*!***************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./components/layouts/DefaultLayout/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styleReset.scss */ "./components/layouts/DefaultLayout/styleReset.scss");
/* harmony import */ var _styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styleReset_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_NavbarModule_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modules/NavbarModule/Navbar */ "./components/modules/NavbarModule/Navbar.jsx");
/* harmony import */ var _common_Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Head */ "./components/common/Head/index.jsx");
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/layouts/DefaultLayout/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */



/* components */



const DefaultLayout = props => {
  const title = "Portfolio";
  const description = "Emelie Sabel";
  return __jsx("div", {
    className: (_styleReset_scss__WEBPACK_IMPORTED_MODULE_2___default.a, _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.root),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    className: _index_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_common_Head__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: title,
    description: description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx(_modules_NavbarModule_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (DefaultLayout);

/***/ }),

/***/ "./components/layouts/DefaultLayout/index.scss":
/*!*****************************************************!*\
  !*** ./components/layouts/DefaultLayout/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"root": "root___3GKdN",
	"pageWrapper": "pageWrapper___14rma"
};

/***/ }),

/***/ "./components/layouts/DefaultLayout/styleReset.scss":
/*!**********************************************************!*\
  !*** ./components/layouts/DefaultLayout/styleReset.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/modules/HeadlineModule/Headline.jsx":
/*!********************************************************!*\
  !*** ./components/modules/HeadlineModule/Headline.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Headline_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Headline.scss */ "./components/modules/HeadlineModule/Headline.scss");
/* harmony import */ var _Headline_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Headline_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/modules/HeadlineModule/Headline.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const HeadlineModule = ({
  title
}) => {
  return __jsx("h1", {
    className: _Headline_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, title);
};

/* harmony default export */ __webpack_exports__["default"] = (HeadlineModule);

/***/ }),

/***/ "./components/modules/HeadlineModule/Headline.scss":
/*!*********************************************************!*\
  !*** ./components/modules/HeadlineModule/Headline.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"title": "title___2_B4Q"
};

/***/ }),

/***/ "./components/modules/ImageModule/Image.jsx":
/*!**************************************************!*\
  !*** ./components/modules/ImageModule/Image.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image.scss */ "./components/modules/ImageModule/Image.scss");
/* harmony import */ var _Image_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Image_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/modules/ImageModule/Image.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ImageModule = ({
  image
}) => {
  return __jsx("div", {
    className: _Image_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageModule);

/***/ }),

/***/ "./components/modules/ImageModule/Image.scss":
/*!***************************************************!*\
  !*** ./components/modules/ImageModule/Image.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container": "container___1bqPr"
};

/***/ }),

/***/ "./components/modules/NavbarModule/Navbar.jsx":
/*!****************************************************!*\
  !*** ./components/modules/NavbarModule/Navbar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.scss */ "./components/modules/NavbarModule/Navbar.scss");
/* harmony import */ var _Navbar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/modules/NavbarModule/Navbar.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const NavbarModule = ({
  link
}) => {
  console.log(NavbarModule);
  return __jsx("div", {
    className: _Navbar_scss__WEBPACK_IMPORTED_MODULE_1___default.a.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "/home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "HOME /"), __jsx("a", {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ABOUT /"), __jsx("a", {
    href: "/projects",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, " PROJECTS"));
};

/* harmony default export */ __webpack_exports__["default"] = (NavbarModule);

/***/ }),

/***/ "./components/modules/NavbarModule/Navbar.scss":
/*!*****************************************************!*\
  !*** ./components/modules/NavbarModule/Navbar.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"link": "link___397rl"
};

/***/ }),

/***/ "./components/modules/ParagraphModule/Paragraph.jsx":
/*!**********************************************************!*\
  !*** ./components/modules/ParagraphModule/Paragraph.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Paragraph_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Paragraph.scss */ "./components/modules/ParagraphModule/Paragraph.scss");
/* harmony import */ var _Paragraph_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Paragraph_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/components/modules/ParagraphModule/Paragraph.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* styles */


const ParagraphModule = ({
  copy
}) => {
  console.log(ParagraphModule);
  return __jsx("div", {
    className: _Paragraph_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, copy));
};

/* harmony default export */ __webpack_exports__["default"] = (ParagraphModule);

/***/ }),

/***/ "./components/modules/ParagraphModule/Paragraph.scss":
/*!***********************************************************!*\
  !*** ./components/modules/ParagraphModule/Paragraph.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"text": "text___3wara"
};

/***/ }),

/***/ "./pages/[page].js":
/*!*************************!*\
  !*** ./pages/[page].js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/DefaultLayout */ "./components/layouts/DefaultLayout/index.js");
/* harmony import */ var _components_modules_HeadlineModule_Headline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/modules/HeadlineModule/Headline */ "./components/modules/HeadlineModule/Headline.jsx");
/* harmony import */ var _components_modules_ParagraphModule_Paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modules/ParagraphModule/Paragraph */ "./components/modules/ParagraphModule/Paragraph.jsx");
/* harmony import */ var _components_modules_ImageModule_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/modules/ImageModule/Image */ "./components/modules/ImageModule/Image.jsx");
var _jsxFileName = "/Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/pages/[page].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* 🌈 This is the client side 🌈*/

/* dependencies */

/* layout */


/* components */





function fetchUrl(url) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(url).then(r => r.json());
}
/* This route gets hit when our user appends a slug to
the url and therefore the page request, e.g. your-site.com/about */


const SlugPage = ({
  data
}) => {
  const {
    content
  } = data;
  const codeString = JSON.stringify(content);
  const headlineModuleData = content.body.find(item => item.component === 'Headline Module');
  const imageModuleData = content.body.find(item => item.component === 'Image Module');
  const paragraphModuleData = content.body.find(item => item.component === 'Paragraph Module');
  const navbarModuleData = content.body.find(item => item.component === 'Navbar Module');
  return __jsx(_components_layouts_DefaultLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, headlineModuleData ? __jsx(_components_modules_HeadlineModule_Headline__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: headlineModuleData.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }) : null, imageModuleData ? __jsx(_components_modules_ImageModule_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: imageModuleData.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }) : null, paragraphModuleData ? __jsx(_components_modules_ParagraphModule_Paragraph__WEBPACK_IMPORTED_MODULE_4__["default"], {
    copy: paragraphModuleData.copy,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }) : null, navbarModuleData ? __jsx(NavbarModule, {
    link: paragraphModuleData.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }) : null);
};
/* Before rendering, we are calling our internal API endpoint (server).
This call is hitting the code we wrote in 'pages/api/page/[slug].js' */


SlugPage.getInitialProps = async ({
  query
}) => {
  /* {query} is an object we receive within this method from Next,
  so that we can retrieve the slug (e.g. '/welcome') coming with the route */
  const {
    page
  } = query;
  /* Calling our internal api endpoint so that we can fetch Storyblok content
  server-side (we are on client-side here) */

  const data = await fetchUrl(`http://localhost:3000/api/page/${page}`);
  /* Returning the data back into SlugPage as props */

  return {
    data
  };
  /* This is the same as { data: data } */
};

/* harmony default export */ __webpack_exports__["default"] = (SlugPage);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/[page].js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/emeliesabel/Desktop/hyper-island/PROJECTS/portfolio-project/pages/[page].js */"./pages/[page].js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[page].js.map