$(document).ready(Onready);
	function Onready(){	
		loadCategories();
		$('#raceCat').change(updateTab);
		$('#download').click(createPdf);
		$.ajaxSetup({
  			cache:false
		});
	/*	var columns = ["ID", "Name", "Country"];
var rows = [
    [1, "Shaw", "Tanzania"],
    [2, "Nelson", "Kazakhstan"],
    [3, "Garcia", "Madagascar"]];

		// Only pt supported (not mm or in)
		var doc = new jsPDF();
		doc.autoTable(columns, rows);
		doc.save('table.pdf');*/
		console.log("bonjour");
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
		console.log("catgeories");
	};
	function updateTab(){
		var myTab = document.getElementById("tabRes");
		var eltToRead = document.getElementById('raceCat');
		var res = eltToRead.options[eltToRead.selectedIndex].value;
		var usersInCat = [];
		while(myTab.rows.length != 1){
			myTab.deleteRow(-1);
		}
		$.getJSON("json/Participants.json").done(function(data) {
			for(var i = 0; i < data.length; ++i){
				if(data[i].idCat == res && data[i].nbPoints != 0){
					var newUsers = {};
					newUsers.name = data[i].name;
					newUsers.nbPoint = data[i].nbPoints;	
					newUsers.idCat = res;	
					usersInCat.push(newUsers);
				}
			}
			usersInCat.sort(function (a,b){
				if(a.nbPoint > b.nbPoint){
					return -1;
				}
				if(a.nbPoint < b.nbPoint){
					return 1;
				}
				return 0;
			})
			var cpt = 1;
			for(var i = 0 ; i < usersInCat.length ; ++i){
				var newLine = myTab.insertRow(-1);
				var col0 = newLine.insertCell(0);
				col0.innerHTML += cpt++;
				var col1 = newLine.insertCell(1);
				col1.innerHTML += usersInCat[i].name;
				var col3 = newLine.insertCell(2);
				col3.innerHTML += usersInCat[i].nbPoint;
			}
		})
		.error(function(){
			alert("Erreur dans la récupération des users");
		});
	};
	function tableToJson(table) {
		    var data = [];
		    // go through cells
		    for (var i=1; i<table.rows.length; i++) {

		        var tableRow = table.rows[i];
		        var rowData = {};

		        for (var j=0; j<tableRow.cells.length; j++) {

		       	//     rowData[ headers[j] ] = tableRow.cells[j].innerHTML;
		       		rowData[j] = tableRow.cells[j].innerHTML;

		        }

		        data.push(rowData);
		    }       

		    return data;
		};

	function createPdf(){
		var eltToRead = document.getElementById('raceCat');
		var res = eltToRead.options[eltToRead.selectedIndex].innerHTML;
	    var datas = tableToJson($('#tabRes').get(0));
		var doc2 = new jsPDF('p', 'pt');
		doc2.text(250,30, res);
		var columns = ["Classement", "Nom" , "Points"];
		doc2.autoTable(columns, datas, {
			styles: {fillColor: [255, 255, 255]},
    		columnStyles: {
        		id: {fillColor: 255}
    		},
    		headerStyles: {fillColor : [0,
    			0,
    			0]
    		},
    		theme: 'grid',
    		margin: {top: 60},
		});
		doc2.save(res + '.pdf');
	};