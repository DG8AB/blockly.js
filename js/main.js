// Inject Blockly workspace
const blocklyDiv = document.getElementById('blockly-div');
const toolbox = document.getElementById('toolbox');
const workspace = Blockly.inject(blocklyDiv, {
  toolbox: toolbox,
  scrollbars: true,
  trashcan: true,
});

function generateFullHtml(bodyContent) {
  const title = "My Awesome Webpage"; // A default title
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
    </head>
    <body>
      ${bodyContent}
    </body>
    </html>
  `;
}

// Live preview update
function updatePreview() {
  const bodyContent = Blockly.HTML.workspaceToCode(workspace);
  const fullHtml = generateFullHtml(bodyContent);
  const previewFrame = document.getElementById('preview-frame');
  const preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(fullHtml);
  preview.close();
}

workspace.addChangeListener(updatePreview);


// Download button event listener
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const bodyContent = Blockly.HTML.workspaceToCode(workspace);
  const fullHtml = generateFullHtml(bodyContent);
  const blob = new Blob([fullHtml], {type: 'text/html;charset=utf-8'});
  saveAs(blob, 'webpage.html');
});
