

function getUser() {
    let userNumber = document.getElementById('howMany').value || 1; // Default to 1 if no input
    fetch(`/getuser?howMany=${userNumber}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const results = data.data.results;
        const tableBody = document.getElementById('userData');
        let htmlContent = "";

        results.forEach(user => {
            // Ensure data-name and data-email are set
            htmlContent += `<tr class="user-row" data-name="${user.name.first} ${user.name.last}" data-email="${user.email}" data-thumbnail="${user.picture.large}">
                <td><img src="${user.picture.large}" alt="User Thumbnail"></td>
                <td>${user.name.first}</td>
                <td>${user.name.last}</td>
                <td>${user.email}</td>
            </tr>`;
        });

        tableBody.innerHTML = htmlContent;

        // Add event listener here instead of inside a document ready to ensure it binds correctly after HTML update
        $('#userData').on('click', 'tr.user-row', function() {

            $('tr.user-row').removeClass('active');

            
            const userName = $(this).data('name');
            const userEmail = $(this).data('email');
            const userPhoto = $(this).find('td img').attr('src');
            $('#photo img').attr('src', userPhoto);
            
            console.log(`Name: ${userName}, Email: ${userEmail}`);
            $('#name').text(`Name: ${userName}`);
            $('#email').text(`Email: ${userEmail}`);

            
            
            //$(this).toggleClass('active');

            $(this).addClass('active');

            $('#user-card').show();
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


      function closeCard() {

        $('#user-card').hide();

      }
