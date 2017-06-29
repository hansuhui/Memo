using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebSite.Common
{
    [Serializable]

    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
    public class EcSaleCheck : AuthorizeAttribute
    {
        //string Type = "";

        //public RoleCheck(string Type)
        //{
        //    this.Type = Type;
        //}

        public override void OnAuthorization(AuthorizationContext filterContext)
        {


            string RoleCode = (string)filterContext.HttpContext.Session["RoleCode"];

            if (string.IsNullOrEmpty(RoleCode))
            {
                string script = string.Empty;
                script += "<script>";
                script += "	alert('로그인이 필요합니다.'); ";
                script += " location.href = '/EcSale/Account/Login'";
                script += "</script>";
                filterContext.HttpContext.Response.Write(script);
                filterContext.HttpContext.Response.End();
                HandleUnauthorizedRequest(filterContext);
            }
            else {
                if (RoleCode != "03") {
                    string script = string.Empty;
                    script += "<script>";
                    script += "	alert('총판만 로그인이 가능합니다.'); ";
                    script += " location.href = '/EcSale/Account/Login'";
                    script += "</script>";
                    filterContext.HttpContext.Response.Write(script);
                    filterContext.HttpContext.Response.End();
                    HandleUnauthorizedRequest(filterContext);

                }

            }

        }

    }
}