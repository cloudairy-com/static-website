let lastScrollTop = 0;
const header = document.querySelector(".header-bg");
const scrollThreshold = 100;

function handleHeaderVisibility() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
    header.classList.remove("header-visible");
    header.classList.add("header-hidden");
  } else if (currentScroll < lastScrollTop) {
    header.classList.remove("header-hidden");
    header.classList.add("header-visible");
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
}

console.log(window.config.base_url, "window.config.base_url");

window.addEventListener("scroll", handleHeaderVisibility);

window.addEventListener("load", function () {
  header.classList.add("header-visible");

  handleHeaderVisibility();
});

function showVideo(imageNumber, element) {
  document.querySelectorAll(".hidden-image").forEach((img) => {
    img.classList.remove("visible");
  });

  const imageId = `video${imageNumber}`;
  const selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.classList.add("visible");
  }

  document.querySelectorAll(".video-description-box").forEach((box) => {
    box.classList.remove("selected");
    const description = box.querySelector(".video-description");
    const learnMoreLink = box.querySelector(".learn-more-link");
    if (description && learnMoreLink) {
      description.style.display = "none";
      learnMoreLink.style.display = "none";
    }
  });

  element.classList.add("selected");
  const activeDescription = element.querySelector(".video-description");
  const activeLearnMoreLink = element.querySelector(".learn-more-link");
  if (activeDescription && activeLearnMoreLink) {
    activeDescription.style.display = "block";
    activeLearnMoreLink.style.display = "flex";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initializeSidebar();

  const initialBox = document.querySelector(".video-description-box");
  if (initialBox) {
    showVideo(1, initialBox);
  }
});

function toggleMenu() {
  var dropdown = document.getElementById("productMenu");
  var isOpen = dropdown.classList.contains("show");
  var Productdropdown = document.getElementById("productMenu1");
  var resourcesdropdown = document.getElementById("productMenu2");

  if (isOpen) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
  Productdropdown.classList.remove("show");
  resourcesdropdown.classList.remove("show");
}

function toggleMenu1() {
  var dropdown = document.getElementById("productMenu1");
  var isOpen = dropdown.classList.contains("show");
  var Productdropdown = document.getElementById("productMenu");
  var resourcesdropdown = document.getElementById("productMenu2");
  Productdropdown.classList.remove("show");
  resourcesdropdown.classList.remove("show");

  if (isOpen) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
}
function toggleMenu2() {
  var dropdown = document.getElementById("productMenu2");
  var isOpen = dropdown.classList.contains("show");
  var Productdropdown = document.getElementById("productMenu");
  var Productdropdown1 = document.getElementById("productMenu1");

  Productdropdown.classList.remove("show");
  Productdropdown1.classList.remove("show");

  if (isOpen) {
    dropdown.classList.remove("show");
  } else {
    dropdown.classList.add("show");
  }
}
document.addEventListener("click", function (event) {
  var dropdown = document.querySelector(".dropdown-menu.show");
  if (
    dropdown &&
    !dropdown.contains(event.target) &&
    !event.target.closest(".navbar-menu")
  ) {
    dropdown.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
window.addEventListener("scroll", function () {
  var dropdown = document.querySelector(".dropdown-menu.show");
  if (dropdown) {
    dropdown.classList.remove("show");
    document.body.style.overflow = "auto";
  }
});
////// Initialize sidebar functionality ///////
function initializeSidebar() {
  const menuToggle = document.querySelector(".navbar-drawer-menu");
  const sidebar = document.querySelector(".navbar-drawer-sidebar");
  const toggleOpenIcon = document.querySelector(".toggle-open");
  const toggleCloseIcon = document.querySelector(".toggle-close");

  menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("open");
    toggleOpenIcon.style.display = sidebar.classList.contains("open")
      ? "none"
      : "inline-block";
    toggleCloseIcon.style.display = sidebar.classList.contains("open")
      ? "inline-block"
      : "none";
  });
}

const items = document.querySelectorAll(".footer-accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  items.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.nextElementSibling.style.maxHeight = "0";
    item.nextElementSibling.style.opacity = "0";
    item.querySelector(".icon1 img").style.transform = "rotate(0deg)";
  });

  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", "true");
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = "1";
    this.querySelector(".icon1 img").style.transform = "rotate(180deg)";
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

