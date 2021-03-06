'use strict';

angular.module('ngcourse')

  .controller('TaskListCtrl', function ($log, tasks, users, router) {
    var vm = this;
    vm.tasks = [];
    vm.addTask = router.goToAddTask;

    vm.getUserDisplayName = users.getUserDisplayName;

    tasks.getTasks()
      .then(function (tasks) {
        vm.tasks = tasks;
      })
      .then(null, $log.error);
  });