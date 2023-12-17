/**
 * Core for .dev folder.
 *
 * @description Functions for .dev folder.
 */
import archiver from 'archiver';
import fs                   from 'fs'

export const zipFile = async ( inputFilePath, outputZipPath, zipName ) => {

    const output = fs.createWriteStream(outputZipPath);
    const archive = archiver('zip', { zlib: { level: 9 } }); // Nivel de compresión máximo
    
    output.on('close', () => {
        console.log(`Archive ZIP: ${outputZipPath}`);
    });
    
    archive.on('warning', (err) => {
        if (err.code === 'ENOENT') {
            console.warn(err);
        } else {
            throw err;
        }
    });
    
    archive.on('error', (err) => {
        throw err;
    });
    
    archive.pipe(output);
    archive.file(inputFilePath, { name: zipName }); 
    
    archive.finalize();

}