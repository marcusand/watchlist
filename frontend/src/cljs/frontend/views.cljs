(ns frontend.views
  (:require
   [re-frame.core :as rf]
   [frontend.subs :as subs]
   [frontend.components.Header :refer [Header]]
   [frontend.components.AddMovie :refer [AddMovie]]
   [frontend.components.Messagebox :refer [Messagebox]]
   [frontend.components.MovieList :refer [MovieList]]
   [frontend.components.Modal :refer [Modal]]))

(defn app []
  (let [data (rf/subscribe [::subs/current-sorting])]
    [:div.container
    ;  [:pre (pr-str @data)]
     [Header]
     [Messagebox]
     [AddMovie]
     [:hr]
     [MovieList]
     [Modal]]))