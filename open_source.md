---
layout: page
title: Open Source
---

They say you should leave the world better than you found it.  I've tried to
embody this by contributing to open source projects when I see a potential
improvement.

Some of the accepted patches that I've made are:

Bundler
=======

[Bundler](http://bundler.io/), a per-project Ruby dependency management tool,
modified the syntax of the syntax of their Gemfile configuration file in a way
that didn't provide an error when trying to use a new configuration file with
an old version of Bundler.  I submitted a [pull request that prints a
description of the problem when the newer syntax is used with the older
version](https://github.com/bundler/bundler/pull/3199).

Rails Latex
===========

[rails-latex](https://github.com/baierjan/rails-latex) adds support for
rendering LaTeX templates as PDF files for views, just like you might use Haml
or Slim. When working on my [Resumator](https://github.com/danfinnie/resumator)
project, I had a number of needs that weren't addressed by the plugin:

* I added [support for saving a copy of the source .tex
  file](https://github.com/baierjan/rails-latex/pull/37).  The tool
  previously only saved a debugging copy of the LaTeX compiler's output.
* I added the [ability to have a directory of supporting files (fonts,
  includes, etc.) instead of just one
  file](https://github.com/baierjan/rails-latex/pull/36).  This pull request
  also allows the location of the supporting files to be specified with a Ruby
  Pathname.  This is handy in conjunction with `Rails.root`, which returns a
  Pathname object.

FluentLenium
============

[FluentLenium](https://github.com/FluentLenium/FluentLenium) is a fluent Java
interface to the Selenium web browser automation tool.  Using the tool, I
noticed a discrepancy with its assertion that an element had a specific class
versus a group of elements having a specific class.  [Mark
McDonald](https://github.com/MarkyMarkMcDonald) and I paired on [standardizing
both assertions to split the class names on spaces like web
browsers](https://github.com/FluentLenium/FluentLenium/pull/122).

Simple BDD
==========

(Simple BDD)[https://github.com/robb1e/simple_bdd] is a Ruby behavior driven
development helper that lets you attach human-readable strings to Gherkin
blocks (the Given/When/Then that's popular in the BDD community).  I've made
several pull requests to the library:

* In talking with the creator of Simple BDD, I learned of an un-documented
feature to group assertions.  The feature didn't work as I expected, so I
[updated it to work more consistently with other aspects of Simple BDD and made
it more discoverable with some
documentation](https://github.com/robb1e/simple_bdd/pull/13).

* I [fixed a bug where Simple BDD marked a test as pending when the code under
  test called an undefined
  method](https://github.com/robb1e/simple_bdd/pull/11/commits).

* I [improved Simple BDD's way of transforming sentences to method names to
  handle consecutive whitespace and punctuation
  better](https://github.com/robb1e/simple_bdd/pull/9).

Bullet and Uniform Notifier
===========================

[Bullet](https://github.com/flyerhzm/bullet) and [Uniform
Notifier](https://github.com/flyerhzm/uniform_notifier) work together to notify
Rails developers of inefficient SQL queries produced by ActiveRecord.  Using
this gem in development, I often overlooked its notifications.  To make sure
the inefficient queries got addressed, [Brian Kelly](http://spilth.org/) and I
paired on adding a mode to Bullet and Uniform Notifier that would fail your
tests when they called code that ran inefficient queries (see the [pull request
for Bullet](https://github.com/flyerhzm/bullet/pull/119) and the [pull request
for Uniform Notifier](https://github.com/flyerhzm/uniform_notifier/pull/14)).

The tests were failing because of a prior commit, so we also [fixed those
tests](https://github.com/flyerhzm/uniform_notifier/pull/13) before we started.

Zend Framework 2
================

[zf2](http://framework.zend.com/), one of the most popular PHP frameworks, had a bug
in it's handling of hydrators, which turn PHP objects into JSON.  A class that
looked for methods with _n_ arguments actually just looked for methods with 0
arguments, ignoring the parameter _n_.  I [fixed this behavior to respect
_n_](https://github.com/zendframework/zf2/pull/6083).

Symfony 2
=========

[Symfony](http://symfony.com/) is another popular PHP framework.  I updated
their authentication mechanism to allow whitelisting of multiple IP addresses
instead of one.  This change had a [code
change](https://github.com/symfony/symfony/pull/7251) as well as a
[documentation update](https://github.com/symfony/symfony-docs/pull/2442)

In addition to contributing to Symfony, I made several contributions to widely used Symfony plugins:

* The Friends of Symfony library for Facebook authentication had a try/catch
  block that made debugging difficult, but wasn't actually serving any purpose.
  I [contributed a pull request to remove
  it](https://github.com/FriendsOfSymfony/FOSFacebookBundle/pull/231).  This
  was a pretty small change that took a while to track down.

* Installing the [Sonata Admin
  Bundle](https://github.com/sonata-project/SonataAdminBundle/pull/1189), I
  realized that the getting started documentation was not up to date.  I took
  notes while getting my installation updated and submitted a [pull request to
  make the Getting Started guide more
  complete](https://github.com/sonata-project/SonataAdminBundle/pull/1189).

<!-- 
Other
=====

* Massive documentation update to reflect what Pivotal's vim configuration actually does. https://github.com/pivotalcommon/vim-config/pull/31
* Code Igniter https://github.com/NTICompass/CodeIgniter-Subqueries/pull/6
-->

Typo Fixes
==========

* [rspec-mocks](https://github.com/rspec/rspec-mocks/pull/289)
* [letter_opener](https://github.com/ryanb/letter_opener/pull/96)
* [FluentLenium](https://github.com/FluentLenium/FluentLenium/pull/121)
* [Bower](https://github.com/bower/bower/pull/1291)
