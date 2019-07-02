"use strict";

// Class definition

var KTBootstrapNotifyDemo = function () {
    
    // Private functions

    // basic demo
    var demo = function () {
        // init bootstrap switch

        // handle the demo
        $('#kt_notify_btn').click(function() {
            var content = {};

            content.message = 'New order has been placed';
            if ($('#kt_notify_title').prop('checked')) {
                content.title = 'Notification Title';
            }
            if ($('#kt_notify_icon').val() != '') {
                content.icon = 'icon ' + $('#kt_notify_icon').val();
            }
            if ($('#kt_notify_url').prop('checked')) {
                content.url = 'www.keenthemes.com';
                content.target = '_blank';
            }

            var notify = $.notify(content, { 
                type: "info",
                allow_dismiss: true,
                newest_on_top: true,
                mouse_over:  "pause",
                showProgressbar:  false,
                spacing: 10,                    
                timer: 1000,
                placement: {
                    from: "top", 
                    align: "right"
                },
                offset: {
                    x: 20, 
                    y: 20
                },
                delay: 4000,
                z_index: 999,
                animate: {
                    enter: 'animated fadeIn',
                    exit: 'animated fadeOut'
                }
            });
        });
    }

    return {
        // public functions
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {    
    KTBootstrapNotifyDemo.init();
});