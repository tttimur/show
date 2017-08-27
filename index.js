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
		videosList.push(file)
	})
})


app.get('/videos', (req, res) => {
	res.send(videosList)
})

app.listen(3000)