export function popoverVideo(id, e) {
  console.log("popover module");
  console.log(id);
  console.log(e);

  const popover = document.querySelector(".Popover.a" + id);

  document.querySelectorAll(".feather-film").forEach((video) => {
    video.classList.toggle("video");
  });

  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.remove("docs");
  });
  document.querySelectorAll(".feather-image").forEach((image) => {
    image.classList.remove("image");
  });
  /*  e.classList.toggle("video"); */

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
  document.querySelectorAll(".triangle-wrapper").forEach((wrapper) => {
    wrapper.classList.remove("wrapper-move");
  });

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

export function popoverDoc(id, e) {
  console.log("popover module");
  const popover = document.querySelector(".Popover.a" + id);

  document.querySelectorAll(".feather-film").forEach((video) => {
    video.classList.remove("video");
  });

  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.remove("docs");
  });
  document.querySelectorAll(".feather-image").forEach((image) => {
    image.classList.remove("image");
  });
  e.classList.add("docs");

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

  document.querySelectorAll(".triangle-wrapper").forEach((wrapper) => {
    wrapper.classList.add("wrapper-move");
  });
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
