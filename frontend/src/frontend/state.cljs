(ns frontend.state
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [frontend.api :as api]
            [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [cljs.reader :as reader]))


(def movies (r/atom nil))
(api/getAllMovies movies)
