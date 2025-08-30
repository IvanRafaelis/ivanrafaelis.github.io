if (window.location.pathname.includes("clanky.html") || document.querySelector(".articles-page")) {
  document.addEventListener("DOMContentLoaded", () => {
    console.log("[v0] Articles filtering script loaded")

    // Get all filter buttons and article cards
    const filterButtons = document.querySelectorAll(".filter-btn")
    const articleCards = document.querySelectorAll(".article-card")

    console.log("[v0] Found filter buttons:", filterButtons.length)
    console.log("[v0] Found article cards:", articleCards.length)

    // Show all articles initially
    articleCards.forEach((card) => {
      card.style.display = "block"
    })

    // Add click event to each filter button
    filterButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.preventDefault()
        e.stopPropagation()

        console.log("[v0] Filter button clicked:", this.getAttribute("data-category"))

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
            console.log("[v0] Showing article:", cardCategory)
          } else {
            card.style.display = "none"
            console.log("[v0] Hiding article:", cardCategory)
          }
        })
      })
    })
  })
}
