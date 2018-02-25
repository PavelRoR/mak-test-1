$(document).ready(function () {
	$('label, .radio').click(function () {
		$('.button').css("backgroundColor", "rgb(47, 157, 1)").text("Следующий вопрос");
	});
	$('.choice').submit(function () {
		var count = 0;
		$('input[name^="question"]').each(function () {
			if ($(this).prop("checked")) count++;
		});
		if (count > 0) {
			$('.button').css("backgroundColor", "rgb(47, 157, 1)").text("Следующий вопрос");

			return true;
		} else {
			$('.button').css("backgroundColor", "red").text("Выберите ответ");
			return false;
		}
	});
})