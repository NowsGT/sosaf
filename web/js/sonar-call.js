/**
 * Created by nasmin on 9/8/14.
 */

$(document).ready(function() {
	
	$('#sqapidata').html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
	var outhtml;

	var sonar_call = function() {
		
		function processData(json) {
						
			if(json.length == 0) {
                outhtml = '<p><center>No Data Found!</center></p>';
            }
	        else {
	            outhtml = '<div class="CSS_Table_Example"><table>';
	            $.each(json.issues, function(index) {
	              outhtml = outhtml + '<tr><td>' + json.issues[index].message + ' : ' + json.issues[index].severity + '</td></tr>';
	            });
	            outhtml = outhtml + '</table></div>'; 
	            }
	            $('#sqapidata').html(outhtml);
		    }
		
        function errFunc() {
	
	        console.log("Error Alert");
	    	outhtml = '<p>No Data Found!</p>';
	        $('#sqapidata').html(outhtml);
		}


		$.ajax({
			type : "GET",
			url : "http://localhost:9000/api/issues/search?componentRoots=Axis2ClientCuties&format=json",
			success : processData,
			error : errFunc,
			dataType : "jsonp",
			timeout : 5000,
			context : document.body
		});

    };

	addLoadEvent(sonar_call);
	var interval = 1000 * 60 * 10;
	setInterval(sonar_call, interval);

});