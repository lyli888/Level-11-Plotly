
//Init Function
function initialize(){
    var dropdown = d3.select("#selDataset");

    //D3 Read In Data
    d3.json("data/samples.json").then(data => {
        var names = data.names;
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
    d3.json("data/samples.json").then(data => {

        var samples = data.samples;
        var filteredsample = samples.filter(d => d.id == sample);
        var currentsample = filteredsample[0];
        console.log(currentsample);

        //Graph Info Vars
        var otuIds = currentsample.otu_ids;
        var sampleValues = currentsample.sample_values;
        var otuLabels = currentsample.otu_labels;

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
        var bardata = [bartrace];
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
        var bubbledata = [bubbletrace];
        var bubblelayout = {      
            title: "Bubble Chart: Operational Taxonomic Units",
            margin: {
                l: 100,
                r: 100,
                t: 100, 
                b: 100,
            }
        };
        
        Plotly.newPlot("bubble", bubbledata, bubblelayout); 

    });
};

//Update Metadata Table
function updateMetatable(sample){

    d3.json("data/samples.json").then(data =>{
        var metadata = data.metadata;
        var filteredmeta = metadata.filter(d => d.id == sample);
        var currentmeta = filteredmeta[0];
        var demographics = d3.select("#sample-metadata");
        demographics.html("");
        Object.entries(currentmeta).forEach(([key, value]) => {
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