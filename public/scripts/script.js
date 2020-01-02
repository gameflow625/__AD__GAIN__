var configHTML = 'var firebaseConfig = {apiKey:"AIzaSyBSqLpXYG0zTH8V6t-3SP3PSz5d64FqqyA",authDomain:"ad-gain-a5079.firebaseapp.com",databaseURL:"https://ad-gain-a5079.firebaseio.com",storageBucket:"ad-gain-a5079.appspot.com"};'+'firebase.initializeApp(firebaseConfig); var db = firebase.database();var fun =firebase.function';

runOnStartup(async runtime =>
{
	// Code to run before the first layout starts
	initializeFirebase();
});

function initializeFirebase(){
	//var meta1 = document.createElement('meta');
	var script1= document.createElement('script');
	var script2= document.createElement('script');
	var script3= document.createElement('script');
	//var script4= document.createElement('script');
	//var script5= document.createElement('script');
	//var script6= document.createElement('script');
	//var script7= document.createElement('script');
	//meta1.name= "google-signin-client_id";
	//meta1.content="907661578115-llf8areuu3ttuvuvqan60vvnclui060b.apps.googleusercontent.com";
	script1.src= "https://localhost:443/files/firebase-app.js";
	script2.src= "https://localhost:443/files/firebase-auth.js";
	script3.src= "https://localhost:443/files/firebase-database.js";
	//script4.src= "https://localhost:443/firebase.js";
	//script5.src= "https://localhost:443/files/config.js";
	//script6.src= "https://localhost:443/files/common.js";
	//script7.src= "https://localhost:443/files/firebaseui.js";
	
	//document.getElementsByTagName('head')[0].appendChild(meta1);
	document.getElementsByTagName('head')[0].appendChild(script1);
	document.getElementsByTagName('head')[0].appendChild(script2);
	
	document.getElementsByTagName('head')[0].appendChild(script3);
	//document.getElementsByTagName('head')[0].appendChild(script4);
	//document.getElementsByTagName('head')[0].appendChild(script5);
	//document.getElementsByTagName('head')[0].appendChild(script6);
	//document.getElementsByTagName('head')[0].appendChild(script7);
	
	script3.onload=function(){startFirebase()};
};

function startFirebase() {
	var script8= document.createElement('script');
	script8.innerHTML = configHTML;
	document.getElementsByTagName('body')[0].appendChild(script8);
};
//var provider = new firebase.auth.GoogleAuthProvider();