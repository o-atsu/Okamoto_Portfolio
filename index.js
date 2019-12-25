	// ページの読み込みを待つ
window.addEventListener('load', init);
function init() {

	//WebGL非対応時の処理
	if(!Detector.webgl) Detector.addGetWebGLMessage();

	// レンダラーを作成
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas'),
		antialias:true
	});

	// サイズを指定
	const width = window.innerWidth;
	const height = window.innerHeight;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	const camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);
	const controls = new THREE.OrbitControls(camera, myCanvas);
	controls.center= new THREE.Vector3(0, 0, 0);
	controls.enablePan = false;


	// 正四面体生成
	let shadermat = new THREE.ShaderMaterial({
		vertexShader: document.getElementById('vshader').textContent,
		fragmentShader: document.getElementById('fshader').textContent,
		uniforms:{
			time:{value:0.0},
			resolution:{type:"v2", value: new THREE.Vector2(width, height)}
		}
	});
	const tetra = new THREE.Mesh(
		new THREE.TetrahedronGeometry(300),
		shadermat
	);
	const face1 = new THREE.Vector3(1, -1, 1).normalize();//正四面体の法線単位ベクトル
	const face2 = new THREE.Vector3(-1, 1, 1).normalize();
	const face3 = new THREE.Vector3(1, 1, -1).normalize();
	const face4 = new THREE.Vector3(-1, -1, -1).normalize();
	scene.add(tetra);

	//テキスト作成
	const loader = new THREE.FontLoader();//https://gero3.github.io/facetype.js/を使おう
	loader.load('fonts/helvetiker_regular.typeface.json', function(font){
		const faceText1 = new THREE.Mesh(
			new THREE.TextGeometry("PROFILE",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12
			}),
			new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText1.position.set(100, -100, 200);
		faceText1.rotation.set(Math.PI/6, Math.PI/4, -Math.PI/8);
		scene.add(faceText1);
		const faceText2 = new THREE.Mesh(
			new THREE.TextGeometry("APPS",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12
			}),
			new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText2.position.set(-160, 100, 100);
		faceText2.rotation.set(-Math.PI/6, -Math.PI/4, -Math.PI/8);
		scene.add(faceText2);
		const faceText3 = new THREE.Mesh(
			new THREE.TextGeometry("MODELS",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12
			}),
			new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText3.position.set(200, 100, -100);
		faceText3.rotation.set(Math.PI/6, Math.PI*3/4, -Math.PI/8);
		scene.add(faceText3);
		const faceText4 = new THREE.Mesh(
			new THREE.TextGeometry("CONTACT",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12
			}),
			new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText4.position.set(-100, -100, -200);
		faceText4.rotation.set(-Math.PI/6, -Math.PI*3/4, -Math.PI/8);
		scene.add(faceText4);
	});

	// OrbitControls設定
	controls.enableDamping = true;
	controls.dampingFactor = 0.9;

	//ボタン処理
	const bhome = document.getElementById('home');
	bhome.addEventListener('click', function(){
		window.location.href = 'index.html';
	}, false);
	const bprf = document.getElementById('prf');
	bprf.addEventListener('click', function(){
		window.location.href = 'profile/profile.html';
	}, false);
	const bapp = document.getElementById('app');
	bapp.addEventListener('click', function(){
		window.location.href = 'apps/apps.html';
	}, false);
	const bmdl = document.getElementById('mdl');
	bmdl.addEventListener('click', function(){
		window.location.href = 'models/models.html';
	}, false);
	const bcnt = document.getElementById('cnt');
	bcnt.addEventListener('click', function(){
		window.location.href = 'contact/contact.html';
	}, false);

	const cnvsdb = document.getElementById('myCanvas');
	let dotWith1;
	let dotWith2;
	let dotWith3;
	let dotWith4;
	function enter(){
		//法線ベクトルとカメラ位置の内積が一定以上なら処理
		let cameraPos = camera.position.clone();
		dotWith1 = cameraPos.normalize().dot(face1);
		dotWith2 = cameraPos.normalize().dot(face2);
		dotWith3 = cameraPos.normalize().dot(face3);
		dotWith4 = cameraPos.normalize().dot(face4);
			if(dotWith1 > 0.7){
			window.location.href = 'profile/profile.html';
		}
		if(dotWith2 > 0.7){
			window.location.href = 'apps/apps.html';
		}
		if(dotWith3 > 0.7){
			window.location.href = 'models/models.html';
		}
		if(dotWith4 > 0.7){
			window.location.href = 'contact/contact.html';
		}
	}
	cnvsdb.addEventListener('dblclick', enter);
	cnvsdb.addEventListener('touchend', enter);

	// 毎フレーム時に実行されるループイベント
	function tick() {
		controls.update();

		// レンダリング
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
		
		shadermat.uniforms.time.value = performance.now()/1000;
	}
	tick();
}



