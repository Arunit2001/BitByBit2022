const Admin = require("../Model/admin");
const jwt = require("jsonwebtoken");
const Response = require("../../../util/response");

module.exports = {
  createAdminLocal: async function (email, password, first_name, last_name) {
    console.log("email", email);
    try {
      const admin = await Admin.find({ email: email });
      if (admin.length > 0) {
        const response = new Response(
          false,
          "User already exist with the given email id.",
          503,
          "",
          {}
        );
        return response;
      }
      const adminBody = {
        email: email,
        first_name: first_name,
        last_name: last_name,
        method: "local",
        local: {
          password: password,
        },
      };
      console.log(adminBody);
      const admindata = await Admin.create(adminBody);

      let jwtSecretKey = process.env.SECRET_KEY;
      let data = {
        user: admindata,
        role: "admin",
      };
      const token = jwt.sign(data, jwtSecretKey);
      const response = new Response(true, "Admin is created", 200, token, {
        first_name: admindata.first_name,
        admin_img: admindata.admin_img
          ? admindata.admin_img
          : "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
        id: admindata.id,
      });
      return response;
    } catch (err) {
      console.log(err);
      const response = new Response(
        false,
        "Admin creation failed",
        503,
        "",
        {}
      );
      return response;
    }
  },
};
