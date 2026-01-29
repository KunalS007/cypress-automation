///<reference types="cypress" />


import 'cypress-file-upload';

describe('File Upload Test', () => 
{
    it('should upload a file successfully', () => 
    {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('sampleFile.txt');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('h3').should('have.text', 'File Uploaded!');
    })

    it('File Rename Test', () => 
    {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({filePath: 'sampleFile.txt', fileName: 'renamedFile.txt'});
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get('h3').should('have.text', 'File Uploaded!');
    })

    it('Drag and Drop File Upload Test', () => 
    {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#drag-drop-upload').attachFile('sampleFile.txt', { subjectType: 'drag-n-drop' });
        cy.wait(5000);
        cy.get('#drag-drop-upload').contains('sampleFile.txt');
    })

    it.only('Multiple File Upload Test', () => 
    {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.get('#filesToUpload').attachFile(['sampleFile.txt', 'KeyboardShortcuts Be10X (3).pdf']);
        const files = ['sampleFile.txt', 'KeyboardShortcuts Be10X (3).pdf'];
      
    })
})

