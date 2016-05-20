// $(document).ready(function () {
//   getEmployees();
//
//   // add a movie
//   $('#employeeinfo').on('submit', putEmployee);
// 
// function putEmployee(event) {
//   event.preventDefault();
//
//   var preparedData = dataPrep($(this));
//
//   $.ajax({
//     type: 'PUT',
//     url: '/employees/',
//     data: preparedData,
//     success: function (data) {
//       getEmployees();
//     },
//   });
// }
//
// var values = {};
// $.each($('#employeeinfo').serializeArray(), function(i, field) {
//   values[field.name] = field.value;
// });
//
// function getEmployees(empInfo) {
//   $('#container').append('<div class="person"></div>');
//   var $el = $('#container').children().last();
//
//   $el.append('<p>First Name: ' + empInfo.employeefirstname + '</p>');
//   $el.append('<p>Last Name: ' + empInfo.employeelastname + '</p>');
//   $el.append('<p>ID Number: ' + empInfo.employeeId + '</p>');
//   $el.append('<p>Job Title: ' + empInfo.employeeJobTitle + '</p>');
//   $el.append('<p>Yearly Salary: ' + empInfo.employeeSalary + '</p>');
//   $el.append('<button type="button" class="deleteMe" name="deleteMe">Delete</button>');
// }
