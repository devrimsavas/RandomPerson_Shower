var express = require('express');
var router = express.Router();
var axios=require('axios');
var bodyParser = require('body-parser');


/* GET home page. */

router.get('/', function(req,res,next) {
  res.render('index', { title: 'Customers' });
})

//fetch user 
router.get('/getuser', async function(req, res, next) {
  let howMany=req.query.howMany;
  
  console.log(howMany);

  try  {
    let URL=`https://randomuser.me/api/?results=${howMany}`;
    //let URL="https://randomuser.me/api/";
    //let userData=await getAUser(URL);
    let userData=await getAUserAxios(URL);
    res.json({
      status:200,
      data:userData
    });
  } catch (error) {
    res.status(500).json({
      status:500,
      error:error.message
    });
  }  
  })

module.exports = router;

//fetch user function 
 async function getAUser(URL) {
  const response=await fetch(URL, {
    method:'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data=await response.json();
  return data
 }

 async function getAUserAxios(URL) {
  try {
    const response=await axios.get(URL);
    return response.data;
  } catch(error) {
    console.log(error);
    throw error;
  }

 
 }