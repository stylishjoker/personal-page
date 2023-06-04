export const smoothScrollTo = (target) => {
  const scrollTarget = document.querySelector(target);
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const targetOffsetTop = scrollTarget.getBoundingClientRect().top + scrollTop;

  window.scrollTo({
    top: targetOffsetTop,
    behavior: "smooth",
  });
};
