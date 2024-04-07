document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("[data-hook~=header]")
  const anchorLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("[data-hook~=anchor-link]")

  anchorLinks.forEach(anchorLink => {
    anchorLink.addEventListener("click", e => {
      e.preventDefault()

      const anchorElement: HTMLDivElement = document.querySelector(anchorLink.getAttribute("href"))

      window.scrollTo({ top: anchorElement.offsetTop - header.clientHeight, behavior: "smooth" })
    })
  })
})
