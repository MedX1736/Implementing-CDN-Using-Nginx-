const express = require('express');
const multer = require('multer');
const ffmpeg = require('fluent-ffmpeg');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const uploadedFile = req.file;
  console.log("File Uploaded Successfully !");
  console.log("Mime Type"+ uploadedFile.mimetype)

  const fileExt = path.extname(uploadedFile.originalname);

  // if (fileExt === '.mp4' || fileExt === '.avi' || fileExt === '.mov') {
  //   const inputPath = uploadedFile.path;
  //   const outputPath = `${uploadedFile.destination}/compressed-${uploadedFile.filename}`;

  //   const command = ffmpeg(inputPath)
  //     .videoCodec('libx264')
  //     .audioCodec('aac')
  //     .outputOptions('-crf 28')
  //     .on('end', () => {
  //       // Delete the original uploaded file
  //       // fs.unlinkSync(inputPath);
  //       // Send a response indicating success
  //       res.send('File uploaded and compressed successfully');
  //     })
  //     .on('error', (err) => {
  //       // Delete the compressed file and send an error response
  //       // fs.unlinkSync(outputPath);
  //       res.status(500).send(`An error occurred while compressing the video: ${err.message}`);
  //       console.log("Error : "+ err.message)


  //     });

  //   command.save(outputPath);
  // }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
