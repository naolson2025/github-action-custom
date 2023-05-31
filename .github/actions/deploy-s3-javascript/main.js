const core = require('@actions/core');
// const github = require('@actions/github');
const exec = require('@actions/exec');

function run() {
  // 1. get some input values
  // the action.yaml file has a list of inputs that this action expects
  const bucket = core.getInput('bucket', { required: true })
  const bucketRegion = core.getInput('bucket-region', { required: true })
  const distFolder = core.getInput('dist-folder', { required: true })

  // 2. upload files to s3
  // the aws cli is already installed in the github actions ubuntu-latest Runner environment
  exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`)

  // core.notice('hello world')
  const websiteUrl = `http://${bucket}.s3-website-${bucketRegion}.amazonaws.com`
  // this output value can be used by other actions in the same workflow
  // in this project deploy.yaml uses this output value to print the website url
  core.setOutput('website-url', websiteUrl)
}

run();
