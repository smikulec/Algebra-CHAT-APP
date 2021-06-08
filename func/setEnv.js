// /.netlify/functions/setEnv

exports.handler = function (event, context, callback) {
  const accessKey = process.env.CHANNEL_ID;

  callback(null, {
    statusCode: 200,
    body: JSON.stringify({ keyID: `${accessKey}` }),
  });
};
