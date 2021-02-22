# Michael Rushanans GitHub Pages

My website and blog. I use GitHub Pages, Jekyll, and Route 53 to create my own home on the World Wide Web. Please see [micharu123.github.io](micharu123.github.io) or [michaelrushanan.org](micharu123.github.io).

## Getting Started

The following instructions describe how to build, run, test, and deploy my website.

### Prerequisites

Follow the steps described in the official [Getting started with GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages) and [Setting up a GitHub Pages site with Jekyll](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll) documentation to create a git repository and enable it as a GitHub Pages website.

Install the following software using a system-level package manager. This may require administrator (or root/sudoer) privileges.

```sh
$ sudo apt install ruby-full
```

### Installing

Install the Jekyll software dependency in the top-level directory of this repository. I do not install any software to the system path; thus, I do not require sudoer privileges.

```sh
$ bundle config set --local path 'vendor/bundle'
$ bundle install
```

Install the website-specific software build dependencies in the docs directory.

```sh
$ cd ./docs
$ bundle config set --local path 'vendor/bundle'
$ bundle update
```

## Running the tests

Follow the steps described in the official [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll) documentation. Run the following command to serve the website locally:

```sh
$ bundle exec jekyll serve
```

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### Coding Style

I use VS Code with HTML, JavaScript, Markdown, and Ruby linters.

## Deployment

Follow the steps described in the official []() documentation. Github Pages uses the main branch.

```sh
$ git push origin main
```

## Built With

* [GitHub Pages](https://github.com/) - Web host
* [Jekyll](https://jekyllrb.com/) - Web framework
* [Ruby](https://www.ruby-lang.org/en/) - Framework programming language
* [Bundler](https://bundler.io/) - Dependency management

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Michael Rushanan <micharu123>** - *Everything* - [micharu123.github.io](https://github.com/micharu123/micharu123.github.io)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
