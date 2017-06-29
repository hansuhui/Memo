using System;
using System.Text;
using System.IO;
using System.Data;
using System.Net.Mail;
using System.Web.Mvc;



using oBo.Util;
using Innobit.DomainModel.Entities.Member;
using Innobit.BusinessLayer.Admin;
using Innobit.DomainModel.Entities.Admin;
using Innobit.DomainModel.Entities.Order;
using System.Configuration;
/// <summary>
/// MailSend의 요약 설명입니다.
/// </summary>
public class MailSend
{
    public MailSend()
    {

    }

    string url = ConfigurationManager.AppSettings["mail_url"];

    public void SendMail(string pToMail, string pTitle, string pBody)
    {
        string strFromMail = Config.GetMasterEamil;

        MailMessage m = new MailMessage(strFromMail, pToMail, pTitle, pBody);
        m.SubjectEncoding = System.Text.Encoding.Default;
        m.BodyEncoding = System.Text.Encoding.Default;
        m.IsBodyHtml = true;

        SmtpClient smtp = new SmtpClient();
        smtp.Host = "121.189.62.205";
        smtp.Send(m);
    }

    public void SnemdMJoinMail(MemberEntity2 model, string ServerPath)
    {


        string path = ServerPath + "/mailform/JoinMail.htm";

        StringBuilder sb = new StringBuilder("<meta charset='utf-8'>");

        string strHTML = File.ReadAllText(path);
        strHTML = strHTML.Replace("{가입자이름}", model.NAME);
        strHTML = strHTML.Replace("{가입자아이디}", model.ID);
        strHTML = strHTML.Replace("{FOOTER}", GerfooterInfor(ServerPath));
        strHTML = strHTML.Replace("{URL}", url);

        sb.Append(strHTML);

        string senderAddr = "service@88global.co.kr";
        string senderName = "K-TREND";
        string subject = "K-TREND 가입축하 메일입니다.";
        try
        {

            MailMessage m = new MailMessage();
            m.From = new MailAddress(senderAddr, senderName, System.Text.Encoding.UTF8);
            m.To.Add(model.EMAIL);  //model.EMAIL
            m.Subject = subject;
            m.Body = sb.ToString();
            m.IsBodyHtml = true;
            m.SubjectEncoding = System.Text.Encoding.Default;
            m.BodyEncoding = System.Text.Encoding.Default;
            m.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            //smtp.Host=GetServerIp;
            smtp.Host = "121.78.119.28";
            smtp.Port = 25;
            smtp.UseDefaultCredentials = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Send(m);


        }
        catch (Exception ex)
        {
            //retMessage=ex.Message;
        }

    }
    public void SnemdMOrderMail(OrderEntity ord, DataTable products, string stmFlag, string bank, string account, string depositer, int paymentPrice, int deliveryPrice, string ServerPath)
    {


        string path = ServerPath + "/mailform/OrderMail.htm";

        StringBuilder sb = new StringBuilder("<meta charset='utf-8'>");


        string strHTML = File.ReadAllText(path);


        ;


        strHTML = strHTML.Replace("{고객명}", ord.Odname);
        strHTML = strHTML.Replace("{전화번호}", ord.Odtel);
        strHTML = strHTML.Replace("{휴대폰번호}", ord.Odcel);
        strHTML = strHTML.Replace("{이메일}", ord.Odemail);



        strHTML = strHTML.Replace("{수령인}", ord.Rcvname);
        strHTML = strHTML.Replace("{수령전화}", ord.Rcvtel);
        strHTML = strHTML.Replace("{수령핸드폰}", ord.Rcvcel);

        string addr = "[" + ord.Rcvzip + "]" + ord.RcvAddress1 + " " + ord.RcvAddress2;

        strHTML = strHTML.Replace("{수령주소}", addr);
        strHTML = strHTML.Replace("{수령메모}", ord.Odmemo1);

        strHTML = strHTML.Replace("{결제정보}", MvcHtmlString.Create(stmFlag).ToString());

        string BankInfor = bank + " : " + account;

        strHTML = strHTML.Replace("{입금은행}", BankInfor);
        strHTML = strHTML.Replace("{입금자명}", depositer);
        strHTML = strHTML.Replace("{결제금액}", TextUtil.GetCommaString(paymentPrice));
        strHTML = strHTML.Replace("{상품금액}", TextUtil.GetCommaString(paymentPrice - deliveryPrice));
        strHTML = strHTML.Replace("{배송비}", TextUtil.GetCommaString(deliveryPrice));

        strHTML = strHTML.Replace("{LIST}", GetOrderList(products));

        strHTML = strHTML.Replace("{FOOTER}", GerfooterInfor(ServerPath));
        strHTML = strHTML.Replace("{URL}", url);

        sb.Append(strHTML);

        string senderAddr = "service@88global.co.kr";
        string senderName = "K-TREND";
        string subject = "K-TREND 주문안내 메일입니다.";
        try
        {

            MailMessage m = new MailMessage();
            m.From = new MailAddress(senderAddr, senderName, System.Text.Encoding.UTF8);
            m.To.Add("poixhan@hanmail.net");  //model.EMAIL
            m.Subject = subject;
            m.Body = sb.ToString();
            m.IsBodyHtml = true;
            m.SubjectEncoding = System.Text.Encoding.Default;
            m.BodyEncoding = System.Text.Encoding.Default;
            m.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            //smtp.Host=GetServerIp;
            smtp.Host = "121.78.119.28";
            smtp.Port = 25;
            smtp.UseDefaultCredentials = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Send(m);


        }
        catch (Exception ex)
        {
            //retMessage=ex.Message;
        }

    }

