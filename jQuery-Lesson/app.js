// // $(document).ready(function () {
// //   $('body').html('<h1>Hello jQuery!!</h1>');
// // });

// $(function(){
//   // $('.box1').css({
//   //   'background-color': '#0000FF', //一つのCSSを記述するときは $('セレクタ').css('プロパティ名','値');
//   //   'height': '100px'
//   // });

//   // $('.box1').slideDown(); //上から下へスライド(無から要素を表示)させるアニメーション

//   // $('.box1').slideUp(); //下から上へスライドさせる(表示されてる要素を隠す)アニメーション

//   // 非表示の要素を表示させる
//   // $('.box1').show();
//   // $('.box1').css('background-color','#0000FF');

//   // 表示されている要素を非表示にする
//   // $('.box1').hide();
// });

// 確認問題
// $(function(){
//   $('.box1').slideDown(function(){
//     $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '100px',
//     'width': '200px'
//     }).slideUp();
//   });
// });


// イベント検出をする
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000FF'});
  });
});