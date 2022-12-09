const Other = require("../Model/other");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");
module.exports = {
    otherLoginService: async function (email, password) {
    try {
      const result = await Other.find({ email: email });
      if (result.length == 1) {
        if (
          result[0].method == "local" &&
          result[0].local.password != password
        ) {
          const response = new Response(
            false,
            "Wrong Credentials",
            503,
            "",
            {}
          );
          return response;
        }
        let jwtSecretKey = process.env.SECRET_KEY;
        let data = {
          user: result[0],
          role: "admin",
        };
        const token = jwt.sign(data, jwtSecretKey);
        const response = new Response(true, "Other Login Successfull", 200, token, {
          first_name: result[0].first_name,
          last_name: result[0].last_name,
          admin_img: result[0].admin_img,
          id: result[0].id,
        });
        return response;
      } else if (result.length > 1) {
        const response = new Response(false, "Contact Admin", 500, "", {});
        return response;
      } else {
        const response = new Response(false, "Wrong Credentials", 503, "", {});
        return response;
      }
    } catch (error) {
      console.log(error);
      const response = new Response(
        false,
        "Something went wrong.",
        500,
        "",
        {}
      );
      return response;
    }
  },
  
};
