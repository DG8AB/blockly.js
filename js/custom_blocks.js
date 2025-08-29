// Defines the custom blocks for the HTML elements.

// Paragraph block
Blockly.Blocks['p'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<p>");
    this.appendValueInput("STYLE")
        .setCheck("style")
        .appendField("style");
    this.appendValueInput("ONCLICK")
        .setCheck("event")
        .appendField("onclick");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("The <p> tag defines a paragraph.");
    this.setHelpUrl("");
  }
};

// Div block
Blockly.Blocks['div'] = {
  init: function() {
    this.appendValueInput("CONTENT")
        .setCheck("String")
        .appendField("<div>");
    this.appendValueInput("STYLE")
        .setCheck("style")
        .appendField("style");
    this.appendValueInput("ONCLICK")
        .setCheck("event")
        .appendField("onclick");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("A generic container for text.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div");
  }
};

// H1 block
Blockly.Blocks['h1'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<h1>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("A level 1 heading.");
  }
};

// H2 block
Blockly.Blocks['h2'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<h2>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("A level 2 heading.");
  }
};

// H3 block
Blockly.Blocks['h3'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<h3>");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("A level 3 heading.");
  }
};

// Image block
Blockly.Blocks['img'] = {
  init: function() {
    this.appendValueInput("SRC")
        .setCheck("String")
        .appendField("<img> src");
    this.appendValueInput("ALT")
        .setCheck("String")
        .appendField("alt");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("An image.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img");
  }
};

// Video block
Blockly.Blocks['video'] = {
  init: function() {
    this.appendValueInput("SRC")
        .setCheck("String")
        .appendField("<video> src");
    this.appendDummyInput()
        .appendField("controls")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "CONTROLS");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("A video player.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video");
  }
};

// Style block
Blockly.Blocks['style'] = {
  init: function() {
    this.appendValueInput("COLOR")
        .setCheck("String")
        .appendField("color");
    this.appendValueInput("BACKGROUND_COLOR")
        .setCheck("String")
        .appendField("background-color");
    this.appendValueInput("FONT_SIZE")
        .setCheck("String")
        .appendField("font-size");
    this.setOutput(true, "style");
    this.setColour(120);
    this.setTooltip("Defines CSS styles.");
    this.setHelpUrl("");
  }
};

// Script block
Blockly.Blocks['script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("<script>");
    this.appendStatementInput("SCRIPT")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Embeds JavaScript code.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script");
  }
};

// Onclick block
Blockly.Blocks['onclick'] = {
  init: function() {
    this.appendValueInput("CODE")
        .setCheck("String")
        .appendField("onclick");
    this.setOutput(true, "event");
    this.setColour(65);
    this.setTooltip("Executes JavaScript code on click.");
    this.setHelpUrl("");
  }
};

// --- HTML Generators ---

Blockly.HTML['onclick'] = function(block) {
  var code = Blockly.HTML.valueToCode(block, 'CODE', Blockly.HTML.ORDER_ATOMIC) || '';
  code = code.trim().replace(/'/g, '');
  return [code, Blockly.HTML.ORDER_ATOMIC];
};

Blockly.HTML['style'] = function(block) {
  var color = Blockly.HTML.valueToCode(block, 'COLOR', Blockly.HTML.ORDER_ATOMIC) || '';
  var bgColor = Blockly.HTML.valueToCode(block, 'BACKGROUND_COLOR', Blockly.HTML.ORDER_ATOMIC) || '';
  var fontSize = Blockly.HTML.valueToCode(block, 'FONT_SIZE', Blockly.HTML.ORDER_ATOMIC) || '';

  var style = '';
  if (color) {
    style += 'color:' + color.replace(/'/g, '') + ';';
  }
  if (bgColor) {
    style += 'background-color:' + bgColor.replace(/'/g, '') + ';';
  }
  if (fontSize) {
    style += 'font-size:' + fontSize.replace(/'/g, '') + ';';
  }

  return [style, Blockly.HTML.ORDER_ATOMIC];
};


Blockly.HTML['p'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var style = Blockly.HTML.valueToCode(block, 'STYLE', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclick = Blockly.HTML.valueToCode(block, 'ONCLICK', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclickAttr = onclick ? 'onclick="' + onclick + '"' : '';
  return '  <p style="' + style + '" ' + onclickAttr + '>' + text.replace(/'/g, '') + '</p>\n';
};

Blockly.HTML['div'] = function(block) {
  var content = Blockly.HTML.valueToCode(block, 'CONTENT', Blockly.HTML.ORDER_ATOMIC) || '';
  var style = Blockly.HTML.valueToCode(block, 'STYLE', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclick = Blockly.HTML.valueToCode(block, 'ONCLICK', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclickAttr = onclick ? 'onclick="' + onclick + '"' : '';
  return '<div style="' + style + '" ' + onclickAttr + '>' + content.replace(/'/g, '') + '</div>\n';
};

Blockly.HTML['h1'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  return '<h1>' + text.replace(/'/g, '') + '</h1>\n';
};

Blockly.HTML['h2'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  return '<h2>' + text.replace(/'/g, '') + '</h2>\n';
};

Blockly.HTML['h3'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  return '<h3>' + text.replace(/'/g, '') + '</h3>\n';
};

Blockly.HTML['img'] = function(block) {
  var src = Blockly.HTML.valueToCode(block, 'SRC', Blockly.HTML.ORDER_ATOMIC) || '';
  var alt = Blockly.HTML.valueToCode(block, 'ALT', Blockly.HTML.ORDER_ATOMIC) || '';
  return '<img src="' + src.replace(/'/g, '') + '" alt="' + alt.replace(/'/g, '') + '">\n';
};

Blockly.HTML['video'] = function(block) {
  var src = Blockly.HTML.valueToCode(block, 'SRC', Blockly.HTML.ORDER_ATOMIC) || '';
  var controls = block.getFieldValue('CONTROLS') === 'TRUE' ? 'controls' : '';
  return '<video src="' + src.replace(/'/g, '') + '" ' + controls + '></video>\n';
};

Blockly.HTML['script'] = function(block) {
  var script = Blockly.JavaScript.statementToCode(block, 'SCRIPT');
  return '<script>\n' + script + '</script>\n';
};
