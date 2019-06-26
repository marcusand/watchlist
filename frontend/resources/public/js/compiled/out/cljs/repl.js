// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31627){
var map__31628 = p__31627;
var map__31628__$1 = (((((!((map__31628 == null))))?(((((map__31628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31628):map__31628);
var m = map__31628__$1;
var n = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31628__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31630_31662 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31631_31663 = null;
var count__31632_31664 = (0);
var i__31633_31665 = (0);
while(true){
if((i__31633_31665 < count__31632_31664)){
var f_31666 = cljs.core._nth.call(null,chunk__31631_31663,i__31633_31665);
cljs.core.println.call(null,"  ",f_31666);


var G__31667 = seq__31630_31662;
var G__31668 = chunk__31631_31663;
var G__31669 = count__31632_31664;
var G__31670 = (i__31633_31665 + (1));
seq__31630_31662 = G__31667;
chunk__31631_31663 = G__31668;
count__31632_31664 = G__31669;
i__31633_31665 = G__31670;
continue;
} else {
var temp__5735__auto___31671 = cljs.core.seq.call(null,seq__31630_31662);
if(temp__5735__auto___31671){
var seq__31630_31672__$1 = temp__5735__auto___31671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31630_31672__$1)){
var c__4550__auto___31673 = cljs.core.chunk_first.call(null,seq__31630_31672__$1);
var G__31674 = cljs.core.chunk_rest.call(null,seq__31630_31672__$1);
var G__31675 = c__4550__auto___31673;
var G__31676 = cljs.core.count.call(null,c__4550__auto___31673);
var G__31677 = (0);
seq__31630_31662 = G__31674;
chunk__31631_31663 = G__31675;
count__31632_31664 = G__31676;
i__31633_31665 = G__31677;
continue;
} else {
var f_31678 = cljs.core.first.call(null,seq__31630_31672__$1);
cljs.core.println.call(null,"  ",f_31678);


var G__31679 = cljs.core.next.call(null,seq__31630_31672__$1);
var G__31680 = null;
var G__31681 = (0);
var G__31682 = (0);
seq__31630_31662 = G__31679;
chunk__31631_31663 = G__31680;
count__31632_31664 = G__31681;
i__31633_31665 = G__31682;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31683 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31683);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31683)))?cljs.core.second.call(null,arglists_31683):arglists_31683));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31634_31684 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31635_31685 = null;
var count__31636_31686 = (0);
var i__31637_31687 = (0);
while(true){
if((i__31637_31687 < count__31636_31686)){
var vec__31648_31688 = cljs.core._nth.call(null,chunk__31635_31685,i__31637_31687);
var name_31689 = cljs.core.nth.call(null,vec__31648_31688,(0),null);
var map__31651_31690 = cljs.core.nth.call(null,vec__31648_31688,(1),null);
var map__31651_31691__$1 = (((((!((map__31651_31690 == null))))?(((((map__31651_31690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31651_31690.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31651_31690):map__31651_31690);
var doc_31692 = cljs.core.get.call(null,map__31651_31691__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31693 = cljs.core.get.call(null,map__31651_31691__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31689);

cljs.core.println.call(null," ",arglists_31693);

if(cljs.core.truth_(doc_31692)){
cljs.core.println.call(null," ",doc_31692);
} else {
}


var G__31694 = seq__31634_31684;
var G__31695 = chunk__31635_31685;
var G__31696 = count__31636_31686;
var G__31697 = (i__31637_31687 + (1));
seq__31634_31684 = G__31694;
chunk__31635_31685 = G__31695;
count__31636_31686 = G__31696;
i__31637_31687 = G__31697;
continue;
} else {
var temp__5735__auto___31698 = cljs.core.seq.call(null,seq__31634_31684);
if(temp__5735__auto___31698){
var seq__31634_31699__$1 = temp__5735__auto___31698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31634_31699__$1)){
var c__4550__auto___31700 = cljs.core.chunk_first.call(null,seq__31634_31699__$1);
var G__31701 = cljs.core.chunk_rest.call(null,seq__31634_31699__$1);
var G__31702 = c__4550__auto___31700;
var G__31703 = cljs.core.count.call(null,c__4550__auto___31700);
var G__31704 = (0);
seq__31634_31684 = G__31701;
chunk__31635_31685 = G__31702;
count__31636_31686 = G__31703;
i__31637_31687 = G__31704;
continue;
} else {
var vec__31653_31705 = cljs.core.first.call(null,seq__31634_31699__$1);
var name_31706 = cljs.core.nth.call(null,vec__31653_31705,(0),null);
var map__31656_31707 = cljs.core.nth.call(null,vec__31653_31705,(1),null);
var map__31656_31708__$1 = (((((!((map__31656_31707 == null))))?(((((map__31656_31707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31656_31707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31656_31707):map__31656_31707);
var doc_31709 = cljs.core.get.call(null,map__31656_31708__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31710 = cljs.core.get.call(null,map__31656_31708__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31706);

cljs.core.println.call(null," ",arglists_31710);

if(cljs.core.truth_(doc_31709)){
cljs.core.println.call(null," ",doc_31709);
} else {
}


var G__31711 = cljs.core.next.call(null,seq__31634_31699__$1);
var G__31712 = null;
var G__31713 = (0);
var G__31714 = (0);
seq__31634_31684 = G__31711;
chunk__31635_31685 = G__31712;
count__31636_31686 = G__31713;
i__31637_31687 = G__31714;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31658 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31659 = null;
var count__31660 = (0);
var i__31661 = (0);
while(true){
if((i__31661 < count__31660)){
var role = cljs.core._nth.call(null,chunk__31659,i__31661);
var temp__5735__auto___31715__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31715__$1)){
var spec_31716 = temp__5735__auto___31715__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31716));
} else {
}


var G__31717 = seq__31658;
var G__31718 = chunk__31659;
var G__31719 = count__31660;
var G__31720 = (i__31661 + (1));
seq__31658 = G__31717;
chunk__31659 = G__31718;
count__31660 = G__31719;
i__31661 = G__31720;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31658);
if(temp__5735__auto____$1){
var seq__31658__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31658__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31658__$1);
var G__31721 = cljs.core.chunk_rest.call(null,seq__31658__$1);
var G__31722 = c__4550__auto__;
var G__31723 = cljs.core.count.call(null,c__4550__auto__);
var G__31724 = (0);
seq__31658 = G__31721;
chunk__31659 = G__31722;
count__31660 = G__31723;
i__31661 = G__31724;
continue;
} else {
var role = cljs.core.first.call(null,seq__31658__$1);
var temp__5735__auto___31725__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31725__$2)){
var spec_31726 = temp__5735__auto___31725__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31726));
} else {
}


var G__31727 = cljs.core.next.call(null,seq__31658__$1);
var G__31728 = null;
var G__31729 = (0);
var G__31730 = (0);
seq__31658 = G__31727;
chunk__31659 = G__31728;
count__31660 = G__31729;
i__31661 = G__31730;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31731 = cljs.core.conj.call(null,via,t);
var G__31732 = cljs.core.ex_cause.call(null,t);
via = G__31731;
t = G__31732;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31735 = datafied_throwable;
var map__31735__$1 = (((((!((map__31735 == null))))?(((((map__31735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31735):map__31735);
var via = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31735__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31736 = cljs.core.last.call(null,via);
var map__31736__$1 = (((((!((map__31736 == null))))?(((((map__31736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31736):map__31736);
var type = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31736__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31737 = data;
var map__31737__$1 = (((((!((map__31737 == null))))?(((((map__31737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31737):map__31737);
var problems = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31737__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31738 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31738__$1 = (((((!((map__31738 == null))))?(((((map__31738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31738):map__31738);
var top_data = map__31738__$1;
var source = cljs.core.get.call(null,map__31738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31743 = phase;
var G__31743__$1 = (((G__31743 instanceof cljs.core.Keyword))?G__31743.fqn:null);
switch (G__31743__$1) {
case "read-source":
var map__31744 = data;
var map__31744__$1 = (((((!((map__31744 == null))))?(((((map__31744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31744.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31744):map__31744);
var line = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31744__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31746 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31746__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31746,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31746);
var G__31746__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31746__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31746__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31746__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31746__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31747 = top_data;
var G__31747__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31747,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31747);
var G__31747__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31747__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31747__$1);
var G__31747__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31747__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31747__$2);
var G__31747__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31747__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31747__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31747__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31747__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31748 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31748,(0),null);
var method = cljs.core.nth.call(null,vec__31748,(1),null);
var file = cljs.core.nth.call(null,vec__31748,(2),null);
var line = cljs.core.nth.call(null,vec__31748,(3),null);
var G__31751 = top_data;
var G__31751__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31751,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31751);
var G__31751__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31751__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31751__$1);
var G__31751__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__31751__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31751__$2);
var G__31751__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31751__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31751__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31751__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31751__$4;
}

break;
case "execution":
var vec__31752 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31752,(0),null);
var method = cljs.core.nth.call(null,vec__31752,(1),null);
var file = cljs.core.nth.call(null,vec__31752,(2),null);
var line = cljs.core.nth.call(null,vec__31752,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__31752,source__$1,method,file,line,G__31743,G__31743__$1,map__31735,map__31735__$1,via,trace,phase,map__31736,map__31736__$1,type,message,data,map__31737,map__31737__$1,problems,fn,caller,map__31738,map__31738__$1,top_data,source){
return (function (p1__31734_SHARP_){
var or__4131__auto__ = (p1__31734_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31734_SHARP_);
}
});})(vec__31752,source__$1,method,file,line,G__31743,G__31743__$1,map__31735,map__31735__$1,via,trace,phase,map__31736,map__31736__$1,type,message,data,map__31737,map__31737__$1,problems,fn,caller,map__31738,map__31738__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31755 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31755__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31755,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31755);
var G__31755__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31755__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31755__$1);
var G__31755__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31755__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31755__$2);
var G__31755__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31755__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31755__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31755__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31755__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31743__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31759){
var map__31760 = p__31759;
var map__31760__$1 = (((((!((map__31760 == null))))?(((((map__31760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31760):map__31760);
var triage_data = map__31760__$1;
var phase = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31760__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31762 = phase;
var G__31762__$1 = (((G__31762 instanceof cljs.core.Keyword))?G__31762.fqn:null);
switch (G__31762__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31763_31772 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31764_31773 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31765_31774 = true;
var _STAR_print_fn_STAR__temp_val__31766_31775 = ((function (_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31765_31774;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31766_31775;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,_STAR_print_fn_STAR__temp_val__31766_31775,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,_STAR_print_fn_STAR__temp_val__31766_31775,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31757_SHARP_){
return cljs.core.dissoc.call(null,p1__31757_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,_STAR_print_fn_STAR__temp_val__31766_31775,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31763_31772,_STAR_print_fn_STAR__orig_val__31764_31773,_STAR_print_newline_STAR__temp_val__31765_31774,_STAR_print_fn_STAR__temp_val__31766_31775,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31764_31773;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31763_31772;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31767_31776 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31768_31777 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31769_31778 = true;
var _STAR_print_fn_STAR__temp_val__31770_31779 = ((function (_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31769_31778;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31770_31779;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,_STAR_print_fn_STAR__temp_val__31770_31779,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,_STAR_print_fn_STAR__temp_val__31770_31779,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31758_SHARP_){
return cljs.core.dissoc.call(null,p1__31758_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,_STAR_print_fn_STAR__temp_val__31770_31779,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31767_31776,_STAR_print_fn_STAR__orig_val__31768_31777,_STAR_print_newline_STAR__temp_val__31769_31778,_STAR_print_fn_STAR__temp_val__31770_31779,sb__4661__auto__,G__31762,G__31762__$1,loc,class_name,simple_class,cause_type,format,map__31760,map__31760__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31768_31777;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31767_31776;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31762__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1561537547155
