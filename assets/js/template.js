var category = localStorage.getItem("category");
const IMAGE_PATH = "https://cdn.cloudairy.net/image/";

async function fetchTemplateData(
  page = 1,
  pageSize = 10,
  clickedValue,
  search
) {
  try {
    showLoader();
    const response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/template/category`
    );
    const data = await response.json();

    const templates = data?.data?.categories;

    displayTemplates(templates);

    displayPaginationControls(total_pages, page, total_rows);
  } catch (error) {
  } finally {
    hideLoader();
  }
}

async function fetchTemplateDataSearch(
  page = 1,
  pageSize = 10,
  clickedValue,
  search,
  index
) {
  try {
    showLoader();

    var category = localStorage.getItem("category");

    const categoryId =
      category && category !== "null" ? "All Category" : clickedValue;

    const response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/template?nolimit=true${
        categoryId && categoryId !== "All Category"
          ? `&categoryId=${categoryId}`
          : ""
      }${search ? `&search=${search}` : ""}`
    );

    const data = await response.json();
    const templates = data?.data?.resData;
    const total_pages = data?.data?.total_pages;
    const total_rows = data?.data?.total_rows;

    displayTemplates1(templates, index);
    displayPaginationControls(total_pages, page, total_rows);
  } catch (error) {
    console.error("Error fetching Template data:", error);
  } finally {
    hideLoader();
  }
}
if (category) {
  setTimeout(function () {
    // fetchTemplateDataSearch(1, 10, category, "", 0);
    localStorage.removeItem("category");
    localStorage.removeItem("template");
  }, 2000);
}

function displayTemplates1(templates, index) {
  const templateGridTitle = document.getElementById("templateGrid-title1");
  const templateGrid = document.getElementById("templateGrid1");
  const templateGridTitle1 = document.getElementById("templateGrid-title");
  const templateGrid1 = document.getElementById("templateGrid");
  const templateTitle = document.getElementById("categery-title");
  const templateDescription = document.getElementById("categery-decscription");
  const templateTitle1 = document.getElementById("templateGrid-title");
  const title = document.getElementById("backButton");
  if (index === true) {
    templateTitle.innerHTML = templates[0]?.category_name + " Templates";
    title.style.display = "block";
    templateTitle1.style.display = "none";
    templateDescription.innerHTML =
      "Minimize the time needed to synthesize and distribute findings after a meeting, and move straight into executing strategies with Miro";
  }
  templateGridTitle.innerHTML = "";
  templateGrid.innerHTML = "";
  templateGrid1.innerHTML = "";
  templateGridTitle1.innerHTML = "";
  if (templates.length === 0) {
    templateGrid.innerHTML = `
      <div class="no-data-found loader" style="display:flex;justify-content: center;">
        <div class="no-data-template">
        <img src="${IMAGE_PATH}blog/no-data-found.svg" alt="no-data-found">
        </div>
      </div>`;
    return;
  }

  templateGridTitle.innerHTML = `
    <div class="template-title">
      <div class="template-name">${
        templates[0]?.category_name || "Templates"
      }</div>
     
    </div>`;

  const checkImageAvailability = (url, callback) => {
    const img = new Image();
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
    img.src = url;
  };

  // Build templates
  templates.forEach((template, index) => {
    const defaultImage = `${IMAGE_PATH}template/template-default-image.png`;

    const templateHTML = `
 <div class="template-cards1">
      <div class="template-item template-padding"> 
        <div class="templatee-spacing">
          <div class="template-img-side-2">
            <img 
              id="displayImage${index}" 
              alt="${template.template_name}" 
              src="${defaultImage}" />
            <div class="overlay">
              <a 
                href="https://app.cloudairy.com?t_id=${template.template_id}" 
                target="_blank" 
                class="btn-Use-Template">Use Template</a>
              <a 
                href="./template-detail?template=${template.uri}" 
                target="_blank" 
                class="btn-Preview">Preview</a>
            </div>
          </div>
        </div>
        <div class="template-type">${template?.type || "N/A"}</div>
        <div class="template-content-side">
          <h5>${template.template_name}</h5>
          <p>${template.template_description || ""}</p>

          <a 
            style="display: flex; gap: 9px;" 
            class="learn-more-link"
            href="./template-detail?template=${template.uri}" 
            target="_blank">
            <div class="learn-more">Learn more</div>
            <div class="learnmore-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.0711 11.9989H3.5148" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M15.5352 7.04883L19.7778 11.2915C20.1111 11.6248 20.2778 11.7915 20.2778 11.9986C20.2778 12.2057 20.1111 12.3723 19.7778 12.7057L15.5352 16.9483" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div></div>`;

    // Append template to result
    templateGrid.innerHTML += templateHTML;

    // Set image source dynamically
    checkImageAvailability(template.website_thumbnail_image, (isAvailable) => {
      const displayImage = document.getElementById(`displayImage${index}`);
      if (displayImage) {
        displayImage.src = isAvailable
          ? template.website_thumbnail_image
          : template.thumbnail_image;
      }
    });
  });
}
function displayTemplatesCategory(templates, currentPage = 1, value) {
  fetchTemplateDataSearch(templates, currentPage, value, "", true);
}

