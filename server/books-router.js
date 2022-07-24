// This is the Router module for our Books Collection System Server
// Our router uses the express node module to route the data received from controller
const express = require('express');

// Let us define the controller for the books
const booksCtrl = require('./books-ctrl.js')

// Define the router using the express module
const booksRouter = express.Router()

// When any module calls our router using the HTTP GET method with the given path, router will return the books collection data
booksRouter.get('/classics', booksCtrl.getBooks)

// Our router exposes the BooksRouter Object
module.exports = booksRouter