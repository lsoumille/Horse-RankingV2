<?php
	require("Database.php");
	session_start();
	if (! isset($_SESSION['login'])) {
		echo $resultat = "Vous n'êtes pas connecté";
	}
	$allJockeys = getJockeyDatabase();
	for ($j = 0 ; $j < count($allJockeys) ; ++$j)
	{
		$allJockeys[$j]['nbPoints'] = 0;
	}
	writeJockeyDatabase($allJockeys);
	echo $resultat = "Les scores ont été réinitialisés";
?>