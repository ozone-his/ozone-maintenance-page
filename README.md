# Ozone - The Maintenance Server

This is a simple Node.js server that serves the Ozone maintenance page.

## 1. Instructions
### How to run with Node.js

1. Clone the repo `git clone https://github.com/ozone-his/ozone-maintenance-page`
2. Run `npm install`
3. Export the configuration envvars as per your need:
```bash
export PORT=3000 \
export TITLE="The system is currently undergoing maintenance" \
export MESSAGE="We are currently undergoing maintenance. Please check back later." \
export SUPPORT_PHONE="+00 000 000 0000" \
export SUPPORT_EMAIL="support@example.com"
```
4. Run `node index.js`

### How to run with Docker

The Docker setup assumes that you are using Traefik that is deployed in the web network. If you are not using Traefik, you can remove the labels and the network directives in the Docker Compose file.

```bash
docker compose up --build
```

## 2. Try Ozone
Check [ozone-docker](https://github.com/ozone-his/ozone-docker).

## 3. Find us
[Slack](https://openmrs.slack.com/archives/C02PYQD5D0A) - [Forum](https://talk.openmrs.org/c/software/ozone-his) - [Website](http://ozone-his.com)

<sub>:information_source: Self sign-up [here](https://slack.openmrs.org/) before accessing our Slack space for the first time.</sub>
## 4. Report an issue
1. Either start a conversation on [Slack](https://openmrs.slack.com/archives/C02PYQD5D0A) about it,
1. Or start a thread on our [forum](https://talk.openmrs.org/c/software/ozone-his) about it.
