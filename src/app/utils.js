export function truncateText(text, maxLength) {
	if (!text) return;

	if (text.length > maxLength) {
		return text.substring(0, maxLength - 3) + "...";
	} else {
		return text;
	}
}
