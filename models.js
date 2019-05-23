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
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, width / height);
	camera.position.set(0, 2, -2);

	//OrbitControls
	var controls = new THREE.OrbitControls(camera, myCanvas);
	controls.center = new THREE.Vector3(0, 0, 0);
	controls.enableDamping = true;
	controls.dampingFactor = 0.9;

	//ライト
	const light = new THREE.AmbientLight(0xffffff, 1.0);
	scene.add(light);
	
	//VRMLoader
	var loader = new THREE.VRMLoader();


	//毎フレーム処理
	tick();
	function tick(){
		controls.update();
		renderer.render(scene, camera);
		requestAnimationFrame(tick);
	}

	//ボタン処理
	var theremodel = false;
	var btnUchi = document.getElementById('Uchi');
	var btnSugumiVoxel = document.getElementById('SugumiVoxel');
	var btnSugumiVroid = document.getElementById('SugumiVroid');	
	var textArea = document.getElementById('textArea');
	
	btnUchi.addEventListener('click', function(){
		if(theremodel){ scene = new THREE.Scene();}
		theremodel = true;
		textArea.innerText = "Uchi\nMade with\nVRoid Studio\nPurpose\nVRoid Studioでモデルを作りたかったため\nAbout\nキャラデザは感情に任せました。スキルがほしい（切実）\n作り直そうかなぁ......"
	loader.load( 'models/vrm/atsu.vrm', function ( vrm ) {
	// VRMLoader doesn't support VRM Unlit extension yet so
	// converting all materials to MeshBasicMaterial here as workaround so far.
	vrm.scene.traverse( function ( object ) {
		if ( object.material ) {
			if ( Array.isArray( object.material ) ) {
				for ( var i = 0, il = object.material.length; i < il; i ++ ) {
					var material = new THREE.MeshBasicMaterial();
					THREE.Material.prototype.copy.call( material, object.material[ i ] );
					material.color.copy( object.material[ i ].color );
					material.map = object.material[ i ].map;
					material.lights = false;
					material.skinning = object.material[ i ].skinning;
					material.morphTargets = object.material[ i ].morphTargets;
					material.morphNormals = object.material[ i ].morphNormals;
					object.material[ i ] = material;
				}
			} else {
				var material = new
				THREE.MeshBasicMaterial();
				THREE.Material.prototype.copy.call( material, object.material );
				material.color.copy( object.material.color );
				material.map = object.material.map;
				material.lights = false; material.skinning = object.material.skinning;                 
				material.morphTargets = object.material.morphTargets;
				material.morphNormals = object.material.morphNormals;
				object.material = material;
			}
		}
	} );
	scene.add( vrm.scene );
	} );
	}, false);
	
	btnSugumiVoxel.addEventListener('click', function(){
		if(theremodel){ scene = new THREE.Scene();}
		theremodel = true;
		textArea.innerText = "Sugumi_Voxel\nくっそでけぇ、、、\nMade with\tMagicaVoxel(メッシュ), Blender(ボーン設定)\nPurpose\nVRChatで生活するため、また、ボーンの設定やってみたかった\nAbout\nこの娘作って気づいたんだが自分はローポリモデルが好きなんだなあ、みんなもボクセルモデル作ろう！\n"
	loader.load( 'models/vrm/sugumi.vrm', function ( vrm ) {
	// VRMLoader doesn't support VRM Unlit extension yet so
	// converting all materials to MeshBasicMaterial here as workaround so far.
	vrm.scene.traverse( function ( object ) {
		if ( object.material ) {
			if ( Array.isArray( object.material ) ) {
				for ( var i = 0, il = object.material.length; i < il; i ++ ) {
					var material = new THREE.MeshBasicMaterial();
					THREE.Material.prototype.copy.call( material, object.material[ i ] );
					material.color.copy( object.material[ i ].color );
					material.map = object.material[ i ].map;
					material.lights = false;
					material.skinning = object.material[ i ].skinning;
					material.morphTargets = object.material[ i ].morphTargets;
					material.morphNormals = object.material[ i ].morphNormals;
					object.material[ i ] = material;
				}
			} else {
				var material = new
				THREE.MeshBasicMaterial();
				THREE.Material.prototype.copy.call( material, object.material );
				material.color.copy( object.material.color );
				material.map = object.material.map;
				material.lights = false; material.skinning = object.material.skinning;                 
				material.morphTargets = object.material.morphTargets;
				material.morphNormals = object.material.morphNormals;
				object.material = material;
			}
		}
	} );
	scene.add( vrm.scene );
	} );
	}, false);
	
	btnSugumiVroid.addEventListener('click', function(){
		if(theremodel){ scene = new THREE.Scene();}
		theremodel = true;
		textArea.innerText = "Sugumi_vroid\nMade with\tVroid Studio\nPurpose\nVRアプリ開発のテストに使うため、また、バーチャル住人の姿\nAbout\n新キャラを作りたかったがデザインが思いつかずボクセルモデルをもとにした。まあ使い分けができてちょうどよいのでは\n"
	loader.load( 'models/vrm/Sugumi_vroid.vrm', function ( vrm ) {
	// VRMLoader doesn't support VRM Unlit extension yet so
	// converting all materials to MeshBasicMaterial here as workaround so far.
	vrm.scene.traverse( function ( object ) {
		if ( object.material ) {
			if ( Array.isArray( object.material ) ) {
				for ( var i = 0, il = object.material.length; i < il; i ++ ) {
					var material = new THREE.MeshBasicMaterial();
					THREE.Material.prototype.copy.call( material, object.material[ i ] );
					material.color.copy( object.material[ i ].color );
					material.map = object.material[ i ].map;
					material.lights = false;
					material.skinning = object.material[ i ].skinning;
					material.morphTargets = object.material[ i ].morphTargets;
					material.morphNormals = object.material[ i ].morphNormals;
					object.material[ i ] = material;
				}
			} else {
				var material = new
				THREE.MeshBasicMaterial();
				THREE.Material.prototype.copy.call( material, object.material );
				material.color.copy( object.material.color );
				material.map = object.material.map;
				material.lights = false; material.skinning = object.material.skinning;                 
				material.morphTargets = object.material.morphTargets;
				material.morphNormals = object.material.morphNormals;
				object.material = material;
			}
		}
	} );
	scene.add( vrm.scene );
	} );
	}, false);

	

}
