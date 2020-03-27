var fs = require("fs");
const path = require('path')

const writer = fs.createWriteStream(path.resolve(__dirname, './test.txt'))
writer.on('finish', () => {
    console.log("程序执行完毕");
})
writer.on('close', () => console.log('close'))
writer.on('open', () => console.log('open'))
writer.on('error', er => console.log(er))
let data = 0
const makeData = () => {
    let n = 0
    const timer = setInterval(() => {
        data += Math.random()
        if (++ n === 10) {
            clearInterval(timer)
            writer.write(data.toString(), e => {
                if (e == null) {
                    // 创建可读流
                    var reader = fs.createReadStream(path.resolve(__dirname, './test.txt'));
                    reader.setEncoding('utf8')
                    reader.on('data', data => {
                        console.log('读取到text.txt文本内容为', data)
                        // reader.close()
                    })
                    reader.on('err', err => {
                        console.log(err)
                    })
                    reader.on('end', () => {
                        console.log('this is end')
                        reader.close()
                    })
                }
            })
            writer.end()
        }
    }, 500);
}
makeData()
// writer.write()


