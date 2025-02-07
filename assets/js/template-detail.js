const base_url = window.config.base_url;
// const params = new URLSearchParams(window.location.search);
// const templateId = params.get("template");
// console.log(templateId, "templateId");
const templateId = window.location.pathname.split("/template/")[1];
const templateLink = document.getElementById("template-link");
const templateLink1 = document.getElementById("template_link1");
// const templateLink2 = document.getElementById("template-link2");
const imageLink = document.getElementById("template-img-link");
const getTemplateDetail = async (url) => {
  showLoader();
  try {
    const response = await fetch(
      `${window.config.base_url}/adminapi/v1/frontend/template/${templateId}`
    );
    const templatelistdata = await response.json();
    const templateDetail = templatelistdata?.data?.templateDetails;
    const templateTitle = templateDetail.template_name;
    const templateDesc = templateDetail.template_description;
    const templateKey = templateDetail.meta_keyword;
    // console.log(templateTitle, "titleeeeeeeee");
    document.title = templateTitle;
    document.description = templateDesc;
    const metaTagTitle = document.querySelector('meta[name="title"]');
    if (metaTagTitle) {
      metaTagTitle.setAttribute("content", templateTitle);
    }
    const metaTagDesc = document.querySelector('meta[name="description"]');
    if (metaTagDesc) {
      metaTagDesc.setAttribute("content", templateDesc);
    }
    const metaTag = document.querySelector('meta[property="og:title"]');
    if (metaTag) {
      metaTag.setAttribute("content", templateTitle);
    }
    const metaDesc = document.querySelector('meta[property="og:description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", templateDesc);
    }
    console.log(templateDetail.template_id, "1111111111111111111");
    const lastestTemplate = templatelistdata?.data?.relatedTemplates;
    // console.log(lastestTemplate, "lastestTemplate");
    if (lastestTemplate) {
      //   console.log(lastestTemplate, "lastestTemplate");

      displayLastestTemplate(lastestTemplate);
    }
    displayTemplatedetails(templateDetail);
    // templateLink.href = `https://app.cloudairy.info?${templateDetail.template_id}`;
    templateLink1.href = `https://app.cloudairy.info?${templateDetail.template_id}`;
    // templateLink2.href = `https://app.cloudairy.info?${templateDetail.template_id}`;
    // imageLink.href = `https://app.cloudairy.info?${templateDetail.template_id}`;
  } catch (error) {
    console.error("Error::", error);
  } finally {
    hideLoader();
  }
};
function displayTemplatedetails(templateDetail) {
  const template_cta = document.getElementById("template-cta");.0

  template_cta.innerText = templateDetail.template_name;

  const templateTitleElement = document.getElementById("template-title");
  templateTitleElement.innerText =
    templateDetail.template_name !== null && templateDetail.template_name !== ""
      ? templateDetail.template_name
      : "";
  const templateTitleElement1 = document.getElementById("template-title1");
  templateTitleElement1.innerText =
    templateDetail.template_name !== null && templateDetail.template_name !== ""
      ? templateDetail.template_name
      : "";
  const templatedescElement = document.getElementById("template-desc");
  templatedescElement.innerText =
    templateDetail.template_description !== null &&
    templateDetail.template_description !== ""
      ? templateDetail.template_description
      : "";
  const templateImageElement = document.getElementById("template-main-image");
  templateImageElement.src =
    templateDetail.detail_image !== null && templateDetail.detail_image !== ""
      ? templateDetail.detail_image
      : templateDetail.website_thumbnail_image != null &&
        templateDetail.website_thumbnail_image != ""
      ? templateDetail.website_thumbnail_image
      : templateDetail.thumbnail_image;
  templateImageElement.alt =
    templateDetail.meta_keyword !== null && templateDetail.meta_keyword !== ""
      ? templateDetail.meta_keyword
      : templateDetail.template_name;
  const templateSource = document.getElementById("template-source");

  if (templateDetail?.image_source) {
    templateSource.innerHTML = `Source: &nbsp;${templateDetail.image_source}`;
  }
  // const templatesectiondescElement =
  //   document.getElementById("editor-description");
  // templatesectiondescElement.src = templateDetail.template_details;

  // table index section data
  const tableindexsection = document.getElementById("editor-description");
  // console.log(templateDetail?.template_details);

  if (templateDetail?.template_details) {
    tableindexsection.innerHTML = templateDetail?.template_details;
  }
}
function showLoader() {
  document.getElementById("loader").style.display = "block";
  document.getElementById("content").style.display = "none";
}

function hideLoader() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}

// Function to display blogs
function displayLastestTemplate(lastestTemplate) {
  const templateTitle = document.getElementById("templateTitle");
  let result = "";
  lastestTemplate.forEach((template, index) => {
    // console.log(`Processing template at index ${index}:`, template);

    function checkImageAvailability(url, callback) {
      const img = new Image();
      img.onload = () => callback(true);
      img.onerror = () => callback(false);
      img.src = url;
    }

    checkImageAvailability(
      template.website_thumbnail_image,
      function (isAvailable) {
        const displayImage = document.getElementById(`displayImage${index}`);
        if (isAvailable) {
          displayImage.src = template.website_thumbnail_image;
        } else {
          displayImage.src = template.thumbnail_image;
        }
      }
    );

    result += `
                <div class="template-item template-padding">
                    <div class="templatee-spacing">
                        <div class="template-img-side-2">
                            <img id="displayImage${index}" alt="${
      template.template_name
    }" src="IMAGE_PATHtemplate/template-default-image.png" />
                            <div class="overlay">
                                <a href="https://app.cloudairy.info/login" class="btn-Use-Template">Use Template</a>
                                <a href="./template-detail?template=${
                                  template.uri
                                }" target="_blank" class="btn-Preview">Preview</a>
                            </div>
                        </div>
                    </div>

                     <div class="template-content-side">
                        <h5>${template.template_name}</h5>
                        <p>${
                          template.template_description !== null &&
                          template.template_description !== ""
                            ? template.template_description
                            : ""
                        }</p>
                        <a style="display: flex; gap: 9px;" href="./template-detail?template=${
                          template.uri
                        }" target="_blank"  class="learn-more-link">
                            <div class="learn-more">Read more</div>
                            <div class="learnmore-arrow">
                                <img src="https://s3.amazonaws.com/cloudairy-website-storage/template-detail/read-more-icon.png" alt="read-more-icon" style="width: 100%; height: 100%"  class="learnmore-arrow "/>
                            </div>
                        </a>
                    </div>
                  
                </div>
            `;
  });

  document.getElementById("templateGrid").innerHTML = result;
}

window.addEventListener("load", function () {
  document.body.classList.add("loaded");
  document.getElementById("content").style.display = "none";
  getTemplateDetail();
  displayLastestTemplate();
});
