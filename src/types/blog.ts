import type { MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";
import { Tag } from "./Tag";

export type Post = {
    thumb?: MicroCMSImage;
    title?: string;
    tag: (MicroCMSListContent & Tag) | null;
    text?: string;
};