(ns frontend.components.MovieList
  (:require [re-frame.core :as rf]
            [frontend.subs :as subs]))


(defn renderLink [link]
  [:a {:href link, :target "_blank"} link])

(defn renderEditButton [movie]
  [:button.btn {:on-click #(rf/dispatch [:open-modal movie])} "Edit"])

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
  (let [movies (rf/subscribe [::subs/movies]) human-form (rf/subscribe [::subs/human-form])]
    [:div
     [:table.watchlist
      [:thead
       [:tr
        [:th (:title @human-form)
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :title "asc"])} "↑"]
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :title "desc"])} "↓"]]
        [:th (:director @human-form)
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :director "asc"])} "↑"]
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :director "desc"])} "↓"]]
        [:th (:link @human-form)]
        [:th (:notes @human-form)]
        [:th (:rating @human-form)
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :rating "asc"])} "↑"]
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :rating "desc"])} "↓"]]
        [:th (:watched @human-form)
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :watched "asc"])} "↑"]
         [:span.sorting-arrow {:on-click #(rf/dispatch [:sort-movies-by :watched "desc"])} "↓"]]
        [:th "Edit"]]]
      [:tbody (map renderRow @movies)]]]))
