import { type Component, type Signal, type JSX, Show } from "solid-js";
import Counter from "./Counter";

const Window: Component<{
  img?: string;
  price?: number;
  priceSignal?: Signal<number>;
  signal: Signal<number>;
  children: JSX.Element;
  class?: any;
}> = (props) => {
  return (
    <div
      class={`flex flex-center flex-col gap-5 bg-zinc-1 rounded-box p-5 shadow-inset ${props.class}`}
    >
      <h3 class="text-center font-bold text-2xl">
        {props.children} {props.price ? "$" + props.price : ""}
      </h3>
      <Show when={!props.price}>
        <h4 class="text-center font-bold text-xl">Price</h4>
        <Counter
          signal={props.priceSignal[0]}
          setSignal={props.priceSignal[1]}
        ></Counter>
        <h4 class="text-center font-bold text-xl">Count</h4>
      </Show>
      <Show when={props.img}>
        <img class="h-30 max-w-50" src={"/images/" + props.img}></img>
      </Show>
      <Counter signal={props.signal[0]} setSignal={props.signal[1]}></Counter>
    </div>
  );
};

export default Window;
