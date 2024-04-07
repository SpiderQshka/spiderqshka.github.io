document.addEventListener("DOMContentLoaded", () => {
  const projectListItems: NodeListOf<HTMLLIElement> = document.querySelectorAll("[data-hook~=projects-list-item]")
  const projectInformationItems: NodeListOf<HTMLDivElement> = document.querySelectorAll(
    "[data-hook~=project-information-item]",
  )

  projectListItems.forEach(projectListItem => {
    const projectInformationItem = Array.from(projectInformationItems).find(
      ({ dataset }) => projectListItem.dataset.value === dataset.value,
    )

    projectListItem.addEventListener("mouseover", () => {
      projectListItems.forEach(({ classList }) => classList.remove("projects-section__projects-list-item_active"))
      projectInformationItems.forEach(({ classList }) =>
        classList.remove("projects-section__project-information-item_active"),
      )

      projectListItem.classList.add("projects-section__projects-list-item_active")
      projectInformationItem.classList.add("projects-section__project-information-item_active")
    })
  })
})
