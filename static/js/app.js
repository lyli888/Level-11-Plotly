//Read In Data

var readpath = "../../samples.json";

d3.json(readpath).then((data) => {
    var names = data.names;
    var samples = data.samples;
    var metadata = data.metadata;

});

function findID(value){    
    var id = d3.select('#selDataset').property("value")
    return +value.id === +id
    };


var dropdown = d3.select("#selDataset");
d3.select(window).on('load', initialLoad(data));

dropdown.on('change', updateInfo)




//Bar Plot

var trace1 = {
    x: slicedSamples,
    y: slicedOtu.map(function (d) {
        return `OTU ${d} `
    }),
    text: slicedOtuLabels,
    type: "bar",
    orientation: "h",
    marker: {
        color: randomColorBar,
    },
};

barData = [trace1];

var barData =[{
    x:top10sample_values,
    y:top10otu_ids.map(id => ("OTU" + id.toString())),
    type:"bar",
    text:top10otu_labels,
    orientation: "h"
}];


Plotly.newplot("bar", barData);



//Bubble Chart

Plotly.newPlot("bubble", bubbleData); 


//Update Function

function updateInfo(ID){    
    console.log(ID);
    updateDemography (ID);
    updatePlots(ID);
    updateGauge(ID);
};