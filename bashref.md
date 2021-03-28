# Reference for UNIX Commands

## Files

- /bin/bash: The bash executable

- /etc/profile: The system-wide initialization file, executed for login shells

- ~/.bash\_profile: The personal initialization file, executed for login shells

- ~/.bashrc: The individual per-interactive-shell start-up file

- ~/.bash\_logout:	The individual login shell cleanup file, executed when a login shell exits

- ~/.inputrc: Individual read-line initialization file

## Commands

- terminal controls: Key controls to interact with terminal
	### Various Controls
	- ^C: stop process
	- ^A: beginning of line
	- ^E: end of line
	- ^U: delete to beginning of line
	- ^R: Check typed history in terminal
	- ^L: Clear screen
	- Up/down arrow: Scroll through previous commands	
	- ⌃D: Exit terminal
	- ^R: search previous commands interactively
	- !!: run the previous command exactly as written
	- !*: run the previous command that starts with a certain letter or word. A number will print out the command from that line number, e.g.'!1983' prints 'which curl'

- su: Become root
	### Examples
	- 'passwd <username>': to change password for username
	- 'adduser <username>': add user to sudoer file

- visudo: add user and change password settings
	### Examples
	- '<username- ALL=(ALL) NOPASSWD:ALL': to require no password for sudo commands

- Permissions: file and directory permission settings
	### Permission Types
	- r: read
	- w: write
	- x: executable
	### User Levels
	- u: user
	- g: group
	- o: other/everyone on the system
	### Examples
	- Change permission file or directory: chmod <filename>
	- Change ownership for file: chown <username> <filename>

- nano:	Most user-friendly editor
	### Shortcuts
	- Redraw editor when text overlaps: ^L
	- M-Shift-3 or M-#: Toggles line numbering
	### Flags
	- +16:	goes to line 16, e.g. 'nano +16 pyindex.txt'

- echo <string>:		Print string to screen
	### Flags and arguments
	- -e:	allows you to add non-characters such as tabs
	- '\t':	backslash 't' to add tab. example -- echo -e "\t"
	- '\n':	new line character
	### Examples
	- echo "str" - <file>:	redirects string to a newly created file
	- echo "str" >- <file>:	appends a string to an existing file

- Help Commands:
	### Examples
	- man:		Display manual page for command
	- whatis:		one line summary of command
	- which:		which directory is a program located at
	- whereis:	where the program is located. Same as above
	- whoami:		shows what user is logged in the current session
	- <command- --help: list options and other info for a command
	- command -v <commandname>: Check to see if command is installed
	### Flags
	- -k:	to search, e.g. 'man -k "grep"'

- diff:	compares files that are similar

- ls: lists the files in current directory.
	### flags
	- -a:	 shows all files
	- -1:	 shows simple list, 
	- -l:	 shows read write capabilities of files, 
	- -rtl:	 for list by reversed time of modification long format, 
	- -h:	 for human-readable version of list, 
	- -ahrtl: for reverse, modified, human-readable, all list
	- -I: ignores a string. For example, 'ls -I "s*"' ignores all files that start with the letter s.

- touch:		create an empty file

- mkdir:		make empty directory

- cd:		change directory

- Wildcards:	Used in regular expression. Very useful
	### Expressions
	- '.': Any character
	- '*': Any number of characters, including no characters
	- '?': A single character
	- []:  A range of characters
	### Examples
	- '*.txt': to list all the files with a .txt extention

- mv:			mv to rename a file or move it to a new location

- cp:			cp to copy a file

- rm:			to remove a file. 
	### Flags
	- -f:	 to force
	- -r:	 to remove directory
	- -I:	 ask to remove recursively. Very useful

- pwd:			print current working directory

- curl:			download a file using a web address

- head:			shows first 10 lines of file

- tail:			shows last 10 lines of file. 
	### Flags
	- -f:	allows you view an actively changing file.
	- -1:	last line. 1 can be replaced with any number

- wc:		wordcount of file. From left to right, the output is lines, words, and bytes.
	### Flags
	- -l: counts lines
	- -m: counts characters

- |:		pipe is used for piping the results of another command

- tee:		simultaneous actions
	### Flags
	- -a: append

- ping:		sees if a server is working. The argument is a web address.

- less:		lets you navigate through a file
	### Examples
	- up & down arrow keys:	Move up or down one line
	- spacebar:		Move forward one page
	- Ctrl-F:			Move forward one page
	- Ctrl-B:			Move back one page
	- G:			Move to end of file
	- 1G:			Move to beginning of file
	- /\<string\>:		Search file for string
	- n:			Move to next search result
	- N:			Move to previous search result
	- q:			Quit less

