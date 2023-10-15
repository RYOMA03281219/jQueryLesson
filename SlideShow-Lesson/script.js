const swiper = new Swiper('.swiper', {
  // オプションの設定
  loop: true, //最後まですらいどしたら最初の画像に戻る
  
  // ページネーション表示の設定
  pagenation: {
    el: '.swiper-pagination', //ページネーションの要素
  },
  
  // ナビゲーションボタン(矢印)表示の設定
  navigation: {
    nextEl: '.swiper-button-next', //「次へボタン」要素の指定
    prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
  } 
});