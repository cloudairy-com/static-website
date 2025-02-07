// common-component.js
class CommonComponent100 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // console.log("called");
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["data-title", "data-image", "text_base"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    window.addEventListener("load", () => {
      const loadingSection = document.querySelector(".loading-Box");
      loadingSection?.classList.remove("loading-Box");
    });
    this.render();
  }

  render() {
    const title = this.getAttribute("data-title") || "Default Title";
    const image = this.getAttribute("data-image") || "default.jpg";
    const text_base = this.getAttribute("subtitle") || "default text";
    const max_width = this.getAttribute("max-width") || "419px";
    const max_width_subtext = this.getAttribute("max-width-subtext") || "365px";

    this.shadowRoot.innerHTML = `
      <style> 
      @import url('./assets/main.css');
      @import url('./assets/media.css');
      *{
      margin:0px;}
      .testimonial-section {
      position: relative;
      padding: 0;
      background-image: url('${image}');
      background-size: contain;
      /* background-position: center; */
      background-repeat: no-repeat;
      min-height: 460px;
      border-radius: 38px !important;
      max-width: 1240px;
      margin: 0 auto;
    }

    .testimotinal-content {
      position: absolute;
      top: 67%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      max-width: ${max_width_subtext};
    }

    .testimotinal-subtext {
      padding: 16px 0 26px;
      color: rgba(255, 255, 255, 0.75);
      line-height: 29px;
      font-size: 20px;
      line-height: 26px;
    }

    .grdient-text {
      font-size: 30px;
      line-height: 38px;
      font-weight: 700;
      color: #FFFFFF;
      max-width: ${max_width};
      margin: 0 auto;
    }

    .btn-cta-signUp {
      border-radius: 220px;
      outline: none;
      border: 0px;
      color: #070529;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
      /* width: 257px;
      height: 48px; */
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      gap: 31px;
      background-color: #fff;
      padding: 8px 9px 8px 16px;
    }

    .cta-arrow-box {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background-color: #7C22F6;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .cta-arrow-box img {
      width: 12px;
      height: 12px;
    }
      
      
   
       @media (max-width: 1319px) {
         .grdient-text {
        font-size: 26px;
        line-height: 32px;
      }

      .testimotinal-content {
        position: absolute;
        top: 64%;
        left: 50%;
      }

      .testimonial-section {
        min-height: 430px;
      }

      .testimotinal-subtext {
        padding: 12px 0 24px;
        color: rgba(255, 255, 255, 0.75);
        line-height: 28px;
        font-size: 18px;
        line-height: 25px;
      }

       }
       @media (max-width: 1240px) {
         .loading-Box {
        width:448px;
       }
          .main-bg-sction {
            height: 630px;
          }
        .home-banner-section{
          display: grid;
           grid-template-columns: 1fr 1fr;
        }
      }
       @media (max-width: 1139px) {
       .grdient-text {
        font-size: 24px;
        line-height: 30px;
      }

      .testimotinal-subtext {
        line-height: 25px;
        padding: 12px 0 13px;
      }

      .btn-cta-signUp {
        font-size: 14px;
        line-height: 20px;
        gap: 25px;
        padding: 5px 9px 5px 16px;
      }

      .testimonial-section {
        min-height: 405px;
        border-radius: 24px !important;
      }
            .testimotinal-content {
        position: absolute;
        top: 58%;
        left: 50%;
    }

       }
       @media (max-width: 1024px) {
      
            .active-prev-next-slide {
            width: 310px;
            min-width: 211px;
            max-width: 261px;
            height: 203px;
            min-height: 225px;
            max-height: 309px;
            padding: 7px;
        }
          .mobile-key-feature-section h2{
            padding-bottom: 8px;
          }
       }
       @media (max-width: 959px) {
       .testimonial-section {
        min-height: 261px;
      }

      .grdient-text {
        font-size: 20px;
        line-height: 22px;
        max-width:none;
      }

      .mobile-key-feature-section {
        padding: 30px 16px;
      }

      .mobile-key-feature-section h2 {
        text-align: center;
        font-size: 26px;
        line-height: 35px;
        padding-bottom: 4px;
      }

      .testimotinal-subtext {
        line-height: 20px;
        padding: 6px 0 9px;
        font-size:14px;
      }

      .cta-arrow-box {
        width: 26px;
        height: 26px;
      }

      .btn-cta-signUp {
        font-size: 12px;
        line-height: 17px;
        gap: 20px;
        padding: 5px 9px 5px 16px;
      }

      .testimotinal-content {
        position: absolute;
        top: 67%;
        left: 50%;
      }

       }
       @media (max-width: 719px) {
            .testimonial-section {
        min-height: 238px;
        background-size: cover;
        background-position: center;
        border-radius: 20px !important;
      }

      .grdient-text {
        font-size: 19px;
        line-height: 24px;
      }

      .testimotinal-subtext {
        line-height: 24px;
        padding: 9px 0 9px;
      }

      .testimotinal-content {
        top: 31%;
        left: 28px;
        transform: none;
        padding: 16px;
        max-width: 500px;
      }

       }
       @media (max-width: 576px) {
           .testimonial-section {
        min-height: 279px;
        background-size: cover;
        background-position: center;
        border-radius: 16px !important;
      }

      .grdient-text {
        font-size: 19px;
        line-height: 24px;
      }

      .testimotinal-subtext {
        line-height: 24px;
        padding: 9px 0 9px;
      }

      .testimonial-section {
        background-color: #8C33F8;
        background: url("https://cdn.cloudairy.net/image/feature-mobile-cta.png");
        background-repeat: no-repeat;
        background-size: cover;

      }

      .testimotinal-content {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 67%;
        min-height: auto;
        max-width: 100%;
        min-width: 100%;
      }

       }
      @media (max-width: 460px) {
    .testimotinal-content {
       
        top: 64%;
     
    }
}
    @media (max-width: 390px) {
    .testimotinal-content {
        top: 61%;
    }
}
    </style>
       <section class="section-padding">
    <div class="container-fluid">
      <div class="testimonial-section">
        <div class="testimotinal-content">
          <p class="grdient-text text-center">
           ${title}
          </p>
          <p class="text_xl testimotinal-subtext">
            ${text_base}
          </p>
          <a class="btn-cta-signUp" href="https://app.cloudairy.info/signup">
            <div>Get started, it’s free!</div>
            <div class="cta-arrow-box"><img src="https://cdn.cloudairy.net/image/ctc/white-arrow-cta.svg" alt="white-arrow-cta">
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
    `;
  }
}

customElements.define("feature-cta", CommonComponent100);
