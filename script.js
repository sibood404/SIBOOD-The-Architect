/* =========================================================
   SIBOOD OS
   Cyber Portfolio Operating System
   ========================================================= */


/* ================= SYSTEM ================= */

const SYSTEM_PASSWORD = "1337";

let zIndex = 100;

let selectedFile = null;
let clipboard = null;

let currentDirectory = "/home/sibood";

let editingFile = null;

let notificationsEnabled = true;


/* ================= FILESYSTEM ================= */

const fileSystem = {

    "/home/sibood": [

        {
            name: "Projects",
            type: "folder"
        },

        {
            name: "Cybersecurity",
            type: "folder"
        },

        {
            name: "1337",
            type: "folder"
        },

        {
            name: "Documents",
            type: "folder"
        },

        {
            name: "README.md",
            type: "file",
            content:
`# SIBOOD OS

Welcome to SIBOOD OS.

This is an interactive cybersecurity
and developer portfolio.

USER
----
SIBOOD

FOCUS
-----
C Programming
Linux
Cybersecurity
CTF
Networking
Web Development

TOOLS
-----
VS Code
GCC
GDB
Git
MSYS2

PROJECT
-------
SIBOOD OS

Built as a Linux-inspired portfolio
using HTML, CSS and JavaScript.

MISSION
-------
Understand the logic.
Build from scratch.
Debug.
Learn.
Improve.
`
        },

        {
            name: "profile.txt",
            type: "file",
            content:
`SIBOOD PROFILE
==============

Developer / Cybersecurity Learner

MAIN FOCUS
----------
C Programming
Linux
Cybersecurity
CTF
Networking
Web Development

PROGRAMMING
-----------
C
HTML
CSS
JavaScript
Shell

TOOLS
-----
VS Code
GCC
GDB
Git
Linux Terminal
MSYS2

CORE KNOWLEDGE
--------------
Pointers
Arrays
Strings
Functions
Recursion
argc / argv
malloc
Memory
Debugging
Permissions
Processes
Networking

MINDSET
-------
Understand the logic.
Build from scratch.
Debug the problem.
Learn from mistakes.
Keep improving.
`
        },

        {
            name: "skills.txt",
            type: "file",
            content:
`SIBOOD SKILLS
=============

PROGRAMMING
-----------
C
HTML
CSS
JavaScript
Shell

LINUX
-----
Terminal
Permissions
Processes
Filesystem
Shell commands
Git

C PROGRAMMING
-------------
Pointers
Arrays
Strings
Memory
malloc
Recursion
argc / argv
Structures
Debugging

CYBERSECURITY
-------------
Networking
IP
Ports
HTTP
HTTPS
Linux security
CTF methodology
CIA triad
Defensive security

TOOLS
-----
VS Code
GCC
GDB
Git
Valgrind
Norminette
`
        },

        {
            name: "notes.txt",
            type: "file",
            content:
`SIBOOD NOTES
============

Rule #1
-------
Understand the logic before copying code.

Rule #2
-------
Compile with warnings.

Rule #3
-------
Test small pieces.

Rule #4
-------
Use the debugger when necessary.

Rule #5
-------
Keep learning.

CURRENT INTERESTS
-----------------
C
Linux
Cybersecurity
CTF
Web Development
Operating Systems
`
        }

    ],


    "/home/sibood/Projects": [

        {
            name: "SIBOOD_OS",
            type: "folder"
        },

        {
            name: "Portfolio",
            type: "folder"
        }

    ],


    "/home/sibood/Projects/SIBOOD_OS": [

        {
            name: "README.md",
            type: "file",
            content:
`SIBOOD OS
=========

Linux-inspired interactive portfolio.

FEATURES
--------
Boot screen
Login
Desktop
Terminal
File Manager
Text Editor
Profile
Skills
Projects
Cyber Lab
1337 Lab
System Monitor
Settings
Notifications
Keyboard shortcuts
Matrix mode

TECHNOLOGIES
------------
HTML
CSS
JavaScript

GOAL
----
Create a portfolio that feels like
an operating system instead of a
traditional static website.
`
        },

        {
            name: "index.html",
            type: "file",
            content: "<!-- SIBOOD OS HTML interface -->"
        },

        {
            name: "style.css",
            type: "file",
            content: "/* SIBOOD OS cyber interface */"
        },

        {
            name: "script.js",
            type: "file",
            content: "// SIBOOD OS system logic"
        }

    ],


    "/home/sibood/Projects/Portfolio": [

        {
            name: "README.md",
            type: "file",
            content:
`PERSONAL PORTFOLIO
==================

Interactive developer and
cybersecurity portfolio.

MAIN SECTIONS
-------------
Profile
Skills
Projects
Cybersecurity
1337
Contact

DESIGN
------
Linux inspired
Terminal aesthetic
Green cyber interface
Interactive windows
`
        }

    ],


    "/home/sibood/Cybersecurity": [

        {
            name: "Linux",
            type: "folder"
        },

        {
            name: "Networking",
            type: "folder"
        },

        {
            name: "CTF",
            type: "folder"
        },

        {
            name: "README.md",
            type: "file",
            content:
`CYBERSECURITY LEARNING
======================

FOCUS
-----
Linux
Networking
CTF
Security fundamentals
Defensive security

LEARNING STYLE
--------------
Understand systems.
Practice in authorized labs.
Document findings.
Improve methodology.
`
        },

        {
            name: "security_notes.txt",
            type: "file",
            content:
`SECURITY NOTES
==============

CIA TRIAD
---------
Confidentiality
Integrity
Availability

NETWORKING
----------
IP addresses
Ports
TCP/IP
HTTP
HTTPS

LINUX
-----
Users
Groups
Permissions
Processes
Filesystem
Terminal

IMPORTANT
---------
Security testing should only be
performed on systems and labs
where explicit authorization exists.
`
        }

    ],


    "/home/sibood/Cybersecurity/Linux": [

        {
            name: "README.md",
            type: "file",
            content:
`LINUX
=====

Topics

Terminal
Filesystem
Permissions
Users
Groups
Processes
Shell
Environment variables
`
        },

        {
            name: "commands.txt",
            type: "file",
            content:
`USEFUL COMMANDS
===============

pwd
ls
cd
mkdir
rm
cp
mv
cat
head
tail
grep
wc
find
chmod
ps
`
        }

    ],


    "/home/sibood/Cybersecurity/Networking": [

        {
            name: "networking.txt",
            type: "file",
            content:
`NETWORKING FUNDAMENTALS
=======================

IP
--
Identifies a host/interface
on a network.

PORT
----
Identifies a service endpoint.

PROTOCOLS
---------
TCP
UDP
HTTP
HTTPS
DNS

CONCEPTS
--------
Client
Server
Request
Response
Packet
Router
Firewall
`
        }

    ],


    "/home/sibood/Cybersecurity/CTF": [

        {
            name: "methodology.txt",
            type: "file",
            content:
`CTF METHODOLOGY
===============

1. ENUMERATION

Discover what exists.

2. RECON

Understand the target and
available information.

3. ANALYSIS

Study collected information.

4. TESTING

Practice only in an
authorized CTF or lab.

5. DOCUMENTATION

Record what happened,
what was learned and why.

IMPORTANT
---------
Only test systems where you
have explicit authorization.
`
        }

    ],


    "/home/sibood/1337": [

        {
            name: "Shell",
            type: "folder"
        },

        {
            name: "C",
            type: "folder"
        },

        {
            name: "README.md",
            type: "file",
            content:
`1337 / PISCINE
==============

SHELL
-----
Shell00
Shell01
Permissions
Files
Directories
Git basics

C PROGRAMMING
-------------
C01
C02
C03
C04
C05
C06
C07
C08
C09
C10
C11
C12
C13

TOPICS
------
Characters
Numbers
Strings
Pointers
Arrays
Functions
Recursion
argc / argv
malloc
Memory
Structures
Debugging
Norminette
`
        }

    ],


    "/home/sibood/1337/Shell": [

        {
            name: "shell00.txt",
            type: "file",
            content:
`SHELL00

Files
Directories
Permissions
ls
chmod
touch
mkdir
rm
cp
mv
`
        },

        {
            name: "shell01.txt",
            type: "file",
            content:
`SHELL01

More shell commands
Git basics
find
grep
file
permissions
`
        }

    ],


    "/home/sibood/1337/C": [

        {
            name: "pointers.c",
            type: "file",
            content:
`/*
 * Pointer study notes
 *
 * A pointer stores the address
 * of another variable.
 */`
        },

        {
            name: "strings.c",
            type: "file",
            content:
`/*
 * String manipulation study
 *
 * Arrays of characters
 * pointers
 * loops
 * conditions
 */`
        },

        {
            name: "argc_argv.c",
            type: "file",
            content:
`/*
 * argc / argv study
 *
 * argc = number of arguments
 * argv = array of argument strings
 */`
        },

        {
            name: "memory.c",
            type: "file",
            content:
`/*
 * Memory study
 *
 * malloc
 * free
 * pointers
 * heap
 * stack
 */`
        }

    ],


    "/home/sibood/Documents": [

        {
            name: "study.txt",
            type: "file",
            content:
`STUDY ROADMAP
=============

PROGRAMMING
-----------
C
Pointers
Arrays
Strings
Memory
Debugging

LINUX
-----
Terminal
Shell
Permissions
Processes

CYBERSECURITY
-------------
Networking
Linux
CTF
Security fundamentals

WEB
---
HTML
CSS
JavaScript

PROJECT
-------
SIBOOD OS
`
        },

        {
            name: "roadmap.txt",
            type: "file",
            content:
`LEARNING ROADMAP
================

PHASE 01
--------
C foundations

PHASE 02
--------
Linux + Shell

PHASE 03
--------
Networking

PHASE 04
--------
Cybersecurity fundamentals

PHASE 05
--------
CTF practice

PHASE 06
--------
Web development

PHASE 07
--------
Build real projects
`
        },

        {
            name: "goals.txt",
            type: "file",
            content:
`SIBOOD GOALS
============

1. Become stronger in C.

2. Understand Linux deeply.

3. Build cybersecurity fundamentals.

4. Practice CTFs in authorized labs.

5. Build real projects.

6. Create a strong technical portfolio.

7. Keep learning.
`
        }

    ]

};


