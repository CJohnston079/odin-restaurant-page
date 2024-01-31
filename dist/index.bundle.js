"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["index"],{

/***/ "./src/hero.js":
/*!*********************!*\
  !*** ./src/hero.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createHeroSection() {
    const section = document.createElement("section");
    section.id = "hero";

    const h1 = document.createElement("h1");

    const span1 = document.createElement("span");
    span1.textContent = "Domum sentit";

    const span2 = document.createElement("span");
    span2.textContent = "Sapor ut paradisus";

    h1.appendChild(span1);
    h1.appendChild(span2);

    const p = document.createElement("p");
    p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lobortis elementum nibh tellus molestie nunc non.";

    const button = document.createElement("button");
    button.textContent = "Book a table";

    section.appendChild(h1);
    section.appendChild(p);
    section.appendChild(button);

    const children = section.children;

    for (let i = 0; i < children.length; i += 1) {
        children[i].style.animationDelay = 400 * i + "ms";
    }

    return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeroSection);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ "./src/hero.js");


const contentContainer = document.querySelector('#content');
const hero = (0,_hero__WEBPACK_IMPORTED_MODULE_0__["default"])();

contentContainer.appendChild(hero);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUI7Ozs7Ozs7Ozs7OztBQ2xDTzs7QUFFdkM7QUFDQSxhQUFhLGlEQUFpQjs7QUFFOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9oZXJvLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUhlcm9TZWN0aW9uKCkge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICBzZWN0aW9uLmlkID0gXCJoZXJvXCI7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICAgIGNvbnN0IHNwYW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgc3BhbjEudGV4dENvbnRlbnQgPSBcIkRvbXVtIHNlbnRpdFwiO1xuXG4gICAgY29uc3Qgc3BhbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuMi50ZXh0Q29udGVudCA9IFwiU2Fwb3IgdXQgcGFyYWRpc3VzXCI7XG5cbiAgICBoMS5hcHBlbmRDaGlsZChzcGFuMSk7XG4gICAgaDEuYXBwZW5kQ2hpbGQoc3BhbjIpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBTZW1wZXIgZmV1Z2lhdCBuaWJoIHNlZCBwdWx2aW5hciBwcm9pbiBncmF2aWRhIGhlbmRyZXJpdCBsZWN0dXMuIExvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZSBudW5jIG5vbi5cIjtcblxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCJCb29rIGEgdGFibGVcIjtcblxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDEpO1xuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocCk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSBzZWN0aW9uLmNoaWxkcmVuO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjaGlsZHJlbltpXS5zdHlsZS5hbmltYXRpb25EZWxheSA9IDQwMCAqIGkgKyBcIm1zXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNlY3Rpb247XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlcm9TZWN0aW9uOyIsImltcG9ydCBjcmVhdGVIZXJvU2VjdGlvbiBmcm9tIFwiLi9oZXJvXCI7XG5cbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuY29uc3QgaGVybyA9IGNyZWF0ZUhlcm9TZWN0aW9uKCk7XG5cbmNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaGVybyk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=