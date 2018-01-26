function CargarPaginar(url){
	var nuevapagina = window.open(url);
	newWindow.onload = function(){
	    nuevapagina.scrollTo(0, 150);
	}
	newWindow.onload();
}