// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__23103){
var vec__23104 = p__23103;
var success_QMARK_ = cljs.core.nth.call(null,vec__23104,(0),null);
var response = cljs.core.nth.call(null,vec__23104,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__23109){
var map__23110 = p__23109;
var map__23110__$1 = (((((!((map__23110 == null))))?(((((map__23110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23110):map__23110);
var request = map__23110__$1;
var on_success = cljs.core.get.call(null,map__23110__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__23110__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__23110,map__23110__$1,request,on_success,on_failure){
return (function (p1__23107_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__23107_SHARP_));
});})(api,map__23110,map__23110__$1,request,on_success,on_failure))
,((function (api,map__23110,map__23110__$1,request,on_success,on_failure){
return (function (p1__23108_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__23108_SHARP_));
});})(api,map__23110,map__23110__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__23112 = cljs.core.seq.call(null,seq_request_maps);
var chunk__23113 = null;
var count__23114 = (0);
var i__23115 = (0);
while(true){
if((i__23115 < count__23114)){
var request__$1 = cljs.core._nth.call(null,chunk__23113,i__23115);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__23116 = seq__23112;
var G__23117 = chunk__23113;
var G__23118 = count__23114;
var G__23119 = (i__23115 + (1));
seq__23112 = G__23116;
chunk__23113 = G__23117;
count__23114 = G__23118;
i__23115 = G__23119;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__23112);
if(temp__5735__auto__){
var seq__23112__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23112__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23112__$1);
var G__23120 = cljs.core.chunk_rest.call(null,seq__23112__$1);
var G__23121 = c__4550__auto__;
var G__23122 = cljs.core.count.call(null,c__4550__auto__);
var G__23123 = (0);
seq__23112 = G__23120;
chunk__23113 = G__23121;
count__23114 = G__23122;
i__23115 = G__23123;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__23112__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__23124 = cljs.core.next.call(null,seq__23112__$1);
var G__23125 = null;
var G__23126 = (0);
var G__23127 = (0);
seq__23112 = G__23124;
chunk__23113 = G__23125;
count__23114 = G__23126;
i__23115 = G__23127;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1561537538411
