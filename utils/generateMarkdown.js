// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none' || license === 'The Unlicense') {
    return "";
  }
  license = license.replaceAll(' ', '%20');
  return `![License badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let license_link;

  switch (license) {
    case 'Apache License 2.0': 
      return_link = "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case 'GNU General Public License v3.0': 
      return_link = "";
      break;
    case 'MIT License': 
      return_link = "";
      break;
    case 'BSD 2-Clause “Simplified” License': 
      return_link = "";
      break;
    case 'BSD 3-Clause “New” or “Revised” License': 
      return_link = "";
      break;
    case 'Boost Software License 1.0': 
      return_link = "";
      break;
  case 'Creative Commons Zero v1.0 Universal': 
      return_link = "";
      break;
  case 'Eclipse Public License 2.0': 
      return_link = "";
      break;
  case 'GNU Affero General Public License v3.0': 
      return_link = "";
      break;      
  case 'GNU General Public License v2.0': 
      return_link = "";
      break;
  case 'GNU Lesser General Public License v2.1': 
      return_link = "";
      break;
  case 'Mozilla Public License 2.0': 
      return_link = "";
      break;
  default: 
      return_link = "";
  }

  return license_link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
