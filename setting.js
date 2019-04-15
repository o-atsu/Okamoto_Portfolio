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
	var face1 = new THREE.Vector3(1, -1, 1);//���l�ʑ̖̂@���x�N�g��
	var face2 = new THREE.Vector3(-1, 1, 1);
	var face3 = new THREE.Vector3(1, 1, -1);
	var face4 = new THREE.Vector3(-1, -1, -1);
	scene.add(tetra);

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
		var dotWith1 = cameraPos.normalize().dot(face1.normalize());
		var dotWith2 = cameraPos.normalize().dot(face2.normalize());
		var dotWith3 = cameraPos.normalize().dot(face3.normalize());
		var dotWith4 = cameraPos.normalize().dot(face4.normalize());

		if(dotWith1 > 0.6) console.log('1');
		if(dotWith2 > 0.6) console.log('2');
		if(dotWith3 > 0.6) console.log('3');
		if(dotWith4 > 0.6) console.log('4');

	}, false);
}
