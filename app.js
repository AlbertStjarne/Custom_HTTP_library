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
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
  if(err) {
        console.log(err);
      } else {
        console.log(post);
      }
});



