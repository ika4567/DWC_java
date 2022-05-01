// alert('Hello World');

// let hello = 'Hello World';
// alert(hello);

// alert(3 + 4);
// alert(5 - 1);
// alert(7 * 2);
// alert(9 / 3);

// alert('Hello' + 'World');


// if文

// let orange = 120;
// let apple = 130;

// if(orange < apple){
//   alert('みかんの値段がりんごより安い');
// } else if(orange = apple){
//   alert('みかんとりんごは同じ値段');
// } else{
// //   alert('みかんの値段はりんごより高い');
// // }


// // while文

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max){
//   num = num * 2;
//   count = count + 1;
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// // do...while文

// do{
//   max += 2
// } while(num < max){
//   num = num * 2;
//   count += 1
// }

// alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// for文

// let i;
// let num = 0;

// for(i = 1; i < 11; i++){
//   num += i
// }

// alert('1から10まで足し算した結果は' + num + 'です');


// 確認問題
// alert(20 + 2);
// alert(20 - 2);
// alert(20 * 2);
// alert(20 / 2);



// 関数を呼び出す
// let alertString;
// alertString = addString("Webcamp");

// alert(alertString);

// function addString(strA){
//   let addStr = "Hello " + strA;
//   return addStr;
// }


// // 入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください');
// alert(promptStr);


// 複数の関数を定義（入力した値を処理する関数を作成）
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');

// 確認問題...グー・チョキ・パー以外はエラーが出続けるようにwhile文を使う
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力してください');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}

let js_hand = getJShand(); //じゃんけんの手をランダムに生成する関数を呼び出す
let judge = winLose(user_hand, js_hand); //ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出す

// 確認問題...キャンセル時は別メッセージ
if(user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else{
  alert('またチャレンジしてね');
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor(Math.random() * 3);
  let hand_name;
  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }
  return hand_name;
}

// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js){
  let winLoseStr;
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr;
}