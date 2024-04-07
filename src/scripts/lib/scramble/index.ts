import { sequence } from "./sequence"

document.addEventListener("DOMContentLoaded", () => {
  const scrambleElements = document.querySelectorAll("[data-scramble]")

  const observer = new IntersectionObserver(
    entries =>
      entries.forEach(entry => {
        if (!entry.isIntersecting) return

        const array = sequence(entry.target.textContent, 25)

        let counter = 0

        const interval = setInterval(() => {
          if (counter >= array.length) clearInterval(interval)
          else {
            entry.target.textContent = array[counter]
            counter++
          }
        }, 50)

        observer.unobserve(entry.target)
      }),
    { threshold: 0.25 },
  )

  Array.from(scrambleElements).forEach(scrambleElement => observer.observe(scrambleElement))
})
