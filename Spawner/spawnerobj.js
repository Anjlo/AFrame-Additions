AFRAME.registerComponent('spawner', {
  update: function () {
    var el = this.el;
    var spawn = this.spawn.bind(this);
    if (this.on === this.data.on) { return; }
    el.removeEventListener(this.on, spawn);
    el.addEventListener(this.data.on, spawn);
    this.on = this.data.on;
  },

  spawn: function () {
    var el = this.el;
    var matrixWorld = el.object3D.matrixWorld;
    var position = new THREE.Vector3();
    position.setFromMatrixPosition(matrixWorld);
    var entity = document.createElement('a-obj-model');
    entity.setAttribute('position', position);
    entity.setAttribute('src', this.data.model);
    entity.setAttribute('dynamic-body');
    entity.setAttribute('color', this.data.color);
    entity.setAttribute('rotation', this.data.rotation);
    el.sceneEl.appendChild(entity);
  }
});