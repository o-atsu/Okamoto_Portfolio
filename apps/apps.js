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
	const light = new THREE.DirectionalLight(0xffffff, 1.0);
	light.position.set(1,1,1);
	scene.add(light);
	
	//レイキャスタ
	var projector = new THREE.Projector();
	var mouse = {x:0, y:0};
	const raycaster = new THREE.Raycaster();

	//各紹介ボックス
	var loader = new THREE.TextureLoader();
	loader.load('../textures/BunboguFight!!!_tex.png', function(texture){
		var bunboguFight = new THREE.Mesh(
			new THREE.BoxGeometry(200, 200, 200),
			new THREE.MeshBasicMaterial({map: texture}));
		bunboguFight.position.set(125, 70, 100);
		bunboguFight.name = "bunboguFight";
		scene.add(bunboguFight);
	});
	
	loader.load('../textures/gassaku_tex.png', function(texture){
		var gassaku = new THREE.Mesh(
			new THREE.BoxGeometry(200, 200, 200),
			new THREE.MeshBasicMaterial({map: texture}));
		gassaku.position.set(-125, -70, 100);
		gassaku.name = "gassaku";
		scene.add(gassaku);
	});

	//ボタン処理
	const bhome = document.getElementById('home');
	bhome.addEventListener('click', function(){
		window.location.href = '../index.html';
	}, false);
	const bprf = document.getElementById('prf');
	bprf.addEventListener('click', function(){
		window.location.href = '../profile/profile.html';
	}, false);
	const bapp = document.getElementById('app');
	bapp.addEventListener('click', function(){
		window.location.href = '/apps.html';
	}, false);
	const bmdl = document.getElementById('mdl');
	bmdl.addEventListener('click', function(){
		window.location.href = '../models/models.html';
	}, false);
	const bcnt = document.getElementById('cnt');
	bcnt.addEventListener('click', function(){
		window.location.href = '../contact/contact.html';
	}, false);

	//レイキャスト
	window.addEventListener('click', function(e){
		mouse.x = (e.clientX / width)*2-1;
		mouse.y = - (e.clientY / height)*2+1;
		raycaster.setFromCamera(mouse, camera);
		var intersects = raycaster.intersectObjects(scene.children);
		if(intersects.length > 0){
			//ぶつかったものはintersects内
			if(intersects[0].object.name == "bunboguFight"){
					window.location.href = '../BunboguFight!!!_webgl/index.html';
			}
			if(intersects[0].object.name == "gassaku"){
					window.location.href = '../gassaku_webgl/index.html';
			}
		}

	}, false);
	tick();
	function tick(){
		
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
}

