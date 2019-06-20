(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.components.header :refer [header]]
            [frontend.components.addmovie :refer [addmovie]]
            [frontend.components.movielist :refer [movielist]]
            [frontend.state :as state]))

(defn app
  []
  [:div.container
   [header]
  ;  [addmovie]
   [movielist]])

(defn ^:export main
  []
  (r/render
   [app]
   (.getElementById js/document "app")))
