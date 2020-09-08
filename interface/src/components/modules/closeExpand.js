export function closeExpand(id) {
  console.log("closeExpand");
  console.log(id);
  let count = 0;
  document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
    count++;
    console.log(count);
    if (!accordion.classList.contains(id)) {
      accordion.dataset.state = "hidden";
    } else if (accordion.classList.contains(id)) {
      accordion.dataset.state = "shown";
    }
  });
}
