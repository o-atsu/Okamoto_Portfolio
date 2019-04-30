window.addEventListener('load', init);
function init(){
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
	camera.position.set(0, 0, 800);

	//ライト
	const light = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(light);
	
	//レイキャスタ
	var projector = new THREE.Projector();
	var mouse = {x:0, y:0};
	window.addEventListener('mousemove', pointing, false);
	function pointing(e){
		const element = e.currentTarget;
		mouse.x = ((e.clientX - e.offsetLeft) / width)*2-1;
		mouse.y = ((e.clientY - e.offsetTop) / height)*2+1;

	}
	const raycaster = new THREE.Raycaster();

	
	//各紹介ボックス
	var loader = new THREE.TextureLoader();
	loader.load('textures/BunboguFight!!!_tex.png', function(texture){
		var bunboguFight = new THREE.Mesh(
			new THREE.BoxGeometry(300, 300, 300),
			new THREE.MeshBasicMaterial({map: texture}));
		bunboguFight.position.set(100, 200, 100);
		scene.add(bunboguFight);
	});
	
	loader.load('textures/gassaku_tex.png', function(texture){
		var gassaku = new THREE.Mesh(
			new THREE.BoxGeometry(300, 300, 300),
			new THREE.MeshBasicMaterial({map: texture}));
		gassaku.position.set(-100, -100, 100);
		scene.add(gassaku);
	});

	tick();
	function tick(){
		//レイキャスト
		raycaster.setFromCamera(mouse, camera);
		var intersects = raycaster.intersectObjects(scene.children);
		if(intersects.length > 0 && mesh === intersects[0].object){
			//ぶつかったものはintersects内
			if(intersects[0].object.name == bunboguFight){
				window.addEventListener('mousedown', function(e){
					window.location.href = 'https://github.com/o-atsu/Bunbogu_Fight';
				}, false);
		}

		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}

}
}
