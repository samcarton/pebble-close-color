
var hash = "#";
var colorPickerBaseUrl = "http://developer.getpebble.com/more/color-picker/";

function computeClosestColor() {
    var inputcolor = document.getElementById("inputcolor");    
    var outputcolor = document.getElementById("outputcolor");
    var inputtext = document.getElementById("inputtext");
    var errortext = document.getElementById("errortext");
    var colorName = document.getElementById("colorName");
    var colorPickerLink = document.getElementById("colorPickerLink");



    var regex = /^#?(?:[0-9a-f]{3}){1,2}$/i;
    if(regex.test(inputtext.value) == false)
    {
    	errortext.innerHTML = "Incorrect Input color";
    	return;
    }
    else
    {
    	errortext.innerHTML = null;
    }

    if(inputtext.value.charAt(0) != hash)
    {
    	inputtext.value	= hash.concat(inputtext.value);
    }

    inputcolor.style.backgroundColor = inputtext.value;

    var outcolor = pebbleColor(inputtext.value);
    outputcolor.style.backgroundColor = outcolor;
    outputtext.value = outcolor;
    colorName.value = getName(outcolor.toUpperCase());
    colorPickerLink.href = colorPickerBaseUrl.concat(outcolor.toUpperCase());
}

function pebbleColor(inColor)
{
	if(inColor.length == 4)
	{
		return pebbleColor3(inColor);
	}
	else if (inColor.length == 7)
	{
		return pebbleColor6(inColor);
	}
	return null;
}

function pebbleColor3 (inColor) {
	var r = inColor.charAt(1);
	var g = inColor.charAt(2);
	var b = inColor.charAt(3);

	return toPebble(r,g,b);	
}

function pebbleColor6 (inColor)
{
	var r = inColor.substr(1,2);
	var g = inColor.substr(3,2);
	var b = inColor.substr(5,2);

	return toPebble(r,g,b);
}

function toPebble(r, g, b)
{
	var out = "#";
	return out.concat(toPebbleInner(r)).concat(toPebbleInner(g)).concat(toPebbleInner(b));
}

function toPebbleInner (hexIn) {
	if(hexIn.length == 1)
	{
		hexIn = hexIn.concat(hexIn);
	}

	var hexInt = parseInt(hexIn, 16);
	
	var result = mapToPebble(hexInt).toString(16);
	var padding = "00";
	return padding.substr(result.length) + result;
}

function mapToPebble (hexInt) {
	if(hexInt < 43) return 0;
	if(hexInt < 128) return 85;
	if(hexInt < 213) return 170;
	return 255;
}

function getName (fromHex)
{	
	return colorNames[fromHex];
}
var colorNames = {"#AAFFAA":"GColorMintGreen",
"#FFAAAA":"GColorMelon",
"#FF55FF":"GColorShockingPink",
"#FF0055":"GColorFolly",
"#FF5555":"GColorSunsetOrange",
"#555500":"GColorArmyGreen",
"#0000AA":"GColorDukeBlue",
"#00AAAA":"GColorTiffanyBlue",
"#55FF55":"GColorScreaminGreen",
"#FFFFAA":"GColorPastelYellow",
"#FFAAFF":"GColorRichBrilliantLavender",
"#55FF00":"GColorBrightGreen",
"#FF55AA":"GColorBrilliantRose",
"#55AAAA":"GColorCadetBlue",
"#AA5555":"GColorRoseVale",
"#FF00AA":"GColorFashionMagenta",
"#00AA55":"GColorJaegerGreen",
"#AAAAFF":"GColorBabyBlueEyes",
"#AA55AA":"GColorPurpureus",
"#FFAA00":"GColorChromeYellow",
"#005500":"GColorDarkGreen",
"#FF0000":"GColorRed",
"#5555AA":"GColorLiberty",
"#AAAAAA":"GColorLightGray",
"#AA00FF":"GColorVividViolet",
"#FFAA55":"GColorRajah",
"#5500AA":"GColorIndigo",
"#55AA55":"GColorMayGreen",
"#FFFF55":"GColorIcterine",
"#550000":"GColorBulgarianRose",
"#FF5500":"GColorOrange",
"#00FF00":"GColorGreen",
"#AA5500":"GColorWindsorTan",
"#AA55FF":"GColorLavenderIndigo",
"#555555":"GColorDarkGray",
"#55FFFF":"GColorElectricBlue",
"#0055FF":"GColorBlueMoon",
"#00FFFF":"GColorCyan",
"#000000":"GColorBlack",
"#55FFAA":"GColorMediumAquamarine",
"#AA0000":"GColorDarkCandyAppleRed",
"#AAAA00":"GColorLimerick",
"#0055AA":"GColorCobaltBlue",
"#AAFFFF":"GColorCeleste",
"#5500FF":"GColorElectricUltramarine",
"#55AAFF":"GColorPictonBlue",
"#AAFF55":"GColorInchworm",
"#0000FF":"GColorBlue",
"#00AAFF":"GColorVividCerulean",
"#AA00AA":"GColorPurple",
"#55AA00":"GColorKellyGreen",
"#00FF55":"GColorMalachite",
"#005555":"GColorMidnightGreen",
"#FFFF00":"GColorYellow",
"#FF00FF":"GColorMagenta",
"#AAFF00":"GColorSpringBud",
"#AA0055":"GColorJazzberryJam",
"#5555FF":"GColorVeryLightBlue",
"#FFFFFF":"GColorWhite",
"#00AA00":"GColorIslamicGreen",
"#000055":"GColorOxfordBlue",
"#550055":"GColorImperialPurple",
"#AAAA55":"GColorBrass",
"#00FFAA":"GColorMediumSpringGreen"};