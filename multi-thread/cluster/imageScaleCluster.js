const jimp = require("jimp");

process.on("message", (msg) => {
  if (msg.hello) {
    console.log("Message from parent ", msg.hello);
  } else if (msg.img) {
    (async (img) => {
      console.log(`Starting ${img} on PID ${process.pid}`);
      const outImg = img.replace(".jpg", "./_small.jpg");
      const imgObj = await jimp.read(img);
      imgObj.scale(0.1).quality(60).write(outImg);
    process.send({ status: 'Done', msg: `Image ${img} has been processed`, pid: `PID is ${process.pid}` });
    })(msg.img);
  }
});

process.on("error", (err) => {
  console.log("Errr ", err);
});

// setInterval(() => {
//     // sends a message every second
//     // console.log('CP Child starting off----');
//     process.send({counter: counter++})
// }, 1000)
