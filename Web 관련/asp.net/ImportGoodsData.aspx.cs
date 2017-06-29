using System;
using System.Configuration;
using System.Collections.Generic;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

using Innobit.BusinessEntitys.Product;
using Innobit.BusinessLayer.Product;

public partial class _admin_product_ImportGoodsData : AdminBase
{
	private string _filePath = string.Empty;
	private string _vcode = string.Empty;

	protected void Page_Load(object sender, EventArgs e)
	{

	}

	#region csv, excel 파일 업로드
	protected void btnRegist_Click(object sender, EventArgs e)
	{
		if (FileUpload1.PostedFile.ContentLength > 0)
		{
			_filePath = Path.Combine(Server.MapPath("/"), Config.UserDataRoot);

			string ext = Path.GetExtension(FileUpload1.PostedFile.FileName);
			string fileName = Path.GetFileName(FileUpload1.PostedFile.FileName);

			// ## 서버에 파일 저장
			string fileFullPath = Path.Combine(_filePath, fileName);

			try
			{
				FileUpload1.PostedFile.SaveAs(fileFullPath);
			}
			catch (Exception ex)
			{
				throw ex;
			}


			if (_AGubun.Equals("vender"))
			{
				_vcode = _ACode;
			}

			// ## 상품파일 insert
			ProductImportBLL import = new ProductImportBLL();
			string strErrorMsg = string.Empty;

			string path = Path.Combine( Server.MapPath("/"), Config.ProductThum);


			ProductImportEntity prod = new ProductImportEntity();
			prod.Domain = Config.ThumPath;
			prod.Path = path;
			prod.FilePath = fileFullPath;
			prod.VenderCode = _vcode;
			prod.ImportFileType = ext;

			
			switch (prod.ImportFileType)
			{
				case ".csv":
					strErrorMsg = import.RegistCSV(prod);
					break;
				default :
					strErrorMsg = import.RegistExcel(prod);
					break;
			}

			lblErrorMessage.Text = strErrorMsg;
		}
	}
	#endregion

	#region 브랜드코드다운
	protected void btnBrand_Click(object sender, EventArgs e)
	{
		Response.Clear();

		//엑셀로 파일...
		Response.ContentType = "data/Excel/vnd.ms-excel";
		Response.AddHeader("Content-Disposition", "attachment;fileName=" + "Brand.xls");
		Response.Charset = "";
		System.Web.HttpContext.Current.Response.Write("<meta http-equiv=Content-Type content=''text/html; charset=utf-8''>");

		StringWriter tw = new StringWriter();
		HtmlTextWriter hw = new HtmlTextWriter(tw);
		BrandBLL branbll = new BrandBLL();

		//Label1.Text = branbll.BrandToExcel();

		Label1.RenderControl(hw);
		Response.Write(tw.ToString());
		Response.End();
	}
	#endregion

	#region 메이커코드다운
	protected void btnMaker_Click(object sender, EventArgs e)
	{
		Response.Clear();

		//엑셀로 파일...
		Response.ContentType = "data/Excel/vnd.ms-excel";
		Response.AddHeader("Content-Disposition", "attachment;fileName=" + "Maker.xls");
		Response.Charset = "";
		System.Web.HttpContext.Current.Response.Write("<meta http-equiv=Content-Type content=''text/html; charset=utf-8''>");

		System.IO.StringWriter tw = new System.IO.StringWriter();
		System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);

		MakerBLL mkbll = new MakerBLL();

		//Label1.Text = mkbll.MakerToExcel();

		Label1.RenderControl(hw);
		Response.Write(tw.ToString());
		Response.End();
	}
	#endregion

	#region 카테고리표다운
	protected void btnCategory_Click(object sender, EventArgs e)
	{
		Response.Clear();

		//엑셀로 파일...
		Response.ContentType = "data/Excel/vnd.ms-excel";
		Response.AddHeader("Content-Disposition", "attachment;fileName=" + "Category.xls");
		Response.Charset = "";
		System.Web.HttpContext.Current.Response.Write("<meta http-equiv=Content-Type content=''text/html; charset=utf-8''>");

		System.IO.StringWriter tw = new System.IO.StringWriter();
		System.Web.UI.HtmlTextWriter hw = new System.Web.UI.HtmlTextWriter(tw);

		CategoryAdminBLL pcg = new CategoryAdminBLL();
		Label1.Text = pcg.GetCategoryExcel();

		Label1.RenderControl(hw);
		Response.Write(tw.ToString());
		Response.End();
	}
	#endregion
}
