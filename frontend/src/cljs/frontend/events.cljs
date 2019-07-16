(ns frontend.events
  (:require
   [re-frame.core :as rf]
   [frontend.subs :as subs]
   [frontend.db :as db]
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]
   [clojure.string :as s]
   [frontend.lib.message :as message]))

; ON LOAD EVENT ------------------------------------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:movies []
    :new-movie {:title "" :director "" :link "" :notes ""}
    :modal-movie {}
    :human-form {:title "Movie Title" :director "Director" :link "Watch Link" :notes "Notes" :watched "Watched" :rating "My Rating"}
    :user-message ""
    :current-sorting {:key :title :order "asc"}}))

; HTTP REQUESTS ------------------------------------------

(rf/reg-event-fx
 :get-movies
 (fn [_ _]
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/movies"
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-get-movies]
                 :on-failure      [::http-failure "getting the movies"]}}))

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
                 :on-failure      [::http-failure "creating a movie"]}}))

(rf/reg-event-fx
 :delete-movie
 (fn [_ _]
   {:http-xhrio {:method          :delete
                 :uri             "http://localhost:3000/movie"
                 :params          {:id @(rf/subscribe [::subs/modal-movie-id])}
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-delete-movie]
                 :on-failure      [::http-failure "deleting a movie"]}}))

(rf/reg-event-fx
 :update-movie
 (fn [_ _]
   {:http-xhrio {:method          :put
                 :uri             "http://localhost:3000/movie"
                 :params          @(rf/subscribe [::subs/modal-movie])
                 :timeout         5000
                 :format          (ajax/url-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-update-movie]
                 :on-failure      [::http-failure "updating a movie"]}}))

(rf/reg-event-db
 ::success-get-movies
 (fn [db [_ result]]
   (rf/dispatch [:sort-movies-by (:key (:current-sorting db)) (:order (:current-sorting db))])
   (assoc db :movies result)))

(rf/reg-event-db
 ::success-post-movie
 (fn [db [_ result]]
   (message/display-message "A new movie was added to the list" 3000)
   (rf/dispatch [::success-get-movies result])
   (assoc db :new-movie {:title "" :director "" :link "" :notes ""})))

(rf/reg-event-db
 ::success-update-movie
 (fn [db [_ result]]
   (rf/dispatch [:close-modal])
   (message/display-message "Movie was updateded" 3000)
   (rf/dispatch [::success-get-movies result])
   (assoc db :modal-movie {})))

(rf/reg-event-db
 ::success-delete-movie
 (fn [db [_ result]]
   (rf/dispatch [:close-modal])
   (message/display-message "Movie was deleted" 3000)
   (rf/dispatch [::success-get-movies result])
   (assoc db :modal-movie {})))

(rf/reg-event-db
 ::http-failure
 (fn [db [_ message result]]
   (prn (str "There was an error while " message))
   db))

; INTERFACE EVENTS ------------------------------------------

(rf/reg-event-fx
 :add-movie
 (fn [db _]
   (if (s/blank? (:title @(rf/subscribe [::subs/new-movie])))
     (message/display-message "Please provide at least a title" 3000)
     (rf/dispatch [:post-movie]))))

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

(rf/reg-event-db
 :show-message
 (fn [db [_ message]]
   (assoc db :user-message message)))

; SORTING ------------------------------------------

(rf/reg-event-db
 :sort-movies-by
 (fn [db [_ key order]]
   (if (= order "asc")
     (-> db
         (assoc :movies (sort-by key < (db :movies)))
         (assoc :current-sorting {:key key :order order}))
     (-> db
         (assoc :movies (sort-by key > (db :movies)))
         (assoc :current-sorting {:key key :order order})))))
