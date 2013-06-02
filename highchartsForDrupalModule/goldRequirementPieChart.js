// Kaibo(20130602): Created gold requirement pic chart.
$(document).ready(function () {
    var chart = new Highcharts.Chart({
    // Build the chart
          chart: {
              renderTo: 'containerPieChart',
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: true
          },
          title: {
              text: '2012年黄金需求情况'
          },
          tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}%</b>',
            percentageDecimals: 1
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },

          series: [{
              type: 'pie',
              name: '百分比',
              data: [
                  {
                      name: '首饰业',
                      y: 721,
                      sliced: true,
                      selected: true
                  },
                  ['金条投资',  998],
                  ['官方部门采购',  532],
                  ['生产者净解除套期保值',    40],
                  ['隐含净投资',     294],
                  ['其他',   721]
              ]
          }]
      });
  });
