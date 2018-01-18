<?php

$title = $_POST["title"];
$content = $_POST["content"];
var_dump($title,$content);
file_put_contents("data.txt",$title.",".$content."/n",FILE_APPEND);



$message = file_get_contents("data.txt",)；
echo str_replace("/n","<br>",$message );
?>