/* ================= BOOT ================= */

const bootProgress = document.getElementById("bootProgress");

setTimeout(function () {
    if (bootProgress) {
        bootProgress.style.width = "100%";
    }
}, 200);

setTimeout(function () {
    document.getElementById("bootScreen").classList.add("hidden");
    document.getElementById("loginScreen").classList.remove("hidden");
}, 3000);


/* ================= LOGIN ================= */

function login() {

    const input =
        document.getElementById("passwordInput").value;

    const message =
        document.getElementById("loginMessage");

    if (input === SYSTEM_PASSWORD) {

        document
            .getElementById("loginScreen")
            .classList.add("hidden");

        document
            .getElementById("os")
            .classList.remove("hidden");

        showNotification(
            "Welcome",
            "Welcome back, SIBOOD."
        );

    } else {

        message.textContent =
            "ACCESS DENIED";

    }
}


document
    .getElementById("passwordInput")
    .addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {
                login();
            }

        }
    );


/* ================= CLOCK ================= */

function updateClock() {

    const now = new Date();

    const time =
        now.toLocaleTimeString(
            [],
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }
        );

    const date =
        now.toLocaleDateString();

    document.getElementById("clock").textContent =
        date + "  " + time;
}

setInterval(updateClock, 1000);
updateClock();


