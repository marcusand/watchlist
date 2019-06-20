(ns frontend.components.addmovie)

(defn addmovie
  []
  [:div
   [:h2 "Add a movie:"]
   [:div#add-movie-form
    [:input {:placeholder "movie titel"}]
    [:input {:placeholder "director"}]
    [:input {:placeholder "watch links"}]
    [:input {:placeholder "notes"}]
    [:button "Add to list"]]
   [:hr]])