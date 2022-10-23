function sheetAction() {

  // ID より スプレッドシートを取得
  var spread_sheet = SpreadsheetApp.openById("1aAllnIBx2i_Bav7hrJTducy8C5Y5W-jWoDl0yVW7Pi8");

  // 先頭のシートを取得
  var sheet = spread_sheet.getSheets()[0];

  // シート名を変更
  sheet.setName("先頭");

  var addSheet = sheet;
  // 先頭シートをコピー
  for(var i = 1; i <= 20; i++ ) {
    addSheet = addSheet.copyTo(spread_sheet);
    addSheet.setName("シート" + i);
    console.log( `追加シート数のカウント : ${i}` );
  }

}
