console.log("plots.js loaded!")

// Define function to draw Pie Chart
function drawPieChart(neighborhood) {
  console.log(neighborhood)
d3.json("/api/v1.0/neighborhood_incidents_grouped").then(function(pieData) {
  console.log("pie data:", pieData);

  let result = pieData.filter (o => o.neighborhood.toLowerCase() === neighborhood.toLowerCase());

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
      type:'pie',
      hole: .4,
      showlegend: false
  }];

  
  var layout = {
    title: {
      text: `INCIDENT TYPES IN ${neighborhood}`,
      size: 32
    },
    height: 500,
    width: 500,
    showlegend: false
  };
  

  Plotly.newPlot("pie_chart", pieChart, layout);
  });
};

// Define function to draw Response Chart
function drawResponseChart(neighborhood) {
  console.log(`drawResponseChart(${neighborhood})`);

  let demo = d3.select("#LaBella");
        
  demo.selectAll("div").remove();
  demo.append("div").attr('id','chartdiv');


  am5.ready(function () {
    //console.log("Root at start of am5: " + root);
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    // var root = am5.Root.new("chartdiv");
    
    
    var root = am5.Root.new("chartdiv");
    console.log("Root after var statement in drawResponseChart: " + root);

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);

    root.dateFormatter.set("dateFormat", "yyyy-MM-dd");

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX",
    

    }));

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", true);




    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: "hour",
        count: 1
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));

    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    yAxis.children.unshift(
      am5.Label.new(root, {
        rotation: -90,
        text: "Response Time (min)",
        y: am5.p50,
        centerX: am5.p50
      })
    );



    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    var series = chart.series.push(am5xy.LineSeries.new(root, {
      name: "Series",
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "arrival_duration",
      valueXField: "create_time_incident",
      tooltip: am5.Tooltip.new(root, {
        labelText: "{valueY}"
      })
    }));

      series.data.processor = am5.DataProcessor.new(root, {dateFormat: "yyyy-MM-dd HH:mm:ss", dateFields:["create_time_incident"]})
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));

    //Grab the data for line chart with d3
    d3.json("./api/v1.0/incidents_time_duration").then(function(lineData) {
      console.log(lineData[1].create_time_incident);
  

      let result = lineData.filter (o => o.neighborhood.toLowerCase() === neighborhood.toLowerCase());
      
      
      console.log(result);

      // Set data
      //var data = generateDatas(1200);
      series.data.setAll(result);

      chart.children.unshift(am5.Label.new(root, {
          text: `RESPONSE TIME IN ${neighborhood}`,
          fontSize: 18,
          fontWeight: "500",
          textAlign: "center",
          x: am5.percent(50),
          centerX: am5.percent(50),
          paddingTop: 50,
          paddingBottom: 0
        }));
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(10);
      chart.appear(10, 1000);

      document.getElementById("map").onclick = function(event) {
        console.log("Root before dispose: " + root);
    

        // root.dispose();
        event.preventDefault();
        console.log("Root after dispose: " + root);
        // root = null;
        console.log("Root after null: " + root);
      }




    }); 


    
  }); // end am5.ready()

};







// Initialize the Dashboard
function InitDashboard()
{
  console.log("Initializing Dahsboard");

  // Read the data from the sample file in the same folder

      // Define first neighborhood to populate charts

      // let neighborhood = "NORTHSIDE";

      d3.json("./api/v1.0/incidents_time_duration").then(function(lineData) {
        var neighborhood = ""
          neighborhood = lineData[0].neighborhood;
          //neighborhood_lower = neighborhood.toLowerCase();
          console.log(neighborhood);
      // // Call function to display Bar Chart
      drawPieChart(neighborhood);

      // Call function to display Bubble Chart
      drawResponseChart(neighborhood);
      
      });

      // // // Call function to display Bar Chart
      // drawPieChart(neighborhood);

      // // Call function to display Bubble Chart
      // drawResponseChart(neighborhood);

}

InitDashboard();




