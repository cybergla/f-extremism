var feeds = new Set();
var style = 'border-radius: 27px;font-family: Arial;color: #ff3838;background: #ffffff;padding: 10px 20px 10px 20px;border: solid #ff3333 2px;';

setInterval(function() {
// Runs every second
	var test = document.getElementsByClassName('_4-u2 mbm _5v3q _4-u8');

	for(var i=0; i<test.length; i++) {

		var data = test[i];

		// Check if feed needs to be modified

		if(!feeds.has(data)) {
			feeds.add(data);

			// Send server requests

			var processed = false;

			var linked = test[i].querySelector('._6ks');
			if(!processed && linked != null && linked.querySelector('a') != null) {
				processed = true;
                linked.innerHTML = linked.innerHTML + "<p style='"+style+"'> FAKE NEWS </p>";
                var url = linked.querySelector('a').href;
			}


			var link = test[i].querySelector('._5pbx.userContent');
			if(!processed && link != null && link.querySelector('a') != null && link.querySelector('a').href != null) {
				processed = true;
                link.innerHTML = link.innerHTML + "<p style='"+style+"'> FAKE NEWS </p>"
                var url = link.href;
			}

		}
	}

}, 1000);