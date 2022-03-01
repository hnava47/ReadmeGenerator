const renderLicenseBadge = (license) => {
    if (!license) {
        return '';
    }

    if (license === 'MIT License') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    } else if (license === 'GNU AGPLv3') {
        return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
    } else if (license === 'GNU GPLv3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    } else if (license == 'GNU LGPLv3') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license === 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license === 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license === 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    }
};

const generateMarkdown = (data) => {
    const licenseBadge = renderLicenseBadge(data.license);
    return `<div id="top"></div>
<br/>
<div align="center">
    <h1 align="center">${data.title}</h1>
</div>

<details>
    <summary>Table of Contents</summary>
    <ol>
        <li><a href="#description">Description</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#tests">Tests</a></li>
        <li><a href="#tests">License</a></li>
        <li><a href="#tests">Questions</a></li>
    </ol>
</details>
<br/>

## Description
${data.description}

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation
${data.installation}

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage
${data.usage}

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing
${data.contributing}

<p align="right">(<a href="#top">back to top</a>)</p>

## Tests
${data.tests}

<p align="right">(<a href="#top">back to top</a>)</p>

## License
${licenseBadge}

<p align="right">(<a href="#top">back to top</a>)</p>

## Questions
GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})

Email: [${data.email}](${data.email})

<p align="right">(<a href="#top">back to top</a>)</p>`
};

module.exports = generateMarkdown;
