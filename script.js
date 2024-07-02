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
});
