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
