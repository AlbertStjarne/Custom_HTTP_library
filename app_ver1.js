const http = new easyHTTP;

// GET Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });


// POST

// Create Data
const data = {
  title: 'Custom Post',
  body: 'THis is a custom post'
};

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }
// });


// Update Post, PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//   if(err) {
//         console.log(err);
//       } else {
//         console.log(post);
//       }

// });


// Delete Post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});