function startListening() {
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

		if (transcript === "iris") {
			const audio = new Audio("https://codehs.com/uploads/e7a41adfd0c33233e43ff60703259bbf");

			audio.play()
				.then(() => {
					console.log("Audio played successfully");
					setTimeout(() => window.location.href = "page3.html", 1000);
				})
				.catch(() => {
					alert("Audio failed to play, but proceeding...");
					window.location.href = "page3.html";
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