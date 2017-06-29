<?php

header("Content-Type:application/json");

include_once('./_common.php');



//bid 체크
if(is_null($bid)){
	echo json_encode('01');
	exit;
}

if(empty($bid)){
	echo json_encode('01');
	exit;
}

if (!$is_member){
		echo json_encode('02');
		exit;
}
$sql = "
		SELECT uid,txt,reg_date ,sender
			   ,reg_date1 ,reg_date2 
		FROM `love_web_sms` 
		WHERE mb_no = $member[mb_no]
		  AND bid = $bid
          AND sender = '2'
          AND Is_show  = '0'
		ORDER BY reg_date
		 ";
$result = sql_query($sql, false);



$Resultarray = Array();


for ($i=0; $row_s=sql_fetch_array($result); $i++) {
	$array = array(
					'uid' => $row_s['uid'],
					'txt' => $row_s['txt'],
					'reg_date' => $row_s['reg_date'],
					'sender' => $row_s['sender'],
					'reg_date1' => $row_s['reg_date1'],
					'reg_date2' => $row_s['reg_date2'] 
		   );
		array_push($Resultarray,$array);
}



if($i == 0){
	echo json_encode('03');
	exit;
}else{
//	$Resultarray = Array('result'=> true,'item'=>$array);
	echo json_encode($Resultarray);
}
	
?>
