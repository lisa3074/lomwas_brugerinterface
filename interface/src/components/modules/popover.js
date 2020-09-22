export function popover(id, e, eClass, eRemove) {
  console.log("[function] || popover.js || popoverDoc | id:" + id);
  const popover = document.querySelector(".Popover.a" + id);

  //remove classes
  document.querySelectorAll("." + eRemove + ", .feather-image, .inner-triangle, .outer-triangle").forEach((el) => {
    el.classList.remove("image", "" + eRemove + "", "" + eRemove + "-triangle-inner", "" + eRemove + "-triangle-outer");
  });

  //Add classes
  document.querySelectorAll(".inner-triangle").forEach((inner) => {
    inner.classList.add(e + "-triangle-inner");
  });
  document.querySelectorAll(".outer-triangle").forEach((outer) => {
    outer.classList.add(e + "-triangle-outer");
  });

  document.querySelectorAll("." + eClass).forEach((el) => {
    el.classList.toggle(e);
    popover.classList.add(e);
    popover.classList.remove(eRemove);

    if (el.classList.contains("docs") || el.classList.contains("video")) {
      popover.classList.remove("hide");
    }
  });
}
