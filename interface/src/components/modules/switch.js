export function isDone(setDone, tasks, setUnFinishedTasks) {
  console.log("isDone");
  const items = [];
  const unfinishedItems = [];
  document.querySelectorAll(".switch").forEach((checkbox) => {
    if (checkbox.checked === true) {
      //find the finished items and send them to the state "done" (Switch.js), which sends to App.js to be ready for PUT
      items.push(checkbox.dataset.state);
    } else {
      unfinishedItems.push(checkbox.dataset.state); //find the finished items and send them to the state "done" in Switch.js, which sends to App.js to be ready for PUT
    }
    setDone(items);
  });
  const unfinishedTasks = [];
  //fin all unfinished tasks and set the state "unFinishedTasks" in Switch.js (for print in finishing process)
  unfinishedItems.forEach((item) => {
    tasks.forEach((task) => {
      if (task.scheduleID.toString() === item) {
        unfinishedTasks.push(task);
      }
      setUnFinishedTasks(unfinishedTasks);
    });
  });
}
