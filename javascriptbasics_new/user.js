/**
 * Created by 212585857 on 11/3/2016.
 */
window.onload = function () {
  var oReq = new XMLHttpRequest();
  oReq.open("GET", "http://localhost:63342/javasrciptbasics/user.json")
  oReq.send();
  oReq.onload = function () {
    console.log(oReq.responseText);
    var obj = JSON.parse(oReq.responseText);
    document.getElementById("demo").innerHTML += obj.name;
  }
}

