
var Converter = (function() {
	//private
	var converterValue = 2.2;
	//public
	return {
		convertFromImperialToMetric: function(weight) {
			var num = parseInt(weight);
			if(isNaN(num) == true){
				throw new Error ("Not a Number");
			}
			num = num / converterValue;
			return Math.round(num);
		},
		convertFromMetricToImperial: function(weight) {
			return weight / converterValue;
		}
		
	}
})()
