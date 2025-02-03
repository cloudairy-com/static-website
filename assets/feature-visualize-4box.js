// common-component.js
class CommonComponent8 extends HTMLElement {
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

  render() {
    const title = this.getAttribute("data-title") || "Default Title";
    const text_base = this.getAttribute("text_base") || "default text";
    const image1 = this.getAttribute("image1") || "default.jpg";
    const data1 = this.getAttribute("data1") || "Default Title";
    const data1_desc = this.getAttribute("data1_desc") || "Default Title";
    const image2 = this.getAttribute("image2") || "default.jpg";
    const data2 = this.getAttribute("data2") || "Default Title";
    const data2_desc = this.getAttribute("data2_desc") || "Default Title";
    const image3 = this.getAttribute("image3") || "default.jpg";
    const data3 = this.getAttribute("data3") || "Default Title";
    const data3_desc = this.getAttribute("data3_desc") || "Default Title";
    const image4 = this.getAttribute("image4") || "default.jpg";
    const data4 = this.getAttribute("data4") || "Default Title";
    const data4_desc = this.getAttribute("data4_desc") || "Default Title";
    const image5 = this.getAttribute("image5") || "default.jpg";
    const data5 = this.getAttribute("data5") || "Default Title";
    const data5_desc = this.getAttribute("data5_desc") || "Default Title";
    const image6 = this.getAttribute("image6") || "default.jpg";
    const data6 = this.getAttribute("data6") || "Default Title";
    const data6_desc = this.getAttribute("data6_desc") || "Default Title";
    const isShow = this.getAttribute("isShow") || "4";

    this.shadowRoot.innerHTML = `
       <style>
        @import url('./assets/main.css');
      @import url('./assets/media.css');
      *{
      margin:0px;}
      h2 {
        font-size: 40px;
        font-weight: 600;
        line-height: 52px;
        color:#18181B;
        text-align: center;
      }
      .text_lg {
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        color: #070529;
      }
      .text_2xl {
        font-size: 22px;
        font-weight: 400;
        line-height: 33px;
        color: #070529;
      }
      .text_base {
        font-size: 16px;
        font-weight: 300;
        line-height: 24px;
        color: #72698c;
      }
      .mb-30 {
        margin-bottom: 30px;
      }
      .main-bg-sction {
        position: absolute;
        top: -100px;
        left: 0;
        width: 100%;
        height: 1122px;
      }
      .capability-section img {
          border-radius:12px;
      }

      /* banner section */
      .home-banner {
        padding: 64px 16px 34px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      #lottie-container-product {
        height: 200px;
        min-height: 200px;
        max-height: 200px;
        padding: 0px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 40px 0;
        display: block;
      }
      h1 {
        display: none;
      }
      /* #lottie-container-product1 {
        height: 250px;
        min-height: 250px;
        max-height: 250px;
        padding: 0px 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      } */
      .home-banner-subtitle {
        margin-top: -10px;
        font-weight: 300;
        max-width: 1005px;
        padding-bottom: 24px;
        z-index: 99;
        opacity: 0;
        animation: slide-down 1.8s ease-in-out forwards;
        animation-delay: 1.5s;
        color: rgba(7, 5, 41, 0.6);
      }
      .get-started-btn {
        max-width: 160px;
        height: 50px;
        font-size: 17.29px;
        font-weight: 500;
        line-height: 31.61px;
        text-align: center;
        background-color: #7630ff;
        color: #fff;
        border-radius: 75px;
        padding: 19px 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
        opacity: 0;
        animation: slide-down 1.8s ease-in-out forwards;
        animation-delay: 1.5s;
      }
      .home-banner-section {
        display: flex;
        gap: 37px;
        padding: 0;
      }
      .content-section {
        max-width: 683px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .mobile-home-video {
        display: none;
      }
      .video {
        max-width: 100%;
        width: 100%;
        height: 600px;
        min-height: 600px;
        max-height: 600px;
        border: none;
        border: 1px solid #000000;
        border-radius: 17px;
        background-color: #fff;
        box-shadow: 14px 14px 0px 0px #000000;
      }
      .best-service-title {
        text-align: center;
        border-radius: 220px;
        padding: 10px 44px;
        background-color: #fff;
        max-width: 370px;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 600;
        line-height: 24px;
        z-index: 99;
        opacity: 0;
        animation: slide-down 1.8s ease-in-out forwards;
        animation-delay: 1.5s;
      }
      .banner-heading {
        font-size: 48px;
        font-weight: 700;
        line-height: 72px;
        text-align: left;
        padding: 34px 0 20px;
        color:#18181B;
      }
      .banner-subtitle {
        font-weight: 400;
        max-width: 563px;
        padding-bottom: 30px;
      }
      .video-container {
        margin-left: auto;
        margin-right: auto;
        position: relative;
        z-index: 30;
        border-radius: 13px;
        overflow: hidden;
      }
      .video-container-fluid {
        max-width: 1620px;
        margin: 0 auto;
        padding: 0 16px;
      }
      .banner-video-box {
        height: 860px;
        color: transparent;
        min-height: 860px;
        max-height: 860px;
      }
      .icon-home {
        position: absolute;
        z-index: 20;
        animation: bounce 2s infinite;
        display: block;
      }
      .icon-andrew {
        top: 26%;
        left: 19%;
        transform: translate(-50%, 50%);
      }

      .icon-andrew-bg {
        box-shadow: 0px 6.74px 6.74px 0px #26a4ff3d;
        border: 4px solid #ffffff;
        background-color: #26a4ff;
        padding: 5px;
        border-radius: 210px 210px 201px 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .icon-andrew img {
        width: 43px;
      }
      .andrew-comment {
        color: #fff;
        font-size: 20px;
        font-weight: 700;
        line-height: 22px;
        display: block;
        width: 0;
        overflow: hidden;
        opacity: 0;
        transition: width 0.5s ease, opacity 0.3s ease;
      }

      .icon-andrew:hover .andrew-comment {
        width: 60px;
        opacity: 1;
        padding: 0px 10px;
      }
      .icon-bence {
        width: 97px;
        top: 15%;
        left: 16%;
        transform: translate(-50%, 50%);
        animation: moveIcon 3s ease-out forwards;
      }
      @keyframes moveIcon {
        0% {
          left: 0%;
          top: 60%;
        }
        100% {
          left: 18%;
          top: 12%;
        }
      }
      .icon-maria {
        width: 108px;
        top: 30%;
        right: 21%;
        transform: translate(-50%, -50%);
        animation: moveIcon2 4s ease-out forwards;
      }
      @keyframes moveIcon2 {
        0% {
          top: 50%;
          right: 0%;
        }
        100% {
          top: 20%;
          right: 11%;
        }
      }
      .banner-video {
        position: absolute;
        top: 64px;
        left: 80px;
        max-width: 100%;
        width: 1370px;
        min-width: 1370px;
        max-width: 1370px;
        height: 640px;
        min-height: 640px;
        max-height: 640px;
        border: none;
        border-radius: 17px;
      }
      /* tab with image */
      .menuTabling .subtitle {
        padding: 16px 0 50px;
        max-width: 1120px;
        margin: 0 auto;
      }
      .workflow-shadow {
        position: absolute;
        top: 0;
        left: 0;
      }
      .menutabling-swiper .swiper-container {
        width: 100%;
        /* height: 110px; */
        margin: 0 auto;
        user-select: none;
        max-width: 1240px;
      }

      .swiper-slide-container {
        text-align: center;
        font-size: 18px;

        height: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .gallery-top {
        height: 119px;
        width: 100%;
        max-width: 1240px;
        margin: 0 auto;
        overflow: hidden;
      }
      .gallery-top .swiper-wrapper {
        display: flex;
        align-items: flex-end;
      }
      .gallery-bottom {
        height: 30%;
        box-sizing: border-box;
        padding: 10px 0;
        position: relative;
        overflow: hidden;
        padding-top: 50px;

        .swiper-slide-container {
          max-width: 1240px;
          margin: 0 auto;
        }
      }
      .workflow-box-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        max-width: 150px;
        width: 150px;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 30px;
        background-color: transparent;
        transition: background-color 0.3s ease, border 0.3s ease;
      }
      .workflow-box-content p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #72698c;
        margin: 0;
        transition: color 0.3s ease;
        padding: 10px 0 0;
      }
      .workflow-icon {
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(
          144.73deg,
          rgba(66, 184, 255, 0.26) 12.5%,
          rgba(0, 45, 204, 0.26) 95.69%
        );

        border-radius: 20px;
        transition: all 0.3s ease;
        border: 2.53px solid #ffffff36;
      }
      .gallery-top .swiper-slide-active p {
        color: #171617 !important;
        font-weight: 500 !important;
        font-size: 15px;
      }
      .gallery-top .swiper-slide-active .workflow-icon {
        background: linear-gradient(
          123.88deg,
          #ee28ff -7.22%,
          #8962ff 47.49%,
          #1f79ff 96.99%
        );
        box-shadow: 0px 3.83px 8.15px 0px #ffffff66 inset;
        width: 88px;
        height: 88px;
        border: none;
      }
      .gallery-bottom .swiper-slide {
        width: 20%;
        height: 100%;
      }
      .workflow-tab-content {
        display: flex;
        gap: 60px;
        background-color: #fff;
        box-shadow: 4.86px 3.89px 6.9px 0px #0000000a;
        box-shadow: 0px 0px 4px 0px #0000001f inset;
        border-radius: 30px;
        padding: 60px;
      }
      .tab-video {
        max-width: 100%;
        width: 100%;
        height: 400px;
        min-height: 400px;
        max-height: 400px;
        border: 0.84px solid #ffffff85;
        border-radius: 17px;
        background-color: #fff;
      }
      .tab-content {
        max-width: 509px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .tab-content h2 {
        font-size: 28px;
        line-height: 42px;
        color:#18181B;
        font-weight: 600;
        text-align: left;
        font-family: "DM Sans" !important;
      }
      .tab-content p {
        text-align: left;
        padding: 24px 0;
        font-family: "DM Sans" !important;
      }
      .learn-more-link {
        display: flex;
        gap: 6px;
        cursor: pointer;
      }
      .learn-more-link p {
        color: #7630ff !important;
        font-size: 20px;
        line-height: 25px;
        font-weight: 500;
        text-decoration: underline;
        text-underline-offset: 3px;
        padding: 0 !important;
        margin: 0 !important;
      }
      .learn-more-link img {
        width: 34px;
        height: 30px;
      }
      .menutabling-swiper .swiper-button-prev {
        display: none;
      }
      .menutabling-swiper .swiper-button-next {
        display: none;
      }
      /* .swiper-slide[data-swiper-slide-index="5"] {
            opacity: 0.2;
          }
          .swiper-slide[data-swiper-slide-index="4"] {
            opacity: 0.4;
          }
           .swiper-slide[data-swiper-slide-index="3"] {
            opacity: 0.6;
          }
           .swiper-slide[data-swiper-slide-index="2"] {
            opacity: 0.8;
          }
           .swiper-slide[data-swiper-slide-index="1"] {
            opacity: 1;
          }
           .swiper-slide[data-swiper-slide-index="0"] {
            opacity: 0.8;
          }
          .swiper-slide[data-swiper-slide-index="8"] {
            opacity: 0.6;
          }
           .swiper-slide[data-swiper-slide-index="7"] {
            opacity: 0.4;
          }
           .swiper-slide[data-swiper-slide-index="6"] {
            opacity: 0.2;
          } */
      /* category-section */
      .category-section {
        background-image: url("../assets/image/Home/category-shadow.png");
      }
      .category-section .sub-title {
        max-width: 997px;
        margin: 0 auto;
        color: #171617;
      }
      .mobile-mind-template {
        display: none !important;
      }
      .mindmap-template {
        display: flex;
        gap: 34px;
        align-items: center;
        justify-content: center;
      }

      .mindmap-swiper-slide {
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 15px;
        padding: 12px 12px 33px;
        cursor: pointer;
        width: 200px;
        height: 267px;
      }
      .swiper-silde-box {
        background-color: #e9eafd;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        position: relative;
      }
      .mindmap-swiper-slide .swiper-box-title1 {
        padding-top: 16px;
        font-size: 12px;
        line-height: 17px;
        font-weight: 400;
        text-align: center;
        color: #171617;
      }
      .mindmap-swiper-slide .swiper-box-title2 {
        font-size: 20px;
        padding-top: 24px;
        line-height: 18px;
        font-weight: 400;
        text-align: center;
        color: #171617;
      }
      .mindmap-swiper-slide .swiper-box-title3 {
        font-size: 20px;
        line-height: 30px;
        padding-top: 34px;
        font-weight: 500;
        text-align: center;
        color: #171617;
      }
      .active-slide {
        width: 350px;
        min-width: 350px;
        height: 357px;
        min-height: 357px;
        box-shadow: 0px 4px 21px 0px rgba(0, 0, 0, 0.04);
      }
      .active-slide img {
        width: 330px;
        height: 250px;
        border-radius: 10px;
      }
      .active-prev-next-slide {
        width: 250px;
        min-width: 250px;
        max-width: 250px;
        height: 292px;
        min-height: 292px;
        max-height: 292px;
        padding: 10px;
      }
      .active-prev-next-slide img {
        width: 230px;
        height: 180px;
        max-height: 180px;
        min-height: 180px;
      }
      .swiper-silde-box-last img {
        width: 138px;
        height: 110px;
        max-height: 110px;
        min-height: 110px;
      }
      .swiper-silde-box-last {
        padding: 6px;
        width: 150px;
        min-width: 150px;
        max-width: 150px;
        height: 184px;
        min-height: 184px;
        max-height: 184px;
        /* padding: 8px; */
      }
      /* blog section */
      .blog-section {
        padding-top: 100px;
      }
      .blog-section .sub-title {
        max-width: 750px;
        margin: 0 auto;
        color: #171617;
      }
      /* Ai section */
      .AI-grid {
        background-color: #10031d;
        border-radius: 32px;
        padding: 100px 113px;
      }

      .Ai-gredient-text {
        text-align: center;
        background: linear-gradient(
          105.61deg,
          #5a05fe 7.42%,
          #c86dff 24.11%,
          #ffffff 34.02%
        );

        background-size: 200% auto;

        color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        animation: shine 0.4s linear forwards;
      }
      @keyframes shine {
        to {
          background-position: 200% center;
        }
      }

      .Ai-section-subtitle {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        color: #171617;
        padding: 20px 0 50px;
        max-width: 801px;
        margin: 0 auto;
        text-align: center;
      }
      .Ai-data-box {
        border: 1px solid #faf1fe1a;
        padding: 50px 62px;
        border-radius: 21px;
        background: linear-gradient(
          180deg,
          rgba(20, 17, 23, 0.5) 0%,
          rgba(16, 3, 29, 0.5) 100%
        );
      }

      .cycle-tab-container a {
        color: #171617;
        font-size: 18px;
        font-weight: 500;
        line-height: 27px;
        text-align: center;
      }
      .cycle-tab-container ul li {
        list-style: none;
      }
      .cycle-tab-container .tab-content {
        max-width: none;
      }
      .cycle-tab-container .nav-tabs {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 7px;
      }
      .tab-pane {
        text-align: center;
        margin: 82px auto 30px;
        width: 1040px;
        max-width: 100%;
        display: none;
      }

      .fade {
        opacity: 0;
        transition: opacity 1s ease-in-out;
      }

      .fade.active {
        opacity: 1;
        display: grid;
      }
      .Ai-mind-map-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 100px;
      }
      .Ai-mind-map-section h2 {
        color: #fff;
        text-align: left;
      }
      .Ai-mind-map-section h3 {
        color: #171617;
        text-align: left;
        font-size: 14px;
        font-weight: 300;
        line-height: 24px;
        padding: 30px 0;
      }
      .Ai-mind-map-section .learn-more-link p {
        color: #fff !important;
      }
      .Ai-mind-map-section-img {
        width: 530px;
        height: 381px;
        border-radius: 20px;
      }
      .cycle-tab-item {
        text-align: center;
        border-bottom: solid 5px #faf1fe1a;
        position: relative;
      }

      .cycle-tab-item:after {
        display: block;
        content: "";
        padding-bottom: 20px;
        border-bottom: solid 5px #5a05fe;
        transform: scaleX(0);
        transition: transform 0.3s ease-out;
      }

      .cycle-tab-item.active:after {
        transform: scaleX(1);
        transform-origin: 0% 50%;
        transition: transform 0.3s ease-in;
      }

      .nav-link:focus,
      .nav-link:hover,
      .cycle-tab-item.active a {
        border-color: transparent !important;
        color: white;
      }

      /* think-outside-section */
      .think-outside-section {
        max-width: 1200px;
        margin: 0 auto;
      }
      .workflow-shadow-think {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 400px;
        height: 400px;
        transform: translate(-50%, -50%);
      }

      .think-outside-section p {
        max-width: 997px;
        margin: 0 auto;
        color: #171617;
      }
      .think-desc-box {
        max-width: 492px;
        margin: 0 auto;
      }
      .think-title {
        font-size: 26.57px;
        font-weight: 600;
        line-height: 34.6px;
        text-align: center;
        color: #18181b !important;
      }
      .think-subtitle {
        font-size: 18px;
        font-weight: 400;
        line-height: 27px;
        text-align: center;
        padding: 12px 0 30px;
      }
      .sign-up-btn {
        max-width: 160px;
        margin: 0 auto;
        height: 50px;
        font-size: 17.29px;
        font-weight: 500;
        line-height: 31.61px;
        text-align: center;
        background-color: #070529;
        color: #fff;
        border-radius: 75px;
        padding: 19px 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99;
      }
      /* capability-section */
      .capability-grid-section {
        border: 1.82px solid #EEF0F5;
        padding:100px 130px;
        border-radius:32px;
      }
      .capability-sub-title {
        color: #070529;
        max-width: 954px;
        margin: 0 auto;
      }
      .capability-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 70px;
      }
      .capability-section-gap {
        margin-bottom: 70px;
      }
      .more-capability-box {
        padding: 70px 64px;
      }
      .capability-content {
        max-width: 590px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
      }
      .capability-content h2 {
        font-size: 30px;
        font-weight: 600;
        line-height: 42px;
        text-align: left;
        color:#18181B;
      }
      .capability-content .learn-more-link p {
        font-size: 16px;
      }
      .capability-content .learn-more-link img {
        width: 24px;
        height: 28px;
      }
      .capability-content-data {
        padding: 20px 0;
        color:#070529;
      }
      /* teams-section */
      .teams-section {
        display: grid;
        grid-template-columns: 294px 670px 284px;
        grid-gap: 61px;
        max-width: 1380px;
        margin: 0 auto;
        padding: 0 16px;
      }
      .mobile-teams-image {
        display: none;
      }
      .terms-section-shadow {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-60%, -40%);
      }
      .teams-part {
        display: flex;
        gap: 30px;
        flex-direction: column;
      }
      .teams-part2 {
        z-index: 99;
      }
      .teams-image {
        z-index: 99;
        width: 670px;
        height: 424px;
        background-color: #fff;
        padding: 7px;
        border-radius: 19px;
        box-shadow: 4.86px 3.89px 6.9px 0px #0000000d;

        box-shadow: 0px -2.92px 3.89px 0px #f5f5f5 inset;

        box-shadow: 0px 2.92px 7.88px 0px #d9d9d966 inset;
      }
      .teams-sub-parts {
        display: flex;
        gap: 16px;
      }
      .video-timebox {
        width: 34px;
        min-width: 34px;
        max-width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        border-radius: 50%;
        align-items: center;
        background: #6366f133;
        color: #6366f1;
        font-weight: 600;
        position: relative;
      }
      .video-timebox.active {
        background-color: #6366f1;
        color: white !important;
      }
      .video-description-title {
        font-weight: 600;
        color: #313131;
      }
      .video-description {
        font-size: 13px;
        font-weight: 500;
        line-height: 19.5px;
        color: #42424a;
        padding: 8px 0 14px;
      }
      .teams-section .learn-more-link p {
        font-size: 14px;
      }
      .teams-section .learn-more-link img {
        width: 22px;
        height: 27px;
      }
      /* Accelerate-section */
      .Accelerate-section {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
        background-color: #18181b;
        border-radius: 40px;
        max-width: 1420px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
      }
      .accelerate-bg {
        position: absolute;
        top: 0;
        right: 0;
        opacity: 90%;
      }
      .accelerate-content-sec {
        padding: 60px 0px 60px 60px;
        max-width: 635px;
      }
      .Accelerate-section h2 {
        color: #fff;
        text-align: left;
      }
      .Accelerate-section .sub-title {
        max-width: 474px;
        padding: 36px 0 30px;
        color: #ffffffb2;
      }
      .accelerate-content-sec .learn-more-link p {
        color: #fff !important;
      }
      .accelerate-img {
        height: 432px;
      }

      /* Define scrolling animation */
      @keyframes scrolling {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-100%); /* Move items to the left */
        }
      }

      /*-------- blog-section------ */

      /* customer review section */
      .customer-section .subtitle-padding {
        max-width: 782px;
        margin: 0 auto;
      }
      .set-review-shadow1 {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 20;
      }
      .set-review-shadow2 {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 20;
      }
      .review-data .swiper {
        width: 100%;
        height: 100%;
      }

      .review-data .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        z-index: 10;
      }

      .review-data .swiper-slide {
        width: auto;
        height: 100%;
      }
      .review-data .swiper-slide.left,
      .review-data .swiper-slide.right {
        opacity: 0.4;
      }
      .set-review-box {
        background: #f7f6fd;
        padding: 24px;
        border-radius: 10px;
      }
      .set-review-box2 {
        background: #f7f6fd;
        padding: 24px;
        border-radius: 10px;
      }
      .set-quote {
        position: absolute;
        top: 30px;
        right: 26px;
        z-index: 10;
      }
      .customer-qustion {
        font-size: 22px;
        font-weight: 500;
        line-height: 28px;
        color: #000000;
      }
      .customer-answer {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        color: #18181b;
        padding: 20px 0 19px;
        z-index: 20;
        max-width: 173px;
      }
      .customer-answer2 {
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        color: #18181b;
        padding: 20px 0 16px;
        z-index: 20;
        max-width: 310px;
      }
      /* .swiper-button-prev:after,
              .swiper-rtl .swiper-button-next:after,
              .swiper-button-next:after {
                display: none;
              } */
      .user-data2 {
        display: flex;
        gap: 14px;
      }
      .user-data {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .user-profile {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .user-data-info {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 8px;
      }
      .user-name {
        font-size: 14px;
        font-weight: 500;
        line-height: 17.16px;
        text-align: left;
        color: #18181b;
      }
      .user-date {
        font-size: 12px;
        font-weight: 400;
        line-height: 15.64px;
        text-align: left;
        color: #171617;
      }
      .marquee {
        overflow: hidden;
      }
      .marquee-content {
        display: flex;
        animation: scrolling 30s linear infinite;
        animation-play-state: running;
        /* transition: animation-play-state 1000s ease-out; */
      }

      /* .marquee-content:hover {
                animation-play-state: paused;
              } */

      .marquee-item {
        flex: 0 0 16vw;
        margin: 0 8px;
        max-width: 230px;
        min-width: 230px;
      }
      .marquee-item2 {
        flex: 0 0 16vw;
        margin: 0 8px;
        max-width: 366px;
        min-width: 366px;
      }
      .marquee-item img {
        display: block;
        width: 18px;
      }

      .video-container-fluid {
        width: 100vw;
        height: 847px;
        overflow: hidden;
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity 0.7s ease-out;
        display: flex;
        z-index: 8888;
      }

      .puff-in-center {
        -webkit-animation: puff-in-center 2s cubic-bezier(0.47, 0, 0.745, 0.715)
          forwards;
        animation: puff-in-center 2s ease-in-out forwards; /* Apply ease-in-out for smoother transition */
      }

      @-webkit-keyframes puff-in-center {
        0% {
          -webkit-transform: scale(1.4);
          transform: scale(1.4);
          top: 20%;
          left: 10%;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          top: 961px;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes puff-in-center {
        0% {
          -webkit-transform: scale(1.4);
          transform: scale(1.4);
          top: 20%;
          left: 10%;
        }
        100% {
          -webkit-transform: scale(1);
          transform: scale(1);
          top: 961px;
          left: 50%;
          transform: translate(-50%, -50%) scale(1);
        }
      }
      @media (max-width: 1859px) {
        @-webkit-keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.4);
            transform: scale(1.4);
            top: 20%;
            left: 5%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 961px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.4);
            transform: scale(1.4);
            top: 20%;
            left: 5%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 961px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      }
      @media (max-width: 1559px) {
        .text_2xl {
          font-size: 20px;
          line-height: 30px;
        }
        #lottie-container-product {
          height: 170px;
          min-height: 170px;
          max-height: 170px;
          margin: 24px 0;
        }
        .best-service-title {
          padding: 10px 44px;
          max-width: 346px;
          font-size: 14px;
        }
        .icon-andrew {
          top: 29%;
          left: 19%;
          transform: translate(-50%, 50%);
        }
        .home-banner {
          padding: 50px 16px 30px;
        }
        @-webkit-keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            top: 20%;
            left: 0%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 891px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            top: 20%;
            left: 0%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 891px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .banner-video {
          max-width: 100%;
          width: 1239px;
          min-width: 1249px;
          max-width: 1370px;
          height: 640px;
          min-height: 597px;
          max-height: 639px;
        }
      }
      @media (max-width: 1440px) {
        h2 {
          font-size: 36px;
          line-height: 50px;
        }
        .banner-video {
          max-width: 100%;
          width: 1209px;
          min-width: 1205px;
          max-width: 1327px;
          height: 640px;
          min-height: 548px;
          max-height: 628px;
        }
        .banner-video-box {
          height: 819px;
          color: transparent;
          min-height: 796px;
          max-height: 831px;
        }
        .teams-section {
          grid-gap: 30px;
        }
        .menuTabling {
          padding-top: 30px;
        }
      }
      @media (max-width: 1400px) {
        .banner-video {
          max-width: 100%;
          width: 1209px;
          min-width: 1177px;
          max-width: 1293px;
          height: 640px;
          min-height: 513px;
          max-height: 550px;
          left: 35px;
        }
        .video-container-fluid {
          width: 100vw;
          height: 741px;
        }
        @-webkit-keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            top: 20%;
            left: 0%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 820px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes puff-in-center {
          0% {
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
            top: 20%;
            left: 0%;
          }
          100% {
            -webkit-transform: scale(1);
            transform: scale(1);
            top: 820px;
            left: 50%;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .main-bg-sction {
          height: 892px;
        }
        .menuTabling {
          margin-top: -120px;
        }
        .teams-section {
          display: flex;
        }
        .teams-image {
          width: 100%;
          height: 100%;
        }
      }
      @media (max-width: 1319px) {
              .capability-grid-section {
            padding: 85px 70px;
            border-radius: 24px;
        }
        h2 {
          font-size: 34px;
          line-height: 46px;
        }
        .text_lg {
          font-size: 16px;

          line-height: 25px;
        }
        .banner-video {
          left: 10px;
        }
        .dekstop-mind-template {
          display: none;
        }
        .mobile-mind-template {
          display: flex !important;
          overflow-x: auto;
        }
        .mobile-mind-template .swiper-silde-box img {
          max-width: 100px;
          min-width: 100px;
          width: 100px;
          height: 100px;
          padding: 10px;
        }
        .active-prev-next-slide {
          min-height: 245px;
          max-height: 245px;
        }
        .mindmap-template {
          justify-content: left;
          gap:24px;
        }
        ::-webkit-scrollbar {
          display: none;
        }
        .tab-content h2 {
          font-size: 26px;
          line-height: 32px;
        }
        .AI-grid {
          padding: 70px;
        }
        .teams-image {
          display: none;
        }
        .mobile-teams-image {
          display: flex;
          justify-content: center;
          padding-bottom: 20px;
        }
        .terms-section-shadow {
          display: none;
        }
        .Ai-mind-map-section-img {
          width: 396px;
          height: 280px;
        }
        .cycle-tab-container a {
          font-size: 14px;
        }
        .Ai-section-subtitle {
          padding: 14px 0 30px;
        }
        .Ai-data-box {
          padding: 30px 32px;
        }
        .think-title {
          font-size: 24px;
        }
        .think-subtitle {
          font-size: 16px;
          line-height: 27px;
          padding: 8px 0 20px;
        }
        .capability-content h2 {
          font-size: 28px;
          line-height: 38px;
        }
        .blog-section {
          padding-top: 60px;
        }
      }
      @media (max-width: 1240px) {
        h2 {
          font-size: 30px;
          line-height: 29px;
        }
        .banner-video {
          max-width: 100%;
          width: 1209px;
          min-width: 1177px;
          max-width: 1293px;
          height: 640px;
          min-height: 495px;
          max-height: 485px;
          left: -35px;
          top: 90px;
        }
        .workflow-tab-content {
          padding: 40px;
          gap: 40px;
        }
        .menuTabling {
          margin-top: -140px;
        }
        .menuTabling .subtitle {
          padding: 16px 0 31px;
          max-width: 1031px;
          margin: 0 auto;
        }
        .gallery-bottom {
          padding-top: 30px;
        }
        .tab-video {
          height: 300px;
          max-height: 300px;
          min-height: 300px;
        }
        .tab-content h2 {
          font-size: 24px;
          line-height: 30px;
        }
        .learn-more-link p {
          font-size: 17px;
          line-height: 20px;
        }
        .learn-more-link img {
          width: 22px;
          height: 25px;
        }
        .capability-content h2 {
          font-size: 23px;
          line-height: 31px;
        }
        .capability-content-data {
          padding: 18px 0;
        }
        .capability-section-gap {
          margin-bottom: 30px;
        }
      }

      @media (max-width: 1139px) {
        .text_2xl {
          font-size: 18px;
          line-height: 28px;
        }
        h2 {
          font-size: 28px;
          line-height: 35px;
        }
        .text_lg {
          font-size: 14px;
          line-height: 23px;
        }
        .icon-bence {
          width: 74px;
        }
        .icon-maria {
          width: 82px;
        }
        .icon-andrew img {
          width: 25px;
        }
        #lottie-container-product {
          height: 140px;
          min-height: 140px;
          max-height: 140px;
          margin: 16px 0;
        }
        .home-banner {
          padding: 38px 16px 10px;
        }
        .main-bg-sction {
          height: 770px;
        }
        .puff-in-center {
          animation: none;
        }
        .video-container-fluid {
          top: 410px;
          height: 547px;
        }
        .banner-video {
          max-width: 100%;
          width: 1209px;
          min-width: 1177px;
          max-width: 1293px;
          height: 640px;
          min-height: 391px;
          max-height: 401px;
          left: -114px;
          top: 48px;
        }
        .banner-video-box {
          height: 520px;
          min-height: 520px;
        }
        .home-banner-subtitle {
          max-width: 681px;
          padding-bottom: 12px;
        }
        .icon-andrew {
          top: 35%;
        }
        .get-started-btn {
          max-width: 160px;
          height: 44px;
          font-size: 15.29px;
        }
        .menuTabling {
          margin-top: 0;
        }
        .workflow-icon {
          width: 60px;
          height: 60px;
          padding: 8px;
        }
        .gallery-top .swiper-slide-active .workflow-icon {
          width: 70px;
          height: 70px;
        }
        .workflow-icon img {
          width: 100%;
          height: 100%;
        }
        .accelerate-bg {
          right: -50px;
        }
        .tab-content {
          max-width: 400px;
        }
        .Ai-mind-map-section {
          gap: 16px;
        }
        .Ai-mind-map-section h3 {
          padding: 16px 0;
        }
        .AI-grid {
          padding: 60px 50px;
        }
      }
      @media (max-width: 1024px) {
        .tab-video {
          height: 245px;
          max-height: 245px;
          min-height: 245px;
        }
        #lottie-container-product {
          height: 120px;
          min-height: 120px;
          max-height: 120px;
          margin: 16px 0;
        }
        .active-prev-next-slide {
          width: 310px;
          min-width: 211px;
          max-width: 261px;
          height: 203px;
          min-height: 246px;
          max-height: 309px;
          padding: 7px;
        }
        .tab-content p {
          text-align: left;
          padding: 16px 0;
          font-family: "DM Sans" !important;
        }
        .review-data {
          padding-bottom: 80px;
        }
      }
      @media (max-width: 959px) {
        .set-review-shadow2 {
          display: none;
        }
        .set-review-shadow1 {
          display: none;
        }
        h2 {
          font-size: 26px;
          line-height: 30px;
        }
        .text_2xl {
          font-size: 15px;
          line-height: 24px;
        }
        .video-container-fluid {
          display: none;
        }
        .mobile-home-video {
          display: block;
          position: absolute;
          top: 360px;
          left: 0;
          padding: 0 16px;
        }
        .mobile-banner-video {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border: 1px solid #d9d9d9;
        }
        .main-bg-sction {
          height: 681px;
        }
        .banner-video-box {
          height: 611px;
          min-height: 406px;
        }
        #lottie-container-product {
          height: 120px;
          min-height: 120px;
          max-height: 120px;
        }
        .home-banner-subtitle {
          max-width: 638px;
          padding-bottom: 12px;
        }
        .get-started-btn {
          max-width: 160px;
          height: 38px;
          font-size: 13.29px;
        }
        .best-service-title {
          padding: 3px 18px;
          max-width: 308px;
          font-size: 12px;
        }
        .icon-bence,
        .icon-andrew,
        .icon-maria {
          display: none;
        }
        .tab-content {
          max-width: 300px;
        }
        .tab-content h2 {
          font-size: 20px;
          line-height: 26px;
        }
        .text_lg {
          font-size: 13px;
          line-height: 21px;
        }
        .tab-video {
          height: 240px;
          max-height: 240px;
          min-height: 240px;
        }
        .workflow-tab-content {
          padding: 31px;
          gap: 35px;
          border-radius: 16px;
        }
        .workflow-icon {
          width: 54px;
          height: 54px;
          padding: 12px;
          border-radius: 16px;
        }
        .gallery-top .swiper-slide-active .workflow-icon {
          width: 63px;
          height: 61px;
        }
        .teams-part {
          gap: 18px;
        }
        .AI-grid {
          display: none;
        }
        .accelerate-bg {
          display: none;
        }
        .Accelerate-section {
          display: block;
          border-radius: 16px;
          padding: 40px;
        }
        .accelerate-content-sec {
          padding: 0;
        }
        .Accelerate-section .sub-title {
          padding: 23px 0 20px;
        }
        .capability-section {
          gap: 42px;
        }
        .capability-section-gap {
          margin-bottom: 26px;
        }
        .capability-content h2 {
          font-size: 20px;
          line-height: 28px;
        }
        .text_base {
          font-size: 14px;

          line-height: 23px;
        }
        .tab-content p {
          padding: 0;
          text-align: left;
          margin: 16px 0;
          font-family: "DM Sans" !important;
          -webkit-line-clamp: 3; /* Clamps the text to 3 lines */
          overflow: hidden; /* Hides the text that exceeds the 3 lines */
          display: -webkit-box; /* Makes the element a flexible box */
          -webkit-box-orient: vertical; /* Ensures vertical stacking of lines */
          -webkit-box-pack: start; /* Aligns content to the top */
          overflow: hidden;
        }
      }
      @media (max-width: 768px) {
          .capability-grid-section {
        padding: 55px 30px;
        border-radius: 24px;
    }
        h2 {
          font-size: 22px;
          line-height: 26px;
        }
        .menuTabling .subtitle {
          padding: 16px 0 15px;
          max-width: 665px;
          margin: 0 auto;
        }
        .gallery-bottom {
          padding-top: 20px;
        }
        .banner-video-box {
          height: 492px;
          min-height: 406px;
        }
        .think-title {
          font-size: 20px;
        }
        .sign-up-btn {
          max-width: 133px;
          margin: 0 auto;
          height: 38px;
          font-size: 13.29px;

          padding: 0;
          justify-content: center;
          align-items: center;
          z-index: 99;
        }
        .think-subtitle {
          font-size: 14px;
          line-height: 24px;
          padding: 8px 0 20px;
        }
        .learn-more-link svg {
          width: 20px;
          height: 20px;
        }
        .capability-content h2 {
          font-size: 18px;
          line-height: 24px;
        }
        .text_base {
          font-size: 13px;
          line-height: 22px;
        }
        .capability-content .learn-more-link img {
          width: 19px;
          height: 22px;
        }
        .category-section .sub-title {
          max-width: 570px;
        }
        .blog-section .sub-title {
          max-width: 570px;
        }
        .customer-section .subtitle-padding {
          max-width: 570px;
        }
        .gallery-top .swiper-slide-active p {
          font-size: 12px;
        }
        .workflow-box-content p {
          font-size: 11px;
        }
        .menutabling-swiper .swiper-container {
          max-width: 500px;
        }
        .tab-content {
          width: 100%;
          max-width: 100%;
        }
        .tab-video {
          display: none;
        }
        .swiper-slide-container {
          display: block;
        }
        .workflow-tab-content {
          gap: 0;
          padding: 24px;
        }
        .workflow-box-content {
          max-width: 80px;
        }
        .tab-content h2 {
          font-size: 18px;
          line-height: 24px;
          height: 36px;
        }
        .gallery-bottom {
          padding-top: 0px;
        }
        .mobile-teams-image {
          display: none;
        }
        .think-outside-section p {
          max-width: 400px;
        }
        .review-data {
          padding-bottom: 40px;
        }
      }
      @media (max-width: 719px) {
        h2 {
          font-size: 20px;
          line-height: 24px;
        }
        .banner-video-box {
          height: 465px;
          min-height: 456px;
        }
        .video-description {
          padding: 4px 0 3px;
        }
        .teams-section {
          grid-gap: 16px;
        }
        .think-title {
          font-size: 16px;
        }
        .think-subtitle {
          font-size: 13px;
          line-height: 19px;
          padding: 1px 0 11px;
        }
        .capability-section-gap {
          margin-bottom: 45px;
        }

        .teams-section {
          flex-direction: column;
        }
        .teams-sub-parts {
          gap: 12px;
        }
        .teams-part {
          gap: 14px;
        }
        .video-timebox {
          width: 27px;
          min-width: 27px;
          max-width: 29px;
          height: 27px;
        }
        .workflow-shadow-think {
          width: 100%;
          height: 100%;
        }
      }
      @media (max-width: 650px) {
        .banner-video-box {
          height: 387px;
          min-height: 398px;
        }
        #lottie-container-product {
          height: 110px;
          min-height: 110px;
          max-height: 110px;
        }
        .capability-grid-section {
            padding: 35px 20px 25PX;
            border-radius: 18px;
        } 
                .capability-section-gap {
        margin-bottom: 35px;
    }
      }
      @media (max-width: 576px) {
        .banner-video-box {
          height: 382px;
          min-height: 365px;
        }
        .home-banner {
          padding: 20px 16px 10px;
        }
        .swiper-slide-container {
          display: flex;
        }
        h2 {
          font-size: 20px;
          line-height: 26px;
        }
        #lottie-container-product {
          height: 110px;
          min-height: 110px;
          max-height: 110px;
          margin: 10px 0;
        }
        .tab-content h2 {
          font-size: 16px;
          line-height: 22px;
          height: auto;
        }
        .learn-more-link p {
          font-size: 14px;
          line-height: 14px;
        }
        .learn-more-link img {
          width: 19px;
          height: 18px;
        }
        .menuTabling {
          padding: 30px 16px 10px;
        }
        .teams-section .learn-more-link img {
          width: 15px;
          height: 19px;
        }
        .think-title {
          font-size: 14px;
          line-height: 20px;
          padding-top: 10px;
        }
        .think-subtitle {
          max-width: 331px;
          font-size: 12px;
          line-height: 18px;
          padding: 1px 0 11px;
        }
        .sign-up-btn {
          max-width: 122px;
          margin: 0 auto;
          height: 32px;
          font-size: 12px;
        }
        .capability-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .capability-section-gap {
          gap: 16px;
        }
        .capability-content .learn-more-link img {
          width: 19px;
          height: 18px;
        }
        .capability-content-data {
          padding: 12px 0;
        }
        .mobile-set1 {
          order: 2;
        }
        .capability-content h2 {
          font-size: 17px;
          line-height: 18px;
        }
      }
      @media (max-width: 425px) {
        .capability-grid-section {
        padding: 25px 16px;
        border-radius: 12px;
    }
        .banner-video-box {
          height: 231px;
          min-height: 253px;
          border-radius: 10px;
        }
        .text_2xl {
          font-size: 14px;
          line-height: 22px;
        }
        .mobile-home-video {
          top: 334px;
        }
        .get-started-btn {
          max-width: 154px;
          height: 32px;
          font-size: 11.29px;
        }
        .get-started-btn {
          padding: 15px 29px;
        }
        .capability-content h2 {
          font-size: 16px;
          line-height: 20px;
        }
        .capability-section-gap {
          margin-bottom: 30px;
        }
        .Accelerate-section {
          border-radius: 10px;
          padding: 30px 20px;
        }
        .Accelerate-section .sub-title {
          padding: 18px 0 16px;
        }
        .teams-section {
          grid-gap: 8px;
        }
        .video-timebox {
          font-size: 12px;
        }
        .blog-section {
          padding-top: 40px;
        }
        .customer-section .subtitle-padding {
          padding: 10px 16px;
        }
      }
      @media (max-width: 375px) {
        .home-banner {
          padding: 10px 16px 20px;
        }
        .teams-section {
          padding: 0;
        }
        .tab-content h2 {
          height: 44px;
        }
        #lottie-container-product {
          display: none;
        }
        h1 {
          display: block;
          font-size: 22px;
          line-height: 30px;
          text-align: center;
          margin: 24px 0;
        }
        .menuTabling .subtitle {
          padding: 12px 0 0;
        }
        .menuTabling {
          padding: 6px 16px 21px;
        }
        .think-title {
          padding-top: 20px;
        }
        h2 {
          line-height: 24px;
        }
        .blog-section .sub-title {
          padding: 10px 0px;
        }
        .sign-up-btn {
          max-width: 99px;
          margin: 0 auto;
          height: 26px;
          font-size: 11px;
        }
      }
      @media (max-width: 320px) {
        .banner-video-box {
          height: 190px;
          min-height: 190px;
          border-radius: 10px;
        }
        .main-bg-sction {
          height: 650px;
        }
        .menuTabling {
          padding: 25px 16px 21px;
        }
        .home-banner-subtitle {
          margin-top: -11px;
        }
        h1 {
          font-size: 21px;
          line-height: 30px;

          margin: 10px 0;
        }
        .workflow-tab-content {
          gap: 0;
          padding: 16px 12px;
        }
        .tab-content p {
          margin: 10px 0;
        }
        .tab-content h2 {
          font-size: 14px;
          height: 36px;
        }
        .Accelerate-section .sub-title {
          padding: 12px 0;
        }
        .capability-content h2 {
          font-size: 14px;
          line-height: 20px;
        }
        .capability-content-data {
          padding: 8px 0;
        }
        .capability-content .learn-more-link p {
          font-size: 14px;
        }
      }
    </style>
  </head>
      <section  class="container-fluid">
      <div class="capability-grid-section" style="background-color: #F9FAFC">
        <h2 class="text-center" style="color:#18181B">${title}</h2>
        <p class="text-center subtitle-padding text_base capability-sub-title">
          ${text_base}
        </p>
        <div class="capability-section capability-section-gap">
          <div>
            <img
              src=${image1}
              alt="capability1"
              style="width: 100%; height: 100%"
            />
          </div>
          <div class="capability-content">
            <h2>${data1}</h2>
            <p class="text_lg capability-content-data">
             ${data1_desc}
            </p>
          
          </div>
        </div>
        <div class="capability-section  ${
          isShow === "3" || isShow === "4" || isShow === "5" || isShow === "6"
            ? "capability-section-gap"
            : ""
        }">
          <div class="capability-content mobile-set1" style="margin-left: 0">
            <h2>
             ${data2}
            </h2>
            <p class="text_lg capability-content-data">
               ${data2_desc}
            </p>
           
          </div>
          <div style="margin-left: auto">
            <img
              src=${image2}
              alt="capability2"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
        ${
          isShow === "3" || isShow === "4" || isShow === "5" || isShow === "6"
            ? `
          <div class="capability-section  ${
            isShow === "4" || isShow === "5" || isShow === "6"
              ? "capability-section-gap"
              : ""
          }">
            <div>
              <img
                src="${image3}"
                alt="capability3"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="capability-content">
              <h2>${data3}</h2>
              <p class="text_lg capability-content-data">
                ${data3_desc}
              </p>
            </div>
          </div>
        
