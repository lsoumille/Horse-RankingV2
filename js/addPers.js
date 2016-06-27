$(document).ready(Onready);
	function Onready(){
		loadCategories();
		$('#newPers').submit(OnSubmitPers);
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

	function OnSubmitPers(data) {
		$.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
        })
        .done(function(result){
            $("#resultat").html(result);
						$("#persName").value = "";
        })
        .error(function(){
            alert("Erreur, veuillez recharger la page");
        });
        return false;
	};
