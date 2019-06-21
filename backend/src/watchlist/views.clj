(ns watchlist.views
  (:require [ring.util.response :as resp]
            [monger.core :as mg]
            [monger.collection :as mc])
  (:import org.bson.types.ObjectId))

(def conn (mg/connect))
(def db   (mg/get-db conn "watchlist"))
(def movieColl "movies")

(defn index-page []
  (resp/content-type
   (resp/resource-response "index.html" {:root "public"}) "text/html"))

(defn objectIdToString [element]
  "Turns the mongodb objectid into string representation"
  (let [objectId (element :_id)]
    (assoc element :_id (str objectId))))

(defn all-movies []
  "Returns all movies from the database"
  (let [movies (mc/find-maps db movieColl)]
    (map objectIdToString movies)))

(defn addNewMovie [data]
  "Adds a new movie to the database and returns all movies"
  (mc/insert db movieColl (assoc data :rating nil :watched false))
  (all-movies))

(defn updateMovie [data]
  "Updates a movie by given id"
  (mc/update-by-id db movieColl (ObjectId. (data :_id)) (dissoc data :_id))
  (all-movies))

(defn deleteMovie [_id]
  "Removes a movie by given id"
  (mc/remove-by-id db movieColl (ObjectId. _id))
  (all-movies))
