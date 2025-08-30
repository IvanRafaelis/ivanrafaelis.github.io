// Articles filtering functionality
document.addEventListener("DOMContentLoaded", () => {
  console.log("[v0] Script1.js loaded, initializing article filtering")

  const filterButtons = document.querySelectorAll(".filter-btn")
  const articleCards = document.querySelectorAll(".article-card")

  console.log("[v0] Found filter buttons:", filterButtons.length)
  console.log("[v0] Found article cards:", articleCards.length)

  // Filter functionality
  filterButtons.forEach((button, index) => {
    console.log("[v0] Setting up button", index, "with category:", button.getAttribute("data-category"))

    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category")
      console.log("[v0] Filter clicked:", category)

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter articles
      let visibleCount = 0
      articleCards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category")
        console.log("[v0] Checking card with category:", cardCategory, "against filter:", category)

        if (category === "all" || cardCategory === category) {
          card.style.display = "block"
          card.style.animation = "fadeIn 0.5s ease-in-out"
          visibleCount++
        } else {
          card.style.display = "none"
        }
      })

      console.log("[v0] Visible articles after filtering:", visibleCount)
    })
  })

  // Add fade-in animation for articles
  const style = document.createElement("style")
  style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .article-card {
            animation: fadeIn 0.5s ease-in-out;
        }
    `
  document.head.appendChild(style)

  console.log("[v0] Article filtering setup complete")
})
