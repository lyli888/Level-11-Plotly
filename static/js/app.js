//Read In Data

var readpath = "../../samples.json";

d3.json(readpath).then((data) => {
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;

});

var dropdown = d3.select("#selDataset");

names.forEach(name => { 
    console.log(name);
    var drop_option = dropdown.append("option");
    drop_option.text(name);
});




//Bar Plot

Plotly.newplot("bar", barData);



//Bubble Chart

Plotly.newPlot("bubble", bubbleData); 


//Update Function

function findID(ID){    
    function findId(value) {
    var id = d3.select('#selDataset').property("value")
    console.log(`filter id: ${typeof(id)}`)
    return +value.id === +id
    }}