/* Gold price chart */
function drawGoldPriceChart(containerId) {
       var chart = new Highcharts.Chart({
            chart: {
                renderTo: containerId,
                type: 'line'
            },
            title: {
                text: '2012年黄金现货期货价格对比'
            },
            subtitle: {
                text: '来源: ThomsonReuters.com'
            },
            xAxis: {
                categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
            },
            yAxis: {
                title: {
                    text: '金价(美元/盎司)'
                }
            },
            tooltip: {
                enabled: true,
                formatter: function(){
                    return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ this.y +'美元/盎司';
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
                name: '现货',
                data: [1507.0, 1506.9, 1509.5, 1510.5, 1518.4, 1521.5, 1525.2, 1526.5, 1523.3, 1518.3, 1513.9, 1509.6]
            }, {
                name: '期货',
                data: [1503.9, 1504.2, 1505.7, 1508.5, 1511.9, 1515.2, 1517.0, 1516.6, 1514.2, 1510.3, 1506.6, 1504.8]
            }]
        });
}
