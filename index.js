var twitter = require('twitter');
let somenum = Math.floor(Math.random() * 100); //Random number generator that goes from 1- 100

//Takes consumer key, consumer secret, access token, and access secrete as an 
//object parameter
var client = new twitter({
    //Consumer key and access token for twitter
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token_key: process.env.token_key,
    access_token_secret: process.env.token_secret 
});

//twitter message
var tweet = { //prints hello this is a test + some random number
    status: ' Hello this is a test of the twitter api ' + somenum + 'I hope this works'
}

//Parameter object that passes the information for the querie
var getter = {
    count: 7

};

var counter = 0;
//callback function that prints out wether the get was successful
function callback(err, data, responce){
    if(err){
        console.log(err);
    }
    else{
        for(objs of data){
            counter++
            console.log('--------------------------------------');
            console.log(counter + ' ' + objs.user.screen_name + ' : ' +  objs.text);
            console.log('--------------------------------------');
        }
    }
}

function callbackPost(err, data, responce){
    if(err){
        console.log(err)
    }

}

//Function that post the status
function tweetPost(){
    var current_hour = date.getHours();
    var current_minute = date.getMinutes();
    var current_second = date.getSeconds();
    console.log('The post has bee made at ' + current_hour + ':' + current_minute + ':' + current_second);
    client.post('statuses/update' , tweet, callbackPost);
}

//Function that gets the values
var date = new Date();

//Function that posts the tweet and returns the time that it was posted
function tweetGet(){
    console.log("The information has been recieved")
    client.get('statuses/home_timeline' , getter , callback); 

}

//Posts every 5 minutes 
setInterval(tweetPost , 300000/4 );