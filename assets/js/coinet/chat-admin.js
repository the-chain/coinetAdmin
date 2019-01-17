$('.messages').animate({ scrollTop: $(document).height() }, 'fast');

$('.submit').click(function() 
{
	new_message_admin();
});

$(document).on('click', '.contact', function ()
{
	var new_active_user, src_picture, new_name, new_div_active, send_info;
	new_active_user = $(this).attr('id');
	src_picture = $(this).find('img').attr('src');
	new_name = $(this).find('p').text();
	$('.contact').removeClass('active');
	$(this).addClass('active');
    $(this).find('span').remove();
	$('#user_active').attr('src', src_picture);
	$('#user_name_active').text(new_name);
	$('#sender').val(new_active_user);
	
	send_info = { 'id': new_active_user };
    $('#chat-messages').empty();
});

function create_message_admin(message) 
{
	if($.trim(message) == '')
		return false;
	src_picture =  $('#profile-img').attr('src');
	$('<li class="sent"><img src="' + src_picture + '" alt="picture" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
	$('.message-input input').val(null);
	$('.messages').animate({ scrollTop: $(document).height() }, 'fast');
}

function receive_message_socket_admin(data) 
{
    receive_message_admin(data.from, data.msg);
}

function receive_message_admin(from, message) 
{
    if ($('#sender').val() == from.id) 
    {
        src_picture =  $('#user_active').attr('src');
        $('<li class="replies"><img src="' + src_picture + '" alt="picture" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
        $('.message-input input').val(null);
        $('.messages').animate({ scrollTop: $(document).height() }, 'fast');
    }
    else
    {
        var new_user;
        if (!$('#'+from.id).length) 
        {
            if ($('#sender').val() == 0) 
            {
                new_user = '<li id='+from.id+' class="contact active"><div class="wrap"><img src="/images/profiles/'+from.picture_path+'" alt="picture" /><div class="meta"><p class="name">'+from.name+'</p></div></div></li>';
                $('#contacts-list').prepend(new_user);
                $('#sender').val(from.id);
                $('#user_active').attr('src', '/images/profiles/'+from.picture_path);
                $('#user_name_active').text(from.name);
                $('<li class="replies"><img src="/images/profiles/' + from.picture_path + '" alt="picture" /><p>' + message + '</p></li>').appendTo($('.messages ul'));
            }
            else
            {
                new_user = '<li id='+from.id+' class="contact"><div class="wrap"><span class="contact-status no_read"></span><img src="/images/profiles/'+from.picture_path+'" alt="picture" /><div class="meta"><p class="name">'+from.name+'</p></div></div></li>';
                $('#contacts-list').prepend(new_user);
            }
        }
        else
        {
            var new_div;
            new_div = $('#'+from.id).clone();
            $('#'+from.id).remove();
            new_div.find('.wrap').prepend('<span class="contact-status no_read"></span>');
            $('#contacts-list').prepend(new_div);
        }
    }
}

function add_message_admin(sender_id, message) 
{
 	var from_me;
  	from_me = sender_id == 1;
  	if (from_me)
  		create_message_admin(message);
  	else
  		receive_message_admin($('#sender').val(), message);
  	$('.chatbox_body').animate({ scrollTop: $(document).height() }, 'fast');
}

function new_message_admin() 
{
	var message, recipient_id;
    message = $('.message-input input').val();
    recipient_id = $('#sender').val();
    if(message != '') 
    {
        add_message_admin(1, message);
    }
};