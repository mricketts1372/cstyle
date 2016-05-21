Blockly.Arduino.lp2i_ledRGB_WS2812B_init = function() {
  var pin_ledrgb= this.getFieldValue ('Pin_LedRGB');
  var numpixels= this.getFieldValue ("Number_of_Pixels");
var c=this.getFieldValue("BRIGHTNESS");

  Blockly.Arduino.definitions_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>\n Adafruit_NeoPixel pixels = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);\n';
  //dans le setup
     Blockly.Arduino.setups_['setup_pin_ledrgb'] = 'pinMode('+pin_ledrgb+', OUTPUT);\n';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B'] = 'pixels.begin();\n';
 Blockly.Arduino.setups_['setup_ledRGB_brightness'] = 'pixels.setBrightness('+c+');\n';
    return ''
};

function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16);};
function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16);};
function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16);};
function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h;};Blockly.Arduino.lp2i_ledRGB_WS2812B_setPixelColor_custom = function() {
 var pixel_number= this.getFieldValue ("Pixel_number");
 var rgb = this.getFieldValue("RGB");

var code = 'pixels.setPixelColor('+pixel_number+',pixels.Color('+hexToR(rgb)+','+hexToG(rgb)+','+hexToB(rgb)+'));\n';
	code    += 'pixels.show();\n'
  return code;
};
Blockly.Arduino.lp2i_ledRGB_WS2812B_setPixelColor = function() {
  var pixel_number= this.getFieldValue ("Pixel_number");
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixels.setPixelColor('+pixel_number+', pixels.Color('+red+','+green+','+blue+'));\n'
  code    += 'pixels.show();\n'
  return code;
};

