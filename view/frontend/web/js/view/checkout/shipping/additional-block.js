/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//---

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/view/checkout/shipping/additional-block.js');

//---
define(
    [
    'uiComponent'

    ], function (Component) {
        'use strict';

        var show_hide_custom_blockConfig = window.checkoutConfig.show_hide_custom_block;
        console.log(window.checkoutConfig);

        return Component.extend(
            {
                defaults: {
                    template: 'Mozg_Base/checkout/shipping/additional-block'
                },
                canVisibleBlock: show_hide_custom_blockConfig
            }
        );
    }
);
