Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//create bar chart with x variable and y variable
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};
//adding a title to the chart, also titles for x and y axis
var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};
//(refer to html div that contains the chart, refer the array that contains data object,refer to the object that contain the layout details)
Plotly.newPlot("plotArea", [trace], layout);

//Sample exercise
//Drinks: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"]
//Percent of Drinks Ordered: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6]

var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };
   var data = [trace];
   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };
   Plotly.newPlot("plotArea", data, layout);

//Pie chart 
//var trace = {
    //x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
   //    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    //type: 'pie'
  //};
  //var data = [trace];
  //var layout = {
    //title: "'Pie' Chart",
  //};
  //Plotly.newPlot("plotArea", data, layout);

//Instead of using x and y, we change to labels and value in order to create a pie chart
  var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
    "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
   Plotly.newPlot("plotArea", data, layout);

//map() function is used to transform data in JS to each element in an array, like a "for" loop. 
var numbers = [1,2,3,4,5];
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var doubled = numbers.map(function(integer) {
    return integer * 2;
    });

//filter() method performs an operation on every elements in the original array, but it doesn't necessarily return an array whose lenth is the same as the original. 
var numbers = [1,2,3,4,5];
var larger = numbers.filter(function(num){
    return num > 1;
});
console.log(larger);
//[2, 3, 4, 5]

//sort() method
var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement,anotherElement) => anElement -
anotherElement);
//[2, 3, 9, 37, 39]


//slice() Method to select a subset of the data.
var integers = [0,1,2,3,4,5];
var slice1 = integers.slice(0,2);
//[0, 1]

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
//['orangutan', 'salamander']