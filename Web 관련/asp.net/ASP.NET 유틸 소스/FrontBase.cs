using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;


using DomainModel.front;

namespace WebSite.Common
{
    public class FrontBase : DefaultBase
    {

        public int TableCount;
        /// <summary>
        /// 사용자 아이디
        /// </summary>
        public string GetUserId
        {
            get { return GetSessionValue("MemberID"); }
        }

        public string GetUserName
        {
            get { return GetSessionValue("MemberNAME"); }
        }

        /// <summary>
        /// 사용자 코드
        /// </summary>
        public string GetUserCode
        {
            get { return GetSessionValue("MemberCODE"); }
        }

        public string GetUserCodeByContext(System.Web.Routing.RequestContext requestContext)
        {
            return GetSessionValue(requestContext, "MemberCODE");
        }

        /// <summary>
        /// 사용자 타입 (S:거래처...)
        /// </summary>
        public string GetUserType
        {
            get { return GetSessionValue("UserType"); }
        }

        /// <summary>
        /// 로그인 여부
        /// </summary>
        public bool IsLogin
        {
            get
            {
                if (string.IsNullOrEmpty(GetUserId))
                    return false;
                else
                    return true;
            }
        }

        public ActionResult JsAlerthistoryback(string Alert, int go)
        {

            string Script = "<script>alert('{0}');history.go({1})</script>";
            Script = string.Format(Script, Alert, go);

            return Content(Script);


        }
        public ActionResult JsAlerClose(string Alert)
        {
            string Script = "<script>alert('{0}');window.close();</script>";
            Script = string.Format(Script, Alert);
            return Content(Script);
        }

        public ActionResult JsAlerCloseLayer(string Alert)
        {
            string Script = "<script>alert('{0}');opener.document.getElementsByClassName('div_layer')[0].style.display = 'none';opener.document.getElementById('DetailView').src = ''</script>";
            Script = string.Format(Script, Alert);

            return Content(Script);
        }


        public ActionResult JsAlertGoPage(string Alert, string Page)
        {

            string Script = "<script>alert('{0}');location = '{1}';</script>";
            Script = string.Format(Script, Alert, Page);

            return Content(Script);


        }

        public ActionResult JsReload()
        {

            string Script = "<script>location.reload();</script>";
            return Content(Script);


        }

        public ActionResult frmSubmitPost(string action, string name, string val)
        {

            string Script = "<form id='frm' action='{0}' method='post'><input type='hidden' id='{1}' name='{1}' value='{2}'></form>";
            Script += "<script>frm.submit();</script>";
            Script = string.Format(Script, action, name, val);

            return Content(Script);
        }


        public void ResponseJsAlertGoBack(string alert, int go)
        {

            string script = string.Empty;
            script += "<script>";
            script += "	alert('{0}'); ";
            script += " history.go({1});";
            script += "</script>";
            script = string.Format(script, alert, go);
            Response.Clear();
            Response.Write(script);
            Response.End();
            Exception e = new Exception("모델이 비었음");

        }

        public void ResponseJsAlertGoPage(string alert, string Page)
        {

            string Script = "<script>alert('{0}');location = '{1}';</script>";
            Script = string.Format(Script, alert, Page);
            Response.Clear();
            Response.Write(Script);
            Response.End();
            Exception e = new Exception("모델이 비었음");

        }



        public void modelNullCheck(object model)
        {

            if (model == null)
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('잘못된 접근입니다.'); ";
                script += " history.go(-1);";
                script += "</script>";
                Response.Clear();
                Response.Write(script);
                Response.End();
                Exception e = new Exception("모델이 비었음");
                throw e;
            }


        }


        /// <summary>
        ///   해당 id에 요청 값이 있는지 확인
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool RequestCheck(string id)
        {
            bool Result = false;

            object RequestData = Request.Params[id];

            if (RequestData != DBNull.Value && RequestData != null)
            {
                Result = true;
            }
            return Result;

        }


        /// <summary>
        /// 해당 id에 요청을 String으로 변환
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public string RequestToString(string id)
        {

            string Result = null;

            if (RequestCheck(id))
            {
                Result = Request.Params[id].ToString();
            }
            else {
                Result = "";
            }

            return Result;

        }

