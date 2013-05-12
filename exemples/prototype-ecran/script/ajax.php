<?php

	$file = json_decode(file_get_contents('http://api-ratp.pierre-grimaud.fr/rer/b/arcueil+cachan/cdg+mitry'));
?>	
<tr class="tr-header">
	<td class="td1">
		<img src="img/ratp/logo-rer.png" alt="" class="rer-logo" />
		<img src="img/ratp/logo-rer-<?php echo $file->ligne; ?>.png" alt="" class="rer-ligne" />
		<p><?php echo str_replace(' ', '</br>', $file->destination); ?></p>
	</td>
	<td colspan="2" class="td2-header"><p><?php echo date('H:i'); ?></p></td>
</tr>
<?php

	for($i=0; $i<sizeof($file->horaires); $i++):

?>
<tr class="<?php if($i%2==0) echo 'bg-tr '; ?>tr-normal">
	<td class="td1"><p><?php echo $file->horaires[$i]->terminus ;?></p></td>
	<td class="td2"><p><?php echo $file->horaires[$i]->id ;?></p></td>
	<td class="td3"><p><?php echo $file->horaires[$i]->horaire ;?></p></td>
</tr>
<?php

	endfor;
	
?>