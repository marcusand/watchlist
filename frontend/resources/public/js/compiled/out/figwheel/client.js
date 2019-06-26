// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31974){if((e31974 instanceof Error)){
var e = e31974;
return "Error: Unable to stringify";
} else {
throw e31974;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31977 = arguments.length;
switch (G__31977) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31975_SHARP_){
if(typeof p1__31975_SHARP_ === 'string'){
return p1__31975_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31975_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31980 = arguments.length;
var i__4731__auto___31981 = (0);
while(true){
if((i__4731__auto___31981 < len__4730__auto___31980)){
args__4736__auto__.push((arguments[i__4731__auto___31981]));

var G__31982 = (i__4731__auto___31981 + (1));
i__4731__auto___31981 = G__31982;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31979){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31979));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31984 = arguments.length;
var i__4731__auto___31985 = (0);
while(true){
if((i__4731__auto___31985 < len__4730__auto___31984)){
args__4736__auto__.push((arguments[i__4731__auto___31985]));

var G__31986 = (i__4731__auto___31985 + (1));
i__4731__auto___31985 = G__31986;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31983){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31983));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31987){
var map__31988 = p__31987;
var map__31988__$1 = (((((!((map__31988 == null))))?(((((map__31988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31988.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31988):map__31988);
var message = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31988__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27982__auto___32067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___32067,ch){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___32067,ch){
return (function (state_32039){
var state_val_32040 = (state_32039[(1)]);
if((state_val_32040 === (7))){
var inst_32035 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32041_32068 = state_32039__$1;
(statearr_32041_32068[(2)] = inst_32035);

(statearr_32041_32068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (1))){
var state_32039__$1 = state_32039;
var statearr_32042_32069 = state_32039__$1;
(statearr_32042_32069[(2)] = null);

(statearr_32042_32069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (4))){
var inst_31992 = (state_32039[(7)]);
var inst_31992__$1 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32043 = state_32039;
(statearr_32043[(7)] = inst_31992__$1);

return statearr_32043;
})();
if(cljs.core.truth_(inst_31992__$1)){
var statearr_32044_32070 = state_32039__$1;
(statearr_32044_32070[(1)] = (5));

} else {
var statearr_32045_32071 = state_32039__$1;
(statearr_32045_32071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (15))){
var inst_31999 = (state_32039[(8)]);
var inst_32014 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31999);
var inst_32015 = cljs.core.first.call(null,inst_32014);
var inst_32016 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32015);
var inst_32017 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32016)].join('');
var inst_32018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32017);
var state_32039__$1 = state_32039;
var statearr_32046_32072 = state_32039__$1;
(statearr_32046_32072[(2)] = inst_32018);

(statearr_32046_32072[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (13))){
var inst_32023 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32047_32073 = state_32039__$1;
(statearr_32047_32073[(2)] = inst_32023);

(statearr_32047_32073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (6))){
var state_32039__$1 = state_32039;
var statearr_32048_32074 = state_32039__$1;
(statearr_32048_32074[(2)] = null);

(statearr_32048_32074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (17))){
var inst_32021 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32049_32075 = state_32039__$1;
(statearr_32049_32075[(2)] = inst_32021);

(statearr_32049_32075[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (3))){
var inst_32037 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32039__$1,inst_32037);
} else {
if((state_val_32040 === (12))){
var inst_31998 = (state_32039[(9)]);
var inst_32012 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31998,opts);
var state_32039__$1 = state_32039;
if(inst_32012){
var statearr_32050_32076 = state_32039__$1;
(statearr_32050_32076[(1)] = (15));

} else {
var statearr_32051_32077 = state_32039__$1;
(statearr_32051_32077[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (2))){
var state_32039__$1 = state_32039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32039__$1,(4),ch);
} else {
if((state_val_32040 === (11))){
var inst_31999 = (state_32039[(8)]);
var inst_32004 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32005 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31999);
var inst_32006 = cljs.core.async.timeout.call(null,(1000));
var inst_32007 = [inst_32005,inst_32006];
var inst_32008 = (new cljs.core.PersistentVector(null,2,(5),inst_32004,inst_32007,null));
var state_32039__$1 = state_32039;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32039__$1,(14),inst_32008);
} else {
if((state_val_32040 === (9))){
var inst_31999 = (state_32039[(8)]);
var inst_32025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32026 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31999);
var inst_32027 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32026);
var inst_32028 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_32027)].join('');
var inst_32029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32028);
var state_32039__$1 = (function (){var statearr_32052 = state_32039;
(statearr_32052[(10)] = inst_32025);

return statearr_32052;
})();
var statearr_32053_32078 = state_32039__$1;
(statearr_32053_32078[(2)] = inst_32029);

(statearr_32053_32078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (5))){
var inst_31992 = (state_32039[(7)]);
var inst_31994 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31995 = (new cljs.core.PersistentArrayMap(null,2,inst_31994,null));
var inst_31996 = (new cljs.core.PersistentHashSet(null,inst_31995,null));
var inst_31997 = figwheel.client.focus_msgs.call(null,inst_31996,inst_31992);
var inst_31998 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31997);
var inst_31999 = cljs.core.first.call(null,inst_31997);
var inst_32000 = figwheel.client.autoload_QMARK_.call(null);
var state_32039__$1 = (function (){var statearr_32054 = state_32039;
(statearr_32054[(8)] = inst_31999);

(statearr_32054[(9)] = inst_31998);

return statearr_32054;
})();
if(cljs.core.truth_(inst_32000)){
var statearr_32055_32079 = state_32039__$1;
(statearr_32055_32079[(1)] = (8));

} else {
var statearr_32056_32080 = state_32039__$1;
(statearr_32056_32080[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (14))){
var inst_32010 = (state_32039[(2)]);
var state_32039__$1 = state_32039;
var statearr_32057_32081 = state_32039__$1;
(statearr_32057_32081[(2)] = inst_32010);

(statearr_32057_32081[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (16))){
var state_32039__$1 = state_32039;
var statearr_32058_32082 = state_32039__$1;
(statearr_32058_32082[(2)] = null);

(statearr_32058_32082[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (10))){
var inst_32031 = (state_32039[(2)]);
var state_32039__$1 = (function (){var statearr_32059 = state_32039;
(statearr_32059[(11)] = inst_32031);

return statearr_32059;
})();
var statearr_32060_32083 = state_32039__$1;
(statearr_32060_32083[(2)] = null);

(statearr_32060_32083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32040 === (8))){
var inst_31998 = (state_32039[(9)]);
var inst_32002 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31998,opts);
var state_32039__$1 = state_32039;
if(cljs.core.truth_(inst_32002)){
var statearr_32061_32084 = state_32039__$1;
(statearr_32061_32084[(1)] = (11));

} else {
var statearr_32062_32085 = state_32039__$1;
(statearr_32062_32085[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27982__auto___32067,ch))
;
return ((function (switch__27887__auto__,c__27982__auto___32067,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_32063 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32063[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__);

(statearr_32063[(1)] = (1));

return statearr_32063;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1 = (function (state_32039){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_32039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e32064){if((e32064 instanceof Object)){
var ex__27891__auto__ = e32064;
var statearr_32065_32086 = state_32039;
(statearr_32065_32086[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32087 = state_32039;
state_32039 = G__32087;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__ = function(state_32039){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1.call(this,state_32039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27888__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___32067,ch))
})();
var state__27984__auto__ = (function (){var statearr_32066 = f__27983__auto__.call(null);
(statearr_32066[(6)] = c__27982__auto___32067);

return statearr_32066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___32067,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32088_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32088_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32094 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32094){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32090 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32091 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32092 = true;
var _STAR_print_fn_STAR__temp_val__32093 = ((function (_STAR_print_newline_STAR__orig_val__32090,_STAR_print_fn_STAR__orig_val__32091,_STAR_print_newline_STAR__temp_val__32092,sb,base_path_32094){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__32090,_STAR_print_fn_STAR__orig_val__32091,_STAR_print_newline_STAR__temp_val__32092,sb,base_path_32094))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32092;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32093;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32091;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32090;
}}catch (e32089){if((e32089 instanceof Error)){
var e = e32089;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32094], null));
} else {
var e = e32089;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32094))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32095){
var map__32096 = p__32095;
var map__32096__$1 = (((((!((map__32096 == null))))?(((((map__32096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32096):map__32096);
var opts = map__32096__$1;
var build_id = cljs.core.get.call(null,map__32096__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32096,map__32096__$1,opts,build_id){
return (function (p__32098){
var vec__32099 = p__32098;
var seq__32100 = cljs.core.seq.call(null,vec__32099);
var first__32101 = cljs.core.first.call(null,seq__32100);
var seq__32100__$1 = cljs.core.next.call(null,seq__32100);
var map__32102 = first__32101;
var map__32102__$1 = (((((!((map__32102 == null))))?(((((map__32102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32102):map__32102);
var msg = map__32102__$1;
var msg_name = cljs.core.get.call(null,map__32102__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32100__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32099,seq__32100,first__32101,seq__32100__$1,map__32102,map__32102__$1,msg,msg_name,_,map__32096,map__32096__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32099,seq__32100,first__32101,seq__32100__$1,map__32102,map__32102__$1,msg,msg_name,_,map__32096,map__32096__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32096,map__32096__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32104){
var vec__32105 = p__32104;
var seq__32106 = cljs.core.seq.call(null,vec__32105);
var first__32107 = cljs.core.first.call(null,seq__32106);
var seq__32106__$1 = cljs.core.next.call(null,seq__32106);
var map__32108 = first__32107;
var map__32108__$1 = (((((!((map__32108 == null))))?(((((map__32108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32108):map__32108);
var msg = map__32108__$1;
var msg_name = cljs.core.get.call(null,map__32108__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32106__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32110){
var map__32111 = p__32110;
var map__32111__$1 = (((((!((map__32111 == null))))?(((((map__32111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);
var on_compile_warning = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32111,map__32111__$1,on_compile_warning,on_compile_fail){
return (function (p__32113){
var vec__32114 = p__32113;
var seq__32115 = cljs.core.seq.call(null,vec__32114);
var first__32116 = cljs.core.first.call(null,seq__32115);
var seq__32115__$1 = cljs.core.next.call(null,seq__32115);
var map__32117 = first__32116;
var map__32117__$1 = (((((!((map__32117 == null))))?(((((map__32117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32117):map__32117);
var msg = map__32117__$1;
var msg_name = cljs.core.get.call(null,map__32117__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__32115__$1;
var pred__32119 = cljs.core._EQ_;
var expr__32120 = msg_name;
if(cljs.core.truth_(pred__32119.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32120))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32119.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32120))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32111,map__32111__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__,msg_hist,msg_names,msg){
return (function (state_32209){
var state_val_32210 = (state_32209[(1)]);
if((state_val_32210 === (7))){
var inst_32129 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32129)){
var statearr_32211_32258 = state_32209__$1;
(statearr_32211_32258[(1)] = (8));

} else {
var statearr_32212_32259 = state_32209__$1;
(statearr_32212_32259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (20))){
var inst_32203 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32213_32260 = state_32209__$1;
(statearr_32213_32260[(2)] = inst_32203);

(statearr_32213_32260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (27))){
var inst_32199 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32214_32261 = state_32209__$1;
(statearr_32214_32261[(2)] = inst_32199);

(statearr_32214_32261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (1))){
var inst_32122 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32209__$1 = state_32209;
if(cljs.core.truth_(inst_32122)){
var statearr_32215_32262 = state_32209__$1;
(statearr_32215_32262[(1)] = (2));

} else {
var statearr_32216_32263 = state_32209__$1;
(statearr_32216_32263[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (24))){
var inst_32201 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32217_32264 = state_32209__$1;
(statearr_32217_32264[(2)] = inst_32201);

(statearr_32217_32264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (4))){
var inst_32207 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32209__$1,inst_32207);
} else {
if((state_val_32210 === (15))){
var inst_32205 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32218_32265 = state_32209__$1;
(statearr_32218_32265[(2)] = inst_32205);

(statearr_32218_32265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (21))){
var inst_32158 = (state_32209[(2)]);
var inst_32159 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32160 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32159);
var state_32209__$1 = (function (){var statearr_32219 = state_32209;
(statearr_32219[(7)] = inst_32158);

return statearr_32219;
})();
var statearr_32220_32266 = state_32209__$1;
(statearr_32220_32266[(2)] = inst_32160);

(statearr_32220_32266[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (31))){
var inst_32188 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32188){
var statearr_32221_32267 = state_32209__$1;
(statearr_32221_32267[(1)] = (34));

} else {
var statearr_32222_32268 = state_32209__$1;
(statearr_32222_32268[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (32))){
var inst_32197 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32223_32269 = state_32209__$1;
(statearr_32223_32269[(2)] = inst_32197);

(statearr_32223_32269[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (33))){
var inst_32184 = (state_32209[(2)]);
var inst_32185 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32186 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32185);
var state_32209__$1 = (function (){var statearr_32224 = state_32209;
(statearr_32224[(8)] = inst_32184);

return statearr_32224;
})();
var statearr_32225_32270 = state_32209__$1;
(statearr_32225_32270[(2)] = inst_32186);

(statearr_32225_32270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (13))){
var inst_32143 = figwheel.client.heads_up.clear.call(null);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(16),inst_32143);
} else {
if((state_val_32210 === (22))){
var inst_32164 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32165 = figwheel.client.heads_up.append_warning_message.call(null,inst_32164);
var state_32209__$1 = state_32209;
var statearr_32226_32271 = state_32209__$1;
(statearr_32226_32271[(2)] = inst_32165);

(statearr_32226_32271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (36))){
var inst_32195 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32227_32272 = state_32209__$1;
(statearr_32227_32272[(2)] = inst_32195);

(statearr_32227_32272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (29))){
var inst_32175 = (state_32209[(2)]);
var inst_32176 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32177 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32176);
var state_32209__$1 = (function (){var statearr_32228 = state_32209;
(statearr_32228[(9)] = inst_32175);

return statearr_32228;
})();
var statearr_32229_32273 = state_32209__$1;
(statearr_32229_32273[(2)] = inst_32177);

(statearr_32229_32273[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (6))){
var inst_32124 = (state_32209[(10)]);
var state_32209__$1 = state_32209;
var statearr_32230_32274 = state_32209__$1;
(statearr_32230_32274[(2)] = inst_32124);

(statearr_32230_32274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (28))){
var inst_32171 = (state_32209[(2)]);
var inst_32172 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32173 = figwheel.client.heads_up.display_warning.call(null,inst_32172);
var state_32209__$1 = (function (){var statearr_32231 = state_32209;
(statearr_32231[(11)] = inst_32171);

return statearr_32231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(29),inst_32173);
} else {
if((state_val_32210 === (25))){
var inst_32169 = figwheel.client.heads_up.clear.call(null);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(28),inst_32169);
} else {
if((state_val_32210 === (34))){
var inst_32190 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(37),inst_32190);
} else {
if((state_val_32210 === (17))){
var inst_32149 = (state_32209[(2)]);
var inst_32150 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32151 = figwheel.client.auto_jump_to_error.call(null,opts,inst_32150);
var state_32209__$1 = (function (){var statearr_32232 = state_32209;
(statearr_32232[(12)] = inst_32149);

return statearr_32232;
})();
var statearr_32233_32275 = state_32209__$1;
(statearr_32233_32275[(2)] = inst_32151);

(statearr_32233_32275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (3))){
var inst_32141 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32141){
var statearr_32234_32276 = state_32209__$1;
(statearr_32234_32276[(1)] = (13));

} else {
var statearr_32235_32277 = state_32209__$1;
(statearr_32235_32277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (12))){
var inst_32137 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32236_32278 = state_32209__$1;
(statearr_32236_32278[(2)] = inst_32137);

(statearr_32236_32278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (2))){
var inst_32124 = (state_32209[(10)]);
var inst_32124__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32209__$1 = (function (){var statearr_32237 = state_32209;
(statearr_32237[(10)] = inst_32124__$1);

return statearr_32237;
})();
if(cljs.core.truth_(inst_32124__$1)){
var statearr_32238_32279 = state_32209__$1;
(statearr_32238_32279[(1)] = (5));

} else {
var statearr_32239_32280 = state_32209__$1;
(statearr_32239_32280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (23))){
var inst_32167 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32167){
var statearr_32240_32281 = state_32209__$1;
(statearr_32240_32281[(1)] = (25));

} else {
var statearr_32241_32282 = state_32209__$1;
(statearr_32241_32282[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (35))){
var state_32209__$1 = state_32209;
var statearr_32242_32283 = state_32209__$1;
(statearr_32242_32283[(2)] = null);

(statearr_32242_32283[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (19))){
var inst_32162 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32162){
var statearr_32243_32284 = state_32209__$1;
(statearr_32243_32284[(1)] = (22));

} else {
var statearr_32244_32285 = state_32209__$1;
(statearr_32244_32285[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (11))){
var inst_32133 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32245_32286 = state_32209__$1;
(statearr_32245_32286[(2)] = inst_32133);

(statearr_32245_32286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (9))){
var inst_32135 = figwheel.client.heads_up.clear.call(null);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(12),inst_32135);
} else {
if((state_val_32210 === (5))){
var inst_32126 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32209__$1 = state_32209;
var statearr_32246_32287 = state_32209__$1;
(statearr_32246_32287[(2)] = inst_32126);

(statearr_32246_32287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (14))){
var inst_32153 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32153){
var statearr_32247_32288 = state_32209__$1;
(statearr_32247_32288[(1)] = (18));

} else {
var statearr_32248_32289 = state_32209__$1;
(statearr_32248_32289[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (26))){
var inst_32179 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32209__$1 = state_32209;
if(inst_32179){
var statearr_32249_32290 = state_32209__$1;
(statearr_32249_32290[(1)] = (30));

} else {
var statearr_32250_32291 = state_32209__$1;
(statearr_32250_32291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (16))){
var inst_32145 = (state_32209[(2)]);
var inst_32146 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32147 = figwheel.client.heads_up.display_exception.call(null,inst_32146);
var state_32209__$1 = (function (){var statearr_32251 = state_32209;
(statearr_32251[(13)] = inst_32145);

return statearr_32251;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(17),inst_32147);
} else {
if((state_val_32210 === (30))){
var inst_32181 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32182 = figwheel.client.heads_up.display_warning.call(null,inst_32181);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(33),inst_32182);
} else {
if((state_val_32210 === (10))){
var inst_32139 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32252_32292 = state_32209__$1;
(statearr_32252_32292[(2)] = inst_32139);

(statearr_32252_32292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (18))){
var inst_32155 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32156 = figwheel.client.heads_up.display_exception.call(null,inst_32155);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(21),inst_32156);
} else {
if((state_val_32210 === (37))){
var inst_32192 = (state_32209[(2)]);
var state_32209__$1 = state_32209;
var statearr_32253_32293 = state_32209__$1;
(statearr_32253_32293[(2)] = inst_32192);

(statearr_32253_32293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32210 === (8))){
var inst_32131 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32209__$1 = state_32209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32209__$1,(11),inst_32131);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27982__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27887__auto__,c__27982__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0 = (function (){
var statearr_32254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32254[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__);

(statearr_32254[(1)] = (1));

return statearr_32254;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1 = (function (state_32209){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_32209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e32255){if((e32255 instanceof Object)){
var ex__27891__auto__ = e32255;
var statearr_32256_32294 = state_32209;
(statearr_32256_32294[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32295 = state_32209;
state_32209 = G__32295;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__ = function(state_32209){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1.call(this,state_32209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__,msg_hist,msg_names,msg))
})();
var state__27984__auto__ = (function (){var statearr_32257 = f__27983__auto__.call(null);
(statearr_32257[(6)] = c__27982__auto__);

return statearr_32257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__,msg_hist,msg_names,msg))
);

return c__27982__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27982__auto___32324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___32324,ch){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___32324,ch){
return (function (state_32310){
var state_val_32311 = (state_32310[(1)]);
if((state_val_32311 === (1))){
var state_32310__$1 = state_32310;
var statearr_32312_32325 = state_32310__$1;
(statearr_32312_32325[(2)] = null);

(statearr_32312_32325[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (2))){
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32310__$1,(4),ch);
} else {
if((state_val_32311 === (3))){
var inst_32308 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32310__$1,inst_32308);
} else {
if((state_val_32311 === (4))){
var inst_32298 = (state_32310[(7)]);
var inst_32298__$1 = (state_32310[(2)]);
var state_32310__$1 = (function (){var statearr_32313 = state_32310;
(statearr_32313[(7)] = inst_32298__$1);

return statearr_32313;
})();
if(cljs.core.truth_(inst_32298__$1)){
var statearr_32314_32326 = state_32310__$1;
(statearr_32314_32326[(1)] = (5));

} else {
var statearr_32315_32327 = state_32310__$1;
(statearr_32315_32327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (5))){
var inst_32298 = (state_32310[(7)]);
var inst_32300 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32298);
var state_32310__$1 = state_32310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32310__$1,(8),inst_32300);
} else {
if((state_val_32311 === (6))){
var state_32310__$1 = state_32310;
var statearr_32316_32328 = state_32310__$1;
(statearr_32316_32328[(2)] = null);

(statearr_32316_32328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (7))){
var inst_32306 = (state_32310[(2)]);
var state_32310__$1 = state_32310;
var statearr_32317_32329 = state_32310__$1;
(statearr_32317_32329[(2)] = inst_32306);

(statearr_32317_32329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32311 === (8))){
var inst_32302 = (state_32310[(2)]);
var state_32310__$1 = (function (){var statearr_32318 = state_32310;
(statearr_32318[(8)] = inst_32302);

return statearr_32318;
})();
var statearr_32319_32330 = state_32310__$1;
(statearr_32319_32330[(2)] = null);

(statearr_32319_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__27982__auto___32324,ch))
;
return ((function (switch__27887__auto__,c__27982__auto___32324,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_32320 = [null,null,null,null,null,null,null,null,null];
(statearr_32320[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27888__auto__);

(statearr_32320[(1)] = (1));

return statearr_32320;
});
var figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1 = (function (state_32310){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_32310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e32321){if((e32321 instanceof Object)){
var ex__27891__auto__ = e32321;
var statearr_32322_32331 = state_32310;
(statearr_32322_32331[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32332 = state_32310;
state_32310 = G__32332;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27888__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___32324,ch))
})();
var state__27984__auto__ = (function (){var statearr_32323 = f__27983__auto__.call(null);
(statearr_32323[(6)] = c__27982__auto___32324);

return statearr_32323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___32324,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__){
return (function (state_32338){
var state_val_32339 = (state_32338[(1)]);
if((state_val_32339 === (1))){
var inst_32333 = cljs.core.async.timeout.call(null,(3000));
var state_32338__$1 = state_32338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32338__$1,(2),inst_32333);
} else {
if((state_val_32339 === (2))){
var inst_32335 = (state_32338[(2)]);
var inst_32336 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32338__$1 = (function (){var statearr_32340 = state_32338;
(statearr_32340[(7)] = inst_32335);

return statearr_32340;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32338__$1,inst_32336);
} else {
return null;
}
}
});})(c__27982__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_32341 = [null,null,null,null,null,null,null,null];
(statearr_32341[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__);

(statearr_32341[(1)] = (1));

return statearr_32341;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1 = (function (state_32338){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_32338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e32342){if((e32342 instanceof Object)){
var ex__27891__auto__ = e32342;
var statearr_32343_32345 = state_32338;
(statearr_32343_32345[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32346 = state_32338;
state_32338 = G__32346;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__ = function(state_32338){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1.call(this,state_32338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__))
})();
var state__27984__auto__ = (function (){var statearr_32344 = f__27983__auto__.call(null);
(statearr_32344[(6)] = c__27982__auto__);

return statearr_32344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__))
);

return c__27982__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__,figwheel_version,temp__5735__auto__){
return (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (1))){
var inst_32347 = cljs.core.async.timeout.call(null,(2000));
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32353__$1,(2),inst_32347);
} else {
if((state_val_32354 === (2))){
var inst_32349 = (state_32353[(2)]);
var inst_32350 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_32351 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_32350);
var state_32353__$1 = (function (){var statearr_32355 = state_32353;
(statearr_32355[(7)] = inst_32349);

return statearr_32355;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32353__$1,inst_32351);
} else {
return null;
}
}
});})(c__27982__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0 = (function (){
var statearr_32356 = [null,null,null,null,null,null,null,null];
(statearr_32356[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__);

(statearr_32356[(1)] = (1));

return statearr_32356;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1 = (function (state_32353){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_32353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e32357){if((e32357 instanceof Object)){
var ex__27891__auto__ = e32357;
var statearr_32358_32360 = state_32353;
(statearr_32358_32360[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32361 = state_32353;
state_32353 = G__32361;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__,figwheel_version,temp__5735__auto__))
})();
var state__27984__auto__ = (function (){var statearr_32359 = f__27983__auto__.call(null);
(statearr_32359[(6)] = c__27982__auto__);

return statearr_32359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__,figwheel_version,temp__5735__auto__))
);

return c__27982__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__32362){
var map__32363 = p__32362;
var map__32363__$1 = (((((!((map__32363 == null))))?(((((map__32363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32363):map__32363);
var file = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__32363__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__32365 = "";
var G__32365__$1 = (cljs.core.truth_(file)?[G__32365,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__32365);
var G__32365__$2 = (cljs.core.truth_(line)?[G__32365__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__32365__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__32365__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__32365__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32366){
var map__32367 = p__32366;
var map__32367__$1 = (((((!((map__32367 == null))))?(((((map__32367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32367.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32367):map__32367);
var ed = map__32367__$1;
var exception_data = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32367__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_32370 = (function (){var G__32369 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32369)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__32369;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_32370);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32371){
var map__32372 = p__32371;
var map__32372__$1 = (((((!((map__32372 == null))))?(((((map__32372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32372):map__32372);
var w = map__32372__$1;
var message = cljs.core.get.call(null,map__32372__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32374 = cljs.core.seq.call(null,plugins);
var chunk__32375 = null;
var count__32376 = (0);
var i__32377 = (0);
while(true){
if((i__32377 < count__32376)){
var vec__32384 = cljs.core._nth.call(null,chunk__32375,i__32377);
var k = cljs.core.nth.call(null,vec__32384,(0),null);
var plugin = cljs.core.nth.call(null,vec__32384,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32390 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32374,chunk__32375,count__32376,i__32377,pl_32390,vec__32384,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32390.call(null,msg_hist);
});})(seq__32374,chunk__32375,count__32376,i__32377,pl_32390,vec__32384,k,plugin))
);
} else {
}


var G__32391 = seq__32374;
var G__32392 = chunk__32375;
var G__32393 = count__32376;
var G__32394 = (i__32377 + (1));
seq__32374 = G__32391;
chunk__32375 = G__32392;
count__32376 = G__32393;
i__32377 = G__32394;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__32374);
if(temp__5735__auto__){
var seq__32374__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32374__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__32374__$1);
var G__32395 = cljs.core.chunk_rest.call(null,seq__32374__$1);
var G__32396 = c__4550__auto__;
var G__32397 = cljs.core.count.call(null,c__4550__auto__);
var G__32398 = (0);
seq__32374 = G__32395;
chunk__32375 = G__32396;
count__32376 = G__32397;
i__32377 = G__32398;
continue;
} else {
var vec__32387 = cljs.core.first.call(null,seq__32374__$1);
var k = cljs.core.nth.call(null,vec__32387,(0),null);
var plugin = cljs.core.nth.call(null,vec__32387,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32399 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32374,chunk__32375,count__32376,i__32377,pl_32399,vec__32387,k,plugin,seq__32374__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32399.call(null,msg_hist);
});})(seq__32374,chunk__32375,count__32376,i__32377,pl_32399,vec__32387,k,plugin,seq__32374__$1,temp__5735__auto__))
);
} else {
}


var G__32400 = cljs.core.next.call(null,seq__32374__$1);
var G__32401 = null;
var G__32402 = (0);
var G__32403 = (0);
seq__32374 = G__32400;
chunk__32375 = G__32401;
count__32376 = G__32402;
i__32377 = G__32403;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__32405 = arguments.length;
switch (G__32405) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__32406_32411 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__32407_32412 = null;
var count__32408_32413 = (0);
var i__32409_32414 = (0);
while(true){
if((i__32409_32414 < count__32408_32413)){
var msg_32415 = cljs.core._nth.call(null,chunk__32407_32412,i__32409_32414);
figwheel.client.socket.handle_incoming_message.call(null,msg_32415);


var G__32416 = seq__32406_32411;
var G__32417 = chunk__32407_32412;
var G__32418 = count__32408_32413;
var G__32419 = (i__32409_32414 + (1));
seq__32406_32411 = G__32416;
chunk__32407_32412 = G__32417;
count__32408_32413 = G__32418;
i__32409_32414 = G__32419;
continue;
} else {
var temp__5735__auto___32420 = cljs.core.seq.call(null,seq__32406_32411);
if(temp__5735__auto___32420){
var seq__32406_32421__$1 = temp__5735__auto___32420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32406_32421__$1)){
var c__4550__auto___32422 = cljs.core.chunk_first.call(null,seq__32406_32421__$1);
var G__32423 = cljs.core.chunk_rest.call(null,seq__32406_32421__$1);
var G__32424 = c__4550__auto___32422;
var G__32425 = cljs.core.count.call(null,c__4550__auto___32422);
var G__32426 = (0);
seq__32406_32411 = G__32423;
chunk__32407_32412 = G__32424;
count__32408_32413 = G__32425;
i__32409_32414 = G__32426;
continue;
} else {
var msg_32427 = cljs.core.first.call(null,seq__32406_32421__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_32427);


var G__32428 = cljs.core.next.call(null,seq__32406_32421__$1);
var G__32429 = null;
var G__32430 = (0);
var G__32431 = (0);
seq__32406_32411 = G__32428;
chunk__32407_32412 = G__32429;
count__32408_32413 = G__32430;
i__32409_32414 = G__32431;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32436 = arguments.length;
var i__4731__auto___32437 = (0);
while(true){
if((i__4731__auto___32437 < len__4730__auto___32436)){
args__4736__auto__.push((arguments[i__4731__auto___32437]));

var G__32438 = (i__4731__auto___32437 + (1));
i__4731__auto___32437 = G__32438;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32433){
var map__32434 = p__32433;
var map__32434__$1 = (((((!((map__32434 == null))))?(((((map__32434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32434):map__32434);
var opts = map__32434__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32432){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32432));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e32439){if((e32439 instanceof Error)){
var e = e32439;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e32439;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__32440){
var map__32441 = p__32440;
var map__32441__$1 = (((((!((map__32441 == null))))?(((((map__32441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);
var msg_name = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1561537547657
