(ns frontend.components.Messagebox
  (:require [re-frame.core :as rf]
            [clojure.string :as s]
            [frontend.subs :as subs]))

(defn Messagebox []
  (let [user-message (rf/subscribe [::subs/user-message])]
    (if (not (s/blank? @user-message))
      [:div#messagebox @user-message])))
