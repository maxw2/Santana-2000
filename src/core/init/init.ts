// 数据
function init() {
    this.createCanvas()
    

}

// 创建Canvas
init.prototype.createCanvas = function () {
    this.ctx = this.canvas.getContext('2d')
}

// 
init.prototype.initData = function () {
    
}



export {
    init
}