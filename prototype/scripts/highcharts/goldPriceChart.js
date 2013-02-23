/* Gold price chart */
$(document).ready(function() { 
       var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'container',
                type: 'line'
            },
            title: {
                text: 'Gold Spot and Future Price Charts'
            },
            subtitle: {
                text: 'Source: ThomsonReuters.com'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Gold Price($)'
                }
            },
            tooltip: {
                enabled: true,
                formatter: function(){ 
                    return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y +'$/oz';
                },
                crosshairs: [true, true]
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: true
                }
            },
            series: [{
                name: 'Spot',
                data: [1507.0, 1506.9, 1509.5, 1510.5, 1518.4, 1521.5, 1525.2, 1526.5, 1523.3, 1518.3, 1513.9, 1509.6]
            }, {
                name: 'Future',
                data: [1503.9, 1504.2, 1505.7, 1508.5, 1511.9, 1515.2, 1517.0, 1516.6, 1514.2, 1510.3, 1506.6, 1504.8]
            }]
        });
});