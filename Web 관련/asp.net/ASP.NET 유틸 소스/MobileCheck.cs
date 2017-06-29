using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;


namespace WebSite.Common
{
    [Serializable]
    [AttributeUsage(AttributeTargets.Method | AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
    public class MobileCheck : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {



            string mobileCheck = "iPhone|iPod|BlackBerry|Android|Windows CE|LG|MOT|SAMSUNG|SonyEricsson|Mobile|Symbian|Opera Mobi|Opera Mini|IEmobile|Mobile|lgtelecom|PPC";
            string agent = filterContext.HttpContext.Request.ServerVariables["HTTP_USER_AGENT"];

            foreach (var mobile in mobileCheck.Split('|'))
            {
                if (agent.IndexOf(mobile) != -1)
                {
                    string script = string.Empty;
                    script += "<script>";
                    script += " location.href = '/M'";
                    script += "</script>";
                    filterContext.HttpContext.Response.Write(script);

                    filterContext.HttpContext.Response.End();
                    HandleUnauthorizedRequest(filterContext);
                }

            }
        }

    }
}