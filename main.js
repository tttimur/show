async function main () {
  // create an archive instance for the current website
  var archive = new DatArchive(window.location.toString())
  var video = document.querySelector('video')

  var files = await archive.readdir('/videos/')
  video.setAttribute('src', 'videos/' + files[0])
  video.play()
  console.log(files)
}

main()