// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30097_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30097_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30098 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30099 = null;
var count__30100 = (0);
var i__30101 = (0);
while(true){
if((i__30101 < count__30100)){
var n = cljs.core._nth.call(null,chunk__30099,i__30101);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30102 = seq__30098;
var G__30103 = chunk__30099;
var G__30104 = count__30100;
var G__30105 = (i__30101 + (1));
seq__30098 = G__30102;
chunk__30099 = G__30103;
count__30100 = G__30104;
i__30101 = G__30105;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30098);
if(temp__5735__auto__){
var seq__30098__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30098__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30098__$1);
var G__30106 = cljs.core.chunk_rest.call(null,seq__30098__$1);
var G__30107 = c__4550__auto__;
var G__30108 = cljs.core.count.call(null,c__4550__auto__);
var G__30109 = (0);
seq__30098 = G__30106;
chunk__30099 = G__30107;
count__30100 = G__30108;
i__30101 = G__30109;
continue;
} else {
var n = cljs.core.first.call(null,seq__30098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__30110 = cljs.core.next.call(null,seq__30098__$1);
var G__30111 = null;
var G__30112 = (0);
var G__30113 = (0);
seq__30098 = G__30110;
chunk__30099 = G__30111;
count__30100 = G__30112;
i__30101 = G__30113;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__30114){
var vec__30115 = p__30114;
var _ = cljs.core.nth.call(null,vec__30115,(0),null);
var v = cljs.core.nth.call(null,vec__30115,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__30118){
var vec__30119 = p__30118;
var k = cljs.core.nth.call(null,vec__30119,(0),null);
var v = cljs.core.nth.call(null,vec__30119,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30131_30139 = cljs.core.seq.call(null,deps);
var chunk__30132_30140 = null;
var count__30133_30141 = (0);
var i__30134_30142 = (0);
while(true){
if((i__30134_30142 < count__30133_30141)){
var dep_30143 = cljs.core._nth.call(null,chunk__30132_30140,i__30134_30142);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30143;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30143));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30143,(depth + (1)),state);
} else {
}


var G__30144 = seq__30131_30139;
var G__30145 = chunk__30132_30140;
var G__30146 = count__30133_30141;
var G__30147 = (i__30134_30142 + (1));
seq__30131_30139 = G__30144;
chunk__30132_30140 = G__30145;
count__30133_30141 = G__30146;
i__30134_30142 = G__30147;
continue;
} else {
var temp__5735__auto___30148 = cljs.core.seq.call(null,seq__30131_30139);
if(temp__5735__auto___30148){
var seq__30131_30149__$1 = temp__5735__auto___30148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30131_30149__$1)){
var c__4550__auto___30150 = cljs.core.chunk_first.call(null,seq__30131_30149__$1);
var G__30151 = cljs.core.chunk_rest.call(null,seq__30131_30149__$1);
var G__30152 = c__4550__auto___30150;
var G__30153 = cljs.core.count.call(null,c__4550__auto___30150);
var G__30154 = (0);
seq__30131_30139 = G__30151;
chunk__30132_30140 = G__30152;
count__30133_30141 = G__30153;
i__30134_30142 = G__30154;
continue;
} else {
var dep_30155 = cljs.core.first.call(null,seq__30131_30149__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_30155;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_30155));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_30155,(depth + (1)),state);
} else {
}


var G__30156 = cljs.core.next.call(null,seq__30131_30149__$1);
var G__30157 = null;
var G__30158 = (0);
var G__30159 = (0);
seq__30131_30139 = G__30156;
chunk__30132_30140 = G__30157;
count__30133_30141 = G__30158;
i__30134_30142 = G__30159;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30135){
var vec__30136 = p__30135;
var seq__30137 = cljs.core.seq.call(null,vec__30136);
var first__30138 = cljs.core.first.call(null,seq__30137);
var seq__30137__$1 = cljs.core.next.call(null,seq__30137);
var x = first__30138;
var xs = seq__30137__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30136,seq__30137,first__30138,seq__30137__$1,x,xs,get_deps__$1){
return (function (p1__30122_SHARP_){
return clojure.set.difference.call(null,p1__30122_SHARP_,x);
});})(vec__30136,seq__30137,first__30138,seq__30137__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30160 = cljs.core.seq.call(null,provides);
var chunk__30161 = null;
var count__30162 = (0);
var i__30163 = (0);
while(true){
if((i__30163 < count__30162)){
var prov = cljs.core._nth.call(null,chunk__30161,i__30163);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30172_30180 = cljs.core.seq.call(null,requires);
var chunk__30173_30181 = null;
var count__30174_30182 = (0);
var i__30175_30183 = (0);
while(true){
if((i__30175_30183 < count__30174_30182)){
var req_30184 = cljs.core._nth.call(null,chunk__30173_30181,i__30175_30183);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30184,prov);


var G__30185 = seq__30172_30180;
var G__30186 = chunk__30173_30181;
var G__30187 = count__30174_30182;
var G__30188 = (i__30175_30183 + (1));
seq__30172_30180 = G__30185;
chunk__30173_30181 = G__30186;
count__30174_30182 = G__30187;
i__30175_30183 = G__30188;
continue;
} else {
var temp__5735__auto___30189 = cljs.core.seq.call(null,seq__30172_30180);
if(temp__5735__auto___30189){
var seq__30172_30190__$1 = temp__5735__auto___30189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30172_30190__$1)){
var c__4550__auto___30191 = cljs.core.chunk_first.call(null,seq__30172_30190__$1);
var G__30192 = cljs.core.chunk_rest.call(null,seq__30172_30190__$1);
var G__30193 = c__4550__auto___30191;
var G__30194 = cljs.core.count.call(null,c__4550__auto___30191);
var G__30195 = (0);
seq__30172_30180 = G__30192;
chunk__30173_30181 = G__30193;
count__30174_30182 = G__30194;
i__30175_30183 = G__30195;
continue;
} else {
var req_30196 = cljs.core.first.call(null,seq__30172_30190__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30196,prov);


var G__30197 = cljs.core.next.call(null,seq__30172_30190__$1);
var G__30198 = null;
var G__30199 = (0);
var G__30200 = (0);
seq__30172_30180 = G__30197;
chunk__30173_30181 = G__30198;
count__30174_30182 = G__30199;
i__30175_30183 = G__30200;
continue;
}
} else {
}
}
break;
}


