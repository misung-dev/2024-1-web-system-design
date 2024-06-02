const FAQ_LIST = [
	{
		question: "질문 1",
		answer: "답변 1",
	},
	{
		question: "질문 2",
		answer: "답변 2",
	},
	{
		question: "질문 3",
		answer: "답변 3",
	},
	{
		question: "질문 4",
		answer: "답변 4",
	},
];

const faqListElement = document.querySelector(".faq-list");

FAQ_LIST.forEach(({ question, answer }) => {
	const liElement = document.createElement("li");
	const accordionElement = document.createElement("div");
	const accordionSummaryElement = document.createElement("button");
	const accordionSummaryTextElement = document.createElement("span");
	const accordionDetailsElement = document.createElement("div");

	liElement.classList.add("faq-item");
	accordionElement.classList.add("accordion");
	accordionSummaryElement.classList.add("accordion__summary");
	accordionSummaryTextElement.classList.add("accordion__summary__text");
	accordionDetailsElement.classList.add("accordion__details");

	accordionSummaryTextElement.innerText = question;
	accordionDetailsElement.innerText = answer;

	accordionSummaryElement.addEventListener("click", () => {
		if (accordionElement.classList.contains("expanded")) {
			accordionElement.classList.remove("expanded");
		} else {
			accordionElement.classList.add("expanded");
		}
	});

	accordionSummaryElement.appendChild(accordionSummaryTextElement);
	accordionElement.appendChild(accordionSummaryElement);
	accordionElement.appendChild(accordionDetailsElement);
	liElement.appendChild(accordionElement);
	faqListElement.appendChild(liElement);
});
