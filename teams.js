function jestem() {

	document.getElementsByClassName("flex-fill app-bar-width ng-untouched ng-valid ng-not-empty")[0].children[2].children[0].click();

	setTimeout(function(){

		var all = document.getElementsByClassName("ts-tree-group")[0];
		var i=1;
		for (; i<all.children.length; i++) {
		    var a = all.children[i];
			var title = a.children[0].children[0].children[0].children[1].innerHTML;
			if (title === "Livebank-Produkcja") {
		    	break;
			}
		}

		var channels = all.children[i].children[0].children[1].children[0];

		var i=0;
		for (; i<channels.children.length; i++) {
			var channel = channels.children[i].children[0].children[0].children[0].innerHTML;
			if (channel === "Delta Scrum Team") {
				break;
			}
		}

		var delta = channels.children[i].children[0];
		console.log(delta);
		delta.click();

		setTimeout(function(){

			var today = [].slice.call(document.querySelectorAll('.message-list-divider.date-separator:not(.ng-hide)')).pop().parentElement.parentElement;
			var cols = document.getElementsByClassName("item-wrap ts-message-list-item");
			var hello;
			for (var i = 0; i<cols.length; i++) {
			    var col = cols[i];
			    if (today == col)
			    {
			        hello = cols[i+1];
			        break;
			    }
			}
			var conv = hello.children[0].children[1].children[0]
			var container = conv.children[conv.children.length-1].children[0].children[0].children[0].children[1]
			var button = container.children[0]
			button.click();

			setTimeout(function(){
			    var container = conv.children[conv.children.length-1].children[0].children[0].children[0].children[1];
			    var msgContainer = container.children[0].children[0];
			    var textField = msgContainer.children[1].children[1].children[4].children[0].children[0].children[2].children[0].children[1].children[0].children[0];
			    textField.innerHTML = "Jestem";

			    var send = msgContainer.children[2].children[0].children[0];
			    // send.click();
			    console.log(send);
			}, 1000);
		}, 1000);
	}, 1000);

	//https://github.com/wendigo/chrome-protocol-proxy
}