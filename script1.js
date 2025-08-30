document.addEventListener("DOMContentLoaded", () => {
  // Get all filter buttons and article cards
  const filterButtons = document.querySelectorAll(".filter-btn")
  const articleCards = document.querySelectorAll(".article-card")

  // Show all articles initially
  articleCards.forEach((card) => {
    card.style.display = "block"
  })

  // Add click event to each filter button
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get selected category
      const category = this.getAttribute("data-category")

      // Filter articles
      articleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")

        if (category === "all" || cardCategory === category) {
          card.style.display = "block"
        } else {
          card.style.display = "none"
        }
      })
    })
  })
})
