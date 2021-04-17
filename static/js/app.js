var readpath = "../../samples.json"

function readSamples() {
    d3.json(readpath).then(function(data) => {
    var names = data.names;
    var sample = data.samples;
    var metadata = data.metadata;
}
console.log(samples);
console.log(metadata);