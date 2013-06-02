// Kaibo(20130602): Created gold supplyment column chart.
$(function($){

var chart = new Highcharts.Chart({
            chart: {
                renderTo: 'containerColumnChart',
                type: 'column'
            },
            title: {
                text: '2012黄金供给季度细分市场供给'
            },
            xAxis: {
                categories: ['2012年一季度', '2012年二季度', '2012年三季度', '2012年四季度']
            },
            yAxis: {
                min: 0,
                title: {
                    text: '黄金供给量'
                },
                stackLabels: {
                    enabled: true,
                    style: {
                        fontWeight: 'bold',
                        color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                    }
                }
            },
            legend: {
                align: 'right',
                x: -100,
                verticalAlign: 'top',
                y: 20,
                floating: true,
                backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColorSolid) || 'white',
                borderColor: '#CCC',
                borderWidth: 1,
                shadow: false
            },
            tooltip: {
                formatter: function() {
                    return '<b>'+ this.x +'</b><br/>'+
                        this.series.name +': '+ this.y +'<br/>'+
                        '合计: '+ this.point.stackTotal;
                }
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    dataLabels: {
                        enabled: true,
                        color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                    }
                }
            },

            series: [{
                name: '矿山产量',
                data: [663, 705, 660, 1030]
            }, {
                name: '回收黄金废料',
                data: [386, 394, 441, 540]
            }, {
                name: '生产者净套期保值',
                data: [0, 0, 100, 0]
            }, {
                name: '隐含净减资',
                data: [1030, 540, 0, 0]
            }]
        });
});