/* ================= WINDOWS ================= */

function openWindow(id) {

    const win =
        document.getElementById(id);

    if (!win) {
        return;
    }

    win.style.display = "flex";

    win.style.zIndex = ++zIndex;

    if (id === "filesWindow") {
        renderFiles();
    }
}


function closeWindow(id) {

    const win =
        document.getElementById(id);

    if (win) {
        win.style.display = "none";
    }
}


function minimizeWindow(id) {

    const win =
        document.getElementById(id);

    if (win) {
        win.style.display = "none";
    }
}


function maximizeWindow(id) {

    const win =
        document.getElementById(id);

    if (!win) {
        return;
    }

    win.classList.toggle("maximized");
}


/* ================= DRAG WINDOWS ================= */

document
    .querySelectorAll(".window")
    .forEach(function (win) {

        const header =
            win.querySelector(".window-header");

        let dragging = false;
        let offsetX = 0;
        let offsetY = 0;

        header.addEventListener(
            "mousedown",
            function (event) {

                if (
                    event.target.tagName ===
                    "BUTTON"
                ) {
                    return;
                }

                dragging = true;

                offsetX =
                    event.clientX -
                    win.offsetLeft;

                offsetY =
                    event.clientY -
                    win.offsetTop;

                win.style.zIndex =
                    ++zIndex;
            }
        );

        document.addEventListener(
            "mousemove",
            function (event) {

                if (!dragging) {
                    return;
                }

                if (
                    win.classList.contains(
                        "maximized"
                    )
                ) {
                    return;
                }

                win.style.left =
                    event.clientX -
                    offsetX +
                    "px";

                win.style.top =
                    event.clientY -
                    offsetY +
                    "px";
            }
        );

        document.addEventListener(
            "mouseup",
            function () {
                dragging = false;
            }
        );

    });


