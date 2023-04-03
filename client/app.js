function getfreetime() {
    var uifreetime = document.getElementsByName("uifreetime");
    for(var i in uifreetime) {
      if(uifreetime[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getgoout() {
    var uigoout = document.getElementsByName("uigoout");
    for(var i in uigoout) {
      if(uigoout[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }

  function getsex() {
    var uigender = document.getElementsByName("uigender");
    for(var i in uigender) {
      if(uigender[i].checked) {
          return parseInt(i)+1;
      }
    }
    return -1; // Invalid Value
  }
  
  function EstimateGrade() {
    console.log("Estimate Grade button clicked");
    var age = document.getElementById("uiage");
    var motheredu = document.getElementById("uimotheredu");
    var fatheredu = document.getElementById("uifatheredu");
    var travel = document.getElementById("uitravel");
    var study = document.getElementById("uistudy");
    var freetime = getfreetime();
    var goout = getgoout();
    var g1 = document.getElementById("uig1");
    var g2 = document.getElementById("uig2");
    var g3 = document.getElementById("uig3");
  
    var estGrade = document.getElementById("uiEstimatedGrade");
  
    $.post(url, {
        total_age: parseFloat(age.value),
        age: age,
        gender: gender,
    },function(data, status) {
        console.log(data.estimated_grade);
        estGrade.innerHTML = "<h2>" + data.estimated_grade.toString();
        console.log(status);
    });
  }
  

  window.onload = onPageLoad;