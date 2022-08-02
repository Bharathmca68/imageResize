const sharp = require("sharp");
// const axios = require("axios");
const fs = require("fs");
// var Jimp = require("jimp");

// const input = (await axios({ url: "https://somewhere.com/some-image.png", responseType: "arraybuffer" })).data as Buffer;

// sharp("monkey.jpg")
//   .resize({
//     width: 200,
//     height: 200,
//   })
//   .toBuffer()
//   .then((data) => {
//     fs.writeFileSync(`sharpe1.jpg`, data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// --------------------------------------------------------------------
// sharp("monkey.jpg")
//   .extract({ left: 100, top: 100, width: 200, height: 200 })
//   .toBuffer()
//   .then((data) => {
//     fs.writeFileSync(`sharpeExtract.jpg`, data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------------------------------------------------------------------
// async function cropImage() {
//   try {
//     await sharp("monkey.jpg")
//       .resize({
//         width: 200,
//         height: 200,
//       })
//       .toFile("sharpe.png");
//   } catch (error) {
//     console.log(error);
//   }
// }

// cropImage();
// -----------------------------------------------------------
// var Jimp = require("jimp");

// // open a file called "lenna.png"
// Jimp.read("test.jpg", (err, lenna) => {
//   if (err) throw err;
//   lenna
//     .resize(200, 200) // resize
//     .quality(100) // set JPEG quality
//     // .greyscale() // set greyscale
//     .write("JIM.jpg"); // save
// });

// ----------------------------------------------------------------
sharp("BMW.jpg")
  .resize(256, 256)
  .toFormat("png")
  .png({ quality: 100 })
  .toFile("output.png");
