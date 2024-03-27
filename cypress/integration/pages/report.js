// Prepare folder structure

const fs = require('fs-extra')
const dir = './cucumber_report/html';

if (fs.existsSync(dir)) {
    fs.removeSync(dir);
}
fs.mkdirSync(dir);


//Report configuration

const reporter = require('cucumber-html-reporter');
const option = {
    theme: "bootstrap",
    jsonDir: 'cucumber_report',
    output: 'cucumber_report/html/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestap: true,
    metadata: {

    }
};

//Generate report
reporter.generate(options)


