// common-component.js
class CommonComponent1 extends HTMLElement {
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
    const text_base = this.getAttribute("text_base") || "default text";
    const isShowSubTextLine = this.getAttribute("isShowSubTextLine") || "auto";

    this.shadowRoot.innerHTML = `
      <style>
      @import url('./assets/main.css');
      @import url('./assets/media.css');
      *{
      margin:0px;}
       h1 {
          font-size: 42px;
          font-weight: 700;
          line-height: 54px;
        
          color: #18181B;
      }
       h2 {
         font-size: 50px;
         font-weight: 600;
         line-height: 63px;
         color: #18181b;
       }
       h3 {
         font-size: 44px;
         font-weight: 600;
         line-height: 60px;
         color: #18181B;
         text-align: center;
       }
       h4 {
         font-size: 28px;
         font-weight: 600;
         line-height: 35.28px;
         color: #18181b;
       }
       .text_base {
         font-size: 16px;
         font-weight: 400;
         line-height: 24px;
         color: #070529;
       }
       .text_lg {
         font-size: 18px;
         font-weight: 300;
         line-height: 27px;
       }
       .text_xl {
         font-size: 20px;
         font-weight: 500;
         line-height: 25.2px;
         color: #171617;
       }
       .text_sm {
         font-size: 14px;
         font-weight: 300;
         line-height: 24px;
         color: #171617;
       }
       .text-2xl {
         font-size: 24px;
         font-weight: 600;
         line-height: 36px;
         color: #18181B;
       }
       .loading-Box {
        width:757px;
       }
       /* section 1 */
       .home-banner {
         padding: 110px 0 80px;
       }
       .home-banner-section {
         display: flex;
        padding:0 66px;
  
        gap:90px;
       }
       .content-section {
         max-width: 609px;
         width: 100%;
         display: flex;
         flex-direction: column;
         justify-content: center;
         z-index: 10;
       }
       .content-section p {
         max-width: 531px;
         margin: 20px 0 40px;
          color:#070529;
       }
       
      .banner-video {
          max-width: 100%;
          width: 757px;
          height: 528px;
          min-height: 528px;
          max-height: 528px;
          border-radius: 14px;
          position:relative;
      }
          .set-border{
          position: absolute;
          bottom: 0px;
          left: 0;
          background-color: white;
          height: 3px;
          width:100%;
          }
       .banner-video-bg{
        background: #F0F0FF;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
       border: 2px solid #B8B8FF4D;
        padding: 16px 16px 11px 16px;
        border-radius: 67px;
        border: none;
        border-radius: 14px;
        user-selection:none;
       }
        .ucbzx-button-wrapper{
        display:none;
        }
       .btn-gradient-signUp {
         border-radius: 220px;
         outline: none;
         border: 0px;
         color: #ffffff;
         font-weight: 600;
         font-size: 16px;
         line-height: 20px;
         cursor: pointer;
         width: 156px;
         height: 46px;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: #6762FE;
       }
       @media (max-width: 1559px) {
              h1 {
                font-size: 40px;
                line-height: 50px;
              }
              h4{
                font-size: 26px;
              }
              /* section 1 */
                 .home-banner {
                    padding: 75px 0;
                }
              .content-section p {
                margin: 16px 0 30px;
              }
              .home-banner-section {
                gap: 60px;
              }
              .banner-video {
              height: 429px;
              min-height: 429px;
              max-height: 429px;
              }
              .main-bg-sction {
                  height: 760px;
              }
              .loading-Box {
                width: 619.9px;
              }
       }
       @media (max-width: 1440px) {
         h1 {
           font-size: 40px;
           line-height:
           50px;
         }
         .more-mindmap-section {
           gap: 70px;
         }
         .home-banner {
              padding: 66px 0;
          }
          .main-bg-sction {
            height: 741px;
        }
        .mindmap-swiper-slide{
          height: 224px;
        }
        .key-content-subtitle{
          padding-bottom: 14px;
        }
        .loading-Box {
          width: 619.9px;
        }
       }
      @media (min-width: 960px) and (max-width: 1319px) {
        .truncated {
          height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* Limit lines to 3 */
          -webkit-box-orient: vertical;
        }
      }
       @media (max-width: 1319px) {
          .loading-Box {
            width: 447.9px;
          }
           h1 {
              font-size: 42px;
              line-height: 52px;
          }
          h2{
            font-size: 36px;
          }
         .text_base {
           font-size: 14px;
           line-height: 21px;
         }
         h3 {
           font-size: 36px;
         }
         .text_lg {
           font-size: 16px;
           line-height: 27px;
         }
         .text_sm {
           font-size: 13px;
           line-height: 21px;
         }
         .main-bg-sction {
              height: 630px;
          }
         /* section 1 */
         .home-banner {
           padding: 70px 0;
         }
         .content-section p {
           margin: 10px 0 20px;
         }
         .home-banner-section {
           gap: 30px;
         }
         .banner-video {
           height: 305px;
           min-height: 305px;
           max-height: 305px;
           border-radius: 12px;
           
         }
           .banner-video-bg{
           padding: 10px 10px 6px 10px;
           border-radius: 12px;
           }
         .btn-gradient-signUp {
           font-size: 14px;
           width: 146px;
           height: 45px;
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
        .loading-Box {
        width:372px;
       }
         h1 {
           font-size: 34px;
           line-height: 42px;
         }
         h3 {
           font-size: 32px;
           line-height: 35px;
         }
         .text_lg {
           font-size: 14px;
           line-height: 20px;
         }
         /* section 1 */
         .home-banner {
           padding: 60px 0;
         }
          .btn-gradient-signUp {
              font-size: 13px;
              width: 110px;
              height: 38px;
          }
         .content-section p {
           margin: 10px 0 26px;
         }
         .banner-video {
           height: 250px;
           min-height: 250px;
           max-height: 250px;
         }
             .main-bg-sction {
              height: 575px;
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
       .banner-video-bg{
        margin:auto;
       }
        .banner-video{
         height: 270px;
        min-height: 270px;
        max-height: 270px; 
        }
        .loading-Box{
          width:400px;
        }
         h1 {
           font-size: 34px;
           line-height: 44px;
         }
         h4{
          font-size: 22px;
         }
         .more-mindmap-section-right h4{
          padding-bottom: 12px;
         }
         .text_base {
           font-size: 14px;
           line-height: 24px;
         }
         .text_lg {
           font-size: 13px;
           line-height: 19px;
         }
         .text-2xl {
           font-size: 22px;
         }
         h3 {
           font-size: 26px;
           line-height: 28px;
         }
          .text_xl {
           font-size: 16px;
           line-height: 24px;
         }
         .text_sm{
           font-size: 12px;
           line-height: 18px;
         }
         /* section 1 */
         .home-banner {
           padding: 30px 0;
         }
          .home-banner-section{
          display: grid;
           grid-template-columns: 1fr;
        }
         .content-section {
           align-items: center;
           text-align: center;
           margin:  0 auto;
         }
         .content-section p {
           margin: 8px 0 16px;
           max-width: none;
         }
         .home-banner-section {
           gap: 30px;
           flex-direction: column;
         }
         .btn-gradient-signUp {
           font-size: 12px;
           width: 110px;
           height: 38px;
         }
       }
       @media (max-width: 768px) {
         h1 {
           font-size: 34px;
           line-height: 42px;
         }
         .use-case-section{
           display: block;
         }
           .banner-video-bg{
           padding: 8px 8px 4px 8px;
           border-radius: 12px;
           }
           .banner-video{
           border-radius: 7px;
           }
         .blog-section{
          padding: 0 16px;
         }
          .mobile-key-feature-section h2{
            text-align: center;
            font-size: 24px;
            line-height: 30px;
            padding-bottom: 4px;
        }
        .key-content-subtitle{
          max-width: 500px;
        }
        .question {
        font-size: 16px;
       }
       .answercont img {
                padding: 0 20px 20px;
            }
      }
       @media (max-width: 719px) {
            h1 {
              font-size: 32px;
              line-height: 40px;
          }
         h3 {
           font-size: 24px;
           line-height: 28px;
         }
         .more-mindmap-section {
           grid-template-columns: 1fr;
           gap: 20px;
         }
          .icon1, .icon4, .icon2, .icon3 {
            display: none;
          }
          .testimonial-section {
              min-height: 238px;
          }
          .grdient-text {
              font-size: 25px;
              line-height: 30px;
          }
          .testimotinal-content{
            top: 10%;
            left: 0;
            transform: none;
            padding: 16px;
          }
          .more-mindmap-section-right h4 {
            padding-bottom: 8px;
            color: #fff;
         }
          h4 {
            font-size: 20px;
          }
          .mind-mapping-section{
            margin-top: 10px;
            border-radius: 12px;
          }
             .home-banner-section {
     padding: 0 16px;
   
}
       }
       @media (max-width: 576px) {
       .home-banner{
       margin-bottom: 20px;
       }
         h1 {
           font-size: 28px;
           line-height: 34px;
         }
         .text_base {
           font-size: 13px;
           line-height: 22px;
         }
         .text-2xl {
           font-size: 20px;
         }
         .text_lg {
           font-size: 12px;
           line-height: 19px;
         }
         .btn-gradient-signUp {
           font-size: 12px;
           width: 110px;
           height: 36px;
         }
         .main-bg-sction {
            height: 783px;
        }
         .home-banner-section {
           gap: 20px;
         }
          .home-banner {
            padding: 24px 0;
          }
       }
      @media (max-width: 540px) {
       .loading-Box{
        width: 301px;
      }
        .banner-video {
           /* box-shadow: 3px 3px 0px 0px #000000; */
           border-radius: 8px;
            height: 198px;
            min-height: 198px;
            max-height: 198px;
         }
             h1 {
           font-size: 24px;
           line-height: 33px;
         }
     
        
      }
       @media (max-width: 425px) {
        .home-banner{
       margin-bottom: 12px;
       }
             .loading-Box{
        width: 301px;
      }
        
          h3 {
           font-size: 20px;
           line-height: 24px;
         }
         .text_xl {
             font-size: 14px;
             line-height: 20px;
         }
         .text_sm{
           font-size: 12px;
           line-height: 18px;
         }
         .main-bg-sction {
              height: 725px;
          }
         .home-banner {
           padding: 25px 0;
         }
         .banner-video {
           /* box-shadow: 3px 3px 0px 0px #000000; */
           border-radius: 8px;
            height: 198px;
            min-height: 198px;
            max-height: 198px;
         }
         .home-banner-section {
           padding: 0 16px;
         }
       }
       @media (max-width: 375px) {
         h1 {
           font-size: 24px;
           line-height: 32px;
         }
         .text_base {
           font-size: 12px;
           line-height: 20px;
         }
             .text_xl {
              font-size: 13px;
              line-height: 20px;
          }
         h3 {
           font-size: 18px;
           line-height: 22px;
         }
         .text-2xl {
           font-size: 18px;
         }
         .more-mindmap-content {
           padding: 7px 0 24px;
         }
         .grdient-text {
            font-size: 21px;
            line-height: 25px;
        }
            .testimotinal-subtext {
            padding: 9px 0 11px;
        }
            .mindmap-template {
            gap: 12px;
        }
            .main-bg-sction {
              height: 675px;
          }
          .mind-mapping-section {
              margin-top: 18px;
            }
          .btn-gradient-signUp {
            font-size: 11px;
            width: 100px;
            height: 32px;
        }
       }
       @media (max-width: 360px) {
            h3 {
            font-size: 18px;
            line-height: 21px;
            }
            .home-banner {
                padding: 18px 0;
            }
            h1
            {
              font-size: 22px;
              line-height: 29px;
          }
          .main-bg-sction {
              height: 645px;
          }
          h4 {
              font-size: 15px;
              line-height: 20px;
          }
          .more-mindmap-content {
              padding: 7px 0 24px;
          }
       }
          @media (max-width: 320px) {
            .loading-Box {
              width: 288px;
            }
            .banner-video {
              height: 189px;
              min-height: 189px;
              max-height: 189px;
            }
          }
    </style>
      <section class="home-banner">
      <div class="home-banner-section container-fluid">
        <div class="content-section">
          <h1>${title}</h1>
          <p class="text_base ${isShowSubTextLine === "3" ? "truncated" : ""}">
            ${text_base} 
          </p>
          <a class="btn-gradient-signUp" rel="canonical" href="https://app.cloudairy.com/signup">
            <span>Sign up free</span>
          </a>
        </div>
        <div>
         <div
          style="z-index: 10; border: 2.09px solid #EEF0F5"
          class="banner-video-bg loading-Box"
        >
       <iframe class="banner-video"
          src=${image}?autoplay=true&muted=true&controls=false&stillUrl=
           style="border: none"  frameborder="0" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
          allowfullscreen="true">
  </iframe>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("feature-banner", CommonComponent1);
//  <iframe class="banner-video"
//             src=${image}/iframe?autoplay=true&muted=true&controls=false&loop=true&preload=auto
//             style="border: none" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
//             allowfullscreen="true">
//             <div class="set-border"></div>
//           </iframe>
