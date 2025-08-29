'use strict';

Blockly.HTML = new Blockly.Generator('HTML');

Blockly.HTML.finish = function(code) {
  return code;
};

Blockly.HTML.scrub_ = function(block, code) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = nextBlock ? Blockly.HTML.blockToCode(nextBlock) : '';
  return code + '\n' + nextCode;
};
