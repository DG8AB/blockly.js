'use strict';

Blockly.CSS = new Blockly.Generator('CSS');

Blockly.CSS.scrub_ = function(block, code) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = nextBlock ? Blockly.CSS.blockToCode(nextBlock) : '';
  return code + '\n' + nextCode;
};

Blockly.CSS['css_rule'] = function(block) {
  var selector = block.getFieldValue('SELECTOR');
  var properties = Blockly.CSS.statementToCode(block, 'PROPERTIES');
  return selector + ' {\n' + properties + '\n}';
};

Blockly.CSS['css_color'] = function(block) {
  var value = Blockly.CSS.valueToCode(block, 'VALUE', Blockly.CSS.ORDER_ATOMIC) || 'black';
  return '  color: ' + value.replace(/'/g, '') + ';';
};

Blockly.CSS['css_background_color'] = function(block) {
  var value = Blockly.CSS.valueToCode(block, 'VALUE', Blockly.CSS.ORDER_ATOMIC) || 'white';
  return '  background-color: ' + value.replace(/'/g, '') + ';';
};

Blockly.CSS['css_font_size'] = function(block) {
  var value = Blockly.CSS.valueToCode(block, 'VALUE', Blockly.CSS.ORDER_ATOMIC) || '16px';
  return '  font-size: ' + value.replace(/'/g, '') + ';';
};

Blockly.CSS['css_margin'] = function(block) {
  var value = Blockly.CSS.valueToCode(block, 'VALUE', Blockly.CSS.ORDER_ATOMIC) || '0';
  return '  margin: ' + value.replace(/'/g, '') + ';';
};
