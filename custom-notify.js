$(document).ready(function () {
    $.notify.addStyle('bootstrap-toast', {
        html: `
            <div>
                <div class="clearfix">
                    <div class="d-inline-block p-2 rounded">
                        <span data-notify-text></span>
                    </div>
                </div>
            </div>
        `,
        classes: {
            error: {
                "width": "100%",
                "text-align": "center",
                "background-color": "#e92424",
                "color": "white",
                "outline": "none",
                "border-radius": "15px"
            }
        }
    });
    
    $("#myForm").on("submit", function (event) {
        event.preventDefault();
        $(".form-control, .form-select").removeClass("invalid");
        let isValid = true;
        
        // FIRST NAME VALIDATION
        const fname = $("#Fname").val().trim();
        if (fname === "") {
            $("#Fname").addClass("invalid");
            $.notify("First name must not be empty",{ 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Last Name
        const lname = $("#Lname").val().trim();
        if (lname === "") {
            $("#Lname").addClass("invalid");
            $.notify("Last name must not be empty", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Designation
        const designation = $("#Designation").val();
        if (designation === "") {
            $("#Designation").addClass("invalid");
            $.notify("Designation must be selected",{ 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Email
        const email = $("#Email").val().trim();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email === "" || !emailPattern.test(email)) {
            $("#Email").addClass("invalid");
            $.notify("Enter a valid email address", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Contact
        const contact = $("#Contact").val().trim();
        if (contact === "") {
            $("#Contact").addClass("invalid");
            $.notify("Contact number must not be empty", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Country
        const country = $("#Country").val();
        if (country === "") {
            $("#Country").addClass("invalid");
            $.notify("Country must be selected", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate Province
        const province = $("#Province").val();
        if (province === "") {
            $("#Province").addClass("invalid");
            $.notify("Province must be selected", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }

        // Validate City
        const city = $("#City").val();
        if (city === "") {
            $("#City").addClass("invalid");
            $.notify("City must be selected", { 
                position: "top right", 
                className: "error",
                autoHideDelay: 3000,
                style: 'bootstrap-toast'
            });
            isValid = false;
        }
    });
});

$(document).ready(function() {
    $('#Designation').change(function() {
        var selectedDesignation = $(this).val();
        
        if (selectedDesignation === 'Pastor' || selectedDesignation === 'Missionary') {
            $('#spouse-first-name').prop('disabled', false);
            $('#spouse-last-name').prop('disabled', false);
        } else {
            $('#spouse-first-name').prop('disabled', true).val('');
            $('#spouse-last-name').prop('disabled', true).val('');
        }
    });
});

$(document).ready(function() {
    $('#Designation').change(function() {
        var selectedDesignation = $(this).val();
        
        if (selectedDesignation === 'Pastor' || selectedDesignation === 'Missionary') {
            $('#kids-first-name').prop('disabled', false);
            $('#kids-last-name').prop('disabled', false);
        } else {
            $('#kids-first-name').prop('disabled', true).val('');
            $('#kids-last-name').prop('disabled', true).val('');
        }
    });
});