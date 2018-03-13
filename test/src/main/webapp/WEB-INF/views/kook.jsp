<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" pageEncoding="utf-8" %>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello, React</title>
  </head>
  <body>
    <div id="example"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <script src="https://fb.me/react-15.0.1.js"></script>
    <script src="https://fb.me/react-dom-15.0.1.js"></script>

    <script type="text/babel">
      ReactDOM.render(
        <h1>Hello, kook</h1>, 
        document.getElementById('example')
      );
    </script>
  </body>
</html>
