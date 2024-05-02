# Photoshop-Button-Designs

Photoshop document and helper script for making buttons in Photoshop. By "buttons" I mean physical objects that you pin to a jacket, not things on a web site.

As is, it will create 20 1.25" buttons on a single 8.5" x 11" page. Feel free to modify the script for different sizes of buttons or paper sizes, or whatever.

To install the script, copy it to the Photoshop Scripts directory on your computer. This will vary depending on the version of Photoshop you have and the operating system you are using. On macOS, it will look something like this:

```sudo cp Button\ Maker.jsx /Applications/Adobe\ Photoshop\ 2023/Presets/Scripts```

To use this script, design your button using the template. When you are satisfied with the design, duplicate the Design Layers group, then merge all of its layers into a single layer. Name that layer "Copy Me". Then, run the script. It will create a "Buttons" group and populate the group with copies of your "Copy Me" layer, spread evenly around the page. The "Copy Me" layer will be deleted.

There is also a file named button-template-125_inch_all_buttons.psd that has a group for each button on the page. This file is NOT for use with the script. It can be used when you want to make several different designs on the same page.
