function oddNumbers (start, end) {
	for (var i = start; i <= end; i++) {
		if (i % 2 == 1) {
			console.log(i);
		}
	}
}
oddNumbers(1, 20);