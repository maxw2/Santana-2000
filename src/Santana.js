"use strict";
exports.__esModule = true;
exports.Santana = void 0;
// 
var init_1 = require("./core/init/init");
var data_1 = require("./core/data/data");
var module_1 = require("./core/module/module");
var event_1 = require("./core/event/event");
var engine_1 = require("./core/engine/engine");
// 
var Santana = /** @class */ (function () {
    function Santana(el) {
        this.canvas = null;
        this.ctx = null;
        // 初始化
        this.init = init_1.init;
        // 引擎
        this.engine = engine_1.engine;
        // 数据
        this.data = data_1.data;
        // 模块
        this.module = module_1.module;
        // 事件
        this.event = event_1.event;
        this.canvas = typeof el === 'string' ? document.querySelector(el) : el;
        this.init();
    }
    return Santana;
}());
exports.Santana = Santana;
