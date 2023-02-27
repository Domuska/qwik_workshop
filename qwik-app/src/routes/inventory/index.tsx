import {
  component$,
  useSignal,
  useStore,
  useStylesScoped$,
} from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Form } from "@builder.io/qwik-city";

import { useAddItem } from "../index";
import styles from "./inventory.css?inline";

export default component$(
  ({ title, state }: { title: string; state: { items: string[] } }) => {
    useStylesScoped$(styles);
    const inputRef = useSignal<HTMLInputElement>();

    //   const state = useStore<{ items: string[] }>({
    //     items: [],
    //   });
    console.log("state is", state);
    const action = useAddItem();

    return (
      <>
        <p>{title}</p>
        {state.items.map((item) => (
          <p
            style="cursor: pointer"
            onClick$={() => {
              state.items = state.items.filter((i) => i !== item);
            }}
          >
            {item}
          </p>
        ))}

        <div>
          <Form action={action}>
            <input
              ref={inputRef}
              placeholder="name of stuff"
              name="item"
            ></input>
            <button
              type="submit"
              // onClick$={() => {
              //   console.log(state.items);
              //   //   state.items = state.items.concat(inputRef.value?.value || "");
              //   // useAddItem(inputRef.value?.value || "");

              // }}
            >
              Click me
            </button>
          </Form>
        </div>
      </>
    );
  }
);

// export default component$(() => {
//   const store = useStore(
//     {
//       letters: ["A", "B", "C"],
//     },
//     { recursive: true }
//   );

//   return (
//     <>
//       {store.letters.map((letter) => (
//         <p>{letter}</p>
//       ))}
//       <button
//         onClick$={() => {
//           store.letters[2] = "Z";
//         }}
//       >
//         Click me
//       </button>
//     </>
//   );
// });

export const head: DocumentHead = {
  title: "Qwik Inventory",
};
