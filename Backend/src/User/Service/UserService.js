const User = require("../Model/user");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");

module.exports = {
  createUserLocal: async function (email, password, first_name, last_name) {
    console.log("email", email);
    try {
      const user = await User.find({ email: email });
      if (user.length > 0) {
        const response = new Response(
          false,
          "User already exist with the given email id.",
          503,
          "",
          {}
        );
        return response;
      }
      const userBody = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        method: "local",
        local: {
          password: password,
        },
      };
      const userdata = await User.create(userBody);

      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: userdata,
        role: "user",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(
        true,
        "User created successfully",
        200,
        token,
        {
          first_name: userdata.first_name,
          user_img: userdata.user_img
            ? userdata.user_img
            : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
          id: userdata.id,
        }
      );
      return response;
    } catch (err) {
      console.log(err);
      const response = new Response(false, "User creation failed", 503, "", {});
      return response;
    }
  },
};
