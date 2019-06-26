import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"; //go up one folder into src, then into apis folder and then youtube.js
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

componentDidMount() {
  this.onTermSubmit('How to use API');
}



  onTermSubmit = async term => {
    // console.log(term); //you'll get a long query string in the Networks -> XHR part of the console in the browser, because you equated the term to the 'q' (query) property of the Google API: i.e. when you search for 'buildings':  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyC1fnw26yHp4zHCa9EzstsKd4lYM-aNk5Q&q=buildings". Then you click on that XHR and go to preview. Then you can see the 'items' list, and it's basically 5 objs with video links (MaxResult: 5).  items.id.videoID is very important because it's gonna allow us to actually play those videos. Then we're gonna take the information received from the YT API and set it as STATE on our app component (so we can pass them down). It's gonna allow the app to rerender itself and allow us to fetch those videos onto the screen. To do that, we have to introduce a const called response, which uses an asynchronous request and basically captures the entire response object we get from Youtube.

    //this 'youtube' line is basically our youtube.js axios instance where the base URL is already set, so the first arg just adds "/search" to it, and the 2nd one further adds the query parameter that we left unspecified in youtube.js because the 'q' is the search term, so it would be stupid to predefine it.
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });
    console.log(response); //we care about the 'response.data.items' property of the obj we receive, which is the array of received videos. Console logging this allows us to figure out how to set our API response as state to pass on. Since we're getting an array of videos, we basically set the default state as an empty array called 'videos'.

    this.setState({ 
    videos: response.data.items,
    selectedVideo: response.data.items[0] //this sets the default video upon search to be the first one in the received array
  });
  };

  onVideoSelect = video => {
    // console.log('From the App!', video);
    //when this method is called back in VideoItem, we wanna update the state with the SelectedVideo
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
      <div style={{marginBottom: '30px'}}>
        <SearchBar onFormSubmitProp={this.onTermSubmit} />
        </div>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>

            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// GENERAL ANATOMY THE OF API REQUEST:

/* React App -> Axios -> 'can u send me a list of videos related to buildings?' -> Youtube API ok's it and gives the list back. It's gonna send a list of objs where each obj represents a different video


Youtube API key:
/////////////////

1) Visit console.developers.google.com


2) Registration: When retrieving our credentials for youtube we select that we'll be calling the API from 'Web Browser (JavaScript)'    +    ''Access public data ''



3) We make a separate API js file to store our KEY /


4) We google Youtube API list. Not a very helpful site:
https://developers.google.com/youtube/v3/docs/search/list


-----------------
Given the deficiency shown here in the youtube API documentation, how do you go about learning how to implement a new API?  Presumably documentation for other APIs is similarly incomplete.

For example, how did you know that the key had to be included here? Did you try to implement it, got an error, and googled until you found a solution? 

Bobby B.
Bobby — Teaching Assistant · 3 months ago
You will find that each API has its own peculiarities when it comes to the documentation, some are better than others, and some are just terrible. In those cases, you will need to derive what you can from the docs and use Stack Overflow or the GitHub issues pages of the project to find your use case or answers to specific questions. Someone most likely had the same problem you did earlier on and posted the solution. If not, I wouldn't hesitate to post a question using those channels. As for Stephen, being an experienced engineer who has written many React applications and used many APIs, he generally can come up with a solution just by looking thru the docs even if they are not extremely helpful... this will come with time and practice.
------------------


we take a look at the 'request' section and find out we have to make a GET request: GET https://www.googleapis.com/youtube/v3/search



---------------------------------------------------

HOW TO GET THE SELECTED VIDEO TO SHOW:

We're gonna write another state in the App, not just 'videos'. It's gonna be a onVideoSelect callback which will be passed as props to the video list and then the video item, and it will be called back with the selection of a particular instance of the video as an argument, and then it will be displayed in the VideoDetail component.



THE IFRAME TAG 
--------------

An element we're gonna make that enables us to show a video player

It's gonna make a request on its own without any AJAX over to some specific YT address. Once requested, YT will reply w/ all the HTML and JS required to display the video on screen


*/
