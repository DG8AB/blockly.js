// Defines the custom blocks for the HTML elements.

// HTML block
Blockly.Blocks['html'] = {
  init: function() {
    this.appendStatementInput("HEAD")
        .setCheck("head")
        .appendField("<html>");
    this.appendStatementInput("BODY")
        .setCheck("body")
        .appendField("<body>");
    this.setColour(230);
    this.setTooltip("The root element of an HTML page.");
    this.setHelpUrl("");
    this.setDeletable(false); // Can't delete the root block
  }
};

// Head block
Blockly.Blocks['head'] = {
  init: function() {
    this.appendStatementInput("CONTENT")
        .setCheck("title") // Only allow title block inside head
        .appendField("<head>");
    this.setPreviousStatement(true, "head");
    this.setNextStatement(false); // No next statement for head
    this.setColour(160);
    this.setTooltip("The <head> element is a container for metadata.");
    this.setHelpUrl("");
  }
};

// Title block
Blockly.Blocks['title'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<title>");
    this.setPreviousStatement(true, "title");
    this.setNextStatement(false);
    this.setColour(160);
    this.setTooltip("The <title> tag defines the title of the document.");
    this.setHelpUrl("");
  }
};

// Body block
Blockly.Blocks['body'] = {
  init: function() {
    this.appendStatementInput("CONTENT")
        .setCheck(null) // Allow any content inside body
        .appendField("<body>");
    this.setPreviousStatement(true, "body");
    this.setNextStatement(false);
    this.setColour(20);
    this.setTooltip("The <body> tag defines the document's body.");
    this.setHelpUrl("");
  }
};

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
    this.appendStatementInput("CONTENT")
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
    this.setTooltip("A generic container.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div");
  }
};

// Heading block
Blockly.Blocks['h'] = {
  init: function() {
    var dropdown = new Blockly.FieldDropdown([
      ["h1", "h1"],
      ["h2", "h2"],
      ["h3", "h3"],
      ["h4", "h4"],
      ["h5", "h5"],
      ["h6", "h6"]
    ]);
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField(dropdown, "LEVEL");
    this.appendValueInput("STYLE")
        .setCheck("style")
        .appendField("style");
    this.appendValueInput("ONCLICK")
        .setCheck("event")
        .appendField("onclick");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip("A heading element.");
    this.setHelpUrl("https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements");
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

Blockly.HTML['html'] = function(block) {
  var head = Blockly.HTML.statementToCode(block, 'HEAD');
  var body = Blockly.HTML.statementToCode(block, 'BODY');
  return '<!DOCTYPE html>\n<html>\n' + head + '\n' + body + '\n</html>';
};

Blockly.HTML['head'] = function(block) {
  var content = Blockly.HTML.statementToCode(block, 'CONTENT');
  return '<head>\n  <meta charset="utf-8">\n' + content + '</head>';
};

Blockly.HTML['title'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  return '  <title>' + text.replace(/'/g, '') + '</title>\n';
};

Blockly.HTML['body'] = function(block) {
  var content = Blockly.HTML.statementToCode(block, 'CONTENT');
  return '<body>\n' + content + '</body>';
};

Blockly.HTML['p'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var style = Blockly.HTML.valueToCode(block, 'STYLE', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclick = Blockly.HTML.valueToCode(block, 'ONCLICK', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclickAttr = onclick ? 'onclick="' + onclick + '"' : '';
  return '  <p style="' + style + '" ' + onclickAttr + '>' + text.replace(/'/g, '') + '</p>\n';
};

Blockly.HTML['div'] = function(block) {
  var content = Blockly.HTML.statementToCode(block, 'CONTENT');
  var style = Blockly.HTML.valueToCode(block, 'STYLE', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclick = Blockly.HTML.valueToCode(block, 'ONCLICK', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclickAttr = onclick ? 'onclick="' + onclick + '"' : '';
  return '<div style="' + style + '" ' + onclickAttr + '>\n' + content + '</div>\n';
};

Blockly.HTML['h'] = function(block) {
  var level = block.getFieldValue('LEVEL');
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var style = Blockly.HTML.valueToCode(block, 'STYLE', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclick = Blockly.HTML.valueToCode(block, 'ONCLICK', Blockly.HTML.ORDER_ATOMIC) || '';
  var onclickAttr = onclick ? 'onclick="' + onclick + '"' : '';
  return '<' + level + ' style="' + style + '" ' + onclickAttr + '>' + text.replace(/'/g, '') + '</' + level + '>\n';
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
