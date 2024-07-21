const PATHES = {
    URL_PER: {
        per_page: "",
        get url() {
            return  `https://api.openbrewerydb.org/v1/breweries?per_page=${encodeURIComponent(this.per_page)}`
        }
    },
    URL_RANDOM: {
        size: "",
        get url() {
            return `https://api.openbrewerydb.org/v1/breweries/random?size=${encodeURIComponent(this.size)}`
        }
    } ,
    urlById: {
        id: "",
        get url() {
            return `https://api.openbrewerydb.org/v1/breweries?by_ids=${encodeURIComponent(this.id)}`
        }
    }

}

export default PATHES


//TODO: переписать в функции нахуй