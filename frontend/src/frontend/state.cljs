(ns frontend.state
  (:require [reagent.core :as r]
            [cljs.reader :as reader]))

(def movies (r/atom nil))

(defn swapMovies
  [data]
  (let [dataConverted (reader/read-string (str "[" data "]"))]
    (reset! movies nil)
    (doseq [x dataConverted]
      (swap! movies conj {:movie x}))))