var G__30201 = seq__30160;
var G__30202 = chunk__30161;
var G__30203 = count__30162;
var G__30204 = (i__30163 + (1));
seq__30160 = G__30201;
chunk__30161 = G__30202;
count__30162 = G__30203;
i__30163 = G__30204;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30160);
if(temp__5735__auto__){
var seq__30160__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30160__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30160__$1);
var G__30205 = cljs.core.chunk_rest.call(null,seq__30160__$1);
var G__30206 = c__4550__auto__;
var G__30207 = cljs.core.count.call(null,c__4550__auto__);
var G__30208 = (0);
seq__30160 = G__30205;
chunk__30161 = G__30206;
count__30162 = G__30207;
i__30163 = G__30208;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30160__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30176_30209 = cljs.core.seq.call(null,requires);
var chunk__30177_30210 = null;
var count__30178_30211 = (0);
var i__30179_30212 = (0);
while(true){
if((i__30179_30212 < count__30178_30211)){
var req_30213 = cljs.core._nth.call(null,chunk__30177_30210,i__30179_30212);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30213,prov);


var G__30214 = seq__30176_30209;
var G__30215 = chunk__30177_30210;
var G__30216 = count__30178_30211;
var G__30217 = (i__30179_30212 + (1));
seq__30176_30209 = G__30214;
chunk__30177_30210 = G__30215;
count__30178_30211 = G__30216;
i__30179_30212 = G__30217;
continue;
} else {
var temp__5735__auto___30218__$1 = cljs.core.seq.call(null,seq__30176_30209);
if(temp__5735__auto___30218__$1){
var seq__30176_30219__$1 = temp__5735__auto___30218__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30176_30219__$1)){
var c__4550__auto___30220 = cljs.core.chunk_first.call(null,seq__30176_30219__$1);
var G__30221 = cljs.core.chunk_rest.call(null,seq__30176_30219__$1);
var G__30222 = c__4550__auto___30220;
var G__30223 = cljs.core.count.call(null,c__4550__auto___30220);
var G__30224 = (0);
seq__30176_30209 = G__30221;
chunk__30177_30210 = G__30222;
count__30178_30211 = G__30223;
i__30179_30212 = G__30224;
continue;
} else {
var req_30225 = cljs.core.first.call(null,seq__30176_30219__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30225,prov);


var G__30226 = cljs.core.next.call(null,seq__30176_30219__$1);
var G__30227 = null;
var G__30228 = (0);
var G__30229 = (0);
seq__30176_30209 = G__30226;
chunk__30177_30210 = G__30227;
count__30178_30211 = G__30228;
i__30179_30212 = G__30229;
continue;
}
} else {
}
}
break;
}


