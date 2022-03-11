const express = require('express')
const fs = require('fs')
const app = new express()
const port = 3000

const sleepFun = time => {
  return new Promise( res => {
    setTimeout(() => {
      res()
    }, time)
  })
}
