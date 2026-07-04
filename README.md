## 🔒 Project Description

This project is a lightweight, non-blocking **Network Port Scanner & Security Auditing Tool** built from scratch using the native **Node.js `net` architecture**. 

Unlike rigid, pre-built security tools, this custom-engineered script leverages asynchronous JavaScript Promises to conduct fast, parallel port enumeration and system reconnaissance. It serves as an automated firewall and service scanner designed to audit local or remote network devices (such as routers and local hosts) for open ports and potential security exploits.

### 🎯 Engineering & Architectural Highlights:
* **Built with Node.js & Core JavaScript Engines:** Engineered purely on native system modules without relying on bulky third-party dependencies, ensuring execution speeds ideal for resource-constrained environments (like mobile Termux setups).
* **Asynchronous Networking:** Utilizes concurrent promise resolution (`Promise.all`) coupled with tight socket timing policies (`socket.setTimeout`) to safely map system network footprints without bottlenecking processing queues.
* **DevSecOps & CyberSecurity Alignment:** Maps and flags standard high-risk network ports (FTP, SSH, Telnet, HTTP, MySQL, etc.) to immediately identify network exposures and misconfigured entry points.
