
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const locationsRouter = require('./routes/locations.router');
const storeRouter = require('./routes/store.router');
const supportRouter = require('./routes/support.router');
const clientStoreDashboardRouter = require('./routes/clientStoreDashboard.router');
const userListRouter = require('./routes/admin.users.router');
const emailRouter = require('./routes/email.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */

app.use('/api/user', userRouter);
app.use('/api/location', locationsRouter);
app.use('/api/store', storeRouter);
app.use('/api/support', supportRouter);
app.use('/api/clientstore', clientStoreDashboardRouter)
app.use('/api/userlist', userListRouter)
app.use('/api/email', emailRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});



//aws bucket
// const aws = require('aws-sdk')

// const s3 = new aws.S3();

// app.post('/upload-url', async(req, res)=>{
//   let expires = 900
//   console.log("Inside AWS post call server side")

//   s3.createPresignedPost({
//     Bucket: 'pretslonboardingappbucket',
//     Expires: expires,
//     Fields:{
//       key: 'test-file.txt'
//     }
//   },(err,data) =>{
//     if(err){
//       console.error(err);
//       res.send(500);
//       return;
//     }
//     res.send(data);
//   })
// });

const multer = require('multer');
const aws = require('aws-sdk');
const fs = require('fs');
const s3 = new aws.S3();
const pool = require('./modules/pool');


const upload = multer({
  storage: multer.diskStorage({

  //upload files to public/uploads
  destination: (req, file, cb) =>{
    let uploadDirectory = 'public/uploads/'
    cb(null, uploadDirectory);
  },
  

//give each uploaded file a unique name by date 
// so we don't overwrite files
filename: (req, file, cb) => {
  const filename = `${Date.now()}-${file.originalname}`;
  cb(null, filename);
}
})
});

app.post('/upload', upload.any(), async(req, res) =>{
  //Upload files
  //note the upload.any() middleware

  //multer loads everything to public/uploads
  //then creates a req.files array with infor about each file.
  //console.log(req.files);

  for (let file of req.files){
    console.log(`Uploading ${file.path}...`);

    await s3.upload({

      Bucket: 'pretslonboardingappbucket',
      Key: file.filename,
      Body: fs.createReadStream(file.path)
    }).promise();  //promise is required to use await keyword
    console.log(`Uploading ${file.path}...done.`);

    await pool.query(`
    INSERT INTO contracts (client_id, s3_bucket, s3_key, hasContractBeenSigned)
    ($1, $2, $3, false);
    `, [
      req.body.client_id,
      'pretslonboardingappbucket',
      file.path
    ]).promise();
   }

  res.sendStatus(201);
})
