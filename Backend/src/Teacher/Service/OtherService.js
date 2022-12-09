const Other = require("../Model/other");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");
// const { sendMail } = require("../../util/sendMail");

module.exports = {
    createOtherLocal: async function (email, password, first_name, last_name) {
    console.log("email", email);
    try {
      const other = await Other.find({ email: email });
      if (other.length > 0) {
        const response = new Response(
          false,
          "Other already exist with the given email id.",
          503,
          "",
          {}
        );
        return response;
      }
      const OtherBody = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        method: "local",
        local: {
          password: password,
        },
      };
      console.log(OtherBody);
      const Otherdata = await Other.create(OtherBody);

      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: Otherdata,
        role: "other",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(true, "Other is created", 200, token, {
        // Otherdata,
        first_name: Otherdata.first_name,
        other_img: Otherdata.other_img?Otherdata.other_img:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        id: Otherdata.id
      });
      return response;
      // })
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Other creation failed",
        503,
        "",
        {}
      );
      return response;
    }
  },

};