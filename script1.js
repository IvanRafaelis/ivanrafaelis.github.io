document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const articleCards = document.querySelectorAll(".article-card")

  // Check if elements exist
  if (filterButtons.length === 0 || articleCards.length === 0) {
    console.error("Filter buttons or article cards not found")
    return
  }

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const selectedCategory = this.getAttribute("data-category")

      // Remove active class from all buttons
      filterButtons.forEach((btn) => {
        btn.classList.remove("active")
      })

      // Add active class to clicked button
      this.classList.add("active")

      // Filter articles
      articleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block"
          card.style.opacity = "0"
          setTimeout(() => {
            card.style.opacity = "1"
          }, 50)
        } else {
          card.style.display = "none"
        }
      })
    })
  })

  // Add smooth transition styles
  const style = document.createElement("style")
  style.textContent = `
        .article-card {
            transition: opacity 0.3s ease-in-out;
        }
    `
  document.head.appendChild(style)
})
