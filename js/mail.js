  
        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "hananhamo214@gmail.com", 
            Password : "A76D904ACE8FA4C66826844C30487B89D9AE",
            To : 'hananhamo214@gmail.com',
            From : inputs.elements("email").value,
            Subject : "New Contact Form Enquiry",
            Body : "Name:"+inputs.elements("name").value
            + "<br>Email:" + inputs.elements("email").value
            + "<br>Phone:" + inputs.elements("phone").value
            + "<br>Message:" + inputs.elements("content").value
        }).then(message => alert("Message Sent Successfully"));
    
    
    