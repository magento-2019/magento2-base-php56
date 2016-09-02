/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//-

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/internal/bootstrap.js');

//-

/*
<!-- Add the following code to the <body> of your website. -->
<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=mozg88" async="async"></script>
*/

jsAddThis = document.createElement('script');
jsAddThis.async = true;
jsAddThis.type = 'text/javascript';
jsAddThis.src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=mozg88';

head = document.getElementsByTagName('head')[0];
head.appendChild(jsAddThis);

//-