/* ================= FILE MANAGER ================= */

function getCurrentItems() {

    return fileSystem[currentDirectory] || [];
}


function renderFiles() {

    const grid =
        document.getElementById("fileGrid");

    const path =
        document.getElementById("currentPath");

    if (!grid || !path) {
        return;
    }

    grid.innerHTML = "";

    path.textContent =
        currentDirectory;

    selectedFile = null;

    const items =
        getCurrentItems();

    items.forEach(function (item) {

        const element =
            document.createElement("div");

        element.className =
            "file-item";

        element.dataset.name =
            item.name;

        const icon =
            item.type === "folder"
                ? "📁"
                : getFileIcon(item.name);

        element.innerHTML =
            `
            <div class="file-icon">${icon}</div>
            <div class="file-name">${escapeHTML(item.name)}</div>
            `;

        element.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                document
                    .querySelectorAll(".file-item")
                    .forEach(function (item) {
                        item.classList.remove("selected");
                    });

                element.classList.add("selected");

                selectedFile = fileSystem[
                    currentDirectory
                ].find(function (file) {
                    return file.name === item.name;
                });

            }
        );

        element.addEventListener(
            "dblclick",
            function () {

                if (item.type === "folder") {
                    openFolder(item.name);
                } else {
                    openFile(item);
                }

            }
        );

        grid.appendChild(element);

    });
}


function getFileIcon(name) {

    if (name.endsWith(".c")) {
        return "💻";
    }

    if (name.endsWith(".html")) {
        return "🌐";
    }

    if (name.endsWith(".css")) {
        return "🎨";
    }

    if (name.endsWith(".js")) {
        return "⚡";
    }

    if (
        name.endsWith(".md") ||
        name.endsWith(".txt")
    ) {
        return "📄";
    }

    return "📄";
}


function openFolder(name) {

    const newPath =
        currentDirectory +
        "/" +
        name;

    if (!fileSystem[newPath]) {

        fileSystem[newPath] = [];

    }

    currentDirectory = newPath;

    renderFiles();
}


function goBackFolder() {

    if (
        currentDirectory ===
        "/home/sibood"
    ) {
        return;
    }

    const parts =
        currentDirectory.split("/");

    parts.pop();

    currentDirectory =
        parts.join("/");

    renderFiles();
}


function createFolder() {

    const name =
        prompt("Folder name:");

    if (!name) {
        return;
    }

    const items =
        getCurrentItems();

    const exists =
        items.some(function (item) {
            return item.name === name;
        });

    if (exists) {

        showNotification(
            "Error",
            "An item with this name already exists."
        );

        return;
    }

    items.push({
        name: name,
        type: "folder"
    });

    fileSystem[
        currentDirectory +
        "/" +
        name
    ] = [];

    renderFiles();

    showNotification(
        "Folder created",
        name
    );
}


