const jimp = require("jimp");

process.on("message", (msg) => {
  if (msg.hello) {
    console.log("Message from parent ", msg.hello);
  } else if (msg.img) {
    // process.send({ status: 'Done', msg: `Process ID ${process.pid}` });
    // console.log('her I am --------------C-------------', msg.img)
    // const img = msg.img
    // console.log('imagessssss', img)
    (async (img) => {
      console.log(' ---C---', process.pid)
      console.log(`Starting ${img} on PID ${process.pid}`);
      const outImg = img.replace(".jpg", "./_small.jpg");
      const imgObj = await jimp.read(img);
      imgObj.scale(0.1).quality(60).write(outImg);
      // console.log(`Ending ${img}`);
      // process.send({ msg: `Image ${img} has been processed` });
      //   setTimeout(() => {
        process.send({ status: 'Done', msg: `Image ${img} has been processed`, pid: `PID is ${process.pid}` });
        // console.log('exiting ---C---', process.pid)
        // process.exit();
    //     // process.exit();
    // }, 1000);
    })(msg.img);
  }
});

// let counter = 0;

process.on("error", (err) => {
  console.log("Errr ", err);
});

// setInterval(() => {
//     // sends a message every second
//     // console.log('CP Child starting off----');
//     process.send({counter: counter++})
// }, 1000)
