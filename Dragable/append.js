AFRAME.registerComponent('append', {
  update: function () {
    var el = this.el;
    var tick = this.tick.bind(this);
    if (this.on === this.data.on) { return; }
    el.addEventListener(this.data.on, tick);

    


    this.on = this.data.on;
  },


  tick: function () {


    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    var entity = document.getElementById("cap");
    entity.setAttribute('position', position);
    

  }





});