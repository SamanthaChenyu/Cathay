function Validateform(theForm)
{
   var regexp;
   if (theForm.customer_name.value == "")
   {
      alert("請輸入姓名！");
      theForm.customer_name.focus();
      return false;
   }
   regexp = /^[-+]?\d*\.?\d*$/;
   if (!regexp.test(theForm.mobile.value))
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   if (theForm.mobile.value == "")
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   if (theForm.mobile.value.length < 10 )
   {
      alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
      theForm.mobile.focus();
      return false;
   }
   regexp = /^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i;
   if (!regexp.test(theForm.email.value))
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email.focus();
      return false;
   }
   if (theForm.email.value == "")
   {
      alert("請輸入正確格式之電子郵件！（輸入範例：xxx@xxx.xxx）");
      theForm.email.focus();
      return false;
   }
   if (theForm.is_mkt.checked != true)
   {
      alert("請勾選我已詳細閱讀並同意注意事項/個資聲明！");
      return false;
   }      
}
// $("#submit").click(function(theForm){
//    var regexp = /^[-+]?\d*\.?\d*$/;
//    if ($("#nameInput").val()=="")
//    {
//       alert("請輸入姓名！");
//    }
//    else if (!regexp.test($("#numberInput").val()))
//    {
//       alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
//       return false;
//    }
//    else if ($("#numberInput").val().length < 10)
//    {
//       alert("請輸入正確之手機號碼！（輸入範例：0988123456）");
//       return false;
//    }
//    else if ($("#addressInput").val()=="")
//    {
//       alert("請輸入地址！");
//       return false;
//    }
//    else if ($('#is_mkt').is(':checked') != true)
//    {
//       alert("請勾選我已詳細閱讀並同意注意事項/個資聲明！");
//       return false;
//    } else {
//       SendScore();
//    }
// })

// google 表單
        // function SendScore(){
        //     $.get("https://script.google.com/a/cw.com.tw/macros/s/AKfycbyN4zyecF7mbGuHr1IO_lBP9j6ds6eUSW43s3w7_NLgGsnGkNh6/exec", {
        //                 "number": document.getElementById("numberInput").value,
        //                 "name": document.getElementById("nameInput").value,
        //                 "address": document.getElementById("addressInput").value
        //             },
        //             function () {
        //                 location.replace("http://topic.cw.com.tw/test/2017cathay_forum/index.html?tks#sec3");
        //             });
        // } 