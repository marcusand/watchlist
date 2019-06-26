(ns frontend.components.ErrorMessage
  (:require [re-frame.core :as rf]
            [frontend.subs :as subs]))

(defn ErrorMessage
  []
  [:div
   [:span @(rf/subscribe [::subs/error-message])]
   [:hr]])