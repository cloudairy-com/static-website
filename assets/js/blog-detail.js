// const params = new URLSearchParams(window.location.search);

const base_url = window.config.base_url;

const blogId = window.location.pathname.split("/blog/")[1];
const getBlogDetail = async (url) => {
  showLoader();
  try {
    const response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/blog/detail/${blogId}`
    );

    const blogDetail = await response.json();
    const blogs = blogDetail.blog;
    const blogTitle = blogs.title;
    const blogDesc = blogs.metaDescription;
    const blogKey = blogs.metaKeyword;
    document.title = blogTitle;
    document.description = blogDesc;
    // const metaTagTitle = document.querySelector('meta[name="title"]');
    // if (metaTagTitle) {
    //   metaTagTitle.setAttribute("content", blogTitle);
    // }
    // const metaKey = document.querySelector('meta[name="keywords"]');
    // if (metaKey) {
    //   metaKey.setAttribute("content", blogKey);
    // }
    // const metaTag = document.querySelector('meta[property="og:title"]');
    // if (metaTag) {
    //   metaTag.setAttribute("content", blogTitle);
    // }
    // const metaDesc = document.querySelector('meta[property="og:description"]');
    // if (metaDesc) {
    //   metaDesc.setAttribute("content", blogDesc);
    // }
    // const metaTagDesc = document.querySelector('meta[name="description"]');
    // if (metaTagDesc) {
    //   metaTagDesc.setAttribute("content", blogDesc);
    // }

    const latestBlogs = blogDetail.latestBlogs;
    displayblogdetails(blogs);
    displaylatestBlogs(latestBlogs);
    Gettableindex(blogs);
  } catch (error) {
    console.error("Error::", error);
  } finally {
    hideLoader();
  }
};
// date format
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}
getBlogDetail(blogId);
function displayblogdetails(blogs) {
  const blogTitleElement = document.getElementById("blog-title");
  blogTitleElement.innerText = blogs.title;
  const blogTitleElement_path = document.getElementById("blog-title1");
  blogTitleElement_path.innerText = blogs.title;
  const blogCategoryElement = document.getElementById("blog-category");

  blogCategoryElement.innerHTML = "";

  blogs.categories.forEach((category) => {
    const categoryBadge = document.createElement("span");
    categoryBadge.className = "blog-category-badge";
    categoryBadge.innerText = category.name;
    blogCategoryElement.appendChild(categoryBadge);
  });
  const blogauthor = document.getElementById("blog-author");
  blogauthor.innerText = blogs.author.name;
  const blogDate = document.getElementById("blog-date");
  blogDate.innerText = formatDate(blogs.createdAt);
  const blogTitleElement1 = document.getElementById("blog-title-table");
  blogTitleElement1.innerText = blogs.title;
  const blogImageElement = document.getElementById("blog-main-image");
  blogImageElement.src = blogs.image;
  blogImageElement.alt = blogs.title;
  const blogcreater = document.getElementById("blog-creater");
  blogcreater.src = blogs.author.profileImage;
  blogcreater.alt = blogs.title;
  function createElement(tag, attributes = {}, innerHTML = "") {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attributes)) {
      element.setAttribute(key, value);
    }
    element.innerHTML = innerHTML;
    return element;
  }
  // blog container data
  const blogCardContent = document.getElementById("blog-cardContent");

  if (blogCardContent) {
    const mainSection = blogs.cardContent;
    if (mainSection) {
      if (typeof mainSection === "string") {
        blogCardContent.innerHTML = mainSection;
      } else if (mainSection instanceof Node) {
        blogCardContent.appendChild(mainSection);
      } else {
        console.error(
          "Invalid content type for mainSection. Must be a string or DOM Node."
        );
      }
    }
  } else {
    console.error("Element with id 'blog-cardContent' not found.");
  }

  // table index section data
  const tableindexsction = document.getElementById("blog-tableindexsction");

  blogs.tableIndexSection.forEach((data, index) => {
    const sectionDiv = createElement("div", { id: data._id });
    const titleClass = `sectiontitle${
      index === 0 && !blogs.cardContent ? "pt-0" : ""
    }`;
    const titleElement = createElement(
      "h2",
      {
        class: titleClass,
      },
      data.title
    );
    sectionDiv.appendChild(titleElement);

    data.section.forEach((sectionData, ind) => {
      const contentDiv = createElement("div", { key: ind });
      // if (!sectionData.template_description && ind === 0) {
      //   const titleElement = createElement(
      //     "h2",
      //     {
      //       class: "sectiontitle",
      //     },
      //     data.title
      //   );
      //   sectionDiv.appendChild(titleElement);
      // }

      if (
        !sectionData.template_description &&
        !sectionData.template_image &&
        sectionData.content
      ) {
        const innerContentDiv = createElement("div", {
          class: "text-blog-text",
        });
        innerContentDiv.innerHTML = sectionData.content;
        contentDiv.appendChild(innerContentDiv);
      }
      if (sectionData.image) {
        const imageContainerDiv = createElement("div", {
          class: "image-base",
        });
        const imgElement = createElement("img", {
          src: sectionData.image,
          alt: blogs.title,
          class: "blog-sub-image",
        });
        imageContainerDiv.appendChild(imgElement);
        contentDiv.appendChild(imageContainerDiv);
      }
      if (sectionData.image && sectionData.source) {
        const sourceDiv = createElement(
          "div",
          { class: "source-text" },
          `Source: &nbsp;${sectionData.source}`
        );
        contentDiv.appendChild(sourceDiv);
      }
      if (sectionData.image && sectionData.template_link) {
        const sourceDiv = createElement(
          "a",
          {
            class: "source-text",
            href: sectionData.template_link,
            target: "_blank",
            style: `
              font-weight: 600;
              font-size: 16px;
              text-align: center;
              color: #007aff;
              text-decoration: underline;
              text-underline-offset: 2px;
              display: block;
            `,
          },
          `${sectionData.template_description}`
        );
        contentDiv.appendChild(sourceDiv);
      }
      if (sectionData.template_image) {
        const templateData = document.getElementById("content-div-id");
        if (ind === 0) {
          // Add title after key -1 (only for first section)
          //  const titleElement = createElement(
          //    "h2",
          //    {
          //      class: "sectiontitle",
          //    },
          //    data.title
          //  );
          //  sectionDiv.appendChild(titleElement);
        }
        if (sectionData.content) {
          const innerContentDiv = createElement("div", {
            class: "text-blog-text",
          });
          innerContentDiv.innerHTML = sectionData.content;
          contentDiv.appendChild(innerContentDiv);
        }

        if (
          sectionData.template_image ||
          (sectionData.template_description && sectionData.template_link)
        ) {
          const linkWrapper = document.createElement("a");
          if (sectionData.template_link) {
            linkWrapper.href = sectionData.template_link;
          }
          linkWrapper.target = "_blank";
          linkWrapper.style.display = "block";

          if (sectionData.template_image) {
            const imageContainerDiv = createElement("div", {
              class: "template-image-base",
            });
            const imgElement = createElement("img", {
              src: sectionData.template_image,
              alt: sectionData.template_description,
              class: "blog-sub-image",
            });
            imageContainerDiv.appendChild(imgElement);
            linkWrapper.appendChild(imageContainerDiv);
          }

          if (sectionData.template_description) {
            const innerContentDiv = document.createElement("div");
            innerContentDiv.className = "text-template-name";
            innerContentDiv.style.position = "relative";
            innerContentDiv.innerHTML = sectionData.cta_title;

            linkWrapper.appendChild(innerContentDiv);
          }

          contentDiv.appendChild(linkWrapper);
        }
      }

      const contentDiv3 = document.getElementById("content-div-id");
      if (sectionData.template_image && sectionData.source) {
        const sourceDiv = createElement(
          "div",
          { class: "source-text source-set" },
          `Source: &nbsp;${sectionData.source}`
        );
        contentDiv.appendChild(sourceDiv);
      }

      if (sectionData.cta_status) {
        const sectionContainerDiv = createElement("div", {
          class: "section-container",
        });
        // const titleElement = createElement(
        //   "h2",
        //   {
        //     class: "sectiontitle",
        //   },
        //   data.title
        // );
        // sectionContainerDiv.appendChild(titleElement);

        if (sectionData.cta_status) {
          const innerContentDiv = createElement("div", {
            class: "text-blog-text",
          });
          innerContentDiv.innerHTML = sectionData.content;
          sectionContainerDiv.appendChild(innerContentDiv);
        }

        sectionDiv.appendChild(sectionContainerDiv);

        const templateFooterDiv = createElement("div", {
          class: "blog-detailed-tab-footer",
          style:
            "margin-top: 20px; display: none; ",
        });

        const templateDescriptionElement = createElement("p", {
          id: "open-template-description",
        });
        templateFooterDiv.appendChild(templateDescriptionElement);

        const dynamicTemplateLinkElement = createElement("a", {
          id: "dynamic-template-link",
          rel: "canonical",
          class: "d-flex blog-detailed-button",
          style: "gap: 10px",
        });

        const dynamicLinkTextElement = createElement("span", {
          id: "dynamic-link-text",
        });

        templateFooterDiv.appendChild(dynamicTemplateLinkElement);

        if (sectionData.cta_status) {
          const titleElement = createElement("h4", {
            class: "cta-title",
            style: "color: #6762FE; font-size: 26px; line-height:39px;",
          });
          titleElement.textContent = sectionData.cta_title;
          templateDescriptionElement.appendChild(titleElement);

          const descriptionElement = createElement("p", {
            class: "cta-description",
          });
          descriptionElement.textContent = sectionData.cta_description;
          templateDescriptionElement.appendChild(descriptionElement);

          const signUpButton = createElement("a", {
            class: "cta-signup-button",
            target: "_blank",
            href: "https://app.cloudairy.com/signup",
          });
          signUpButton.textContent = "Sign up free";

          templateDescriptionElement.appendChild(signUpButton);

          templateFooterDiv.style.display = "flex";
        }

        contentDiv.appendChild(templateFooterDiv);
      }

      // if (sectionData.video) {
      //   const videoContainerDiv = createElement("div", {
      //     class:
      //       "w-full rounded-xl overflow-hidden md:mb-6 mb-3 bg-[#F7F7F9] md:p-5 p-2",
      //   });
      //   const iframeElement = createElement("iframe", {
      //     class:
      //       "w-full lg:max-h-[350px] lg:min-h-[350px] lg:h-[350px] rounded-xl overflow-hidden",
      //     src: sectionData.video,
      //     title: "video player",
      //     frameborder: "0",
      //     allow:
      //       "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      //     allowfullscreen: true,
      //   });
      //   videoContainerDiv.appendChild(iframeElement);
      //   contentDiv.appendChild(videoContainerDiv);
      // }
      sectionDiv.appendChild(contentDiv);
    });

    tableindexsction.appendChild(sectionDiv);
  });
}
// function Gettableindex(blogs) {
//   let result = "";
//   blogs.tableIndexSection.forEach((data, index) => {
//     if (data.title.trim() !== "") {
//       console.log(data.title);
//       result += `<li><a href="#${data._id}" class="toc-item"><div><svg style='padding-top:3px' width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M1 13L6.29289 7.70711C6.62623 7.37377 6.79289 7.20711 6.79289 7C6.79289 6.79289 6.62623 6.62623 6.29289 6.29289L1 1" stroke="#171617" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// </div>${data.title}</a></li>`;
//     }
//   });

//   const blogTab = document.getElementById("blog-tab");
//   blogTab.innerHTML = result;
// }
// function displaylatestBlogs(latestBlogs) {
//   console.log(latestBlogs);
// }
function Gettableindex(blogs) {
  let result = "";
  blogs.tableIndexSection.forEach((data, index) => {
    if (data.title.trim() !== "") {
      result += `<li><a href="#${data._id}" class="toc-item" data-id="${data._id}">${data.title}</a></li>`;
    }
  });

  const blogTab = document.getElementById("blog-tab");
  blogTab.innerHTML = result;

  const tocItems = blogTab.querySelectorAll(".toc-item");
  tocItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  });

  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -80% 0px", // Adjust this value as needed
    threshold: 0,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const tocItem = document.querySelector(`.toc-item[data-id='${id}']`);
      if (entry.isIntersecting) {
        tocItems.forEach((item) => item.classList.remove("active"));
        tocItem.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each section
  blogs.tableIndexSection.forEach((data) => {
    const section = document.getElementById(data._id);
    if (section) {
      observer.observe(section);
    }
  });
}

function displaylatestBlogs(blogs) {
  let result = "";
  let result2 = "";
  blogs.slice(0, 3).forEach((blog) => {
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
  document.getElementById("blog-data").innerHTML = result;
}
function showLoader() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("content").style.display = "none";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  // document.getElementById("content").style.display = "none";
  displaylatestBlogs();
  Gettableindex(blogs);
});
