document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("salesForm"); // Updated form ID here
  const submitBtn = document.getElementById("submitBtn");

  const validateForm = () => {
    let isValid = true;

    // Validate First Name
    const firstname = document.getElementById("firstname");
    const firstNameError = document.getElementById("firstNameError");
    if (firstname.value.trim() === "") {
      firstNameError.textContent = "First Name is required!";
      isValid = false;
    } else {
      firstNameError.textContent = "";
    }

    // Validate Email
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

    // Validate Agreement checkbox
    const isAgree = document.getElementById("isAgree");
    const isAgreeError = document.getElementById("privacyPolicyError");
    if (!isAgree.checked) {
      isAgreeError.textContent = "You must accept the agreement";
      isValid = false; // Fix this to `false`
    } else {
      isAgreeError.textContent = "";
    }

    return isValid;
  };

  form.addEventListener("input", () => {
    submitBtn.disabled = !validateForm();
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const submitBtn = document.getElementById("submitBtn");
      submitBtn.disabled = true; // Disable the button to prevent double submission

      const values = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        email: document.getElementById("email").value,
        mobilephone: document.getElementById("mobilephone").value,
        jobtitle: document.getElementById("jobtitle").value,
        company: document.getElementById("company").value,
        message: document.getElementById("messageError").value,
      };

      const data = {
        fields: [
          { objectTypeId: "0-1", name: "firstname", value: values.firstname },
          { objectTypeId: "0-1", name: "lastname", value: values.lastname },
          { objectTypeId: "0-1", name: "email", value: values.email },
          {
            objectTypeId: "0-1",
            name: "mobilephone",
            value: values.mobilephone,
          },
          { objectTypeId: "0-1", name: "jobtitle", value: values.jobtitle },
          { objectTypeId: "0-1", name: "company", value: values.company },
          { objectTypeId: "0-1", name: "message", value: values.message },
        ],
      };

      try {
        const response = await hubpost("/contact", { ...data });
        // console.log(response, "response");
        
        // const result = await response.json();
      

        if (response.data.redirectUri.includes("thank-you")) {
          window.location.href = "thank-you";
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error here, maybe show a message
      } finally {
        submitBtn.disabled = false; // Re-enable submit button
      }
    }
  });
});
