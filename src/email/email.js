import * as emailjs from "emailjs-com";
export function sendEmail(
  receiverAddress,
  name,
  orderNumber,
  itemArray,
  streetAddress,
  total
) {
  emailjs.init("user_QIOTKQgxx593KdLcNW2Sj");

  let firstItem = itemArray[0];
  var templateParams = {
    user_email: receiverAddress,
    name: name,
    order_number: orderNumber,
    first_item: firstItem,
    street_address: streetAddress,
    total: total
  };

  // Appends string to first sentence if the user ordered more than 1 item
  if (itemArray.length === 2) {
    templateParams.additional_item_string =
      " and " + --itemArray.length + " other item";
  } else if (itemArray.length > 1) {
    templateParams.additional_item_string =
      " and " + --itemArray.length + " other items";
  }

  emailjs.send("default_service", "contact_form", templateParams).then(
    function(response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function(error) {
      console.log("FAILED...", error);
    }
  );
}
