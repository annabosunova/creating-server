//Reading from a file: 
const fs = require('fs');

// Asynchronous read
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

// Synchronous read
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log('File content (sync):', data);
} catch (err) {
    console.error('Error reading file (sync):', err);
}

// Writing to a file:
// const fs = require('fs');

const content = 'Hello, World!';

// Asynchronous write
fs.writeFile('example.txt', content, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File write successful.');
});

// Synchronous write
try {
    fs.writeFileSync('example_sync.txt', content);
    console.log('File write successful (sync).');
} catch (err) {
    console.error('Error writing to file (sync):', err);
}

// Deleting a file

// const fs = require('fs');

// Asynchronous delete
fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully.');
});

// Synchronous delete
try {
    fs.unlinkSync('example_sync.txt');
    console.log('File deleted successfully (sync).');
} catch (err) {
    console.error('Error deleting file (sync):', err);
}

// Check if file exist:
// const fs = require('fs');

// Asynchronous file existence check
fs.access('example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist.');
        return;
    }
    console.log('File exists.');
});

// Synchronous file existence check
try {
    fs.accessSync('example_sync.txt', fs.constants.F_OK);
    console.log('File exists (sync).');
} catch (err) {
    console.error('File does not exist (sync).');
}

// make directories 
function managedirs() {
    if (!fs.existsSync('./assets')) {
        fs.mkdir('./assets', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('folder created');
        });
    } else {
        fs.rmdir('./assets', (err) => {
            if (err) {
                console.log(err)
            }
            console.log('folder deleted');
        })
    }
}
managedirs();
