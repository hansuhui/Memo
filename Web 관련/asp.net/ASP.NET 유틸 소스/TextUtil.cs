using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;

namespace WebSite.Common
{
    public static class TextUtil
    {
        // Html Tag Regex Patterns
        public static readonly string TagContentsRegexPattern = @"(?:[^\>\""\']*(?:\""[^\""]*\""|\'[^\']*\')?)*";
        public static readonly string CommentContentsRegexPattern = @"\!\-\-.*?\-\-";
        public static readonly string CDataContentsRegexPattern = @"\!\[CDATA\[.*?\]\]";
        public static readonly string HtmlTagCommentOrCDataRegexPattenr = @"\<(?:" + CommentContentsRegexPattern
                                                                        + "|" + CDataContentsRegexPattern
                                                                        + "|" + TagContentsRegexPattern + @")\>";
        public static Regex FindTagRegex = new Regex(HtmlTagCommentOrCDataRegexPattenr, RegexOptions.Multiline | RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.ExplicitCapture);

        public static string CareateHtmlSummary(string s, int maximumLength, bool appendEllipse)
        {

            string result;

            if (s == null)
                result = null;
            else if (s.Length == 0 || maximumLength <= 0)
                result = "";
            else
            {
                // Removes Tags...
                result = StripTags(s);

                // Nomalize Whitespace...
                result = NormalizeWhitespace(result);

                if (result.Length > maximumLength)
                {
                    int truncateLen = maximumLength;

                    //
                    // Find the last position of the "&" and ";"
                    // if the last ";" is not after the last "&"
                    // then we have split and entity and nees to truncate
                    // before the "&"...
                    ///

                    int lastAmpersandPosition = result.LastIndexOf('&', truncateLen - 1);

                    if (lastAmpersandPosition != -1)
                    {
                        int lastSemicolonPosition = result.LastIndexOf(';', truncateLen - 1);

                        if (lastSemicolonPosition < lastAmpersandPosition)
                            truncateLen = lastAmpersandPosition;
                    }

                    // Locate the last space and truncate there so we don't
                    // split words...
                    if (truncateLen > 0 && result[truncateLen] != ' ')
                    {
                        int spacePosition = result.LastIndexOf(' ', truncateLen);

                        if (spacePosition > 0)
                            truncateLen = spacePosition;
                    }

                    result = result.Substring(0, truncateLen);

                    // Append ellipse, if needed...
                    if (appendEllipse)
                        result += "...";
                }
            }

            return result;
        }

        public static string NormalizeWhitespace(string s)
        {
            string result;

            if (s == null)
                result = null;
            else if (s.Length == 0)
                result = "";
            else
            {
                int startPos = 0;

                // Trim initial whitespace
                while (startPos < s.Length && char.IsWhiteSpace(s[startPos]))
                {
                    startPos++;
                }

                if (startPos == s.Length)
                    result = "";
                else
                {
                    int firstNonWhitespaceCharacter = startPos;

                    while (startPos < s.Length && !char.IsWhiteSpace(s[startPos]))
                    {
                        startPos++;
                    }

                    if (startPos == s.Length)
                    {
                        if (firstNonWhitespaceCharacter == 0)
                            result = s;
                        else
                            result = s.Substring(firstNonWhitespaceCharacter);
                    }
                    else
                    {
                        bool haveSeenWitespace = true;
                        char c;
                        StringBuilder sb = new StringBuilder(s.Length - startPos);

                        sb.Append(s, firstNonWhitespaceCharacter, startPos - firstNonWhitespaceCharacter);

                        for (int i = startPos + 1; i < s.Length; i++)
                        {
                            c = s[i];

                            if (char.IsWhiteSpace(c) && !haveSeenWitespace)
                            {
                                haveSeenWitespace = true;
                            }
                            else
                            {
                                if (haveSeenWitespace)
                                {
                                    sb.Append(' ');
                                    haveSeenWitespace = false;
                                }

                                sb.Append(c);
                            }
                        }

                        result = sb.ToString();
                    }
                }
            }

            return result;
        }

