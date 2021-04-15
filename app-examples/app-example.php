<?php
/**
 * Plugin Name:       Example App
 * Description:       WordCamp America Central talk. https:&#x2F;&#x2F;centroamerica.wordcamp.org&#x2F;2021&#x2F;
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Damián Suárez (@retrofox)
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       app-example
 *
 * @package           wpac
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function wpac_app_example_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'wpac_app_example_block_init' );

function wcca_block_categories( $categories, $post ) {
    if ( $post->post_type !== 'post' ) {
        return $categories;
    }

    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'wcca',
                'title' => __( 'WordCamp Central América', 'app-example' ),
                'icon'  => 'treepalm',
            ),
        )
    );
}

add_filter( 'block_categories', 'wcca_block_categories', 10, 2 );
