FROM ubuntu:trusty

RUN apt-get update
RUN apt-get -y upgrade

# Install SSH server
RUN apt-get install -y openssh-server curl
RUN sed -i 's|session    required     pam_loginuid.so|session    optional     pam_loginuid.so|g' /etc/pam.d/sshd
RUN mkdir -p /var/run/sshd

RUN apt-get install -y openjdk-7-jdk

RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get update
RUN apt-get -y install nodejs

RUN adduser --quiet jenkins
RUN echo "jenkins:jenkins" | chpasswd


EXPOSE 22

CMD ["/usr/sbin/sshd", "-D"]
