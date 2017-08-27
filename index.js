const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('app'))

var dirname = __dirname + '/app/videos'
let videosList = []

fs.readdir(dirname, (err, files) => {
	if (err) {
		console.log(err)
		return
	}

	files.forEach(file => {
		if (file != '.DS_Store') videosList.push(file)
	})
})


app.get('/videos', (req, res) => {
	var js = JSON.stringify(videosList)
	res.send(js)
	console.log(js)
})

app.listen(3000)