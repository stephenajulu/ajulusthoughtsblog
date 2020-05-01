---
title: "Detect Rootkits In Kali Linux"
date: "2019-05-29"
---

## What is a Rootkit?

A rootkit is a clandestine computer program designed to provide continued privileged access to a computer while actively hiding its presence. Rootkits are generally associated with malware – such as Trojans, worms, viruses – that conceal their existence and actions from users and other system processes.

You can see in this scene of Mr. Robot, that he tries to check for rootkits not knowing that it's his monitor being captured. (Don't Mind The Video's Title, Probably an average user who couldn't tell what was being done)

https://www.youtube.com/watch?v=Hvphe2QWraE

### Rootkit Detection

#### **chkrootkit**

Install : **apt-get install chkrootkit** (comes pre-installed)

**Commands:**

**chkrootkit -h** : help menu

**chkrootkit** : starts the checking process

#### **rkhunter**

Install : **apt-get install rkhunter**

**Commands:**

**rkhunter** : help menu

**rkhunter -c** : checks local system

**rkhunter –update** : updates the rootkit database

Source: [Hackersploit](https://hsploit.com/)
