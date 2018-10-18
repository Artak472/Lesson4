function main() {
	var socket = io.connect('http://localhost:3000');
	var chatDiv = document.getElementById('chat');
	var input = document.getElementById('message');
	var button = document.getElementById('submit');
	var nickname = document.getElementById('nick');
 
	function handleSubmit(evt) {
		var val = input.value;
		var nick = nickname.value;
		if (val != "" && nick != "") {
			socket.emit("send message", nick + ": " + val);
		}
	}
	button.onclick = handleSubmit;

	function handleMessage(msg) {
		var p = document.createElement('p');
		p.innerText = msg;
		chatDiv.appendChild(p);
		input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;