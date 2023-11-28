import type { Component, Signal } from "solid-js";

const Counter: Component<{
  signal: Signal<number>[0];
  setSignal: Signal<number>[1];
}> = (props) => {
  return (
    <div class="join gap-2 flex items-center">
      <button
        onClick={() => props.setSignal((n) => n + 1)}
        class="btn join-item btn-neutral"
      >
        +
      </button>
      <div class="join-item font-bold text-xl">{props.signal()}</div>
      <button
        onClick={() => props.setSignal((n) => (n - 1 < 0 ? 0 : n - 1))}
        class="btn join-item btn-neutral"
      >
        -
      </button>
    </div>
  );
};

export default Counter;
