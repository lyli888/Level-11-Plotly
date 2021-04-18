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
function updateCharts(sample){

    //Graph Info Vars
    var otuIds = currentdata.otu_ids;
    var sampleValues = currentdata.sample_values;
    var otuLabels = currentdata.otu_labels;

    //Top 10 Slice
    var topTen = otuIds.slice(0,10);
    var topValues = sampleValues.slice(0,10);
    var topLabels = otuLabels.slice(0,10);

    //Bar Plot
    var bartrace = {
        x: topTen.reverse(),
        y: topValues.reverse(),
        text: topLabels.reverse(),
        type: "bar",
        orientation: "h",
    };

    var barData = [bartrace];
   

    var barlayout={


    };



    Plotly.newplot("bar", bardata, barlayout);



    //Bubble Chart

    var bubbletrace ={
        x: otuIds,
        y: sampleValues,
        text: otuLabels,
        mode: "markers",
        marker: {
        color: otuIds,
        size: sampleValues
        }
    };

    var bubbleData = [bubbletrace];

    var bubblelayout = {      
        title: "Bubble Chart: Operational Taxonomic Units",
        margin: {

            l: 150,
            r: 150,
            t: 150, 
            b: 150,
        }
    };

    Plotly.newPlot("bubble", bubbleData, bubblelayout); 

};



//Update Metadata Table
function updateMetatable(sample){

    d3.json(readpath).then(data =>{
        var metadata = data.metadata;
        var resultsdata = metadata.filter(d => d.id == sample);
        var currentdata = resultsdata[0];
        var demographics = d3.select("#sample-metadata");
        demomographics.html("");
        Object.entries(currentdata).forEach(([key, value]) => {
            demographics.append("h6").text(`${key}: ${value}`)
        });
        console.log(currentdata);
    })

};


//Call Init
init();