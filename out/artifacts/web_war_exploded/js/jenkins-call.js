/**
 * Created by nasmin on 9/8/14.
 */

$(document).ready(function() {
	
	$('#jkapidata').html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
	var outhtml;
	
	var jenkins_call = function() {

	var jenkinsUrl = "http://localhost:8888/job/Axis2-Build/api/json?tree=builds[number,status,timestamp,id,result]&jsonp=?";
		$.getJSON(jenkinsUrl, function(json) {
							
			if(json.length == 0) {
                outhtml = '<p>No Data Found!</p>';
            }
	        else {
                outhtml = '<div class="CSS_Table_Example"><table>';
	            $.each(json.builds, function(index) {
	            outhtml = outhtml + '<tr><td> Build Number : ' + json.builds[index].number + ' Result : ' + json.builds[index].result + '</td></tr>';
                });
                outhtml = outhtml + '</table></div>';
	        }
	        $('#jkapidata').html(outhtml);
        });
	};
	
		
	addLoadEvent(jenkins_call);
	var interval = 1000 * 60 * 10;
	setInterval(jenkins_call, interval);

});