import { execSync } from 'child_process';

export const rmCache = () =>{
    execSync('rm -rf ~/Library/Caches/com.apple.Safari')
    execSync('rm -rf ~/Library/Caches/com.apple.WebKit.Networking')
}