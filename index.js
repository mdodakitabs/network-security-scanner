const net = require('net');

const TARGET = '127.0.0.1'; 

// قمنا بتعريف المصفوفة باستخدام Array.of لمنع سقوط الأرقام أثناء اللصق في Termux
const PORTS_TO_SCAN = Array.of(21, 22, 23, 25, 53, 80, 110, 443, 3306, 8080);

console.log(`[🔒 Security Scan] Automated Network Audit starting on: ${TARGET}\n`);

function scanPort(port) {
    return new Promise((resolve) => {
        const socket = new net.Socket();
        socket.setTimeout(1000); 

        socket.on('connect', () => {
            console.log(`[⚠️ WARNING] Port ${port} is OPEN! (Potential Security Vulnerability)`);
            socket.destroy();
            resolve({ port, status: 'open' });
        });

        socket.on('timeout', () => {
            socket.destroy();
            resolve({ port, status: 'closed' });
        });

        socket.on('error', () => {
            socket.destroy(); 
            resolve({ port, status: 'closed' });
        });
        
        socket.connect(port, TARGET);
    });
}

async function runScanner() {
    const scanPromises = PORTS_TO_SCAN.map(port => scanPort(port));
    await Promise.all(scanPromises);
    console.log(`\n[✅ Audit Complete] Network scanning finished successfully for ${TARGET}.`);
}

runScanner();

