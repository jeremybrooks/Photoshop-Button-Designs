/*
 * Photoshop script to copy a Button layer 20 times,
 * creating a sheet of buttons for print.
 *
 * See https://github.com/jeremybrooks/Photoshop-Button-Designs
 * 
 * This script is licensed under the CreativeCommons CC BY-NC-SA 4.0 
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 */

// Return layer with the specified name,
// or undefined if there is no layer with that name.
function getLayer(layerName) {
	 var layer;
	 var searchLayers = function (o) {
	   for (var i = 0; i < o.layers.length; i++) {
		 	if (o.layers[i].name == layerName) {
				layer = o.layers[i];
				break;
			} else {
			  // if the document does not have any groups,
				// LayerSet will be undefined, so ignore
				// errors when checking for LayerSet
			  try {
  			  if (o.layers[i] instanceof LayerSet) {
  			  	searchLayers(o.layers[i]);
  			  }
				} catch (err) {
				  // ignore
				}
			}
		 }
	 };
	 searchLayers(app.activeDocument);
	 return layer;
}

// Move the layer to the specified absolute position.
function moveLayerTo(layer, x, y) {
  var Position = layer.bounds;
  Position[0] = x - Position[0];
  Position[1] = y - Position[1];

  layer.translate(-Position[0], -Position[1]);
}


// These variables are used to calculate the position of the
// buttons on the template. They are designed for 1.25" buttons,
// on 8.5" x 11" paper. If you want to use different button
// or paper sizes, you can tweak the numbers here.

// Upper left button position
var x = 151;
var y = 229;

// Pixels between buttons
var xGap = 96;
var yGap = 102;

// The button size
var width = 489;
var height = 489;

// How many buttons to create on a page
var rows = 5;
var buttonsPerRow = 4;



var layer = getLayer("Copy Me");
if (layer === undefined) {
	alert("No layer named 'Copy Me' exists.");
} else {

	var newGroup = app.activeDocument.layerSets.add();
	newGroup.name = "Buttons";

  // When a Layer is added to a LayerSet, it is added in position [0].
	// Indexing these loops "backwards" lets us create button 20 first,
	// and button 1 last, which means the LayerSet will have the buttons
	// in the expected order.

  // Loop for rows, from rows to 0
	for (var i = rows - 1; i > -1; i--) {

		// Loop for buttons in each row
		for (var j = buttonsPerRow - 1; j > -1; j--) {
			var newLayer = layer.duplicate();
	    newLayer.name = "Button " + (i * 4 + j + 1);

			var newX = x + (xGap * j) + (width * j);
			var newY = y + (yGap * i) + (height * i);

      moveLayerTo(newLayer, newX, newY);
			newLayer.move(newGroup, ElementPlacement.INSIDE);
		}
	}
	layer.remove();
}
