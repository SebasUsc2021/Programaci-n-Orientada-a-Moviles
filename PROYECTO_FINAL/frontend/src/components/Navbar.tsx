import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Menu, MenuItem } from "react-native-material-menu";

interface Props {
  hasGoBack?: boolean;
  handleGoBack?: () => void;
  hasMenu?: boolean;
  handleMenu?: () => void;
}

const Navbar: FC<Props> = ({
  handleGoBack,
  handleMenu,
  hasMenu,
  hasGoBack,
}) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 15,
      }}
    >
      {hasGoBack ? (
        <TouchableOpacity onPress={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} size={30} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {hasMenu && handleMenu && (
        <Menu
          visible={visible}
          anchor={
            <TouchableOpacity onPress={showMenu}>
              <FontAwesomeIcon icon={faEllipsisV} size={30} />
            </TouchableOpacity>
          }
          onRequestClose={hideMenu}
        >
          <MenuItem
            onPress={() => {
              handleMenu();
              setVisible(false);
            }}
          >
            CERRAR SESIÓN
          </MenuItem>
        </Menu>
      )}
    </View>
  );
};

export default Navbar;
