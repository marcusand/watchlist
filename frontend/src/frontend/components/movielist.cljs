(ns frontend.components.movielist
  (:require [frontend.state :as state]))


(defn renderLink [link]
  [:a {:href link, :target "_blank"} link])

(defn renderEditButton [id]
  [:button {:id id} "Edit"])

(defn renderWatched [watched]
  (if watched
    [:span "yes"]
    [:span "no"]))

(defn renderRating [rating watched]
  (if watched
    [:span rating]
    [:span "-"]))

(defn renderRow [movie]
  (let [{:keys [_id titel director link notes rating watched]} (:movie movie)]
    [:tr {:key _id}
     [:td titel]
     [:td director]
     [:td (renderLink link)]
     [:td notes]
     [:td (renderRating rating watched)]
     [:td (renderWatched watched)]
     [:td (renderEditButton _id)]]))

(defn movielist
  []
  [:main
   [:table.watchlist
    [:thead
     [:tr [:th "Titel"] [:th "Director"] [:th "Watch Link"] [:th "Notes"] [:th "My Rating"] [:th "Watched"] [:th "Edit"]]]
    [:tbody
     (map renderRow @state/movies)]]])
