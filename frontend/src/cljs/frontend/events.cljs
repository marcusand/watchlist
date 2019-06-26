(ns frontend.events
  (:require
   [re-frame.core :as rf]
   [frontend.subs :as subs]
   [frontend.db :as db]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]))

; ON LOAD EVENT ------------------------------------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:movies []
    :new-movie {:title "" :director "" :link "" :notes ""}
    :modal-movie {}
    :human-form {:title "Title" :director "Director" :link "Watch Link" :notes "Notes" :watched "Watched" :rating "My Rating"}}))

; HTTP REQUESTS ------------------------------------------

(rf/reg-event-fx
 :get-movies
 (fn [_ _]
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/movies"
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-get-movies]
                 :on-failure      [::failure-get-movies]}}))

(rf/reg-event-fx
 :post-movie
 (fn [_ _]
   {:http-xhrio {:method          :post
                 :uri             "http://localhost:3000/movie"
                 :params          @(rf/subscribe [::subs/new-movie])
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-post-movie]
                 :on-failure      [::failure-post-movie]}}))

(rf/reg-event-fx
 :delete-movie
 (fn [_ _]
   {:http-xhrio {:method          :delete
                 :uri             "http://localhost:3000/movie"
                 :params          {:id @(rf/subscribe [::subs/modal-movie-id])}
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-delete-update-movie]
                 :on-failure      [::failure-post-movie]}}))

(rf/reg-event-fx
 :update-movie
 (fn [_ _]
   {:http-xhrio {:method          :put
                 :uri             "http://localhost:3000/movie"
                 :params          @(rf/subscribe [::subs/modal-movie])
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-delete-update-movie]
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
   (-> db
       (assoc :movies result)
       (assoc :new-movie {:title "" :director "" :link "" :notes ""}))))

(rf/reg-event-db
 ::failure-post-movie
 (fn [db [_ result]]
   (prn "failure post movie")))

(rf/reg-event-db
 ::success-delete-update-movie
 (fn [db [_ result]]
   (rf/dispatch [:close-modal])
   (-> db
       (assoc :movies result)
       (assoc :modal-movie {}))))

; INTERFACE EVENTS ------------------------------------------

(rf/reg-event-db
 :add-movie
 (fn [db [_ _]]
   (prn "hallo")
   #(rf/dispatch [:post-movie])
   db))

(rf/reg-event-db
 :open-modal
 (fn [db [_ movie]]
   (let [modal (.getElementById js/document "myModal")]
     (set! (-> modal .-style .-display) "block")
     (assoc db :modal-movie movie))))

(rf/reg-event-db
 :close-modal
 (fn [db [_ _]]
   (let [modal (.getElementById js/document "myModal")]
     (set! (-> modal .-style .-display) "none")
     (assoc db :modal-movie {}))))

(rf/reg-event-db
 :update-new-movie
 (fn [db [_ key value]]
   (assoc-in db [:new-movie key] value)))

(rf/reg-event-db
 :update-modal-movie
 (fn [db [_ key value]]
   (assoc-in db [:modal-movie key] value)))