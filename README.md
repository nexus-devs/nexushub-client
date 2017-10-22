[![Nexus Stats API Package](/banner.png)](https://github.com/nexus-devs)

<p align="center">Nodejs package to connect to <a href="https://nexus-stats.com">api.nexus-stats.com</a>, based on <a href="https://github.com/nexus-devs/npm-blitz-query">blitz-js-query</a></p>

##

<br>

## Installation
`npm install nexus-stats-api`

<br>

## Usage
```js
const Nexus = require("nexus-stats-api")
const nexus = new Nexus()

nexus.get("/warframe/v1/items").then(res => console.log(res.body)) // list of all stored items
```

<br>

## Configuration
```javascript
const Nexus = require("nexus-stats-api")
const nexus = new Nexus({key: value})
```

| Key           | Default         | Description   |
|:------------- |:------------- |:------------- |
| use_socket | true | Whether or not to use Socket.io as standard request engine. Setting to false uses http. Subscriptions will use Socket.io regardless. |
| namespace | "/" | Socket.io namespace to connect to |
| user_key | null | (optional) User key obtained via Auth-Node registration |
| user_secret | null | (optional) User secret obtained via Auth-Node |
| ignore_limiter | false | Whether or not to disable the default rate limit adaptions. Disabling this only makes sense if you connect as a user who won't face rate limits. If you disable it anyway, expect all your requests to get blocked. |

<br>
<br>

## API
For response formats, check the [provisional nexus-stats docs](https://drive.google.com/open?id=16rbyQAG1cgQhwfFfXcHqn-o8txZ5dAZBf4hzr3VeJJE)

### Item Price Stats
```js
nexus.getItemStats(name)
```
>Get detailed item statistics for a given item. Returns a promise with a statistics object.

<br>

### Item Price List
```js
nexus.getItemPrices()
```
>Returns a list of all items and their overall price stats in the last week.

<br>

### Supply & Demand
```js
nexus.getItemDistribution()
```
>Returns a list of all items and their supply/demand values.

<br>

### Player Profiles
```js
nexus.getPlayerProfile(name)
```
>Returns the ingame player profile for given user.

<br>

### Bot Status
```js
nexus.getBotStatus()
```
>Returns the upstatus for all connected bots.

<br>

### Subscriptions
Subscriptions allow you to receive real-time data whenever an item is updated. Updates trigger on in-game requests.

```js
nexus.subscribe(endpoint)
```
>Subscribe to updates on a specific endpoint. Updates can be listened to via `nexus.on(endpoint, fn)`.

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| endpoint | URL to listen for updates on e.g. `/warframe/v1/items/frost prime/statistics` | None |

<br>

```js
nexus.on(ev, fn)
```
>Listens to specific Socket.io event, then runs the given function with the received data

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| ev | Event name. Usually a subscribed endpoint URL. | None |
| fn | Function to execute on event trigger | None |

<br>

### RESTful methods
```js
// GET Request
nexus.get(url)

// POST, PUT, PATCH Requests
nexus.post(url, body)
nexus.put(url, body)
nexus.patch(url, body)

// DELETE Request
nexus.delete(url, body)
```
>Sends a RESTful request to a certain URL (without domain) and returns a promise containing the response data.

See the [blitz-js-query](https://github.com/nexus-devs/npm-blitz-query) documentation for further details on sending RESTful methods.

<br>

## License
[MIT](https://github.com/nexus-devs/npm-blitz-query/blob/master/LICENSE.md)
