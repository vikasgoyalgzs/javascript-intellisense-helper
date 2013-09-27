/**
 * Copyright 2013 vikasgoyalgzs.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Intellisense for underscore.js
 *
 * @author Vikas Goyal
 */
intellisense.annotate(_, {
    'each': function () {
        /// <signature>
        ///   <summary>Iterates over a list of elements, yielding each in turn to an iterator function.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.  
        ///   If list is a JavaScript object, iterator's arguments will be (value, key, list)</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'map': function () {
        /// <signature>
        ///   <summary>Produces a new array of values by mapping each value in list through a transformation function (iterator).</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.  
        ///   If list is a JavaScript object, iterator's arguments will be (value, key, list)</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'reduce': function () {
        /// <signature>
        ///   <summary>Boils down a list of values into a single value..</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.
        ///   Iterator's arguments will be (memo, value, key, list)</param>
        ///   <param name="memo" type="value">initial state of the reduction. Each successive step of it should be returned by iterator.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'reduceRight': function () {
        /// <signature>
        ///   <summary>Boils down a list of values into a single value. The right-associative version of reduce.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.
        ///   Iterator's arguments will be (memo, value, key, list)</param>
        ///   <param name="memo" type="value">initial state of the reduction. Each successive step of it should be returned by iterator.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'find': function () {
        /// <signature>
        ///   <summary>Looks through each value in the list, returning the first one that passes a truth test.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.  
        ///   Returns as soon as it finds an acceptable element, and doesn't traverse the entire list.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'filter': function () {
        /// <signature>
        ///   <summary>Looks through each value in the list, returning an array of all the values that pass a truth test.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.</param>
        ///   <param name="context" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'where': function () {
        /// <signature>
        ///   <summary>Looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="properties" type="object">A hash of properties.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'findWhere': function () {
        /// <signature>
        ///   <summary>Looks through the list and returns the first value that matches all of the key-value pairs listed in properties.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="properties" type="object">A hash of properties.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'reject': function () {
        /// <signature>
        ///   <summary>Returns the values in list without the elements that the truth test (iterator) passes. The opposite of filter.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'every': function () {
        /// <signature>
        ///   <summary>Returns true if all of the values in the list pass the iterator truth test.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Boolean" />
        /// </signature>
    },
    'every': function () {
        /// <signature>
        ///   <summary>Returns true if all of the values in the list pass the iterator truth test.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Boolean" />
        /// </signature>
    },
    'some': function () {
        /// <signature>
        ///   <summary>Returns true if any of the values in the list pass the iterator truth test. Stops traversing the list if a true element is found.</summary>
        ///   <param name="list" type="array/collection">The source list.</param>
        ///   <param name="[iterator]" type="function">[Optional]The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="Boolean" />
        /// </signature>
    },
    'contains': function () {
        /// <signature>
        ///   <summary>Returns true if the value is present in the list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="value" type="object">A hash of properties.</param>
        ///   <returns type="Boolean" />
        /// </signature>
    },
    'invoke': function () {
        /// <signature>
        ///   <summary>Calls the method named by methodName on each value in the list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="methodName" type="object">The name of method that will be called on each item.</param>
        ///   <param name="[*arguments]" type="array">[optional]Arguments to be forwarded on to the method invocation.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'pluck': function () {
        /// <signature>
        ///   <summary>Extract a list of property values.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="propertyName" type="string">The name of the property to pluck.</param>
        ///   <returns type="object/array" />
        /// </signature>
    },
    'max': function () {
        /// <signature>
        ///   <summary>Returns the maximum value in list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="[iterator]" type="function">[optional]The iterator function. Used on each value to generate the criterion by which the value is ranked.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'min': function () {
        /// <signature>
        ///   <summary>Returns the minimum value in list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="[iterator]" type="function">[optional]The iterator function. Used on each value to generate the criterion by which the value is ranked.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'sortBy': function () {
        /// <signature>
        ///   <summary>Returns a sorted copy of list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function. Used on each value to generate the criterion by which the value is ranked.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'groupBy': function () {
        /// <signature>
        ///   <summary>Splits a collection into sets.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="iterator" type="function/string">The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'countBy': function () {
        /// <signature>
        ///   <summary>Sorts a list into groups and returns a count for the number of objects in each group.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <param name="iterator" type="function">The iterator function. Used on each value to generate the criterion by which the value is ranked.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'shuffle': function () {
        /// <signature>
        ///   <summary>Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'toArray': function () {
        /// <signature>
        ///   <summary>Converts the list into a real Array.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'size': function () {
        /// <signature>
        ///   <summary>Return the number of values in the list.</summary>
        ///   <param name="list" type="object">The source list.</param>
        ///   <returns type="int" />
        /// </signature>
    },

    'first': function () {
        /// <signature>
        ///   <summary>Returns the first element of an array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[numberOfElements]" type="int">[optional]The number of elements to return.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'initial': function () {
        /// <signature>
        ///   <summary>Returns everything but the last entry of the array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[numberOfElements]" type="int">[optional]The number of elements to exclude.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'last': function () {
        /// <signature>
        ///   <summary>Returns the last element of an array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[numberOfElements]" type="int">[optional]The number of elements to return.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'rest': function () {
        /// <signature>
        ///   <summary>Returns the rest of the elements in an array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[index]" type="int">[optional]Index to return the values of the array from that index onward.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'compact': function () {
        /// <signature>
        ///   <summary>Returns a copy of the array with all falsy values removed.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'flatten': function () {
        /// <signature>
        ///   <summary>Flattens a nested array (the nesting can be to any depth).</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[shallow]" type="int">[optional]If true, Array will only be flattened a single level.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'without': function () {
        /// <signature>
        ///   <summary>Returns a copy of the array with all instances of the values removed.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="*values" type="params">The values to remove.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'union': function () {
        /// <signature>
        ///   <summary>Computes the union of the passed-in arrays: the list of unique items, in order, that are present in one or more of the arrays.</summary>
        ///   <param name="*arrays" type="params">The source arrays to unionise.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'intersection': function () {
        /// <signature>
        ///   <summary>Computes the union of the passed-in arrays: the list of unique items, in order, that are Not present in one or more of the arrays.</summary>
        ///   <param name="*arrays" type="params">The source arrays to intersect.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'difference': function () {
        /// <signature>
        ///   <summary>Computes the union of the passed-in arrays: the list of unique items, in order, hat are not present in the other arrays.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="*others" type="params">Other arrays.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'uniq': function () {
        /// <signature>
        ///   <summary>Produces a duplicate-free version of the array, using === to test object equality.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="[isSorted]" type="bool">[optional]If true, will run a much faster algorithm</param>
        ///   <param name="[iterator]" type="function">The iterator function. Used to compute unique items based on a transformation.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'zip': function () {
        /// <signature>
        ///   <summary>Merges together the values of each of the arrays with the values at the corresponding position.</summary>
        ///   <param name="*arrays" type="params">The source arrays to zip.</param>
        ///   <returns type="array" />
        /// </signature>
    },
    'object': function () {
        /// <signature>
        ///   <summary>Converts arrays into objects.</summary>
        ///   <param name="list" type="object">The source list</param>
        ///   <param name="*values" type="object">Value pairs.</param>
        ///   <returns type="object" />
        /// </signature>
    },
    'indexOf': function () {
        /// <signature>
        ///   <summary>Returns the index at which value can be found in the array, or -1 if value is not present in the array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="value" type="object">The value to search.</param>
        ///   <param name="[isSorted]" type="bool">[optional]If true, will run a much faster algorithm</param>
        ///   <returns type="int" />
        /// </signature>
    },
    'lastIndexOf': function () {
        /// <signature>
        ///   <summary>Returns the last index at which value can be found in the array, or -1 if value is not present in the array.</summary>
        ///   <param name="array" type="array">The source array.</param>
        ///   <param name="value" type="object">The value to search.</param>
        ///   <param name="[fromIndex]" type="bool">[optional]Start your search at this index</param>
        ///   <returns type="int" />
        /// </signature>
    },
    'sortedIndex': function () {
        /// <signature>
        ///   <summary>Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order.</summary>
        ///   <param name="list" type="array">The source list.</param>
        ///   <param name="value" type="object">The value to search.</param>
        ///   <param name="[iterator]" type="function">The iterator function. Used to compute unique items based on a transformation.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="int" />
        /// </signature>
    },
    'range': function () {
        /// <signature>
        ///   <summary>A function to create flexibly-numbered lists of integers.</summary>
        ///   <param name="[start]" type="int">[optional]The starting number.</param>
        ///   <param name="stop" type="int">The number to stop at.</param>
        ///   <param name="[step]" type="int">The step to increment/decrement the numbers by.</param>
        ///   <returns type="array" />
        /// </signature>
    },



    'bind': function () {
        /// <signature>
        ///   <summary>Bind a function to an object, meaning that whenever the function is called, the value of this will be the object.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="object" type="Object">The object to bind to.</param>
        ///   <param name="[*arguments]" type="params">[optional]Arguments to the function to pre-fill them.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'bindAll': function () {
        /// <signature>
        ///   <summary>Binds a number of methods on the object, specified by methodNames, to be run in the context of that object whenever they are invoked.</summary>
        ///   <param name="object" type="Object">The object to bind methods to.</param>
        ///   <param name="[*methodNames]" type="params">[optional]Methods to bind to the given object.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'partial': function () {
        /// <signature>
        ///   <summary>Partially apply a function by filling in any number of its arguments, without changing its dynamic this value.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="[*arguments]" type="params">[optional]Arguments to the function to pre-fill them.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'memorize': function () {
        /// <signature>
        ///   <summary>Memoizes a given function by caching the computed result.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="[hashFunction]" type="Function">Used to compute the hash key for storing the result, based on the arguments to the original function.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'delay': function () {
        /// <signature>
        ///   <summary>Invokes function after wait milliseconds, much like setTimeout.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="wait" type="int">The dalay in milliseconds</param>
        ///   <param name="[*arguments]" type="params">[optional]Arguments to the function.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'defer': function () {
        /// <signature>
        ///   <summary>Defers invoking the function until the current call stack has cleared, similar to using setTimeout with a delay of 0.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="[*arguments]" type="params">[optional]Arguments to the function.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'throttle': function () {
        /// <signature>
        ///   <summary>Creates and returns a new, throttled version of the passed function, that, when invoked repeatedly, will only actually call the original function at most once per every wait milliseconds.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="wait" type="int">The dalay in milliseconds</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'debounce': function () {
        /// <signature>
        ///   <summary>Creates and returns a new debounced version of the passed function that will postpone its execution until after wait milliseconds have elapsed since the last time it was invoked.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="wait" type="int">The dalay in milliseconds</param>
        ///   <param name="[immediate]" type="bool">[optional]Pass true for the immediate parameter to cause debounce to trigger the function on the leading instead of the trailing edge of the wait interval.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'once': function () {
        /// <signature>
        ///   <summary>Creates a version of the function that can only be called one time.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'after': function () {
        /// <signature>
        ///   <summary>Creates a version of the function that will only be run after first being called count times.</summary>
        ///   <param name="count" type="int">The number of time this function will be called before actually executing it.</param>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'wrap': function () {
        /// <signature>
        ///   <summary>Wraps the first function inside of the wrapper function, passing it as the first argument.</summary>
        ///   <param name="function" type="Function">The function definition.</param>
        ///   <param name="wrapper" type="Function">The wrapper function definition.</param>
        ///   <returns type="Function" />
        /// </signature>
    },
    'compose': function () {
        /// <signature>
        ///   <summary>Returns the composition of a list of functions, where each function consumes the return value of the function that follows.</summary>
        ///   <param name="[*functions]" type="params">functions to compose.</param>
        ///   <returns type="Function" />
        /// </signature>
    },

    'keys': function () {
        /// <signature>
        ///   <summary>Retrieve all the names of the object's properties.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'values': function () {
        /// <signature>
        ///   <summary>Return all of the values of the object's properties.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'pairs': function () {
        /// <signature>
        ///   <summary>Convert an object into a list of [key, value] pairs.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'invert': function () {
        /// <signature>
        ///   <summary>Returns a copy of the object where the keys have become the values and the values the keys.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'functions': function () {
        /// <signature>
        ///   <summary>Returns a sorted list of the names of every method in an object.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Array" />
        /// </signature>
    },
    'extend': function () {
        /// <signature>
        ///   <summary>Copy all of the properties in the source objects over to the destination object, and return the destination object.</summary>
        ///   <param name="destination" type="Object">The destination object.</param>
        ///   <param name="[*sources]" type="params">One or more source objects.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'pick': function () {
        /// <signature>
        ///   <summary>Return a copy of the object, filtered to only have values for the given keys.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="[*keys]" type="params">One or more keys.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'omit': function () {
        /// <signature>
        ///   <summary>Return a copy of the object, filtered to omit the given keys (or array of keys).</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="[*keys]" type="params">One or more keys.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'defaults': function () {
        /// <signature>
        ///   <summary>Fill in null and undefined properties in object with values from the defaults objects.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="[*defaults]" type="params">One or more default values.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'clone': function () {
        /// <signature>
        ///   <summary>Create a shallow-copied clone of the object. Any nested objects or arrays will be copied by reference, not duplicated.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'tap': function () {
        /// <signature>
        ///   <summary>Invokes interceptor with the object, and then returns object.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="interceptor" type="Object">The interceptor object.</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'has': function () {
        /// <signature>
        ///   <summary>Does the object contain the given key? Identical to object.hasOwnProperty(key).</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="key" type="Object">The key object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isEqual': function () {
        /// <signature>
        ///   <summary>Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <param name="other" type="Object">The other object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isEmpty': function () {
        /// <signature>
        ///   <summary>Returns true if object contains no values.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isElement': function () {
        /// <signature>
        ///   <summary>Returns true if object is a DOM element.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isArray': function () {
        /// <signature>
        ///   <summary>Returns true if object is an Array.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isObject': function () {
        /// <signature>
        ///   <summary>Returns true if value is an Object.</summary>
        ///   <param name="value" type="Object">The source value.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isArguments': function () {
        /// <signature>
        ///   <summary>Returns true if object is an Arguments object.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isFunction': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Function.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isString': function () {
        /// <signature>
        ///   <summary>Returns true if object is a String.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isNumber': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Number.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isFinite': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Finite number.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isBoolean': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Bollean.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isDate': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Date.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isRegExp': function () {
        /// <signature>
        ///   <summary>Returns true if object is a Regular Expression.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isNaN': function () {
        /// <signature>
        ///   <summary>Returns true if object is NaN.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isNull': function () {
        /// <signature>
        ///   <summary>Returns true if object is null.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },
    'isUndefined': function () {
        /// <signature>
        ///   <summary>Returns true if object is undefined.</summary>
        ///   <param name="object" type="Object">The source object.</param>
        ///   <returns type="bool" />
        /// </signature>
    },


    'noConflict': function () {
        /// <signature>
        ///   <summary>Give control of the "_" variable back to its previous owner. Returns a reference to the Underscore object.</summary>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'identity': function () {
        /// <signature>
        ///   <summary>Returns the same value that is used as the argument. In math: f(x) = x.</summary>
        ///   <param name="value" type="value">The value.</param>
        ///   <returns type="value" />
        /// </signature>
    },
    'times': function () {
        /// <signature>
        ///   <summary>Invokes the given iterator function n times. Each invocation of iterator is called with an index argument.</summary>
        ///   <param name="n" type="value">The number of times the function will be called.</param>
        ///   <param name="[iterator]" type="function">[optional]The iterator function.</param>
        ///   <param name="[context]" type="object">[Optional]The context in which the iterator is called.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'random': function () {
        /// <signature>
        ///   <summary>Returns a random integer between min and max.</summary>
        ///   <param name="min" type="value">The minimum number value.</param>
        ///   <param name="max" type="value">The maximum number value.</param>
        ///   <returns type="int" />
        /// </signature>
    },
    'mixin': function () {
        /// <signature>
        ///   <summary>Allows you to extend Underscore with your own utility functions.Pass a hash of {name: function} definitions to have your functions added to the Underscore object, as well as the OOP wrapper.</summary>
        ///   <param name="object" type="Object">The mixin hash.</param>
        ///   <returns type="undefined" />
        /// </signature>
    },
    'uniqueId': function () {
        /// <signature>
        ///   <summary>Generate a globally-unique id for client-side models or DOM elements that need one.</summary>
        ///   <param name="[prefix]" type="string">The unique id prefix.</param>
        ///   <returns type="string" />
        /// </signature>
    },
    'escape': function () {
        /// <signature>
        ///   <summary>Escapes a string for insertion into HTML, replacing &, <, >, ", ', and / characters.</summary>
        ///   <param name="string" type="string">The input string</param>
        ///   <returns type="string" />
        /// </signature>
    },
    'unescape': function () {
        /// <signature>
        ///   <summary>UnEscapes a string. replaces &amp;, &lt;, &gt;, &quot;, &#x27;, and &#x2F; with their unescaped counterparts.</summary>
        ///   <param name="string" type="string">The input string</param>
        ///   <returns type="string" />
        /// </signature>
    },
    'result': function () {
        /// <signature>
        ///   <summary>If the value of the named property is a function then invoke it; otherwise, return it.</summary>
        ///   <param name="object" type="Object">The input object</param>
        ///   <param name="property" type="value">The input property</param>
        ///   <returns type="Object" />
        /// </signature>
    },
    'template': function () {
        /// <signature>
        ///   <summary>Compiles JavaScript templates into functions that can be evaluated for rendering.</summary>
        ///   <param name="templateString" type="string">The template string</param>
        ///   <param name="[data]" type="Object">[optional]The data object</param>
        ///   <param name="[settings]" type="Object">[optional]The settings object</param>
        ///   <returns type="Function" />
        /// </signature>
    },
    'chain': function () {
        /// <signature>
        ///   <summary>Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used.</summary>
        ///   <param name="object" type="Object">The input object</param>
        ///   <returns type="value" />
        /// </signature>
    },
    'value': function () {
        /// <signature>
        ///   <summary>Extracts the value of a wrapped object.</summary>
        ///   <returns type="value" />
        /// </signature>
    }
});



