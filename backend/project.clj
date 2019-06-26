(defproject watchlist "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/data.json "0.2.6"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [com.novemberain/monger "3.1.0"]
                 [ring-cors "0.1.13"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-cljfmt "0.6.4"]]
  :ring {:handler watchlist.routes/app}
  :main watchlist.routes
  :profiles
  {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                        [ring/ring-mock "0.3.2"]]}})
