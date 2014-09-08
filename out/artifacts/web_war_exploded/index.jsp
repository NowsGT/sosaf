<%-- Created by IntelliJ IDEA. --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>SoSaf DashBoard</title>
      <link href="css/inettuts.css" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="css/table.css" type="text/css" />
      <link rel="stylesheet" href="css/style.css" type="text/css" />
  </head>
  <body>

  <div id="head">
      <h1>SoSaf DashBoard</h1>
  </div>

  <div id="columns">

      <ul id="column1" class="column">
          <li class="widget color-green">
              <div class="widget-head">
                  <h3>Commits</h3>
              </div>
              <div class="widget-content">
                  <div id="ghapidata" class="clearfix">
                  </div>
              </div>
          </li>
          <!--li class="widget color-red">
              <div class="widget-head">
                  <h3>Software Metrics</h3>
              </div>
              <div class="widget-content">
                  <div id="sq1apidata" class="clearfix">
                  </div>
              </div>
          </li-->
      </ul>

      <ul id="column2" class="column">
          <li class="widget color-blue">
              <div class="widget-head">
                  <h3>Issues</h3>
              </div>
              <div class="widget-content">
                  <div id="sqapidata" class="clearfix">
                  </div>
              </div>
          </li>
          <li class="widget color-yellow">
              <div class="widget-head">
                  <h3>Builds</h3>
              </div>
              <div class="widget-content">
                  <div id="jkapidata" class="clearfix">
                  </div>
              </div>
          </li>
      </ul>

      <ul id="column3" class="column">
          <li class="widget color-orange">
              <div class="widget-head">
                  <h3>REST Data</h3>
              </div>
              <div class="widget-content">
                  <div id="restapidata" class="clearfix">
                  </div>
              </div>
          </li>
          <!--li class="widget color-white">
              <div class="widget-head">
                  <h3>Widget title</h3>
              </div>
              <div class="widget-content">
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aliquam magna sem, fringilla in, commodo a, rutrum ut, massa.
                      Donec id nibh eu dui auctor tempor. Morbi laoreet eleifend dolor.
                      Suspendisse pede odio, accumsan vitae, auctor non, suscipit at,
                      ipsum. Cras varius sapien vel lectus.</p>
              </div>
          </li-->
      </ul>

  </div>


  <script type="text/javascript" src="http://jqueryjs.googlecode.com/files/jquery-1.2.6.min.js"></script>
  <!-- script type="text/javascript" src="js/jquery-1.10.2.min.js"></script -->
  <!-- script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script -->
  <script type="text/javascript" src="js/jquery-ui-personalized-1.6rc2.min.js"></script>
  <script type="text/javascript" src="js/load-event.js"></script>
  <script type="text/javascript" src="js/git-call.js"></script>
  <script type="text/javascript" src="js/sonar-call.js"></script>
  <script type="text/javascript" src="js/jenkins-call.js"></script>
  <script type="text/javascript" src="js/rest-call.js"></script>
  <script type="text/javascript" src="js/inettuts.js"></script>

  </body>
</html>