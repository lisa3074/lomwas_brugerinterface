export function popoverVideo(id) {
  console.log("[function] || popover.js || popoverVideo | id:" + id);

  //remove classes
  document
    .querySelectorAll(".feather-file, .feather-image, .triangle-wrapper, .inner-triangle, .outer-triangle")
    .forEach((el) => {
      el.classList.remove("docs", "video", "wrapper-move", "docs-triangle-inner", "docs-triangle-outer");
    });

  //toggle classes
  document.querySelectorAll(".feather-film").forEach((video) => {
    video.classList.toggle("video");
  });

  //Add classes
  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.add("video-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.add("video-triangle-outer");
  });

  setClasses("video", "docs", id);
}

export function popoverDoc(id) {
  console.log("[function] || popover.js || popoverDoc | id:" + id);

  //remove classes
  document.querySelectorAll(".feather-film, .feather-image, .inner-triangle, .outer-triangle").forEach((el) => {
    el.classList.remove("video", "image", "video-triangle-inner", "video-triangle-outer");
  });

  //toggle classes
  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.toggle("docs");
  });

  //Add classes
  document.querySelectorAll(".triangle-wrapper").forEach((wrapper) => {
    wrapper.classList.add("wrapper-move");
  });
  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.add("docs-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.add("docs-triangle-outer");
  });

  setClasses("docs", "video", id);
}

function setClasses(main, second, id) {
  const popover = document.querySelector(".Popover.a" + id);
  if (popover.classList.contains(main)) {
    popover.classList.toggle("hide");
    popover.classList.remove(main);
  } else if (popover.classList.contains(second)) {
    popover.classList.add(main);
    popover.classList.remove(second);
  } else {
    popover.classList.toggle("hide");
    popover.classList.add(main);
  }
}
