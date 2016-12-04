$(document).ready(function(){    
    $('#search_res').click(function(){
    $('.well').remove(); //removes element when new search is initialized...
		var s = $('#search').val(); // getting value from user....		
		$.ajax({
			url:"https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srlimit=8&callback=?&srsearch="+s,
			type:"GET",
			dataType:"jsonp",
			success: function(responseData){
				
			//Displaying Obtained Data ... // 
				for(var i=0;i<responseData.query.search.length ;i++){
					$('.searsh-result').after(
							'<div class="well"><h3>'+responseData.query.search[i].title+'</h3>'
							+ responseData.query.search[i].snippet
							+'<hr/><a href="https://en.wikipedia.org/wiki/' + responseData.query.search[i].title 
							+'">View Full Details From Wiki</a></div>').addClass('anim',1000,'easeinOutBounce');	
					 
				}											
			},
			error: function(){
				alert('OOPS..! ERROR OCCURED WHILE SEARCHING DATA .... ! ');		
			}
			
		});
		//ajax ebds here 
    });//keyup ends here 
});//functioin ends here 
