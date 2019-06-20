(ns frontend.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.reader :as reader]))


(defn getAllMovies
  [movieAtom]
  (go (let [response (<! (http/get "http://localhost:3000/movies"
                                   {:with-credentials? false}))]
        (let [data (:body response)]
          (let [dataConverted (reader/read-string (str "[" data "]"))]
            (doseq [x dataConverted]
              (swap! movieAtom conj {:movie x})))))))

(defn postMovie
  [newMovie]
  (prn newMovie)
  (http/post "http://localhost:3000/movie" {:form-params newMovie}))
