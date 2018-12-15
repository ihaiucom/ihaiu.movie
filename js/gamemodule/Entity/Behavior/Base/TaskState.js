var Games;
(function (Games) {
    var BTree;
    (function (BTree) {
        var TaskState;
        (function (TaskState) {
            TaskState[TaskState["Inactive"] = 0] = "Inactive";
            TaskState[TaskState["Running"] = 1] = "Running";
            TaskState[TaskState["Success"] = 2] = "Success";
            TaskState[TaskState["Failure"] = 3] = "Failure";
        })(TaskState = BTree.TaskState || (BTree.TaskState = {}));
    })(BTree = Games.BTree || (Games.BTree = {}));
})(Games || (Games = {}));
//# sourceMappingURL=TaskState.js.map