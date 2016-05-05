<?php
class Jockey
{
	public $name;
	public $categorie;
	public $score;

	function addPoint($point)
	{
		$this->score = $this->score + $point; 
	}
}
?>