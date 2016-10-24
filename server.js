'use strict';

const rp = require('request-promise')
const koa = require('koa')
const route = require('koa-route')
const app = koa()

const config = require('./config.json')

app.use(route.get(`${config.baseRoute}:user/:project`, badge))

function *badge(user, project) {
    const detailedCount = this.query.count
    const buildStatus = yield rp(`https://ci.appveyor.com/api/projects/${user}/${project}`, { json: true })
    const job = buildStatus.build.jobs[0]

    const passed = job.passedTestsCount === job.testsCount
    const color = passed ? 'brightgreen' : 'red'

    if (detailedCount) {
        const status = `${job.passedTestsCount}/${job.testsCount}`
        this.redirect(`https://img.shields.io/badge/${config.label}-${status}-${color}.svg`)
    } else {
        const status = passed ? 'passing' : 'failing'
        this.redirect(`https://img.shields.io/badge/${config.label}-${status}-${color}.svg`)
    }
}

app.listen(3002)
