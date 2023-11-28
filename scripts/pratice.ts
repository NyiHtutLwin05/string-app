let hero: string;

function addTwo(num: number) {
  return num + 2;
}

addTwo(5);

const FunctionAdd = (s: string): string => {
  console.log(s);
};

FunctionAdd("apt");

const heros = ["Thor", "Superman", "IronMan"];
heros.map((h) => {
  return `hero is ${h}`;
});
export {};
