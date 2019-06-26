import axios from 'axios';



const KEY = 'AIzaSyC1fnw26yHp4zHCa9EzstsKd4lYM-aNk5Q';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})


/* INSTALL AXIOS:

ctrl + C on the project
npm instal --save axios */


//we declare this constant with capital letters to imply that it shouldn't be tampered with
// the idea is that we're gonna export a preconfigured instance of axios that already has the base URL and some default parameters 