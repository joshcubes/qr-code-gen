const prompt = require('prompt');

prompt.start();

prompt.get(['input'], function (err, result) {
  if (err) {
    return onErr(err);
  }
  const input = result.input;
});

function onErr(err) {
  console.log(err);
  return 1;
}