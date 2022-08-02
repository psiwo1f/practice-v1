const express = require("express");
const workerpool = require("workerpool");
// const {resize} = require('./myWorker')

const pool = workerpool.pool("./myWorker.js");

// pool.exec('resizeImg', msgs).then(function (result) {
//     console.log('res in index----', result)
// }).catch(function (err) {
//     console.error(err);
//   })
//   .then(function () {
//     pool.terminate(); // terminate all workers when done
//   });
const PORT = 3000;

const app = express();

const poolRes = async () => {
  const msgs = [];
  for (let i = 1; i < 60; i++) {
    const msg = { img: `./images/${i}.jpg` };
    msgs.push(msg);
  }
  const startT = new Date();
  new Promise((resolve, reject) => {
    for (let i = 0; i < msgs.length; i++) {
        pool
          .exec("resizeImg", [msgs[i]])
        //   .then((result) => console.log("res in index----", result))
        //   .then(() => {
        //     const stats = pool.stats();
        //     console.log("Stats: ", stats);
        //   })
          .catch(function (err) {
            console.error(err);
            reject(err)
          })
          .then(function () {
            const stats = pool.stats();
            // console.log("Stats: ", stats);
            if (stats.pendingTasks < 1) {
              const endT = new Date();
              console.log("time taken in secs: ", (endT - startT) / 1000);
              pool.terminate(); // terminate all workers when done
              resolve('Done')
            }
          });
      }
  })
};

// pool
//   .exec('resizeImg', [msgs]
//     // (msgs) => {
//     //   const resps = [];
//     //   for (let i = 1; i < msgs.length; i++) {
//     //     const resp = resizeImg(msgs[i]);
//     //     resps.push(resp);
//     //   }
//     //   return resps;
//     // },
//     // [msgs]
//   )
// //   .then((result) => console.log("res in index----", result))
// // .exec(resizer, [msgs])
//   .then(() => {
//     const stats = pool.stats()
//     console.log('Stats: ', stats)
//   })
//   .catch(function (err) {
//     console.error(err);
//   })
//   .then(function () {
//     pool.terminate(); // terminate all workers when done
//   });

//   new Promise((resolve, reject) => {
//     pool.exec(
//       arr => {
//         var result = [];
//         for(var i = 0; i < arr.length; i++){
//           /*
//           Do the long processing on data
//           */
//           const processedData = a[i];
//           result.push(processedData);
//         }
//         return result;
//       },
//       [arr]
//     )
//     .then(result => resolve(result))
//     .catch(err => reject(err));
//   });

app.get("/", (req, res) => {
  res.send("Hello from Pool");
});

app.get("/rs", async (req, res) => {
    const resp = await poolRes()
    console.log('resp is -----', resp)
    res.send(resp)
});

app.listen(PORT, () => {
  console.log("server is listening on port ", PORT);
});
