"use strict";
exports.__esModule = true;
exports.init = void 0;
// 数据
function init() {
    this.createCanvas();
}
exports.init = init;
// 创建Canvas
init.prototype.createCanvas = function () {
    this.ctx = this.canvas.getContext('2d');
};
// 
init.prototype.initData = function () {
};
