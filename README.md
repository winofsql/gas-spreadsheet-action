# gas-spreadsheet-action

```javascript
function createSpreadsheet() {

  // アドレスバーより ID を取得して使用
  var folder = DriveApp.getFolderById("1BOMeruf2uCW2AkI1HP8-MQNWmzpjihYf");

  // 新規でスプレッドシートを作成
  var spread_sheet = SpreadsheetApp.create("GASで作成されたスプレッドシート");

  // スプレッドシートの ID を取得
  var id = spread_sheet.getId();

  console.log(id);

  // id より ファイルオブジェクトを取得
  var file = DriveApp.getFileById(id) 

  // ファイルオブジェクトのメソッドで 最初に取得したフォルダーに移動
  file.moveTo(folder);
  
}
```

```javascript
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
```

```javascript
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
```

```javascript
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
```
