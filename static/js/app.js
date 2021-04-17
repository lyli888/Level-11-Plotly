d3.json("samples.json").then((data) => {
    var sample_var = data.samples;
    var metadata_var = data.metadata;
}
console.log(sample_var)
console.log(metadata_var)