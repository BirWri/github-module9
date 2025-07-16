/* jshint esversion: 6 */

const core = require('@actions/core');
const exec = require('@actions/exec');

function run() {
    // Get some input values
    const bucket = core.getInput('bucket', {required: true});
    const bucketRegion = core.getInput('bucket-region', {required: true});
    const distFolder = core.getInput('dist-folder', {required: true});

    // Upload files
    // could be done also by using AWS SDK
    // here we use aws CLI

    const s3URL = `s3://${bucket}`;
    exec.exec(`aws s3 sync ${distFolder} ${s3URL} --region ${bucketRegion}`);

    core.notice('Hello from my custom JavaSbript action!');
}

run();