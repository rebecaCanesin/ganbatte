'use client';
"use strict";
exports.__esModule = true;
exports.items = void 0;
var react_1 = require("react");
var antd_1 = require("antd");
var Search_1 = require("antd/es/input/Search");
var icons_1 = require("@ant-design/icons");
require("/src/components/SearchBar/dist/styles.css");
exports.items = [
    { key: '1', label: 'Comedy' },
    { key: '2', label: 'Romance' },
    { key: '3', label: 'Fantasy' },
    { key: '4', label: 'Action' },
    { key: '5', label: 'Drama' },
    { key: '6', label: 'School Life' },
    { key: '7', label: 'Adventure' },
    { key: '8', label: 'Slice of Life' },
    { key: '9', label: 'Yaoi' },
    { key: '10', label: 'Science Fiction' },
    { key: '11', label: 'Shoujo Ai' },
    { key: '12', label: 'Ecchi' },
    { key: '13', label: 'Sports' },
    { key: '14', label: 'Historical' },
    { key: '15', label: 'Magic' },
    { key: '16', label: 'Music' },
    { key: '17', label: 'Mystery' },
    { key: '18', label: 'Harem' },
    { key: '19', label: 'Supernatural' },
    { key: '20', label: 'Japan' },
    { key: '21', label: 'Psychological' },
    { key: '22', label: 'Thriller' },
    { key: '23', label: 'Earth' },
    { key: '24', label: 'Horror' },
    { key: '25', label: 'Shounen' },
    { key: '26', label: 'Kids' },
    { key: '27', label: 'Present' },
    { key: '28', label: 'Seinen' },
    { key: '29', label: 'Shounen Ai' },
    { key: '30', label: 'Martial Arts' },
    { key: '31', label: 'Asia' },
    { key: '32', label: 'Isekai' },
    { key: '33', label: 'Mecha' },
    { key: '34', label: 'Demon' },
    { key: '35', label: 'Shoujo' },
    { key: '36', label: 'Super Power' },
    { key: '37', label: 'Fantasy World' },
    { key: '38', label: 'Violence' },
    { key: '39', label: 'Military' },
    { key: '40', label: 'Parody' }
];
var SearchBar = function (_a) {
    var onCategorieChange = _a.onCategorieChange, onSearchText = _a.onSearchText, onDataTypeChange = _a.onDataTypeChange;
    var handleSearch = function (value) {
        onSearchText(value);
    };
    var handleCategoryChange = function (e) {
        var selectedCategory = e.key;
        var categorieItem = exports.items.find(function (item) { return (item === null || item === void 0 ? void 0 : item.key) === e.key; });
        var categorieLabel = categorieItem ? categorieItem.label : '';
        onCategorieChange(categorieLabel);
        console.log(categorieLabel);
    };
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("div", { onClick: function () { return onDataTypeChange('anime'); } },
                react_1["default"].createElement("span", null, "Anime")),
            react_1["default"].createElement("div", { onClick: function () { return onDataTypeChange('manga'); } },
                react_1["default"].createElement("span", null, "Manga"))),
        react_1["default"].createElement(antd_1.Dropdown, { menu: {
                items: exports.items,
                onClick: handleCategoryChange
            } },
            react_1["default"].createElement("a", { onClick: function (e) { return e.preventDefault(); } },
                react_1["default"].createElement(antd_1.Space, null,
                    "Categories",
                    react_1["default"].createElement(icons_1.DownOutlined, null)))),
        react_1["default"].createElement(Search_1["default"], { placeholder: "input search text", allowClear: true, onSearch: handleSearch, style: { width: 200 } })));
};
exports["default"] = SearchBar;
