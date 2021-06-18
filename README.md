![michaelrushanan.org](./images/app-title.png)

---

# Overview 

This repository contains the personal website and blog of [https://github.com/micharu123](micharu123). I use GitHub Pages, Jekyll, and Route 53 to create my own home on the Internet.

Please see [micharu123.github.io](micharu123.github.io) or [michaelrushanan.org](micharu123.github.io).

# Getting Started

My website uses [GitHub Pages](https://pages.github.com/).

## Quickstart

This section describes how to build and deploy my website. In general, follow the steps in the official GitHub documentation: 
* [Getting started with GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/getting-started-with-github-pages)
* [Setting up a GitHub Pages site with Jekyll](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site-with-jekyll) 

As for the most important step, clone the repository:
```sh
$ git clone https://github.com/micharu123/micharu123.github.io.git
```

### Dependencies

My website depends on the [Ruby](https://www.ruby-lang.org/en/) interpreter and associated tools such as [Bundler](https://bundler.io/). If you're using a Linux or Unix operating system (OS) distribution, please use your system package manager to install Ruby.

My website also depends on [Jekyll](https://jekyllrb.com/), a static site generator written in Ruby. I prefer to install Jekyll in the top-level directory of the source code repository rather than in a system-specific path; thus, forgoing sudoer or root privileges.

On Ubuntu 20.04, we execute the following:
```sh
$ sudo apt install ruby-full
$ cd ./micharu123.github.io/
$ bundle config set --local path 'vendor/bundle'
$ bundle install
$ cd ./docs/
$ bundle config set --local path 'vendor/bundle'
$ bundle upate
```

To be clear, my website uses the following web frameworks and programming languages:
* [GitHub Pages](https://github.com/) - Web host
* [Jekyll](https://jekyllrb.com/) - Web framework
* [Ruby](https://www.ruby-lang.org/en/) - Framework programming language
* [Bundler](https://bundler.io/) - Dependency management

### Publish

Per the GitHub Pages documentation, I configured my main branch as my GitHub Pages source. Any commit I push upstream to Github will update my website. Specifically,
```sh
$ git push origin main
```

#### Local Testing

I serve my website locally before pushing it to the main branch. This process is formally described here: [Testing your GitHub Pages site locally with Jekyll](https://docs.github.com/en/github/working-with-github-pages/testing-your-github-pages-site-locally-with-jekyll).

Short-cut the read and simply execute:
```sh
$ cd ./docs
$ bundle exec jekyll server
```

#### Style and Versioning

I use VS Code with HTML, JavaScript, Markdown, and Ruby linters. I also use semantic versioning; see [SemVer](http://semver.org/) for more details.

## Privacy

My website does not track users, nor does it contain private information about me.

# Documentation

I do not maintain a separate Wiki for my website.

# Contributing

I am not actively looking for contributions.

## Authors

* **Michael Rushanan <micharu123>** - *Everything* - [micharu123.github.io](https://github.com/micharu123/micharu123.github.io)


# License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
