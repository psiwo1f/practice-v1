
## Multi-processing in Node

we used different techniques to achieve multi-processing in Node.

We processed images using below mentioned methods:

- child process
- cluster
- worker_thread
- thread_pool (using libs)


### Notes

- child process gave us flexibility and performed quite well, we didn't kill process rather re-assigned them new tasks
- worker_thread were also very good with lesser resources but we killed them and respawned new threads after every batch and it affected the performance

- const workerpool = require("workerpool");
    Used max resources but it didn't crash the system regradless of increasing the input data

- IMO, workerpool would give the best performance with optimal resources. Unless we are able to implement thread_pool on our own i.e. don't kill and respawn the threads rather reuse them.


### Stats
// ############## Single Thread ############## 
59 imgs -> [131.396, 126.5835, 126.218]sec

// ############# Child Process - CP ###############
59 images
    3 CP - [50.09, 49.281, 50.147, 49.526, 50.012]
    2 CP - [70.291, 69.873]
    8 CP - [33.799, 34.35, 34.589] high ram
    12 CP - [] full ram full swap, system hanged
    11 CP - [33.85, 32.798] almost full ram, high swap
    10 CP - [33.605, 33.696, 34.039] lesser ram than 11-cp