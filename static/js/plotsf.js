// console.log("plotsf.js loaded!")

// // Define function to draw Response Chart
// function drawResponseChart(neighborhood) {
//   console.log(`drawResponseChart(${neighborhood})`);





    

//   am5.ready(function () {

//     // Create root element
//     // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//     var root = am5.Root.new("chartdiv");


//     // Set themes
//     // https://www.amcharts.com/docs/v5/concepts/themes/
//     root.setThemes([
//       am5themes_Animated.new(root)
//     ]);

//     root.dateFormatter.set("dateFormat", "yyyy-MM-dd");

//     // Create chart
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/
//     var chart = root.container.children.push(am5xy.XYChart.new(root, {
//       panX: true,
//       panY: true,
//       wheelX: "panX",
//       wheelY: "zoomX",
    

//     }));

    


//     // Add cursor
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//     var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//       behavior: "none"
//     }));
//     cursor.lineY.set("visible", true);




//     // Create axes
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//     var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//       maxDeviation: 0.2,
//       baseInterval: {
//         timeUnit: "hour",
//         count: 1
//       },
//       renderer: am5xy.AxisRendererX.new(root, {}),
//       tooltip: am5.Tooltip.new(root, {})
//     }));

//     var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//       renderer: am5xy.AxisRendererY.new(root, {})
//     }));


//     // Add series
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//     var series = chart.series.push(am5xy.LineSeries.new(root, {
//       name: "Series",
//       xAxis: xAxis,
//       yAxis: yAxis,
//       valueYField: "arrival_duration",
//       valueXField: "create_time_incident",
//       tooltip: am5.Tooltip.new(root, {
//         labelText: "{valueY}"
//       })
//     }));

//       series.data.processor = am5.DataProcessor.new(root, {dateFormat: "yyyy-MM-dd HH:mm:ss", dateFields:["create_time_incident"]})
//     // Add scrollbar
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
//     chart.set("scrollbarX", am5.Scrollbar.new(root, {
//       orientation: "horizontal"
//     }));

//     //Grab the data for line chart with d3
// d3.json("./api/v1.0/incidents_time_duration").then(function(lineData) {
//   console.log(lineData[1].create_time_incident);
  

//       let result = lineData.filter (o => o.neighborhood.toLowerCase() === neighborhood.toLowerCase());
      
      
//       console.log(result);
    
//     // Set data
//     //var data = generateDatas(1200);
//     series.data.setAll(result);

//    chart.children.unshift(am5.Label.new(root, {
//       text: neighborhood,
//       fontSize: 25,
//       fontWeight: "500",
//       textAlign: "center",
//       x: am5.percent(50),
//       centerX: am5.percent(100),
//       paddingTop: 50,
//       paddingBottom: 0
//     }));
//     // Make stuff animate on load
//     // https://www.amcharts.com/docs/v5/concepts/animations/
//     series.appear(10);
//     chart.appear(10, 1000);

  
 
//     document.getElementById("map").onclick = function(event) {
//       root.dispose();
//       // event.preventDefault();
//   }
    
//   }); // end am5.ready()
// });

// };




