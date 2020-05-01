---
title: "How to Turn an Android Phone into a Hacking Device Without Root"
date: "2019-06-09"
---

Hey guys, how are you? I am back again with another post. You can also check out my previous post on "[Using Android as a Hacking Platform: No Root](https://ajulusthoughts.wordpress.com/2018/12/11/using-android-as-a-hacking-platform-no-root/)". It has hit! With more than 23 hits each day since i posted it. So far it has gained 1,278 views.

Now it’s possible to open your Linux command prompt on your Android phone to get some things done. Usually installing Linux on Android phones needs rooting your device. But now.....

With just a few taps, an Android phone can be weaponized into a covert hacking device capable of running tools such as Nmap, Nikto, and Netcat — all without rooting the device.

[UserLAnd](https://github.com/CypherpunkArmory/UserLAnd), created by [UserLAnd Technologies](https://userland.tech/), is a completely free Android app that makes installing Linux distributions quick and effortless, without any rooting. With this, it’s possible to run an [ARM64 Debian](https://wiki.debian.org/Arm64Port) operating system alongside the current Android OS. Sometimes referred to as “AARCH64,” this ARM architecture is the same used by the [Kali Linux Raspberry Pi ARM images](https://www.offensive-security.com/kali-linux-arm-images/), which makes it easy to import Kali’s tool repository. And best of all, the UserLAnd team recently added a dedicated Kali filesystem so importing repositories won’t be necessary for all users.

![](images/phone-feature.d3014400.gif)

All of the created filesystems are easily disposable. While many Kali tools work without issues, UserLAnd is still a new project and may cause some tools ([like Nmap](https://github.com/CypherpunkArmory/UserLAnd/issues/385)) to break or fail when executing certain commands. It’s worth mentioning, these issues will likely be resolved in the near future.

For the technically inclined, UserLAnd [utilizes](https://www.youtube.com/watch?v=PdVmfAD2T54) custom scripts and executables that allow it to create the Debian and Ubuntu filesystems. One example of this is [PRoot](https://proot-me.github.io/), an [open-source software](https://github.com/proot-me/PRoot) that implements functionalities similar to [chroot](https://www.computerhope.com/jargon/c/chroot.htm). PRoot allows you to execute programs with an alternative root directory, no root needed. Normally, a [user-space](https://unix.stackexchange.com/questions/87625/what-is-difference-between-user-space-and-kernel-space) application will communicate directly with the Kernel through [system calls](https://en.wikipedia.org/wiki/System_call). With UserLAnd, PRoot is running in the background, interpreting these system calls, and it will perform and manipulate them when necessary to emulate users and permissions in the filesystem.

We’ll start by installing an SSH client, which will be the primary app for interacting with the Debian OS. Then, I’ll walk through some OS setup tips and importing the Kali Linux repository to really turn Android into a hacking device. As some readers may know, Kali Linux is based on the Debian operating system, so importing their repository won’t cause anything to break or become unreliable.

![](images/phone-feature-horizontal.be4009ad.gif)

## Step 1: Install the ConnectBot App (Optional)

UserLAnd recently added a built-in SSH functionality, so this step is no longer required. However, third-party SSH clients can still be used if preferred.

[ConnectBot](https://connectbot.org/) is an [open-source](https://github.com/connectbot) SSH client designed for Android smartphones, which allows you to securely connect with SSH servers. This will be the primary way of interacting with the new UserLAnd Debian operating system. If you don’t use or have access to Google Play, ConnectBot is available via the [F-Droid repository](https://f-droid.org/).

- **Play Store Link: [ConnectBot](https://play.google.com/store/apps/details?id=org.connectbot) (free)**
- **F-Droid Link: [ConnectBot](https://f-droid.org/packages/org.connectbot/) (free)**

![](https://i2.wp.com/img.wonderhowto.com/img/75/02/63684544346074/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=490%2C186&ssl=1)

[JuiceSSH](https://play.google.com/store/apps/details?id=com.sonelli.juicessh&hl=en_US) is also a very good option to use instead of ConnectBot since it has more features, so you can use that if you’d rather. ConnectBot is more regularly updated and easier for beginners, so we went with that.

## Step 2: Install the UserLAnd App

I’ve already covered what UserLAnd is and does above, so I won’t go over anything else in detail here. The important thing is that you install it, and you can do so using either Google Play or F-Droid.

- **Play Store Link: [UserLAnd](https://play.google.com/store/apps/details?id=tech.ula) (free)**
- **F-Droid Link: [UserLAnd](https://f-droid.org/packages/tech.ula/) (free)**

![](https://i0.wp.com/img.wonderhowto.com/img/59/80/63684544601996/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=546%2C210&ssl=1)

Disclaimer: UserLAnd does have limitations. Without root access, Android’s Wi-Fi interface can’t be switched into monitor mode, so traditional Wi-Fi hacking tools like Aircrack-ng won’t work. However, there’s still a lot that can be done with UserLAnd, as you’ll see in future guides, and running Kali without rooting or wiping the Android OS is no easy achievement. So be sure to give the UserLAnd app a good rating on Google Play — the developers totally deserve some positive feedback.

## Step 3: Create a New Filesystem

When the installation is complete, open UserLAnd, and view the “Apps” tab. Refresh the tab and wait a few minutes for the distributions to populate.

The Kali Linux OS has recently been added to the list of available distributions. Select “Kali” or “Debian” and the UserLAnd app will prompt for credentials. Create a username, password, and VNC password. The “Password” will allow access to the SSH server started when the filesystem is finished installing. The “VNC Password” won’t be used in this tutorial but is required to proceed with the installation.

![](https://i0.wp.com/img.wonderhowto.com/img/83/85/63682308217661/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=256%2C441&ssl=1)

![](https://i0.wp.com/img.wonderhowto.com/img/78/54/63684474970332/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=260%2C449&ssl=1)

UserLAnd [will then download](https://img.wonderhowto.com/img/original/89/11/63676930363763/0/636769303637638911.jpg) the necessary executables and scripts from its GitHub repository that are used to create the filesystems. The time it takes to download and extract the required assets will vary based on the Android CPU and internet connection speed. The installation process took up to 20 minutes to complete in some tests, so be patient.

In my first attempt, UserLAnd returned the following “[Could not extract filesystem. Something went wrong](https://github.com/CypherpunkArmory/UserLAnd/issues/369)” error. Removing and reinstalling the UserLAnd application seemed to resolve the issue. If this error persists, [open a new GitHub issue](https://github.com/CypherpunkArmory/UserLAnd/issues/).

## Step 4: Interact with the Filesystem

When the installation is complete, head over to the “Sessions” tab, and select the newly created option. UserLAnd will automatically attempt to open ConnectBot and ask “Are you sure you want to continue connecting?” Tap “Yes,” and enter the password created in the previous step.

![](https://i1.wp.com/img.wonderhowto.com/img/41/99/63684545118465/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=250%2C431&ssl=1)

[![](https://i2.wp.com/img.wonderhowto.com/img/26/55/63684545108512/0/android-for-hackers-turn-android-phone-into-hacking-device-without-root.w1456.jpg?resize=250%2C431&ssl=1)](https://i2.wp.com/img.wonderhowto.com/img/original/26/55/63684545108512/0/636845451085122655.jpg?ssl=1)

At this point, syncing a Bluetooth keyboard to the phone will make setting up the OS easier, but isn’t required. If you don’t use a Bluetooth keyboard, I recommend installing [Hacker’s Keyboard](https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard) from the Play Store, and you’ll see why as we continue.
