(ns frontend.components.Modal
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [clojure.string :as s]))


(defn handleDeleteMovie [])

(defn handleUpdateMovie [])


(defn Modal
  []
  [:div#myModal.modal
   [:div.modal-content
    [:span.close {:on-click #(rf/dispatch [:close-modal])} "X"]
    [:h2 "Edit"]
    [:div.input-form
     [:input {:placeholder "movie titel"}]
     [:input {:placeholder "director"}]
     [:input {:placeholder "watch links"}]
     [:input {:placeholder "notes"}]
     [:input {:placeholder "rating"}]
     [:input {:placeholder "watched"}]]
    [:button {:on-click handleDeleteMovie} "Delete"]
    [:button {:on-click handleUpdateMovie} "Save"]]])
