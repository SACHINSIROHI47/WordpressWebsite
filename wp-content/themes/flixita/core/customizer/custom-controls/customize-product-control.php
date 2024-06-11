<?php
if ( ! class_exists( 'WP_Customize_Control' ) )
    return NULL;

class Flixita_product_Control extends WP_Customize_Control
 {
    private $cats = false;

     public function __construct($manager, $id, $args = array(), $options = array())
    {
        $this->cats = get_terms('product_cat');

        parent::__construct( $manager, $id, $args );
    }

    /**
     * Render the content of the category dropdown
     *
     * @return HTML
     */
    public function render_content()
       {
            if(!empty($this->cats))
            {
                ?>
                    <label>
                      <span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
                      <select <?php $this->link(); ?>>
                           <?php
                                foreach ( $this->cats as $cat )
                                {
                                    printf('<option value="%s">%s</option>', $cat->name,$cat->name);
									
									
                                }
                           ?>
                      </select>
                    </label>
                <?php
            }
       }
 }
?>