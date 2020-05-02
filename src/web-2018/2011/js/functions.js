function update_stage(height){
	//alert(height);
	var main_container = document.getElementById('main_container');
	var kc_website_main = document.getElementById('kc_website_main');
	
	main_container.style.height = height+'px';
	kc_website_main.style.height = height+'px';
	
	window.scrollBy(0,0);
}