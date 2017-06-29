using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.OleDb;
using System.IO;
using Microsoft.VisualBasic.FileIO;
using System.Web;

using Innobit.DataaccessLayer.Product;
using Innobit.BusinessEntitys.Product;
using Innobit.BusinessLayer.Admin;
using Innobit.BusinessEntitys.Admin;
using oBo.Util;

namespace Innobit.BusinessLayer.Product
{
	public class ProductImportBLL
	{
		// 객체
		private ProductEntity pdt;
		private VenderEntity vender;

		//private MakerBLL maker;
		private VenderBLL vd;
		private ProductAdminBLL prodAdmin;
		private CategoryAdminBLL category;
		private DeliveryInfoBLL deli;

		// 멤버변수
		private string venderID = string.Empty;

		public ProductImportBLL()
		{
			pdt = new ProductEntity();
			vender = new VenderEntity();

			vd = new VenderBLL();
			prodAdmin = new ProductAdminBLL();
			category = new CategoryAdminBLL();
			deli = new DeliveryInfoBLL();
		}

		#region Import CSV
		public string RegistCSV(ProductImportEntity pImport)
		{
			string msg = string.Empty;

			if (File.Exists(pImport.FilePath))
			{
				TextFieldParser ps = new TextFieldParser(pImport.FilePath, System.Text.Encoding.GetEncoding("EUC-kR"));

				using (ps)
				{
					// ','구분자로 자르도록 설정
					ps.TextFieldType = FieldType.Delimited;
					ps.SetDelimiters(",");
					int i = 0;

					while (!ps.EndOfData)
					{
						string[] arrImport = ps.ReadFields();
						venderID = string.Empty;

						if (arrImport[1] != "")
						{
							if (i > 0)
							{
								// 해당 라인의 값 가져오기
								pdt.Ctg = new CategoryEntity();
								pdt.Ctg.CtgIDX = arrImport[0].Trim();
								pdt.PdtTitle = arrImport[1].Trim();
								pdt.PdtMaker = arrImport[2].Trim();
								if (pImport.VenderCode == "")
									pdt.VenderCode = arrImport[3].Trim();
								else
									pdt.VenderCode = pImport.VenderCode;

								// 배더사 아이디
								venderID = vd.GetVenderID(pdt.VenderCode);

								pdt.BrandCode = arrImport[4].Trim();
								pdt.PdtSearchWord = arrImport[5].Trim();
								pdt.PdtStock = Convert.ToInt32(arrImport[6].Trim());
								pdt.IsTaxBill = arrImport[7].Trim();
								pdt.isCashReceipt = (string.IsNullOrEmpty(arrImport[8])) ? "0" : arrImport[8].Trim();
								pdt.PdtCost = (string.IsNullOrEmpty(arrImport[9])) ? 0 : Convert.ToInt32(arrImport[9].Replace(",", ""));
								pdt.PdtPrice = (string.IsNullOrEmpty(arrImport[11])) ? 0 : Convert.ToInt32(arrImport[11].Replace(",", ""));
								pdt.pdtSalePrice = (string.IsNullOrEmpty(arrImport[13])) ? 0 : Convert.ToInt32(arrImport[13].Replace(",", ""));

								//마진율계산
								pdt.PdtProfitRate = (Convert.ToSingle((pdt.pdtSalePrice - pdt.PdtCost)) / pdt.pdtSalePrice) * 100;

								//할인율계산
								if (pdt.PdtPrice > 0)
									pdt.PdtRate = (Convert.ToSingle((pdt.PdtPrice - pdt.pdtSalePrice)) / pdt.PdtPrice) * 100;

								if (arrImport[14] == "*")
									pdt.PdtStockQty = "00";
								else
									pdt.PdtStockQty = (string.IsNullOrEmpty(arrImport[14])) ? "00" : arrImport[14];


								//배송비설정부분
								if (string.IsNullOrEmpty(arrImport[15]))
								{
									pdt.PdtExType = "1";
									pdt.SentCode = deli.GetDeliveryCode(pdt.VenderCode);
								}

								if (arrImport[15] == "0")
								{
									pdt.PdtExType = "0";
									pdt.SentCode = "35";
								}

								if (arrImport[15] == "1")
								{
									pdt.PdtExType = "1";
									pdt.SentCode = deli.GetDeliveryCode(pdt.VenderCode);
								}

								if (arrImport[15] == "2")
								{
									pdt.PdtExType = "2";
									pdt.SentCode = "9999";

									pdt.DefaultCost = (string.IsNullOrEmpty(arrImport[16])) ? 0 : Convert.ToInt32(arrImport[16].Replace(",", ""));
									pdt.DeliVeryType = arrImport[17];
									pdt.MinCost = (string.IsNullOrEmpty(arrImport[18])) ? 0 : Convert.ToInt32(arrImport[18].Replace(",", ""));
									pdt.ConCost = (string.IsNullOrEmpty(arrImport[19])) ? 0 : Convert.ToInt32(arrImport[19].Replace(",", ""));
									pdt.ReType1 = (string.IsNullOrEmpty(arrImport[20])) ? "1" : arrImport[20];
									pdt.ReType2 = (string.IsNullOrEmpty(arrImport[21])) ? "" : arrImport[21];
									pdt.ReCost = (string.IsNullOrEmpty(arrImport[22])) ? 0 : Convert.ToInt32(arrImport[22].Replace(",", ""));
									pdt.ChaCost = (string.IsNullOrEmpty(arrImport[23])) ? 0 : Convert.ToInt32(arrImport[23].Replace(",", ""));
								}

								///////////////////////////////////////

								pdt.BatchSent = arrImport[24];
								pdt.BatchQty = (string.IsNullOrEmpty(arrImport[25])) ? 0 : Convert.ToInt32(arrImport[25]);
								pdt.PdtDescription = arrImport[26].Trim();
								pdt.PdtContent = arrImport[27].Trim();
								pdt.PdtImgZoom = arrImport[28].Trim();
								pdt.PdtImg1 = arrImport[29].Trim();
								pdt.PdtImg2 = arrImport[30].Trim();
								pdt.PdtImg3 = arrImport[31].Trim();

								pdt.Options = arrImport[32].Trim();
								pdt.PdtIsSale = (string.IsNullOrEmpty(arrImport[33])) ? 1 : Convert.ToInt32(arrImport[33]);
								pdt.PdtCode2 = (string.IsNullOrEmpty(arrImport[34])) ? "" : arrImport[34].Trim();
								pdt.IsPdtImageLink = (string.IsNullOrEmpty(arrImport[35])) ? "0" : arrImport[35];
								pdt.PdtImageUrl = (string.IsNullOrEmpty(arrImport[36])) ? "" : arrImport[36];

								if (arrImport[37] == "1")
									pdt.TaxCode = "01";

								if (arrImport[37] == "2")
									pdt.TaxCode = "02";

								if (arrImport[37] == "3")
									pdt.TaxCode = "03";

								pdt.PdtPrimeCost = (string.IsNullOrEmpty(arrImport[38])) ? pdt.PdtCost : Convert.ToInt32(arrImport[38].Replace(",", ""));
								pdt.PdtAddition = arrImport[39].Trim();
								pdt.PdtStandard = arrImport[40].Trim();
								pdt.MaxSaleCount = (string.IsNullOrEmpty(arrImport[41])) ? 0 : Convert.ToInt32(arrImport[41].Trim().Replace("", ""));


								// ## 이미지 처리
								ImageProcess(pdt, pImport);


								// ## 공통 처리 부분
								msg += ImportCommonProcess(pdt, pImport);
							}
						}

						i++;
					}
				}


				// 업로드된 파일 삭제
				File.Delete(pImport.FilePath);
			}

			if (string.IsNullOrEmpty(msg))
				msg = WindowUtil.AlertErrorMsg("정상등록되었습니다. 리스트에서 확인하세요", "", "4");


			return msg;
		}
		#endregion

