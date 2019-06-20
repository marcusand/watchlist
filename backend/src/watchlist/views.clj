(ns watchlist.views
  (:require [ring.util.response :as resp]
            [monger.core :as mg]
            [monger.collection :as mc])
  (:import org.bson.types.ObjectId))

(def conn (mg/connect))
(def db   (mg/get-db conn "watchlist"))

(defn index-page []
  (resp/content-type
   (resp/resource-response "index.html" {:root "public"}) "text/html"))

(defn objectIdToString [element]
  (let [objectId (element :_id)]
    (assoc element :_id (str objectId))))

(defn all-movies []
  (let [movies (mc/find-maps db "movies")]
    (map objectIdToString movies)))
