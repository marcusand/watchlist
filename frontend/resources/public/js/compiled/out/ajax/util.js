// Compiled by ClojureScript 1.10.520 {}
goog.provide('ajax.util');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.util.throw_error = (function ajax$util$throw_error(args){

throw (new Error(cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)));
});
ajax.util.get_content_type = (function ajax$util$get_content_type(response){
var or__4131__auto__ = ajax.protocols._get_response_header.call(null,response,"Content-Type");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
});
ajax.util.to_utf8_writer = (function ajax$util$to_utf8_writer(to_str){

return to_str;
});

//# sourceMappingURL=util.js.map?rel=1561537536476
