// Inject Blockly workspace
const blocklyDiv = document.getElementById('blockly-div');
const toolbox = document.getElementById('toolbox');
const workspace = Blockly.inject(blocklyDiv, {
  toolbox: toolbox,
  scrollbars: true,
  trashcan: true,
});

// Live preview update
function updatePreview() {
  const code = Blockly.HTML.workspaceToCode(workspace);
  const previewFrame = document.getElementById('preview-frame');
  const preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
  preview.open();
  preview.write(code);
  preview.close();
}

workspace.addChangeListener(updatePreview);


// Download button event listener
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const code = Blockly.HTML.workspaceToCode(workspace);
  const blob = new Blob([code], {type: 'text/html;charset=utf-8'});
  saveAs(blob, 'webpage.html');
});