        public static string StripTags(string s)
        {
            if (s == null)
                return null;
            else
                return FindTagRegex.Replace(s, string.Empty);
        }

        /// <summary>
        /// 사용예 StripTagsAndNormalize(TextBox1.Text);
        /// </summary>
        /// <param name="s">문자</param>
        /// <returns>html을 제거한 내용</returns>
        public static string StripTagsAndNormalize(string s)
        {
            return NormalizeWhitespace(StripTags(s));
        }


        #region 글제목 변환 (IN)
        public static string titleReplaceInput(string strValue)
        {
            string str = strValue;

            if (!string.IsNullOrEmpty(str))
            {
                str = str.Replace(">", "&gt;");
                str = str.Replace("<", "&lt;");
                str = str.Replace("\"", "&quot;");
                str = str.Replace("\'", "&#39;");
                str = str.Replace("--", "&#45;&#45;");
                str = str.Replace(@"\", "&#92;");
            }

            return str;
        }

        public static string titleReplaceInputBr(string strValue)
        {
            string str = strValue;

            if (!string.IsNullOrEmpty(str))
            {
                str = titleReplaceInput(str);
                str = str.Replace("\n", "<br />");
            }

            return str;
        }
        #endregion

        #region 글제목 변환 (OUT)
        public static string titleReplaceOutput(string strValue)
        {
            string str = strValue;

            if (!string.IsNullOrEmpty(str))
            {
                str = str.Replace("&gt;", ">");
                str = str.Replace("&lt;", "<");
                str = str.Replace("&quot;", "\"");
                str = str.Replace("&apos;", "\'");
                str = str.Replace("&#39;", "\'");
                str = str.Replace("&#45;&#45;", "--");
                str = str.Replace("&#92;", @"\");

                str = str.Replace("??", "");
                str = str.Replace(">?<", "");
                str = str.Replace("> ? <", "");
                str = str.Replace("> ?<", "");
                str = str.Replace(">? <", "");
            }

            return str;
        }

        public static string titleReplaceOutputBr(string strValue)
        {
            string str = strValue;

            if (!string.IsNullOrEmpty(str))
            {
                str = titleReplaceOutput(str);
                str = str.Replace("<br>", "\n");
                str = str.Replace("<br/>", "\n");
                str = str.Replace("<br />", "\n");
            }

            return str;
        }
        #endregion

        #region 전화번호
        /// <summary>
        /// 전화번호
        /// </summary>
        /// <param name="pTel">현재전화번호</param>
        /// <returns></returns>
        public static string GetTelPrefixAll(string pTel)
        {
            StringBuilder sb = new StringBuilder();
            string[] tel = { "02", "031", "032", "033", "041", "042", "043", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070", "010", "011", "016", "017", "018", "019", "013", "0505" };

            for (int i = 0; i < tel.Length; i++)
            {
                if (tel[i] == pTel)
                    sb.Append("<option value='" + tel[i] + "' selected>" + tel[i] + "</option>");
                else
                    sb.Append("<option value='" + tel[i] + "'>" + tel[i] + "</option>");

            }

            return sb.ToString();
        }


        public static string GetTelPrefix(string pTel)
        {
            StringBuilder sb = new StringBuilder();
            string[] tel = { "02", "031", "032", "033", "041", "042", "043", "051", "052", "053", "054", "055", "061", "062", "063", "064", "070", "0505" };

            for (int i = 0; i < tel.Length; i++)
            {
                if (tel[i] == pTel)
                    sb.Append("<option value='" + tel[i] + "' selected>" + tel[i] + "</option>");
                else
                    sb.Append("<option value='" + tel[i] + "'>" + tel[i] + "</option>");

            }

            return sb.ToString();
        }


        /// <summary>
        /// 전화국번 서버컨트롤
        /// </summary>
        /// <param name="pId"><컨트롤 아이디/param>
        /// <param name="pSelectValue">선택값</param>
        /// <param name="pAutoPostback">onChange</param>
        /// <param name="pDefaultTitle">초기표시항목</param>
        /// <returns></returns>
        public static void GetTelPrefix(string pId, string pSelectValue, bool pAutoPostback, string pDefaultTitle)
        {

            //DropDownList ddlist = new DropDownList();
            //ddlist.ID = pId;
            //ddlist.EnableViewState = true;

            //if (!string.IsNullOrEmpty(pDefaultTitle))
            //	ddlist.Items.Add(new ListItem(pDefaultTitle, ""));

            //ddlist.Items.Add(new ListItem("02 (서울)", "02"));
            //ddlist.Items.Add(new ListItem("031 (경기)", "031"));
            //ddlist.Items.Add(new ListItem("032 (인천)", "032"));
            //ddlist.Items.Add(new ListItem("033 (강원)", "033"));
            //ddlist.Items.Add(new ListItem("041 (충남)", "041"));
            //ddlist.Items.Add(new ListItem("042 (대전)", "042"));
            //ddlist.Items.Add(new ListItem("043 (충북)", "043"));
            //ddlist.Items.Add(new ListItem("051 (부산)", "051"));
            //ddlist.Items.Add(new ListItem("052 (울산)", "052"));
            //ddlist.Items.Add(new ListItem("053 (대구)", "053"));
            //ddlist.Items.Add(new ListItem("054 (경북)", "054"));
            //ddlist.Items.Add(new ListItem("055 (경남)", "055"));
            //ddlist.Items.Add(new ListItem("061 (전남)", "061"));
            //ddlist.Items.Add(new ListItem("062 (광주)", "062"));
            //ddlist.Items.Add(new ListItem("063 (전북)", "063"));
            //ddlist.Items.Add(new ListItem("064 (제주)", "064"));


            //if (!string.IsNullOrEmpty(pSelectValue))
            //	ddlist.SelectedValue = pSelectValue;

            //if (pAutoPostback)
            //	ddlist.AutoPostBack = true;

            //return ddlist;
        }
        #endregion

        #region 핸드폰번호
        public static string GetCelPrefix(string pCel)
        {
            StringBuilder sb = new StringBuilder();
            string[] cel = { "010", "011", "017", "016", "018", "019", "013" };

            for (int i = 0; i < cel.Length; i++)
            {
                if (cel[i] == pCel)
                    sb.Append("<option value='" + cel[i] + "' selected>" + cel[i] + "</option>");
                else
                    sb.Append("<option value='" + cel[i] + "'>" + cel[i] + "</option>");
            }

            return sb.ToString();
        }
        #endregion

        #region 팩스번호
        public static string GetFaxPrefix(string pFax)
        {
            StringBuilder sb = new StringBuilder();
            string[] fax = { "02", "031", "032", "033", "041", "042", "043", "051", "052", "053", "054", "055", "061", "062", "063", "064" };

            for (int i = 0; i < fax.Length; i++)
            {
                if (fax[i] == pFax)
                    sb.Append("<option value='" + fax[i] + "' selected>" + fax[i] + "</option>");
                else
                    sb.Append("<option value='" + fax[i] + "'>" + fax[i] + "</option>");

            }

            return sb.ToString();
        }
        #endregion

        #region 이메일
        public static string GetEmail(string pEmail)
        {
            StringBuilder sb = new StringBuilder();
            string[] email = { "hanmail.net", "chol.com", "dreamwiz.com", "empal.com", "freechal.com", "gmail.com", "hanafos.com", "hanmir.com", "hitel.net", "hotmail.com", "korea.com", "lycos.co.kr", "nate.com", "naver.com", "netian.com", "paran.com", "yahoo.com", "yahoo.co.kr" };
            string select = string.Empty;

            foreach (string s in email)
            {
                if (s.Equals(pEmail))
                    select = "selected";
                else
                    select = string.Empty;

                sb.AppendFormat("<option value=\"{0}\" {1}>{0}</option>", s, select);
            }

            return sb.ToString();
        }
        #endregion

        #region 문자열 길이 자름
        /// <summary>
        /// 문자열 길이 자름
        /// </summary>
        /// <param name="pTitle">상품명</param>
        /// <param name="length">자를 길이</param>
        /// <returns>String</returns>
        public static string GetTitleLimit(string pTitle, int length)
        {
            string temp = string.Empty;

            if (!string.IsNullOrEmpty(pTitle) && pTitle.Length > length)
                temp = pTitle.Substring(0, length);
            else
                temp = pTitle;

            return temp;
        }
        #endregion

        #region %계산후 절사
        /// <summary>
        /// 자리수 만큼 금액 절사
        /// </summary>
        /// <param name="pPrice">금액</param>
        /// <param name="pRate">할인율</param>
        /// <param name="number">절사 자리수</param>
        /// <returns>금애</returns>
        public static int GetUnitTruncate(int pPrice, float pRate, int number)
        {
            int price = 0;
            int truncateAmount = 0;


            switch (number)
            {
                case 1:
                    truncateAmount = 10;
                    break;
                case 2:
                    truncateAmount = 100;
                    break;
                case 3:
                    truncateAmount = 1000;
                    break;
                case 4:
                    truncateAmount = 10000;
                    break;
                case 5:
                    truncateAmount = 100000;
                    break;
            }

            price = Convert.ToInt32(pPrice * (pRate / 100));
            if (number > 0)
                price = (price / truncateAmount) * truncateAmount;

            return price;
        }
        #endregion

        #region 숫자(,) 스트링반환
        /// <summary>
        /// 콤마삽입
        /// </summary>
        /// <param name="pNumber">숫자 형태</param>
        /// <returns>콤마 삽입된 숫자 스트링</returns>
        public static string GetCommaString(object pNumber)
        {
            int iNumber = 0;

            if (pNumber == null)
                return "0";

            iNumber = Convert.ToInt32(pNumber);

            return string.Format("{0:N0}", iNumber);
        }
        #endregion

        #region %마진율 계산후 절사
        /// <summary>
        /// 자리수 만큼 금액 절사
        /// </summary>
        /// <param name="pPrice">금액</param>
        /// <param name="pRate">할인율</param>
        /// <param name="number">절사 자리수</param>
        /// <returns>금애</returns>
        public static int GetProfitTruncate(int pPdtCost, int pdtSalePrice, int number)
        {
            int price = 0;
            int truncateAmount = 0;


            switch (number)
            {
                case 1:
                    truncateAmount = 10;
                    break;
                case 2:
                    truncateAmount = 100;
                    break;
                case 3:
                    truncateAmount = 1000;
                    break;
                case 4:
                    truncateAmount = 10000;
                    break;
                case 5:
                    truncateAmount = 100000;
                    break;
            }

            price = pdtSalePrice - pPdtCost;
            price = (price / truncateAmount) * truncateAmount;

            return price;
        }
        #endregion

        #region 파읽을 읽어들여 안의 내용을 반환한다.
        /// <summary>
        /// 파일의 내용을 string 반환
        /// </summary>
        /// <param name="pFilePath">도메인포함한 파일경로</param>
        /// <returns>string</returns>
        public static string GetReadFileText(string pFilePath)
        {
            string text = string.Empty;

            System.Net.WebClient client = new System.Net.WebClient();
            Stream strm = null;
            StreamReader objReader = null;

            try
            {
                strm = client.OpenRead(pFilePath);
                objReader = new StreamReader(strm, System.Text.Encoding.Default);
                text = objReader.ReadToEnd();

                return text;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                objReader.Close();
                objReader.Dispose();

                strm.Close();
                strm.Dispose();

                client.Dispose();
            }
        }
        #endregion

        public static string GetRangeNumbers(int startNumber, int endNumber, string currNumber)
        {
            StringBuilder sb = new StringBuilder();
            string temp = string.Empty;
            string selected = string.Empty;

            for (int i = startNumber; i <= endNumber; i++)
            {
                temp = i.ToString();
                if (temp.Length < 2)
                    temp = "0" + temp;

                if (temp.Equals(currNumber))
                    selected = "selected";
                else
                    selected = string.Empty;

                sb.AppendFormat("<option value=\"{0}\" {1}>{0}</option>\n", temp, selected);
            }

            return sb.ToString();
        }

        public static string GetRangeNumbersReverse(int startNumber, int endNumber, string currNumber)
        {
            StringBuilder sb = new StringBuilder();
            string temp = string.Empty;
            string selected = string.Empty;

            for (int i = startNumber + endNumber; i >= startNumber; i--)
            {
                temp = i.ToString();
                if (temp.Length < 2)
                    temp = "0" + temp;

                if (temp.Equals(currNumber))
                    selected = "selected";
                else
                    selected = string.Empty;

                sb.AppendFormat("<option value=\"{0}\" {1}>{0}</option>\n", temp, selected);
            }

            return sb.ToString();
        }

        #region 문자에 *표시
        /// <summary>
        /// 아이디에 * 표시
        /// </summary>
        /// <returns></returns>
        public static string GetStarString(int pStartLength, string pString)
        {
            string value = pString.Substring(0, pStartLength);

            for (int i = 1; i <= (pString.Length - pStartLength); i++)
            {
                value += "*";
            }

            return value;
        }
        #endregion

        public static string[] GetImageTag(string strtext)
        {
            string[] images;

            if (!string.IsNullOrEmpty(strtext))
            {

                // Html Tag Regex Patterns
                string imgTagRegexPattern = "src=(?:\"|\')?(?<imgSrc>[^>]*[^/].(?:jpg|bmp|gif|png))(?:\"|\')?";

                Regex FindTagRegex = new Regex(imgTagRegexPattern, RegexOptions.Multiline | RegexOptions.Singleline | RegexOptions.Compiled | RegexOptions.ExplicitCapture | RegexOptions.IgnoreCase);
                images = FindTagRegex.Split(strtext);

            }
            else
            {
                images = new string[1];
            }

            return images;
        }

        #region 서버의 유일한 이름 반환
        public static string GetFileName(string serverSavePath, string pFileName)
        {
            // 파일명
            string fileName = Path.Combine(serverSavePath, pFileName);
            string tempFileName = Path.GetFileName(fileName);
            // 확장자를 제거한 파일명
            string tempFileName2 = Path.GetFileNameWithoutExtension(fileName);
            // 확장자
            string ext = Path.GetExtension(fileName);


            // 유일한 이름 생성
            bool flag = true;
            int i = 1;
            while (flag)
            {

                if (ExistFile(Path.Combine(serverSavePath, tempFileName)))
                {
                    tempFileName = tempFileName2 + "_" + i.ToString() + ext;
                }
                else
                {
                    flag = false;
                }

                i++;
            }

            fileName = tempFileName;

            return fileName;
        }
        #endregion

        #region 파일 존재여부
        private static bool ExistFile(string serverSavePath)
        {
            return File.Exists(serverSavePath);
        }
        #endregion

        #region 파일삭제
        public static void DeleteFile(string path)
        {
            if (ExistFile(path))
                File.Delete(path);
        }
        #endregion

        #region 경로를 포함한 텍스트에서 파일명만 반환
        public static string getOnlyFileName(string fileName)
        {
            string temp;

            if (string.IsNullOrEmpty(fileName))
                return "";

            int len = fileName.LastIndexOf("/");

            if (len < 0)
                temp = fileName;
            else
            {
                len = len + 1;
                temp = fileName.Substring(len, fileName.Length - len);
            }

            return temp;
        }
        #endregion

        #region 파일 확장자 이미지 반환
        public static string getExtensionImage(string ext)
        {
            string temp = string.Empty;

            if (!string.IsNullOrEmpty(ext))
            {
                temp = ext.Replace(".", "") + ".gif";

                if (!ExistFile(HttpContext.Current.Server.MapPath("/images/icon/" + temp)))
                    temp = "etc.gif";

                temp = string.Format("<img src=\"/images/icon/{0}\" alt=\"\" />", temp);
            }

            return temp;
        }
        #endregion

        #region Alert JavaScript
        /// <summary>
        /// 조건에 따른 메세지 출력
        /// AlertErrorMsg("잘못된 경로 입니다.", "", "1")
        /// </summary>
        /// <param name="strErr">에러 내용</param>
        /// <param name="strGoUrl">이동할 페이지</param>
        /// <param name="strMode">1:히스토리백, 2: url이동, 3:창닫기, 4 : 경고만</param>
        /// <returns></returns>
        public static string jsAlertErrorMsg(string strErr, string strGoUrl, string strMode)
        {
            string script = string.Empty;
            script += "<script language='javascript'>";

            if (!string.IsNullOrEmpty(strErr))
                script += " alert('" + strErr + "'); ";

            switch (strMode)
            {
                case "1":
                    script += " history.back(-1); ";
                    break;
                case "2":
                    script += " location.href='" + strGoUrl + "'; ";
                    break;
                case "3":
                    script += " window.close(); ";
                    break;
            }
            script += "</script>";

            return script;
        }
        #endregion

        #region 자바스크립트 confirm
        public static string jsConfirm(string pMessage, string pGoUrl)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<script>");
            sb.Append("	if (confirm('" + pMessage + "')) ");
            sb.Append("		location.href='" + pGoUrl + "'; ");
            sb.Append("</script>");

            return sb.ToString();
        }
        #endregion

        #region 카드번호
        public static string GetCard(string cardno)
        {
            string temp = string.Empty;

            if (cardno.Length == 16)
                temp = cardno.Substring(0, 4) + "-" + cardno.Substring(4, 4) + "-" + cardno.Substring(8, 4) + "-" + cardno.Substring(12, 4);
            else
                temp = cardno;

            return temp;
        }
        #endregion


        #region 은행계좌 가리기
        public static string BankNoUpt(string BankNo)
        {
            string temp = string.Empty;


            if (BankNo.Length > 4)
            {
                temp = BankNo.Substring(0, BankNo.Length - 4) + ForString(4, "*");
            }
            else
            {
                temp = ForString(4, "*");
            }
            return temp;
        }

        //이건꺼
        public static string BankNoUpt_pre(string BankNo)
        {
            string temp = string.Empty;
            if (BankNo.Split('-').Count() == 1)
            {
                temp = ForString(BankNo.Length, "*");
            }
            else
            {
                int i = 0;
                int Count = BankNo.Split('-').Count();
                foreach (var No in BankNo.Split('-'))
                {
                    i++;
                    if (Count == i)
                    {
                        temp += ForString(No.Length, "*");
                    }
                    else
                    {
                        temp += No + "-";
                    }
                }
            }
            return temp;
        }

        static string ForString(int num, string temp)
        {
            string tmp = "";
            for (int i = 0; i < num; i++) { tmp += temp; }
            return tmp;
        }

        #endregion

        #region Role별 Url 변경
        public static string GetMenuUrl(string[] Path, string[] MenuURL, string SMenuURL)
        {

            if (string.IsNullOrEmpty(SMenuURL)) { return SMenuURL; }

            string Url = "";
            MenuURL[1] = Path[1];

            foreach (var urlSet in MenuURL)
            {
                Url += urlSet + "/";
            }
            Url = Url.Substring(0, Url.Length - 1);

            return Url;

        }

        #endregion
    }
}