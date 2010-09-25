var notification_default = "blue";

function loadOptions() {
	var activecollab_notification = localStorage["AC_notif"];

	// valid colors are red, blue, green and yellow
	if (activecollab_notification == undefined || (activecollab_notification != "yes" && activecollab_notification != "no")) {
		activecollab_notification = notification_default;
	}

	var select = document.getElementById("notification");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == activecollab_notification) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElementById("notification");
	var color = select.children[select.selectedIndex].value;
	localStorage["AC_notif"] = color;
	var api_key = document.getElementById("api_key");
	var api_key_value = api_key.value;
	localStorage["AC_api_key"] = api_key_value;
	var api_url= document.getElementById("api_url");
	var api_url_value = api_url.value;
	localStorage["AC_api_url"] = api_url_value;
}


function eraseOptions() {
	localStorage.removeItem("AC_notif");
	localStorage.removeItem("AC_api_key");
	localStorage.removeItem("AC_api_url");
	location.reload();
	
}