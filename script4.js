function openVault() {
	var audio = new Audio("https://codehs.com/uploads/97c23cfae2a6e696395bd3cf2b897dbf");
	audio.play().catch(error => console.log("Audio play error:", error));

	const vault = document.querySelector(".end");
	if (!vault.classList.contains("open")) {
		vault.classList.add("open");

		setTimeout(() => {
			alert("Congratulations! You found the classified CIA documents!");
		}, 700);
	}
}