		#region 파일 처리
		private void ImageProcess(ProductEntity pdt, ProductImportEntity pImport)
		{
			// 링크 이미지라면 대. 중. 소 필요 없다.
			if (pdt.IsPdtImageLink.Equals("1"))
			{
				pdt.PdtImg1 = "";
				pdt.PdtImg2 = "";
				pdt.PdtImg3 = "";
			}


			// 대표이미지 라면...
			if (pdt.IsPdtImageLink.Equals("2"))
			{
				string[] arrZoom;
				arrZoom = pdt.PdtImgZoom.Split(',');

				if (pdt.PdtImg1 == "")
					pdt.PdtImg1 = arrZoom[0].Trim();

				pdt.PdtImg2 = "";
				pdt.PdtImg3 = "";

				if (!string.IsNullOrEmpty(venderID))
				{
					if (Directory.Exists(pImport.Path + "\\" + venderID))
						pdt.PdtImg1 = pImport.Domain + "/" + venderID + "/zoom/" + pdt.PdtImg1;
					else
						pdt.PdtImg1 = pImport.Domain + "/zoom/" + pdt.PdtImg1;
				}
				else
				{
					pdt.PdtImg1 = pImport.Domain + "/zoom/" + pdt.PdtImg1;
				}
			}


			// 대, 중, 소 이미지 처리
			if (pdt.IsPdtImageLink.Equals("0"))
			{
				if (!string.IsNullOrEmpty(venderID))
				{
					if (Directory.Exists(pImport.Path + "\\" + venderID))
					{
						pdt.PdtImg1 = pImport.Domain + "/" + venderID + "/img1/" + pdt.PdtImg1;
						pdt.PdtImg2 = pImport.Domain + "/" + venderID + "/img2/" + pdt.PdtImg2;
						pdt.PdtImg3 = pImport.Domain + "/" + venderID + "/img3/" + pdt.PdtImg3;
					}
					else
					{
						pdt.PdtImg1 = pImport.Domain + "/img1/" + pdt.PdtImg1;
						pdt.PdtImg2 = pImport.Domain + "/img2/" + pdt.PdtImg2;
						pdt.PdtImg3 = pImport.Domain + "/img3/" + pdt.PdtImg3;
					}
				}
				else
				{
					pdt.PdtImg1 = pImport.Domain + "/img1/" + pdt.PdtImg1;
					pdt.PdtImg2 = pImport.Domain + "/img2/" + pdt.PdtImg2;
					pdt.PdtImg3 = pImport.Domain + "/img3/" + pdt.PdtImg3;
				}
			}
		}
		#endregion

