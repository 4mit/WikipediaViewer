$(document).ready(function(){
    $('#search').keyup(function(){
		var s = $('#search').val();
		
		$.ajax({
			url:"https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srlimit=8&callback=?&srsearch="+s,
			//https://en.wikipedia.org/w/api.php?format=jsonfm&action=query&UTF-8=&list=search&srlimit=8&callback=?&srsearch=hello
			type:"GET",
			dataType:"jsonp",
			success: function(responseData){
				
				//alert(responseData.query.search.length);
				for(var i=0;i<responseData.query.search.length ;i++){
					$('.searsh-result').after(
							'<div class="well"><h3>'+responseData.query.search[i].title+'</h3>'
							+ responseData.query.search[i].snippet
							+'<hr/><a href="https://en.wikipedia.org/wiki/' + responseData.query.search[i].title 
							+'">View Full Details From Wiki</a></div>').addClass('anim',1000,'easeinOutBounce');	
					 console.log(responseData.query.search[i].title);
				}				
				console.log(responseData);
								
			},
			error: function(){
				alert('ERROR OCCURED ');		
			}
			
		});
		//ajax ebds here 
    });//keyup ends here 
});//functioin ends here 
