(function(_document){
	function toggleNav(event){
		var navElem = _document.getElementsByTagName('nav')[0];
		var classNames = navElem.className;
		if(classNames.indexOf("open") === -1){
			navElem.className = "nav open";
		}else{
			navElem.className = "nav";
		}
	}
	function init(){
		var navElem = _document.getElementsByClassName('fa-bars')[0];
		navElem.addEventListener("click", toggleNav);
	}
	init();
	
})(window.document);