function deleteSheets() {

  // アドレスバーより ID を取得して使用
  var folder = DriveApp.getFolderById("1BOMeruf2uCW2AkI1HP8-MQNWmzpjihYf");

  // ID より スプレッドシートを取得
  var spread_sheet = SpreadsheetApp.openById("1aAllnIBx2i_Bav7hrJTducy8C5Y5W-jWoDl0yVW7Pi8");

  // シート数を取得
  var sheets = spread_sheet.getSheets();
  var sheetNum = sheets.length;
  for(var i = sheetNum - 1; i > 0; i-- ) {
    spread_sheet.deleteSheet( sheets[i] );
    console.log( `削除シートのカウント : ${i}` );
  }

}
