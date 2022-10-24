2.1 Array.prototype.groupBy ( callbackfn \[ , thisArg \] )
==========================================================

Note 1

callbackfn should be a function that accepts three arguments. `groupBy` calls callbackfn once for each element in the array, in ascending order, and constructs a new object of arrays. Each value returned by callbackfn is coerced to a property key, and the associated element is included in the array in the constructed object according to this property key.

If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

callbackfn is called with three arguments: the value of the element, the index of the element, and the object being traversed.

`groupBy` does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.

The range of elements processed by `groupBy` is set before the first call to callbackfn. Elements which are appended to the array after the call to `groupBy` begins will not be visited by callbackfn. If existing elements of the array are changed their value as passed to callbackfn will be the value at the time `groupBy` visits them; elements that are deleted after the call to `groupBy` begins and before being visited are still visited and are either looked up from the prototype or are undefined.

The return value of `groupBy` is an object that does not inherit from Object.prototype.

When the `groupBy` method is called with one or two arguments, the following steps are taken:

1.  Let O be ? [ToObject](https://tc39.es/ecma262/#sec-toobject)(this value).
2.  Let len be ? [LengthOfArrayLike](https://tc39.es/ecma262/#sec-lengthofarraylike)(O).
3.  If [IsCallable](https://tc39.es/ecma262/#sec-iscallable)(callbackfn) is false, throw a TypeError exception.
4.   Let k be 0.
5.   Let groups be a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type).
6. Repeat, while k < len\
    a. Let Pk be ! [ToString](https://tc39.es/ecma262/#sec-tostring)([𝔽](https://tc39.es/ecma262/#𝔽)(k)).\
    b. Let kValue be ? [Get](https://tc39.es/ecma262/#sec-get-o-p)(O, Pk).\
    c. Let propertyKey be ? [ToPropertyKey](https://tc39.es/ecma262/#sec-topropertykey)(? [Call](https://tc39.es/ecma262/#sec-call)(callbackfn, thisArg, « kValue, [𝔽](https://tc39.es/ecma262/#𝔽)(k), O »)).\
    d. Perform ! [AddValueToKeyedGroup](#23-addvaluetokeyedgroup--groups-key-value-)(groups, propertyKey, kValue).
    e. Set k to k + 1.
7. Let obj be ! OrdinaryObjectCreate(null).
8. For each [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { \[\[Key\]\], \[\[Elements\]\] } g of groups, do\
    a. Let elements be ! [CreateArrayFromList](https://tc39.es/ecma262/#sec-createarrayfromlist)(g.\[\[Elements\]\]).\
    b. Perform ! [CreateDataPropertyOrThrow](https://tc39.es/ecma262/#sec-createdatapropertyorthrow)(obj, g.\[\[Key\]\], elements).\
9.  Return obj.

Note 2

The `groupBy` function is intentionally generic; it does not require that its this value be an Array object. Therefore it can be transferred to other kinds of objects for use as a method.

# 2.2 Array.prototype.groupByMap ( callbackfn \[ , thisArg \] )


Note 1

callbackfn should be a function that accepts three arguments. `groupByMap` calls callbackfn once for each element in the array, in ascending order, and constructs a new Map of arrays. Each value returned by callbackfn is used as a key in the Map, and the associated element is included in the array in the constructed Map according to this key.

If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackfn. If it is not provided, undefined is used instead.

callbackfn is called with three arguments: the value of the element, the index of the element, and the object being traversed.

`groupByMap` does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.

The range of elements processed by `groupByMap` is set before the first call to callbackfn. Elements which are appended to the array after the call to `groupByMap` begins will not be visited by callbackfn. If existing elements of the array are changed their value as passed to callbackfn will be the value at the time `groupByMap` visits them; elements that are deleted after the call to `groupByMap` begins and before being visited are still visited and are either looked up from the prototype or are undefined.

The return value of `groupByMap` is a Map.

When the `groupByMap` method is called with one or two arguments, the following steps are taken:

1.  Let O be ? [ToObject](https://tc39.es/ecma262/#sec-toobject)(this value).
2.  Let len be ? [LengthOfArrayLike](https://tc39.es/ecma262/#sec-lengthofarraylike)(O).
3.  If [IsCallable](https://tc39.es/ecma262/#sec-iscallable)(callbackfn) is false, throw a TypeError exception.
4.  Let k be 0.
5.  Let groups be a new empty [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type).
6.  Repeat, while k < len\
    a. Let Pk be ! [ToString](https://tc39.es/ecma262/#sec-tostring)([𝔽](https://tc39.es/ecma262/#𝔽)(k)).\
    b. Let kValue be ? [Get](https://tc39.es/ecma262/#sec-get-o-p)(O, Pk).\
    c. Let key be ? [Call](https://tc39.es/ecma262/#sec-call)(callbackfn, thisArg, « kValue, [𝔽](https://tc39.es/ecma262/#𝔽)(k), O »).\
    d. If key is \-0𝔽, set key to +0𝔽.\
    e. Perform ! [AddValueToKeyedGroup](#23-addvaluetokeyedgroup--groups-key-value-)(groups, key, kValue).\
    f. Set k to k + 1.
7.  Let map be ! [Construct](https://tc39.es/ecma262/#sec-construct)([%Map%](https://tc39.es/ecma262/#sec-map-constructor)).
8.  For each [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { \[\[Key\]\], \[\[Elements\]\] } g of groups, do\
    a. Let elements be ! [CreateArrayFromList](https://tc39.es/ecma262/#sec-createarrayfromlist)(g.\[\[Elements\]\]).\
    b. Let entry be the [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { \[\[Key\]\]: g.\[\[Key\]\], \[\[Value\]\]: elements }.\
    c. Append entry as the last element of map.\[\[MapData\]\].
9.  Return map.

Note 2

The `groupBy` function is intentionally generic; it does not require that its this value be an Array object. Therefore it can be transferred to other kinds of objects for use as a method.


# 2.3 AddValueToKeyedGroup ( groups, key, value )


The abstract operation AddValueToKeyedGroup takes arguments groups (a [List](https://tc39.es/ecma262/#sec-list-and-record-specification-type) of Records that have \[\[Key\]\] and \[\[Elements\]\] fields), key (an [ECMAScript language value](https://tc39.es/ecma262/#sec-ecmascript-language-types)), and value (an [ECMAScript language value](https://tc39.es/ecma262/#sec-ecmascript-language-types)). It performs the following steps when called:

1.  If groups contains a [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) g such that ! [SameValue](https://tc39.es/ecma262/#sec-samevalue)(g.\[\[Key\]\], key) is true, then\
    a. [Assert](https://tc39.es/ecma262/#assert): exactly one element of groups meets this criteria.\
    b. Append value as the last element of g.\[\[Elements\]\].\
2.  Else,\
    a. Let group be the [Record](https://tc39.es/ecma262/#sec-list-and-record-specification-type) { \[\[Key\]\]: key, \[\[Elements\]\]: « value » }.\
    b. Append group as the last element of groups.