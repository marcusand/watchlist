// Compiled by ClojureScript 1.10.520 {}
goog.provide('frontend.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('frontend.db');
goog.require('day8.re_frame.http_fx');
goog.require('ajax.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"movies","movies",-255929346),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-movie","new-movie",-1029419868),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"titel","titel",1985670278),"asd",new cljs.core.Keyword(null,"director","director",1283249926),"",new cljs.core.Keyword(null,"link","link",-1769163468),"",new cljs.core.Keyword(null,"notes","notes",-1039600523),""], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"get-movies","get-movies",1492262093),(function (_,p__41292){
var vec__41293 = p__41292;
var ___$1 = cljs.core.nth.call(null,vec__41293,(0),null);
var ___$2 = cljs.core.nth.call(null,vec__41293,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/movies",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","success-get-movies","frontend.events/success-get-movies",-1175352751)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","failure-get-movies","frontend.events/failure-get-movies",1498446121)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-movie","post-movie",-1051437445),(function (p__41296,_){
var map__41297 = p__41296;
var map__41297__$1 = (((((!((map__41297 == null))))?(((((map__41297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41297):map__41297);
var db = cljs.core.get.call(null,map__41297__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:3000/movie",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"new-movie","new-movie",-1029419868).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.text_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","success-post-movie","frontend.events/success-post-movie",-2046560601)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("frontend.events","failure-post-movie","frontend.events/failure-post-movie",731163846)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("frontend.events","success-get-movies","frontend.events/success-get-movies",-1175352751),(function (db,p__41299){
var vec__41300 = p__41299;
var _ = cljs.core.nth.call(null,vec__41300,(0),null);
var result = cljs.core.nth.call(null,vec__41300,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"movies","movies",-255929346),result);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("frontend.events","failure-get-movies","frontend.events/failure-get-movies",1498446121),(function (db,p__41303){
var vec__41304 = p__41303;
var _ = cljs.core.nth.call(null,vec__41304,(0),null);
var result = cljs.core.nth.call(null,vec__41304,(1),null);
return cljs.core.prn.call(null,"failure fetching the movie data");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("frontend.events","success-post-movie","frontend.events/success-post-movie",-2046560601),(function (db,p__41307){
var vec__41308 = p__41307;
var _ = cljs.core.nth.call(null,vec__41308,(0),null);
var result = cljs.core.nth.call(null,vec__41308,(1),null);
cljs.core.prn.call(null,"succees post movie");

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("frontend.events","failure-post-movie","frontend.events/failure-post-movie",731163846),(function (db,p__41311){
var vec__41312 = p__41311;
var _ = cljs.core.nth.call(null,vec__41312,(0),null);
var result = cljs.core.nth.call(null,vec__41312,(1),null);
return cljs.core.prn.call(null,"failure post movie");
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-movie","add-movie",-86199333),(function (db,p__41315){
var vec__41316 = p__41315;
var _ = cljs.core.nth.call(null,vec__41316,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41316,(1),null);
cljs.core.prn.call(null,"hallo");


return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"open-modal","open-modal",947793572),(function (db,p__41319){
var vec__41320 = p__41319;
var _ = cljs.core.nth.call(null,vec__41320,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41320,(1),null);
var modal = document.getElementById("myModal");
modal.style.display = "block";

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"close-modal","close-modal",-1882189985),(function (db,p__41323){
var vec__41324 = p__41323;
var _ = cljs.core.nth.call(null,vec__41324,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__41324,(1),null);
var modal = document.getElementById("myModal");
modal.style.display = "none";

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-new-movie","update-new-movie",-259391535),(function (db,p__41327){
var vec__41328 = p__41327;
var _ = cljs.core.nth.call(null,vec__41328,(0),null);
var key = cljs.core.nth.call(null,vec__41328,(1),null);
var value = cljs.core.nth.call(null,vec__41328,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-movie","new-movie",-1029419868),key], null),value);
}));

//# sourceMappingURL=events.js.map?rel=1561552964660