function createFile() {

    const name =
        prompt(
            "File name:",
            "new_file.txt"
        );

    if (!name) {
        return;
    }

    const items =
        getCurrentItems();

    const exists =
        items.some(function (item) {
            return item.name === name;
        });

    if (exists) {

        showNotification(
            "Error",
            "An item with this name already exists."
        );

        return;
    }

    items.push({
        name: name,
        type: "file",
        content:
            "# New file\n\nCreated in SIBOOD OS.\n"
    });

    renderFiles();

    showNotification(
        "File created",
        name
    );
}


/* ================= DELETE ================= */

function deleteSelectedFile() {

    if (!selectedFile) {

        showNotification(
            "Delete",
            "Select a file or folder first."
        );

        return;
    }

    const confirmDelete =
        confirm(
            "Delete " +
            selectedFile.name +
            "?"
        );

    if (!confirmDelete) {
        return;
    }

    const items =
        fileSystem[
            currentDirectory
        ];

    const index =
        items.indexOf(
            selectedFile
        );

    if (index !== -1) {

        items.splice(
            index,
            1
        );
    }

    if (
        selectedFile.type ===
        "folder"
    ) {

        const folderPath =
            currentDirectory +
            "/" +
            selectedFile.name;

        deleteFolderRecursively(
            folderPath
        );
    }

    showNotification(
        "Deleted",
        selectedFile.name +
        " was deleted."
    );

    selectedFile = null;

    renderFiles();
}


function deleteFolderRecursively(path) {

    const children =
        fileSystem[path];

    if (children) {

        children.forEach(
            function (item) {

                if (
                    item.type ===
                    "folder"
                ) {

                    deleteFolderRecursively(
                        path +
                        "/" +
                        item.name
                    );
                }

            }
        );
    }

    delete fileSystem[path];
}


/* ================= RENAME ================= */

function renameSelected() {

    if (!selectedFile) {

        showNotification(
            "Rename",
            "Select a file or folder first."
        );

        return;
    }

    const oldName =
        selectedFile.name;

    const newName =
        prompt(
            "New name:",
            oldName
        );

    if (
        !newName ||
        newName === oldName
    ) {
        return;
    }

    const items =
        getCurrentItems();

    const exists =
        items.some(function (item) {
            return (
                item !== selectedFile &&
                item.name === newName
            );
        });

    if (exists) {

        showNotification(
            "Error",
            "That name already exists."
        );

        return;
    }

    if (
        selectedFile.type ===
        "folder"
    ) {

        renameFolderPath(
            currentDirectory +
            "/" +
            oldName,
            currentDirectory +
            "/" +
            newName
        );

    }

    selectedFile.name = newName;

    renderFiles();

    showNotification(
        "Renamed",
        oldName +
        " → " +
        newName
    );
}


function renameFolderPath(
    oldPath,
    newPath
) {

    const children =
        fileSystem[oldPath];

    if (!children) {
        return;
    }

    fileSystem[newPath] =
        children;

    delete fileSystem[oldPath];

    children.forEach(
        function (item) {

            if (
                item.type ===
                "folder"
            ) {

                renameFolderPath(
                    oldPath +
                    "/" +
                    item.name,

                    newPath +
                    "/" +
                    item.name
                );
            }

        }
    );
}


/* ================= COPY / PASTE ================= */

function copySelected() {

    if (!selectedFile) {

        showNotification(
            "Copy",
            "Select a file or folder first."
        );

        return;
    }

    clipboard = {
        item: deepClone(selectedFile),
        sourcePath: currentDirectory
    };

    showNotification(
        "Copied",
        selectedFile.name +
        " is ready to paste."
    );
}


