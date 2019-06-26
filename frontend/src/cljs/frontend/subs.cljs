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

(re-frame/reg-sub
 ::modal-movie
 (fn [db]
   (:modal-movie db)))

(re-frame/reg-sub
 ::modal-movie-id
 (fn [db]
   (:_id (:modal-movie db))))

(re-frame/reg-sub
 ::human-form
 (fn [db [_ key]]
   (if (nil? key)
     (:human-form db)
     (key (:human-form db)))))

(re-frame/reg-sub
 ::error-message
 (fn [db]
   (:error-message db)))