import type { Component, Signal, JSX } from "solid-js";
import Counter from "./Counter";

const Window: Component<{
  img: string;
  price: number;
  signal: Signal<number>;
  children: JSX.Element;
}> = (props) => {
  return (
    <div class="flex flex-center flex-col gap-5 bg-zinc-1 rounded-box p-5 shadow-inset">
      <h3 class="text-center font-bold text-2xl">
        {props.children} ${props.price}
      </h3>
      <img class="h-30 max-w-50" src={"/images/" + props.img}></img>
      <Counter signal={props.signal[0]} setSignal={props.signal[1]}></Counter>
    </div>
  );
};

export default Window;
