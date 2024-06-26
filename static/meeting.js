let tg = window.Telegram.WebApp;
tg.expand();

//if (tg.initData == '') {
//    $('body').empty();
//}
console.log(tg)
let user_id = tg.initDataUnsafe.user?.id || 342297636;
//let user_id = tg.initDataUnsafe.user?.id;
fetchData(user_id);


async function fetchData(user_id) {

    try {
        const response = await fetch(`https://ai-bankir-helper.ru/meeting/show/${user_id}`);
        const responseData = await response.json();

        console.log(responseData);

        if (responseData.length == 0) {
            const deleteElement = document.querySelector("#container");
            deleteElement.innerHTML = '';
            $('#noMeeting').text('У Вас пока нет новых встреч');
            return;
        }

        $('#noMeeting').text('');
        $.each(responseData, function(index, meeting) {
            $('#meetingTable tbody').
            append('<tr><td>' + meeting.theme + '</td><td>' + meeting.date_start + '</td></tr>');
        });

    } catch (error) {
        console.error("Ошибка при получении данных:", error);
        const deleteElement = document.querySelector("#container");
        deleteElement.innerHTML = '';
    }
};

