const { exec } = require('child_process')
const ENV = process.env

exports.handler = (event, context, callback) => {
  toot("hoge~")
}


const toot = (msg) => new Promise(
  (resolve, reject) => {
    const cmd = `curl https://${ENV.MASTODON_HOST}/api/v1/statuses -X POST --header "Authorization: Bearer ${ENV.MASTODON_ACCESS_TOKEN}" --header "Content-Type: application/json" -d \'{"status":"${msg}"}\'`
    exec(cmd, (err, stdout, stderr) => {
      err ? reject(err) : resolve(stdout)
    })
  }
)
