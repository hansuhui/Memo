using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebSite.Common
{
    public class WebUtil
    {
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

        #region 필수값 입력 체크 - INPAY프로젝트에서 가져옴 2016.07.04 PSW
        public void StringValCheck(string val, string alert)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}을(를) 입력해주세요.');";
                script += " history.back();";
                script += "</script>";
                script = string.Format(script, alert);
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
                throw new Exception("값이없음");
            }
        }
        public void StringValCheckPage(string val, string alert, string page)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}을(를) 입력해주세요.');";
                script += " location = '{1}';";
                script += "</script>";
                script = string.Format(script, alert, page);
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
                throw new Exception("값이없음");
            }
        }
        #endregion

        #region 콤보 필수값 입력 체크 - INPAY프로젝트에서 가져옴 2016.07.04 PSW
        public void SelectValCheck(string val, string alert)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}을(를) 선택해주세요.');";
                script += " history.back();";
                script += "</script>";
                script = string.Format(script, alert);
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
                throw new Exception("값이없음");
            }
        }
        public void SelectValCheckPage(string val, string alert, string page)
        {

            if (string.IsNullOrEmpty(val))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('{0}을(를) 선택해주세요.');";
                script += " location = '{1}';";
                script += "</script>";
                script = string.Format(script, alert, page);
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
                throw new Exception("값이없음");
            }
        }
        #endregion

        #region
        public void JsAlerthistoryback(string Alert, int go)
        {

            string Script = "<script>alert('{0}');history.go({1})</script>";
            Script = string.Format(Script, Alert, go);

            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.Write(Script);
            HttpContext.Current.Response.End();
            throw new Exception(Alert);
        }
        #endregion

        public void JsAlertGoPage(string Alert, string Page)
        {

            string Script = "<script>alert('{0}');location = '{1}';</script>";
            Script = string.Format(Script, Alert, Page);

            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.Write(Script);
            HttpContext.Current.Response.End();
            throw new Exception(Alert);


        }

        public string JsAlertGoPage_Script(string Alert, string Page)
        {

            string Script = "<script>alert('{0}');location = '{1}';</script>";
            Script = string.Format(Script, Alert, Page);
            return Script;
        }

        public void JsAlerClose(string Alert)
        {
            string Script = "<script>alert('{0}');window.close();</script>";
            Script = string.Format(Script, Alert);

            HttpContext.Current.Response.Clear();
            HttpContext.Current.Response.Write(Script);
            HttpContext.Current.Response.End();
            throw new Exception(Alert);
        }


        public bool RequestCheck(string id)
        {
            bool Result = false;

            object RequestData = HttpContext.Current.Request.Params[id];

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
                Result = HttpContext.Current.Request.Params[id].ToString();
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
                string Val = HttpContext.Current.Request.Params[id].ToString();

                if (System.Text.RegularExpressions.Regex.IsMatch(Val, "^[0-9]+$", System.Text.RegularExpressions.RegexOptions.IgnoreCase))
                {
                    Result = Convert.ToInt32(HttpContext.Current.Request.Params[id]);
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
                Result = Convert.ToBoolean(HttpContext.Current.Request.Params[id]);
            }

            return Result;
        }

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
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
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
                HttpContext.Current.Response.Clear();
                HttpContext.Current.Response.Write(script);
                HttpContext.Current.Response.End();
                throw new Exception("값이없음");
            }
        }
    }
}