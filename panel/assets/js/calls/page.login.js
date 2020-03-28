/*  ==========================================================================
    Table of Content for Login Page:

    === Function ===
    - runValidation

    --------------------------
    === Function Calls ===

    ========================================================================== */


/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runValidation
    ========================================================================== */

    function runValidation(formId){

        var form = $(formId);
        form.validate({
            errorPlacement: function errorPlacement(error, element) { element.after(error); },
            rules: {
                loginEmail: {
                    required: true,
                    email: true
                },
                loginPassword: {
                    required: true,
                    minlength: 5
                }
            },
            messages: {
                loginEmail: {
                    required: "Introduce una direccion de correo electronico valida.",
                    minlength: "Introduce una direccion de correo electronico valida."
                },
                loginPassword: {
                    required: "Introduce una contraseña valida.",
                    minlength: jQuery.validator.format("Introduse al menos {0} caracteres.")
                }
            }
        });
    }


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

    // Variables
    var loginForm  = '#loginForm';

    // === Checkers ===

    // === Setters ===

    // === Executions ===

    runValidation(loginForm);

});