# A-Frame Custom Components

Components I rewired or made.

## Usage 

This component spawns an obj model based on which entity you append it to. (I use cursor in my demo)
<script src="../path/spawnerobj.js"></script>



<a-entity cursor="fuse: true; maxDistance: 1.5;" geometry="primitive: ring; radiusInner: 0.00; radiusOuter: 0.02" material="color: black" position="0 0 -2" spawner="model: ../images/manatee.obj; on: mousedown, touchstart; color: grey"></a-entity>

## Attributes

model

on

color

mtl

rotation

position

scale
