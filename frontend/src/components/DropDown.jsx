import { Menu, MenuButton, MenuItem, MenuItems, MenuSeparator } from '@headlessui/react'
import { Link } from "react-router-dom";
import React from 'react';


const DropDown = () => {
  return (
    <Menu>
      <MenuButton>
        <img src="./avatar.svg" alt="" className="h-7 bg-white rounded-full"/>
      </MenuButton>
      <MenuItems anchor="bottom end" className="bg-white text-black rounded-lg shadow-lg p-2 border w-48">
        <MenuItem>
          <Link className="block data-focus:bg-blue-100 p-1" to="/login">
            Se connecter
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100 p-1" to="/signup">
            S'inscrire
          </Link>
        </MenuItem>
        <MenuSeparator className="my-1 h-px bg-black"/>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100 p-1" to="/settings">
            Réglages
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100 p-1" to="/contact">
            Contact
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100 p-1" to="/about">
            À propos
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}

export default DropDown;