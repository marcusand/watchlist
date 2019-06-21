(ns frontend.components.AddMovie
  (:require [reagent.core :as r]
            [frontend.api :as api]
            [clojure.string :as s]))

(def newMovieTitel (r/atom nil))
(def newMovieDirector (r/atom nil))
(def newMovieLink (r/atom nil))
(def newMovieNotes (r/atom nil))

(defn handleAddMovie []
  (if (s/blank? @newMovieTitel)
    (prn "no titel")
    (let [newMovie
          {:titel @newMovieTitel, :director @newMovieDirector, :link @newMovieLink, :notes @newMovieNotes}]
      (api/postMovie newMovie))))

(defn AddMovie
  []
  [:div
   [:h2 "Add a movie:"]
   [:div#add-movie-form
    [:input {:placeholder "movie titel" :on-change #(reset! newMovieTitel (-> % .-target .-value))}]
    [:input {:placeholder "director" :on-change #(reset! newMovieDirector (-> % .-target .-value))}]
    [:input {:placeholder "watch links" :on-change #(reset! newMovieLink (-> % .-target .-value))}]
    [:input {:placeholder "notes" :on-change #(reset! newMovieNotes (-> % .-target .-value))}]
    [:button {:on-click handleAddMovie} "Add to list"]]
   [:hr]])
