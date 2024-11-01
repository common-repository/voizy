<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

include( 'shortcode.php' );

function voizy_block_assets() {
	wp_register_script(
		'voizy-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
		null,
		true
	);

	register_block_type(
		'voizy/widget', array(
			'editor_script' => 'voizy-block-js',
		)
	);
}

add_action( 'init', 'voizy_block_assets' );

add_shortcode('voizy', 'voizy_widget_shortcode');