function pasteItem() {

    if (!clipboard) {

        showNotification(
            "Paste",
            "Clipboard is empty."
        );

        return;
    }

    const original =
        clipboard.item;

    const items =
        getCurrentItems();

    let name =
        original.name;

    let counter = 1;

    while (
        items.some(function (item) {
            return item.name === name;
        })
    ) {

        const parts =
            original.name.split(".");

        if (parts.length > 1) {

            const extension =
                parts.pop();

            const base =
                parts.join(".");

            name =
                base +
                "_copy" +
                counter +
                "." +
                extension;

        } else {

            name =
                original.name +
                "_copy" +
                counter;
        }

        counter++;
    }

    const copy =
        deepClone(original);

    copy.name = name;

    items.push(copy);

    if (
        copy.type ===
        "folder"
    ) {

        copyFolderStructure(
            clipboard.sourcePath +
            "/" +
            original.name,

            currentDirectory +
            "/" +
            copy.name
        );
    }

    renderFiles();

    showNotification(
        "Pasted",
        name
    );
}


function copyFolderStructure(
    oldPath,
    newPath
) {

    const children =
        fileSystem[oldPath];

    if (!children) {
        return;
    }

    fileSystem[newPath] =
        deepClone(children);

    children.forEach(
        function (item) {

            if (
                item.type ===
                "folder"
            ) {

                copyFolderStructure(
                    oldPath +
                    "/" +
                    item.name,

                    newPath +
                    "/" +
                    item.name
                );
            }

        }
    );
}


function deepClone(object) {

    return JSON.parse(
        JSON.stringify(object)
    );
}


/* ================= FILE OPEN ================= */

function openFile(file) {

    editingFile = file;

    document.getElementById(
        "editorTitle"
    ).textContent =
        "Text Editor — " +
        file.name;

    document.getElementById(
        "editorArea"
    ).value =
        file.content || "";

    document.getElementById(
        "editorStatus"
    ).textContent =
        "Editing " + file.name;

    openWindow(
        "editorWindow"
    );
}


function saveEditor() {

    if (!editingFile) {
        return;
    }

    editingFile.content =
        document.getElementById(
            "editorArea"
        ).value;

    document.getElementById(
        "editorStatus"
    ).textContent =
        "Saved ✓";

    showNotification(
        "File saved",
        editingFile.name +
        " saved successfully."
    );
}


function closeEditor() {

    saveEditor();

    closeWindow(
        "editorWindow"
    );

    editingFile = null;
}


/* ================= REFRESH ================= */

function refreshFiles() {

    renderFiles();

    showNotification(
        "Files",
        "File manager refreshed."
    );
}


function refreshDesktop() {

    showNotification(
        "Desktop",
        "Desktop refreshed."
    );
}


/* ================= TERMINAL ================= */

const terminalInput =
    document.getElementById(
        "terminalInput"
    );

const terminalOutput =
    document.getElementById(
        "terminalOutput"
    );


function terminalPrint(
    text
) {

    const line =
        document.createElement(
            "div"
        );

    line.innerHTML =
        text;

    terminalOutput.appendChild(
        line
    );

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;
}


terminalInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key !==
            "Enter"
        ) {
            return;
        }

        const command =
            terminalInput.value.trim();

        terminalInput.value = "";

        if (!command) {
            return;
        }

        terminalPrint(
            `<span class="green">
            sibood@SIBOOD:~$
            </span> ${escapeHTML(command)}`
        );

        executeCommand(command);
    }
);


