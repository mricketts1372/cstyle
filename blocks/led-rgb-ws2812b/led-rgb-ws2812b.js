// define blocks
'use strict';

Blockly.Blocks['lp2i_ledRGB_WS2812B_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init)
		;
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Pin)
         .appendField(new Blockly.FieldTextInput ("2"),'Pin_LedRGB');
    this.appendDummyInput()
      .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Brightness)
        .appendField(new Blockly.FieldTextInput("100"),"BRIGHTNESS");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_init_Number_of_Pixels)
        .appendField(new Blockly.FieldTextInput("2"), "Number_of_Pixels");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ff0080");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};

Blockly.Blocks['lp2i_ledRGB_WS2812B_setPixelColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor)

    this.appendValueInput("Red" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Red);
    this.appendValueInput("Green" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Green);
    this.appendValueInput("Blue" , 'Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Blue);
   this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number)
         .appendField(new Blockly.FieldTextInput("0"), "Pixel_number");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A55D7");
    this.setTooltip('');
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};
Blockly.Blocks['lp2i_ledRGB_WS2812B_setPixelColor_custom'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_custom);
        this.appendDummyInput()
 .appendField(new Blockly.FieldColour("#00ff00"),"RGB");
 this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.lp2i_ledRGB_WS2812B_setPixelColor_Pixel_Number)
        .appendField(new Blockly.FieldTextInput("0"), "Pixel_number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#8A55D7");
    this.setHelpUrl('http://blogpeda.ac-poitiers.fr/techno-jean-mace/2016/02/07/utilisation-de-modules-led-rgb-ws2812b-avec-blockly-arduino/');
  }
};
