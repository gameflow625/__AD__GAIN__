var iiad = firebase.auth().currentUser.uid; var extractor=firebase.database().ref('/PublicProducts/'+"&Function.Param(1)&"+'/'+"&loopindex&");


var Title1 = extractor.child('Title').once('value').then(function(res){document.getElementById('p2').innerText= res.val()  });
var rulesCon = extractor.child('rules/conversion/');
var extrCoin = rulesCon.child('Coins').once('value').then(function(res2){document.getElementById('p3').innerText= res2.val()});
var rulesJems = extractor.child('rules/conversion/');
var extrJems = rulesJems.child('Jems').once('value').then(function(res3){document.getElementById('p4').innerText= res3.val()});
var img = extractor.child('prodInfo');
var extrImg = img.child('img').once('value').then(function(res4){document.getElementById('p8').innerText=  res4.val()});
var rulesExp = extractor.child('rules/conversion/');
var extrExp = rulesExp.child('Exp').once('value').then(function(res5){document.getElementById('p5').innerText= res5.val()});
var rulesMo = extractor.child('rules/conversion/');
var extrMo = rulesMo.child('Money').once('value').then(function(res6){document.getElementById('p6').innerText= res6.val()});
var rules_period =extractor.child ('rules/');
var ExtrPeriod = rules_period.child('period').once('value').then(function(res7){document.getElementById('p7').innerText=  res7.val()});
var shopInfoBBox = extractor.child('/shopInfo/');
var ExtrBBox = shopInfoBBox.child('bbox').once('value').then(function(res8){document.getElementById('p9').innerText=  '"&Function.Param(1)&"';   });

document.getElementById('p1').innerText = '"&loopindex&"';
