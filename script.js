document.getElementById('commandForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get the input values
    const param1 = document.getElementById('param1').value;
    const param2 = document.getElementById('param2').value;
    const param3 = document.getElementById('param3').value;
    
    // Generate the command
    const command = `scp ${param1}:${param2} ${param3}`;
    
    // Display the command
    document.getElementById('commandOutput').innerText = command;
        // Add copy button functionality
        const copyBtn = document.createElement('button');
        copyBtn.setAttribute('class', 'copy-btn');
        copyBtn.innerText = 'Copy';
        copyBtn.addEventListener('click', function() {
            navigator.clipboard.writeText(command).then(function() {
                ;
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
        
        // Remove existing copy button if any
        const outputDiv = document.getElementById('commandOutput');
        const existingCopyBtn = outputDiv.querySelector('.copy-btn');
        if (existingCopyBtn) {
            outputDiv.removeChild(existingCopyBtn);
        }
        
        // Append copy button to output div
        outputDiv.appendChild(copyBtn);
});
