# appveyor-test-badge-proxy

For generating a test status badge for appveyor builds using [shields.io](http://shields.io)

## Usage

deploy on server of your choice, listens (for now) hardcoded on port 3002.

- `git clone https://github.com/senritsu/appveyor-test-badge-proxy.git`
- `npm install`
- `node server` or use any process manager of your choice

If you need to change the routes or port, for now you have to edit the source.

### Simple pass/fail badge

`http(s)://yourserver.com/appveyor_username/appveyor_projectname`

![Test status](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![Test status](https://img.shields.io/badge/tests-failing-red.svg)

### Passing test count badge

`http(s)://yourserver.com/appveyor_username/appveyor_projectname?count=true`

![Test status](https://img.shields.io/badge/tests-10/10-brightgreen.svg)
![Test status](https://img.shields.io/badge/tests-5/10-red.svg)
