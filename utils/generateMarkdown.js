// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return "";
  } else {
    license = license.replaceAll(' ', '%20');
    return `![License badge](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`;
  }
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache License 2.0': 
      return "https://choosealicense.com/licenses/apache-2.0/";
      break;
    case 'GNU General Public License v3.0': 
      return "https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case 'MIT License': 
      return "https://choosealicense.com/licenses/mit/";
      break;
    case 'BSD 2-Clause “Simplified” License': 
      return "https://choosealicense.com/licenses/bsd-2-clause/";
      break;
    case 'BSD 3-Clause “New” or “Revised” License': 
      return "https://choosealicense.com/licenses/bsd-3-clause/";
      break;
    case 'Boost Software License 1.0': 
      return "https://choosealicense.com/licenses/bsl-1.0/";
      break;
  case 'Eclipse Public License 2.0': 
      return "https://www.eclipse.org/legal/epl-2.0/";
      break;
  case 'GNU Affero General Public License v3.0': 
      return "https://choosealicense.com/licenses/agpl-3.0/";
      break;      
  case 'GNU General Public License v2.0': 
      return "https://choosealicense.com/licenses/gpl-3.0/";
      break;
  case 'GNU Lesser General Public License v2.1': 
      return "https://choosealicense.com/licenses/lgpl-3.0/";
      break;
  case 'Mozilla Public License 2.0': 
      return "https://choosealicense.com/licenses/mpl-2.0/";
      break;
  case 'The Unlicense': 
      return "https://choosealicense.com/licenses/unlicense/";
      break;      
  default: 
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let currentLicenseLink = renderLicenseLink(license);
  if (license !== "none") {
    return `This application is available under the license: ${license}. 
    See the LICENSE file for more info. Full details available by link ${currentLicenseLink}. 
    `
  } else {
    return `n/a`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

let currentLicenseBadge = renderLicenseBadge(data.license);
let currentLicenseSection = renderLicenseSection(data.license);

return `
  # ${data.project}

  ${currentLicenseBadge}

  ## Description
  
  ${data.description}

  ![this image display the screenshot of the '${data.project}' application](${data.screenshot})

  ## Table of Contents
 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  - [Contribution](#contribution)
  - [Tests](#tests)
    
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${currentLicenseBadge}

  ${currentLicenseSection}
 
  ## Questions
  
  Link to my GitHub profile https://github.com/${data.username}/
  
  If you have additional questions or proposals please email me: [${data.email}](mailto:${data.email}?subject=[GitHub]%20command-line%20password%20generator)
    
  ## Contribution

  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  `;
}

module.exports = generateMarkdown;
