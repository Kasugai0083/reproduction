<!-- 固定ページにお知らせ吐き出し -->
<?php get_header("cp"); ?>

<nav class="fs-c-breadcrumb">
    <ul class="fs-c-breadcrumb__list">
        <li class="fs-c-breadcrumb__listItem">
            <a href="/">HOME</a>
        </li>
        <li class="fs-c-breadcrumb__listItem">
            お知らせ
        </li>
    </ul>
</nav>
<main>

<section class="article-area">
<h1 class="g-fvTtl">
<span class="en waterfall">News</span>
<span class="ja">
お知らせ
</span>

</h1>

<div class="wp-blog__list g-wrapper--s">

<?php 
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$args = array(
    'post_type' => 'news',
    'posts_per_page' => 15,
    'paged' => $paged,
    'tax_query' => array(
        array(
            'taxonomy' => 'news_cat',
            'field'    => 'slug',
            'terms'    => 'onlineshop',
            'operator' => 'NOT IN',
        ),
    ),
);
$news_query = new WP_Query($args);

if ($news_query->have_posts()) : 
    while ($news_query->have_posts()) : $news_query->the_post(); 
?>

<article>
    <a href="<?php the_permalink() ?>">
        <p class="wp-blog__thumb hvr-img">
            <picture>
                <source media="(max-width:767px)" srcset="<?php the_post_thumbnail_url('sp-blog');?>">
                <img src="<?php the_post_thumbnail_url('pc-blog');?>" srcset="<?php the_post_thumbnail_url('pc-blog');?> 1x,<?php the_post_thumbnail_url('retina-blog');?> 2x" alt="<?php the_title(); ?>" width="159" height="106" loading="lazy" class="imgauto-h">
            </picture>
        </p>

        <div class="wp-blog__txt">
            <p class="wp-blog__date">
                <time datetime="<?php the_time('Y.m.d'); ?>" itemprop="datePublished"><?php the_time('Y.m.d'); ?></time>　<span class=""><?php echo date('D', get_the_time('U')); ?></span>
            </p>
            <p class="g-ecLocal">
                <?php the_title(); ?>
            </p>
        </div>
    </a> 
</article>

<?php 
    endwhile;
endif;  
?>

</div>

</section>
<p class="found-postContainer">
    <?php
    $ppp = $news_query->query_vars['posts_per_page'];
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    $end_range = $paged * $ppp;
    $start_range = $end_range - $ppp + 1;

    if($end_range > $news_query->found_posts) {
        $end_range = $news_query->found_posts;
    }

    echo $news_query->found_posts . '件中 ' . $start_range . '-' . $end_range . '件を表示';
    ?>
</p>
<div id="next">
<?php if(function_exists('wp_pagenavi')) {
    wp_pagenavi(array('query' => $news_query));
} ?>
</div>
</main>
<?php get_footer("cp"); ?>
