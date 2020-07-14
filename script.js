var par = document.querySelector('.row');
var child = par.firstChild;
var con = document.querySelector('.container');
var row = con.firstChild;


var randomColor = function () {
  while (child) {
    if (child.nodeType === 1) {
      var color , letter , lastColor , lastLetter , changeColor , changeLetter;
      color = Math.floor(Math.random() * 3);
      letter = Math.floor(Math.random() * 3);

      changeColor = function () {
        if(lastColor !== undefined && lastColor === color) {
          color = Math.floor(Math.random() * 3);
        }
      };
      changeLetter = function () {
        if(lastLetter !== undefined && lastLetter === letter) {
          letter = Math.floor(Math.random() * 3);
        }
      };

      changeColor();
      changeColor();
      changeColor();

      changeLetter();
      changeLetter();
      changeLetter();


      switch (color) {
        case 0:
          child.classList.add('red');
          break; 
        case 1:
          child.classList.add('blue');
          break;
        case 2:
          child.classList.add('green');
          break;
      };
      switch (letter) {
        case 0:
          child.textContent = '赤'
          break; 
        case 1:
          child.textContent = '青'
          break;
        case 2:
          child.textContent = '緑'
          break;
      };
      
      lastColor = color;
      lastLetter = letter;
      
    }
    child = child.nextSibling;
    
  };
}; 


var changeLow = function () {
  while (row) {
    if (row.nodeType === 3 || row.nodeType === 1) {
      
      //rowの色を付ける
      randomColor();

      if (par !== null) {
        par = par.nextSibling;
      };
      
      if (par !== null) {
        child = par.firstChild;
      };
      
      
    }
    
    row = row.nextSibling;
  }

};

changeLow();

document.querySelector('#startcount').addEventListener('click' , function () {
  document.querySelector('.start-menu').style.display = 'none';
  document.querySelector('.container').style.display = 'block';
  document.querySelector('#sta-btn').style.display = 'none';
  document.querySelector('#description').style.display = 'none';
});
document.querySelector('#endcount').addEventListener('click' , function () {
  document.querySelector('.start-menu').style.display = 'block';
  document.querySelector('.container').style.display = 'none';
  document.querySelector('#PassageArea').style.display = 'block';
  document.querySelector('a').style.display = 'block';
  scrollTo(0 , 0);
});



  var PassSec;   // 秒数カウント用変数
  // 繰り返し処理の中身
  function showPassage() {
    PassSec++;   // カウントアップ
     var msg = "  結果： " + PassSec + "秒";   // 表示文作成
     document.getElementById("PassageArea").innerHTML = msg;   // 表示更新
      return msg;
    }
    
    // 繰り返し処理の開始
    function startShowing() {
     PassSec = 0;   // カウンタのリセット
     PassageID = setInterval('showPassage()',1000);   // タイマーをセット(1000ms間隔)
     document.getElementById("startcount").disabled = true;   // 開始ボタンの無効化
    }
  
    // 繰り返し処理の中止
  function stopShowing() {
    clearInterval( PassageID );   // タイマーのクリア
     document.getElementById("startcount").disabled = false;   // 開始ボタンの有効化
    }


