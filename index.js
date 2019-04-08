window.addEventListener('DOMContentLoaded', init);

function init(){
	var width = 960;//�L�����o�X����
	var height = 540;//�L�����o�X�c��

	//�����_���[�쐬
	var renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector('#myCanvas')
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	//�V�[���쐬
	var scene = new THREE.Scene();

	//�J�����쐬�A�h���b�O:�I�[�r�b�g,�Y�[��:�z�C�[��,�p��:�E�h���b�O
	camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
	camera.position.set(0, 0, +1000);
	//���쐬
	var geometry = new THREE.BoxGeometry(500, 500, 500);
	var material = new THREE.MeshStandardMaterial({color: 0x0000FF});//�̃}�e���A��
	var box = new THREE.Mesh(geometry, material);//��+�}�e���A��=box
	scene.add(box);//�V�[���ɓ����

	//���s����
	var directionalLight = new THREE.DirectionalLight(0xFFFFFF);//���F���p��
	directionalLight.intensity = 2;//�����ύX
	directionalLight.position.set(1, 1, 1);//���C�g�ʒu����
	scene.add(directionalLight);//�V�[���ɓ����

	//���s
	update();
	function update(){

		requestAnimationFrame(update);
		//����]
		box.rotation.x += 0.01;
		box.rotation.y += 0.01;

		//�����_�����O���A�j���[�V�����t���[����
		renderer.render(scene, camera);
	}
}
