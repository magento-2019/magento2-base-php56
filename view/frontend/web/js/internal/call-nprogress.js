/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//-

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/internal/callback-nprogress.js');

//-

function construct_NProgress() {
    if (typeof jQuery == "undefined" || !jQuery) {
        // jQuery is not loaded
        console.log('jQuery is not loaded');
    }else{
        // jQuery is loaded
        //console.log(NProgress);
        if (typeof NProgress == "undefined" || !NProgress) {
            // NProgress is not loaded
            console.log('NProgress is not loaded');
        }else{
            // NProgress is loaded
            NProgress.start();
        }
    }
}

//-

function destruct_NProgress() {
    NProgress.done();
}

//-

construct_NProgress();

window.addEventListener("load", function(){ destruct_NProgress(); });

//-