    public string GerfooterInfor(string path)
    {
        path += "/app_data/Mallinfo.xml";


        MallInfoBLL md = new MallInfoBLL();
        MallInfoEntity mf = md.GetMallInfo(path);


        string footer = @"
            <address style='font-style:normal; float:left; color: #666; font-size: 12px;'>
                {상호}
                사업자번호 : {사업자번호}
                전화 : {전화번호} /  팩스: {팩스번호}  <br>
                이메일 : {이메일}
                개인정보관리책임자 : {관리자}<br><br>
                COPYRIGHT © 2016 INTERBILE. ALL RIGHTS RESERVED.
            </address>
            <h2 style='float:right;'><img src='{URL}/images/front/footer_logo.png' alt='로고'></h2>
            ";

        footer = footer.Replace("{상호}", mf.Sangho);
        footer = footer.Replace("{사업자번호}", mf.Cnum);
        footer = footer.Replace("{전화번호}", mf.Malltel);
        footer = footer.Replace("{팩스번호}", mf.Mallfax);
        footer = footer.Replace("{이메일}", mf.AdminEmail);
        footer = footer.Replace("{관리자}", mf.AdminName);

        return footer;


    }

    public string GetOrderList(DataTable products)
    {



        StringBuilder LIST = new StringBuilder("");
        foreach (DataRow r in products.Rows)
        {
            string pdtcode = r["pdtcode"].ToString();
            string pdttitle = r["pdttitle"].ToString();
            int pdtSalePrice = Convert.ToInt32(r["pdtSalePrice"]);
            int qty = Convert.ToInt32(r["pdtQty"]);
            var salePrice = pdtSalePrice * qty;

            string strImg1 = r["pdtImg1"].ToString();
            string isPdtImgLink = r["isPdtImgLink"].ToString();
            string pdtImageUrl = r["pdtImageUrl"].ToString();
            string strImage = string.Empty;
            string imagePath = string.Empty;

            if (isPdtImgLink.Equals("True"))
            {
                strImage = pdtImageUrl;
            }

            if (!string.IsNullOrEmpty(strImg1))
            {
                strImage = strImg1;
            }

            if (string.IsNullOrEmpty(strImage))
            {
                strImage = Config.ThumDefault;
            }
            strImg1 = url + strImg1;

            string add = @"
                    <tr style='font-size: 14px;'>
                        <td><img style='width:60px;height:60px;' src='" + strImg1 + @"' /></td>
                        <td style='padding-left:15px;font-size: 12px;'>" + pdttitle + @"</td>
                        <td style='text-align:right;font-size: 12px;'>" + TextUtil.GetCommaString(pdtSalePrice) + @" 원 </td>
                        <td style='text-align:right;font-size: 12px;'>" + qty + @" </td>
                        <td style='text-align:right;font-size: 12px;'>" + TextUtil.GetCommaString(salePrice) + @" 원  </td>
                    </tr>
                ";

            LIST.Append(add);
        }


        return LIST.ToString();
    }
}


public class Mail
{
    string url = ConfigurationManager.AppSettings["mail_url"];

