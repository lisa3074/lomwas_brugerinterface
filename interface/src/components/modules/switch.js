export function isDone(setDone, tasks, setUnFinishedTasks) {
  console.log("isDone");
  const items = [];
  const unfinishedItems = [];
  document.querySelectorAll(".switch").forEach((checkbox) => {
    if (checkbox.checked === true) {
      items.push(checkbox.dataset.state);
    } else {
      unfinishedItems.push(checkbox.dataset.state);
    }
    console.log(items);
    console.log(unfinishedItems);
    setDone(items);
  });
  const unfinishedTasks = [];
  unfinishedItems.forEach((item) => {
    tasks.forEach((task) => {
      if (task.scheduleID == item) {
        unfinishedTasks.push(task);
      }
      setUnFinishedTasks(unfinishedTasks);
    });
  });
}
