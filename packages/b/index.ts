import a from "@amplify-jest-test/a";

export default function b (isBig=false) {
  return a(isBig) + (isBig? "B" : "b");
}