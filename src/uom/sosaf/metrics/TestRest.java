package uom.sosaf.metrics;

import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONArray;
import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;

/**
 * Created by nasmin on 9/8/14.
 */

@Path("v1/test")
public class TestRest {

    /*@Path("/test")
    @GET
    @Produces(MediaType.TEXT_HTML)
    public String testRest(){

        return "<p>JAVA Web Service</p>";

    }*/

    @Path("/json")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response testJson(){

        String returnString = null;
        Response rb = null;

        JSONArray obj = new JSONArray();
        try {
            for(int i=0;i<3;i++){

                JSONObject list1 = new JSONObject();
                list1.put("val1",i+1);
                list1.put("val2",i+2);
                list1.put("val3",i+3);

                obj.put(list1);
            }
            returnString = obj.toString();
            rb = Response.ok(returnString).build();
        } catch (JSONException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return rb;
    }

}
