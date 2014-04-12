FROM bowery/ruby
ADD . /opt/jekyll
WORKDIR /opt/jekyll
RUN bundle install
CMD jekyll serve
EXPOSE 4000
