// common-component.js
class CommonComponent7 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // console.log("called");
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["data-title", "text_base"];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("data-title") || "Default Title";
    const text_base = this.getAttribute("text_base") || "default text";

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
            background: linear-gradient(104.35deg, #5A05FE -0.55%, #C86DFF 94.95%);
            -webkit-background-clip: text;
            color: transparent;
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
           line-height: 28px;
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
           line-height: 28.2px;
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
           .main-bg-sction {
            position: absolute;
            top: -100px;
            left: 0;
            width: 100%;
            height: 830px;
          }
         /* section 1 */
         .home-banner {
           padding: 110px 0 80px;
         }
         .home-banner-section {
           display: flex;
           gap: 120px;
           padding: 0 30px;
           justify-content: center;
         }
         .content-section {
           max-width: 556px;
           width: 100%;
           display: flex;
           flex-direction: column;
           justify-content: center;
           z-index: 10;
         }
         .content-section p {
           max-width: 531px;
           padding: 20px 0 40px;
            color: rgba(7, 5, 41, 0.6);
         }
         .banner-video {
           max-width: 100%;
           width: 100%;
           height: 456px;
           min-height: 456px;
           max-height: 457px;
           border-radius: 14px;
         }
         .banner-video-bg{
          background: linear-gradient(112.91deg, rgba(252, 188, 245, 0.095) 3%, rgba(252, 188, 245, 0.076) 97.5%);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
         border: 2px solid #B8B8FF4D;
          padding:12px 12px 8px 12px;
          border-radius: 67px;
          border: none;
          border-radius: 17px;
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
           width: 154px;
           height: 46px;
           display: flex;
           justify-content: center;
           align-items: center;
           background-color: #6762FE;
         }
         /* section 2 */
          /* .network-diagram .swiper {
            width: 1420px;
            height: 560px;
            border-radius: 40px;
          }

          .network-diagram .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 40px;
          }
          .network-diagram .swiper-silde-demo {
            background-color: #f7f6fd;
            border-radius: 40px;
            margin-right: 40px;
            width: 1420px;
            height: 567px;
          }
          .workflow-tab-content {
            display: flex;
            gap: 60px;
            padding: 30px;
          }
          .tab-video {
            max-width: 100%;
            width: 100%;
            height: 500px;
            min-height: 500px;
            max-height: 500px;
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
            color: #18181B;
            font-weight: 600;
            text-align: left;
            margin: 0;
            font-family: "DM Sans" !important;
          }
          .tab-content p {
            text-align: left;
            padding-bottom: 24px;
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
          } */
         /* section 3 */
         .mobile-mind-template{
          display: none !important;
         }
         .mind-mapping-section{
          border-radius: 32px;
          padding: 80px 106px 80px 150px ;
         }
         .mind-mapping-section h3{

         color: #fff;

         }
        .more-mindmap-content {
      padding: 20px 0 50px;
      color: #070529;
      max-width: 1000px;
      margin: 0 auto;
    }
         .more-mindmap-section {
           display: flex;
           gap: 100px;
         }
         .more-mindmap-section img {
           width: 512pxpx;
           height: 322px;
           border-radius: 20px;
         }
         .more-mindmap-section-right {
           display: flex;
           justify-content: center;
           flex-direction: column;
         }
         .more-mindmap-section-right h4 {
           padding-bottom: 20px;
           color: #fff;
         }
         /* section 4 */
         .benefit-section {
           display: grid;
           grid-template-columns: repeat(5, 1fr);
           gap: 24px;
         }
         .benefit-box {
           padding: 30px 22px;
           /* border: 1px solid #e6e6e6; */
           background-color: #fff;
           border-radius: 10px;
           display: flex;
           flex-direction: column;
           align-items: center;
           cursor: pointer;
           transition: box-shadow 0.3s ease;
         }

         .benefit-box:hover {
           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
         }
         .benefit-box h5 {
           font-weight: 500;
           margin: 0 auto;
           color: #171617;
           padding: 29px 0 18px;
         }
         .benefit-icon {
           height: 80px;
           width: 80px;
           border-radius: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
         }
         .benefit-box:hover .benefit-icon {
           transform: rotateY(
             180deg
           );
         }

         .benefit-icon img {
           width: 50px;
           height: 50px;
           transition: transform 0.6s ease;
         }

         .benefit-box:hover .benefit-icon img {
           transform: rotateY(180deg); /
         }
         /* section 5 */
         .use-case-section {
           display: flex;
           gap: 100px;
           max-width: 1400px;
           margin: 0 auto;
         }
         .use-case-section img {
           width: 640px;
           height: 569px;
         }
         .usecase-content {
           display: flex;
           gap: 33px;
           padding: 14px 0 10px;
           border-bottom: 1px solid #e9e6f9;
         }
         .usecase-content:first-child {
           padding-top: 0;
         }
         .usecase-content:last-child {
           border-bottom: none;
           padding-bottom: 0;
         }
         .usecase-heading {
           padding-bottom: 8px;
         }
         .usecase-heading-data {
           display: flex;
           justify-content: center;
           flex-direction: column;
         }
         .usecase-no {
           color: #f0eefb;
           font-size: 70px;
           line-height: 88px;
           font-weight: 700;
           padding: 0;
           -webkit-text-stroke-width: 1px;
           -webkit-text-stroke-color: #e5e2f9;
         }
         /* section 6 */
          .category-section {
          background-image: url("IMAGE_PATHHome/category-shadow.png");
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
            padding-top: 18px;
            font-size: 12px;
            line-height: 17px;
            font-weight: 400;
            text-align: center;
            color: #171617;
            max-width: 73px;
            margin:  0 auto;
          }
         .mindmap-swiper-slide .swiper-box-title2 {
              font-size: 18px;
              padding-top: 24px;
              line-height: 27px;
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
          .active-slide img{
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
          .active-prev-next-slide img{
            width: 230px;
            height: 180px;
            max-height: 180px;
            min-height: 180px;
          }
          .swiper-silde-box-last img{
            width: 138px;
            height: 110px;
            max-height: 110px;
            min-height: 110px;
          }
          .swiper-silde-box-last{
            padding: 6px;
             width: 150px;
            min-width: 150px;
            max-width: 150px;
            height: 184px;
            min-height: 184px;
            max-height: 184px;
          }
         /* section 7 */
        .testimonial-section {
            position: relative;
            padding: 0;
            background-image: url('IMAGE_PATHmindmap/ready to tranform.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 500px;
            border-radius: 16px !important;
          }
         .testimotinal-content {
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%, -50%);
           display: flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
           text-align: center;
           max-width: 600px;
         }
         .testimotinal-subtext {
           padding: 40px 0 50px;
           color: #fff;
         }
         .grdient-text {
           font-size: 42px;
           line-height: 63px;
           font-weight: 600;
          background: linear-gradient(105.61deg, #FFFFFF 7.42%, #C86DFF 52.35%, #FFFFFF 82.02%);
           -webkit-background-clip: text;
           color: transparent;
           display: inline-block;
           max-width: 542px;
           margin: 0 auto;
         }
         .testimonal-icon {
           position: absolute;
           animation: bounce 2s infinite;
         }
         .icon1 {
           top: 15%;
           right: 15%;
           width: 83px;
           height: 83px;
         }
         .icon2 {
           bottom: 15%;
           left: 15%;
           width: 83px;
           height: 83px;
         }
         .icon3 {
           top: 8%;
           left: 10%;
           width: 83px;
           height: 83px;
         }
         .icon4 {
           bottom: 15%;
           right: 25%;
           width: 83px;
           height: 83px;
         }
         /* section 8 */
         .accordion {
           display: flex;
           flex-direction: column;
           gap: 24px;
           padding-top: 50px;
           max-width: 1350px;
           margin: 0 auto;
         }
         .accordion-bg{
          background-color: #F7F6FD;
           border-radius: 14px;
         }
         .accordion .accordion-item {
            background-color: #F7F6FD;
           border-radius: 14px;
           padding: 40px;
           position: relative;
         }

         .accordion button {
           display: block;
           text-align: left;
           width: 100%;
           color: #7288a2;
           font-size: 1.15rem;
           font-weight: 400;
           border: none;
           background: none;
           outline: none;

         }
         .accordion button .accordion-title {
           padding: 0;
           font-weight: 600;
           color: #1b1139;
           cursor: pointer;
            -webkit-tap-highlight-color: transparent;
         }

         .accordion button .icon {
           display: inline-block;
           position: absolute;
           top: 40px;
           right: 58px;
           cursor: pointer;
         }

         .accordion button .icon::before {
           display: block;
           position: absolute;
           content: "";
           top: 10px;
           left: 0px;
           width: 24px;
           height: 4px;
           background: #1b1139;
           border-radius: 16px;
         }
         .accordion button .icon::after {
           display: block;
           position: absolute;
           content: "";
           top: 0px;
           left: 10px;
           width: 4px;
           height: 24px;
           background: #1b1139;
           border-radius: 16px;
         }
         .accordion button[aria-expanded="true"] .icon::before,
         .accordion button[aria-expanded="true"] .icon::after {
           background: #52bd95 !important;
         }
         .accordion button[aria-expanded="true"] .icon::after {
           width: 0;
         }
         .accordion button[aria-expanded="true"]  .accordion-item {
              /* background-color: linear-gradient(123.88deg, #EE28FF -7.22%, #8962FF 47.49%, #1F79FF 96.99%);
          padding: 2px;
          border-radius: 14px; */
          box-shadow: 0px 4px 14px 0px #FF4DED33;
          box-shadow: 0px -4px 14px 0px #7630FF4D;
          }
          .accordion button[aria-expanded="false"]  .accordion-bg {
             background-color: #F7F6FD;
           border-radius: 14px;
          }
         .accordion button[aria-expanded="true"] + .accordion-content {
           opacity: 1;
           max-height: 9em;
           transition: all 1s linear;
           will-change: opacity, max-height;
         }
         .accordion .accordion-content {
           opacity: 0;
           max-height: 0;
           overflow: hidden;
           transition: opacity 1s linear, max-height 0.5s linear;
           will-change: opacity, max-height;
         }
         .accordion .accordion-content p {
           font-size: 1rem;
           font-weight: 300;
           margin: 1em 0 0;
           max-width: 850px;
           color: #070529;
         }
         /* section 9 */
         .blog-section-box {
           padding: 0 16px;
         }
         .blog-section-box h5 {
           padding: 20px 0 50px;
         }
         .blog-section .sub-title{
          max-width: 766px;
          margin: 0 auto;
         }
         .swiper-container {
          width: 100%;
          height: 100%;
          overflow-y: auto;
        }

        .swiper-wrapper {
          display: flex;
          gap: 16px;
        }

        .swiper-slide {
          margin-bottom: 100px;
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
                  padding: 16px 0 30px;
                }
                .home-banner-section {
                  gap: 60px;
                }
                .banner-video {
                height: 403px;
                min-height: 403px;
                max-height: 403px;
                }
                .main-bg-sction {
                    height: 760px;
                }

              .mind-mapping-section{
                padding: 80px 50px;
              }
              .more-mindmap-section{
                gap: 50px;
              }
              .feature-section p{
                padding: 22px 20px;
              }
              .progress-bar .text_base{
                font-size: 14px;
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

         }
         @media (max-width: 1319px) {
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
             padding: 10px 0 20px;
           }
           .home-banner-section {
             gap: 30px;
           }
           .banner-video {
             height: 300px;
             min-height: 300px;
             max-height: 300px;
           }
           .btn-gradient-signUp {
             font-size: 14px;
             width: 146px;
             height: 45px;
           }
          .content-section {
            max-width: 479px;}
            .key-feature-section{
              display: none;
            }

           /* section 3 */
           .mind-mapping-section{
            margin-top: 60px;
           }
           .dekstop-mind-template {
              display: none;
            }
            .mobile-mind-template {
              display: flex !important;
              overflow-x: auto;
            }
            .mindmap-template{
              justify-content: left;
            }
            .mobile-mind-template .swiper-silde-box img {
              max-width: 100px;
              min-width: 100px;
              width: 100px;
              height: 100px;
              padding: 10px;
            }
            .active-prev-next-slide{
              min-height: 232px;
              max-height: 232px;
            }
            ::-webkit-scrollbar {
              display: none;
            }
            .mindmap-swiper-slide .swiper-box-title1 {
              max-width: none;
            }
           .more-mindmap-section {
             gap: 40px;
           }
           .more-mindmap-content {
             padding: 14px 0 35px;
             max-width: 715px;
           }
           .more-mindmap-section img {
             width: 541px;
             height: 359px;
             border-radius: 8px;
           }

           .more-mindmap-section-right h5 {
             padding-bottom: 14px;
           }
           /* section 4 */
           .benefit-section{
             gap: 16px;
           }
           .benefit-box {
             padding: 16px 14px;
           }
           .benefit-box h5 {
             padding: 10px 0;
           }
           .benefit-icon img {
             width: 40px;
             height: 40px;
           }
           .benefit-icon {
               height: 70px;
               width: 70px;
           }
           .use-case-section {
             display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 60px;
           }
           .use-case-section img {
               width: 100%;
               height: 100%;
           }
           .grdient-text{
             font-size: 42px;
           }
           .testimotinal-subtext {
               padding: 33px 0 37px;
           }
           .testimonial-section{
            min-height: 420px;
           }
         }
         @media (max-width: 1240px) {
            .main-bg-sction {
              height: 630px;
            }
          .home-banner-section{
            display: grid;
             grid-template-columns: 1fr 1fr;
          }
          .accordion {
            gap: 14px;
            padding-top: 30px;
          }
          .accordion .accordion-item {
              padding: 20px 60px 20px 20px;

          }
           .accordion button .icon{
                  right: 12px;
                }
          .accordion button .icon::after {
              top: -18px;
              left: -21px;
              width: 3px;
              height: 19px;
          }
            .accordion button .icon::before {
              top: -10px;
              left: -29px;
              width: 19px;
              height: 3px;
          }
          .accordion button {
            font-size: 16px;
            -webkit-tap-highlight-color: none !important;
          }
          .accordion .accordion-content p {
            font-size: 14px;
        }
         .mobile-key-feature-section h2{
              text-align: center;
              font-size: 32px;
              line-height: 45px;
              padding-bottom: 10px;
            }
        }
         @media (max-width: 1139px) {
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
                width: 133px;
                height: 38px;
            }
           .content-section p {
             padding: 10px 0 26px;
           }
           .banner-video {
             height: 250px;
             min-height: 250px;
             max-height: 250px;
           }
               .main-bg-sction {
                height: 575px;
            }
           /* section 3 */
           .more-mindmap-section {
             gap: 30px;
           }
           .more-mindmap-content {
             padding: 10px 0 20px;
             max-width: 600px;
           }
           .more-mindmap-section img {
             width: 450px;
             height: 301px;
             border-radius: 8px;
           }
           .more-mindmap-section-right h5 {
             padding-bottom: 13px;
             line-height: 24px;
           }
           .benefit-section {
               grid-template-columns: repeat(3, 1fr);
               gap: 16px;
           }
           .usecase-no {
             font-size: 50px;
             line-height: 74px;
           }
            .grdient-text {
              font-size: 36px;
              line-height: 50px;
            }
            .testimonial-section {
              min-height: 344px;
            }
           .text_xl{
            line-height: 27px;
           }
           .testimonal-icon img{
            width: 100%;
            height: 100%;
           }
           .icon1 , .icon4 , .icon2 ,.icon3 {
              width: 63px;
              height: 63px;
          }
          .testimotinal-subtext {
              padding: 23px 0 20px;
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
            .testimonal-icon{
              display: none;
            }
         }
         @media (max-width: 959px) {
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
             padding: 8px 0 16px;
             max-width: none;
           }
           .home-banner-section {
             gap: 30px;
             flex-direction: column;
           }
           .banner-video {
             height: 100%;
             min-height: 100%;
             max-height: 100%;
           }
           .btn-gradient-signUp {
             font-size: 12px;
             width: 129px;
             height: 40px;
           }
           /* contetn 2 */
           .mind-mapping-section{
            margin-top: 35px;
            padding: 50px 30px;
           }
           .more-mindmap-section {
             display: grid;
             grid-template-columns: 1fr 1fr;
           }
           .more-mindmap-section img {
             width: 100%;
             height: 100%;
             border-radius: 8px;
           }
           .more-mindmap-section-right h5 {
             padding-bottom: 13px;
             line-height: 14px;
           }
            .benefit-section {
               grid-template-columns: repeat(2, 1fr);
               gap: 16px;
           }
           .use-case-section{
             gap: 45px;
                 margin-top: -40px;

           }
           .usecase-content {
               gap: 24px;
               padding: 9px 0 3px;
           }
           .usecase-no {
             font-size: 32px;
             line-height: 59px;
           }
           .usecase-heading {
               padding-bottom: 3px;
           }
          .grdient-text {
              font-size: 27px;
              line-height: 34px;
          }
          .testimotinal-subtext {
            padding: 14px 0 15px;
          }
          .testimonial-section {
              min-height: 275px;
          }
          .icon1, .icon4, .icon2, .icon3 {
              width: 43px;
          }
          .mobile-key-feature-section {
                padding: 30px 16px;
          }
          .mobile-key-feature-section h2{
              text-align: center;
              font-size: 26px;
              line-height: 35px;
              padding-bottom: 4px;
          }
          .key-content-subtitle{
            max-width: 600px;
          }
            .mobile-key-feature-section {
                padding: 16px 16px;
            }
            .image-faqs-box{
              padding: 20px;
              gap: 16px;
              border-radius: 12px;
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
            padding: 12px;
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
              top: 3%;
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
         }
         @media (max-width: 576px) {
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
               .text_xl {
                font-size: 14px;
                line-height: 22px;
            }
           .btn-gradient-signUp {
             font-size: 12px;
             width: 117px;
             height: 36px;
           }
           .main-bg-sction {
              height: 747px;
          }
           .home-banner-section {
             gap: 20px;
           }
            .home-banner {
              padding: 24px 0;
            }

           .content-section p {
             padding: 5px 0 11px;
           }
           .more-mindmap-section-right h5 {
             padding-bottom: 8px;
             line-height: 18px;
           }
           .usecase-content {
               gap: 18px;
               padding: 13px 0 6px;
           }
            .mobile-key-feature-section h2{
              font-size: 19px;
              line-height: 24px;
              padding-bottom: 4px;
          }
            .question{
              padding: 14px;
            }
            .image-faqs-box {
            padding: 16px;
          }
          .grdient-text {
          font-size: 20px;
          line-height: 28px;
            }
            .testimotinal-subtext {
              padding: 11px 0 10px;
          }
          .testimotinal-content {
          top: 2%;}
         }
         @media (max-width: 425px) {
           h1 {
             font-size: 26px;
             line-height: 34px;
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
           }
           .home-banner-section {
             padding: 0 16px;
           }
           .benefit-section {
               grid-template-columns: repeat(1, 1fr);
               gap: 16px;
           }
             .benefit-box h5 {
             max-width: none;
             padding: 8px 0;
           }
            .benefit-icon img {
             width: 30px;
             height: 30px;
           }
           .benefit-icon {
               height: 50px;
               width: 50px;
          }
          /* .grdient-text {
              font-size: 23px;
              line-height: 29px;
          } */
           .testimotinal-content{
              top: -2%;
            }
            .testimonial-section {
              min-height: 214px;
              border-radius: 8px;
            }
             .accordion {
                gap: 10px;
                padding-top: 20px;
              }
              .accordion .accordion-item {
                  padding: 16px 40px 16px 16px;
              }
                 .accordion button .icon::after {
                    top: -16px;
                    left: -17px;
                    width: 2px;
                    height: 14px;
                }
               .accordion button .icon::before {
                  top: -10px;
                  left: -23px;
                  width: 13px;
                  height: 2px;
              }

              .accordion button {
                font-size: 14px;
                line-height: 20px;
              }
              .accordion .accordion-content p {
                font-size: 12px;
                line-height: 18px;
            }
            .blog-section-box h5 {
              padding: 16px 0 25px;
            }
            .mind-mapping-section{
              padding: 30px 16px;
            }
            .more-mindmap-section {
                gap: 12px;
            }
            h4{
              font-size: 18px;
              line-height: 24px;
            }
             .mobile-key-feature-section h2{
              font-size: 18px;
              line-height: 24px;
              padding-bottom: 4px;
          }
              .mobile-key-feature-section {
                padding: 30px 16px 16px;
            }
                .question {
                font-size: 14px;
            }
                .answercont img {
                padding: 0 14px 14px;
            }
                .answer {
                padding: 0 14px 14px;}
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
                font-size: 12px;
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
              width: 114px;
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
                .text_xl {
              font-size: 12px;
              line-height: 20px;
          }
         }
         @media (max-width: 330px) {
              .grdient-text {
          font-size: 19px;
          line-height: 22px;
      }
         }
    </style>
      <section class="section-padding">
      <div class="container-fluid">
        <div class="testimonial-section">
          <!-- <img
            src="IMAGE_PATHmindmap/ready to tranform.svg"
            alt="ready to tranform"
          /> -->
          <div class="testimotinal-content">
            <p class="grdient-text text-center">
              ${title}
            </p>
            <p class="text_xl testimotinal-subtext">
             ${text_base}
            </p>
            <button class="btn-gradient-signUp">
              <span style="text-transform: capitalize">Sign up free</span>
            </button>
          </div>
          <div class="testimonal-icon icon1">
            <img src="IMAGE_PATHmindmap/user2.png" alt="user2" />
          </div>
          <div class="testimonal-icon icon2">
            <img src="IMAGE_PATHmindmap/user3.png" alt="user3" />
          </div>
          <div class="testimonal-icon icon3">
            <img src="IMAGE_PATHmindmap/user1.png" alt="user1" />
          </div>
          <div class="testimonal-icon icon4">
            <img src="IMAGE_PATHmindmap/user4.png" alt="user4" />
          </div>
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("feature-blackbox-with-icons", CommonComponent7);
