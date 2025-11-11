# ZENGA Documentation

## Table of Contents
- [General](#general)
- [Feeds](#feeds)
  - [Queries](#queries)
- [Deployment](#Deployment)
- [Tests](#Tests)
- [Changelog](#Changelog)

# TO-DOs

## General
Infrastructure docs, more details and everything else related with documentation is located on Vigital Solution notion:
https://www.notion.so/f69b416777d0413d894af8bb73509c06?v=46d1fe98ac62484d839f3a793ff4a44d


### Technologies used:
- mongo as database
- jest with swc compiler for unit integration testing
- frontend is based on React v18
- redis for caching layer
- BULLMQ redis based for tasks / workflow management - this is used for auto-updates, pulling the videos from performstats
- Docker & Docker compose for deployment
- K3s Kubernetes on Rancher for some deployments, this is located on /cloud/spovizz/*
- BVR - Browser Video Recorder - handle video productions. Record animations using ffmpeg (x11grab framebuffer) and
  chromium to produce mp4 video
```
http://h2908577.stratoserver.net:7990/scm/vig/browser-video-recorder.git
```

### Password manager
All password saved inside Vigital Solutions Bitwarden password manager.
Here notion docs around it: https://www.notion.so/Passwords-Access-Bitwarden-13926a4bc0a080689f5cd8a76d3b3673


### Queues processor BULLMQ / REDIS

We are using BULLMQ (https://docs.bullmq.io/) for processing updates and many other tasks on CRON basis.

Live url:
https://api.womansworldcup.spovizz.com/admin/queues

```dotenv
USER: administrator
PASS: "$IA(3@S&X0#41005&135*"
```

Implementation located here: src/queues/init.js


## Deployment

### Private nexus repository
Docker repo is self hosted on strato server - Vigital Solutions Tools (look at notion Infrastructure docs)
Its open source Sonatype Nexus Repository.
Url: http://h2908577.stratoserver.net:5000
Official repo: https://github.com/sonatype/nexus-public

### Building & Publishing docker image manually API/APP
1. Depends on client, we should use:
- build_adler.sh
- build_fcb.sh
- build_transfermarkt.sh
- build_womandsworldcup.sh

The image will be built locally.

2. Set version on publish_*.sh for selected client.
3. Run publish_*.sh script, this will publish docker image to private nexus repository.


## STRATO SERVER DEPLOYMENT (STATSPERFORM)
4. Then login through ssh on server.
5. Bump docker image version on docker compose file below:
   - For API deployment: `/data/docker-scripts/womansworldcup/api/docker-compose.prod.womansworldcup.yml`
   - For WEBAPP deployment: `/data/docker-scripts/womansworldcup/app/docker-compose.prod.womansworldcup.yml`
6. Save and run run-prod.sh on the same directory.
7. New version will be deployed.
8. To make sure we wont have any timeline issues on the streams, we should run the script after deployment located here:
   - `node requests/restart.js`
8. After we introduce automation, we need to update the steps here.

## CLOUD SERVER KUBERNETES / RANCHER DEPLOYMENT (FCB / SHOWCASE / STAGING)
4. Go to internal Vigital solution dev cluster: https://rancher.cloud.vigitalsolutions.com/dashboard/home
   - pass inside bitwarden
5. Copy kube config to be able to login through SSH locally to run the deployment script (the best use Lens): https://k8slens.dev/
6. Login inside terminal in vigital-cluster context.
7. Use built-in lens terminal to go to: zenga-webservice repo: cloud/spovizz/fcb (for fcb deployment)
   a) bump docker image version inside: cloud/spovizz/fcb/deployment.yaml - `spovizz-app-` [frontend] or `spovizz-api-` [backend]
    - please commit all the changes inside this file
8. Inside built-in lens terminal run the apply.sh script
9. Done

### Usefull queries

1. Delete all templates created before Date
```mongo
db.template_records.deleteMany({
  $and: [
    {
      createdAt: {
        $gte: new Date('2024-04-01T00:00:00.546Z')
      }
    },
    {
      $or: [
        { template_name: 'wc_lineup' },
        { template_name: 'wc_lineuptactics' }
      ]
    }
  ]
});
```


### Production streams:
Production streams are defined inside streams-prod.json and api restarting all the streams using the script: at 05:00 AM using `restart.js` script.
Everything located here: `src/index.js`
Config for all streamed content: `requests/streams-prod.json` (this is used on Frontend `Streamers` tab on Backend UI)
`node ./requests/restart.js`

### DEL Docs

https://gamestatsdelclubs.docs.apiary.io/#

#### Game examples

- 2020, eventId: 2079 - ends with penalites

#### DEL Feeds Periods

```
"actual_time_name": "vor dem Spiel",
"actual_time_alias": "0",
```

```
"actual_time_name": "1. Drittel",
"actual_time_alias": "1",
```

```
"actual_time_name": "2. Drittel",
"actual_time_alias": "2",
```

```
"actual_time_name": "3. Drittel",
"actual_time_alias": "3",
```

```
"actualTimeName": "Ende"
"actualTimeAlias": "K"
```

```
"actualTimeName": "Ende n. Verlängerung"
"actualTimeAlias": "KP"
```

```
"actual_time_name": "Ende n. Penaltyschießen",
"actual_time_alias": "KN"
```

### Screenshot creation

#### Query example with custom chrome param:

```json
{
  "chrome": {
    "waitForSelector": ".template-container > div"
  },
  "actions": [
    {
      "templateId": "000000-0000-0000-1000",
      "url": "https://wp.pl",
      "dir": "playerfacts",
      "format": "1920x1080",
      "preview": true
    }
  ]
}
```

### To check-it-out:

- Nice code-base blueprint:

```bash
https://github.com/davellanedam/node-express-mongodb-jwt-rest-api-skeleton
```
- lerna (A tool for managing JavaScript projects with multiple packages)


## Tests
We are using jest / swc compiler to run webservice tests.
To run the tests: `npm run test`

Best resource is official documentation for jest: https://jestjs.io/docs/getting-started

_- Currently we are mocking responses from stats perform (call just once, and save json with response to avoid plenty of calls to be made by tests). Check getMockedResponse / setMockedResponse inside: `src/controllers/feeds/opta/index.js`
  - response data is saved inside: `test/MockedData/*`_

# Puppeteer screenshot example:

```text
You can now just use:

const browser = await puppeteer.connect({
    browserURL: 'http://localhost:9222'
})
const page = await browser.newPage()
instead of sending a request for websocketDebuggingUrl.
Also, make sure you call

await page.close();
```

# Clients

## Perform Stats

### Live link
https://app.womansworldcup.spovizz.com/

```txt
womansworldcup@spoviz.com
goldcup#2023!@#$%ABC
---
```

### Timeline logic descibed - state: 11/2024
https://www.notion.so/Timeline-Logic-PRE-LIVE-POST-POST2-14b26a4bc0a0800984e5caa9c70cb205

## Adler

### Live link
https://app.adler.spovizz.com/

```txt
adler@spoviz.com
#adler$$s2021#
---
$2b$05$Frk7FGF1ker2kMwF/kuhnuW1WLz3IGkmDfsUrRUVcLwBE9d/f/Xeq
```

```txt
adler@spovizz.com
#adler$$s2024#
---
$2b$05$Ww/JtklQ5xm8BOjdBPU1reWqT.7U/lU.2PkZzMOR6gvdph09a.s7a
```

## Showcase

### Live link

https://showcase.spovizz.cloud.vigitalsolutions.com

```txt
demo@vigitalsolutions.com
#showcase$$s2024#
```

Pass test user

```txt
test@fx1.eu
#spoviz##s2021#
---
```

## LOGGING

Grafana cloud emitting logs:

```js
LOGGER.error({
  json: 'test'
}, 'Simple test msg');

LOGGER.fatal({
  json: 'test'
}, 'FATAL Simple test msg');
```

## VOD VIDEOS

Example VOD call - Premiere League - Match:
Atlético Madrid
Internazionale
13.03.2024
https://api.performfeeds.com/vod/1tqxh2zx6whql16q0nqfpc2fzd/?_rt=b&vo=ep&_fmt=json&_ord=pt&_ordSrt=desc&_lcl=en,de&lnk=urn:perform:mfl:fixture:crxa7utghy4v70yfrlwrtwahg

## Changelog

### 5.0.7

- Videos automation
- live update season templates, because of score

### 5.0.9

- pre live post 48 before / post-match2

### 6.6.0

- move daemon updated to bullmq queues
- update docker image to `node:20.17.0-bullseye-slim`

### 6.7.2

- long-term stable version, before big update / bugfixing

### 6.8.0

- bugfixing

### 6.8.1
- forecasting API UI for perfrom stats

### 7.0.0
- improve API calls for getClosesetMatchFromSchedule

### 7.0.4
- improve API calls seasons
- add API call statistics for Perform Stats


# WEBSERVICE SETUP GUIDE (for windows)

## Installation Steps

### 1. Install Required Dependencies

- Install **Docker Desktop**
- Install **cross-env** by running the command:
  ```sh
  npm install cross-env
  ```

### 2. Update `package.json`

Modify the `package.json` file to update the following lines:

```json
"start": "cross-env node -r ./node_modules/dotenv-safe/config -r module-alias/register src/index.js dotenv_config_path=.env.prod",
"dev": "cross-env UV_THREADPOOL_SIZE=600 PINO_PRETTY=true nodemon --trace-warnings -r ./node_modules/dotenv-safe/config -r module-alias/register src/index.js dotenv_config_path=.env",
```

### 3. Modify `index.js`

In `index.js`, update the following line:

```js
let cpus = process.env.NODE_ENV === 'development' ? 2 : 6;
```

Ensure that:

```js
cluster.worker.id <= 1;
```

### 4. Run Redis in Docker

Run the following command to start Redis in Docker:

```sh
docker run -d --name redis -p 6500:6379 -v redis_data:/data redis:alpine redis-server --requirepass 2400632bd2d976c5a16661b78dd9ek21
```

### 5. Run MongoDB in Docker

Run the following command to start MongoDB in Docker:

```sh
docker run -d --name spovizz-mongo -p 27017:27017 mongo
```

### 6. Restart the System

After running Redis and MongoDB in Docker, restart your system. Then, open **Docker Desktop** and ensure both Redis and MongoDB containers are running.

### 7. Run the Webservice

To start the webservice, run the following command:

```sh
npm run dev
```


# NEW TEMPLATE SETUP GUIDE
## Webservice Setup
1. Copy any existing template folder, create a new folder paste and rename as required in folder `src/templates/worldcup/`.
2. Add new template object in `src/config/opta_opta_dynamic/template` (default.json)
3. Modify the initialData and the index function according to the requirement for the template.
   a) This will be returned as record with UUID = 0 (frontend example for developing new template: `frontend/template/wc_lineuptactics/0?format=1920x1080)`
4. Add required function for data in `src/controllers/feeds/opta/functions.js`

## Database Setup
Add new template object in `setup` table in MongoDB database.


# Update tournament calendar on any competition - Steps
1. npm run get-competitions, then check the file: `scripts/performstats/output/activated_competitions.json`
2. then go to (Statsperform) `src/config/opta_opta_dynamic/feedCfg.js` and update:
   - trackedCompetition section
   - competitions section
   - replace any occurence for tournamentCalendarId, based on latest competitions pulled
3. Copy competitionIdReal OR competitions -> ID and find inside activated_competitions.json file
4. Add missing properties (backward compatiblity):
   ```json
   {
      competitionName: 'Friendlies',
      competitionId: '6g6a8weru6ytaa0mr0hpwn9xw', //tournamentCalendar
      competitionIdReal: 'cesdwwnxbc5fmajgroc0hqzy2'
      ...,
   }
    ```
5. On tracked competition replace just tournamentCalendarId and whole object inside competitions.[your competition]
