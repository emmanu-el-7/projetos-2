import "./Navbar.css";

import { NavLink } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs"; //importação dos ícones da biblioteca Bootstrap

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
  const { auth } = useAuth(); //pegamos a informação sobre autenticação do nosso hook
  const { user } = useSelector((state) => state.auth); //pegamos o usuário do initialState do slice

  const navigate = useNavigate();

  const dispatch = useDispatch(); //o dispatch é quem nos possibilita chamarmos as funções Redux

  const handleLogout = () => {
    //ação única de logout do sistema
    dispatch(logout());
    dispatch(reset());

    navigate("login"); //depois da desconexão, redirecionamos o usuário para a tela de login
  };

  return (
    <nav id="nav">
      <NavLink to={"/"}>InstaUFSC</NavLink>
      <form id="search-form">
        <BsSearch />
        <input type="text" placeholder="Pesquisar" />
      </form>
      <ul id="nav-links">
        {auth ? (
          <>
            <li>
              <NavLink to={"/"}>
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {/* link para a página de usuário */}
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            {/* link para a página de perfil de usuário */}
            <li>
              <NavLink to={"/profile"}>
                <BsFillPersonFill />
              </NavLink>
            </li>
            {/* link para o logout */}
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to={"/login"}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to={"/register"}>Cadastrar</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
