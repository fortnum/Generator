//import pptxgen from "pptxgenjs";
const pptxgen = require('pptxgenjs');
var fs = require('fs');

const outDirName = 'out';
if (!fs.existsSync(outDirName)) {
    fs.mkdirSync(outDirName);
}

let pres = new pptxgen();

let slide = pres.addSlide();

slide.addText("Hello World from PptxGenJS...", {
    x: 1.5,
    y: 1.5,
    color: "363636",
    fill: { color: "F1F1F1" },
    align: pres.AlignH.center,
});

pres.writeFile({ fileName: "out/Presentation.pptx" });

console.log('Presentation created.');