
import {base_url,api_key} from '../config';

export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getResult(){
        const response = await fetch(`${base_url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
        
    }
    
}