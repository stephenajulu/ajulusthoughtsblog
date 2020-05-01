---
title: "Top 15 Essential Open Source Security Software and Tools"
date: "2020-02-16"
---

Hey everyone? How are you? Today i would like to touch on security by listing(with links) The Top Open Source Security Tools i personally recommend. Many of these tools can be used by anyone. So let's hop in!

**Notice**: If you are interested in testing these tools they are all available to download and use for FREE. Most are open source with a couple of exceptions. **They should not be used against systems that you do not have permission to attack.** You could end up in jail. So test them on your systems.

More Will Be Added

## [Nmap](https://nmap.org/)

Map your network and ports. Nmap now features powerful NSE scripts that can detect vulnerabilities, misconfiguration and security related information around network services. After you have nmap installed be sure to look at the features of the included ncat - its netcat on steroids.

## [OpenVAS](http://openvas.org/)

Stands for open source vulnerability scanning suite, grew from a fork of the Nessus engine when it went commercial. Manage all aspects of a security vulnerability management system from web based dashboards.

## [OSSEC](https://www.ossec.net/)

Is a host based intrusion detection system or HIDS, easy to setup and configure. OSSEC has far reaching benefits for both security and operations staff.

## [Security Onion](http://securityonion.blogspot.com/)

A network security monitoring distribution that can replace expensive commercial grey boxes with blinking lights. Security Onion is easy to setup and configure. With minimal effort you will start to detect security related events on your network. Detect everything from brute force scanning kids to those nasty APT's.

## [Metasploit Framework](https://www.metasploit.com/)

Test all aspects of your security with an offensive focus. Primarily a penetration testing tool, Metasploit has modules that not only include exploits but also scanning and auditing.

## [OpenSSH](https://www.openssh.com/)

Secure all your traffic between two points by tunnelling insecure protocols through an SSH tunnel. Includes scp providing easy access to copy files securely. Can be used as poor mans VPN for Open Wireless Access points (airports, coffee shops). Tunnel back through your home computer and the traffic is then secured in transit. Access internal network services through SSH tunnels using only one point of access. From Windows, you will probably want to have putty as a client and winscp for copying files. Under Linux just use the command line ssh and scp.

## [Kali Linux](https://kali.org/)

Was built from the foundation of [BackTrack](http://backtrack-linux.com) Linux. Kali is a security testing Linux distribution based on Debian. It comes prepackaged with hundreds of powerful security testing tools. From Airodump-ng with wireless injection drivers to Metasploit this bundle saves security testers a great deal of time configuring tools.

## [Nikto](http://www.cirt.net/nikto2/)

A web server testing tool that has been kicking around for over 10 years. Nikto is great for firing at a web server to find known vulnerable scripts, configuration mistakes and related security problems. It won't find your XSS and SQL web application bugs, but it does find many things that other tools miss.

## [Wireshark](https://www.wireshark.org/)

View traffic in as much detail as you want. Use Wireshark to follow network streams and find problems. Tcpdump and Tshark are command line alternatives. Wireshark runs on Windows, Linux, FreeBSD or OSX based systems.

## [Veracrypt](https://www.veracrypt.fr/en/Home.html)

Is a free open source disk encryption software for Windows, Mac OSX and Linux.

## [Moloch](https://github.com/aol/moloch)

Is packet capture analysis ninja style. Powered by an elastic search backend this makes searching through pcaps fast. Has great support for protocol decoding and display of captured data. With a security focus this is an essential tool for anyone interested in traffic analysis.

## [ZEEK/BRO IDS](https://www.zeek.org/)

Totes itself as more than an Intrusion Detection System, and it is hard to argue with this statement. The IDS component is powerful, but rather than focusing on signatures as seen in traditional IDS systems. This tool decodes protocols and looks for anomalies within the traffic.

## [Snort](https://snort.org/)

Is a real time traffic analysis and packet logging tool. It can be thought of as a traditional IDS, with detection performed by matching signatures. The project is now managed by Cisco who use the technology in its range of SourceFire appliances. An alternative project is the [Suricata system](https://suricata-ids.org/) that is a fork of the original Snort source.

## [OSQuery](https://osquery.io/)

Monitors a host for changes and is built to be performant from the ground up. This project is cross platform and was started by the Facebook Security Team. It is a powerful agent that can be run on all your systems (Windows, Linux or OSX) providing detailed visibility into anomalies and security related events.

## [GRR - Google Rapid Response](https://github.com/google/grr)

Is a tool developed by Google for security incident response. This python agent / server combination allows incident response to be performed against a target system remotely.

Have a good day/night everyone.
