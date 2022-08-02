const workerpool = require("workerpool");
const jimp = require("jimp");

const resize = async (msg) => {
// const resps = []
//   for (let i = 0; i < msgs.length; i++) {
//     const img = msgs[i].img;
//     console.log(`Starting ${img}`);
//     const outImg = img.replace(".jpg", "./_small.jpg");
//     const imgObj = await jimp.read(img);
//     imgObj.scale(0.1).quality(60).write(outImg);
//     console.log(`Image ${img} has been processed`);
//     const resp = `Image ${img} has been processed`
//     resps.push(resp);
//   }
    if (msg.hello) {
      console.log("Message from parent ", msg.hello);
    } else if (msg.img) {
    //   console.log('images is ', msg.img)
      const img = msg.img;
      // console.log(`Starting ${img}`);
      const outImg = img.replace(".jpg", "./_small.jpg");
      const imgObj = await jimp.read(img);
      imgObj.scale(0.1).quality(60).write(outImg);
      // // console.log(`Image ${img} has been processed`);
      return ({
        status: "Done",
        msg: `Image ${img} has been processed`,
        // pid: `PID is ${process.pid}`,
      });
    }
//   return resps
};

// module.exports = {resize}

workerpool.worker({
  resizeImg: resize,
});
