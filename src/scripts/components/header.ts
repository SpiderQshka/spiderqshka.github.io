import { disablePageScroll, enablePageScroll } from "../helpers"

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-hook~=header]")
  const headerButton: HTMLButtonElement = document.querySelector("[data-hook~=header-button]")
  const headerLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-hook~=header-link]")
  const headerLogo: HTMLButtonElement = document.querySelector("[data-hook~=header-logo]")

  const getIsHeaderOpen = () => header.classList.contains("header_open")

  const openHeader = () => {
    if (getIsHeaderOpen()) return

    header.classList.add("header_open")
    disablePageScroll()
  }

  const closeHeader = () => {
    if (!getIsHeaderOpen()) return

    header.classList.remove("header_open")
    enablePageScroll()
  }

  headerButton.onclick = () => (getIsHeaderOpen() ? closeHeader() : openHeader())

  headerLinks.forEach(headerLink => headerLink.addEventListener("click", closeHeader))

  headerLogo.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" })
})
