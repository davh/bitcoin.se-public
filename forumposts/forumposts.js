var topicUrl = "https://forum.bitcoin.se/t/";

if ($(".forum-list-wrapper").length) {
    $.get("https://forum.bitcoin.se/categories.json", function (categoryData) {
        var categories = [];
        for (var i = 0; i < categoryData.category_list.categories.length; i++) {
            var category = categoryData.category_list.categories[i];
            categories[category.id] = category.name;
        }

        // Hack: Subcategories are not included in categories.json
        categories[12] = "Bitcoin Cash";
        categories[13] = "Artiklar";

        $.get("https://forum.bitcoin.se/latest.json", function (data) {
            var i = 1;
            $(".forum-list-wrapper").children("a").each(function () {
                var forumItem = data.topic_list.topics[i];
                $(this).prop("href", topicUrl + forumItem.slug);
                $(this).find(".forum-item-date").html(formatPostDate(forumItem.bumped_at));
                $(this).find(".forum-item-topic").html(forumItem.title);
                $(this).find(".forum-item-category").html(categories[forumItem.category_id]);
                $(this).find(".forum-item-user").html(forumItem.last_poster_username);
                $(this).find(".forum-item-views").html(forumItem.views);
                $(this).find(".forum-item-replies").html(forumItem.posts_count - 1);

                i++;
            });;
        });
    });
}


function formatPostDate(date) {
    var day = date.substring(8, 10).replace(/^0+/g, '');
    var month = date.substring(5, 7).replace(/^0+/g, '');
    var hour = parseInt(date.substring(11, 13));
    var minute = date.substring(14, 16);

    var utcDifference = new Date().getTimezoneOffset() / 60;
    var hour = (hour - utcDifference) % 24;

    return day + "/" + month + " " + hour + ":" + minute;
}
