$(function () {

    $(document).ready(function () {

    $(".openModaal").modaal();

});
});

// スライドイン
$(document).ready(function () {
    function onScroll() {
        $(".slideIn").each(function () {
            var sectionTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            if (windowBottom > sectionTop + 100) {
                $(this).css({ "opacity": "1", "transform": "translateY(0)" });
            }
        });
    }
    onScroll();
    $(window).on("scroll", onScroll);
});

/*=================================================
ハンバーガ―メニュー
===================================================*/

// ハンバーガーメニューをクリックした時
$(".hamburger").on("click", function () {
    // toggleClassを使用することで、hamburgerクラスにactiveクラスが存在する場合は削除、
    // 存在しない場合を追加する処理を自動で行ってくれる
    $("#header").toggleClass("open");
});

// メニューのリンクをクリックした時
$("#navi a").on("click", function () {
    $("#header").toggleClass("open");
});


/*=================================================
トップに戻る
===================================================*/
let pagetop = $(".to-top");
// 最初に画面が表示された時は、トップに戻るボタンを非表示に設定
pagetop.hide();

// スクロールイベント（スクロールされた際に実行）
$(window).scroll(function () {
    // スクロール位置が700pxを超えた場合
    if ($(this).scrollTop() > 700) {
        // トップに戻るボタンを表示する
        pagetop.fadeIn();

        // スクロール位置が700px未満の場合
    } else {
        // トップに戻るボタンを非表示にする
        pagetop.fadeOut();
    }
});

// クリックイベント（ボタンがクリックされた際に実行）
pagetop.click(function () {
    // 0.5秒かけてページトップへ移動
    $("body,html").animate({ scrollTop: 0 }, 500);

    // イベントが親要素へ伝播しないための記述
    return false;
});
