'use strict'

const extend = require('deep-extend')
const Blitz = require('blitz-js-query')

class Nexus extends Blitz {

    /**
     * Merge default options with client options
     */
    constructor(options) {

        // Extend with modified Blitz Default Values
        options = extend({
            api_url: "https://api.nexus-stats.com",
            auth_url: "https://auth.nexus-stats.com"
        }, options)

        super(options)
    }


    /**
     * Get primary stats for specific item
     */
    getItemStats(name) {
        return new Promise((resolve, reject) => {
            this.get(`/warframe/v1/items/${name}/statistics`)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    /**
     * Get item price list
     */
    getItemPrices() {
        return new Promise((resolve, reject) => {
            this.get("/warframe/v1/items/prices")
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    /**
     * Item distribution (supply/demand)
     */
    getItemDistribution() {
        return new Promise((resolve, reject) => {
            this.get("/warframe/v1/items/distribution")
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    /**
     * Status of all connected bots
     */
    getBotStatus() {
        return new Promise((resolve, reject) => {
            this.get("/warframe/v1/bots/status")
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    /**
     * Status of all connected bots
     */
    getPlayerProfile(username) {
        return new Promise((resolve, reject) => {
            this.get(`/warframe/v1/players/${username}/profile`
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}

module.exports = Nexus
