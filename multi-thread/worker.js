const workerFarm = require("worker-farm");
// const {resize} = require('./imresizeUtil')

const workers = {
  resizeImgs: async (interval = 0) => {
    const startT = new Date()
    const worker = workerFarm({}, require.resolve("./imresizeUtil"));
    // let end = 5 + interval;
    // const limit = 34400;
    // let i = interval;
    const TOTAL_FILES = 60
    const CORES = 2
    let processFiles = [];
    for (let i=1; i < TOTAL_FILES; i++) {
      worker({ img: `./images/${i}.jpg` }, (err, response) => {
        console.log("in worker", response.msg);
        processFiles.push(response?.status);
        if (processFiles?.length % CORES === 0) {
          console.log("Worker form is ended");
          workerFarm.end(worker);
        }
      });
    }
    // const endT = new Date();
    // const timeDiff = await (endT - startT) / 1000
    // console.log('Time taken is: ', timeDiff)
  },
};

module.exports = workers;
