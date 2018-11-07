const Client = require('cubic-client')

class Nexus extends Client {
  /**
   * Merge default options with client options
   */
  constructor(options) {
    options = {
      ...{
        api_url: "wss://api.nexushub.co/ws",
        auth_url: "wss://auth.nexushub.co/ws"
      },
      ...options
    }

    super(options)
  }
}

module.exports = Nexus
