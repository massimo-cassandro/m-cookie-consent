/*@license
 Script per gestione consenso Cookie
 Massimo Cassandro 2015
 https://github.com/massimo-cassandro/consenso-cookie
*/
!function(){"use strict";try{var e=function(e){var t=document.cookie,n=t.indexOf(e+"=");if(-1!==n){var o=(e+"=").length,i=t.indexOf(";",n+o);return-1===i&&(i=t.length),t.substring(n+o,i)}return null},t="consenso_cookie",n=e(t),o=document.getElementById("cookie_policy_banner"),i=document.getElementById("cookie_policy_banner_wrapper"),r=function(){var e=new Date;e.setMonth(e.getMonth()+3),document.cookie=t+"=1; expires="+e.toGMTString()+"; path=/",o.remove(),i.remove()};null===n?o&&i&&(o.removeAttribute("hidden"),o.setAttribute("display","block"),i.removeAttribute("hidden"),i.setAttribute("display","block"),i.innerHTML=o.innerHTML,o.remove(),document.getElementById("cookie_policy_button_OK").onclick=r):r()}catch(c){console.log(c)}}();