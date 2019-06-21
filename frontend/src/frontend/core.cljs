(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.components.Header :refer [Header]]
            [frontend.components.AddMovie :refer [AddMovie]]
            [frontend.components.MovieList :refer [MovieList]]))


(defn app
  []
  [:div.container
   [Header]
   [AddMovie]
   [MovieList]])

(defn ^:export main
  []
  (r/render
   [app]
   (.getElementById js/document "app")))
