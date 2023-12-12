import { createSignal, type Component, createEffect, on } from "solid-js";
import Counter from "./Counter";
import prices from "../prices";
import Window from "./Window";
import createTween from "@solid-primitives/tween";

const Calculator: Component = () => {
  const [price, setPrice] = createSignal(0);
  const tweenedPrice = createTween(price, { duration: 500, ease: (n) => n });
  const [floor, setFloor] = createSignal(0);
  const [screens, setScreens] = createSignal(0);
  const [ladder, setLadder] = createSignal(false);

  const [tier, setTier] = createSignal(0);
  const [door, setDoor] = createSignal(0);
  const [lgStoreFront, setLgStoreFront] = createSignal(0);
  const [attic, setAttic] = createSignal(0);
  const [french, setFrench] = createSignal(0);
  const [midStoreFront, setMidStoreFront] = createSignal(0);
  const [teller, setTeller] = createSignal(0);
  const [overheadOrSlim, setOverheadOrSlim] = createSignal(0);

  const [anything, setAnything] = createSignal(0);
  const [anythingPrice, setAnythingPrice] = createSignal(0);

  const changeFloor = (e: InputEvent) => {
    const target = e.target as HTMLInputElement;
    setFloor(+target.value);
  };

  createEffect(() => {
    setPrice(
      floor() +
        screens() * prices.screen +
        (ladder() ? prices.ladder : 0) +
        tier() * prices.tier +
        door() * prices.door +
        attic() * prices.attic +
        french() * prices.french +
        lgStoreFront() * prices.lgStoreFront +
        midStoreFront() * prices.midStoreFront +
        overheadOrSlim() * prices.overheadOrSlim +
        teller() * prices.teller +
        anything() * anythingPrice(),
    );
  });

  return (
    <div class="mb-30">
      <section class="card shadow-lg mt-10 b-3">
        <div class="card-body">
          <h2 class="text-3xl font-bold card-title mx-auto">Questions</h2>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text text-xl">
                Number of floors above ground?
              </span>
              <select
                onChange={changeFloor}
                class="select select-bordered select-secondary"
              >
                <option value={prices.firstFloor}>1 Floor</option>
                <option value={prices.secondFloor}>2 Floor</option>
                <option value={prices.thirdFloor}>3 Floor</option>
              </select>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text text-xl">Are there any screens?</span>
              <Counter signal={screens} setSignal={setScreens}></Counter>
            </label>
          </div>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text text-xl">
                Any interior windows require a ladder?
              </span>
              <input
                type="checkbox"
                class="checkbox checkbox-secondary"
                onChange={(e) => setLadder(e.target.checked)}
              />
            </label>
          </div>
        </div>
      </section>
      <section class="card shadow-lg mt-10 b-3">
        <div class="card-body">
          <h2 class="text-3xl font-bold card-title mx-auto">Windows</h2>
          <div class="grid gap-5 md:grid-cols-2 grid-cols-1">
            <Window img="tier.svg" price={prices.tier} signal={[tier, setTier]}>
              2 Tier windows
            </Window>
            <Window img="door.svg" price={prices.door} signal={[door, setDoor]}>
              Door
            </Window>
            <Window
              img="lgShopFront.svg"
              price={prices.lgStoreFront}
              signal={[lgStoreFront, setLgStoreFront]}
            >
              Large Store Front
            </Window>
            <Window
              img="attic.svg"
              price={prices.attic}
              signal={[attic, setAttic]}
            >
              Second Story Attic Window (Exterior Only)
            </Window>
            <Window
              img="french.svg"
              price={prices.french}
              signal={[french, setFrench]}
            >
              French Pane Window
            </Window>
            <Window
              img="midShopFront.svg"
              price={prices.midStoreFront}
              signal={[midStoreFront, setMidStoreFront]}
            >
              Medium Store Front
            </Window>
            <Window
              img="teller.svg"
              price={prices.teller}
              signal={[teller, setTeller]}
            >
              Bank Teller Windows (Exterior Only)
            </Window>
            <Window
              img="overhead.svg"
              price={prices.overheadOrSlim}
              signal={[overheadOrSlim, setOverheadOrSlim]}
            >
              Medium Overhead / Slim
            </Window>

            <Window
              class="md:col-span-2"
              priceSignal={[anythingPrice, setAnythingPrice]}
              signal={[anything, setAnything]}
            >
              Miscellaneous
            </Window>
          </div>
        </div>
      </section>
      <div class="mt-10 w-full flex flex-center">
        <button
          class="btn mb-10 btn-primary px-50"
          onClick={() => window.location.reload()}
        >
          Reset
        </button>
      </div>
      <section class="bg-white p-10 w-screen b-3 fixed bottom-0 left-0 right-0">
        <h2 class="text-3xl font-bold ml-5">Total</h2>
        <h2 class="text-6xl font-bold absolute absolute-center">
          ${Math.round(tweenedPrice() * 10) / 10}
        </h2>
      </section>
    </div>
  );
};

export default Calculator;
