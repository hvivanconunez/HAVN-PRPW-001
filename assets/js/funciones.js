function CargarPagina(url){
	var nuevapagina = window.open(url);
	setTimeout(function() { nuevapagina.scrollTo(0, 100) }, 0);
}