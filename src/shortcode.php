<?php

function voizy_widget_shortcode( $atts ) {
    $query_params = [];
    $allowed_keys = ['id', 'color', 'theme', 'context', 'privacy-opt-in', 'privacy-url'];
    foreach ( $atts as $key => $value ) {
        if (in_array($key, $allowed_keys)) {
            array_push($query_params, $key . '=' . $value);
        }
    }

    return '<script src="https://widgets.voizy.de/embed.js?'. implode("&", $query_params) .'" id="voizy-script"></script>';
}
