$(document).ready(Onready);
	function Onready(){	
		loadCategories();
		$('#raceCat').change(updateAllCombos);
		console.log("bonjour");
	};
	function loadCategories(){
		$.getJSON("json/Categories.json").done(function(data) {
			for(var i = 0; i < data.length; ++i){
				$('#raceCat').append(
					$('<option>', { 
        				value: data[i].idCat,
        				text : data[i].nomCat

					})
			)}
		})
		.error(function(){
			alert("Erreur dans la récupération des catégories");
		});
		console.log("catgeories");
	};
	function updateAllCombos(){
		var eltToRead = document.getElementById('raceCat');
		var res = eltToRead.options[eltToRead.selectedIndex].value;
		console.log(res);
	};	

