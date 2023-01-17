//get the user input from the page

//controller function or entry point function (kicks off the whole process)
function fetchUserInput() {
    //get values from page


    let startValue = document.getElementById('startValue').value;

    let endValue = document.getElementById('endValue').value;

    let fizz = document.getElementById('fizzValue').value;

    let buzz = document.getElementById('buzzValue').value;




    //parse our inputs as numbers

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    fizz = parseInt(fizz);
    buzz = parseInt(buzz);



    //verify our inputs are actually numbers (validation)

    if (Number.isInteger(startValue) && Number.isInteger(endValue) && Number.isInteger(fizz) && Number.isInteger(buzz)) {

        let numbersArray = generateNumbers(startValue, endValue);

        displayNumbers(numbersArray, fizz, buzz);


    } else {

        Swal.fire(
            {
                icon: 'error',
                title: 'Oops!',
                text: 'Only integers are allowed for FizzBuzz!'

            }
        );


    }


    //after validation generate our numbrs
    //display them on page



}





//generate our numbers

function generateNumbers(start, end) {

    let numbers = [];

    for (let i = start; i <= end; i++) {

        numbers.push(i);
    }

    return numbers;



}



//display them on page

//view funciton (function is dedicated to making it 'show up' on our web page)
function displayNumbers(numbersArray, fizz, buzz) {
    let tableBody = document.getElementById('results');



    let tableHtml = "";

    for (let i = 0; i < numbersArray.length; i++) {

        let value = numbersArray[i];
        let className = '';

        if (value % fizz == 0 && value % buzz == 0) {
            className = 'fizzbuzz'
            value = 'FIZZBUZZ'
            
        } else if (value % fizz == 0) {
            className = 'fizz'
            value = "FIZZ"
        } else if (value % buzz == 0) {
            className= 'buzz'
            value = 'BUZZ'
        } else {
            
        }


        if (i % 5 == 0) {
            tableHtml = tableHtml + '<tr>'
        }

        let tableRow = `<td class="${className}">${value}</td>`

        tableHtml = tableHtml + tableRow;

        if (i + 1 % 5 == 0) {
            tableHtml = tableHtml + '</tr>'
        }

    }

    tableBody.innerHTML = tableHtml;

}
