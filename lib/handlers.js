const fortune = require('./fortune')
const product = require('./product')

exports.home=(req,res) =>res.render('home')

exports.about=(req,res) =>
    res.render('about',{fortune: fortune.getFortune()})

exports.product=(req,res) => 
    res.render('product',{product: product.getProduct('MN')})

exports.notFound=(req,res) => res.render('404')

exports.serverError=(err,res,req,next) => res.render('500')
