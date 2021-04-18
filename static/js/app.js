//Read Path
var readpath = "../../samples.json";

//Init  Function To Load Dropdown menu at start
function initialize(){

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


//Update Charts
function updateCharts(sample){
    d3.json(readpath).then(data => {

        var samples = data.samples;
        var filteredsample = samples.filter(d => d.id == sample);
        var currentsample = filteredsample[0];
        console.log(currentsample);

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
            title: "Top 10 Samples: Operational Taxonomic Units",
            height: 500,
            width: 1000,
        };

        Plotly.newplot("bar", bardata, barlayout);

        //Bubble Chart
        var bubbletrace = {
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
                l: 50,
                r: 50,
                t: 50, 
                b: 50,
        }
    };

        Plotly.newPlot("bubble", bubbleData, bubblelayout); 

    });
};


//Update Metadata Table
function updateMetatable(sample){

    d3.json(readpath).then(data =>{
        var metadata = data.metadata;
        var filteredmeta = metadata.filter(d => d.id == sample);
        var currentmeta = filteredmeta[0];
        var demographics = d3.select("#sample-metadata");
        demomographics.html("");
        Object.entries(currentdata).forEach(([key, value]) => {
            demographics.append("h6").text(`${key}: ${value}`)
        });
        console.log(currentmeta);
    })

};

//Update Function
function optionChanged(name){

    updateMetatable(name);
    updateCharts(name);

};


//Call Init
initialize();