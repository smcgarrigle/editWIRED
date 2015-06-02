javascript: (
	function editWired () {
		var content = document.querySelector('body').getAttribute('class');
		var postRe = /postid-(\d+)/;
		var postID = postRe.exec(content)[1];
		var loginredir = "/wp-admin/post.php?post=" + postID + "&action=edit";
		var gotoURL = window.location.protocol + "//" + window.location.host + loginredir;

		window.open(gotoURL);
	}
)();
