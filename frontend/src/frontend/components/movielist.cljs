(ns frontend.components.movielist
  (:require [frontend.state :as state]))

(defn row [element]
  [:tr [:td "hello"]])

(defn movielist
  []
  [:main
   [:table.watchlist
    [:thead nil
     [:tr nil '([:th "Titel"] [:th "Director"] [:th "Watch Link"] [:th "Notes"] [:th "Edit"])]]
    [:tbody nil
     (map row @state/movies)]]])
