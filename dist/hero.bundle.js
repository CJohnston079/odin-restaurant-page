"use strict";
(self["webpackChunkodin_restaurant_page"] = self["webpackChunkodin_restaurant_page"] || []).push([["hero"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hero.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hlcm8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlSGVyb1NlY3Rpb24oKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgIHNlY3Rpb24uaWQgPSBcImhlcm9cIjtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gICAgY29uc3Qgc3BhbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBzcGFuMS50ZXh0Q29udGVudCA9IFwiRG9tdW0gc2VudGl0XCI7XG5cbiAgICBjb25zdCBzcGFuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHNwYW4yLnRleHRDb250ZW50ID0gXCJTYXBvciB1dCBwYXJhZGlzdXNcIjtcblxuICAgIGgxLmFwcGVuZENoaWxkKHNwYW4xKTtcbiAgICBoMS5hcHBlbmRDaGlsZChzcGFuMik7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFNlbXBlciBmZXVnaWF0IG5pYmggc2VkIHB1bHZpbmFyIHByb2luIGdyYXZpZGEgaGVuZHJlcml0IGxlY3R1cy4gTG9ib3J0aXMgZWxlbWVudHVtIG5pYmggdGVsbHVzIG1vbGVzdGllIG51bmMgbm9uLlwiO1xuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSBcIkJvb2sgYSB0YWJsZVwiO1xuXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChoMSk7XG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwKTtcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgICBjb25zdCBjaGlsZHJlbiA9IHNlY3Rpb24uY2hpbGRyZW47XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNoaWxkcmVuW2ldLnN0eWxlLmFuaW1hdGlvbkRlbGF5ID0gNDAwICogaSArIFwibXNcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gc2VjdGlvbjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVyb1NlY3Rpb247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9