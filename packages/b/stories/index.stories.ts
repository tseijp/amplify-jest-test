import { b } from "..";

export default { title: 'b', component: b }
export const B1 = () => b();
export const B2 = () => b(true);

B1.storyName = "b"
B2.storyName = "B"
