import ScrollBooster from "scrollbooster"

let scrollBooster: ScrollBooster | null = null
let intersectionObserver: IntersectionObserver | null = null

interface IInitArgs {
  featuresBlock: HTMLDivElement
  featuresList: HTMLUListElement
  featuresListItems: NodeListOf<HTMLLIElement>
}

const initMobile = ({ featuresBlock, featuresList }: Pick<IInitArgs, "featuresBlock" | "featuresList">) => {
  if (scrollBooster) return

  scrollBooster = new ScrollBooster({
    viewport: featuresBlock,
    content: featuresList,
    scrollMode: "native",
    direction: "horizontal",
  })
}

const destroyMobile = () => {
  if (!scrollBooster) return

  scrollBooster.destroy()
  scrollBooster = null
}

const initDesktop = ({ featuresListItems }: Pick<IInitArgs, "featuresListItems">) => {
  if (!intersectionObserver) {
    intersectionObserver = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("features-section__features-list-item_active")
          else {
            if (entry.boundingClientRect.top !== entry.intersectionRect.top) return
            entry.target.classList.remove("features-section__features-list-item_active")
          }
        }),
      { rootMargin: "0px 0px -25% 0px", threshold: 1 },
    )
  }

  intersectionObserver.disconnect()
  Array.from(featuresListItems).forEach(featuresListItem => intersectionObserver.observe(featuresListItem))
}

const destroyDesktop = ({ featuresListItems }: Pick<IInitArgs, "featuresListItems">) => {
  if (!intersectionObserver) return

  intersectionObserver.disconnect()
  featuresListItems.forEach(featuresListItem =>
    featuresListItem.classList.remove("features-section__features-list-item_active"),
  )
}

const init = ({ featuresBlock, featuresList, featuresListItems }: IInitArgs) => {
  if (window.innerWidth < 1200) {
    destroyDesktop({ featuresListItems })
    initMobile({ featuresBlock, featuresList })
  } else {
    destroyMobile()
    initDesktop({ featuresListItems })
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const featuresBlock: HTMLDivElement = document.querySelector("[data-hook~=features-block]")
  const featuresList: HTMLUListElement = document.querySelector("[data-hook~=features-list]")
  const featuresListItems: NodeListOf<HTMLLIElement> = document.querySelectorAll("[data-hook~=features-list-item]")

  init({ featuresBlock, featuresList, featuresListItems })

  window.addEventListener("resize", () => init({ featuresBlock, featuresList, featuresListItems }))
})
