

 select * from MMS_CONTENTS_INFO

 select * from msg_data
 select * from MSG_LOG_201402

 --delete MMS_CONTENTS_INFO where cont_seq = '80'
 select * from Saledtl where SaleCode = 'S140207005'


  insert into MMS_CONTENTS_INFO (FILE_CNT, MMS_BODY, MMS_SUBJECT, FILE_TYPE1, FILE_NAME1, SERVICE_DEP1, BAR_TYPE, BAR_MERGE_FILE, BAR_VALUE ,  BAR_VALUE_VIEW_YN,BAR_SIZE_WIDTH,BAR_SIZE_HEIGHT,BAR_POSITION_X,BAR_POSITION_Y)  select '2', MMS_BODY, MMS_SUBJECT, 'IMG', FILE_NAME1, 'ALL', 'EAN13', '1', BAR_VALUE ,  'Y',BAR_SIZE_WIDTH,BAR_SIZE_HEIGHT,BAR_POSITION_X,BAR_POSITION_Y from MMS_CONTENTS_INFO where CONT_SEQ =71  
  insert into msg_data  (CUR_STATE, CALL_TO, CALL_FROM, SMS_TXT, MSG_TYPE, CONT_SEQ, UDATA_KEY, UDATA_VAL, GIFT_NO)  select 0,  CALL_TO, CALL_FROM, SMS_TXT, MSG_TYPE, CONT_SEQ, UDATA_KEY, UDATA_VAL+'_2', GIFT_NO from msg_data where CONT_SEQ =71  
  update a set  IsSend =  cast(IsSend as tinyint) +1  
  select *
  from SaleDtl a, MSG_LOG_201402 b  where a.SaleCode = b.UDAta_val and a.GiftNo = b.Gift_no and b.Cont_seq = 71

  insert into msg_data  (CUR_STATE, CALL_TO, CALL_FROM, SMS_TXT, MSG_TYPE, CONT_SEQ, UDATA_KEY, UDATA_VAL, GIFT_NO)  select 0,  CALL_TO, CALL_FROM, SMS_TXT, MSG_TYPE, CONT_SEQ, UDATA_KEY, UDATA_VAL+'_2', GIFT_NO from msg_data where CONT_SEQ =71  


  
  
  select 
	a.msg_seq, cur_state, sent_date, rslt_date, req_date, rslt_code, rslt_code2 
,	a.rslt_net, a.call_to, a.call_from, a.sms_txt, a.msg_type , a.CONT_SEQ 
,	c.GiftNo, (c.Jong * 1000) as Price, c.Ptitle, c.Pimg, b.ExpDate, 'msg_log_" + time2.ToString() + "' as tblname, c.IsSend 
from msg_log_201402  a 
left outer join SaleDtl c on (substring(a.UDATA_VAL,1,10) = c.SaleCode and a.gift_no = c.giftno) 
left outer join SaleMst b  on (b.SaleCode = c.SaleCode) 