- more:		lets you navigate through a file page by page
	### Examples
	- spacebar: to go to next page

- grep:			used to search for a substring in a file
	### Flags
	- -i:	for non-case sensitive searchs
	- -n:	to display the line numbers of a file

- awk:			used to print of parts of text
	### Examples
	- awk '{print $1}' <filename>: prints off the first column from the file

- ps:			to see all the processes on the system
	### Flags
	- aux:	example -- 'ps aux | grep spring' to see all the processes with spring in the program name

- kill:			eliminates an unwanted process. For example, 'kill -15 4048' kills chrome
	### Flags
	- -15:	UNIX terminate code

- pkill:			kill all the processes matching a name. For example, 'pkill -15 -f spring' kills all spring processes.
	### Flags
	- -15:	terminate code
	- -f:	force

- history:		prints the history of commands. For example, 'history | grep curl' prints out the history of 'curl' commands

- find:			find files & directories
	### Examples
	- 'find . -name foo*.*:	find a file that starts with foo within current directory

- locate:			find files & dir via database. Much faster. Have to update db with updatedb command periodically
	### Examples
	- locate <pattern>: locate foo*.*

- update-alternatives:	lets you see the alternative of default programs
	### Examples
	- apt-alternatives --config x-terminal-emulator:	lets you see the alternative termulators installed. Hyper is current default

- curl ifconfig.me:	lookup ip address

- curl http://api.geoiplookup.net/?query=\<Public_IP\>:     Looksup geolocation of ip address and spits out results in html

- reset:			re-initializes terminal

- df:			Find out the available and used disk space
	### Flags
	- -H:	Human readable

- du:			Analyze space usage
	### Examples
	- -du [-h|c|s] <directory>

- Trash:		~/.local/share/Trash/*
	### Examples
	- rm -rf ~/.local/share/Trash/*: to remove all files and folders in trash

- 'free -m', 'cat /proc/meminfo': check memory

- 'top':			check CPU, RAM, and processes

- ln:			Create symbolic links
	### Types
	- inode: pointer or number of a file on the storage device
	- soft links: links that will be removed if linked files are removed or renamed
	- hard links: Not affected by deletion or manipulator of linked files
	### Flags
	- no flags: makes hard symbolic links
	- -s:	makes soft symbolic links
	### Examples
	- no flags: ln ~/Videos ~/Desktop/Videos
	- -s: ln -s ~/Videos ~/Desktop/Videos

- sed:			Used with regex to manipulate text
	### Flags
	- -i: insert into file. No '-i' means it will only print temporary changes
	### Expressions
	- ^: beginning of line
	- $: end of line
	- s/: substitute characters
	- \s: whitespace
	- '.': any character
	- '*': any numbers of characters
	- g: for multiple instances of replacement
	- d: to delete
	- p: to print when read by sed expression
	### Examples
	- ^: sed -i '/^$/ d' test.txt
	- $: sed -i '$a PATH=NULL' /etc/profile
	- s/: sed -i 's/a/A/g' test.txt 

- mysql:			below are some steps to take to make sure it is installed correctly
	### Steps
	password retrieval: "grep 'temporary password' /var/log/mysqld.log"

- ssh:			connect to another linux system
	### Steps
	- ssh: 'ssh joseph@10.0.0.155'
	- enable: 'sudo systemctl enable ssh'

- Unicode characters:	remembered unicode characters
	### Characters
	- Γ - gamma: '^C+Shift+u+0393'
	- ϐ - beta: '^C+Shift+u+3d0'
	- Σ - Uppercase Sigma: '^C+Shift+u+03A3'

- variables: named values
	### Examples
	- x=1: Sets 'x' to the integer 1
	- 'unset x': x is no longer assigned a value. The variable is gone

- Boot: Linux boot process: Firmware, Bootloader, Kernel, Initialization
	### Config Files
	- UEFI: /boot/efi/EFI/redhat/grub.efi
	- BIOS: /boot/grub2/grub.cfg
	### Kernel
	- Kernel loads the ramdisk into ram
	- Kernel loads device drivers and config files from ramdisk
	- Kernel unmounts ramdisk and mounts root file system
	- Starts the initialization state
	### Initialization
	- Kernel starts the grandfather process (systemd)
	- Systemd starts system services, starts login shells and GUI interface
