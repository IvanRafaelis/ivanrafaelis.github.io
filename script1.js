document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Script1.js loaded")

  const filterButtons = document.querySelectorAll(".filter-btn")
  const articleCards = document.querySelectorAll(".article-card")
  const articlesGrid = document.querySelector(".articles-grid")

  console.log("[v0] Found", filterButtons.length, "filter buttons")
  console.log("[v0] Found", articleCards.length, "article cards")

  if (filterButtons.length === 0 || articleCards.length === 0) {
    console.error("[v0] Filter buttons or article cards not found!")
    return
  }

  // Initialize - show all articles
  articleCards.forEach((card) => {
    card.style.display = "block"
    card.style.opacity = "1"
  })

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()

      const selectedCategory = this.getAttribute("data-category")
      console.log("[v0] Filter clicked:", selectedCategory)

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter articles
      let visibleCount = 0
      articleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")
        console.log("[v0] Card category:", cardCategory, "Selected:", selectedCategory)

        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block"
          card.style.opacity = "1"
          card.style.transform = "scale(1)"
          visibleCount++
        } else {
          card.style.display = "none"
          card.style.opacity = "0"
          card.style.transform = "scale(0.8)"
        }
      })

      console.log("[v0] Visible articles:", visibleCount)
    })
  })
})
