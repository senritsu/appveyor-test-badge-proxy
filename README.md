# appveyor-test-badge-proxy

For generating a test status badge for appveyor builds using [shields.io](http://shields.io)

## Usage

Deploy on server of your choice:

- `git clone https://github.com/senritsu/appveyor-test-badge-proxy.git`
- `cd appveyor-test-badge-proxy`
- `npm install`
- adjust [configuration](#configuration)
- `node server` or use any process manager of your choice

If you need to change the routes or port, for now you have to edit the source.

### Simple pass/fail badge

`http(s)://yourserver.com/appveyor_user/appveyor_project`

![Test status](https://img.shields.io/badge/tests-passing-brightgreen.svg)
![Test status](https://img.shields.io/badge/tests-failing-red.svg)

### Passing test count badge

`http(s)://yourserver.com/appveyor_username/appveyor_projectname?count=true`

![Test status](https://img.shields.io/badge/tests-10/10-brightgreen.svg)
![Test status](https://img.shields.io/badge/tests-5/10-red.svg)

<a name='configuration'/>
## Configuration

The included `config.json` has the following options

### port

Default `3002`.

The port the application listens on. Defaults to `3002`.

### routeBase

Default `/`.

The route prefix the server should listen on. With a prefix of `foo/bar/` the image route would change to `https://yourserver.com/foo/bar/appveyor_user/appveyor_project`.

### label

Default `tests`.

What the badge should be labeled as. If you change this to for example `unit tests` your resulting image might look like

![Test status](https://img.shields.io/badge/unit_tests-passing-brightgreen.svg)
