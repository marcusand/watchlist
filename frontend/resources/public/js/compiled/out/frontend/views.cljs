(ns frontend.views
  (:require
   [re-frame.core :as rf]
   [frontend.subs :as subs]
   [frontend.components.Header :refer [Header]]
   [frontend.components.AddMovie :refer [AddMovie]]
   [frontend.components.MovieList :refer [MovieList]]
   [frontend.components.Modal :refer [Modal]]))

(defn app []
  (let [new-movie (rf/subscribe [::subs/new-movie])]
    [:div.container
     [:pre (pr-str @new-movie)]
     [Header]
     [AddMovie]
     [MovieList]
     [Modal]]))