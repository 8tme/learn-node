const event = require('events')
const fs = require('fs')
const path = require('path')

class Event extends event.EventEmitter{
    constructor() {
        super()
    }
}
const e = new Event()
e.addListener('readfile', (data) => {
    console.log('读取文件成功数据为:'+data)
})
e.on('mydef', () => {
    console.log('mydef2')
})

// fs.readFile(path.resolve(__dirname, './1.txt'), 'utf8', (err, data) => {
//     console.log(err)
//     if (err === null) {
//         console.log(data.toString())
//         e.emit('readfile', data)
//     }
// })

// fs.open(path.resolve(__dirname, './1.txt'), 'r', 16, (err, data) => {
//     if (err === null) console.log(data)
// })
// setTimeout(() => {
//     e.emit('mydef')
// }, 1000);

// console.log(event.EventEmitter.listenerCount(e, 'mydef'))
// console.log(event.EventEmitter.defaultMaxListeners)


// const b = new Buffer(10)
Buffer.alloc()
console.log(b)