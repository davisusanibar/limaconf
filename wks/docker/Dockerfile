FROM    centos:centos6

RUN yum install -y \
      curl \
      git \
      perl \
      which \
 && yum clean all

RUN curl -sL -o ns.rpm https://rpm.nodesource.com/pub_0.12/el/6/x86_64/nodejs-0.12.7-1nodesource.el6.x86_64.rpm \
 && rpm -i --nosignature --force ns.rpm \
 && rm -f ns.rpm

# Bundle app source
COPY /nodejs /src

# Install app dependencies
RUN cd /src; npm install

EXPOSE  8003
CMD ["node", "/src/index.js", "8003"]
