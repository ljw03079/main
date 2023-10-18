
App = {
	adoptedAry: [],
	init: function() {
	// adopted.json 파일의 정보를 읽어서 애완견의 정보를 활용해서 페이지 생성.
	
	}, // end of init;

	initContract: function() {
	// initMarkData 호출.
	// bindEvents 호출.
	
	}, // end of initContract;

	bindEvents: function() {
		// 입양버튼에 이벤트 등록.
	},

	initMarkData: function() {
		// adopted.json 정보를 활용해서 입양처리하기.

	},

	markAdopted: function() {
		// 입양처리. adoptedAry에 추가.

	}, // end of markAdopted;

	handleAdopt: function(event) {
		// 사용자화면에서 입양버튼 클릭 시 처리.

	} // end of handleAdopt;

}; // end of App;


$(function() {
	App.init();
});
