console.log("plotsa.js loaded!!");


//Grab data for pie chart using D3
d3.json("/api/v1.0/neighborhood_incidents_grouped").then(function(pieData) {
    console.log("pie data:", pieData);

    let result = pieData.filter(o => o.neighborhood === "AVONDALE")

    // Sort data for to list incident types in descending order
    // Slice data for chart by top 15 most frequent incident types by neighborhood

    result.sort((a, b) => b.counts - a.counts);

    var sorted_values = result.map(o => o.counts).slice(0, 10);
    var labels = result.map(o => o.incident_type).slice(0, 10);
    
    console.log("pie labels:", labels);
    console.log("pie sorted values:", sorted_values);

    var pieChart = [{
        values: sorted_values,
        labels: labels,
        // hovertext: display,
        type:"pie"
    }];

    var layout = {
        showlegend: false,
        // height: 400,
        // width: 500
      };

    Plotly.newPlot("pie_chart", pieChart, layout);

});

