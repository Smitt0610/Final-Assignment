/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value


// Declare variable for cost per day
document.addEventListener('DOMContentLoaded', function() {
    let costPerDay = 35; // Default value
    let daysSelected = [];
    let fullDayButton = document.getElementById('full'); // Declare variable for full day button
    let halfDayButton = document.getElementById('half'); // Declare variable for half day button
    let clearButton = document.getElementById('clear-button'); // Declare variable for clear button
    let calculatedCost = document.getElementById('calculated-cost'); // Declare variable for calculated cost
    let dayButtons = document.querySelectorAll('.day-selector li'); // Declare variable for day buttons

    /********* colour change days of week *********/
    dayButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            let day = button.id; // Get ID of button
            if (!daysSelected.includes(day)) { // If day is not in daysSelected array
                daysSelected.push(day);
                button.classList.add('clicked');
            } else { // If day is in daysSelected array
                let index = daysSelected.indexOf(day);
                daysSelected.splice(index, 1);
                button.classList.remove('clicked');
            }
            recalculateTotalCost(); // Call recalculateTotalCost function
        });
    });

    /********* clear days *********/
    clearButton.addEventListener('click', function() {
        daysSelected.forEach(function(day) { // For each day in daysSelected array
            let button = document.getElementById(day); // Get button by ID
            button.classList.remove('clicked'); // Remove 'clicked' class from button
        });
        daysSelected = []; // Empty daysSelected array
        recalculateTotalCost(); // Recalculate total cost
    });

    /********* change rate *********/
    fullDayButton.addEventListener('click', function() {
        costPerDay = 35;
        fullDayButton.classList.add('clicked'); // Add 'clicked' class to button
        halfDayButton.classList.remove('clicked'); // Remove 'clicked' class from button
        recalculateTotalCost();
    });

    halfDayButton.addEventListener('click', function() {
        costPerDay = 20;
        halfDayButton.classList.add('clicked'); // Add 'clicked' class to button
        fullDayButton.classList.remove('clicked'); // Remove 'clicked' class from button
        recalculateTotalCost();
    });

    function recalculateTotalCost() { // Function to recalculate total cost
        let totalCost = costPerDay * daysSelected.length; // Calculate total cost
        calculatedCost.textContent = totalCost; // Update calculated cost
    }
});
