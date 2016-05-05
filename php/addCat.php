<?php
	require("Database.php");
	if(! isset($_POST['catName'])){
		echo "Erreur dans le champ";
		return;
	}
	$catName = $_POST['catName'];
	$allCats = getCatDatabase();
	$maxId = 0;
	for ($j = 0 ; $j < count($allCats) ; ++$j)
	{
		if(strtoupper($allCats[$j]['nomCat']) == strtoupper($catName)){
			echo $resultat = "Catégorie existante";
			return;
		}
		if($allCats[$j]['idCat'] >= $maxId){
			$maxId = $allCats[$j]['idCat'];
		}
	}
	$newCat = (object) array('nomCat' => $catName, 'idCat' => ++$maxId);
	array_push($allCats, $newCat);
	writeCatDatabase($allCats);
	echo $resultat = "Catégorie ajoutée";
?>