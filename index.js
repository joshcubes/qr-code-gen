var QRCode = require('qrcode')
const prompt = require('prompt');

prompt.start();

prompt.get(['input'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  QRCode.toString(result.input ,{type:'terminal'}, function (err, code) {
    if (err) throw err
    console.log(code)
  })
});

function onErr(err) {
  console.log(err);
  return 1;
}

