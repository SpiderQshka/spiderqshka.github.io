import { disablePageScroll, enablePageScroll } from "../helpers"

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 1200) return

  const loader: HTMLDivElement = document.querySelector("[data-hook~=loader]")
  const loaderValue = document.querySelector("[data-hook~=loader-value]")
  const introSectionLink: HTMLAnchorElement = document.querySelector("[data-hook~=intro-section-link]")

  introSectionLink.classList.add("intro-section__arrow-link_hidden")
  loader.classList.remove("loader_hidden")

  disablePageScroll()

  let counter = 0

  const interval = setInterval(() => {
    if (counter > 100) {
      clearInterval(interval)
      loader.classList.add("loader_hidden")
      introSectionLink.classList.remove("intro-section__arrow-link_hidden")
      enablePageScroll()
    } else {
      loaderValue.textContent = `${counter}%`
      counter++
    }
  }, 10)
})
