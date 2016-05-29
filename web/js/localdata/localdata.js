$(function() {
	$("#school-name").bigAutocomplete({
		data: [{
			title: "哈佛大学"
		}, {
			title: "牛顿大学"
		}, {
			title: "剑桥大学"
		}, {
			title: "加拿大大学"
		}, {
			title: "清华大学"
		}, {
			title: "哈尔滨大学"
		}, {
			title: "哈萨克斯坦大学"
		}, {
			title: "加拿大SFU大学"
		}, {
			title: "加拿大劳里埃大学"
		}, {
			title: "人民大学"
		}],
		callback: function(data) {
			//alert(data.title)
		}
	})
})