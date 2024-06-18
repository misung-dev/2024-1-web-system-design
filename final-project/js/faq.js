const FAQ_LIST = [
	{
		question: "검색이 되지 않거나 품절/절판인 도서는 구입할 수 없나요?",
		answer: `검색이 되지 않는 도서는 품절/절판일 경우가 대부분이므로 검색 옵션 중 [품절/절판상품 포함] 란에 체크하신 후 한번 더 검색해보시기 바랍니다.

		품절이나 절판으로 표시된 도서는 출판사에서도 더 이상 발간하지 않고 재고가 없는 경우가 대부분이라 구하기 어려운 도서입니다. 

		이 경우 회원님께서 요청하셔도 구입시기를 확실하게 약속드릴 수 없습니다. 

		이러한 도서의 구입가능 여부를 확인하시려면 고객센터의 1:1 문의 접수 이용하여 주시면, 최대한 확인하여 답변드리겠습니다.`,
	},
	{
		question: "주문하면 얼마 만에 받아볼 수 있나요?",
		answer: `고객님께서 주문하신 상품을 실제 받으시는 날은 "예상출고일 + 배송일"입니다.

		'예상출고일'이란 근무일 기준으로 도서가 준비되는 시간 만을 안내하는 것이며, 배송시간은 예상출고일 외 택배를 통해 고객님께 실제 배달되는 기간을 말합니다.

		'출고예정일'은 상품에 따라 준비기간이 다르며 배송 시간은 지역에 따라 약간씩 다르나 보통 1~3일정도 소요됩니다. (도서산간지역은 최대 7일 소요)`,
	},
	{
		question: "해외주문도서를 주문하면 얼마 후에 받아볼 수 있나요?",
		answer: `1. 인터넷 주문가능 상태 주문접수 된 도서는 결제가 완료되는 즉시 해외거래처(B&T)로 자동발주 처리되어, 도서 입고까지 업무일 기준 약 1-2주 정도 소요됩니다.

		2. Special order 는 4~6주 안에 공급가능하며, 현지 출판사 사정에 의해 구입이 어려울 경우 2~3주 안에 공지해 드립니다.

		※ 주말 또는 휴일에 주문하신 주문건들은 1-2일 정도 해외발주가 지연되오니 양지해 주시기 바랍니다.

		또한 미국 내 현지 사정에 의해 도서 입고일이 지연될 수 있습니다 ex) 크리스마스, 추수감사절, 연휴 등`,
	},
	{
		question: "[주의사항] 매장에서 구입한 상품도 우편으로 반품/교환이 가능한가요?",
		answer: `우편이나 택배로 반품/교환이 가능한 상품은 인터넷교보문고 및 전화로 주문하신 상품에 한합니다.
		
		매장에서 구입하신 상품은 매장에서만 반품/교환이 가능합니다.

		이는 온/오프라인 영업의 특성상 실시간으로 구입내역 교류/확인이 가능하지 않기 때문입니다.`,
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
