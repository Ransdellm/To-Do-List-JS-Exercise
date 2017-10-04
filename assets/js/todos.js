// Check off specific Todos by clicking
$('ul').on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete Todos
$("ul").on("click", ".delete", function(event){
	// .parent retrieves the li that the delete-class span is contained within
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// stop the click from also acting on the li, ul, and div
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		// grabbing text from input
		var todoText = $(this).val();
		$(this).val("");
		// create a new li and add to ul
		$("ul").append("<li><span class = 'delete'><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

// Fade the input by clicking the plus symbol in the h1
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});