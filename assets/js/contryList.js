const LOCAL_COUNTRIES = [
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "IN", label: "India", phone: "91" },
  { code: "AI", label: "Anguilla", phone: "1-264" },

  { code: "AL", label: "Albania", phone: "355" },

  { code: "AM", label: "Armenia", phone: "374" },

  { code: "AO", label: "Angola", phone: "244" },

  { code: "AQ", label: "Antarctica", phone: "672" },

  { code: "AR", label: "Argentina", phone: "54" },

  { code: "AS", label: "American Samoa", phone: "1-684" },

  { code: "AT", label: "Austria", phone: "43" },

  {
    code: "AU",

    label: "Australia",

    phone: "61",

    suggested: true,
  },

  { code: "AW", label: "Aruba", phone: "297" },

  { code: "AX", label: "Alland Islands", phone: "358" },

  { code: "AZ", label: "Azerbaijan", phone: "994" },

  {
    code: "BA",

    label: "Bosnia and Herzegovina",

    phone: "387",
  },

  { code: "BB", label: "Barbados", phone: "1-246" },

  { code: "BD", label: "Bangladesh", phone: "880" },

  { code: "BE", label: "Belgium", phone: "32" },

  { code: "BF", label: "Burkina Faso", phone: "226" },

  { code: "BG", label: "Bulgaria", phone: "359" },

  { code: "BH", label: "Bahrain", phone: "973" },

  { code: "BI", label: "Burundi", phone: "257" },

  { code: "BJ", label: "Benin", phone: "229" },

  { code: "BL", label: "Saint Barthelemy", phone: "590" },

  { code: "BM", label: "Bermuda", phone: "1-441" },

  { code: "BN", label: "Brunei Darussalam", phone: "673" },

  { code: "BO", label: "Bolivia", phone: "591" },

  { code: "BR", label: "Brazil", phone: "55" },

  { code: "BS", label: "Bahamas", phone: "1-242" },

  { code: "BT", label: "Bhutan", phone: "975" },

  { code: "BV", label: "Bouvet Island", phone: "47" },

  { code: "BW", label: "Botswana", phone: "267" },

  { code: "BY", label: "Belarus", phone: "375" },

  { code: "BZ", label: "Belize", phone: "501" },

  {
    code: "CA",

    label: "Canada",

    phone: "1",

    suggested: true,
  },

  {
    code: "CC",

    label: "Cocos (Keeling) Islands",

    phone: "61",
  },

  {
    code: "CD",

    label: "Congo, Democratic Republic of the",

    phone: "243",
  },

  {
    code: "CF",

    label: "Central African Republic",

    phone: "236",
  },

  {
    code: "CG",

    label: "Congo, Republic of the",

    phone: "242",
  },

  { code: "CH", label: "Switzerland", phone: "41" },

  { code: "CI", label: "Cote d'Ivoire", phone: "225" },

  { code: "CK", label: "Cook Islands", phone: "682" },

  { code: "CL", label: "Chile", phone: "56" },

  { code: "CM", label: "Cameroon", phone: "237" },

  { code: "CN", label: "China", phone: "86" },

  { code: "CO", label: "Colombia", phone: "57" },

  { code: "CR", label: "Costa Rica", phone: "506" },

  { code: "CU", label: "Cuba", phone: "53" },

  { code: "CV", label: "Cape Verde", phone: "238" },

  { code: "CW", label: "Curacao", phone: "599" },

  { code: "CX", label: "Christmas Island", phone: "61" },

  { code: "CY", label: "Cyprus", phone: "357" },

  { code: "CZ", label: "Czech Republic", phone: "420" },

  {
    code: "DE",

    label: "Germany",

    phone: "49",

    suggested: true,
  },

  { code: "DJ", label: "Djibouti", phone: "253" },

  { code: "DK", label: "Denmark", phone: "45" },

  { code: "DM", label: "Dominica", phone: "1-767" },

  {
    code: "DO",

    label: "Dominican Republic",

    phone: "1-809",
  },

  { code: "DZ", label: "Algeria", phone: "213" },

  { code: "EC", label: "Ecuador", phone: "593" },

  { code: "EE", label: "Estonia", phone: "372" },

  { code: "EG", label: "Egypt", phone: "20" },

  { code: "EH", label: "Western Sahara", phone: "212" },

  { code: "ER", label: "Eritrea", phone: "291" },

  { code: "ES", label: "Spain", phone: "34" },

  { code: "ET", label: "Ethiopia", phone: "251" },

  { code: "FI", label: "Finland", phone: "358" },

  { code: "FJ", label: "Fiji", phone: "679" },

  {
    code: "FK",

    label: "Falkland Islands (Malvinas)",

    phone: "500",
  },

  {
    code: "FM",

    label: "Micronesia, Federated States of",

    phone: "691",
  },

  { code: "FO", label: "Faroe Islands", phone: "298" },

  {
    code: "FR",

    label: "France",

    phone: "33",

    suggested: true,
  },

  { code: "GA", label: "Gabon", phone: "241" },

  { code: "GB", label: "United Kingdom", phone: "44" },

  { code: "GD", label: "Grenada", phone: "1-473" },

  { code: "GE", label: "Georgia", phone: "995" },

  { code: "GF", label: "French Guiana", phone: "594" },

  { code: "GG", label: "Guernsey", phone: "44" },

  { code: "GH", label: "Ghana", phone: "233" },

  { code: "GI", label: "Gibraltar", phone: "350" },

  { code: "GL", label: "Greenland", phone: "299" },

  { code: "GM", label: "Gambia", phone: "220" },

  { code: "GN", label: "Guinea", phone: "224" },

  { code: "GP", label: "Guadeloupe", phone: "590" },

  { code: "GQ", label: "Equatorial Guinea", phone: "240" },

  { code: "GR", label: "Greece", phone: "30" },

  {
    code: "GS",

    label: "South Georgia and the South Sandwich Islands",

    phone: "500",
  },

  { code: "GT", label: "Guatemala", phone: "502" },

  { code: "GU", label: "Guam", phone: "1-671" },

  { code: "GW", label: "Guinea-Bissau", phone: "245" },

  { code: "GY", label: "Guyana", phone: "592" },

  { code: "HK", label: "Hong Kong", phone: "852" },

  {
    code: "HM",

    label: "Heard Island and McDonald Islands",

    phone: "672",
  },

  { code: "HN", label: "Honduras", phone: "504" },

  { code: "HR", label: "Croatia", phone: "385" },

  { code: "HT", label: "Haiti", phone: "509" },

  { code: "HU", label: "Hungary", phone: "36" },

  { code: "ID", label: "Indonesia", phone: "62" },

  { code: "IE", label: "Ireland", phone: "353" },

  { code: "IL", label: "Israel", phone: "972" },

  { code: "IM", label: "Isle of Man", phone: "44" },

  {
    code: "IO",

    label: "British Indian Ocean Territory",

    phone: "246",
  },

  { code: "IQ", label: "Iraq", phone: "964" },

  {
    code: "IR",

    label: "Iran, Islamic Republic of",

    phone: "98",
  },

  { code: "IS", label: "Iceland", phone: "354" },

  { code: "IT", label: "Italy", phone: "39" },

  { code: "JE", label: "Jersey", phone: "44" },

  { code: "JM", label: "Jamaica", phone: "1-876" },

  { code: "JO", label: "Jordan", phone: "962" },

  {
    code: "JP",

    label: "Japan",

    phone: "81",

    suggested: true,
  },

  { code: "KE", label: "Kenya", phone: "254" },

  { code: "KG", label: "Kyrgyzstan", phone: "996" },

  { code: "KH", label: "Cambodia", phone: "855" },

  { code: "KI", label: "Kiribati", phone: "686" },

  { code: "KM", label: "Comoros", phone: "269" },

  {
    code: "KN",

    label: "Saint Kitts and Nevis",

    phone: "1-869",
  },

  {
    code: "KP",

    label: "Korea, Democratic People's Republic of",

    phone: "850",
  },

  { code: "KR", label: "Korea, Republic of", phone: "82" },

  { code: "KW", label: "Kuwait", phone: "965" },

  { code: "KY", label: "Cayman Islands", phone: "1-345" },

  { code: "KZ", label: "Kazakhstan", phone: "7" },

  {
    code: "LA",

    label: "Lao People's Democratic Republic",

    phone: "856",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("countrySelect");
  const selectedFlagContainer = document.getElementById(
    "selectedFlagContainer"
  );
  const selectedFlag = document.getElementById("selectedFlag");
  const countryCodeDisplay = document.getElementById("countryCode");

  // Populate the dropdown
  LOCAL_COUNTRIES.forEach((country) => {
    const option = document.createElement("div");
    option.className = "option";
    option.setAttribute("data-value", country.code);
    option.innerHTML = `<img src="https://flagcdn.com/w40/${country.code.toLowerCase()}.png" style="width: 20px; height: 15px; margin-left: 5px;">`;

    option.addEventListener("click", () => {
      updateSelectedFlag(country.code);
      closeDropdown();
      countryCodeDisplay.textContent = `+${country.phone}`;
    });

    countrySelect.appendChild(option);
  });

  const updateSelectedFlag = (countryCode) => {
    const selectedCountry = LOCAL_COUNTRIES.find(
      (country) => country.code === countryCode
    );
    if (selectedCountry) {
      const selectedImage = `https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`;
      selectedFlag.src = selectedImage;
      selectedFlag.style.display = "inline";
      countryCodeDisplay.textContent = `+${selectedCountry.phone}`;
    }
  };

  const closeDropdown = () => {
    countrySelect.style.display = "none"; // Hide options
  };

  // Show options on click
  selectedFlagContainer.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from bubbling to document
    countrySelect.style.display =
      countrySelect.style.display === "none" ? "block" : "none";
  });

  // Close dropdown on clicking outside
  document.addEventListener("click", (e) => {
    if (!selectedFlagContainer.contains(e.target)) {
      closeDropdown();
    }
  });

  // Initialize with the first country
  updateSelectedFlag(LOCAL_COUNTRIES[0].code);
});
