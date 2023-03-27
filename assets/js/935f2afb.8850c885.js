"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docs":[{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Via Composer","href":"/Installation/composer","docId":"Installation/composer"},{"type":"link","label":"Via WordPress","href":"/Installation/wordpress","docId":"Installation/wordpress"}]},{"type":"link","label":"Underpin","href":"/","docId":"index"},{"type":"category","label":"reference","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"helpers","collapsible":true,"collapsed":true,"items":[{"type":"category","label":"processors","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"List Filter","href":"/reference/helpers/processors/list-filter","docId":"reference/helpers/processors/list-filter"},{"type":"link","label":"List Sorter","href":"/reference/helpers/processors/list-sorter","docId":"reference/helpers/processors/list-sorter"}]}]},{"type":"category","label":"Registries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Registry (Abstraction)","href":"/reference/registries/abstract-registry","docId":"reference/registries/abstract-registry"},{"type":"category","label":"Object Registries","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Object Registry (Abstract)","href":"/reference/registries/object-registries/abstract-object-registry","docId":"reference/registries/object-registries/abstract-object-registry"},{"type":"category","label":"Collections","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Immutable Collection","href":"/reference/registries/object-registries/collections/immutable-collection","docId":"reference/registries/object-registries/collections/immutable-collection"},{"type":"link","label":"Mutable Collection With Remove","href":"/reference/registries/object-registries/collections/mutable-collection-with-remove","docId":"reference/registries/object-registries/collections/mutable-collection-with-remove"},{"type":"link","label":"Mutable Collection","href":"/reference/registries/object-registries/collections/mutable-collection","docId":"reference/registries/object-registries/collections/mutable-collection"}],"href":"/reference/registries/object-registries/collections/"}],"href":"/reference/registries/object-registries/"},{"type":"link","label":"Registry (Concrete)","href":"/reference/registries/registry","docId":"reference/registries/registry"}],"href":"/reference/registries/"}]}]},"docs":{"index":{"id":"index","title":"Underpin","description":"Underpin - to support, justify, or form the basis for.","sidebar":"docs"},"Installation/composer":{"id":"Installation/composer","title":"Via Composer","description":"Underpin can be installed in any place you can write code using Composer. You can learn more about how to set up Composer using their documentation.","sidebar":"docs"},"Installation/wordpress":{"id":"Installation/wordpress","title":"Via WordPress","description":"The recommended way to install Underpin is using Composer. If you are already using Composer for your WordPress implementation, head on over to the Composer setup and follow the instructions there to set up Underpin through your existing Composer setup. If you do not currently have WordPress set up to use Composer, the guide below is intended to help you determine where you can set up Composer.","sidebar":"docs"},"reference/helpers/processors/list-filter":{"id":"reference/helpers/processors/list-filter","title":"List Filter","description":"A list filter makes it possible to filter items from an array of objects using a chain-able query syntax. This feature","sidebar":"docs"},"reference/helpers/processors/list-sorter":{"id":"reference/helpers/processors/list-sorter","title":"List Sorter","description":"A list filter makes it possible to sort items from an array of objects using a chain-able query syntax. This feature","sidebar":"docs"},"reference/registries/abstract-registry":{"id":"reference/registries/abstract-registry","title":"Registry (Abstraction)","description":"The Registry is a no-frills base abstraction of a registry. It can be extended and used as you see-fit.","sidebar":"docs"},"reference/registries/index":{"id":"reference/registries/index","title":"Registries","description":"In Underpin, a Registry is class that contains a group of items joined together inside an array. Each item in an array has a specific key, and value, cannot be duplicated by default, and items are automatically validated using a validation method when they\'re added.","sidebar":"docs"},"reference/registries/object-registries/abstract-object-registry":{"id":"reference/registries/object-registries/abstract-object-registry","title":"Object Registry (Abstract)","description":"The abstraction for Object Registry makes it possible to implement your own object registry by extending a class.","sidebar":"docs"},"reference/registries/object-registries/collections/immutable-collection":{"id":"reference/registries/object-registries/collections/immutable-collection","title":"Immutable Collection","description":"ImmutableCollection is a Collection in which items cannot be added or removed after the items have been locked. Note this does **not** mean that the values of the items the registry holds are immutable. If an immutable collection contains objects with public setters, those items will still update. All this does is prevent you from adding new_ items to this registry once it\'s set-up.","sidebar":"docs"},"reference/registries/object-registries/collections/index":{"id":"reference/registries/object-registries/collections/index","title":"Collections","description":"A collection is a type of Object Registry, but it uses static builders to make it possible to build an object registry without needing to declare a dedicated class.","sidebar":"docs"},"reference/registries/object-registries/collections/mutable-collection":{"id":"reference/registries/object-registries/collections/mutable-collection","title":"Mutable Collection","description":"MutableCollection is a basic implementation of Collection. Unlike an immutable collection, items can always be added, to this collection, but it cannot be directly removed_ from the collection instance.","sidebar":"docs"},"reference/registries/object-registries/collections/mutable-collection-with-remove":{"id":"reference/registries/object-registries/collections/mutable-collection-with-remove","title":"Mutable Collection With Remove","description":"MutableCollectionWith_Remove is an implementation of Collection. Unlike an immutable collection, items can always be added, and removed from the collection at any time, and unlike a mutable collection, items can be directly removed from this collection, as well.","sidebar":"docs"},"reference/registries/object-registries/index":{"id":"reference/registries/object-registries/index","title":"Object Registries","description":"An Object Registry is a type of registry that validates that the items added to this registry are all a","sidebar":"docs"},"reference/registries/registry":{"id":"reference/registries/registry","title":"Registry (Concrete)","description":"The non-abstract Registry class makes it possible to create a custom registry without needing to declare a new class that extends the Abstract Registry class.","sidebar":"docs"}}}')}}]);