		#region 공통처리 프로세스
		private string ImportCommonProcess(ProductEntity pdt, ProductImportEntity pImport)
		{
			string msg = string.Empty;

			// 제목 및 내용의 특수문자 처리
			if (!string.IsNullOrEmpty(pdt.PdtTitle))
				pdt.PdtTitle = TextUtil.titleReplaceInput(pdt.PdtTitle);

			if (!string.IsNullOrEmpty(pdt.PdtDescription))
				pdt.PdtDescription = TextUtil.titleReplaceInput(pdt.PdtDescription);

			if (!string.IsNullOrEmpty(pdt.PdtContent))
			{
				pdt.PdtContent = pdt.PdtContent.Replace("  ", "");
				pdt.PdtContent = pdt.PdtContent.Replace("> <", "><");
				pdt.PdtContent = pdt.PdtContent.Replace(">  <", "><");
				pdt.PdtContent = pdt.PdtContent.Replace("??", "");
				pdt.PdtContent = pdt.PdtContent.Replace(">?<", "><");
				pdt.PdtContent = TextUtil.titleReplaceInputBr(pdt.PdtContent);
			}

			if (!string.IsNullOrEmpty(pdt.PdtAddition))
				pdt.PdtAddition = TextUtil.titleReplaceInput(pdt.PdtAddition);

			//원산지/제조사 - 브랜드
			if (!string.IsNullOrEmpty(pdt.PdtMaker))
				pdt.PdtMaker = TextUtil.titleReplaceInput(pdt.PdtMaker);

			if (!string.IsNullOrEmpty(pdt.BrandCode))
				pdt.BrandCode = TextUtil.titleReplaceInput(pdt.BrandCode);

			// 상품코드 생성
			pdt.PdtCode = prodAdmin.GetProductCode();

			// 메이커 코드 생성
			//DataTable dtable = maker.GetMakerList(pdt.PdtMaker);
			//if (dtable.Rows.Count > 0)
			//    pdt.PdtMaker = dtable.Rows[0]["makerCode"].ToString();

			try
			{
				//------------------------------------------------
				// 상품등록
				//------------------------------------------------
				prodAdmin.CreateProduct(pdt);



				//------------------------------------------------
				// ## category insert
				//------------------------------------------------
				if (!string.IsNullOrEmpty(pdt.Ctg.CtgIDX))
					category.RegistProductCategory(pdt.PdtCode, pdt.Ctg.CtgIDX);



				//------------------------------------------------
				// 상품상세 이미지 저장
				//------------------------------------------------
				if (!string.IsNullOrEmpty(pdt.PdtImgZoom))
				{
					string[] arrZoom;
					pdt.PdtImgZoom = pdt.PdtImgZoom.Trim();
					arrZoom = pdt.PdtImgZoom.Split(',');

					// ## 줌 이미지 생성
					pdt.AlContentImage = new ArrayList();
					for (int k = 0; k < arrZoom.Length; k++)
					{
						ProductImageEntity zoomImg = new ProductImageEntity();
						zoomImg.PdtCode = pdt.PdtCode;
						zoomImg.ImageType = "02";
						if (!string.IsNullOrEmpty(venderID))
						{
							if (Directory.Exists(pImport.Path + "\\" + venderID))
								zoomImg.ImageName = "/data/productThum/" + venderID + "/zoom/" + arrZoom[k];
							else
								zoomImg.ImageName = "/data/productThum/zoom/" + arrZoom[k];
						}
						else
						{
							zoomImg.ImageName = "/data/productThum/zoom/" + arrZoom[k];
						}

						// ArrayList Add..
						pdt.AlContentImage.Add(zoomImg);
					}

					// ## 줌 이미지 저장
					prodAdmin.RegistProductContentImage(pdt.AlContentImage);
				}

			}
			catch (Exception ex)
			{
				msg += pdt.PdtTitle + "<br>(" + ex.ToString() + ")<br><br>";
			}

			return msg;
		}
		#endregion

