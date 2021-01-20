# Carte

![Carte logo](https://cartedata.com/ligature.svg)

Carte is a static site generator for data catalogs. It takes a predefined folder structure with markdown files (with YAML frontmatter), and generates an instantly searchable, fast, and statically deployable data catalog site.

**See a demo site here: [demo.cartedata.com](https://demo.cartedata.com)**

* Carte has a sister library, [Flyover](https://github.com/carte-data/flyover) that connects to your data sources and generates these markdown files that Carte operates out of.
* This site can then be edited with the bundled Netlify CMS system, and changes made to dataset descriptions are committed back to the repo.
* Flyover preserves any comments and descriptions added with the CMS, so it can be run periodically to pick up changes to the data schema.
* Using Git as the source of truth enables metadata versioning, rollback, and conflict resolution

## Getting started

1. Create a new repository from this with the `Use this template` button on the top right, name it however you like.
2. Extract metadata into the `data/datasets` folder using Flyover (more on this in the Data extraction section)
3. Export to HTML using `npm run export`
4. Upload the `out` folder to the hosting provider of choice – it's just HTML, CSS, and JavaScript! There's no backend to take care of.

## Data extraction

To extract data, you need to add a config file to this project, usually named `extract.config.yml`. This contains the connections you'd like to collect metadata from. Its structure is the following:

``` yaml
connections:
  - type: glue
    name: aws_glue
  - type: postgresql
    config:
      extractor.sqlalchemy.conn_string: 'postgresql://<user>:<password>@<host>:<port>/<database>'
```

Currently AWS Glue and PostgreSQL are supported, but new connections are quickly and often added.

To run the extraction, install the Carte Flyover Python library:

``` sh
pip install flyover
```

Then from the project root, run

``` sh
flyover -o data/datasets -c extract.config.yml
```
where the `-c` flag specifies the location of the config you created earlier.


## Contributing 

Any contribution is welcome, there's lots to do to build a fast and featureful static data catalog! For changes, please raise an issue about what you're planning to do so that we can discuss. I'm very open to suggestions so don't hold back!
