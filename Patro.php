<?php
/**
 * Plugin Name: Patro
 * Plugin URI: http://wordpress.org/plugins/patro/
 * Description:Show Nepali Patro (BS Calender)
 * Author: Umesh Ghimire
 * Version: 1.3
 * Author URI: http://umeshghimire.com.np
 */


if (!defined('ABSPATH')) {
    exit;
}


class Patro
{

    public $pluginUrl;

    public $postType;


    public function __construct()
    {

        $this->pluginUrl = plugin_dir_path(__FILE__);


        add_action('init', array($this, 'register_shortcodes'));

        //  add_filter('the_post', array( $this, 'init' ),10 );


        add_action('wp_enqueue_scripts', array($this, 'patro_resources'), 10);


        add_action('widgets_init', array($this, 'wpp_load_widget'));


    }


    function register_shortcodes()
    {


        add_shortcode('nepali-patro', array($this, 'taxonomy_nepali_patro'));


    }

    function taxonomy_nepali_patro($atts)
    {

        global $wpdb;


        echo '<div class="NepaliPatro"></div>';

        return;


    }


    public function patro_resources()
    {


        if (!wp_script_is('jquery')) {

            wp_register_script('jQuery', 'https://code.jquery.com/jquery-2.1.4.min.js', array(), '2.1.4', true);

            wp_enqueue_script('jQuery');


        }

        wp_register_script('Patro', plugins_url('js/patro.js', __FILE__), array(), '1.0.1', true);

        wp_enqueue_script('Patro');

        wp_enqueue_style('', plugins_url('css/patro.css', __FILE__), '1.0.0');


    }

    function wpp_load_widget()
    {
        register_widget('PatroWidget');
    }


}

require_once('PatroWidget.php');

$plgcounter = new Patro();