// 
import { init } from './core/init/init'
import { data } from './core/data/data'
import { module } from './core/module/module'
import { event } from './core/event/event'
import { engine } from './core/engine/engine'


// 
class Santana {
    canvas = null
    ctx = null
    constructor(el) {
        this.canvas = typeof el === 'string' ? document.querySelector(el) : el
        this.init()
    }

    // 初始化
    init = init

    // 引擎
    engine = engine

    // 数据
    data = data

    // 模块
    module = module

    // 事件
    event = event

}



export {
    Santana
}