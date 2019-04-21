[![Nexus Stats API Package](/banner.svg)](https://github.com/nexus-devs)

<p align='center'>Nodejs package to connect to <a href='https://api.nexushub.co'>api.nexushub.co</a>, based on <a href='https://github.com/cubic-js/cubic-client'>cubic-client</a>.</p>

##

<br>

## Installation
```
npm i nexushub-client
```

<br>

## Usage
```js
const Nexus = require('nexushub-client')
const nexus = new Nexus({
  // ONLY use this if you want to test new features
  // auth_url: https://auth.staging.nexushub.co 
  // api_url: https://api.staging.nexushub.co
})

const items = await nexus.get('/warframe/v1/items') // Get a list of all items.
```

<br>

## API
For a list of all API endpoints, check out the [official documentation](https://staging.nexushub.co/developers).

<br>

## Configuration
```javascript
const Nexus = require('nexus-stats-api')
const nexus = new Nexus({ key: value })
```

| Key           | Default         | Description   |
|:------------- |:------------- |:------------- |
| user_key | null | (optional) User key obtained via Auth-Node registration |
| user_secret | null | (optional) User secret obtained via Auth-Node |

<br>

### RESTful methods
```js
nexus.get(url)
```
>Sends a GET request to the API-Node

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| url | URL to request, without domain. e.g. `/foo`. | None |

<br>

```js
nexus.post(url, body)
```
>Sends a POST request to the API-Node

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| url | URL to request, without domain. e.g. `/foo`. | None |
| body | Data to send to endpoint. Can be any data type. | None |

<br>

```js
nexus.put(url, body)
```
>Sends a PUT request to the API-Node

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| url | URL to request, without domain. e.g. `/foo`. | None |
| body | Data to send to endpoint. Can be any data type. | None |

<br>

```js
nexus.patch(url, body)
```
>Sends a PATCH request to the API-Node

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| url | URL to request, without domain. e.g. `/foo`. | None |
| body | Data to send to endpoint. Can be any data type. | None |

<br>

```js
nexus.delete(url, body)
```
>Sends a DELETE request to the API-Node

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| url | URL to request, without domain. e.g. `/foo`. | None |
| body | Data to send to endpoint. Can be any data type. | None |

<br>

### Pub/Sub

```js
nexus.subscribe(endpoint, fn)
```
>Subscribe to updates on a specific endpoint.

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| endpoint | URL to listen for updates on, without domain. e.g. `'/foo'` | None |
| fn | Function to run when updates are received. Takes the new data as argument. | None |

<br>

### Authentication
```js
nexus.login(user, secret)
```
>Re-authorizes as a specific user at runtime. Usually users should be logged in
through the constructor options.

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| user | User id, equal to `user_key` when registering. | None |
| secret | User password, equal to `user_secret` when registering. | None |

<br>

```js
nexus.setRefreshToken(token)
```
>Manually set the refresh token. This way user credentials needn't be exposed.

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| token | `refresh_token` to use. | None |

<br>

```js
nexus.getRefreshToken()
```
>Retrieve current refresh token. Will await any existing authentication
process. Useful if the initial login can be done through user/pass but
the refresh token needs to be stored for subsequent logins.

<br>

```js
nexus.setAccessToken(token)
```
>Manually set the access token. This will expire on the next refresh.

| Argument | Description | Default |
|:------------- |:------------- |:------------- |
| token | `access_token` to use. | None |

<br>

```js
nexus.getRefreshToken()
```
>Retrieve current access token. Will await any existing authentication process.


## License
[MIT](/LICENSE.md)
