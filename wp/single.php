<!-- 詳細ページページャーカスタム -->
<div id="post-link">
  <?php
  $prev_post = get_previous_post();
  $next_post = get_next_post();

  if ($prev_post) {
      echo '<p id="previous-link"><a href="' . get_permalink($prev_post->ID) . '"><span class="arrow">&laquo;</span><span class="guide">前の記事を見る</span><span class="title">' . $prev_post->post_title . '</span></a></p>';
  }

  if ($next_post) {
      echo '<p id="next-link"><a href="' . get_permalink($next_post->ID) . '"><span class="guide">次の記事を見る</span><span class="title">' . $next_post->post_title . '</span> <span class="arrow">&raquo;</span></a></p>';
  }
  ?>
</div>

<!-- 所持カテゴリー吐き出し -->
<?php
  $term_cats = get_the_terms($post->ID, 'blog_cat');
?>
<?php if (!empty($term_cats) && is_array($term_cats)): ?>
<div class="blog-cat__flex">
  <p class="blog-cat__ttl">
    カテゴリー：
  </p>

    <ul class="blog-cats">
        <?php foreach ($term_cats as $term_cat): ?>
            <?php
            $term_cat_link = get_term_link($term_cat->slug, $term_cat->taxonomy);
            $term_cat_name = $term_cat->name;
            ?>
            <li><a href="<?php echo $term_cat_link; ?>"><?php echo $term_cat_name; ?></a></li>
        <?php endforeach; ?>
    </ul>

</div>
<?php endif; ?>

<!-- 所持タグ吐き出し -->
<?php
  $term_cats = get_the_terms($post->ID, 'blog_tag');
?>

<?php if (!empty($term_cats) && is_array($term_cats)): ?>
<div class="blog-cat__flex">
  <ul class="blog-tags">
    <?php foreach ($term_cats as $term_cat): ?>
        <?php
        $term_cat_link = get_term_link($term_cat->slug, $term_cat->taxonomy);
        $term_cat_name = $term_cat->name;
        ?>
        <li><a href="<?php echo $term_cat_link; ?>"><?php echo $term_cat_name; ?></a></li>
    <?php endforeach; ?>
  </ul>
</div>
<?php endif; ?>