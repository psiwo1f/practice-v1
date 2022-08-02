const glob = require("glob");
// const imgScale = require("./imageScaleSingle");
const {fork} = require('child_process');


(async () => {
    const children = []
    const cPool = []

    // ############# Child Process - CP ###############
    // const forked = fork('./imageScaleCP.js')
    // // // console.log('CP starting off----');
    // forked.on('message', msg => {
    //     console.log('Message from child ', msg)
    // })
    // stats
    // 59 images 3 CP - [50.09, 49.281, 50.147, 49.526, 50.012]
    //           2 CP - [70.291, 69.873]
    //           8 CP - [33.799, 34.35, 34.589] high ram
    //           12 CP - [] full ram full swap, system hanged
    //           11 CP - [33.85, 32.798] almost full ram, high swap
    //           10 CP - [33.605, 33.696, 34.039] lesser ram than 11-cp


    const startT = new Date();
    let i=1;
    // for (let f = 0; f < 3; f++) {
    //     children.push(fork('./imageScaleCP.js'))


    //     // 
    //     children[f].send({img: `./images/${i}.jpg`})
    //     i++;

    // }

    // created multiple forks now assigns tasks to each one
    // need to figure out when a fork picked and completed a task so it can be assigned next task
    
    // use something like queue maybe a custome pool, queue won't be efficient


    for (f=1; f<4; f++) {
        cPool[f] = fork("./imageScaleCP.js");
        cPool[f].send({ img: `./images/${i}.jpg` });
        i++;
    }
    // cPool[k].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[k].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    
    // cp1 = fork("./imageScaleCP.js");
    // cp1.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp2 = fork("./imageScaleCP.js");
    // cp2.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp3 = fork("./imageScaleCP.js");
    // cp3.send({ img: `./images/${i}.jpg` });
    // i++;

    // cp4 = fork("./imageScaleCP.js");
    // cp4.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp5 = fork("./imageScaleCP.js");
    // cp5.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp6 = fork("./imageScaleCP.js");
    // cp6.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp7 = fork("./imageScaleCP.js");
    // cp7.send({ img: `./images/${i}.jpg` });
    // i++;

    // cp8 = fork("./imageScaleCP.js");
    // cp8.send({ img: `./images/${i}.jpg` });
    // i++;

    // cp9 = fork("./imageScaleCP.js");
    // cp9.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp10 = fork("./imageScaleCP.js");
    // cp10.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp11 = fork("./imageScaleCP.js");
    // cp11.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp12 = fork("./imageScaleCP.js");
    // cp12.send({ img: `./images/${i}.jpg` });
    // i++;
    
    cPool[1].on("message", (msg) => {
      if (msg.status === "Done") {
        // console.log(msg.msg);
        // console.log('her I am -----------P----------------', i)
        // cPool[3].kill()
        if (i < 60) {
          // cp1 = fork("./imageScaleCP.js");
        //   cPool[1] = fork("./imageScaleCP.js");
          cPool[1].send({ img: `./images/${i}.jpg` });
          i++;
        } else {
            cPool[1].kill()
          const endT = new Date();
          console.log("time taken in secs: ", (endT - startT) / 1000);
        }
      }
    });
    cPool[2].on("message", (msg) => {
      if (msg.status === "Done") {
        // console.log(msg.msg);
        // cPool[3].kill()
        if (i < 60) {
          //   cp2 = fork("./imageScaleCP.js");
        //   cPool[2] = fork("./imageScaleCP.js");
          cPool[2].send({ img: `./images/${i}.jpg` });
          i++;
        } else {
            cPool[2].kill()
          const endT = new Date();
          console.log("time taken in secs: ", (endT - startT) / 1000);
        }
      }
    });
    cPool[3].on("message", (msg) => {
      if (msg.status === "Done") {
        // console.log(msg.msg);
        // cPool[3].kill()
        if (i < 60) {
            // cPool[3] = fork("./imageScaleCP.js");
            cPool[3].send({ img: `./images/${i}.jpg` });
          i++;
        } else {
            cPool[3].kill()
          const endT = new Date();
          console.log("time taken in secs: ", (endT - startT) / 1000);
        }
        //   cp3 = fork("./imageScaleCP.js");
      }
    });




    // cPool[4].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[4].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[5].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[5].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[6].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[6].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[7].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[7].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[8].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[8].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });


    //   cPool[9].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[9].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[10].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[10].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cPool[11].on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cPool[11].send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
    //   cp12.on("message", (msg) => {
    //     if (msg.status === "Done") {
    //       // console.log(msg.msg);
    //       if (i < 60) {
    //         cp12.send({ img: `./images/${i}.jpg` });
    //         i++;
    //       } else {
    //         const endT = new Date();
    //         console.log("time taken in secs: ", (endT - startT) / 1000);
    //       }
    //       //   cp3 = fork("./imageScaleCP.js");
    //     }
    //   });
      
    // cp2 = fork("./imageScaleCP.js");
    // cp2.send({ img: `./images/${i}.jpg` });
    // i++;
    // cp3 = fork("./imageScaleCP.js");
    // cp3.send({ img: `./images/${i}.jpg` });
    // i++;
    // while (i < 60) {
        // probably we need to clear before re-assigning something else
        // children[0].on('message', msg => {
        //     if(msg.status === 'Done') {
        //         console.log(msg.msg)
        //         children[0].send({img: `./images/${i}.jpg`})
        //         i++;
        //     }
        // })
        // children[1].on('message', msg => {
        //     if(msg.status === 'Done') {
        //         console.log(msg.msg)
        //         children[0].send({img: `./images/${i}.jpg`})
        //         i++;
        //     }
        // })
        // children[2].on('message', msg => {
        //     if(msg.status === 'Done') {
        //         console.log(msg.msg)
        //         children[0].send({img: `./images/${i}.jpg`})
        //         i++;
        //     }   
        // })

        // console.log('her I am -----------P----------------')
        // cp1.on("message", (msg) => {
        //   if (msg.status === "Done") {
        //     console.log(msg.msg);
        //     cp1 = fork("./imageScaleCP.js");
        //     cp1.send({ img: `./images/${i}.jpg` });
        //     i++;
        //   }
        // });
        // cp2.on("message", (msg) => {
        //     if (msg.status === "Done") {
        //       console.log(msg.msg);
        //       cp2 = fork("./imageScaleCP.js");
        //       cp2.send({ img: `./images/${i}.jpg` });
        //       i++;
        //     }
        //   });
        //   cp3.on("message", (msg) => {
        //     if (msg.status === "Done") {
        //       console.log(msg.msg);
        //       cp3 = fork("./imageScaleCP.js");
        //       cp3.send({ img: `./images/${i}.jpg` });
        //       i++;
        //     }
        //   });
        // i++;
    // }

    // const endT = new Date();
    // console.log('time taken in secs: ', (endT - startT) / 1000)

    // imgScale(`./images/${i}.jpg`)
    // forked.send({hello: 'child'})
    // forked.send({img: `./images/${1}.jpg`})








    // ############## Single Thread ############## 59 imgs -> [131.396, 126.5835, 126.218]sec
    // const startT = new Date();
    // for (let i=1; i<60; i++) {
    //     await imgScale(`./images/${i}.jpg`)
    //     // console.log(`./images/${i}.jpg`)
    // }
    // const endT = new Date();
    // console.log('time taken in secs: ', (endT - startT) / 1000)




//   await Promise.all(
//     glob
//       .sync("./images/*.jpeg")
//       .filter((img) => img.indexOf("_small") < 0)
//       .map(imgScale)
//   );
})();
 