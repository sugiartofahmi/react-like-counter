import CardLayout from "../../layouts/CardLayout";

const Card = ({ image, text, like, dislike, children }) => {
  return (
    <CardLayout>
      <img className="mx-auto rounded-full h-50" src={image} alt="" />
      <h1 className=" text-xl text-center font-bold uppercase text-grey-800 ">
        {text}
      </h1>
      <div className="flex flex-row justify-center items-center gap-x-5">
        <h2>Dislike : {dislike}</h2>
        <h2>Like : {like}</h2>
      </div>
      {children}
    </CardLayout>
  );
};

export default Card;
