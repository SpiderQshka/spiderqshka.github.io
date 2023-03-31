document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-hook=header]")
  const headerButton: HTMLButtonElement = document.querySelector("[data-hook=header-button]")
  const headerLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-hook=header-link]")

  headerButton.onclick = () => header.classList.toggle("header_open")
  headerLinks.forEach(
    headerLink =>
      (headerLink.onclick = e => {
        e.preventDefault()

        header.classList.remove("header_open")

        const anchorElement: HTMLDivElement = document.querySelector(headerLink.getAttribute("href"))

        window.scrollTo({ top: anchorElement.offsetTop - header.clientHeight, behavior: "smooth" })
      }),
  )
})
