const 결과버튼 = document.querySelector(".btn-exc");
const 결과로딩화면 = document.querySelector(".cont-result-loading");
const 결과확인화면 = document.querySelector(".cont-result");
const 훈련내용결과 = document.querySelector(".field-result");
const 훈련계산결과 = document.querySelector(".time-result");
const 훈련하러가기버튼 = document.querySelector(".btn-go");
const 모달창 = document.querySelector("#modal");
const 모달창닫기버튼 = document.querySelector(".btn-close");
const 공유하기버튼 = document.querySelector(".btn-share");

function 결과() {
	const 훈련내용입력 = document.querySelector("#inp-field");
	const 훈련시간입력 = document.querySelector("#inp-time");
	if (훈련내용입력.value === "") {
		alert("훈련내용을 입력하세요");
		return;
	} else if (훈련시간입력.value === "") {
		alert("훈련시간을 입력하세요");
		return;
	} else if (훈련시간입력.value > 24) {
		alert("하루가 48시간이면 좋겠어");
		return;
	} else if (훈련시간입력.value >= 12) {
		alert("가능하시겠어요?");
		return;
	} else if (훈련시간입력.value <= 0) {
		alert("다시 한번 생각해보세요");
		return;
	}

	결과로딩화면.style.display = "block";

	setTimeout(function () {
		결과로딩화면.style.display = "none";
		결과확인화면.style.display = "block";

		훈련내용결과.innerText = 훈련내용입력.value;
		훈련계산결과.innerText = (10000 / 훈련시간입력.value).toFixed(2);
	}, 2000);
}
function 모달창열기() {
	모달창.style.display = "flex";
}
function 모달창닫기() {
	모달창.style.display = "none";
}
function 공유링크복사() {
	let currentUrl = window.document.location.href;
	let t = document.createElement("textarea");
	document.body.appendChild(t);
	t.value = currentUrl;
	t.select();
	document.execCommand("copy");
	document.body.removeChild(t);
	alert("url을 복사했어요!!!");
}

결과버튼.addEventListener("click", 결과);
훈련하러가기버튼.addEventListener("click", 모달창열기);
모달창닫기버튼.addEventListener("click", 모달창닫기);
공유하기버튼.addEventListener("click", 공유링크복사);
