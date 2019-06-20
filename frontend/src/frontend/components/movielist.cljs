(ns frontend.components.movielist
  (:require [frontend.state :as state]))

(defn row [movie]
  (let [movieData (:movie movie)]
    [:tr
     [:td (:titel movieData)]
     [:td (:director movieData)]
     [:td (:link movieData)]
     [:td (:notes movieData)]
     [:td (:rating movieData)]
     [:td (:watched movieData)]]))

(defn movielist
  []
  [:main
   [:table.watchlist
    [:thead nil
     [:tr nil '([:th "Titel"] [:th "Director"] [:th "Watch Link"] [:th "Notes"] [:th "My Rating"] [:th "Watched"])]]
    [:tbody nil
     (map row @state/movies)]]])
