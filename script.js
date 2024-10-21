//your JS code here. If required.
 const form = document.getElementById("myForm");
    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    form.addEventListener("submit",   
 (event) => {
      event.preventDefault();

      const age = parseInt(ageInput.value);
      const name = nameInput.value;

      if (age && name)   
 {
        // Validate age
        if (age >= 18) {
          // Resolve the promise after 4 seconds
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
            }, 4000);
          })
          .then(() => {
            alert(`Welcome, ${name}. You can vote.`);
          })
          .catch(() => {
            // Handle rejection (age < 18)
            alert(`Oh sorry, ${name}. You aren't old enough.`);
          });
        } else {
          // Handle invalid age (age < 18)
          alert(`Oh sorry, ${name}. You aren't old enough.`);
        }
      } else {
        // Handle empty inputs
        alert("Please fill in all fields.");
      }
    });