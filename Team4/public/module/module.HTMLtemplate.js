let htmlTemplate = function htmlTemplate(content){
    return`<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">
  ${content}
  </div>
  <script type = "module" src="core.js"></script>
</body>
</html>`;
}

// let htmlTemplate = function htmlTemplate(content){
//   return
// `<!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div id="root">
//   ${content}
//   </div>
//   <script type = "module" src="./code.js"></script>
// </body>
// </html>`;
// }

















// let htmlTemplate(content){
// `<!DOCTYPE html>
// <html lang="ko">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div id="root">
//   ${content}
//   </div>
//   <script type = "module" src="./code.js"></script>
// </body>
// </html>`;
// };

module.exports = htmlTemplate