function displayTemplates(templates) {
  const templateGridTitle = document.getElementById("templateGrid-title");
  const templateGrid = document.getElementById("templateGrid");

  // Clear previous content
  templateGridTitle.innerHTML = "";
  templateGrid.innerHTML = "";

  if (templates.length === 0) {
    templateGrid.innerHTML = `
      <div class="no-data-found loader" style="display:flex;justify-content: center;">
        <div class="no-data-template">
        
          <h1 class="heading-no-data" style="text-align:center; padding-top:10px;">No Data Found</h1>
        </div>
      </div>`;
    return;
  }

  // Loop through each category
  templates.forEach((category) => {
    // console.log(category.category_id);

    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category-section");

    categoryDiv.innerHTML = `
    <div class="temp">
      <div class="category-title">
        <div>${category.category_name}</div>
      </div>
      

          <div class="category-templete" 
     onclick="displayTemplatesCategory(1, 11, '${category.category_id}')"
     style="display: ${category?.templates?.length > 3 ? "block" : "none"};">
  <div class="view-all-text">View all ${
    category?.templates?.length
  } Templates <div class="learnmore-arrow">
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.25 13.5L11.0429 9.70711C11.3762 9.37377 11.5429 9.20711 11.5429 9C11.5429 8.79289 11.3762 8.62623 11.0429 8.29289L7.25 4.5" stroke="url(#paint0_linear_291_52695)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_291_52695" x1="8.42851" y1="4.33405" x2="13.4663" y2="9.80637" gradientUnits="userSpaceOnUse">
<stop stop-color="#7630FF"/>
</linearGradient>
</defs>
</svg></div>
</div>
</div>

      
    </div>
    <div class="template-cards">
  `;
    // Loop through templates within the category
    category.templates.slice(0, 3).forEach((template, index) => {
      const templateCard = document.createElement("div");
      templateCard.classList.add("template-item", "template-card");
      templateCard.innerHTML = `
         <div class="template-item template-padding"> 
        <div class="templatee-spacing">
          <div class="template-img-side-2">
        <div class="template-img-side-2">
          <img id="displayImage${index}" alt="${template.template_name}" src="${
        template.website_thumbnail_image || "default_image_url"
      }" />
          <div class="overlay">
              <a 
                href="https://app.cloudairy.com?t_id=${template.template_id}" 
                target="_blank" 
                class="btn-Use-Template">Use Template</a>
                <a 
                href="./template-detail?template=${template.uri}" 
                target="_blank" 
                class="btn-Preview">Preview</a>
            </div>
          </div>
        </div>
        </div>
            <div class="template-type">${template?.type || "N/A"}</div>
        <div class="template-content-side">
          <h5>${template.template_name}</h5>
          <p>${template.template_description || ""}</p>
          <a 
           class="learn-more-link"
            style="display: flex; gap: 9px;" 
            href="./template-detail?template=${template.uri}" 
            target="_blank">
            <div class="learn-more">Learn more</div>
            <div class="learnmore-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.0711 11.9989H3.5148" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M15.5352 7.04883L19.7778 11.2915C20.1111 11.6248 20.2778 11.7915 20.2778 11.9986C20.2778 12.2057 20.1111 12.3723 19.7778 12.7057L15.5352 16.9483" stroke="#6762FE" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
        </div>
      `;

      // Append the card to the category's section
      categoryDiv.querySelector(".template-cards").appendChild(templateCard);
    });

    // Append the entire category section to the template grid
    templateGrid.appendChild(categoryDiv);
  });
}

