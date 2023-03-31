import { disablePageScroll, enablePageScroll } from "./helpers"

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-hook=header]")
  const headerButton: HTMLButtonElement = document.querySelector("[data-hook=header-button]")
  const headerLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-hook=header-link]")

  headerButton.onclick = () => {
    if (header.classList.contains("header_open")) enablePageScroll()
    else disablePageScroll()

    header.classList.toggle("header_open")
  }

  headerLinks.forEach(
    headerLink =>
      (headerLink.onclick = e => {
        e.preventDefault()

        header.classList.remove("header_open")
        enablePageScroll()

        const anchorElement: HTMLDivElement = document.querySelector(headerLink.getAttribute("href"))

        window.scrollTo({ top: anchorElement.offsetTop - header.clientHeight + 30, behavior: "smooth" })
      }),
  )
})
