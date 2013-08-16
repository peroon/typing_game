//440hz : la
//660hz : mi

function playRandomSound(){

	var freq0 = 440 + Math.random() * 220;
	var freq1 = 660 + Math.random() * 220;
	var sine1 = T("sin", {freq:freq0, mul:0.5});
	var sine2 = T("sin", {freq:freq1, mul:0.5});

	T("perc", {r:400}, sine1, sine2).on("ended", function() {
	  this.pause();
	}).bang().play();
}