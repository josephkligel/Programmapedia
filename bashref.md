# Reference for UNIX Commandsi
---
## Linux Boot Process
1. Boot
	+ Linux boot process: Firmware, Bootloader, Kernel, Initialization

2. Config Files
	+ UEFI: /boot/efi/EFI/redhat/grub.efi
	+ BIOS: /boot/grub2/grub.cfg

3. Kernel
	+ Kernel loads the ramdisk into ram
	+ Kernel loads device drivers and config files from ramdisk
	+ Kernel unmounts ramdisk and mounts root file system
	+ Starts the initialization state

4. Initialization
	+ Kernel starts the grandfather process (systemd)
	+ Systemd starts system services, starts login shells and GUI interface

## Terminal Controls
Key controls to interact with terminal
#### Keyboard Shortcuts
	+ ^C: stop process
	+ ^A: beginning of line
	+ ^E: end of line
	+ ^U: delete to beginning of line
	+ ^R: Check typed history in terminal
	+ ^L: Clear screen
	+ Up/down arrow: Scroll through previous commands	
	+ ⌃D: Exit terminal
	+ ^R: search previous commands interactively
	+ !!: run the previous command exactly as written
	+ !*: run the previous command that starts with a certain letter or word. A number will print out the command from that line number, e.g.'!1983' prints 'which curl'

## Basic Interaction
Set a variable: `x=1`
Erase variable: `unset x`

echo: `echo hello`
Use escape characters: `echo -e "this\tguy"`
Redirect to new file: `echo "str" > <file>`
Append to file: `echo "str" >> <file>`

pwd: print current working directory

curl: Downloads a file
Get ip address: `curl ifconfig.me`
Get geolocation: `curl http://api.geoiplookup.net/?query=\<Public\_IP\>`

ping: `ping \<url\>`

## Help Commands
man: Display manual page for command
Search for commands with a phrase or word: `man -k "system"`

whatis: one line summary of command
which: which directory is a program located at
whereis: where the program is located. Same as above
whoami: shows what user is logged in the current session
`<command> --help` or `help <command>`: to get basic list of commands
`command -v <commandname>`: Check to see if command is installed

## System
Switch to root user: `su`

Password commands
	* Change password for a user: `passwd <username>`
	
User Commands
	+ Add User to sudoer file: `adduser <username>`

visudo: Sets password settings for users
	+ Add this to require no password for sudoing: `\<username\> ALL=(ALL) NOPASSWD:ALL`

ssh: connects to another linux system
	+ ssh using username and IPv4 address: `ssh joseph@10.0.0.155`
	+ enable ssh: `sudo systemctl enable ssh`

ps: Sees all the processes on the system
	+ All processes: `ps aux`
	+ All processes with a certain name:  `ps aux | grep spring`
kill: Kills program with pid
	+ Kill program:	`kill -15 4048`
pkill: kill all the processes matching a name
	+ Terminate code: `pkill -15 <program>` 
	+ Force terminate: `pkill -15 -f <program>`
	
historyprints the history of commands
	+ Get history of a command: `history | grep curl`

update-alternatives: lets you see the alternative of default programs
	+ See program alternatives: `<package manager>-alternatives --config x-terminal-emulator`

reset terminal: `reset`

df: Find out the available and used disk space
	+ -H: Human readable in 1000 numerical denominations
	+ -h: In 1024 numerical denominations
du: Analyze space usage
	+ Options: `du [-h|c|s] \<directory\>`
Memory usage: `free -m` or `cat /proc/meminfo`
top: check CPU, RAM, and processes

Trash: Deleting trash via bash
	+ Delete trash: `rm -rf ~/.local/share/Trash/*`

ln: Create symbolic links
	**Types of Symbolic Links**
	+ inode: pointer or number of a file on the storage device
	+ soft links: links that will be removed if linked files are removed or renamed
	+ hard links: Not affected by deletion or manipulator of linked files
	**Flags**
	+ no flags: makes hard symbolic links
	+ -s: makes soft symbolic links
	**Examples**
	+ no flags: `ln ~/Videos ~/Desktop/Videos`
	+ -s: `ln -s ~/Videos ~/Desktop/Videos`

