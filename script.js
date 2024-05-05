document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var dateString = today.toDateString();

    var calendarElement = document.getElementById('calendar');
    calendarElement.innerText = 'Today\'s date is: ' + dateString;
});
