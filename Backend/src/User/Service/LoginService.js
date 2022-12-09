const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");
module.exports = {
  loginService: async function (email, password) {
    try {
      const result = await User.find({ email: email });
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
          role: "user",
        };
        const token = jwt.sign(data, jwtSecretKey);
        const response = new Response(true, "Login Successfull", 200, token, {
          first_name: result[0].first_name,
          user_img: result[0].user_img
            ? result[0].user_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
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
