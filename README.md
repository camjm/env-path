# env-path
Get info about the path environment variable.

## Background
PATH is an environment variable that specifies a set of directories where executable programs are located. When a command is entered in a command shell, the directories in the PATH variable will be searched, from left to right, looking for an executable with a matching filename. Once a matching executable file is found, a new child process is spawned to run it.

PATH typically starts with the OS root directory, followed by the directories of other installed software that are designed to be run from a command window (programs are free to add their directory to the PATH variable).

### Windows
On Windows Operating Systems, directory names are separated by the semicolon (`;`) character. The current working directory will be searched first. The PATHEXT environment variable contains a list of file extensions that the operating system considers executable. By default, it includes the following extensions: `EXE`, `COM`, or `BAT`, `CMD` (batch scripts); but other extensions can be registered.

### Unix
On Unix-like Operating Systems, directory names are separated by the colon (`:`) character. The current directory (`.`) has to be included in the variable to be searched.

## Uses
* List PATH directories nicely, and all currently available executable programs.
* Highlight differences from the default variable value.
* Warnings if the PATH variable is too long (performance), or includes invalid locations, or duplicates?