function executeCommand(command) {

    const parts =
        command.split(" ");

    const cmd =
        parts[0].toLowerCase();


    if (cmd === "help") {

        terminalPrint(
`<span class="green">Available commands:</span>

help
clear
whoami
neofetch
pwd
ls
date
open files
open profile
open skills
open projects
open cyber
open 1337
open monitor
open settings
matrix
shutdown`
        );

        return;
    }


    if (cmd === "clear") {

        terminalOutput.innerHTML = "";

        return;
    }


    if (cmd === "whoami") {

        terminalPrint(
            "sibood"
        );

        return;
    }


    if (cmd === "pwd") {

        terminalPrint(
            currentDirectory
        );

        return;
    }


    if (cmd === "ls") {

        const items =
            getCurrentItems();

        if (!items.length) {

            terminalPrint(
                "(empty)"
            );

            return;
        }

        items.forEach(
            function (item) {

                terminalPrint(
                    item.type === "folder"
                        ? `<span class="green">${escapeHTML(item.name)}/</span>`
                        : escapeHTML(item.name)
                );

            }
        );

        return;
    }


    if (cmd === "date") {

        terminalPrint(
            new Date().toString()
        );

        return;
    }


    if (cmd === "whoami") {

        terminalPrint("sibood");

        return;
    }


    if (cmd === "neofetch") {

        terminalPrint(
`<pre>
███████╗██╗██████╗  ██████╗  ██████╗
██╔════╝██║██╔══██╗██╔═══██╗██╔═══██╗
███████╗██║██████╔╝██║   ██║██║   ██║
╚════██║██║██╔══██╗██║   ██║██║   ██║
███████║██║██████╔╝╚██████╔╝╚██████╔╝
╚══════╝╚═╝╚═════╝  ╚═════╝  ╚═════╝

USER       : SIBOOD
ROLE       : Developer / Cyber Learner
FOCUS      : C • Linux • Cybersecurity
ACADEMY    : 1337
COMPILER   : GCC
DEBUGGER   : GDB
PROJECT    : SIBOOD OS
</pre>`
        );

        return;
    }


    if (
        command ===
        "open files"
    ) {

        openWindow(
            "filesWindow"
        );

        return;
    }


    if (
        command ===
        "open profile"
    ) {

        openWindow(
            "profileWindow"
        );

        return;
    }


    if (
        command ===
        "open skills"
    ) {

        openWindow(
            "skillsWindow"
        );

        return;
    }


    if (
        command ===
        "open projects"
    ) {

        openWindow(
            "projectsWindow"
        );

        return;
    }


    if (
        command ===
        "open cyber"
    ) {

        openWindow(
            "cyberWindow"
        );

        return;
    }


    if (
        command ===
        "open 1337"
    ) {

        openWindow(
            "1337Window"
        );

        return;
    }


    if (
        command ===
        "open monitor"
    ) {

        openWindow(
            "monitorWindow"
        );

        return;
    }


    if (
        command ===
        "open settings"
    ) {

        openWindow(
            "settingsWindow"
        );

        return;
    }


    if (cmd === "matrix") {

        startMatrix();

        return;
    }


    if (cmd === "shutdown") {

        shutdown();

        return;
    }


    terminalPrint(
        `<span style="color:#ff6677">
        command not found: ${escapeHTML(command)}
        </span>`
    );
}


/* ================= NOTIFICATIONS ================= */

function showNotification(
    title,
    text
) {

    if (!notificationsEnabled) {
        return;
    }

    const box =
        document.getElementById(
            "notification"
        );

    document.getElementById(
        "notificationTitle"
    ).textContent =
        title;

    document.getElementById(
        "notificationText"
    ).textContent =
        text;

    box.style.display =
        "block";

    setTimeout(
        function () {
            box.style.display =
                "none";
        },
        3000
    );
}


/* ================= MATRIX ================= */

const canvas =
    document.getElementById(
        "matrixCanvas"
    );

const ctx =
    canvas.getContext("2d");

let matrixRunning = false;
let matrixAnimation;


function startMatrix() {

    canvas.style.display =
        "block";

    canvas.width =
        window.innerWidth;

    canvas.height =
        window.innerHeight;

    matrixRunning = true;

    const chars =
        "01SIBOODCYBER1337";

    const fontSize = 14;

    const columns =
        Math.floor(
            canvas.width /
            fontSize
        );

    const drops =
        new Array(columns)
            .fill(1);


    function draw() {

        if (!matrixRunning) {
            return;
        }

        ctx.fillStyle =
            "rgba(0, 0, 0, 0.08)";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle =
            "#00ff88";

        ctx.font =
            fontSize +
            "px monospace";


        for (
            let i = 0;
            i < drops.length;
            i++
        ) {

            const text =
                chars[
                    Math.floor(
                        Math.random() *
                        chars.length
                    )
                ];

            ctx.fillText(
                text,
                i * fontSize,
                drops[i] * fontSize
            );

            if (
                drops[i] * fontSize >
                    canvas.height &&
                Math.random() > 0.975
            ) {

                drops[i] = 0;
            }

            drops[i]++;
        }

        matrixAnimation =
            requestAnimationFrame(
                draw
            );
    }

    draw();
}