    public static string mailKey { get; set; }
    /// <summary>
    /// 이메일 인증번호, 임시비밀번호 발송 
    /// </summary>
    /// <param name="mailAddr">받는사람메일주소</param>
    /// <returns>메일발송 결과</returns>
    public string SendMail(string mailAddr, string CODE, string MemberID, string div, string SiteName, string adminDiv)
    {

        mailKey = makeKey();


        string link = url + "/Member/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID + "";

        if ("MOBILE".Equals(div))
        {
            link = url + "/M/Account/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID + "";
        }
        else if ("ADMIN".Equals(div))
        {
            link = url + "/" + adminDiv + "/Account/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID;

            if (!string.IsNullOrEmpty(SiteName))
            {
                link += "&SiteName=" + SiteName;
            }
        }


        StringBuilder sb = new StringBuilder("<meta charset='utf-8'>");

        sb.Append("<div style=\"padding:15px;\">"
        + "<div style=\"width:850px;border:1px solid #3B3745;\">"
        + "<div style=\"padding:26px 27px 20px;background:lightgray;overflow:hidden;\">"
        + "<!--로고 이미지 링크 확인 및 변경필요-->"
        + "<h1 style=\"float:left;\"><img src=\" " + url + "/images/front/h1_logo.png\" alt=\"88global\"></h1>"
        + "</div>"
        + ""
        + "<div style=\"padding:65px 35px \">"
        + "<div style='text-align:center;'>"
        + "<p style='font-size:18px;'> 계정의 비밀번호의 재설정 요청이 접수되었습니다.</p>"
        + "<p>비밀번호 재설정을 요청하셨다면 아래 버튼을 누르세요.</p>"
        + "<a style='text-decoration:none;' href='" + link + "'>"
        + "<strong style='color:#3B3745'>[ 비밀번호 재설정 ]</strong>"
        + "</a>"
        + "</div>"
        + "</div>"
        + "<div style=\"position:relative;overflow:hidden;padding:40px 37px;border-top:1px dotted #e9e9e9;background:#f9f9f9;\">"
        + ""
        + "<div style=\"font-size:11px;\">"
        //+ "<p>TEL:1661-1728 서울특별시 영등포구 선유로 49길 23 아이에스비즈타워 2차 504호</p>"
        //+ "<p>COPYRIGHT (c) 2016 INPAY.CO.KR,. ALL RIGHT RESERVED</p>"
        + "</div>"
        + "</div>"
        + "</div>"
        + "</div>");

        string senderAddr = "service@88global.co.kr";
        string senderName = "K-TREND";
        string subject = "K-TREND 인증번호 안내 입니다.";
        string retMessage = mailKey;
        try
        {

            MailMessage m = new MailMessage();
            m.From = new MailAddress(senderAddr, senderName, System.Text.Encoding.UTF8);
            m.To.Add(mailAddr);
            m.Subject = subject;
            m.Body = sb.ToString();
            m.IsBodyHtml = true;
            m.SubjectEncoding = System.Text.Encoding.Default;
            m.BodyEncoding = System.Text.Encoding.Default;
            m.IsBodyHtml = true;

            SmtpClient smtp = new SmtpClient();
            //smtp.Host=GetServerIp;
            smtp.Host = "121.78.119.28";
            smtp.Port = 25;
            smtp.UseDefaultCredentials = true;
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
            smtp.Send(m);
            retMessage = "입력하신 이메일 주소로 인증메일이 전송되었습니다.";

        }
        catch (Exception ex)
        {
            retMessage = "메일발송에 실패하였습니다. 관리자에게 문의하여주시기 바랍니다.";
            //retMessage=ex.Message;
        }
        return retMessage;
    }


    /// <summary>
    /// 임의의 영문 대,소문자 숫자조합
    /// </summary>
    /// <returns>이메일 인증번호 및 임시 비밀번호</returns>
    private string makeKey()
    {
        string password = string.Empty;
        string[] big = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z" };
        string[] small = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z" };
        string[] number = { "1", "2", "3", "4", "5", "6", "7", "8", "9", "0" };


        Random nalpabet = new Random();
        Random nnumber = new Random();
        Random nspecial = new Random();

        int length = 0;
        while (length != 15)
        {
            int flag = nalpabet.Next(1, 13);
            while (flag > 3)
            {
                flag -= 3;
            }
            if (flag == 1)
            {
                password += big[nalpabet.Next(0, 24)];
            }
            else if (flag == 2)
            {
                password += small[nalpabet.Next(0, 24)];
            }
            else if (flag == 3)
            {
                password += number[nnumber.Next(0, 9)];
            }
            length++;
        }
        return password;
    }

}
