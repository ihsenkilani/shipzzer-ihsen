// var cal = new CalHeatMap();
// cal.init({
// 	itemSelector: "#cal-heatmap",
// 	domain: "year",
// 	subDomain: "day",
// 	data: "/assets/cal-heatmap-master/test/data/data.json",
// 	start: new Date(2000, 0),
// 	cellSize: 10,
// 	range: 1,
// 	legend: [20, 40, 60, 80]
// });

var startDate = new Date(2013, 6, 25);
var startTimestamp = new Date(2013, 6, 1).getTime()/1000;

function GAconverter(data) {
	var i, total, results = {};
	for(i = 0, total = data.length; i < total; i++) {
		results[+data[i].Hour * 3600 + startTimestamp] = +data[i].Visits;
	}
	return results;
}

var cal = new CalHeatMap();
cal.init({
	itemSelector: "#cal-heatmap",
	domain: "month",
	range: 12,
	rowLimit: 7,
	displayLegend: true,
	label: {
		position: "top"
	},
	legendColors: ["#FF0000", "#00FF00"],
	highlight: ["now"]
	
});
d3.select("#example-getsvg-button").on("click", function() {
	d3.event.preventDefault();
	d3.select("#example-getsvg-textarea").text(cal.getSVG());
});


function downloadSVGAsPNG(e){
  const canvas = document.createElement("canvas");
  let temp = document.createElement('template');
  html = cal.getSVG().trim(); // Never return a space text node as a result
  temp.innerHTML = html;
 
  var x =  temp.content.firstChild;
 x.setAttribute('id','imed');
 
 // const svg=document.getElementsByClassName('imed');
  let y = x.getElementsByTagName('svg')[0];
console.log(y);
  const base64doc = btoa(unescape(encodeURIComponent(y.outerHTML)));
  const w = parseInt(y.getAttribute('width'));
  const h = parseInt(y.getAttribute('height'));
  const img_to_download = document.createElement('img');
  img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
  console.log(w, h);
  img_to_download.onload = function () {
    console.log('img loaded');
    canvas.setAttribute('width', w);
    canvas.setAttribute('height', h);
    const context = canvas.getContext("2d");
    //context.clearRect(0, 0, w, h);
    context.drawImage(img_to_download,0,0,w,h);
    const dataURL = canvas.toDataURL('image/png');
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "download.png");
      e.preventDefault();
    } else {
      const a = document.createElement('a');
      const my_evt = new MouseEvent('click');
      a.download = 'download.png';
      a.href = dataURL;
      a.dispatchEvent(my_evt);
    }
    //canvas.parentNode.removeChild(canvas);
  } 
  
  
}
function downloadSVGAsText() {
	let temp = document.createElement('template');
  html = cal.getSVG().trim(); // Never return a space text node as a result
  temp.innerHTML = html;
 
  var x =  temp.content.firstChild;
 x.setAttribute('id','imed');
 
	const base64doc = btoa(unescape(encodeURIComponent(x.outerHTML)));
	const a = document.createElement('a');
	const e = new MouseEvent('click');
	a.download = 'download.svg';
	a.href = 'data:image/svg+xml;base64,' + base64doc;
	a.dispatchEvent(e);
  }
   

const downloadSVG = document.querySelector('#med');
downloadSVG.addEventListener('click', downloadSVGAsText);
const downloadPNG = document.querySelector('#example-getsvg-button');
downloadPNG.addEventListener('click', downloadSVGAsPNG);



// var cal = new CalHeatMap();
// cal.init({
// 	itemSelector: "#cal-heatmap",
// 	domain: "day",
// 	subDomain: "hour",
// 	rowLimit: 1,
// 	cellSize: 15,
// 	domainGutter: 0,
// 	verticalOrientation: true,
// 	label: {
		
// 		position: "left",
// 				offset: {
// 					x: 20,
// 					y: 12
// 				},
// 				width: 110
// 			},
// 			data: "/assets/cal-heatmap-master/test/data/data.json",
// 			dataType: "json",
// 			start: startDate,
// 			afterLoadData: GAconverter,
// 			range: 10,
// 			itemName: "visit",
// 			legend: [5, 10, 15, 20, 25, 30],
// 			legendHorizontalPosition: "right",
// 			legendColors: {
// 				empty: "#ededed",
// 				min: "#40ffd8",
// 				max: "#f20013"
// 			}
// 		});
// var cal = new CalHeatMap();
// cal.init({
// 	start: new Date(2000, 0), // January, 1st 2000
// 	range: 12,
// 	domain: "year",
// 	subDomain: "month",
// 	data: "/assets/cal-heatmap-master/test/data/data.json"
// });
// moment.lang("fr"); // Set current local to French
// var cal = new CalHeatMap();
// cal.init({
// 	itemSelector: "#example-a",
// 	domain: "hour",
// 	data: "/assets/cal-heatmap-master/test/data/data.json",
// 	start: new Date(2000, 0),
// 	cellSize: 9,
// 	range: 10,
// 	previousSelector: "#example-a-PreviousDomain-selector",
// 	nextSelector: "#example-a-NextDomain-selector",

// 	itemName: ["moustique tuée", "moustiques tuées"],
// 	subDomainTitleFormat: {
// 		empty: "Aucune données pour le {date}",
// 		filled: "il y a eu {count} {name} le {date}"
// 	},
// 	legendTitleFormat: {
// 		lower: "Moins de {min} {name}, Master Lao Zhi a du prendre une pause",
// 		inner: "Entre {down} et {up} {name}, pas mal",
// 		upper: "Plus de {max} {name}, fuyez !"
// 	},
// 	domainLabelFormat: "%H\h",
// 	subDomainDateFormat:  function(date) {
// 		return moment(date).format("LL"); // Use moment.js library to translate date
// 	}
// });
