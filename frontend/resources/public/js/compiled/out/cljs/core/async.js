// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28042 = arguments.length;
switch (G__28042) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28043 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28043 = (function (f,blockable,meta28044){
this.f = f;
this.blockable = blockable;
this.meta28044 = meta28044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28045,meta28044__$1){
var self__ = this;
var _28045__$1 = this;
return (new cljs.core.async.t_cljs$core$async28043(self__.f,self__.blockable,meta28044__$1));
});

cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28045){
var self__ = this;
var _28045__$1 = this;
return self__.meta28044;
});

cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async28043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async28043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28044","meta28044",-1884026311,null)], null);
});

cljs.core.async.t_cljs$core$async28043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28043";

cljs.core.async.t_cljs$core$async28043.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28043");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28043.
 */
cljs.core.async.__GT_t_cljs$core$async28043 = (function cljs$core$async$__GT_t_cljs$core$async28043(f__$1,blockable__$1,meta28044){
return (new cljs.core.async.t_cljs$core$async28043(f__$1,blockable__$1,meta28044));
});

}

return (new cljs.core.async.t_cljs$core$async28043(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__28049 = arguments.length;
switch (G__28049) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__28052 = arguments.length;
switch (G__28052) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__28055 = arguments.length;
switch (G__28055) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_28057 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_28057);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_28057,ret){
return (function (){
return fn1.call(null,val_28057);
});})(val_28057,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__28059 = arguments.length;
switch (G__28059) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___28061 = n;
var x_28062 = (0);
while(true){
if((x_28062 < n__4607__auto___28061)){
(a[x_28062] = (0));

var G__28063 = (x_28062 + (1));
x_28062 = G__28063;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__28064 = (i + (1));
i = G__28064;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28065 = (function (flag,meta28066){
this.flag = flag;
this.meta28066 = meta28066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_28067,meta28066__$1){
var self__ = this;
var _28067__$1 = this;
return (new cljs.core.async.t_cljs$core$async28065(self__.flag,meta28066__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_28067){
var self__ = this;
var _28067__$1 = this;
return self__.meta28066;
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta28066","meta28066",105537334,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async28065.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28065.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28065";

cljs.core.async.t_cljs$core$async28065.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28065");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28065.
 */
cljs.core.async.__GT_t_cljs$core$async28065 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async28065(flag__$1,meta28066){
return (new cljs.core.async.t_cljs$core$async28065(flag__$1,meta28066));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async28065(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28068 = (function (flag,cb,meta28069){
this.flag = flag;
this.cb = cb;
this.meta28069 = meta28069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28070,meta28069__$1){
var self__ = this;
var _28070__$1 = this;
return (new cljs.core.async.t_cljs$core$async28068(self__.flag,self__.cb,meta28069__$1));
});

cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28070){
var self__ = this;
var _28070__$1 = this;
return self__.meta28069;
});

cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async28068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async28068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta28069","meta28069",-1602047627,null)], null);
});

cljs.core.async.t_cljs$core$async28068.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28068";

cljs.core.async.t_cljs$core$async28068.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28068");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28068.
 */
cljs.core.async.__GT_t_cljs$core$async28068 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async28068(flag__$1,cb__$1,meta28069){
return (new cljs.core.async.t_cljs$core$async28068(flag__$1,cb__$1,meta28069));
});

}

return (new cljs.core.async.t_cljs$core$async28068(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28071_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28071_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__28072_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28072_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__28073 = (i + (1));
i = G__28073;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28079 = arguments.length;
var i__4731__auto___28080 = (0);
while(true){
if((i__4731__auto___28080 < len__4730__auto___28079)){
args__4736__auto__.push((arguments[i__4731__auto___28080]));

var G__28081 = (i__4731__auto___28080 + (1));
i__4731__auto___28080 = G__28081;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__28076){
var map__28077 = p__28076;
var map__28077__$1 = (((((!((map__28077 == null))))?(((((map__28077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28077):map__28077);
var opts = map__28077__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq28074){
var G__28075 = cljs.core.first.call(null,seq28074);
var seq28074__$1 = cljs.core.next.call(null,seq28074);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28075,seq28074__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__28083 = arguments.length;
switch (G__28083) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27982__auto___28129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___28129){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___28129){
return (function (state_28107){
var state_val_28108 = (state_28107[(1)]);
if((state_val_28108 === (7))){
var inst_28103 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28109_28130 = state_28107__$1;
(statearr_28109_28130[(2)] = inst_28103);

(statearr_28109_28130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (1))){
var state_28107__$1 = state_28107;
var statearr_28110_28131 = state_28107__$1;
(statearr_28110_28131[(2)] = null);

(statearr_28110_28131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (4))){
var inst_28086 = (state_28107[(7)]);
var inst_28086__$1 = (state_28107[(2)]);
var inst_28087 = (inst_28086__$1 == null);
var state_28107__$1 = (function (){var statearr_28111 = state_28107;
(statearr_28111[(7)] = inst_28086__$1);

return statearr_28111;
})();
if(cljs.core.truth_(inst_28087)){
var statearr_28112_28132 = state_28107__$1;
(statearr_28112_28132[(1)] = (5));

} else {
var statearr_28113_28133 = state_28107__$1;
(statearr_28113_28133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (13))){
var state_28107__$1 = state_28107;
var statearr_28114_28134 = state_28107__$1;
(statearr_28114_28134[(2)] = null);

(statearr_28114_28134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (6))){
var inst_28086 = (state_28107[(7)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28107__$1,(11),to,inst_28086);
} else {
if((state_val_28108 === (3))){
var inst_28105 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28107__$1,inst_28105);
} else {
if((state_val_28108 === (12))){
var state_28107__$1 = state_28107;
var statearr_28115_28135 = state_28107__$1;
(statearr_28115_28135[(2)] = null);

(statearr_28115_28135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (2))){
var state_28107__$1 = state_28107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28107__$1,(4),from);
} else {
if((state_val_28108 === (11))){
var inst_28096 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
if(cljs.core.truth_(inst_28096)){
var statearr_28116_28136 = state_28107__$1;
(statearr_28116_28136[(1)] = (12));

} else {
var statearr_28117_28137 = state_28107__$1;
(statearr_28117_28137[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (9))){
var state_28107__$1 = state_28107;
var statearr_28118_28138 = state_28107__$1;
(statearr_28118_28138[(2)] = null);

(statearr_28118_28138[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (5))){
var state_28107__$1 = state_28107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28119_28139 = state_28107__$1;
(statearr_28119_28139[(1)] = (8));

} else {
var statearr_28120_28140 = state_28107__$1;
(statearr_28120_28140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (14))){
var inst_28101 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28121_28141 = state_28107__$1;
(statearr_28121_28141[(2)] = inst_28101);

(statearr_28121_28141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (10))){
var inst_28093 = (state_28107[(2)]);
var state_28107__$1 = state_28107;
var statearr_28122_28142 = state_28107__$1;
(statearr_28122_28142[(2)] = inst_28093);

(statearr_28122_28142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28108 === (8))){
var inst_28090 = cljs.core.async.close_BANG_.call(null,to);
var state_28107__$1 = state_28107;
var statearr_28123_28143 = state_28107__$1;
(statearr_28123_28143[(2)] = inst_28090);

(statearr_28123_28143[(1)] = (10));


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
});})(c__27982__auto___28129))
;
return ((function (switch__27887__auto__,c__27982__auto___28129){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_28124 = [null,null,null,null,null,null,null,null];
(statearr_28124[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_28124[(1)] = (1));

return statearr_28124;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_28107){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28125){if((e28125 instanceof Object)){
var ex__27891__auto__ = e28125;
var statearr_28126_28144 = state_28107;
(statearr_28126_28144[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28145 = state_28107;
state_28107 = G__28145;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_28107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_28107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___28129))
})();
var state__27984__auto__ = (function (){var statearr_28127 = f__27983__auto__.call(null);
(statearr_28127[(6)] = c__27982__auto___28129);

return statearr_28127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___28129))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28146){
var vec__28147 = p__28146;
var v = cljs.core.nth.call(null,vec__28147,(0),null);
var p = cljs.core.nth.call(null,vec__28147,(1),null);
var job = vec__28147;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27982__auto___28318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results){
return (function (state_28154){
var state_val_28155 = (state_28154[(1)]);
if((state_val_28155 === (1))){
var state_28154__$1 = state_28154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28154__$1,(2),res,v);
} else {
if((state_val_28155 === (2))){
var inst_28151 = (state_28154[(2)]);
var inst_28152 = cljs.core.async.close_BANG_.call(null,res);
var state_28154__$1 = (function (){var statearr_28156 = state_28154;
(statearr_28156[(7)] = inst_28151);

return statearr_28156;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28154__$1,inst_28152);
} else {
return null;
}
}
});})(c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results))
;
return ((function (switch__27887__auto__,c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_28157 = [null,null,null,null,null,null,null,null];
(statearr_28157[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__);

(statearr_28157[(1)] = (1));

return statearr_28157;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1 = (function (state_28154){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28158){if((e28158 instanceof Object)){
var ex__27891__auto__ = e28158;
var statearr_28159_28319 = state_28154;
(statearr_28159_28319[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28320 = state_28154;
state_28154 = G__28320;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = function(state_28154){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1.call(this,state_28154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results))
})();
var state__27984__auto__ = (function (){var statearr_28160 = f__27983__auto__.call(null);
(statearr_28160[(6)] = c__27982__auto___28318);

return statearr_28160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___28318,res,vec__28147,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28161){
var vec__28162 = p__28161;
var v = cljs.core.nth.call(null,vec__28162,(0),null);
var p = cljs.core.nth.call(null,vec__28162,(1),null);
var job = vec__28162;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___28321 = n;
var __28322 = (0);
while(true){
if((__28322 < n__4607__auto___28321)){
var G__28165_28323 = type;
var G__28165_28324__$1 = (((G__28165_28323 instanceof cljs.core.Keyword))?G__28165_28323.fqn:null);
switch (G__28165_28324__$1) {
case "compute":
var c__27982__auto___28326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28322,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (__28322,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function (state_28178){
var state_val_28179 = (state_28178[(1)]);
if((state_val_28179 === (1))){
var state_28178__$1 = state_28178;
var statearr_28180_28327 = state_28178__$1;
(statearr_28180_28327[(2)] = null);

(statearr_28180_28327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (2))){
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28178__$1,(4),jobs);
} else {
if((state_val_28179 === (3))){
var inst_28176 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28178__$1,inst_28176);
} else {
if((state_val_28179 === (4))){
var inst_28168 = (state_28178[(2)]);
var inst_28169 = process.call(null,inst_28168);
var state_28178__$1 = state_28178;
if(cljs.core.truth_(inst_28169)){
var statearr_28181_28328 = state_28178__$1;
(statearr_28181_28328[(1)] = (5));

} else {
var statearr_28182_28329 = state_28178__$1;
(statearr_28182_28329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (5))){
var state_28178__$1 = state_28178;
var statearr_28183_28330 = state_28178__$1;
(statearr_28183_28330[(2)] = null);

(statearr_28183_28330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (6))){
var state_28178__$1 = state_28178;
var statearr_28184_28331 = state_28178__$1;
(statearr_28184_28331[(2)] = null);

(statearr_28184_28331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28179 === (7))){
var inst_28174 = (state_28178[(2)]);
var state_28178__$1 = state_28178;
var statearr_28185_28332 = state_28178__$1;
(statearr_28185_28332[(2)] = inst_28174);

(statearr_28185_28332[(1)] = (3));


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
});})(__28322,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
;
return ((function (__28322,switch__27887__auto__,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_28186 = [null,null,null,null,null,null,null];
(statearr_28186[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__);

(statearr_28186[(1)] = (1));

return statearr_28186;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1 = (function (state_28178){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28187){if((e28187 instanceof Object)){
var ex__27891__auto__ = e28187;
var statearr_28188_28333 = state_28178;
(statearr_28188_28333[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28334 = state_28178;
state_28178 = G__28334;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = function(state_28178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1.call(this,state_28178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__;
})()
;})(__28322,switch__27887__auto__,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
})();
var state__27984__auto__ = (function (){var statearr_28189 = f__27983__auto__.call(null);
(statearr_28189[(6)] = c__27982__auto___28326);

return statearr_28189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(__28322,c__27982__auto___28326,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
);


break;
case "async":
var c__27982__auto___28335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28322,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (__28322,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function (state_28202){
var state_val_28203 = (state_28202[(1)]);
if((state_val_28203 === (1))){
var state_28202__$1 = state_28202;
var statearr_28204_28336 = state_28202__$1;
(statearr_28204_28336[(2)] = null);

(statearr_28204_28336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (2))){
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28202__$1,(4),jobs);
} else {
if((state_val_28203 === (3))){
var inst_28200 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28202__$1,inst_28200);
} else {
if((state_val_28203 === (4))){
var inst_28192 = (state_28202[(2)]);
var inst_28193 = async.call(null,inst_28192);
var state_28202__$1 = state_28202;
if(cljs.core.truth_(inst_28193)){
var statearr_28205_28337 = state_28202__$1;
(statearr_28205_28337[(1)] = (5));

} else {
var statearr_28206_28338 = state_28202__$1;
(statearr_28206_28338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (5))){
var state_28202__$1 = state_28202;
var statearr_28207_28339 = state_28202__$1;
(statearr_28207_28339[(2)] = null);

(statearr_28207_28339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (6))){
var state_28202__$1 = state_28202;
var statearr_28208_28340 = state_28202__$1;
(statearr_28208_28340[(2)] = null);

(statearr_28208_28340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28203 === (7))){
var inst_28198 = (state_28202[(2)]);
var state_28202__$1 = state_28202;
var statearr_28209_28341 = state_28202__$1;
(statearr_28209_28341[(2)] = inst_28198);

(statearr_28209_28341[(1)] = (3));


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
});})(__28322,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
;
return ((function (__28322,switch__27887__auto__,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_28210 = [null,null,null,null,null,null,null];
(statearr_28210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__);

(statearr_28210[(1)] = (1));

return statearr_28210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1 = (function (state_28202){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28211){if((e28211 instanceof Object)){
var ex__27891__auto__ = e28211;
var statearr_28212_28342 = state_28202;
(statearr_28212_28342[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28343 = state_28202;
state_28202 = G__28343;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = function(state_28202){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1.call(this,state_28202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__;
})()
;})(__28322,switch__27887__auto__,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
})();
var state__27984__auto__ = (function (){var statearr_28213 = f__27983__auto__.call(null);
(statearr_28213[(6)] = c__27982__auto___28335);

return statearr_28213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(__28322,c__27982__auto___28335,G__28165_28323,G__28165_28324__$1,n__4607__auto___28321,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__28165_28324__$1)].join('')));

}

var G__28344 = (__28322 + (1));
__28322 = G__28344;
continue;
} else {
}
break;
}

var c__27982__auto___28345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___28345,jobs,results,process,async){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___28345,jobs,results,process,async){
return (function (state_28235){
var state_val_28236 = (state_28235[(1)]);
if((state_val_28236 === (7))){
var inst_28231 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
var statearr_28237_28346 = state_28235__$1;
(statearr_28237_28346[(2)] = inst_28231);

(statearr_28237_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (1))){
var state_28235__$1 = state_28235;
var statearr_28238_28347 = state_28235__$1;
(statearr_28238_28347[(2)] = null);

(statearr_28238_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (4))){
var inst_28216 = (state_28235[(7)]);
var inst_28216__$1 = (state_28235[(2)]);
var inst_28217 = (inst_28216__$1 == null);
var state_28235__$1 = (function (){var statearr_28239 = state_28235;
(statearr_28239[(7)] = inst_28216__$1);

return statearr_28239;
})();
if(cljs.core.truth_(inst_28217)){
var statearr_28240_28348 = state_28235__$1;
(statearr_28240_28348[(1)] = (5));

} else {
var statearr_28241_28349 = state_28235__$1;
(statearr_28241_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (6))){
var inst_28221 = (state_28235[(8)]);
var inst_28216 = (state_28235[(7)]);
var inst_28221__$1 = cljs.core.async.chan.call(null,(1));
var inst_28222 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28223 = [inst_28216,inst_28221__$1];
var inst_28224 = (new cljs.core.PersistentVector(null,2,(5),inst_28222,inst_28223,null));
var state_28235__$1 = (function (){var statearr_28242 = state_28235;
(statearr_28242[(8)] = inst_28221__$1);

return statearr_28242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28235__$1,(8),jobs,inst_28224);
} else {
if((state_val_28236 === (3))){
var inst_28233 = (state_28235[(2)]);
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28235__$1,inst_28233);
} else {
if((state_val_28236 === (2))){
var state_28235__$1 = state_28235;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28235__$1,(4),from);
} else {
if((state_val_28236 === (9))){
var inst_28228 = (state_28235[(2)]);
var state_28235__$1 = (function (){var statearr_28243 = state_28235;
(statearr_28243[(9)] = inst_28228);

return statearr_28243;
})();
var statearr_28244_28350 = state_28235__$1;
(statearr_28244_28350[(2)] = null);

(statearr_28244_28350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (5))){
var inst_28219 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28235__$1 = state_28235;
var statearr_28245_28351 = state_28235__$1;
(statearr_28245_28351[(2)] = inst_28219);

(statearr_28245_28351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28236 === (8))){
var inst_28221 = (state_28235[(8)]);
var inst_28226 = (state_28235[(2)]);
var state_28235__$1 = (function (){var statearr_28246 = state_28235;
(statearr_28246[(10)] = inst_28226);

return statearr_28246;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28235__$1,(9),results,inst_28221);
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
});})(c__27982__auto___28345,jobs,results,process,async))
;
return ((function (switch__27887__auto__,c__27982__auto___28345,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_28247 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__);

(statearr_28247[(1)] = (1));

return statearr_28247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1 = (function (state_28235){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28235);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28248){if((e28248 instanceof Object)){
var ex__27891__auto__ = e28248;
var statearr_28249_28352 = state_28235;
(statearr_28249_28352[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28235);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28353 = state_28235;
state_28235 = G__28353;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = function(state_28235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1.call(this,state_28235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___28345,jobs,results,process,async))
})();
var state__27984__auto__ = (function (){var statearr_28250 = f__27983__auto__.call(null);
(statearr_28250[(6)] = c__27982__auto___28345);

return statearr_28250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___28345,jobs,results,process,async))
);


var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__,jobs,results,process,async){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__,jobs,results,process,async){
return (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (7))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28290_28354 = state_28288__$1;
(statearr_28290_28354[(2)] = inst_28284);

(statearr_28290_28354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (20))){
var state_28288__$1 = state_28288;
var statearr_28291_28355 = state_28288__$1;
(statearr_28291_28355[(2)] = null);

(statearr_28291_28355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (1))){
var state_28288__$1 = state_28288;
var statearr_28292_28356 = state_28288__$1;
(statearr_28292_28356[(2)] = null);

(statearr_28292_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (4))){
var inst_28253 = (state_28288[(7)]);
var inst_28253__$1 = (state_28288[(2)]);
var inst_28254 = (inst_28253__$1 == null);
var state_28288__$1 = (function (){var statearr_28293 = state_28288;
(statearr_28293[(7)] = inst_28253__$1);

return statearr_28293;
})();
if(cljs.core.truth_(inst_28254)){
var statearr_28294_28357 = state_28288__$1;
(statearr_28294_28357[(1)] = (5));

} else {
var statearr_28295_28358 = state_28288__$1;
(statearr_28295_28358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (15))){
var inst_28266 = (state_28288[(8)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28288__$1,(18),to,inst_28266);
} else {
if((state_val_28289 === (21))){
var inst_28279 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28296_28359 = state_28288__$1;
(statearr_28296_28359[(2)] = inst_28279);

(statearr_28296_28359[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (13))){
var inst_28281 = (state_28288[(2)]);
var state_28288__$1 = (function (){var statearr_28297 = state_28288;
(statearr_28297[(9)] = inst_28281);

return statearr_28297;
})();
var statearr_28298_28360 = state_28288__$1;
(statearr_28298_28360[(2)] = null);

(statearr_28298_28360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var inst_28253 = (state_28288[(7)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(11),inst_28253);
} else {
if((state_val_28289 === (17))){
var inst_28274 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28274)){
var statearr_28299_28361 = state_28288__$1;
(statearr_28299_28361[(1)] = (19));

} else {
var statearr_28300_28362 = state_28288__$1;
(statearr_28300_28362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (3))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (12))){
var inst_28263 = (state_28288[(10)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(14),inst_28263);
} else {
if((state_val_28289 === (2))){
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(4),results);
} else {
if((state_val_28289 === (19))){
var state_28288__$1 = state_28288;
var statearr_28301_28363 = state_28288__$1;
(statearr_28301_28363[(2)] = null);

(statearr_28301_28363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (11))){
var inst_28263 = (state_28288[(2)]);
var state_28288__$1 = (function (){var statearr_28302 = state_28288;
(statearr_28302[(10)] = inst_28263);

return statearr_28302;
})();
var statearr_28303_28364 = state_28288__$1;
(statearr_28303_28364[(2)] = null);

(statearr_28303_28364[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (9))){
var state_28288__$1 = state_28288;
var statearr_28304_28365 = state_28288__$1;
(statearr_28304_28365[(2)] = null);

(statearr_28304_28365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var state_28288__$1 = state_28288;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28305_28366 = state_28288__$1;
(statearr_28305_28366[(1)] = (8));

} else {
var statearr_28306_28367 = state_28288__$1;
(statearr_28306_28367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (14))){
var inst_28268 = (state_28288[(11)]);
var inst_28266 = (state_28288[(8)]);
var inst_28266__$1 = (state_28288[(2)]);
var inst_28267 = (inst_28266__$1 == null);
var inst_28268__$1 = cljs.core.not.call(null,inst_28267);
var state_28288__$1 = (function (){var statearr_28307 = state_28288;
(statearr_28307[(11)] = inst_28268__$1);

(statearr_28307[(8)] = inst_28266__$1);

return statearr_28307;
})();
if(inst_28268__$1){
var statearr_28308_28368 = state_28288__$1;
(statearr_28308_28368[(1)] = (15));

} else {
var statearr_28309_28369 = state_28288__$1;
(statearr_28309_28369[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (16))){
var inst_28268 = (state_28288[(11)]);
var state_28288__$1 = state_28288;
var statearr_28310_28370 = state_28288__$1;
(statearr_28310_28370[(2)] = inst_28268);

(statearr_28310_28370[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (10))){
var inst_28260 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28311_28371 = state_28288__$1;
(statearr_28311_28371[(2)] = inst_28260);

(statearr_28311_28371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (18))){
var inst_28271 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28312_28372 = state_28288__$1;
(statearr_28312_28372[(2)] = inst_28271);

(statearr_28312_28372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (8))){
var inst_28257 = cljs.core.async.close_BANG_.call(null,to);
var state_28288__$1 = state_28288;
var statearr_28313_28373 = state_28288__$1;
(statearr_28313_28373[(2)] = inst_28257);

(statearr_28313_28373[(1)] = (10));


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
});})(c__27982__auto__,jobs,results,process,async))
;
return ((function (switch__27887__auto__,c__27982__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_28314 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__);

(statearr_28314[(1)] = (1));

return statearr_28314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1 = (function (state_28288){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28315){if((e28315 instanceof Object)){
var ex__27891__auto__ = e28315;
var statearr_28316_28374 = state_28288;
(statearr_28316_28374[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28375 = state_28288;
state_28288 = G__28375;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__,jobs,results,process,async))
})();
var state__27984__auto__ = (function (){var statearr_28317 = f__27983__auto__.call(null);
(statearr_28317[(6)] = c__27982__auto__);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__,jobs,results,process,async))
);

return c__27982__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__28377 = arguments.length;
switch (G__28377) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__28380 = arguments.length;
switch (G__28380) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__28383 = arguments.length;
switch (G__28383) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27982__auto___28432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___28432,tc,fc){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___28432,tc,fc){
return (function (state_28409){
var state_val_28410 = (state_28409[(1)]);
if((state_val_28410 === (7))){
var inst_28405 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28411_28433 = state_28409__$1;
(statearr_28411_28433[(2)] = inst_28405);

(statearr_28411_28433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (1))){
var state_28409__$1 = state_28409;
var statearr_28412_28434 = state_28409__$1;
(statearr_28412_28434[(2)] = null);

(statearr_28412_28434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (4))){
var inst_28386 = (state_28409[(7)]);
var inst_28386__$1 = (state_28409[(2)]);
var inst_28387 = (inst_28386__$1 == null);
var state_28409__$1 = (function (){var statearr_28413 = state_28409;
(statearr_28413[(7)] = inst_28386__$1);

return statearr_28413;
})();
if(cljs.core.truth_(inst_28387)){
var statearr_28414_28435 = state_28409__$1;
(statearr_28414_28435[(1)] = (5));

} else {
var statearr_28415_28436 = state_28409__$1;
(statearr_28415_28436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (13))){
var state_28409__$1 = state_28409;
var statearr_28416_28437 = state_28409__$1;
(statearr_28416_28437[(2)] = null);

(statearr_28416_28437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (6))){
var inst_28386 = (state_28409[(7)]);
var inst_28392 = p.call(null,inst_28386);
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28392)){
var statearr_28417_28438 = state_28409__$1;
(statearr_28417_28438[(1)] = (9));

} else {
var statearr_28418_28439 = state_28409__$1;
(statearr_28418_28439[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (3))){
var inst_28407 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28409__$1,inst_28407);
} else {
if((state_val_28410 === (12))){
var state_28409__$1 = state_28409;
var statearr_28419_28440 = state_28409__$1;
(statearr_28419_28440[(2)] = null);

(statearr_28419_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (2))){
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28409__$1,(4),ch);
} else {
if((state_val_28410 === (11))){
var inst_28386 = (state_28409[(7)]);
var inst_28396 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28409__$1,(8),inst_28396,inst_28386);
} else {
if((state_val_28410 === (9))){
var state_28409__$1 = state_28409;
var statearr_28420_28441 = state_28409__$1;
(statearr_28420_28441[(2)] = tc);

(statearr_28420_28441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (5))){
var inst_28389 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28390 = cljs.core.async.close_BANG_.call(null,fc);
var state_28409__$1 = (function (){var statearr_28421 = state_28409;
(statearr_28421[(8)] = inst_28389);

return statearr_28421;
})();
var statearr_28422_28442 = state_28409__$1;
(statearr_28422_28442[(2)] = inst_28390);

(statearr_28422_28442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (14))){
var inst_28403 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
var statearr_28423_28443 = state_28409__$1;
(statearr_28423_28443[(2)] = inst_28403);

(statearr_28423_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (10))){
var state_28409__$1 = state_28409;
var statearr_28424_28444 = state_28409__$1;
(statearr_28424_28444[(2)] = fc);

(statearr_28424_28444[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28410 === (8))){
var inst_28398 = (state_28409[(2)]);
var state_28409__$1 = state_28409;
if(cljs.core.truth_(inst_28398)){
var statearr_28425_28445 = state_28409__$1;
(statearr_28425_28445[(1)] = (12));

} else {
var statearr_28426_28446 = state_28409__$1;
(statearr_28426_28446[(1)] = (13));

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
});})(c__27982__auto___28432,tc,fc))
;
return ((function (switch__27887__auto__,c__27982__auto___28432,tc,fc){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_28427 = [null,null,null,null,null,null,null,null,null];
(statearr_28427[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_28427[(1)] = (1));

return statearr_28427;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_28409){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28428){if((e28428 instanceof Object)){
var ex__27891__auto__ = e28428;
var statearr_28429_28447 = state_28409;
(statearr_28429_28447[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28448 = state_28409;
state_28409 = G__28448;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_28409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_28409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___28432,tc,fc))
})();
var state__27984__auto__ = (function (){var statearr_28430 = f__27983__auto__.call(null);
(statearr_28430[(6)] = c__27982__auto___28432);

return statearr_28430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___28432,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__){
return (function (state_28469){
var state_val_28470 = (state_28469[(1)]);
if((state_val_28470 === (7))){
var inst_28465 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28471_28489 = state_28469__$1;
(statearr_28471_28489[(2)] = inst_28465);

(statearr_28471_28489[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (1))){
var inst_28449 = init;
var state_28469__$1 = (function (){var statearr_28472 = state_28469;
(statearr_28472[(7)] = inst_28449);

return statearr_28472;
})();
var statearr_28473_28490 = state_28469__$1;
(statearr_28473_28490[(2)] = null);

(statearr_28473_28490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (4))){
var inst_28452 = (state_28469[(8)]);
var inst_28452__$1 = (state_28469[(2)]);
var inst_28453 = (inst_28452__$1 == null);
var state_28469__$1 = (function (){var statearr_28474 = state_28469;
(statearr_28474[(8)] = inst_28452__$1);

return statearr_28474;
})();
if(cljs.core.truth_(inst_28453)){
var statearr_28475_28491 = state_28469__$1;
(statearr_28475_28491[(1)] = (5));

} else {
var statearr_28476_28492 = state_28469__$1;
(statearr_28476_28492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (6))){
var inst_28452 = (state_28469[(8)]);
var inst_28456 = (state_28469[(9)]);
var inst_28449 = (state_28469[(7)]);
var inst_28456__$1 = f.call(null,inst_28449,inst_28452);
var inst_28457 = cljs.core.reduced_QMARK_.call(null,inst_28456__$1);
var state_28469__$1 = (function (){var statearr_28477 = state_28469;
(statearr_28477[(9)] = inst_28456__$1);

return statearr_28477;
})();
if(inst_28457){
var statearr_28478_28493 = state_28469__$1;
(statearr_28478_28493[(1)] = (8));

} else {
var statearr_28479_28494 = state_28469__$1;
(statearr_28479_28494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (3))){
var inst_28467 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28469__$1,inst_28467);
} else {
if((state_val_28470 === (2))){
var state_28469__$1 = state_28469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28469__$1,(4),ch);
} else {
if((state_val_28470 === (9))){
var inst_28456 = (state_28469[(9)]);
var inst_28449 = inst_28456;
var state_28469__$1 = (function (){var statearr_28480 = state_28469;
(statearr_28480[(7)] = inst_28449);

return statearr_28480;
})();
var statearr_28481_28495 = state_28469__$1;
(statearr_28481_28495[(2)] = null);

(statearr_28481_28495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (5))){
var inst_28449 = (state_28469[(7)]);
var state_28469__$1 = state_28469;
var statearr_28482_28496 = state_28469__$1;
(statearr_28482_28496[(2)] = inst_28449);

(statearr_28482_28496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (10))){
var inst_28463 = (state_28469[(2)]);
var state_28469__$1 = state_28469;
var statearr_28483_28497 = state_28469__$1;
(statearr_28483_28497[(2)] = inst_28463);

(statearr_28483_28497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28470 === (8))){
var inst_28456 = (state_28469[(9)]);
var inst_28459 = cljs.core.deref.call(null,inst_28456);
var state_28469__$1 = state_28469;
var statearr_28484_28498 = state_28469__$1;
(statearr_28484_28498[(2)] = inst_28459);

(statearr_28484_28498[(1)] = (10));


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
});})(c__27982__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27888__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27888__auto____0 = (function (){
var statearr_28485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28485[(0)] = cljs$core$async$reduce_$_state_machine__27888__auto__);

(statearr_28485[(1)] = (1));

return statearr_28485;
});
var cljs$core$async$reduce_$_state_machine__27888__auto____1 = (function (state_28469){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28486){if((e28486 instanceof Object)){
var ex__27891__auto__ = e28486;
var statearr_28487_28499 = state_28469;
(statearr_28487_28499[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28500 = state_28469;
state_28469 = G__28500;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27888__auto__ = function(state_28469){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27888__auto____1.call(this,state_28469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27888__auto____0;
cljs$core$async$reduce_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27888__auto____1;
return cljs$core$async$reduce_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__))
})();
var state__27984__auto__ = (function (){var statearr_28488 = f__27983__auto__.call(null);
(statearr_28488[(6)] = c__27982__auto__);

return statearr_28488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__))
);

return c__27982__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__,f__$1){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__,f__$1){
return (function (state_28506){
var state_val_28507 = (state_28506[(1)]);
if((state_val_28507 === (1))){
var inst_28501 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28506__$1,(2),inst_28501);
} else {
if((state_val_28507 === (2))){
var inst_28503 = (state_28506[(2)]);
var inst_28504 = f__$1.call(null,inst_28503);
var state_28506__$1 = state_28506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28506__$1,inst_28504);
} else {
return null;
}
}
});})(c__27982__auto__,f__$1))
;
return ((function (switch__27887__auto__,c__27982__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__27888__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27888__auto____0 = (function (){
var statearr_28508 = [null,null,null,null,null,null,null];
(statearr_28508[(0)] = cljs$core$async$transduce_$_state_machine__27888__auto__);

(statearr_28508[(1)] = (1));

return statearr_28508;
});
var cljs$core$async$transduce_$_state_machine__27888__auto____1 = (function (state_28506){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28509){if((e28509 instanceof Object)){
var ex__27891__auto__ = e28509;
var statearr_28510_28512 = state_28506;
(statearr_28510_28512[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28513 = state_28506;
state_28506 = G__28513;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27888__auto__ = function(state_28506){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27888__auto____1.call(this,state_28506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27888__auto____0;
cljs$core$async$transduce_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27888__auto____1;
return cljs$core$async$transduce_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__,f__$1))
})();
var state__27984__auto__ = (function (){var statearr_28511 = f__27983__auto__.call(null);
(statearr_28511[(6)] = c__27982__auto__);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__,f__$1))
);

return c__27982__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__28515 = arguments.length;
switch (G__28515) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__){
return (function (state_28540){
var state_val_28541 = (state_28540[(1)]);
if((state_val_28541 === (7))){
var inst_28522 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28542_28563 = state_28540__$1;
(statearr_28542_28563[(2)] = inst_28522);

(statearr_28542_28563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (1))){
var inst_28516 = cljs.core.seq.call(null,coll);
var inst_28517 = inst_28516;
var state_28540__$1 = (function (){var statearr_28543 = state_28540;
(statearr_28543[(7)] = inst_28517);

return statearr_28543;
})();
var statearr_28544_28564 = state_28540__$1;
(statearr_28544_28564[(2)] = null);

(statearr_28544_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (4))){
var inst_28517 = (state_28540[(7)]);
var inst_28520 = cljs.core.first.call(null,inst_28517);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28540__$1,(7),ch,inst_28520);
} else {
if((state_val_28541 === (13))){
var inst_28534 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28545_28565 = state_28540__$1;
(statearr_28545_28565[(2)] = inst_28534);

(statearr_28545_28565[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (6))){
var inst_28525 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
if(cljs.core.truth_(inst_28525)){
var statearr_28546_28566 = state_28540__$1;
(statearr_28546_28566[(1)] = (8));

} else {
var statearr_28547_28567 = state_28540__$1;
(statearr_28547_28567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (3))){
var inst_28538 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28540__$1,inst_28538);
} else {
if((state_val_28541 === (12))){
var state_28540__$1 = state_28540;
var statearr_28548_28568 = state_28540__$1;
(statearr_28548_28568[(2)] = null);

(statearr_28548_28568[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (2))){
var inst_28517 = (state_28540[(7)]);
var state_28540__$1 = state_28540;
if(cljs.core.truth_(inst_28517)){
var statearr_28549_28569 = state_28540__$1;
(statearr_28549_28569[(1)] = (4));

} else {
var statearr_28550_28570 = state_28540__$1;
(statearr_28550_28570[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (11))){
var inst_28531 = cljs.core.async.close_BANG_.call(null,ch);
var state_28540__$1 = state_28540;
var statearr_28551_28571 = state_28540__$1;
(statearr_28551_28571[(2)] = inst_28531);

(statearr_28551_28571[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (9))){
var state_28540__$1 = state_28540;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28552_28572 = state_28540__$1;
(statearr_28552_28572[(1)] = (11));

} else {
var statearr_28553_28573 = state_28540__$1;
(statearr_28553_28573[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (5))){
var inst_28517 = (state_28540[(7)]);
var state_28540__$1 = state_28540;
var statearr_28554_28574 = state_28540__$1;
(statearr_28554_28574[(2)] = inst_28517);

(statearr_28554_28574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (10))){
var inst_28536 = (state_28540[(2)]);
var state_28540__$1 = state_28540;
var statearr_28555_28575 = state_28540__$1;
(statearr_28555_28575[(2)] = inst_28536);

(statearr_28555_28575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28541 === (8))){
var inst_28517 = (state_28540[(7)]);
var inst_28527 = cljs.core.next.call(null,inst_28517);
var inst_28517__$1 = inst_28527;
var state_28540__$1 = (function (){var statearr_28556 = state_28540;
(statearr_28556[(7)] = inst_28517__$1);

return statearr_28556;
})();
var statearr_28557_28576 = state_28540__$1;
(statearr_28557_28576[(2)] = null);

(statearr_28557_28576[(1)] = (2));


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
});})(c__27982__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_28558 = [null,null,null,null,null,null,null,null];
(statearr_28558[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_28558[(1)] = (1));

return statearr_28558;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_28540){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28559){if((e28559 instanceof Object)){
var ex__27891__auto__ = e28559;
var statearr_28560_28577 = state_28540;
(statearr_28560_28577[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28578 = state_28540;
state_28540 = G__28578;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_28540){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_28540);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__))
})();
var state__27984__auto__ = (function (){var statearr_28561 = f__27983__auto__.call(null);
(statearr_28561[(6)] = c__27982__auto__);

return statearr_28561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__))
);

return c__27982__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28579 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28579 = (function (ch,cs,meta28580){
this.ch = ch;
this.cs = cs;
this.meta28580 = meta28580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28581,meta28580__$1){
var self__ = this;
var _28581__$1 = this;
return (new cljs.core.async.t_cljs$core$async28579(self__.ch,self__.cs,meta28580__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28581){
var self__ = this;
var _28581__$1 = this;
return self__.meta28580;
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28580","meta28580",-384333513,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28579";

cljs.core.async.t_cljs$core$async28579.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28579");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28579.
 */
cljs.core.async.__GT_t_cljs$core$async28579 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28579(ch__$1,cs__$1,meta28580){
return (new cljs.core.async.t_cljs$core$async28579(ch__$1,cs__$1,meta28580));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28579(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27982__auto___28801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___28801,cs,m,dchan,dctr,done){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___28801,cs,m,dchan,dctr,done){
return (function (state_28716){
var state_val_28717 = (state_28716[(1)]);
if((state_val_28717 === (7))){
var inst_28712 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28718_28802 = state_28716__$1;
(statearr_28718_28802[(2)] = inst_28712);

(statearr_28718_28802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (20))){
var inst_28615 = (state_28716[(7)]);
var inst_28627 = cljs.core.first.call(null,inst_28615);
var inst_28628 = cljs.core.nth.call(null,inst_28627,(0),null);
var inst_28629 = cljs.core.nth.call(null,inst_28627,(1),null);
var state_28716__$1 = (function (){var statearr_28719 = state_28716;
(statearr_28719[(8)] = inst_28628);

return statearr_28719;
})();
if(cljs.core.truth_(inst_28629)){
var statearr_28720_28803 = state_28716__$1;
(statearr_28720_28803[(1)] = (22));

} else {
var statearr_28721_28804 = state_28716__$1;
(statearr_28721_28804[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (27))){
var inst_28659 = (state_28716[(9)]);
var inst_28664 = (state_28716[(10)]);
var inst_28584 = (state_28716[(11)]);
var inst_28657 = (state_28716[(12)]);
var inst_28664__$1 = cljs.core._nth.call(null,inst_28657,inst_28659);
var inst_28665 = cljs.core.async.put_BANG_.call(null,inst_28664__$1,inst_28584,done);
var state_28716__$1 = (function (){var statearr_28722 = state_28716;
(statearr_28722[(10)] = inst_28664__$1);

return statearr_28722;
})();
if(cljs.core.truth_(inst_28665)){
var statearr_28723_28805 = state_28716__$1;
(statearr_28723_28805[(1)] = (30));

} else {
var statearr_28724_28806 = state_28716__$1;
(statearr_28724_28806[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (1))){
var state_28716__$1 = state_28716;
var statearr_28725_28807 = state_28716__$1;
(statearr_28725_28807[(2)] = null);

(statearr_28725_28807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (24))){
var inst_28615 = (state_28716[(7)]);
var inst_28634 = (state_28716[(2)]);
var inst_28635 = cljs.core.next.call(null,inst_28615);
var inst_28593 = inst_28635;
var inst_28594 = null;
var inst_28595 = (0);
var inst_28596 = (0);
var state_28716__$1 = (function (){var statearr_28726 = state_28716;
(statearr_28726[(13)] = inst_28634);

(statearr_28726[(14)] = inst_28596);

(statearr_28726[(15)] = inst_28595);

(statearr_28726[(16)] = inst_28593);

(statearr_28726[(17)] = inst_28594);

return statearr_28726;
})();
var statearr_28727_28808 = state_28716__$1;
(statearr_28727_28808[(2)] = null);

(statearr_28727_28808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (39))){
var state_28716__$1 = state_28716;
var statearr_28731_28809 = state_28716__$1;
(statearr_28731_28809[(2)] = null);

(statearr_28731_28809[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (4))){
var inst_28584 = (state_28716[(11)]);
var inst_28584__$1 = (state_28716[(2)]);
var inst_28585 = (inst_28584__$1 == null);
var state_28716__$1 = (function (){var statearr_28732 = state_28716;
(statearr_28732[(11)] = inst_28584__$1);

return statearr_28732;
})();
if(cljs.core.truth_(inst_28585)){
var statearr_28733_28810 = state_28716__$1;
(statearr_28733_28810[(1)] = (5));

} else {
var statearr_28734_28811 = state_28716__$1;
(statearr_28734_28811[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (15))){
var inst_28596 = (state_28716[(14)]);
var inst_28595 = (state_28716[(15)]);
var inst_28593 = (state_28716[(16)]);
var inst_28594 = (state_28716[(17)]);
var inst_28611 = (state_28716[(2)]);
var inst_28612 = (inst_28596 + (1));
var tmp28728 = inst_28595;
var tmp28729 = inst_28593;
var tmp28730 = inst_28594;
var inst_28593__$1 = tmp28729;
var inst_28594__$1 = tmp28730;
var inst_28595__$1 = tmp28728;
var inst_28596__$1 = inst_28612;
var state_28716__$1 = (function (){var statearr_28735 = state_28716;
(statearr_28735[(18)] = inst_28611);

(statearr_28735[(14)] = inst_28596__$1);

(statearr_28735[(15)] = inst_28595__$1);

(statearr_28735[(16)] = inst_28593__$1);

(statearr_28735[(17)] = inst_28594__$1);

return statearr_28735;
})();
var statearr_28736_28812 = state_28716__$1;
(statearr_28736_28812[(2)] = null);

(statearr_28736_28812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (21))){
var inst_28638 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28740_28813 = state_28716__$1;
(statearr_28740_28813[(2)] = inst_28638);

(statearr_28740_28813[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (31))){
var inst_28664 = (state_28716[(10)]);
var inst_28668 = done.call(null,null);
var inst_28669 = cljs.core.async.untap_STAR_.call(null,m,inst_28664);
var state_28716__$1 = (function (){var statearr_28741 = state_28716;
(statearr_28741[(19)] = inst_28668);

return statearr_28741;
})();
var statearr_28742_28814 = state_28716__$1;
(statearr_28742_28814[(2)] = inst_28669);

(statearr_28742_28814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (32))){
var inst_28659 = (state_28716[(9)]);
var inst_28656 = (state_28716[(20)]);
var inst_28658 = (state_28716[(21)]);
var inst_28657 = (state_28716[(12)]);
var inst_28671 = (state_28716[(2)]);
var inst_28672 = (inst_28659 + (1));
var tmp28737 = inst_28656;
var tmp28738 = inst_28658;
var tmp28739 = inst_28657;
var inst_28656__$1 = tmp28737;
var inst_28657__$1 = tmp28739;
var inst_28658__$1 = tmp28738;
var inst_28659__$1 = inst_28672;
var state_28716__$1 = (function (){var statearr_28743 = state_28716;
(statearr_28743[(9)] = inst_28659__$1);

(statearr_28743[(22)] = inst_28671);

(statearr_28743[(20)] = inst_28656__$1);

(statearr_28743[(21)] = inst_28658__$1);

(statearr_28743[(12)] = inst_28657__$1);

return statearr_28743;
})();
var statearr_28744_28815 = state_28716__$1;
(statearr_28744_28815[(2)] = null);

(statearr_28744_28815[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (40))){
var inst_28684 = (state_28716[(23)]);
var inst_28688 = done.call(null,null);
var inst_28689 = cljs.core.async.untap_STAR_.call(null,m,inst_28684);
var state_28716__$1 = (function (){var statearr_28745 = state_28716;
(statearr_28745[(24)] = inst_28688);

return statearr_28745;
})();
var statearr_28746_28816 = state_28716__$1;
(statearr_28746_28816[(2)] = inst_28689);

(statearr_28746_28816[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (33))){
var inst_28675 = (state_28716[(25)]);
var inst_28677 = cljs.core.chunked_seq_QMARK_.call(null,inst_28675);
var state_28716__$1 = state_28716;
if(inst_28677){
var statearr_28747_28817 = state_28716__$1;
(statearr_28747_28817[(1)] = (36));

} else {
var statearr_28748_28818 = state_28716__$1;
(statearr_28748_28818[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (13))){
var inst_28605 = (state_28716[(26)]);
var inst_28608 = cljs.core.async.close_BANG_.call(null,inst_28605);
var state_28716__$1 = state_28716;
var statearr_28749_28819 = state_28716__$1;
(statearr_28749_28819[(2)] = inst_28608);

(statearr_28749_28819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (22))){
var inst_28628 = (state_28716[(8)]);
var inst_28631 = cljs.core.async.close_BANG_.call(null,inst_28628);
var state_28716__$1 = state_28716;
var statearr_28750_28820 = state_28716__$1;
(statearr_28750_28820[(2)] = inst_28631);

(statearr_28750_28820[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (36))){
var inst_28675 = (state_28716[(25)]);
var inst_28679 = cljs.core.chunk_first.call(null,inst_28675);
var inst_28680 = cljs.core.chunk_rest.call(null,inst_28675);
var inst_28681 = cljs.core.count.call(null,inst_28679);
var inst_28656 = inst_28680;
var inst_28657 = inst_28679;
var inst_28658 = inst_28681;
var inst_28659 = (0);
var state_28716__$1 = (function (){var statearr_28751 = state_28716;
(statearr_28751[(9)] = inst_28659);

(statearr_28751[(20)] = inst_28656);

(statearr_28751[(21)] = inst_28658);

(statearr_28751[(12)] = inst_28657);

return statearr_28751;
})();
var statearr_28752_28821 = state_28716__$1;
(statearr_28752_28821[(2)] = null);

(statearr_28752_28821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (41))){
var inst_28675 = (state_28716[(25)]);
var inst_28691 = (state_28716[(2)]);
var inst_28692 = cljs.core.next.call(null,inst_28675);
var inst_28656 = inst_28692;
var inst_28657 = null;
var inst_28658 = (0);
var inst_28659 = (0);
var state_28716__$1 = (function (){var statearr_28753 = state_28716;
(statearr_28753[(9)] = inst_28659);

(statearr_28753[(27)] = inst_28691);

(statearr_28753[(20)] = inst_28656);

(statearr_28753[(21)] = inst_28658);

(statearr_28753[(12)] = inst_28657);

return statearr_28753;
})();
var statearr_28754_28822 = state_28716__$1;
(statearr_28754_28822[(2)] = null);

(statearr_28754_28822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (43))){
var state_28716__$1 = state_28716;
var statearr_28755_28823 = state_28716__$1;
(statearr_28755_28823[(2)] = null);

(statearr_28755_28823[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (29))){
var inst_28700 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28756_28824 = state_28716__$1;
(statearr_28756_28824[(2)] = inst_28700);

(statearr_28756_28824[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (44))){
var inst_28709 = (state_28716[(2)]);
var state_28716__$1 = (function (){var statearr_28757 = state_28716;
(statearr_28757[(28)] = inst_28709);

return statearr_28757;
})();
var statearr_28758_28825 = state_28716__$1;
(statearr_28758_28825[(2)] = null);

(statearr_28758_28825[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (6))){
var inst_28648 = (state_28716[(29)]);
var inst_28647 = cljs.core.deref.call(null,cs);
var inst_28648__$1 = cljs.core.keys.call(null,inst_28647);
var inst_28649 = cljs.core.count.call(null,inst_28648__$1);
var inst_28650 = cljs.core.reset_BANG_.call(null,dctr,inst_28649);
var inst_28655 = cljs.core.seq.call(null,inst_28648__$1);
var inst_28656 = inst_28655;
var inst_28657 = null;
var inst_28658 = (0);
var inst_28659 = (0);
var state_28716__$1 = (function (){var statearr_28759 = state_28716;
(statearr_28759[(29)] = inst_28648__$1);

(statearr_28759[(9)] = inst_28659);

(statearr_28759[(30)] = inst_28650);

(statearr_28759[(20)] = inst_28656);

(statearr_28759[(21)] = inst_28658);

(statearr_28759[(12)] = inst_28657);

return statearr_28759;
})();
var statearr_28760_28826 = state_28716__$1;
(statearr_28760_28826[(2)] = null);

(statearr_28760_28826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (28))){
var inst_28675 = (state_28716[(25)]);
var inst_28656 = (state_28716[(20)]);
var inst_28675__$1 = cljs.core.seq.call(null,inst_28656);
var state_28716__$1 = (function (){var statearr_28761 = state_28716;
(statearr_28761[(25)] = inst_28675__$1);

return statearr_28761;
})();
if(inst_28675__$1){
var statearr_28762_28827 = state_28716__$1;
(statearr_28762_28827[(1)] = (33));

} else {
var statearr_28763_28828 = state_28716__$1;
(statearr_28763_28828[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (25))){
var inst_28659 = (state_28716[(9)]);
var inst_28658 = (state_28716[(21)]);
var inst_28661 = (inst_28659 < inst_28658);
var inst_28662 = inst_28661;
var state_28716__$1 = state_28716;
if(cljs.core.truth_(inst_28662)){
var statearr_28764_28829 = state_28716__$1;
(statearr_28764_28829[(1)] = (27));

} else {
var statearr_28765_28830 = state_28716__$1;
(statearr_28765_28830[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (34))){
var state_28716__$1 = state_28716;
var statearr_28766_28831 = state_28716__$1;
(statearr_28766_28831[(2)] = null);

(statearr_28766_28831[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (17))){
var state_28716__$1 = state_28716;
var statearr_28767_28832 = state_28716__$1;
(statearr_28767_28832[(2)] = null);

(statearr_28767_28832[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (3))){
var inst_28714 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28716__$1,inst_28714);
} else {
if((state_val_28717 === (12))){
var inst_28643 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28768_28833 = state_28716__$1;
(statearr_28768_28833[(2)] = inst_28643);

(statearr_28768_28833[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (2))){
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(4),ch);
} else {
if((state_val_28717 === (23))){
var state_28716__$1 = state_28716;
var statearr_28769_28834 = state_28716__$1;
(statearr_28769_28834[(2)] = null);

(statearr_28769_28834[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (35))){
var inst_28698 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28770_28835 = state_28716__$1;
(statearr_28770_28835[(2)] = inst_28698);

(statearr_28770_28835[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (19))){
var inst_28615 = (state_28716[(7)]);
var inst_28619 = cljs.core.chunk_first.call(null,inst_28615);
var inst_28620 = cljs.core.chunk_rest.call(null,inst_28615);
var inst_28621 = cljs.core.count.call(null,inst_28619);
var inst_28593 = inst_28620;
var inst_28594 = inst_28619;
var inst_28595 = inst_28621;
var inst_28596 = (0);
var state_28716__$1 = (function (){var statearr_28771 = state_28716;
(statearr_28771[(14)] = inst_28596);

(statearr_28771[(15)] = inst_28595);

(statearr_28771[(16)] = inst_28593);

(statearr_28771[(17)] = inst_28594);

return statearr_28771;
})();
var statearr_28772_28836 = state_28716__$1;
(statearr_28772_28836[(2)] = null);

(statearr_28772_28836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (11))){
var inst_28615 = (state_28716[(7)]);
var inst_28593 = (state_28716[(16)]);
var inst_28615__$1 = cljs.core.seq.call(null,inst_28593);
var state_28716__$1 = (function (){var statearr_28773 = state_28716;
(statearr_28773[(7)] = inst_28615__$1);

return statearr_28773;
})();
if(inst_28615__$1){
var statearr_28774_28837 = state_28716__$1;
(statearr_28774_28837[(1)] = (16));

} else {
var statearr_28775_28838 = state_28716__$1;
(statearr_28775_28838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (9))){
var inst_28645 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28776_28839 = state_28716__$1;
(statearr_28776_28839[(2)] = inst_28645);

(statearr_28776_28839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (5))){
var inst_28591 = cljs.core.deref.call(null,cs);
var inst_28592 = cljs.core.seq.call(null,inst_28591);
var inst_28593 = inst_28592;
var inst_28594 = null;
var inst_28595 = (0);
var inst_28596 = (0);
var state_28716__$1 = (function (){var statearr_28777 = state_28716;
(statearr_28777[(14)] = inst_28596);

(statearr_28777[(15)] = inst_28595);

(statearr_28777[(16)] = inst_28593);

(statearr_28777[(17)] = inst_28594);

return statearr_28777;
})();
var statearr_28778_28840 = state_28716__$1;
(statearr_28778_28840[(2)] = null);

(statearr_28778_28840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (14))){
var state_28716__$1 = state_28716;
var statearr_28779_28841 = state_28716__$1;
(statearr_28779_28841[(2)] = null);

(statearr_28779_28841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (45))){
var inst_28706 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28780_28842 = state_28716__$1;
(statearr_28780_28842[(2)] = inst_28706);

(statearr_28780_28842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (26))){
var inst_28648 = (state_28716[(29)]);
var inst_28702 = (state_28716[(2)]);
var inst_28703 = cljs.core.seq.call(null,inst_28648);
var state_28716__$1 = (function (){var statearr_28781 = state_28716;
(statearr_28781[(31)] = inst_28702);

return statearr_28781;
})();
if(inst_28703){
var statearr_28782_28843 = state_28716__$1;
(statearr_28782_28843[(1)] = (42));

} else {
var statearr_28783_28844 = state_28716__$1;
(statearr_28783_28844[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (16))){
var inst_28615 = (state_28716[(7)]);
var inst_28617 = cljs.core.chunked_seq_QMARK_.call(null,inst_28615);
var state_28716__$1 = state_28716;
if(inst_28617){
var statearr_28784_28845 = state_28716__$1;
(statearr_28784_28845[(1)] = (19));

} else {
var statearr_28785_28846 = state_28716__$1;
(statearr_28785_28846[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (38))){
var inst_28695 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28786_28847 = state_28716__$1;
(statearr_28786_28847[(2)] = inst_28695);

(statearr_28786_28847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (30))){
var state_28716__$1 = state_28716;
var statearr_28787_28848 = state_28716__$1;
(statearr_28787_28848[(2)] = null);

(statearr_28787_28848[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (10))){
var inst_28596 = (state_28716[(14)]);
var inst_28594 = (state_28716[(17)]);
var inst_28604 = cljs.core._nth.call(null,inst_28594,inst_28596);
var inst_28605 = cljs.core.nth.call(null,inst_28604,(0),null);
var inst_28606 = cljs.core.nth.call(null,inst_28604,(1),null);
var state_28716__$1 = (function (){var statearr_28788 = state_28716;
(statearr_28788[(26)] = inst_28605);

return statearr_28788;
})();
if(cljs.core.truth_(inst_28606)){
var statearr_28789_28849 = state_28716__$1;
(statearr_28789_28849[(1)] = (13));

} else {
var statearr_28790_28850 = state_28716__$1;
(statearr_28790_28850[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (18))){
var inst_28641 = (state_28716[(2)]);
var state_28716__$1 = state_28716;
var statearr_28791_28851 = state_28716__$1;
(statearr_28791_28851[(2)] = inst_28641);

(statearr_28791_28851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (42))){
var state_28716__$1 = state_28716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28716__$1,(45),dchan);
} else {
if((state_val_28717 === (37))){
var inst_28675 = (state_28716[(25)]);
var inst_28584 = (state_28716[(11)]);
var inst_28684 = (state_28716[(23)]);
var inst_28684__$1 = cljs.core.first.call(null,inst_28675);
var inst_28685 = cljs.core.async.put_BANG_.call(null,inst_28684__$1,inst_28584,done);
var state_28716__$1 = (function (){var statearr_28792 = state_28716;
(statearr_28792[(23)] = inst_28684__$1);

return statearr_28792;
})();
if(cljs.core.truth_(inst_28685)){
var statearr_28793_28852 = state_28716__$1;
(statearr_28793_28852[(1)] = (39));

} else {
var statearr_28794_28853 = state_28716__$1;
(statearr_28794_28853[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28717 === (8))){
var inst_28596 = (state_28716[(14)]);
var inst_28595 = (state_28716[(15)]);
var inst_28598 = (inst_28596 < inst_28595);
var inst_28599 = inst_28598;
var state_28716__$1 = state_28716;
if(cljs.core.truth_(inst_28599)){
var statearr_28795_28854 = state_28716__$1;
(statearr_28795_28854[(1)] = (10));

} else {
var statearr_28796_28855 = state_28716__$1;
(statearr_28796_28855[(1)] = (11));

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
});})(c__27982__auto___28801,cs,m,dchan,dctr,done))
;
return ((function (switch__27887__auto__,c__27982__auto___28801,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27888__auto__ = null;
var cljs$core$async$mult_$_state_machine__27888__auto____0 = (function (){
var statearr_28797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28797[(0)] = cljs$core$async$mult_$_state_machine__27888__auto__);

(statearr_28797[(1)] = (1));

return statearr_28797;
});
var cljs$core$async$mult_$_state_machine__27888__auto____1 = (function (state_28716){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e28798){if((e28798 instanceof Object)){
var ex__27891__auto__ = e28798;
var statearr_28799_28856 = state_28716;
(statearr_28799_28856[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28857 = state_28716;
state_28716 = G__28857;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27888__auto__ = function(state_28716){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27888__auto____1.call(this,state_28716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27888__auto____0;
cljs$core$async$mult_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27888__auto____1;
return cljs$core$async$mult_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___28801,cs,m,dchan,dctr,done))
})();
var state__27984__auto__ = (function (){var statearr_28800 = f__27983__auto__.call(null);
(statearr_28800[(6)] = c__27982__auto___28801);

return statearr_28800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___28801,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28859 = arguments.length;
switch (G__28859) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28871 = arguments.length;
var i__4731__auto___28872 = (0);
while(true){
if((i__4731__auto___28872 < len__4730__auto___28871)){
args__4736__auto__.push((arguments[i__4731__auto___28872]));

var G__28873 = (i__4731__auto___28872 + (1));
i__4731__auto___28872 = G__28873;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28865){
var map__28866 = p__28865;
var map__28866__$1 = (((((!((map__28866 == null))))?(((((map__28866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28866):map__28866);
var opts = map__28866__$1;
var statearr_28868_28874 = state;
(statearr_28868_28874[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__28866,map__28866__$1,opts){
return (function (val){
var statearr_28869_28875 = state;
(statearr_28869_28875[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28866,map__28866__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28870_28876 = state;
(statearr_28870_28876[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28861){
var G__28862 = cljs.core.first.call(null,seq28861);
var seq28861__$1 = cljs.core.next.call(null,seq28861);
var G__28863 = cljs.core.first.call(null,seq28861__$1);
var seq28861__$2 = cljs.core.next.call(null,seq28861__$1);
var G__28864 = cljs.core.first.call(null,seq28861__$2);
var seq28861__$3 = cljs.core.next.call(null,seq28861__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28862,G__28863,G__28864,seq28861__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28877 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28877 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28878){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28878 = meta28878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28879,meta28878__$1){
var self__ = this;
var _28879__$1 = this;
return (new cljs.core.async.t_cljs$core$async28877(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28878__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28879){
var self__ = this;
var _28879__$1 = this;
return self__.meta28878;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28878","meta28878",-711323693,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async28877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28877";

cljs.core.async.t_cljs$core$async28877.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async28877");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28877.
 */
cljs.core.async.__GT_t_cljs$core$async28877 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async28877(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28878){
return (new cljs.core.async.t_cljs$core$async28877(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28878));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async28877(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27982__auto___29041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28981){
var state_val_28982 = (state_28981[(1)]);
if((state_val_28982 === (7))){
var inst_28896 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_28983_29042 = state_28981__$1;
(statearr_28983_29042[(2)] = inst_28896);

(statearr_28983_29042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (20))){
var inst_28908 = (state_28981[(7)]);
var state_28981__$1 = state_28981;
var statearr_28984_29043 = state_28981__$1;
(statearr_28984_29043[(2)] = inst_28908);

(statearr_28984_29043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (27))){
var state_28981__$1 = state_28981;
var statearr_28985_29044 = state_28981__$1;
(statearr_28985_29044[(2)] = null);

(statearr_28985_29044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (1))){
var inst_28883 = (state_28981[(8)]);
var inst_28883__$1 = calc_state.call(null);
var inst_28885 = (inst_28883__$1 == null);
var inst_28886 = cljs.core.not.call(null,inst_28885);
var state_28981__$1 = (function (){var statearr_28986 = state_28981;
(statearr_28986[(8)] = inst_28883__$1);

return statearr_28986;
})();
if(inst_28886){
var statearr_28987_29045 = state_28981__$1;
(statearr_28987_29045[(1)] = (2));

} else {
var statearr_28988_29046 = state_28981__$1;
(statearr_28988_29046[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (24))){
var inst_28941 = (state_28981[(9)]);
var inst_28955 = (state_28981[(10)]);
var inst_28932 = (state_28981[(11)]);
var inst_28955__$1 = inst_28932.call(null,inst_28941);
var state_28981__$1 = (function (){var statearr_28989 = state_28981;
(statearr_28989[(10)] = inst_28955__$1);

return statearr_28989;
})();
if(cljs.core.truth_(inst_28955__$1)){
var statearr_28990_29047 = state_28981__$1;
(statearr_28990_29047[(1)] = (29));

} else {
var statearr_28991_29048 = state_28981__$1;
(statearr_28991_29048[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (4))){
var inst_28899 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28899)){
var statearr_28992_29049 = state_28981__$1;
(statearr_28992_29049[(1)] = (8));

} else {
var statearr_28993_29050 = state_28981__$1;
(statearr_28993_29050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (15))){
var inst_28926 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28926)){
var statearr_28994_29051 = state_28981__$1;
(statearr_28994_29051[(1)] = (19));

} else {
var statearr_28995_29052 = state_28981__$1;
(statearr_28995_29052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (21))){
var inst_28931 = (state_28981[(12)]);
var inst_28931__$1 = (state_28981[(2)]);
var inst_28932 = cljs.core.get.call(null,inst_28931__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28933 = cljs.core.get.call(null,inst_28931__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28934 = cljs.core.get.call(null,inst_28931__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28981__$1 = (function (){var statearr_28996 = state_28981;
(statearr_28996[(12)] = inst_28931__$1);

(statearr_28996[(11)] = inst_28932);

(statearr_28996[(13)] = inst_28933);

return statearr_28996;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28981__$1,(22),inst_28934);
} else {
if((state_val_28982 === (31))){
var inst_28963 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28963)){
var statearr_28997_29053 = state_28981__$1;
(statearr_28997_29053[(1)] = (32));

} else {
var statearr_28998_29054 = state_28981__$1;
(statearr_28998_29054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (32))){
var inst_28940 = (state_28981[(14)]);
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28981__$1,(35),out,inst_28940);
} else {
if((state_val_28982 === (33))){
var inst_28931 = (state_28981[(12)]);
var inst_28908 = inst_28931;
var state_28981__$1 = (function (){var statearr_28999 = state_28981;
(statearr_28999[(7)] = inst_28908);

return statearr_28999;
})();
var statearr_29000_29055 = state_28981__$1;
(statearr_29000_29055[(2)] = null);

(statearr_29000_29055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (13))){
var inst_28908 = (state_28981[(7)]);
var inst_28915 = inst_28908.cljs$lang$protocol_mask$partition0$;
var inst_28916 = (inst_28915 & (64));
var inst_28917 = inst_28908.cljs$core$ISeq$;
var inst_28918 = (cljs.core.PROTOCOL_SENTINEL === inst_28917);
var inst_28919 = ((inst_28916) || (inst_28918));
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28919)){
var statearr_29001_29056 = state_28981__$1;
(statearr_29001_29056[(1)] = (16));

} else {
var statearr_29002_29057 = state_28981__$1;
(statearr_29002_29057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (22))){
var inst_28941 = (state_28981[(9)]);
var inst_28940 = (state_28981[(14)]);
var inst_28939 = (state_28981[(2)]);
var inst_28940__$1 = cljs.core.nth.call(null,inst_28939,(0),null);
var inst_28941__$1 = cljs.core.nth.call(null,inst_28939,(1),null);
var inst_28942 = (inst_28940__$1 == null);
var inst_28943 = cljs.core._EQ_.call(null,inst_28941__$1,change);
var inst_28944 = ((inst_28942) || (inst_28943));
var state_28981__$1 = (function (){var statearr_29003 = state_28981;
(statearr_29003[(9)] = inst_28941__$1);

(statearr_29003[(14)] = inst_28940__$1);

return statearr_29003;
})();
if(cljs.core.truth_(inst_28944)){
var statearr_29004_29058 = state_28981__$1;
(statearr_29004_29058[(1)] = (23));

} else {
var statearr_29005_29059 = state_28981__$1;
(statearr_29005_29059[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (36))){
var inst_28931 = (state_28981[(12)]);
var inst_28908 = inst_28931;
var state_28981__$1 = (function (){var statearr_29006 = state_28981;
(statearr_29006[(7)] = inst_28908);

return statearr_29006;
})();
var statearr_29007_29060 = state_28981__$1;
(statearr_29007_29060[(2)] = null);

(statearr_29007_29060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (29))){
var inst_28955 = (state_28981[(10)]);
var state_28981__$1 = state_28981;
var statearr_29008_29061 = state_28981__$1;
(statearr_29008_29061[(2)] = inst_28955);

(statearr_29008_29061[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (6))){
var state_28981__$1 = state_28981;
var statearr_29009_29062 = state_28981__$1;
(statearr_29009_29062[(2)] = false);

(statearr_29009_29062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (28))){
var inst_28951 = (state_28981[(2)]);
var inst_28952 = calc_state.call(null);
var inst_28908 = inst_28952;
var state_28981__$1 = (function (){var statearr_29010 = state_28981;
(statearr_29010[(15)] = inst_28951);

(statearr_29010[(7)] = inst_28908);

return statearr_29010;
})();
var statearr_29011_29063 = state_28981__$1;
(statearr_29011_29063[(2)] = null);

(statearr_29011_29063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (25))){
var inst_28977 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_29012_29064 = state_28981__$1;
(statearr_29012_29064[(2)] = inst_28977);

(statearr_29012_29064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (34))){
var inst_28975 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_29013_29065 = state_28981__$1;
(statearr_29013_29065[(2)] = inst_28975);

(statearr_29013_29065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (17))){
var state_28981__$1 = state_28981;
var statearr_29014_29066 = state_28981__$1;
(statearr_29014_29066[(2)] = false);

(statearr_29014_29066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (3))){
var state_28981__$1 = state_28981;
var statearr_29015_29067 = state_28981__$1;
(statearr_29015_29067[(2)] = false);

(statearr_29015_29067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (12))){
var inst_28979 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28981__$1,inst_28979);
} else {
if((state_val_28982 === (2))){
var inst_28883 = (state_28981[(8)]);
var inst_28888 = inst_28883.cljs$lang$protocol_mask$partition0$;
var inst_28889 = (inst_28888 & (64));
var inst_28890 = inst_28883.cljs$core$ISeq$;
var inst_28891 = (cljs.core.PROTOCOL_SENTINEL === inst_28890);
var inst_28892 = ((inst_28889) || (inst_28891));
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28892)){
var statearr_29016_29068 = state_28981__$1;
(statearr_29016_29068[(1)] = (5));

} else {
var statearr_29017_29069 = state_28981__$1;
(statearr_29017_29069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (23))){
var inst_28940 = (state_28981[(14)]);
var inst_28946 = (inst_28940 == null);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28946)){
var statearr_29018_29070 = state_28981__$1;
(statearr_29018_29070[(1)] = (26));

} else {
var statearr_29019_29071 = state_28981__$1;
(statearr_29019_29071[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (35))){
var inst_28966 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
if(cljs.core.truth_(inst_28966)){
var statearr_29020_29072 = state_28981__$1;
(statearr_29020_29072[(1)] = (36));

} else {
var statearr_29021_29073 = state_28981__$1;
(statearr_29021_29073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (19))){
var inst_28908 = (state_28981[(7)]);
var inst_28928 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28908);
var state_28981__$1 = state_28981;
var statearr_29022_29074 = state_28981__$1;
(statearr_29022_29074[(2)] = inst_28928);

(statearr_29022_29074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (11))){
var inst_28908 = (state_28981[(7)]);
var inst_28912 = (inst_28908 == null);
var inst_28913 = cljs.core.not.call(null,inst_28912);
var state_28981__$1 = state_28981;
if(inst_28913){
var statearr_29023_29075 = state_28981__$1;
(statearr_29023_29075[(1)] = (13));

} else {
var statearr_29024_29076 = state_28981__$1;
(statearr_29024_29076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (9))){
var inst_28883 = (state_28981[(8)]);
var state_28981__$1 = state_28981;
var statearr_29025_29077 = state_28981__$1;
(statearr_29025_29077[(2)] = inst_28883);

(statearr_29025_29077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (5))){
var state_28981__$1 = state_28981;
var statearr_29026_29078 = state_28981__$1;
(statearr_29026_29078[(2)] = true);

(statearr_29026_29078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (14))){
var state_28981__$1 = state_28981;
var statearr_29027_29079 = state_28981__$1;
(statearr_29027_29079[(2)] = false);

(statearr_29027_29079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (26))){
var inst_28941 = (state_28981[(9)]);
var inst_28948 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28941);
var state_28981__$1 = state_28981;
var statearr_29028_29080 = state_28981__$1;
(statearr_29028_29080[(2)] = inst_28948);

(statearr_29028_29080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (16))){
var state_28981__$1 = state_28981;
var statearr_29029_29081 = state_28981__$1;
(statearr_29029_29081[(2)] = true);

(statearr_29029_29081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (38))){
var inst_28971 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_29030_29082 = state_28981__$1;
(statearr_29030_29082[(2)] = inst_28971);

(statearr_29030_29082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (30))){
var inst_28941 = (state_28981[(9)]);
var inst_28932 = (state_28981[(11)]);
var inst_28933 = (state_28981[(13)]);
var inst_28958 = cljs.core.empty_QMARK_.call(null,inst_28932);
var inst_28959 = inst_28933.call(null,inst_28941);
var inst_28960 = cljs.core.not.call(null,inst_28959);
var inst_28961 = ((inst_28958) && (inst_28960));
var state_28981__$1 = state_28981;
var statearr_29031_29083 = state_28981__$1;
(statearr_29031_29083[(2)] = inst_28961);

(statearr_29031_29083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (10))){
var inst_28883 = (state_28981[(8)]);
var inst_28904 = (state_28981[(2)]);
var inst_28905 = cljs.core.get.call(null,inst_28904,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28906 = cljs.core.get.call(null,inst_28904,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28907 = cljs.core.get.call(null,inst_28904,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28908 = inst_28883;
var state_28981__$1 = (function (){var statearr_29032 = state_28981;
(statearr_29032[(7)] = inst_28908);

(statearr_29032[(16)] = inst_28905);

(statearr_29032[(17)] = inst_28907);

(statearr_29032[(18)] = inst_28906);

return statearr_29032;
})();
var statearr_29033_29084 = state_28981__$1;
(statearr_29033_29084[(2)] = null);

(statearr_29033_29084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (18))){
var inst_28923 = (state_28981[(2)]);
var state_28981__$1 = state_28981;
var statearr_29034_29085 = state_28981__$1;
(statearr_29034_29085[(2)] = inst_28923);

(statearr_29034_29085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (37))){
var state_28981__$1 = state_28981;
var statearr_29035_29086 = state_28981__$1;
(statearr_29035_29086[(2)] = null);

(statearr_29035_29086[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28982 === (8))){
var inst_28883 = (state_28981[(8)]);
var inst_28901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28883);
var state_28981__$1 = state_28981;
var statearr_29036_29087 = state_28981__$1;
(statearr_29036_29087[(2)] = inst_28901);

(statearr_29036_29087[(1)] = (10));


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
});})(c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27887__auto__,c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27888__auto__ = null;
var cljs$core$async$mix_$_state_machine__27888__auto____0 = (function (){
var statearr_29037 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29037[(0)] = cljs$core$async$mix_$_state_machine__27888__auto__);

(statearr_29037[(1)] = (1));

return statearr_29037;
});
var cljs$core$async$mix_$_state_machine__27888__auto____1 = (function (state_28981){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_28981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29038){if((e29038 instanceof Object)){
var ex__27891__auto__ = e29038;
var statearr_29039_29088 = state_28981;
(statearr_29039_29088[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29038;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29089 = state_28981;
state_28981 = G__29089;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27888__auto__ = function(state_28981){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27888__auto____1.call(this,state_28981);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27888__auto____0;
cljs$core$async$mix_$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27888__auto____1;
return cljs$core$async$mix_$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27984__auto__ = (function (){var statearr_29040 = f__27983__auto__.call(null);
(statearr_29040[(6)] = c__27982__auto___29041);

return statearr_29040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__29091 = arguments.length;
switch (G__29091) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__29095 = arguments.length;
switch (G__29095) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__29093_SHARP_){
if(cljs.core.truth_(p1__29093_SHARP_.call(null,topic))){
return p1__29093_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29093_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29096 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29096 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29097){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29097 = meta29097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29098,meta29097__$1){
var self__ = this;
var _29098__$1 = this;
return (new cljs.core.async.t_cljs$core$async29096(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29097__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29098){
var self__ = this;
var _29098__$1 = this;
return self__.meta29097;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29097","meta29097",657514717,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29096";

cljs.core.async.t_cljs$core$async29096.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29096");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29096.
 */
cljs.core.async.__GT_t_cljs$core$async29096 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29097){
return (new cljs.core.async.t_cljs$core$async29096(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29097));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29096(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27982__auto___29216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29216,mults,ensure_mult,p){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29216,mults,ensure_mult,p){
return (function (state_29170){
var state_val_29171 = (state_29170[(1)]);
if((state_val_29171 === (7))){
var inst_29166 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29172_29217 = state_29170__$1;
(statearr_29172_29217[(2)] = inst_29166);

(statearr_29172_29217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (20))){
var state_29170__$1 = state_29170;
var statearr_29173_29218 = state_29170__$1;
(statearr_29173_29218[(2)] = null);

(statearr_29173_29218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (1))){
var state_29170__$1 = state_29170;
var statearr_29174_29219 = state_29170__$1;
(statearr_29174_29219[(2)] = null);

(statearr_29174_29219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (24))){
var inst_29149 = (state_29170[(7)]);
var inst_29158 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29149);
var state_29170__$1 = state_29170;
var statearr_29175_29220 = state_29170__$1;
(statearr_29175_29220[(2)] = inst_29158);

(statearr_29175_29220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (4))){
var inst_29101 = (state_29170[(8)]);
var inst_29101__$1 = (state_29170[(2)]);
var inst_29102 = (inst_29101__$1 == null);
var state_29170__$1 = (function (){var statearr_29176 = state_29170;
(statearr_29176[(8)] = inst_29101__$1);

return statearr_29176;
})();
if(cljs.core.truth_(inst_29102)){
var statearr_29177_29221 = state_29170__$1;
(statearr_29177_29221[(1)] = (5));

} else {
var statearr_29178_29222 = state_29170__$1;
(statearr_29178_29222[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (15))){
var inst_29143 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29179_29223 = state_29170__$1;
(statearr_29179_29223[(2)] = inst_29143);

(statearr_29179_29223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (21))){
var inst_29163 = (state_29170[(2)]);
var state_29170__$1 = (function (){var statearr_29180 = state_29170;
(statearr_29180[(9)] = inst_29163);

return statearr_29180;
})();
var statearr_29181_29224 = state_29170__$1;
(statearr_29181_29224[(2)] = null);

(statearr_29181_29224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (13))){
var inst_29125 = (state_29170[(10)]);
var inst_29127 = cljs.core.chunked_seq_QMARK_.call(null,inst_29125);
var state_29170__$1 = state_29170;
if(inst_29127){
var statearr_29182_29225 = state_29170__$1;
(statearr_29182_29225[(1)] = (16));

} else {
var statearr_29183_29226 = state_29170__$1;
(statearr_29183_29226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (22))){
var inst_29155 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
if(cljs.core.truth_(inst_29155)){
var statearr_29184_29227 = state_29170__$1;
(statearr_29184_29227[(1)] = (23));

} else {
var statearr_29185_29228 = state_29170__$1;
(statearr_29185_29228[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (6))){
var inst_29151 = (state_29170[(11)]);
var inst_29149 = (state_29170[(7)]);
var inst_29101 = (state_29170[(8)]);
var inst_29149__$1 = topic_fn.call(null,inst_29101);
var inst_29150 = cljs.core.deref.call(null,mults);
var inst_29151__$1 = cljs.core.get.call(null,inst_29150,inst_29149__$1);
var state_29170__$1 = (function (){var statearr_29186 = state_29170;
(statearr_29186[(11)] = inst_29151__$1);

(statearr_29186[(7)] = inst_29149__$1);

return statearr_29186;
})();
if(cljs.core.truth_(inst_29151__$1)){
var statearr_29187_29229 = state_29170__$1;
(statearr_29187_29229[(1)] = (19));

} else {
var statearr_29188_29230 = state_29170__$1;
(statearr_29188_29230[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (25))){
var inst_29160 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29189_29231 = state_29170__$1;
(statearr_29189_29231[(2)] = inst_29160);

(statearr_29189_29231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (17))){
var inst_29125 = (state_29170[(10)]);
var inst_29134 = cljs.core.first.call(null,inst_29125);
var inst_29135 = cljs.core.async.muxch_STAR_.call(null,inst_29134);
var inst_29136 = cljs.core.async.close_BANG_.call(null,inst_29135);
var inst_29137 = cljs.core.next.call(null,inst_29125);
var inst_29111 = inst_29137;
var inst_29112 = null;
var inst_29113 = (0);
var inst_29114 = (0);
var state_29170__$1 = (function (){var statearr_29190 = state_29170;
(statearr_29190[(12)] = inst_29113);

(statearr_29190[(13)] = inst_29112);

(statearr_29190[(14)] = inst_29114);

(statearr_29190[(15)] = inst_29111);

(statearr_29190[(16)] = inst_29136);

return statearr_29190;
})();
var statearr_29191_29232 = state_29170__$1;
(statearr_29191_29232[(2)] = null);

(statearr_29191_29232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (3))){
var inst_29168 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29170__$1,inst_29168);
} else {
if((state_val_29171 === (12))){
var inst_29145 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29192_29233 = state_29170__$1;
(statearr_29192_29233[(2)] = inst_29145);

(statearr_29192_29233[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (2))){
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29170__$1,(4),ch);
} else {
if((state_val_29171 === (23))){
var state_29170__$1 = state_29170;
var statearr_29193_29234 = state_29170__$1;
(statearr_29193_29234[(2)] = null);

(statearr_29193_29234[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (19))){
var inst_29151 = (state_29170[(11)]);
var inst_29101 = (state_29170[(8)]);
var inst_29153 = cljs.core.async.muxch_STAR_.call(null,inst_29151);
var state_29170__$1 = state_29170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29170__$1,(22),inst_29153,inst_29101);
} else {
if((state_val_29171 === (11))){
var inst_29125 = (state_29170[(10)]);
var inst_29111 = (state_29170[(15)]);
var inst_29125__$1 = cljs.core.seq.call(null,inst_29111);
var state_29170__$1 = (function (){var statearr_29194 = state_29170;
(statearr_29194[(10)] = inst_29125__$1);

return statearr_29194;
})();
if(inst_29125__$1){
var statearr_29195_29235 = state_29170__$1;
(statearr_29195_29235[(1)] = (13));

} else {
var statearr_29196_29236 = state_29170__$1;
(statearr_29196_29236[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (9))){
var inst_29147 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29197_29237 = state_29170__$1;
(statearr_29197_29237[(2)] = inst_29147);

(statearr_29197_29237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (5))){
var inst_29108 = cljs.core.deref.call(null,mults);
var inst_29109 = cljs.core.vals.call(null,inst_29108);
var inst_29110 = cljs.core.seq.call(null,inst_29109);
var inst_29111 = inst_29110;
var inst_29112 = null;
var inst_29113 = (0);
var inst_29114 = (0);
var state_29170__$1 = (function (){var statearr_29198 = state_29170;
(statearr_29198[(12)] = inst_29113);

(statearr_29198[(13)] = inst_29112);

(statearr_29198[(14)] = inst_29114);

(statearr_29198[(15)] = inst_29111);

return statearr_29198;
})();
var statearr_29199_29238 = state_29170__$1;
(statearr_29199_29238[(2)] = null);

(statearr_29199_29238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (14))){
var state_29170__$1 = state_29170;
var statearr_29203_29239 = state_29170__$1;
(statearr_29203_29239[(2)] = null);

(statearr_29203_29239[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (16))){
var inst_29125 = (state_29170[(10)]);
var inst_29129 = cljs.core.chunk_first.call(null,inst_29125);
var inst_29130 = cljs.core.chunk_rest.call(null,inst_29125);
var inst_29131 = cljs.core.count.call(null,inst_29129);
var inst_29111 = inst_29130;
var inst_29112 = inst_29129;
var inst_29113 = inst_29131;
var inst_29114 = (0);
var state_29170__$1 = (function (){var statearr_29204 = state_29170;
(statearr_29204[(12)] = inst_29113);

(statearr_29204[(13)] = inst_29112);

(statearr_29204[(14)] = inst_29114);

(statearr_29204[(15)] = inst_29111);

return statearr_29204;
})();
var statearr_29205_29240 = state_29170__$1;
(statearr_29205_29240[(2)] = null);

(statearr_29205_29240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (10))){
var inst_29113 = (state_29170[(12)]);
var inst_29112 = (state_29170[(13)]);
var inst_29114 = (state_29170[(14)]);
var inst_29111 = (state_29170[(15)]);
var inst_29119 = cljs.core._nth.call(null,inst_29112,inst_29114);
var inst_29120 = cljs.core.async.muxch_STAR_.call(null,inst_29119);
var inst_29121 = cljs.core.async.close_BANG_.call(null,inst_29120);
var inst_29122 = (inst_29114 + (1));
var tmp29200 = inst_29113;
var tmp29201 = inst_29112;
var tmp29202 = inst_29111;
var inst_29111__$1 = tmp29202;
var inst_29112__$1 = tmp29201;
var inst_29113__$1 = tmp29200;
var inst_29114__$1 = inst_29122;
var state_29170__$1 = (function (){var statearr_29206 = state_29170;
(statearr_29206[(12)] = inst_29113__$1);

(statearr_29206[(17)] = inst_29121);

(statearr_29206[(13)] = inst_29112__$1);

(statearr_29206[(14)] = inst_29114__$1);

(statearr_29206[(15)] = inst_29111__$1);

return statearr_29206;
})();
var statearr_29207_29241 = state_29170__$1;
(statearr_29207_29241[(2)] = null);

(statearr_29207_29241[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (18))){
var inst_29140 = (state_29170[(2)]);
var state_29170__$1 = state_29170;
var statearr_29208_29242 = state_29170__$1;
(statearr_29208_29242[(2)] = inst_29140);

(statearr_29208_29242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29171 === (8))){
var inst_29113 = (state_29170[(12)]);
var inst_29114 = (state_29170[(14)]);
var inst_29116 = (inst_29114 < inst_29113);
var inst_29117 = inst_29116;
var state_29170__$1 = state_29170;
if(cljs.core.truth_(inst_29117)){
var statearr_29209_29243 = state_29170__$1;
(statearr_29209_29243[(1)] = (10));

} else {
var statearr_29210_29244 = state_29170__$1;
(statearr_29210_29244[(1)] = (11));

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
});})(c__27982__auto___29216,mults,ensure_mult,p))
;
return ((function (switch__27887__auto__,c__27982__auto___29216,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29211[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29211[(1)] = (1));

return statearr_29211;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29170){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29212){if((e29212 instanceof Object)){
var ex__27891__auto__ = e29212;
var statearr_29213_29245 = state_29170;
(statearr_29213_29245[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29246 = state_29170;
state_29170 = G__29246;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29216,mults,ensure_mult,p))
})();
var state__27984__auto__ = (function (){var statearr_29214 = f__27983__auto__.call(null);
(statearr_29214[(6)] = c__27982__auto___29216);

return statearr_29214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29216,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__29248 = arguments.length;
switch (G__29248) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__29251 = arguments.length;
switch (G__29251) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__29254 = arguments.length;
switch (G__29254) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27982__auto___29321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29293){
var state_val_29294 = (state_29293[(1)]);
if((state_val_29294 === (7))){
var state_29293__$1 = state_29293;
var statearr_29295_29322 = state_29293__$1;
(statearr_29295_29322[(2)] = null);

(statearr_29295_29322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (1))){
var state_29293__$1 = state_29293;
var statearr_29296_29323 = state_29293__$1;
(statearr_29296_29323[(2)] = null);

(statearr_29296_29323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (4))){
var inst_29257 = (state_29293[(7)]);
var inst_29259 = (inst_29257 < cnt);
var state_29293__$1 = state_29293;
if(cljs.core.truth_(inst_29259)){
var statearr_29297_29324 = state_29293__$1;
(statearr_29297_29324[(1)] = (6));

} else {
var statearr_29298_29325 = state_29293__$1;
(statearr_29298_29325[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (15))){
var inst_29289 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29299_29326 = state_29293__$1;
(statearr_29299_29326[(2)] = inst_29289);

(statearr_29299_29326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (13))){
var inst_29282 = cljs.core.async.close_BANG_.call(null,out);
var state_29293__$1 = state_29293;
var statearr_29300_29327 = state_29293__$1;
(statearr_29300_29327[(2)] = inst_29282);

(statearr_29300_29327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (6))){
var state_29293__$1 = state_29293;
var statearr_29301_29328 = state_29293__$1;
(statearr_29301_29328[(2)] = null);

(statearr_29301_29328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (3))){
var inst_29291 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29293__$1,inst_29291);
} else {
if((state_val_29294 === (12))){
var inst_29279 = (state_29293[(8)]);
var inst_29279__$1 = (state_29293[(2)]);
var inst_29280 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29279__$1);
var state_29293__$1 = (function (){var statearr_29302 = state_29293;
(statearr_29302[(8)] = inst_29279__$1);

return statearr_29302;
})();
if(cljs.core.truth_(inst_29280)){
var statearr_29303_29329 = state_29293__$1;
(statearr_29303_29329[(1)] = (13));

} else {
var statearr_29304_29330 = state_29293__$1;
(statearr_29304_29330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (2))){
var inst_29256 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29257 = (0);
var state_29293__$1 = (function (){var statearr_29305 = state_29293;
(statearr_29305[(7)] = inst_29257);

(statearr_29305[(9)] = inst_29256);

return statearr_29305;
})();
var statearr_29306_29331 = state_29293__$1;
(statearr_29306_29331[(2)] = null);

(statearr_29306_29331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (11))){
var inst_29257 = (state_29293[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29293,(10),Object,null,(9));
var inst_29266 = chs__$1.call(null,inst_29257);
var inst_29267 = done.call(null,inst_29257);
var inst_29268 = cljs.core.async.take_BANG_.call(null,inst_29266,inst_29267);
var state_29293__$1 = state_29293;
var statearr_29307_29332 = state_29293__$1;
(statearr_29307_29332[(2)] = inst_29268);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (9))){
var inst_29257 = (state_29293[(7)]);
var inst_29270 = (state_29293[(2)]);
var inst_29271 = (inst_29257 + (1));
var inst_29257__$1 = inst_29271;
var state_29293__$1 = (function (){var statearr_29308 = state_29293;
(statearr_29308[(7)] = inst_29257__$1);

(statearr_29308[(10)] = inst_29270);

return statearr_29308;
})();
var statearr_29309_29333 = state_29293__$1;
(statearr_29309_29333[(2)] = null);

(statearr_29309_29333[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (5))){
var inst_29277 = (state_29293[(2)]);
var state_29293__$1 = (function (){var statearr_29310 = state_29293;
(statearr_29310[(11)] = inst_29277);

return statearr_29310;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29293__$1,(12),dchan);
} else {
if((state_val_29294 === (14))){
var inst_29279 = (state_29293[(8)]);
var inst_29284 = cljs.core.apply.call(null,f,inst_29279);
var state_29293__$1 = state_29293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29293__$1,(16),out,inst_29284);
} else {
if((state_val_29294 === (16))){
var inst_29286 = (state_29293[(2)]);
var state_29293__$1 = (function (){var statearr_29311 = state_29293;
(statearr_29311[(12)] = inst_29286);

return statearr_29311;
})();
var statearr_29312_29334 = state_29293__$1;
(statearr_29312_29334[(2)] = null);

(statearr_29312_29334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (10))){
var inst_29261 = (state_29293[(2)]);
var inst_29262 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29293__$1 = (function (){var statearr_29313 = state_29293;
(statearr_29313[(13)] = inst_29261);

return statearr_29313;
})();
var statearr_29314_29335 = state_29293__$1;
(statearr_29314_29335[(2)] = inst_29262);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29294 === (8))){
var inst_29275 = (state_29293[(2)]);
var state_29293__$1 = state_29293;
var statearr_29315_29336 = state_29293__$1;
(statearr_29315_29336[(2)] = inst_29275);

(statearr_29315_29336[(1)] = (5));


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
});})(c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27887__auto__,c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29316[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29316[(1)] = (1));

return statearr_29316;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29293){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29317){if((e29317 instanceof Object)){
var ex__27891__auto__ = e29317;
var statearr_29318_29337 = state_29293;
(statearr_29318_29337[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29338 = state_29293;
state_29293 = G__29338;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27984__auto__ = (function (){var statearr_29319 = f__27983__auto__.call(null);
(statearr_29319[(6)] = c__27982__auto___29321);

return statearr_29319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29321,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__29341 = arguments.length;
switch (G__29341) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29395 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29395,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29395,out){
return (function (state_29373){
var state_val_29374 = (state_29373[(1)]);
if((state_val_29374 === (7))){
var inst_29352 = (state_29373[(7)]);
var inst_29353 = (state_29373[(8)]);
var inst_29352__$1 = (state_29373[(2)]);
var inst_29353__$1 = cljs.core.nth.call(null,inst_29352__$1,(0),null);
var inst_29354 = cljs.core.nth.call(null,inst_29352__$1,(1),null);
var inst_29355 = (inst_29353__$1 == null);
var state_29373__$1 = (function (){var statearr_29375 = state_29373;
(statearr_29375[(9)] = inst_29354);

(statearr_29375[(7)] = inst_29352__$1);

(statearr_29375[(8)] = inst_29353__$1);

return statearr_29375;
})();
if(cljs.core.truth_(inst_29355)){
var statearr_29376_29396 = state_29373__$1;
(statearr_29376_29396[(1)] = (8));

} else {
var statearr_29377_29397 = state_29373__$1;
(statearr_29377_29397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (1))){
var inst_29342 = cljs.core.vec.call(null,chs);
var inst_29343 = inst_29342;
var state_29373__$1 = (function (){var statearr_29378 = state_29373;
(statearr_29378[(10)] = inst_29343);

return statearr_29378;
})();
var statearr_29379_29398 = state_29373__$1;
(statearr_29379_29398[(2)] = null);

(statearr_29379_29398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (4))){
var inst_29343 = (state_29373[(10)]);
var state_29373__$1 = state_29373;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29373__$1,(7),inst_29343);
} else {
if((state_val_29374 === (6))){
var inst_29369 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29380_29399 = state_29373__$1;
(statearr_29380_29399[(2)] = inst_29369);

(statearr_29380_29399[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (3))){
var inst_29371 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29373__$1,inst_29371);
} else {
if((state_val_29374 === (2))){
var inst_29343 = (state_29373[(10)]);
var inst_29345 = cljs.core.count.call(null,inst_29343);
var inst_29346 = (inst_29345 > (0));
var state_29373__$1 = state_29373;
if(cljs.core.truth_(inst_29346)){
var statearr_29382_29400 = state_29373__$1;
(statearr_29382_29400[(1)] = (4));

} else {
var statearr_29383_29401 = state_29373__$1;
(statearr_29383_29401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (11))){
var inst_29343 = (state_29373[(10)]);
var inst_29362 = (state_29373[(2)]);
var tmp29381 = inst_29343;
var inst_29343__$1 = tmp29381;
var state_29373__$1 = (function (){var statearr_29384 = state_29373;
(statearr_29384[(11)] = inst_29362);

(statearr_29384[(10)] = inst_29343__$1);

return statearr_29384;
})();
var statearr_29385_29402 = state_29373__$1;
(statearr_29385_29402[(2)] = null);

(statearr_29385_29402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (9))){
var inst_29353 = (state_29373[(8)]);
var state_29373__$1 = state_29373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29373__$1,(11),out,inst_29353);
} else {
if((state_val_29374 === (5))){
var inst_29367 = cljs.core.async.close_BANG_.call(null,out);
var state_29373__$1 = state_29373;
var statearr_29386_29403 = state_29373__$1;
(statearr_29386_29403[(2)] = inst_29367);

(statearr_29386_29403[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (10))){
var inst_29365 = (state_29373[(2)]);
var state_29373__$1 = state_29373;
var statearr_29387_29404 = state_29373__$1;
(statearr_29387_29404[(2)] = inst_29365);

(statearr_29387_29404[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29374 === (8))){
var inst_29354 = (state_29373[(9)]);
var inst_29352 = (state_29373[(7)]);
var inst_29353 = (state_29373[(8)]);
var inst_29343 = (state_29373[(10)]);
var inst_29357 = (function (){var cs = inst_29343;
var vec__29348 = inst_29352;
var v = inst_29353;
var c = inst_29354;
return ((function (cs,vec__29348,v,c,inst_29354,inst_29352,inst_29353,inst_29343,state_val_29374,c__27982__auto___29395,out){
return (function (p1__29339_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29339_SHARP_);
});
;})(cs,vec__29348,v,c,inst_29354,inst_29352,inst_29353,inst_29343,state_val_29374,c__27982__auto___29395,out))
})();
var inst_29358 = cljs.core.filterv.call(null,inst_29357,inst_29343);
var inst_29343__$1 = inst_29358;
var state_29373__$1 = (function (){var statearr_29388 = state_29373;
(statearr_29388[(10)] = inst_29343__$1);

return statearr_29388;
})();
var statearr_29389_29405 = state_29373__$1;
(statearr_29389_29405[(2)] = null);

(statearr_29389_29405[(1)] = (2));


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
});})(c__27982__auto___29395,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29395,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29390[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29373){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__27891__auto__ = e29391;
var statearr_29392_29406 = state_29373;
(statearr_29392_29406[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29407 = state_29373;
state_29373 = G__29407;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29373){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29395,out))
})();
var state__27984__auto__ = (function (){var statearr_29393 = f__27983__auto__.call(null);
(statearr_29393[(6)] = c__27982__auto___29395);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29395,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__29409 = arguments.length;
switch (G__29409) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29454,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29454,out){
return (function (state_29433){
var state_val_29434 = (state_29433[(1)]);
if((state_val_29434 === (7))){
var inst_29415 = (state_29433[(7)]);
var inst_29415__$1 = (state_29433[(2)]);
var inst_29416 = (inst_29415__$1 == null);
var inst_29417 = cljs.core.not.call(null,inst_29416);
var state_29433__$1 = (function (){var statearr_29435 = state_29433;
(statearr_29435[(7)] = inst_29415__$1);

return statearr_29435;
})();
if(inst_29417){
var statearr_29436_29455 = state_29433__$1;
(statearr_29436_29455[(1)] = (8));

} else {
var statearr_29437_29456 = state_29433__$1;
(statearr_29437_29456[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (1))){
var inst_29410 = (0);
var state_29433__$1 = (function (){var statearr_29438 = state_29433;
(statearr_29438[(8)] = inst_29410);

return statearr_29438;
})();
var statearr_29439_29457 = state_29433__$1;
(statearr_29439_29457[(2)] = null);

(statearr_29439_29457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (4))){
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29433__$1,(7),ch);
} else {
if((state_val_29434 === (6))){
var inst_29428 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29440_29458 = state_29433__$1;
(statearr_29440_29458[(2)] = inst_29428);

(statearr_29440_29458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (3))){
var inst_29430 = (state_29433[(2)]);
var inst_29431 = cljs.core.async.close_BANG_.call(null,out);
var state_29433__$1 = (function (){var statearr_29441 = state_29433;
(statearr_29441[(9)] = inst_29430);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29433__$1,inst_29431);
} else {
if((state_val_29434 === (2))){
var inst_29410 = (state_29433[(8)]);
var inst_29412 = (inst_29410 < n);
var state_29433__$1 = state_29433;
if(cljs.core.truth_(inst_29412)){
var statearr_29442_29459 = state_29433__$1;
(statearr_29442_29459[(1)] = (4));

} else {
var statearr_29443_29460 = state_29433__$1;
(statearr_29443_29460[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (11))){
var inst_29410 = (state_29433[(8)]);
var inst_29420 = (state_29433[(2)]);
var inst_29421 = (inst_29410 + (1));
var inst_29410__$1 = inst_29421;
var state_29433__$1 = (function (){var statearr_29444 = state_29433;
(statearr_29444[(8)] = inst_29410__$1);

(statearr_29444[(10)] = inst_29420);

return statearr_29444;
})();
var statearr_29445_29461 = state_29433__$1;
(statearr_29445_29461[(2)] = null);

(statearr_29445_29461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (9))){
var state_29433__$1 = state_29433;
var statearr_29446_29462 = state_29433__$1;
(statearr_29446_29462[(2)] = null);

(statearr_29446_29462[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (5))){
var state_29433__$1 = state_29433;
var statearr_29447_29463 = state_29433__$1;
(statearr_29447_29463[(2)] = null);

(statearr_29447_29463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (10))){
var inst_29425 = (state_29433[(2)]);
var state_29433__$1 = state_29433;
var statearr_29448_29464 = state_29433__$1;
(statearr_29448_29464[(2)] = inst_29425);

(statearr_29448_29464[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29434 === (8))){
var inst_29415 = (state_29433[(7)]);
var state_29433__$1 = state_29433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29433__$1,(11),out,inst_29415);
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
});})(c__27982__auto___29454,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29454,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29449 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29449[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29449[(1)] = (1));

return statearr_29449;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29433){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29450){if((e29450 instanceof Object)){
var ex__27891__auto__ = e29450;
var statearr_29451_29465 = state_29433;
(statearr_29451_29465[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29466 = state_29433;
state_29433 = G__29466;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29433){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29454,out))
})();
var state__27984__auto__ = (function (){var statearr_29452 = f__27983__auto__.call(null);
(statearr_29452[(6)] = c__27982__auto___29454);

return statearr_29452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29454,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29468 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29468 = (function (f,ch,meta29469){
this.f = f;
this.ch = ch;
this.meta29469 = meta29469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29470,meta29469__$1){
var self__ = this;
var _29470__$1 = this;
return (new cljs.core.async.t_cljs$core$async29468(self__.f,self__.ch,meta29469__$1));
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29470){
var self__ = this;
var _29470__$1 = this;
return self__.meta29469;
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29471 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29471 = (function (f,ch,meta29469,_,fn1,meta29472){
this.f = f;
this.ch = ch;
this.meta29469 = meta29469;
this._ = _;
this.fn1 = fn1;
this.meta29472 = meta29472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29473,meta29472__$1){
var self__ = this;
var _29473__$1 = this;
return (new cljs.core.async.t_cljs$core$async29471(self__.f,self__.ch,self__.meta29469,self__._,self__.fn1,meta29472__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29473){
var self__ = this;
var _29473__$1 = this;
return self__.meta29472;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29467_SHARP_){
return f1.call(null,(((p1__29467_SHARP_ == null))?null:self__.f.call(null,p1__29467_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29469","meta29469",768769113,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29468","cljs.core.async/t_cljs$core$async29468",-1597406639,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29472","meta29472",1774933946,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29471.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29471.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29471";

cljs.core.async.t_cljs$core$async29471.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29471");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29471.
 */
cljs.core.async.__GT_t_cljs$core$async29471 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29471(f__$1,ch__$1,meta29469__$1,___$2,fn1__$1,meta29472){
return (new cljs.core.async.t_cljs$core$async29471(f__$1,ch__$1,meta29469__$1,___$2,fn1__$1,meta29472));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29471(self__.f,self__.ch,self__.meta29469,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29468.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29469","meta29469",768769113,null)], null);
});

cljs.core.async.t_cljs$core$async29468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29468";

cljs.core.async.t_cljs$core$async29468.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29468");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29468.
 */
cljs.core.async.__GT_t_cljs$core$async29468 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29468(f__$1,ch__$1,meta29469){
return (new cljs.core.async.t_cljs$core$async29468(f__$1,ch__$1,meta29469));
});

}

return (new cljs.core.async.t_cljs$core$async29468(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29474 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29474 = (function (f,ch,meta29475){
this.f = f;
this.ch = ch;
this.meta29475 = meta29475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29476,meta29475__$1){
var self__ = this;
var _29476__$1 = this;
return (new cljs.core.async.t_cljs$core$async29474(self__.f,self__.ch,meta29475__$1));
});

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29476){
var self__ = this;
var _29476__$1 = this;
return self__.meta29475;
});

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29475","meta29475",1543326998,null)], null);
});

cljs.core.async.t_cljs$core$async29474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29474";

cljs.core.async.t_cljs$core$async29474.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29474.
 */
cljs.core.async.__GT_t_cljs$core$async29474 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29474(f__$1,ch__$1,meta29475){
return (new cljs.core.async.t_cljs$core$async29474(f__$1,ch__$1,meta29475));
});

}

return (new cljs.core.async.t_cljs$core$async29474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29477 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29477 = (function (p,ch,meta29478){
this.p = p;
this.ch = ch;
this.meta29478 = meta29478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29479,meta29478__$1){
var self__ = this;
var _29479__$1 = this;
return (new cljs.core.async.t_cljs$core$async29477(self__.p,self__.ch,meta29478__$1));
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29479){
var self__ = this;
var _29479__$1 = this;
return self__.meta29478;
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29477.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29478","meta29478",-1437889921,null)], null);
});

cljs.core.async.t_cljs$core$async29477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29477";

cljs.core.async.t_cljs$core$async29477.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async29477");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29477.
 */
cljs.core.async.__GT_t_cljs$core$async29477 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29477(p__$1,ch__$1,meta29478){
return (new cljs.core.async.t_cljs$core$async29477(p__$1,ch__$1,meta29478));
});

}

return (new cljs.core.async.t_cljs$core$async29477(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__29481 = arguments.length;
switch (G__29481) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29521,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29521,out){
return (function (state_29502){
var state_val_29503 = (state_29502[(1)]);
if((state_val_29503 === (7))){
var inst_29498 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29504_29522 = state_29502__$1;
(statearr_29504_29522[(2)] = inst_29498);

(statearr_29504_29522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (1))){
var state_29502__$1 = state_29502;
var statearr_29505_29523 = state_29502__$1;
(statearr_29505_29523[(2)] = null);

(statearr_29505_29523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (4))){
var inst_29484 = (state_29502[(7)]);
var inst_29484__$1 = (state_29502[(2)]);
var inst_29485 = (inst_29484__$1 == null);
var state_29502__$1 = (function (){var statearr_29506 = state_29502;
(statearr_29506[(7)] = inst_29484__$1);

return statearr_29506;
})();
if(cljs.core.truth_(inst_29485)){
var statearr_29507_29524 = state_29502__$1;
(statearr_29507_29524[(1)] = (5));

} else {
var statearr_29508_29525 = state_29502__$1;
(statearr_29508_29525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (6))){
var inst_29484 = (state_29502[(7)]);
var inst_29489 = p.call(null,inst_29484);
var state_29502__$1 = state_29502;
if(cljs.core.truth_(inst_29489)){
var statearr_29509_29526 = state_29502__$1;
(statearr_29509_29526[(1)] = (8));

} else {
var statearr_29510_29527 = state_29502__$1;
(statearr_29510_29527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (3))){
var inst_29500 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29502__$1,inst_29500);
} else {
if((state_val_29503 === (2))){
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29502__$1,(4),ch);
} else {
if((state_val_29503 === (11))){
var inst_29492 = (state_29502[(2)]);
var state_29502__$1 = state_29502;
var statearr_29511_29528 = state_29502__$1;
(statearr_29511_29528[(2)] = inst_29492);

(statearr_29511_29528[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (9))){
var state_29502__$1 = state_29502;
var statearr_29512_29529 = state_29502__$1;
(statearr_29512_29529[(2)] = null);

(statearr_29512_29529[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (5))){
var inst_29487 = cljs.core.async.close_BANG_.call(null,out);
var state_29502__$1 = state_29502;
var statearr_29513_29530 = state_29502__$1;
(statearr_29513_29530[(2)] = inst_29487);

(statearr_29513_29530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (10))){
var inst_29495 = (state_29502[(2)]);
var state_29502__$1 = (function (){var statearr_29514 = state_29502;
(statearr_29514[(8)] = inst_29495);

return statearr_29514;
})();
var statearr_29515_29531 = state_29502__$1;
(statearr_29515_29531[(2)] = null);

(statearr_29515_29531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29503 === (8))){
var inst_29484 = (state_29502[(7)]);
var state_29502__$1 = state_29502;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29502__$1,(11),out,inst_29484);
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
});})(c__27982__auto___29521,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29521,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29516 = [null,null,null,null,null,null,null,null,null];
(statearr_29516[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29516[(1)] = (1));

return statearr_29516;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29502){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29517){if((e29517 instanceof Object)){
var ex__27891__auto__ = e29517;
var statearr_29518_29532 = state_29502;
(statearr_29518_29532[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29533 = state_29502;
state_29502 = G__29533;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29502){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29521,out))
})();
var state__27984__auto__ = (function (){var statearr_29519 = f__27983__auto__.call(null);
(statearr_29519[(6)] = c__27982__auto___29521);

return statearr_29519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29521,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__29535 = arguments.length;
switch (G__29535) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27982__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto__){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto__){
return (function (state_29598){
var state_val_29599 = (state_29598[(1)]);
if((state_val_29599 === (7))){
var inst_29594 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29600_29638 = state_29598__$1;
(statearr_29600_29638[(2)] = inst_29594);

(statearr_29600_29638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (20))){
var inst_29564 = (state_29598[(7)]);
var inst_29575 = (state_29598[(2)]);
var inst_29576 = cljs.core.next.call(null,inst_29564);
var inst_29550 = inst_29576;
var inst_29551 = null;
var inst_29552 = (0);
var inst_29553 = (0);
var state_29598__$1 = (function (){var statearr_29601 = state_29598;
(statearr_29601[(8)] = inst_29550);

(statearr_29601[(9)] = inst_29575);

(statearr_29601[(10)] = inst_29552);

(statearr_29601[(11)] = inst_29551);

(statearr_29601[(12)] = inst_29553);

return statearr_29601;
})();
var statearr_29602_29639 = state_29598__$1;
(statearr_29602_29639[(2)] = null);

(statearr_29602_29639[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (1))){
var state_29598__$1 = state_29598;
var statearr_29603_29640 = state_29598__$1;
(statearr_29603_29640[(2)] = null);

(statearr_29603_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (4))){
var inst_29539 = (state_29598[(13)]);
var inst_29539__$1 = (state_29598[(2)]);
var inst_29540 = (inst_29539__$1 == null);
var state_29598__$1 = (function (){var statearr_29604 = state_29598;
(statearr_29604[(13)] = inst_29539__$1);

return statearr_29604;
})();
if(cljs.core.truth_(inst_29540)){
var statearr_29605_29641 = state_29598__$1;
(statearr_29605_29641[(1)] = (5));

} else {
var statearr_29606_29642 = state_29598__$1;
(statearr_29606_29642[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (15))){
var state_29598__$1 = state_29598;
var statearr_29610_29643 = state_29598__$1;
(statearr_29610_29643[(2)] = null);

(statearr_29610_29643[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (21))){
var state_29598__$1 = state_29598;
var statearr_29611_29644 = state_29598__$1;
(statearr_29611_29644[(2)] = null);

(statearr_29611_29644[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (13))){
var inst_29550 = (state_29598[(8)]);
var inst_29552 = (state_29598[(10)]);
var inst_29551 = (state_29598[(11)]);
var inst_29553 = (state_29598[(12)]);
var inst_29560 = (state_29598[(2)]);
var inst_29561 = (inst_29553 + (1));
var tmp29607 = inst_29550;
var tmp29608 = inst_29552;
var tmp29609 = inst_29551;
var inst_29550__$1 = tmp29607;
var inst_29551__$1 = tmp29609;
var inst_29552__$1 = tmp29608;
var inst_29553__$1 = inst_29561;
var state_29598__$1 = (function (){var statearr_29612 = state_29598;
(statearr_29612[(8)] = inst_29550__$1);

(statearr_29612[(10)] = inst_29552__$1);

(statearr_29612[(14)] = inst_29560);

(statearr_29612[(11)] = inst_29551__$1);

(statearr_29612[(12)] = inst_29553__$1);

return statearr_29612;
})();
var statearr_29613_29645 = state_29598__$1;
(statearr_29613_29645[(2)] = null);

(statearr_29613_29645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (22))){
var state_29598__$1 = state_29598;
var statearr_29614_29646 = state_29598__$1;
(statearr_29614_29646[(2)] = null);

(statearr_29614_29646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (6))){
var inst_29539 = (state_29598[(13)]);
var inst_29548 = f.call(null,inst_29539);
var inst_29549 = cljs.core.seq.call(null,inst_29548);
var inst_29550 = inst_29549;
var inst_29551 = null;
var inst_29552 = (0);
var inst_29553 = (0);
var state_29598__$1 = (function (){var statearr_29615 = state_29598;
(statearr_29615[(8)] = inst_29550);

(statearr_29615[(10)] = inst_29552);

(statearr_29615[(11)] = inst_29551);

(statearr_29615[(12)] = inst_29553);

return statearr_29615;
})();
var statearr_29616_29647 = state_29598__$1;
(statearr_29616_29647[(2)] = null);

(statearr_29616_29647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (17))){
var inst_29564 = (state_29598[(7)]);
var inst_29568 = cljs.core.chunk_first.call(null,inst_29564);
var inst_29569 = cljs.core.chunk_rest.call(null,inst_29564);
var inst_29570 = cljs.core.count.call(null,inst_29568);
var inst_29550 = inst_29569;
var inst_29551 = inst_29568;
var inst_29552 = inst_29570;
var inst_29553 = (0);
var state_29598__$1 = (function (){var statearr_29617 = state_29598;
(statearr_29617[(8)] = inst_29550);

(statearr_29617[(10)] = inst_29552);

(statearr_29617[(11)] = inst_29551);

(statearr_29617[(12)] = inst_29553);

return statearr_29617;
})();
var statearr_29618_29648 = state_29598__$1;
(statearr_29618_29648[(2)] = null);

(statearr_29618_29648[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (3))){
var inst_29596 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29598__$1,inst_29596);
} else {
if((state_val_29599 === (12))){
var inst_29584 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29619_29649 = state_29598__$1;
(statearr_29619_29649[(2)] = inst_29584);

(statearr_29619_29649[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (2))){
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29598__$1,(4),in$);
} else {
if((state_val_29599 === (23))){
var inst_29592 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29620_29650 = state_29598__$1;
(statearr_29620_29650[(2)] = inst_29592);

(statearr_29620_29650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (19))){
var inst_29579 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29621_29651 = state_29598__$1;
(statearr_29621_29651[(2)] = inst_29579);

(statearr_29621_29651[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (11))){
var inst_29550 = (state_29598[(8)]);
var inst_29564 = (state_29598[(7)]);
var inst_29564__$1 = cljs.core.seq.call(null,inst_29550);
var state_29598__$1 = (function (){var statearr_29622 = state_29598;
(statearr_29622[(7)] = inst_29564__$1);

return statearr_29622;
})();
if(inst_29564__$1){
var statearr_29623_29652 = state_29598__$1;
(statearr_29623_29652[(1)] = (14));

} else {
var statearr_29624_29653 = state_29598__$1;
(statearr_29624_29653[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (9))){
var inst_29586 = (state_29598[(2)]);
var inst_29587 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29598__$1 = (function (){var statearr_29625 = state_29598;
(statearr_29625[(15)] = inst_29586);

return statearr_29625;
})();
if(cljs.core.truth_(inst_29587)){
var statearr_29626_29654 = state_29598__$1;
(statearr_29626_29654[(1)] = (21));

} else {
var statearr_29627_29655 = state_29598__$1;
(statearr_29627_29655[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (5))){
var inst_29542 = cljs.core.async.close_BANG_.call(null,out);
var state_29598__$1 = state_29598;
var statearr_29628_29656 = state_29598__$1;
(statearr_29628_29656[(2)] = inst_29542);

(statearr_29628_29656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (14))){
var inst_29564 = (state_29598[(7)]);
var inst_29566 = cljs.core.chunked_seq_QMARK_.call(null,inst_29564);
var state_29598__$1 = state_29598;
if(inst_29566){
var statearr_29629_29657 = state_29598__$1;
(statearr_29629_29657[(1)] = (17));

} else {
var statearr_29630_29658 = state_29598__$1;
(statearr_29630_29658[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (16))){
var inst_29582 = (state_29598[(2)]);
var state_29598__$1 = state_29598;
var statearr_29631_29659 = state_29598__$1;
(statearr_29631_29659[(2)] = inst_29582);

(statearr_29631_29659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29599 === (10))){
var inst_29551 = (state_29598[(11)]);
var inst_29553 = (state_29598[(12)]);
var inst_29558 = cljs.core._nth.call(null,inst_29551,inst_29553);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(13),out,inst_29558);
} else {
if((state_val_29599 === (18))){
var inst_29564 = (state_29598[(7)]);
var inst_29573 = cljs.core.first.call(null,inst_29564);
var state_29598__$1 = state_29598;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29598__$1,(20),out,inst_29573);
} else {
if((state_val_29599 === (8))){
var inst_29552 = (state_29598[(10)]);
var inst_29553 = (state_29598[(12)]);
var inst_29555 = (inst_29553 < inst_29552);
var inst_29556 = inst_29555;
var state_29598__$1 = state_29598;
if(cljs.core.truth_(inst_29556)){
var statearr_29632_29660 = state_29598__$1;
(statearr_29632_29660[(1)] = (10));

} else {
var statearr_29633_29661 = state_29598__$1;
(statearr_29633_29661[(1)] = (11));

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
});})(c__27982__auto__))
;
return ((function (switch__27887__auto__,c__27982__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____0 = (function (){
var statearr_29634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29634[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__);

(statearr_29634[(1)] = (1));

return statearr_29634;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____1 = (function (state_29598){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29635){if((e29635 instanceof Object)){
var ex__27891__auto__ = e29635;
var statearr_29636_29662 = state_29598;
(statearr_29636_29662[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29663 = state_29598;
state_29598 = G__29663;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__ = function(state_29598){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____1.call(this,state_29598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27888__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto__))
})();
var state__27984__auto__ = (function (){var statearr_29637 = f__27983__auto__.call(null);
(statearr_29637[(6)] = c__27982__auto__);

return statearr_29637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto__))
);

return c__27982__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29665 = arguments.length;
switch (G__29665) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29668 = arguments.length;
switch (G__29668) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29671 = arguments.length;
switch (G__29671) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29718 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29718,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29718,out){
return (function (state_29695){
var state_val_29696 = (state_29695[(1)]);
if((state_val_29696 === (7))){
var inst_29690 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
var statearr_29697_29719 = state_29695__$1;
(statearr_29697_29719[(2)] = inst_29690);

(statearr_29697_29719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (1))){
var inst_29672 = null;
var state_29695__$1 = (function (){var statearr_29698 = state_29695;
(statearr_29698[(7)] = inst_29672);

return statearr_29698;
})();
var statearr_29699_29720 = state_29695__$1;
(statearr_29699_29720[(2)] = null);

(statearr_29699_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (4))){
var inst_29675 = (state_29695[(8)]);
var inst_29675__$1 = (state_29695[(2)]);
var inst_29676 = (inst_29675__$1 == null);
var inst_29677 = cljs.core.not.call(null,inst_29676);
var state_29695__$1 = (function (){var statearr_29700 = state_29695;
(statearr_29700[(8)] = inst_29675__$1);

return statearr_29700;
})();
if(inst_29677){
var statearr_29701_29721 = state_29695__$1;
(statearr_29701_29721[(1)] = (5));

} else {
var statearr_29702_29722 = state_29695__$1;
(statearr_29702_29722[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (6))){
var state_29695__$1 = state_29695;
var statearr_29703_29723 = state_29695__$1;
(statearr_29703_29723[(2)] = null);

(statearr_29703_29723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (3))){
var inst_29692 = (state_29695[(2)]);
var inst_29693 = cljs.core.async.close_BANG_.call(null,out);
var state_29695__$1 = (function (){var statearr_29704 = state_29695;
(statearr_29704[(9)] = inst_29692);

return statearr_29704;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29695__$1,inst_29693);
} else {
if((state_val_29696 === (2))){
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29695__$1,(4),ch);
} else {
if((state_val_29696 === (11))){
var inst_29675 = (state_29695[(8)]);
var inst_29684 = (state_29695[(2)]);
var inst_29672 = inst_29675;
var state_29695__$1 = (function (){var statearr_29705 = state_29695;
(statearr_29705[(10)] = inst_29684);

(statearr_29705[(7)] = inst_29672);

return statearr_29705;
})();
var statearr_29706_29724 = state_29695__$1;
(statearr_29706_29724[(2)] = null);

(statearr_29706_29724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (9))){
var inst_29675 = (state_29695[(8)]);
var state_29695__$1 = state_29695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29695__$1,(11),out,inst_29675);
} else {
if((state_val_29696 === (5))){
var inst_29675 = (state_29695[(8)]);
var inst_29672 = (state_29695[(7)]);
var inst_29679 = cljs.core._EQ_.call(null,inst_29675,inst_29672);
var state_29695__$1 = state_29695;
if(inst_29679){
var statearr_29708_29725 = state_29695__$1;
(statearr_29708_29725[(1)] = (8));

} else {
var statearr_29709_29726 = state_29695__$1;
(statearr_29709_29726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (10))){
var inst_29687 = (state_29695[(2)]);
var state_29695__$1 = state_29695;
var statearr_29710_29727 = state_29695__$1;
(statearr_29710_29727[(2)] = inst_29687);

(statearr_29710_29727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29696 === (8))){
var inst_29672 = (state_29695[(7)]);
var tmp29707 = inst_29672;
var inst_29672__$1 = tmp29707;
var state_29695__$1 = (function (){var statearr_29711 = state_29695;
(statearr_29711[(7)] = inst_29672__$1);

return statearr_29711;
})();
var statearr_29712_29728 = state_29695__$1;
(statearr_29712_29728[(2)] = null);

(statearr_29712_29728[(1)] = (2));


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
});})(c__27982__auto___29718,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29718,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29713 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29713[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29713[(1)] = (1));

return statearr_29713;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29695){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29714){if((e29714 instanceof Object)){
var ex__27891__auto__ = e29714;
var statearr_29715_29729 = state_29695;
(statearr_29715_29729[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29714;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29730 = state_29695;
state_29695 = G__29730;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29718,out))
})();
var state__27984__auto__ = (function (){var statearr_29716 = f__27983__auto__.call(null);
(statearr_29716[(6)] = c__27982__auto___29718);

return statearr_29716;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29718,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29732 = arguments.length;
switch (G__29732) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29798,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29798,out){
return (function (state_29770){
var state_val_29771 = (state_29770[(1)]);
if((state_val_29771 === (7))){
var inst_29766 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29772_29799 = state_29770__$1;
(statearr_29772_29799[(2)] = inst_29766);

(statearr_29772_29799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (1))){
var inst_29733 = (new Array(n));
var inst_29734 = inst_29733;
var inst_29735 = (0);
var state_29770__$1 = (function (){var statearr_29773 = state_29770;
(statearr_29773[(7)] = inst_29734);

(statearr_29773[(8)] = inst_29735);

return statearr_29773;
})();
var statearr_29774_29800 = state_29770__$1;
(statearr_29774_29800[(2)] = null);

(statearr_29774_29800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (4))){
var inst_29738 = (state_29770[(9)]);
var inst_29738__$1 = (state_29770[(2)]);
var inst_29739 = (inst_29738__$1 == null);
var inst_29740 = cljs.core.not.call(null,inst_29739);
var state_29770__$1 = (function (){var statearr_29775 = state_29770;
(statearr_29775[(9)] = inst_29738__$1);

return statearr_29775;
})();
if(inst_29740){
var statearr_29776_29801 = state_29770__$1;
(statearr_29776_29801[(1)] = (5));

} else {
var statearr_29777_29802 = state_29770__$1;
(statearr_29777_29802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (15))){
var inst_29760 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29778_29803 = state_29770__$1;
(statearr_29778_29803[(2)] = inst_29760);

(statearr_29778_29803[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (13))){
var state_29770__$1 = state_29770;
var statearr_29779_29804 = state_29770__$1;
(statearr_29779_29804[(2)] = null);

(statearr_29779_29804[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (6))){
var inst_29735 = (state_29770[(8)]);
var inst_29756 = (inst_29735 > (0));
var state_29770__$1 = state_29770;
if(cljs.core.truth_(inst_29756)){
var statearr_29780_29805 = state_29770__$1;
(statearr_29780_29805[(1)] = (12));

} else {
var statearr_29781_29806 = state_29770__$1;
(statearr_29781_29806[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (3))){
var inst_29768 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29770__$1,inst_29768);
} else {
if((state_val_29771 === (12))){
var inst_29734 = (state_29770[(7)]);
var inst_29758 = cljs.core.vec.call(null,inst_29734);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29770__$1,(15),out,inst_29758);
} else {
if((state_val_29771 === (2))){
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29770__$1,(4),ch);
} else {
if((state_val_29771 === (11))){
var inst_29750 = (state_29770[(2)]);
var inst_29751 = (new Array(n));
var inst_29734 = inst_29751;
var inst_29735 = (0);
var state_29770__$1 = (function (){var statearr_29782 = state_29770;
(statearr_29782[(7)] = inst_29734);

(statearr_29782[(10)] = inst_29750);

(statearr_29782[(8)] = inst_29735);

return statearr_29782;
})();
var statearr_29783_29807 = state_29770__$1;
(statearr_29783_29807[(2)] = null);

(statearr_29783_29807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (9))){
var inst_29734 = (state_29770[(7)]);
var inst_29748 = cljs.core.vec.call(null,inst_29734);
var state_29770__$1 = state_29770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29770__$1,(11),out,inst_29748);
} else {
if((state_val_29771 === (5))){
var inst_29738 = (state_29770[(9)]);
var inst_29734 = (state_29770[(7)]);
var inst_29743 = (state_29770[(11)]);
var inst_29735 = (state_29770[(8)]);
var inst_29742 = (inst_29734[inst_29735] = inst_29738);
var inst_29743__$1 = (inst_29735 + (1));
var inst_29744 = (inst_29743__$1 < n);
var state_29770__$1 = (function (){var statearr_29784 = state_29770;
(statearr_29784[(11)] = inst_29743__$1);

(statearr_29784[(12)] = inst_29742);

return statearr_29784;
})();
if(cljs.core.truth_(inst_29744)){
var statearr_29785_29808 = state_29770__$1;
(statearr_29785_29808[(1)] = (8));

} else {
var statearr_29786_29809 = state_29770__$1;
(statearr_29786_29809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (14))){
var inst_29763 = (state_29770[(2)]);
var inst_29764 = cljs.core.async.close_BANG_.call(null,out);
var state_29770__$1 = (function (){var statearr_29788 = state_29770;
(statearr_29788[(13)] = inst_29763);

return statearr_29788;
})();
var statearr_29789_29810 = state_29770__$1;
(statearr_29789_29810[(2)] = inst_29764);

(statearr_29789_29810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (10))){
var inst_29754 = (state_29770[(2)]);
var state_29770__$1 = state_29770;
var statearr_29790_29811 = state_29770__$1;
(statearr_29790_29811[(2)] = inst_29754);

(statearr_29790_29811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29771 === (8))){
var inst_29734 = (state_29770[(7)]);
var inst_29743 = (state_29770[(11)]);
var tmp29787 = inst_29734;
var inst_29734__$1 = tmp29787;
var inst_29735 = inst_29743;
var state_29770__$1 = (function (){var statearr_29791 = state_29770;
(statearr_29791[(7)] = inst_29734__$1);

(statearr_29791[(8)] = inst_29735);

return statearr_29791;
})();
var statearr_29792_29812 = state_29770__$1;
(statearr_29792_29812[(2)] = null);

(statearr_29792_29812[(1)] = (2));


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
});})(c__27982__auto___29798,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29798,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29793[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29793[(1)] = (1));

return statearr_29793;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29770){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29794){if((e29794 instanceof Object)){
var ex__27891__auto__ = e29794;
var statearr_29795_29813 = state_29770;
(statearr_29795_29813[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29814 = state_29770;
state_29770 = G__29814;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29798,out))
})();
var state__27984__auto__ = (function (){var statearr_29796 = f__27983__auto__.call(null);
(statearr_29796[(6)] = c__27982__auto___29798);

return statearr_29796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29798,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29816 = arguments.length;
switch (G__29816) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27982__auto___29886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27982__auto___29886,out){
return (function (){
var f__27983__auto__ = (function (){var switch__27887__auto__ = ((function (c__27982__auto___29886,out){
return (function (state_29858){
var state_val_29859 = (state_29858[(1)]);
if((state_val_29859 === (7))){
var inst_29854 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29860_29887 = state_29858__$1;
(statearr_29860_29887[(2)] = inst_29854);

(statearr_29860_29887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (1))){
var inst_29817 = [];
var inst_29818 = inst_29817;
var inst_29819 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29858__$1 = (function (){var statearr_29861 = state_29858;
(statearr_29861[(7)] = inst_29818);

(statearr_29861[(8)] = inst_29819);

return statearr_29861;
})();
var statearr_29862_29888 = state_29858__$1;
(statearr_29862_29888[(2)] = null);

(statearr_29862_29888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (4))){
var inst_29822 = (state_29858[(9)]);
var inst_29822__$1 = (state_29858[(2)]);
var inst_29823 = (inst_29822__$1 == null);
var inst_29824 = cljs.core.not.call(null,inst_29823);
var state_29858__$1 = (function (){var statearr_29863 = state_29858;
(statearr_29863[(9)] = inst_29822__$1);

return statearr_29863;
})();
if(inst_29824){
var statearr_29864_29889 = state_29858__$1;
(statearr_29864_29889[(1)] = (5));

} else {
var statearr_29865_29890 = state_29858__$1;
(statearr_29865_29890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (15))){
var inst_29848 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29866_29891 = state_29858__$1;
(statearr_29866_29891[(2)] = inst_29848);

(statearr_29866_29891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (13))){
var state_29858__$1 = state_29858;
var statearr_29867_29892 = state_29858__$1;
(statearr_29867_29892[(2)] = null);

(statearr_29867_29892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (6))){
var inst_29818 = (state_29858[(7)]);
var inst_29843 = inst_29818.length;
var inst_29844 = (inst_29843 > (0));
var state_29858__$1 = state_29858;
if(cljs.core.truth_(inst_29844)){
var statearr_29868_29893 = state_29858__$1;
(statearr_29868_29893[(1)] = (12));

} else {
var statearr_29869_29894 = state_29858__$1;
(statearr_29869_29894[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (3))){
var inst_29856 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29858__$1,inst_29856);
} else {
if((state_val_29859 === (12))){
var inst_29818 = (state_29858[(7)]);
var inst_29846 = cljs.core.vec.call(null,inst_29818);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29858__$1,(15),out,inst_29846);
} else {
if((state_val_29859 === (2))){
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29858__$1,(4),ch);
} else {
if((state_val_29859 === (11))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29836 = (state_29858[(2)]);
var inst_29837 = [];
var inst_29838 = inst_29837.push(inst_29822);
var inst_29818 = inst_29837;
var inst_29819 = inst_29826;
var state_29858__$1 = (function (){var statearr_29870 = state_29858;
(statearr_29870[(11)] = inst_29838);

(statearr_29870[(7)] = inst_29818);

(statearr_29870[(12)] = inst_29836);

(statearr_29870[(8)] = inst_29819);

return statearr_29870;
})();
var statearr_29871_29895 = state_29858__$1;
(statearr_29871_29895[(2)] = null);

(statearr_29871_29895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (9))){
var inst_29818 = (state_29858[(7)]);
var inst_29834 = cljs.core.vec.call(null,inst_29818);
var state_29858__$1 = state_29858;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29858__$1,(11),out,inst_29834);
} else {
if((state_val_29859 === (5))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29819 = (state_29858[(8)]);
var inst_29826__$1 = f.call(null,inst_29822);
var inst_29827 = cljs.core._EQ_.call(null,inst_29826__$1,inst_29819);
var inst_29828 = cljs.core.keyword_identical_QMARK_.call(null,inst_29819,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29829 = ((inst_29827) || (inst_29828));
var state_29858__$1 = (function (){var statearr_29872 = state_29858;
(statearr_29872[(10)] = inst_29826__$1);

return statearr_29872;
})();
if(cljs.core.truth_(inst_29829)){
var statearr_29873_29896 = state_29858__$1;
(statearr_29873_29896[(1)] = (8));

} else {
var statearr_29874_29897 = state_29858__$1;
(statearr_29874_29897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (14))){
var inst_29851 = (state_29858[(2)]);
var inst_29852 = cljs.core.async.close_BANG_.call(null,out);
var state_29858__$1 = (function (){var statearr_29876 = state_29858;
(statearr_29876[(13)] = inst_29851);

return statearr_29876;
})();
var statearr_29877_29898 = state_29858__$1;
(statearr_29877_29898[(2)] = inst_29852);

(statearr_29877_29898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (10))){
var inst_29841 = (state_29858[(2)]);
var state_29858__$1 = state_29858;
var statearr_29878_29899 = state_29858__$1;
(statearr_29878_29899[(2)] = inst_29841);

(statearr_29878_29899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29859 === (8))){
var inst_29826 = (state_29858[(10)]);
var inst_29822 = (state_29858[(9)]);
var inst_29818 = (state_29858[(7)]);
var inst_29831 = inst_29818.push(inst_29822);
var tmp29875 = inst_29818;
var inst_29818__$1 = tmp29875;
var inst_29819 = inst_29826;
var state_29858__$1 = (function (){var statearr_29879 = state_29858;
(statearr_29879[(14)] = inst_29831);

(statearr_29879[(7)] = inst_29818__$1);

(statearr_29879[(8)] = inst_29819);

return statearr_29879;
})();
var statearr_29880_29900 = state_29858__$1;
(statearr_29880_29900[(2)] = null);

(statearr_29880_29900[(1)] = (2));


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
});})(c__27982__auto___29886,out))
;
return ((function (switch__27887__auto__,c__27982__auto___29886,out){
return (function() {
var cljs$core$async$state_machine__27888__auto__ = null;
var cljs$core$async$state_machine__27888__auto____0 = (function (){
var statearr_29881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29881[(0)] = cljs$core$async$state_machine__27888__auto__);

(statearr_29881[(1)] = (1));

return statearr_29881;
});
var cljs$core$async$state_machine__27888__auto____1 = (function (state_29858){
while(true){
var ret_value__27889__auto__ = (function (){try{while(true){
var result__27890__auto__ = switch__27887__auto__.call(null,state_29858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27890__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27890__auto__;
}
break;
}
}catch (e29882){if((e29882 instanceof Object)){
var ex__27891__auto__ = e29882;
var statearr_29883_29901 = state_29858;
(statearr_29883_29901[(5)] = ex__27891__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27889__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29902 = state_29858;
state_29858 = G__29902;
continue;
} else {
return ret_value__27889__auto__;
}
break;
}
});
cljs$core$async$state_machine__27888__auto__ = function(state_29858){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27888__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27888__auto____1.call(this,state_29858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27888__auto____0;
cljs$core$async$state_machine__27888__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27888__auto____1;
return cljs$core$async$state_machine__27888__auto__;
})()
;})(switch__27887__auto__,c__27982__auto___29886,out))
})();
var state__27984__auto__ = (function (){var statearr_29884 = f__27983__auto__.call(null);
(statearr_29884[(6)] = c__27982__auto___29886);

return statearr_29884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27984__auto__);
});})(c__27982__auto___29886,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1561537544819
