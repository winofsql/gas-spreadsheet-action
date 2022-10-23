function getFilesNameAndId() {

  // アドレスバーより ID を取得して使用
  var folder = DriveApp.getFolderById("1BOMeruf2uCW2AkI1HP8-MQNWmzpjihYf");

  // ID より スプレッドシートを取得
  var spread_sheet = SpreadsheetApp.openById("1aAllnIBx2i_Bav7hrJTducy8C5Y5W-jWoDl0yVW7Pi8");

  // 先頭のシートを取得
  var sheet = spread_sheet.getSheets()[0];

  // シート内の値のみを全て消去( マクロで取得 )
  sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).activate();
  spread_sheet.getActiveRangeList().clear({contentsOnly: true, skipFilteredRows: true});

  var range1,range2,i = 1;
  var file;
  // フォルダ内のファイル一覧
  var files = folder.getFiles();
  while (files.hasNext()) {
    file = files.next();
    // 書き込み位置を設定
    range1 = sheet.getRange("A" + i )
    range1.setValue( file.getName() );
    // 書き込み位置を設定
    range2 = sheet.getRange("B" + i )
    range2.setValue( file.getId() );

    console.log( `ファイル数のカウント : ${i}` );
    i++;
  }  

}
