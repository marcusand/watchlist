(ns frontend.events
  (:require
   [re-frame.core :as rf]
   [frontend.db :as db]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]))

; ON LOAD EVENT ------------------------------------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:movies []
    :new-movie {:titel "asd" :director "" :link "" :notes ""}}))

; HTTP REQUESTS ------------------------------------------

(rf/reg-event-fx
 :get-movies
 (fn [_ [_ _]]
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/movies"
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-get-movies]
                 :on-failure      [::failure-get-movies]}}))

(rf/reg-event-fx
 :post-movie
 (fn [{db :db} _]
   {:http-xhrio {:method          :post
                 :uri             "http://localhost:3000/movie"
                 :params          (:new-movie db)
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-post-movie]
                 :on-failure      [::failure-post-movie]}}))

(rf/reg-event-db
 ::success-get-movies
 (fn [db [_ result]]
   (assoc db :movies result)))

(rf/reg-event-db
 ::failure-get-movies
 (fn [db [_ result]]
   (prn "failure fetching the movie data")))

(rf/reg-event-db
 ::success-post-movie
 (fn [db [_ result]]
   (assoc db :movies result)))

(rf/reg-event-db
 ::failure-post-movie
 (fn [db [_ result]]
   (prn "failure post movie")))

; INTERFACE EVENTS ------------------------------------------

(rf/reg-event-db
 :add-movie
 (fn [db [_ _]]
   (prn "hallo")
   #(rf/dispatch [:post-movie])
   db))

(rf/reg-event-db
 :open-modal
 (fn [db [_ _]]
   (let [modal (.getElementById js/document "myModal")]
     (set! (-> modal .-style .-display) "block")
     db)))

(rf/reg-event-db
 :close-modal
 (fn [db [_ _]]
   (let [modal (.getElementById js/document "myModal")]
     (set! (-> modal .-style .-display) "none")
     db)))

(rf/reg-event-db
 :update-new-movie
 (fn [db [_ key value]]
   (assoc-in db [:new-movie key] value)))
