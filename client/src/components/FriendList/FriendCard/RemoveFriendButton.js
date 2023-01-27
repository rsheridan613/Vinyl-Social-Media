import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";

import { REMOVE_FRIEND } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

const RemoveFriendButton = (props) => {
  const [removeFriend, { error }] = useMutation(REMOVE_FRIEND);

  const userId = Auth.getProfile().data._id;

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const { data } = await removeFriend({
        variables: { userId: userId, friendId: props.friendId },
      });

      window.location.reload();
    } catch (error) {
      console.log(JSON.stringify(error));
    }
  };

  return <Button onClick={handleClick}>Remove Friend</Button>;
};

export default RemoveFriendButton;
