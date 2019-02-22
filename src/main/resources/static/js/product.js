/*$(document).ready(function() {

	$('#addbtn').click(function() {
		addProduct();
	});

	function addProduct() {
		$.ajax({
			type : "POST",
			url : $('#baseUrl').attr('href') + "inventory/addProduct",
			data : $("#mainform").serializeArray(),
			success : function() {
				console.log();
			},
			error : function(e) {
				console.log("ERROR! : ", e);
			}
		});
	}
});*/