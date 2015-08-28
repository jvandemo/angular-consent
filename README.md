# Angular Consent
[![Build Status](https://travis-ci.org/jvandemo/angular-consent.png?branch=master)](https://travis-ci.org/jvandemo/angular-consent)

Easily show consent messages that keep appearing until the user clicks them away.

Useful if you need to show legal disclaimers (e.g. to conform to the EU Cookie Consent law).

- very lightweight (~1KB)
- use your own markup and CSS to make the messages fit perfectly in your application
- supports multiple consent messages on the same page

[Try online demo](http://angular-consent-demo.surge.sh/).

Requirements:

- [ngCookies](https://docs.angularjs.org/api/ngCookies/service/$cookies)

## Quick example

```xml
<!-- add consent attribute to any element -->
<!-- to expose $consent controller to children -->
<section consent>

  <!-- then use your own custom markup to create the message -->
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This web application uses cookies to store private data.</p>
    <button ng-click="$consent.agree();">Agree</button>
  </section>
  
</section>
```

## Usage

First install the module using bower:
 
```bash
$ bower install angular-cookies
$ bower install angular-consent
```

and add the library to your application:

```xml
<script src="angular-cookies.min.js"></script>
<script src="angular-consent.min.js"></script>
```

Then add the `ngCookies` and `angularConsent` modules to the dependencies of your AngularJS application module:

```javascript
angular.module('yourApp', ['ngCookies', 'angularConsent']);
```

Now you can use the `consent` directive anywhere in your markup:

```xml
<!-- add consent attribute to any element -->
<!-- to expose $consent controller to children -->
<section consent>

  <!-- then use your own custom markup to create the message -->
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This web application uses cookies to store private data.</p>
    <button ng-click="$consent.agree();">Agree</button>
  </section>
  
</section>
```

To create multiple consents in a single application, pass a unique key to the `consent` attribute:

```xml
<!-- consent for cookie disclaimer -->
<section consent="cookie-disclaimer">
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This website uses cookies.</p>
    <button ng-click="$consent.agree();">Ok, I understand</button>
  </section>
</section>

<!-- consent for privacy disclaimer -->
<section consent="privacy-disclaimer">
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This website stores private data.</p>
    <button ng-click="$consent.agree();">Ok, I understand</button>
  </section>
</section>
```

You can also re-use a consent across your page or application:


```xml
<!-- display consent message in header -->
<header consent="cookie-disclaimer">
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This website uses cookies.</p>
  </section>
</header>

<!-- and show the button in the footer -->
<footer consent="cookie-disclaimer">
  <button ng-click="$consent.agree();">Ok, I understand</button>
</footer>
```

## The $consent API

The following methods are available on the `$consent` object:

### $consent.hasAlreadyAgreed()

Whether or not the user has already agreed.

##### Arguments

None.

##### Returns

Boolean.

### $consent.hasNotAgreedYet()

Whether or not the user still has to agree.

##### Arguments

None.

##### Returns

Boolean.

### $consent.agree()

Marks the consent as agreed.

##### Arguments

None.

##### Returns

Void.

### $consent.reset()

Resets a previous agreement.

##### Arguments

None.

##### Returns

Void.

### Example with all available methods

```xml
<section consent>

  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This message will keep appearing until you agree</p>
    <button ng-click="$consent.agree()">Agree</p>
  </section>
  
  <section ng-if="$consent.hasAlreadyAgreed()">
    <p>This message will appear when user has already agreed</p>
    <button ng-click="$consent.reset()">Try again</p>
  </section>
  
</section>
```


## Contribute

To update the build in the `dist` directory:

```bash
$ gulp
```

To run the unit tests using the src files:

```bash
$ gulp test-src
```

To run the unit tests using the unminified library:

```bash
$ gulp test-dist-concatenated
```

To run the unit tests using the minified library:

```bash
$ gulp test-dist-minified
```

## Change log

### v1.0.0

- Added support for multiple consent messages simultaneously
- Updated documentation
- Added demo

### v0.1.0

- Added consent directive
- Added unit tests
- Added initial documentation
