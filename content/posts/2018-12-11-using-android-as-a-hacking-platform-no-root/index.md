---
title: "Using Android as a hacking platform: no root"
date: "2018-12-11"
---

Hey guys, How are you doing? Today i would like to touch on a topic for white hats, green hats and penetration testing/ethical hacking enthusiasts out there. Hacking and Pentesting using your smartphone.  

Now before we start I'd like to point out a few things:- First many fail to see the potential of their smartphones, a smartphone is basically a very portable computer more portable than a laptop. In recent times some smartphones have become powerful enough to completely destroy the need of a full sized computer or a laptop. Such as Samsung Galaxy S7, S8 and many others. The smartphone i currently have(Nokia 6 2017 Matte Black version) has Qualcomm Snapdragon 430 Octacore clocked at 1.40 GHz with a Random Access Memory(RAM) of 4GB. Now from these specs, you can see they rival an ordinary Laptop. Even surpassing many with 2GB RAM.

The Second thing is Android is Linux(Built on Linux), therefore is capable of handling some Linux commands through the help of Busybox (I'll talk on this in another post). Not forgetting all Operating Systems capable of performing attacks are based on Linux e.g. Kali Linux, Parrot OS.

Now with these things in mind. We can now proceed to our agenda. The first step to being able to pentest is to check which android version, you are running. This is essential because one of the apps needed is limited to Android 5.0.0 and above(Termux)

**NOTE: Please know all written here is for educational purposes! I will not be held responsible for any damage done to you or any network or device.  Leave it to the professionals, white hats and true ETHICAL hacking enthusiasts! Do not do any kind of hacking/pentesting to anyone's network or computer, unless given written permission to do so unless the network belongs to you. To be on a safer ground use softwares like Vmware Workstation/Player and Virtual Box to virtualize android, windows and other operating system. Then use that to practice. I will post links for the softwares.**

**So lets begin, here they are:- 
**

1. [**Termux**](https://play.google.com/store/apps/details?id=com.termux) - Now this is a very important app, it is a terminal emulator i found in my pursuit to master Linux commands through guide apps on the Playstore. It captivated me, now i use it almost everyday. This is not like the other terminal apps, it is a terminal emulator for Android. It's key difference from other terminal emulators is, it has it's own package repository with huge set of various utilities. Terminal emulator is a program that provides a text-based interface to the shell. It has Linux packages in it, therefore supporting _**apt**_. Termux is an **Android terminal emulator and Linux environment app** that works directly with no rooting or setup required. A minimal base system is installed automatically - additional packages are available using the APT package manager. I'll explain and talk about this in another post. You can install Metasploit-Framework, THC Hydra, Nmap, Radare2, Bettercap, Kali Nethunter(Chroot) among others which i will talk about in another post. Aside from this you can SSH into servers, compile python, perl, go, clang, php and other programing languages and even run them. You can use it as a text editor and learn Linux on the go. Note: You can download it from Google Playstore but its add-ons are priced, for free download them from [**https://search.f-droid.org/?q=termux&lang=en.**](https://search.f-droid.org/?q=termux&lang=en) Though you will need to download the stores app. When download choose one store as they are signed differently, choose either Playstore or Fdroid.  For more information about it visit their wiki page here: [**https://wiki.termux.com/wiki/Main\_Page**](https://wiki.termux.com/wiki/Main_Page) or their main site**:** [**https://termux.com/**](https://termux.com/) for more info you can visit this XDA forum: [**https://www.xda-developers.com/termux-the-ultimate-linux-terminal-emulator-for-android-xda-spotlight/**](https://www.xda-developers.com/termux-the-ultimate-linux-terminal-emulator-for-android-xda-spotlight/)  
    
2. [**Hacker's Keyboard**](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard) -  This keyboard has separate number keys, punctuation in the usual places, and arrow keys. It is based on the AOSP Gingerbread soft keyboard, so it supports multi-touch for the modifier keys. This is useful, for its arrow, escape(ESC), control(CTRL), function(FN) and alternative(ALT) keys. For typing in the terminal.
3. **[Fing](https://play.google.com/store/apps/details?id=com.overlook.android.fing)**\- is the top ranking, completely free and super-fast network scanner, that’s used by millions of homes and professionals around the world. Discover which devices are connected to any Wi-Fi network, map devices, detect intruders, assess network security risks, troubleshoot network problems and achieve best network performance, with the world’s most popular network toolkit. With more than a dozen free network tools including; Wi-Fi scanner, port scanner, DNS lookup, ping and service monitoring. Fing is a must-have network utility. And the best thing about it, it doesn't require ROOT.  
    **Fing network utilities include:**  
    **_\+ Wi-Fi/LAN scanner: discover all devices connected to any network  
    \+ Full device details including IP address, MAC address, Device Name, Vendor, Device Manufacturer and more  
    \+ Advanced analysis of NetBIOS, UPNP and Bonjour names, properties and device types  
    \+ Inventory of devices and networks  
    \+ Internet connectivity checker  
    \+ ISP analysis and location  
    \+ Subnet scanner  
    \+ Port scanner: TCP port scanning that automatically finds open ports and available services  
    \+ Ping and traceroute: for network quality measurement  
    \+ WOL: remotely wake up devices  
    \+ DNS Lookup and reverse DNS lookup  
    \+ Connect to ports (Browser, SSH, FTP)  
    \+ Network intruder detection  
    \+ Network monitoring: device online and offline tracking  
    \+ Supports device identification by IP address for bridged networks_**
4. [**Network Manager-Network Tools & Utilities**](https://play.google.com/store/apps/details?id=com.eakteam.networkmanager) - This another network scanner on steroids, don't get me wrong Fing is the best network scanner, but this has a plethora of uses and functions. Still having both will help you greatly. Some i will list below:-
    
    **Available network tools and utilities** :  
    **_\+_** ****_Real time telephony monitoring graph_********_\+ Real time network information_********_\+ Real time network usage graph_********_\+ Real time WiFi monitoring graph_********_\+ Universal Scanner_******_\+_** ****_Status Tracer_******_\+_** ****_Speed Test_******_\+_** ****_Ping_******_\+_** ****_Multi Ping_******_\+_** ****_Traceroute_********_\+ Progressive Traceroute_********_\+ Ports Scanner_********_\+ Whois Query_********_\+ LAN Scanner_********_\+ Telnet Client_********_\+ SSH - Secure Shell_********_\+ FTP Client_********_\+ WiFi Scanner & Analyzer_********_\+ UPnP / DLNA Scanner_********_\+ NSD - Network Service Discovery_********_\+ Nmap Scanner (Network Mapper V. 7.31)_********_\+ Packet Capture (tcpdump V. 4.9.2) - Root needed_********_\+ Netcat (V.1.1.0) & Netcat (V.6)_********_\+ iPerf 2 (V.2.0.5) & iPerf 3 (V.3.5)_********_\+ Network Stress Tester_********_\+ SSL/TLS Scanner & Analyzer_********_\+ Web Crawler_********_\+ ARP & ND Cache_********_\+ NetStat Info_********_\+ IP Calculator_********_\+ IP Lookup_********_\+ DNS Lookup_******_\+_** ****_Finger Client_********_\+ Wake on LAN_********_\+ Add Devices and group in categories_********_\+ Add Categories_********_\+ Add Devices Information_********_+Protect devices secti_**on with password**
    
5. [**HTTrack**](https://play.google.com/store/apps/details?id=com.httrack.android) - is a free software (GPL) offline browser utility, allowing you to download (copy) a website from the Internet to a local directory, building recursively all directories, getting HTML, images, and other files from the server to your device. arranges the original site's relative link-structure. Simply open a page of the "mirrored" website in your browser, and you can browse the site from link to link, as if you were viewing it online.  
    HTTrack can also update an existing mirrored site, and resume interrupted downloads. This app helps you download potential/required sites for phishing attacks, plus other uses.
6. **[LanDroid](https://play.google.com/store/apps/details?id=net.fidanov.landroid)** - One thing i have learnt the hard way is that you can never have enough network tools and scanners. This is the same as Fing and Network Manager only that it has a few additions of network tools.**  
    Features:-**  
    **_\+ LocalNet - Local Interfaces, Routing and WiFi information  
    \+ PublicIP - Displays your real IP and extra information  
    \+ IP Lookup - Shows Country,ISP,Network,ASN and RIR  
    \+ DNS Lookup (using fixed remote server)  
    \+ Whois  
    \+ Ping  
    \+ TraceRoute  
    \+ NetStat - Shows active and listening connections  
    \+ ARP & ND Cache  
    \+ PortScan (tcp)  
    \+ DNSBL - Query IP in spam blacklists  
    \+ MAC Lookup - Find vendor/manufacturer name by MAC address  
    \+ IP Calc - IP Network Calculator  
    \+ WakeOnLan  
    \+ SSL Check  
    \+ Adjustable font size  
    \+ AutoComplete from history  
    \+ Full IPv6 support_**
7. **[Kayra The Pentester Lite](https://play.google.com/store/apps/details?id=teycode.kayralite)** - Kayra is a web application vulnerability scanner and a penetration tester. It is capable of scanning a broad spectrum of known vulnerabilities in web applications and websites.  
    **Key Features:  
    _\+ Your device does NOT have to be rooted in order to use Kayra! All of the test suites included are written as native Android routines.  
    \+ Kayra does not send or save your data in external containers such as storage servers or cloud systems. This provides data confidentiality for the users.  
    \+ Kayra does not use scripts written by other developers without their consent and it does not contain any copyrighted content.  
    \+ The test list include a variety of tests ranging from simple directory enumerators to complex HTTPS protocol testers.  
    \+ Kayra can work in background too! It will warn you when the test is finished.  
    \+ The framework runs tests in parallel connections with a large pool of threads to provide quickest results.  
    \+ You can mail the results to your e-mail address or save the results to your smartphone for later use.  
    \+ Kayra will always be updated regularly and will include new tests._**  
    
8. [**Low Orbit Ion Cannon(LOIC)**](https://play.google.com/store/apps/details?id=com.genius.rifatrashid.loworbitioncannon) - is a simple application that allows users to send UDP, HTTP, or TCP data packets to any IP address. LOIC can help users with testing server data flow by emulating controlled traffic flow. Since LOIC supports all three socket protocols (UDP, TCP, and HTTP), LOIC could thus be used with any type of server. It is basically a DOS tool. It does this by flooding a network or website with packets and traffic until the receiver denies incoming packets/traffic.  
    **Features:  
    _\+ Full control over traffic flow  
    \+ Send data packet to any IP address  
    \+ Various methods to send data packets (HTTP, UDP, or TCP)  
    \+ Retrieve IP address from any real web-address  
    \+ Send data packets to any port  
    \+ Fast and efficient compared to other leading apps_**
9. **[Cryptography](https://play.google.com/store/apps/details?id=com.nitramite.cryptography)** - This allows anyone with zero skills to encrypt, decrypt text, files,images and also learn about cryptography. It is a cipher, hashing, encoding and learning tool for all ages. Now from its tools, you can see why i wrote it here.  
    **Ciphers:-** _**Rot 1 - 25 cipher, Autokey cipher, Bacon Cipher, Chaocipher, Adfgvx cipher, Playfair cipher, Two-Square cipher (currently encrypt), Tri-Square cipher (currently encrypt), Four-Square cipher (currently encrypt), One-time pad, BIFID cipher, Trifid cipher, Hill Cipher with editable Matrix, Visual Cryptography, Enigma cipher with saveable settings, RSA cipher with custom keys, Blowfish cipher, Twofish cipher (next gen Blowfish), Threefish cipher, Rijndael (AES) cipher, SCrypt (Password-based key derivation function, in progress), Elliptic Curve Diffie-helleman AES, similar to Curve25519, algorithm, RC2, RC4, RC5, RC6, Triple DES, Serpent and SkipJack among many others**_  
    **Hashes:-** _**FCS-16 (hashing), HAS-160 (hashing), MD-2/4/5 (hashing), RIPEMD - 128 / 160 / 256 / 320 (hashing), SHA - 0 / 1 / 2-224 / 2-256 / 2-384 / 2-512 / 3-224 / 3-256 / 3-384 / 3-512 (hashing), Shake 128 / Shake 256, Tiger - T / T2 / 128 / 160 (hashing), SipHash hashing algorithm, Skein hash, Keccak hash, Argon2 hash. (remote api) and Blake2b, SM3 hash among many others.**_  
    **Encodings:-** _**Base32, Base64, Base85|Ascii85, Base91, Morse code encoder with sound playback, Braille, Semaphore, Tap Code, ASL (American Sign Language), Pigpen, Elian Script, Betamaze, A1Z26, T9**_  
    **Tools:-**  
    **_\+ Unknown cipher tool.  
    \+ WhatsApp message decipher tool.  
    \+ Anagram solver tool.  
    \+ Password generator tool.  
    \+ Checksum tool for text and files.  
    \+ Custom Hmac SHA 1/256 + SHA256 password authentication digest creator tool. (java|php examples)  
    \+ File Encryption Tool. Read tutorial from links which are included in explanation view or in tool question mark.  
    \+ Hash Cracker resources.  
    \+ Password Strength checker tool.  
    \+ Frequency Analysis.  
    \+ ASCII table (8-bit/255) with search function.  
    \+ Binary, Hexadecimal, Decimal and Octal table with search function.  
    \+ Text <> Binary converter.  
    \+ Decimal <> Binary converter.  
    \+ Hexadecimal <> Binary converter.  
    \+ Integer(number) <> Binary converter.  
    \+ Hex <> Ascii converter.  
    \+ Pseudo Random Number Generator (PRNG) with explanation.  
    \+ AFSK (Audio Frequency-shift keying) generator. Receiver comes in future releases.  
    \+ Steganography, encrypt decrypt tool in build.  
    \+ ASCII Font Art tool.  
    \+ Normal QR Code generator.  
    \+ Normal QR code reader (camera or image)  
    \+ Encrypted QR codes reader for supported ciphers.  
    \+ Nato phonetic alphabet.  
    \+ Includes link to very good online SHA1 cracker._**  
    **Algorithms:-**  
    **_\+ Blum Blum Shub generator.  
    \+ Haversine formula._**  
    Includes some other requested mysterious ciphers.
10. **[PreHack't](https://play.google.com/store/apps/details?id=bmobileSecurityApp.preHackt)** - the hacker toolbox, is an application specialized in cybersecurity. It is a useful application for penetration tester and Ethical hacker to perform many different types of analysis. This application is still in beta version, further tools will be added and existing tool will be upgraded as soon as possible.  
    It is divided in four main domains :  
     **_\+ Network Security  
     + Cryptography  
     + Overview_**  
    **Network Security:-**  
    **_\+ HTML Tags Analyzer  
    \+ File Analyzer  
    \+ Network Analyzer  
    \+ Network Mapping  
    \+ Port Scanner  
    \+ HTTP Header  
    \+ Traceroute  
    \+ SSL Check  
    \+ DNS Lookup  
    \+ Subnet Calculator  
    \+ MX Records  
    \+ IP Tracker  
    \+ WhoIs  
    \+ Ping_**  
    **Cryptography :**  
    **_\+ CryptoAnalyzer  
    \+ Cipher  
    \+ Hash  
    \+ Random List Generator_**  
    **Overview :**  
    **_\+ Device Overview  
    \+ Advance Network Overview  
    \+ Process List_**  
    This application also provide quick tools as the Port resolver and the Mac Address Lookup.                                           
11. **[Orbot](https://play.google.com/store/apps/details?id=org.torproject.android)** - is a free proxy app that empowers other apps to use the internet more securely. Orbot uses Tor to encrypt your Internet traffic and then hides it by bouncing through a series of computers around the world. Tor is free software and an open network that helps you defend against a form of network surveillance that threatens personal freedom and privacy, confidential business activities and relationships, and state security known as traffic analysis. Android 4.0 and lower, you can download older versions from **[guardianproject.info/releases/](https://guardianproject.info/releases/)** or through the FDroid.org open app store at **[Fdroid](https://f-droid.org)**. The last release with KitKat and older support is: **[Orbit v14.1.4.](https://guardianproject.info/releases/Orbot-v14.1.4-UpToKitKat-nonPIE.apk)** Orbot is the only app that creates a truly private internet connection. As the New York Times writes, “when a communication arrives from Tor, you can never know where or whom it’s from.” Tor won the 2012 Electronic Frontier Foundation (EFF) Pioneer Award.  
    Accept no substitute: Orbot is the safest way to use the Internet on Android. Period. Orbot bounces your encrypted traffic several times through computers around the world, instead of connecting you directly like VPNs and proxies. This process takes a little longer, but the strongest privacy and identity protection available is worth the wait. Any installed app can use Tor through Orbot's built-in VPN. Tor can help you confidentially research a competitor, get around someone blocking your favorite site, or circumvent a firewall to watch sports at work. Now for enhanced security and use download either [**Orfox**](https://play.google.com/store/apps/details?id=info.guardianproject.orfox) or [**Tor Browser(Alpha Stage)**](https://play.google.com/store/apps/details?id=org.torproject.torbrowser_alpha) from the Playstore. NOTE: This doesn't provide  100% anonymity, maybe 65%. For 75% download:
12. [**ProtonVPN**](https://play.google.com/store/apps/details?id=com.protonvpn.android) \- ProtonVPN is a community-supported VPN app brought to you by the same team that created [**ProtonMail**](https://protonmail.com/), the world’s largest encrypted email service. Our mission is to make advanced online privacy and security available to everyone. Install this VPN app now for free and use it to keep your IP address private, protect your Internet connection on public Wi-Fi, and access geo-restricted content. They never log user activity or share user data with third parties. Even if authorities request information on users’ online activity, they don't provide because they don't have it. It uses ciphers with Perfect Forward Secrecy, meaning your encrypted traffic cannot be captured and decrypted later, even if an encryption key gets compromised in the future. Unlike other VPN services, with ProtonVPN there’s no free plan trial period, and you can browse as much as you want. ProtonVPN is the ONLY free VPN that has no privacy-invading ads, no malware, no bandwidth limits, and does not secretly sell user data. Their free service is supported by paid plans, where users get more privacy features and access to faster, exclusive servers.
13. [**SSHDroid**](https://play.google.com/store/apps/details?id=berserker.android.apps.sshdroid) - is a SSH server implementation for Android.  
    This application will let you connect to your device from a PC and execute commands (like "terminal" and "adb shell") or edit files (through SFTP, WinSCP, Cyberduck, etc...) With this say goodbye to using cables. You can easily transfer payloads made by Metasploit in Termux to the computer or another phone.
14. **[1.1.1.1](https://play.google.com/store/apps/details?id=com.cloudflare.onedotonedotonedotone)** - the world’s fastest and safest DNS resolver. This app prevents your Internet Service Provider(ISP) from tracking you or watching what you are doing, it is a DNS server(Yellow pages or Contact Book of the Internet) that translates a websites IP address into what you see e.g. it translates **[74.125.224.72](http://74.125.224.72/)** this into **[google.com](http://google.com).** Most of the time you don't notice but this is how the internet works. It belongs to Cloudflare. Now you can configure your DNS on your own but that's for Tech savvy users. This app helps with that that. 1.1.1.1, the privacy-first DNS resolver is now available on the go. No one should be able to snoop 🔍 on what you do on the Internet. We’ve created 1.1.1.1 so that you can connect to the Internet securely anytime, anywhere. Visit [**https://1.1.1.1/**](https://1.1.1.1/)
15. **Hackode** - The hacker's Toolbox is an application for penetration tester, Ethical hackers, IT administrator and Cyber security professional to perform different tasks like reconnaissance, scanning performing exploits etc. This Application is still in beta version.  
    **This Application contains different tools like:  
    \+ Reconnaissance  
    \+ Google Hacking  
    \+ Google Dorks  
    \+ Whois  
    \+ Scanning  
    \+ Ping  
    \+ Traceroute  
    \+ DNS lookup  
    \+ IP  
    \+ MX Records  
    \+ DNS Dig  
    \+ Exploits  
    \+ Security Rss Feed  
    **
16. **[Wi-Fi Analyzer](https://play.google.com/store/apps/details?id=com.farproc.wifi.analyzer.classic)** - This is another network scanner and tool. Turns your android phone into a Wi-Fi analyzer!  
    Shows the Wi-Fi channels around you. Helps you to find a less crowded channel for your wireless router.
17. [**UserLAnd**](https://play.google.com/store/apps/details?id=tech.ula) \- The easiest way to run a Linux distribution or application on Android.  
    Features:  
    Run full linux distros or specific applications on top of Android.  
    Install and uninstall like a regular app.  
    No root required. There are two ways to use UserLAnd: single-click apps and user-defined custom sessions.  
    Using single-click apps:  
    1\. Click an app.  
    2\. Fill out the required information.  
    3\. You're good to go!

There you go. More will be coming(Version 2 for those who have rooted their devices), and to those wondering about the 3 threes(Privacy, Security and Anonymity Guide) It is coming soon. Just had delays, it's going to be a really long but very informative post. Keep watch. Hopefully it will be out before Christmas. Any ho! Hope you have a wonderful day!

> KIND REMINDER: _**Please know all written here is for educational purposes! I will not be held responsible for any damage done to you or any network or device.  Leave it to the professionals, white hats and true ETHICAL hacking enthusiasts! Therefore NO SCRIPT KIDDIES. Do not do any kind of hacking/pentesting to anyone's network or computer, unless given written permission and consent to do so. To be on safer ground use softwares like**_ **_Vmware Workstation/Player and Virtual Box to virtualize android, windows and other operating system_**. _Links_ _to_
> 
> _Vmware Workstation Pro(PAID SOFTWARE):_ [**https://www.vmware.com/products/workstation-pro.html**](https://www.vmware.com/products/workstation-pro.html)
> 
> _Vmware Workstation Player:_ [**https://www.vmware.com/products/workstation-player.html**](https://www.vmware.com/products/workstation-player.html)
> 
> _Virtual Box:_ [**https://www.virtualbox.org/**](https://www.virtualbox.org/)
> 
> **_Then use that to practice. e.g._** 
> 
> Stay Safe, Stay Legal, Keep Practicing, Remember Practice Makes Perfect!  

![My VMware Workstation Picture With 8 Operating Systems](images/capture.jpg)

I am currently running Remix OS(Android), Metasploitable2(Vulnerable Linux Server), Windows 7(For Pentesting and Opening Suspicious files safely), Bitnami (WordPress -This site but version 2)That will be out once i get enough donations to get a hosting service. Kali Linux OS-for more advance pentesting and hacking. Among many others Soon to add Ubuntu, AOPP and Windows Vista, Xp, 10. I advise people to do this and download Windows Server 2012 or 2010. This is good for practicing safely without causing irreversible damage or getting arrested.