		#region Import Excel
		public string RegistExcel(ProductImportEntity pImport)
		{
			string msg = string.Empty;
			string provider = string.Empty;

			if (File.Exists(pImport.FilePath))
			{
				// 엑셀구분
				if (pImport.ImportFileType.Equals(".xlsx"))
					provider = "Provider=Microsoft.ACE.OLEDB.12.0; Data Source=" + pImport.FilePath + "; Extended Properties=Excel 12.0";
				else
					provider = "Provider=Microsoft.Jet.OLEDB.4.0; Data Source=" + pImport.FilePath + "; Extended Properties=Excel 8.0";


				string query = "select * from [Sheet1$]";

				OleDbConnection oleDBCon = null;
				OleDbCommand oleDBCom = null;
				OleDbDataReader oleDBReader = null;

				// 배송비 정책

				try
				{
					// oledb 연결
					oleDBCon = new OleDbConnection(provider);
					oleDBCom = new OleDbCommand(query, oleDBCon);

					oleDBCon.Open();
					oleDBReader = oleDBCom.ExecuteReader(CommandBehavior.CloseConnection);

					DataTable dtable = new DataTable();
					dtable.Load(oleDBReader);

					int i = 0;
					foreach (DataRow row in dtable.Rows)
					{

						//if (i > 0)
						//{

							pdt.Ctg = new CategoryEntity();
							pdt.Ctg.CtgIDX = row[0].ToString().Trim();
							pdt.PdtTitle = row[1].ToString().Trim();
							pdt.PdtMaker = row[2].ToString().Trim();

							if (string.IsNullOrEmpty(pdt.PdtTitle))
								continue;

							// 밴더사 코드
							if (string.IsNullOrEmpty(pImport.VenderCode))
								pdt.VenderCode = row[3].ToString().Trim();
							else
								pdt.VenderCode = pImport.VenderCode;

							// 배더사 아이디
							venderID = vd.GetVenderID(pdt.VenderCode);

							pdt.BrandCode = row[4].ToString().Trim();
							pdt.PdtSearchWord = row[5].ToString().Trim();
							pdt.PdtStock = (string.IsNullOrEmpty(row[6].ToString())) ? 0 : Convert.ToInt32(row[6].ToString().Trim());
							pdt.IsTaxBill = (string.IsNullOrEmpty(row[7].ToString())) ? "1" : row[7].ToString().Trim();
							pdt.isCashReceipt = (string.IsNullOrEmpty(row[8].ToString())) ? "0" : row[8].ToString().Trim();
							pdt.PdtCost = (string.IsNullOrEmpty(row[9].ToString())) ? 0 : Convert.ToInt32(row[9].ToString().Replace(",", ""));
							pdt.PdtPrice = (string.IsNullOrEmpty(row[11].ToString())) ? 0 : Convert.ToInt32(row[11].ToString().Replace(",", ""));
							pdt.pdtSalePrice = (string.IsNullOrEmpty(row[13].ToString())) ? 0 : Convert.ToInt32(row[13].ToString().Replace(",", ""));

							//마진율계산
							pdt.PdtProfitRate = (Convert.ToSingle((pdt.pdtSalePrice - pdt.PdtCost)) / pdt.pdtSalePrice) * 100;

							//할인율계산
							if (pdt.PdtPrice > 0)
								pdt.PdtRate = (Convert.ToSingle((pdt.PdtPrice - pdt.pdtSalePrice)) / pdt.PdtPrice) * 100;

							if (row[14].ToString().Equals("*"))
								pdt.PdtStockQty = "00";
							else
								pdt.PdtStockQty = (string.IsNullOrEmpty(row[14].ToString())) ? "00" : row[14].ToString().Trim();


							#region 배송비설정부분

							string temp_express = row[15].ToString().Trim();

							switch (temp_express)
							{
								case "0":
									pdt.PdtExType = "0";
									pdt.SentCode = "35";
									break;
								case "1":
									pdt.PdtExType = "1";
									pdt.SentCode = deli.GetDeliveryCode(pdt.VenderCode);
									break;
								case "2":
									pdt.PdtExType = "2";
									pdt.SentCode = "9999";

									pdt.DefaultCost = (string.IsNullOrEmpty(row[16].ToString())) ? 0 : Convert.ToInt32(row[16].ToString().Trim().Replace(",", ""));
									pdt.DeliVeryType = row[17].ToString().Trim();
									pdt.MinCost = (string.IsNullOrEmpty(row[18].ToString())) ? 0 : Convert.ToInt32(row[18].ToString().Trim().Replace(",", ""));
									pdt.ConCost = (string.IsNullOrEmpty(row[19].ToString())) ? 0 : Convert.ToInt32(row[19].ToString().Trim().Replace(",", ""));
									pdt.ReType1 = (string.IsNullOrEmpty(row[20].ToString())) ? "1" : row[20].ToString().Trim();
									pdt.ReType2 = (string.IsNullOrEmpty(row[21].ToString())) ? "" : row[21].ToString().Trim();
									pdt.ReCost = (string.IsNullOrEmpty(row[22].ToString())) ? 0 : Convert.ToInt32(row[22].ToString().Trim().Replace(",", ""));
									pdt.ChaCost = (string.IsNullOrEmpty(row[23].ToString())) ? 0 : Convert.ToInt32(row[23].ToString().Trim().Replace(",", ""));
									break;
								default:
									pdt.PdtExType = "1";
									pdt.SentCode = deli.GetDeliveryCode(pdt.VenderCode);
									break;
							}
							#endregion
							///////////////////////////////////////

							pdt.BatchSent = row[24].ToString().Trim();
							pdt.BatchQty = (string.IsNullOrEmpty(row[25].ToString())) ? 0 : Convert.ToInt32(row[25].ToString().Trim());
							pdt.PdtDescription = row[26].ToString().Trim();
							pdt.PdtContent = row[27].ToString().Trim();
							pdt.PdtImgZoom = row[28].ToString().Trim();
							pdt.PdtImg1 = row[29].ToString().Trim();
							pdt.PdtImg2 = row[30].ToString().Trim();
							pdt.PdtImg3 = row[31].ToString().Trim();
							pdt.Options = row[32].ToString().Trim();
							pdt.PdtIsSale = (string.IsNullOrEmpty(row[33].ToString())) ? 1 : Convert.ToInt32(row[33].ToString().Trim());
							pdt.PdtCode2 = (string.IsNullOrEmpty(row[34].ToString())) ? "" : row[34].ToString().Trim();
							pdt.IsPdtImageLink = (string.IsNullOrEmpty(row[35].ToString())) ? "0" : row[35].ToString().Trim();
							pdt.PdtImageUrl = (string.IsNullOrEmpty(row[36].ToString())) ? "" : row[36].ToString().Trim(); ;


							switch (row[37].ToString().Trim())
							{
								case "1":
									pdt.TaxCode = "01";
									break;
								case "2":
									pdt.TaxCode = "02";
									break;
								case "3":
									pdt.TaxCode = "03";
									break;
							}

							pdt.PdtPrimeCost = (string.IsNullOrEmpty(row[38].ToString())) ? pdt.PdtCost : Convert.ToInt32(row[38].ToString().Replace(",", ""));
							pdt.PdtAddition = row[39].ToString().Trim();
							pdt.PdtStandard = row[40].ToString().Trim();
							pdt.MaxSaleCount = (string.IsNullOrEmpty(row[41].ToString())) ? 0 : Convert.ToInt32(row[41].ToString().Trim().Replace(",", ""));

							// 이미지 처리
							ImageProcess(pdt, pImport);

							// ## 공통 처리 부분
							msg += ImportCommonProcess(pdt, pImport);
						}

						i++;
					//}
				}
				catch (Exception ex)
				{
					msg += "<br>(" + ex.ToString() + ")<br><br>";
				}
				finally
				{
					oleDBReader.Close();
					oleDBReader.Dispose();
					oleDBCon.Close();

					// 업로드된 파일 삭제
					File.Delete(pImport.FilePath);
				}

				if (string.IsNullOrEmpty(msg))
					msg = WindowUtil.AlertErrorMsg("정상등록되었습니다. 리스트에서 확인하세요", "", "4");
			}
			else
			{
				msg = "엑셀파일이 업로드되지 않았습니다.";
			}

			return msg;
		}
		#endregion
	}
}
