(function($) {
    'use strict';
    var language;

    if ($('#modal-message-success')) 
        $('#modal-message-success').modal('show');
    if ($('#modal-message-info')) 
        $('#modal-message-info').modal('show');
    if ($('#modal-message-error')) 
        $('#modal-message-error').modal('show');

    $('.modal').on("hidden.bs.modal", function () 
    {
        $('label').removeClass('tag_error');
    });
    
    function wait(ms)
    {
        var start, end;
        start = new Date().getTime();
        end = start;
        while(end < start + ms)
            end = new Date().getTime();
    }

    language = $('meta[name=language]').attr('content'); 
  
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) 
        {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) 
              {
                    $('html, body').animate({
                      scrollTop: (target.offset().top - 54)
                    }, 1000, 'easeInOutExpo');
                    return false;
              }
        }
    });

    $('.btn-service-e').on('click', function () 
    {
        var service_name;

        switch(this.id) 
        {
            case 'service-stellar-b':
                service_name = 'Creation of smart contract on stellar platform';
                break;
            case 'service-blockchain-b':
                service_name = 'Development of projects under Blockchain technology.';
                break;
            case 'service-ico-b':
                service_name = 'Organize and develop ico for fundraising.';
                break;
            case 'service-social-media-b':
                service_name = 'Support in the area of marketing and management of social media.';
                break;
            case 'service-trading-b':
                service_name = 'Counseling in cryptocurrency trading.';
                break;
        }
        $('#request-service').val(service_name);
    });

    $('.modal-child').on('show.bs.modal', function () {
        var modalParent = $(this).attr('data-modal-parent');
        $(modalParent).css('opacity', 0);
    });
   
    $('.modal-child').on('hidden.bs.modal', function () {
        var modalParent = $(this).attr('data-modal-parent');
        $(modalParent).modal('hide');
        wait(400);
        $(modalParent).css('opacity', 1);
    });

    $('.picture').click(function()
    {
        $('#picture_hidden').trigger('click');
    });

    $('#picture_hidden').change(function()
    {
        read_URL(this);
    });

    $('#CFP_carousel').carousel();

    $('#form-request').validate({
        rules: {
            email: {
                required: true,
                maxlength: 50,
            },
            name: {
                required: true,
                maxlength: 50,
            },
            phone: {
                required: true,
                minlength: 12,
            },
            message: {
                required: true,
                maxlength: 250,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#form-service').validate({
        rules: {
            email: {
                required: true,
                maxlength: 50,
            },
            name: {
                required: true,
                maxlength: 50,
            },
            phone: {
                required: true,
                minlength: 12,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#form-contact').validate({
        rules: {
            email: {
                required: true,
                maxlength: 50,
            },
            name: {
                required: true,
                maxlength: 50,
            },
            phone: {
                required: true,
                minlength: 12,
            },
            message: {
                required: true,
                maxlength: 250,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#form-footer').validate({
        rules: {
            email: {
                required: true,
                maxlength: 50,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_register').validate({
        rules: {
            email: {
                required: true,
            },
            name: {
                required: true,
            },
            password: {
                required: true,
                minlength: 8
            },
            check_password: {
                required: true,
                equalTo : '#password',
                minlength: 8
            },
            terms: {
                required: true,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
            $(element).parent('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
            $(element).parent('label').removeClass('tag_error');
        }
    });


    $('#coinet_form_private_sale').validate({
        rules: {
            email: {
                required: true,
                maxlength: 50,
            },
            name: {
                required: true,
                maxlength: 50,
            },
            message: {
                required: true,
                maxlength: 250,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_login').validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_recovery').validate({
        rules: {
            email: {
                required: true,
            },
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_change').validate({
        rules: {
            actual_password: {
                required: true,
                minlength: 8
            },
            new_password: {
                required: true,
                minlength: 8
            },
            new_confirmation: {
                required: true,
                equalTo : '#new_password',
                minlength: 8
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_referrals').validate({
        rules: {
            email: {
                required: true,
            },
            name: {
                required: true,
            },
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_telegram').validate({
        rules: {
            telegram_user: {
                required: true,
            },
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });

    $('#coinet_form_follow_like').validate({
        rules: {
            twitter_user: {
                required: true,
            },
            facebook_user: {
                required: true,
            },
            instagram_user: {
                required: true,
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).prev('label').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).prev('label').removeClass('tag_error');
        }
    });
    
    $('#coinet_form_transaction').validate({
        rules: {
            numOfCOT: {
                required: true,
            },
            amount: {
                required: true,
            },
            currency: {
                required: true,
            },
            key_or_account: {
                required: true,
                maxlength: 56,
                minlength: 27
            }
        },
        errorPlacement: function(error,element) {
            return true;
        },
        highlight: function(element) {
            $(element).parent().children('span').addClass('tag_error');
        },
        unhighlight: function(element) {
            $(element).parent().children('span').removeClass('tag_error');
        }
    });

    if (language == 'spanish') 
    {
        $('#transaccion-table').DataTable({
            'language': 
            {
                'sProcessing':     'Procesando...',
                'sLengthMenu':     'Mostrar _MENU_ registros',
                'sZeroRecords':    'No se encontraron resultados',
                'sEmptyTable':     'Ningún dato disponible en esta tabla',
                'sInfo':           'Mostrando del  _START_ al _END_ de un total de _TOTAL_',
                'sInfoEmpty':      'Mostrando del 0 al 0 de un total de 0',
                'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
                'sInfoPostFix':    '',
                'sSearch':         'Buscar:',
                'sUrl':            '',
                'sInfoThousands':  ',',
                'sLoadingRecords': 'Cargando...',
                'oPaginate': {
                    'sFirst':    'Primero',
                    'sLast':     'Último',
                    'sNext':     'Siguiente',
                    'sPrevious': 'Anterior'
                },
                'oAria': {
                    'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
                    'sSortDescending': ': Activar para ordenar la columna de manera descendente'
                }
            },
            'bFilter': false,
            'bLengthChange': false,
        });
    }
    else
    {
        $('#transaccion-table').DataTable({
            'bFilter': false,
            'bLengthChange': false,
        });
    }

    var table_admin = $('#transaccion-admin-table').DataTable({
        'language': 
        {
            'sProcessing':     'Procesando...',
            'sLengthMenu':     'Mostrar _MENU_ registros',
            'sZeroRecords':    'No se encontraron resultados',
            'sEmptyTable':     'Ningún dato disponible en esta tabla',
            'sInfo':           'Mostrando del  _START_ al _END_ de un total de _TOTAL_',
            'sInfoEmpty':      'Mostrando del 0 al 0 de un total de 0',
            'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
            'sInfoPostFix':    '',
            'sSearch':         'Buscar:',
            'sUrl':            '',
            'sInfoThousands':  ',',
            'sLoadingRecords': 'Cargando...',
            'oPaginate': {
                'sFirst':    'Primero',
                'sLast':     'Último',
                'sNext':     'Siguiente',
                'sPrevious': 'Anterior'
            },
            'oAria': {
                'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
                'sSortDescending': ': Activar para ordenar la columna de manera descendente'
            }
        },
        
        'columnDefs': [
            {
                'targets': 8,
                'data': null,
                'defaultContent': '<button type="button" class="btn btn-modal-style-admin btn-block edited"><i class="fa fa-edit" aria-hidden="true"></i></button>'
            },
            {
                'targets': 9,
                'data': null,
                'defaultContent': '<button type="button" class="btn btn-modal-style-admin btn-block deleted"><i class="fa fa-trash" aria-hidden="true"></i></button>'
            },
            {
                'targets': [0, 6],
                'visible': false
            },
        ]
    });

    var table = $('#conditions-admin-table').DataTable({
        'language': 
        {
            'sProcessing':     'Procesando...',
            'sLengthMenu':     'Mostrar _MENU_ registros',
            'sZeroRecords':    'No se encontraron resultados',
            'sEmptyTable':     'Ningún dato disponible en esta tabla',
            'sInfo':           'Mostrando del  _START_ al _END_ de un total de _TOTAL_',
            'sInfoEmpty':      'Mostrando del 0 al 0 de un total de 0',
            'sInfoFiltered':   '(filtrado de un total de _MAX_ registros)',
            'sInfoPostFix':    '',
            'sSearch':         'Buscar:',
            'sUrl':            '',
            'sInfoThousands':  ',',
            'sLoadingRecords': 'Cargando...',
            'oPaginate': {
                'sFirst':    'Primero',
                'sLast':     'Último',
                'sNext':     'Siguiente',
                'sPrevious': 'Anterior'
            },
            'oAria': {
                'sSortAscending':  ': Activar para ordenar la columna de manera ascendente',
                'sSortDescending': ': Activar para ordenar la columna de manera descendente'
            }
        },
        
        'columnDefs': [
            {
                'targets': 8,
                'data': null,
                'defaultContent': '<button type="button" class="btn btn-modal-style-admin btn-block edited_condition"><i class="fa fa-edit" aria-hidden="true"></i></button>'
            },
            {
                'targets': [0, 1, 3, 4, 5, 7],
                'visible': false
            },
        ]
    });

    $(document.body).on('click', '.deleted', function () 
    {
        var id, status;
        table_admin.$('tr.selected').removeClass('selected');
        if (!$(this).closest('tr').hasClass('child')) $(this).closest('tr').addClass('selected');
        else $(this).closest('tr').prev().addClass('selected');
        
        id = table_admin.row('.selected').data()[0];
        status = table_admin.row('.selected').data()[6];
        
        $('#id-trasaction-del').val(id);

        if (status == 2)
            $('#btn-delete-trans').prop('disabled', true);
        else
            $('#btn-delete-trans').prop('disabled', false);

        $('#modal-delete-transaction').modal('show');
    });

    $(document.body).on('click', '.edited', function () 
    {
        var id, name, date, input, status;
        table_admin.$('tr.selected').removeClass('selected');
        if (!$(this).closest('tr').hasClass('child')) $(this).closest('tr').addClass('selected');
        else $(this).closest('tr').prev().addClass('selected');
        
        id = table_admin.row('.selected').data()[0];
        name = table_admin.row('.selected').data()[1];
        date = table_admin.row('.selected').data()[2];
        input = table_admin.row('.selected').data()[3];
        status = table_admin.row('.selected').data()[6];
        
        $('#id-trasaction').val(id);
        $('#name-trasaction').val(name);
        $('#date-trasaction').val(date);
        $('#input-trasaction').val(input);
        $('#status-trasaction option[value='+status+']').prop('selected', 'true');
        $('#modal-transaction').modal('show');
    });

    $(document.body).on('click', '.edited_condition', function () 
    {
        var telegram_user, telegram_con, instagram_user, twitter_user, facebook_user, follow_ike, user_id;
        table.$('tr.selected').removeClass('selected');
        if (!$(this).closest('tr').hasClass('child')) $(this).closest('tr').addClass('selected');
        else $(this).closest('tr').prev().addClass('selected');

        telegram_user = table.row('.selected').data()[1];
        telegram_con = table.row('.selected').data()[2];
        instagram_user = table.row('.selected').data()[3];
        twitter_user = table.row('.selected').data()[4];
        facebook_user = table.row('.selected').data()[5];
        follow_ike = table.row('.selected').data()[6];
        user_id = table.row('.selected').data()[7];

        if (telegram_con == 'false')
            telegram_con = 0;
        else
            telegram_con = 1;

        if (follow_ike == 'false')
            follow_ike = 0;
        else
            follow_ike = 1;
        
        $('#telegram_user').val(telegram_user);
        $('#telegram_con option[value='+telegram_con+']').prop('selected', 'true');
        $('#instagram_user').val(instagram_user);
        $('#twitter_user').val(twitter_user);
        $('#facebook_user').val(facebook_user);
        $('#follow_ike option[value='+follow_ike+']').prop('selected', 'true');
        $('#user_id').val(user_id);
        $('#modal-social-admin').modal('show');
    });

    $('#currency-buy').change(function() 
    {
        var currency_select, amout_select, price;
        currency_select = $(this).val();
        switch (currency_select) 
        {
            case '1':
                bitcoin_price();
                break;
            case '2':
                ethereum_price();
                break;
            case '3':
                dash_price();
                break;
            case '4':
                stellar_price();
                break;
        }
    });

    $.ajax({
        url:'https://api.coinmarketcap.com/v2/ticker/1/',
        dataType:'json',
        success:function(json)
        {
            var bitcoin_price, min, max;
            bitcoin_price = json['data']['quotes']['USD']['price'];
            if ($('#public-sale').length)
                min = Math.round(0.01 * bitcoin_price * 2.0 * 10000000) / 10000000;
            else if ($('#private-sale').length)
                min = Math.round(0.05 * bitcoin_price * 2.0 * 10000000) / 10000000;
            max = 100000;
            $('#cot-amount').attr({ 'max': max, 'min': min, 'value': min });
        }
    });

    $('#currency-buy').val(1);
    bitcoin_price();
    
    function bitcoin_price() 
    {
        var bitcoin_price, cot_amount, value, value_discount, discount, btc_key, min, max, current_time, one_discount, two_discount, zero_discount;
        $.ajax({
            url:'https://api.coinmarketcap.com/v2/ticker/1/',
            dataType:'json',
            success:function(json)
            {
                bitcoin_price = json['data']['quotes']['USD']['price'];
                cot_amount = $('#cot-amount').val();
                value = (1.0 / bitcoin_price) * 0.5 * cot_amount;
                value = Math.round(value * 100000000) / 100000000;
                
                if ($('#public-sale').length)
                {
                    current_time = new Date();
                    one_discount = new Date('June 28, 2018 00:00:00');
                    two_discount = new Date('July 4, 2018 00:00:00');
                    zero_discount = new Date('July 11, 2018 00:00:00');
                    
                    if (current_time < zero_discount)
                    {
                        if (current_time < one_discount) 
                        {
                            value_discount = value * 0.8;
                            discount = value * 0.2;
                        }
                        else if ((one_discount <= current_time) && (current_time < two_discount)) 
                        {
                            value_discount = value * 0.9;
                            discount = value * 0.1;
                        }
                        else if (two_discount <= current_time) 
                        {
                            value_discount = value * 0.95;
                            discount = value * 0.05;
                        }
                    }
                    else
                    {
                        value_discount = value;
                        discount = 0;
                    }
                }
                else if ($('#private-sale').length)
                {
                    if (value >= 0.05)
                        if (value >= 0.1)
                        {
                            value_discount = value * 0.5;
                            discount = value * 0.5;
                        }
                        else
                        {
                            value_discount = value * 0.6;
                            discount = value * 0.4;
                        }
                    else
                    {
                        value_discount = value;
                        discount = 0;
                    }
                }

                value_discount = Math.ceil(value_discount * 100000000) / 100000000;
                discount = Math.floor(discount * 100000000) / 100000000;

                if ($('#public-sale').length)
                    min = Math.round(0.01 * bitcoin_price * 2.0 * 10000000) / 10000000;
                else if ($('#private-sale').length)
                    min = Math.round(0.05 * bitcoin_price * 2.0 * 10000000) / 10000000;

                max = 100000;
                btc_key = $('#btc_key').val();
                $('#key_or_account').val(btc_key);
                $('#conversion-amout').val(value);
                $('#amount-discount').val(discount);
                $('#amount-total').val(value_discount);
                $('#cot-amount').attr({ 'max': max, 'min': min });
            }
        });
    }

    function ethereum_price() 
    {
        var ethereum_price, cot_amount, bitcoin_value, value, value_discount, discount, eth_key, bitcoin_price, min, max, current_time, one_discount, two_discount, zero_discount;
        $.ajax({
            url:'https://api.coinmarketcap.com/v2/ticker/1/',
            dataType:'json',
            success:function(json)
            {
                bitcoin_price = json['data']['quotes']['USD']['price'];

                if ($('#public-sale').length)
                    min = Math.round(0.01 * bitcoin_price * 2.0 * 10000000) / 10000000;
                else if ($('#private-sale').length)
                    min = Math.round(0.05 * bitcoin_price * 2.0 * 10000000) / 10000000;

                max = 100000;
                $('#cot-amount').attr({ 'max': max, 'min': min });
                $.ajax({
                    url:'https://api.coinmarketcap.com/v2/ticker/1027/',
                    dataType:'json',
                    success:function(json)
                    {
                        ethereum_price = json['data']['quotes']['USD']['price'];
                        cot_amount = $('#cot-amount').val();
                        value = (1.0 / ethereum_price) * 0.5 * cot_amount;
                        value = Math.round(value * 100000000) / 100000000;
                        
                        if ($('#public-sale').length)
                        {
                            current_time = new Date();
                            one_discount = new Date('June 28, 2018 00:00:00');
                            two_discount = new Date('July 4, 2018 00:00:00');
                            zero_discount = new Date('July 11, 2018 00:00:00');
                            
                            if (current_time < zero_discount)
                            {
                                if (current_time < one_discount) 
                                {
                                    value_discount = value * 0.8;
                                    discount = value * 0.2;
                                }
                                else if ((one_discount <= current_time) && (current_time < two_discount)) 
                                {
                                    value_discount = value * 0.9;
                                    discount = value * 0.1;
                                }
                                else if (two_discount <= current_time) 
                                {
                                    value_discount = value * 0.95;
                                    discount = value * 0.05;
                                }
                            }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }
                        else if ($('#private-sale').length)
                        {

                            bitcoin_value = (ethereum_price / bitcoin_price) * value;
                            bitcoin_value = Math.round(bitcoin_value * 100000000) / 100000000;

                            if (bitcoin_value >= 0.05)
                                if (value >= 0.1)
                                {
                                    value_discount = value * 0.5;
                                    discount = value * 0.5;
                                }
                                else
                                {
                                    value_discount = value * 0.6;
                                    discount = value * 0.4;
                                }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }

                        value_discount = Math.ceil(value_discount * 100000000) / 100000000;
                        discount = Math.floor(discount * 100000000) / 100000000;

                        eth_key = $('#eth_key').val();
                        $('#key_or_account').val(eth_key);
                        $('#conversion-amout').val(value);
                        $('#amount-discount').val(discount);
                        $('#amount-total').val(value_discount);
                    }
                });
            }
        });
    }

    function dash_price() 
    {
        var dash_price, cot_amount, bitcoin_value, value, value_discount, discount, dash_key, bitcoin_price, min, max, current_time, one_discount, two_discount, zero_discount;
        $.ajax({
            url:'https://api.coinmarketcap.com/v2/ticker/1/',
            dataType:'json',
            success:function(json)
            {
                bitcoin_price = json['data']['quotes']['USD']['price'];

                if ($('#public-sale').length)
                    min = Math.round(0.01 * bitcoin_price * 2.0 * 10000000) / 10000000;
                else if ($('#private-sale').length)
                    min = Math.round(0.05 * bitcoin_price * 2.0 * 10000000) / 10000000;

                max = 100000;
                $('#cot-amount').attr({ 'max': max, 'min': min });
                $.ajax({
                    url:'https://api.coinmarketcap.com/v2/ticker/131/',
                    dataType:'json',
                    success:function(json)
                    {
                        dash_price = json['data']['quotes']['USD']['price'];
                        cot_amount = $('#cot-amount').val();
                        value = (1.0 / dash_price) * 0.5 * cot_amount;
                        value = Math.round(value * 100000000) / 100000000;
                        
                        if ($('#public-sale').length)
                        {
                            current_time = new Date();
                            one_discount = new Date('June 28, 2018 00:00:00');
                            two_discount = new Date('July 4, 2018 00:00:00');
                            zero_discount = new Date('July 11, 2018 00:00:00');
                            
                            if (current_time < zero_discount)
                            {
                                if (current_time < one_discount) 
                                {
                                    value_discount = value * 0.8;
                                    discount = value * 0.2;
                                }
                                else if ((one_discount <= current_time) && (current_time < two_discount)) 
                                {
                                    value_discount = value * 0.9;
                                    discount = value * 0.1;
                                }
                                else if (two_discount <= current_time) 
                                {
                                    value_discount = value * 0.95;
                                    discount = value * 0.05;
                                }
                            }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }
                        else if ($('#private-sale').length)
                        {
                            bitcoin_value = (dash_price / bitcoin_price) * value;
                            bitcoin_value = Math.round(bitcoin_value * 100000000) / 100000000;

                            if (bitcoin_value >= 0.05)
                                if (bitcoin_value >= 0.1)
                                {
                                    value_discount = value * 0.5;
                                    discount = value * 0.5;
                                }
                                else
                                {
                                    value_discount = value * 0.6;
                                    discount = value * 0.4;
                                }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }

                        value_discount = Math.ceil(value_discount * 100000000) / 100000000;
                        discount = Math.floor(discount * 100000000) / 100000000;

                        dash_key = $('#dash_key').val();
                        $('#key_or_account').val(dash_key);
                        $('#conversion-amout').val(value);
                        $('#amount-discount').val(discount);
                        $('#amount-total').val(value_discount);
                    }
                });
            }
        });
    }

    function stellar_price() 
    {
        var stellar_price, cot_amount, bitcoin_value, value, value_discount, discount, stellar_key, bitcoin_price, min, max, current_time, one_discount, two_discount, zero_discount;
        $.ajax({
            url:'https://api.coinmarketcap.com/v2/ticker/1/',
            dataType:'json',
            success:function(json)
            {
                bitcoin_price = json['data']['quotes']['USD']['price'];
                
                if ($('#public-sale').length)
                    min = Math.round(0.01 * bitcoin_price * 2.0 * 10000000) / 10000000;
                else if ($('#private-sale').length)
                    min = Math.round(0.05 * bitcoin_price * 2.0 * 10000000) / 10000000;
                
                max = 100000;
                $('#cot-amount').attr({ 'max': max, 'min': min });
                $.ajax({
                    url:'https://api.coinmarketcap.com/v2/ticker/512/',
                    dataType:'json',
                    success:function(json)
                    {
                        stellar_price = json['data']['quotes']['USD']['price'];
                        cot_amount = $('#cot-amount').val();
                        value = (1.0 / stellar_price) * 0.5 * cot_amount;
                        value = Math.round(value * 10000000) / 10000000;
                        
                        if ($('#public-sale').length)
                        {
                            current_time = new Date();
                            one_discount = new Date('June 28, 2018 00:00:00');
                            two_discount = new Date('July 4, 2018 00:00:00');
                            zero_discount = new Date('July 11, 2018 00:00:00');
                            
                            if (current_time < zero_discount)
                            {
                                if (current_time < one_discount) 
                                {
                                    value_discount = value * 0.8;
                                    discount = value * 0.2;
                                }
                                else if ((one_discount <= current_time) && (current_time < two_discount)) 
                                {
                                    value_discount = value * 0.9;
                                    discount = value * 0.1;
                                }
                                else if (two_discount <= current_time) 
                                {
                                    value_discount = value * 0.95;
                                    discount = value * 0.05;
                                }
                            }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }
                        else if ($('#private-sale').length)
                        {
                            bitcoin_value = (stellar_price / bitcoin_price) * value;
                            bitcoin_value = Math.round(bitcoin_value * 100000000) / 100000000;

                            if (bitcoin_value >= 0.05)
                                if (bitcoin_value >= 0.1)
                                {
                                    value_discount = value * 0.5;
                                    discount = value * 0.5;
                                }
                                else
                                {
                                    value_discount = value * 0.6;
                                    discount = value * 0.4;
                                }
                            else
                            {
                                value_discount = value;
                                discount = 0;
                            }
                        }

                        value_discount = Math.ceil(value_discount * 10000000) / 10000000;
                        discount = Math.floor(discount * 10000000) / 10000000;
                        stellar_key = $('#stellar_key').val();
                        $('#key_or_account').val(stellar_key);
                        $('#conversion-amout').val(value);
                        $('#amount-discount').val(discount);
                        $('#amount-total').val(value_discount);
                    }
                });
            }
        });
    }

    $('#cot-amount').change(function() 
    {
        $.ajax({
            url:'https://api.coinmarketcap.com/v2/ticker/1/',
            dataType:'json',
            success:function(json)
            {
                var currency_select, bitcoin_price_val, min, max, value;
                
                currency_select = $('#currency-buy').val();
                bitcoin_price_val = json['data']['quotes']['USD']['price'];

                if ($('#public-sale').length)
                    min = Math.round(0.01 * bitcoin_price_val * 2.0 * 10000000) / 10000000;
                else if ($('#private-sale').length)
                    min = Math.round(0.05 * bitcoin_price_val * 2.0 * 10000000) / 10000000;
                
                max = 100000;

                value = $('#cot-amount').val();
                value = Math.round(value * 10000000) / 10000000;
                
                if (isNaN(value)) 
                {
                    $('#cot-amount').val(Math.min(value, min));
                    return;
                }

                $('#cot-amount').val(Math.max(value, min));
                value = $('#cot-amount').val();
                $('#cot-amount').val(Math.min(value, max));

                switch (currency_select) 
                {
                    case '1':
                        bitcoin_price();
                        break;
                    case '2':
                        ethereum_price();
                        break;
                    case '3':
                        dash_price();
                        break;
                    case '4':
                        stellar_price();
                        break;
                }
            }
        });
    });

    $('#send-transaction').click(function() 
    {
        if ($('#coinet_form_transaction').valid())
            $('#coinet_form_transaction').submit();
    });

})(jQuery);

var toYear, toMonth, initialMoth, toDay, initialDay, toHour, toMinute, toSecond, initialHour, initialMinute, initialSecond;

toYear = 2018;
toMonth = 5;
initialMoth = 2;
toDay = 22;
initialDay = 30;
toHour = 9;
toMinute = 59;
toSecond = 59;

function countDown()
{
    var actual_date, final_date;

    actual_date = new Date();
    final_date = new Date(toYear, toMonth, toDay, toHour, toMinute, toSecond);
 
    if(actual_date > final_date)
    {
        toYear = 2018;
        toMonth = 10;
        initialMoth = 5;
        toDay = 28;
        initialDay = 22;
        toHour = 23;
        toMinute = 59;
        toSecond = 59;
        initialHour = 9; 
        initialMinute = 0; 
        initialSecond = 0;
        count_calculation(1);
    }
    else
        count_calculation(0);
}

function count_calculation(in_or_out) 
{
    var new_month, new_day, new_hour, new_minute, new_second, initial_date, actual_date, final_date, dif_absolute, dif_absolute_seconds, dif, dif_seconds, percentage;

    new_month = 0;
    new_day = 0;
    new_hour = 0;
    new_minute = 0;
    new_second = 0;

    if (in_or_out) 
    {
        initial_date = new Date(toYear, initialMoth, initialDay, initialHour, initialMinute, initialSecond);
        actual_date = new Date();
        final_date = new Date(toYear, toMonth, toDay, toHour, toMinute, toSecond);
    }
    else
    {
        initial_date = new Date(toYear, initialMoth, initialDay);
        actual_date = new Date();
        final_date = new Date(toYear, toMonth, toDay, toHour, toMinute, toSecond);
    }

    dif_absolute = final_date.getTime() - initial_date.getTime();
    dif_absolute_seconds = dif_absolute / 1000;
    
    new_second = new_second + toSecond - actual_date.getSeconds();
  
    if(new_second < 0)
    {
        new_second = 60 + new_second;
        new_minute = -1;
    }
    
    if (new_second < 10)
        new_second = '0' + new_second;
    $('#seconds').text(new_second);

    new_minute = new_minute + toMinute - actual_date.getMinutes();
  
    if(new_minute < 0)
    {
        new_minute = 60 + new_minute;
        new_hour = -1;
    }
    
    if (new_minute < 10)
        new_minute = '0' + new_minute;
    $('#minutes').text(new_minute);

    new_hour = new_hour + toHour - actual_date.getHours();
    
    if(new_hour < 0)
    {
        new_hour = 24 + new_hour;
        new_day = -1;
    }

    if (new_hour < 10)
        new_hour = '0' + new_hour;
    $('#hours').text(new_hour);
 
    new_day = new_day + toDay - actual_date.getDate();
    
    if(new_day <0)
    {
        x = actual_date.getMonth();
        if(x == 0 || x == 2 || x == 4 || x == 6 || x == 7 || x == 9 || x == 11)
            new_day = 31 + new_day;
        if(x == 3 || x == 5 || x == 8 || x == 10)
            new_day = 30 + new_day;
        if(x == 1)
        {
            if(actual_date.getYear() / 4 - Math.floor(actual_date.getYear() / 4) == 0)
                actual_date = 29 + actual_date;
            else
                actual_date = 28 + actual_date;
        }
    }

    if (new_day < 10)
        new_day = '0' + new_day;
    $('#days').text(new_day);
    
    if (toMonth - actual_date.getMonth() - 1 >= 0 && actual_date.getDate() > toDay)
        new_month = -1;

    new_month = new_month + toMonth - actual_date.getMonth();
    
    if(new_month < 0)
        new_month = 11 + new_month;

    if (new_month < 10)
        new_month = '0' + new_month;
    $('#months').text(new_month);


    dif = final_date.getTime() - actual_date.getTime();
    dif_seconds = dif / 1000;

    percentage = Math.round(100 - (dif_seconds * 100) / dif_absolute_seconds);
    $('#waiting_bar').css({ 'width': percentage+'%' });

    setTimeout('countDown()',1000);
}

function showPassword() 
{
    var key_attr;
    key_attr = $('#password').attr('type');
    if(key_attr != 'text') 
    {
        
        $('.checkbox').addClass('show');
        $('#password').attr('type', 'text');
    } 
    else 
    {
        $('.checkbox').removeClass('show');
        $('#password').attr('type', 'password');
    }
}

function read_URL(input) 
{
    if (input.files && input.files[0]) 
    {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#picture-preview').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}