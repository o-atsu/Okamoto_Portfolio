	// ページの読み込みを待つ
window.addEventListener('load', init);
function init() {

	//WebGL非対応時の処理
	if(!Detector.webgl) Detector.addGetWebGLMessage();

	// サイズを指定
	const width = window.innerWidth - 10;
	const height = window.innerHeight - 150;

	// レンダラーを作成
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas'),
		antialias:true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	// シーンを作成
	const scene = new THREE.Scene();

	// カメラを作成
	var camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);
	var controls = new THREE.OrbitControls(camera, myCanvas);
	controls.center= new THREE.Vector3(0, 0, 0);
	controls.enablePan = false;

	//光源を生成
	const directionalLight1 = new THREE.DirectionalLight(0xffffff);
	directionalLight1.position.set(1, 1, 1);
	scene.add(directionalLight1);
	const directionalLight2 = new THREE.DirectionalLight(0xffffff);
	directionalLight2.position.set(1, -1, -1);
	scene.add(directionalLight2); 

	// 正四面体生成
	var tetra = new THREE.Mesh(
		new THREE.TetrahedronGeometry(300),
		new THREE.MeshPhongMaterial({color:0x6699ff})
	);
	var face1 = new THREE.Vecror3(1, -1, 1);//正四面体の法線ベクトル
	var face1 = new THREE.Vecror3(-1, 1, 1);
	var face1 = new THREE.Vecror3(1, 1, -1);
	var face1 = new THREE.Vecror3(-1, -1, -1);
	scene.add(tetra);

	//向き確認用
	var sphereX = new THREE.Mesh(//青
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0x0000ff})
	);
	var sphereY = new THREE.Mesh(//赤
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0xff0000})
	);
	var sphereZ = new THREE.Mesh(//緑
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0x00ff00})
	);
	sphereX.position.set(300, 0, 0);
	sphereY.position.set(0, 300, 0);
	sphereZ.position.set(0, 0, 300);
	scene.add(sphereX);
	scene.add(sphereY);
	scene.add(sphereZ);

	// OrbitControls設定
	controls.enableDamping = true;
	controls.dampingFactor = 0.9;

	// 毎フレーム時に実行されるループイベント
	function tick() {
		controls.update();


		// レンダリング
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
	tick();
	//マウス位置取得
	var mouseX = -1, mouseY = -1;
	document.addEventListener("mousemove", function(e){
		mouseX = e.pageX;
		mouseY = e.pageY;

		//表示に代入
		document.getElementById("txtX").value = mouseX;
		document.getElementById("txtY").value = mouseY;
	});
}

