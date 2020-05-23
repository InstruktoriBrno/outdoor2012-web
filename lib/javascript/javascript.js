function cSet(liid,url){
  for(i=2;i<=9;i++) if(document.getElementById('m'+i)) document.getElementById('m'+i).className='';
  document.getElementById(liid).className='act';

  if (xmlHttp.readyState == 4 || xmlHttp.readyState == 0)
  {
    xmlHttp.open("GET", "lib/ajax.php?filename=" + url, true);
    xmlHttp.onreadystatechange = obsluha;
    xmlHttp.send(null);
  }
  
  return false;
}

function obsluha(){
  if(xmlHttp.readyState == 4){
    var obsah=xmlHttp.responseXML.getElementsByTagName('content')[0].firstChild.nodeValue;
    if(obsah!=null){ document.getElementById("conpage").innerHTML = obsah; }
  }
}

function createXmlHttpRequestObject(){
  var xmlHttp;
  try{ xmlHttp = new XMLHttpRequest(); }
  catch(e){
    var XmlHttpVersions = new Array("MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP");
    for (var i=0; i<XmlHttpVersions.length && !xmlHttp; i++){
      try{ xmlHttp = new ActiveXObject(XmlHttpVersions[i]); }
      catch(e){}
    }
  }
  if (!xmlHttp) alert("Error creating the XMLHttpRequest object."); else return xmlHttp;
}
