declare module "page-flip/dist/js/page-flip.module.js" {
  export class PageFlip {
    constructor(el: HTMLElement, settings: Record<string, unknown>);
    loadFromHTML(pages: NodeListOf<Element> | HTMLElement[]): void;
    destroy(): void;
    flipNext(corner?: string): void;
    flipPrev(corner?: string): void;
    turnToPage(page: number): void;
    getCurrentPageIndex(): number;
    getPageCount(): number;
    on(event: string, cb: (e: { data: unknown; object: PageFlip }) => void): this;
    off(event: string): void;
    update(): void;
    getOrientation(): "portrait" | "landscape";
  }
}
