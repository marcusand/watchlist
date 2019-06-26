// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__22752 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22753 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22753;

try{try{var seq__22754 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22755 = null;
var count__22756 = (0);
var i__22757 = (0);
while(true){
if((i__22757 < count__22756)){
var vec__22764 = cljs.core._nth.call(null,chunk__22755,i__22757);
var effect_key = cljs.core.nth.call(null,vec__22764,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22764,(1),null);
var temp__5733__auto___22786 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22786)){
var effect_fn_22787 = temp__5733__auto___22786;
effect_fn_22787.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22788 = seq__22754;
var G__22789 = chunk__22755;
var G__22790 = count__22756;
var G__22791 = (i__22757 + (1));
seq__22754 = G__22788;
chunk__22755 = G__22789;
count__22756 = G__22790;
i__22757 = G__22791;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22754);
if(temp__5735__auto__){
var seq__22754__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22754__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22754__$1);
var G__22792 = cljs.core.chunk_rest.call(null,seq__22754__$1);
var G__22793 = c__4550__auto__;
var G__22794 = cljs.core.count.call(null,c__4550__auto__);
var G__22795 = (0);
seq__22754 = G__22792;
chunk__22755 = G__22793;
count__22756 = G__22794;
i__22757 = G__22795;
continue;
} else {
var vec__22767 = cljs.core.first.call(null,seq__22754__$1);
var effect_key = cljs.core.nth.call(null,vec__22767,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22767,(1),null);
var temp__5733__auto___22796 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22796)){
var effect_fn_22797 = temp__5733__auto___22796;
effect_fn_22797.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22798 = cljs.core.next.call(null,seq__22754__$1);
var G__22799 = null;
var G__22800 = (0);
var G__22801 = (0);
seq__22754 = G__22798;
chunk__22755 = G__22799;
count__22756 = G__22800;
i__22757 = G__22801;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22579__auto___22802 = re_frame.interop.now.call(null);
var duration__22580__auto___22803 = (end__22579__auto___22802 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22580__auto___22803,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22579__auto___22802);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22752;
}} else {
var seq__22770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__22771 = null;
var count__22772 = (0);
var i__22773 = (0);
while(true){
if((i__22773 < count__22772)){
var vec__22780 = cljs.core._nth.call(null,chunk__22771,i__22773);
var effect_key = cljs.core.nth.call(null,vec__22780,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22780,(1),null);
var temp__5733__auto___22804 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22804)){
var effect_fn_22805 = temp__5733__auto___22804;
effect_fn_22805.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22806 = seq__22770;
var G__22807 = chunk__22771;
var G__22808 = count__22772;
var G__22809 = (i__22773 + (1));
seq__22770 = G__22806;
chunk__22771 = G__22807;
count__22772 = G__22808;
i__22773 = G__22809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22770);
if(temp__5735__auto__){
var seq__22770__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22770__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22770__$1);
var G__22810 = cljs.core.chunk_rest.call(null,seq__22770__$1);
var G__22811 = c__4550__auto__;
var G__22812 = cljs.core.count.call(null,c__4550__auto__);
var G__22813 = (0);
seq__22770 = G__22810;
chunk__22771 = G__22811;
count__22772 = G__22812;
i__22773 = G__22813;
continue;
} else {
var vec__22783 = cljs.core.first.call(null,seq__22770__$1);
var effect_key = cljs.core.nth.call(null,vec__22783,(0),null);
var effect_value = cljs.core.nth.call(null,vec__22783,(1),null);
var temp__5733__auto___22814 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___22814)){
var effect_fn_22815 = temp__5733__auto___22814;
effect_fn_22815.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__22816 = cljs.core.next.call(null,seq__22770__$1);
var G__22817 = null;
var G__22818 = (0);
var G__22819 = (0);
seq__22770 = G__22816;
chunk__22771 = G__22817;
count__22772 = G__22818;
i__22773 = G__22819;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__22820 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22821 = null;
var count__22822 = (0);
var i__22823 = (0);
while(true){
if((i__22823 < count__22822)){
var map__22828 = cljs.core._nth.call(null,chunk__22821,i__22823);
var map__22828__$1 = (((((!((map__22828 == null))))?(((((map__22828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var effect = map__22828__$1;
var ms = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22820,chunk__22821,count__22822,i__22823,map__22828,map__22828__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22820,chunk__22821,count__22822,i__22823,map__22828,map__22828__$1,effect,ms,dispatch))
,ms);
}


var G__22832 = seq__22820;
var G__22833 = chunk__22821;
var G__22834 = count__22822;
var G__22835 = (i__22823 + (1));
seq__22820 = G__22832;
chunk__22821 = G__22833;
count__22822 = G__22834;
i__22823 = G__22835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22820);
if(temp__5735__auto__){
var seq__22820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22820__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22820__$1);
var G__22836 = cljs.core.chunk_rest.call(null,seq__22820__$1);
var G__22837 = c__4550__auto__;
var G__22838 = cljs.core.count.call(null,c__4550__auto__);
var G__22839 = (0);
seq__22820 = G__22836;
chunk__22821 = G__22837;
count__22822 = G__22838;
i__22823 = G__22839;
continue;
} else {
var map__22830 = cljs.core.first.call(null,seq__22820__$1);
var map__22830__$1 = (((((!((map__22830 == null))))?(((((map__22830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22830.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22830):map__22830);
var effect = map__22830__$1;
var ms = cljs.core.get.call(null,map__22830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__22830__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__22820,chunk__22821,count__22822,i__22823,map__22830,map__22830__$1,effect,ms,dispatch,seq__22820__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__22820,chunk__22821,count__22822,i__22823,map__22830,map__22830__$1,effect,ms,dispatch,seq__22820__$1,temp__5735__auto__))
,ms);
}


var G__22840 = cljs.core.next.call(null,seq__22820__$1);
var G__22841 = null;
var G__22842 = (0);
var G__22843 = (0);
seq__22820 = G__22840;
chunk__22821 = G__22841;
count__22822 = G__22842;
i__22823 = G__22843;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__22844 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__22845 = null;
var count__22846 = (0);
var i__22847 = (0);
while(true){
if((i__22847 < count__22846)){
var event = cljs.core._nth.call(null,chunk__22845,i__22847);
re_frame.router.dispatch.call(null,event);


var G__22848 = seq__22844;
var G__22849 = chunk__22845;
var G__22850 = count__22846;
var G__22851 = (i__22847 + (1));
seq__22844 = G__22848;
chunk__22845 = G__22849;
count__22846 = G__22850;
i__22847 = G__22851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22844);
if(temp__5735__auto__){
var seq__22844__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22844__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22844__$1);
var G__22852 = cljs.core.chunk_rest.call(null,seq__22844__$1);
var G__22853 = c__4550__auto__;
var G__22854 = cljs.core.count.call(null,c__4550__auto__);
var G__22855 = (0);
seq__22844 = G__22852;
chunk__22845 = G__22853;
count__22846 = G__22854;
i__22847 = G__22855;
continue;
} else {
var event = cljs.core.first.call(null,seq__22844__$1);
re_frame.router.dispatch.call(null,event);


var G__22856 = cljs.core.next.call(null,seq__22844__$1);
var G__22857 = null;
var G__22858 = (0);
var G__22859 = (0);
seq__22844 = G__22856;
chunk__22845 = G__22857;
count__22846 = G__22858;
i__22847 = G__22859;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__22860 = cljs.core.seq.call(null,value);
var chunk__22861 = null;
var count__22862 = (0);
var i__22863 = (0);
while(true){
if((i__22863 < count__22862)){
var event = cljs.core._nth.call(null,chunk__22861,i__22863);
clear_event.call(null,event);


var G__22864 = seq__22860;
var G__22865 = chunk__22861;
var G__22866 = count__22862;
var G__22867 = (i__22863 + (1));
seq__22860 = G__22864;
chunk__22861 = G__22865;
count__22862 = G__22866;
i__22863 = G__22867;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__22860);
if(temp__5735__auto__){
var seq__22860__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22860__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__22860__$1);
var G__22868 = cljs.core.chunk_rest.call(null,seq__22860__$1);
var G__22869 = c__4550__auto__;
var G__22870 = cljs.core.count.call(null,c__4550__auto__);
var G__22871 = (0);
seq__22860 = G__22868;
chunk__22861 = G__22869;
count__22862 = G__22870;
i__22863 = G__22871;
continue;
} else {
var event = cljs.core.first.call(null,seq__22860__$1);
clear_event.call(null,event);


var G__22872 = cljs.core.next.call(null,seq__22860__$1);
var G__22873 = null;
var G__22874 = (0);
var G__22875 = (0);
seq__22860 = G__22872;
chunk__22861 = G__22873;
count__22862 = G__22874;
i__22863 = G__22875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1561537537966
