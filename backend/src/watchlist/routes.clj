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
  (PUT "/movie" {params :params} (updateMovie params))
  (DELETE "/movie" [id] (deleteMovie id))
  (route/resources "/")
  (route/not-found "Not Found"))

(def handler
  (wrap-cors server-routes
             :access-control-allow-origin [#"http://0.0.0.0:3449"]
             :access-control-allow-methods [:get :put :post :delete]))

(def app
  (wrap-defaults handler (assoc-in site-defaults [:security :anti-forgery] false)))
