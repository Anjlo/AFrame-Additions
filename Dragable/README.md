# A-Frame Custom Dragable Component

Still a work in-Progress!

Demo:

http://anj.fyi/drag

#Usage

Use component 'append' to set drag point.

Use component 'dragable' to set dragable entities.

## Attributes

Append: 

'on' (Set on which button to start appending. Used in demo: 'mousedown')

Dragable:

'on' (Set on which button to start dragging. Used in demo: 'mousedown')

'off' (Set on which button to stop dragging. Used in demo: 'mouseup')

'color' (Set color on an entity on click. Used in demo: 'beige')

'color2' (set color on a dynamic-body entity. Used in demo: 'orange') dynamic-body is used in conjunction with @donmccurdy 's Aframe-Extras physics component. Found at https://github.com/donmccurdy/aframe-extras