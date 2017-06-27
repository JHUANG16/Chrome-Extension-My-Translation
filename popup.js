function SendRequest(){
  var sourceObject = document.getElementById('inputTextArea');
  var sourceText = sourceObject.value.trim();
  var apiKey = "trnsl.1.1.20170625T184246Z.809ebf9a5556e269.9a3068aab4b1a956ebf6bc50ce9902d55117eb2f";
  var webServiceUrl = "https://translate.yandex.net/api/v1.5/tr.json/translate?key="+apiKey+"&text="+sourceText+"&lang=en-zh&format=html";

  $.ajax({
      type:"POST",
      url: webServiceUrl,
      contentType:"application/json; charset=utf-8",
      success: function(data){
        PopulateResult(data);
      },
      error: function(x,y,z){
        console.log("Error");
      }
  });
}

function PopulateResult(data){
  var result = data.text[0];
  document.getElementById('outputTestArea').value = result;
}

function ClearTextArea(){
  document.getElementById('inputTextArea').value = "";
  document.getElementById('outputTestArea').value = "";
}

document.addEventListener('DOMContentLoaded', function(){
    var inputBottom = document.getElementById('translateBtn');
    inputBottom.addEventListener('click', function() {
        SendRequest();
    });

    var clearBottom = document.getElementById('clearBtn');
    clearBottom.addEventListener('click', function() {
        ClearTextArea();
    }); 
});

