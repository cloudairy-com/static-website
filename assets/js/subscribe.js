async function hubpost(url, data, config = {}) {
  const response = await fetch(
    "https://api.hsforms.com/submissions/v3/integration/submit/45899842/4be13744-d265-45ce-84d9-2ed904895e28",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...config.headers,
      },
      body: JSON.stringify(data),
    }
  );

  const jsonResponse = await response.json();
  return { status: response.status, data: jsonResponse };
}

const loadHubSpotScript = () => {
  const script = document.createElement("script");
  script.src = "//js.hs-scripts.com/45899842.js";
  script.async = true;
  script.defer = true;
  script.id = "hs-script-loader";
  // Event listener to ensure the script is loaded
  script.onload = () => {
    if (window.hbspt) {
      window.hbspt.forms.create({
        region: "na1",
        portalId: "45899842",
        formId: "4be13744-d265-45ce-84d9-2ed904895e28",
        target: "#hubspotForm",
      });
    }
  };
  document.body.appendChild(script);
};

// if (window.hbspt) {
//   console.log("HubSpot script already loaded.");
// } else {
//   loadHubSpotScript();
// }

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

// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.getElementById("subscribeForm1");
//   const signupbtn1 = document.getElementById("signupbtn1");

//   if (!form) {
//     return; // Exit if form is not found
//   }

//   const validateForm = () => {
//     let isValid = true;

//     const email1 = document.getElementById("email1");
//     const emailError1 = document.getElementById("emailError1");
//     const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
//     if (email1.value.trim() === "") {
//       emailError1.textContent = "Email address is required!";
//       isValid = false;
//     } else if (!emailPattern.test(email1.value.trim())) {
//       emailError1.textContent = "Invalid Email format";
//       isValid = false;
//     } else {
//       emailError1.textContent = "";
//     }
//     return isValid;
//   };

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const values = {
//         email1: document.getElementById("email1").value,
//       };

//       const data = {
//         fields: [{ objectTypeId: "0-1", name: "email", value: values.email1 }],
//       };

//       try {
//         const result = await hubpost("/subscribe", data);
//         console.log(result, "result");

//         if (result.status === 200) {
//           window.location.href = "thank-you";
//         } else {
//           alert(result.data.message || "An error occurred. Please try again.");
//         }
//       } catch (error) {
//         console.error("Error:", error);
//         alert("An error occurred. Please try again.");
//       } finally {
//         signupbtn1.disabled = false;
//       }
//     }
//   });
// });

const handleClick = (link) => {
  window.open(link, "_blank", "noopener,noreferrer");
};
