"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
var google_1 = require("next/font/google");
var link_1 = require("next/link");
require("./dist/global-styles.css");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("body", { className: inter.className, id: "root" },
            react_1["default"].createElement("header", { className: "header" },
                react_1["default"].createElement(link_1["default"], { href: '/' },
                    react_1["default"].createElement("img", { src: '/assets/GANBATTE.svg' }))),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("img", { src: '/assets/Sream-de-Animes-3.jpg', className: "banner_img" })),
            children,
            react_1["default"].createElement("footer", { className: "footer" },
                react_1["default"].createElement("p", null,
                    "Desenvolvido com \u2764\uFE0F por ",
                    react_1["default"].createElement("a", { href: "https://github.com/rebecaCanesin" }, "Rebeca Canesin"))))));
}
exports["default"] = RootLayout;