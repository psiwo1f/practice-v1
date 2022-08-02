const { resize } = require("./imresizeUtil");
const cluster = require("cluster");
// const glob = require("glob")
const jimp = require("jimp");
const fs = require("fs");

const printi = img => {
  console.log('img', img);
}

const resizeS = async (msg) => {
  if (msg.hello) {
    console.log("Message from parent ", msg.hello);
  } else if (msg) {
    // console.log('CP Child starting off----');
    const img = msg;
    // console.log(`Starting ${img} on PID ${process.pid}`);
    const outImg = img.replace(".jpeg", "./_smak.jpeg");
    const imgObj = await jimp.read(img);
    console.log('something---------- ', imgObj)
    imgObj.scale(0.1).quality(60).write(outImg);
    return ({
      status: "Done",
      msg: `Image ${img} has been processed`,
      pid: `PID is ${process.pid}`,
    });
  }
};

(async () => {
const startT = new Date();
  const CORES = 2;
  let i = 1;
  if (cluster.isMaster) {
    for (let f = 0; f < CORES; f++) {
      cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
      console.log("Let's fork another worker!");
      cluster.fork();
    });
  } else {

    // (async () => {
      // fs.readdir("./images2/", (err, files) => {
      //   files.map(resizeS);
      //   // files.map(printi);
      //   // await 
      // });
    // })()
    // glob.sync("./images2/*.jpg").map(resize);
    // call the image processing code or file here
    // for (let j = 1; j < 60; j++) {
    //   // const res = resize({ img: `./images/${i}.jpg` });
    //   if (res.status === "Done") {
    //     i++;
    //   }
    // }
  }
  const endT = new Date();
  console.log("time taken in secs: ", (endT - startT) / 1000);
})();
