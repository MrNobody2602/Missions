<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>World Mission's Conference Registration</title>
    <!-- CSS -->
    <link rel="stylesheet" href="./assets/css/Registration.css">
    <!-- JS -->
    <script src="./assets/js/Registration.js"></script>
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!-- JQUERY -->
    <script src="./assets/JQUERY/jquery-3.7.1.min.js"></script>
    <script src="./assets/JQUERY/notify.min.js"></script>
    <script src="./assets/JQUERY/custom-notify.js"></script>
</head>

<body>
    <div class="container">
        <form action="#" method="POST" id="myForm">
            <p class="pDetail">PERSONAL DETAIL</p>
            <div class="form-group">
                <!-- FIRST NAME -->
                <input type="text" name="fname" id="Fname" class="form-control" placeholder="FIRST NAME">
                <!-- LAST NAME -->
                <input type="text" name="lname" id="Lname" class="form-control" placeholder="LAST NAME">
            </div>
            <div class="form-group">
                <!-- DESIGNATION -->
                <select name="designation" id="Designation" class="form-select">
                    <option value="">CHOOSE A DESIGNATION</option>
                    <option value="Pastor">PASTOR</option>
                    <option value="Missionary">MISSIONARY</option>
                    <option value="Pwife">PASTOR's WIFE</option>
                    <option value="Mwife">MISSIONARY's WIFE</option>
                    <option value="Churchworker">CHURCH WORKER</option>
                    <option value="Biblestudent">BIBLE STUDENT</option>
                </select>
            </div>
            <div class="form-group">
                <!-- EMAIL -->
                <input type="email" name="email" id="Email" class="form-control" placeholder="EMAIL">
                <!-- CONTACT NUMBER -->
                <input type="tel" name="contact" id="Contact" class="form-control" placeholder="CONTACT NO.">
            </div>
            <div class="form-group">
                <!-- COUNTRY -->
                <select name="country" id="Country" class="form-select">
                    <option value="">COUNTRY</option>
                    <option value="option1">Nigeria</option>
                    <option value="option2">Ghana</option>
                </select>
                <!-- PROVINCE -->
                <select name="province" id="Province" class="form-select">
                    <option value="">PROVINCE</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                </select>
                <!-- CITY -->
                <select name="city" id="City" class="form-select">
                    <option value="">CITY</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Ghana">Ghana</option>
                </select>
            </div>
            <hr>
            <p>SPOUSE?</p>
            <div class="form-group">
                <input type="text" id="spouse-first-name" class="form-control" placeholder="FIRST NAME" disabled>
                <input type="text" id="spouse-last-name" class="form-control" placeholder="LAST NAME" disabled>
            </div>
            <hr>
            <p>KIDS?</p>
            <div class="form-group">
                <input type="text" name="kname" id="kids-first-name" class="form-control" placeholder="FIRST NAME" disabled>
                <input type="text" name="klname" id="kids-last-name" class="form-control" placeholder="LAST NAME" disabled>
            </div>
            <div class="col-lg-12 text-center">
                <input class="btn btn-primary" type="submit" id="register">
            </div>
        </form>
    </div>
</body>
</html>