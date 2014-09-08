/**
 * Created by nasmin on 9/8/14.
 */

$(document).ready(function() {

    $('#restapidata').html('<div class="windows8"><div class="wBall" id="wBall_1"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_2"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_3"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_4"><div class="wInnerBall"></div></div><div class="wBall" id="wBall_5"><div class="wInnerBall"></div></div></div>');
    var outhtml;

    var rest_call = function() {

        function processData(data) {

            if(data.length == 0) {
                outhtml = '<p>No Data Found!</p>';
            }
            else {
                outhtml = '<div class="CSS_Table_Example"><table>';
                $.each(data, function(index) {
                    outhtml = outhtml + '<tr><td> Value 1' + data[index].val1 + ' on Value 2 ' + data[index].val2 + '</td></tr>';
                });
                outhtml = outhtml + '</table></div>';
            }
            $('#restapidata').html(outhtml);
        }

        function errFunc() {

            console.log("Error Alert");
            outhtml = '<p>No Data Found!</p>';
            $('#restapidata').html(outhtml);
        }


        $.ajax({
            type : "GET",
            cache : false,
            url : "http://localhost:8080/api/v1/test/json",
            async : false,
            success : processData,
            error : errFunc,
            contentType : "application/json; charset=utf-8",
            dataType : "json",
            context : document.body
        });

    };


    addLoadEvent(rest_call);
    var interval = 1000 * 60 * 10;
    setInterval(rest_call, interval);

});