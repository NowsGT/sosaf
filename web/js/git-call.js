/**
 * Created by nasmin on 9/8/14.
 */

$(document).ready(function() {
	
	$('#ghapidata').html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
	var outhtml;
	
	var git_call = function() {

		function processData(data) {
			
			if(data.length == 0) {
                outhtml = '<p>No Data Found!</p>';
            }
	        else {
	            outhtml = '<div class="CSS_Table_Example"><table>';
	            $.each(data, function(index) {
	              outhtml = outhtml + '<tr><td> Commited By ' + data[index].commit.author.name + ' on ' + data[index].commit.author.date + '</td></tr>';
	            });
	            outhtml = outhtml + '</table></div>'; 
	        }
	        $('#ghapidata').html(outhtml);
		}
		
        function errFunc() {
			
			console.log("Error Alert");
		    outhtml = '<p>No Data Found!</p>';
			    $('#ghapidata').html(outhtml);
		}

		$.ajax({
			type : "GET",
			cache : false,
			url : "https://api.github.com/repos/itcuties/Axis-2-client/commits",
			async : false,
			success : processData,
			error : errFunc,
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			context : document.body
		});

	};
	
		
	addLoadEvent(git_call);
    var interval = 1000 * 60 * 10;
	setInterval(git_call, interval);

});