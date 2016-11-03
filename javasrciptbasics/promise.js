/**
 * Created by 212585857 on 11/3/2016.
 */
window.onload = function () {

  var oReq = new XMLHttpRequest();
  oReq.open("GET", "user.json",true)
  oReq.send();


  var promise = new Promise(function (resolve, reject) {
    oReq.onload = function () {
      console.log(oReq.statusText);
      if(oReq.status == '200'){
        var obj = JSON.parse(oReq.responseText);
        resolve(obj);
      }
      else {
        alert('NEMJO')
        reject();
      }
    }
  })

  var oReq2 = new XMLHttpRequest();
  oReq2.open("GET", "user2.json",true)
  oReq2.send();

  var promise2 = new Promise(function (resolve, reject) {
    oReq2.onload = function () {
      console.log(oReq2.statusText);
      if(oReq.status == '200'){
        var obj2 = JSON.parse(oReq2.responseText);
        resolve(obj2);
      }
      else {
        alert('NEMJO')
        reject();
      }
    }
  })

  var oReq3 = new XMLHttpRequest();
  oReq3.open("GET", "user3.json",true)
  oReq3.send();

  var promise3 = new Promise(function (resolve, reject) {
    oReq3.onload = function () {
      console.log(oReq3.statusText);
      if(oReq.status == '200'){
        var obj3 = JSON.parse(oReq3.responseText);
        resolve(obj3);
      }
      else {
        alert('NEMJO')
        reject();
      }
    }
  })

  promise.then(function (obj) {
    console.log("its done")
    console.log(obj);
    promise2.then(function(obj2) {
      console.log(obj2);
      console.log("promise2 ok")
    })
    promise3.then(function(obj3) {
      console.log(obj3);
      console.log("promise3 ok")
    })
  }, function () {
    console.log("unsuccesful")
  })

}