const nav_items = document.querySelectorAll(".navbar-accordion button");

function toggleAccordion1() {
  const itemToggle = this.getAttribute("aria-expanded");

  nav_items.forEach((item) => {
    item.setAttribute("aria-expanded", "false");
    item.nextElementSibling.style.maxHeight = "0";
    item.nextElementSibling.style.opacity = "0";
    item.querySelector(".icon1 img").style.transform = "rotate(0deg)";
  });

  if (itemToggle === "false") {
    this.setAttribute("aria-expanded", "true");
    const content = this.nextElementSibling;
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = "1";
    this.querySelector(".icon1 img").style.transform = "rotate(180deg)";
  }
}

nav_items.forEach((item) => item.addEventListener("click", toggleAccordion1));
function adjustIframeHeight() {
  var iframe = document.getElementById("myIframe");
  iframe.style.height =
    iframe.contentWindow.document.documentElement.scrollHeight + "px";
}

async function fetchLatestBlogData() {
  try {
    let response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/blog/`
    );
    let data = await response.json();
    let result = "";
    let result2 = "";
    // date format
    function formatDate(dateString) {
      const date = new Date(dateString);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      return `${day} ${month}, ${year}`;
    }
    data.blog.results.slice(0, 3).forEach((blog) => {
      result += `<a href="./blog-detail?blog=${blog.uri}" target="_blank">
            <div class="blog-box-bg">
              <div class="blog-main-box-side">
                <div class="blog-box-image-section">
                  <img src="${blog.thumbnailImage}" alt="blog-img" />
                </div>
                <div class="blog-box-content-section">
                  <p class="blog-title-height blog-box-content" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;">${blog.title}</p>
                    <p class="blog-box-subcontent" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis; height:65px;">
                     ${blog.shortDescription} 
                    </p>
                   <div class="blog-box-heading-section d-flex align-item-center justify-content-space-between">
                      <div class="blog-learn-more-link">
  <p >Read more</p>
  <div class="learnmore-arrow">
    <svg width="24" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.0711 11.9989H3.5148" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round"/>
      <path d="M15.5352 7.04883L19.7778 11.2915C20.1111 11.6248 20.2778 11.7915 20.2778 11.9986C20.2778 12.2057 20.1111 12.3723 19.7778 12.7057L15.5352 16.9483" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
                  </div>
                  </div>
                </div>
              </div>
              </div>
            </a>`;
    });
    document.getElementById("blog-data-detail").innerHTML = result;
  } catch (error) {
    console.error("Error fetching latest blog data:", error);
  }
}
fetchLatestBlogData();

document.querySelectorAll(".submenu-text").forEach((link) => {
  link.addEventListener("click", (event) => {
    // Always prevent redirection when "Coming Soon" is shown
    const comingSoon = link.querySelector(".coming-soon");
    const isVisible = getComputedStyle(comingSoon).opacity === "1";
    if (comingSoon) {
      event.preventDefault();
    }
  });
});

document.querySelectorAll(".footer-text").forEach((link) => {
  link.addEventListener("click", (event) => {
    const comingSoon = link.querySelector(".coming-soon");
    const isVisible = getComputedStyle(comingSoon).opacity === "1";
    if (comingSoon) {
      event.preventDefault();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");
  const submitBtn = document.getElementById("submitBtn2");

  const validateForm = () => {
    let isValid = true;

    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email.value.trim() === "") {
      emailError.textContent = "Email address is required!";
      isValid = false;
    } else if (!emailPattern.test(email.value.trim())) {
      emailError.textContent = "Invalid Email format";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
    return isValid;
  };

  form.addEventListener("input", () => {
    submitBtn.disabled = !validateForm();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (validateForm()) {
      submitBtn.disabled = true;

      const values = {
        email: document.getElementById("email").value,
      };

      const data = {
        fields: [{ objectTypeId: "0-1", name: "email", value: values.email }],
      };

      try {
        const result = await hubpost("/subscribe", data);
        console.log(result, "result");

        if (result.status === 200) {
          window.location.href = "thank-you";
        }
        // else if (result.status === 204) {
        // Adjust the status code if necessary
        // alert("You are already subscribed !!!");
        // document.getElementById("email").value = "";
        // }
        else {
          alert(result.data.message || "An error occurred. Please try again.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      } finally {
        submitBtn.disabled = false;
      }
    }
  });
});