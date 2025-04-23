<!-- change_post_per_pager対応版 ページャー -->
<?php
global $wp_query;

if ($wp_query->found_posts > 0) : // この行を追加
?>
<p class="found-postContainer">
    <?php
    $ppp = $wp_query->query_vars['posts_per_page'];
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1; // 現在のページ番号

    $end_range = $paged * $ppp; // 現在表示されている最後の投稿の番号
    $start_range = $end_range - $ppp + 1; // 現在表示されている最初の投稿の番号

    if ($end_range > $wp_query->found_posts) { // 最終ページの場合
        $end_range = $wp_query->found_posts; // 実際に存在する投稿数に調整
    }

    echo $wp_query->found_posts . '件中 ' . $start_range . '-' . $end_range . '件を表示';
    ?>
</p>
<?php
endif; // この行を追加
?>

<div id="next">
<?php if(function_exists('wp_pagenavi')) {
    wp_pagenavi();
} ?>
</div>
