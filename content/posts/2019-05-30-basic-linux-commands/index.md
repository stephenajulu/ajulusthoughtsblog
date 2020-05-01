---
title: "Basic Linux Commands"
date: "2019-05-30"
---

## **Terminal Navigation Commands**

Before you can really make full use of the terminal, you’ll need to know how to navigate it. Two things are true of the Linux command line: one, there are thousands of possible commands you can use at any given time, and two, you’ll only end up using a fraction of them. Despite the power offered, most of us just repeat the same commands over and over again. A lot of people still see Linux as a difficult operating system used only by hardcore geeks who have a bazillion commands memorized, but that’s simply not true. If you can learn the most-used commands, you’ll have a perfectly fine time in Linux — even as a total newbie.

- **&&** — This one is so basic that it’s not even technically a command. If you ever want to run multiple commands in sequential order, just stick this in between each one. For example, `[command1] && [command2]` will first run \[command1\] then immediately follow it with \[command2\]. You can chain as many commands as you want.
- **!** — Repeats a recently used command. Best to use it in conjunction with the `history` command. You can use `!n` to repeat the n-th command in history. You can also use `!-n` to repeat the command that happened n commands ago.
- **[cd](http://ss64.com/bash/cd.html)** — Changes the current terminal directory.
- **clear** — Clears the terminal screen.
- **[history](http://ss64.com/bash/history.html)** — Displays a list of all recently used commands. You can also cycle through recently used commands by pressing the Up and Down arrow keys in the terminal.
- **[ls](http://ss64.com/bash/ls.html)** — Displays a list of all files in the current terminal directory. You can modify it with parameters to specify some other directory or to change the format of the list.
- **man –** There’s a running gag in the Linux community that _man_ is the only command you need to know. It stands for _manual_, and it will give you detailed information on commands and aspects of Linux.
- **reboot –** Immediately stops all running processes, shuts down the system, then reboots.
- **shutdown –** Stops all running processes and shuts down the system. Parameters can be specified to issue a delayed shutdown or a shutdown at a particular time.
- **[man](http://ss64.com/bash/man.html)** — Displays a help page (from the manual) based on your search query. Very useful for learning how to use a command you don’t recognize or when you forget the parameters for an infrequently used command. If you’re ever confused, turn to man.
- **[pwd](http://ss64.com/bash/pwd.html)** — Displays the current terminal directory as an absolute path.
- **whatis** — Displays brief descriptions of command line programs. Think of it like a simplified version of `man` when you aren’t sure what a command does but don’t need the full manual on how to use it.

## **File Management Commands**

Most Linux distros come with a graphical desktop environment, and no matter which desktop environment you choose to use, you’ll be able to browse and manage files in the same way you would on Windows or Mac — but for complex tasks, it’s often easier and faster to use the command line.

- **[cat](http://ss64.com/bash/cat.html)** — When used on a single text file, it will display the contents of that file. When used on two or more text files, it will display all of their contents in sequential order. Use the redirection operator (“**\>**“) to combine multiple text files into one text file.
- **[chmod](http://ss64.com/bash/chmod.html)/[chown](http://ss64.com/bash/chown.html)** — The `chmod` command changes the read, write, and execute permissions of a file while the `chown` command changes the user and/or user group that owns a file.
- **[cp](http://ss64.com/bash/cp.html)** — Makes a copy of a file. By default, the copy appears in the current terminal directory, but you can also specify the destination directory as well.
- **[find](http://ss64.com/bash/find.html)** — Searches a specific directory (or your entire system) to find files that match a given set of criteria. There are dozens of options, including filename, filetype, filesize, permissions, owners, date created, date modified, etc.
- **[grep](http://ss64.com/bash/grep.html)** — Searches a specific file or set of files to see if a given string of text exists, and if it does, tells you where the text exists in those files. This command is extremely flexible (e.g. use wildcards to search all files of a given type) and particularly useful for programmers (to find specific lines of code).
- **[locate](http://ss64.com/bash/locate.html)** — Searches the entire system for files or directories that match the search query, then outputs the absolute paths for each match. By default, it only searches in directories for which you have permissions. This is the simplest and fastest way to find a file.
- **[mkdir](http://ss64.com/bash/mkdir.html)/[rmdir](http://ss64.com/bash/rmdir.html)** — Creates or deletes a directory, by default in the current terminal directory but a target directory can be specified as well. When deleting, the directory must be completely empty.
- **[mv](http://ss64.com/bash/mv.html)** — Moves a file from one directory to another, and you can specify a different name for the file in the target directory. You can use this command to rename a file by moving it to the same directory but with a different filename.
- **nano/emacs/vim** — The three main terminal text editors that exist on nearly all Linux systems, ordered by increasing complexity. Newbies should stick to `nano` as both `emacs` and `vim` are wildly complex (and wildly powerful).
- **[rename](http://ss64.com/bash/rename.html)** — Changes the name of a file or a set of files. Comes with a lot of interesting parameters, allowing you to automatically rename a bunch of files according to a pattern.
- **[rm](http://ss64.com/bash/rm.html)** — Removes files. With a certain parameter, it can be used to wipe the entire contents of a specified directory. It can also be used to delete several files that all match a certain filename pattern.
- **[touch](http://ss64.com/bash/touch.html)** — Changes the date accessed or date modified of the given file to right now.
- **wget** — Downloads the file or page at the given web URL.
- **[zip](http://ss64.com/bash/zip.html)/[gzip](http://ss64.com/bash/gzip.html)/[tar](http://ss64.com/bash/tar.html)** — Various formats for compressing and decompressing file archives.
- **ftp / sftp –** Connects to a remote FTP server in order to download multiple files.
- **wget –** Downloads files from the Internet at the specified URL to your system.

## **System Management Commands**

Again, most Linux distros provide a graphical way to manage your system settings, but you may find it easier (and perhaps even more informative) to use these time-tested commands instead. Indeed, these commands tend to offer a lot more power in terms of what you can do.

- **apt** — While `apt` isn’t a command in itself, there are three commands that you must know to make full use of APT: `add-apt-repository` (for locating third-party packages), `apt-get` (for actually installing packages), and `apt-cache` (for searching your repositories).
    - If your distro doesn’t use APT, it may use YUM, RPM, or some other alternative. Look into their equivalent commands.
    - **yum –** Yellowdog Updater, Modified. An open source package manager used to easily install software packages from repositories. Available on RPM-compatible Linux distributions.
- **[bg](http://ss64.com/bash/bg.html)/[fg](http://ss64.com/bash/fg.html)** — Sends a foreground job to run in the background or a background job to run in the foreground. For more on jobs, see the `jobs` command.
- **[df](http://ss64.com/bash/df.html)** — Displays how much space is used and free on your system.
- **free** — Displays how much RAM is used and free on your system.
- **[ip](http://ss64.com/bash/ip.html)** — Displays useful network details such as your IP address, network interfaces, bandwidth usage, and more. Can also be used to configure network-related settings.
- **[jobs](http://ss64.com/bash/jobs.html)** — Displays all current jobs and their statuses. A job is just a representation of a running process or group of processes.
- **[kill](http://ss64.com/bash/kill.html)/[killall](http://ss64.com/bash/killall.html)** — You can use `kill` to end a process according to its process ID (often used in conjunction with the `ps` command) whereas you can use `killall` to end all processes whose names match your query.
- **[mount](http://ss64.com/bash/mount.html)/umount** — Attaches and detaches a separate filesystem to your system’s main filesystem. Mostly used to make external devices, like hard drives or USB drives, interactable with your computer. **[ps](http://ss64.com/bash/ps.html)** — Displays a list of currently running processes. By default, it only lists processes started under your current user, but parameters exist to find and filter all kinds of processes.
- **[sudo](http://ss64.com/bash/sudo.html)/gksudo** — Prepending `sudo` allows you to run any command as superuser (e.g. `sudo [command1]`). If you want to run a graphical program with superuser privileges, use `gksudo` followed by the executable file for the program.
- **[top](http://ss64.com/bash/top.html)** — Displays a list of currently running processes, sorted by how much CPU each processes uses. Unlike `ps`, this command regularly updates in real-time. Basically a terminal equivalent to Task Manager.
- **[uname](http://ss64.com/bash/uname.html)** — Displays core system information depending on the parameters you use, such as kernel name and version, machine hardware, and operating system.
- **uptime** — Displays time elapsed since last boot.
- **[whereis](http://ss64.com/bash/whereis.html)** — Finds the location of the executable file for a given program.
- **[whoami](http://ss64.com/bash/whoami.html)** — Displays the current user name. Comes in handy when you’re switching between users with the `su` command and you lose track of who you are at the moment.
- **date –** Prints out the current system date and time. Specified parameters can change the format of the output.
- **hostname –** Displays the name of the current host system.
- **ps –** Displays information about all of the processes currently running on the system.
- **quota –** Displays disk limits and current disk usage for a specified user. Useful when there are multiple users assigned to a particular system.

### Important information about the Linux terminal

There is not a single Linux distribution, as far as we know, that doesn't have a terminal of some kind. On the contrary, there are a few distributions that don't have a GUI by default, and everything is done on the command line.  
To open a terminal quickly from the GUI, the shortcut **Ctrl+Alt+T** will work on most distributions and desktop environments.

This is the basic anatomy of most Linux commands:

\[sudo\] **command** \[optional switch\] \[file or directory path\]

Using **sudo** will run any command with administrative rights. Most Linux commands that have to deal with system files and installation/uninstallation of programs demand sudo.

### The linux commands are case-sensitive

It is important to remember that everything written in the terminal is case-sensitive. When the command is "sudo", neither "Sudo", "SUDO", nor "sUdO" will work.  
Most Linux commands are lowercase, but there are capitalized switches, such as "chown -R".  
The file and directory names are also case-sensitive. "File1" and "file1" are different files, even if they are in the same directory.

### Beware of spaces

Spacing is equally important. "chown-R" will only return an error. If we want to create/access/delete a file or directory that has a space in the filename, we can either put the whole filename inside quotation marks......or "escape" the space using the backslash "\\".  
If we did neither, the particular mkdir command, which creates directories, would create two directories, "Folder" and "Name". Other Linux commands would just fail.

### Finding previous Linux commands

Pressing the Up keyboard key will cycle through the last Linux commands we successfully used, in order. No failed commands will show here.  
We can also use the **history** command to see all the Linux commands we have ever used on the terminal.

### The invisible password

When we are asked for our password, e.g. after we used "sudo", as we type the password nothing will show on screen, no stars or dots or anything. We just type the password and press Enter.

### Use Tab to autocomplete

The Tab button on the keyboard is a huge time saver on Linux commands, as it will automatically fill in the names of files and directories.  
If we want to delete a file named "whydidIgivethisfilesuchalongname", we just need to type "rm w" and pressing Tab will automatically complete the rest of the filename.  
If there are more than files that begin with the same letters, e.g. "whydidIgivethisfilesuchalongname" and "whydidIeatsomuch", pressing Tab on "rm w" will autocomplete the common "whydidI".  
We then need to type an additional character - "g" or "e", in the example - and press again Tab for the auto completion to resume.

### Copying and pasting Linux commands

To copy or paste on the terminal, Ctrl+C and Ctrl+V won't work.  
Instead, we must use Ctrl+Shift+C and Ctrl+Shift+V. Or we can right click and use the commands from the context menu.

### Wildcards

While using Linux commands, the characters "?" and "\*" are wildcards.  
"?" will replace any single character. So, if we have two files names test1file and test2file, we can delete them both with "rm test?file". But this won't delete test12file.  
"\*" will replace any string of characters. "rm test\*file" will delete test1file, test12file, testBLABLABLAfile. It will also delete any other filename that begins with "test-" and ends in "-file", including testfile.

It is obvious that we must be extremely careful when combining deletion commands with wildcards. "rm \*" will delete every file in the current directory, and it won't use Trash.

### What to do with commands that return too many results

If we run "ls" on a directory with 1,000 files, or we use "locate \*.png" on a disk with lots of png pictures, we will get too many results.

In this case, we can use a pipe with the vertical bar "**|**" symbol (accessible with "Shift + \\" ) and **more** or **less**.

With **locate \*.png | more** we will get the results page by page, and we can reveal the next pages by pressing space. We quit by pressing "q".

With **locate \*.png | less** we will still get the first page of results, but navigate up and down with the arrow keys. Again, we quit with "q".

### Directory access shortcuts

When we want to navigate to a particular directory or access a specific file, it's handy to keep in mind the following shortcuts.

- **"~"** represents our personal /home directory, e.g. **cd ~** and **cd ~/Documents**
- **".."** represents the parent directory, i.e. the directory that contains the one we currently are. If we are at /home/test/public and type **cd ..** it will take us to /home/test/
- We can also use the full path to change to a particular directory, e.g. **cd /home/test/public/**. The Tab button can help us every step of the way to autocomplete the directories.

## **See Which Commands You Use the Most**

How do your own Linux terminal habits reflect these commands? If you want a definitive answer, it’s actually quite simple to see your personal most-used commands, and we can see what they are by using one of the commands mentioned above:

history | awk '{print $2}' | sort | uniq -c | sort -rn | head -10

The pipe character (“**|**“) takes the output of the command on its left and uses it as input for the command on its right. This is basically a chain of commands that one-by-one manipulate the output of the `history` command to count how many times each command is used, then sorts the list, then limits it to the top 10.

Pretty nifty, but loses accuracy every time you clear your Bash cache.

Anyway that's all for today guys. Have a wonderful day.
