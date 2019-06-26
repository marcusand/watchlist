// Compiled by ClojureScript 1.10.520 {}
goog.provide('frontend.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('frontend.subs');
goog.require('frontend.components.Header');
goog.require('frontend.components.AddMovie');
goog.require('frontend.components.MovieList');
goog.require('frontend.components.Modal');
frontend.views.app = (function frontend$views$app(){
var new_movie = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.subs","new-movie","frontend.subs/new-movie",-208282287)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.pr_str.call(null,cljs.core.deref.call(null,new_movie))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.Header.Header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.AddMovie.AddMovie], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.MovieList.MovieList], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.components.Modal.Modal], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1561552529387
