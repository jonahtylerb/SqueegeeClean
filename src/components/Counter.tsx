import type { Component, Signal } from "solid-js";

const Counter: Component<{
  signal: Signal<number>[0];
  setSignal: Signal<number>[1];
}> = (props) => {
  return (
    <div class="join gap-1 flex items-center">
      <button
        onClick={() => props.setSignal((n) => n + 1)}
        class="btn join-item btn-neutral"
      >
        +
      </button>
      <input
        type="text"
        pattern="[0-9]*"
        class="join-item font-bold w-20 text-center text-xl input"
        inputMode="numeric"
        value={props.signal()}
        onInput={(e) => props.setSignal(+e.currentTarget.value)}
      />
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
