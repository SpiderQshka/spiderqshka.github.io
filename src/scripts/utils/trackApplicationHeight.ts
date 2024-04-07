document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)

  window.addEventListener("resize", () => {
    document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.01}px`)
  })
})
