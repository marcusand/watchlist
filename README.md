# Watchlist
A web application to store all the movies you wanna watch. <br>
Written in Clojure and Clojurescript.

<em>This is just an exercise application and had the only purpose for me to learn clojure/clojurescript</em>.

## Setup 
- You nee a mongoDB instance running on port `27017`
- start the backend with
``` shell
cd backend && lein ring server-headless
```
- start the frontend with 
``` shell
cd frontend && lein figwheel dev
```
- Visit the application on `http://0.0.0.0:3449/`
