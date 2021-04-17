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
        updateMetatable(initSample);
        updateCharts(initSample);
    
    });

};



//Update Function
function updateInfo(name){

    updateMetatable(name);
    updateCharts(name);

};



//Update Charts
function updateCharts(){

    //Bar Plot Trace 1

var trace1 = {
    
    x: slicedIds.reverse(),
    y: slicedValues.reverse(),
    text: slicedLabels.reverse(),
    type: "bar",
    orientation: "h",

    };

var barData = [trace1];

var barData =[{
   


}];

var barlayout={




};


Plotly.newplot("bar", bardata, barlayout);




//Bubble Chart Trace 2

var trace2 ={
    x: otuIds,
    y: sampleValues,
    text: otuLabels,
    mode: "markers",
    marker: {
    color: otuIds,
    size: sampleValues
}};


var bubbleData = [trace2];

var bubblelayout = {


};

Plotly.newPlot("bubble", bubbleData, bubblelayout); 

};






//Update Metadata Table
function updateMetatable(){

    d3.json(readpath).then(data =>{
        var metadata = data.metadata;
        var resultsData = metadata.filter(d => d.id == sample);
        var finaldata = resultsData[0];
        var demographics = d3.select("#sample-metadata");
        demomographics.html("");
        Object.entries(finaldata).forEach(([key, value]) => {
            demographics.append("h6").text(`${key}: ${value}`)
        });
        console.log(finaldata);
    })

};


//Call Init
init();