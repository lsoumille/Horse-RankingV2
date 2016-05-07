$(document).ready(Onready);
	function Onready(){	
		loadCategories();
		$('#raceCat').change(updateAllCombos);
		$('.depCat').change(function (){
				removeFromCombos(this.id);
			});
		$('#newRace').submit(OnSubmitRace);
		$.ajaxSetup({
  			cache:false
		});
	};
	/*
	add the options for the combobox which contains the categories
	*/
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
	};
	/*
	add the jockeys corresponding to the category in the comboboxes
	*/
	function updateAllCombos(){
		var eltToRead = document.getElementById('raceCat');
		var res = eltToRead.options[eltToRead.selectedIndex].value;
		var usersInCat = [];
		$.getJSON("json/Participants.json").done(function(data) {
			for(var i = 0; i < data.length; ++i){
				if(data[i].idCat == res){
					var newUsers = {};
					newUsers.name = data[i].name;
					newUsers.nbPoint = data[i].nbPoints;	
					newUsers.idCat = res;	
					usersInCat.push(newUsers);
					console.log(newUsers.name);
				}
			}
			var nbCombos = document.getElementsByClassName('depCat').length;
			for(var j = 0 ; j < nbCombos ; ++j){
				var elt = document.getElementsByClassName('depCat')[j];
				while(elt.length > 0){
					elt.remove(0);
				}
				elt.add(document.createElement("option"));
				for(var k = 0 ; k < usersInCat.length ; ++k){
					var opt =  document.createElement("option");
					opt.text = usersInCat[k].name; 
					opt.value = usersInCat[k].name;
					elt.add(opt);
				}
				if(j == nbCombos - 1){
					$('option').mousedown(function(e) {
   			 			e.preventDefault();
    					$(this).prop('selected', !$(this).prop('selected'));
   			 			return false;
					});
				}
			}
		})
		.error(function(){
			alert("Erreur dans la récupération des users");
		});
	};
	/*
	Delete the jockey if he's selected in an other combobox
	*/
	function removeFromCombos(id){
		var nbCombos = document.getElementsByClassName('depCat').length;
		var userToDelete;
		for(var j = 0 ; j < nbCombos ; ++j){
			var elt = document.getElementsByClassName('depCat')[j];
			if(elt.id == id){
				userToDelete = elt.options[elt.selectedIndex].value;
			}
		}
		for(var z = 0 ; z < nbCombos ; ++z){
			var elt = document.getElementsByClassName('depCat')[z];
			if(elt.id != id){				
				for(var i = 0 ; i < elt.options.length ; ++i){
					if(elt.options[i].value == userToDelete){
						elt.remove(i);
						break;
					}
				}
			}
		}
	};

	function OnSubmitRace(data) {		
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

