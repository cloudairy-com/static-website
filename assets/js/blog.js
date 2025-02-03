// blog list data
let currentPage = 1;
const limit = 6;
let totalBlogs = 0;
let allBlogs = [];
let clickedValue = "All Category";

// Function to fetch and display blog data
async function fetchBlogData(page, clickedValue, searchValue) {
  try {
    showLoader();
    const response = await fetch(
      `${
        window.config.base_url
      }/adminapi/v1/frontend/blog/list?page=${page}&limit=${limit}${
        clickedValue &&
        clickedValue !== "All Category" &&
        clickedValue !== "null"
          ? `&category=${clickedValue}`
          : ""
      }&isNewsletter=false&isShow=true${
        searchValue ? `&search=${searchValue}` : ""
      }`
    );
    const response2 = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/blog/list?recommended=true&page=1&limit=4`
    );
    const popularData = await response2.json();

    displayMostPopularBlogs(popularData.blog.results);

    showLoader();
    const data = await response.json();

    const blogs = data.blog.results;

    allBlogs = allBlogs.concat(blogs);

    const totalPages = data.blog.totalPages;
    const totalBlogs = data.blog.totalResults;
    displayBlogs(allBlogs, clickedValue, searchValue);
    displayPaginationControls(totalPages, page, totalBlogs);
  } catch (error) {
  } finally {
    hideLoader();
  }
}

function displayMostPopularBlogs(popularBlogs) {
  console.log(popularBlogs, "popularBlogs");

  const mostPopularSection = document.getElementById("most-popular-blog");

  if (!popularBlogs || popularBlogs.length === 0) {
    mostPopularSection.innerHTML = "<p>No popular blogs available.</p>";
    return;
  }
  const bannerBlogs = popularBlogs.filter((blog) => blog.is_banner === true);

  const nonBannerBlogs = popularBlogs.filter((blog) => blog.is_banner !== true);

  const firstBlog = nonBannerBlogs[0];
  const otherBlogs = nonBannerBlogs.slice(1);

  const firstBlogHtml = firstBlog
    ? `
    <a href="./blog-detail?blog=${
      firstBlog.uri
    }" target="_blank" class="blog-card-link">
      <div id="first-blog">
        <div class="first-blog">
          <div 
            class="blog-image" 
            style="background: url(${firstBlog.thumbnailImage}); 
                   background-size: cover; 
                   background-repeat: no-repeat; 
                   background-position: center;">
          </div>
          <div class="blog-content">
            <div class="blog-item-name">
              ${firstBlog.categories
                .map((category) => `<span>${category.name}</span>`)
                .join(", ")}
            </div>
            <h4>${firstBlog.title}</h4>
            <p>${firstBlog.shortDescription}</p>
            <span class="learn-more-link">Read more
              <img 
                src="../assets/image/blog/arrow-right-sharp.png" 
                alt="arrow-right" 
                class="learnmore-arrow">
            </span>
          </div>
        </div>
      </div>
    </a>
  `
    : "";

  // Other blogs HTML
  const otherBlogsHtml = otherBlogs
    .map((blog) => {
      const categoriesHtml = blog.categories
        .map(
          (category) => `<div class="blog-content-type">${category.name}</div>`
        )
        .join("");

      return `
    
        <a href="./blog-detail?blog=${blog.uri}" class="blog-box" style="cursor: pointer;" target="_blank">
                        <div class="blog-main-box">
                            <div class="blog-box-images">
                                <img src="${blog.thumbnailImage}" alt="${blog.title}" />
                            </div>
                            <div class="blog-box-content">
                                <div>
                                  <div class="d-flex align-item-center justify-content-space-between">
                                      <div class="blog-badge-box" style="display:flex;gap: 16px;"> ${categoriesHtml}</div>
                                  </div>
                                  <p class="blog-box-title">${blog.title}</p>
                                  <p class="blog-box-shortDescription" >${blog.shortDescription}</p>
                                 </div>
                                 <div class="learn-more-link">Read more<img src="../assets/image/blog/arrow-right-sharp.png" alt="arrow-up-right-01-sharp" class="learnmore-arrow "></div>
                            </div>
                        </div>
                    </a>
      `;
    })
    .join("");

  // Blue Box HTML (if any banner blogs exist)
  const blueBoxHtml = bannerBlogs.length
    ? `<div class="blog-box blog-blue-box" 
          style="background: url(${bannerBlogs[0].thumbnailImage}); 
                 background-size: cover; 
                 background-repeat: no-repeat; 
                 background-position: center;
                 cursor: pointer;"
          onclick="window.location.href='https://chart.cloudairy.com/login'">
      <img src="../assets/image/blog/white-logo.png" />
      <h2>${bannerBlogs[0].title}</h2>
      <button class="start-trial-button">
        Start free Trial
      </button>
    </div>`
    : "";

  // Combine all HTML and update the DOM
  mostPopularSection.innerHTML = `
    <h3>Most Popular</h3>
    ${firstBlogHtml}
    <div class="blogs-section">
      ${otherBlogsHtml}
      ${blueBoxHtml}
    </div>
  `;
}

// Function to display blogs
function displayBlogs(blogs, clickedValue, searchValue) {
  let result = "";
  let header = "";
  const mostPopularBlogSection = document.getElementById("most-popular-blog");
  if (
    (clickedValue === "All Category" ||
      clickedValue === "null" ||
      clickedValue === undefined) &&
    (searchValue === undefined || searchValue === "")
  ) {
    header = `<h3 class="blog-heading">All Blogs</h3>`;
    mostPopularBlogSection.style.display = "block";
  } else {
    mostPopularBlogSection.style.display = "none";
  }
  if (blogs.length === 0) {
    result = `<div style="display:flex;justify-content: center;" class="no-data-found">
             <div class="no-data-template">
                  <img src="../assets/image/blog/no-data-found.svg" alt="no-data-found">
                
               </div>
              </div>`;
  } else {
    blogs.forEach((blog) => {
      //  console.log(blog);

      const categoryBadges = blog.categories
        .map(
          (category) =>
            `<div class="blog-category-badge">${category.name}</div>`
        )
        .join("");
      result += `<a href="./blog-detail?blog=${blog.uri}" target="_blank" >
                        <div class="blog-main-box">
                            <div class="blog-box-images">
                                <img src="${blog.thumbnailImage}" alt="${blog.title}" />
                            </div>
                            <div class="blog-box-content">
                                <div>
                                  <div class="d-flex align-item-center justify-content-space-between">
                                      <div class="blog-badge-box" style="display:flex;gap: 16px;">${categoryBadges}</div>
                                  </div>
                                  <p class="blog-box-title">${blog.title}</p>
                                  <p class="blog-box-shortDescription" >${blog.shortDescription}</p>
                                 </div>
                                 <div class="learn-more-link">Read more<img src="../assets/image/blog/arrow-right-sharp.png" alt="arrow-up-right-01-sharp" class="learnmore-arrow "></div>
                            </div>
                        </div>
                    </a>`;
    });
  }
  document.getElementById("blog-container").innerHTML =
    header + `<div class="blog-list" id="blog-data">${result}</div>`;
}

// Function to display pagination controls
function displayPaginationControls(totalPages, currentPage, totalBlogs) {
  if (totalBlogs > limit) {
    let paginationHTML = '<div class="pagination-main-section">';

    // Add "Load More" button
    if (currentPage < totalPages) {
      paginationHTML += `<div class="load-more-section"><button onclick="changePage(${
        currentPage + 1
      })" class="load-more-button">
        Load More
      </button></div>`;
    } else {
      paginationHTML += ``;
    }

    paginationHTML += "</div>";
    document.getElementById("pagination-controls").innerHTML = paginationHTML;
  } else {
    document.getElementById("pagination-controls").innerHTML = "";
  }
}

// Function to handle page change
async function changePage(page) {
  if (page < 1) return;
  currentPage = page;
  await fetchBlogData(currentPage, clickedValue);
}

// date format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}

// blog latest blog
async function fetchLatestBlogData() {
  try {
    let response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/blog/`
    );
    let data = await response.json();

    let result = "";
    data.blog.results.forEach((blog) => {
      result = `<a href="./blog-detail?blog=${
        blog.uri
      }" target="_blank" ><div class="blog-main-box-side latestBlog">
            <div class="blog-box-image-section">
              <img src="${blog.thumbnailImage}" alt="${blog.title}" />
            </div>
            <div class="blog-box-content-section">
              <div class="blog-box-heading-section d-flex align-item-center justify-content-space-between">
                <div class="blog-box-badge">${blog.category.name}</div>
                <h6>${formatDate(blog.createdAt)}</h6>
              </div>
              <p>${blog.title}</p>
            </div>
          </div></a>`;
    });
    document.getElementById("blog-data2").innerHTML = result;
  } catch (error) {
    console.error("Error fetching latest blog data:", error);
  }
}
function openBlogDetail(bloguri) {
  window.location.href = `blog-detail?id=${bloguri}`;
}

