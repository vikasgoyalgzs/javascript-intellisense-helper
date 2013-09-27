intellisense.addEventListener('statementcompletion', function (event) {
	if (event.targetName === 'this') return

	var intelliObjectType = event.target._intelliObjectType;
	switch (intelliObjectType) {
	case 10:
		intellisense.annotate(event.target, {
	'extend': function () {
	/// <signature>
	///	<summary>To create a Model class of your own, you extend Backbone.Model and provide instance properties, as well as optional classProperties to be attached directly to the constructor function. </summary>
	///	<param name="properties" type="Object">properties</param>
	///	<param name=" [classProperties]" type="Object"> [classProperties]</param>///	<returns type="" />
	/// </signature>
	},
'constructor / initialize': function () {
	/// <signature>
	///	<summary>When creating an instance of a model, you can pass in the initial values of the attributes, which will be set on the model. If you define an initialize function, it will be invoked when the model is created. </summary>
	///	<returns type="" />
	/// </signature>
	},
'get': function () {
	/// <signature>
	///	<summary>Get the current value of an attribute from the model. For example: note.get("title") </summary>
	///	<param name="attribute" type="Object">attribute</param>///	<returns type="" />
	/// </signature>
	},
'set': function () {
	/// <signature>
	///	<summary>Set a hash of attributes (one or many) on the model. If any of the attributes change the model's state, a "change" event will be triggered on the model. Change events for specific attributes are also triggered, and you can bind to those as well, for example: change:title, and change:content. You may also pass individual keys and values. </summary>
	///	<param name="attributes" type="Object">attributes</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'escape': function () {
	/// <signature>
	///	<summary>Similar to get, but returns the HTML-escaped version of a model's attribute. If you're interpolating data from the model into HTML, using escape to retrieve attributes will prevent XSS attacks. </summary>
	///	<param name="attribute" type="Object">attribute</param>///	<returns type="" />
	/// </signature>
	},
'has': function () {
	/// <signature>
	///	<summary>Returns true if the attribute is set to a non-null or non-undefined value. </summary>
	///	<param name="attribute" type="Object">attribute</param>///	<returns type="" />
	/// </signature>
	},
'unset': function () {
	/// <signature>
	///	<summary>Remove an attribute by deleting it from the internal attributes hash. Fires a "change" event unless silent is passed as an option. </summary>
	///	<param name="attribute" type="Object">attribute</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'clear': function () {
	/// <signature>
	///	<summary>Removes all attributes from the model, including the id attribute. Fires a "change" event unless silent is passed as an option. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'id': function () {
	/// <signature>
	///	<summary>A special property of models, the id is an arbitrary string (integer id or UUID). If you set the id in the attributes hash, it will be copied onto the model as a direct property. Models can be retrieved by id from collections, and the id is used to generate model URLs by default. </summary>
	///	<returns type="" />
	/// </signature>
	},
'idAttribute': function () {
	/// <signature>
	///	<summary>A model's unique identifier is stored under the id attribute. If you're directly communicating with a backend (CouchDB, MongoDB) that uses a different unique key, you may set a Model's idAttribute to transparently map from that key to id. var Meal = Backbone.Model.extend({ idAttribute: "_id" }); var cake = new Meal({ _id: 1, name: "Cake" }); alert("Cake id: " + cake.id); </summary>
	///	<returns type="" />
	/// </signature>
	},
'cid': function () {
	/// <signature>
	///	<summary>A special property of models, the cid or client id is a unique identifier automatically assigned to all models when they're first created. Client ids are handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI. </summary>
	///	<returns type="" />
	/// </signature>
	},
'attributes': function () {
	/// <signature>
	///	<summary>The attributes property is the internal hash containing the model's state — usually (but not necessarily) a form of the JSON object representing the model data on the server. It's often a straightforward serialization of a row from the database, but it could also be client-side computed state. </summary>
	///	<returns type="" />
	/// </signature>
	},
'changed': function () {
	/// <signature>
	///	<summary>The changed property is the internal hash containing all the attributes that have changed since the last set. Please do not update changed directly since its state is internally maintained by set.  A copy of changed can be acquired from changedAttributes. </summary>
	///	<returns type="" />
	/// </signature>
	},
'defaults': function () {
	/// <signature>
	///	<summary>The defaults hash (or function) can be used to specify the default attributes for your model. When creating an instance of the model, any unspecified attributes will be set to their default value. </summary>
	///	<returns type="" />
	/// </signature>
	},
'toJSON': function () {
	/// <signature>
	///	<summary>Return a shallow copy of the model's attributes for JSON stringification.  This can be used for persistence, serialization, or for augmentation before being sent to the server. The name of this method is a bit confusing, as it doesn't actually return a JSON string — but I'm afraid that it's the way that the JavaScript API for JSON.stringify works. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'sync': function () {
	/// <signature>
	///	<summary>Uses Backbone.sync to persist the state of a model to the server.  Can be overridden for custom behavior. </summary>
	///	<param name="method" type="Object">method</param>
	///	<param name=" model" type="Object"> model</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'fetch': function () {
	/// <signature>
	///	<summary>Resets the model's state from the server by delegating to Backbone.sync. Returns a jqXHR. Useful if the model has never been populated with data, or if you'd like to ensure that you have the latest server state. A "change" event will be triggered if the server's state differs from the current attributes. Accepts success and error callbacks in the options hash, which are both passed (model, response, options) as arguments. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'save': function () {
	/// <signature>
	///	<summary>Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync.  Returns a jqXHR if validation is successful and false otherwise. The attributes hash (as in set) should contain the attributes you'd like to change — keys that aren't mentioned won't be altered — but, a complete representation of the resource will be sent to the server. As with set, you may pass individual keys and values instead of a hash. If the model has a validate method, and validation fails, the model will not be saved. If the model isNew, the save will be a "create" (HTTP POST), if the model already exists on the server, the save will be an "update" (HTTP PUT). </summary>
	///	<param name="[attributes]" type="Object">[attributes]</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'destroy': function () {
	/// <signature>
	///	<summary>Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync. Returns a jqXHR object, or false if the model isNew. Accepts success and error callbacks in the options hash, which are passed (model, response, options) and (model, xhr, options) as arguments, respectively. Triggers a "destroy" event on the model, which will bubble up through any collections that contain it, a "request" event as it begins the Ajax request to the server, and a "sync" event, after the server has successfully acknowledged the model's deletion. Pass {wait: true} if you'd like to wait for the server to respond before removing the model from the collection. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'Underscore Methods (6)': function () {
	/// <signature>
	///	<summary>Backbone proxies to Underscore.js to provide 6 object functions on Backbone.Model. They aren't all documented here, but you can take a look at the Underscore documentation for the full details… </summary>
	///	<returns type="" />
	/// </signature>
	},
'validate': function () {
	/// <signature>
	///	<summary>This method is left undefined, and you're encouraged to override it with your custom validation logic, if you have any that can be performed in JavaScript. By default validate is called before save, but can also be called before set if {validate:true} is passed. The validate method is passed the model attributes, as well as the options from set or save. If the attributes are valid, don't return anything from validate; if they are invalid, return an error of your choosing. It can be as simple as a string error message to be displayed, or a complete error object that describes the error programmatically. If validate returns an error, save will not continue, and the model attributes will not be modified on the server. Failed validations trigger an "invalid" event, and set the validationError property on the model with the value returned by this method. </summary>
	///	<param name="attributes" type="Object">attributes</param>
	///	<param name=" options" type="Object"> options</param>///	<returns type="" />
	/// </signature>
	},
'validationError': function () {
	/// <signature>
	///	<summary>The value returned by validate during the last failed validation. </summary>
	///	<returns type="" />
	/// </signature>
	},
'isValid': function () {
	/// <signature>
	///	<summary>Run validate to check the model state. </summary>
	///	<returns type="" />
	/// </signature>
	},
'url': function () {
	/// <signature>
	///	<summary>Returns the relative URL where the model's resource would be located on the server. If your models are located somewhere else, override this method with the correct logic. Generates URLs of the form: "[collection.url]/[id]" by default, but you may override by specifying an explicit urlRoot if the model's collection shouldn't be taken into account. You can also pass in the model's url as an option when instantiating it. </summary>
	///	<returns type="" />
	/// </signature>
	},
'urlRoot': function () {
	/// <signature>
	///	<summary>Specify a urlRoot if you're using a model outside of a collection, to enable the default url function to generate URLs based on the model id. "[urlRoot]/id" Normally, you won't need to define this. Note that urlRoot may also be a function. </summary>
	///	<returns type="" />
	/// </signature>
	},
'parse': function () {
	/// <signature>
	///	<summary>parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the raw response object, and should return the attributes hash to be set on the model. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses. </summary>
	///	<param name="response" type="Object">response</param>
	///	<param name=" options" type="Object"> options</param>///	<returns type="" />
	/// </signature>
	},
'clone': function () {
	/// <signature>
	///	<summary>Returns a new instance of the model with identical attributes. </summary>
	///	<returns type="" />
	/// </signature>
	},
'isNew': function () {
	/// <signature>
	///	<summary>Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new. </summary>
	///	<returns type="" />
	/// </signature>
	},
'hasChanged': function () {
	/// <signature>
	///	<summary>Has the model changed since the last set? If an attribute is passed, returns true if that specific attribute has changed. </summary>
	///	<param name="[attribute]" type="Object">[attribute]</param>///	<returns type="" />
	/// </signature>
	},
'changedAttributes': function () {
	/// <signature>
	///	<summary>Retrieve a hash of only the model's attributes that have changed since the last set, or false if there are none. Optionally, an external attributes hash can be passed in, returning the attributes in that hash which differ from the model. This can be used to figure out which portions of a view should be updated, or what calls need to be made to sync the changes to the server. </summary>
	///	<param name="[attributes]" type="Object">[attributes]</param>///	<returns type="" />
	/// </signature>
	},
'previous': function () {
	/// <signature>
	///	<summary>During a "change" event, this method can be used to get the previous value of a changed attribute. </summary>
	///	<param name="attribute" type="Object">attribute</param>///	<returns type="" />
	/// </signature>
	},
'previousAttributes': function () {
	/// <signature>
	///	<summary>Return a copy of the model's previous attributes. Useful for getting a diff between versions of a model, or getting back to a valid state after an error occurs. </summary>
	///	<returns type="" />
	/// </signature>
	}
	});
	break;
	case 11:
		intellisense.annotate(event.target, {
	'extend': function () {
	/// <signature>
	///	<summary>To create a Collection class of your own, extend Backbone.Collection, providing instance properties, as well as optional classProperties to be attached directly to the collection's constructor function. </summary>
	///	<param name="properties" type="Object">properties</param>
	///	<param name=" [classProperties]" type="Object"> [classProperties]</param>///	<returns type="" />
	/// </signature>
	},
'model': function () {
	/// <signature>
	///	<summary>Override this property to specify the model class that the collection contains. If defined, you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type. </summary>
	///	<returns type="" />
	/// </signature>
	},
'constructor / initialize': function () {
	/// <signature>
	///	<summary>When creating a Collection, you may choose to pass in the initial array of models.  The collection's comparator may be included as an option. Passing false as the comparator option will prevent sorting. If you define an initialize function, it will be invoked when the collection is created. There are a couple of options that, if provided, are attached to the collection directly: model and comparator. </summary>
	///	<returns type="" />
	/// </signature>
	},
'models': function () {
	/// <signature>
	///	<summary>Raw access to the JavaScript array of models inside of the collection. Usually you'll want to use get, at, or the Underscore methods to access model objects, but occasionally a direct reference to the array is desired. </summary>
	///	<returns type="" />
	/// </signature>
	},
'toJSON': function () {
	/// <signature>
	///	<summary>Return an array containing the attributes hash of each model (via toJSON) in the collection. This can be used to serialize and persist the collection as a whole. The name of this method is a bit confusing, because it conforms to JavaScript's JSON API. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'sync': function () {
	/// <signature>
	///	<summary>Uses Backbone.sync to persist the state of a collection to the server.  Can be overridden for custom behavior. </summary>
	///	<param name="method" type="Object">method</param>
	///	<param name=" collection" type="Object"> collection</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'Underscore Methods (28)': function () {
	/// <signature>
	///	<summary>Backbone proxies to Underscore.js to provide 28 iteration functions on Backbone.Collection. They aren't all documented here, but you can take a look at the Underscore documentation for the full details… </summary>
	///	<returns type="" />
	/// </signature>
	},
'add': function () {
	/// <signature>
	///	<summary>Add a model (or an array of models) to the collection, firing an "add" event. If a model property is defined, you may also pass raw attributes objects, and have them be vivified as instances of the model. Pass {at: index} to splice the model into the collection at the specified index. If you're adding models to the collection that are already in the collection, they'll be ignored, unless you pass {merge: true}, in which case their attributes will be merged into the corresponding models, firing any appropriate "change" events. </summary>
	///	<param name="models" type="Object">models</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'remove': function () {
	/// <signature>
	///	<summary>Remove a model (or an array of models) from the collection. Fires a "remove" event, which you can use silent to suppress. The model's index before removal is available to listeners as options.index. </summary>
	///	<param name="models" type="Object">models</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'reset': function () {
	/// <signature>
	///	<summary>Adding and removing models one at a time is all well and good, but sometimes you have so many models to change that you'd rather just update the collection in bulk. Use reset to replace a collection with a new list of models (or attribute hashes), triggering a single "reset" event at the end. For convenience, within a "reset" event, the list of any previous models is available as options.previousModels. </summary>
	///	<param name="[models]" type="Object">[models]</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'set': function () {
	/// <signature>
	///	<summary>The set method performs a "smart" update of the collection with the passed list of models. If a model in the list isn't yet in the collection it will be added; if the model is already in the collection its attributes will be merged; and if the collection contains any models that aren't present in the list, they'll be removed. All of the appropriate "add", "remove", and "change" events are fired as this happens. If you'd like to customize the behavior, you can disable it with options: {add: false}, {remove: false}, or {merge: false}. </summary>
	///	<param name="models" type="Object">models</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'get': function () {
	/// <signature>
	///	<summary>Get a model from a collection, specified by an id, a cid, or by passing in a model. </summary>
	///	<param name="id" type="Object">id</param>///	<returns type="" />
	/// </signature>
	},
'at': function () {
	/// <signature>
	///	<summary>Get a model from a collection, specified by index. Useful if your collection is sorted, and if your collection isn't sorted, at will still retrieve models in insertion order. </summary>
	///	<param name="index" type="Object">index</param>///	<returns type="" />
	/// </signature>
	},
'push': function () {
	/// <signature>
	///	<summary>Add a model at the end of a collection. Takes the same options as add. </summary>
	///	<param name="model" type="Object">model</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'pop': function () {
	/// <signature>
	///	<summary>Remove and return the last model from a collection. Takes the same options as remove. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'unshift': function () {
	/// <signature>
	///	<summary>Add a model at the beginning of a collection. Takes the same options as add. </summary>
	///	<param name="model" type="Object">model</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	},
'shift': function () {
	/// <signature>
	///	<summary>Remove and return the first model from a collection. Takes the same options as remove. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'slice': function () {
	/// <signature>
	///	<summary>Return a shallow copy of this collection's models, using the same options as native Array#slice. </summary>
	///	<param name="begin" type="Object">begin</param>
	///	<param name=" end" type="Object"> end</param>///	<returns type="" />
	/// </signature>
	},
'length': function () {
	/// <signature>
	///	<summary>Like an array, a Collection maintains a length property, counting the number of models it contains. </summary>
	///	<returns type="" />
	/// </signature>
	},
'comparator': function () {
	/// <signature>
	///	<summary>By default there is no comparator for a collection. If you define a comparator, it will be used to maintain the collection in sorted order. This means that as models are added, they are inserted at the correct index in collection.models. A comparator can be defined as a sortBy (pass a function that takes a single argument), as a sort (pass a comparator function that expects two arguments), or as a string indicating the attribute to sort by. </summary>
	///	<returns type="" />
	/// </signature>
	},
'sort': function () {
	/// <signature>
	///	<summary>Force a collection to re-sort itself. You don't need to call this under normal circumstances, as a collection with a comparator will sort itself whenever a model is added. To disable sorting when adding a model, pass {sort: false} to add. Calling sort triggers a "sort" event on the collection. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'pluck': function () {
	/// <signature>
	///	<summary>Pluck an attribute from each model in the collection. Equivalent to calling map and returning a single attribute from the iterator. </summary>
	///	<param name="attribute" type="Object">attribute</param>///	<returns type="" />
	/// </signature>
	},
'where': function () {
	/// <signature>
	///	<summary>Return an array of all the models in a collection that match the passed attributes. Useful for simple cases of filter. </summary>
	///	<param name="attributes" type="Object">attributes</param>///	<returns type="" />
	/// </signature>
	},
'findWhere': function () {
	/// <signature>
	///	<summary>Just like where, but directly returns only the first model in the collection that matches the passed attributes. </summary>
	///	<param name="attributes" type="Object">attributes</param>///	<returns type="" />
	/// </signature>
	},
'url': function () {
	/// <signature>
	///	<summary>Set the url property (or function) on a collection to reference its location on the server. Models within the collection will use url to construct URLs of their own. </summary>
	///	<returns type="" />
	/// </signature>
	},
'parse': function () {
	/// <signature>
	///	<summary>parse is called by Backbone whenever a collection's models are returned by the server, in fetch. The function is passed the raw response object, and should return the array of model attributes to be added to the collection. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses. </summary>
	///	<param name="response" type="Object">response</param>
	///	<param name=" options" type="Object"> options</param>///	<returns type="" />
	/// </signature>
	},
'clone': function () {
	/// <signature>
	///	<summary>Returns a new instance of the collection with an identical list of models. </summary>
	///	<returns type="" />
	/// </signature>
	},
'fetch': function () {
	/// <signature>
	///	<summary>Fetch the default set of models for this collection from the server, setting them on the collection when they arrive. The options hash takes success and error callbacks which will both be passed (collection, response, options) as arguments. When the model data returns from the server, it uses set to (intelligently) merge the fetched models, unless you pass {reset: true}, in which case the collection will be (efficiently) reset. Delegates to Backbone.sync under the covers for custom persistence strategies and returns a jqXHR. The server handler for fetch requests should return a JSON array of models. </summary>
	///	<param name="[options]" type="Object">[options]</param>///	<returns type="" />
	/// </signature>
	},
'create': function () {
	/// <signature>
	///	<summary>Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with a hash of attributes, saving the model to the server, and adding the model to the set after being successfully created. Returns the new model. If client-side validation failed, the model will be unsaved, with validation errors. In order for this to work, you should set the model property of the collection. The create method can accept either an attributes hash or an existing, unsaved model object. </summary>
	///	<param name="attributes" type="Object">attributes</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	}
	});
	break;
	case 12:
		intellisense.annotate(event.target, {
	'extend': function () {
	/// <signature>
	///	<summary>Get started with views by creating a custom view class. You'll want to override the render function, specify your declarative events, and perhaps the tagName, className, or id of the View's root element. </summary>
	///	<param name="properties" type="Object">properties</param>
	///	<param name=" [classProperties]" type="Object"> [classProperties]</param>///	<returns type="" />
	/// </signature>
	},
'constructor / initialize': function () {
	/// <signature>
	///	<summary>When creating a new View, the options you pass — after being merged into any default options already present on the view — are attached to the view as this.options for future reference. There are several special options that, if passed, will be attached directly to the view: model, collection, el, id, className, tagName and attributes. If the view defines an initialize function, it will be called when the view is first created. If you'd like to create a view that references an element already in the DOM, pass in the element as an option: new View({el: existingElement}) </summary>
	///	<returns type="" />
	/// </signature>
	},
'el': function () {
	/// <signature>
	///	<summary>All views have a DOM element at all times (the el property), whether they've already been inserted into the page or not. In this fashion, views can be rendered at any time, and inserted into the DOM all at once, in order to get high-performance UI rendering with as few reflows and repaints as possible. this.el is created from the view's tagName, className, id and attributes properties, if specified. If not, el is an empty div. </summary>
	///	<returns type="" />
	/// </signature>
	},
'$el': function () {
	/// <signature>
	///	<summary>A cached jQuery object for the view's element. A handy reference instead of re-wrapping the DOM element all the time. </summary>
	///	<returns type="" />
	/// </signature>
	},
'setElement': function () {
	/// <signature>
	///	<summary>If you'd like to apply a Backbone view to a different DOM element, use setElement, which will also create the cached $el reference and move the view's delegated events from the old element to the new one. </summary>
	///	<param name="element" type="Object">element</param>///	<returns type="" />
	/// </signature>
	},
'attributes': function () {
	/// <signature>
	///	<summary>A hash of attributes that will be set as HTML DOM element attributes on the view's el (id, class, data-properties, etc.), or a function that returns such a hash. </summary>
	///	<returns type="" />
	/// </signature>
	},
'$ (jQuery)': function () {
	/// <signature>
	///	<summary>If jQuery is included on the page, each view has a $ function that runs queries scoped within the view's element. If you use this scoped jQuery function, you don't have to use model ids as part of your query to pull out specific elements in a list, and can rely much more on HTML class attributes. It's equivalent to running: view.$el.find(selector) </summary>
	///	<returns type="" />
	/// </signature>
	},
'template': function () {
	/// <signature>
	///	<summary>While templating for a view isn't a function provided directly by Backbone, it's often a nice convention to define a template function on your  views. In this way, when rendering your view, you have convenient access to instance data (this.model, options, and so on).  For example, using Underscore templates: </summary>
	///	<param name="[data]" type="Object">[data]</param>///	<returns type="" />
	/// </signature>
	},
'render': function () {
	/// <signature>
	///	<summary>The default implementation of render is a no-op. Override this function with your code that renders the view template from model data, and updates this.el with the new HTML. A good convention is to return this at the end of render to enable chained calls. </summary>
	///	<returns type="" />
	/// </signature>
	},
'remove': function () {
	/// <signature>
	///	<summary>Removes a view from the DOM, and calls stopListening to remove any bound events that the view has listenTo'd. </summary>
	///	<returns type="" />
	/// </signature>
	},
'delegateEvents': function () {
	/// <signature>
	///	<summary>Uses jQuery's on function to provide declarative callbacks for DOM events within a view. If an events hash is not passed directly, uses this.events as the source. Events are written in the format {"event selector": "callback"}. The callback may be either the name of a method on the view, or a direct function body. Omitting the selector causes the event to be bound to the view's root element (this.el). By default, delegateEvents is called within the View's constructor for you, so if you have a simple events hash, all of your DOM events will always already be connected, and you will never have to call this function yourself. </summary>
	///	<param name="[events]" type="Object">[events]</param>///	<returns type="" />
	/// </signature>
	},
'undelegateEvents': function () {
	/// <signature>
	///	<summary>Removes all of the view's delegated events. Useful if you want to disable or remove a view from the DOM temporarily. </summary>
	///	<returns type="" />
	/// </signature>
	}
	});;
	
	case 13:
		intellisense.annotate(event.target, {
	'extend': function () {
	/// <signature>
	///	<summary>Get started by creating a custom router class. Define actions that are triggered when certain URL fragments are matched, and provide a routes hash that pairs routes to actions. Note that you'll want to avoid using a leading slash in your route definitions: </summary>
	///	<param name="properties" type="Object">properties</param>
	///	<param name=" [classProperties]" type="Object"> [classProperties]</param>///	<returns type="" />
	/// </signature>
	},
'routes': function () {
	/// <signature>
	///	<summary>The routes hash maps URLs with parameters to functions on your router (or just direct function definitions, if you prefer), similar to the View's events hash. Routes can contain parameter parts, :param, which match a single URL component between slashes; and splat parts *splat, which can match any number of URL components. Part of a route can be made optional by surrounding it in parentheses (/:optional). </summary>
	///	<returns type="" />
	/// </signature>
	},
'constructor / initialize': function () {
	/// <signature>
	///	<summary>When creating a new router, you may pass its routes hash directly as an option, if you choose. All options will also be passed to your initialize function, if defined. </summary>
	///	<returns type="" />
	/// </signature>
	},
'route': function () {
	/// <signature>
	///	<summary>Manually create a route for the router, The route argument may be a routing string or regular expression. Each matching capture from the route or regular expression will be passed as an argument to the callback. The name argument will be triggered as a "route:name" event whenever the route is matched.  If the callback argument is omitted router[name] will be used instead. Routes added later may override previously declared routes. </summary>
	///	<param name="route" type="Object">route</param>
	///	<param name=" name" type="Object"> name</param>
	///	<param name=" [callback]" type="Object"> [callback]</param>///	<returns type="" />
	/// </signature>
	},
'navigate': function () {
	/// <signature>
	///	<summary>Whenever you reach a point in your application that you'd like to save as a URL, call navigate in order to update the URL. If you wish to also call the route function, set the trigger option to true. To update the URL without creating an entry in the browser's history, set the replace option to true. </summary>
	///	<param name="fragment" type="Object">fragment</param>
	///	<param name=" [options]" type="Object"> [options]</param>///	<returns type="" />
	/// </signature>
	}
	});
	break;
	default:
	break;
	}
	});