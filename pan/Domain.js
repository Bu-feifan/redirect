$.ajax({
    url: 'https://192.168.0.104:1912',
    dataType: "jsonp",
    type: 'GET',
    complete: function (response) {
        if (response.status == 200) {
            window.location.href = "https://192.168.0.104:1912/home-u.html";
        } else {
            alert('你成功激活了Bug，告诉我你是怎么做到的：admin@bufeifan.top');
			window.location.href = "https://192.168.0.104:1912/home-u.html";
        }
    }
});
setTimeout(function () {
    window.location.href = "/home-n.html"
}, 1000)