(ns watchlist.views
  (:require [ring.util.response :as resp]
            [monger.core :as mg]
            [monger.collection :as mc]))

(def conn (mg/connect))
(def db   (mg/get-db conn "watchlist"))

(defn index-page []
  (resp/content-type
   (resp/resource-response "index.html" {:root "public"}) "text/html"))

(defn all-movies []
  (mc/find-maps db "movies"))

; (defn all-movies []
;   (let [movies (apply merge (apply hash-map (mc/find-maps db "movies")))]
;     (movies 0)))
