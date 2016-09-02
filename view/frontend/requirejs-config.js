/**
 * Copyright © 2016 Mozg. All rights reserved.
 * See LICENSE.txt for license details.
 */

//-

console.warn('/mozgbrasil/magento2-base-php56/view/frontend/requirejs-config.js');

//-

var time_start = Date();
console.info(time_start, "");

function _onLoad() {
    var time_end = Date();
    console.info(time_start, "");
    console.info(time_end, "");
    //var time_diff = time_end.getTime() - time_start.getTime();
    //console.info(time_diff, "");
}
window.addEventListener("load", function(){ _onLoad(); });

//-

var christmas = {
    month: 11,
    date: 25
}

function isItChristmas() {
    var now = new Date();
    return (now.getMonth() == christmas.month && now.getDate() == christmas.date);
}

//-

// overriding console.log

var DEBUG = false;
var DEBUG = true;
if(!DEBUG) {
    if(!window.console) window.console = {};
    var methods = ["log", "debug", "warn", "info"];
    for(var i=0;i<methods.length;i++){
        console[methods[i]] = function(){};
    }
}

//-

var config = {
    //"waitSeconds": 0,
    // # define application bootstrap
    "deps": [
        //"Mozg_Base/js/web/nprogress/nprogress",
        //"Mozg_Base/js/internal/bootstrap"
    ],
    // # define library shortcuts
    // http://devdocs.magento.com/guides/v1.0/config-guide/config/js-resources.html#m2devgde-js-resources-mapping
    "paths": {
        // https://cdnjs.com/libraries
        "fallback": "//cdnjs.cloudflare.com/ajax/libs/fallback/1.0.5/fallback.min",
        "hinclude": "//cdnjs.cloudflare.com/ajax/libs/hinclude/0.9.5/hinclude.min",
        "beepjs": "//cdnjs.cloudflare.com/ajax/libs/beepjs/0.0.1/beep.min",
        "NProgress": "//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min",
        "Favico": "//cdnjs.cloudflare.com/ajax/libs/favico.js/0.3.7/favico.min",
        "S": "//cdnjs.cloudflare.com/ajax/libs/string.js/3.2.0/string.min",
        "math": "//cdnjs.cloudflare.com/ajax/libs/mathjs/1.7.0/math.min",
        "snowstorm": "//cdnjs.cloudflare.com/ajax/libs/Snowstorm/20131208/snowstorm-min",
        "ifvisible": "//cdnjs.cloudflare.com/ajax/libs/ifvisible/1.0.6/ifvisible.min",
        "keymaster": "//cdnjs.cloudflare.com/ajax/libs/keymaster/1.6.1/keymaster.min",
        "screenfull": "//cdnjs.cloudflare.com/ajax/libs/screenfull.js/2.0.0/screenfull.min",
        "inputmask": "//cdnjs.cloudflare.com/ajax/libs/jquery.inputmask/3.1.62/jquery.inputmask.bundle.min",
        "UserInfo": "//cdnjs.cloudflare.com/ajax/libs/userinfo/1.1.0/userinfo.min",
        // https://developers.google.com/speed/libraries/
        "spf": "//ajax.googleapis.com/ajax/libs/spf/2.2.0/spf",
        "scriptaculous": "//ajax.googleapis.com/ajax/libs/scriptaculous/1.9.0/scriptaculous",
        // configuration for resource '/app/code/Mozg/Base/view/frontend/web/js/web/nprogress/nprogress.js'
        "call_nprogress": "Mozg_Base/js/internal/call-nprogress",
        "call_favico": "Mozg_Base/js/internal/call-favico"
    },
    // # define ???
    "map": {
        "*": {
            //"favico": "Mozg_Base/js/web/favico.js/favico-0.3.8.min",
            //"nprogress": "Mozg_Base/js/web/nprogress/nprogress"
        }
    },
    // # define library dependencies
    // Sets the configuration for your third party scripts that are not AMD compatible
    "shim": {
        "snowstorm": ["jquery"],
        "NProgress": {
            deps: ["jquery"],
            //exports: "NProgress"  //attaches "NProgress" to the window object
        },
        "callnprogress": ["NProgress"],
        "Favico": {
            deps: ["jquery"],
            //exports: "Favico"  //attaches "Favico" to the window object
        },
        "callfavico": ["Favico"],
        "scriptaculous": ["legacy-build.min"] // FIX: uncaught exception: script.aculo.us requires the Prototype JavaScript framework >= 1.6.0.3
    }
};

//-

