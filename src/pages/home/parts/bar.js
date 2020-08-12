import React from "react";
import ReactEcharts from "echarts-for-react";
// import echarts from "echarts";
class Bar extends React.Component{
    getOptions = () => {
        return {
            title: {
                text: '新增用户',
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
            }]
        }
    }
    render () {
        return (
            <div>
                <ReactEcharts option={this.getOptions()} />
            </div>
        )
    }
}
export default Bar;
