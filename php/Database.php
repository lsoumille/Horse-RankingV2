<?php
function getJockeyDatabase()
{
	$content = "";
	$jockeys = array();
	if(file_exists("../json/Participants.json"))
	{
		$content = file_get_contents("../json/Participants.json");
		$jockeys = json_decode($content, true);
	}
	return $jockeys;
}

function writeJockeyDatabase($jockeys)
{
	if(isset($jockey)) {
		file_put_contents("../json/Participants.json", json_encode($jockeys));
	}
}

function getCatDatabase()
{
	$content = "";
	$jockeys = array();
	if(file_exists("../json/Categories.json"))
	{
		$content = file_get_contents("../json/Categories.json");
		$jockeys = json_decode($content, true);
	}
	return $jockeys;
}

function writeCatDatabase($cats)
{
	file_put_contents("../json/Categories.json", json_encode($cats));
}

?>
