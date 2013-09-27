window.__filename='';
window.__dirname='';
window.module='';
window.exports='';
window.console={log:function(data,value){},info:function(data,value){},error:function(data,value){},warn:function(data,value){},dir:function(obj){},time:function(label){},timeEnd:function(label){},trace:function(label){},assert:function(expression,message){}};
intellisense.annotate(window.console,{
'log':function() {
/// <signature>
///   <summary>Prints to stdout with newline. This function can take multiple arguments in aprintf()-like way. Example:console.log(&#39;count: %d&#39;, count);If formatting elements are not found in the first string then util.inspectis used on each argument.  See [util.format()][] for more information.</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'info':function() {
/// <signature>
///   <summary>Same as console.log.</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'error':function() {
/// <signature>
///   <summary>Same as console.log but prints to stderr.</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'warn':function() {
/// <signature>
///   <summary>Same as console.error.</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'dir':function() {
/// <signature>
///   <summary>Uses util.inspect on obj and prints resulting string to stdout.</summary>
///   <param name="obj" type="object"></param>
/// </signature>
},'time':function() {
/// <signature>
///   <summary>Mark a time.</summary>
///   <param name="label" type="object"></param>
/// </signature>
},'timeEnd':function() {
/// <signature>
///   <summary>Finish timer, record output. Example:console.time(&#39;100-elements&#39;);for (var i = 0; i &lt; 100; i++) {  ;}console.timeEnd(&#39;100-elements&#39;);</summary>
///   <param name="label" type="object"></param>
/// </signature>
},'trace':function() {
/// <signature>
///   <summary>Print a stack trace to stderr of the current position.</summary>
///   <param name="label" type="object"></param>
/// </signature>
},'assert':function() {
/// <signature>
///   <summary>Same as [assert.ok()][] where if the expression evaluates as false throw anAssertionError with message.</summary>
///   <param name="expression" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
}});
window.process={stdout:'',stderr:'',stdin:'',argv:'',execPath:'',env:'',version:'',versions:'',config:'',pid:'',title:'',arch:'',platform:'',maxTickDepth:'',abort:function(){},chdir:function(directory){},cwd:function(){},exit:function(code){},getgid:function(){},setgid:function(id){},getuid:function(){},setuid:function(id){},getgroups:function(){},setgroups:function(groups){},initgroups:function(user,extra_group){},kill:function(pid,signal){},memoryUsage:function(){},nextTick:function(callback){},umask:function(mask){},uptime:function(){},hrtime:function(){}};
intellisense.annotate(window.process,{
'abort':function() {
/// <signature>
///   <summary>This causes node to emit an abort. This will cause node to exit andgenerate a core file.</summary>
/// </signature>
},'chdir':function() {
/// <signature>
///   <summary>Changes the current working directory of the process or throws an exception if that fails.console.log(&#39;Starting directory: &#39; + process.cwd());try {  process.chdir(&#39;/tmp&#39;);  console.log(&#39;New directory: &#39; + process.cwd());}catch (err) {  console.log(&#39;chdir: &#39; + err);}</summary>
///   <param name="directory" type="object"></param>
/// </signature>
},'cwd':function() {
/// <signature>
///   <summary>Returns the current working directory of the process.console.log(&#39;Current directory: &#39; + process.cwd());</summary>
/// </signature>
},'exit':function() {
/// <signature>
///   <summary>Ends the process with the specified code.  If omitted, exit uses the&#39;success&#39; code 0.To exit with a &#39;failure&#39; code:process.exit(1);The shell that executed node should see the exit code as 1.</summary>
///   <param name="[code]" type="object"></param>
/// </signature>
},'getgid':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Gets the group identity of the process. (See getgid(2).)This is the numerical group id, not the group name.if (process.getgid) {  console.log(&#39;Current gid: &#39; + process.getgid());}</summary>
/// </signature>
},'setgid':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Sets the group identity of the process. (See setgid(2).)  This accepts eithera numerical ID or a groupname string. If a groupname is specified, this methodblocks while resolving it to a numerical ID.if (process.getgid &amp;&amp; process.setgid) {  console.log(&#39;Current gid: &#39; + process.getgid());  try {    process.setgid(501);    console.log(&#39;New gid: &#39; + process.getgid());  }  catch (err) {    console.log(&#39;Failed to set gid: &#39; + err);  }}</summary>
///   <param name="id" type="object"></param>
/// </signature>
},'getuid':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Gets the user identity of the process. (See getuid(2).)This is the numerical userid, not the username.if (process.getuid) {  console.log(&#39;Current uid: &#39; + process.getuid());}</summary>
/// </signature>
},'setuid':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Sets the user identity of the process. (See setuid(2).)  This accepts eithera numerical ID or a username string.  If a username is specified, this methodblocks while resolving it to a numerical ID.if (process.getuid &amp;&amp; process.setuid) {  console.log(&#39;Current uid: &#39; + process.getuid());  try {    process.setuid(501);    console.log(&#39;New uid: &#39; + process.getuid());  }  catch (err) {    console.log(&#39;Failed to set uid: &#39; + err);  }}</summary>
///   <param name="id" type="object"></param>
/// </signature>
},'getgroups':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Returns an array with the supplementary group IDs. POSIX leaves it unspecifiedif the effective group ID is included but node.js ensures it always is.</summary>
/// </signature>
},'setgroups':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Sets the supplementary group IDs. This is a privileged operation, meaning youneed to be root or have the CAP_SETGID capability.The list can contain group IDs, group names or both.</summary>
///   <param name="groups" type="object"></param>
/// </signature>
},'initgroups':function() {
/// <signature>
///   <summary>Note: this function is only available on POSIX platforms (i.e. not Windows)Reads /etc/group and initializes the group access list, using all groups ofwhich the user is a member. This is a privileged operation, meaning you needto be root or have the CAP_SETGID capability.user is a user name or user ID. extra_group is a group name or group ID.Some care needs to be taken when dropping privileges. Example:console.log(process.getgroups());         // [ 0 ]process.initgroups(&#39;bnoordhuis&#39;, 1000);   // switch userconsole.log(process.getgroups());         // [ 27, 30, 46, 1000, 0 ]process.setgid(1000);                     // drop root gidconsole.log(process.getgroups());         // [ 27, 30, 46, 1000 ]</summary>
///   <param name="user" type="object"></param>
///   <param name="extra_group" type="object"></param>
/// </signature>
},'kill':function() {
/// <signature>
///   <summary>Send a signal to a process. pid is the process id and signal is thestring describing the signal to send.  Signal names are strings like&#39;SIGINT&#39; or &#39;SIGUSR1&#39;.  If omitted, the signal will be &#39;SIGTERM&#39;.See kill(2) for more information.Note that just because the name of this function is process.kill, it isreally just a signal sender, like the kill system call.  The signal sentmay do something other than kill the target process.Example of sending a signal to yourself:process.on(&#39;SIGHUP&#39;, function() {  console.log(&#39;Got SIGHUP signal.&#39;);});setTimeout(function() {  console.log(&#39;Exiting.&#39;);  process.exit(0);}, 100);process.kill(process.pid, &#39;SIGHUP&#39;);</summary>
///   <param name="pid" type="object"></param>
///   <param name="[signal]" type="object"></param>
/// </signature>
},'memoryUsage':function() {
/// <signature>
///   <summary>Returns an object describing the memory usage of the Node processmeasured in bytes.var util = require(&#39;util&#39;);console.log(util.inspect(process.memoryUsage()));This will generate:{ rss: 4935680,  heapTotal: 1826816,  heapUsed: 650472 }heapTotal and heapUsed refer to V8&#39;s memory usage.</summary>
/// </signature>
},'nextTick':function() {
/// <signature>
///   <summary>On the next loop around the event loop call this callback.This is not a simple alias to setTimeout(fn, 0), it&#39;s much moreefficient.  It typically runs before any other I/O events fire, but thereare some exceptions.  See process.maxTickDepth below.process.nextTick(function() {  console.log(&#39;nextTick callback&#39;);});This is important in developing APIs where you want to give the user thechance to assign event handlers after an object has been constructed,but before any I/O has occurred.function MyThing(options) {  this.setupOptions(options);  process.nextTick(function() {    this.startDoingStuff();  }.bind(this));}var thing = new MyThing();thing.getReadyForStuff();// thing.startDoingStuff() gets called now, not before.It is very important for APIs to be either 100% synchronous or 100%asynchronous.  Consider this example:// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!function maybeSync(arg, cb) {  if (arg) {    cb();    return;  }  fs.stat(&#39;file&#39;, cb);}This API is hazardous.  If you do this:maybeSync(true, function() {  foo();});bar();then it&#39;s not clear whether foo() or bar() will be called first.This approach is much better:function definitelyAsync(arg, cb) {  if (arg) {    process.nextTick(cb);    return;  }  fs.stat(&#39;file&#39;, cb);}</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'umask':function() {
/// <signature>
///   <summary>Sets or reads the process&#39;s file mode creation mask. Child processes inheritthe mask from the parent process. Returns the old mask if mask argument isgiven, otherwise returns the current mask.var oldmask, newmask = 0644;oldmask = process.umask(newmask);console.log(&#39;Changed umask from: &#39; + oldmask.toString(8) +            &#39; to &#39; + newmask.toString(8));</summary>
///   <param name="[mask]" type="object"></param>
/// </signature>
},'uptime':function() {
/// <signature>
///   <summary>Number of seconds Node has been running.</summary>
/// </signature>
},'hrtime':function() {
/// <signature>
///   <summary>Returns the current high-resolution real time in a [seconds, nanoseconds]tuple Array. It is relative to an arbitrary time in the past. It is notrelated to the time of day and therefore not subject to clock drift. Theprimary use is for measuring performance between intervals.You may pass in the result of a previous call to process.hrtime() to geta diff reading, useful for benchmarks and measuring intervals:var time = process.hrtime();// [ 1800216, 25 ]setTimeout(function() {  var diff = process.hrtime(time);  // [ 1, 552 ]  console.log(&#39;benchmark took %d nanoseconds&#39;, diff[0] * 1e9 + diff[1]);  // benchmark took 1000000527 nanoseconds}, 1000);</summary>
/// </signature>
}});
window.timers={setTimeout:function(callback,delay,arg,value){},clearTimeout:function(timeoutId){},setInterval:function(callback,delay,arg,value){},clearInterval:function(intervalId){},unref:function(){},ref:function(){},setImmediate:function(callback,arg,value){},clearImmediate:function(immediateId){}};
intellisense.annotate(window.timers,{
'setTimeout':function() {
/// <signature>
///   <summary>To schedule execution of a one-time callback after delay milliseconds. Returns atimeoutId for possible use with clearTimeout(). Optionally you canalso pass arguments to the callback.It is important to note that your callback will probably not be called in exactlydelay milliseconds - Node.js makes no guarantees about the exact timing of whenthe callback will fire, nor of the ordering things will fire in. The callback willbe called as close as possible to the time specified.</summary>
///   <param name="callback" type="object"></param>
///   <param name="delay" type="object"></param>
///   <param name="[arg]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'clearTimeout':function() {
/// <signature>
///   <summary>Prevents a timeout from triggering.</summary>
///   <param name="timeoutId" type="object"></param>
/// </signature>
},'setInterval':function() {
/// <signature>
///   <summary>To schedule the repeated execution of callback every delay milliseconds.Returns a intervalId for possible use with clearInterval(). Optionallyyou can also pass arguments to the callback.</summary>
///   <param name="callback" type="object"></param>
///   <param name="delay" type="object"></param>
///   <param name="[arg]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'clearInterval':function() {
/// <signature>
///   <summary>Stops a interval from triggering.</summary>
///   <param name="intervalId" type="object"></param>
/// </signature>
},'unref':function() {
/// <signature>
///   <summary>The opaque value returned by setTimeout and setInterval also has the methodtimer.unref() which will allow you to create a timer that is active but ifit is the only item left in the event loop won&#39;t keep the program running.If the timer is already unrefd calling unref again will have no effect.In the case of setTimeout when you unref you create a separate timer thatwill wakeup the event loop, creating too many of these may adversely effectevent loop performance -- use wisely.</summary>
/// </signature>
},'ref':function() {
/// <signature>
///   <summary>If you had previously unref()d a timer you can call ref() to explicitlyrequest the timer hold the program open. If the timer is already refd callingref again will have no effect.</summary>
/// </signature>
},'setImmediate':function() {
/// <signature>
///   <summary>To schedule the &quot;immediate&quot; execution of callback after I/O eventscallbacks and before setTimeout and setInterval . Returns animmediateId for possible use with clearImmediate(). Optionally youcan also pass arguments to the callback.Immediates are queued in the order created, and are popped off the queue onceper loop iteration. This is different from process.nextTick which willexecute process.maxTickDepth queued callbacks per iteration. setImmediatewill yield to the event loop after firing a queued callback to make sure I/O isnot being starved. While order is preserved for execution, other I/O events mayfire between any two scheduled immediate callbacks.</summary>
///   <param name="callback" type="object"></param>
///   <param name="[arg]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'clearImmediate':function() {
/// <signature>
///   <summary>Stops an immediate from triggering.</summary>
///   <param name="immediateId" type="object"></param>
/// </signature>
}});
window.util={format:function(format,value){},debug:function(string){},error:function(value){},puts:function(value){},print:function(value){},log:function(string){},inspect:function(object,options){},isArray:function(object){},isRegExp:function(object){},isDate:function(object){},isError:function(object){},pump:function(readableStream,writableStream,callback){},inherits:function(constructor,superConstructor){}};
intellisense.annotate(window.util,{
'format':function() {
/// <signature>
///   <summary>Returns a formatted string using the first argument as a printf-like format.The first argument is a string that contains zero or more placeholders.Each placeholder is replaced with the converted value from its correspondingargument. Supported placeholders are:%s - String.%d - Number (both integer and float).%j - JSON.% - single percent sign (&#39;%&#39;). This does not consume an argument.If the placeholder does not have a corresponding argument, the placeholder isnot replaced.util.format(&#39;%s:%s&#39;, &#39;foo&#39;); // &#39;foo:%s&#39;If there are more arguments than placeholders, the extra arguments areconverted to strings with util.inspect() and these strings are concatenated,delimited by a space.util.format(&#39;%s:%s&#39;, &#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;); // &#39;foo:bar baz&#39;If the first argument is not a format string then util.format() returnsa string that is the concatenation of all its arguments separated by spaces.Each argument is converted to a string with util.inspect().util.format(1, 2, 3); // &#39;1 2 3&#39;</summary>
///   <param name="format" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'debug':function() {
/// <signature>
///   <summary>A synchronous output function. Will block the process andoutput string immediately to stderr.require(&#39;util&#39;).debug(&#39;message on stderr&#39;);</summary>
///   <param name="string" type="object"></param>
/// </signature>
},'error':function() {
/// <signature>
///   <summary>Same as util.debug() except this will output all arguments immediately tostderr.</summary>
///   <param name="[value]" type="object"></param>
/// </signature>
},'puts':function() {
/// <signature>
///   <summary>A synchronous output function. Will block the process and output all argumentsto stdout with newlines after each argument.</summary>
///   <param name="[value]" type="object"></param>
/// </signature>
},'print':function() {
/// <signature>
///   <summary>A synchronous output function. Will block the process, cast each argument to astring then output to stdout. Does not place newlines after each argument.</summary>
///   <param name="[value]" type="object"></param>
/// </signature>
},'log':function() {
/// <signature>
///   <summary>Output with timestamp on stdout.require(&#39;util&#39;).log(&#39;Timestamped message.&#39;);</summary>
///   <param name="string" type="object"></param>
/// </signature>
},'inspect':function() {
/// <signature>
///   <summary>Return a string representation of object, which is useful for debugging.An optional options object may be passed that alters certain aspects of theformatted string:showHidden - if true then the object&#39;s non-enumerable properties will beshown too. Defaults to false.depth - tells inspect how many times to recurse while formatting theobject. This is useful for inspecting large complicated objects. Defaults to2. To make it recurse indefinitely pass null.colors - if true, then the output will be styled with ANSI color codes.Defaults to false. Colors are customizable, see below.customInspect - if false, then custom inspect() functions defined on theobjects being inspected won&#39;t be called. Defaults to true.Example of inspecting all properties of the util object:var util = require(&#39;util&#39;);console.log(util.inspect(util, { showHidden: true, depth: null }));</summary>
///   <param name="object" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'isArray':function() {
/// <signature>
///   <summary>Returns true if the given &quot;object&quot; is an Array. false otherwise.var util = require(&#39;util&#39;);util.isArray([])  // trueutil.isArray(new Array)  // trueutil.isArray({})  // false</summary>
///   <param name="object" type="object"></param>
/// </signature>
},'isRegExp':function() {
/// <signature>
///   <summary>Returns true if the given &quot;object&quot; is a RegExp. false otherwise.var util = require(&#39;util&#39;);util.isRegExp(/some regexp/)  // trueutil.isRegExp(new RegExp(&#39;another regexp&#39;))  // trueutil.isRegExp({})  // false</summary>
///   <param name="object" type="object"></param>
/// </signature>
},'isDate':function() {
/// <signature>
///   <summary>Returns true if the given &quot;object&quot; is a Date. false otherwise.var util = require(&#39;util&#39;);util.isDate(new Date())  // trueutil.isDate(Date())  // false (without &#39;new&#39; returns a String)util.isDate({})  // false</summary>
///   <param name="object" type="object"></param>
/// </signature>
},'isError':function() {
/// <signature>
///   <summary>Returns true if the given &quot;object&quot; is an Error. false otherwise.var util = require(&#39;util&#39;);util.isError(new Error())  // trueutil.isError(new TypeError())  // trueutil.isError({ name: &#39;Error&#39;, message: &#39;an error occurred&#39; })  // false</summary>
///   <param name="object" type="object"></param>
/// </signature>
},'pump':function() {
/// <signature>
///   <summary>Read the data from readableStream and send it to the writableStream.When writableStream.write(data) returns false readableStream will bepaused until the drain event occurs on the writableStream. callback getsan error as its only argument and is called when writableStream is closed orwhen an error occurs.</summary>
///   <param name="readableStream" type="object"></param>
///   <param name="writableStream" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'inherits':function() {
/// <signature>
///   <summary>Inherit the prototype methods from one<a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/constructor">constructorinto another.  The prototype of constructor will be set to a newobject created from superConstructor.As an additional convenience, superConstructor will be accessiblethrough the constructor.super_ property.var util = require(&quot;util&quot;);var events = require(&quot;events&quot;);function MyStream() {    events.EventEmitter.call(this);}util.inherits(MyStream, events.EventEmitter);MyStream.prototype.write = function(data) {    this.emit(&quot;data&quot;, data);}var stream = new MyStream();console.log(stream instanceof events.EventEmitter); // trueconsole.log(MyStream.super_ === events.EventEmitter); // truestream.on(&quot;data&quot;, function(data) {    console.log(&#39;Received data: &quot;&#39; + data + &#39;&quot;&#39;);})stream.write(&quot;It works!&quot;); // Received data: &quot;It works!&quot;</summary>
///   <param name="constructor" type="object"></param>
///   <param name="superConstructor" type="object"></param>
/// </signature>
}});
window.domain={create:function(){},create:function(){}};
intellisense.annotate(window.domain,{
'create':function() {
/// <signature>
///   <summary>Returns a new Domain object.</summary>
/// </signature>
},'create':function() {
/// <signature>
///   <summary>Returns a new Domain object.</summary>
/// </signature>
}});
window.Domain=function(){return {members:'',run:function(fn){},run:function(fn){},add:function(emitter){},add:function(emitter){},remove:function(emitter){},remove:function(emitter){},bind:function(callback){},bind:function(callback){},intercept:function(callback){},intercept:function(callback){},dispose:function(){}};};
intellisense.annotate(window.Domain,{
'run':function() {
/// <signature>
///   <summary>Run the supplied function in the context of the domain, implicitlybinding all event emitters, timers, and lowlevel requests that arecreated in that context.This is the most basic way to use a domain.Example:var d = domain.create();d.on(&#39;error&#39;, function(er) {  console.error(&#39;Caught error!&#39;, er);});d.run(function() {  process.nextTick(function() {    setTimeout(function() { // simulating some various async stuff      fs.open(&#39;non-existent file&#39;, &#39;r&#39;, function(er, fd) {        if (er) throw er;        // proceed...      });    }, 100);  });});In this example, the d.on(&#39;error&#39;) handler will be triggered, ratherthan crashing the program.</summary>
///   <param name="fn" type="object"></param>
/// </signature>
},'run':function() {
/// <signature>
///   <summary>Run the supplied function in the context of the domain, implicitlybinding all event emitters, timers, and lowlevel requests that arecreated in that context.This is the most basic way to use a domain.Example:var d = domain.create();d.on(&#39;error&#39;, function(er) {  console.error(&#39;Caught error!&#39;, er);});d.run(function() {  process.nextTick(function() {    setTimeout(function() { // simulating some various async stuff      fs.open(&#39;non-existent file&#39;, &#39;r&#39;, function(er, fd) {        if (er) throw er;        // proceed...      });    }, 100);  });});In this example, the d.on(&#39;error&#39;) handler will be triggered, ratherthan crashing the program.</summary>
///   <param name="fn" type="object"></param>
/// </signature>
},'add':function() {
/// <signature>
///   <summary>Explicitly adds an emitter to the domain.  If any event handlers called bythe emitter throw an error, or if the emitter emits an error event, itwill be routed to the domain&#39;s error event, just like with implicitbinding.This also works with timers that are returned from setInterval andsetTimeout.  If their callback function throws, it will be caught bythe domain &#39;error&#39; handler.If the Timer or EventEmitter was already bound to a domain, it is removedfrom that one, and bound to this one instead.</summary>
///   <param name="emitter" type="object"></param>
/// </signature>
},'add':function() {
/// <signature>
///   <summary>Explicitly adds an emitter to the domain.  If any event handlers called bythe emitter throw an error, or if the emitter emits an error event, itwill be routed to the domain&#39;s error event, just like with implicitbinding.This also works with timers that are returned from setInterval andsetTimeout.  If their callback function throws, it will be caught bythe domain &#39;error&#39; handler.If the Timer or EventEmitter was already bound to a domain, it is removedfrom that one, and bound to this one instead.</summary>
///   <param name="emitter" type="object"></param>
/// </signature>
},'remove':function() {
/// <signature>
///   <summary>The opposite of domain.add(emitter).  Removes domain handling from thespecified emitter.</summary>
///   <param name="emitter" type="object"></param>
/// </signature>
},'remove':function() {
/// <signature>
///   <summary>The opposite of domain.add(emitter).  Removes domain handling from thespecified emitter.</summary>
///   <param name="emitter" type="object"></param>
/// </signature>
},'bind':function() {
/// <signature>
///   <summary>The returned function will be a wrapper around the supplied callbackfunction.  When the returned function is called, any errors that arethrown will be routed to the domain&#39;s error event.<h4>Example</h4>var d = domain.create();function readSomeFile(filename, cb) {  fs.readFile(filename, &#39;utf8&#39;, d.bind(function(er, data) {    // if this throws, it will also be passed to the domain    return cb(er, data ? JSON.parse(data) : null);  }));}d.on(&#39;error&#39;, function(er) {  // an error occurred somewhere.  // if we throw it now, it will crash the program  // with the normal line number and stack message.});</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'bind':function() {
/// <signature>
///   <summary>The returned function will be a wrapper around the supplied callbackfunction.  When the returned function is called, any errors that arethrown will be routed to the domain&#39;s error event.<h4>Example</h4>var d = domain.create();function readSomeFile(filename, cb) {  fs.readFile(filename, &#39;utf8&#39;, d.bind(function(er, data) {    // if this throws, it will also be passed to the domain    return cb(er, data ? JSON.parse(data) : null);  }));}d.on(&#39;error&#39;, function(er) {  // an error occurred somewhere.  // if we throw it now, it will crash the program  // with the normal line number and stack message.});</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'intercept':function() {
/// <signature>
///   <summary>This method is almost identical to domain.bind(callback).  However, inaddition to catching thrown errors, it will also intercept Errorobjects sent as the first argument to the function.In this way, the common if (er) return callback(er); pattern can be replacedwith a single error handler in a single place.<h4>Example</h4>var d = domain.create();function readSomeFile(filename, cb) {  fs.readFile(filename, &#39;utf8&#39;, d.intercept(function(data) {    // note, the first argument is never passed to the    // callback since it is assumed to be the &#39;Error&#39; argument    // and thus intercepted by the domain.    // if this throws, it will also be passed to the domain    // so the error-handling logic can be moved to the &#39;error&#39;    // event on the domain instead of being repeated throughout    // the program.    return cb(null, JSON.parse(data));  }));}d.on(&#39;error&#39;, function(er) {  // an error occurred somewhere.  // if we throw it now, it will crash the program  // with the normal line number and stack message.});</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'intercept':function() {
/// <signature>
///   <summary>This method is almost identical to domain.bind(callback).  However, inaddition to catching thrown errors, it will also intercept Errorobjects sent as the first argument to the function.In this way, the common if (er) return callback(er); pattern can be replacedwith a single error handler in a single place.<h4>Example</h4>var d = domain.create();function readSomeFile(filename, cb) {  fs.readFile(filename, &#39;utf8&#39;, d.intercept(function(data) {    // note, the first argument is never passed to the    // callback since it is assumed to be the &#39;Error&#39; argument    // and thus intercepted by the domain.    // if this throws, it will also be passed to the domain    // so the error-handling logic can be moved to the &#39;error&#39;    // event on the domain instead of being repeated throughout    // the program.    return cb(null, JSON.parse(data));  }));}d.on(&#39;error&#39;, function(er) {  // an error occurred somewhere.  // if we throw it now, it will crash the program  // with the normal line number and stack message.});</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'dispose':function() {
/// <signature>
///   <summary>The dispose method destroys a domain, and makes a best effort attempt toclean up any and all IO that is associated with the domain.  Streams areaborted, ended, closed, and/or destroyed.  Timers are cleared.Explicitly bound callbacks are no longer called.  Any error events thatare raised as a result of this are ignored.The intention of calling dispose is generally to prevent cascadingerrors when a critical part of the Domain context is found to be in anerror state.Once the domain is disposed the dispose event will emit.Note that IO might still be performed.  However, to the highest degreepossible, once a domain is disposed, further errors from the emitters inthat set will be ignored.  So, even if some remaining actions are stillin flight, Node.js will not communicate further about them.</summary>
/// </signature>
}});
window.crypto={DEFAULT_ENCODING:'',getCiphers:function(){},getHashes:function(){},createCredentials:function(details){},createHash:function(algorithm){},createHmac:function(algorithm,key){},createCipher:function(algorithm,password){},createCipheriv:function(algorithm,key,iv){},createDecipher:function(algorithm,password){},createDecipheriv:function(algorithm,key,iv){},createSign:function(algorithm){},createVerify:function(algorithm){},createDiffieHellman:function(prime_length){},createDiffieHellman:function(prime,encoding){},getDiffieHellman:function(group_name){},pbkdf2:function(password,salt,iterations,keylen,callback){},pbkdf2Sync:function(password,salt,iterations,keylen){},randomBytes:function(size,callback){},pseudoRandomBytes:function(size,callback){}};
intellisense.annotate(window.crypto,{
'getCiphers':function() {
/// <signature>
///   <summary>Returns an array with the names of the supported ciphers.Example:var ciphers = crypto.getCiphers();console.log(ciphers); // [&#39;AES-128-CBC&#39;, &#39;AES-128-CBC-HMAC-SHA1&#39;, ...]</summary>
/// </signature>
},'getHashes':function() {
/// <signature>
///   <summary>Returns an array with the names of the supported hash algorithms.Example:var hashes = crypto.getHashes();console.log(hashes); // [&#39;sha&#39;, &#39;sha1&#39;, &#39;sha1WithRSAEncryption&#39;, ...]</summary>
/// </signature>
},'createCredentials':function() {
/// <signature>
///   <summary>Creates a credentials object, with the optional details being adictionary with keys:pfx : A string or buffer holding the PFX or PKCS12 encoded privatekey, certificate and CA certificateskey : A string holding the PEM encoded private keypassphrase : A string of passphrase for the private key or pfxcert : A string holding the PEM encoded certificateca : Either a string or list of strings of PEM encoded CAcertificates to trust.crl : Either a string or list of strings of PEM encoded CRLs(Certificate Revocation List)ciphers: A string describing the ciphers to use or exclude.Consult<a href="http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMATfor details on the format.If no &#39;ca&#39; details are given, then node.js will use the defaultpublicly trusted list of CAs as given in<a href="http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt">http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt.</summary>
///   <param name="details" type="object"></param>
/// </signature>
},'createHash':function() {
/// <signature>
///   <summary>Creates and returns a hash object, a cryptographic hash with the givenalgorithm which can be used to generate hash digests.algorithm is dependent on the available algorithms supported by theversion of OpenSSL on the platform. Examples are &#39;sha1&#39;, &#39;md5&#39;,&#39;sha256&#39;, &#39;sha512&#39;, etc.  On recent releases, openssllist-message-digest-algorithms will display the available digestalgorithms.Example: this program that takes the sha1 sum of a filevar filename = process.argv[2];var crypto = require(&#39;crypto&#39;);var fs = require(&#39;fs&#39;);var shasum = crypto.createHash(&#39;sha1&#39;);var s = fs.ReadStream(filename);s.on(&#39;data&#39;, function(d) {  shasum.update(d);});s.on(&#39;end&#39;, function() {  var d = shasum.digest(&#39;hex&#39;);  console.log(d + &#39;  &#39; + filename);});</summary>
///   <param name="algorithm" type="object"></param>
/// </signature>
},'createHmac':function() {
/// <signature>
///   <summary>Creates and returns a hmac object, a cryptographic hmac with the givenalgorithm and key.It is a <a href="stream.html">stream that is both readable and writable.  Thewritten data is used to compute the hmac.  Once the writable side ofthe stream is ended, use the read() method to get the computeddigest.  The legacy update and digest methods are also supported.algorithm is dependent on the available algorithms supported byOpenSSL - see createHash above.  key is the hmac key to be used.</summary>
///   <param name="algorithm" type="object"></param>
///   <param name="key" type="object"></param>
/// </signature>
},'createCipher':function() {
/// <signature>
///   <summary>Creates and returns a cipher object, with the given algorithm andpassword.algorithm is dependent on OpenSSL, examples are &#39;aes192&#39;, etc.  Onrecent releases, openssl list-cipher-algorithms will display theavailable cipher algorithms.  password is used to derive key and IV,which must be a &#39;binary&#39; encoded string or a <a href="buffer.html">buffer.It is a <a href="stream.html">stream that is both readable and writable.  Thewritten data is used to compute the hash.  Once the writable side ofthe stream is ended, use the read() method to get the computed hashdigest.  The legacy update and digest methods are also supported.</summary>
///   <param name="algorithm" type="object"></param>
///   <param name="password" type="object"></param>
/// </signature>
},'createCipheriv':function() {
/// <signature>
///   <summary>Creates and returns a cipher object, with the given algorithm, key andiv.algorithm is the same as the argument to createCipher().  key isthe raw key used by the algorithm.  iv is an <a href="http://en.wikipedia.org/wiki/Initialization_vector">initializationvector.key and iv must be &#39;binary&#39; encoded strings or<a href="buffer.html">buffers.</summary>
///   <param name="algorithm" type="object"></param>
///   <param name="key" type="object"></param>
///   <param name="iv" type="object"></param>
/// </signature>
},'createDecipher':function() {
/// <signature>
///   <summary>Creates and returns a decipher object, with the given algorithm andkey.  This is the mirror of the [createCipher()][] above.</summary>
///   <param name="algorithm" type="object"></param>
///   <param name="password" type="object"></param>
/// </signature>
},'createDecipheriv':function() {
/// <signature>
///   <summary>Creates and returns a decipher object, with the given algorithm, keyand iv.  This is the mirror of the [createCipheriv()][] above.</summary>
///   <param name="algorithm" type="object"></param>
///   <param name="key" type="object"></param>
///   <param name="iv" type="object"></param>
/// </signature>
},'createSign':function() {
/// <signature>
///   <summary>Creates and returns a signing object, with the given algorithm.  Onrecent OpenSSL releases, openssl list-public-key-algorithms willdisplay the available signing algorithms. Examples are &#39;RSA-SHA256&#39;.</summary>
///   <param name="algorithm" type="object"></param>
/// </signature>
},'createVerify':function() {
/// <signature>
///   <summary>Creates and returns a verification object, with the given algorithm.This is the mirror of the signing object above.</summary>
///   <param name="algorithm" type="object"></param>
/// </signature>
},'createDiffieHellman':function() {
/// <signature>
///   <summary>Creates a Diffie-Hellman key exchange object and generates a prime ofthe given bit length. The generator used is 2.</summary>
///   <param name="prime_length" type="object"></param>
/// </signature>
},'createDiffieHellman':function() {
/// <signature>
///   <summary>Creates a Diffie-Hellman key exchange object using the supplied prime.The generator used is 2. Encoding can be &#39;binary&#39;, &#39;hex&#39;, or&#39;base64&#39;.  If no encoding is specified, then a buffer is expected.</summary>
///   <param name="prime" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'getDiffieHellman':function() {
/// <signature>
///   <summary>Creates a predefined Diffie-Hellman key exchange object.  Thesupported groups are: &#39;modp1&#39;, &#39;modp2&#39;, &#39;modp5&#39; (defined in [RFC2412][]) and &#39;modp14&#39;, &#39;modp15&#39;, &#39;modp16&#39;, &#39;modp17&#39;,&#39;modp18&#39; (defined in [RFC 3526][]).  The returned object mimics theinterface of objects created by [crypto.createDiffieHellman()][]above, but will not allow to change the keys (with[diffieHellman.setPublicKey()][] for example).  The advantage of usingthis routine is that the parties don&#39;t have to generate nor exchangegroup modulus beforehand, saving both processor and communicationtime.Example (obtaining a shared secret):var crypto = require(&#39;crypto&#39;);var alice = crypto.getDiffieHellman(&#39;modp5&#39;);var bob = crypto.getDiffieHellman(&#39;modp5&#39;);alice.generateKeys();bob.generateKeys();var alice_secret = alice.computeSecret(bob.getPublicKey(), null, &#39;hex&#39;);var bob_secret = bob.computeSecret(alice.getPublicKey(), null, &#39;hex&#39;);/* alice_secret and bob_secret should be the same */console.log(alice_secret == bob_secret);</summary>
///   <param name="group_name" type="object"></param>
/// </signature>
},'pbkdf2':function() {
/// <signature>
///   <summary>Asynchronous PBKDF2 applies pseudorandom function HMAC-SHA1 to derivea key of given length from the given password, salt and iterations.The callback gets two arguments (err, derivedKey).</summary>
///   <param name="password" type="object"></param>
///   <param name="salt" type="object"></param>
///   <param name="iterations" type="object"></param>
///   <param name="keylen" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'pbkdf2Sync':function() {
/// <signature>
///   <summary>Synchronous PBKDF2 function.  Returns derivedKey or throws error.</summary>
///   <param name="password" type="object"></param>
///   <param name="salt" type="object"></param>
///   <param name="iterations" type="object"></param>
///   <param name="keylen" type="object"></param>
/// </signature>
},'randomBytes':function() {
/// <signature>
///   <summary>Generates cryptographically strong pseudo-random data. Usage:// asynccrypto.randomBytes(256, function(ex, buf) {  if (ex) throw ex;  console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);});// synctry {  var buf = crypto.randomBytes(256);  console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);} catch (ex) {  // handle error}</summary>
///   <param name="size" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'pseudoRandomBytes':function() {
/// <signature>
///   <summary>Generates non-cryptographically strong pseudo-random data. The datareturned will be unique if it is sufficiently long, but is notnecessarily unpredictable. For this reason, the output of thisfunction should never be used where unpredictability is important,such as in the generation of encryption keys.Usage is otherwise identical to crypto.randomBytes.</summary>
///   <param name="size" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
}});
window.Hash=function(){return {update:function(data,input_encoding){},digest:function(encoding){}};};
intellisense.annotate(window.Hash,{
'update':function() {
/// <signature>
///   <summary>Updates the hash content with the given data, the encoding of whichis given in input_encoding and can be &#39;utf8&#39;, &#39;ascii&#39; or&#39;binary&#39;.  If no encoding is provided, then a buffer is expected.This can be called many times with new data as it is streamed.</summary>
///   <param name="data" type="object"></param>
///   <param name="[input_encoding]" type="object"></param>
/// </signature>
},'digest':function() {
/// <signature>
///   <summary>Calculates the digest of all of the passed data to be hashed.  Theencoding can be &#39;hex&#39;, &#39;binary&#39; or &#39;base64&#39;.  If no encodingis provided, then a buffer is returned.Note: hash object can not be used after digest() method has beencalled.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
}});
window.Hmac=function(){return {update:function(data){},digest:function(encoding){}};};
intellisense.annotate(window.Hmac,{
'update':function() {
/// <signature>
///   <summary>Update the hmac content with the given data.  This can be calledmany times with new data as it is streamed.</summary>
///   <param name="data" type="object"></param>
/// </signature>
},'digest':function() {
/// <signature>
///   <summary>Calculates the digest of all of the passed data to the hmac.  Theencoding can be &#39;hex&#39;, &#39;binary&#39; or &#39;base64&#39;.  If no encodingis provided, then a buffer is returned.Note: hmac object can not be used after digest() method has beencalled.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
}});
window.Cipher=function(){return {update:function(data,input_encoding,output_encoding){},final:function(output_encoding){},setAutoPadding:function(auto_padding){}};};
intellisense.annotate(window.Cipher,{
'update':function() {
/// <signature>
///   <summary>Updates the cipher with data, the encoding of which is given ininput_encoding and can be &#39;utf8&#39;, &#39;ascii&#39; or &#39;binary&#39;.  If noencoding is provided, then a buffer is expected.The output_encoding specifies the output format of the enciphereddata, and can be &#39;binary&#39;, &#39;base64&#39; or &#39;hex&#39;.  If no encoding isprovided, then a buffer is returned.Returns the enciphered contents, and can be called many times with newdata as it is streamed.</summary>
///   <param name="data" type="object"></param>
///   <param name="[input_encoding]" type="object"></param>
///   <param name="[output_encoding]" type="object"></param>
/// </signature>
},'final':function() {
/// <signature>
///   <summary>Returns any remaining enciphered contents, with output_encodingbeing one of: &#39;binary&#39;, &#39;base64&#39; or &#39;hex&#39;.  If no encoding isprovided, then a buffer is returned.Note: cipher object can not be used after final() method has beencalled.</summary>
///   <param name="[output_encoding]" type="object"></param>
/// </signature>
},'setAutoPadding':function() {
/// <signature>
///   <summary>You can disable automatic padding of the input data to block size. Ifauto_padding is false, the length of the entire input data must be amultiple of the cipher&#39;s block size or final will fail.  Useful fornon-standard padding, e.g. using 0x0 instead of PKCS padding. Youmust call this before cipher.final.</summary>
///   <param name="auto_padding" type="object"></param>
/// </signature>
}});
window.Decipher=function(){return {update:function(data,input_encoding,output_encoding){},final:function(output_encoding){},setAutoPadding:function(auto_padding){}};};
intellisense.annotate(window.Decipher,{
'update':function() {
/// <signature>
///   <summary>Updates the decipher with data, which is encoded in &#39;binary&#39;,&#39;base64&#39; or &#39;hex&#39;.  If no encoding is provided, then a buffer isexpected.The output_decoding specifies in what format to return thedeciphered plaintext: &#39;binary&#39;, &#39;ascii&#39; or &#39;utf8&#39;.  If noencoding is provided, then a buffer is returned.</summary>
///   <param name="data" type="object"></param>
///   <param name="[input_encoding]" type="object"></param>
///   <param name="[output_encoding]" type="object"></param>
/// </signature>
},'final':function() {
/// <signature>
///   <summary>Returns any remaining plaintext which is deciphered, withoutput_encoding being one of: &#39;binary&#39;, &#39;ascii&#39; or &#39;utf8&#39;.  Ifno encoding is provided, then a buffer is returned.Note: decipher object can not be used after final() method has beencalled.</summary>
///   <param name="[output_encoding]" type="object"></param>
/// </signature>
},'setAutoPadding':function() {
/// <signature>
///   <summary>You can disable auto padding if the data has been encrypted withoutstandard block padding to prevent decipher.final from checking andremoving it. Can only work if the input data&#39;s length is a multiple ofthe ciphers block size. You must call this before streaming data todecipher.update.</summary>
///   <param name="auto_padding" type="object"></param>
/// </signature>
}});
window.Sign=function(){return {update:function(data){},sign:function(private_key,output_format){}};};
intellisense.annotate(window.Sign,{
'update':function() {
/// <signature>
///   <summary>Updates the sign object with data.  This can be called many timeswith new data as it is streamed.</summary>
///   <param name="data" type="object"></param>
/// </signature>
},'sign':function() {
/// <signature>
///   <summary>Calculates the signature on all the updated data passed through thesign.  private_key is a string containing the PEM encoded privatekey for signing.Returns the signature in output_format which can be &#39;binary&#39;,&#39;hex&#39; or &#39;base64&#39;. If no encoding is provided, then a buffer isreturned.Note: sign object can not be used after sign() method has beencalled.</summary>
///   <param name="private_key" type="object"></param>
///   <param name="[output_format]" type="object"></param>
/// </signature>
}});
window.Verify=function(){return {update:function(data){},verify:function(object,signature,signature_format){}};};
intellisense.annotate(window.Verify,{
'update':function() {
/// <signature>
///   <summary>Updates the verifier object with data.  This can be called many timeswith new data as it is streamed.</summary>
///   <param name="data" type="object"></param>
/// </signature>
},'verify':function() {
/// <signature>
///   <summary>Verifies the signed data by using the object and signature.object is  a string containing a PEM encoded object, which can beone of RSA public key, DSA public key, or X.509 certificate.signature is the previously calculated signature for the data, inthe signature_format which can be &#39;binary&#39;, &#39;hex&#39; or &#39;base64&#39;.If no encoding is specified, then a buffer is expected.Returns true or false depending on the validity of the signature forthe data and public key.Note: verifier object can not be used after verify() method has beencalled.</summary>
///   <param name="object" type="object"></param>
///   <param name="signature" type="object"></param>
///   <param name="[signature_format]" type="object"></param>
/// </signature>
}});
window.DiffieHellman=function(){return {generateKeys:function(encoding){},computeSecret:function(other_public_key,input_encoding,output_encoding){},getPrime:function(encoding){},getGenerator:function(encoding){},getPublicKey:function(encoding){},getPrivateKey:function(encoding){},setPublicKey:function(public_key,encoding){},setPrivateKey:function(private_key,encoding){}};};
intellisense.annotate(window.DiffieHellman,{
'generateKeys':function() {
/// <signature>
///   <summary>Generates private and public Diffie-Hellman key values, and returnsthe public key in the specified encoding. This key should betransferred to the other party. Encoding can be &#39;binary&#39;, &#39;hex&#39;,or &#39;base64&#39;.  If no encoding is provided, then a buffer is returned.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'computeSecret':function() {
/// <signature>
///   <summary>Computes the shared secret using other_public_key as the otherparty&#39;s public key and returns the computed shared secret. Suppliedkey is interpreted using specified input_encoding, and secret isencoded using specified output_encoding. Encodings can be&#39;binary&#39;, &#39;hex&#39;, or &#39;base64&#39;. If the input encoding is notprovided, then a buffer is expected.If no output encoding is given, then a buffer is returned.</summary>
///   <param name="other_public_key" type="object"></param>
///   <param name="[input_encoding]" type="object"></param>
///   <param name="[output_encoding]" type="object"></param>
/// </signature>
},'getPrime':function() {
/// <signature>
///   <summary>Returns the Diffie-Hellman prime in the specified encoding, which canbe &#39;binary&#39;, &#39;hex&#39;, or &#39;base64&#39;. If no encoding is provided,then a buffer is returned.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'getGenerator':function() {
/// <signature>
///   <summary>Returns the Diffie-Hellman prime in the specified encoding, which canbe &#39;binary&#39;, &#39;hex&#39;, or &#39;base64&#39;. If no encoding is provided,then a buffer is returned.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'getPublicKey':function() {
/// <signature>
///   <summary>Returns the Diffie-Hellman public key in the specified encoding, whichcan be &#39;binary&#39;, &#39;hex&#39;, or &#39;base64&#39;. If no encoding is provided,then a buffer is returned.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'getPrivateKey':function() {
/// <signature>
///   <summary>Returns the Diffie-Hellman private key in the specified encoding,which can be &#39;binary&#39;, &#39;hex&#39;, or &#39;base64&#39;. If no encoding isprovided, then a buffer is returned.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'setPublicKey':function() {
/// <signature>
///   <summary>Sets the Diffie-Hellman public key. Key encoding can be &#39;binary&#39;,&#39;hex&#39; or &#39;base64&#39;. If no encoding is provided, then a buffer isexpected.</summary>
///   <param name="public_key" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'setPrivateKey':function() {
/// <signature>
///   <summary>Sets the Diffie-Hellman private key. Key encoding can be &#39;binary&#39;,&#39;hex&#39; or &#39;base64&#39;. If no encoding is provided, then a buffer isexpected.</summary>
///   <param name="private_key" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
}});
window.tls_(ssl)={SLAB_BUFFER_SIZE:'',getCiphers:function(){},createServer:function(options,secureConnectionListener){},connect:function(port,host,options,callback){},connect:function(options,callback){},connect:function(port,host,options,callback){},createSecurePair:function(credentials,isServer,requestCert,rejectUnauthorized){}};
intellisense.annotate(window.tls_(ssl),{
'getCiphers':function() {
/// <signature>
///   <summary>Returns an array with the names of the supported SSL ciphers.Example:var ciphers = tls.getCiphers();console.log(ciphers); // [&#39;AES128-SHA&#39;, &#39;AES256-SHA&#39;, ...]</summary>
/// </signature>
},'createServer':function() {
/// <signature>
///   <summary>Creates a new [tls.Server][].  The connectionListener argument isautomatically set as a listener for the [secureConnection][] event.  Theoptions object has these possibilities:pfx: A string or Buffer containing the private key, certificate andCA certs of the server in PFX or PKCS12 format. (Mutually exclusive withthe key, cert and ca options.)key: A string or Buffer containing the private key of the server inPEM format. (Required)passphrase: A string of passphrase for the private key or pfx.cert: A string or Buffer containing the certificate key of the server inPEM format. (Required)ca: An array of strings or Buffers of trusted certificates. If this isomitted several well known &quot;root&quot; CAs will be used, like VeriSign.These are used to authorize connections.crl : Either a string or list of strings of PEM encoded CRLs (CertificateRevocation List)ciphers: A string describing the ciphers to use or exclude.To mitigate [BEAST attacks] it is recommended that you use this option inconjunction with the honorCipherOrder option described below toprioritize the non-CBC cipher.Defaults toECDHE-RSA-AES128-SHA256:AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH.Consult the [OpenSSL cipher list format documentation] for details on theformat.ECDHE-RSA-AES128-SHA256 and AES128-GCM-SHA256 are used when node.js islinked against OpenSSL 1.0.1 or newer and the client speaks TLS 1.2, RC4 isused as a secure fallback.NOTE: Previous revisions of this section suggested AES256-SHA as anacceptable cipher. Unfortunately, AES256-SHA is a CBC cipher and thereforesusceptible to BEAST attacks. Do not use it.handshakeTimeout: Abort the connection if the SSL/TLS handshake does notfinish in this many milliseconds. The default is 120 seconds.A &#39;clientError&#39; is emitted on the tls.Server object whenever a handshaketimes out.honorCipherOrder : When choosing a cipher, use the server&#39;s preferencesinstead of the client preferences.Note that if SSLv2 is used, the server will send its list of preferencesto the client, and the client chooses the cipher.Although, this option is disabled by default, it is recommended that youuse this option in conjunction with the ciphers option to mitigateBEAST attacks.requestCert: If true the server will request a certificate fromclients that connect and attempt to verify that certificate. Default:false.rejectUnauthorized: If true the server will reject any connectionwhich is not authorized with the list of supplied CAs. This option onlyhas an effect if requestCert is true. Default: false.NPNProtocols: An array or Buffer of possible NPN protocols. (Protocolsshould be ordered by their priority).SNICallback: A function that will be called if client supports SNI TLSextension. Only one argument will be passed to it: servername. AndSNICallback should return SecureContext instance.(You can use crypto.createCredentials(...).context to get properSecureContext). If SNICallback wasn&#39;t provided - default callback withhigh-level API will be used (see below).sessionIdContext: A string containing a opaque identifier for sessionresumption. If requestCert is true, the default is MD5 hash valuegenerated from command-line. Otherwise, the default is not provided.Here is a simple example echo server:var tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  key: fs.readFileSync(&#39;server-key.pem&#39;),  cert: fs.readFileSync(&#39;server-cert.pem&#39;),  // This is necessary only if using the client certificate authentication.  requestCert: true,  // This is necessary only if the client uses the self-signed certificate.  ca: [ fs.readFileSync(&#39;client-cert.pem&#39;) ]};var server = tls.createServer(options, function(cleartextStream) {  console.log(&#39;server connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  cleartextStream.write(&quot;welcome!\n&quot;);  cleartextStream.setEncoding(&#39;utf8&#39;);  cleartextStream.pipe(cleartextStream);});server.listen(8000, function() {  console.log(&#39;server bound&#39;);});Orvar tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  pfx: fs.readFileSync(&#39;server.pfx&#39;),  // This is necessary only if using the client certificate authentication.  requestCert: true,};var server = tls.createServer(options, function(cleartextStream) {  console.log(&#39;server connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  cleartextStream.write(&quot;welcome!\n&quot;);  cleartextStream.setEncoding(&#39;utf8&#39;);  cleartextStream.pipe(cleartextStream);});server.listen(8000, function() {  console.log(&#39;server bound&#39;);});You can test this server by connecting to it with openssl s_client:openssl s_client -connect 127.0.0.1:8000</summary>
///   <param name="options" type="object"></param>
///   <param name="[secureConnectionListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates a new client connection to the given port and host (old API) oroptions.port and options.host. (If host is omitted, it defaults tolocalhost.) options should be an object which specifies:host: Host the client should connect toport: Port the client should connect tosocket: Establish secure connection on a given socket rather thancreating a new socket. If this option is specified, host and portare ignored.pfx: A string or Buffer containing the private key, certificate andCA certs of the server in PFX or PKCS12 format.key: A string or Buffer containing the private key of the client inPEM format.passphrase: A string of passphrase for the private key or pfx.cert: A string or Buffer containing the certificate key of the client inPEM format.ca: An array of strings or Buffers of trusted certificates. If this isomitted several well known &quot;root&quot; CAs will be used, like VeriSign.These are used to authorize connections.rejectUnauthorized: If true, the server certificate is verified againstthe list of supplied CAs. An &#39;error&#39; event is emitted if verificationfails. Default: true.NPNProtocols: An array of string or Buffer containing supported NPNprotocols. Buffer should have following format: 0x05hello0x05world,where first byte is next protocol name&#39;s length. (Passing array shouldusually be much simpler: [&#39;hello&#39;, &#39;world&#39;].)servername: Servername for SNI (Server Name Indication) TLS extension.The callback parameter will be added as a listener for the[&#39;secureConnect&#39;][] event.tls.connect() returns a [CleartextStream][] object.Here is an example of a client of echo server as described previously:var tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  // These are necessary only if using the client certificate authentication  key: fs.readFileSync(&#39;client-key.pem&#39;),  cert: fs.readFileSync(&#39;client-cert.pem&#39;),  // This is necessary only if the server uses the self-signed certificate  ca: [ fs.readFileSync(&#39;server-cert.pem&#39;) ]};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});Orvar tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  pfx: fs.readFileSync(&#39;client.pfx&#39;)};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates a new client connection to the given port and host (old API) oroptions.port and options.host. (If host is omitted, it defaults tolocalhost.) options should be an object which specifies:host: Host the client should connect toport: Port the client should connect tosocket: Establish secure connection on a given socket rather thancreating a new socket. If this option is specified, host and portare ignored.pfx: A string or Buffer containing the private key, certificate andCA certs of the server in PFX or PKCS12 format.key: A string or Buffer containing the private key of the client inPEM format.passphrase: A string of passphrase for the private key or pfx.cert: A string or Buffer containing the certificate key of the client inPEM format.ca: An array of strings or Buffers of trusted certificates. If this isomitted several well known &quot;root&quot; CAs will be used, like VeriSign.These are used to authorize connections.rejectUnauthorized: If true, the server certificate is verified againstthe list of supplied CAs. An &#39;error&#39; event is emitted if verificationfails. Default: true.NPNProtocols: An array of string or Buffer containing supported NPNprotocols. Buffer should have following format: 0x05hello0x05world,where first byte is next protocol name&#39;s length. (Passing array shouldusually be much simpler: [&#39;hello&#39;, &#39;world&#39;].)servername: Servername for SNI (Server Name Indication) TLS extension.The callback parameter will be added as a listener for the[&#39;secureConnect&#39;][] event.tls.connect() returns a [CleartextStream][] object.Here is an example of a client of echo server as described previously:var tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  // These are necessary only if using the client certificate authentication  key: fs.readFileSync(&#39;client-key.pem&#39;),  cert: fs.readFileSync(&#39;client-cert.pem&#39;),  // This is necessary only if the server uses the self-signed certificate  ca: [ fs.readFileSync(&#39;server-cert.pem&#39;) ]};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});Orvar tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  pfx: fs.readFileSync(&#39;client.pfx&#39;)};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});</summary>
///   <param name="options" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates a new client connection to the given port and host (old API) oroptions.port and options.host. (If host is omitted, it defaults tolocalhost.) options should be an object which specifies:host: Host the client should connect toport: Port the client should connect tosocket: Establish secure connection on a given socket rather thancreating a new socket. If this option is specified, host and portare ignored.pfx: A string or Buffer containing the private key, certificate andCA certs of the server in PFX or PKCS12 format.key: A string or Buffer containing the private key of the client inPEM format.passphrase: A string of passphrase for the private key or pfx.cert: A string or Buffer containing the certificate key of the client inPEM format.ca: An array of strings or Buffers of trusted certificates. If this isomitted several well known &quot;root&quot; CAs will be used, like VeriSign.These are used to authorize connections.rejectUnauthorized: If true, the server certificate is verified againstthe list of supplied CAs. An &#39;error&#39; event is emitted if verificationfails. Default: true.NPNProtocols: An array of string or Buffer containing supported NPNprotocols. Buffer should have following format: 0x05hello0x05world,where first byte is next protocol name&#39;s length. (Passing array shouldusually be much simpler: [&#39;hello&#39;, &#39;world&#39;].)servername: Servername for SNI (Server Name Indication) TLS extension.The callback parameter will be added as a listener for the[&#39;secureConnect&#39;][] event.tls.connect() returns a [CleartextStream][] object.Here is an example of a client of echo server as described previously:var tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  // These are necessary only if using the client certificate authentication  key: fs.readFileSync(&#39;client-key.pem&#39;),  cert: fs.readFileSync(&#39;client-cert.pem&#39;),  // This is necessary only if the server uses the self-signed certificate  ca: [ fs.readFileSync(&#39;server-cert.pem&#39;) ]};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});Orvar tls = require(&#39;tls&#39;);var fs = require(&#39;fs&#39;);var options = {  pfx: fs.readFileSync(&#39;client.pfx&#39;)};var cleartextStream = tls.connect(8000, options, function() {  console.log(&#39;client connected&#39;,              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);  process.stdin.pipe(cleartextStream);  process.stdin.resume();});cleartextStream.setEncoding(&#39;utf8&#39;);cleartextStream.on(&#39;data&#39;, function(data) {  console.log(data);});cleartextStream.on(&#39;end&#39;, function() {  server.close();});</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'createSecurePair':function() {
/// <signature>
///   <summary>Creates a new secure pair object with two streams, one of which reads/writesencrypted data, and one reads/writes cleartext data.Generally the encrypted one is piped to/from an incoming encrypted data stream,and the cleartext one is used as a replacement for the initial encrypted stream.credentials: A credentials object from crypto.createCredentials( ... )isServer: A boolean indicating whether this tls connection should beopened as a server or a client.requestCert: A boolean indicating whether a server should request acertificate from a connecting client. Only applies to server connections.rejectUnauthorized: A boolean indicating whether a server shouldautomatically reject clients with invalid certificates. Only applies toservers with requestCert enabled.tls.createSecurePair() returns a SecurePair object with [cleartext][] andencrypted stream properties.</summary>
///   <param name="[credentials]" type="object"></param>
///   <param name="[isServer]" type="object"></param>
///   <param name="[requestCert]" type="object"></param>
///   <param name="[rejectUnauthorized]" type="object"></param>
/// </signature>
}});
window.SecurePair=function(){return {};};
intellisense.annotate(window.SecurePair,{
});
window.tls.Server=function(){return {maxConnections:'',connections:'',listen:function(port,host,callback){},close:function(){},address:function(){},addContext:function(hostname,credentials){}};};
intellisense.annotate(window.tls.Server,{
'listen':function() {
/// <signature>
///   <summary>Begin accepting connections on the specified port and host.  If thehost is omitted, the server will accept connections directed to anyIPv4 address (INADDR_ANY).This function is asynchronous. The last parameter callback will be calledwhen the server has been bound.See net.Server for more information.</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Stops the server from accepting new connections. This function isasynchronous, the server is finally closed when the server emits a &#39;close&#39;event.</summary>
/// </signature>
},'address':function() {
/// <signature>
///   <summary>Returns the bound address, the address family name and port of theserver as reported by the operating system.  See [net.Server.address()][] formore information.</summary>
/// </signature>
},'addContext':function() {
/// <signature>
///   <summary>Add secure context that will be used if client request&#39;s SNI hostname ismatching passed hostname (wildcards can be used). credentials can containkey, cert and ca.</summary>
///   <param name="hostname" type="object"></param>
///   <param name="credentials" type="object"></param>
/// </signature>
}});
window.CryptoStream=function(){return {bytesWritten:'',};};
intellisense.annotate(window.CryptoStream,{
});
window.tls.CleartextStream=function(){return {authorized:'',authorizationError:'',remoteAddress:'',remotePort:'',getPeerCertificate:function(){},getCipher:function(){},address:function(){}};};
intellisense.annotate(window.tls.CleartextStream,{
'getPeerCertificate':function() {
/// <signature>
///   <summary>Returns an object representing the peer&#39;s certificate. The returned object hassome properties corresponding to the field of the certificate.Example:{ subject:    { C: &#39;UK&#39;,     ST: &#39;Acknack Ltd&#39;,     L: &#39;Rhys Jones&#39;,     O: &#39;node.js&#39;,     OU: &#39;Test TLS Certificate&#39;,     CN: &#39;localhost&#39; },  issuer:    { C: &#39;UK&#39;,     ST: &#39;Acknack Ltd&#39;,     L: &#39;Rhys Jones&#39;,     O: &#39;node.js&#39;,     OU: &#39;Test TLS Certificate&#39;,     CN: &#39;localhost&#39; },  valid_from: &#39;Nov 11 09:52:22 2009 GMT&#39;,  valid_to: &#39;Nov  6 09:52:22 2029 GMT&#39;,  fingerprint: &#39;2A:7A:C2:DD:E5:F9:CC:53:72:35:99:7A:02:5A:71:38:52:EC:8A:DF&#39; }If the peer does not provide a certificate, it returns null or an emptyobject.</summary>
/// </signature>
},'getCipher':function() {
/// <signature>
///   <summary>Returns an object representing the cipher name and the SSL/TLSprotocol version of the current connection.Example:{ name: &#39;AES256-SHA&#39;, version: &#39;TLSv1/SSLv3&#39; }See SSL_CIPHER_get_name() and SSL_CIPHER_get_version() in<a href="http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS">http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS for moreinformation.</summary>
/// </signature>
},'address':function() {
/// <signature>
///   <summary>Returns the bound address, the address family name and port of theunderlying socket as reported by the operating system. Returns anobject with three properties, e.g.{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</summary>
/// </signature>
}});
window.fs={WriteStream:'',rename:function(oldPath,newPath,callback){},renameSync:function(oldPath,newPath){},ftruncate:function(fd,len,callback){},ftruncateSync:function(fd,len){},truncate:function(path,len,callback){},truncateSync:function(path,len){},chown:function(path,uid,gid,callback){},chownSync:function(path,uid,gid){},fchown:function(fd,uid,gid,callback){},fchownSync:function(fd,uid,gid){},lchown:function(path,uid,gid,callback){},lchownSync:function(path,uid,gid){},chmod:function(path,mode,callback){},chmodSync:function(path,mode){},fchmod:function(fd,mode,callback){},fchmodSync:function(fd,mode){},lchmod:function(path,mode,callback){},lchmodSync:function(path,mode){},stat:function(path,callback){},lstat:function(path,callback){},fstat:function(fd,callback){},statSync:function(path){},lstatSync:function(path){},fstatSync:function(fd){},link:function(srcpath,dstpath,callback){},linkSync:function(srcpath,dstpath){},symlink:function(srcpath,dstpath,type,callback){},symlinkSync:function(srcpath,dstpath,type){},readlink:function(path,callback){},readlinkSync:function(path){},realpath:function(path,cache,callback){},realpathSync:function(path,cache){},unlink:function(path,callback){},unlinkSync:function(path){},rmdir:function(path,callback){},rmdirSync:function(path){},mkdir:function(path,mode,callback){},mkdirSync:function(path,mode){},readdir:function(path,callback){},readdirSync:function(path){},close:function(fd,callback){},closeSync:function(fd){},open:function(path,flags,mode,callback){},openSync:function(path,flags,mode){},utimes:function(path,atime,mtime){},utimes:function(path,atime,mtime,callback){},utimesSync:function(path,atime,mtime){},futimes:function(fd,atime,mtime){},futimes:function(fd,atime,mtime,callback){},futimesSync:function(fd,atime,mtime){},fsync:function(fd,callback){},fsyncSync:function(fd){},write:function(fd,buffer,offset,length,position,callback){},writeSync:function(fd,buffer,offset,length,position){},read:function(fd,buffer,offset,length,position,callback){},readSync:function(fd,buffer,offset,length,position){},readFile:function(filename,options,callback){},readFile:function(filename,options,callback){},readFileSync:function(filename,options){},writeFile:function(filename,data,options,callback){},writeFile:function(filename,data,options,callback){},writeFileSync:function(filename,data,options){},appendFile:function(filename,data,options,callback){},appendFile:function(filename,data,options,callback){},appendFileSync:function(filename,data,options){},watchFile:function(filename,options,listener){},unwatchFile:function(filename,listener){},watch:function(filename,options,listener){},exists:function(path,callback){},existsSync:function(path){},createReadStream:function(path,options){},createWriteStream:function(path,options){}};
intellisense.annotate(window.fs,{
'rename':function() {
/// <signature>
///   <summary>Asynchronous rename(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="oldPath" type="object"></param>
///   <param name="newPath" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'renameSync':function() {
/// <signature>
///   <summary>Synchronous rename(2).</summary>
///   <param name="oldPath" type="object"></param>
///   <param name="newPath" type="object"></param>
/// </signature>
},'ftruncate':function() {
/// <signature>
///   <summary>Asynchronous ftruncate(2). No arguments other than a possible exception aregiven to the completion callback.</summary>
///   <param name="fd" type="object"></param>
///   <param name="len" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'ftruncateSync':function() {
/// <signature>
///   <summary>Synchronous ftruncate(2).</summary>
///   <param name="fd" type="object"></param>
///   <param name="len" type="object"></param>
/// </signature>
},'truncate':function() {
/// <signature>
///   <summary>Asynchronous truncate(2). No arguments other than a possible exception aregiven to the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="len" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'truncateSync':function() {
/// <signature>
///   <summary>Synchronous truncate(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="len" type="object"></param>
/// </signature>
},'chown':function() {
/// <signature>
///   <summary>Asynchronous chown(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'chownSync':function() {
/// <signature>
///   <summary>Synchronous chown(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
/// </signature>
},'fchown':function() {
/// <signature>
///   <summary>Asynchronous fchown(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="fd" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'fchownSync':function() {
/// <signature>
///   <summary>Synchronous fchown(2).</summary>
///   <param name="fd" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
/// </signature>
},'lchown':function() {
/// <signature>
///   <summary>Asynchronous lchown(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'lchownSync':function() {
/// <signature>
///   <summary>Synchronous lchown(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="uid" type="object"></param>
///   <param name="gid" type="object"></param>
/// </signature>
},'chmod':function() {
/// <signature>
///   <summary>Asynchronous chmod(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="mode" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'chmodSync':function() {
/// <signature>
///   <summary>Synchronous chmod(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="mode" type="object"></param>
/// </signature>
},'fchmod':function() {
/// <signature>
///   <summary>Asynchronous fchmod(2). No arguments other than a possible exceptionare given to the completion callback.</summary>
///   <param name="fd" type="object"></param>
///   <param name="mode" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'fchmodSync':function() {
/// <signature>
///   <summary>Synchronous fchmod(2).</summary>
///   <param name="fd" type="object"></param>
///   <param name="mode" type="object"></param>
/// </signature>
},'lchmod':function() {
/// <signature>
///   <summary>Asynchronous lchmod(2). No arguments other than a possible exceptionare given to the completion callback.Only available on Mac OS X.</summary>
///   <param name="path" type="object"></param>
///   <param name="mode" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'lchmodSync':function() {
/// <signature>
///   <summary>Synchronous lchmod(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="mode" type="object"></param>
/// </signature>
},'stat':function() {
/// <signature>
///   <summary>Asynchronous stat(2). The callback gets two arguments (err, stats) wherestats is a <a href="#fs_class_fs_stats">fs.Stats object.  See the <a href="#fs_class_fs_stats">fs.Statssection below for more information.</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'lstat':function() {
/// <signature>
///   <summary>Asynchronous lstat(2). The callback gets two arguments (err, stats) wherestats is a fs.Stats object. lstat() is identical to stat(), except that ifpath is a symbolic link, then the link itself is stat-ed, not the file that itrefers to.</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'fstat':function() {
/// <signature>
///   <summary>Asynchronous fstat(2). The callback gets two arguments (err, stats) wherestats is a fs.Stats object. fstat() is identical to stat(), except thatthe file to be stat-ed is specified by the file descriptor fd.</summary>
///   <param name="fd" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'statSync':function() {
/// <signature>
///   <summary>Synchronous stat(2). Returns an instance of fs.Stats.</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'lstatSync':function() {
/// <signature>
///   <summary>Synchronous lstat(2). Returns an instance of fs.Stats.</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'fstatSync':function() {
/// <signature>
///   <summary>Synchronous fstat(2). Returns an instance of fs.Stats.</summary>
///   <param name="fd" type="object"></param>
/// </signature>
},'link':function() {
/// <signature>
///   <summary>Asynchronous link(2). No arguments other than a possible exception are given tothe completion callback.</summary>
///   <param name="srcpath" type="object"></param>
///   <param name="dstpath" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'linkSync':function() {
/// <signature>
///   <summary>Synchronous link(2).</summary>
///   <param name="srcpath" type="object"></param>
///   <param name="dstpath" type="object"></param>
/// </signature>
},'symlink':function() {
/// <signature>
///   <summary>Asynchronous symlink(2). No arguments other than a possible exception are givento the completion callback.type argument can be either &#39;dir&#39;, &#39;file&#39;, or &#39;junction&#39; (default is &#39;file&#39;).  It is only used on Windows (ignored on other platforms).Note that Windows junction points require the destination path to be absolute.  When using&#39;junction&#39;, the destination argument will automatically be normalized to absolute path.</summary>
///   <param name="srcpath" type="object"></param>
///   <param name="dstpath" type="object"></param>
///   <param name="[type]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'symlinkSync':function() {
/// <signature>
///   <summary>Synchronous symlink(2).</summary>
///   <param name="srcpath" type="object"></param>
///   <param name="dstpath" type="object"></param>
///   <param name="[type]" type="object"></param>
/// </signature>
},'readlink':function() {
/// <signature>
///   <summary>Asynchronous readlink(2). The callback gets two arguments (err,linkString).</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'readlinkSync':function() {
/// <signature>
///   <summary>Synchronous readlink(2). Returns the symbolic link&#39;s string value.</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'realpath':function() {
/// <signature>
///   <summary>Asynchronous realpath(2). The callback gets two arguments (err,resolvedPath). May use process.cwd to resolve relative paths. cache is anobject literal of mapped paths that can be used to force a specific pathresolution or avoid additional fs.stat calls for known real paths.Example:var cache = {&#39;/etc&#39;:&#39;/private/etc&#39;};fs.realpath(&#39;/etc/passwd&#39;, cache, function (err, resolvedPath) {  if (err) throw err;  console.log(resolvedPath);});</summary>
///   <param name="path" type="object"></param>
///   <param name="[cache]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'realpathSync':function() {
/// <signature>
///   <summary>Synchronous realpath(2). Returns the resolved path.</summary>
///   <param name="path" type="object"></param>
///   <param name="[cache]" type="object"></param>
/// </signature>
},'unlink':function() {
/// <signature>
///   <summary>Asynchronous unlink(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'unlinkSync':function() {
/// <signature>
///   <summary>Synchronous unlink(2).</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'rmdir':function() {
/// <signature>
///   <summary>Asynchronous rmdir(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'rmdirSync':function() {
/// <signature>
///   <summary>Synchronous rmdir(2).</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'mkdir':function() {
/// <signature>
///   <summary>Asynchronous mkdir(2). No arguments other than a possible exception are givento the completion callback. mode defaults to 0777.</summary>
///   <param name="path" type="object"></param>
///   <param name="[mode]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'mkdirSync':function() {
/// <signature>
///   <summary>Synchronous mkdir(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="[mode]" type="object"></param>
/// </signature>
},'readdir':function() {
/// <signature>
///   <summary>Asynchronous readdir(3).  Reads the contents of a directory.The callback gets two arguments (err, files) where files is an array ofthe names of the files in the directory excluding &#39;.&#39; and &#39;..&#39;.</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'readdirSync':function() {
/// <signature>
///   <summary>Synchronous readdir(3). Returns an array of filenames excluding &#39;.&#39; and&#39;..&#39;.</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Asynchronous close(2).  No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="fd" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'closeSync':function() {
/// <signature>
///   <summary>Synchronous close(2).</summary>
///   <param name="fd" type="object"></param>
/// </signature>
},'open':function() {
/// <signature>
///   <summary>Asynchronous file open. See open(2). flags can be:&#39;r&#39; - Open file for reading.An exception occurs if the file does not exist.&#39;r+&#39; - Open file for reading and writing.An exception occurs if the file does not exist.&#39;rs&#39; - Open file for reading in synchronous mode. Instructs the operatingsystem to bypass the local file system cache.This is primarily useful for opening files on NFS mounts as it allows you toskip the potentially stale local cache. It has a very real impact on I/Operformance so don&#39;t use this mode unless you need it.Note that this doesn&#39;t turn fs.open() into a synchronous blocking call.If that&#39;s what you want then you should be using fs.openSync()&#39;rs+&#39; - Open file for reading and writing, telling the OS to open itsynchronously. See notes for &#39;rs&#39; about using this with caution.&#39;w&#39; - Open file for writing.The file is created (if it does not exist) or truncated (if it exists).&#39;wx&#39; - Like &#39;w&#39; but opens the file in exclusive mode.&#39;w+&#39; - Open file for reading and writing.The file is created (if it does not exist) or truncated (if it exists).&#39;wx+&#39; - Like &#39;w+&#39; but opens the file in exclusive mode.&#39;a&#39; - Open file for appending.The file is created if it does not exist.&#39;ax&#39; - Like &#39;a&#39; but opens the file in exclusive mode.&#39;a+&#39; - Open file for reading and appending.The file is created if it does not exist.&#39;ax+&#39; - Like &#39;a+&#39; but opens the file in exclusive mode.mode defaults to 0666. The callback gets two arguments (err, fd).Exclusive mode (O_EXCL) ensures that path is newly created. fs.open()fails if a file by that name already exists. On POSIX systems, symlinks arenot followed. Exclusive mode may or may not work with network file systems.On Linux, positional writes don&#39;t work when the file is opened in append mode.The kernel ignores the position argument and always appends the data tothe end of the file.</summary>
///   <param name="path" type="object"></param>
///   <param name="flags" type="object"></param>
///   <param name="[mode]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'openSync':function() {
/// <signature>
///   <summary>Synchronous open(2).</summary>
///   <param name="path" type="object"></param>
///   <param name="flags" type="object"></param>
///   <param name="[mode]" type="object"></param>
/// </signature>
},'utimes':function() {
/// <signature>
///   <summary>Change file timestamps of the file referenced by the supplied path.</summary>
///   <param name="path" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
/// </signature>
},'utimes':function() {
/// <signature>
///   <summary>Change file timestamps of the file referenced by the supplied path.</summary>
///   <param name="path" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'utimesSync':function() {
/// <signature>
///   <summary>Change file timestamps of the file referenced by the supplied path.</summary>
///   <param name="path" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
/// </signature>
},'futimes':function() {
/// <signature>
///   <summary>Change the file timestamps of a file referenced by the supplied filedescriptor.</summary>
///   <param name="fd" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
/// </signature>
},'futimes':function() {
/// <signature>
///   <summary>Change the file timestamps of a file referenced by the supplied filedescriptor.</summary>
///   <param name="fd" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'futimesSync':function() {
/// <signature>
///   <summary>Change the file timestamps of a file referenced by the supplied filedescriptor.</summary>
///   <param name="fd" type="object"></param>
///   <param name="atime" type="object"></param>
///   <param name="mtime" type="object"></param>
/// </signature>
},'fsync':function() {
/// <signature>
///   <summary>Asynchronous fsync(2). No arguments other than a possible exception are givento the completion callback.</summary>
///   <param name="fd" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'fsyncSync':function() {
/// <signature>
///   <summary>Synchronous fsync(2).</summary>
///   <param name="fd" type="object"></param>
/// </signature>
},'write':function() {
/// <signature>
///   <summary>Write buffer to the file specified by fd.offset and length determine the part of the buffer to be written.position refers to the offset from the beginning of the file where this datashould be written. If position is null, the data will be written at thecurrent position.See pwrite(2).The callback will be given three arguments (err, written, buffer) where writtenspecifies how many bytes were written from buffer.Note that it is unsafe to use fs.write multiple times on the same filewithout waiting for the callback. For this scenario,fs.createWriteStream is strongly recommended.On Linux, positional writes don&#39;t work when the file is opened in append mode.The kernel ignores the position argument and always appends the data tothe end of the file.</summary>
///   <param name="fd" type="object"></param>
///   <param name="buffer" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="position" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'writeSync':function() {
/// <signature>
///   <summary>Synchronous version of fs.write(). Returns the number of bytes written.</summary>
///   <param name="fd" type="object"></param>
///   <param name="buffer" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="position" type="object"></param>
/// </signature>
},'read':function() {
/// <signature>
///   <summary>Read data from the file specified by fd.buffer is the buffer that the data will be written to.offset is offset within the buffer where reading will start.length is an integer specifying the number of bytes to read.position is an integer specifying where to begin reading from in the file.If position is null, data will be read from the current file position.The callback is given the three arguments, (err, bytesRead, buffer).</summary>
///   <param name="fd" type="object"></param>
///   <param name="buffer" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="position" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'readSync':function() {
/// <signature>
///   <summary>Synchronous version of fs.read. Returns the number of bytesRead.</summary>
///   <param name="fd" type="object"></param>
///   <param name="buffer" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="position" type="object"></param>
/// </signature>
},'readFile':function() {
/// <signature>
///   <summary>Asynchronously reads the entire contents of a file.\n Example:fs.readFile(&#39;/etc/passwd&#39;, function (err, data) {  if (err) throw err;  console.log(data);});The callback is passed two arguments (err, data), where data is thecontents of the file.If no encoding is specified, then the raw buffer is returned.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'readFile':function() {
/// <signature>
///   <summary>Asynchronously reads the entire contents of a file. Example:fs.readFile(&#39;/etc/passwd&#39;, function (err, data) {  if (err) throw err;  console.log(data);});The callback is passed two arguments (err, data), where data is thecontents of the file.If no encoding is specified, then the raw buffer is returned.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'readFileSync':function() {
/// <signature>
///   <summary>Synchronous version of fs.readFile. Returns the contents of the filename.If the encoding option is specified then this function returns astring. Otherwise it returns a buffer.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'writeFile':function() {
/// <signature>
///   <summary>Asynchronously writes data to a file, replacing the file if it already exists.data can be a string or a buffer.The encoding option is ignored if data is a buffer. It defaultsto &#39;utf8&#39;.Example:fs.writeFile(&#39;message.txt&#39;, &#39;Hello Node&#39;, function (err) {  if (err) throw err;  console.log(&#39;It\&#39;s saved!&#39;);});</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'writeFile':function() {
/// <signature>
///   <summary>Asynchronously writes data to a file, replacing the file if it already exists.data can be a string or a buffer.The encoding option is ignored if data is a buffer. It defaultsto &#39;utf8&#39;.Example:fs.writeFile(&#39;message.txt&#39;, &#39;Hello Node&#39;, function (err) {  if (err) throw err;  console.log(&#39;It\&#39;s saved!&#39;);});</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'writeFileSync':function() {
/// <signature>
///   <summary>The synchronous version of fs.writeFile.</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'appendFile':function() {
/// <signature>
///   <summary>Asynchronously append data to a file, creating the file if it not yet exists.data can be a string or a buffer.Example:fs.appendFile(&#39;message.txt&#39;, &#39;data to append&#39;, function (err) {  if (err) throw err;  console.log(&#39;The &quot;data to append&quot; was appended to file!&#39;);});</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'appendFile':function() {
/// <signature>
///   <summary>Asynchronously append data to a file, creating the file if it not yet exists.data can be a string or a buffer.Example:fs.appendFile(&#39;message.txt&#39;, &#39;data to append&#39;, function (err) {  if (err) throw err;  console.log(&#39;The &quot;data to append&quot; was appended to file!&#39;);});</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'appendFileSync':function() {
/// <signature>
///   <summary>The synchronous version of fs.appendFile.</summary>
///   <param name="filename" type="object"></param>
///   <param name="data" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'watchFile':function() {
/// <signature>
///   <summary>Watch for changes on filename. The callback listener will be called eachtime the file is accessed.The second argument is optional. The options if provided should be an objectcontaining two members a boolean, persistent, and interval. persistentindicates whether the process should continue to run as long as files arebeing watched. interval indicates how often the target should be polled,in milliseconds. The default is { persistent: true, interval: 5007 }.The listener gets two arguments the current stat object and the previousstat object:fs.watchFile(&#39;message.text&#39;, function (curr, prev) {  console.log(&#39;the current mtime is: &#39; + curr.mtime);  console.log(&#39;the previous mtime was: &#39; + prev.mtime);});These stat objects are instances of fs.Stat.If you want to be notified when the file was modified, not just accessedyou need to compare curr.mtime and prev.mtime.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="listener" type="object"></param>
/// </signature>
},'unwatchFile':function() {
/// <signature>
///   <summary>Stop watching for changes on filename. If listener is specified, only thatparticular listener is removed. Otherwise, all listeners are removed and youhave effectively stopped watching filename.Calling fs.unwatchFile() with a filename that is not being watched is ano-op, not an error.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[listener]" type="object"></param>
/// </signature>
},'watch':function() {
/// <signature>
///   <summary>Watch for changes on filename, where filename is either a file or adirectory.  The returned object is a <a href="#fs_class_fs_fswatcher">fs.FSWatcher.The second argument is optional. The options if provided should be an objectcontaining a boolean member persistent, which indicates whether the processshould continue to run as long as files are being watched. The default is{ persistent: true }.The listener callback gets two arguments (event, filename).  event is either&#39;rename&#39; or &#39;change&#39;, and filename is the name of the file which triggeredthe event.</summary>
///   <param name="filename" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="[listener]" type="object"></param>
/// </signature>
},'exists':function() {
/// <signature>
///   <summary>Test whether or not the given path exists by checking with the file system.Then call the callback argument with either true or false.  Example:fs.exists(&#39;/etc/passwd&#39;, function (exists) {  util.debug(exists ? &quot;it&#39;s there&quot; : &quot;no passwd!&quot;);});</summary>
///   <param name="path" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'existsSync':function() {
/// <signature>
///   <summary>Synchronous version of fs.exists.</summary>
///   <param name="path" type="object"></param>
/// </signature>
},'createReadStream':function() {
/// <signature>
///   <summary>Returns a new ReadStream object (See Readable Stream).options is an object with the following defaults:{ flags: &#39;r&#39;,  encoding: null,  fd: null,  mode: 0666,  bufferSize: 64 * 1024,  autoClose: true}options can include start and end values to read a range of bytes fromthe file instead of the entire file.  Both start and end are inclusive andstart at 0. The encoding can be &#39;utf8&#39;, &#39;ascii&#39;, or &#39;base64&#39;.If autoClose is false, then the file descriptor won&#39;t be closed, even ifthere&#39;s an error.  It is your responsiblity to close it and make surethere&#39;s no file descriptor leak.  If autoClose is set to true (defaultbehavior), on error or end the file descriptor will be closedautomatically.An example to read the last 10 bytes of a file which is 100 bytes long:fs.createReadStream(&#39;sample.txt&#39;, {start: 90, end: 99});</summary>
///   <param name="path" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createWriteStream':function() {
/// <signature>
///   <summary>Returns a new WriteStream object (See Writable Stream).options is an object with the following defaults:{ flags: &#39;w&#39;,  encoding: null,  mode: 0666 }options may also include a start option to allow writing data atsome position past the beginning of the file.  Modifying a file ratherthan replacing it may require a flags mode of r+ rather than thedefault mode w.</summary>
///   <param name="path" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
}});
window.fs.Stats=function(){return {};};
intellisense.annotate(window.fs.Stats,{
});
window.fs.ReadStream=function(){return {};};
intellisense.annotate(window.fs.ReadStream,{
});
window.fs.FSWatcher=function(){return {close:function(){}};};
intellisense.annotate(window.fs.FSWatcher,{
'close':function() {
/// <signature>
///   <summary>Stop watching for changes on the given fs.FSWatcher.</summary>
/// </signature>
}});
window.path={sep:'',delimiter:'',normalize:function(p){},join:function(path1,path2,value){},resolve:function(from,to){},relative:function(from,to){},dirname:function(p){},basename:function(p,ext){},extname:function(p){}};
intellisense.annotate(window.path,{
'normalize':function() {
/// <signature>
///   <summary>Normalize a string path, taking care of &#39;..&#39; and &#39;.&#39; parts.When multiple slashes are found, they&#39;re replaced by a single one;when the path contains a trailing slash, it is preserved.On Windows backslashes are used.Example:path.normalize(&#39;/foo/bar//baz/asdf/quux/..&#39;)// returns&#39;/foo/bar/baz/asdf&#39;</summary>
///   <param name="p" type="object"></param>
/// </signature>
},'join':function() {
/// <signature>
///   <summary>Join all arguments together and normalize the resulting path.Arguments must be strings.  In v0.8, non-string arguments weresilently ignored.  In v0.10 and up, an exception is thrown.Example:path.join(&#39;/foo&#39;, &#39;bar&#39;, &#39;baz/asdf&#39;, &#39;quux&#39;, &#39;..&#39;)// returns&#39;/foo/bar/baz/asdf&#39;path.join(&#39;foo&#39;, {}, &#39;bar&#39;)// throws exceptionTypeError: Arguments to path.join must be strings</summary>
///   <param name="[path1]" type="object"></param>
///   <param name="[path2]" type="object"></param>
///   <param name="[value]" type="object"></param>
/// </signature>
},'resolve':function() {
/// <signature>
///   <summary>Resolves to to an absolute path.If to isn&#39;t already absolute from arguments are prepended in right to leftorder, until an absolute path is found. If after using all from paths stillno absolute path is found, the current working directory is used as well. Theresulting path is normalized, and trailing slashes are removed unless the pathgets resolved to the root directory. Non-string arguments are ignored.Another way to think of it is as a sequence of cd commands in a shell.path.resolve(&#39;foo/bar&#39;, &#39;/tmp/file/&#39;, &#39;..&#39;, &#39;a/../subfile&#39;)Is similar to:cd foo/barcd /tmp/file/cd ..cd a/../subfilepwdThe difference is that the different paths don&#39;t need to exist and may also befiles.Examples:path.resolve(&#39;/foo/bar&#39;, &#39;./baz&#39;)// returns&#39;/foo/bar/baz&#39;path.resolve(&#39;/foo/bar&#39;, &#39;/tmp/file/&#39;)// returns&#39;/tmp/file&#39;path.resolve(&#39;wwwroot&#39;, &#39;static_files/png/&#39;, &#39;../gif/image.gif&#39;)// if currently in /home/myself/node, it returns&#39;/home/myself/node/wwwroot/static_files/gif/image.gif&#39;</summary>
///   <param name="[from]" type="object"></param>
///   <param name="to" type="object"></param>
/// </signature>
},'relative':function() {
/// <signature>
///   <summary>Solve the relative path from from to to.At times we have two absolute paths, and we need to derive the relativepath from one to the other.  This is actually the reverse transform ofpath.resolve, which means we see that:path.resolve(from, path.relative(from, to)) == path.resolve(to)Examples:path.relative(&#39;C:\\orandea\\test\\aaa&#39;, &#39;C:\\orandea\\impl\\bbb&#39;)// returns&#39;..\\..\\impl\\bbb&#39;path.relative(&#39;/data/orandea/test/aaa&#39;, &#39;/data/orandea/impl/bbb&#39;)// returns&#39;../../impl/bbb&#39;</summary>
///   <param name="from" type="object"></param>
///   <param name="to" type="object"></param>
/// </signature>
},'dirname':function() {
/// <signature>
///   <summary>Return the directory name of a path.  Similar to the Unix dirname command.Example:path.dirname(&#39;/foo/bar/baz/asdf/quux&#39;)// returns&#39;/foo/bar/baz/asdf&#39;</summary>
///   <param name="p" type="object"></param>
/// </signature>
},'basename':function() {
/// <signature>
///   <summary>Return the last portion of a path.  Similar to the Unix basename command.Example:path.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;)// returns&#39;quux.html&#39;path.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;, &#39;.html&#39;)// returns&#39;quux&#39;</summary>
///   <param name="p" type="object"></param>
///   <param name="[ext]" type="object"></param>
/// </signature>
},'extname':function() {
/// <signature>
///   <summary>Return the extension of the path, from the last &#39;.&#39; to end of stringin the last portion of the path.  If there is no &#39;.&#39; in the last portionof the path or the first character of it is &#39;.&#39;, then it returnsan empty string.  Examples:path.extname(&#39;index.html&#39;)// returns&#39;.html&#39;path.extname(&#39;index.&#39;)// returns&#39;.&#39;path.extname(&#39;index&#39;)// returns&#39;&#39;</summary>
///   <param name="p" type="object"></param>
/// </signature>
}});
window.net={createServer:function(options,connectionListener){},connect:function(options,connectionListener){},connect:function(options,connectionListener){},createConnection:function(options,connectionListener){},connect:function(port,host,connectListener){},connect:function(port,host,connectListener){},createConnection:function(port,host,connectListener){},connect:function(path,connectListener){},connect:function(path,connectListener){},createConnection:function(path,connectListener){},isIP:function(input){},isIPv4:function(input){},isIPv6:function(input){}};
intellisense.annotate(window.net,{
'createServer':function() {
/// <signature>
///   <summary>Creates a new TCP server. The connectionListener argument isautomatically set as a listener for the [&#39;connection&#39;][] event.options is an object with the following defaults:{ allowHalfOpen: false}If allowHalfOpen is true, then the socket won&#39;t automatically send a FINpacket when the other end of the socket sends a FIN packet. The socket becomesnon-readable, but still writable. You should call the end() method explicitly.See [&#39;end&#39;][] event for more information.Here is an example of an echo server which listens for connectionson port 8124:var net = require(&#39;net&#39;);var server = net.createServer(function(c) { //&#39;connection&#39; listener  console.log(&#39;server connected&#39;);  c.on(&#39;end&#39;, function() {    console.log(&#39;server disconnected&#39;);  });  c.write(&#39;hello\r\n&#39;);  c.pipe(c);});server.listen(8124, function() { //&#39;listening&#39; listener  console.log(&#39;server bound&#39;);});Test this by using telnet:telnet localhost 8124To listen on the socket /tmp/echo.sock the third line from the last wouldjust be changed toserver.listen(&#39;/tmp/echo.sock&#39;, function() { //&#39;listening&#39; listenerUse nc to connect to a UNIX domain socket server:nc -U /tmp/echo.sock</summary>
///   <param name="[options]" type="object"></param>
///   <param name="[connectionListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Constructs a new socket object and opens the socket to the given location.When the socket is established, the [&#39;connect&#39;][] event will be emitted.For TCP sockets, options argument should be an object which specifies:port: Port the client should connect to (Required).host: Host the client should connect to. Defaults to &#39;localhost&#39;.localAddress: Local interface to bind to for network connections.For UNIX domain sockets, options argument should be an object which specifies:path: Path the client should connect to (Required).Common options are:allowHalfOpen: if true, the socket won&#39;t automatically senda FIN packet when the other end of the socket sends a FIN packet.Defaults to false.  See [&#39;end&#39;][] event for more information.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.Here is an example of a client of echo server as described previously:var net = require(&#39;net&#39;);var client = net.connect({port: 8124},    function() { //&#39;connect&#39; listener  console.log(&#39;client connected&#39;);  client.write(&#39;world!\r\n&#39;);});client.on(&#39;data&#39;, function(data) {  console.log(data.toString());  client.end();});client.on(&#39;end&#39;, function() {  console.log(&#39;client disconnected&#39;);});To connect on the socket /tmp/echo.sock the second line would just bechanged tovar client = net.connect({path: &#39;/tmp/echo.sock&#39;},</summary>
///   <param name="options" type="object"></param>
///   <param name="[connectionListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Constructs a new socket object and opens the socket to the given location.When the socket is established, the [&#39;connect&#39;][] event will be emitted.For TCP sockets, options argument should be an object which specifies:port: Port the client should connect to (Required).host: Host the client should connect to. Defaults to &#39;localhost&#39;.localAddress: Local interface to bind to for network connections.For UNIX domain sockets, options argument should be an object which specifies:path: Path the client should connect to (Required).Common options are:allowHalfOpen: if true, the socket won&#39;t automatically senda FIN packet when the other end of the socket sends a FIN packet.Defaults to false.  See [&#39;end&#39;][] event for more information.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.Here is an example of a client of echo server as described previously:var net = require(&#39;net&#39;);var client = net.connect({port: 8124},    function() { //&#39;connect&#39; listener  console.log(&#39;client connected&#39;);  client.write(&#39;world!\r\n&#39;);});client.on(&#39;data&#39;, function(data) {  console.log(data.toString());  client.end();});client.on(&#39;end&#39;, function() {  console.log(&#39;client disconnected&#39;);});To connect on the socket /tmp/echo.sock the second line would just bechanged tovar client = net.connect({path: &#39;/tmp/echo.sock&#39;},</summary>
///   <param name="options" type="object"></param>
///   <param name="[connectionListener]" type="object"></param>
/// </signature>
},'createConnection':function() {
/// <signature>
///   <summary>Constructs a new socket object and opens the socket to the given location.When the socket is established, the [&#39;connect&#39;][] event will be emitted.For TCP sockets, options argument should be an object which specifies:port: Port the client should connect to (Required).host: Host the client should connect to. Defaults to &#39;localhost&#39;.localAddress: Local interface to bind to for network connections.For UNIX domain sockets, options argument should be an object which specifies:path: Path the client should connect to (Required).Common options are:allowHalfOpen: if true, the socket won&#39;t automatically senda FIN packet when the other end of the socket sends a FIN packet.Defaults to false.  See [&#39;end&#39;][] event for more information.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.Here is an example of a client of echo server as described previously:var net = require(&#39;net&#39;);var client = net.connect({port: 8124},    function() { //&#39;connect&#39; listener  console.log(&#39;client connected&#39;);  client.write(&#39;world!\r\n&#39;);});client.on(&#39;data&#39;, function(data) {  console.log(data.toString());  client.end();});client.on(&#39;end&#39;, function() {  console.log(&#39;client disconnected&#39;);});To connect on the socket /tmp/echo.sock the second line would just bechanged tovar client = net.connect({path: &#39;/tmp/echo.sock&#39;},</summary>
///   <param name="options" type="object"></param>
///   <param name="[connectionListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates a TCP connection to port on host. If host is omitted,&#39;localhost&#39; will be assumed.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates a TCP connection to port on host. If host is omitted,&#39;localhost&#39; will be assumed.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'createConnection':function() {
/// <signature>
///   <summary>Creates a TCP connection to port on host. If host is omitted,&#39;localhost&#39; will be assumed.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates unix socket connection to path.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Creates unix socket connection to path.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'createConnection':function() {
/// <signature>
///   <summary>Creates unix socket connection to path.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'isIP':function() {
/// <signature>
///   <summary>Tests if input is an IP address. Returns 0 for invalid strings,returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.</summary>
///   <param name="input" type="object"></param>
/// </signature>
},'isIPv4':function() {
/// <signature>
///   <summary>Returns true if input is a version 4 IP address, otherwise returns false.</summary>
///   <param name="input" type="object"></param>
/// </signature>
},'isIPv6':function() {
/// <signature>
///   <summary>Returns true if input is a version 6 IP address, otherwise returns false.</summary>
///   <param name="input" type="object"></param>
/// </signature>
}});
window.net.Server=function(){return {maxConnections:'',connections:'',listen:function(port,host,backlog,callback){},listen:function(path,callback){},listen:function(handle,callback){},listen:function(handle,callback){},close:function(callback){},address:function(){},unref:function(){},ref:function(){},getConnections:function(callback){}};};
intellisense.annotate(window.net.Server,{
'listen':function() {
/// <signature>
///   <summary>Begin accepting connections on the specified port and host.  If thehost is omitted, the server will accept connections directed to anyIPv4 address (INADDR_ANY). A port value of zero will assign a random port.Backlog is the maximum length of the queue of pending connections.The actual length will be determined by your OS through sysctl settings such astcp_max_syn_backlog and somaxconn on linux. The default value of thisparameter is 511 (not 512).This function is asynchronous.  When the server has been bound,[&#39;listening&#39;][] event will be emitted.  The last parameter callbackwill be added as an listener for the [&#39;listening&#39;][] event.One issue some users run into is getting EADDRINUSE errors. This means thatanother server is already running on the requested port. One way of handling thiswould be to wait a second and then try again. This can be done withserver.on(&#39;error&#39;, function (e) {  if (e.code == &#39;EADDRINUSE&#39;) {    console.log(&#39;Address in use, retrying...&#39;);    setTimeout(function () {      server.close();      server.listen(PORT, HOST);    }, 1000);  }});(Note: All sockets in Node set SO_REUSEADDR already)</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[backlog]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>Start a UNIX socket server listening for connections on the given path.This function is asynchronous.  When the server has been bound,[&#39;listening&#39;][] event will be emitted.  The last parameter callbackwill be added as an listener for the [&#39;listening&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>The handle object can be set to either a server or socket (anythingwith an underlying _handle member), or a {fd: &lt;n&gt;} object.This will cause the server to accept connections on the specifiedhandle, but it is presumed that the file descriptor or handle hasalready been bound to a port or domain socket.Listening on a file descriptor is not supported on Windows.This function is asynchronous.  When the server has been bound,<a href="#event_listening_">&#39;listening&#39; event will be emitted.the last parameter callback will be added as an listener for the<a href="#event_listening_">&#39;listening&#39; event.</summary>
///   <param name="handle" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>The handle object can be set to either a server or socket (anythingwith an underlying _handle member), or a {fd: &lt;n&gt;} object.This will cause the server to accept connections on the specifiedhandle, but it is presumed that the file descriptor or handle hasalready been bound to a port or domain socket.Listening on a file descriptor is not supported on Windows.This function is asynchronous.  When the server has been bound,<a href="#event_listening_">&#39;listening&#39; event will be emitted.the last parameter callback will be added as an listener for the<a href="#event_listening_">&#39;listening&#39; event.</summary>
///   <param name="handle" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Stops the server from accepting new connections and keeps existingconnections. This function is asynchronous, the server is finallyclosed when all connections are ended and the server emits a &#39;close&#39;event. Optionally, you can pass a callback to listen for the &#39;close&#39;event.</summary>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'address':function() {
/// <signature>
///   <summary>Returns the bound address, the address family name and port of the serveras reported by the operating system.Useful to find which port was assigned when giving getting an OS-assigned address.Returns an object with three properties, e.g.{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }Example:var server = net.createServer(function (socket) {  socket.end(&quot;goodbye\n&quot;);});// grab a random port.server.listen(function() {  address = server.address();  console.log(&quot;opened server on %j&quot;, address);});Don&#39;t call server.address() until the &#39;listening&#39; event has been emitted.</summary>
/// </signature>
},'unref':function() {
/// <signature>
///   <summary>Calling unref on a server will allow the program to exit if this is the onlyactive server in the event system. If the server is already unrefd callingunref again will have no effect.</summary>
/// </signature>
},'ref':function() {
/// <signature>
///   <summary>Opposite of unref, calling ref on a previously unrefd server will notlet the program exit if it&#39;s the only server left (the default behavior). Ifthe server is refd calling ref again will have no effect.</summary>
/// </signature>
},'getConnections':function() {
/// <signature>
///   <summary>Asynchronously get the number of concurrent connections on the server. Workswhen sockets were sent to forks.Callback should take two arguments err and count.</summary>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.net.Socket=function(){return {bufferSize:'',remoteAddress:'',remotePort:'',localAddress:'',localPort:'',bytesRead:'',bytesWritten:'',Socket:function(options){},connect:function(path,connectListener){},connect:function(port,host,connectListener){},connect:function(path,connectListener){},setEncoding:function(encoding){},write:function(data,encoding,callback){},end:function(data,encoding){},destroy:function(){},pause:function(){},resume:function(){},setTimeout:function(timeout,callback){},setNoDelay:function(noDelay){},setKeepAlive:function(enable,initialDelay){},address:function(){},unref:function(){},ref:function(){}};};
intellisense.annotate(window.net.Socket,{
'Socket':function() {
/// <signature>
///   <summary>Construct a new socket object.options is an object with the following defaults:{ fd: null  type: null  allowHalfOpen: false}fd allows you to specify the existing file descriptor of socket. typespecified underlying protocol. It can be &#39;tcp4&#39;, &#39;tcp6&#39;, or &#39;unix&#39;.About allowHalfOpen, refer to createServer() and &#39;end&#39; event.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Opens the connection for a given socket. If port and host are given,then the socket will be opened as a TCP socket, if host is omitted,localhost will be assumed. If a path is given, the socket will beopened as a unix socket to that path.Normally this method is not needed, as net.createConnection opens thesocket. Use this only if you are implementing a custom Socket.This function is asynchronous. When the [&#39;connect&#39;][] event is emitted thesocket is established. If there is a problem connecting, the &#39;connect&#39; eventwill not be emitted, the &#39;error&#39; event will be emitted with the exception.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Opens the connection for a given socket. If port and host are given,then the socket will be opened as a TCP socket, if host is omitted,localhost will be assumed. If a path is given, the socket will beopened as a unix socket to that path.Normally this method is not needed, as net.createConnection opens thesocket. Use this only if you are implementing a custom Socket.This function is asynchronous. When the [&#39;connect&#39;][] event is emitted thesocket is established. If there is a problem connecting, the &#39;connect&#39; eventwill not be emitted, the &#39;error&#39; event will be emitted with the exception.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="port" type="object"></param>
///   <param name="[host]" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'connect':function() {
/// <signature>
///   <summary>Opens the connection for a given socket. If port and host are given,then the socket will be opened as a TCP socket, if host is omitted,localhost will be assumed. If a path is given, the socket will beopened as a unix socket to that path.Normally this method is not needed, as net.createConnection opens thesocket. Use this only if you are implementing a custom Socket.This function is asynchronous. When the [&#39;connect&#39;][] event is emitted thesocket is established. If there is a problem connecting, the &#39;connect&#39; eventwill not be emitted, the &#39;error&#39; event will be emitted with the exception.The connectListener parameter will be added as an listener for the[&#39;connect&#39;][] event.</summary>
///   <param name="path" type="object"></param>
///   <param name="[connectListener]" type="object"></param>
/// </signature>
},'setEncoding':function() {
/// <signature>
///   <summary>Set the encoding for the socket as a Readable Stream. See[stream.setEncoding()][] for more information.</summary>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'write':function() {
/// <signature>
///   <summary>Sends data on the socket. The second parameter specifies the encoding in thecase of a string--it defaults to UTF8 encoding.Returns true if the entire data was flushed successfully to the kernelbuffer. Returns false if all or part of the data was queued in user memory.&#39;drain&#39; will be emitted when the buffer is again free.The optional callback parameter will be executed when the data is finallywritten out - this may not be immediately.</summary>
///   <param name="data" type="object"></param>
///   <param name="[encoding]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'end':function() {
/// <signature>
///   <summary>Half-closes the socket. i.e., it sends a FIN packet. It is possible theserver will still send some data.If data is specified, it is equivalent to callingsocket.write(data, encoding) followed by socket.end().</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'destroy':function() {
/// <signature>
///   <summary>Ensures that no more I/O activity happens on this socket. Only necessary incase of errors (parse error or so).</summary>
/// </signature>
},'pause':function() {
/// <signature>
///   <summary>Pauses the reading of data. That is, &#39;data&#39; events will not be emitted.Useful to throttle back an upload.</summary>
/// </signature>
},'resume':function() {
/// <signature>
///   <summary>Resumes reading after a call to pause().</summary>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Sets the socket to timeout after timeout milliseconds of inactivity onthe socket. By default net.Socket do not have a timeout.When an idle timeout is triggered the socket will receive a &#39;timeout&#39;event but the connection will not be severed. The user must manually end()or destroy() the socket.If timeout is 0, then the existing idle timeout is disabled.The optional callback parameter will be added as a one time listener for the&#39;timeout&#39; event.</summary>
///   <param name="timeout" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'setNoDelay':function() {
/// <signature>
///   <summary>Disables the Nagle algorithm. By default TCP connections use the Naglealgorithm, they buffer data before sending it off. Setting true fornoDelay will immediately fire off data each time socket.write() is called.noDelay defaults to true.</summary>
///   <param name="[noDelay]" type="object"></param>
/// </signature>
},'setKeepAlive':function() {
/// <signature>
///   <summary>Enable/disable keep-alive functionality, and optionally set the initialdelay before the first keepalive probe is sent on an idle socket.enable defaults to false.Set initialDelay (in milliseconds) to set the delay between the lastdata packet received and the first keepalive probe. Setting 0 forinitialDelay will leave the value unchanged from the default(or previous) setting. Defaults to 0.</summary>
///   <param name="[enable]" type="object"></param>
///   <param name="[initialDelay]" type="object"></param>
/// </signature>
},'address':function() {
/// <signature>
///   <summary>Returns the bound address, the address family name and port of thesocket as reported by the operating system. Returns an object withthree properties, e.g.{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</summary>
/// </signature>
},'unref':function() {
/// <signature>
///   <summary>Calling unref on a socket will allow the program to exit if this is the onlyactive socket in the event system. If the socket is already unrefd callingunref again will have no effect.</summary>
/// </signature>
},'ref':function() {
/// <signature>
///   <summary>Opposite of unref, calling ref on a previously unrefd socket will notlet the program exit if it&#39;s the only socket left (the default behavior). Ifthe socket is refd calling ref again will have no effect.</summary>
/// </signature>
}});
window.dgram={createSocket:function(type,callback){},createSocket:function(type,callback){}};
intellisense.annotate(window.dgram,{
'createSocket':function() {
/// <signature>
///   <summary>Creates a datagram Socket of the specified types.  Valid types are udp4and udp6.Takes an optional callback which is added as a listener for message events.Call socket.bind if you want to receive datagrams. socket.bind() will bindto the &quot;all interfaces&quot; address on a random port (it does the right thing forboth udp4 and udp6 sockets). You can then retrieve the address and portwith socket.address().address and socket.address().port.</summary>
///   <param name="type" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'createSocket':function() {
/// <signature>
///   <summary>Creates a datagram Socket of the specified types.  Valid types are udp4and udp6.Takes an optional callback which is added as a listener for message events.Call socket.bind if you want to receive datagrams. socket.bind() will bindto the &quot;all interfaces&quot; address on a random port (it does the right thing forboth udp4 and udp6 sockets). You can then retrieve the address and portwith socket.address().address and socket.address().port.</summary>
///   <param name="type" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
}});
window.dgram.Socket=function(){return {send:function(buf,offset,length,port,address,callback){},send:function(buf,offset,length,port,address,callback){},bind:function(port,address,callback){},bind:function(port,address,callback){},close:function(){},address:function(){},setBroadcast:function(flag){},setBroadcast:function(flag){},setTTL:function(ttl){},setTTL:function(ttl){},setMulticastTTL:function(ttl){},setMulticastTTL:function(ttl){},setMulticastLoopback:function(flag){},setMulticastLoopback:function(flag){},addMembership:function(multicastAddress,multicastInterface){},addMembership:function(multicastAddress,multicastInterface){},dropMembership:function(multicastAddress,multicastInterface){},dropMembership:function(multicastAddress,multicastInterface){},unref:function(){},ref:function(){}};};
intellisense.annotate(window.dgram.Socket,{
'send':function() {
/// <signature>
///   <summary>For UDP sockets, the destination port and IP address must be specified.  A stringmay be supplied for the address parameter, and it will be resolved with DNS.  Anoptional callback may be specified to detect any DNS errors and when buf may bere-used.  Note that DNS lookups will delay the time that a send takes place, atleast until the next tick.  The only way to know for sure that a send has taken placeis to use the callback.If the socket has not been previously bound with a call to bind, it&#39;sassigned a random port number and bound to the &quot;all interfaces&quot; address(0.0.0.0 for udp4 sockets, ::0 for udp6 sockets).Example of sending a UDP packet to a random port on localhost;var dgram = require(&#39;dgram&#39;);var message = new Buffer(&quot;Some bytes&quot;);var client = dgram.createSocket(&quot;udp4&quot;);client.send(message, 0, message.length, 41234, &quot;localhost&quot;, function(err, bytes) {  client.close();});A Note about UDP datagram sizeThe maximum size of an IPv4/v6 datagram depends on the MTU (Maximum Transmission Unit)and on the Payload Length field size.The Payload Length field is 16 bits wide, which means that a normal payloadcannot be larger than 64K octets including internet header and data(65,507 bytes = 65,535 − 8 bytes UDP header − 20 bytes IP header);this is generally true for loopback interfaces, but such long datagramsare impractical for most hosts and networks.The MTU is the largest size a given link layer technology can support for datagrams.For any link, IPv4 mandates a minimum MTU of 68 octets, while the recommended MTUfor IPv4 is 576 (typically recommended as the MTU for dial-up type applications),whether they arrive whole or in fragments.For IPv6, the minimum MTU is 1280 octets, however, the mandatory minimumfragment reassembly buffer size is 1500 octets.The value of 68 octets is very small, since most current link layer technologies havea minimum MTU of 1500 (like Ethernet).Note that it&#39;s impossible to know in advance the MTU of each link through whicha packet might travel, and that generally sending a datagram greater thanthe (receiver) MTU won&#39;t work (the packet gets silently dropped, withoutinforming the source that the data did not reach its intended recipient).</summary>
///   <param name="buf" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="port" type="object"></param>
///   <param name="address" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'send':function() {
/// <signature>
///   <summary>For UDP sockets, the destination port and IP address must be specified.  A stringmay be supplied for the address parameter, and it will be resolved with DNS.  Anoptional callback may be specified to detect any DNS errors and when buf may bere-used.  Note that DNS lookups will delay the time that a send takes place, atleast until the next tick.  The only way to know for sure that a send has taken placeis to use the callback.If the socket has not been previously bound with a call to bind, it&#39;sassigned a random port number and bound to the &quot;all interfaces&quot; address(0.0.0.0 for udp4 sockets, ::0 for udp6 sockets).Example of sending a UDP packet to a random port on localhost;var dgram = require(&#39;dgram&#39;);var message = new Buffer(&quot;Some bytes&quot;);var client = dgram.createSocket(&quot;udp4&quot;);client.send(message, 0, message.length, 41234, &quot;localhost&quot;, function(err, bytes) {  client.close();});A Note about UDP datagram sizeThe maximum size of an IPv4/v6 datagram depends on the MTU (Maximum Transmission Unit)and on the Payload Length field size.The Payload Length field is 16 bits wide, which means that a normal payloadcannot be larger than 64K octets including internet header and data(65,507 bytes = 65,535 − 8 bytes UDP header − 20 bytes IP header);this is generally true for loopback interfaces, but such long datagramsare impractical for most hosts and networks.The MTU is the largest size a given link layer technology can support for datagrams.For any link, IPv4 mandates a minimum MTU of 68 octets, while the recommended MTUfor IPv4 is 576 (typically recommended as the MTU for dial-up type applications),whether they arrive whole or in fragments.For IPv6, the minimum MTU is 1280 octets, however, the mandatory minimumfragment reassembly buffer size is 1500 octets.The value of 68 octets is very small, since most current link layer technologies havea minimum MTU of 1500 (like Ethernet).Note that it&#39;s impossible to know in advance the MTU of each link through whicha packet might travel, and that generally sending a datagram greater thanthe (receiver) MTU won&#39;t work (the packet gets silently dropped, withoutinforming the source that the data did not reach its intended recipient).</summary>
///   <param name="buf" type="object"></param>
///   <param name="offset" type="object"></param>
///   <param name="length" type="object"></param>
///   <param name="port" type="object"></param>
///   <param name="address" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'bind':function() {
/// <signature>
///   <summary>For UDP sockets, listen for datagrams on a named port and optional address.If address is not specified, the OS will try to listen on all addresses.The callback argument, if provided, is added as a one-shot &#39;listening&#39;event listener.Example of a UDP server listening on port 41234:var dgram = require(&quot;dgram&quot;);var server = dgram.createSocket(&quot;udp4&quot;);server.on(&quot;message&quot;, function (msg, rinfo) {  console.log(&quot;server got: &quot; + msg + &quot; from &quot; +    rinfo.address + &quot;:&quot; + rinfo.port);});server.on(&quot;listening&quot;, function () {  var address = server.address();  console.log(&quot;server listening &quot; +      address.address + &quot;:&quot; + address.port);});server.bind(41234);// server listening 0.0.0.0:41234</summary>
///   <param name="port" type="object"></param>
///   <param name="[address]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'bind':function() {
/// <signature>
///   <summary>For UDP sockets, listen for datagrams on a named port and optional address.If address is not specified, the OS will try to listen on all addresses.The callback argument, if provided, is added as a one-shot &#39;listening&#39;event listener.Example of a UDP server listening on port 41234:var dgram = require(&quot;dgram&quot;);var server = dgram.createSocket(&quot;udp4&quot;);server.on(&quot;message&quot;, function (msg, rinfo) {  console.log(&quot;server got: &quot; + msg + &quot; from &quot; +    rinfo.address + &quot;:&quot; + rinfo.port);});server.on(&quot;listening&quot;, function () {  var address = server.address();  console.log(&quot;server listening &quot; +      address.address + &quot;:&quot; + address.port);});server.bind(41234);// server listening 0.0.0.0:41234</summary>
///   <param name="port" type="object"></param>
///   <param name="[address]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Close the underlying socket and stop listening for data on it.</summary>
/// </signature>
},'address':function() {
/// <signature>
///   <summary>Returns an object containing the address information for a socket.  For UDP sockets,this object will contain address , family and port.</summary>
/// </signature>
},'setBroadcast':function() {
/// <signature>
///   <summary>Sets or clears the SO_BROADCAST socket option.  When this option is set, UDP packetsmay be sent to a local interface&#39;s broadcast address.</summary>
///   <param name="flag" type="object"></param>
/// </signature>
},'setBroadcast':function() {
/// <signature>
///   <summary>Sets or clears the SO_BROADCAST socket option.  When this option is set, UDP packetsmay be sent to a local interface&#39;s broadcast address.</summary>
///   <param name="flag" type="object"></param>
/// </signature>
},'setTTL':function() {
/// <signature>
///   <summary>Sets the IP_TTL socket option.  TTL stands for &quot;Time to Live,&quot; but in this context itspecifies the number of IP hops that a packet is allowed to go through.  Each router orgateway that forwards a packet decrements the TTL.  If the TTL is decremented to 0 by arouter, it will not be forwarded.  Changing TTL values is typically done for networkprobes or when multicasting.The argument to setTTL() is a number of hops between 1 and 255.  The default on mostsystems is 64.</summary>
///   <param name="ttl" type="object"></param>
/// </signature>
},'setTTL':function() {
/// <signature>
///   <summary>Sets the IP_TTL socket option.  TTL stands for &quot;Time to Live,&quot; but in this context itspecifies the number of IP hops that a packet is allowed to go through.  Each router orgateway that forwards a packet decrements the TTL.  If the TTL is decremented to 0 by arouter, it will not be forwarded.  Changing TTL values is typically done for networkprobes or when multicasting.The argument to setTTL() is a number of hops between 1 and 255.  The default on mostsystems is 64.</summary>
///   <param name="ttl" type="object"></param>
/// </signature>
},'setMulticastTTL':function() {
/// <signature>
///   <summary>Sets the IP_MULTICAST_TTL socket option.  TTL stands for &quot;Time to Live,&quot; but in thiscontext it specifies the number of IP hops that a packet is allowed to go through,specifically for multicast traffic.  Each router or gateway that forwards a packetdecrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.The argument to setMulticastTTL() is a number of hops between 0 and 255.  The default on mostsystems is 1.</summary>
///   <param name="ttl" type="object"></param>
/// </signature>
},'setMulticastTTL':function() {
/// <signature>
///   <summary>Sets the IP_MULTICAST_TTL socket option.  TTL stands for &quot;Time to Live,&quot; but in thiscontext it specifies the number of IP hops that a packet is allowed to go through,specifically for multicast traffic.  Each router or gateway that forwards a packetdecrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.The argument to setMulticastTTL() is a number of hops between 0 and 255.  The default on mostsystems is 1.</summary>
///   <param name="ttl" type="object"></param>
/// </signature>
},'setMulticastLoopback':function() {
/// <signature>
///   <summary>Sets or clears the IP_MULTICAST_LOOP socket option.  When this option is set, multicastpackets will also be received on the local interface.</summary>
///   <param name="flag" type="object"></param>
/// </signature>
},'setMulticastLoopback':function() {
/// <signature>
///   <summary>Sets or clears the IP_MULTICAST_LOOP socket option.  When this option is set, multicastpackets will also be received on the local interface.</summary>
///   <param name="flag" type="object"></param>
/// </signature>
},'addMembership':function() {
/// <signature>
///   <summary>Tells the kernel to join a multicast group with IP_ADD_MEMBERSHIP socket option.If multicastInterface is not specified, the OS will try to add membership to all validinterfaces.</summary>
///   <param name="multicastAddress" type="object"></param>
///   <param name="[multicastInterface]" type="object"></param>
/// </signature>
},'addMembership':function() {
/// <signature>
///   <summary>Tells the kernel to join a multicast group with IP_ADD_MEMBERSHIP socket option.If multicastInterface is not specified, the OS will try to add membership to all validinterfaces.</summary>
///   <param name="multicastAddress" type="object"></param>
///   <param name="[multicastInterface]" type="object"></param>
/// </signature>
},'dropMembership':function() {
/// <signature>
///   <summary>Opposite of addMembership - tells the kernel to leave a multicast group withIP_DROP_MEMBERSHIP socket option. This is automatically called by the kernelwhen the socket is closed or process terminates, so most apps will never need to callthis.If multicastInterface is not specified, the OS will try to drop membership to all validinterfaces.</summary>
///   <param name="multicastAddress" type="object"></param>
///   <param name="[multicastInterface]" type="object"></param>
/// </signature>
},'dropMembership':function() {
/// <signature>
///   <summary>Opposite of addMembership - tells the kernel to leave a multicast group withIP_DROP_MEMBERSHIP socket option. This is automatically called by the kernelwhen the socket is closed or process terminates, so most apps will never need to callthis.If multicastInterface is not specified, the OS will try to drop membership to all validinterfaces.</summary>
///   <param name="multicastAddress" type="object"></param>
///   <param name="[multicastInterface]" type="object"></param>
/// </signature>
},'unref':function() {
/// <signature>
///   <summary>Calling unref on a socket will allow the program to exit if this is the onlyactive socket in the event system. If the socket is already unrefd callingunref again will have no effect.</summary>
/// </signature>
},'ref':function() {
/// <signature>
///   <summary>Opposite of unref, calling ref on a previously unrefd socket will notlet the program exit if it&#39;s the only socket left (the default behavior). Ifthe socket is refd calling ref again will have no effect.</summary>
/// </signature>
}});
window.dns={lookup:function(domain,family,callback){},resolve:function(domain,rrtype,callback){},resolve4:function(domain,callback){},resolve6:function(domain,callback){},resolveMx:function(domain,callback){},resolveTxt:function(domain,callback){},resolveSrv:function(domain,callback){},resolveNs:function(domain,callback){},resolveCname:function(domain,callback){},reverse:function(ip,callback){}};
intellisense.annotate(window.dns,{
'lookup':function() {
/// <signature>
///   <summary>Resolves a domain (e.g. &#39;google.com&#39;) into the first found A (IPv4) orAAAA (IPv6) record.The family can be the integer 4 or 6. Defaults to null that indicatesboth Ip v4 and v6 address family.The callback has arguments (err, address, family).  The address argumentis a string representation of a IP v4 or v6 address. The family argumentis either the integer 4 or 6 and denotes the family of address (notnecessarily the value initially passed to lookup).On error, err is an Error object, where err.code is the error code.Keep in mind that err.code will be set to &#39;ENOENT&#39; not only whenthe domain does not exist but also when the lookup fails in other wayssuch as no available file descriptors.</summary>
///   <param name="domain" type="object"></param>
///   <param name="[family]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolve':function() {
/// <signature>
///   <summary>Resolves a domain (e.g. &#39;google.com&#39;) into an array of the record typesspecified by rrtype. Valid rrtypes are &#39;A&#39; (IPV4 addresses, default),&#39;AAAA&#39; (IPV6 addresses), &#39;MX&#39; (mail exchange records), &#39;TXT&#39; (textrecords), &#39;SRV&#39; (SRV records), &#39;PTR&#39; (used for reverse IP lookups),&#39;NS&#39; (name server records) and &#39;CNAME&#39; (canonical name records).The callback has arguments (err, addresses).  The type of each itemin addresses is determined by the record type, and described in thedocumentation for the corresponding lookup methods below.On error, err is an Error object, where err.code isone of the error codes listed below.</summary>
///   <param name="domain" type="object"></param>
///   <param name="[rrtype]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolve4':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for IPv4 queries (A records).addresses is an array of IPv4 addresses (e.g.[&#39;74.125.79.104&#39;, &#39;74.125.79.105&#39;, &#39;74.125.79.106&#39;]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolve6':function() {
/// <signature>
///   <summary>The same as dns.resolve4() except for IPv6 queries (an AAAA query).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolveMx':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for mail exchange queries (MX records).addresses is an array of MX records, each with a priority and an exchangeattribute (e.g. [{&#39;priority&#39;: 10, &#39;exchange&#39;: &#39;mx.example.com&#39;},...]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolveTxt':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for text queries (TXT records).addresses is an array of the text records available for domain (e.g.,[&#39;v=spf1 ip4:0.0.0.0 ~all&#39;]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolveSrv':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for service records (SRV records).addresses is an array of the SRV records available for domain. Propertiesof SRV records are priority, weight, port, and name (e.g.,[{&#39;priority&#39;: 10, {&#39;weight&#39;: 5, &#39;port&#39;: 21223, &#39;name&#39;: &#39;service.example.com&#39;}, ...]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolveNs':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for name server records (NS records).addresses is an array of the name server records available for domain(e.g., [&#39;ns1.example.com&#39;, &#39;ns2.example.com&#39;]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'resolveCname':function() {
/// <signature>
///   <summary>The same as dns.resolve(), but only for canonical name records (CNAMErecords). addresses is an array of the canonical name records available fordomain (e.g., [&#39;bar.example.com&#39;]).</summary>
///   <param name="domain" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'reverse':function() {
/// <signature>
///   <summary>Reverse resolves an ip address to an array of domain names.The callback has arguments (err, domains).On error, err is an Error object, where err.code isone of the error codes listed below.</summary>
///   <param name="ip" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.http={STATUS_CODES:'',globalAgent:'',IncomingMessage:'',createServer:function(requestListener){},createClient:function(port,host){},request:function(options,callback){},get:function(options,callback){}};
intellisense.annotate(window.http,{
'createServer':function() {
/// <signature>
///   <summary>Returns a new web server object.The requestListener is a function which is automaticallyadded to the &#39;request&#39; event.</summary>
///   <param name="[requestListener]" type="object"></param>
/// </signature>
},'createClient':function() {
/// <signature>
///   <summary>This function is deprecated; please use [http.request()][] instead.Constructs a new HTTP client. port and host refer to the server to beconnected to.</summary>
///   <param name="[port]" type="object"></param>
///   <param name="[host]" type="object"></param>
/// </signature>
},'request':function() {
/// <signature>
///   <summary>Node maintains several connections per server to make HTTP requests.This function allows one to transparently issue requests.options can be an object or a string. If options is a string, it isautomatically parsed with [url.parse()][].Options:host: A domain name or IP address of the server to issue the request to.Defaults to &#39;localhost&#39;.hostname: To support url.parse() hostname is preferred over hostport: Port of remote server. Defaults to 80.localAddress: Local interface to bind for network connections.socketPath: Unix Domain Socket (use one of host:port or socketPath)method: A string specifying the HTTP request method. Defaults to &#39;GET&#39;.path: Request path. Defaults to &#39;/&#39;. Should include query string if any.E.G. &#39;/index.html?page=12&#39;headers: An object containing request headers.auth: Basic authentication i.e. &#39;user:password&#39; to compute anAuthorization header.agent: Controls [Agent][] behavior. When an Agent is used request willdefault to Connection: keep-alive. Possible values:undefined (default): use [global Agent][] for this host and port.Agent object: explicitly use the passed in Agent.false: opts out of connection pooling with an Agent, defaults request toConnection: close.http.request() returns an instance of the http.ClientRequestclass. The ClientRequest instance is a writable stream. If one needs toupload a file with a POST request, then write to the ClientRequest object.Example:var options = {  hostname: &#39;www.google.com&#39;,  port: 80,  path: &#39;/upload&#39;,  method: &#39;POST&#39;};var req = http.request(options, function(res) {  console.log(&#39;STATUS: &#39; + res.statusCode);  console.log(&#39;HEADERS: &#39; + JSON.stringify(res.headers));  res.setEncoding(&#39;utf8&#39;);  res.on(&#39;data&#39;, function (chunk) {    console.log(&#39;BODY: &#39; + chunk);  });});req.on(&#39;error&#39;, function(e) {  console.log(&#39;problem with request: &#39; + e.message);});// write data to request bodyreq.write(&#39;data\n&#39;);req.write(&#39;data\n&#39;);req.end();Note that in the example req.end() was called. With http.request() onemust always call req.end() to signify that you&#39;re done with the request -even if there is no data being written to the request body.If any error is encountered during the request (be that with DNS resolution,TCP level errors, or actual HTTP parse errors) an &#39;error&#39; event is emittedon the returned request object.There are a few special headers that should be noted.Sending a &#39;Connection: keep-alive&#39; will notify Node that the connection tothe server should be persisted until the next request.Sending a &#39;Content-length&#39; header will disable the default chunked encoding.Sending an &#39;Expect&#39; header will immediately send the request headers.Usually, when sending &#39;Expect: 100-continue&#39;, you should both set a timeoutand listen for the continue event. See RFC2616 Section 8.2.3 for moreinformation.Sending an Authorization header will override using the auth optionto compute basic authentication.</summary>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'get':function() {
/// <signature>
///   <summary>Since most requests are GET requests without bodies, Node provides thisconvenience method. The only difference between this method and http.request()is that it sets the method to GET and calls req.end() automatically.Example:http.get(&quot;http://www.google.com/index.html&quot;, function(res) {  console.log(&quot;Got response: &quot; + res.statusCode);}).on(&#39;error&#39;, function(e) {  console.log(&quot;Got error: &quot; + e.message);});</summary>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.http.Server=function(){return {maxHeadersCount:'',timeout:'',listen:function(port,hostname,backlog,callback){},listen:function(path,callback){},listen:function(handle,callback){},listen:function(handle,callback){},close:function(callback){},setTimeout:function(msecs,callback){},setTimeout:function(msecs,callback){}};};
intellisense.annotate(window.http.Server,{
'listen':function() {
/// <signature>
///   <summary>Begin accepting connections on the specified port and hostname.  If thehostname is omitted, the server will accept connections directed to anyIPv4 address (INADDR_ANY).To listen to a unix socket, supply a filename instead of port and hostname.Backlog is the maximum length of the queue of pending connections.The actual length will be determined by your OS through sysctl settings such astcp_max_syn_backlog and somaxconn on linux. The default value of thisparameter is 511 (not 512).This function is asynchronous. The last parameter callback will be added asa listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(port)][].</summary>
///   <param name="port" type="object"></param>
///   <param name="[hostname]" type="object"></param>
///   <param name="[backlog]" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>Start a UNIX socket server listening for connections on the given path.This function is asynchronous. The last parameter callback will be added asa listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(path)][].</summary>
///   <param name="path" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>The handle object can be set to either a server or socket (anythingwith an underlying _handle member), or a {fd: &lt;n&gt;} object.This will cause the server to accept connections on the specifiedhandle, but it is presumed that the file descriptor or handle hasalready been bound to a port or domain socket.Listening on a file descriptor is not supported on Windows.This function is asynchronous. The last parameter callback will be added asa listener for the <a href="net.html#event_listening_">&#39;listening&#39; event.See also <a href="net.html#net_server_listen_handle_callback">net.Server.listen().</summary>
///   <param name="handle" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'listen':function() {
/// <signature>
///   <summary>The handle object can be set to either a server or socket (anythingwith an underlying _handle member), or a {fd: &lt;n&gt;} object.This will cause the server to accept connections on the specifiedhandle, but it is presumed that the file descriptor or handle hasalready been bound to a port or domain socket.Listening on a file descriptor is not supported on Windows.This function is asynchronous. The last parameter callback will be added asa listener for the <a href="net.html#event_listening_">&#39;listening&#39; event.See also <a href="net.html#net_server_listen_handle_callback">net.Server.listen().</summary>
///   <param name="handle" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Stops the server from accepting new connections.  See [net.Server.close()][].</summary>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Sets the timeout value for sockets, and emits a &#39;timeout&#39; event onthe Server object, passing the socket as an argument, if a timeoutoccurs.If there is a &#39;timeout&#39; event listener on the Server object, then itwill be called with the timed-out socket as an argument.By default, the Server&#39;s timeout value is 2 minutes, and sockets aredestroyed automatically if they time out.  However, if you assign acallback to the Server&#39;s &#39;timeout&#39; event, then you are responsiblefor handling socket timeouts.</summary>
///   <param name="msecs" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Sets the timeout value for sockets, and emits a &#39;timeout&#39; event onthe Server object, passing the socket as an argument, if a timeoutoccurs.If there is a &#39;timeout&#39; event listener on the Server object, then itwill be called with the timed-out socket as an argument.By default, the Server&#39;s timeout value is 2 minutes, and sockets aredestroyed automatically if they time out.  However, if you assign acallback to the Server&#39;s &#39;timeout&#39; event, then you are responsiblefor handling socket timeouts.</summary>
///   <param name="msecs" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.http.ServerResponse=function(){return {statusCode:'',headersSent:'',sendDate:'',writeContinue:function(){},writeHead:function(statusCode,reasonPhrase,headers){},setTimeout:function(msecs,callback){},setTimeout:function(msecs,callback){},setHeader:function(name,value){},getHeader:function(name){},removeHeader:function(name){},write:function(chunk,encoding){},addTrailers:function(headers){},end:function(data,encoding){}};};
intellisense.annotate(window.http.ServerResponse,{
'writeContinue':function() {
/// <signature>
///   <summary>Sends a HTTP/1.1 100 Continue message to the client, indicating thatthe request body should be sent. See the [&#39;checkContinue&#39;][] event on Server.</summary>
/// </signature>
},'writeHead':function() {
/// <signature>
///   <summary>Sends a response header to the request. The status code is a 3-digit HTTPstatus code, like 404. The last argument, headers, are the response headers.Optionally one can give a human-readable reasonPhrase as the secondargument.Example:var body = &#39;hello world&#39;;response.writeHead(200, {  &#39;Content-Length&#39;: body.length,  &#39;Content-Type&#39;: &#39;text/plain&#39; });This method must only be called once on a message and it mustbe called before response.end() is called.If you call response.write() or response.end() before calling this, theimplicit/mutable headers will be calculated and call this function for you.Note: that Content-Length is given in bytes not characters. The above exampleworks because the string &#39;hello world&#39; contains only single byte characters.If the body contains higher coded characters then Buffer.byteLength()should be used to determine the number of bytes in a given encoding.And Node does not check whether Content-Length and the length of the bodywhich has been transmitted are equal or not.</summary>
///   <param name="statusCode" type="object"></param>
///   <param name="[reasonPhrase]" type="object"></param>
///   <param name="[headers]" type="object"></param>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Sets the Socket&#39;s timeout value to msecs.  If a callback isprovided, then it is added as a listener on the &#39;timeout&#39; event onthe response object.If no &#39;timeout&#39; listener is added to the request, the response, orthe server, then sockets are destroyed when they time out.  If youassign a handler on the request, the response, or the server&#39;s&#39;timeout&#39; events, then it is your responsibility to handle timed outsockets.</summary>
///   <param name="msecs" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Sets the Socket&#39;s timeout value to msecs.  If a callback isprovided, then it is added as a listener on the &#39;timeout&#39; event onthe response object.If no &#39;timeout&#39; listener is added to the request, the response, orthe server, then sockets are destroyed when they time out.  If youassign a handler on the request, the response, or the server&#39;s&#39;timeout&#39; events, then it is your responsibility to handle timed outsockets.</summary>
///   <param name="msecs" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'setHeader':function() {
/// <signature>
///   <summary>Sets a single header value for implicit headers.  If this header already existsin the to-be-sent headers, its value will be replaced.  Use an array of stringshere if you need to send multiple headers with the same name.Example:response.setHeader(&quot;Content-Type&quot;, &quot;text/html&quot;);orresponse.setHeader(&quot;Set-Cookie&quot;, [&quot;type=ninja&quot;, &quot;language=javascript&quot;]);</summary>
///   <param name="name" type="object"></param>
///   <param name="value" type="object"></param>
/// </signature>
},'getHeader':function() {
/// <signature>
///   <summary>Reads out a header that&#39;s already been queued but not sent to the client.  Notethat the name is case insensitive.  This can only be called before headers getimplicitly flushed.Example:var contentType = response.getHeader(&#39;content-type&#39;);</summary>
///   <param name="name" type="object"></param>
/// </signature>
},'removeHeader':function() {
/// <signature>
///   <summary>Removes a header that&#39;s queued for implicit sending.Example:response.removeHeader(&quot;Content-Encoding&quot;);</summary>
///   <param name="name" type="object"></param>
/// </signature>
},'write':function() {
/// <signature>
///   <summary>If this method is called and response.writeHead() has not been called, it willswitch to implicit header mode and flush the implicit headers.This sends a chunk of the response body. This method maybe called multiple times to provide successive parts of the body.chunk can be a string or a buffer. If chunk is a string,the second parameter specifies how to encode it into a byte stream.By default the encoding is &#39;utf8&#39;.Note: This is the raw HTTP body and has nothing to do withhigher-level multi-part body encodings that may be used.The first time response.write() is called, it will send the bufferedheader information and the first body to the client. The second timeresponse.write() is called, Node assumes you&#39;re going to be streamingdata, and sends that separately. That is, the response is buffered up to thefirst chunk of body.Returns true if the entire data was flushed successfully to the kernelbuffer. Returns false if all or part of the data was queued in user memory.&#39;drain&#39; will be emitted when the buffer is again free.</summary>
///   <param name="chunk" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'addTrailers':function() {
/// <signature>
///   <summary>This method adds HTTP trailing headers (a header but at the end of themessage) to the response.Trailers will only be emitted if chunked encoding is used for theresponse; if it is not (e.g., if the request was HTTP/1.0), they willbe silently discarded.Note that HTTP requires the Trailer header to be sent if you intend toemit trailers, with a list of the header fields in its value. E.g.,response.writeHead(200, { &#39;Content-Type&#39;: &#39;text/plain&#39;,                          &#39;Trailer&#39;: &#39;Content-MD5&#39; });response.write(fileData);response.addTrailers({&#39;Content-MD5&#39;: &quot;7895bf4b8828b55ceaf47747b4bca667&quot;});response.end();</summary>
///   <param name="headers" type="object"></param>
/// </signature>
},'end':function() {
/// <signature>
///   <summary>This method signals to the server that all of the response headers and bodyhave been sent; that server should consider this message complete.The method, response.end(), MUST be called on eachresponse.If data is specified, it is equivalent to calling response.write(data, encoding)followed by response.end().</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
}});
window.http.Agent=function(){return {maxSockets:'',sockets:'',requests:'',};};
intellisense.annotate(window.http.Agent,{
});
window.http.ClientRequest=function(){return {write:function(chunk,encoding){},end:function(data,encoding){},abort:function(){},setTimeout:function(timeout,callback){},setNoDelay:function(noDelay){},setSocketKeepAlive:function(enable,initialDelay){}};};
intellisense.annotate(window.http.ClientRequest,{
'write':function() {
/// <signature>
///   <summary>Sends a chunk of the body.  By calling this methodmany times, the user can stream a request body to aserver--in that case it is suggested to use the[&#39;Transfer-Encoding&#39;, &#39;chunked&#39;] header line whencreating the request.The chunk argument should be a [Buffer][] or a string.The encoding argument is optional and only applies when chunk is a string.Defaults to &#39;utf8&#39;.</summary>
///   <param name="chunk" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'end':function() {
/// <signature>
///   <summary>Finishes sending the request. If any parts of the body areunsent, it will flush them to the stream. If the request ischunked, this will send the terminating &#39;0\r\n\r\n&#39;.If data is specified, it is equivalent to callingrequest.write(data, encoding) followed by request.end().</summary>
///   <param name="[data]" type="object"></param>
///   <param name="[encoding]" type="object"></param>
/// </signature>
},'abort':function() {
/// <signature>
///   <summary>Aborts a request.  (New since v0.3.8.)</summary>
/// </signature>
},'setTimeout':function() {
/// <signature>
///   <summary>Once a socket is assigned to this request and is connected[socket.setTimeout()][] will be called.</summary>
///   <param name="timeout" type="object"></param>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'setNoDelay':function() {
/// <signature>
///   <summary>Once a socket is assigned to this request and is connected[socket.setNoDelay()][] will be called.</summary>
///   <param name="[noDelay]" type="object"></param>
/// </signature>
},'setSocketKeepAlive':function() {
/// <signature>
///   <summary>Once a socket is assigned to this request and is connected[socket.setKeepAlive()][] will be called.</summary>
///   <param name="[enable]" type="object"></param>
///   <param name="[initialDelay]" type="object"></param>
/// </signature>
}});
window.https={globalAgent:'',createServer:function(options,requestListener){},request:function(options,callback){},get:function(options,callback){}};
intellisense.annotate(window.https,{
'createServer':function() {
/// <signature>
///   <summary>Returns a new HTTPS web server object. The options is similar to[tls.createServer()][].  The requestListener is a function which isautomatically added to the &#39;request&#39; event.Example:// curl -k https://localhost:8000/var https = require(&#39;https&#39;);var fs = require(&#39;fs&#39;);var options = {  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;)};https.createServer(options, function (req, res) {  res.writeHead(200);  res.end(&quot;hello world\n&quot;);}).listen(8000);Orvar https = require(&#39;https&#39;);var fs = require(&#39;fs&#39;);var options = {  pfx: fs.readFileSync(&#39;server.pfx&#39;)};https.createServer(options, function (req, res) {  res.writeHead(200);  res.end(&quot;hello world\n&quot;);}).listen(8000);</summary>
///   <param name="options" type="object"></param>
///   <param name="[requestListener]" type="object"></param>
/// </signature>
},'request':function() {
/// <signature>
///   <summary>Makes a request to a secure web server.options can be an object or a string. If options is a string, it isautomatically parsed with <a href="url.html#url.parse">url.parse().All options from [http.request()][] are valid.Example:var https = require(&#39;https&#39;);var options = {  hostname: &#39;encrypted.google.com&#39;,  port: 443,  path: &#39;/&#39;,  method: &#39;GET&#39;};var req = https.request(options, function(res) {  console.log(&quot;statusCode: &quot;, res.statusCode);  console.log(&quot;headers: &quot;, res.headers);  res.on(&#39;data&#39;, function(d) {    process.stdout.write(d);  });});req.end();req.on(&#39;error&#39;, function(e) {  console.error(e);});The options argument has the following optionshost: A domain name or IP address of the server to issue the request to.Defaults to &#39;localhost&#39;.hostname: To support url.parse() hostname is preferred over hostport: Port of remote server. Defaults to 443.method: A string specifying the HTTP request method. Defaults to &#39;GET&#39;.path: Request path. Defaults to &#39;/&#39;. Should include query string if any.E.G. &#39;/index.html?page=12&#39;headers: An object containing request headers.auth: Basic authentication i.e. &#39;user:password&#39; to compute anAuthorization header.agent: Controls [Agent][] behavior. When an Agent is used request willdefault to Connection: keep-alive. Possible values:undefined (default): use [globalAgent][] for this host and port.Agent object: explicitly use the passed in Agent.false: opts out of connection pooling with an Agent, defaults request toConnection: close.The following options from [tls.connect()][] can also be specified. However, a[globalAgent][] silently ignores these.pfx: Certificate, Private key and CA certificates to use for SSL. Default null.key: Private key to use for SSL. Default null.passphrase: A string of passphrase for the private key or pfx. Default null.cert: Public x509 certificate to use. Default null.ca: An authority certificate or array of authority certificates to checkthe remote host against.ciphers: A string describing the ciphers to use or exclude. Consult<a href="http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT fordetails on the format.rejectUnauthorized: If true, the server certificate is verified againstthe list of supplied CAs. An &#39;error&#39; event is emitted if verificationfails. Verification happens at the connection level, before the HTTPrequest is sent. Default true.In order to specify these options, use a custom Agent.Example:var options = {  hostname: &#39;encrypted.google.com&#39;,  port: 443,  path: &#39;/&#39;,  method: &#39;GET&#39;,  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;)};options.agent = new https.Agent(options);var req = https.request(options, function(res) {  ...}Or does not use an Agent.Example:var options = {  hostname: &#39;encrypted.google.com&#39;,  port: 443,  path: &#39;/&#39;,  method: &#39;GET&#39;,  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;),  agent: false};var req = https.request(options, function(res) {  ...}</summary>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'get':function() {
/// <signature>
///   <summary>Like http.get() but for HTTPS.options can be an object or a string. If options is a string, it isautomatically parsed with <a href="url.html#url.parse">url.parse().Example:var https = require(&#39;https&#39;);https.get(&#39;https://encrypted.google.com/&#39;, function(res) {  console.log(&quot;statusCode: &quot;, res.statusCode);  console.log(&quot;headers: &quot;, res.headers);  res.on(&#39;data&#39;, function(d) {    process.stdout.write(d);  });}).on(&#39;error&#39;, function(e) {  console.error(e);});</summary>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.https.Server=function(){return {};};
intellisense.annotate(window.https.Server,{
});
window.https.Agent=function(){return {};};
intellisense.annotate(window.https.Agent,{
});
window.url={parse:function(urlStr,parseQueryString,slashesDenoteHost){},format:function(urlObj){},resolve:function(from,to){}};
intellisense.annotate(window.url,{
'parse':function() {
/// <signature>
///   <summary>Take a URL string, and return an object.Pass true as the second argument to also parsethe query string using the querystring module.Defaults to false.Pass true as the third argument to treat //foo/bar as{ host: &#39;foo&#39;, pathname: &#39;/bar&#39; } rather than{ pathname: &#39;//foo/bar&#39; }. Defaults to false.</summary>
///   <param name="urlStr" type="object"></param>
///   <param name="[parseQueryString]" type="object"></param>
///   <param name="[slashesDenoteHost]" type="object"></param>
/// </signature>
},'format':function() {
/// <signature>
///   <summary>Take a parsed URL object, and return a formatted URL string.href will be ignored.protocolis treated the same with or without the trailing : (colon).The protocols http, https, ftp, gopher, file will bepostfixed with :// (colon-slash-slash).All other protocols mailto, xmpp, aim, sftp, foo, etc willbe postfixed with : (colon)auth will be used if present.hostname will only be used if host is absent.port will only be used if host is absent.host will be used in place of hostname and portpathname is treated the same with or without the leading / (slash)search will be used in place of queryquery (object; see querystring) will only be used if search is absent.search is treated the same with or without the leading ? (question mark)hash is treated the same with or without the leading # (pound sign, anchor)</summary>
///   <param name="urlObj" type="object"></param>
/// </signature>
},'resolve':function() {
/// <signature>
///   <summary>Take a base URL, and a href URL, and resolve them as a browser would foran anchor tag.  Examples:url.resolve(&#39;/one/two/three&#39;, &#39;four&#39;)         // &#39;/one/two/four&#39;url.resolve(&#39;http://example.com/&#39;, &#39;/one&#39;)    // &#39;http://example.com/one&#39;url.resolve(&#39;http://example.com/one&#39;, &#39;/two&#39;) // &#39;http://example.com/two&#39;</summary>
///   <param name="from" type="object"></param>
///   <param name="to" type="object"></param>
/// </signature>
}});
window.querystring={escape:'',unescape:'',stringify:function(obj,sep,eq){},parse:function(str,sep,eq,options){}};
intellisense.annotate(window.querystring,{
'stringify':function() {
/// <signature>
///   <summary>Serialize an object to a query string.Optionally override the default separator (&#39;&amp;&#39;) and assignment (&#39;=&#39;)characters.Example:querystring.stringify({ foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; })// returns&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge=&#39;querystring.stringify({foo: &#39;bar&#39;, baz: &#39;qux&#39;}, &#39;;&#39;, &#39;:&#39;)// returns&#39;foo:bar;baz:qux&#39;</summary>
///   <param name="obj" type="object"></param>
///   <param name="[sep]" type="object"></param>
///   <param name="[eq]" type="object"></param>
/// </signature>
},'parse':function() {
/// <signature>
///   <summary>Deserialize a query string to an object.Optionally override the default separator (&#39;&amp;&#39;) and assignment (&#39;=&#39;)characters.Options object may contain maxKeys property (equal to 1000 by default), it&#39;llbe used to limit processed keys. Set it to 0 to remove key count limitation.Example:querystring.parse(&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge&#39;)// returns{ foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; }</summary>
///   <param name="str" type="object"></param>
///   <param name="[sep]" type="object"></param>
///   <param name="[eq]" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
}});
window.punycode={ucs2:'',version:'',decode:function(string){},encode:function(string){},toUnicode:function(domain){},toASCII:function(domain){}};
intellisense.annotate(window.punycode,{
'decode':function() {
/// <signature>
///   <summary>Converts a Punycode string of ASCII code points to a string of Unicode codepoints.// decode domain name partspunycode.decode(&#39;maana-pta&#39;); // &#39;mañana&#39;punycode.decode(&#39;--dqo34k&#39;); // &#39;☃-⌘&#39;</summary>
///   <param name="string" type="object"></param>
/// </signature>
},'encode':function() {
/// <signature>
///   <summary>Converts a string of Unicode code points to a Punycode string of ASCII codepoints.// encode domain name partspunycode.encode(&#39;mañana&#39;); // &#39;maana-pta&#39;punycode.encode(&#39;☃-⌘&#39;); // &#39;--dqo34k&#39;</summary>
///   <param name="string" type="object"></param>
/// </signature>
},'toUnicode':function() {
/// <signature>
///   <summary>Converts a Punycode string representing a domain name to Unicode. Only thePunycoded parts of the domain name will be converted, i.e. it doesn&#39;t matter ifyou call it on a string that has already been converted to Unicode.// decode domain namespunycode.toUnicode(&#39;xn--maana-pta.com&#39;); // &#39;mañana.com&#39;punycode.toUnicode(&#39;xn----dqo34k.com&#39;); // &#39;☃-⌘.com&#39;</summary>
///   <param name="domain" type="object"></param>
/// </signature>
},'toASCII':function() {
/// <signature>
///   <summary>Converts a Unicode string representing a domain name to Punycode. Only thenon-ASCII parts of the domain name will be converted, i.e. it doesn&#39;t matter ifyou call it with a domain that&#39;s already in ASCII.// encode domain namespunycode.toASCII(&#39;mañana.com&#39;); // &#39;xn--maana-pta.com&#39;punycode.toASCII(&#39;☃-⌘.com&#39;); // &#39;xn----dqo34k.com&#39;</summary>
///   <param name="domain" type="object"></param>
/// </signature>
}});
window.readline={createInterface:function(options){}};
intellisense.annotate(window.readline,{
'createInterface':function() {
/// <signature>
///   <summary>Creates a readline Interface instance. Accepts an &quot;options&quot; Object that takesthe following values:input - the readable stream to listen to (Required).output - the writable stream to write readline data to (Required).completer - an optional function that is used for Tab autocompletion. Seebelow for an example of using this.terminal - pass true if the input and output streams should betreated like a TTY, and have ANSI/VT100 escape codes written to it.Defaults to checking isTTY on the output stream upon instantiation.The completer function is given a the current line entered by the user, andis supposed to return an Array with 2 entries:An Array with matching entries for the completion.The substring that was used for the matching.Which ends up looking something like:[[substr1, substr2, ...], originalsubstring].Example:function completer(line) {  var completions = &#39;.help .error .exit .quit .q&#39;.split(&#39; &#39;)  var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })  // show all completions if none found  return [hits.length ? hits : completions, line]}Also completer can be run in async mode if it accepts two arguments:function completer(linePartial, callback) {  callback(null, [[&#39;123&#39;], linePartial]);}createInterface is commonly used with process.stdin andprocess.stdout in order to accept user input:var readline = require(&#39;readline&#39;);var rl = readline.createInterface({  input: process.stdin,  output: process.stdout});Once you have a readline instance, you most commonly listen for the&quot;line&quot; event.If terminal is true for this instance then the output stream will getthe best compatibility if it defines an output.columns property, and firesa &quot;resize&quot; event on the output if/when the columns ever change(process.stdout does this automatically when it is a TTY).</summary>
///   <param name="options" type="object"></param>
/// </signature>
}});
window.Interface=function(){return {setPrompt:function(prompt,length){},prompt:function(preserveCursor){},question:function(query,callback){},pause:function(){},resume:function(){},close:function(){},write:function(data,key){}};};
intellisense.annotate(window.Interface,{
'setPrompt':function() {
/// <signature>
///   <summary>Sets the prompt, for example when you run node on the command line, you see&gt; , which is node&#39;s prompt.</summary>
///   <param name="prompt" type="object"></param>
///   <param name="length" type="object"></param>
/// </signature>
},'prompt':function() {
/// <signature>
///   <summary>Readies readline for input from the user, putting the current setPromptoptions on a new line, giving the user a new spot to write. Set preserveCursorto true to prevent the cursor placement being reset to 0.This will also resume the input stream used with createInterface if it hasbeen paused.</summary>
///   <param name="[preserveCursor]" type="object"></param>
/// </signature>
},'question':function() {
/// <signature>
///   <summary>Prepends the prompt with query and invokes callback with the user&#39;sresponse. Displays the query to the user, and then invokes callbackwith the user&#39;s response after it has been typed.This will also resume the input stream used with createInterface ifit has been paused.Example usage:interface.question(&#39;What is your favorite food?&#39;, function(answer) {  console.log(&#39;Oh, so your favorite food is &#39; + answer);});</summary>
///   <param name="query" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'pause':function() {
/// <signature>
///   <summary>Pauses the readline input stream, allowing it to be resumed later if needed.</summary>
/// </signature>
},'resume':function() {
/// <signature>
///   <summary>Resumes the readline input stream.</summary>
/// </signature>
},'close':function() {
/// <signature>
///   <summary>Closes the Interface instance, relinquishing control on the input andoutput streams. The &quot;close&quot; event will also be emitted.</summary>
/// </signature>
},'write':function() {
/// <signature>
///   <summary>Writes data to output stream. key is an object literal to represent a keysequence; available if the terminal is a TTY.This will also resume the input stream if it has been paused.Example:rl.write(&#39;Delete me!&#39;);// Simulate ctrl+u to delete the line written previouslyrl.write(null, {ctrl: true, name: &#39;u&#39;});</summary>
///   <param name="data" type="object"></param>
///   <param name="[key]" type="object"></param>
/// </signature>
}});
window.repl={start:function(options){}};
intellisense.annotate(window.repl,{
'start':function() {
/// <signature>
///   <summary>Returns and starts a REPLServer instance. Accepts an &quot;options&quot; Object thattakes the following values:prompt - the prompt and stream for all I/O. Defaults to &gt; .input - the readable stream to listen to. Defaults to process.stdin.output - the writable stream to write readline data to. Defaults toprocess.stdout.terminal - pass true if the stream should be treated like a TTY, andhave ANSI/VT100 escape codes written to it. Defaults to checking isTTYon the output stream upon instantiation.eval - function that will be used to eval each given line. Defaults toan async wrapper for eval(). See below for an example of a custom eval.useColors - a boolean which specifies whether or not the writer functionshould output colors. If a different writer function is set then this doesnothing. Defaults to the repl&#39;s terminal value.useGlobal - if set to true, then the repl will use the global object,instead of running scripts in a separate context. Defaults to false.ignoreUndefined - if set to true, then the repl will not output thereturn value of command if it&#39;s undefined. Defaults to false.writer - the function to invoke for each command that gets evaluated whichreturns the formatting (including coloring) to display. Defaults toutil.inspect.You can use your own eval function if it has following signature:function eval(cmd, context, filename, callback) {  callback(null, result);}Multiple REPLs may be started against the same running instance of node.  Eachwill share the same global object but will have unique I/O.Here is an example that starts a REPL on stdin, a Unix socket, and a TCP socket:var net = require(&quot;net&quot;),    repl = require(&quot;repl&quot;);connections = 0;repl.start({  prompt: &quot;node via stdin&gt; &quot;,  input: process.stdin,  output: process.stdout});net.createServer(function (socket) {  connections += 1;  repl.start({    prompt: &quot;node via Unix socket&gt; &quot;,    input: socket,    output: socket  }).on(&#39;exit&#39;, function() {    socket.end();  })}).listen(&quot;/tmp/node-repl-sock&quot;);net.createServer(function (socket) {  connections += 1;  repl.start({    prompt: &quot;node via TCP socket&gt; &quot;,    input: socket,    output: socket  }).on(&#39;exit&#39;, function() {    socket.end();  });}).listen(5001);Running this program from the command line will start a REPL on stdin.  OtherREPL clients may connect through the Unix socket or TCP socket. telnet is usefulfor connecting to TCP sockets, and socat can be used to connect to both Unix andTCP sockets.By starting a REPL from a Unix socket-based server instead of stdin, you canconnect to a long-running node process without restarting it.For an example of running a &quot;full-featured&quot; (terminal) REPL overa net.Server and net.Socket instance, see: <a href="https://gist.github.com/2209310">https://gist.github.com/2209310For an example of running a REPL instance over curl(1),see: <a href="https://gist.github.com/2053342">https://gist.github.com/2053342</summary>
///   <param name="options" type="object"></param>
/// </signature>
}});
window.vm={runInThisContext:function(code,filename){},runInNewContext:function(code,sandbox,filename){},runInContext:function(code,context,filename){},createContext:function(initSandbox){},createScript:function(code,filename){}};
intellisense.annotate(window.vm,{
'runInThisContext':function() {
/// <signature>
///   <summary>vm.runInThisContext() compiles code, runs it and returns the result. Runningcode does not have access to local scope. filename is optional, it&#39;s used onlyin stack traces.Example of using vm.runInThisContext and eval to run the same code:var localVar = 123,    usingscript, evaled,    vm = require(&#39;vm&#39;);usingscript = vm.runInThisContext(&#39;localVar = 1;&#39;,  &#39;myfile.vm&#39;);console.log(&#39;localVar: &#39; + localVar + &#39;, usingscript: &#39; +  usingscript);evaled = eval(&#39;localVar = 1;&#39;);console.log(&#39;localVar: &#39; + localVar + &#39;, evaled: &#39; +  evaled);// localVar: 123, usingscript: 1// localVar: 1, evaled: 1vm.runInThisContext does not have access to the local scope, so localVar is unchanged.eval does have access to the local scope, so localVar is changed.In case of syntax error in code, vm.runInThisContext emits the syntax error to stderrand throws an exception.</summary>
///   <param name="code" type="object"></param>
///   <param name="[filename]" type="object"></param>
/// </signature>
},'runInNewContext':function() {
/// <signature>
///   <summary>vm.runInNewContext compiles code, then runs it in sandbox and returns theresult. Running code does not have access to local scope. The object sandboxwill be used as the global object for code.sandbox and filename are optional, filename is only used in stack traces.Example: compile and execute code that increments a global variable and sets a new one.These globals are contained in the sandbox.var util = require(&#39;util&#39;),    vm = require(&#39;vm&#39;),    sandbox = {      animal: &#39;cat&#39;,      count: 2    };vm.runInNewContext(&#39;count += 1; name = &quot;kitty&quot;&#39;, sandbox, &#39;myfile.vm&#39;);console.log(util.inspect(sandbox));// { animal: &#39;cat&#39;, count: 3, name: &#39;kitty&#39; }Note that running untrusted code is a tricky business requiring great care.  To prevent accidentalglobal variable leakage, vm.runInNewContext is quite useful, but safely running untrusted coderequires a separate process.In case of syntax error in code, vm.runInNewContext emits the syntax error to stderrand throws an exception.</summary>
///   <param name="code" type="object"></param>
///   <param name="[sandbox]" type="object"></param>
///   <param name="[filename]" type="object"></param>
/// </signature>
},'runInContext':function() {
/// <signature>
///   <summary>vm.runInContext compiles code, then runs it in context and returns theresult. A (V8) context comprises a global object, together with a set ofbuilt-in objects and functions. Running code does not have access to local scopeand the global object held within context will be used as the global objectfor code.filename is optional, it&#39;s used only in stack traces.Example: compile and execute code in a existing context.var util = require(&#39;util&#39;),    vm = require(&#39;vm&#39;),    initSandbox = {      animal: &#39;cat&#39;,      count: 2    },    context = vm.createContext(initSandbox);vm.runInContext(&#39;count += 1; name = &quot;CATT&quot;&#39;, context, &#39;myfile.vm&#39;);console.log(util.inspect(context));// { animal: &#39;cat&#39;, count: 3, name: &#39;CATT&#39; }Note that createContext will perform a shallow clone of the supplied sandbox object in order toinitialize the global object of the freshly constructed context.Note that running untrusted code is a tricky business requiring great care.  To prevent accidentalglobal variable leakage, vm.runInContext is quite useful, but safely running untrusted coderequires a separate process.In case of syntax error in code, vm.runInContext emits the syntax error to stderrand throws an exception.</summary>
///   <param name="code" type="object"></param>
///   <param name="context" type="object"></param>
///   <param name="[filename]" type="object"></param>
/// </signature>
},'createContext':function() {
/// <signature>
///   <summary>vm.createContext creates a new context which is suitable for use as the 2nd argument of a subsequentcall to vm.runInContext. A (V8) context comprises a global object together with a set ofbuild-in objects and functions. The optional argument initSandbox will be shallow-copiedto seed the initial contents of the global object used by the context.</summary>
///   <param name="[initSandbox]" type="object"></param>
/// </signature>
},'createScript':function() {
/// <signature>
///   <summary>createScript compiles code but does not run it. Instead, it returns avm.Script object representing this compiled code. This script can be runlater many times using methods below. The returned script is not bound to anyglobal object. It is bound before each run, just for that run. filename isoptional, it&#39;s only used in stack traces.In case of syntax error in code, createScript prints the syntax error to stderrand throws an exception.</summary>
///   <param name="code" type="object"></param>
///   <param name="[filename]" type="object"></param>
/// </signature>
}});
window.Script=function(){return {runInThisContext:function(){},runInNewContext:function(sandbox){}};};
intellisense.annotate(window.Script,{
'runInThisContext':function() {
/// <signature>
///   <summary>Similar to vm.runInThisContext but a method of a precompiled Script object.script.runInThisContext runs the code of script and returns the result.Running code does not have access to local scope, but does have access to the global object(v8: in actual context).Example of using script.runInThisContext to compile code once and run it multiple times:var vm = require(&#39;vm&#39;);globalVar = 0;var script = vm.createScript(&#39;globalVar += 1&#39;, &#39;myfile.vm&#39;);for (var i = 0; i &lt; 1000 ; i += 1) {  script.runInThisContext();}console.log(globalVar);// 1000</summary>
/// </signature>
},'runInNewContext':function() {
/// <signature>
///   <summary>Similar to vm.runInNewContext a method of a precompiled Script object.script.runInNewContext runs the code of script with sandbox as the global object and returns the result.Running code does not have access to local scope. sandbox is optional.Example: compile code that increments a global variable and sets one, then execute this code multiple times.These globals are contained in the sandbox.var util = require(&#39;util&#39;),    vm = require(&#39;vm&#39;),    sandbox = {      animal: &#39;cat&#39;,      count: 2    };var script = vm.createScript(&#39;count += 1; name = &quot;kitty&quot;&#39;, &#39;myfile.vm&#39;);for (var i = 0; i &lt; 10 ; i += 1) {  script.runInNewContext(sandbox);}console.log(util.inspect(sandbox));// { animal: &#39;cat&#39;, count: 12, name: &#39;kitty&#39; }Note that running untrusted code is a tricky business requiring great care.  To prevent accidentalglobal variable leakage, script.runInNewContext is quite useful, but safely running untrusted coderequires a separate process.</summary>
///   <param name="[sandbox]" type="object"></param>
/// </signature>
}});
window.child_process={spawn:function(command,args,options){},spawn:function(command,args,options){},exec:function(command,options,callback){},exec:function(command,options,callback){},execFile:function(file,args,options,callback){},execFile:function(file,args,options,callback){},fork:function(modulePath,args,options){},fork:function(modulePath,args,options){}};
intellisense.annotate(window.child_process,{
'spawn':function() {
/// <signature>
///   <summary>Launches a new process with the given command, with  command line arguments in args.If omitted, args defaults to an empty Array.The third argument is used to specify additional options, which defaults to:{ cwd: undefined,  env: process.env}cwd allows you to specify the working directory from which the process is spawned.Use env to specify environment variables that will be visible to the new process.Example of running ls -lh /usr, capturing stdout, stderr, and the exit code:var spawn = require(&#39;child_process&#39;).spawn,    ls    = spawn(&#39;ls&#39;, [&#39;-lh&#39;, &#39;/usr&#39;]);ls.stdout.on(&#39;data&#39;, function (data) {  console.log(&#39;stdout: &#39; + data);});ls.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;stderr: &#39; + data);});ls.on(&#39;close&#39;, function (code) {  console.log(&#39;child process exited with code &#39; + code);});Example: A very elaborate way to run &#39;ps ax | grep ssh&#39;var spawn = require(&#39;child_process&#39;).spawn,    ps    = spawn(&#39;ps&#39;, [&#39;ax&#39;]),    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);ps.stdout.on(&#39;data&#39;, function (data) {  grep.stdin.write(data);});ps.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;ps stderr: &#39; + data);});ps.on(&#39;close&#39;, function (code) {  if (code !== 0) {    console.log(&#39;ps process exited with code &#39; + code);  }  grep.stdin.end();});grep.stdout.on(&#39;data&#39;, function (data) {  console.log(&#39;&#39; + data);});grep.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;grep stderr: &#39; + data);});grep.on(&#39;close&#39;, function (code) {  if (code !== 0) {    console.log(&#39;grep process exited with code &#39; + code);  }});Example of checking for failed exec:var spawn = require(&#39;child_process&#39;).spawn,    child = spawn(&#39;bad_command&#39;);child.stderr.setEncoding(&#39;utf8&#39;);child.stderr.on(&#39;data&#39;, function (data) {  if (/^execvp\(\)/.test(data)) {    console.log(&#39;Failed to start child process.&#39;);  }});Note that if spawn receives an empty options object, it will result inspawning the process with an empty environment rather than usingprocess.env. This due to backwards compatibility issues with a deprecatedAPI.The &#39;stdio&#39; option to child_process.spawn() is an array where eachindex corresponds to a fd in the child.  The value is one of the following:&#39;pipe&#39; - Create a pipe between the child process and the parent process.The parent end of the pipe is exposed to the parent as a property on thechild_process object as ChildProcess.stdio[fd]. Pipes created forfds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdoutand ChildProcess.stderr, respectively.&#39;ipc&#39; - Create an IPC channel for passing messages/file descriptorsbetween parent and child. A ChildProcess may have at most one IPC stdiofile descriptor. Setting this option enables the ChildProcess.send() method.If the child writes JSON messages to this file descriptor, then this willtrigger ChildProcess.on(&#39;message&#39;).  If the child is a Node.js program, thenthe presence of an IPC channel will enable process.send() andprocess.on(&#39;message&#39;).&#39;ignore&#39; - Do not set this file descriptor in the child. Note that Nodewill always open fd 0 - 2 for the processes it spawns. When any of these isignored node will open /dev/null and attach it to the child&#39;s fd.Stream object - Share a readable or writable stream that refers to a tty,file, socket, or a pipe with the child process. The stream&#39;s underlyingfile descriptor is duplicated in the child process to the fd that corresponds to the index in the stdio array.Positive integer - The integer value is interpreted as a file descriptor that is is currently open in the parent process. It is shared with the childprocess, similar to how Stream objects can be shared.null, undefined - Use default value. For stdio fds 0, 1 and 2 (in otherwords, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, thedefault is &#39;ignore&#39;.As a shorthand, the stdio argument may also be one of the followingstrings, rather than an array:ignore - [&#39;ignore&#39;, &#39;ignore&#39;, &#39;ignore&#39;]pipe - [&#39;pipe&#39;, &#39;pipe&#39;, &#39;pipe&#39;]inherit - [process.stdin, process.stdout, process.stderr] or [0,1,2]Example:var spawn = require(&#39;child_process&#39;).spawn;// Child will use parent&#39;s stdiosspawn(&#39;prg&#39;, [], { stdio: &#39;inherit&#39; });// Spawn child sharing only stderrspawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, &#39;pipe&#39;, process.stderr] });// Open an extra fd=4, to interact with programs present a// startd-style interface.spawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, null, null, null, &#39;pipe&#39;] });If the detached option is set, the child process will be made the leader of anew process group.  This makes it possible for the child to continue running after the parent exits.By default, the parent will wait for the detached child to exit.  To preventthe parent from waiting for a given child, use the child.unref() method,and the parent&#39;s event loop will not include the child in its reference count.Example of detaching a long-running process and redirecting its output to afile: var fs = require(&#39;fs&#39;),     spawn = require(&#39;child_process&#39;).spawn,     out = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;),     err = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;); var child = spawn(&#39;prg&#39;, [], {   detached: true,   stdio: [ &#39;ignore&#39;, out, err ] }); child.unref();When using the detached option to start a long-running process, the processwill not stay running in the background unless it is provided with a stdioconfiguration that is not connected to the parent.  If the parent&#39;s stdio isinherited, the child will remain attached to the controlling terminal.There is a deprecated option called customFds which allows one to specifyspecific file descriptors for the stdio of the child process. This API wasnot portable to all platforms and therefore removed.With customFds it was possible to hook up the new process&#39; [stdin, stdout,stderr] to existing streams; -1 meant that a new stream should be created.Use at your own risk.There are several internal options. In particular stdinStream,stdoutStream, stderrStream. They are for INTERNAL USE ONLY. As with allundocumented APIs in Node, they should not be used.See also: child_process.exec() and child_process.fork()</summary>
///   <param name="command" type="object"></param>
///   <param name="[args]" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'spawn':function() {
/// <signature>
///   <summary>Launches a new process with the given command, with  command line arguments in args.If omitted, args defaults to an empty Array.The third argument is used to specify additional options, which defaults to:{ cwd: undefined,  env: process.env}cwd allows you to specify the working directory from which the process is spawned.Use env to specify environment variables that will be visible to the new process.Example of running ls -lh /usr, capturing stdout, stderr, and the exit code:var spawn = require(&#39;child_process&#39;).spawn,    ls    = spawn(&#39;ls&#39;, [&#39;-lh&#39;, &#39;/usr&#39;]);ls.stdout.on(&#39;data&#39;, function (data) {  console.log(&#39;stdout: &#39; + data);});ls.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;stderr: &#39; + data);});ls.on(&#39;close&#39;, function (code) {  console.log(&#39;child process exited with code &#39; + code);});Example: A very elaborate way to run &#39;ps ax | grep ssh&#39;var spawn = require(&#39;child_process&#39;).spawn,    ps    = spawn(&#39;ps&#39;, [&#39;ax&#39;]),    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);ps.stdout.on(&#39;data&#39;, function (data) {  grep.stdin.write(data);});ps.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;ps stderr: &#39; + data);});ps.on(&#39;close&#39;, function (code) {  if (code !== 0) {    console.log(&#39;ps process exited with code &#39; + code);  }  grep.stdin.end();});grep.stdout.on(&#39;data&#39;, function (data) {  console.log(&#39;&#39; + data);});grep.stderr.on(&#39;data&#39;, function (data) {  console.log(&#39;grep stderr: &#39; + data);});grep.on(&#39;close&#39;, function (code) {  if (code !== 0) {    console.log(&#39;grep process exited with code &#39; + code);  }});Example of checking for failed exec:var spawn = require(&#39;child_process&#39;).spawn,    child = spawn(&#39;bad_command&#39;);child.stderr.setEncoding(&#39;utf8&#39;);child.stderr.on(&#39;data&#39;, function (data) {  if (/^execvp\(\)/.test(data)) {    console.log(&#39;Failed to start child process.&#39;);  }});Note that if spawn receives an empty options object, it will result inspawning the process with an empty environment rather than usingprocess.env. This due to backwards compatibility issues with a deprecatedAPI.The &#39;stdio&#39; option to child_process.spawn() is an array where eachindex corresponds to a fd in the child.  The value is one of the following:&#39;pipe&#39; - Create a pipe between the child process and the parent process.The parent end of the pipe is exposed to the parent as a property on thechild_process object as ChildProcess.stdio[fd]. Pipes created forfds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdoutand ChildProcess.stderr, respectively.&#39;ipc&#39; - Create an IPC channel for passing messages/file descriptorsbetween parent and child. A ChildProcess may have at most one IPC stdiofile descriptor. Setting this option enables the ChildProcess.send() method.If the child writes JSON messages to this file descriptor, then this willtrigger ChildProcess.on(&#39;message&#39;).  If the child is a Node.js program, thenthe presence of an IPC channel will enable process.send() andprocess.on(&#39;message&#39;).&#39;ignore&#39; - Do not set this file descriptor in the child. Note that Nodewill always open fd 0 - 2 for the processes it spawns. When any of these isignored node will open /dev/null and attach it to the child&#39;s fd.Stream object - Share a readable or writable stream that refers to a tty,file, socket, or a pipe with the child process. The stream&#39;s underlyingfile descriptor is duplicated in the child process to the fd that corresponds to the index in the stdio array.Positive integer - The integer value is interpreted as a file descriptor that is is currently open in the parent process. It is shared with the childprocess, similar to how Stream objects can be shared.null, undefined - Use default value. For stdio fds 0, 1 and 2 (in otherwords, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, thedefault is &#39;ignore&#39;.As a shorthand, the stdio argument may also be one of the followingstrings, rather than an array:ignore - [&#39;ignore&#39;, &#39;ignore&#39;, &#39;ignore&#39;]pipe - [&#39;pipe&#39;, &#39;pipe&#39;, &#39;pipe&#39;]inherit - [process.stdin, process.stdout, process.stderr] or [0,1,2]Example:var spawn = require(&#39;child_process&#39;).spawn;// Child will use parent&#39;s stdiosspawn(&#39;prg&#39;, [], { stdio: &#39;inherit&#39; });// Spawn child sharing only stderrspawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, &#39;pipe&#39;, process.stderr] });// Open an extra fd=4, to interact with programs present a// startd-style interface.spawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, null, null, null, &#39;pipe&#39;] });If the detached option is set, the child process will be made the leader of anew process group.  This makes it possible for the child to continue running after the parent exits.By default, the parent will wait for the detached child to exit.  To preventthe parent from waiting for a given child, use the child.unref() method,and the parent&#39;s event loop will not include the child in its reference count.Example of detaching a long-running process and redirecting its output to afile: var fs = require(&#39;fs&#39;),     spawn = require(&#39;child_process&#39;).spawn,     out = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;),     err = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;); var child = spawn(&#39;prg&#39;, [], {   detached: true,   stdio: [ &#39;ignore&#39;, out, err ] }); child.unref();When using the detached option to start a long-running process, the processwill not stay running in the background unless it is provided with a stdioconfiguration that is not connected to the parent.  If the parent&#39;s stdio isinherited, the child will remain attached to the controlling terminal.There is a deprecated option called customFds which allows one to specifyspecific file descriptors for the stdio of the child process. This API wasnot portable to all platforms and therefore removed.With customFds it was possible to hook up the new process&#39; [stdin, stdout,stderr] to existing streams; -1 meant that a new stream should be created.Use at your own risk.There are several internal options. In particular stdinStream,stdoutStream, stderrStream. They are for INTERNAL USE ONLY. As with allundocumented APIs in Node, they should not be used.See also: child_process.exec() and child_process.fork()</summary>
///   <param name="command" type="object"></param>
///   <param name="[args]" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'exec':function() {
/// <signature>
///   <summary>Runs a command in a shell and buffers the output.var exec = require(&#39;child_process&#39;).exec,    child;child = exec(&#39;cat *.js bad_file | wc -l&#39;,  function (error, stdout, stderr) {    console.log(&#39;stdout: &#39; + stdout);    console.log(&#39;stderr: &#39; + stderr);    if (error !== null) {      console.log(&#39;exec error: &#39; + error);    }});The callback gets the arguments (error, stdout, stderr). On success, errorwill be null.  On error, error will be an instance of Error and err.codewill be the exit code of the child process, and err.signal will be set to thesignal that terminated the process.There is a second optional argument to specify several options. Thedefault options are{ encoding: &#39;utf8&#39;,  timeout: 0,  maxBuffer: 200*1024,  killSignal: &#39;SIGTERM&#39;,  cwd: null,  env: null }If timeout is greater than 0, then it will kill the child processif it runs longer than timeout milliseconds. The child process is killed withkillSignal (default: &#39;SIGTERM&#39;). maxBuffer specifies the largestamount of data allowed on stdout or stderr - if this value is exceeded thenthe child process is killed.</summary>
///   <param name="command" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'exec':function() {
/// <signature>
///   <summary>Runs a command in a shell and buffers the output.var exec = require(&#39;child_process&#39;).exec,    child;child = exec(&#39;cat *.js bad_file | wc -l&#39;,  function (error, stdout, stderr) {    console.log(&#39;stdout: &#39; + stdout);    console.log(&#39;stderr: &#39; + stderr);    if (error !== null) {      console.log(&#39;exec error: &#39; + error);    }});The callback gets the arguments (error, stdout, stderr). On success, errorwill be null.  On error, error will be an instance of Error and err.codewill be the exit code of the child process, and err.signal will be set to thesignal that terminated the process.There is a second optional argument to specify several options. Thedefault options are{ encoding: &#39;utf8&#39;,  timeout: 0,  maxBuffer: 200*1024,  killSignal: &#39;SIGTERM&#39;,  cwd: null,  env: null }If timeout is greater than 0, then it will kill the child processif it runs longer than timeout milliseconds. The child process is killed withkillSignal (default: &#39;SIGTERM&#39;). maxBuffer specifies the largestamount of data allowed on stdout or stderr - if this value is exceeded thenthe child process is killed.</summary>
///   <param name="command" type="object"></param>
///   <param name="[options]" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'execFile':function() {
/// <signature>
///   <summary>This is similar to child_process.exec() except it does not execute asubshell but rather the specified file directly. This makes it slightlyleaner than child_process.exec. It has the same options.</summary>
///   <param name="file" type="object"></param>
///   <param name="args" type="object"></param>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'execFile':function() {
/// <signature>
///   <summary>This is similar to child_process.exec() except it does not execute asubshell but rather the specified file directly. This makes it slightlyleaner than child_process.exec. It has the same options.</summary>
///   <param name="file" type="object"></param>
///   <param name="args" type="object"></param>
///   <param name="options" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'fork':function() {
/// <signature>
///   <summary>This is a special case of the spawn() functionality for spawning Nodeprocesses. In addition to having all the methods in a normal ChildProcessinstance, the returned object has a communication channel built-in. Seechild.send(message, [sendHandle]) for details.By default the spawned Node process will have the stdout, stderr associatedwith the parent&#39;s. To change this behavior set the silent property in theoptions object to true.The child process does not automatically exit once it&#39;s done, you need to callprocess.exit() explicitly. This limitation may be lifted in the future.These child Nodes are still whole new instances of V8. Assume at least 30msstartup and 10mb memory for each new Node. That is, you cannot create manythousands of them.The execPath property in the options object allows for a process to becreated for the child rather than the current node executable. This should bedone with care and by default will talk over the fd represented anenvironmental variable NODE_CHANNEL_FD on the child process. The input andoutput on this fd is expected to be line delimited JSON objects.</summary>
///   <param name="modulePath" type="object"></param>
///   <param name="[args]" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
},'fork':function() {
/// <signature>
///   <summary>This is a special case of the spawn() functionality for spawning Nodeprocesses. In addition to having all the methods in a normal ChildProcessinstance, the returned object has a communication channel built-in. Seechild.send(message, [sendHandle]) for details.By default the spawned Node process will have the stdout, stderr associatedwith the parent&#39;s. To change this behavior set the silent property in theoptions object to true.The child process does not automatically exit once it&#39;s done, you need to callprocess.exit() explicitly. This limitation may be lifted in the future.These child Nodes are still whole new instances of V8. Assume at least 30msstartup and 10mb memory for each new Node. That is, you cannot create manythousands of them.The execPath property in the options object allows for a process to becreated for the child rather than the current node executable. This should bedone with care and by default will talk over the fd represented anenvironmental variable NODE_CHANNEL_FD on the child process. The input andoutput on this fd is expected to be line delimited JSON objects.</summary>
///   <param name="modulePath" type="object"></param>
///   <param name="[args]" type="object"></param>
///   <param name="[options]" type="object"></param>
/// </signature>
}});
window.ChildProcess=function(){return {stdin:'',stdout:'',stderr:'',pid:'',kill:function(signal){},kill:function(signal){},send:function(message,sendHandle){},send:function(message,sendHandle){},disconnect:function(){}};};
intellisense.annotate(window.ChildProcess,{
'kill':function() {
/// <signature>
///   <summary>Send a signal to the child process. If no argument is given, the process willbe sent &#39;SIGTERM&#39;. See signal(7) for a list of available signals.var spawn = require(&#39;child_process&#39;).spawn,    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);grep.on(&#39;close&#39;, function (code, signal) {  console.log(&#39;child process terminated due to receipt of signal &#39;+signal);});// send SIGHUP to processgrep.kill(&#39;SIGHUP&#39;);May emit an &#39;error&#39; event when the signal cannot be delivered. Sending asignal to a child process that has already exited is not an error but mayhave unforeseen consequences: if the PID (the process ID) has been reassignedto another process, the signal will be delivered to that process instead.What happens next is anyone&#39;s guess.Note that while the function is called kill, the signal delivered to thechild process may not actually kill it.  kill really just sends a signalto a process.See kill(2)</summary>
///   <param name="[signal]" type="object"></param>
/// </signature>
},'kill':function() {
/// <signature>
///   <summary>Send a signal to the child process. If no argument is given, the process willbe sent &#39;SIGTERM&#39;. See signal(7) for a list of available signals.var spawn = require(&#39;child_process&#39;).spawn,    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);grep.on(&#39;close&#39;, function (code, signal) {  console.log(&#39;child process terminated due to receipt of signal &#39;+signal);});// send SIGHUP to processgrep.kill(&#39;SIGHUP&#39;);May emit an &#39;error&#39; event when the signal cannot be delivered. Sending asignal to a child process that has already exited is not an error but mayhave unforeseen consequences: if the PID (the process ID) has been reassignedto another process, the signal will be delivered to that process instead.What happens next is anyone&#39;s guess.Note that while the function is called kill, the signal delivered to thechild process may not actually kill it.  kill really just sends a signalto a process.See kill(2)</summary>
///   <param name="[signal]" type="object"></param>
/// </signature>
},'send':function() {
/// <signature>
///   <summary>When using child_process.fork() you can write to the child usingchild.send(message, [sendHandle]) and messages are received bya &#39;message&#39; event on the child.For example:var cp = require(&#39;child_process&#39;);var n = cp.fork(__dirname + &#39;/sub.js&#39;);n.on(&#39;message&#39;, function(m) {  console.log(&#39;PARENT got message:&#39;, m);});n.send({ hello: &#39;world&#39; });And then the child script, &#39;sub.js&#39; might look like this:process.on(&#39;message&#39;, function(m) {  console.log(&#39;CHILD got message:&#39;, m);});process.send({ foo: &#39;bar&#39; });In the child the process object will have a send() method, and processwill emit objects each time it receives a message on its channel.There is a special case when sending a {cmd: &#39;NODE_foo&#39;} message. All messagescontaining a NODE_ prefix in its cmd property will not be emitted inthe message event, since they are internal messages used by node core.Messages containing the prefix are emitted in the internalMessage event, youshould by all means avoid using this feature, it is subject to change without notice.The sendHandle option to child.send() is for sending a TCP server orsocket object to another process. The child will receive the object as itssecond argument to the message event.Emits an &#39;error&#39; event if the message cannot be sent, for example becausethe child process has already exited.<h4>Example: sending server object</h4>Here is an example of sending a server:var child = require(&#39;child_process&#39;).fork(&#39;child.js&#39;);// Open up the server object and send the handle.var server = require(&#39;net&#39;).createServer();server.on(&#39;connection&#39;, function (socket) {  socket.end(&#39;handled by parent&#39;);});server.listen(1337, function() {  child.send(&#39;server&#39;, server);});And the child would the receive the server object as:process.on(&#39;message&#39;, function(m, server) {  if (m === &#39;server&#39;) {    server.on(&#39;connection&#39;, function (socket) {      socket.end(&#39;handled by child&#39;);    });  }});Note that the server is now shared between the parent and child, this meansthat some connections will be handled by the parent and some by the child.For dgram servers the workflow is exactly the same.  Here you listen ona message event instead of connection and use server.bind instead ofserver.listen.<h4>Example: sending socket object</h4>Here is an example of sending a socket. It will spawn two children and handleconnections with the remote address 74.125.127.100 as VIP by sending thesocket to a &quot;special&quot; child process. Other sockets will go to a &quot;normal&quot; process.var normal = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;normal&#39;]);var special = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;special&#39;]);// Open up the server and send sockets to childvar server = require(&#39;net&#39;).createServer();server.on(&#39;connection&#39;, function (socket) {  // if this is a VIP  if (socket.remoteAddress === &#39;74.125.127.100&#39;) {    special.send(&#39;socket&#39;, socket);    return;  }  // just the usual dudes  normal.send(&#39;socket&#39;, socket);});server.listen(1337);The child.js could look like this:process.on(&#39;message&#39;, function(m, socket) {  if (m === &#39;socket&#39;) {    socket.end(&#39;You were handled as a &#39; + process.argv[2] + &#39; person&#39;);  }});Note that once a single socket has been sent to a child the parent can nolonger keep track of when the socket is destroyed. To indicate this conditionthe .connections property becomes null.It is also recommended not to use .maxConnections in this condition.</summary>
///   <param name="message" type="object"></param>
///   <param name="[sendHandle]" type="object"></param>
/// </signature>
},'send':function() {
/// <signature>
///   <summary>When using child_process.fork() you can write to the child usingchild.send(message, [sendHandle]) and messages are received bya &#39;message&#39; event on the child.For example:var cp = require(&#39;child_process&#39;);var n = cp.fork(__dirname + &#39;/sub.js&#39;);n.on(&#39;message&#39;, function(m) {  console.log(&#39;PARENT got message:&#39;, m);});n.send({ hello: &#39;world&#39; });And then the child script, &#39;sub.js&#39; might look like this:process.on(&#39;message&#39;, function(m) {  console.log(&#39;CHILD got message:&#39;, m);});process.send({ foo: &#39;bar&#39; });In the child the process object will have a send() method, and processwill emit objects each time it receives a message on its channel.There is a special case when sending a {cmd: &#39;NODE_foo&#39;} message. All messagescontaining a NODE_ prefix in its cmd property will not be emitted inthe message event, since they are internal messages used by node core.Messages containing the prefix are emitted in the internalMessage event, youshould by all means avoid using this feature, it is subject to change without notice.The sendHandle option to child.send() is for sending a TCP server orsocket object to another process. The child will receive the object as itssecond argument to the message event.Emits an &#39;error&#39; event if the message cannot be sent, for example becausethe child process has already exited.<h4>Example: sending server object</h4>Here is an example of sending a server:var child = require(&#39;child_process&#39;).fork(&#39;child.js&#39;);// Open up the server object and send the handle.var server = require(&#39;net&#39;).createServer();server.on(&#39;connection&#39;, function (socket) {  socket.end(&#39;handled by parent&#39;);});server.listen(1337, function() {  child.send(&#39;server&#39;, server);});And the child would the receive the server object as:process.on(&#39;message&#39;, function(m, server) {  if (m === &#39;server&#39;) {    server.on(&#39;connection&#39;, function (socket) {      socket.end(&#39;handled by child&#39;);    });  }});Note that the server is now shared between the parent and child, this meansthat some connections will be handled by the parent and some by the child.For dgram servers the workflow is exactly the same.  Here you listen ona message event instead of connection and use server.bind instead ofserver.listen.<h4>Example: sending socket object</h4>Here is an example of sending a socket. It will spawn two children and handleconnections with the remote address 74.125.127.100 as VIP by sending thesocket to a &quot;special&quot; child process. Other sockets will go to a &quot;normal&quot; process.var normal = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;normal&#39;]);var special = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;special&#39;]);// Open up the server and send sockets to childvar server = require(&#39;net&#39;).createServer();server.on(&#39;connection&#39;, function (socket) {  // if this is a VIP  if (socket.remoteAddress === &#39;74.125.127.100&#39;) {    special.send(&#39;socket&#39;, socket);    return;  }  // just the usual dudes  normal.send(&#39;socket&#39;, socket);});server.listen(1337);The child.js could look like this:process.on(&#39;message&#39;, function(m, socket) {  if (m === &#39;socket&#39;) {    socket.end(&#39;You were handled as a &#39; + process.argv[2] + &#39; person&#39;);  }});Note that once a single socket has been sent to a child the parent can nolonger keep track of when the socket is destroyed. To indicate this conditionthe .connections property becomes null.It is also recommended not to use .maxConnections in this condition.</summary>
///   <param name="message" type="object"></param>
///   <param name="[sendHandle]" type="object"></param>
/// </signature>
},'disconnect':function() {
/// <signature>
///   <summary>To close the IPC connection between parent and child use thechild.disconnect() method. This allows the child to exit gracefully sincethere is no IPC channel keeping it alive. When calling this method thedisconnect event will be emitted in both parent and child, and theconnected flag will be set to false. Please note that you can also callprocess.disconnect() in the child process.</summary>
/// </signature>
}});
window.assert={fail:function(actual,expected,message,operator){},ok:function(value,message,assert){},equal:function(actual,expected,message){},notEqual:function(actual,expected,message){},deepEqual:function(actual,expected,message){},notDeepEqual:function(actual,expected,message){},strictEqual:function(actual,expected,message){},notStrictEqual:function(actual,expected,message){},throws:function(block,error,message){},doesNotThrow:function(block,message){},ifError:function(value){}};
intellisense.annotate(window.assert,{
'fail':function() {
/// <signature>
///   <summary>Throws an exception that displays the values for actual and expected separated by the provided operator.</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="message" type="object"></param>
///   <param name="operator" type="object"></param>
/// </signature>
},'ok':function() {
/// <signature>
///   <summary>Tests if value is truthy, it is equivalent to assert.equal(true, !!value, message);</summary>
///   <param name="value" type="object"></param>
///   <param name="message" type="object"></param>
///   <param name="assert" type="object"></param>
/// </signature>
},'equal':function() {
/// <signature>
///   <summary>Tests shallow, coercive equality with the equal comparison operator ( == ).</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'notEqual':function() {
/// <signature>
///   <summary>Tests shallow, coercive non-equality with the not equal comparison operator ( != ).</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'deepEqual':function() {
/// <signature>
///   <summary>Tests for deep equality.</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'notDeepEqual':function() {
/// <signature>
///   <summary>Tests for any deep inequality.</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'strictEqual':function() {
/// <signature>
///   <summary>Tests strict equality, as determined by the strict equality operator ( === )</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'notStrictEqual':function() {
/// <signature>
///   <summary>Tests strict non-equality, as determined by the strict not equal operator ( !== )</summary>
///   <param name="actual" type="object"></param>
///   <param name="expected" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'throws':function() {
/// <signature>
///   <summary>Expects block to throw an error. error can be constructor, regexp or validation function.Validate instanceof using constructor:assert.throws(  function() {    throw new Error(&quot;Wrong value&quot;);  },  Error);Validate error message using RegExp:assert.throws(  function() {    throw new Error(&quot;Wrong value&quot;);  },  /value/);Custom error validation:assert.throws(  function() {    throw new Error(&quot;Wrong value&quot;);  },  function(err) {    if ( (err instanceof Error) &amp;&amp; /value/.test(err) ) {      return true;    }  },  &quot;unexpected error&quot;);</summary>
///   <param name="block" type="object"></param>
///   <param name="[error]" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'doesNotThrow':function() {
/// <signature>
///   <summary>Expects block not to throw an error, see assert.throws for details.</summary>
///   <param name="block" type="object"></param>
///   <param name="[message]" type="object"></param>
/// </signature>
},'ifError':function() {
/// <signature>
///   <summary>Tests if value is not a false value, throws if it is a true value. Useful whentesting the first argument, error in callbacks.</summary>
///   <param name="value" type="object"></param>
/// </signature>
}});
window.tty={isatty:function(fd){},setRawMode:function(mode){}};
intellisense.annotate(window.tty,{
'isatty':function() {
/// <signature>
///   <summary>Returns true or false depending on if the fd is associated with aterminal.</summary>
///   <param name="fd" type="object"></param>
/// </signature>
},'setRawMode':function() {
/// <signature>
///   <summary>Deprecated. Use tty.ReadStream#setRawMode()(i.e. process.stdin.setRawMode()) instead.</summary>
///   <param name="mode" type="object"></param>
/// </signature>
}});
window.ReadStream=function(){return {isRaw:'',setRawMode:function(mode){}};};
intellisense.annotate(window.ReadStream,{
'setRawMode':function() {
/// <signature>
///   <summary>mode should be true or false. This sets the properties of thetty.ReadStream to act either as a raw device or default. isRaw will be setto the resulting mode.</summary>
///   <param name="mode" type="object"></param>
/// </signature>
}});
window.WriteStream=function(){return {columns:'',rows:'',};};
intellisense.annotate(window.WriteStream,{
});
window.zlib={createGzip:function(options){},createGunzip:function(options){},createDeflate:function(options){},createInflate:function(options){},createDeflateRaw:function(options){},createInflateRaw:function(options){},createUnzip:function(options){},deflate:function(buf,callback){},deflateRaw:function(buf,callback){},gzip:function(buf,callback){},gunzip:function(buf,callback){},inflate:function(buf,callback){},inflateRaw:function(buf,callback){},unzip:function(buf,callback){}};
intellisense.annotate(window.zlib,{
'createGzip':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_gzip">Gzip object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createGunzip':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_gunzip">Gunzip object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createDeflate':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_deflate">Deflate object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createInflate':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_inflate">Inflate object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createDeflateRaw':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_deflateraw">DeflateRaw object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createInflateRaw':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_inflateraw">InflateRaw object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'createUnzip':function() {
/// <signature>
///   <summary>Returns a new <a href="#zlib_class_zlib_unzip">Unzip object with an<a href="#zlib_options">options.</summary>
///   <param name="[options]" type="object"></param>
/// </signature>
},'deflate':function() {
/// <signature>
///   <summary>Compress a string with Deflate.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'deflateRaw':function() {
/// <signature>
///   <summary>Compress a string with DeflateRaw.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'gzip':function() {
/// <signature>
///   <summary>Compress a string with Gzip.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'gunzip':function() {
/// <signature>
///   <summary>Decompress a raw Buffer with Gunzip.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'inflate':function() {
/// <signature>
///   <summary>Decompress a raw Buffer with Inflate.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'inflateRaw':function() {
/// <signature>
///   <summary>Decompress a raw Buffer with InflateRaw.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
},'unzip':function() {
/// <signature>
///   <summary>Decompress a raw Buffer with Unzip.</summary>
///   <param name="buf" type="object"></param>
///   <param name="callback" type="object"></param>
/// </signature>
}});
window.zlib.Zlib=function(){return {flush:function(callback){},reset:function(){}};};
intellisense.annotate(window.zlib.Zlib,{
'flush':function() {
/// <signature>
///   <summary>Flush pending data. Don&#39;t call this frivolously, premature flushes negativelyimpact the effectiveness of the compression algorithm.</summary>
///   <param name="callback" type="object"></param>
/// </signature>
},'reset':function() {
/// <signature>
///   <summary>Reset the compressor/decompressor to factory defaults. Only applicable tothe inflate and deflate algorithms.</summary>
/// </signature>
}});
window.zlib.Gzip=function(){return {};};
intellisense.annotate(window.zlib.Gzip,{
});
window.zlib.Gunzip=function(){return {};};
intellisense.annotate(window.zlib.Gunzip,{
});
window.zlib.Deflate=function(){return {};};
intellisense.annotate(window.zlib.Deflate,{
});
window.zlib.Inflate=function(){return {};};
intellisense.annotate(window.zlib.Inflate,{
});
window.zlib.DeflateRaw=function(){return {};};
intellisense.annotate(window.zlib.DeflateRaw,{
});
window.zlib.InflateRaw=function(){return {};};
intellisense.annotate(window.zlib.InflateRaw,{
});
window.zlib.Unzip=function(){return {};};
intellisense.annotate(window.zlib.Unzip,{
});
window.os={EOL:'',tmpdir:function(){},endianness:function(){},hostname:function(){},type:function(){},platform:function(){},arch:function(){},release:function(){},uptime:function(){},loadavg:function(){},totalmem:function(){},freemem:function(){},cpus:function(){},networkInterfaces:function(){}};
intellisense.annotate(window.os,{
'tmpdir':function() {
/// <signature>
///   <summary>Returns the operating system&#39;s default directory for temp files.</summary>
/// </signature>
},'endianness':function() {
/// <signature>
///   <summary>Returns the endianness of the CPU. Possible values are &quot;BE&quot; or &quot;LE&quot;.</summary>
/// </signature>
},'hostname':function() {
/// <signature>
///   <summary>Returns the hostname of the operating system.</summary>
/// </signature>
},'type':function() {
/// <signature>
///   <summary>Returns the operating system name.</summary>
/// </signature>
},'platform':function() {
/// <signature>
///   <summary>Returns the operating system platform.</summary>
/// </signature>
},'arch':function() {
/// <signature>
///   <summary>Returns the operating system CPU architecture.</summary>
/// </signature>
},'release':function() {
/// <signature>
///   <summary>Returns the operating system release.</summary>
/// </signature>
},'uptime':function() {
/// <signature>
///   <summary>Returns the system uptime in seconds.</summary>
/// </signature>
},'loadavg':function() {
/// <signature>
///   <summary>Returns an array containing the 1, 5, and 15 minute load averages.</summary>
/// </signature>
},'totalmem':function() {
/// <signature>
///   <summary>Returns the total amount of system memory in bytes.</summary>
/// </signature>
},'freemem':function() {
/// <signature>
///   <summary>Returns the amount of free system memory in bytes.</summary>
/// </signature>
},'cpus':function() {
/// <signature>
///   <summary>Returns an array of objects containing information about each CPU/coreinstalled: model, speed (in MHz), and times (an object containing the number ofmilliseconds the CPU/core spent in: user, nice, sys, idle, and irq).Example inspection of os.cpus:[ { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 252020,       nice: 0,       sys: 30340,       idle: 1070356870,       irq: 0 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 306960,       nice: 0,       sys: 26980,       idle: 1071569080,       irq: 0 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 248450,       nice: 0,       sys: 21750,       idle: 1070919370,       irq: 0 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 256880,       nice: 0,       sys: 19430,       idle: 1070905480,       irq: 20 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 511580,       nice: 20,       sys: 40900,       idle: 1070842510,       irq: 0 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 291660,       nice: 0,       sys: 34360,       idle: 1070888000,       irq: 10 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 308260,       nice: 0,       sys: 55410,       idle: 1071129970,       irq: 880 } },  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,    speed: 2926,    times:     { user: 266450,       nice: 1480,       sys: 34920,       idle: 1072572010,       irq: 30 } } ]</summary>
/// </signature>
},'networkInterfaces':function() {
/// <signature>
///   <summary>Get a list of network interfaces:{ lo0:    [ { address: &#39;::1&#39;, family: &#39;IPv6&#39;, internal: true },     { address: &#39;fe80::1&#39;, family: &#39;IPv6&#39;, internal: true },     { address: &#39;127.0.0.1&#39;, family: &#39;IPv4&#39;, internal: true } ],  en1:    [ { address: &#39;fe80::cabc:c8ff:feef:f996&#39;, family: &#39;IPv6&#39;,       internal: false },     { address: &#39;10.0.1.123&#39;, family: &#39;IPv4&#39;, internal: false } ],  vmnet1: [ { address: &#39;10.99.99.254&#39;, family: &#39;IPv4&#39;, internal: false } ],  vmnet8: [ { address: &#39;10.88.88.1&#39;, family: &#39;IPv4&#39;, internal: false } ],  ppp0: [ { address: &#39;10.2.0.231&#39;, family: &#39;IPv4&#39;, internal: false } ] }</summary>
/// </signature>
}});
window.cluster={settings:'',isMaster:'',isWorker:'',worker:'',workers:'',setupMaster:function(settings){},setupMaster:function(settings){},fork:function(env){},fork:function(env){},disconnect:function(callback){},disconnect:function(callback){}};
intellisense.annotate(window.cluster,{
'setupMaster':function() {
/// <signature>
///   <summary>setupMaster is used to change the default &#39;fork&#39; behavior. The new settingsare effective immediately and permanently, they cannot be changed later on.Example:var cluster = require(&quot;cluster&quot;);cluster.setupMaster({  exec : &quot;worker.js&quot;,  args : [&quot;--use&quot;, &quot;https&quot;],  silent : true});cluster.fork();</summary>
///   <param name="[settings]" type="object"></param>
/// </signature>
},'setupMaster':function() {
/// <signature>
///   <summary>setupMaster is used to change the default &#39;fork&#39; behavior. The new settingsare effective immediately and permanently, they cannot be changed later on.Example:var cluster = require(&quot;cluster&quot;);cluster.setupMaster({  exec : &quot;worker.js&quot;,  args : [&quot;--use&quot;, &quot;https&quot;],  silent : true});cluster.fork();</summary>
///   <param name="[settings]" type="object"></param>
/// </signature>
},'fork':function() {
/// <signature>
///   <summary>Spawn a new worker process. This can only be called from the master process.</summary>
///   <param name="[env]" type="object"></param>
/// </signature>
},'fork':function() {
/// <signature>
///   <summary>Spawn a new worker process. This can only be called from the master process.</summary>
///   <param name="[env]" type="object"></param>
/// </signature>
},'disconnect':function() {
/// <signature>
///   <summary>When calling this method, all workers will commit a graceful suicide. When they aredisconnected all internal handlers will be closed, allowing the master process todie graceful if no other event is waiting.The method takes an optional callback argument which will be called when finished.</summary>
///   <param name="[callback]" type="object"></param>
/// </signature>
},'disconnect':function() {
/// <signature>
///   <summary>When calling this method, all workers will commit a graceful suicide. When they aredisconnected all internal handlers will be closed, allowing the master process todie graceful if no other event is waiting.The method takes an optional callback argument which will be called when finished.</summary>
///   <param name="[callback]" type="object"></param>
/// </signature>
}});
window.Worker=function(){return {id:'',process:'',suicide:'',send:function(message,sendHandle){},send:function(message,sendHandle){},kill:function(signal){},kill:function(signal){},disconnect:function(){}};};
intellisense.annotate(window.Worker,{
'send':function() {
/// <signature>
///   <summary>This function is equal to the send methods provided bychild_process.fork().  In the master you should use this function tosend a message to a specific worker.  However in a worker you can also useprocess.send(message), since this is the same function.This example will echo back all messages from the master:if (cluster.isMaster) {  var worker = cluster.fork();  worker.send(&#39;hi there&#39;);} else if (cluster.isWorker) {  process.on(&#39;message&#39;, function(msg) {    process.send(msg);  });}</summary>
///   <param name="message" type="object"></param>
///   <param name="[sendHandle]" type="object"></param>
/// </signature>
},'send':function() {
/// <signature>
///   <summary>This function is equal to the send methods provided bychild_process.fork().  In the master you should use this function tosend a message to a specific worker.  However in a worker you can also useprocess.send(message), since this is the same function.This example will echo back all messages from the master:if (cluster.isMaster) {  var worker = cluster.fork();  worker.send(&#39;hi there&#39;);} else if (cluster.isWorker) {  process.on(&#39;message&#39;, function(msg) {    process.send(msg);  });}</summary>
///   <param name="message" type="object"></param>
///   <param name="[sendHandle]" type="object"></param>
/// </signature>
},'kill':function() {
/// <signature>
///   <summary>This function will kill the worker, and inform the master to not spawn anew worker.  The boolean suicide lets you distinguish between voluntaryand accidental exit.cluster.on(&#39;exit&#39;, function(worker, code, signal) {  if (worker.suicide === true) {    console.log(&#39;Oh, it was just suicide\&#39; – no need to worry&#39;).  }});// kill workerworker.kill();This method is aliased as worker.destroy() for backwardscompatibility.</summary>
///   <param name="[signal]" type="object"></param>
/// </signature>
},'kill':function() {
/// <signature>
///   <summary>This function will kill the worker, and inform the master to not spawn anew worker.  The boolean suicide lets you distinguish between voluntaryand accidental exit.cluster.on(&#39;exit&#39;, function(worker, code, signal) {  if (worker.suicide === true) {    console.log(&#39;Oh, it was just suicide\&#39; – no need to worry&#39;).  }});// kill workerworker.kill();This method is aliased as worker.destroy() for backwardscompatibility.</summary>
///   <param name="[signal]" type="object"></param>
/// </signature>
},'disconnect':function() {
/// <signature>
///   <summary>When calling this function the worker will no longer accept new connections, butthey will be handled by any other listening worker. Existing connection will beallowed to exit as usual. When no more connections exist, the IPC channel to the workerwill close allowing it to die graceful. When the IPC channel is closed the disconnectevent will emit, this is then followed by the exit event, there is emitted whenthe worker finally die.Because there might be long living connections, it is useful to implement a timeout.This example ask the worker to disconnect and after 2 seconds it will destroy theserver. An alternative would be to execute worker.kill() after 2 seconds, butthat would normally not allow the worker to do any cleanup if needed.if (cluster.isMaster) {  var worker = cluster.fork();  var timeout;  worker.on(&#39;listening&#39;, function(address) {    worker.disconnect();    timeout = setTimeout(function() {      worker.send(&#39;force kill&#39;);    }, 2000);  });  worker.on(&#39;disconnect&#39;, function() {    clearTimeout(timeout);  });} else if (cluster.isWorker) {  var net = require(&#39;net&#39;);  var server = net.createServer(function(socket) {    // connection never end  });  server.listen(8000);  server.on(&#39;close&#39;, function() {    // cleanup  });  process.on(&#39;message&#39;, function(msg) {    if (msg === &#39;force kill&#39;) {      server.destroy();    }  });}</summary>
/// </signature>
}});
window.require = function (moduleName) {return window[moduleName];}
