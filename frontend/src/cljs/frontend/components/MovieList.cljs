(ns frontend.components.MovieList
  (:require [re-frame.core :as rf]
            [frontend.subs :as subs]))


(defn renderLink [link]
  [:a {:href link, :target "_blank"} link])

(defn renderEditButton [movie]
  [:button {:on-click #(rf/dispatch [:open-modal movie])} "Edit"])

(defn renderWatched [watched]
  (if watched
    [:span "yes"]
    [:span "no"]))

(defn renderRating [rating watched]
  (if watched
    [:span rating]
    [:span "-"]))

(defn renderRow [movie]
  (let [{:keys [_id title director link notes rating watched]} movie]
    [:tr {:key _id}
     [:td title]
     [:td director]
     [:td (renderLink link)]
     [:td notes]
     [:td (renderRating rating watched)]
     [:td (renderWatched watched)]
     [:td (renderEditButton movie)]]))

(defn MovieList []
  (let [movies (rf/subscribe [::subs/movies])]
    [:div
     [:table.watchlist
      [:thead
       [:tr [:th "title"] [:th "Director"] [:th "Watch Link"] [:th "Notes"] [:th "My Rating"] [:th "Watched"] [:th "Edit"]]]
      [:tbody (map renderRow @movies)]]]))
