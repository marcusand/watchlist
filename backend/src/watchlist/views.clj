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
  "Turns the mongodb objectid into string representation"
  (let [objectId (element :_id)]
    (assoc element :_id (str objectId))))

(defn all-movies []
  "Returns all movies from the database"
  (let [movies (mc/find-maps db "movies")]
    (map objectIdToString movies)))

(defn addNewMovie [data]
  "Adds a new movie to the database and returns all movies"
  (mc/insert db "movies" (assoc data :rating nil :watched false))
  (all-movies))
