<?php
	require("Database.php");
	if(! isset($_POST['persName']) && ! isset($_POST['raceCat'])){
		echo "Erreur dans les champs";
		return;
	}
	$persName = $_POST['persName'];
	$idCat = $_POST['raceCat'];
	$allJockeys = getJockeyDatabase();
	$maxId = 0;
	for ($j = 0 ; $j < count($allJockeys) ; ++$j)
	{
		if(strtoupper($allJockeys[$j]['name']) == strtoupper($persName)){
			echo $resultat = "Personne existante";
			return;
		}
	}
	$newPers = (object) array('name' => $persName, 'nbPoints' => 0, 'idCat' => $idCat);
	array_push($allJockeys, $newPers);
	writeJockeyDatabase($allJockeys);
	echo $resultat = "Personne ajoutée";
?>