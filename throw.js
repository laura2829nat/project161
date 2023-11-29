AFRAME.registerComponent('bowling-balls',{
    init: function(){
    this.shootBowlingball()
    },
    shootBowlingball: function(){
        window.addEventListener('keydown', (e)=>{
            console.log(e.key)
            if (e.key ==="z"){
                console.log('hello')
                var bowlingBall = document.createElement("a-entity");
                bowlingBall.setAttribute('geometry', {
                    primitive: 'sphere',
                    radius: 0.9
                })
                bowlingBall.setAttribute('material', 'color', 'black');

                var camera = document.querySelector('#camera')
                var position = camera.getAttribute('position')

                bowlingBall.setAttribute('position', {
                    x: position.x,
                    y: position.y-1.2,
                    z: position.z
                })
                var cam = document.querySelector('#camera').object3D
                var direction = new THREE.Vector3()
                cam.getWorldDirection(direction)
                bowlingBall.setAttribute('velocity', direction.multiplyScalar(-10))
                var scene = document.querySelector('#scene')
                scene.appendChild(bowlingBall)
            }
        })
    }
})