// validation script here
var name_reg = /^[a-zA-Z]{5,12}$/;
var phone_reg = /^[0-9]{11}$/;
var email_reg = /^[a-z0-9\.]+[@][a-z]+[\.][a-z]+$/;
var pass_reg = /^[a-z0-9@_-]{8,20}$/;

$('#name').keyup(function()
{
	var name = $(this).val();
	//$('#feed').text(name);
	if(name.match(name_reg))
	{
		$('#feed').text('gud');
	}
	else
	{
		$('#feed').text('bad');
	}
});

$('#phone').keyup(function()
{
	var phone = $(this).val();
	//$('#feed').text(name);
	if(phone.match(phone_reg))
	{
		$('#feed').text('gud');
	}
	else
	{
		$('#feed').text('bad');
	}
});

$('#email').keyup(function()
{
	var email = $(this).val();
	//$('#feed').text(email);
	if(email.match(email_reg))
	{
		$('#feed').text('gud');
	}
	else
	{
		$('#feed').text('bad');
	}
});

$('#pass').keyup(function()
{
	var pass = $(this).val();
	//$('#feed').text(pass);
	if(pass.match(pass_reg))
	{
		$('#feed').text('gud');
	}
	else
	{
		$('#feed').text('bad');
	}
});