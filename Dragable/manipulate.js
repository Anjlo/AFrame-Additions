


AFRAME.registerComponent('dragable', {
  schema: { },

  
  init: function () {
    this.selected = null;
  },

  
  update: function (oldData) {
    var self = this;
    var el = this.el;
    this.el.addEventListener(this.data.on, function (e) {
      if (e.target === self.el) {
        self.select(null);

        return;
      }
      self.select(e.target);
    });


  addEventListener(this.data.off, function (e) {
      if (e.target === self.el) {
        self.select(null);

        return;
      }
      self.select(e.target);
    });




     


  },

  select: function (entity) {
    this.selected = entity;

    var event = new Event('selected');
    event.selected = this.selected;
    this.el.dispatchEvent(event);




    var obj = this.el.object3D;


    

    


  },

  

  tick: function () { if (this.selected) {
      

      this.selected.setAttribute('color', this.data.color);

      


      var cam = document.getElementById("cap");
      var pos = cam.getAttribute("position");
      

      var test = this.selected.hasAttribute("dynamic-body")

      if ( this.selected.hasAttribute("dynamic-body") === true)
      {
        
        var body = this.selected.components['dynamic-body'].body;
      body.position.set(pos.x, pos.y, pos.z);
      
        
    
}
    else{

      
      this.selected.setAttribute('position', pos);

      }



      } 



    }




  

});
