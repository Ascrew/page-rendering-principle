// app.js
const express = require('express')
const fs = require('fs')
const app = new express()
const port = 3000

const sleepFun = time => {
  return new Promise(res => {
    setTimeout(() => {
      res()
    }, time)
  })
}

const filter = (req, res, next) => {
  const { sleep } = req.query || 0

  if (sleep) {
    sleepFun(sleep).then(() => next())
  } else {
    next()
  }
}

app.use(filter)

app.use('/static/', express.static('./static/'))

app.get('/', function (req, res, next) {
  fs.readFile('./index.html', 'UTF-8', (err, data) => {
    if (err) return

    res.send(data)
  })
})

app.listen(port, () => {
  console.log(`app is running at http://127.0.0.1:${port}/`)
})
