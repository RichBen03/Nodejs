const os= require('os')

console.log("CPU ARCHITECTURE:",os.arch())
console.log("AVAILABLE MEMORY:",os.freemem())
console.log("TOTAL MEMORY OF THE SYSTEM:",os.totalmem())
console.log("HOSTNAME OF THE OS:",os.hostname())
console.log("THE PLATFORM OF THE OS:",os.platform())
console.log("THE TMP DIRECTORY OF THE OS:",os.tmpdir())
console.log("THE RELEASE OF THE OS:",os.release())

console.log("THE OS MODULE OF NODE")