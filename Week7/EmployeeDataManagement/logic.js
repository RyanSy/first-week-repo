// Link to Firebase
var employeeData = new Firebase("https://ryanbsy.firebaseio.com/");

// Capture Button Click
$("#addEmployee").on("click", function() {

    // Grabbed values from text boxes
    employeeName = $('#employeeName').val().trim();
    role = $('#role').val().trim();
    startDate = $('#startDate').val().trim();
    monthlyRate = $('#monthlyRate').val().trim();


    // Code for handling the push
    employeeData.push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    })

    // Don't refresh the page!
    return false;
});



