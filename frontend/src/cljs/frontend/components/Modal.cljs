(ns frontend.components.Modal
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [frontend.subs :as subs]
            [clojure.string :as s]))


(defn renderRow [key movie]
  (let [human-form (rf/subscribe [::subs/human-form key])]
    [:tr
     [:td @human-form]
     [:td
      [:input {:placeholder @human-form
               :value (key @movie)
               :on-change #(rf/dispatch [:update-modal-movie key (-> % .-target .-value)])}]]]))

(defn renderWatched [key movie]
  (let [human-form (rf/subscribe [::subs/human-form key])]
    [:tr
     [:td @human-form]
     [:td
      [:input {:type "checkbox"
               :checked (key @movie)
               :on-change #(rf/dispatch [:update-modal-movie key (not (key @movie))])}]]]))

(defn renderRating [key movie]
  (let [human-form (rf/subscribe [::subs/human-form key])]
    (if (:watched @movie)
      [:tr
       [:td @human-form]
       [:td
        [:input {:type "range" :min "1" :max "5" :step "1"
                 :value (key @movie)
                 :on-change #(rf/dispatch [:update-modal-movie key (-> % .-target .-value)])}]
        [:span (key @movie) "/5"]]])))

(defn Modal []
  (let [movie (rf/subscribe [::subs/modal-movie])]
    [:div#myModal.modal
     [:div.modal-content
      [:span.close {:on-click #(rf/dispatch [:close-modal])} "X"]
      [:h2 "Edit"]
      [:table
       [:tbody
        (renderRow :title movie)
        (renderRow :director movie)
        (renderRow :link movie)
        (renderRow :notes movie)
        (renderWatched :watched movie)
        (renderRating :rating movie)]]
      [:button {:on-click  #(rf/dispatch [:delete-movie])} "Delete"]
      [:button {:on-click  #(rf/dispatch [:update-movie])} "Save"]]]))
