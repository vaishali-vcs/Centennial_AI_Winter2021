let passport = require('passport');

//create user model instance
let UserModel = require('../models/user');
let User = UserModel.User;

let displayHomePage = (req, res, next)=>{
    res.render('index', {title:'Home', displayName: req.user ? req.user.displayName: ''});
}

let displayAboutPage = (req, res, next)=>{
   
    res.render('index', {title:'About' , displayName: req.user ? req.user.displayName:  ''});
}

let displayProductsPage = (req, res, next)=>{
   
    res.render('index', {title:'Products', displayName: req.user ? req.user.displayName : ''});
}

let displayServicesPage = (req, res, next)=>{
    
    res.render('index', {title:'Services', displayName: req.user ? req.user.displayName : ''});
}

let displayContactPage = (req, res, next)=>{
    console.log(req.user);
    res.render('index', {title:'Contact', displayName: req.user ? req.user.displayName : ''});
}

let displayLoginPage = (req, res, next) =>{

    if (!req.user)
    {
        res.render('auth/login', {
            title: "Login",
            messages: req.flash('loginMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
    {
        return res.redirect('/booklist');
    }
}

let processLoginPage = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err)
        {
            return next(err);
        }
        //is there a user login error
        if (!user)
        {
            req.flash('loginMessage','Authenication Error');
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err)
            {
                return next(err);
            }
            return res.redirect('/booklist');
        });
    })(req, res, next);
}

let displayRegisterPage = (req, res, next) => {
    if (!req.user)
    {
        res.render('auth/register', 
        {
            title: "Register",
            messages: req.flash('registerMessage'),
            displayName: req.user ? req.user.displayName : ''
        });
    }
    else
        {
            return res.redirect('/');
        }
}

let processRegisterPage = (req, res, next) => {
    //instantiate a user object
    let newUser = new User({
        username: req.body.username,
        email: req.body.email,
        displayName: req.body.displayname,
    });
    
    User.register(newUser, req.body.password, (err) => {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                req.flash('registerMessage', 'Registration Error: username already exists');
            }
            return res.render('auth/register',
            {
                title: "Register",
                messages: req.flash('registerMessage'),
                displayName: req.User ? req.User.displayName: ''
            });
        }
        else
        {
            //if no error exists, then registration is successful
            
            //redirect the user and authenticate them
            return passport.authenticate('local')(req, res, () =>{
                res.redirect('/booklist');
            });
        }
    });
}

let performLogout = (req, res, next) =>{
    req.logout();
    res.redirect('/');
}

module.exports.displayHomePage = displayHomePage ;
module.exports.displayAboutPage = displayAboutPage;
module.exports.displayContactPage = displayContactPage;
module.exports.displayProductsPage = displayProductsPage;
module.exports.displayServicesPage = displayServicesPage;
module.exports.displayLoginPage = displayLoginPage;
module.exports.processLoginPage = processLoginPage;
module.exports.displayRegisterPage = displayRegisterPage;
module.exports.processRegisterPage = processRegisterPage;
module.exports.performLogout = performLogout;