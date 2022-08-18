import { a } from "..";

export default { title: 'a', component: a, }
export const A1 = () => a();
export const A2 = () => a(true);

A1.storyName = "a"
A2.storyName = "A"
