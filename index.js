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
    getItemStats(name, options) {
        return new Promise((resolve, reject) => {
            this.get(`/warframe/v1/items/${name}/statistics`)
                .then(res => resolve(JSON.parse(res.body)))
                .catch(err => reject(err))
        })
    }
}

module.exports = Nexus
