import { Fragment, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import UserData from "../../helper/UserData";
const HomeModuls = () => {
  const [user, setUser] = useState(UserData);
  const [like, setLike] = useState(0);
  const [dislike, seDistlike] = useState(0);

  const likeUser = (index) => {
    const temp = [...user];
    temp[index].like += 1;
    setUser(temp);
    setLike((like) => like + 1);
  };
  const dislikeUser = (index) => {
    const temp = [...user];
    temp[index].dislike += 1;
    setUser(temp);
    seDistlike((dislike) => dislike + 1);
  };
  return (
    <Fragment>
      {user.map((el, i) => (
        <Card
          key={i}
          text={el.name}
          image={el.image}
          like={el.like}
          dislike={el.dislike}
        >
          <div className="flex flex-row  justify-around">
            <Button
              onClick={() => dislikeUser(i)}
              text="Dislike"
              className="w-20 h-9 bg-red-600 text-white font-medium text-xs leading-tight rounded  hover:bg-red-700 hover:shadow-lg  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            />
            <Button
              onClick={() => likeUser(i)}
              text="Like"
              className="w-20 h-9 bg-green-600 text-white font-medium text-xs leading-tight rounded  hover:bg-green-700 hover:shadow-lg  focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            />
          </div>
        </Card>
      ))}

      <div>
        <h1 className="text-xl font-bold">Total Like : {like} </h1>
        <h1 className="text-xl font-bold">Total Dislike : {dislike} </h1>
      </div>
    </Fragment>
  );
};

export default HomeModuls;
