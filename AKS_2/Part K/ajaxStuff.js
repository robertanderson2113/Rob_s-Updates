function ajaxStuff(){
	jQuery.ajax({
			type: "POST",
			url: "../login-system/update.php",
			data: 'results=1&test="K"',
			cache:false,
			success: function(response)
			{
				alert("Record successfully updated");
			}
	});
};