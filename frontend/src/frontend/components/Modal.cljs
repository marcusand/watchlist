(ns frontend.components.Modal
  (:require [reagent.core :as r]
            [frontend.api :as api]
            [clojure.string :as s]))


(defn handleDeleteMovie [])

(defn handleUpdateMovie [])

(defn handleModalClose []
  (let [modal (.getElementById js/document "myModal")]
    (set! (-> modal .-style .-display) "none")))

(defn Modal
  []
  [:div#myModal.modal
   [:div.modal-content
    [:span.close {:on-click handleModalClose} "X"]
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
