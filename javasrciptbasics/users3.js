/**
 * Created by 212585857 on 11/3/2016.
 */
window.onload = function () {
  var event = new Event('build'),
      counter = 0,
  obj ,
      obj2,
      obj3;

  var oReq = new XMLHttpRequest();
  oReq.open("GET", "user.json",true)
  oReq.send();
  oReq.onload = function () {
    console.log(oReq.statusText);
    if(oReq.status == '200'){
      console.log(oReq.status);
      obj = JSON.parse(oReq.responseText);
      console.log(oReq.responseText);
      document.getElementById('demo1').dispatchEvent(event);
      oReq2.send();
      oReq3.send();
    }
    else
      alert('NEMJO')

  }

  var oReq2 = new XMLHttpRequest();
  oReq2.open("GET", "user2.json",true)

  oReq2.onload = function () {
    console.log(oReq2.responseText);
    obj2 = JSON.parse(oReq2.responseText);
    document.getElementById('demo1').dispatchEvent(event);

  }

  var oReq3 = new XMLHttpRequest();
  oReq3.open("GET", "user3.json",true)

  oReq3.onload = function () {
    console.log(oReq3.responseText);
    obj3 = JSON.parse(oReq3.responseText);
    document.getElementById('demo1').dispatchEvent(event);
  }


  document.getElementById('demo1').addEventListener('build', function () {
    if (counter == 2) {
      document.getElementById("demo1").innerHTML += obj.name + obj2.name + obj3.name;
      console.log("ok");
    }
    else {
      counter++;
    }
  })
}
