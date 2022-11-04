import Card from '../Card';

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <p>

        This is one of the most popular accounts on the platform. It seems to have been started by an individual and follows a select group of pages.
        One of its most popular posts is a picture of a cat with the caption:
        "This is why cats are better than dogs."
      </p>

      <div className="Flex">
        <div className="Flex">
          <Card name="Bubble" colour="#18551D" text={true} image={"Cat1"} buttonText={"Cat Button"} /></div>
        <div className="Flex">
          <Card name="Bobby" colour="#505518" text={false} image={"Dog1"} buttonText={"Doggy Button"} /></div>
        <div className="Flex">
          <Card name="Lap" colour="#185055" text={true} image={"Dog2"} buttonText={"Doggy Button"} /></div>
      </div>
    </div>
  );
}

export default Home;