function stopMatrix() {

    matrixRunning = false;

    cancelAnimationFrame(
        matrixAnimation
    );

    canvas.style.display =
        "none";
}


window.addEventListener(
    "resize",
    function () {

        if (matrixRunning) {

            canvas.width =
                window.innerWidth;

            canvas.height =
                window.innerHeight;
        }

    }
);


/* ================= SETTINGS ================= */

document
    .getElementById(
        "notificationsToggle"
    )
    .addEventListener(
        "change",
        function () {

            notificationsEnabled =
                this.checked;

        }
    );


document
    .getElementById(
        "matrixToggle"
    )
    .addEventListener(
        "change",
        function () {

            if (this.checked) {
                startMatrix();
            } else {
                stopMatrix();
            }

        }
    );


document
    .getElementById(
        "animationsToggle"
    )
    .addEventListener(
        "change",
        function () {

            if (this.checked) {

                document.body.style
                    .transition =
                    "all 0.2s";

            } else {

                document.body.style
                    .transition =
                    "none";

            }

        }
    );


/* ================= SYSTEM MONITOR ================= */

function updateMonitor() {

    const cpu =
        Math.floor(
            15 +
            Math.random() * 40
        );

    const memory =
        Math.floor(
            35 +
            Math.random() * 20
        );

    document.getElementById(
        "cpuMonitor"
    ).textContent =
        cpu + "%";

    document.getElementById(
        "memoryMonitor"
    ).textContent =
        memory + "%";

    document.getElementById(
        "cpuBar"
    ).style.width =
        cpu + "%";

    document.getElementById(
        "memoryBar"
    ).style.width =
        memory + "%";

    document.getElementById(
        "ramValue"
    ).textContent =
        memory + "%";
}

setInterval(
    updateMonitor,
    2000
);

updateMonitor();


/* ================= RIGHT CLICK ================= */

const contextMenu =
    document.getElementById(
        "contextMenu"
    );


document
    .getElementById("desktop")
    .addEventListener(
        "contextmenu",
        function (event) {

            event.preventDefault();

            contextMenu.style.display =
                "block";

            contextMenu.style.left =
                event.clientX +
                "px";

            contextMenu.style.top =
                event.clientY +
                "px";
        }
    );


document.addEventListener(
    "click",
    function () {

        contextMenu.style.display =
            "none";

    }
);


/* ================= KEYBOARD SHORTCUTS ================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.ctrlKey &&
            event.altKey &&
            event.key.toLowerCase() === "t"
        ) {

            event.preventDefault();

            openWindow(
                "terminalWindow"
            );
        }


        if (
            event.ctrlKey &&
            event.altKey &&
            event.key.toLowerCase() === "f"
        ) {

            event.preventDefault();

            openWindow(
                "filesWindow"
            );
        }


        if (
            event.ctrlKey &&
            event.altKey &&
            event.key.toLowerCase() === "s"
        ) {

            event.preventDefault();

            openWindow(
                "settingsWindow"
            );
        }


        if (
            event.ctrlKey &&
            event.key.toLowerCase() === "e"
        ) {

            if (
                selectedFile &&
                selectedFile.type ===
                "file"
            ) {

                event.preventDefault();

                openFile(
                    selectedFile
                );
            }
        }


        if (
            event.key === "Escape"
        ) {

            stopMatrix();

            document
                .querySelectorAll(".window")
                .forEach(
                    function (win) {
                        win.style.display =
                            "none";
                    }
                );
        }

    }
);


/* ================= SHUTDOWN ================= */

function shutdown() {

    stopMatrix();

    document
        .getElementById("os")
        .classList.add("hidden");

    document
        .getElementById("loginScreen")
        .classList.remove("hidden");

    document
        .getElementById("passwordInput")
        .value = "";

    document
        .getElementById("loginMessage")
        .textContent = "";

    document
        .querySelectorAll(".window")
        .forEach(
            function (win) {
                win.style.display =
                    "none";
            }
        );
}


/* ================= SECURITY ================= */

function escapeHTML(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}


/* ================= INITIALIZATION ================= */

renderFiles();