var deps = ['fallback','hinclude','beepjs','NProgress','Favico','S','math','snowstorm','ifvisible','keymaster','screenfull','inputmask','UserInfo','spf','scriptaculous'];
var deps = ['fallback','hinclude','NProgress','Favico','S','math','ifvisible','keymaster','screenfull'];
if (isItChristmas()) {
    deps.push("snowstorm");
}
deps.push("beepjs");
var deps = [];
var callback = function (  ) {
    //numArgs = arguments.length;
    listArgs = arguments;
    //console.log(numArgs);
    //console.log(listArgs);

    arrayLength = deps.length;
    for (i = 0; i < arrayLength; i++) {
        itemId = deps[i];
        itemObject = listArgs[i];

        console.info(i, 'Loaded: '+ itemId);
        console.log(i, typeof itemObject, itemObject);
        if((typeof itemObject != 'undefined') && !(window[itemId]) ) {
            window[itemId] = itemObject; //FIX: attaches to the window object
        }

        eval("call_"+itemId+"();");
    }
};
require(deps, callback);

//

function call_fallback() {
    console.log(arguments.callee.name);

    fallback.load(
        {
            'nprogressCSS': '//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'
        },
        {
            shim: {
                //'jQuery.ui': ['jQuery']
            },
            callback: function(success, failed) {
                console.log(arguments.callee.name);

                numArgs = arguments.length;
                listArgs = arguments;
                console.log(numArgs);
                console.log(listArgs);
            }
        }
    );

    fallback.ready(
        function() {
            console.log(arguments.callee.name);

            numArgs = arguments.length;
            listArgs = arguments;
            console.log(numArgs);
            console.log(listArgs);
        }
    );
}

function call_hinclude() {
    console.log(arguments.callee.name);

}

function call_beepjs() {
    console.log(arguments.callee.name);

    samplingrate = 22050;
    frequency = 1000;
    duration = 1;
    filters = [Beep.utils.amplify(8000)];
    new Beep(samplingrate).play(frequency, duration, filters);
}

function call_NProgress() {
    console.log(arguments.callee.name);

    var deps = ['call_nprogress'];
    var callback = function (  ) {
        //numArgs = arguments.length;
        listArgs = arguments;
        //console.log(numArgs);
        //console.log(listArgs);
    };
    require(deps, callback);
}

function call_Favico() {
    console.log(arguments.callee.name);

    var deps = ['call_favico'];
    var callback = function (  ) {
        //numArgs = arguments.length;
        listArgs = arguments;
        //console.log(numArgs);
        //console.log(listArgs);
    };
    require(deps, callback);
}

function call_S() {
    console.log(arguments.callee.name);

    string = S('data_rate').camelize().s; //'dataRate'
    console.log(string);
}

function call_math() {
    console.log(arguments.callee.name);

    result = math.eval('1.2 * (2 + 4.5)');
    console.log(result);
}

function call_snowstorm() {
    console.log(arguments.callee.name);
}

function call_ifvisible() {
    console.log(arguments.callee.name);

    function _onLoad() {
        _function = function () {
            console.log(ifvisible.now());
        };
        milliseconds = 2000; // 1000 ms = 1 second.
        _setTimeout = setInterval(_function, milliseconds);
    }
    window.addEventListener("load", function(){ _onLoad(); });
}

function call_keymaster() {
    console.log(arguments.callee.name);

    key('a', function(){ alert('you pressed a!'); });
    key('f', function(){ call_screenfull(); });
}


function call_screenfull() {
    console.log(arguments.callee.name);

    // Detect fullscreen change
    if (screenfull.enabled) {
        document.addEventListener(
            screenfull.raw.fullscreenchange, function () {
                console.log('Am I fullscreen? ' + (screenfull.isFullscreen ? 'Yes' : 'No'));
            }
        );
    }
    // Detect fullscreen error
    if (screenfull.enabled) {
        document.addEventListener(
            screenfull.raw.fullscreenerror, function (event) {
                console.error('Failed to enable fullscreen', event);
            }
        );
    }
    // Screenfull
    if (screenfull.enabled) {
        screenfull.request();
    }
    // 
}

function call_inputmask() {
    console.log(arguments.callee.name);

    function _onLoad() {
        selector = 'firstname';
        jQuery(selector).inputmask("aa-9999");
    }
    window.addEventListener("load", function(){ _onLoad(); });
}

function call_UserInfo() {
    console.log(arguments.callee.name);

    UserInfo.getInfo(
        function(data) {
            console.log(data);
        }, function(err) {
            console.log(err);
        }
    );
}

function call_spf() {
    console.log(arguments.callee.name);
    spf.init();
}

function call_scriptaculous() {
    console.log(arguments.callee.name);
    id_of_element = document.images[0];
    Effect.Shake(id_of_element);
}

//-
