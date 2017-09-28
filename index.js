const Blitz = require('blitz-js-query')

class Nexus extends Blitz {
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

  /**
   * Get primary stats for specific item
   */
  getItemStats(name) {
    return this.get(`/warframe/v1/items/${name}/statistics`)
  }

  /**
   * Get item price list
   */
  getItemPrices() {
    return this.get("/warframe/v1/items/prices")
  }

  /**
   * Item distribution (supply/demand)
   */
  getItemDistribution() {
    return this.get("/warframe/v1/items/distribution")
  }

  /**
   * Status of all connected bots
   */
  getBotStatus() {
    return this.get("/warframe/v1/bots/status")
  }

  /**
   * Status of all connected bots
   */
  getPlayerProfile(username) {
    return this.get(`/warframe/v1/players/${username}/profile`)
  }
}

module.exports = Nexus
