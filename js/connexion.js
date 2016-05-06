$(document).ready(Onready);
	function Onready(){	
		$('#connection').submit(OnSubmitConnection);
	};
	function OnSubmitConnection(data) {
		$.ajax({
            type: $(this).attr("method"),
            url: $(this).attr("action"),
            data: $(this).serialize(),
        })
        .done(function(result){
            if(result == 1)
          		document.location.href = "accueil.html";
          	else          		 
          		alert("Erreur dans les champs");
        })
        .error(function(){
            alert("Erreur, veuillez recharger la page");
        });
        return false;
	};
