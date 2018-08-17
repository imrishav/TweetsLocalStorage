 // Variables

 const tweetList =  document.getElementById("tweet-list");
 //Event Listners

 eventListners();

 function eventListners(){

    document.querySelector('#form').addEventListener('submit', newTweet);

    tweetList.addEventListener("click", removeTweet);

    //doucment

    document.addEventListener('DOMContentLoaded', localStorageOnLoad);

 }

 

 function newTweet(e){
     e.preventDefault();
    
    //  console.log("form Submitted");

     //Reading text area value

     const tweet = document.getElementById('tweet').value;

     //

     const removeBtn = document.createElement('a');
     removeBtn.classList = 'remove-tweet';
     removeBtn.textContent = "X";


     //Create Li emeents

     const li = document.createElement("li");

     li.textContent = tweet;
     

     //remove btn

     li.appendChild(removeBtn);

     tweetList.appendChild(li); 

     addTweetLocalStorage(tweet);

     this.reset();
 }


 function removeTweet(e){
    if(e.target.classList.contains('remove-tweet')){
        e.target.parentElement.remove();  
        
    }
    // console.log( ); 
    //Remove From LocalStorage

    removeFromLocalStrorage(e.target.parentElement.textContent);

 }



 function removeFromLocalStrorage(tweet) {
 
    let tweets = getTweetsFromStorage();

    // Remove X fromthe tweet

    const tweetDelete = tweet.substring(0 , tweet.length -1);

    tweets.forEach(function(tweetLS, index){
        if(tweetDelete === tweetLS){
            tweets.splice(index, 1)
        }

    });
    // Save the data
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//add tweet to lcal strg
 function addTweetLocalStorage(tweet){
    let tweets = getTweetsFromStorage();

    //Adding the tweet into the array
    // console.log(tweets);
    tweets.push(tweet);

    // Convert Tweet array into strinf

    localStorage.setItem('tweets', JSON.stringify(tweets));
}
 

function getTweetsFromStorage() {
    let tweets;
    const tweetsLs = localStorage.getItem('tweets');

    //get values

    if(tweetsLs === null){
        tweets = [];
    }else{
        tweets = JSON.parse( tweetsLs ); 
    }

    return tweets;
}

function  localStorageOnLoad(){
    let tweets = getTweetsFromStorage();
    // Looping through Array
    console.log(tweets); 

    tweets.forEach(function(tweet) {
        const removeBtn = document.createElement('a');
        removeBtn.classList = 'remove-tweet';
        removeBtn.textContent = "X";

        console.log(tweets); 
        //Create Li emeents

         const li = document.createElement("li");

        li.textContent = tweet;
     

        //remove btn

         li.appendChild(removeBtn);

        tweetList.appendChild(li);  
    });
}
 //functions


// ============================================


// // Variables
// const tweetList = document.getElementById('tweet-list');


// // Event Listeners
// eventListeners();

// function eventListeners() {
//      // Form Submission
//      document.querySelector('#form').addEventListener('submit', newTweet);

//      // Remove tweet from the list
//      tweetList.addEventListener('click', removeTweet);

//      // Document
//      document.addEventListener('DOMContentLoaded', localStorageOnLoad);
// }


// // Functions

// function newTweet(e) {
//      e.preventDefault();

//      // Read the textarea value
//      const tweet = document.getElementById('tweet').value;

//      // Create the remove button
//      const removeBtn = document.createElement('a');
//      removeBtn.classList = 'remove-tweet';
//      removeBtn.textContent = 'X';

//      // Create an <li> element
//      const li = document.createElement('li');
//      li.textContent = tweet; 
     
//      // Add the remove button to each tweet
//      li.appendChild(removeBtn);

//      // Add to the list
//      tweetList.appendChild(li);

//      // add to Local Storage
//      addTweetLocalStorage(tweet);

//      // Print the alert
//      alert('Tweet Added');

//      this.reset();
// } 

// // Removes the Tweets from the DOM
// function removeTweet(e) {
//      if(e.target.classList.contains('remove-tweet')) {
//           e.target.parentElement.remove();
//      } 

//      // Remove from Storage
//       removeTweetLocalStorage( e.target.parentElement.textContent ) ;
// }

// // Adds the tweets into the local storage
// function addTweetLocalStorage(tweet) {
//      let tweets = getTweetsFromStorage();

//      // Add the tweet into the array
//      tweets.push(tweet);

//      // Convert tweet array into String
//      localStorage.setItem('tweets', JSON.stringify( tweets )  );
// }

// function getTweetsFromStorage() {
//      let tweets;
//      const tweetsLS = localStorage.getItem('tweets');
//      // Get the values, if null is returned then we create an empty array
//      if(tweetsLS === null) {
//           tweets = [];
//      } else {
//           tweets = JSON.parse( tweetsLS ); 
//      }
//      return tweets;
// }

// // Prints Local Storage Tweets on Load
// function localStorageOnLoad() {
//      let tweets = getTweetsFromStorage();

//      // Loop throught storage and then print the values
//      tweets.forEach(function(tweet) {
//           // Create the remove button
//           const removeBtn = document.createElement('a');
//           removeBtn.classList = 'remove-tweet';
//           removeBtn.textContent = 'X';

//           // Create an <li> element
//           const li = document.createElement('li');
//           li.textContent = tweet; 
          
//           // Add the remove button to each tweet
//           li.appendChild(removeBtn);

//           // Add to the list
//           tweetList.appendChild(li);
//      });
// }

// // Removes the tweet from local storage

// function removeTweetLocalStorage(tweet) {
//      // get tweets from storage
//      let tweets = getTweetsFromStorage();

//      // Remove the X from the tweet

//      const tweetDelete = tweet.substring( 0, tweet.length -1 );

//      // Loop Throught  the tweets and remove the tweet that's equal
//      tweets.forEach(function(tweetLS, index) {
//           if(tweetDelete === tweetLS) {
//                tweets.splice(index, 1);
//           }
//      });

//      // Save the data 
//      localStorage.setItem('tweets', JSON.stringify(tweets) );
// }