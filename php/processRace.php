
<?php
	require("Database.php");

	session_start();
	if (! isset($_SESSION['login'])) {
		echo $resultat = "Vous n'êtes pas connecté";
	}
	$idCat = $_POST['raceCat'];
	$allJockeys = getJockeyDatabase();
	for ($j = 0 ; $j < count($allJockeys) ; ++$j)
	{
		if($allJockeys[$j]['idCat'] == $idCat){
			if($_POST['first'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 15;
			}
			if($_POST['second'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 12;
			}
			if($_POST['third'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 9;
			}
			if($_POST['fourth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 6;
			}
			if($_POST['fifth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 5;
			}
			if($_POST['sixth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 4;
			}
			if($_POST['seventh'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 3;
			}
			if(isset($_POST['others'])){
				$badJockeys = $_POST['others'];
				for ($z = 0 ; $z < count($badJockeys) ; ++$z){
					if($badJockeys[$z] == $allJockeys[$j]['name'])
					{
						$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;						
					}
				}	
			}
		}
	}
	writeJockeyDatabase($allJockeys);
	echo $resultat = "Course Ajoutée";
?>