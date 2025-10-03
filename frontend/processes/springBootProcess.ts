import {spawn} from 'child_process';
import path from 'path';
// import fs from 'fs-extra';
// import {getJavaExecutable} from '../../utils/javaUtils';
// import {getSpringBootJarPath} from '../../utils/springBootUtils';
// import {Process} from '../../types/processTypes';


const springBootProcess = () => {
    spawn("java", ["-jar", "backend-app.jar"], {
        cwd: path.join(__dirname, '../../backend'),
        stdio: 'inherit',
        env: process.env,
    });
}

springBootProcess.stdout.out.on('data', (data) => {
    console.log(`Spring Boot: ${data}`);
});

springBootProcess.stderr.on('data', (data) => {
    console.error(`Spring Boot Error: ${data}`);
});
