<?php

class PatroWidget extends WP_Widget
{

    function __construct()
    {
        parent::__construct(

            'patro_widget_id',


            __('Nepali Patro', 'nepali_patro_domain'),


            array('description' => __('Show Nepali Calender(patro based on BS.)', 'nepali_patro_domain'),)
        );
    }


    public function widget($args, $instance)
    {
        $title = apply_filters('widget_title', $instance['title']);
// before and after widget arguments are defined by themes
        echo $args['before_widget'];
        if (!empty($title))
            echo $args['before_title'] . $title . $args['after_title'];
        echo '<div class="NepaliPatro"></div>';

        echo $args['after_widget'];

    }

// Widget Backend
    public function form($instance)
    {
        if (isset($instance['title'])) {
            $title = $instance['title'];
        } else {
            $title = __('Nepali Patro ', 'nepali_patro_domain');
        }
// Widget admin form
        ?>
        <p>
            <label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:'); ?></label>
            <input class="widefat" id="<?php echo $this->get_field_id('title'); ?>"
                   name="<?php echo $this->get_field_name('title'); ?>" type="text"
                   value="<?php echo esc_attr($title); ?>"/>
        </p>
    <?php


    }


// Updating widget replacing old instances with new
    public function update($new_instance, $old_instance)
    {
        $instance = array();
        $instance['title'] = (!empty($new_instance['title'])) ? strip_tags($new_instance['title']) : '';
        return $instance;
    }
}

?>