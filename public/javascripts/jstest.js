
/*
*
*/
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://www.clairy.co/api/rest-auth/login/",
  "method": "POST",
  "headers": {
    "content-type": "application/json"
  },
  "processData": false,
  "data": "{\"email\":\"tagschool@gmail.com\",\n\t\"password\": \"123456\"\n}"
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

/*
*
*/
var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("GET", "http://www.clairy.co/api/clairy/product");
xhr.setRequestHeader("authorization", "Token 2b8a73e6f988d90d4de3a9436a0d625a40a69d8e");
xhr.setRequestHeader("postman-token", "275d8fc9-50db-3a47-2a61-b89d50fca8f9");

xhr.send(data);
/*
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://www.clairy.co/api/clairy/product",
  "method": "GET",
  "headers": {
    "content-type": "application/jsonp",
    "Authorization": "Token 2b8a73e6f988d90d4de3a9436a0d625a40a69d8e"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
*/

/*
*
*/

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://www.clairy.co/api/clairy/data/0000000010",
  "method": "GET",
  "headers": {
    "authorization": "Token 2b8a73e6f988d90d4de3a9436a0d625a40a69d8e"
  }
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
