(ns frontend.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [frontend.state :as state]
            [frontend.state :as state]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))


(defn getAllMovies
  []
  (go (let [response (<! (http/get "http://localhost:3000/movies"
                                   {:with-credentials? false}))]
        (let [data (:body response)]
          (state/swapMovies data)))))

(defn postMovie
  [newMovie]
  (go (let [response (<! (http/post "http://localhost:3000/movie"
                                    {:form-params newMovie :with-credentials? false}))]
        (let [data (:body response)]
          (state/swapMovies data)))))

(getAllMovies)
