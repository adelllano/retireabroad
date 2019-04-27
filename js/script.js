var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});


/*
object to hold href values of links inside our nav with
the class '.anchor-nav'

scene_object = {
  '[scene-name]' : {
    '[target-scene-id]' : '[anchor-href-value]'
  }
}
*/
//
var scenes = {
  'intro': {
    'intro': 'intro-anchor'
  },
  'scene8': {
    'section-7': 'anchor7'
  },
  'scene7': {
    'section-6': 'anchor6'
  },
  'scene2': {
    'section-1': 'anchor1'
  },
  'scene3': {
    'section-2': 'anchor2'
  },
  'scene4': {
    'section-3': 'anchor3'
  },
  'scene5': {
    'section-4': 'anchor4'
  },
}

for(var key in scenes) {
  // skip loop if the property is from prototype
  if (!scenes.hasOwnProperty(key)) continue;

  var obj = scenes[key];

  for (var prop in obj) {
    // skip loop if the property is from prototype
    if(!obj.hasOwnProperty(prop)) continue;

    new ScrollMagic.Scene({ triggerElement: '#' + prop })
        .setClassToggle('#' + obj[prop], 'active')
        .addTo(controller);
  }
}
//
//
// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});




google.charts.load('current', {'packages': ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawVisualization);

    function drawVisualization() {

          var chart = new google.visualization.ChartWrapper({
                  containerId: 'chart-div'
              });
              var data = [];

              data[0] = new google.visualization.DataTable();

              data[0].addColumn('string', 'x');
              data[0].addColumn('number', 'Cost of Living Index');
              data[0].addColumn('number', 'Rent Index');
              data[0].addRows([
                ['Belize', 49, 9],
                ['Colombia', 30, 9],
                ['Costa Rica', 51, 15],
                ['Dominican Republic', 45, 10],
                ['Ecudaor', 42, 12],
                ['Malaysia',  39, 11],
                ['Malta',  63, 29],
                ['Mexico',  33, 10],
                ['Panama',  51, 25],
                ['Portugal',  50, 21],
                ['Spain',  55, 21],
                ['Thailand',  48, 18],

              ]);

              data[1] = new google.visualization.DataTable();

              data[1].addColumn('string', 'x');
              data[1].addColumn('number', 'Inexpensive Meal');
              data[1].addColumn('number', 'Meal for 2');
              data[1].addColumn('number', 'McMeal at McDonalds');
              data[1].addRows([
                ['Belize', 5.00, 36.00, 5.00],
                ['Colombia', 3.20, 19.18, 4.79],
                ['Costa Rica',  7.04, 33.14, 6.63],
                ['Dominican Republic',  6.91, 39.49, 6.91],
                ['Ecudaor',  3.50, 30.00, 6.00],
                ['Malaysia',  2.44, 14.67, 3.18],
                ['Malta',  16.27, 56.11, 8.98],
                ['Mexico',  5.06, 23.59, 4.72],
                ['Panama',  8.00, 40.00, 6.50],
                ['Portugal',  8.98, 33.67, 6.73],
                ['Spain',  11.22, 39.28, 7.86],
                ['Thailand',  1.88, 20.38, 6.19],

              ]);


              data[2] = new google.visualization.DataTable();

              data[2].addColumn('string', 'x');
              data[2].addColumn('number', 'Milk (1 gallon)');
              data[2].addColumn('number', 'Loaf of Bread (1 lb)');
              // data[2].addColumn('number', 'Rice (1 lb)');
              data[2].addColumn('number', 'Dozen Eggs');
              // data[2].addColumn('number', 'Local Cheese (1 lb)');

              // data[0].addColumn('number', 'USA');
              data[2].addRows([

                ['Belize', 7.42, 1.06, 2.04],
                ['Colombia', 3.03, 0.83, 1.48],
                ['Costa Rica',  5.04, 1.65,	2.54],
                ['Dominican Republic',  4.40,	1.20,	1.84],
                ['Ecudaor',  3.66,	1.43,	1.73],
                ['Malaysia',  6.31,	0.73,	1.27],
                ['Malta',  3.76,	1.01,	2.47],
                ['Mexico',  3.46,	1.33,	1.37],
                ['Panama',  5.63,	1.73,	2.02],
                ['Portugal',  2.68,	1.12,	1.89],
                ['Spain',  3.26,	0.97,	1.81],
                ['Thailand',  6.54,	1.09,	1.58],

              ]);

              data[3] = new google.visualization.DataTable();

              data[3].addColumn('string', 'x');
              data[3].addColumn('number', 'Basic (Electricity, Heating, Cooling, Water, Garbage');
              data[3].addColumn('number', 'Internet (60 Mbps or More, Unlimited Data, Cable/ADSL');
              data[3].addRows([

                ['Belize', 87.01,	66.57 ],
                ['Colombia', 71.50,	31.98 ],
                ['Costa Rica',  74.89,	63.46 ],
                ['Dominican Republic',  66.19,	54.15 ],
                ['Ecudaor',  41.33,	38.53  ],
                ['Malaysia',  45.04,	35.15 ],
                ['Malta',  89.31,	35.21 ],
                ['Mexico',  37.71,	25.30 ],
                ['Panama',  86.65,	48.75 ],
                ['Portugal',  104.73,	33.96 ],
                ['Spain',  131.05,	45.62 ],
                ['Thailand',  71.94,	22.59 ],

              ]);


              var options = {
                  width: 750,
                  height: 500,
                  legend: 'bottom',
                  vAxis: {
                      // title:'cost',
                      minValue: 0,
                      maxValue: 10,
                      gridlines: {color: 'transparent'},
                      format:'currency'
                  },
                  series: { 0: {color: '#6fc59b'},
                            1: {color: '#47A8BD'},
                            2: {color: '#f9a35e'},
                            3: {color: '#d0b0cf'},
                            4: {color: '#1B4079'},
                            5: {color: '#83B692'},
                            6: {color: '#F9ADA0'},
                            7: {color: '#5B3758'},
                            8: {color: '#E5446D'},
                            9: {color: '#F18F01'},
                            10: {color: '#D7B9D5'},
                            11: {color: '#64A6BD'},
                            12: {type: 'line', color: '#F24F6D'}
                        },
                  colors: ['orange'],
                  pointSize: 10,
                  bar: {groupWidth: '77%'},
                  pointShape: { type: 'circle'},
                  animation: {
                      duration: 500,
                      easing: 'out',
                      startup: true
                  }

              };

              var colindex = document.getElementById('b1');
              var barsButton = document.getElementById('b2');
              var lineButton = document.getElementById('b3');
              var utilities = document.getElementById('b4');



              chart.setOptions(options);

              function drawColindex() {
                  chart.setChartType('BarChart');
                  chart.setDataTable(data[0]);
                  chart.draw();
              }

              function drawBars() {
                  chart.setChartType('BarChart');
                  chart.setDataTable(data[1]);
                  chart.draw();
              }

              function drawLine() {
                  chart.setChartType('ColumnChart');
                  chart.setDataTable(data[2]);
                  chart.draw();
              }

              function drawUtilities() {
                  chart.setChartType('ColumnChart');
                  chart.setDataTable(data[3]);
                  chart.draw();
              }

              colindex.onclick = function () {
                  drawColindex();
              }

              barsButton.onclick = function () {
                  drawBars();
              }

              lineButton.onclick = function () {
                  drawLine();
              }
              utilities.onclick = function () {
                  drawUtilities();
              }
              // This sets which chart starts first
              drawColindex();
          }


  google.charts.setOnLoadCallback(drawStuff);

   function drawStuff() {
     var data = new google.visualization.arrayToDataTable([
       ['Country', 'Healthcare Index'],
       ["Belize", 45],
       ["Colombia", 68],
       ["Costa Rica", 62],
       ["Dominican Republic", 53],
       ['Ecuador', 73],
       ['Malaysia', 68],
       ['Malta', 78],
       ['Mexico', 69],
       ['Panama', 61],
       ['Portugal', 71],
       ['Spain', 78],
       ['Thailand', 79],
       ['USA', 69],
     ]);

     var options = {
       // title: 'Chess opening moves',
       width: 600,
       height: 400,
       legend: { position: 'none' },

       colors: ['#f9a35e'],
       hAxis: {
          title: 'Total Population',
          minValue: 60,
        },
       bars: 'horizontal', // Required for Material Bar Charts.
       axes: {
         x: {
           0: { side: 'bottom', label: 'Healthcare Index'} // Top x-axis.
         },
       },
       bar: { groupWidth: "30%" },
       background: {color:'red'},
     };
     var chart = new google.charts.Bar(document.getElementById('top_x_div'));
     chart.draw(data, options);
   };

  google.charts.setOnLoadCallback(drawLife);
   function drawLife() {
   var data1 = new google.visualization.arrayToDataTable([
     ['Country', 'Life Expectancy After 60'],
     ["Belize", 83],
     ["Colombia", 87 ],
     ["Costa Rica", 85],
     ["Dominican Republic", 83],
     ['Ecuador', 83],
     ['Malaysia', 80],
     ['Malta', 85],
     ['Mexico', 83],
     ['Panama', 85],
     ['Portugal', 86],
     ['Spain', 87],
     ['Thailand', 83],
     ['USA', 84],
   ]);

   // var options1 = {
   //    // title: 'Company Performance',
   //    // hAxis: {title: 'Live Expectancy After 60 Years of Age',
   //    // titleTextStyle: {color: '9b5699'},
   //    // gridlines: {color: 'white'}},
   //    // legend: 'none',
   //    // series: { 1: {color: 'lightgray'} }, // series: [ {}, {color: 'lightgray'} ]
   //  };

   var options1 = {
     title: 'Life Expecatancy After 60',
     width: 700,
     height: 475,
     legend: { position: 'none' },
     colors: ['#f9a35e'],
     gridlines: {color: 'white'},
     series: { 1: {color: 'lightgray'} }, // series: [ {}, {color: 'lightgray'} ]
     vAxis: { logscale: true },
     // chart: { title: 'Chess opening moves',
     //          subtitle: 'popularity by percentage' },
     // bars: 'horizontal', // Required for Material Bar Charts.
     // axes: {
     //   x: {
     //     0: { side: 'bottom', label: 'Age'}, // Top x-axis.
     //   },
     // },
     // bar: { groupWidth: "60%"},
   };

var chart = new google.visualization.ScatterChart(document.getElementById('life_div'));
   chart.draw(data1, options1);
 };
