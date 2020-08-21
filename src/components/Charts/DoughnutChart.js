import React, { Component } from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

var mcount = 40
var wcount = 30


class DoughnutChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Men / Women Demography"
			},
			subtitles: [{
				text: "Members",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
				showInLegend: true,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###",
				dataPoints: [
					{ name: "Men", y: mcount },
					{ name: "Women", y: wcount },
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options={options}/>
		</div>
		);
	}
}

export default DoughnutChart;