function startListening() {
	if (!('webkitSpeechRecognition' in window)) {
		alert('Your browser does not support speech recognition. Try Chrome.');
		return;
	}

	const recognition = new webkitSpeechRecognition();
	recognition.continuous = true;
	recognition.interimResults = false;
	recognition.lang = "en-GB";

	recognition.onstart = function() {
		document.getElementById("status").innerText = "Listening...";
	};

	recognition.onresult = function(event) {
		const transcript = event.results[event.results.length - 1][0].transcript.trim();
		console.log("Heard:", transcript);

		if (transcript.toLowerCase() === "password") {
			var audio = new 	Audio("https://codehs.com/uploads/e7a41adfd0c33233e43ff60703259bbf");
			audio.play().then(() => {
				setTimeout(() => {
					window.location.href = "page2.html";
				}, 1000);function startListening() {
	if (!('webkitSpeechRecognition' in window)) {
		alert('Your browser does not support speech recognition. Try Chrome.');
		return;
	}

	const recognition = new webkitSpeechRecognition();
	recognition.continuous = false;
	recognition.interimResults = false;
	recognition.lang = "en-GB";

	recognition.onstart = () => {
		document.getElementById("status").innerText = "Listening...";
	};

	recognition.onresult = (event) => {
		const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
		console.log("Heard:", transcript);

		if (transcript === "password") {
			const audio = new Audio("https://codehs.com/uploads/e7a41adfd0c33233e43ff60703259bbf");

			audio.play()
				.then(() => {
					console.log("Audio played successfully");
					setTimeout(() => window.location.href = "page2.html", 1000);
				})
				.catch(() => {
					alert("Audio failed to play, but proceeding...");
					window.location.href = "page2.html";
				});
		} else {
			document.getElementById("status").innerText = "Incorrect password, try again.";
			setTimeout(() => recognition.start(), 1000);
		}
	};

	recognition.onerror = () => {
		document.getElementById("status").innerText = "Error occurred. Try again.";
	};

	recognition.start();
}
			}).catch(function(error) {
				console.log("Audio play error:", error);
				window.location.href = "page2.html";
			});
		}
	};

	recognition.onerror = function() {
		document.getElementById("status").innerText = "Error occurred. Try again.";
	};

	recognition.start();
}