var G__30230 = cljs.core.next.call(null,seq__30160__$1);
var G__30231 = null;
var G__30232 = (0);
var G__30233 = (0);
seq__30160 = G__30230;
chunk__30161 = G__30231;
count__30162 = G__30232;
i__30163 = G__30233;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30234_30238 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30235_30239 = null;
var count__30236_30240 = (0);
var i__30237_30241 = (0);
while(true){
if((i__30237_30241 < count__30236_30240)){
var ns_30242 = cljs.core._nth.call(null,chunk__30235_30239,i__30237_30241);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30242);


var G__30243 = seq__30234_30238;
var G__30244 = chunk__30235_30239;
var G__30245 = count__30236_30240;
var G__30246 = (i__30237_30241 + (1));
seq__30234_30238 = G__30243;
chunk__30235_30239 = G__30244;
count__30236_30240 = G__30245;
i__30237_30241 = G__30246;
continue;
} else {
var temp__5735__auto___30247 = cljs.core.seq.call(null,seq__30234_30238);
if(temp__5735__auto___30247){
var seq__30234_30248__$1 = temp__5735__auto___30247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30234_30248__$1)){
var c__4550__auto___30249 = cljs.core.chunk_first.call(null,seq__30234_30248__$1);
var G__30250 = cljs.core.chunk_rest.call(null,seq__30234_30248__$1);
var G__30251 = c__4550__auto___30249;
var G__30252 = cljs.core.count.call(null,c__4550__auto___30249);
var G__30253 = (0);
seq__30234_30238 = G__30250;
chunk__30235_30239 = G__30251;
count__30236_30240 = G__30252;
i__30237_30241 = G__30253;
continue;
} else {
var ns_30254 = cljs.core.first.call(null,seq__30234_30248__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30254);


var G__30255 = cljs.core.next.call(null,seq__30234_30248__$1);
var G__30256 = null;
var G__30257 = (0);
var G__30258 = (0);
seq__30234_30238 = G__30255;
chunk__30235_30239 = G__30256;
count__30236_30240 = G__30257;
i__30237_30241 = G__30258;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30259__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30259 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30260__i = 0, G__30260__a = new Array(arguments.length -  0);
while (G__30260__i < G__30260__a.length) {G__30260__a[G__30260__i] = arguments[G__30260__i + 0]; ++G__30260__i;}
  args = new cljs.core.IndexedSeq(G__30260__a,0,null);
} 
return G__30259__delegate.call(this,args);};
G__30259.cljs$lang$maxFixedArity = 0;
G__30259.cljs$lang$applyTo = (function (arglist__30261){
var args = cljs.core.seq(arglist__30261);
return G__30259__delegate(args);
});
G__30259.cljs$core$IFn$_invoke$arity$variadic = G__30259__delegate;
return G__30259;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__30262_SHARP_,p2__30263_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30262_SHARP_)),p2__30263_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__30264_SHARP_,p2__30265_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30264_SHARP_),p2__30265_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__30266 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__30266.addCallback(((function (G__30266){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__30266))
);

G__30266.addErrback(((function (G__30266){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__30266))
);

return G__30266;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30267){if((e30267 instanceof Error)){
var e = e30267;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30267;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30268){if((e30268 instanceof Error)){
var e = e30268;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30268;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30269 = cljs.core._EQ_;
var expr__30270 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30269.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30270))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__30269.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30270))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__30269.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30270))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__30269,expr__30270){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30269,expr__30270))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30272,callback){
var map__30273 = p__30272;
var map__30273__$1 = (((((!((map__30273 == null))))?(((((map__30273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30273):map__30273);
var file_msg = map__30273__$1;
var request_url = cljs.core.get.call(null,map__30273__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__30273,map__30273__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30273,map__30273__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__){
return (function (state_30311){
var state_val_30312 = (state_30311[(1)]);
if((state_val_30312 === (7))){
var inst_30307 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30313_30339 = state_30311__$1;
(statearr_30313_30339[(2)] = inst_30307);

(statearr_30313_30339[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (1))){
var state_30311__$1 = state_30311;
var statearr_30314_30340 = state_30311__$1;
(statearr_30314_30340[(2)] = null);

(statearr_30314_30340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (4))){
var inst_30277 = (state_30311[(7)]);
var inst_30277__$1 = (state_30311[(2)]);
var state_30311__$1 = (function (){var statearr_30315 = state_30311;
(statearr_30315[(7)] = inst_30277__$1);

return statearr_30315;
})();
if(cljs.core.truth_(inst_30277__$1)){
var statearr_30316_30341 = state_30311__$1;
(statearr_30316_30341[(1)] = (5));

} else {
var statearr_30317_30342 = state_30311__$1;
(statearr_30317_30342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (15))){
var inst_30292 = (state_30311[(8)]);
var inst_30290 = (state_30311[(9)]);
var inst_30294 = inst_30292.call(null,inst_30290);
var state_30311__$1 = state_30311;
var statearr_30318_30343 = state_30311__$1;
(statearr_30318_30343[(2)] = inst_30294);

(statearr_30318_30343[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (13))){
var inst_30301 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30319_30344 = state_30311__$1;
(statearr_30319_30344[(2)] = inst_30301);

(statearr_30319_30344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (6))){
var state_30311__$1 = state_30311;
var statearr_30320_30345 = state_30311__$1;
(statearr_30320_30345[(2)] = null);

(statearr_30320_30345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (17))){
var inst_30298 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
var statearr_30321_30346 = state_30311__$1;
(statearr_30321_30346[(2)] = inst_30298);

(statearr_30321_30346[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (3))){
var inst_30309 = (state_30311[(2)]);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30311__$1,inst_30309);
} else {
if((state_val_30312 === (12))){
var state_30311__$1 = state_30311;
var statearr_30322_30347 = state_30311__$1;
(statearr_30322_30347[(2)] = null);

(statearr_30322_30347[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (2))){
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30311__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30312 === (11))){
var inst_30282 = (state_30311[(10)]);
var inst_30288 = figwheel.client.file_reloading.blocking_load.call(null,inst_30282);
var state_30311__$1 = state_30311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30311__$1,(14),inst_30288);
} else {
if((state_val_30312 === (9))){
var inst_30282 = (state_30311[(10)]);
var state_30311__$1 = state_30311;
if(cljs.core.truth_(inst_30282)){
var statearr_30323_30348 = state_30311__$1;
(statearr_30323_30348[(1)] = (11));

} else {
var statearr_30324_30349 = state_30311__$1;
(statearr_30324_30349[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (5))){
var inst_30277 = (state_30311[(7)]);
var inst_30283 = (state_30311[(11)]);
var inst_30282 = cljs.core.nth.call(null,inst_30277,(0),null);
var inst_30283__$1 = cljs.core.nth.call(null,inst_30277,(1),null);
var state_30311__$1 = (function (){var statearr_30325 = state_30311;
(statearr_30325[(10)] = inst_30282);

(statearr_30325[(11)] = inst_30283__$1);

return statearr_30325;
})();
if(cljs.core.truth_(inst_30283__$1)){
var statearr_30326_30350 = state_30311__$1;
(statearr_30326_30350[(1)] = (8));

} else {
var statearr_30327_30351 = state_30311__$1;
(statearr_30327_30351[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (14))){
var inst_30292 = (state_30311[(8)]);
var inst_30282 = (state_30311[(10)]);
var inst_30290 = (state_30311[(2)]);
var inst_30291 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30292__$1 = cljs.core.get.call(null,inst_30291,inst_30282);
var state_30311__$1 = (function (){var statearr_30328 = state_30311;
(statearr_30328[(8)] = inst_30292__$1);

(statearr_30328[(9)] = inst_30290);

return statearr_30328;
})();
if(cljs.core.truth_(inst_30292__$1)){
var statearr_30329_30352 = state_30311__$1;
(statearr_30329_30352[(1)] = (15));

} else {
var statearr_30330_30353 = state_30311__$1;
(statearr_30330_30353[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (16))){
var inst_30290 = (state_30311[(9)]);
var inst_30296 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30290);
var state_30311__$1 = state_30311;
var statearr_30331_30354 = state_30311__$1;
(statearr_30331_30354[(2)] = inst_30296);

(statearr_30331_30354[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (10))){
var inst_30303 = (state_30311[(2)]);
var state_30311__$1 = (function (){var statearr_30332 = state_30311;
(statearr_30332[(12)] = inst_30303);

return statearr_30332;
})();
var statearr_30333_30355 = state_30311__$1;
(statearr_30333_30355[(2)] = null);

(statearr_30333_30355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30312 === (8))){
var inst_30283 = (state_30311[(11)]);
var inst_30285 = eval(inst_30283);
var state_30311__$1 = state_30311;
var statearr_30334_30356 = state_30311__$1;
(statearr_30334_30356[(2)] = inst_30285);

(statearr_30334_30356[(1)] = (10));


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
});})(c__27982__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$state_machine__27888__auto____0 = (function (){
var statearr_30335 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30335[(0)] = figwheel$client$file_reloading$state_machine__27888__auto__);

(statearr_30335[(1)] = (1));

return statearr_30335;
});
var figwheel$client$file_reloading$state_machine__27888__auto____1 = (function (state_30311){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_30311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e30336){if((e30336 instanceof Object)){
var ex__27891__auto__ = e30336;
var statearr_30337_30357 = state_30311;
(statearr_30337_30357[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30358 = state_30311;
state_30311 = G__30358;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27888__auto__ = function(state_30311){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27888__auto____1.call(this,state_30311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27888__auto____0;
figwheel$client$file_reloading$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27888__auto____1;
return figwheel$client$file_reloading$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__))
})();
var state__27984__auto__ = (function (){var statearr_30338 = f__27983__auto__.call(null);
(statearr_30338[(6)] = c__27982__auto__);

return statearr_30338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__))
);

return c__27982__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__30360 = arguments.length;
switch (G__30360) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30362,callback){
var map__30363 = p__30362;
var map__30363__$1 = (((((!((map__30363 == null))))?(((((map__30363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30363):map__30363);
var file_msg = map__30363__$1;
var namespace = cljs.core.get.call(null,map__30363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30363,map__30363__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30363,map__30363__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30365){
var map__30366 = p__30365;
var map__30366__$1 = (((((!((map__30366 == null))))?(((((map__30366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30366):map__30366);
var file_msg = map__30366__$1;
var namespace = cljs.core.get.call(null,map__30366__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30368){
var map__30369 = p__30368;
var map__30369__$1 = (((((!((map__30369 == null))))?(((((map__30369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30369):map__30369);
var file_msg = map__30369__$1;
var namespace = cljs.core.get.call(null,map__30369__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30371,callback){
var map__30372 = p__30371;
var map__30372__$1 = (((((!((map__30372 == null))))?(((((map__30372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30372):map__30372);
var file_msg = map__30372__$1;
var request_url = cljs.core.get.call(null,map__30372__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30372__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27982__auto___30422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___30422,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___30422,out){
return (function (state_30407){
var state_val_30408 = (state_30407[(1)]);
if((state_val_30408 === (1))){
var inst_30381 = cljs.core.seq.call(null,files);
var inst_30382 = cljs.core.first.call(null,inst_30381);
var inst_30383 = cljs.core.next.call(null,inst_30381);
var inst_30384 = files;
var state_30407__$1 = (function (){var statearr_30409 = state_30407;
(statearr_30409[(7)] = inst_30382);

(statearr_30409[(8)] = inst_30384);

(statearr_30409[(9)] = inst_30383);

return statearr_30409;
})();
var statearr_30410_30423 = state_30407__$1;
(statearr_30410_30423[(2)] = null);

(statearr_30410_30423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (2))){
var inst_30390 = (state_30407[(10)]);
var inst_30384 = (state_30407[(8)]);
var inst_30389 = cljs.core.seq.call(null,inst_30384);
var inst_30390__$1 = cljs.core.first.call(null,inst_30389);
var inst_30391 = cljs.core.next.call(null,inst_30389);
var inst_30392 = (inst_30390__$1 == null);
var inst_30393 = cljs.core.not.call(null,inst_30392);
var state_30407__$1 = (function (){var statearr_30411 = state_30407;
(statearr_30411[(10)] = inst_30390__$1);

(statearr_30411[(11)] = inst_30391);

return statearr_30411;
})();
if(inst_30393){
var statearr_30412_30424 = state_30407__$1;
(statearr_30412_30424[(1)] = (4));

} else {
var statearr_30413_30425 = state_30407__$1;
(statearr_30413_30425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (3))){
var inst_30405 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30407__$1,inst_30405);
} else {
if((state_val_30408 === (4))){
var inst_30390 = (state_30407[(10)]);
var inst_30395 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30390);
var state_30407__$1 = state_30407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30407__$1,(7),inst_30395);
} else {
if((state_val_30408 === (5))){
var inst_30401 = cljs.core.async.close_BANG_.call(null,out);
var state_30407__$1 = state_30407;
var statearr_30414_30426 = state_30407__$1;
(statearr_30414_30426[(2)] = inst_30401);

(statearr_30414_30426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (6))){
var inst_30403 = (state_30407[(2)]);
var state_30407__$1 = state_30407;
var statearr_30415_30427 = state_30407__$1;
(statearr_30415_30427[(2)] = inst_30403);

(statearr_30415_30427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30408 === (7))){
var inst_30391 = (state_30407[(11)]);
var inst_30397 = (state_30407[(2)]);
var inst_30398 = cljs.core.async.put_BANG_.call(null,out,inst_30397);
var inst_30384 = inst_30391;
var state_30407__$1 = (function (){var statearr_30416 = state_30407;
(statearr_30416[(12)] = inst_30398);

(statearr_30416[(8)] = inst_30384);

return statearr_30416;
})();
var statearr_30417_30428 = state_30407__$1;
(statearr_30417_30428[(2)] = null);

(statearr_30417_30428[(1)] = (2));


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
});})(c__27982__auto___30422,out))
;
return ((function (switch__27887__auto__,c__27982__auto___30422,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0 = (function (){
var statearr_30418 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30418[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__);

(statearr_30418[(1)] = (1));

return statearr_30418;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1 = (function (state_30407){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_30407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e30419){if((e30419 instanceof Object)){
var ex__27891__auto__ = e30419;
var statearr_30420_30429 = state_30407;
(statearr_30420_30429[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30430 = state_30407;
state_30407 = G__30430;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__ = function(state_30407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1.call(this,state_30407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___30422,out))
})();
var state__27984__auto__ = (function (){var statearr_30421 = f__27983__auto__.call(null);
(statearr_30421[(6)] = c__27982__auto___30422);

return statearr_30421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___30422,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30431,opts){
var map__30432 = p__30431;
var map__30432__$1 = (((((!((map__30432 == null))))?(((((map__30432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30432.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30432):map__30432);
var eval_body = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30432__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30434){var e = e30434;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30435_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30435_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30436){
var vec__30437 = p__30436;
var k = cljs.core.nth.call(null,vec__30437,(0),null);
var v = cljs.core.nth.call(null,vec__30437,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30440){
var vec__30441 = p__30440;
var k = cljs.core.nth.call(null,vec__30441,(0),null);
var v = cljs.core.nth.call(null,vec__30441,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30447,p__30448){
var map__30449 = p__30447;
var map__30449__$1 = (((((!((map__30449 == null))))?(((((map__30449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30449):map__30449);
var opts = map__30449__$1;
var before_jsload = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30449__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30450 = p__30448;
var map__30450__$1 = (((((!((map__30450 == null))))?(((((map__30450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30450):map__30450);
var msg = map__30450__$1;
var files = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30450__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30604){
var state_val_30605 = (state_30604[(1)]);
if((state_val_30605 === (7))){
var inst_30467 = (state_30604[(7)]);
var inst_30465 = (state_30604[(8)]);
var inst_30466 = (state_30604[(9)]);
var inst_30464 = (state_30604[(10)]);
var inst_30472 = cljs.core._nth.call(null,inst_30465,inst_30467);
var inst_30473 = figwheel.client.file_reloading.eval_body.call(null,inst_30472,opts);
var inst_30474 = (inst_30467 + (1));
var tmp30606 = inst_30465;
var tmp30607 = inst_30466;
var tmp30608 = inst_30464;
var inst_30464__$1 = tmp30608;
var inst_30465__$1 = tmp30606;
var inst_30466__$1 = tmp30607;
var inst_30467__$1 = inst_30474;
var state_30604__$1 = (function (){var statearr_30609 = state_30604;
(statearr_30609[(7)] = inst_30467__$1);

(statearr_30609[(11)] = inst_30473);

(statearr_30609[(8)] = inst_30465__$1);

(statearr_30609[(9)] = inst_30466__$1);

(statearr_30609[(10)] = inst_30464__$1);

return statearr_30609;
})();
var statearr_30610_30693 = state_30604__$1;
(statearr_30610_30693[(2)] = null);

(statearr_30610_30693[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (20))){
var inst_30507 = (state_30604[(12)]);
var inst_30515 = figwheel.client.file_reloading.sort_files.call(null,inst_30507);
var state_30604__$1 = state_30604;
var statearr_30611_30694 = state_30604__$1;
(statearr_30611_30694[(2)] = inst_30515);

(statearr_30611_30694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (27))){
var state_30604__$1 = state_30604;
var statearr_30612_30695 = state_30604__$1;
(statearr_30612_30695[(2)] = null);

(statearr_30612_30695[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (1))){
var inst_30456 = (state_30604[(13)]);
var inst_30453 = before_jsload.call(null,files);
var inst_30454 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30455 = (function (){return ((function (inst_30456,inst_30453,inst_30454,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30444_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30444_SHARP_);
});
;})(inst_30456,inst_30453,inst_30454,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30456__$1 = cljs.core.filter.call(null,inst_30455,files);
var inst_30457 = cljs.core.not_empty.call(null,inst_30456__$1);
var state_30604__$1 = (function (){var statearr_30613 = state_30604;
(statearr_30613[(14)] = inst_30453);

(statearr_30613[(15)] = inst_30454);

(statearr_30613[(13)] = inst_30456__$1);

return statearr_30613;
})();
if(cljs.core.truth_(inst_30457)){
var statearr_30614_30696 = state_30604__$1;
(statearr_30614_30696[(1)] = (2));

} else {
var statearr_30615_30697 = state_30604__$1;
(statearr_30615_30697[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (24))){
var state_30604__$1 = state_30604;
var statearr_30616_30698 = state_30604__$1;
(statearr_30616_30698[(2)] = null);

(statearr_30616_30698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (39))){
var inst_30557 = (state_30604[(16)]);
var state_30604__$1 = state_30604;
var statearr_30617_30699 = state_30604__$1;
(statearr_30617_30699[(2)] = inst_30557);

(statearr_30617_30699[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (46))){
var inst_30599 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30618_30700 = state_30604__$1;
(statearr_30618_30700[(2)] = inst_30599);

(statearr_30618_30700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (4))){
var inst_30501 = (state_30604[(2)]);
var inst_30502 = cljs.core.List.EMPTY;
var inst_30503 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30502);
var inst_30504 = (function (){return ((function (inst_30501,inst_30502,inst_30503,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30445_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30445_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30445_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30445_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_30501,inst_30502,inst_30503,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30505 = cljs.core.filter.call(null,inst_30504,files);
var inst_30506 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30507 = cljs.core.concat.call(null,inst_30505,inst_30506);
var state_30604__$1 = (function (){var statearr_30619 = state_30604;
(statearr_30619[(17)] = inst_30503);

(statearr_30619[(18)] = inst_30501);

(statearr_30619[(12)] = inst_30507);

return statearr_30619;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30620_30701 = state_30604__$1;
(statearr_30620_30701[(1)] = (16));

} else {
var statearr_30621_30702 = state_30604__$1;
(statearr_30621_30702[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (15))){
var inst_30491 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30622_30703 = state_30604__$1;
(statearr_30622_30703[(2)] = inst_30491);

(statearr_30622_30703[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (21))){
var inst_30517 = (state_30604[(19)]);
var inst_30517__$1 = (state_30604[(2)]);
var inst_30518 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30517__$1);
var state_30604__$1 = (function (){var statearr_30623 = state_30604;
(statearr_30623[(19)] = inst_30517__$1);

return statearr_30623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30604__$1,(22),inst_30518);
} else {
if((state_val_30605 === (31))){
var inst_30602 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30604__$1,inst_30602);
} else {
if((state_val_30605 === (32))){
var inst_30557 = (state_30604[(16)]);
var inst_30562 = inst_30557.cljs$lang$protocol_mask$partition0$;
var inst_30563 = (inst_30562 & (64));
var inst_30564 = inst_30557.cljs$core$ISeq$;
var inst_30565 = (cljs.core.PROTOCOL_SENTINEL === inst_30564);
var inst_30566 = ((inst_30563) || (inst_30565));
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30566)){
var statearr_30624_30704 = state_30604__$1;
(statearr_30624_30704[(1)] = (35));

} else {
var statearr_30625_30705 = state_30604__$1;
(statearr_30625_30705[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (40))){
var inst_30579 = (state_30604[(20)]);
var inst_30578 = (state_30604[(2)]);
var inst_30579__$1 = cljs.core.get.call(null,inst_30578,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30580 = cljs.core.get.call(null,inst_30578,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30581 = cljs.core.not_empty.call(null,inst_30579__$1);
var state_30604__$1 = (function (){var statearr_30626 = state_30604;
(statearr_30626[(21)] = inst_30580);

(statearr_30626[(20)] = inst_30579__$1);

return statearr_30626;
})();
if(cljs.core.truth_(inst_30581)){
var statearr_30627_30706 = state_30604__$1;
(statearr_30627_30706[(1)] = (41));

} else {
var statearr_30628_30707 = state_30604__$1;
(statearr_30628_30707[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (33))){
var state_30604__$1 = state_30604;
var statearr_30629_30708 = state_30604__$1;
(statearr_30629_30708[(2)] = false);

(statearr_30629_30708[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (13))){
var inst_30477 = (state_30604[(22)]);
var inst_30481 = cljs.core.chunk_first.call(null,inst_30477);
var inst_30482 = cljs.core.chunk_rest.call(null,inst_30477);
var inst_30483 = cljs.core.count.call(null,inst_30481);
var inst_30464 = inst_30482;
var inst_30465 = inst_30481;
var inst_30466 = inst_30483;
var inst_30467 = (0);
var state_30604__$1 = (function (){var statearr_30630 = state_30604;
(statearr_30630[(7)] = inst_30467);

(statearr_30630[(8)] = inst_30465);

(statearr_30630[(9)] = inst_30466);

(statearr_30630[(10)] = inst_30464);

return statearr_30630;
})();
var statearr_30631_30709 = state_30604__$1;
(statearr_30631_30709[(2)] = null);

(statearr_30631_30709[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (22))){
var inst_30517 = (state_30604[(19)]);
var inst_30520 = (state_30604[(23)]);
var inst_30521 = (state_30604[(24)]);
var inst_30525 = (state_30604[(25)]);
var inst_30520__$1 = (state_30604[(2)]);
var inst_30521__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30520__$1);
var inst_30522 = (function (){var all_files = inst_30517;
var res_SINGLEQUOTE_ = inst_30520__$1;
var res = inst_30521__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30517,inst_30520,inst_30521,inst_30525,inst_30520__$1,inst_30521__$1,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30446_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30446_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30517,inst_30520,inst_30521,inst_30525,inst_30520__$1,inst_30521__$1,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30523 = cljs.core.filter.call(null,inst_30522,inst_30520__$1);
var inst_30524 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30525__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30524);
var inst_30526 = cljs.core.not_empty.call(null,inst_30525__$1);
var state_30604__$1 = (function (){var statearr_30632 = state_30604;
(statearr_30632[(26)] = inst_30523);

(statearr_30632[(23)] = inst_30520__$1);

(statearr_30632[(24)] = inst_30521__$1);

(statearr_30632[(25)] = inst_30525__$1);

return statearr_30632;
})();
if(cljs.core.truth_(inst_30526)){
var statearr_30633_30710 = state_30604__$1;
(statearr_30633_30710[(1)] = (23));

} else {
var statearr_30634_30711 = state_30604__$1;
(statearr_30634_30711[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (36))){
var state_30604__$1 = state_30604;
var statearr_30635_30712 = state_30604__$1;
(statearr_30635_30712[(2)] = false);

(statearr_30635_30712[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (41))){
var inst_30579 = (state_30604[(20)]);
var inst_30583 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30584 = cljs.core.map.call(null,inst_30583,inst_30579);
var inst_30585 = cljs.core.pr_str.call(null,inst_30584);
var inst_30586 = ["figwheel-no-load meta-data: ",inst_30585].join('');
var inst_30587 = figwheel.client.utils.log.call(null,inst_30586);
var state_30604__$1 = state_30604;
var statearr_30636_30713 = state_30604__$1;
(statearr_30636_30713[(2)] = inst_30587);

(statearr_30636_30713[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (43))){
var inst_30580 = (state_30604[(21)]);
var inst_30590 = (state_30604[(2)]);
var inst_30591 = cljs.core.not_empty.call(null,inst_30580);
var state_30604__$1 = (function (){var statearr_30637 = state_30604;
(statearr_30637[(27)] = inst_30590);

return statearr_30637;
})();
if(cljs.core.truth_(inst_30591)){
var statearr_30638_30714 = state_30604__$1;
(statearr_30638_30714[(1)] = (44));

} else {
var statearr_30639_30715 = state_30604__$1;
(statearr_30639_30715[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (29))){
var inst_30517 = (state_30604[(19)]);
var inst_30557 = (state_30604[(16)]);
var inst_30523 = (state_30604[(26)]);
var inst_30520 = (state_30604[(23)]);
var inst_30521 = (state_30604[(24)]);
var inst_30525 = (state_30604[(25)]);
var inst_30553 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30556 = (function (){var all_files = inst_30517;
var res_SINGLEQUOTE_ = inst_30520;
var res = inst_30521;
var files_not_loaded = inst_30523;
var dependencies_that_loaded = inst_30525;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30557,inst_30523,inst_30520,inst_30521,inst_30525,inst_30553,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30555){
var map__30640 = p__30555;
var map__30640__$1 = (((((!((map__30640 == null))))?(((((map__30640.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30640.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30640):map__30640);
var namespace = cljs.core.get.call(null,map__30640__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30557,inst_30523,inst_30520,inst_30521,inst_30525,inst_30553,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30557__$1 = cljs.core.group_by.call(null,inst_30556,inst_30523);
var inst_30559 = (inst_30557__$1 == null);
var inst_30560 = cljs.core.not.call(null,inst_30559);
var state_30604__$1 = (function (){var statearr_30642 = state_30604;
(statearr_30642[(16)] = inst_30557__$1);

(statearr_30642[(28)] = inst_30553);

return statearr_30642;
})();
if(inst_30560){
var statearr_30643_30716 = state_30604__$1;
(statearr_30643_30716[(1)] = (32));

} else {
var statearr_30644_30717 = state_30604__$1;
(statearr_30644_30717[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (44))){
var inst_30580 = (state_30604[(21)]);
var inst_30593 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30580);
var inst_30594 = cljs.core.pr_str.call(null,inst_30593);
var inst_30595 = ["not required: ",inst_30594].join('');
var inst_30596 = figwheel.client.utils.log.call(null,inst_30595);
var state_30604__$1 = state_30604;
var statearr_30645_30718 = state_30604__$1;
(statearr_30645_30718[(2)] = inst_30596);

(statearr_30645_30718[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (6))){
var inst_30498 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30646_30719 = state_30604__$1;
(statearr_30646_30719[(2)] = inst_30498);

(statearr_30646_30719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (28))){
var inst_30523 = (state_30604[(26)]);
var inst_30550 = (state_30604[(2)]);
var inst_30551 = cljs.core.not_empty.call(null,inst_30523);
var state_30604__$1 = (function (){var statearr_30647 = state_30604;
(statearr_30647[(29)] = inst_30550);

return statearr_30647;
})();
if(cljs.core.truth_(inst_30551)){
var statearr_30648_30720 = state_30604__$1;
(statearr_30648_30720[(1)] = (29));

} else {
var statearr_30649_30721 = state_30604__$1;
(statearr_30649_30721[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (25))){
var inst_30521 = (state_30604[(24)]);
var inst_30537 = (state_30604[(2)]);
var inst_30538 = cljs.core.not_empty.call(null,inst_30521);
var state_30604__$1 = (function (){var statearr_30650 = state_30604;
(statearr_30650[(30)] = inst_30537);

return statearr_30650;
})();
if(cljs.core.truth_(inst_30538)){
var statearr_30651_30722 = state_30604__$1;
(statearr_30651_30722[(1)] = (26));

} else {
var statearr_30652_30723 = state_30604__$1;
(statearr_30652_30723[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (34))){
var inst_30573 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30573)){
var statearr_30653_30724 = state_30604__$1;
(statearr_30653_30724[(1)] = (38));

} else {
var statearr_30654_30725 = state_30604__$1;
(statearr_30654_30725[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (17))){
var state_30604__$1 = state_30604;
var statearr_30655_30726 = state_30604__$1;
(statearr_30655_30726[(2)] = recompile_dependents);

(statearr_30655_30726[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (3))){
var state_30604__$1 = state_30604;
var statearr_30656_30727 = state_30604__$1;
(statearr_30656_30727[(2)] = null);

(statearr_30656_30727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (12))){
var inst_30494 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30657_30728 = state_30604__$1;
(statearr_30657_30728[(2)] = inst_30494);

(statearr_30657_30728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (2))){
var inst_30456 = (state_30604[(13)]);
var inst_30463 = cljs.core.seq.call(null,inst_30456);
var inst_30464 = inst_30463;
var inst_30465 = null;
var inst_30466 = (0);
var inst_30467 = (0);
var state_30604__$1 = (function (){var statearr_30658 = state_30604;
(statearr_30658[(7)] = inst_30467);

(statearr_30658[(8)] = inst_30465);

(statearr_30658[(9)] = inst_30466);

(statearr_30658[(10)] = inst_30464);

return statearr_30658;
})();
var statearr_30659_30729 = state_30604__$1;
(statearr_30659_30729[(2)] = null);

(statearr_30659_30729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (23))){
var inst_30517 = (state_30604[(19)]);
var inst_30523 = (state_30604[(26)]);
var inst_30520 = (state_30604[(23)]);
var inst_30521 = (state_30604[(24)]);
var inst_30525 = (state_30604[(25)]);
var inst_30528 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30530 = (function (){var all_files = inst_30517;
var res_SINGLEQUOTE_ = inst_30520;
var res = inst_30521;
var files_not_loaded = inst_30523;
var dependencies_that_loaded = inst_30525;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30528,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30529){
var map__30660 = p__30529;
var map__30660__$1 = (((((!((map__30660 == null))))?(((((map__30660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);
var request_url = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30528,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30531 = cljs.core.reverse.call(null,inst_30525);
var inst_30532 = cljs.core.map.call(null,inst_30530,inst_30531);
var inst_30533 = cljs.core.pr_str.call(null,inst_30532);
var inst_30534 = figwheel.client.utils.log.call(null,inst_30533);
var state_30604__$1 = (function (){var statearr_30662 = state_30604;
(statearr_30662[(31)] = inst_30528);

return statearr_30662;
})();
var statearr_30663_30730 = state_30604__$1;
(statearr_30663_30730[(2)] = inst_30534);

(statearr_30663_30730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (35))){
var state_30604__$1 = state_30604;
var statearr_30664_30731 = state_30604__$1;
(statearr_30664_30731[(2)] = true);

(statearr_30664_30731[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (19))){
var inst_30507 = (state_30604[(12)]);
var inst_30513 = figwheel.client.file_reloading.expand_files.call(null,inst_30507);
var state_30604__$1 = state_30604;
var statearr_30665_30732 = state_30604__$1;
(statearr_30665_30732[(2)] = inst_30513);

(statearr_30665_30732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (11))){
var state_30604__$1 = state_30604;
var statearr_30666_30733 = state_30604__$1;
(statearr_30666_30733[(2)] = null);

(statearr_30666_30733[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (9))){
var inst_30496 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30667_30734 = state_30604__$1;
(statearr_30667_30734[(2)] = inst_30496);

(statearr_30667_30734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (5))){
var inst_30467 = (state_30604[(7)]);
var inst_30466 = (state_30604[(9)]);
var inst_30469 = (inst_30467 < inst_30466);
var inst_30470 = inst_30469;
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30470)){
var statearr_30668_30735 = state_30604__$1;
(statearr_30668_30735[(1)] = (7));

} else {
var statearr_30669_30736 = state_30604__$1;
(statearr_30669_30736[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (14))){
var inst_30477 = (state_30604[(22)]);
var inst_30486 = cljs.core.first.call(null,inst_30477);
var inst_30487 = figwheel.client.file_reloading.eval_body.call(null,inst_30486,opts);
var inst_30488 = cljs.core.next.call(null,inst_30477);
var inst_30464 = inst_30488;
var inst_30465 = null;
var inst_30466 = (0);
var inst_30467 = (0);
var state_30604__$1 = (function (){var statearr_30670 = state_30604;
(statearr_30670[(7)] = inst_30467);

(statearr_30670[(32)] = inst_30487);

(statearr_30670[(8)] = inst_30465);

(statearr_30670[(9)] = inst_30466);

(statearr_30670[(10)] = inst_30464);

return statearr_30670;
})();
var statearr_30671_30737 = state_30604__$1;
(statearr_30671_30737[(2)] = null);

(statearr_30671_30737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (45))){
var state_30604__$1 = state_30604;
var statearr_30672_30738 = state_30604__$1;
(statearr_30672_30738[(2)] = null);

(statearr_30672_30738[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (26))){
var inst_30517 = (state_30604[(19)]);
var inst_30523 = (state_30604[(26)]);
var inst_30520 = (state_30604[(23)]);
var inst_30521 = (state_30604[(24)]);
var inst_30525 = (state_30604[(25)]);
var inst_30540 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30542 = (function (){var all_files = inst_30517;
var res_SINGLEQUOTE_ = inst_30520;
var res = inst_30521;
var files_not_loaded = inst_30523;
var dependencies_that_loaded = inst_30525;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30540,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30541){
var map__30673 = p__30541;
var map__30673__$1 = (((((!((map__30673 == null))))?(((((map__30673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30673):map__30673);
var namespace = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30540,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30543 = cljs.core.map.call(null,inst_30542,inst_30521);
var inst_30544 = cljs.core.pr_str.call(null,inst_30543);
var inst_30545 = figwheel.client.utils.log.call(null,inst_30544);
var inst_30546 = (function (){var all_files = inst_30517;
var res_SINGLEQUOTE_ = inst_30520;
var res = inst_30521;
var files_not_loaded = inst_30523;
var dependencies_that_loaded = inst_30525;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30540,inst_30542,inst_30543,inst_30544,inst_30545,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30517,inst_30523,inst_30520,inst_30521,inst_30525,inst_30540,inst_30542,inst_30543,inst_30544,inst_30545,state_val_30605,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30547 = setTimeout(inst_30546,(10));
var state_30604__$1 = (function (){var statearr_30675 = state_30604;
(statearr_30675[(33)] = inst_30545);

(statearr_30675[(34)] = inst_30540);

return statearr_30675;
})();
var statearr_30676_30739 = state_30604__$1;
(statearr_30676_30739[(2)] = inst_30547);

(statearr_30676_30739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (16))){
var state_30604__$1 = state_30604;
var statearr_30677_30740 = state_30604__$1;
(statearr_30677_30740[(2)] = reload_dependents);

(statearr_30677_30740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (38))){
var inst_30557 = (state_30604[(16)]);
var inst_30575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30557);
var state_30604__$1 = state_30604;
var statearr_30678_30741 = state_30604__$1;
(statearr_30678_30741[(2)] = inst_30575);

(statearr_30678_30741[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (30))){
var state_30604__$1 = state_30604;
var statearr_30679_30742 = state_30604__$1;
(statearr_30679_30742[(2)] = null);

(statearr_30679_30742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (10))){
var inst_30477 = (state_30604[(22)]);
var inst_30479 = cljs.core.chunked_seq_QMARK_.call(null,inst_30477);
var state_30604__$1 = state_30604;
if(inst_30479){
var statearr_30680_30743 = state_30604__$1;
(statearr_30680_30743[(1)] = (13));

} else {
var statearr_30681_30744 = state_30604__$1;
(statearr_30681_30744[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (18))){
var inst_30511 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
if(cljs.core.truth_(inst_30511)){
var statearr_30682_30745 = state_30604__$1;
(statearr_30682_30745[(1)] = (19));

} else {
var statearr_30683_30746 = state_30604__$1;
(statearr_30683_30746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (42))){
var state_30604__$1 = state_30604;
var statearr_30684_30747 = state_30604__$1;
(statearr_30684_30747[(2)] = null);

(statearr_30684_30747[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (37))){
var inst_30570 = (state_30604[(2)]);
var state_30604__$1 = state_30604;
var statearr_30685_30748 = state_30604__$1;
(statearr_30685_30748[(2)] = inst_30570);

(statearr_30685_30748[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30605 === (8))){
var inst_30477 = (state_30604[(22)]);
var inst_30464 = (state_30604[(10)]);
var inst_30477__$1 = cljs.core.seq.call(null,inst_30464);
var state_30604__$1 = (function (){var statearr_30686 = state_30604;
(statearr_30686[(22)] = inst_30477__$1);

return statearr_30686;
})();
if(inst_30477__$1){
var statearr_30687_30749 = state_30604__$1;
(statearr_30687_30749[(1)] = (10));

} else {
var statearr_30688_30750 = state_30604__$1;
(statearr_30688_30750[(1)] = (11));

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
});})(c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27887__auto__,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0 = (function (){
var statearr_30689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30689[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__);

(statearr_30689[(1)] = (1));

return statearr_30689;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1 = (function (state_30604){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_30604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e30690){if((e30690 instanceof Object)){
var ex__27891__auto__ = e30690;
var statearr_30691_30751 = state_30604;
(statearr_30691_30751[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30752 = state_30604;
state_30604 = G__30752;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__ = function(state_30604){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1.call(this,state_30604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27984__auto__ = (function (){var statearr_30692 = f__27983__auto__.call(null);
(statearr_30692[(6)] = c__27982__auto__);

return statearr_30692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__,map__30449,map__30449__$1,opts,before_jsload,on_jsload,reload_dependents,map__30450,map__30450__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27982__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30755,link){
var map__30756 = p__30755;
var map__30756__$1 = (((((!((map__30756 == null))))?(((((map__30756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30756.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30756):map__30756);
var file = cljs.core.get.call(null,map__30756__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__30756,map__30756__$1,file){
return (function (p1__30753_SHARP_,p2__30754_SHARP_){
if(cljs.core._EQ_.call(null,p1__30753_SHARP_,p2__30754_SHARP_)){
return p1__30753_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__30756,map__30756__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30759){
var map__30760 = p__30759;
var map__30760__$1 = (((((!((map__30760 == null))))?(((((map__30760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30760):map__30760);
var match_length = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30760__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30758_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30758_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30762_SHARP_,p2__30763_SHARP_){
return cljs.core.assoc.call(null,p1__30762_SHARP_,cljs.core.get.call(null,p2__30763_SHARP_,key),p2__30763_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30764 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30764);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30764);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30765,p__30766){
var map__30767 = p__30765;
var map__30767__$1 = (((((!((map__30767 == null))))?(((((map__30767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30767):map__30767);
var on_cssload = cljs.core.get.call(null,map__30767__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30768 = p__30766;
var map__30768__$1 = (((((!((map__30768 == null))))?(((((map__30768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30768):map__30768);
var files_msg = map__30768__$1;
var files = cljs.core.get.call(null,map__30768__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1561537545553
