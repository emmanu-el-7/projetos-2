const express = require("express");
const router = express.Router();

//controller
const {
  register,
  login,
  getCurrentUser,
  update,
  getUserById,
} = require("../controllers/UserController");

//middleware
const validate = require("../middlewares/handleValidation");
const {
  userCreateValidation,
  loginValidation,
  userUpdateValidation, //***** */
} = require("../middlewares/userValidations");
const authGuard = require("../middlewares/authGuard");
const { imageUpload } = require("../middlewares/imageUpload");

//rotas
router.post("/register", userCreateValidation(), validate, register); //será uma rota de post, define-se o caminho e associa-se a função
router.post("/login", loginValidation(), validate, login);
router.get("/profile", authGuard, getCurrentUser);
router.put(
  "/",
  authGuard,
  userUpdateValidation(),
  validate,
  imageUpload.single("profileImage"),
  update
);
//desta vez a rota possui um parâmetro dinâmico, definido por "/:id"
//esta rota rota também não necessita de middlewares, porque qualquer usuário pode ver qualquer perfil de usuário
router.get("/:id", getUserById);

module.exports = router;
