(ns frontend.components.AddMovie
  (:require [reagent.core :as r]
            [frontend.subs :as subs]
            [re-frame.core :as rf]
            [clojure.string :as s]))

(defn AddMovie
  []
  [:div
   [:h2 "Add a movie:"]
   [:div.input-form
    [:input {:placeholder "movie title"
             :value @(rf/subscribe [::subs/new-movie :title])
             :on-change #(rf/dispatch [:update-new-movie :title (-> % .-target .-value)])}]
    [:input {:placeholder "director"
             :value @(rf/subscribe [::subs/new-movie :director])
             :on-change #(rf/dispatch [:update-new-movie :director (-> % .-target .-value)])}]
    [:input {:placeholder "watch links"
             :value @(rf/subscribe [::subs/new-movie :link])
             :on-change #(rf/dispatch [:update-new-movie :link (-> % .-target .-value)])}]
    [:input {:placeholder "notes"
             :value @(rf/subscribe [::subs/new-movie :notes])
             :on-change #(rf/dispatch [:update-new-movie :notes (-> % .-target .-value)])}]
    [:button {:on-click #(rf/dispatch [:post-movie])} "Add to list"]]
   [:hr]])
