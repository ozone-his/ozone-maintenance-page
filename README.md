## Ozone Maintenance server
This is a simple nodejs server that is used to serve the Ozone Maintenance page.

### How to run
1. Clone the repo `git clone https://github.com/ozone-his/ozone-maintainance-page`
2. Run `npm install`
3. Export env vars
```bash
export PORT=3000 \
export TITLE="The system is currently undergoing maintainance" \
export MESSAGE="We are currently undergoing maintainance. Please check back later." \
export SUPPORT_EMAIL="+00 000 000 0000" \
export SUPPORT_PHONE="mail@address.com"
```
4. Run `node index.js`

### How to run with docker
The docker setup assumes that you are using  Traefik that is deployed in the web network. If you are not using Traefik, you can remove the labels and the network directives in the docker-compose file.

```docker  compose up --build```