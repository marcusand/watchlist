(ns frontend.lib.message
  (:require
   [re-frame.core :as rf]))

(defn display-message [message time]
  (js/setTimeout #(rf/dispatch [:show-message ""]) time)
  (rf/dispatch [:show-message message]))
