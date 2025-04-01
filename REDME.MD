<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Analytics Dashboard</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet">    <script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.5.0/echarts.min.js"></script>
    <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
    <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#000000" data-border-radius="small"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="bg-white rounded-lg shadow-sm p-6">            <div class="flex items-center justify-between mb-8">
                <h1 class="text-2xl font-semibold text-gray-900">Analytics</h1>
                <div class="flex items-center space-x-6">
                    <div class="flex items-center space-x-4">                        <div class="flex items-center">
                            <span class="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span>
                            <span class="text-sm text-gray-600">Label 1</span>
                        </div>
                        <div class="flex items-center">                            <span class="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                            <span class="text-sm text-gray-600">Label 2</span>
                        </div>
                    </div>
                    <select class="form-select !rounded-button border-gray-300 text-sm text-gray-600 pr-8">                        <option>Weekly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                    </select>
                </div>
            </div>
            <div id="chart" style="width: 100%; height: 400px;"></div>
        </div>
    </div>

    <script>
        const chart = echarts.init(document.getElementById('chart'));
        const option = {
            animation: false,
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                axisLine: {
                    lineStyle: {
                        color: '#E5E7EB'
                    }
                },
                axisLabel: {
                    color: '#6B7280'
                }
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 20000,
                interval: 5000,
                axisLabel: {
                    formatter: '{value}k',
                    color: '#6B7280'
                },
                splitLine: {
                    lineStyle: {
                        color: '#E5E7EB'
                    }
                }
            },
            series: [
                {
                    name: 'Label 1',
                    type: 'line',
                    smooth: true,
                    data: [13000, 11000, 14000, 8000, 15000, 20000, 18000],
                    lineStyle: {
                        color: '#6366F1'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(99, 102, 241, 0.2)' },
                            { offset: 1, color: 'rgba(99, 102, 241, 0.0)' }
                        ])
                    },
                    symbol: 'none'
                },
                {
                    name: 'Label 2',
                    type: 'line',
                    smooth: true,
                    data: [5000, 7000, 6000, 9000, 5000, 7000, 9000],
                    lineStyle: {
                        color: '#FBBF24'
                    },
                    areaStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: 'rgba(251, 191, 36, 0.2)' },
                            { offset: 1, color: 'rgba(251, 191, 36, 0.0)' }
                        ])
                    },
                    symbol: 'none'
                }
            ],
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                textStyle: {
                    color: '#fff'
                },
                formatter: function(params) {
                    let result = params[0].axisValue + '<br/>';
                    params.forEach(param => {
                        result += param.seriesName + ': ' + param.value + 'k<br/>';
                    });
                    return result;
                }
            }
        };

        chart.setOption(option);

        window.addEventListener('resize', function() {
            chart.resize();
        });
    </script></body>

</html>
