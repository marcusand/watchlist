(ns frontend.components.AddMovie
  (:require [reagent.core :as r]
            [frontend.subs :as subs]
            [re-frame.core :as rf]
            [clojure.string :as s]))

(defn AddMovie []
  (let [new-movie (rf/subscribe [::subs/new-movie]) human-form (rf/subscribe [::subs/human-form])]
    [:div
     [:h2 "Add a movie:"]
     [:div.input-form
      [:input {:placeholder (:title @human-form)
               :value (:title @new-movie)
               :on-change #(rf/dispatch [:update-new-movie :title (-> % .-target .-value)])}]
      [:input {:placeholder (:director @human-form)
               :value (:director @new-movie)
               :on-change #(rf/dispatch [:update-new-movie :director (-> % .-target .-value)])}]
      [:input {:placeholder (:link @human-form)
               :value (:link @new-movie)
               :on-change #(rf/dispatch [:update-new-movie :link (-> % .-target .-value)])}]
      [:input {:placeholder (:notes @human-form)
               :value (:notes @new-movie)
               :on-change #(rf/dispatch [:update-new-movie :notes (-> % .-target .-value)])}]
      [:button.btn {:on-click #(rf/dispatch [:add-movie])} "Add to list"]]]))
