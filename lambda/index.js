const AWS = require('aws-sdk');
const sharp = require('sharp');

const s3 = new AWS.S3();

exports.handler = async (event, context, callback) => {
  const Bucket = event.Records[0].s3.bucket.name;                   // react-nodebird-eomdh
  const Key = decodeURIcomponent(event.Records[0].s3.object.key);   // 파일명 한글문제
  console.log(Bucket, Key);
  const filename = Key.split('/')[Key.split('/').length - 1];           // 파일명
  const ext = Key.split('.')[Key.split('.').length - 1].toLowerCase();  // 확장자
  const requiredFormat = ext === 'jpg' ? 'jpeg' : ext;                  // jpg 확장자는 jpeg로
  console.log('filename', filename, 'ext', ext);

  try {
    const s3Object = await s3.getObject({ Bucket, Key }).promise();
    console.log('original', s3Object.Body.length);
    const resizedImage = await sharp(s3Object.Body)
      .resize(400, 400, { fit: 'inside' })
      .toFormat(requiredFormat)
      .toBuffer();
    await s3.putObject({
      Bucket,
      Key: `thumb/${filename}`,
      Body: resizedImage,
    }).promise();
    console.log('put', resizedImage.length);
    return callback(null, `thumb/${filename}`);
  } catch (error) {
    console.error(error);
    return callback(error);
  }
}