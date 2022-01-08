console.log("plots.js loaded!")

// Define function to draw Pie Chart
function drawPieChart(neighborhood) {
    console.log(`drawPieChart(${neighborhood})`);
}

// // Define function to draw Response Chart
// function drawResponseChart(neighborhood) {
//     console.log(`drawResponseChart(${neighborhood})`);
// }

// Define function to draw Gauge Chart
function drawGaugeChart(neighborhood) {
    console.log(`drawGaugeChart(${neighborhood})`);
}

// Set up Event handler and call functions on event
function optionChanged(id) {

    // Log that someone clicked on a neighborhood
    console.log(`optionChanged(${id})`);

    // Call function to display Bar Chart
    drawPieChart(id);

    // Call function to display Bubble Chart
    drawResponseChart(id);

    // Call function to display Demographic Info
    drawGaugeChart(id);
}



// Initialize the Dashboard
function InitDashboard()
{
    console.log("Initializing Dahsboard");

    // Read the data from the sample file in the same folder

        // Define first neighborhood to populate charts
        let neighborhood = "neighborhood";

        // Call function to display Bar Chart
        drawPieChart(neighborhood);

        // Call function to display Bubble Chart
        drawResponseChart(neighborhood);

        // Call function to display Demographic Info
        drawGaugeChart(neighborhood);


}

InitDashboard();
