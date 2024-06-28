function assignTasks(servers, tasks) {
    var ans = [];
    var serverInfoArr = [];
    for (var i = 0; i < servers.length; i++) {
        serverInfoArr.push({ weight: servers[i], secondsUntilFree: 0 });
    }
    var taskQueue = [];
    var taskIdx = 0;
    while (taskIdx < tasks.length) {
        taskQueue.push(tasks[taskIdx]);
        while (taskQueue.length > 0) {
            console.log("here");
            var nextServerIdx = getNextServer(serverInfoArr);
            if (nextServerIdx > -1) {
                ans.push(nextServerIdx);
                serverInfoArr[nextServerIdx].secondsUntilFree = tasks[taskIdx];
                taskIdx++;
                taskQueue.shift();
            }
        }
        for (var j = 0; j < serverInfoArr.length; j++) {
            if (serverInfoArr[j].secondsUntilFree > 0) {
                serverInfoArr[j].secondsUntilFree--;
            }
        }
        console.log("serverInfoArr: ", serverInfoArr);
        console.log("ans: ", ans);
    }
    return ans;
}
function getNextServer(serverInfoArr) {
    var idx = -1;
    for (var i = 0; i < serverInfoArr.length; i++) {
        if (serverInfoArr[i].secondsUntilFree === 0) {
            if (idx === -1 || serverInfoArr[i].weight < serverInfoArr[idx].weight) {
                idx = i;
            }
        }
    }
    return idx;
}
console.log(assignTasks([3, 3, 2], [1, 2, 3, 2, 1, 2]));
