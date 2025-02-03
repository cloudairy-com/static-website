// common-component.js
class CommonComponent2 extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    // console.log("called");
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      "data-title",
      "data-image",
      "text_base",
      "lgheight",
      "lgmax_width",
      "image1",
      "image2",
      "image3",
      "image4",
      "image5",
      "data1",
      "data2",
      "data3",
      "data4",
      "data5",
      "sub_data1",
      "sub_data2",
      "sub_data3",
      "sub_data4",
      "sub_data5",
    ];
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("data-title") || "Default Title";
    const text_base = this.getAttribute("text_base") || "default text";
    const lgheight = this.getAttribute("lgheight") || "70px";
    const lgmax_width = this.getAttribute("lgmax_width") || "auto";
    const image1 = this.getAttribute("image1") || "default.jpg";
    const image2 = this.getAttribute("image2") || "default.jpg";
    const image3 = this.getAttribute("image3") || "default.jpg";
    const image4 = this.getAttribute("image4") || "default.jpg";
    const image5 = this.getAttribute("image5") || "default.jpg";
    const data1 = this.getAttribute("data1") || "Default Title";
    const data2 = this.getAttribute("data2") || "Default Title";
    const data3 = this.getAttribute("data3") || "Default Title";
    const data4 = this.getAttribute("data4") || "Default Title";
    const data5 = this.getAttribute("data5") || "Default Title";
    const sub_data1 = this.getAttribute("sub_data1") || "Default Title";
    const sub_data2 = this.getAttribute("sub_data2") || "Default Title";
    const sub_data3 = this.getAttribute("sub_data3") || "Default Title";
    const sub_data4 = this.getAttribute("sub_data4") || "Default Title";
    const sub_data5 = this.getAttribute("sub_data5") || "Default Title";
    const isShow = this.getAttribute("isShow") || "5";

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
         font-size: 40px;
         font-weight: 600;
         line-height: 52px;
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
         line-height: 26px;
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
         line-height: 21px;
         color: rgba(7, 5, 41, 0.7);
       }
       .text-2xl {
         font-size: 24px;
         font-weight: 600;
         line-height: 36px;
         color: #18181B;
       }
       
       /* section 4 */
        .benefit-section.three-columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
       .benefit-section.five-columns {
         display: grid;
         grid-template-columns: repeat(5, 1fr);
         gap: 24px;
       }
        .benefit-section.four-columns {
         display: grid;
          grid-template-columns: repeat(4, 1fr);
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
         color: #18181B;
         padding: 30px 0 18px;
        height:${lgheight};
        max-width:${lgmax_width};
         line-height: 25px;
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
         .more-mindmap-content {
            padding: 20px 0 50px;
            color: #070529;
            max-width: 1000px;
            margin: 0 auto;
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
              .key-feature-section{
                gap: 30px;
              }
              .key-content-section{
                padding-right: 30px;
              }
              .key-content-section h2 {
            font-size: 30px;
            line-height: 38px;
            padding-bottom: 7px;
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
        .key-content-subtitle{
          padding-bottom: 14px;
        }
          .benefit-box h5 {
              line-height: 20px;
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
          .mobile-key-feature-section{
            display: block;
            padding: 40px 16px;
            
          }
           .image-faqs-box{
        background-color: #F9F8FB;
        border-radius: 20px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        gap:20px ;
       }
       .container {
          background-color: white;
          color: black;
          border-radius: 10px;
          /* margin: 20px 0; */
        }

        .question {
          font-size: 1.2rem;
          font-weight: 500;
          padding: 20px;
          position: relative;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: #18181B !important;
          -webkit-tap-highlight-color: transparent !important;
          display: flex;
          justify-content: space-between;
        }
        .question .active{
          color: #18181B !important;
        }

        .question.active img{
          rotate: 180deg;
        }

        .answercont {
          max-height: 0;
          overflow: hidden;
          transition: 0.3s;
        }
            .answercont img {
            padding: 0 205px 20px;
        }
        .answer {
          padding: 0 20px 20px;
          line-height: 1.5rem;
          padding-bottom: 20px;
        }
          .mobile-key-feature-section h2{
            text-align: center;
            font-size: 38px;
            line-height: 56px;
          }
          .key-content-subtitle{
            max-width: 700px;
            margin: 0 auto;
            text-align: center;
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
         .benefit-section.five-columns  {
             grid-template-columns: repeat(3, 1fr);
             gap: 16px;
         }
                   .benefit-section.four-columns {
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
              .benefit-box h5 {
        
        height:40px;
        max-width:none !important;
        
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
             .benefit-box h5 {
        
        height:48px;
        max-width:none !important;
        
       }
          .mobile-key-feature-section h2{
            padding-bottom: 8px;
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
               .benefit-section.three-columns {
             grid-template-columns: repeat(2, 1fr);
             gap: 16px;
         }
              .benefit-section.five-columns {
             grid-template-columns: repeat(2, 1fr);
             gap: 16px;
         }
                   .benefit-section.four-columns {
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
       }
       @media (max-width: 576px) {
         h1 {
           font-size: 28px;
           line-height: 34px;
         }
            h3 {
           font-size: 20px;
           line-height: 26px;
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
               .benefit-section.three-columns {
             grid-template-columns: repeat(1, 1fr);
             gap: 16px;
         }
              .benefit-section.five-columns {
             grid-template-columns: repeat(1, 1fr);
             gap: 16px;
         }
                   .benefit-section.four-columns {
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
             .benefit-box h5 {
        height:35px;
        max-width:none !important;
       }
           
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
    
        .grdient-text {
            font-size: 23px;
            line-height: 29px;
        }
         .testimotinal-content{
            top: 5%;
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
       }
    </style>
      <section style="background-color: #F9FAFC">
      <div class="container-fluid section-padding">
        <h3>${title} </h3>
        <p class="text_base text-center more-mindmap-content">
        ${text_base}
        </p>
        <div class="benefit-section ${
          isShow === "5"
            ? "five-columns"
            : isShow === "4"
            ? "four-columns"
            : "three-columns"
        }">
          <div class="benefit-box">
            <div class="benefit-icon" style="background: #75bb0b1a">
              <img src=${image1} alt="icon1" />
            </div>
            <h5 class="text_base text-center">${data1}</h5>
            <p class="text_sm text-center">
             ${sub_data1}
            </p>
          </div>
          <div class="benefit-box">
            <div class="benefit-icon" style="background: #f998111a">
              <img src=${image2} alt="icon2" />
            </div>
            <h5 class="text_base text-center">${data2}</h5>
            <p class="text_sm text-center">
             ${sub_data2}
            </p>
          </div>
          <div class="benefit-box">
            <div class="benefit-icon" style="background: #8035e81a">
              <img src=${image3} alt="icon3" />
            </div>
            <h5 class="text_base text-center">${data3}</h5>
            <p class="text_sm text-center">
           ${sub_data3}
            </p>
          </div>
         ${
           isShow === "5" || isShow === "4"
             ? `
          <div class="benefit-box">
            <div class="benefit-icon" style="background: #20d8f81a">
              <img src=${image4} alt="icon4" />
            </div>
            <h5 class="text_base text-center">
              ${data4}
            </h5>
            <p class="text_sm text-center">
            ${sub_data4}
            </p>
          </div>
           ${
             isShow === "5"
               ? ` <div class="benefit-box">
            <div class="benefit-icon" style="background: #ef1c791a">
              <img src=${image5} alt="icon5" />
            </div>
            <h5 class="text_base text-center">${data5}</h5>
            <p class="text_sm text-center">
             ${sub_data5}
            </p>
          </div>`
               : ""
           }
         
          `
             : ""
         }
        </div>
      </div>
    </section>
    `;
  }
}

customElements.define("feature-benefit", CommonComponent2);
