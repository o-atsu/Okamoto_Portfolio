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
		window.location.href = '../apps/apps.html';
	}, false);
	const bmdl = document.getElementById('mdl');
	bmdl.addEventListener('click', function(){
		window.location.href = 'models.html';
	}, false);
	const bcnt = document.getElementById('cnt');
	bcnt.addEventListener('click', function(){
		window.location.href = '../contact/contact.html';
	}, false);

	var theremodel = false;
	var btnUchi = document.getElementById('Uchi');
	var btnSugumiVoxel = document.getElementById('SugumiVoxel');
	var btnSugumiVroid = document.getElementById('SugumiVroid');	
	var textArea = document.getElementById('textArea');
	
	btnUchi.addEventListener('click', function(){
		if(theremodel){ scene = new THREE.Scene();}
		theremodel = true;
		textArea.innerText = "Uchi\n使用ソフト:\tVroid Studio\nVroid Studio処女作. 初めは光沢や髪のメッシュの設定等で苦戦することが多かった. スカートをプロシージャルヘアーで作ろうかと模索したが, エクスポートがうまくいかなかったりした. ";
	loader.load( 'vrm/atsu.vrm', function ( vrm ) {
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
		textArea.innerText = "Sugumi_Voxel\n使用ソフト:\tMagicaVoxel\nMagicaVoxelを試しに使ってみた際に作ったモデル. ローポリモデルは好きだがこれは世界観に合わず使えないことが多い. 実はVroidモデルより制作時期が早い. ";
	loader.load( 'vrm/sugumi.vrm', function ( vrm ) {
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
		textArea.innerText = "Sugumi_vroid\n使用ソフト:\tVroid Studio\nVroid Studioでモデルを制作したかったがキャラデザができなかった. よってVoxelモデルでできていたSugumiをVroidで制作することに...\n現在個人開発のテスト用でらんだむちゃんの次によく使われる. ";
	loader.load( 'vrm/Sugumi_vroid.vrm', function ( vrm ) {
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
