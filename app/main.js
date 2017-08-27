var app = {
	init: function () {
		app.getVideos()
		app.url = '/videos/'
		app.parentEl = document.querySelector('main')
		app.video = document.querySelector('video')
		app.title = document.querySelector('div')
	},

	getVideos: function () {
		fetch('/videos').then(function (res) { return res.json() }).then(function (json) {
			app.videos = json
			app.start()
		})
	},

	start: function () {
		console.log(app.videos)
		app.setVideo(app.videos[0])
	},

	setVideo: function (vid) {
		app.title.innerHTML = 'Now watching ' + vid
		setTimeout(function () { app.title.innerHTML = ''}, 1000)
		
		app.video.setAttribute('src', app.url + vid)
		app.video.play()
	},

}

app.init()