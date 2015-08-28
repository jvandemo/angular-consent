# Angular Consent

```xml
<!-- consent attribute exposes $consent controller -->
<section consent>
  <section ng-if="$consent.hasNotAgreedYet()">
    <p>This web application uses cookies to store private data.</p>
    <button ng-click="$consent.agree();">Agree</button>
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

### v0.1.0

- Added consent directive
- Added unit tests
- Added initial documentation
