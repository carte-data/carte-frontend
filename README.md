# Carte frontend

Carte is a static site generator for data catalogs. It has a CLI to extract metadata from your data sources into markdown files (with YAML frontmatter). This repo contains the front end to take the markdown data descriptors, and generate an instantly searchable, fast, and statically deployable data catalog site.

**See a demo site here: [demo.cartedata.com](https://demo.cartedata.com)**
**Docs: [docs.cartedata.com](https://docs.cartedata.com)**

* Carte is a CLI library ([Carte CLI](https://github.com/carte-data/carte)), that connects to your data sources and generates these markdown files that this frontend operates out of.
* This site can then be edited with the bundled Netlify CMS system, and changes made to dataset descriptions are committed back to the repo.
* The CLI preserves any comments and descriptions added with the CMS, so it can be run periodically to pick up changes to the data schema.
* Using Git as the source of truth enables metadata versioning, rollback, and conflict resolution

## Getting started

See [the docs](https://docs.cartedata.com/getting_started/installation/).

## Contributing 

Any contribution is welcome, there's lots to do to build a fast and featureful static data catalog! For changes, please raise an issue about what you're planning to do so that we can discuss. I'm very open to suggestions so don't hold back!
