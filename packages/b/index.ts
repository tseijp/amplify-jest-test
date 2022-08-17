import { a } from "@amplify-jest-test/a";
export const b = (isBig=false)  => a(isBig) + (isBig? "B" : "b");