// 
import { init } from './init/init'
import { data } from './data/data'
import { module } from './module/module'
import { event } from './event/event'
import { engine } from './engine/engine'


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