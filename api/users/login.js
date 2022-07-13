import connectToMongodb from "../_database/connect-to-mongodb";
import { User } from "../_database/models/index.js";

const handler = async (request, response) => {
  try {
    await connectToMongodb();
    const user = await User.findOne({
      nickName: request.body.nickName,
    });
    return response.json(user);
  } catch (error) {
    return response.status(500).json({ message: "Server Error" });
  }
};
export default handler;
