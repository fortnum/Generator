//import pptxgen from "pptxgenjs";
const pptxgen = require('pptxgenjs');
var fs = require('fs');

const outDirName = 'out';
if (!fs.existsSync(outDirName)) {
    fs.mkdirSync(outDirName);
}

function getDataForYearMonth() {

    const yearMonthDirectoryPath = 'data_files/2022_01/';

    const statisticsJsonStr = fs.readFileSync(yearMonthDirectoryPath + 'statistics.json');
    const successfulAuthorizationsJsonStr = fs.readFileSync(yearMonthDirectoryPath + 'successful_authorizations.json');
    const usersJsonStr = fs.readFileSync(yearMonthDirectoryPath + 'users.json');

    const statistics = JSON.parse(statisticsJsonStr);
    const successfulAuthorizations = JSON.parse(successfulAuthorizationsJsonStr);
    const users = JSON.parse(usersJsonStr);

    return {
        statistics: statistics,
        successfulAuthorizations: successfulAuthorizations,
        users: users
    }
}

const data = getDataForYearMonth();

let pres = new pptxgen();

let slide = pres.addSlide();

slide.addText("Hello World from PptxGenJS...", {
    x: 1.5,
    y: 1.5,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
});

const dataStr = JSON.stringify(data, null, 2);

slide.addText(dataStr, {
    x: 0.1,
    y: 2,
    color: "363636",
    fill: { color: "F1F1F1" },
    fontSize: 8,
    align: 'left',
    valign: 'top'
});

pres.writeFile({ fileName: "out/Presentation.pptx" });

console.log('Presentation created.');