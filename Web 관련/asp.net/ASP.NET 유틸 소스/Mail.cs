using System;
using System.Text;
using System.Net.Mail;
using System.Configuration;

namespace WebSite.Common
{
    public class Mail
    {
        public static string mailKey { get; set; }
        /// <summary>
        /// 이메일 인증번호, 임시비밀번호 발송 
        /// </summary>
        /// <param name="mailAddr">받는사람메일주소</param>
        /// <returns>메일발송 결과</returns>
        public string SendMail(string mailAddr, string CODE, string MemberID, string div, string SiteName, string adminDiv)
        {

            mailKey = makeKey();
            string MailUrl = ConfigurationManager.AppSettings["MailUrl"]; ;
             string aMailUrl = ConfigurationManager.AppSettings["aMailUrl"]; ;
            string link = "http://"+ MailUrl + "/Account/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID + "";

            if ("MOBILE".Equals(div))
            {
                link = "http://"+ MailUrl + "/M/Account/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID + "";
            }
            else if ("ADMIN".Equals(div))
            {
                link = "http://"+ aMailUrl + "/" + adminDiv + "/Account/PwReSetView?CODE=" + CODE + "&KEY=" + mailKey + "&MemberID=" + MemberID;

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
            + "<h1 style=\"float:left;\"><img src=\"http://inpay.co.kr/images/index/h_logo.png\" alt=\"INPAY\"></h1>"
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
            + "<p>TEL:1661-1728 서울특별시 영등포구 선유로 49길 23 아이에스비즈타워 2차 504호</p>"
            + "<p>COPYRIGHT (c) 2016 INPAY.CO.KR,. ALL RIGHT RESERVED</p>"
            + "</div>"
            + "</div>"
            + "</div>"
            + "</div>");

            string senderAddr = "service@inpay.co.kr";
            string senderName = "INPAY";
            string subject = "INPAY 인증번호 안내 입니다.";
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
                //smtp.Host = GetServerIp;
                smtp.Host = "211.233.58.54";
                smtp.Port = 25;
                smtp.UseDefaultCredentials = true;
                smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                smtp.Send(m);

            }
            catch (Exception)
            {
                retMessage = "메일발송에 실패하였습니다. 관리자에게 문의하여주시기 바랍니다.";
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
}