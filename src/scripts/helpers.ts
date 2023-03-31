export function disablePageScroll(): void {
  // Save current scroll position to <body> style attribute
  document.body.style.top = `${-document.documentElement.scrollTop}px`

  // Disable page scroll
  document.body.style.position = "fixed"
  document.body.style.width = "100%"
  document.body.style.overflowY = "scroll"
}

export function enablePageScroll(): void {
  // Enable page scroll
  document.body.style.position = "static"
  document.body.style.width = "auto"
  document.body.style.overflowY = "visible"

  // Scroll to the position that was before scroll disabling
  window.scrollTo(0, -parseInt(document.body.style.top))

  document.body.style.top = null
}
