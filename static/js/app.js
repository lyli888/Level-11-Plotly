//Read Path
var readpath = "../../samples.json";

//Initial Load Function
function init(){

    //D3 Read In Data
    d3.json(readpath).then((data) => {
        var names = data.names;
        var samples = data.samples;
        var metadata = data.metadata;

        var dropdown = d3.select("#selDataset");

        names.forEach(sample => {
            dropDown.append("option")
            .text(sample)
            .property("value",sample);
        });
    
    });

};




function findID(value){    
    var id = d3.select('#selDataset').property("value")
    return +value.id === +id
    };




//Load Window
d3.select(window).on('load', init(data));


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


Plotly.newplot("bar", barData, barLayout);



//Bubble Chart

Plotly.newPlot("bubble", bubbleData); 


//Update Function

function updateInfo(ID){    
    console.log(ID);
    updateDemography (ID);
    updatePlots(ID);
    updateGauge(ID);
};

init();