function setClickedValue(value) {
  document.getElementById("selectedCategory").textContent = value;
}
// get blog category
async function fetchCategories() {
  try {
    let response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/blog/blogpage-info`
    );
    let data = await response.json();

    let categories = data.getCategoryList || [];
    categories = [{ name: "All Blogs", id: null }, ...categories];
    let setCategory = "";
    categories.forEach((category, index) => {
      const isActive = index === 0 ? "active" : "";
      setCategory += `<div class='category-item ${isActive}' data-id='${category.id}'>${category.name}</div>`;
    });

    document.getElementById("blogcategory").innerHTML = setCategory;

    document
      .querySelectorAll("#blogcategory .category-item")
      .forEach((item) => {
        item.addEventListener("click", function (event) {
          document
            .querySelectorAll("#blogcategory .category-item")
            .forEach((el) => el.classList.remove("active"));

          this.classList.add("active");

          const dataId = event.target.getAttribute("data-id");
          const textContent = event.target.textContent.trim();

          handlechange({
            id: dataId,
            name: textContent,
          });
        });
      });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

let searchValue = "";
let categoryId = "";

const handlechange = (value) => {
  const data = {
    page: 1,
    limit: 6,
    category: value?.id,
  };
  categoryId = value?.id;
  clickedValue = value?.id;
  allBlogs = [];
  fetchBlogData(1, value.id || "All Category", searchValue);
};

const debouncedSearch = (() => {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fetchBlogData(1, categoryId || "All Category", value);
    }, 800);
  };
})();

document
  .getElementById("blogSearchInput")
  .addEventListener("input", (event) => {
    searchValue = event.target.value;
    debouncedSearch(event.target.value);
  });
function showLoader() {
  const blogDataEle = document.getElementById("blog-data");
  !blogDataEle.classList.contains("display-none") &&
    blogDataEle.classList.toggle("display-none");
  document.getElementById("loader").style.display = "block";
}

function hideLoader() {
  const blogDataEle = document.getElementById("blog-data");
  document.getElementById("loader").style.display = "none";
  blogDataEle.classList.contains("display-none") &&
    blogDataEle.classList.toggle("display-none");
}
document.addEventListener("DOMContentLoaded", () => {
  fetchCategories();
  // Initial fetch
  fetchBlogData(currentPage, clickedValue);
});
