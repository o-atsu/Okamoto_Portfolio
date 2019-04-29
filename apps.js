window.addEventListener('load', init);
function init(){
	if(!Detector.webgl) Detector.addGetWebGLMessage();
	const width = window.innerWidth - 10;
	const height = window.innerHeight - 300;
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas'),
		antialias:true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	const scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);

	//ライト
	const light = new THREE.AmbientLight(0xffffff, 1.0);
	light.position.set(1, 1, 1,);
	scene.add(light);
	
	//レイキャスタ
	var projector = new THREE.Projector();
	var mouse = {x:0, y:0};
	canvas.addEventListener('mousemove', pointing, false);
	function pointing(e){
		const element = e.currentTarget;
		mouse.x = ((e.clientX - e.offsetLeft) / width)*2-1;
		mouse.y = ((e.clientY - e.offsetTop) / height)*2+1;

	}
	const raycaster = new THREE.Raycaster();

	
	//各紹介ボックス
	var loader = new THREE.TextureLoader();
	loader.load('', function(texture){});
	
	tick();
	function tick(){
		//レイキャスト
		raycaster.setFromCamera(mouse, camera);
		const intersects = raycaster.intersectObjects(scene.children);
		if(intersects.length > 0){
			//ぶつかったものはintersects内
		}

		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}

}
