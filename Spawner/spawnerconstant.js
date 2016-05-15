AFRAME.registerComponent('constant-spawner', {
  update: function () {
    var el = this.el;
    var spawn = this.spawn.bind(this);
    if (this.on === this.data.on) { return; }
    el.addEventListener(this.data.on, function() {
  interval = setInterval(spawn, 1);
});

    el.addEventListener(this.data.off, function () {
  clearInterval(interval);
});


    this.on = this.data.on;
  },


  spawn: function () {


    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    var entity = document.createElement('a-entity');
    entity.setAttribute('position', position);
    entity.setAttribute('mixin', this.data.mixin);
    el.sceneEl.appendChild(entity);

  }
});