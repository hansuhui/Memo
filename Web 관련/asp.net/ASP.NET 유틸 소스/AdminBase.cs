using System;
using System.Configuration;
using System.Web.Mvc;

namespace WebSite.Common
{
    public class AdminBase : DefaultBase
    {
        private string dataFolder = "/Data";
        public AdminBase()
        {
        }

        /// <summary>
        /// 사용자 아이디
        /// </summary>
        public string GetUserId
        {
            get { return GetSessionValue("AdminID"); }
        }

        /// <summary>
        /// 사용자 아이디
        /// </summary>
        public string GetUserName
        {
            get { return GetSessionValue("AdminName"); }
        }

        /// <summary>
        /// 사용자 코드
        /// </summary>
        public string GetUserCode
        {
            get { return GetSessionValue("AdminCode"); }
        }

        /// <summary>
        /// 사용자 이메일
        /// </summary>
        public string GetUserEmail
        {
            get { return GetSessionValue("AdminEmail"); }
        }

        /// <summary>
        /// 사용자 타입 (S:거래처...)
        /// </summary>
        public string GetUserType
        {
            get { return GetSessionValue("AdminType"); }
        }

        /// <summary>
		/// 사용자 샵 코드
		/// </summary>
		public string GetShopCode
        {
            get { return GetSessionValue("ShopCode"); }
        }

        /// <summary>
		/// 사용자 샵 코드
		/// </summary>
		public string GetMngShopCode
        {
            get { return GetSessionValue("MngShopCode"); }
        }

        /// <summary>
		/// 사용자 샵 코드
		/// </summary>
		public string GetShopName
        {
            get { return GetSessionValue("ShopName"); }
        }

        /// <summary>
        /// 관리자 권한
        /// </summary>
        public string GetRoleCode
        {
            get { return GetSessionValue("RoleCode"); }
        }
        /// <summary>
        /// 업체 구분 (1:국내 , 2:헤외)
        /// </summary>
        public string GetLocDiv
        {
            get { return GetSessionValue("locDiv"); }
        }

        
        /// <summary>
        /// 소속회사
        /// </summary>
        public string GetShopCompany
        {
            get { return ConfigurationManager.AppSettings["SHOP_COMPANY"]; }
        }

        public bool CompanyCheck(string SHOP_COMPANY)
        {

            if (SHOP_COMPANY.Equals(ConfigurationManager.AppSettings["SHOP_COMPANY"]))
            {
                return true;
            }
            else
            {
                return false;
            }

        }


        /// <summary>
        /// 로그인 여부
        /// </summary>
        public bool IsLogin
        {
            get
            {
                if (string.IsNullOrEmpty(GetUserCode))
                    return false;
                else
                    return true;
            }
        }

        /// <summary>
		/// 데이터 폴더관련
		/// </summary>
		public string GetDateFoler { get { return dataFolder; } }
        public string GetDataFolerToNotice { get { return dataFolder + "/Notice"; } }
        public string GetDataFolerToFaq { get { return dataFolder + "/Faq"; } }
        public string GetDataFolerToResources { get { return dataFolder + "/Resources"; } }
        public string GetDataFolerToOne { get { return dataFolder + "/One"; } }
        public string GetDataFolerToQna { get { return dataFolder + "/Qna"; } }

        public string getDataFolerToCardExcel { get { return _dataFolder + "/CardExcel"; } }

        public string getDataFolerToChargeExcel { get { return _dataFolder + "/ChargExcel"; } }


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
                Response.Clear();
                Response.Write(script);
                Response.End();
                throw new Exception("값이없음");
            }
        }

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
                Response.Clear();
                Response.Write(script);
                Response.End();
                throw new Exception("값이없음");
            }
        }

        public ActionResult JsAlerthistoryback(string Alert, int go)
        {

            string Script = "<script>alert('{0}');history.go({1})</script>";
            Script = string.Format(Script, Alert, go);

            return Content(Script);


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

        public ActionResult JsAlerClose(string Alert)
        {
            string Script = "<script>alert('{0}');window.close();</script>";
            Script = string.Format(Script, Alert);
            return Content(Script);
        }

        public ActionResult JsAlertGoPage(string Alert, string Page)
        {

            string Script = "<script>alert('{0}');location = '{1}';</script>";
            Script = string.Format(Script, Alert, Page);

            return Content(Script);


        }
    }
}