//Read In Data

var readpath = "../../samples.json"

d3.json(readpath).then((data) => {
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;
};

var dropdown = d3.select("#selDataset");

names.forEach(name => { 
    console.log(name);
    var drop_option = dropdown.append("option");
    drop_option.text(name);
};

//Bar Plot

Plotly.newplot("bar", barData, barLayout);

//Bubble Chart