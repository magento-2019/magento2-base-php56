/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//---

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/view/checkout/shipping/auto-fill-form.js');

//---

define(
    ["jquery","jquery/ui"], function($){

        $("city").dblclick(
            function() {
                cpfRandom_Event();
            }
        );

    }
);

//-

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/web/js/internal/auto-fill-form.js');

//-

// ****************************************
// Script Gerador de CPF e CNPJ Válidos
// Autor: Marcos Guiga
// Site : Worldigital.co.cc
// Email: marcosguiga@hotmail.com
// Data:  19/12/2010
// ****************************************
// Função para gerar números randômicos
function gera_random(n)
{
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}

// Função para retornar o resto da divisao entre números (mod)
function mod(dividendo,divisor)
{
          return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

// Função que gera números de CPF válidos
function cpf()
{
          var n = 9;
          var n1 = gera_random(n);
           var n2 = gera_random(n);
           var n3 = gera_random(n);
           var n4 = gera_random(n);
           var n5 = gera_random(n);
           var n6 = gera_random(n);
           var n7 = gera_random(n);
           var n8 = gera_random(n);
           var n9 = gera_random(n);
           var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*10;
           d1 = 11 - ( mod(d1,11) );
    if (d1>=10) { d1 = 0; }
           var d2 = d1*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*10+n1*11;
           d2 = 11 - ( mod(d2,11) );
    if (d2>=10) { d2 = 0; }
           return ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+n9+'-'+d1+d2;
}

// Função que gera números de CNPJ válidos
function cnpj()
{
          var n = 9;
          var n1  = gera_random(n);
           var n2  = gera_random(n);
           var n3  = gera_random(n);
           var n4  = gera_random(n);
           var n5  = gera_random(n);
           var n6  = gera_random(n);
           var n7  = gera_random(n);
           var n8  = gera_random(n);
           var n9  = 0;//gera_random(n);
           var n10 = 0;//gera_random(n);
           var n11 = 0;//gera_random(n);
           var n12 = 1;//gera_random(n);
          var d1 = n12*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
           d1 = 11 - ( mod(d1,11) );
    if (d1>=10) { d1 = 0; }
           var d2 = d1*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
           d2 = 11 - ( mod(d2,11) );
    if (d2>=10) { d2 = 0; }
           return ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'/'+n9+n10+n11+n12+'-'+d1+d2;
}

//-

function cpfRandom_Event(event) {
    var element = event.element();
    if(event.shiftKey) {

        if (window.location.protocol == "http:") {

            jQuery.ajax(
                {
                    url: 'http://api.randomuser.me/',
                    dataType: 'json',
                    success: function(data){
                        console.log(data);
                        console.log(data.results[0].user.gender);
                        console.log(data.results[0].user.name.first);
                        console.log(data.results[0].user.name.last);

                        $('firstname').value = capitalise(data.results[0].user.name.first);
                        $('lastname').value = capitalise(data.results[0].user.name.last);

                        if(data.results[0].user.gender == 'male') {
                            idx_gender = 1;
                        }else{
                            idx_gender = 2;
                        }

                        if($('gender') ) {
                            $('gender').options[idx_gender].selected = "selected";
                        }

                        if ($('email')) {
                            $('email').value = data.results[0].user.name.first + data.results[0].user.name.last + '@gmail.com';
                        }

                        if (document.getElementsByName('email')) {
                            document.getElementsByName('email')[0].value = data.results[0].user.name.first + data.results[0].user.name.last + '@gmail.com';
                        }

                    }
                }
            );

        }


        var _cpf = cpf();
        var _cnpj = cnpj();

        $('firstname').value = 'Simon';
        $('lastname').value = 'Belmont';

        if($('company') ) {
            $('company').value = 'ACME Corporation S.A.';
        }

        if($('day') ) {
            $('day').value = '25';
            $('month').value = '12';
            $('year').value = '1990';
        }

        if($('gender') ) {
            $('gender').options[1].selected = "selected";
        }

        if($('taxvat') ) {
            $('taxvat').value = _cpf;
        }

        if($('cpf') ) {
            $('cpf').value = _cpf;
        }

        if($('rg') ) {
            $('rg').value = _cpf;
        }

        if($('cnpj') ) {
            $('cnpj').value = _cnpj;
        }

        if ($('email')) {
            $('email').value = cleanString(_cpf) + '@' + cleanString(_cpf) + '.com.br';
        }

        if ($('email')) {
            $('email').value = cleanString(_cpf) + '@' + cleanString(_cpf) + '.com.br';
        }

        if (document.getElementsByName('email')) {
            document.getElementsByName('email')[0].value = cleanString(_cpf) + '@' + cleanString(_cpf) + '.com.br';
        }

        $('password').value = '123456';
        $('confirmation').value = '123456';

        $('zip').value = gerarCEP();

        if($('street3') ) {
            $('street3').value = 'Apto 23 A';
        }

        $('telephone').value = '(11) ' + '2' + randomnumber() + randomnumber() + randomnumber() + '-' + randomnumber() + randomnumber() + randomnumber() + randomnumber();

        if($('fax') ) {
            $('fax').value = '(11) ' + '2' + randomnumber() + randomnumber() + randomnumber() + '-' + randomnumber() + randomnumber() + randomnumber() + randomnumber();
        }

        if($('company') ) {
            $('company').triggerEvent('keypress');
        }

        $('zip').triggerEvent('blur');
    }
}

//-