        /// <summary>
        /// 해당 id에 요청을 int로 변환
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int RequestToInt32(string id)
        {
            int Result = 0;

            if (RequestCheck(id))
            {
                string Val = Request.Params[id].ToString();

                if (System.Text.RegularExpressions.Regex.IsMatch(Val, "^[0-9]+$", System.Text.RegularExpressions.RegexOptions.IgnoreCase))
                {
                    Result = Convert.ToInt32(Request.Params[id]);
                }
                else
                {
                    Result = 0;
                }

            }

            return Result;
        }


        /// <summary>
        /// 해당 id에 요청을 bool로 변환
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public bool RequestToBoolean(string id)
        {
            bool Result = false;

            if (RequestCheck(id))
            {
                Result = Convert.ToBoolean(Request.Params[id]);
            }

            return Result;
        }



        /// <summary>
        /// 리스트를 맞아서 리스트 중 null 있는지 체크한다
        /// </summary>
        /// <param name="CheckList"></param>
        /// <returns></returns>
        public bool ListValCheck(List<string> CheckList)
        {
            bool Result = false;
            foreach (var Check in CheckList)
            {
                if (string.IsNullOrEmpty(Check))
                {
                    Result = true;
                }
            }
            return Result;
        }

        public string ListValSum(List<string> List)
        {

            string Value = "";

            foreach (var Val in List)
            {
                Value += Val;
            }
            return Value;
        }

        public string ListEmailSum(List<string> List)
        {

            string Value = "";
            int i = 0;
            if (List.Count != 2) { Value = null; return Value; }

            foreach (var Val in List)
            {
                Value += Val;
                if (i == 0) { Value += "@"; }
                i++;
            }
            return Value;
        }

        public string ListPhSum(List<string> List)
        {

            string Value = "";
            int i = 0;
            if (List.Count != 3) { Value = null; return Value; }

            foreach (var Val in List)
            {
                if (i != 0) { Value += "-"; }
                Value += Val;
                i++;
            }
            return Value;
        }

        public void StringValCheck(string val, string alert)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}');";
                script += " history.back();";
                script += "</script>";
                script = string.Format(script, alert);
                Response.Clear();
                Response.Write(script);
                Response.End();
                throw new Exception("값이없음");
            }
        }

        public void StringValCheckClose(string val, string alert)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}');";
                script += " window.close();;";
                script += "</script>";
                script = string.Format(script, alert);
                Response.Clear();
                Response.Write(script);
                Response.End();
                throw new Exception("값이없음");
            }
        }

        public void IntValCheck(int val, string alert)
        {

            if (val == 0)
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}');";
                script += " history.back();";
                script += "</script>";
                script = string.Format(script, alert);
                Response.Clear();
                Response.Write(script);
                Response.End();
                throw new Exception("값이없음");
            }
        }



        #region UrlDecode

        public string UrlDecode(string model)
        {

            if (!string.IsNullOrEmpty(model))
            {
                model = HttpUtility.UrlDecode(model);

            }

            return model;
        }


        #endregion

        #region UrlEncode

        public string UrlEncode(string model)
        {

            if (!string.IsNullOrEmpty(model))
            {
                model = HttpUtility.UrlEncode(model);
            }

            return model;
        }

        #endregion

        #region PagingSet

        public SearchModel PagingSet(SearchModel Search)
        {

            TableCount = new SeachMethod().ListCount(Search);
            Search.CurrentPage = (Convert.ToInt32(Request.Params["page"] == "" || Request.Params["page"] == null || Convert.ToInt32(Request.Params["page"]) == 0 ? "1" : Request.Params["page"]) - 1) * Search.PageSize;
            ViewBag.page = Convert.ToInt32(Request.Params["page"]);


            if (TableCount % Search.PageSize > 0)
            { ViewBag.TotalPage = Convert.ToInt32(TableCount / Search.PageSize) + 1; }
            else
            { ViewBag.TotalPage = Convert.ToInt32(TableCount / Search.PageSize); }

            ViewBag.Count = TableCount;

            return Search;

        }

        #endregion



    }
}