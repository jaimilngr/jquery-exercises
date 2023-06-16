$(document).ready(function() {
    $('#myform').submit(function(e) {
        e.preventDefault();

        let name = $('#name').val();
        let surname = $('#surname').val();
        let phone_no = $('#phone_no').val();
        let msg = $('#msg').val();
        let email = $('#email').val();

        let popupContent = '<h2>Submitted Details</h2>' +
            '<p>Name: ' + name + '</p>' +
            '<p>Surname: ' + surname + '</p>' +
            '<p>Phone Number: ' + phone_no + '</p>' +
            '<p>Message: ' + msg + '</p>' +
            '<p>Email: ' + email + '</p>';

        let popup = window.open('', 'formpopup', 'width=400,height=400,resizeable,scrollbars');
        popup.document.write(popupContent);

        $('#myform')[0].reset();
    });

    $(document).on('click', function(e) {
        if ($(e.target).hasClass('popup')) {
            $(e.target).remove();
        }
    });
});
