/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//-

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/internal/callback-favico.js');

//-

var _setInterval;

function construct_Favico() {
    //
    bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.cursor = "wait";

    //
    count = 0;
    _setInterval = setInterval(
        function(){
            ++count;

            if (typeof Favico == "undefined" || !Favico) {
                // Favico is not loaded
                console.log('Favico is not loaded');
            }else{
                // Favico is loaded
                favicon=new Favico(
                    {
                        animation:'slide'
                    }
                );
                favicon.badge(count);
            }


        }, 1000
    );

    //

}

//-

function destruct_Favico() {
    //
    bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.cursor = "default";

    //
    clearInterval(_setInterval);

    //
}

//-

construct_Favico();

window.addEventListener("load", function(){ destruct_Favico(); });

//-
