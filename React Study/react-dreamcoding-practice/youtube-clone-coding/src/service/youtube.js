class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }

    mostPopular = async () => {
        const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`;
        const response = await fetch(url, this.getRequestOptions);
        const result = await response.json();
        return result.items;
    }

    search = async (query) => {
        const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&key=${this.key}`;
        const response = await fetch(searchURL);
        const result = await response.json();
        return result.items;
    }
}

export default Youtube