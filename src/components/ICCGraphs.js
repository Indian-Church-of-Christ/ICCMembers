import React from 'react';

const chartoptions = {
	animationEnabled: true,
	title: {
		text: "Customer Satisfaction"
	},
	subtitles: [{
		text: "71% Positive",
		verticalAlign: "center",
		fontSize: 24,
		dockInsidePlotArea: true
	}],
	data: [{
		type: "doughnut",
		showInLegend: true,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###'%'",
		dataPoints: [
			{ name: "Unsatisfied", y: 5 },
			{ name: "Very Unsatisfied", y: 31 },
			{ name: "Very Satisfied", y: 40 },
			{ name: "Satisfied", y: 17 },
			{ name: "Neutral", y: 7 }
		]
	}]
}

const ICCGraphs = (prof) => {
  return (
    <div>
        Jerome
    </div>
  );
};

export default ICCGraphs;