using IBatisNet.DataMapper;
using hanyoung.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Diagnostics;

namespace hanyoung.DataAccess
{
    public class BoardDAO
    {

        public List<BoardPostModel> boardList(string Board_ID)
        {
            //Board_Name = "사진게시판";
            return (List<BoardPostModel>)Mapper.Instance().QueryForList<BoardPostModel>("boardList", Board_ID);
        }
        public BoardPostModel selectBoard(int Seq)
        {
            return (BoardPostModel)Mapper.Instance().QueryForObject<BoardPostModel>("selectBoard", Seq);
        }
        public BoardPostModel selectFileName(int Seq)
        {
            return (BoardPostModel)Mapper.Instance().QueryForObject<BoardPostModel>("selectFileName", Seq);
        }
    }
}