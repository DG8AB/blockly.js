// Defines the custom blocks for the HTML elements.

// Paragraph block
Blockly.Blocks['p'] = {
  init: function() {
    this.appendValueInput("TEXT")
        .setCheck("String")
        .appendField("<p>");
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("p1"), "ID");
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
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("div1"), "ID");
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
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("h1_1"), "ID");
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
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("h2_1"), "ID");
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
    this.appendDummyInput()
        .appendField("id")
        .appendField(new Blockly.FieldTextInput("h3_1"), "ID");
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


// Event Listener block
Blockly.Blocks['add_event_listener'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("when element with id")
        .appendField(new Blockly.FieldTextInput("p1"), "ID");
    this.appendDummyInput()
        .appendField("is")
        .appendField(new Blockly.FieldDropdown([
          ["clicked", "click"],
          ["mouse over", "mouseover"],
          ["mouse out", "mouseout"]
        ]), "EVENT");
    this.appendStatementInput("ACTION")
        .setCheck(null)
        .appendField("do");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip("Attaches an event listener to an element.");
    this.setHelpUrl("");
  }
};

// CSS Rule block
Blockly.Blocks['css_rule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("style for selector")
        .appendField(new Blockly.FieldTextInput("h1"), "SELECTOR");
    this.appendStatementInput("PROPERTIES")
        .setCheck(["css_property"]);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Defines a CSS rule for a given selector.");
  }
};

// CSS Color block
Blockly.Blocks['css_color'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("color");
    this.setPreviousStatement(true, "css_property");
    this.setNextStatement(true, "css_property");
    this.setColour(120);
  }
};

// CSS Background Color block
Blockly.Blocks['css_background_color'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("background-color");
    this.setPreviousStatement(true, "css_property");
    this.setNextStatement(true, "css_property");
    this.setColour(120);
  }
};

// CSS Font Size block
Blockly.Blocks['css_font_size'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("font-size");
    this.setPreviousStatement(true, "css_property");
    this.setNextStatement(true, "css_property");
    this.setColour(120);
  }
};

// CSS Margin block
Blockly.Blocks['css_margin'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck("String")
        .appendField("margin");
    this.setPreviousStatement(true, "css_property");
    this.setNextStatement(true, "css_property");
    this.setColour(120);
  }
};


// --- HTML Generators ---

Blockly.HTML['p'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var id = block.getFieldValue('ID');
  return '  <p id="' + id + '">' + text.replace(/'/g, '') + '</p>\n';
};

Blockly.HTML['div'] = function(block) {
  var content = Blockly.HTML.valueToCode(block, 'CONTENT', Blockly.HTML.ORDER_ATOMIC) || '';
  var id = block.getFieldValue('ID');
  return '<div id="' + id + '">' + content.replace(/'/g, '') + '</div>\n';
};

Blockly.HTML['h1'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var id = block.getFieldValue('ID');
  return '<h1 id="' + id + '">' + text.replace(/'/g, '') + '</h1>\n';
};

Blockly.HTML['h2'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var id = block.getFieldValue('ID');
  return '<h2 id="' + id + '">' + text.replace(/'/g, '') + '</h2>\n';
};

Blockly.HTML['h3'] = function(block) {
  var text = Blockly.HTML.valueToCode(block, 'TEXT', Blockly.HTML.ORDER_ATOMIC) || '';
  var id = block.getFieldValue('ID');
  return '<h3 id="' + id + '">' + text.replace(/'/g, '') + '</h3>\n';
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

Blockly.JavaScript['add_event_listener'] = function(block) {
  var elementId = block.getFieldValue('ID');
  var event = block.getFieldValue('EVENT');
  var action = Blockly.JavaScript.statementToCode(block, 'ACTION');

  var code = "document.getElementById('" + elementId + "').addEventListener('" + event + "', function() {\n" +
             action +
             "});\n";
  return code;
};
