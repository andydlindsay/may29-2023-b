# W04D03 - AJAX

### To Do
- [x] AJAX
- [x] XMLHttpRequest (XHR) Object
- [x] Use AJAX to retrieve data from a server
- [x] Use jQuery to update the DOM with the retrieved data
- [x] Use AJAX to submit data to a server
- [x] All without refreshing the browser

### AJAX
* Asynchronous Javascript And XML (eXtensible Markup Language)
* urlencoded, JSON
* our JS is going to make and receive the HTTP requests for us
* XHR object XMLHTTPRequest Object

```xml
<user>
  <username>alice</username>
  <password>1234</password>
</user>
```

```json
{
  "username": "alice",
  "password": "1234"
}
```

```js
$.ajax({
  url: 'http://localhost:8000/urls',
  method: 'GET',
  success: (response) => {},
  error: (error) => {}
})
```

### CDN
* Content Delivery Network



http://localhost:8000/?name=New+Item&tagline=Always+tasty&price=2.99&calories=450














