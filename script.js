// Mobile Navigation Toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }),
  )
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  }
})

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe all elements with fade-in class
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el)
})

// Skills progress bar animation
const animateSkillBars = () => {
  const skillBars = document.querySelectorAll(".skill-progress")
  skillBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress")
    if (progress) {
      bar.style.width = progress + "%"
    }
  })
}

// Article filtering
const filterArticles = (category) => {
  const articles = document.querySelectorAll(".article-card")
  const filterBtns = document.querySelectorAll(".filter-btn")

  // Update active filter button
  filterBtns.forEach((btn) => btn.classList.remove("active"))
  document.querySelector(`[data-filter="${category}"]`).classList.add("active")

  // Filter articles
  articles.forEach((article) => {
    const articleCategory = article.getAttribute("data-category")
    if (category === "all" || articleCategory === category) {
      article.style.display = "block"
      setTimeout(() => {
        article.style.opacity = "1"
        article.style.transform = "translateY(0)"
      }, 100)
    } else {
      article.style.opacity = "0"
      article.style.transform = "translateY(20px)"
      setTimeout(() => {
        article.style.display = "none"
      }, 300)
    }
  })
}

// Initialize article filters
document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn")
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter")
      filterArticles(filter)
    })
  })
})


  // Animate skill bars when skills section is visible
  const skillsSection = document.querySelector(".skills")
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateSkillBars()
            skillsObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    skillsObserver.observe(skillsSection)
  }
})


// Add loading animation to external links
document.querySelectorAll('a[href^="http"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.target === "_blank") {
      link.style.opacity = "0.7"
      setTimeout(() => {
        link.style.opacity = "1"
      }, 200)
    }
  })

// Keyboard navigation support
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // Close mobile menu on escape
    if (navMenu && navMenu.classList.contains("active")) {
      hamburger.classList.remove("active")
      navMenu.classList.remove("active")
    }
  }
})

// Performance optimization: Lazy load images
const lazyImages = document.querySelectorAll("img[data-src]")
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target
      img.src = img.dataset.src
      img.classList.remove("lazy")
      imageObserver.unobserve(img)
    }
  })
})

lazyImages.forEach((img) => imageObserver.observe(img))

// Add smooth reveal animation to cards
const cards = document.querySelectorAll(".service-card, .project-card, .certificate-card, .reference-card")
cards.forEach((card, index) => {
  card.style.opacity = "0"
  card.style.transform = "translateY(30px)"
  card.style.transition = "all 0.6s ease"
  card.style.transitionDelay = `${index * 0.1}s`

  const cardObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
          cardObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 },
  )

  cardObserver.observe(card)
})
