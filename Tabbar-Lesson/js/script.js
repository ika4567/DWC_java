// $(function() {
//   $('.menu-trigger').on('click', function(event) {
//     $(this).toggleClass('active'); //.toggleClass()で引数に指定されているclassが存在する場合にはそのclassが削除され、無い場合には追加される
//     $('#sp-menu').fadeToggle(); //.fadeToggle()は要素のフェードインとフェードアウトを切り替えるメソッド
//     event.preventDefault();
//   });
// });

$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});