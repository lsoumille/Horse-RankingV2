$(document).ready(Onready);
	function Onready(){
		$('#newCat').submit(OnSubmitCat);
		console.log("Dans le ready");
	};

	function OnSubmitCat(data) {
		$.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
        })
        .done(function(result){
            $("#resultat").html(result);
        })
        .error(function(){
            alert("Erreur, veuillez recharger la page");
        });
        return false;
	};