          ${
            isShow === "4" || isShow === "5" || isShow === "6"
              ? `
           <div class="capability-section ${
             isShow === "5" || isShow === "6" ? "mb-30" : ""
           }">
            <div class="capability-content mobile-set1" style="margin-left: 0">
              <h2>${data4}</h2>
              <p class="text_lg capability-content-data">
                ${data4_desc}
              </p>
            </div>
            <div style="margin-left: auto">
              <img
                src="${image4}"
                alt="capability2"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>`
              : ""
          }
         
        `
            : ""
        }
        ${
          isShow === "5" || isShow === "6"
            ? `
          <div class="capability-section ${isShow === "6" ? "mb-30" : ""}">
            <div>
              <img
                src="${image5}"
                alt="capability3"
                style="width: 100%; height: 100%"
              />
            </div>
            <div class="capability-content">
              <h2>${data5}</h2>
              <p class="text_lg capability-content-data">
                ${data5_desc}
              </p>
            </div>
          </div>
        `
            : ""
        }

         ${
           isShow === "6"
             ? `
          <div class="capability-section">
            <div class="capability-content mobile-set1" style="margin-left: 0">
              <h2>${data6}</h2>
              <p class="text_lg capability-content-data">
                ${data6_desc}
              </p>
            </div>
            <div style="margin-left: auto">
              <img
                src="${image6}"
                alt="capability2"
                style="width: 100%; height: 100%"
              />
            </div>
          </div>
        `
             : ""
         }
      </div>
    </section>
    `;
  }
}

customElements.define("feature-visualize-4box", CommonComponent8);
