var QRCode = require('qrcode')

QRCode.toString('I am a pony!',{type:'terminal'}, function (err, code) {
  if (err) throw err
  console.log(code)
})