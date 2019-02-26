# Custom HTTP library

Building a custom HTTP library in three versions using different syntax.


| Version | File names | Using |
| ------- |:----------|:------|
| ver 1   | app_ver1.js, easyhttp_ver1.js| Ajax, XHR, Callbacks, ES5 promises |
| ver 2   | app_ver2.js, easyhttp_ver2.js| fetch, ES6 classes, promises |
| ver 3   | app_ver3.js, easyhttp_ver3.js| await async from ES7 |

# Trying out the different versions
To try out the different files change the link names in the html file to the file wanted:
```
<script src="easyhttp_ver3.js"></script>
<script src="app_ver3.js"></script>
```

Also uncomment the message that should be run in the app_verX.js file, from start the DELETE user is uncommented.


## Screenshots

GET request, fetching users

<img src="GET_request.gif" width=500>


POST request, adding user (id: 11)

<img src="POST_request.gif" width=500>


PUT request, updating (id: 2)

<img src="PUT_request.gif" width=500>


DELETE request, logging delete message

<img src="DELETE_request.gif" width=500>


## Author
* Albert Stjärne (https://github.com/AlbertStjarne)