import { Child } from "./Child";

const Parent = () => {
  return (
    <Child color='red' onClick={() => console.log("clicked")}>
      <div>Hello</div>
    </Child>
  );
};

export default Parent;
