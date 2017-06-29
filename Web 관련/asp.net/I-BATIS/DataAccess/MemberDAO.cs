using IBatisNet.DataMapper;
using hanyoung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;

namespace hanyoung.DataAccess
{
    public class MemberDAO
    {
        public void insertMember(MemberModel param)
        {
            param.RegDate = DateTime.Now;
            param.Site_ID = "HANYOUNG";
            param.Birth_IsLunar = true;
            param.IsMarry = true;
            param.Marry_IsLunar = true;
            param.State = 1;
            param.Mileage = 0;
            param.Point = 0;
            param.Note = "[회원 가입] 가입일자 : " + DateTime.Now.ToString();
            //Debug.WriteLine("memberDAO - insertMember : "+param);
            Mapper.Instance().Insert("insertMember", param);
        }
        public MemberModel selectMember(string User_ID)
        {
            //Debug.WriteLine("memberDAO - selectMember : " + User_ID);
            return (MemberModel)Mapper.Instance().QueryForObject<MemberModel>("selectMember", User_ID);
        }
        public void updateJoin(MemberModel param)
        {
            Mapper.Instance().Update("updateJoin", param);
        }

        public int login(MemberModel param)
        {
            
            int result = (int)Mapper.Instance().QueryForObject("login", param);
            //Debug.WriteLine("memberDAO - login : " + param);
            return result;
        }
    }
}