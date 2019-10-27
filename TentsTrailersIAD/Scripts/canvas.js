﻿
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Weather Report - 2018"
        },
        axisX: {
            //valueFormatString: "",
            //intervalType: "month",
            interval: 1
        },
        axisY: [{
            title: "Precipitation (in inches)",
            lineThickness: 1
        }, {
            title: "Temperature (in °F)",
            lineThickness: 1
        }],
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            itemclick: toogleDataSeries
        },
        data: [{
            type: "column",
            name: "Precipitation",
            showInLegend: true,
            xValueFormatString: "MMMM",
            yValueFormatString: "#,##0.## inches",

            dataPoints:  @Html.Raw(ViewBag.DataPoints1)
}, {
        type: "line",
        name: "Max Temp",
        showInLegend: true,
        axisYIndex: 1,
        yValueFormatString: "#,##0.## °F",

        dataPoints:  @Html.Raw(ViewBag.DataPoints2)
	}, {
    type: "line",
        name: "Min Temp",
            showInLegend: true,
                axisYIndex: 1,
                    yValueFormatString: "#,##0.## °F",

                        dataPoints: @Html.Raw(ViewBag.DataPoints3)
}]
});
chart.render();

function toogleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    chart.render();
}

}

