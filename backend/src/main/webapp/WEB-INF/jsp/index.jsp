<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Example JSP</title>
</head>
<body>
  <p>
    <%
      String name = "DEV-TI";
      out.println("Course:" + name + "<br>");
    %>
    Name: <%= name %>
  </p>
  
  <p>
    product: <c:out value="${product.name}"/> <br>
    product: ${product.name}<br>
    <%= request.getAttribute("product") %>
  </p>
  
  <table border="1">
    <c:forEach var="product" items="${products}" varStatus="id">
      <tr bgbolor="#${id.count % 2 == 0 ? 'aaee88' : 'ffffff' }" >
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
      </tr>
    </c:forEach>
  </table>
  </table>
  
  <br>
  <% for(int i = 0; i < 5; i++) { %>
    Hello World with for: <%= i+1 %><br>
  <%}%>
</body>
</html>
