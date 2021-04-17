//Read Path
var readpath = "../../samples.json";

//Init  Function To Load Dropdown menu at start
function init(){

    //D3 Read In Data
    d3.json(readpath).then(data => {
        var names = data.names;

        var dropdown = d3.select("#selDataset");

        names.forEach(sample => {
            dropdown.append("option")
            .text(sample)
            .property("value",sample);
        });

        var initSample = names[0];
        console.log(initSample);
        updateTable(initSample);
        updateCharts(initSample);
    
    });

};

//Update Function
function updateInfo(name){

    updateTable(name);
    updateCharts(name);

};




//Update Metadata Table
function updateTable(){


};



//Update Charts
function updateCharts(){





};





//Bar Plot Trace 1

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

var barData = [trace1];

var barData =[{
    x:top10sample_values,
    y:top10otu_ids.map(id => ("OTU" + id.toString())),
    type:"bar",
    text:top10otu_labels,
    orientation: "h"
}];

var barlayout={




};


Plotly.newplot("bar", bardata, barlayout);







//Bubble Chart Trace 2

var trace2 =[{


}];


var bubbleData = [trace2];

var bubblelayout = {


};

Plotly.newPlot("bubble", bubbleData, bubblelayout); 









//Call Init
init();