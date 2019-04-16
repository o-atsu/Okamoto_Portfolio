	// �y�[�W�̓ǂݍ��݂�҂�
window.addEventListener('load', init);
function init() {

	//WebGL��Ή����̏���
	if(!Detector.webgl) Detector.addGetWebGLMessage();

	// �T�C�Y���w��
	const width = window.innerWidth - 10;
	const height = window.innerHeight - 300;

	// �����_���[���쐬
	const renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas'),
		antialias:true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	// �V�[�����쐬
	const scene = new THREE.Scene();

	// �J�������쐬
	var camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 0, +1000);
	var controls = new THREE.OrbitControls(camera, myCanvas);
	controls.center= new THREE.Vector3(0, 0, 0);
	controls.enablePan = false;

	//�����𐶐�
	const directionalLight1 = new THREE.DirectionalLight(0xffffff);
	directionalLight1.position.set(1, 1, 1);
	scene.add(directionalLight1);
	const directionalLight2 = new THREE.DirectionalLight(0xffffff);
	directionalLight2.position.set(1, -1, -1);
	scene.add(directionalLight2); 

	// ���l�ʑ̐���
	var tetra = new THREE.Mesh(
		new THREE.TetrahedronGeometry(300),
		new THREE.MeshPhongMaterial({color:0x6699ff})
	);
	var face1 = new THREE.Vector3(1, -1, 1).normalize();//���l�ʑ̖̂@���P�ʃx�N�g��
	var face2 = new THREE.Vector3(-1, 1, 1).normalize();
	var face3 = new THREE.Vector3(1, 1, -1).normalize();
	var face4 = new THREE.Vector3(-1, -1, -1).normalize();
	scene.add(tetra);

	//�e�L�X�g�쐬
	var loader = new THREE.FontLoader();//https://gero3.github.io/facetype.js/���g����
	loader.load('fonts/helvetiker_regular.typeface.json', function(font){
		var faceText1 = new THREE.Mesh(
			new THREE.TextGeometry("PROFILE",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12}),
				new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText1.position.set(100, -100, 200);
		faceText1.rotation.set(Math.PI/6, Math.PI/4, -Math.PI/8);
		scene.add(faceText1);
		var faceText2 = new THREE.Mesh(
			new THREE.TextGeometry("APPS",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12}),
				new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText2.position.set(-160, 100, 100);
		faceText2.rotation.set(-Math.PI/6, -Math.PI/4, -Math.PI/8);
		scene.add(faceText2);
		var faceText3 = new THREE.Mesh(
			new THREE.TextGeometry("MODELS",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12}),
				new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText3.position.set(200, 100, -100);
		faceText3.rotation.set(Math.PI/6, Math.PI*3/4, -Math.PI/8);
		scene.add(faceText3);
		var faceText4 = new THREE.Mesh(
			new THREE.TextGeometry("CONTACT",{
				font: font,
				size: 35,
				height: 2,
				curveSegments: 12}),
				new THREE.MeshBasicMaterial({color:0xffffff}));
		faceText4.position.set(-100, -100, -200);
		faceText4.rotation.set(-Math.PI/6, -Math.PI*3/4, -Math.PI/8);
		scene.add(faceText4);
	});

	//�����m�F�p
	var sphereX = new THREE.Mesh(//��
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0x0000ff})
	);
	var sphereY = new THREE.Mesh(//��
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0xff0000})
	);
	var sphereZ = new THREE.Mesh(//��
		new THREE.SphereGeometry(5, 32, 32),
		new THREE.MeshBasicMaterial({color:0x00ff00})
	);
	sphereX.position.set(300, 0, 0);
	sphereY.position.set(0, 300, 0);
	sphereZ.position.set(0, 0, 300);
	scene.add(sphereX);
	scene.add(sphereY);
	scene.add(sphereZ);

	// OrbitControls�ݒ�
	controls.enableDamping = true;
	controls.dampingFactor = 0.9;

	// ���t���[�����Ɏ��s����郋�[�v�C�x���g
	function tick() {
		controls.update();


		// �����_�����O
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}
	tick();

	//�{�^������
	var btn = document.getElementById('btn');
	btn.addEventListener('click', function(){
		//�@���x�N�g���ƃJ�����ʒu�̓��ς����ȏ�Ȃ珈��
		var cameraPos = camera.position.clone();
		var dotWith1 = cameraPos.normalize().dot(face1);
		var dotWith2 = cameraPos.normalize().dot(face2);
		var dotWith3 = cameraPos.normalize().dot(face3);
		var dotWith4 = cameraPos.normalize().dot(face4);

		if(dotWith1 > 0.7) console.log('profile');
		if(dotWith2 > 0.7) console.log('apps');
		if(dotWith3 > 0.7) console.log('models');
		if(dotWith4 > 0.7) console.log('contact');

	}, false);
}
