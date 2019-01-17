(function($) 
{

    $(document).ready(function() 
    {
        var $chatbox = $('#chatbox_col'),
            $chatboxTitle = $('.chatbox_title');
            $chatboxIcon = $('.chatbox_title_tray span');
        
        $chatboxTitle.on('click', function() {
            $chatbox.toggleClass('chatbox--tray');
            $chatboxIcon.toggleClass('chatbox--icon');
            $('.chatbox_body').animate({ scrollTop: $(document).height() }, 'fast');
            $('.chatbox_message').focus();
        });
    });

})(jQuery);

    $('.chatbox_button').on('click', function () 
    {
        new_message();
    });

    function new_message() 
    {
        var message, recipient_id;
        message = $('.chatbox_message').val();
        if(message != '') 
        {
            $('.chatbox_message').val('');
            add_message(1, message);
            recipient_id = $('#sender').val();
        }
    }

    function receive_message_socket(data) 
    {
      	receive_message(data.msg);
    }

    function create_message(message) 
    {
        var src_picture, message_div, message_HTML;
        src_picture = $('.user_picture').attr('src');
        message_div = $('<div class="chatbox_body_message chatbox_body_message--left"></div>');
        message_HTML = '<img src="'+src_picture+'" alt="Picture"><p>'+message+'</p>';

        message_div.html(message_HTML);
        $('.chatbox_body').append(message_div);
    }

    function receive_message(message) 
    {
        var src_picture, message_div, message_HTML;
        src_picture = $('.admin_picture').attr('src');
        message_div = $('<div class="chatbox_body_message chatbox_body_message--right"></div>');
        message_HTML = '<img src="'+src_picture+'" alt="Picture"><p>'+message+'</p>';

        message_div.html(message_HTML);
        $('.chatbox_body').append(message_div);
        $('.chatbox_body').animate({ scrollTop: $(document).height() }, 'fast');
    }

    function add_message(sender_id, message) 
    {
     	var from_me;
      	from_me = sender_id == 1;
      	if (from_me)
      		create_message(message);
      	else
      		receive_message(message);
      	$('.chatbox_body').animate({ scrollTop: $(document).height() }, 'fast');
    }

