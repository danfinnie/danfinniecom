FROM bowery/ruby

# Cache gem installation
WORKDIR /tmp
ADD Gemfile /tmp/Gemfile
RUN bundle install

ADD . /opt/jekyll
WORKDIR /opt/jekyll
CMD jekyll serve
EXPOSE 4000