let clickedValue = "All Category";

function setClickedValue(value) {
  clickedValue = value;
  document.getElementById("selectedCategory").textContent = value;
}

// get blog category
async function fetchCategories() {
  try {
    let response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/categories`
    );
    let data = await response.json();
    let categories = data.categories || [];
    categoriesList = [
      { category_name: "All Category", category_id: null },
      ...(data.categories || []),
    ];
    fetchTemplateData();

    categories = [
      { category_name: "All Category", category_id: null },
      ...categories,
    ];

    const selectElement = document.getElementById("templatecategory");

    selectElement.innerHTML =
      '<option value="" disabled selected>Select category</option>';

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.category_id;
      option.textContent = category.category_name;
      selectElement.appendChild(option);
    });

    selectElement.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      const selectedText =
        event.target.options[event.target.selectedIndex].textContent;
      handlechange({
        category_id: selectedValue,
        category_name: selectedText,
      });
    });
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

async function fetchCategories1() {
  try {
    let response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/categories`
    );
    let data = await response.json();
    let categories = data.categories || [];
    categoriesList = [
      { category_name: "All Category", category_id: null },
      ...(data.categories || []),
    ];
    fetchTemplateData();

    categories = [
      { category_name: "All Category", category_id: null },
      ...categories,
    ];

    const selectElement = document.getElementById("templatecategory1");

    selectElement.innerHTML =
      '<option value="" disabled selected>Select category</option>';

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.category_id;
      option.textContent = category.category_name;
      selectElement.appendChild(option);
    });

    var category = localStorage.getItem("category");

    if (category) {
      selectElement.value = category;

      const selectedText =
        selectElement.options[selectElement.selectedIndex].textContent;
      handlechange({
        category_id: category,
        category_name: selectedText,
      });

      setTimeout(function () {
        fetchTemplateDataSearch(1, 10, category, "", 0);
        localStorage.removeItem("category");
      }, 1000);
    }

    selectElement.addEventListener("change", (event) => {
      const selectedValue = event.target.value;
      const selectedText =
        event.target.options[event.target.selectedIndex].textContent;
      handlechange({
        category_id: selectedValue,
        category_name: selectedText,
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
    pageSize: 6,
    categoryId: value?.category_id,
  };
  console.log("searchValue", value?.category_name);

  categoryId = value?.category_id;
  if (value?.category_name === "All Category") {
    fetchTemplateData();
  } else {
    fetchTemplateDataSearch(
      1,
      6,
      value.category_id || "All Category",
      searchValue
    );
  }
};

function togglePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}
function toggleTempleShow() {
  const templateGrid1 = document.getElementById("templateGrid1");
  const templateGrid = document.getElementById("templateGrid");
  const templateTitleGrid = document.getElementById("templateGrid-title");
  const templateGridLoeader = document.getElementById("templateGrid-loeader");
  const templateGrid2 = document.getElementById("templateGrid2");
  const templateGridtitle3 = document.getElementById("templateGrid-title3");
  const templateGrid3 = document.getElementById("templateGrid3");
  const templateGridtitle1 = document.getElementById("templateGrid-title1");
  const templateGridTitle2 = document.getElementById("templateGrid-title2");
  templateGrid1.style.display = "none";
  templateGrid2.style.display = "none";
  templateGridtitle1.style.display = "none";
  templateGridTitle2.style.display = "none";
  templateGridtitle3.style.display = "none";
  templateGrid3.style.display = "none";
  templateGridLoeader.style.display = "none";
  templateGrid.style.display = "grid";
  templateTitleGrid.style.display = "block";
}

function toggleTempleHide() {
  const templateGridLoeader = document.getElementById("templateGrid-loeader");
  const templateGrid1 = document.getElementById("templateGrid1");
  const templateGrid = document.getElementById("templateGrid");
  const templateGrid2 = document.getElementById("templateGrid2");
  const templateTitleGrid = document.getElementById("templateGrid-title");
  const templateGridtitle3 = document.getElementById("templateGrid-title3");
  const templateGrid3 = document.getElementById("templateGrid3");
  const templateGridtitle1 = document.getElementById("templateGrid-title1");
  const templateGridTitle2 = document.getElementById("templateGrid-title2");
  templateGrid1.style.display = "grid";
  templateGrid2.style.display = "grid";
  templateGridtitle1.style.display = "grid";
  templateGridTitle2.style.display = "grid";
  templateGridtitle3.style.display = "grid";
  templateGrid3.style.display = "grid";
  templateGrid.style.display = "none";
  templateGridLoeader.style.display = "none";
  templateTitleGrid.style.display = "none";
}
function togglePopupSearch() {
  const popup = document.getElementById("templatelistHeading");
  const inputShow = document.getElementById("inputShow");
  popup.style.display = "none";
  inputShow.style.display = "block";
}

function togglePopupSearchHide() {
  const popup = document.getElementById("templatelistHeading");
  const inputShow = document.getElementById("inputShow");
  popup.style.display = "block";
  inputShow.style.display = "none";
  debouncedSearch();
  // document
  //   .getElementById("templateSearchInput1")
  //   .addEventListener("input", (event) => {
  //     searchValue = event.target.value;
  //     debouncedSearch(event.target.value);
  //   });
}

function SearchRecord() {
  document
    .getElementById("templateSearchInput")
    .addEventListener("input", (event) => {
      searchValue = event.target.value;
      debouncedSearch(event.target.value);
    });
}
const debouncedSearch = (() => {
  let timer;
  return (value) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      if (value) {
        fetchTemplateDataSearch(1, 6, categoryId || "", value);
      } else {
        fetchTemplateData();
      }
    }, 800);
  };
})();

