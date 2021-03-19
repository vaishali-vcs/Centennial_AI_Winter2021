let express = require('express');
let router =  express.Router();
let mongoose = require('mongoose');


//connect to the book model
let Book = require('../models/book.js');

displaybooklist = (req, res, next) => {
    Book.find((err, BookList) => {
        if(err)
        {
            res.render('error', { title: 'Error' });
        }
        else
        {
            res.render('book/listbook', { title: 'Books', Booklist: BookList, displayName: req.user ? req.user.displayName : '' });
        }
    });
} 

get_addbook = (req, res, next)=>{
    res.render('book/addbook', { title: 'Add Book', displayName: req.user ? req.user.displayName : '' });
}

post_addbook =  (req, res, next)=>{
    let newbook = Book({
        "name": req.body.name,
        "author":  req.body.author,
        "published": req.body.published,
        "description":  req.body.description,
        "price": req.body.price       
    });

    Book.create(newbook, (err, Book)=>{
        if(err)
        {
            console.log(err);
            res.end(err);            
        }  
        else{
            res.redirect('/booklist');
        }
    });
}

get_editbook =  (req, res, next)=>{
    
    let id = req.params.id; 
   
    Book.findById(id, (err, booktoedit) => {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }        
        else{
            console.log(booktoedit);
            res.render('book/editbook', {title: "Edit Book", book:booktoedit, displayName: req.user ? req.user.displayName : ''})            
        }
    });
}

post_editbook = (req, res, next)=>{
    let id = req.params.id;
    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author":  req.body.author,
        "published": req.body.published,
        "description":  req.body.description,
        "price": req.body.price
    });    

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);   
        }        
        else
        {
            //refresh the booklist
            res.redirect('/booklist');
        }   
    });    
}

deletebook = (req, res, next)=>{
    let id = req.params.id;
    Book.remove({_id: id}, (err)=>{
         if(err)
       {
           console.log(err);
           res.end(err);   
       }        
       else
       {
           //refresh the booklist
           res.redirect('/booklist');
       }
    });
}

module.exports.displaybooklist = displaybooklist
module.exports.get_addbook = get_addbook
module.exports.post_addbook = post_addbook
module.exports.get_editbook = get_editbook
module.exports.post_editbook = post_editbook
module.exports.deletebook = deletebook