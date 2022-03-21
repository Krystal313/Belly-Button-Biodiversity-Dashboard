const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));
//he syntax used to retrieve data from an external data file
d3.json("samples.json").then(function(data){
    console.log("hello");
});
//to change the printed console message from a simple "hello" to the entire dataset
d3.json("samples.json").then(function(data){
    console.log(data);
});