document
  .getElementById("templateSearchInput")
  .addEventListener("input", (event) => {
    searchValue = event.target.value;
    debouncedSearch(event.target.value);
  });

document
  .getElementById("templateSearchInput1")
  .addEventListener("input", (event) => {
    searchValue = event.target.value;
    debouncedSearch(event.target.value);
  });
function showLoader() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("templateGrid").style.display = "none";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("templateGrid").style.display = "grid";
}
document.addEventListener("DOMContentLoaded", () => {
  const templateGridTitle = document.getElementById("templateGrid-title");
  const templateGrid = document.getElementById("templateGrid");

  // Clear previous content
  templateGridTitle.innerHTML = "";
  templateGrid.innerHTML = "";
  fetchCategories();
  fetchCategories1();
});

// Function to display pagination controls
function displayPaginationControls(total_pages, currentPage, total_rows) {
  if (total_rows > 6) {
    let paginationHTML = '<div class="pagination-main-section">';
    paginationHTML += `<a href="#" onclick="changePage(${currentPage - 1})" ${
      currentPage === 1 ? 'style="visibility: hidden;"' : ""
    }>
                <svg width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 1L1 5L5 9" stroke="#5E6C87" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>`;
    for (let i = 1; i <= total_pages; i++) {
      paginationHTML += `<a href="#" class="${
        i === currentPage ? "active" : ""
      }" onclick="changePage(${i})">${i}</a>`;
    }
    paginationHTML += `<a href="#" onclick="changePage(${currentPage + 1})" ${
      currentPage === total_rows ? 'style="visibility: hidden;"' : ""
    }>
                <svg width="8" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 9L5 5L1 1" stroke="#5E6C87" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </a>`;
    paginationHTML += "</div>";
    document.getElementById("pagination-controls").innerHTML = paginationHTML;
  } else {
    // Hide pagination controls if there are 8 or fewer blogs
    document.getElementById("pagination-controls").innerHTML = "";
  }
}

// Function to handle page change
async function changePage(page) {
  const response = await fetch(
    `${window.config.base_url}/adminapi/v1/frontend/template`
  );
  const data = await response.json();
  const total_rows = data?.data?.total_rows;
  if (page < 1 || page > Math.ceil(total_rows / 6)) return;
  currentPage = page;
  // fetchTemplateData(currentPage);
}

// Initial fetch
// fetchTemplateData();
