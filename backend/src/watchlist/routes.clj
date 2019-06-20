(ns watchlist.routes
  (:use watchlist.views)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.cors :refer [wrap-cors]]))

(defroutes server-routes
  (GET "/" [] (index-page))
  (GET "/movies" [] (all-movies))
  (POST "/movie" {params :params} (addNewMovie params))
  (PUT  "/movie" [id] "nil")
  (POST "/search" [id] "nil")
  (route/resources "/")
  (route/not-found "Not Found"))

(def handler
  (wrap-cors server-routes
             :access-control-allow-origin [#"http://localhost:3001"]
             :access-control-allow-methods [:get :put :post :delete]))

(def app
  (wrap-defaults handler (assoc-in site-defaults [:security :anti-forgery] false)))
