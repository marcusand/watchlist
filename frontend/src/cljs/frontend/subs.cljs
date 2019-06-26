(ns frontend.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::movies
 (fn [db]
   (:movies db)))

(re-frame/reg-sub
 ::new-movie
 (fn [db [_ key]]
   (if (nil? key)
     (:new-movie db)
     (key (:new-movie db)))))
