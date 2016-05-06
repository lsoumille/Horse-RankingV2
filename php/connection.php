<?php
	if(! isset($_POST['identifiant']) && ! isset($_POST['password'])){
		echo $resultat = "Erreur dans les champs";
		return;
	}
	$name = $_POST['identifiant'];
	$mdp = $_POST['password'];
	$users = array();
	if(file_exists("../json/Auth.json"))
	{
		$content = file_get_contents("../json/Auth.json");
		$users = json_decode($content, true);
	}
	if($users['name'] == md5($name)
		&& $users['mdp'] == md5("mdp".$mdp)){
		session_start();
		$_SESSION['login'] = $_POST['identifiant'];
		echo $resultat = 1;
	} else {
		echo $resultat = 0;
	}
?>