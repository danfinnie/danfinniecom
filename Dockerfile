FROM bowery/ruby

# Cache gem installation
WORKDIR /tmp
ADD Gemfile /tmp/Gemfile
ADD Gemfile.lock /tmp/Gemfile.lock
RUN bundle config build.psych --enable-bundled-libyaml
RUN bundle install

ADD . /opt/jekyll
WORKDIR /opt/jekyll
CMD jekyll serve
EXPOSE 4000
