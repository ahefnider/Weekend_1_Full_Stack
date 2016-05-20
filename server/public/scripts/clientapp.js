  $(document).ready(function () {

    var totalSalary = 0;

    getEmployees();

      $('#employeeinfo').on('submit', postEmployee);

      //  Delete Button. Maybe. Only if it actually works.
      // $('#container').on('click', '.deleteMe', subSalary);
      $('#container').on('click', '.deleteMe', deleted);

      //  clear inputs
      $('#employeeinfo').find('input[type=text]').val('');
      $('#employeeinfo').find('input[type=number]').val('');

  function postEmployee(event) {

         var values = {};

         $.each($('#employeeinfo').serializeArray(), function(i, field) {
           values[field.name] = field.value;
         });

       $.ajax({
         type: 'POST',
         url: '/addemployee',
         data: values,
         success: function (data) {
           getEmployees();
         },
       });
     };

function getEmployees() {
  event.preventDefault();
  $('#container').empty();
    $.ajax({
      type: 'GET',
      url: '/employees',
      success: function (employees) {
        console.log(employees);

        for (i = 0; i < employees.length; i++) {
           appendDom(employees[i]);
        }
      },
    });
  };

  function appendDom(values) {
    $('#container').append('<div class="person"></div>');
    var $el = $('#container').children().last();

    $el.append('<p>First Name: ' + values.firstname + '</p>');
    $el.append('<p>Last Name: ' + values.lastname + '</p>');
    $el.append('<p>ID Number: ' + values.empid + '</p>');
    $el.append('<p>Job Title: ' + values.jobtitle + '</p>');
    $el.append('<p>Yearly Salary: ' + values.salary + '</p>');
    $el.append('<button type="button" class="deleteMe" name="deleteMe">Delete</button>');
    $el.data('empID', values.empid);
    addSalary(values.salary);
  }

   function deleted() {
     event.preventDefault();

     var empID = $(this).parent().data('empID');

     $.ajax({
       type: 'DELETE',
       url: '/delete/' + empID,
       success: function (data) {
         getEmployees();
        },
      });
    };


    // function subSalary(salary) {
    //   totalSalary -= Number(salary);
    //   $('.salary').remove();
    //   $('#allSalary').append('<p class = salary>Total Monthly Wages:' + Math.round(totalSalary/12) + '</p>')
    // }


   function addSalary(salary) {
     totalSalary += Number(salary);
     $('.salary').remove();
     $('#allSalary').append('<p class = salary>Total Monthly Wages:' + Math.round(totalSalary/12) + '</p>')
   }
});
