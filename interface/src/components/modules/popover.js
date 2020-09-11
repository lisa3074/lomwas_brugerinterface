export function popoverVideo(id) {
  console.log("popover module");
  console.log(id);

  const popover = document.querySelector(".Popover.a" + id);
  if (popover.classList.contains("video")) {
    popover.classList.toggle("hide");
    popover.classList.remove("video");
  } else if (popover.classList.contains("docs")) {
    popover.classList.add("video");
    popover.classList.remove("docs");
  } else {
    popover.classList.toggle("hide");
    popover.classList.add("video");
  }

  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.add("video-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.add("video-triangle-outer");
  });
  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.remove("docs-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.remove("docs-triangle-outer");
  });
}

export function popoverDoc(id) {
  console.log("popover module");
  const popover = document.querySelector(".Popover.a" + id);

  if (popover.classList.contains("docs")) {
    popover.classList.toggle("hide");
    popover.classList.remove("docs");
  } else if (popover.classList.contains("video")) {
    popover.classList.add("docs");
    popover.classList.remove("video");
  } else {
    popover.classList.toggle("hide");
    popover.classList.add("docs");
  }

  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.remove("video-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.remove("video-triangle-outer");
  });
  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.add("docs-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.add("docs-triangle-outer");
  });
}
