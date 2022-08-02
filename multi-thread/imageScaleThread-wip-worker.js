const {Worker, isMainThread, parentPort, workerData, threadId} = require('worker_threads') 
const jimp = require('jimp')


if(isMainThread) {
    module.exports = (img) => new Promise(async (resolve, reject) => {
        const worker = new Worker(__filename, {
            workerData: img
        })
        worker.on('message', resolve)
        worker.on('error', reject)
        worker.on('exit', (code) => {
            if (code !== 0)
            reject(new Error(`Worker stopped with code ${code}`))
        })
    })
} else {
    console.log(`${threadId} Starting ${workerData}`);
        const outImg = workerData.replace('.jpg', '_small.jpg')
        (async () => {
            const imgObj = await jimp.read(workerData)
            imgObj.scale(0.1).quality(60).write(outImg);
            console.log(`Ending ${workerData}`)
            parentPort.postMessage(outImg)
        })()
}

// module.exports = (img) => new Promise(async (resolve, reject) => {
//     console.log(`Starting ${img}`);
//     const outImg = img.replace('.jpeg', '_small.jpeg')
//     try {
//         const imgObj = await jimp.read(img)
//         imgObj.scale(0.1).quality(60).write(outImg);
//         console.log(`${threadId} Ending ${img}`)
//         resolve(outImg)
//     } catch (error) {
//         reject(error)
//     }
//     resolve();
// })