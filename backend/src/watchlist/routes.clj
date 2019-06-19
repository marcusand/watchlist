(ns watchlist.routes
  (:use watchlist.views)
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [jumblerg.middleware.cors :refer [wrap-cors]]))

(defroutes server-routes
  (GET "/" [] (index-page))
  (GET "/movies" [] (all-movies))
  (POST "/movie" [] "nil")
  (PUT  "/movie" [id] "nil")
  (POST "/search" [id] "nil")
  (route/resources "/")
  (route/not-found "Not Found"))

(def handler
  (wrap-cors server-routes #".*"))

(def app
  (wrap-defaults handler site-defaults))
