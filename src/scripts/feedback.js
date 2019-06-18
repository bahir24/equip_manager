// function order_form() {
//   var message = '';
//   var client_email = $(".input__row-1").val();
//   var client_name = $(".input__row-2").val();
//   var client_tel = $(".input__row-3").val();
//   var client_text = $("#.input__row-4").val();

//   if (client_phone == '') {
//     //alert('Пожалуйста, напишите свой номер телефона.');
//     swal({ title: "", text: "Не заполнено поле 'Ваш телефон'", type: "error", confirmButtonText: "ОK", confirmButtonColor: "#CD0117" });
//     return;
//   } else if (client_email == '') {
//     swal({ title: "", text: "Не заполнено поле 'Ваш e-mail'", type: "error", confirmButtonText: "ОK", confirmButtonColor: "#CD0117" });
//     return;
//   } else {
//     message = 'E-mail: ' + client_email + '<br /> Имя: ' + client_name + '<br /> Телефон: ' + client_tel + '<br /> Сообщение: ' + client_text;
//     $.ajax({
//       url: '/mailer/send_letter.php',
//       type: 'post',
//       data: 'mode=call_back&message=' + message,
//       dataType: 'text',
//       success: function (data) {
//         if (data = '0') {
//           swal({ title: "", text: "Ваша заявка успешно отправлена!", type: "success", confirmButtonText: "ОK", confirmButtonColor: "#CD0117" });
//           setTimeout(function () { location.reload(); }, 3000);
//           return;
//         } else {
//           swal({ title: "", text: "Ошибка отправки сообщения", type: "error", confirmButtonText: "ОK", confirmButtonColor: "#CD0117" });
//           return;
//         }
//       }
//     });
//   }
// }