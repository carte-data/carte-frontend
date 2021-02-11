# Carte frontend

Carte is a static site generator for data catalogs. It has a CLI to extract metadata from your data sources into markdown files (with YAML frontmatter). This repo contains the front end to take the markdown data descriptors, and generate an instantly searchable, fast, and statically deployable data catalog site.

**See a demo site here: [demo.cartedata.com](https://demo.cartedata.com)**
**Docs: [docs.cartedata.com](https://docs.cartedata.com)**

* Carte has a CLI library, [Carte CLI](https://github.com/carte-data/carte) that connects to your data sources and generates these markdown files that Carte frontend operates out of.
* This site can then be edited with the bundled Netlify CMS system, and changes made to dataset descriptions are committed back to the repo.
* The CLI preserves any comments and descriptions added with the CMS, so it can be run periodically to pick up changes to the data schema.
* Using Git as the source of truth enables metadata versioning, rollback, and conflict resolution

## Getting started

1. Create a new repository from this with the `Use this template` button on the top right, name it however you like.
2. Extract metadata into the `data/datasets` folder using the Carte CLI (more on this in the Data extraction section)
3. Export to HTML using `npm run export`
4. Upload the `out` folder to the hosting provider of choice – it's just HTML, CSS, and JavaScript! There's no backend to take care of.

## Data extraction

To extract data, you need to add a config file to this project, usually named `extract.config.yml`. This contains the connections you'd like to collect metadata from. Currently AWS Glue and PostgreSQL are supported, but new connections are quickly and often added.

Details on how the configure and run the extraction can be found in the [docs](https://docs.cartedata.com) or in the [CLI README](https://github.com/carte-data/carte)

## Contributing 

Any contribution is welcome, there's lots to do to build a fast and featureful static data catalog! For changes, please raise an issue about what you're planning to do so that we can discuss. I'm very open to suggestions so don't hold back!
