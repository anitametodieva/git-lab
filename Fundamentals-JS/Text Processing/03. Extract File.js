function extractFile(path){
    let fileNameExt = path.split('\\').pop();
    let lastDotIdx = fileNameExt.lastIndexOf('.');

    let fileName = fileNameExt.slice(0, lastDotIdx);
    let fileExt = fileNameExt.slice(lastDotIdx + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExt}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')