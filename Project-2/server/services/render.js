const axios = require('axios');


exports.homeRoutes = (req,res) => {
    // Make a get request to /api/users
    axios.get('https://boiling-ravine-33753.herokuapp.com/')
    .then(function(response){
        // console.log(response.data)
        res.render('index',{users: response.data});

    })
    .catch(err=>{
        res.send(err);
    })
}

exports.add_user = (req,res)=>{
    res.render('add_user');
}

// const user = userdata.data;

exports.update_user = (req, res)=>{
    axios.get('https://boiling-ravine-33753.herokuapp.com/', {params:{id:req.query.id}})
        .then(function(userdata){
            res.render("update_user", {user : userdata.data}) 
        })
        .catch(err=> {
            res.send(err);
        })
}