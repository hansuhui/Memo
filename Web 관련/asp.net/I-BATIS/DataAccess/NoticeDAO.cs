using IBatisNet.DataMapper;
using hanyoung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;

namespace hanyoung.DataAccess
{
    public class NoticeDAO
    {
        public void insertNotice(NoticeModel param)
        {
            param.State = 9;
            param.Site_ID = "HANYOUNG";
            param.Notice_Type = "1";
            param.IsImportance = false;
            param.IsPopUp = false;
            param.IsUser = true;
            param.IsProvider = true;
            param.IsDealer = true;
            param.IsManager = false;
            param.IsAdmin = false;
            param.User_ID = "ksg675";
            Debug.WriteLine("DAO - 공지사항등록 : " + param);
            Mapper.Instance().Insert("insertNotice", param);
        }
        public List<NoticeModel> selectNoticeList(string Site_ID)
        {
            Site_ID = "HANYOUNG";
            return (List<NoticeModel>)Mapper.Instance().QueryForList<NoticeModel>("selectNoticeList", Site_ID);
        }
        public List<BoardPostModel> selectNoticeList2(string Board_ID)
        {
            return (List<BoardPostModel>)Mapper.Instance().QueryForList<BoardPostModel>("selectNoticeList2", Board_ID);
        }
        
        public NoticeModel selectNotice(int Seq) 
        {
            return (NoticeModel)Mapper.Instance().QueryForObject<NoticeModel>("selectNotice", Seq);
        }
    }
}