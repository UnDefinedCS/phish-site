# Phish Site

## About
This is a fake website designed to influence victems to run commands on their system. Recently phishing campaigns have been using fake verify steps
to trick users into running malicious powershell commands via `Win + R`. Or running a malicious bash-script from a remote host impersonating a legitimate
group.

## Build
```bash
# install latest nodejs
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# install angular package
npm install -g @angular/cli

git clone https://github.com/UnDefinedCS/phish-site.git
cd phish-site
cd fake_brew

npm install .
ng serve --host 0.0.0.0 --port 4200 --open
```

## ⚠️Responsible Usage Notice
This project is intended for educational and authorized security testing purposes only.
Unauthorized use of this program against systems you do not own or have explicit permission
to test is strictly prohibited and may be illegal. Always obtain proper authorization before
running any form of penetration testing or exploitation activity. The creator assumes no
liability for misuse or damage caused by improper or unlawful use of this software.