// Compiled by ClojureScript 1.10.520 {}
goog.provide('frontend.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("frontend.subs","movies","frontend.subs/movies",-2113337997),(function (db){
return new cljs.core.Keyword(null,"movies","movies",-255929346).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("frontend.subs","new-movie","frontend.subs/new-movie",-208282287),(function (db,p__40316){
var vec__40317 = p__40316;
var _ = cljs.core.nth.call(null,vec__40317,(0),null);
var key = cljs.core.nth.call(null,vec__40317,(1),null);
if((key == null)){
return new cljs.core.Keyword(null,"new-movie","new-movie",-1029419868).cljs$core$IFn$_invoke$arity$1(db);
} else {
return key.call(null,new cljs.core.Keyword(null,"new-movie","new-movie",-1029419868).cljs$core$IFn$_invoke$arity$1(db));
}
}));

//# sourceMappingURL=subs.js.map?rel=1561550307466
