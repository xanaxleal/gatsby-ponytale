import React from "react";
import { Renderer, Camera, Transform } from 'ogl'

componentDidMount() {

    if (typeof window !== `undefined`) {
  
      // import Isotope API
          const Isotope = require("isotope-layout/js/isotope");
  
      // init Isotope
      this.grid = new Isotope(`.${isotopeStyles.grid}`, {
        itemSelector: `.${isotopeStyles.elementItem}`,
        layoutMode: 'fitRows'
      });
      
    }
  }
class App extends React.Component {
  constructor () {
    this.createRenderer()
    this.createCamera()
    this.createScene()
 
    this.onResize()
 
    this.update()
 
    this.addEventListeners()
  }
 
  createRenderer () {
    this.renderer = new Renderer({
      alpha: true
    })
 
    this.gl = this.renderer.gl
 
    document.body.appendChild(this.gl.canvas)
  }
 
  createCamera () {
    this.camera = new Camera(this.gl)
    this.camera.fov = 45
    this.camera.position.z = 5
  }
 
  createScene () {
    this.scene = new Transform()
  }

  componentDidMount () {
        /**
         * Wheel.
         */
        onWheel (event) {
        
        }

        /**
         * Resize.
         */
        onResize () {
            this.screen = {
                height: window.innerHeight,
                width: window.innerWidth
            }

            this.renderer.setSize(this.screen.width, this.screen.height)

            this.camera.perspective({
                aspect: this.gl.canvas.width / this.gl.canvas.height
            })

            const fov = this.camera.fov * (Math.PI / 180)
            const height = 2 * Math.tan(fov / 2) * this.camera.position.z
            const width = height * this.camera.aspect

            this.viewport = {
                height,
                width
            }
        }

/**
 * Update.
 */
update () {
  this.renderer.render({
    scene: this.scene,
    camera: this.camera
  })

  window.requestAnimationFrame(this.update.bind(this))
}

/**
 * Listeners.
 */
addEventListeners () {
  window.addEventListener('resize', this.onResize.bind(this))

  window.addEventListener('mousewheel', this.onWheel.bind(this))
  window.addEventListener('wheel', this.onWheel.bind(this))
}
}
}
 
  

new App()