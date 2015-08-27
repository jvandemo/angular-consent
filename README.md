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
