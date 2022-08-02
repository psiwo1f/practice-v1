const jimp = require("jimp");
const resize = async (msg) => {
  if (msg.hello) {
    console.log("Message from parent ", msg.hello);
  } else if (msg.img) {
    const img = msg.img;
    console.log(`Starting ${img} on PID ${process.pid}`);
    const outImg = img.replace(".jpg", "./_small.jpg");
    const imgObj = await jimp.read(img);
    imgObj.scale(0.1).quality(60).write(outImg);
    return ({
      status: "Done",
      msg: `Image ${img} has been processed`,
      pid: `PID is ${process.pid}`,
    });
  }
};

// setInterval(() => {
//     // sends a message every second
//     // console.log('CP Child starting off----');
//     process.send({counter: counter++})
// }, 1000)

module.exports = {resize}