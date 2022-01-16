import axios from 'axios';

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: 'https://www.googleapis.com/youtube/v3',
            params: {key : key},

        })
    }

    

    mostPopular = async () => {
        const response = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                char: 'mostPopular',
                maxResults: 25,
            }           
        });

        return response.data.items;
    }

    search = async (query) => {
        const response = await this.youtube.get('search', {
            params: {
                part: 'snippet',
                
            }
        })

        const searchURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=25&key=${this.key}`;
        const response = await fetch(searchURL);
        const result = await response.json();
        return result.items;
        
    }
}

export default Youtube