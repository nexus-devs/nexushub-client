'use strict'

const extend = require('deep-extend')
const Blitz = require('blitz-api')

class Nexus extends Blitz {

    /**
     * Merge default options with client options
     */
    constructor(options) {

        // Extend with modified Blitz Default Values
        options = extend({
            api_url: "https://localhost:3400/",
            auth_url: "https://localhost:7119/",
            game: "warframe",
            api_version: "v1"
        }, options)

        super(options)
    }


    /**
     * Query method to easily create url from given params
     */
    query(verb, query) {
        let url = this.options.api_url

        // Generate Base URL
        url += this.options.game + '/'
        url += this.options.api_version + '/'
        url += query.resource + '/'
        url += query.method

        // Dynamically generate rest of URL
        let prefix = "?"
        for (var param in query) {
            if (param !== "resource" && param !== "method") {
                url += prefix + param + '=' + query[param]
                prefix = "&"
            }
        }

        // Replace spaces with standard encoding
        url = url.replace(" ", "%20")

        // Send Request
        return new Promise((resolve, reject) => {
            this.connection.request(verb, url)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }


    /**
     * Sample method to get all stats for specific item
     */
    getItem(name, options) {
        let query = {
            resource: "items/" + name,
            method: "statistics"
        }

        // Extend  with options if provided
        if (options) query = extend(query, options)

        return new Promise((resolve, reject) => {
            this.query('GET', query)
                .then(res => resolve(res))
                .catch(err => reject(err))
        })
    }
}

module.exports = Nexus
