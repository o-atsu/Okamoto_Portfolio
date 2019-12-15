	// ページの読み込みを待つ
window.addEventListener('load', init);
function init() {
	
	if(!Detector.webgl) Detector.addGetWebGLMessage();
	//ボタン処理
	const bhome = document.getElementById('home');
	bhome.addEventListener('click', function(){
		window.location.href = '../index.html';
	}, false);
	const bprf = document.getElementById('prf');
	bprf.addEventListener('click', function(){
		window.location.href = 'profile.html';
	}, false);
	const bapp = document.getElementById('app');
	bapp.addEventListener('click', function(){
		window.location.href = '../apps/apps.html';
	}, false);
	const bmdl = document.getElementById('mdl');
	bmdl.addEventListener('click', function(){
		window.location.href = '../models/models.html';
	}, false);
	const bcnt = document.getElementById('cnt');
	bcnt.addEventListener('click', function(){
		window.location.href = '../contact/contact.html';
	}, false);
}



