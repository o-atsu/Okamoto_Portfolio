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
	const light = new THREE.AmbientLight(0xffffff, 0.8);
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

	//ポイント球
	var loader = new THREE.FontLoader();
	loader.load('fonts/helvetiker_regular.typeface.json', function(font){
	sphere1 = new THREE.Mesh(
		new THREE.SphereGeometry(60, 640, 640),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	sphere1.position.set(-200, 200, 0);
	scene.add(sphere1);
	text1 = new THREE.Mesh(
		new THREE.TextGeometry('Name',{
			font: font,
			size: 30,
			height: 4,
			curveSegments: 12
		}),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	text1.position.set(-200, 100, 100);
	scene.add(text1);
	sphere2 = new THREE.Mesh(
		new THREE.SphereGeometry(60, 640, 640),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	sphere2.position.set(200, 200, 0);
	scene.add(sphere2);
	text2 = new THREE.Mesh(
		new THREE.TextGeometry('About',{
			font: font,
			size: 30,
			height: 4,
			curveSegments: 12
		}),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	text2.position.set(200, 100, 100);
	scene.add(text2);
	sphere3 = new THREE.Mesh(
		new THREE.SphereGeometry(60, 640, 640),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	sphere3.position.set(-200, -200, 0);
	scene.add(sphere3);
	text3 = new THREE.Mesh(
		new THREE.TextGeometry('Hobby',{
			font: font,
			size: 30,
			height: 4,
			curveSegments: 12
		}),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	text3.position.set(-200, -300, 100);
	scene.add(text3);
	sphere4 = new THREE.Mesh(
		new THREE.SphereGeometry(60, 640, 640),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	sphere4.position.set(200, -200, 0);
	scene.add(sphere4);
	text4 = new THREE.Mesh(
		new THREE.TextGeometry('Activity',{
			font: font,
			size: 30,
			height: 4,
			curveSegments: 12
		}),
		new THREE.MeshBasicMaterial({color:0xffffff})
	);
	text4.position.set(200, -300, 100);
	scene.add(text4);
	});

	//各紹介テクスチャ
	
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

	function createNode(x, y, z, text, font){
	
	}

}
