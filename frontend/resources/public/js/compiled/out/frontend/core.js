// Compiled by ClojureScript 1.10.520 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('frontend.events');
goog.require('frontend.views');
goog.require('frontend.config');
frontend.core.dev_setup = (function frontend$core$dev_setup(){
if(frontend.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
frontend.core.mount_root = (function frontend$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.views.app], null),document.getElementById("app"));
});
frontend.core.init = (function frontend$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-movies","get-movies",1492262093)], null));

frontend.core.dev_setup.call(null);

return frontend.core.mount_root.call(null);
});
goog.exportSymbol('frontend.core.init', frontend.core.init);

//# sourceMappingURL=core.js.map?rel=1561552964669
