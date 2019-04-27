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

	//OrbitControls
	var controls = new THREE.OrbitControls(camera, myCanvas);
	controls.center = new THREE.Vector3(0, 0, 0);
	controls.enableDamping = true;
	controls.dampingFactor = 0.9;

	//ライト
	const light = new THREE.AmbientLight(0xffffff, 0.8);
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
	var btnUchi = document.getElementById('Uchi');
	var btnSugumiV = document.getElementById('SugumiV');
	var textArea = document.getElementById('textArea');
	btnUchi.addEventListener('click', function(){
		textArea.innerText = "Uchi\nMade with\nVRoid Studio\nPurpose\nTo get experiences about VRoid Studio\nAbout\nShe is designed only by my feeling. (I have no skills...)\n......I may remake her......"
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
	btnSugumiV.addEventListener('click', function(){
		textArea.innerText = "Sugumi_Voxel\nMade with\tMagicaVoxel(mesh), Blender(bone setting)\nPurpose\nTo live in VRChat and get experiences about setting humanoid rig\nAbout\nThrough her, I realised that I like modeling with low polygons. But, modeling low-poly-models is quite difficult because of its unbalances. Let's make Voxel models!";
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

	

}
