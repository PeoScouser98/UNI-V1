export const $ = (selector) => {
	const elements = document.querySelectorAll(selector);
	return elements.length === 1 ? elements[0] : elements;
};
export const formatCurrency = (number) => {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	});
	return formatter.format(number);
};
