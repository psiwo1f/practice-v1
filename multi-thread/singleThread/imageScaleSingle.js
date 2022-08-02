const jimp = require('jimp')

module.exports = (img) => new Promise(async (resolve, reject) => {
    console.log(`Starting ${img}`);
    const outImg = img.replace('.jpg', './_small.jpg')
    try {
        const imgObj = await jimp.read(img)
        imgObj.scale(0.1).quality(60).write(outImg);
        console.log(`Ending ${img}`)
        resolve(outImg)
    } catch (error) {
        reject(error)
    }
    resolve();
})