mysql: Below are a few of the steps required to make sure mysql is installed correctly
	**Steps**
	+ password retrieval: "grep 'temporary password' /var/log/mysqld.log"

## File and Directory Manipulation and Interaction
Permissions: File and directory permission settings
	**Permission Types**
	+ r: read
	+ w: write
	+ x: executable
	**User Levels**
	+ u: user
	+ g: group
	+ o: other/everyone on the system
	**Examples**
	+ Change permission file or directory: chmod <filename>
	+ Change ownership for file: chown <username> <filename>

diff: compares files that are similar

ls: lists the files in current directory.
	**flags**
	+ -a:	 shows all files
	+ -1:	 shows simple list, 
	+ -l:	 shows read write capabilities of files, 
	+ -rtl:	 for list by reversed time of modification long format, 
	+ -h:	 for human-readable version of list, 
	+ -I: ignores a string. For example, `ls -I "s*"`

touch: create an empty file
mkdir: make empty directory
cd: change directory
mv: mv to rename a file or move it to a new location
cp: cp to copy a file
rm: Remove a file                        
head of file (first 10 lines): `head <file>`

tail of file (last 10 lines): `tail <file>` 
	**Flags**
	+ -f:	allows you view an actively changing file.
	+ -1:	last line. 1 can be replaced with any number

wc: wordcount of file. From left to right, the output is lines, words, and bytes.
	**Flags**
	+ -l: counts lines
	+ -m: counts characters

|: pipe is used for piping the results of another command
tee: `ls | tee output.txt`
	**Flags**
	+ -a: append
more: lets you navigate through a file page by page
	**Examples**
	+ spacebar: to go to next page

less: lets you navigate through a file
	**Commands inside less**
	+ up & down arrow keys:	Move up or down one line
	+ spacebar:		Move forward one page
	+ Ctrl###F:			Move forward one page
	+ Ctrl###B:			Move back one page
	+ G:			Move to end of file
	+ 1G:			Move to beginning of file
	+ /\<string\>:		Search file for string
	+ n:			Move to next search result
	+ N:			Move to previous search result
	+ q:			Quit less

## Regular Expressions and String Manipulation

Wildcards in regular experessions
	**Expressions**
	+ '.': Any character
	+ '*': Any number of characters, including no characters
	+  '?': A single character
	+  []:  A range of characters
	**Examples**
	+ '*.txt': to list all the files with a .txt extention

Unicode characters
Saved unicode characters
	**Examples**
	+ Γ - gamma: '^C+Shift+u+0393'
	+ ϐ - beta: '^C+Shift+u+3d0'
	+ Σ - Uppercase Sigma: '^C+Shift+u+03A3'

sed: Used with regex to manipulate text
	**Flags**
	+ -i: insert into file
	+ No `-i`: prints temporary changes to standard output
	**Expressions**
	+ ^: beginning of line
	+ $: end of line
	+ s/: substitute characters
	+ \s: whitespace
	+ '.': any character
	+ '*': any numbers of characters
	+ g: for multiple instances of replacement
	+ d: to delete
	+ p: to print when read by sed expression
	**Examples**
	+ ^: `sed -i '/^$/ d' test.txt`
	+ $: `sed -i '$a PATH=NULL' /etc/profile`
	+ s/: `sed -i 's/a/A/g' test.txt`	 

grep: used to search for a substring in a file
	**Flags**
	+ -i:	for non case-sensitive searchs
	+ -n:	to display the line numbers of a file

awk: used to print of parts of text
	**Examples**
	+ Print first column from file: `awk '{print $1}' <filename>`

## Search Commands
find: `find ./ -iname foo*.*`

locate: `locate foo*.*`

