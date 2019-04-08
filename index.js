window.addEventListener('DOMContentLoaded', init);

function init(){
	var width = 960;//キャンバス横幅
	var height = 540;//キャンバス縦幅

	//レンダラー作成
	var renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	//シーン作成
	var scene = new THREE.Scene();

	//カメラ作成、ドラッグ:オービット,ズーム:ホイール,パン:右ドラッグ
	camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
	camera.position.set(0, 0, +1000);
	//箱作成
	var geometry = new THREE.BoxGeometry(500, 500, 500);
	var material = new THREE.MeshStandardMaterial({color: 0x0000FF});//青のマテリアル
	var box = new THREE.Mesh(geometry, material);//箱+マテリアル=box
	scene.add(box);//シーンに入れる

	//平行光源
	var directionalLight = new THREE.DirectionalLight(0xFFFFFF);//白色光用意
	directionalLight.intensity = 2;//強さ変更
	directionalLight.position.set(1, 1, 1);//ライト位置決め
	scene.add(directionalLight);//シーンに入れる

	//実行
	update();
	function update(){

		requestAnimationFrame(update);
		//箱回転
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		//レンダリングもアニメーションフレーム内
		renderer.render(scene, camera);
	}
}
