const Client = require('cubic-client')

class Nexus extends Client {
  /**
   * Merge default options with client options
   */
  constructor(options) {
    options = Object.assign({
      api_url: "https://api.nexus-stats.com",
      auth_url: "https://auth.nexus-stats.com"
    }, options)

    super(options)
  }
}

module.exports = Nexus
