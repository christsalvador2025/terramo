insert into user_details (
   user_id,
   user_details_salutation,
   user_details_firstname,
   user_details_lastname,
   user_details_company,
   user_details_birthday,
   user_details_gender,
   user_details_phone,
   user_details_fax,
   user_details_mobile,
   user_details_mobile_notification,
   user_details_email,
   user_details_email_notification,
   user_details_valid_from
) values ( 1,
           'Herr',
           'Max',
           'Mustermann',
           '',
           null,
           'MALE',
           '+49 123456789',
           '',
           '+49 123456789',
           'N',
           'test@terramo.ch',
           'Y',
           now() );