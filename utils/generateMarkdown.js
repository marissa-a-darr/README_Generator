// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseInfo = [
  {
    name: "MIT License",
    url: "https://choosealicense.com/licenses/mit/",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  {
    name: "Mozilla Public License 2.0",
    url: "https://choosealicense.com/licenses/mpl-2.0/",
    badge:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  },
  {
    name: "GNU Affero General Public License v3.0",
    url: "https://choosealicense.com/licenses/agpl-3.0/",
    badge:
      "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  },
  {
    name: "Apache License 2.0",
    url: "https://choosealicense.com/licenses/apache-2.0/",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: "GNU General Public License v3.0",
    url: "https://choosealicense.com/licenses/gpl-3.0/",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  {
    name: "None",
    url: "",
    badge: "",
  },
];
function renderLicenseBadge(license) {
  for (const key in licenseInfo) {
    if (license === licenseInfo[key].name) {
      return licenseInfo[key].badge;
    }
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (const key in licenseInfo) {
    if (license === licenseInfo[key].name) {
      return licenseInfo[key].url;
    }
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var licenseBadge = renderLicenseBadge(license);
  var licenseURL = renderLicenseLink(license);
  return `${license} ${licenseBadge}
* ${licenseURL}`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var licenseComplete = renderLicenseSection(data.license);
  return `# ${data.title}

## Table of Contents
* [License](#license)  
* [Description](#description)
* [Installation](#installation)
* [Contribution](#contribution) 
* [Testing](#testing)
* [Questions](#questions)

## Description <a name="description"></a>   
${data.description}

## License <a name="license"></a>  
${licenseComplete}

## Installation <a name="installation"></a>  
${data.installation}

## Contribution <a name="contribution"></a>  
${data.contribution}

## Testing <a name="testing"></a>  
${data.testing}


## Questions <a name="questions"></a>  
* [Github](https://github.com/${data.github})
* Email: ${data.email}
* Other Contact: ${data.contact}`;
}

module.exports = generateMarkdown;
