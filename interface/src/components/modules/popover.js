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

    if (el.classList.contains(e, eRemove) && popover.classList.contains("hide")) {
      popover.classList.remove("hide");
    } else if (!el.classList.contains(e, eRemove) && !popover.classList.contains("hide")) {
      popover.classList.add("hide");
    }
  });
}
export function closePopOver() {
  document.querySelectorAll(".Popover").forEach((popover) => {
    popover.classList.add("hide");
  });
  document.querySelectorAll(".feather-film").forEach((film) => {
    film.classList.remove("video");
  });
  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.remove("docs");
  });
  document.querySelectorAll(".feather-image").forEach((image) => {
    image.classList.add("image");
  });
}
