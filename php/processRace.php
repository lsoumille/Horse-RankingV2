
<?php
	require("Database.php");

	session_start();
	if (! isset($_SESSION['login'])) {
		echo $resultat = "Vous n'êtes pas connecté";
	}
    
	/*if(isset ($_POST['first']){
		echo $_POST['first'];
	} else {
		echo "string";
	}*/
	$idCat = $_POST['raceCat'];
	$allJockeys = getJockeyDatabase();
	for ($j = 0 ; $j < count($allJockeys) ; ++$j)
	{
		if($allJockeys[$j]['idCat'] == $idCat){
			if($_POST['first'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['second'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['third'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['fourth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['fifth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['sixth'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if($_POST['seventh'] == $allJockeys[$j]['name'])
			{
				$allJockeys[$j]['nbPoints'] = $allJockeys[$j]['nbPoints'] + 1;
			}
			if(isset($_POST['others'])){
				$badJockeys = $_POST['others'];
				for ($z = 0 ; $z < count($badJockeys) ; ++$z){
					if($badJockeys[$z] == $allJockeys[$j]['name'])
					{
						$allJockeys[$j]['nbPoints'] = 1111;						
					}
				}	
			}
		}
	}
	writeJockeyDatabase($allJockeys);
	//$pers = new Jockey();
	echo $resultat = "Course Ajoutée";
?>